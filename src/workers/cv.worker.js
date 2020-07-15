if (process.env.BROWSER) {
  import('./opencv-4-3-0.js');
  import('./haarcascade_frontalface_default.xml');

  async function createFileFromUrl(path, url) {
    // Small function to make a remote file visible from emscripten module.

    console.log(`⬇️ Downloading additional file from ${url}.`);
    const res = await self.fetch(url);
    if (!res.ok) {
      throw new Error(
        `Response is not OK (${res.status} ${res.statusText} for ${url})`
      );
    }
    const buffer = await res.arrayBuffer();
    const data = new Uint8Array(buffer);
    cv.FS_createDataFile('/', path, data, true, true, false);
    console.log(`📦${url} downloaded. Mounted on /${path}`);
  }

  let classifier = null;
  let eigenRecognizer;

  /**
   * With OpenCV we have to work the images as cv.Mat (matrices),
   * so the first thing we have to do is to transform the
   * ImageData to a type that openCV can recognize.
   */
  function imageProcessing({ msg, payload }) {
    let dst = cv.matFromImageData(payload);
    let gray = new cv.Mat();

    // What this does is convert the image to a grey scale.
    cv.cvtColor(dst, gray, cv.COLOR_RGBA2GRAY, 0);

    // detect faces.
    let faces = new cv.RectVector();
    // console.log(cv.xmodules);

    classifier.detectMultiScale(gray, faces, 1.1, 3, 0);
    // draw faces.
    for (let i = 0; i < faces.size(); ++i) {
      let face = faces.get(i);
      let point1 = new cv.Point(face.x, face.y);
      let point2 = new cv.Point(face.x + face.width, face.y + face.height);
      cv.rectangle(dst, point1, point2, [0, 255, 0, 255]);
    }
    // let src = cv.Mat.eye(400, 400, 0);
    // let dst = new cv.Mat();
    // dst = result.roi(faces.get(0));
    // cv.imshow('canvasOutput', dst);
    postMessage({ msg, payload: imageDataFromMat(dst) });
    // delete img;
    // delete result;
    // delete dst;
    // delete faces;
    // delete classifier;
  }

  /**
   * This function is to convert again from cv.Mat to ImageData
   */
  function imageDataFromMat(mat) {
    // convert the mat type to cv.CV_8U
    const img = new cv.Mat();
    const depth = mat.type() % 8;
    const scale =
      depth <= cv.CV_8S ? 1.0 : depth <= cv.CV_32S ? 1.0 / 256.0 : 255.0;
    const shift = depth === cv.CV_8S || depth === cv.CV_16S ? 128.0 : 0.0;
    mat.convertTo(img, cv.CV_8U, scale, shift);

    // convert the img type to cv.CV_8UC4
    switch (img.type()) {
      case cv.CV_8UC1:
        cv.cvtColor(img, img, cv.COLOR_GRAY2RGBA);
        break;
      case cv.CV_8UC3:
        cv.cvtColor(img, img, cv.COLOR_RGB2RGBA);
        break;
      case cv.CV_8UC4:
        break;
      default:
        throw new Error(
          'Bad number of channels (Source image must have 1, 3 or 4 channels)'
        );
    }
    const clampedArray = new ImageData(
      new Uint8ClampedArray(img.data),
      img.cols,
      img.rows
    );
    img.delete();
    return clampedArray;
  }

  /**
   *  Here we will check from time to time if we can access the OpenCV
   *  functions. We will return in a callback if it has been resolved
   *  well (true) or if there has been a timeout (false).
   */
  function waitForOpencv(callbackFn, waitTimeMs = 30000, stepTimeMs = 1000) {
    if (cv.Mat) callbackFn(true);

    let timeSpentMs = 0;
    const interval = setInterval(async () => {
      const limitReached = timeSpentMs > waitTimeMs;
      if (cv.Mat || limitReached) {
        await createFileFromUrl('haarcascade_frontalface_default.xml', '/public/js/haarcascade_frontalface_default.xml');
        classifier = new cv.CascadeClassifier();
        // eigenRecognizer = new cv.EigenFaceRecognizer();
        classifier.load('haarcascade_frontalface_default.xml');
        clearInterval(interval);
        return callbackFn(!limitReached);
      } else {
        timeSpentMs += stepTimeMs;
      }
    }, stepTimeMs);
  }

  /**
   * This exists to capture all the events that are thrown out of the worker
   * into the worker. Without this, there would be no communication possible
   * with our project.
   * Properties
   * https://developer.mozilla.org/en-US/docs/Web/API/Worker/onmessage
   * Methods
   * https://developer.mozilla.org/en-US/docs/Web/API/Worker/postMessage
   */
  self.onmessage = (e) => {
    // console.log(e);
    switch (e.data.msg) {
      case 'load': {
        // Import Webassembly script
        self.importScripts('/public/js/opencv-4-3-0.js');
        cv = cv();
        waitForOpencv((success) => {
          // console.log(e);
          if (success) {
            postMessage({ msg: e.data.msg });
          } else throw new Error('Error on loading OpenCV');
        });
        break;
      }
      case 'imageProcessing':
        return imageProcessing(e.data);
      default:
        break;
    }
  };
}
