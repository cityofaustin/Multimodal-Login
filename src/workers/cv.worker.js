import delay from '../util/delay';

const publicPath = process.env.FE ? '' : '/public';
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

  function imageProcessing2({ msg, payload }) {
    // Segmenting the hand and extracting the ROI
    // 1 Segment the hand using Skin-Color model algorithm
    let segmentedImage = doPreprocessing(payload);

    // 2 TODO: finding important points on the hand
    // Keypoints struct_keypoints = findKeypoints(segmentedImage);
    // const keypoints = findKeypoints(segmentedImage);

    // 3 TODO: finding bounding box for the palm
    // extractedRoi = calcSquareRoi(struct_keypoints);

    // TODO: Extracting features from the ROI
    // TODO: Matching the extracted feature (1:N)

    // detect faces.
    // let faces = new cv.RectVector();
    // console.log(cv.xmodules);

    // classifier.detectMultiScale(gray, faces, 1.1, 3, 0);
    // draw faces.
    // for (let i = 0; i < faces.size(); ++i) {
    //   let face = faces.get(i);
    //   let point1 = new cv.Point(face.x, face.y);
    //   let point2 = new cv.Point(face.x + face.width, face.y + face.height);
    //   cv.rectangle(dst, point1, point2, [0, 255, 0, 255]);
    // }
    // let src = cv.Mat.eye(400, 400, 0);
    // let dst = new cv.Mat();
    // dst = result.roi(faces.get(0));
    // cv.imshow('canvasOutput', dst);
    // rgbImg.delete();
    // debugger;
    postMessage({ msg, payload: imageDataFromMat(segmentedImage) });
  }

  function doPreprocessing(inputImage) {
    let rgbaImg = cv.matFromImageData(inputImage); // cv.Mat
    let rgbImg = new cv.Mat();
    cv.cvtColor(rgbaImg, rgbImg, cv.COLOR_RGBA2RGB);
    cv.resize(rgbImg, rgbImg, new cv.Size(640, 480));
    // cv.cvtColor(rgbImg, rgbImg, cv.COLOR_BGR2HSV);
    let ycbcrImg = new cv.Mat(); // cv.Mat
    // Convert original image to YCbCr color space
    cv.cvtColor(rgbImg, ycbcrImg, cv.COLOR_RGB2YCrCb);
    // Parameters of the skin-color model
    let c11 = 0.0479;
    let c12 = 0.0259;
    let c21 = 0.0259;
    let c22 = 0.0212;
    let k1 = 0.0;
    let k2 = 0.0;
    let x1, x2;
    let m1 = 113.9454;
    let m2 = 157.5052;
    let f1, f2;
    let thresholded = new cv.Mat(
      ycbcrImg.rows,
      ycbcrImg.cols,
      cv.CV_8UC1,
      new cv.Scalar(0)
    );
    // thresholded.setTo(new cv.Scalar(0));
    //Segmenting the hand
    let p = 0;
    // console.log(ycbcrImg.data);
    // debugger;
    for (let row = 0; row < ycbcrImg.rows; row++) {
      for (let col = 0; col < ycbcrImg.cols; col++) {
        // not sure about this part, values are a little different than c++
        // x1 = ycbcrImg.data[(row * col * ycbcrImg.channels()) + 2];
        // x2 = ycbcrImg.data[(row * col * ycbcrImg.channels()) + 1];
        x1 = ycbcrImg.ucharPtr(row, col)[2];
        x2 = ycbcrImg.ucharPtr(row, col)[1];
        // x1 = ycbcrImg.data[col * ycbcrImg.rows * ycbcrImg.channels() + col * ycbcrImg.channels() + 2];
        // x2 = ycbcrImg.data[col * ycbcrImg.rows * ycbcrImg.channels() + col * ycbcrImg.channels() + 1];
        f1 = -0.5 * (x1 - m1);
        f2 = -0.5 * (x2 - m2);
        k1 = f1 * c11 + f2 * c21;
        k2 = f1 * c12 + f2 * c22;
        // Probability of the pixel that belongs to a skin region
        p = Math.exp(k1 * (x1 - m1) + k2 * (x2 - m2));
        if (p > 0.15) {
          thresholded.ucharPtr(row, col)[0] = 255;
          thresholded.ucharPtr(row, col)[1] = 255;
          thresholded.ucharPtr(row, col)[2] = 255;
          // thresholded.data[row * col] = 255;
        }
        if(row == 42 && col ==344) {
          // debugger;
        }
        if(row == 201 && col >= 605 && col < 611) {
          // debugger;
        }
      }
    }
    // cv.rectangle(thresholded, {x:489,y:99 }, {x:589,y:99}, [255, 255, 255, 255]);
    return ycbcrImg;
  }

  function findKeypoints(segmentedImage) {
    console.log('finding keypoints');
    let rect = new cv.Rect(0,0,segmentedImage.cols - 150,segmentedImage.rows);
    let leftSide = new cv.Mat();
    leftSide = segmentedImage.roi(rect);
    // Get boundary points, by applying boundary tracking alogirthm
    console.log('getting boundary');
    let boundaryVector = getBoundary(leftSide);
    // Find start and end points (vertically) at left side of the image
    let startPoint = new cv.Point(-1, -1);
    let endPoint = new cv.Point(-1, -1);
    let foundStart = false;
    return leftSide;
    // for (int i = 0; i < leftSide.rows; ++i){
    //   if (foundStart){
    //     if (leftSide.at<uchar>(i, leftSide.cols - 1) == 0){
    //       startPoint.x = leftSide.cols - 1;
    //       startPoint.y = i;
    //       break;
    //     }
    //   }
    //   else{
    //     if (leftSide.at<uchar>(i, leftSide.cols - 1) == 255){
    //       foundStart = true;
    //       endPoint.x = leftSide.cols - 1;
    //       endPoint.y = i;
    //     }
    //   }
    // }
    //    //Check if startPoint and endPoint was successfuly found
    //    if(startPoint.x == -1 && startPoint.y == -1 || endPoint.x == -1 && endPoint.y == -1){
    //     throw PPAException("Keypoints not found.");
    // }

    // // Find the center point (vertically) at right side of the image
    // Point centerPoint(leftSide.cols, (startPoint.y + endPoint.y) / 2);
    // circle(inputImage, centerPoint, 2, CV_RGB(0, 255, 0), -1);

    // // Calculate dinstances between the center points and every boundary point
    // vector<Point_with_distance> distancesFromCenterPoint;

    // for (int i = 0; i < boundaryVector.size(); ++i){
    //   Point_with_distance p;
    //   p.point.x = boundaryVector.at(i).x;
    //   p.point.y = boundaryVector.at(i).y;

    //   p.distance = sqrt(pow(centerPoint.x - p.point.x, 2) + pow(centerPoint.y - p.point.y, 2));
    //   distancesFromCenterPoint.push_back(p);
    // }

    // // Finding the local minimums on the distance function, these will be keypoints
    // // Applying a Mean filter on distance function, to get rid of false local minimums

    // vector<Point_with_distance> filtered_distances = distancesFromCenterPoint;

    // double sum = 0.0;
    //   double kernel_size = 5;

    //   for (int index = 2; index < distancesFromCenterPoint.size() - 2; index++){
    //   sum = distancesFromCenterPoint.at(index - 2).distance + distancesFromCenterPoint.at(index - 1).distance + distancesFromCenterPoint.at(index).distance + distancesFromCenterPoint.at(index + 1).distance + distancesFromCenterPoint.at(index + 2).distance;
    //   filtered_distances.at(index).distance = sum / kernel_size;
    // }

    // // Searcing for local minimums, with a predefined stepsize,
    // // Check if the stepsize'th previous point is bigger than the current points and the stepsize'th next point is also bigger than the current point
    // // If the previous condition is true, then the current point will be stored as a local minimum

    // int stepsize = 50;
    // vector<Point_with_distance> minimums;

    // if (filtered_distances.size() < 500) throw PPAException("Boundary not found.");

    // for (int i = stepsize; i < filtered_distances.size() - stepsize; ++i){
    //   if (filtered_distances.at(i - stepsize).distance > filtered_distances.at(i).distance && filtered_distances.at(i + stepsize).distance > filtered_distances.at(i).distance)
    //   {
    //     Point_with_distance temp;
    //     temp.point = filtered_distances.at(i).point;
    //     temp.distance = filtered_distances.at(i).distance;

    //     minimums.push_back(temp);
    //   }
    // }

    // // Creating three clusters, these will contain local minimum points around the keypoints (valleys between fingers)
    // // Iterating through the local minimums, if the distance is higher than 10 pixels between the next and current point, then the next point will be classified into a new cluster,
    // // otherwise, it will be classified into the current cluster

    // vector<vector<Point_with_distance>> min_clusters;
    // vector<Point_with_distance> temp_row;
    // for (int i = 0; i < minimums.size() - 1; ++i){
    //   Point_with_distance current, next;
    //   current = minimums.at(i);
    //   next = minimums.at(i + 1);
    //   float dist = sqrt(pow(current.point.x - next.point.x, 2) + pow(current.point.y - next.point.y, 2));
    //   if (dist > 10){
    //     min_clusters.push_back(temp_row);
    //     temp_row.clear();
    //   }
    //   else{
    //     temp_row.push_back(current);
    //   }
    // }

    // if (temp_row.size() != 0) min_clusters.push_back(temp_row);

    // // Returning this struct
    // Keypoints keypoints;

    // // If the number of the clusters isn't four, then something went wrong
    // if (min_clusters.size() != 4) {
    //   keypoints.success = false;
    //   throw PPAException("Keypoints not found.");
    // }
    // else{

    //   // Search minimums in the clusters, based on the distance from the center point. These will be the keypoints.

    //   Point_with_distance keypoint1, keypoint2, keypoint3;
    //   keypoint1 = *min_element(min_clusters[1].begin(), min_clusters[1].end(), [](const Point_with_distance& x, const Point_with_distance& y) {return x.distance < y.distance; });
    //   circle(inputImage, keypoint1.point, 2, CV_RGB(255, 0, 0), -1);

    //   keypoint2 = *min_element(min_clusters[2].begin(), min_clusters[2].end(), [](const Point_with_distance& x, const Point_with_distance& y) {return x.distance < y.distance; });
    //   circle(inputImage, keypoint2.point, 2, CV_RGB(0, 255, 0), -1);

    //   keypoint3 = *min_element(min_clusters[3].begin(), min_clusters[3].end(), [](const Point_with_distance& x, const Point_with_distance& y) {return x.distance < y.distance; });
    //   circle(inputImage, keypoint3.point, 2, CV_RGB(0, 0, 255), -1);

    //   keypoints.centerPoint = centerPoint;
    //   keypoints.keypoint1 = keypoint1.point;
    //   keypoints.keypoint2 = keypoint2.point;
    //   keypoints.keypoint3 = keypoint3.point;
    //   keypoints.success = true;
    // }

    // return keypoints;
  }

  async function getBoundary(img) {
    let boundaryVector = [];

    let startingPoint = new cv.Point(-1, -1);
    let size = img.size();
    for (let y = 0; y < size.height; ++y) {
      if (img.ucharPtr(y, size.width-1)[0] === 255) {
        startingPoint.x = size.width - 1;
        startingPoint.y = y;
        break;
      }
    }

    // Check if the startingPoint was found
    if (startingPoint.x === -1 && startingPoint.y === -1) {
      throw 'Boundary starting point not found';
    }

    boundaryVector.push(startingPoint);
    let currentPoint = startingPoint;
    let dir = 5;
    // console.log(`${currentPoint.x},${currentPoint.y}`);

    do {
      // console.log('we are here');
      console.log(`${currentPoint.x},${currentPoint.y}`);
      await delay(10);
      currentPoint = getNextBoundaryPoint(img, dir, currentPoint);
      boundaryVector.push(currentPoint);
      // console.log(`cp.x ${currentPoint.x} s.w-1 ${size.width-1}`);
    } while (currentPoint.x !== size.width - 1);
    return boundaryVector;
  }

  function getNextBoundaryPoint(img, dir, currentPoint) {
    // init directionPoints
    let directionPoints = [];
    directionPoints.push(new cv.Point(1, 0));
    directionPoints.push(new cv.Point(1, -1));
    directionPoints.push(new cv.Point(0, -1));
    directionPoints.push(new cv.Point(-1, -1));
    directionPoints.push(new cv.Point(-1, 0));
    directionPoints.push(new cv.Point(-1, 1));
    directionPoints.push(new cv.Point(0, 1));
    directionPoints.push(new cv.Point(1, 1));

    let nextPoint = new cv.Point(0, 0);

    let startIndex = getNeighborhoodSearchIndex(dir);
    for (let i = startIndex; i < startIndex + 8; ++i) {
      let neighborPoint = new cv.Point(
        currentPoint.x + directionPoints[i % 8].x,
        currentPoint.y + directionPoints[i % 8].y
      );
      // debugger;
      if (
        neighborPoint.y >= 0 &&
        neighborPoint.y < img.rows &&
        neighborPoint.x >= 0 &&
        neighborPoint.x < img.cols
      ) {
        if (img.ucharPtr(neighborPoint.y, neighborPoint.x)[0] === 255) {
          nextPoint = neighborPoint;
          dir = i % 8;
          break;
        }
      }
    }
    return nextPoint;
  }

  function getNeighborhoodSearchIndex(dir) {
    if (dir % 2 === 0) {
      return (dir + 7) % 8;
    } else {
      return (dir + 6) % 8;
    }
  }

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
        let mat = new cv.Mat();
        console.log(mat.size());
        mat.delete();
        await createFileFromUrl(
          'haarcascade_frontalface_default.xml',
          `${publicPath}/js/haarcascade_frontalface_default.xml`
        );
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
        self.importScripts(`${publicPath}/js/opencv-4-3-0.js`);
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
      case 'imageProcessing2':
        return imageProcessing2(e.data);
      default:
        break;
    }
  };
}
