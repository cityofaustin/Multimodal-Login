"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));
var _finalLines = _interopRequireDefault(require("./finalLines"));
var _matchedTemplate = _interopRequireDefault(require("./matchedTemplate"));
var _gaussian = require("./gaussian");









var _palmlinedb = _interopRequireDefault(require("./palmlinedb.json")); // import delay from '../util/delay';

const publicPath = process.env.FE ? "" : "/public";
if (process.env.BROWSER) {
  Promise.resolve().then(() => (0, _interopRequireWildcard2.default)(require("./opencv-4-3-0.js")));
  Promise.resolve().then(() => (0, _interopRequireWildcard2.default)(require("./haarcascade_frontalface_default.xml")));function

  createFileFromUrl(_x, _x2) {return _createFileFromUrl.apply(this, arguments);}function _createFileFromUrl() {_createFileFromUrl = (0, _asyncToGenerator2.default)(function* (path, url) {
      // Small function to make a remote file visible from emscripten module.

      console.log(`⬇️ Downloading additional file from ${url}.`);
      const res = yield self.fetch(url);
      if (!res.ok) {
        throw new Error(
        `Response is not OK (${res.status} ${res.statusText} for ${url})`);

      }
      const buffer = yield res.arrayBuffer();
      const data = new Uint8Array(buffer);
      cv.FS_createDataFile("/", path, data, true, true, false);
      console.log(`📦${url} downloaded. Mounted on /${path}`);
    });return _createFileFromUrl.apply(this, arguments);}

  let classifier = null;
  let eigenRecognizer;

  function imageProcessing2({ msg, payload }) {
    // Segmenting the hand and extracting the ROI
    // 1 Segment the hand using Skin-Color model algorithm
    let rgbaImg = cv.matFromImageData(payload); // cv.Mat
    let rgbImg = new cv.Mat();
    cv.cvtColor(rgbaImg, rgbImg, cv.COLOR_RGBA2RGB);
    cv.resize(rgbImg, rgbImg, new cv.Size(640, 480));
    let segmentedImage = doPreprocessing(rgbImg);

    // 2 TODO: finding important points on the hand
    // Keypoints struct_keypoints = findKeypoints(segmentedImage);
    const keypoints = findKeypoints(segmentedImage);
    // putting in the expected ROI since having difficulty with this
    // Rotating the input image
    let rotAlpha = 0.3284040874548375;
    let centerPoint = new cv.Point(rgbImg.cols / 2, rgbImg.rows / 2);
    let rotMat = cv.getRotationMatrix2D(
    centerPoint,
    -rotAlpha * (180 / 3.1415),
    1);

    // Mat rotMat = getRotationMatrix2D(centerPoint, -rotAlpha*(180 / 3.1415), 1.0);
    // warpAffine(inputImage, inputImage, rotMat, inputImage.size());
    cv.warpAffine(rgbImg, rgbImg, rotMat, rgbaImg.size()); //, cv.INTER_LINEAR, cv.BORDER_CONSTANT, new cv.Scalar());
    let roiMat = new cv.Mat();
    // let rect = new cv.Rect(new cv.Point({x: 316, y: 227}), new cv.Point({x: 427, y: 337}))
    // let rect = new cv.Rect(340, 205, 100, 120);
    let rect = new cv.Rect(316, 227, 110, 111);
    roiMat = rgbImg.roi(rect);
    // cv.resize(roiMat, roiMat, new cv.Size(480, 480));

    // 3 TODO: finding bounding box for the palm
    // extractedRoi = calcSquareRoi(struct_keypoints);
    // TODO: Extracting features from the ROI
    //Feature 128x128
    // TODO: Matching the extracted feature (1:N)
    // matched feature 128x128
    postMessage({ msg, payload: imageDataFromMat(roiMat) });
  }

  function imageProcessing3a({ msg, payload }) {
    // ref: https://answers.opencv.org/question/218774/how-to-extract-palm-lines/
    let rgbaMat = cv.matFromImageData(payload); // cv.Mat
    let roiMat = new cv.Mat();
    let x = 160; //	x coordinate of the vertex which is the top left corner of the rectangle.
    let y = 320; //	y coordinate of the vertex which is the top left corner of the rectangle.
    let width = 467 - x - 120; //	the width of the rectangle.
    let height = 720 - y - 140; // the height of the rectangle.
    let rect = new cv.Rect(x, y, width, height);
    roiMat = rgbaMat.roi(rect);
    // cv.resize(roiMat, roiMat, new cv.Size(128, 128));

    let grayscaleMat = new cv.Mat(roiMat.size(), cv.CV_8UC1);
    cv.cvtColor(roiMat, grayscaleMat, cv.COLOR_RGBA2GRAY);
    // cv.cvtColor(grayscaleMat, grayscaleMat, cv.COLOR_RGB2YCrCb); // Convert original image to YCbCr color space
    // cv.cvtColor(grayscaleMat, grayscaleMat, cv.COLOR_YCrCB2GRAY);
    cv.equalizeHist(grayscaleMat, grayscaleMat);
    const ksize = new cv.Size(9, 9); // blurring kernel size.
    const sigmaX = 0; // Gaussian kernel standard deviation in X direction.
    // Gaussian kernel standard deviation in Y direction; if sigmaY is zero,
    // it is set to be equal to sigmaX, if both sigmas are zeros, they are
    // computed from ksize.width and ksize.height, to fully control the result
    // regardless of possible future modifications of all this semantics,
    // it is recommended to specify all of ksize, sigmaX, and sigmaY.
    const sigmaY = 0;
    // pixel extrapolation method(see
    // https://docs.opencv.org/3.4/d2/de8/group__core__array.html#ga209f2f4869e304c82d07739337eae7c5).
    const borderType = cv.BORDER_DEFAULT;
    cv.GaussianBlur(
    grayscaleMat,
    grayscaleMat,
    ksize,
    sigmaX,
    sigmaY,
    borderType);

    const threshold1 = 40; // first threshold for the hysteresis procedure.
    const threshold2 = 80; // second threshold for the hysteresis procedure.
    const apertureSize = 3; // aperture size for the Sobel operator.
    // specifies the equation for finding gradient magnitude. If it is True,
    // it uses the equation mentioned above which is more accurate, otherwise it
    // uses this function: Edge_Gradient(G)=|Gx|+|Gy|.
    const l2gradient = false;
    cv.Canny(
    grayscaleMat,
    grayscaleMat,
    threshold1,
    threshold2,
    apertureSize,
    l2gradient);

    // output vector of lines(cv.32SC4 type). Each line is represented by a 4-element vector
    // (x1,y1,x2,y2) ,where (x1,y1) and (x2,y2) are the ending points of each detected line segment.
    let lines = new cv.Mat();
    let color = new cv.Scalar(255, 255, 255);
    const rho = 1; // distance resolution of the accumulator in pixels.
    const theta = Math.PI / 180; // angle resolution of the accumulator in radians.
    // accumulator threshold parameter. Only those lines are returned that get enough votes
    const threshold = 15;
    // const threshold = 30;
    const minLineLength = 30; // minimum line length. Line segments shorter than that are rejected.
    // const minLineLength = 50;
    const maxLineGap = 20; // maximum allowed gap between points on the same line to link them.
    // const maxLineGap = 20;
    cv.HoughLinesP(
    grayscaleMat,
    lines,
    rho,
    theta,
    threshold,
    minLineLength,
    maxLineGap);

    let dst = new cv.Mat(grayscaleMat.size(), cv.CV_8UC1);
    // draw lines
    for (let i = 0; i < lines.rows; ++i) {
      let startPoint = new cv.Point(
      lines.data32S[i * 4],
      lines.data32S[i * 4 + 1]);

      let endPoint = new cv.Point(
      lines.data32S[i * 4 + 2],
      lines.data32S[i * 4 + 3]);

      cv.line(dst, startPoint, endPoint, color);
    }
    const data = [];
    cv.resize(dst, dst, new cv.Size(128, 128));
    for (let row = 0; row < 128; row++) {
      const rowItem = [];
      for (let col = 0; col < 128; col++) {
        if (dst.ucharPtr(row, col)[0] > 100) {// threshold value for detection
          dst.ucharPtr(row, col)[0] = 255;
        } else {
          dst.ucharPtr(row, col)[0] = 0;
        }
        const pixel = dst.ucharPtr(row, col);
        const colItem = pixel[0] === 255 ? 1 : 0;
        rowItem.push(colItem);
      }
      data.push(rowItem);
    }
    // debugger;
    postMessage({
      msg,
      // payload: imageDataFromMat(dst)
      payload: {
        template: data,
        img: imageDataFromMat(dst) } });


  }

  function imageProcessing3({ msg, payload }) {
    let finalLinesMat = new cv.Mat(128, 128, cv.CV_8UC1, new cv.Scalar(0));
    let count = 0;
    for (let dataItem of _finalLines.default) {
      finalLinesMat.data[count] = dataItem;
      count++;
    }
    postMessage({ msg, payload: imageDataFromMat(finalLinesMat) });
    let rgbaMat = cv.matFromImageData(payload); // cv.Mat
    let roiAfterPreprocessing = doPreprocessingGrayscaleSm(rgbaMat);
    let normalizedRoi = normalizeImage(roiAfterPreprocessing);
    let finalLines2 = locatePrincipalLines(normalizedRoi);
    // postMessage({ msg, payload: imageDataFromMat(finalLines2) });
  }

  function printMat(mat) {
    // NOTE: this is great for comparing the matrix data from the c++ code to see if it lines up
    // correctly / is doing the same thing with the code here.  I use this site to compare
    // http://www.jsondiff.com/ (you have to replace the semicolons with commas when
    // doing 'cout << end << mat << endl;' in the c++ code in order for the outputs to be same).
    console.log(
    JSON.stringify(Object.keys(mat.data).map(key => mat.data[key])));

  }

  function imageProcessing4({ msg, payload }) {
    const rgbaMat = cv.matFromImageData(payload);
    const mat = doPreprocessingGrayscaleSm(rgbaMat);
    const distanceTransImg = doDistanceTransformation(mat);
    if (_palmlinedb.default.length == 0) {
      console.error("Error: database is empty");
    }
    let min = 2147483647.0; // max int
    let min_id = 0;
    let matchedIndex = -1;
    let sum = 0;
    // Calculate Chamfer distance
    for (let i = 0; i < _palmlinedb.default.length; i++) {
      sum = 0;
      // array of points for this particular template
      let temp = _palmlinedb.default[i].featureData;
      if (temp.length != 0) {
        for (let j = 0; j < temp.length; ++j) {
          // [0] is x and [1] is y
          sum += distanceTransImg.ucharPtr(temp[j][0], temp[j][1])[0];
        }
        sum = sum / (temp.length * 255);
        if (sum < min) {
          min = sum;
          min_id = _palmlinedb.default[i].userId;
          matchedIndex = i;
        }
      }
    }
    // console.log(`sum 0.026889297385620917 matchedIndex 2 min 0.006030897207367796`);
    // console.log(`sum ${sum} matchedIndex ${matchedIndex} min ${min}`);
    let matchedImage = new cv.Mat(128, 128, cv.CV_8UC1, new cv.Scalar(0));

    // for (let p of matchedTemplate) {
    for (let p of _palmlinedb.default[matchedIndex].featureData) {
      matchedImage.ucharPtr(p[0], p[1])[0] = 255;
    }
    postMessage({
      msg,
      payload: {
        distance: min,
        userId: min_id,
        img: imageDataFromMat(matchedImage) } });


  }

  function doDistanceTransformation(img) {
    // Two pass algorithm with two Euclidean kernel
    let invImg = new cv.Mat();
    cv.subtract(
    new cv.Mat(128, 128, cv.CV_8UC1, new cv.Scalar(255)),
    img,
    invImg);

    // First pass from top left
    for (let x = 1; x < invImg.rows - 1; x++) {
      for (let y = 1; y < invImg.cols - 1; y++) {
        if (
        invImg.ucharPtr(x, y)[0] >
        invImg.ucharPtr(x - 1, y - 1)[0] + Math.sqrt(2))
        {
          invImg.ucharPtr(x, y)[0] =
          invImg.ucharPtr(x - 1, y - 1)[0] + Math.sqrt(2);
        }
        if (invImg.ucharPtr(x, y)[0] > invImg.ucharPtr(x, y - 1)[0] + 1) {
          invImg.ucharPtr(x, y)[0] =
          invImg.ucharPtr(x, y - 1)[0] + Math.sqrt(2);
        }
        if (
        invImg.ucharPtr(x, y)[0] >
        invImg.ucharPtr(x + 1, y - 1)[0] + Math.sqrt(2))
        {
          invImg.ucharPtr(x, y)[0] =
          invImg.ucharPtr(x + 1, y - 1)[0] + Math.sqrt(2);
        }
        if (invImg.ucharPtr(x, y)[0] > invImg.ucharPtr(x - 1, y)[0] + 1) {
          invImg.ucharPtr(x, y)[0] = invImg.ucharPtr(x - 1, y)[0] + 1;
        }
      }
    }
    // Second pass from bottom right
    for (let x = invImg.rows - 2; x >= 1; x--) {
      for (let y = invImg.cols - 2; y >= 1; y--) {
        if (invImg.ucharPtr(x, y)[0] > invImg.ucharPtr(x + 1, y)[0] + 1) {
          invImg.ucharPtr(x, y)[0] = invImg.ucharPtr(x + 1, y)[0] + 1;
        }
        if (
        invImg.ucharPtr(x, y)[0] >
        invImg.ucharPtr(x - 1, y + 1)[0] + Math.sqrt(2))
        {
          invImg.ucharPtr(x, y)[0] =
          invImg.ucharPtr(x - 1, y + 1)[0] + Math.sqrt(2);
        }
        if (invImg.ucharPtr(x, y)[0] > invImg.ucharPtr(x, y + 1)[0] + 1) {
          invImg.ucharPtr(x, y)[0] = invImg.ucharPtr(x, y + 1)[0] + 1;
        }
        if (
        invImg.ucharPtr(x, y)[0] >
        invImg.ucharPtr(x + 1, y + 1)[0] + Math.sqrt(2))
        {
          invImg.ucharPtr(x, y)[0] =
          invImg.ucharPtr(x + 1, y + 1)[0] + Math.sqrt(2);
        }
      }
    }
    return invImg;
  }

  function locatePrincipalLines(mat) {
    // Locating principal lines in four directions
    // NOTE: this doesn't seem to work correctly, the 45 is the only one that detects pixels
    // it probably has to do with the initial image not matching correctly
    let linesInDir0 = locatePrincipalLineInGivenDirection(mat, _gaussian.H1_0, _gaussian.H2_0, 0);
    let linesInDir90 = locatePrincipalLineInGivenDirection(
    mat,
    _gaussian.H1_90,
    _gaussian.H2_90,
    90);

    let linesInDir45 = locatePrincipalLineInGivenDirection(
    mat,
    _gaussian.H1_45,
    _gaussian.H2_45,
    45);

    let linesInDir135 = locatePrincipalLineInGivenDirection(
    mat,
    _gaussian.H1_135,
    _gaussian.H2_135,
    135);

    const lines = new cv.Mat(128, 128, cv.CV_8UC1, new cv.Scalar(0));
    // pretty helpful guide
    // https://kdr2.com/tech/main/1810-elewise-matrix-op-opencv.html
    cv.bitwise_or(linesInDir45, linesInDir90, lines);
    cv.bitwise_or(lines, linesInDir0, lines);
    cv.bitwise_or(lines, linesInDir135, lines);
    return lines;
  }

  function locatePrincipalLineInGivenDirection(mat, H1, H2, degree) {
    // Defines the range of the first-order derivative's change detection
    const firstDerivChangeWidth = 4;
    // Defines the second-order derivative's treshold value
    const secondDerivThresholdValue = 10;
    let H1_rows = H1.length;
    let H1_cols = H1[0].length;
    // First derivative of the input image
    let I_der = [];
    // Second derivate of the input image
    let I_der2 = [];
    // Initialize first- and second-order derivatives
    for (let i = 0; i < 128; ++i) {
      let row = [];
      for (let j = 0; j < 128; ++j) {
        row.push(0.0);
      }
      I_der.push(row);
      I_der2.push(row);
    }

    // Calculate first- and second-order derivatives
    for (let i = Math.floor(H1_rows / 2); i < 128 - H1_rows / 2; i++) {
      for (let j = Math.floor(H1_cols / 2); j < 128 - H1_cols / 2; j++) {
        for (let _i = -Math.floor(H1_rows / 2); _i <= H1_rows / 2; _i++) {
          for (let _j = -Math.floor(H1_cols / 2); _j <= +(H1_cols / 2); _j++) {
            const matValue = mat.ucharPtr(i + _i, j + _j)[0];
            const hRow = _i + Math.floor(H1_rows / 2);
            const hCol = _j + Math.floor(H1_cols / 2);
            I_der[i][j] += matValue * H1[hRow][hCol];
            I_der2[i][j] += matValue * H2[hRow][hCol];
          }
        }
      }
    }

    // Create binary image, this will contain the extracted principal lines in a given direction
    let binaryImage = new cv.Mat(128, 128, cv.CV_8UC1, new cv.Scalar(0, 0, 0));

    // Locating changes in first-order derivatives in 45 direction
    if (degree == 45) {
      // Traversing the matrix diagonal (bottom-left to top-right)
      for (let i = 1; i < 2 * 128 - 2; ++i) {
        let k = i < 128 ? 0 : i - 128 + 1;
        for (let j = k + 1; j <= i - k; ++j) {
          let derivChangeFound = false;
          // Checking if the derivative's sign has changed by comparing #dw neighbors
          for (let dw = 1; dw <= firstDerivChangeWidth; ++dw) {
            if (isInsideTheBoundary(j - dw, i - j)) {
              if (I_der[j][i - j] * I_der[j - dw][i - j] < 0) {
                derivChangeFound = true;
              }
            }
          }
          /* If first-order derivative's sign has changed and the second-order derivative's value is greater
            than the threshold, then setting the current pixel to 255, otherwise to 0 */
          if (
          (derivChangeFound || I_der[j][i - j] == 0) &&
          I_der2[j][i - j] > secondDerivThresholdValue)
          {
            binaryImage.ucharPtr(j, i - j)[0] = 255;
          } else {
            binaryImage.ucharPtr(j, i - j)[0] = 0;
          }
        }
      }
    }
    // console.log(JSON.stringify(Object.keys(binaryImage.data).map(key => binaryImage.data[key])));
    return binaryImage;
  }

  function isInsideTheBoundary(i, j) {
    if (i > 0 && i < 128 && j > 0 && j < 128) {
      return true;
    } else {
      return false;
    }
  }

  function normalizeImage(mat) {
    /* Applying CLAHE */
    let tileGridSize = new cv.Size(8, 8);
    let clahe = new cv.CLAHE(4, tileGridSize);
    clahe.apply(mat, mat);

    /* Applying a low-pass filter */
    let ksize = new cv.Size(3, 3);
    let anchor = new cv.Point(-1, -1);
    cv.blur(mat, mat, ksize, anchor, cv.BORDER_DEFAULT);

    return mat;
  }

  function doPreprocessingGrayscaleSm(mat) {
    cv.cvtColor(mat, mat, cv.COLOR_RGBA2BGR);
    // console.log(JSON.stringify(Object.keys(mat.data).map(key => mat.data[key])));
    // Convert to grayscale
    let grayscaleMat = new cv.Mat(mat.size(), cv.CV_8UC1);
    cv.cvtColor(mat, grayscaleMat, cv.COLOR_BGR2GRAY);
    // Resize it to 128x128
    cv.resize(grayscaleMat, grayscaleMat, new cv.Size(128, 128));
    return grayscaleMat;
  }

  function doPreprocessing(rgbImg) {
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
    new cv.Scalar(0));

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
        if (row == 42 && col == 344) {
          // debugger;
        }
        if (row == 201 && col >= 605 && col < 611) {
          // debugger;
        }
      }
    }
    // cv.rectangle(thresholded, {x:489,y:99 }, {x:589,y:99}, [255, 255, 255, 255]);
    return thresholded;
  }

  function findKeypoints(segmentedImage) {
    // console.log('finding keypoints');
    let rect = new cv.Rect(
    0,
    0,
    segmentedImage.cols - 150,
    segmentedImage.rows);

    let leftSide = new cv.Mat();
    leftSide = segmentedImage.roi(rect);
    // Get boundary points, by applying boundary tracking alogirthm
    // console.log('getting boundary');
    let boundaryVector = getBoundary(leftSide);
    // debugger;
    for (let boundaryItem of boundaryVector) {
      // debugger;
      cv.circle(
      leftSide,
      { x: boundaryItem.x, y: boundaryItem.y },
      3,
      [120, 120, 120, 255],
      -1);
      // for debugging
    }
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

  function getBoundary(img) {
    let boundaryVector = [];

    let startingPoint = new cv.Point(-1, -1);
    let size = img.size();
    for (let y = 0; y < size.height; ++y) {
      if (img.ucharPtr(y, size.width - 1)[0] === 255) {
        startingPoint.x = size.width - 1;
        startingPoint.y = y;
        break;
      }
    }

    // Check if the startingPoint was found
    if (startingPoint.x === -1 && startingPoint.y === -1) {
      throw "Boundary starting point not found";
    }

    boundaryVector.push(startingPoint);
    let currentPoint = startingPoint;
    let dir = 5;
    // console.log(`${currentPoint.x},${currentPoint.y}`);

    let count = 0;
    do {
      // console.log('we are here');
      // console.log(`${currentPoint.x},${currentPoint.y}`);
      // await delay(10);
      currentPoint = getNextBoundaryPoint(img, dir, currentPoint);
      boundaryVector.push(currentPoint);
      // cv.circle(img, {x:currentPoint.x,y:currentPoint.y }, 5, [100, 100, 100, 255], -1); // for debugging
      // if(currentPoint.x === 335 && currentPoint.y === 65) {
      if (count > 200) {
        break; // this is where it gets stuck
      }
      // console.log(`cp.x ${currentPoint.x} s.w-1 ${size.width-1}`);
      count++;
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
      currentPoint.y + directionPoints[i % 8].y);

      // debugger;
      if (
      neighborPoint.y >= 0 &&
      neighborPoint.y < img.rows &&
      neighborPoint.x >= 0 &&
      neighborPoint.x < img.cols)
      {
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
        "Bad number of channels (Source image must have 1, 3 or 4 channels)");}


    const clampedArray = new ImageData(
    new Uint8ClampedArray(img.data),
    img.cols,
    img.rows);

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
    const interval = setInterval( /*#__PURE__*/(0, _asyncToGenerator2.default)(function* () {
      const limitReached = timeSpentMs > waitTimeMs;
      if (cv.Mat || limitReached) {
        let mat = new cv.Mat();
        console.log(mat.size());
        mat.delete();
        yield createFileFromUrl(
        "haarcascade_frontalface_default.xml",
        `${publicPath}/js/haarcascade_frontalface_default.xml`);

        classifier = new cv.CascadeClassifier();
        // eigenRecognizer = new cv.EigenFaceRecognizer();
        classifier.load("haarcascade_frontalface_default.xml");
        clearInterval(interval);
        return callbackFn(!limitReached);
      } else {
        timeSpentMs += stepTimeMs;
      }
    }), stepTimeMs);
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
  self.onmessage = e => {
    // console.log(e);
    switch (e.data.msg) {
      case "load":{
          // Import Webassembly script
          self.importScripts(`${publicPath}/js/opencv-4-3-0.js`);
          cv = cv();
          waitForOpencv(success => {
            // console.log(e);
            if (success) {
              postMessage({ msg: e.data.msg });
            } else throw new Error("Error on loading OpenCV");
          });
          break;
        }
      case "imageProcessing":
        return imageProcessing(e.data);
      case "imageProcessing2":
        return imageProcessing2(e.data);
      case "imageProcessing3":
        return imageProcessing3a(e.data);
      case "imageProcessing4":
        return imageProcessing4(e.data);
      default:
        break;}

  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy93b3JrZXJzL2N2Lndvcmtlci5qcyJdLCJuYW1lcyI6WyJwdWJsaWNQYXRoIiwicHJvY2VzcyIsImVudiIsIkZFIiwiQlJPV1NFUiIsImNyZWF0ZUZpbGVGcm9tVXJsIiwicGF0aCIsInVybCIsImNvbnNvbGUiLCJsb2ciLCJyZXMiLCJzZWxmIiwiZmV0Y2giLCJvayIsIkVycm9yIiwic3RhdHVzIiwic3RhdHVzVGV4dCIsImJ1ZmZlciIsImFycmF5QnVmZmVyIiwiZGF0YSIsIlVpbnQ4QXJyYXkiLCJjdiIsIkZTX2NyZWF0ZURhdGFGaWxlIiwiY2xhc3NpZmllciIsImVpZ2VuUmVjb2duaXplciIsImltYWdlUHJvY2Vzc2luZzIiLCJtc2ciLCJwYXlsb2FkIiwicmdiYUltZyIsIm1hdEZyb21JbWFnZURhdGEiLCJyZ2JJbWciLCJNYXQiLCJjdnRDb2xvciIsIkNPTE9SX1JHQkEyUkdCIiwicmVzaXplIiwiU2l6ZSIsInNlZ21lbnRlZEltYWdlIiwiZG9QcmVwcm9jZXNzaW5nIiwia2V5cG9pbnRzIiwiZmluZEtleXBvaW50cyIsInJvdEFscGhhIiwiY2VudGVyUG9pbnQiLCJQb2ludCIsImNvbHMiLCJyb3dzIiwicm90TWF0IiwiZ2V0Um90YXRpb25NYXRyaXgyRCIsIndhcnBBZmZpbmUiLCJzaXplIiwicm9pTWF0IiwicmVjdCIsIlJlY3QiLCJyb2kiLCJwb3N0TWVzc2FnZSIsImltYWdlRGF0YUZyb21NYXQiLCJpbWFnZVByb2Nlc3NpbmczYSIsInJnYmFNYXQiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwiZ3JheXNjYWxlTWF0IiwiQ1ZfOFVDMSIsIkNPTE9SX1JHQkEyR1JBWSIsImVxdWFsaXplSGlzdCIsImtzaXplIiwic2lnbWFYIiwic2lnbWFZIiwiYm9yZGVyVHlwZSIsIkJPUkRFUl9ERUZBVUxUIiwiR2F1c3NpYW5CbHVyIiwidGhyZXNob2xkMSIsInRocmVzaG9sZDIiLCJhcGVydHVyZVNpemUiLCJsMmdyYWRpZW50IiwiQ2FubnkiLCJsaW5lcyIsImNvbG9yIiwiU2NhbGFyIiwicmhvIiwidGhldGEiLCJNYXRoIiwiUEkiLCJ0aHJlc2hvbGQiLCJtaW5MaW5lTGVuZ3RoIiwibWF4TGluZUdhcCIsIkhvdWdoTGluZXNQIiwiZHN0IiwiaSIsInN0YXJ0UG9pbnQiLCJkYXRhMzJTIiwiZW5kUG9pbnQiLCJsaW5lIiwicm93Iiwicm93SXRlbSIsImNvbCIsInVjaGFyUHRyIiwicGl4ZWwiLCJjb2xJdGVtIiwicHVzaCIsInRlbXBsYXRlIiwiaW1nIiwiaW1hZ2VQcm9jZXNzaW5nMyIsImZpbmFsTGluZXNNYXQiLCJjb3VudCIsImRhdGFJdGVtIiwiZmluYWxMaW5lcyIsInJvaUFmdGVyUHJlcHJvY2Vzc2luZyIsImRvUHJlcHJvY2Vzc2luZ0dyYXlzY2FsZVNtIiwibm9ybWFsaXplZFJvaSIsIm5vcm1hbGl6ZUltYWdlIiwiZmluYWxMaW5lczIiLCJsb2NhdGVQcmluY2lwYWxMaW5lcyIsInByaW50TWF0IiwibWF0IiwiSlNPTiIsInN0cmluZ2lmeSIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJpbWFnZVByb2Nlc3Npbmc0IiwiZGlzdGFuY2VUcmFuc0ltZyIsImRvRGlzdGFuY2VUcmFuc2Zvcm1hdGlvbiIsInN0b3JlZEZlYXR1cmVzIiwibGVuZ3RoIiwiZXJyb3IiLCJtaW4iLCJtaW5faWQiLCJtYXRjaGVkSW5kZXgiLCJzdW0iLCJ0ZW1wIiwiZmVhdHVyZURhdGEiLCJqIiwidXNlcklkIiwibWF0Y2hlZEltYWdlIiwicCIsImRpc3RhbmNlIiwiaW52SW1nIiwic3VidHJhY3QiLCJzcXJ0IiwibGluZXNJbkRpcjAiLCJsb2NhdGVQcmluY2lwYWxMaW5lSW5HaXZlbkRpcmVjdGlvbiIsIkgxXzAiLCJIMl8wIiwibGluZXNJbkRpcjkwIiwiSDFfOTAiLCJIMl85MCIsImxpbmVzSW5EaXI0NSIsIkgxXzQ1IiwiSDJfNDUiLCJsaW5lc0luRGlyMTM1IiwiSDFfMTM1IiwiSDJfMTM1IiwiYml0d2lzZV9vciIsIkgxIiwiSDIiLCJkZWdyZWUiLCJmaXJzdERlcml2Q2hhbmdlV2lkdGgiLCJzZWNvbmREZXJpdlRocmVzaG9sZFZhbHVlIiwiSDFfcm93cyIsIkgxX2NvbHMiLCJJX2RlciIsIklfZGVyMiIsImZsb29yIiwiX2kiLCJfaiIsIm1hdFZhbHVlIiwiaFJvdyIsImhDb2wiLCJiaW5hcnlJbWFnZSIsImsiLCJkZXJpdkNoYW5nZUZvdW5kIiwiZHciLCJpc0luc2lkZVRoZUJvdW5kYXJ5IiwidGlsZUdyaWRTaXplIiwiY2xhaGUiLCJDTEFIRSIsImFwcGx5IiwiYW5jaG9yIiwiYmx1ciIsIkNPTE9SX1JHQkEyQkdSIiwiQ09MT1JfQkdSMkdSQVkiLCJ5Y2JjckltZyIsIkNPTE9SX1JHQjJZQ3JDYiIsImMxMSIsImMxMiIsImMyMSIsImMyMiIsImsxIiwiazIiLCJ4MSIsIngyIiwibTEiLCJtMiIsImYxIiwiZjIiLCJ0aHJlc2hvbGRlZCIsImV4cCIsImxlZnRTaWRlIiwiYm91bmRhcnlWZWN0b3IiLCJnZXRCb3VuZGFyeSIsImJvdW5kYXJ5SXRlbSIsImNpcmNsZSIsImZvdW5kU3RhcnQiLCJzdGFydGluZ1BvaW50IiwiY3VycmVudFBvaW50IiwiZGlyIiwiZ2V0TmV4dEJvdW5kYXJ5UG9pbnQiLCJkaXJlY3Rpb25Qb2ludHMiLCJuZXh0UG9pbnQiLCJzdGFydEluZGV4IiwiZ2V0TmVpZ2hib3Job29kU2VhcmNoSW5kZXgiLCJuZWlnaGJvclBvaW50IiwiaW1hZ2VQcm9jZXNzaW5nIiwiZ3JheSIsImZhY2VzIiwiUmVjdFZlY3RvciIsImRldGVjdE11bHRpU2NhbGUiLCJmYWNlIiwiZ2V0IiwicG9pbnQxIiwicG9pbnQyIiwicmVjdGFuZ2xlIiwiZGVwdGgiLCJ0eXBlIiwic2NhbGUiLCJDVl84UyIsIkNWXzMyUyIsInNoaWZ0IiwiQ1ZfMTZTIiwiY29udmVydFRvIiwiQ1ZfOFUiLCJDT0xPUl9HUkFZMlJHQkEiLCJDVl84VUMzIiwiQ09MT1JfUkdCMlJHQkEiLCJDVl84VUM0IiwiY2xhbXBlZEFycmF5IiwiSW1hZ2VEYXRhIiwiVWludDhDbGFtcGVkQXJyYXkiLCJkZWxldGUiLCJ3YWl0Rm9yT3BlbmN2IiwiY2FsbGJhY2tGbiIsIndhaXRUaW1lTXMiLCJzdGVwVGltZU1zIiwidGltZVNwZW50TXMiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwibGltaXRSZWFjaGVkIiwiQ2FzY2FkZUNsYXNzaWZpZXIiLCJsb2FkIiwiY2xlYXJJbnRlcnZhbCIsIm9ubWVzc2FnZSIsImUiLCJpbXBvcnRTY3JpcHRzIiwic3VjY2VzcyJdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQVVBLHVFLENBYkE7O0FBZUEsTUFBTUEsVUFBVSxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsRUFBWixHQUFpQixFQUFqQixHQUFzQixTQUF6QztBQUNBLElBQUlGLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRSxPQUFoQixFQUF5QjtBQUN2Qiw2RUFBTyxtQkFBUDtBQUNBLDZFQUFPLHVDQUFQLElBRnVCOztBQUlSQyxFQUFBQSxpQkFKUSxpSkFJdkIsV0FBaUNDLElBQWpDLEVBQXVDQyxHQUF2QyxFQUE0QztBQUMxQzs7QUFFQUMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsdUNBQXNDRixHQUFJLEdBQXZEO0FBQ0EsWUFBTUcsR0FBRyxTQUFTQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0wsR0FBWCxDQUFsQjtBQUNBLFVBQUksQ0FBQ0csR0FBRyxDQUFDRyxFQUFULEVBQWE7QUFDWCxjQUFNLElBQUlDLEtBQUo7QUFDSCwrQkFBc0JKLEdBQUcsQ0FBQ0ssTUFBTyxJQUFHTCxHQUFHLENBQUNNLFVBQVcsUUFBT1QsR0FBSSxHQUQzRCxDQUFOOztBQUdEO0FBQ0QsWUFBTVUsTUFBTSxTQUFTUCxHQUFHLENBQUNRLFdBQUosRUFBckI7QUFDQSxZQUFNQyxJQUFJLEdBQUcsSUFBSUMsVUFBSixDQUFlSCxNQUFmLENBQWI7QUFDQUksTUFBQUEsRUFBRSxDQUFDQyxpQkFBSCxDQUFxQixHQUFyQixFQUEwQmhCLElBQTFCLEVBQWdD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QUNGO0FBQ0UsY0F0Qko7O0FBd0JELEdBMUJEO0FBMkJEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IGRlbGF5IGZyb20gJy4uL3V0aWwvZGVsYXknO1xuaW1wb3J0IGZpbmFsTGluZXMgZnJvbSBcIi4vZmluYWxMaW5lc1wiO1xuaW1wb3J0IG1hdGNoZWRUZW1wbGF0ZSBmcm9tIFwiLi9tYXRjaGVkVGVtcGxhdGVcIjtcbmltcG9ydCB7XG4gIEgxXzAsXG4gIEgxXzQ1LFxuICBIMV85MCxcbiAgSDFfMTM1LFxuICBIMl8wLFxuICBIMl80NSxcbiAgSDJfOTAsXG4gIEgyXzEzNSxcbn0gZnJvbSBcIi4vZ2F1c3NpYW5cIjtcbmltcG9ydCBzdG9yZWRGZWF0dXJlcyBmcm9tIFwiLi9wYWxtbGluZWRiLmpzb25cIjtcblxuY29uc3QgcHVibGljUGF0aCA9IHByb2Nlc3MuZW52LkZFID8gXCJcIiA6IFwiL3B1YmxpY1wiO1xuaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcbiAgaW1wb3J0KFwiLi9vcGVuY3YtNC0zLTAuanNcIik7XG4gIGltcG9ydChcIi4vaGFhcmNhc2NhZGVfZnJvbnRhbGZhY2VfZGVmYXVsdC54bWxcIik7XG5cbiAgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRmlsZUZyb21VcmwocGF0aCwgdXJsKSB7XG4gICAgLy8gU21hbGwgZnVuY3Rpb24gdG8gbWFrZSBhIHJlbW90ZSBmaWxlIHZpc2libGUgZnJvbSBlbXNjcmlwdGVuIG1vZHVsZS5cblxuICAgIGNvbnNvbGUubG9nKGDirIfvuI8gRG93bmxvYWRpbmcgYWRkaXRpb25hbCBmaWxlIGZyb20gJHt1cmx9LmApO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHNlbGYuZmV0Y2godXJsKTtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgUmVzcG9uc2UgaXMgbm90IE9LICgke3Jlcy5zdGF0dXN9ICR7cmVzLnN0YXR1c1RleHR9IGZvciAke3VybH0pYFxuICAgICAgKTtcbiAgICB9XG4gICAgY29uc3QgYnVmZmVyID0gYXdhaXQgcmVzLmFycmF5QnVmZmVyKCk7XG4gICAgY29uc3QgZGF0YSA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XG4gICAgY3YuRlNfY3JlYXRlRGF0YUZpbGUoXCIvXCIsIHBhdGgsIGRhdGEsIHRydWUsIHRydWUsIGZhbHNlKTtcbiAgICBjb25zb2xlLmxvZyhg8J+TpiR7dXJsfSBkb3dubG9hZGVkLiBNb3VudGVkIG9uIC8ke3BhdGh9YCk7XG4gIH1cblxuICBsZXQgY2xhc3NpZmllciA9IG51bGw7XG4gIGxldCBlaWdlblJlY29nbml6ZXI7XG5cbiAgZnVuY3Rpb24gaW1hZ2VQcm9jZXNzaW5nMih7IG1zZywgcGF5bG9hZCB9KSB7XG4gICAgLy8gU2VnbWVudGluZyB0aGUgaGFuZCBhbmQgZXh0cmFjdGluZyB0aGUgUk9JXG4gICAgLy8gMSBTZWdtZW50IHRoZSBoYW5kIHVzaW5nIFNraW4tQ29sb3IgbW9kZWwgYWxnb3JpdGhtXG4gICAgbGV0IHJnYmFJbWcgPSBjdi5tYXRGcm9tSW1hZ2VEYXRhKHBheWxvYWQpOyAvLyBjdi5NYXRcbiAgICBsZXQgcmdiSW1nID0gbmV3IGN2Lk1hdCgpO1xuICAgIGN2LmN2dENvbG9yKHJnYmFJbWcsIHJnYkltZywgY3YuQ09MT1JfUkdCQTJSR0IpO1xuICAgIGN2LnJlc2l6ZShyZ2JJbWcsIHJnYkltZywgbmV3IGN2LlNpemUoNjQwLCA0ODApKTtcbiAgICBsZXQgc2VnbWVudGVkSW1hZ2UgPSBkb1ByZXByb2Nlc3NpbmcocmdiSW1nKTtcblxuICAgIC8vIDIgVE9ETzogZmluZGluZyBpbXBvcnRhbnQgcG9pbnRzIG9uIHRoZSBoYW5kXG4gICAgLy8gS2V5cG9pbnRzIHN0cnVjdF9rZXlwb2ludHMgPSBmaW5kS2V5cG9pbnRzKHNlZ21lbnRlZEltYWdlKTtcbiAgICBjb25zdCBrZXlwb2ludHMgPSBmaW5kS2V5cG9pbnRzKHNlZ21lbnRlZEltYWdlKTtcbiAgICAvLyBwdXR0aW5nIGluIHRoZSBleHBlY3RlZCBST0kgc2luY2UgaGF2aW5nIGRpZmZpY3VsdHkgd2l0aCB0aGlzXG4gICAgLy8gUm90YXRpbmcgdGhlIGlucHV0IGltYWdlXG4gICAgbGV0IHJvdEFscGhhID0gMC4zMjg0MDQwODc0NTQ4Mzc1O1xuICAgIGxldCBjZW50ZXJQb2ludCA9IG5ldyBjdi5Qb2ludChyZ2JJbWcuY29scyAvIDIsIHJnYkltZy5yb3dzIC8gMik7XG4gICAgbGV0IHJvdE1hdCA9IGN2LmdldFJvdGF0aW9uTWF0cml4MkQoXG4gICAgICBjZW50ZXJQb2ludCxcbiAgICAgIC1yb3RBbHBoYSAqICgxODAgLyAzLjE0MTUpLFxuICAgICAgMVxuICAgICk7XG4gICAgLy8gTWF0IHJvdE1hdCA9IGdldFJvdGF0aW9uTWF0cml4MkQoY2VudGVyUG9pbnQsIC1yb3RBbHBoYSooMTgwIC8gMy4xNDE1KSwgMS4wKTtcbiAgICAvLyB3YXJwQWZmaW5lKGlucHV0SW1hZ2UsIGlucHV0SW1hZ2UsIHJvdE1hdCwgaW5wdXRJbWFnZS5zaXplKCkpO1xuICAgIGN2LndhcnBBZmZpbmUocmdiSW1nLCByZ2JJbWcsIHJvdE1hdCwgcmdiYUltZy5zaXplKCkpOyAvLywgY3YuSU5URVJfTElORUFSLCBjdi5CT1JERVJfQ09OU1RBTlQsIG5ldyBjdi5TY2FsYXIoKSk7XG4gICAgbGV0IHJvaU1hdCA9IG5ldyBjdi5NYXQoKTtcbiAgICAvLyBsZXQgcmVjdCA9IG5ldyBjdi5SZWN0KG5ldyBjdi5Qb2ludCh7eDogMzE2LCB5OiAyMjd9KSwgbmV3IGN2LlBvaW50KHt4OiA0MjcsIHk6IDMzN30pKVxuICAgIC8vIGxldCByZWN0ID0gbmV3IGN2LlJlY3QoMzQwLCAyMDUsIDEwMCwgMTIwKTtcbiAgICBsZXQgcmVjdCA9IG5ldyBjdi5SZWN0KDMxNiwgMjI3LCAxMTAsIDExMSk7XG4gICAgcm9pTWF0ID0gcmdiSW1nLnJvaShyZWN0KTtcbiAgICAvLyBjdi5yZXNpemUocm9pTWF0LCByb2lNYXQsIG5ldyBjdi5TaXplKDQ4MCwgNDgwKSk7XG5cbiAgICAvLyAzIFRPRE86IGZpbmRpbmcgYm91bmRpbmcgYm94IGZvciB0aGUgcGFsbVxuICAgIC8vIGV4dHJhY3RlZFJvaSA9IGNhbGNTcXVhcmVSb2koc3RydWN0X2tleXBvaW50cyk7XG4gICAgLy8gVE9ETzogRXh0cmFjdGluZyBmZWF0dXJlcyBmcm9tIHRoZSBST0lcbiAgICAvL0ZlYXR1cmUgMTI4eDEyOFxuICAgIC8vIFRPRE86IE1hdGNoaW5nIHRoZSBleHRyYWN0ZWQgZmVhdHVyZSAoMTpOKVxuICAgIC8vIG1hdGNoZWQgZmVhdHVyZSAxMjh4MTI4XG4gICAgcG9zdE1lc3NhZ2UoeyBtc2csIHBheWxvYWQ6IGltYWdlRGF0YUZyb21NYXQocm9pTWF0KSB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGltYWdlUHJvY2Vzc2luZzNhKHsgbXNnLCBwYXlsb2FkIH0pIHtcbiAgICAvLyByZWY6IGh0dHBzOi8vYW5zd2Vycy5vcGVuY3Yub3JnL3F1ZXN0aW9uLzIxODc3NC9ob3ctdG8tZXh0cmFjdC1wYWxtLWxpbmVzL1xuICAgIGxldCByZ2JhTWF0ID0gY3YubWF0RnJvbUltYWdlRGF0YShwYXlsb2FkKTsgLy8gY3YuTWF0XG4gICAgbGV0IHJvaU1hdCA9IG5ldyBjdi5NYXQoKTtcbiAgICBsZXQgeCA9IDE2MDsgLy9cdHggY29vcmRpbmF0ZSBvZiB0aGUgdmVydGV4IHdoaWNoIGlzIHRoZSB0b3AgbGVmdCBjb3JuZXIgb2YgdGhlIHJlY3RhbmdsZS5cbiAgICBsZXQgeSA9IDMyMDsgLy9cdHkgY29vcmRpbmF0ZSBvZiB0aGUgdmVydGV4IHdoaWNoIGlzIHRoZSB0b3AgbGVmdCBjb3JuZXIgb2YgdGhlIHJlY3RhbmdsZS5cbiAgICBsZXQgd2lkdGggPSA0NjcteC0xMjA7IC8vXHR0aGUgd2lkdGggb2YgdGhlIHJlY3RhbmdsZS5cbiAgICBsZXQgaGVpZ2h0ID0gNzIwLXktMTQwOyAvLyB0aGUgaGVpZ2h0IG9mIHRoZSByZWN0YW5nbGUuXG4gICAgbGV0IHJlY3QgPSBuZXcgY3YuUmVjdCh4LHksd2lkdGgsaGVpZ2h0KTtcbiAgICByb2lNYXQgPSByZ2JhTWF0LnJvaShyZWN0KTtcbiAgICAvLyBjdi5yZXNpemUocm9pTWF0LCByb2lNYXQsIG5ldyBjdi5TaXplKDEyOCwgMTI4KSk7XG5cbiAgICBsZXQgZ3JheXNjYWxlTWF0ID0gbmV3IGN2Lk1hdChyb2lNYXQuc2l6ZSgpLCBjdi5DVl84VUMxKTtcbiAgICBjdi5jdnRDb2xvcihyb2lNYXQsIGdyYXlzY2FsZU1hdCwgY3YuQ09MT1JfUkdCQTJHUkFZKTtcbiAgICAvLyBjdi5jdnRDb2xvcihncmF5c2NhbGVNYXQsIGdyYXlzY2FsZU1hdCwgY3YuQ09MT1JfUkdCMllDckNiKTsgLy8gQ29udmVydCBvcmlnaW5hbCBpbWFnZSB0byBZQ2JDciBjb2xvciBzcGFjZVxuICAgIC8vIGN2LmN2dENvbG9yKGdyYXlzY2FsZU1hdCwgZ3JheXNjYWxlTWF0LCBjdi5DT0xPUl9ZQ3JDQjJHUkFZKTtcbiAgICBjdi5lcXVhbGl6ZUhpc3QoZ3JheXNjYWxlTWF0LCBncmF5c2NhbGVNYXQpO1xuICAgIGNvbnN0IGtzaXplID0gbmV3IGN2LlNpemUoOSwgOSk7IC8vIGJsdXJyaW5nIGtlcm5lbCBzaXplLlxuICAgIGNvbnN0IHNpZ21hWCA9IDA7IC8vIEdhdXNzaWFuIGtlcm5lbCBzdGFuZGFyZCBkZXZpYXRpb24gaW4gWCBkaXJlY3Rpb24uXG4gICAgLy8gR2F1c3NpYW4ga2VybmVsIHN0YW5kYXJkIGRldmlhdGlvbiBpbiBZIGRpcmVjdGlvbjsgaWYgc2lnbWFZIGlzIHplcm8sXG4gICAgLy8gaXQgaXMgc2V0IHRvIGJlIGVxdWFsIHRvIHNpZ21hWCwgaWYgYm90aCBzaWdtYXMgYXJlIHplcm9zLCB0aGV5IGFyZVxuICAgIC8vIGNvbXB1dGVkIGZyb20ga3NpemUud2lkdGggYW5kIGtzaXplLmhlaWdodCwgdG8gZnVsbHkgY29udHJvbCB0aGUgcmVzdWx0XG4gICAgLy8gcmVnYXJkbGVzcyBvZiBwb3NzaWJsZSBmdXR1cmUgbW9kaWZpY2F0aW9ucyBvZiBhbGwgdGhpcyBzZW1hbnRpY3MsXG4gICAgLy8gaXQgaXMgcmVjb21tZW5kZWQgdG8gc3BlY2lmeSBhbGwgb2Yga3NpemUsIHNpZ21hWCwgYW5kIHNpZ21hWS5cbiAgICBjb25zdCBzaWdtYVkgPSAwO1xuICAgIC8vIHBpeGVsIGV4dHJhcG9sYXRpb24gbWV0aG9kKHNlZVxuICAgIC8vIGh0dHBzOi8vZG9jcy5vcGVuY3Yub3JnLzMuNC9kMi9kZTgvZ3JvdXBfX2NvcmVfX2FycmF5Lmh0bWwjZ2EyMDlmMmY0ODY5ZTMwNGM4MmQwNzczOTMzN2VhZTdjNSkuXG4gICAgY29uc3QgYm9yZGVyVHlwZSA9IGN2LkJPUkRFUl9ERUZBVUxUO1xuICAgIGN2LkdhdXNzaWFuQmx1cihcbiAgICAgIGdyYXlzY2FsZU1hdCxcbiAgICAgIGdyYXlzY2FsZU1hdCxcbiAgICAgIGtzaXplLFxuICAgICAgc2lnbWFYLFxuICAgICAgc2lnbWFZLFxuICAgICAgYm9yZGVyVHlwZVxuICAgICk7XG4gICAgY29uc3QgdGhyZXNob2xkMSA9IDQwOyAvLyBmaXJzdCB0aHJlc2hvbGQgZm9yIHRoZSBoeXN0ZXJlc2lzIHByb2NlZHVyZS5cbiAgICBjb25zdCB0aHJlc2hvbGQyID0gODA7IC8vIHNlY29uZCB0aHJlc2hvbGQgZm9yIHRoZSBoeXN0ZXJlc2lzIHByb2NlZHVyZS5cbiAgICBjb25zdCBhcGVydHVyZVNpemUgPSAzOyAvLyBhcGVydHVyZSBzaXplIGZvciB0aGUgU29iZWwgb3BlcmF0b3IuXG4gICAgLy8gc3BlY2lmaWVzIHRoZSBlcXVhdGlvbiBmb3IgZmluZGluZyBncmFkaWVudCBtYWduaXR1ZGUuIElmIGl0IGlzIFRydWUsXG4gICAgLy8gaXQgdXNlcyB0aGUgZXF1YXRpb24gbWVudGlvbmVkIGFib3ZlIHdoaWNoIGlzIG1vcmUgYWNjdXJhdGUsIG90aGVyd2lzZSBpdFxuICAgIC8vIHVzZXMgdGhpcyBmdW5jdGlvbjogRWRnZV9HcmFkaWVudChHKT18R3h8K3xHeXwuXG4gICAgY29uc3QgbDJncmFkaWVudCA9IGZhbHNlO1xuICAgIGN2LkNhbm55KFxuICAgICAgZ3JheXNjYWxlTWF0LFxuICAgICAgZ3JheXNjYWxlTWF0LFxuICAgICAgdGhyZXNob2xkMSxcbiAgICAgIHRocmVzaG9sZDIsXG4gICAgICBhcGVydHVyZVNpemUsXG4gICAgICBsMmdyYWRpZW50XG4gICAgKTtcbiAgICAvLyBvdXRwdXQgdmVjdG9yIG9mIGxpbmVzKGN2LjMyU0M0IHR5cGUpLiBFYWNoIGxpbmUgaXMgcmVwcmVzZW50ZWQgYnkgYSA0LWVsZW1lbnQgdmVjdG9yXG4gICAgLy8gKHgxLHkxLHgyLHkyKSAsd2hlcmUgKHgxLHkxKSBhbmQgKHgyLHkyKSBhcmUgdGhlIGVuZGluZyBwb2ludHMgb2YgZWFjaCBkZXRlY3RlZCBsaW5lIHNlZ21lbnQuXG4gICAgbGV0IGxpbmVzID0gbmV3IGN2Lk1hdCgpO1xuICAgIGxldCBjb2xvciA9IG5ldyBjdi5TY2FsYXIoMjU1LCAyNTUsIDI1NSk7XG4gICAgY29uc3QgcmhvID0gMTsgLy8gZGlzdGFuY2UgcmVzb2x1dGlvbiBvZiB0aGUgYWNjdW11bGF0b3IgaW4gcGl4ZWxzLlxuICAgIGNvbnN0IHRoZXRhID0gTWF0aC5QSSAvIDE4MDsgLy8gYW5nbGUgcmVzb2x1dGlvbiBvZiB0aGUgYWNjdW11bGF0b3IgaW4gcmFkaWFucy5cbiAgICAvLyBhY2N1bXVsYXRvciB0aHJlc2hvbGQgcGFyYW1ldGVyLiBPbmx5IHRob3NlIGxpbmVzIGFyZSByZXR1cm5lZCB0aGF0IGdldCBlbm91Z2ggdm90ZXNcbiAgICBjb25zdCB0aHJlc2hvbGQgPSAxNTtcbiAgICAvLyBjb25zdCB0aHJlc2hvbGQgPSAzMDtcbiAgICBjb25zdCBtaW5MaW5lTGVuZ3RoID0gMzA7IC8vIG1pbmltdW0gbGluZSBsZW5ndGguIExpbmUgc2VnbWVudHMgc2hvcnRlciB0aGFuIHRoYXQgYXJlIHJlamVjdGVkLlxuICAgIC8vIGNvbnN0IG1pbkxpbmVMZW5ndGggPSA1MDtcbiAgICBjb25zdCBtYXhMaW5lR2FwID0gMjA7IC8vIG1heGltdW0gYWxsb3dlZCBnYXAgYmV0d2VlbiBwb2ludHMgb24gdGhlIHNhbWUgbGluZSB0byBsaW5rIHRoZW0uXG4gICAgLy8gY29uc3QgbWF4TGluZUdhcCA9IDIwO1xuICAgIGN2LkhvdWdoTGluZXNQKFxuICAgICAgZ3JheXNjYWxlTWF0LFxuICAgICAgbGluZXMsXG4gICAgICByaG8sXG4gICAgICB0aGV0YSxcbiAgICAgIHRocmVzaG9sZCxcbiAgICAgIG1pbkxpbmVMZW5ndGgsXG4gICAgICBtYXhMaW5lR2FwXG4gICAgKTtcbiAgICBsZXQgZHN0ID0gbmV3IGN2Lk1hdChncmF5c2NhbGVNYXQuc2l6ZSgpLCBjdi5DVl84VUMxKTtcbiAgICAvLyBkcmF3IGxpbmVzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5yb3dzOyArK2kpIHtcbiAgICAgIGxldCBzdGFydFBvaW50ID0gbmV3IGN2LlBvaW50KFxuICAgICAgICBsaW5lcy5kYXRhMzJTW2kgKiA0XSxcbiAgICAgICAgbGluZXMuZGF0YTMyU1tpICogNCArIDFdXG4gICAgICApO1xuICAgICAgbGV0IGVuZFBvaW50ID0gbmV3IGN2LlBvaW50KFxuICAgICAgICBsaW5lcy5kYXRhMzJTW2kgKiA0ICsgMl0sXG4gICAgICAgIGxpbmVzLmRhdGEzMlNbaSAqIDQgKyAzXVxuICAgICAgKTtcbiAgICAgIGN2LmxpbmUoZHN0LCBzdGFydFBvaW50LCBlbmRQb2ludCwgY29sb3IpO1xuICAgIH1cbiAgICBjb25zdCBkYXRhID0gW107XG4gICAgY3YucmVzaXplKGRzdCwgZHN0LCBuZXcgY3YuU2l6ZSgxMjgsIDEyOCkpO1xuICAgIGZvcihsZXQgcm93PTA7IHJvdyA8IDEyODsgcm93KyspIHtcbiAgICAgIGNvbnN0IHJvd0l0ZW0gPSBbXTtcbiAgICAgIGZvcihsZXQgY29sPTA7IGNvbCA8IDEyODsgY29sKyspIHtcbiAgICAgICAgaWYoZHN0LnVjaGFyUHRyKHJvdywgY29sKVswXSA+IDEwMCkgeyAvLyB0aHJlc2hvbGQgdmFsdWUgZm9yIGRldGVjdGlvblxuICAgICAgICAgIGRzdC51Y2hhclB0cihyb3csIGNvbClbMF0gPSAyNTU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZHN0LnVjaGFyUHRyKHJvdywgY29sKVswXSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGl4ZWwgPSBkc3QudWNoYXJQdHIocm93LCBjb2wpO1xuICAgICAgICBjb25zdCBjb2xJdGVtID0gcGl4ZWxbMF0gPT09IDI1NSA/IDEgOiAwO1xuICAgICAgICByb3dJdGVtLnB1c2goY29sSXRlbSk7XG4gICAgICB9XG4gICAgICBkYXRhLnB1c2gocm93SXRlbSk7XG4gICAgfVxuICAgIC8vIGRlYnVnZ2VyO1xuICAgIHBvc3RNZXNzYWdlKHtcbiAgICAgIG1zZyxcbiAgICAgIC8vIHBheWxvYWQ6IGltYWdlRGF0YUZyb21NYXQoZHN0KVxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICB0ZW1wbGF0ZTogZGF0YSxcbiAgICAgICAgaW1nOiBpbWFnZURhdGFGcm9tTWF0KGRzdCksXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaW1hZ2VQcm9jZXNzaW5nMyh7IG1zZywgcGF5bG9hZCB9KSB7XG4gICAgbGV0IGZpbmFsTGluZXNNYXQgPSBuZXcgY3YuTWF0KDEyOCwgMTI4LCBjdi5DVl84VUMxLCBuZXcgY3YuU2NhbGFyKDApKTtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIGZvciAobGV0IGRhdGFJdGVtIG9mIGZpbmFsTGluZXMpIHtcbiAgICAgIGZpbmFsTGluZXNNYXQuZGF0YVtjb3VudF0gPSBkYXRhSXRlbTtcbiAgICAgIGNvdW50Kys7XG4gICAgfVxuICAgIHBvc3RNZXNzYWdlKHsgbXNnLCBwYXlsb2FkOiBpbWFnZURhdGFGcm9tTWF0KGZpbmFsTGluZXNNYXQpIH0pO1xuICAgIGxldCByZ2JhTWF0ID0gY3YubWF0RnJvbUltYWdlRGF0YShwYXlsb2FkKTsgLy8gY3YuTWF0XG4gICAgbGV0IHJvaUFmdGVyUHJlcHJvY2Vzc2luZyA9IGRvUHJlcHJvY2Vzc2luZ0dyYXlzY2FsZVNtKHJnYmFNYXQpO1xuICAgIGxldCBub3JtYWxpemVkUm9pID0gbm9ybWFsaXplSW1hZ2Uocm9pQWZ0ZXJQcmVwcm9jZXNzaW5nKTtcbiAgICBsZXQgZmluYWxMaW5lczIgPSBsb2NhdGVQcmluY2lwYWxMaW5lcyhub3JtYWxpemVkUm9pKTtcbiAgICAvLyBwb3N0TWVzc2FnZSh7IG1zZywgcGF5bG9hZDogaW1hZ2VEYXRhRnJvbU1hdChmaW5hbExpbmVzMikgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcmludE1hdChtYXQpIHtcbiAgICAvLyBOT1RFOiB0aGlzIGlzIGdyZWF0IGZvciBjb21wYXJpbmcgdGhlIG1hdHJpeCBkYXRhIGZyb20gdGhlIGMrKyBjb2RlIHRvIHNlZSBpZiBpdCBsaW5lcyB1cFxuICAgIC8vIGNvcnJlY3RseSAvIGlzIGRvaW5nIHRoZSBzYW1lIHRoaW5nIHdpdGggdGhlIGNvZGUgaGVyZS4gIEkgdXNlIHRoaXMgc2l0ZSB0byBjb21wYXJlXG4gICAgLy8gaHR0cDovL3d3dy5qc29uZGlmZi5jb20vICh5b3UgaGF2ZSB0byByZXBsYWNlIHRoZSBzZW1pY29sb25zIHdpdGggY29tbWFzIHdoZW5cbiAgICAvLyBkb2luZyAnY291dCA8PCBlbmQgPDwgbWF0IDw8IGVuZGw7JyBpbiB0aGUgYysrIGNvZGUgaW4gb3JkZXIgZm9yIHRoZSBvdXRwdXRzIHRvIGJlIHNhbWUpLlxuICAgIGNvbnNvbGUubG9nKFxuICAgICAgSlNPTi5zdHJpbmdpZnkoT2JqZWN0LmtleXMobWF0LmRhdGEpLm1hcCgoa2V5KSA9PiBtYXQuZGF0YVtrZXldKSlcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gaW1hZ2VQcm9jZXNzaW5nNCh7IG1zZywgcGF5bG9hZCB9KSB7XG4gICAgY29uc3QgcmdiYU1hdCA9IGN2Lm1hdEZyb21JbWFnZURhdGEocGF5bG9hZCk7XG4gICAgY29uc3QgbWF0ID0gZG9QcmVwcm9jZXNzaW5nR3JheXNjYWxlU20ocmdiYU1hdCk7XG4gICAgY29uc3QgZGlzdGFuY2VUcmFuc0ltZyA9IGRvRGlzdGFuY2VUcmFuc2Zvcm1hdGlvbihtYXQpO1xuICAgIGlmIChzdG9yZWRGZWF0dXJlcy5sZW5ndGggPT0gMCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOiBkYXRhYmFzZSBpcyBlbXB0eVwiKTtcbiAgICB9XG4gICAgbGV0IG1pbiA9IDIxNDc0ODM2NDcuMDsgLy8gbWF4IGludFxuICAgIGxldCBtaW5faWQgPSAwO1xuICAgIGxldCBtYXRjaGVkSW5kZXggPSAtMTtcbiAgICBsZXQgc3VtID0gMDtcbiAgICAvLyBDYWxjdWxhdGUgQ2hhbWZlciBkaXN0YW5jZVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RvcmVkRmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHN1bSA9IDA7XG4gICAgICAvLyBhcnJheSBvZiBwb2ludHMgZm9yIHRoaXMgcGFydGljdWxhciB0ZW1wbGF0ZVxuICAgICAgbGV0IHRlbXAgPSBzdG9yZWRGZWF0dXJlc1tpXS5mZWF0dXJlRGF0YTtcbiAgICAgIGlmICh0ZW1wLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGVtcC5sZW5ndGg7ICsraikge1xuICAgICAgICAgIC8vIFswXSBpcyB4IGFuZCBbMV0gaXMgeVxuICAgICAgICAgIHN1bSArPSBkaXN0YW5jZVRyYW5zSW1nLnVjaGFyUHRyKHRlbXBbal1bMF0sIHRlbXBbal1bMV0pWzBdO1xuICAgICAgICB9XG4gICAgICAgIHN1bSA9IHN1bSAvICh0ZW1wLmxlbmd0aCAqIDI1NSk7XG4gICAgICAgIGlmIChzdW0gPCBtaW4pIHtcbiAgICAgICAgICBtaW4gPSBzdW07XG4gICAgICAgICAgbWluX2lkID0gc3RvcmVkRmVhdHVyZXNbaV0udXNlcklkO1xuICAgICAgICAgIG1hdGNoZWRJbmRleCA9IGk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coYHN1bSAwLjAyNjg4OTI5NzM4NTYyMDkxNyBtYXRjaGVkSW5kZXggMiBtaW4gMC4wMDYwMzA4OTcyMDczNjc3OTZgKTtcbiAgICAvLyBjb25zb2xlLmxvZyhgc3VtICR7c3VtfSBtYXRjaGVkSW5kZXggJHttYXRjaGVkSW5kZXh9IG1pbiAke21pbn1gKTtcbiAgICBsZXQgbWF0Y2hlZEltYWdlID0gbmV3IGN2Lk1hdCgxMjgsIDEyOCwgY3YuQ1ZfOFVDMSwgbmV3IGN2LlNjYWxhcigwKSk7XG5cbiAgICAvLyBmb3IgKGxldCBwIG9mIG1hdGNoZWRUZW1wbGF0ZSkge1xuICAgIGZvciAobGV0IHAgb2Ygc3RvcmVkRmVhdHVyZXNbbWF0Y2hlZEluZGV4XS5mZWF0dXJlRGF0YSkge1xuICAgICAgbWF0Y2hlZEltYWdlLnVjaGFyUHRyKHBbMF0sIHBbMV0pWzBdID0gMjU1O1xuICAgIH1cbiAgICBwb3N0TWVzc2FnZSh7XG4gICAgICBtc2csXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGRpc3RhbmNlOiBtaW4sXG4gICAgICAgIHVzZXJJZDogbWluX2lkLFxuICAgICAgICBpbWc6IGltYWdlRGF0YUZyb21NYXQobWF0Y2hlZEltYWdlKSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBkb0Rpc3RhbmNlVHJhbnNmb3JtYXRpb24oaW1nKSB7XG4gICAgLy8gVHdvIHBhc3MgYWxnb3JpdGhtIHdpdGggdHdvIEV1Y2xpZGVhbiBrZXJuZWxcbiAgICBsZXQgaW52SW1nID0gbmV3IGN2Lk1hdCgpO1xuICAgIGN2LnN1YnRyYWN0KFxuICAgICAgbmV3IGN2Lk1hdCgxMjgsIDEyOCwgY3YuQ1ZfOFVDMSwgbmV3IGN2LlNjYWxhcigyNTUpKSxcbiAgICAgIGltZyxcbiAgICAgIGludkltZ1xuICAgICk7XG4gICAgLy8gRmlyc3QgcGFzcyBmcm9tIHRvcCBsZWZ0XG4gICAgZm9yIChsZXQgeCA9IDE7IHggPCBpbnZJbWcucm93cyAtIDE7IHgrKykge1xuICAgICAgZm9yIChsZXQgeSA9IDE7IHkgPCBpbnZJbWcuY29scyAtIDE7IHkrKykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaW52SW1nLnVjaGFyUHRyKHgsIHkpWzBdID5cbiAgICAgICAgICBpbnZJbWcudWNoYXJQdHIoeCAtIDEsIHkgLSAxKVswXSArIE1hdGguc3FydCgyKVxuICAgICAgICApIHtcbiAgICAgICAgICBpbnZJbWcudWNoYXJQdHIoeCwgeSlbMF0gPVxuICAgICAgICAgICAgaW52SW1nLnVjaGFyUHRyKHggLSAxLCB5IC0gMSlbMF0gKyBNYXRoLnNxcnQoMik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGludkltZy51Y2hhclB0cih4LCB5KVswXSA+IGludkltZy51Y2hhclB0cih4LCB5IC0gMSlbMF0gKyAxKSB7XG4gICAgICAgICAgaW52SW1nLnVjaGFyUHRyKHgsIHkpWzBdID1cbiAgICAgICAgICAgIGludkltZy51Y2hhclB0cih4LCB5IC0gMSlbMF0gKyBNYXRoLnNxcnQoMik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgIGludkltZy51Y2hhclB0cih4LCB5KVswXSA+XG4gICAgICAgICAgaW52SW1nLnVjaGFyUHRyKHggKyAxLCB5IC0gMSlbMF0gKyBNYXRoLnNxcnQoMilcbiAgICAgICAgKSB7XG4gICAgICAgICAgaW52SW1nLnVjaGFyUHRyKHgsIHkpWzBdID1cbiAgICAgICAgICAgIGludkltZy51Y2hhclB0cih4ICsgMSwgeSAtIDEpWzBdICsgTWF0aC5zcXJ0KDIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbnZJbWcudWNoYXJQdHIoeCwgeSlbMF0gPiBpbnZJbWcudWNoYXJQdHIoeCAtIDEsIHkpWzBdICsgMSkge1xuICAgICAgICAgIGludkltZy51Y2hhclB0cih4LCB5KVswXSA9IGludkltZy51Y2hhclB0cih4IC0gMSwgeSlbMF0gKyAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIFNlY29uZCBwYXNzIGZyb20gYm90dG9tIHJpZ2h0XG4gICAgZm9yIChsZXQgeCA9IGludkltZy5yb3dzIC0gMjsgeCA+PSAxOyB4LS0pIHtcbiAgICAgIGZvciAobGV0IHkgPSBpbnZJbWcuY29scyAtIDI7IHkgPj0gMTsgeS0tKSB7XG4gICAgICAgIGlmIChpbnZJbWcudWNoYXJQdHIoeCwgeSlbMF0gPiBpbnZJbWcudWNoYXJQdHIoeCArIDEsIHkpWzBdICsgMSkge1xuICAgICAgICAgIGludkltZy51Y2hhclB0cih4LCB5KVswXSA9IGludkltZy51Y2hhclB0cih4ICsgMSwgeSlbMF0gKyAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpbnZJbWcudWNoYXJQdHIoeCwgeSlbMF0gPlxuICAgICAgICAgIGludkltZy51Y2hhclB0cih4IC0gMSwgeSArIDEpWzBdICsgTWF0aC5zcXJ0KDIpXG4gICAgICAgICkge1xuICAgICAgICAgIGludkltZy51Y2hhclB0cih4LCB5KVswXSA9XG4gICAgICAgICAgICBpbnZJbWcudWNoYXJQdHIoeCAtIDEsIHkgKyAxKVswXSArIE1hdGguc3FydCgyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW52SW1nLnVjaGFyUHRyKHgsIHkpWzBdID4gaW52SW1nLnVjaGFyUHRyKHgsIHkgKyAxKVswXSArIDEpIHtcbiAgICAgICAgICBpbnZJbWcudWNoYXJQdHIoeCwgeSlbMF0gPSBpbnZJbWcudWNoYXJQdHIoeCwgeSArIDEpWzBdICsgMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXG4gICAgICAgICAgaW52SW1nLnVjaGFyUHRyKHgsIHkpWzBdID5cbiAgICAgICAgICBpbnZJbWcudWNoYXJQdHIoeCArIDEsIHkgKyAxKVswXSArIE1hdGguc3FydCgyKVxuICAgICAgICApIHtcbiAgICAgICAgICBpbnZJbWcudWNoYXJQdHIoeCwgeSlbMF0gPVxuICAgICAgICAgICAgaW52SW1nLnVjaGFyUHRyKHggKyAxLCB5ICsgMSlbMF0gKyBNYXRoLnNxcnQoMik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGludkltZztcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvY2F0ZVByaW5jaXBhbExpbmVzKG1hdCkge1xuICAgIC8vIExvY2F0aW5nIHByaW5jaXBhbCBsaW5lcyBpbiBmb3VyIGRpcmVjdGlvbnNcbiAgICAvLyBOT1RFOiB0aGlzIGRvZXNuJ3Qgc2VlbSB0byB3b3JrIGNvcnJlY3RseSwgdGhlIDQ1IGlzIHRoZSBvbmx5IG9uZSB0aGF0IGRldGVjdHMgcGl4ZWxzXG4gICAgLy8gaXQgcHJvYmFibHkgaGFzIHRvIGRvIHdpdGggdGhlIGluaXRpYWwgaW1hZ2Ugbm90IG1hdGNoaW5nIGNvcnJlY3RseVxuICAgIGxldCBsaW5lc0luRGlyMCA9IGxvY2F0ZVByaW5jaXBhbExpbmVJbkdpdmVuRGlyZWN0aW9uKG1hdCwgSDFfMCwgSDJfMCwgMCk7XG4gICAgbGV0IGxpbmVzSW5EaXI5MCA9IGxvY2F0ZVByaW5jaXBhbExpbmVJbkdpdmVuRGlyZWN0aW9uKFxuICAgICAgbWF0LFxuICAgICAgSDFfOTAsXG4gICAgICBIMl85MCxcbiAgICAgIDkwXG4gICAgKTtcbiAgICBsZXQgbGluZXNJbkRpcjQ1ID0gbG9jYXRlUHJpbmNpcGFsTGluZUluR2l2ZW5EaXJlY3Rpb24oXG4gICAgICBtYXQsXG4gICAgICBIMV80NSxcbiAgICAgIEgyXzQ1LFxuICAgICAgNDVcbiAgICApO1xuICAgIGxldCBsaW5lc0luRGlyMTM1ID0gbG9jYXRlUHJpbmNpcGFsTGluZUluR2l2ZW5EaXJlY3Rpb24oXG4gICAgICBtYXQsXG4gICAgICBIMV8xMzUsXG4gICAgICBIMl8xMzUsXG4gICAgICAxMzVcbiAgICApO1xuICAgIGNvbnN0IGxpbmVzID0gbmV3IGN2Lk1hdCgxMjgsIDEyOCwgY3YuQ1ZfOFVDMSwgbmV3IGN2LlNjYWxhcigwKSk7XG4gICAgLy8gcHJldHR5IGhlbHBmdWwgZ3VpZGVcbiAgICAvLyBodHRwczovL2tkcjIuY29tL3RlY2gvbWFpbi8xODEwLWVsZXdpc2UtbWF0cml4LW9wLW9wZW5jdi5odG1sXG4gICAgY3YuYml0d2lzZV9vcihsaW5lc0luRGlyNDUsIGxpbmVzSW5EaXI5MCwgbGluZXMpO1xuICAgIGN2LmJpdHdpc2Vfb3IobGluZXMsIGxpbmVzSW5EaXIwLCBsaW5lcyk7XG4gICAgY3YuYml0d2lzZV9vcihsaW5lcywgbGluZXNJbkRpcjEzNSwgbGluZXMpO1xuICAgIHJldHVybiBsaW5lcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvY2F0ZVByaW5jaXBhbExpbmVJbkdpdmVuRGlyZWN0aW9uKG1hdCwgSDEsIEgyLCBkZWdyZWUpIHtcbiAgICAvLyBEZWZpbmVzIHRoZSByYW5nZSBvZiB0aGUgZmlyc3Qtb3JkZXIgZGVyaXZhdGl2ZSdzIGNoYW5nZSBkZXRlY3Rpb25cbiAgICBjb25zdCBmaXJzdERlcml2Q2hhbmdlV2lkdGggPSA0O1xuICAgIC8vIERlZmluZXMgdGhlIHNlY29uZC1vcmRlciBkZXJpdmF0aXZlJ3MgdHJlc2hvbGQgdmFsdWVcbiAgICBjb25zdCBzZWNvbmREZXJpdlRocmVzaG9sZFZhbHVlID0gMTA7XG4gICAgbGV0IEgxX3Jvd3MgPSBIMS5sZW5ndGg7XG4gICAgbGV0IEgxX2NvbHMgPSBIMVswXS5sZW5ndGg7XG4gICAgLy8gRmlyc3QgZGVyaXZhdGl2ZSBvZiB0aGUgaW5wdXQgaW1hZ2VcbiAgICBsZXQgSV9kZXIgPSBbXTtcbiAgICAvLyBTZWNvbmQgZGVyaXZhdGUgb2YgdGhlIGlucHV0IGltYWdlXG4gICAgbGV0IElfZGVyMiA9IFtdO1xuICAgIC8vIEluaXRpYWxpemUgZmlyc3QtIGFuZCBzZWNvbmQtb3JkZXIgZGVyaXZhdGl2ZXNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyODsgKytpKSB7XG4gICAgICBsZXQgcm93ID0gW107XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEyODsgKytqKSB7XG4gICAgICAgIHJvdy5wdXNoKDAuMCk7XG4gICAgICB9XG4gICAgICBJX2Rlci5wdXNoKHJvdyk7XG4gICAgICBJX2RlcjIucHVzaChyb3cpO1xuICAgIH1cblxuICAgIC8vIENhbGN1bGF0ZSBmaXJzdC0gYW5kIHNlY29uZC1vcmRlciBkZXJpdmF0aXZlc1xuICAgIGZvciAobGV0IGkgPSBNYXRoLmZsb29yKEgxX3Jvd3MgLyAyKTsgaSA8IDEyOCAtIEgxX3Jvd3MgLyAyOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSBNYXRoLmZsb29yKEgxX2NvbHMgLyAyKTsgaiA8IDEyOCAtIEgxX2NvbHMgLyAyOyBqKyspIHtcbiAgICAgICAgZm9yIChsZXQgX2kgPSAtTWF0aC5mbG9vcihIMV9yb3dzIC8gMik7IF9pIDw9IEgxX3Jvd3MgLyAyOyBfaSsrKSB7XG4gICAgICAgICAgZm9yIChsZXQgX2ogPSAtTWF0aC5mbG9vcihIMV9jb2xzIC8gMik7IF9qIDw9ICsoSDFfY29scyAvIDIpOyBfaisrKSB7XG4gICAgICAgICAgICBjb25zdCBtYXRWYWx1ZSA9IG1hdC51Y2hhclB0cihpICsgX2ksIGogKyBfailbMF07XG4gICAgICAgICAgICBjb25zdCBoUm93ID0gX2kgKyBNYXRoLmZsb29yKEgxX3Jvd3MgLyAyKTtcbiAgICAgICAgICAgIGNvbnN0IGhDb2wgPSBfaiArIE1hdGguZmxvb3IoSDFfY29scyAvIDIpO1xuICAgICAgICAgICAgSV9kZXJbaV1bal0gKz0gbWF0VmFsdWUgKiBIMVtoUm93XVtoQ29sXTtcbiAgICAgICAgICAgIElfZGVyMltpXVtqXSArPSBtYXRWYWx1ZSAqIEgyW2hSb3ddW2hDb2xdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENyZWF0ZSBiaW5hcnkgaW1hZ2UsIHRoaXMgd2lsbCBjb250YWluIHRoZSBleHRyYWN0ZWQgcHJpbmNpcGFsIGxpbmVzIGluIGEgZ2l2ZW4gZGlyZWN0aW9uXG4gICAgbGV0IGJpbmFyeUltYWdlID0gbmV3IGN2Lk1hdCgxMjgsIDEyOCwgY3YuQ1ZfOFVDMSwgbmV3IGN2LlNjYWxhcigwLCAwLCAwKSk7XG5cbiAgICAvLyBMb2NhdGluZyBjaGFuZ2VzIGluIGZpcnN0LW9yZGVyIGRlcml2YXRpdmVzIGluIDQ1IGRpcmVjdGlvblxuICAgIGlmIChkZWdyZWUgPT0gNDUpIHtcbiAgICAgIC8vIFRyYXZlcnNpbmcgdGhlIG1hdHJpeCBkaWFnb25hbCAoYm90dG9tLWxlZnQgdG8gdG9wLXJpZ2h0KVxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAyICogMTI4IC0gMjsgKytpKSB7XG4gICAgICAgIGxldCBrID0gaSA8IDEyOCA/IDAgOiBpIC0gMTI4ICsgMTtcbiAgICAgICAgZm9yIChsZXQgaiA9IGsgKyAxOyBqIDw9IGkgLSBrOyArK2opIHtcbiAgICAgICAgICBsZXQgZGVyaXZDaGFuZ2VGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIC8vIENoZWNraW5nIGlmIHRoZSBkZXJpdmF0aXZlJ3Mgc2lnbiBoYXMgY2hhbmdlZCBieSBjb21wYXJpbmcgI2R3IG5laWdoYm9yc1xuICAgICAgICAgIGZvciAobGV0IGR3ID0gMTsgZHcgPD0gZmlyc3REZXJpdkNoYW5nZVdpZHRoOyArK2R3KSB7XG4gICAgICAgICAgICBpZiAoaXNJbnNpZGVUaGVCb3VuZGFyeShqIC0gZHcsIGkgLSBqKSkge1xuICAgICAgICAgICAgICBpZiAoSV9kZXJbal1baSAtIGpdICogSV9kZXJbaiAtIGR3XVtpIC0gal0gPCAwKSB7XG4gICAgICAgICAgICAgICAgZGVyaXZDaGFuZ2VGb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLyogSWYgZmlyc3Qtb3JkZXIgZGVyaXZhdGl2ZSdzIHNpZ24gaGFzIGNoYW5nZWQgYW5kIHRoZSBzZWNvbmQtb3JkZXIgZGVyaXZhdGl2ZSdzIHZhbHVlIGlzIGdyZWF0ZXJcblx0XHRcdFx0ICB0aGFuIHRoZSB0aHJlc2hvbGQsIHRoZW4gc2V0dGluZyB0aGUgY3VycmVudCBwaXhlbCB0byAyNTUsIG90aGVyd2lzZSB0byAwICovXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgKGRlcml2Q2hhbmdlRm91bmQgfHwgSV9kZXJbal1baSAtIGpdID09IDApICYmXG4gICAgICAgICAgICBJX2RlcjJbal1baSAtIGpdID4gc2Vjb25kRGVyaXZUaHJlc2hvbGRWYWx1ZVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgYmluYXJ5SW1hZ2UudWNoYXJQdHIoaiwgaSAtIGopWzBdID0gMjU1O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBiaW5hcnlJbWFnZS51Y2hhclB0cihqLCBpIC0gailbMF0gPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyhiaW5hcnlJbWFnZS5kYXRhKS5tYXAoa2V5ID0+IGJpbmFyeUltYWdlLmRhdGFba2V5XSkpKTtcbiAgICByZXR1cm4gYmluYXJ5SW1hZ2U7XG4gIH1cblxuICBmdW5jdGlvbiBpc0luc2lkZVRoZUJvdW5kYXJ5KGksIGopIHtcbiAgICBpZiAoaSA+IDAgJiYgaSA8IDEyOCAmJiBqID4gMCAmJiBqIDwgMTI4KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZUltYWdlKG1hdCkge1xuICAgIC8qIEFwcGx5aW5nIENMQUhFICovXG4gICAgbGV0IHRpbGVHcmlkU2l6ZSA9IG5ldyBjdi5TaXplKDgsIDgpO1xuICAgIGxldCBjbGFoZSA9IG5ldyBjdi5DTEFIRSg0LCB0aWxlR3JpZFNpemUpO1xuICAgIGNsYWhlLmFwcGx5KG1hdCwgbWF0KTtcblxuICAgIC8qIEFwcGx5aW5nIGEgbG93LXBhc3MgZmlsdGVyICovXG4gICAgbGV0IGtzaXplID0gbmV3IGN2LlNpemUoMywgMyk7XG4gICAgbGV0IGFuY2hvciA9IG5ldyBjdi5Qb2ludCgtMSwgLTEpO1xuICAgIGN2LmJsdXIobWF0LCBtYXQsIGtzaXplLCBhbmNob3IsIGN2LkJPUkRFUl9ERUZBVUxUKTtcblxuICAgIHJldHVybiBtYXQ7XG4gIH1cblxuICBmdW5jdGlvbiBkb1ByZXByb2Nlc3NpbmdHcmF5c2NhbGVTbShtYXQpIHtcbiAgICBjdi5jdnRDb2xvcihtYXQsIG1hdCwgY3YuQ09MT1JfUkdCQTJCR1IpO1xuICAgIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKG1hdC5kYXRhKS5tYXAoa2V5ID0+IG1hdC5kYXRhW2tleV0pKSk7XG4gICAgLy8gQ29udmVydCB0byBncmF5c2NhbGVcbiAgICBsZXQgZ3JheXNjYWxlTWF0ID0gbmV3IGN2Lk1hdChtYXQuc2l6ZSgpLCBjdi5DVl84VUMxKTtcbiAgICBjdi5jdnRDb2xvcihtYXQsIGdyYXlzY2FsZU1hdCwgY3YuQ09MT1JfQkdSMkdSQVkpO1xuICAgIC8vIFJlc2l6ZSBpdCB0byAxMjh4MTI4XG4gICAgY3YucmVzaXplKGdyYXlzY2FsZU1hdCwgZ3JheXNjYWxlTWF0LCBuZXcgY3YuU2l6ZSgxMjgsIDEyOCkpO1xuICAgIHJldHVybiBncmF5c2NhbGVNYXQ7XG4gIH1cblxuICBmdW5jdGlvbiBkb1ByZXByb2Nlc3NpbmcocmdiSW1nKSB7XG4gICAgLy8gY3YuY3Z0Q29sb3IocmdiSW1nLCByZ2JJbWcsIGN2LkNPTE9SX0JHUjJIU1YpO1xuICAgIGxldCB5Y2JjckltZyA9IG5ldyBjdi5NYXQoKTsgLy8gY3YuTWF0XG4gICAgLy8gQ29udmVydCBvcmlnaW5hbCBpbWFnZSB0byBZQ2JDciBjb2xvciBzcGFjZVxuICAgIGN2LmN2dENvbG9yKHJnYkltZywgeWNiY3JJbWcsIGN2LkNPTE9SX1JHQjJZQ3JDYik7XG4gICAgLy8gUGFyYW1ldGVycyBvZiB0aGUgc2tpbi1jb2xvciBtb2RlbFxuICAgIGxldCBjMTEgPSAwLjA0Nzk7XG4gICAgbGV0IGMxMiA9IDAuMDI1OTtcbiAgICBsZXQgYzIxID0gMC4wMjU5O1xuICAgIGxldCBjMjIgPSAwLjAyMTI7XG4gICAgbGV0IGsxID0gMC4wO1xuICAgIGxldCBrMiA9IDAuMDtcbiAgICBsZXQgeDEsIHgyO1xuICAgIGxldCBtMSA9IDExMy45NDU0O1xuICAgIGxldCBtMiA9IDE1Ny41MDUyO1xuICAgIGxldCBmMSwgZjI7XG4gICAgbGV0IHRocmVzaG9sZGVkID0gbmV3IGN2Lk1hdChcbiAgICAgIHljYmNySW1nLnJvd3MsXG4gICAgICB5Y2JjckltZy5jb2xzLFxuICAgICAgY3YuQ1ZfOFVDMSxcbiAgICAgIG5ldyBjdi5TY2FsYXIoMClcbiAgICApO1xuICAgIC8vIHRocmVzaG9sZGVkLnNldFRvKG5ldyBjdi5TY2FsYXIoMCkpO1xuICAgIC8vU2VnbWVudGluZyB0aGUgaGFuZFxuICAgIGxldCBwID0gMDtcbiAgICAvLyBjb25zb2xlLmxvZyh5Y2JjckltZy5kYXRhKTtcbiAgICAvLyBkZWJ1Z2dlcjtcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCB5Y2JjckltZy5yb3dzOyByb3crKykge1xuICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgeWNiY3JJbWcuY29sczsgY29sKyspIHtcbiAgICAgICAgLy8gbm90IHN1cmUgYWJvdXQgdGhpcyBwYXJ0LCB2YWx1ZXMgYXJlIGEgbGl0dGxlIGRpZmZlcmVudCB0aGFuIGMrK1xuICAgICAgICAvLyB4MSA9IHljYmNySW1nLmRhdGFbKHJvdyAqIGNvbCAqIHljYmNySW1nLmNoYW5uZWxzKCkpICsgMl07XG4gICAgICAgIC8vIHgyID0geWNiY3JJbWcuZGF0YVsocm93ICogY29sICogeWNiY3JJbWcuY2hhbm5lbHMoKSkgKyAxXTtcbiAgICAgICAgeDEgPSB5Y2JjckltZy51Y2hhclB0cihyb3csIGNvbClbMl07XG4gICAgICAgIHgyID0geWNiY3JJbWcudWNoYXJQdHIocm93LCBjb2wpWzFdO1xuICAgICAgICAvLyB4MSA9IHljYmNySW1nLmRhdGFbY29sICogeWNiY3JJbWcucm93cyAqIHljYmNySW1nLmNoYW5uZWxzKCkgKyBjb2wgKiB5Y2JjckltZy5jaGFubmVscygpICsgMl07XG4gICAgICAgIC8vIHgyID0geWNiY3JJbWcuZGF0YVtjb2wgKiB5Y2JjckltZy5yb3dzICogeWNiY3JJbWcuY2hhbm5lbHMoKSArIGNvbCAqIHljYmNySW1nLmNoYW5uZWxzKCkgKyAxXTtcbiAgICAgICAgZjEgPSAtMC41ICogKHgxIC0gbTEpO1xuICAgICAgICBmMiA9IC0wLjUgKiAoeDIgLSBtMik7XG4gICAgICAgIGsxID0gZjEgKiBjMTEgKyBmMiAqIGMyMTtcbiAgICAgICAgazIgPSBmMSAqIGMxMiArIGYyICogYzIyO1xuICAgICAgICAvLyBQcm9iYWJpbGl0eSBvZiB0aGUgcGl4ZWwgdGhhdCBiZWxvbmdzIHRvIGEgc2tpbiByZWdpb25cbiAgICAgICAgcCA9IE1hdGguZXhwKGsxICogKHgxIC0gbTEpICsgazIgKiAoeDIgLSBtMikpO1xuICAgICAgICBpZiAocCA+IDAuMTUpIHtcbiAgICAgICAgICB0aHJlc2hvbGRlZC51Y2hhclB0cihyb3csIGNvbClbMF0gPSAyNTU7XG4gICAgICAgICAgdGhyZXNob2xkZWQudWNoYXJQdHIocm93LCBjb2wpWzFdID0gMjU1O1xuICAgICAgICAgIHRocmVzaG9sZGVkLnVjaGFyUHRyKHJvdywgY29sKVsyXSA9IDI1NTtcbiAgICAgICAgICAvLyB0aHJlc2hvbGRlZC5kYXRhW3JvdyAqIGNvbF0gPSAyNTU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJvdyA9PSA0MiAmJiBjb2wgPT0gMzQ0KSB7XG4gICAgICAgICAgLy8gZGVidWdnZXI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJvdyA9PSAyMDEgJiYgY29sID49IDYwNSAmJiBjb2wgPCA2MTEpIHtcbiAgICAgICAgICAvLyBkZWJ1Z2dlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBjdi5yZWN0YW5nbGUodGhyZXNob2xkZWQsIHt4OjQ4OSx5Ojk5IH0sIHt4OjU4OSx5Ojk5fSwgWzI1NSwgMjU1LCAyNTUsIDI1NV0pO1xuICAgIHJldHVybiB0aHJlc2hvbGRlZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbmRLZXlwb2ludHMoc2VnbWVudGVkSW1hZ2UpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnZmluZGluZyBrZXlwb2ludHMnKTtcbiAgICBsZXQgcmVjdCA9IG5ldyBjdi5SZWN0KFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICBzZWdtZW50ZWRJbWFnZS5jb2xzIC0gMTUwLFxuICAgICAgc2VnbWVudGVkSW1hZ2Uucm93c1xuICAgICk7XG4gICAgbGV0IGxlZnRTaWRlID0gbmV3IGN2Lk1hdCgpO1xuICAgIGxlZnRTaWRlID0gc2VnbWVudGVkSW1hZ2Uucm9pKHJlY3QpO1xuICAgIC8vIEdldCBib3VuZGFyeSBwb2ludHMsIGJ5IGFwcGx5aW5nIGJvdW5kYXJ5IHRyYWNraW5nIGFsb2dpcnRobVxuICAgIC8vIGNvbnNvbGUubG9nKCdnZXR0aW5nIGJvdW5kYXJ5Jyk7XG4gICAgbGV0IGJvdW5kYXJ5VmVjdG9yID0gZ2V0Qm91bmRhcnkobGVmdFNpZGUpO1xuICAgIC8vIGRlYnVnZ2VyO1xuICAgIGZvciAobGV0IGJvdW5kYXJ5SXRlbSBvZiBib3VuZGFyeVZlY3Rvcikge1xuICAgICAgLy8gZGVidWdnZXI7XG4gICAgICBjdi5jaXJjbGUoXG4gICAgICAgIGxlZnRTaWRlLFxuICAgICAgICB7IHg6IGJvdW5kYXJ5SXRlbS54LCB5OiBib3VuZGFyeUl0ZW0ueSB9LFxuICAgICAgICAzLFxuICAgICAgICBbMTIwLCAxMjAsIDEyMCwgMjU1XSxcbiAgICAgICAgLTFcbiAgICAgICk7IC8vIGZvciBkZWJ1Z2dpbmdcbiAgICB9XG4gICAgLy8gRmluZCBzdGFydCBhbmQgZW5kIHBvaW50cyAodmVydGljYWxseSkgYXQgbGVmdCBzaWRlIG9mIHRoZSBpbWFnZVxuICAgIGxldCBzdGFydFBvaW50ID0gbmV3IGN2LlBvaW50KC0xLCAtMSk7XG4gICAgbGV0IGVuZFBvaW50ID0gbmV3IGN2LlBvaW50KC0xLCAtMSk7XG4gICAgbGV0IGZvdW5kU3RhcnQgPSBmYWxzZTtcbiAgICByZXR1cm4gbGVmdFNpZGU7XG4gICAgLy8gZm9yIChpbnQgaSA9IDA7IGkgPCBsZWZ0U2lkZS5yb3dzOyArK2kpe1xuICAgIC8vICAgaWYgKGZvdW5kU3RhcnQpe1xuICAgIC8vICAgICBpZiAobGVmdFNpZGUuYXQ8dWNoYXI+KGksIGxlZnRTaWRlLmNvbHMgLSAxKSA9PSAwKXtcbiAgICAvLyAgICAgICBzdGFydFBvaW50LnggPSBsZWZ0U2lkZS5jb2xzIC0gMTtcbiAgICAvLyAgICAgICBzdGFydFBvaW50LnkgPSBpO1xuICAgIC8vICAgICAgIGJyZWFrO1xuICAgIC8vICAgICB9XG4gICAgLy8gICB9XG4gICAgLy8gICBlbHNle1xuICAgIC8vICAgICBpZiAobGVmdFNpZGUuYXQ8dWNoYXI+KGksIGxlZnRTaWRlLmNvbHMgLSAxKSA9PSAyNTUpe1xuICAgIC8vICAgICAgIGZvdW5kU3RhcnQgPSB0cnVlO1xuICAgIC8vICAgICAgIGVuZFBvaW50LnggPSBsZWZ0U2lkZS5jb2xzIC0gMTtcbiAgICAvLyAgICAgICBlbmRQb2ludC55ID0gaTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgICAvLyAgICAvL0NoZWNrIGlmIHN0YXJ0UG9pbnQgYW5kIGVuZFBvaW50IHdhcyBzdWNjZXNzZnVseSBmb3VuZFxuICAgIC8vICAgIGlmKHN0YXJ0UG9pbnQueCA9PSAtMSAmJiBzdGFydFBvaW50LnkgPT0gLTEgfHwgZW5kUG9pbnQueCA9PSAtMSAmJiBlbmRQb2ludC55ID09IC0xKXtcbiAgICAvLyAgICAgdGhyb3cgUFBBRXhjZXB0aW9uKFwiS2V5cG9pbnRzIG5vdCBmb3VuZC5cIik7XG4gICAgLy8gfVxuXG4gICAgLy8gLy8gRmluZCB0aGUgY2VudGVyIHBvaW50ICh2ZXJ0aWNhbGx5KSBhdCByaWdodCBzaWRlIG9mIHRoZSBpbWFnZVxuICAgIC8vIFBvaW50IGNlbnRlclBvaW50KGxlZnRTaWRlLmNvbHMsIChzdGFydFBvaW50LnkgKyBlbmRQb2ludC55KSAvIDIpO1xuICAgIC8vIGNpcmNsZShpbnB1dEltYWdlLCBjZW50ZXJQb2ludCwgMiwgQ1ZfUkdCKDAsIDI1NSwgMCksIC0xKTtcblxuICAgIC8vIC8vIENhbGN1bGF0ZSBkaW5zdGFuY2VzIGJldHdlZW4gdGhlIGNlbnRlciBwb2ludHMgYW5kIGV2ZXJ5IGJvdW5kYXJ5IHBvaW50XG4gICAgLy8gdmVjdG9yPFBvaW50X3dpdGhfZGlzdGFuY2U+IGRpc3RhbmNlc0Zyb21DZW50ZXJQb2ludDtcblxuICAgIC8vIGZvciAoaW50IGkgPSAwOyBpIDwgYm91bmRhcnlWZWN0b3Iuc2l6ZSgpOyArK2kpe1xuICAgIC8vICAgUG9pbnRfd2l0aF9kaXN0YW5jZSBwO1xuICAgIC8vICAgcC5wb2ludC54ID0gYm91bmRhcnlWZWN0b3IuYXQoaSkueDtcbiAgICAvLyAgIHAucG9pbnQueSA9IGJvdW5kYXJ5VmVjdG9yLmF0KGkpLnk7XG5cbiAgICAvLyAgIHAuZGlzdGFuY2UgPSBzcXJ0KHBvdyhjZW50ZXJQb2ludC54IC0gcC5wb2ludC54LCAyKSArIHBvdyhjZW50ZXJQb2ludC55IC0gcC5wb2ludC55LCAyKSk7XG4gICAgLy8gICBkaXN0YW5jZXNGcm9tQ2VudGVyUG9pbnQucHVzaF9iYWNrKHApO1xuICAgIC8vIH1cblxuICAgIC8vIC8vIEZpbmRpbmcgdGhlIGxvY2FsIG1pbmltdW1zIG9uIHRoZSBkaXN0YW5jZSBmdW5jdGlvbiwgdGhlc2Ugd2lsbCBiZSBrZXlwb2ludHNcbiAgICAvLyAvLyBBcHBseWluZyBhIE1lYW4gZmlsdGVyIG9uIGRpc3RhbmNlIGZ1bmN0aW9uLCB0byBnZXQgcmlkIG9mIGZhbHNlIGxvY2FsIG1pbmltdW1zXG5cbiAgICAvLyB2ZWN0b3I8UG9pbnRfd2l0aF9kaXN0YW5jZT4gZmlsdGVyZWRfZGlzdGFuY2VzID0gZGlzdGFuY2VzRnJvbUNlbnRlclBvaW50O1xuXG4gICAgLy8gZG91YmxlIHN1bSA9IDAuMDtcbiAgICAvLyAgIGRvdWJsZSBrZXJuZWxfc2l6ZSA9IDU7XG5cbiAgICAvLyAgIGZvciAoaW50IGluZGV4ID0gMjsgaW5kZXggPCBkaXN0YW5jZXNGcm9tQ2VudGVyUG9pbnQuc2l6ZSgpIC0gMjsgaW5kZXgrKyl7XG4gICAgLy8gICBzdW0gPSBkaXN0YW5jZXNGcm9tQ2VudGVyUG9pbnQuYXQoaW5kZXggLSAyKS5kaXN0YW5jZSArIGRpc3RhbmNlc0Zyb21DZW50ZXJQb2ludC5hdChpbmRleCAtIDEpLmRpc3RhbmNlICsgZGlzdGFuY2VzRnJvbUNlbnRlclBvaW50LmF0KGluZGV4KS5kaXN0YW5jZSArIGRpc3RhbmNlc0Zyb21DZW50ZXJQb2ludC5hdChpbmRleCArIDEpLmRpc3RhbmNlICsgZGlzdGFuY2VzRnJvbUNlbnRlclBvaW50LmF0KGluZGV4ICsgMikuZGlzdGFuY2U7XG4gICAgLy8gICBmaWx0ZXJlZF9kaXN0YW5jZXMuYXQoaW5kZXgpLmRpc3RhbmNlID0gc3VtIC8ga2VybmVsX3NpemU7XG4gICAgLy8gfVxuXG4gICAgLy8gLy8gU2VhcmNpbmcgZm9yIGxvY2FsIG1pbmltdW1zLCB3aXRoIGEgcHJlZGVmaW5lZCBzdGVwc2l6ZSxcbiAgICAvLyAvLyBDaGVjayBpZiB0aGUgc3RlcHNpemUndGggcHJldmlvdXMgcG9pbnQgaXMgYmlnZ2VyIHRoYW4gdGhlIGN1cnJlbnQgcG9pbnRzIGFuZCB0aGUgc3RlcHNpemUndGggbmV4dCBwb2ludCBpcyBhbHNvIGJpZ2dlciB0aGFuIHRoZSBjdXJyZW50IHBvaW50XG4gICAgLy8gLy8gSWYgdGhlIHByZXZpb3VzIGNvbmRpdGlvbiBpcyB0cnVlLCB0aGVuIHRoZSBjdXJyZW50IHBvaW50IHdpbGwgYmUgc3RvcmVkIGFzIGEgbG9jYWwgbWluaW11bVxuXG4gICAgLy8gaW50IHN0ZXBzaXplID0gNTA7XG4gICAgLy8gdmVjdG9yPFBvaW50X3dpdGhfZGlzdGFuY2U+IG1pbmltdW1zO1xuXG4gICAgLy8gaWYgKGZpbHRlcmVkX2Rpc3RhbmNlcy5zaXplKCkgPCA1MDApIHRocm93IFBQQUV4Y2VwdGlvbihcIkJvdW5kYXJ5IG5vdCBmb3VuZC5cIik7XG5cbiAgICAvLyBmb3IgKGludCBpID0gc3RlcHNpemU7IGkgPCBmaWx0ZXJlZF9kaXN0YW5jZXMuc2l6ZSgpIC0gc3RlcHNpemU7ICsraSl7XG4gICAgLy8gICBpZiAoZmlsdGVyZWRfZGlzdGFuY2VzLmF0KGkgLSBzdGVwc2l6ZSkuZGlzdGFuY2UgPiBmaWx0ZXJlZF9kaXN0YW5jZXMuYXQoaSkuZGlzdGFuY2UgJiYgZmlsdGVyZWRfZGlzdGFuY2VzLmF0KGkgKyBzdGVwc2l6ZSkuZGlzdGFuY2UgPiBmaWx0ZXJlZF9kaXN0YW5jZXMuYXQoaSkuZGlzdGFuY2UpXG4gICAgLy8gICB7XG4gICAgLy8gICAgIFBvaW50X3dpdGhfZGlzdGFuY2UgdGVtcDtcbiAgICAvLyAgICAgdGVtcC5wb2ludCA9IGZpbHRlcmVkX2Rpc3RhbmNlcy5hdChpKS5wb2ludDtcbiAgICAvLyAgICAgdGVtcC5kaXN0YW5jZSA9IGZpbHRlcmVkX2Rpc3RhbmNlcy5hdChpKS5kaXN0YW5jZTtcblxuICAgIC8vICAgICBtaW5pbXVtcy5wdXNoX2JhY2sodGVtcCk7XG4gICAgLy8gICB9XG4gICAgLy8gfVxuXG4gICAgLy8gLy8gQ3JlYXRpbmcgdGhyZWUgY2x1c3RlcnMsIHRoZXNlIHdpbGwgY29udGFpbiBsb2NhbCBtaW5pbXVtIHBvaW50cyBhcm91bmQgdGhlIGtleXBvaW50cyAodmFsbGV5cyBiZXR3ZWVuIGZpbmdlcnMpXG4gICAgLy8gLy8gSXRlcmF0aW5nIHRocm91Z2ggdGhlIGxvY2FsIG1pbmltdW1zLCBpZiB0aGUgZGlzdGFuY2UgaXMgaGlnaGVyIHRoYW4gMTAgcGl4ZWxzIGJldHdlZW4gdGhlIG5leHQgYW5kIGN1cnJlbnQgcG9pbnQsIHRoZW4gdGhlIG5leHQgcG9pbnQgd2lsbCBiZSBjbGFzc2lmaWVkIGludG8gYSBuZXcgY2x1c3RlcixcbiAgICAvLyAvLyBvdGhlcndpc2UsIGl0IHdpbGwgYmUgY2xhc3NpZmllZCBpbnRvIHRoZSBjdXJyZW50IGNsdXN0ZXJcblxuICAgIC8vIHZlY3Rvcjx2ZWN0b3I8UG9pbnRfd2l0aF9kaXN0YW5jZT4+IG1pbl9jbHVzdGVycztcbiAgICAvLyB2ZWN0b3I8UG9pbnRfd2l0aF9kaXN0YW5jZT4gdGVtcF9yb3c7XG4gICAgLy8gZm9yIChpbnQgaSA9IDA7IGkgPCBtaW5pbXVtcy5zaXplKCkgLSAxOyArK2kpe1xuICAgIC8vICAgUG9pbnRfd2l0aF9kaXN0YW5jZSBjdXJyZW50LCBuZXh0O1xuICAgIC8vICAgY3VycmVudCA9IG1pbmltdW1zLmF0KGkpO1xuICAgIC8vICAgbmV4dCA9IG1pbmltdW1zLmF0KGkgKyAxKTtcbiAgICAvLyAgIGZsb2F0IGRpc3QgPSBzcXJ0KHBvdyhjdXJyZW50LnBvaW50LnggLSBuZXh0LnBvaW50LngsIDIpICsgcG93KGN1cnJlbnQucG9pbnQueSAtIG5leHQucG9pbnQueSwgMikpO1xuICAgIC8vICAgaWYgKGRpc3QgPiAxMCl7XG4gICAgLy8gICAgIG1pbl9jbHVzdGVycy5wdXNoX2JhY2sodGVtcF9yb3cpO1xuICAgIC8vICAgICB0ZW1wX3Jvdy5jbGVhcigpO1xuICAgIC8vICAgfVxuICAgIC8vICAgZWxzZXtcbiAgICAvLyAgICAgdGVtcF9yb3cucHVzaF9iYWNrKGN1cnJlbnQpO1xuICAgIC8vICAgfVxuICAgIC8vIH1cblxuICAgIC8vIGlmICh0ZW1wX3Jvdy5zaXplKCkgIT0gMCkgbWluX2NsdXN0ZXJzLnB1c2hfYmFjayh0ZW1wX3Jvdyk7XG5cbiAgICAvLyAvLyBSZXR1cm5pbmcgdGhpcyBzdHJ1Y3RcbiAgICAvLyBLZXlwb2ludHMga2V5cG9pbnRzO1xuXG4gICAgLy8gLy8gSWYgdGhlIG51bWJlciBvZiB0aGUgY2x1c3RlcnMgaXNuJ3QgZm91ciwgdGhlbiBzb21ldGhpbmcgd2VudCB3cm9uZ1xuICAgIC8vIGlmIChtaW5fY2x1c3RlcnMuc2l6ZSgpICE9IDQpIHtcbiAgICAvLyAgIGtleXBvaW50cy5zdWNjZXNzID0gZmFsc2U7XG4gICAgLy8gICB0aHJvdyBQUEFFeGNlcHRpb24oXCJLZXlwb2ludHMgbm90IGZvdW5kLlwiKTtcbiAgICAvLyB9XG4gICAgLy8gZWxzZXtcblxuICAgIC8vICAgLy8gU2VhcmNoIG1pbmltdW1zIGluIHRoZSBjbHVzdGVycywgYmFzZWQgb24gdGhlIGRpc3RhbmNlIGZyb20gdGhlIGNlbnRlciBwb2ludC4gVGhlc2Ugd2lsbCBiZSB0aGUga2V5cG9pbnRzLlxuXG4gICAgLy8gICBQb2ludF93aXRoX2Rpc3RhbmNlIGtleXBvaW50MSwga2V5cG9pbnQyLCBrZXlwb2ludDM7XG4gICAgLy8gICBrZXlwb2ludDEgPSAqbWluX2VsZW1lbnQobWluX2NsdXN0ZXJzWzFdLmJlZ2luKCksIG1pbl9jbHVzdGVyc1sxXS5lbmQoKSwgW10oY29uc3QgUG9pbnRfd2l0aF9kaXN0YW5jZSYgeCwgY29uc3QgUG9pbnRfd2l0aF9kaXN0YW5jZSYgeSkge3JldHVybiB4LmRpc3RhbmNlIDwgeS5kaXN0YW5jZTsgfSk7XG4gICAgLy8gICBjaXJjbGUoaW5wdXRJbWFnZSwga2V5cG9pbnQxLnBvaW50LCAyLCBDVl9SR0IoMjU1LCAwLCAwKSwgLTEpO1xuXG4gICAgLy8gICBrZXlwb2ludDIgPSAqbWluX2VsZW1lbnQobWluX2NsdXN0ZXJzWzJdLmJlZ2luKCksIG1pbl9jbHVzdGVyc1syXS5lbmQoKSwgW10oY29uc3QgUG9pbnRfd2l0aF9kaXN0YW5jZSYgeCwgY29uc3QgUG9pbnRfd2l0aF9kaXN0YW5jZSYgeSkge3JldHVybiB4LmRpc3RhbmNlIDwgeS5kaXN0YW5jZTsgfSk7XG4gICAgLy8gICBjaXJjbGUoaW5wdXRJbWFnZSwga2V5cG9pbnQyLnBvaW50LCAyLCBDVl9SR0IoMCwgMjU1LCAwKSwgLTEpO1xuXG4gICAgLy8gICBrZXlwb2ludDMgPSAqbWluX2VsZW1lbnQobWluX2NsdXN0ZXJzWzNdLmJlZ2luKCksIG1pbl9jbHVzdGVyc1szXS5lbmQoKSwgW10oY29uc3QgUG9pbnRfd2l0aF9kaXN0YW5jZSYgeCwgY29uc3QgUG9pbnRfd2l0aF9kaXN0YW5jZSYgeSkge3JldHVybiB4LmRpc3RhbmNlIDwgeS5kaXN0YW5jZTsgfSk7XG4gICAgLy8gICBjaXJjbGUoaW5wdXRJbWFnZSwga2V5cG9pbnQzLnBvaW50LCAyLCBDVl9SR0IoMCwgMCwgMjU1KSwgLTEpO1xuXG4gICAgLy8gICBrZXlwb2ludHMuY2VudGVyUG9pbnQgPSBjZW50ZXJQb2ludDtcbiAgICAvLyAgIGtleXBvaW50cy5rZXlwb2ludDEgPSBrZXlwb2ludDEucG9pbnQ7XG4gICAgLy8gICBrZXlwb2ludHMua2V5cG9pbnQyID0ga2V5cG9pbnQyLnBvaW50O1xuICAgIC8vICAga2V5cG9pbnRzLmtleXBvaW50MyA9IGtleXBvaW50My5wb2ludDtcbiAgICAvLyAgIGtleXBvaW50cy5zdWNjZXNzID0gdHJ1ZTtcbiAgICAvLyB9XG5cbiAgICAvLyByZXR1cm4ga2V5cG9pbnRzO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Qm91bmRhcnkoaW1nKSB7XG4gICAgbGV0IGJvdW5kYXJ5VmVjdG9yID0gW107XG5cbiAgICBsZXQgc3RhcnRpbmdQb2ludCA9IG5ldyBjdi5Qb2ludCgtMSwgLTEpO1xuICAgIGxldCBzaXplID0gaW1nLnNpemUoKTtcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHNpemUuaGVpZ2h0OyArK3kpIHtcbiAgICAgIGlmIChpbWcudWNoYXJQdHIoeSwgc2l6ZS53aWR0aCAtIDEpWzBdID09PSAyNTUpIHtcbiAgICAgICAgc3RhcnRpbmdQb2ludC54ID0gc2l6ZS53aWR0aCAtIDE7XG4gICAgICAgIHN0YXJ0aW5nUG9pbnQueSA9IHk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIHRoZSBzdGFydGluZ1BvaW50IHdhcyBmb3VuZFxuICAgIGlmIChzdGFydGluZ1BvaW50LnggPT09IC0xICYmIHN0YXJ0aW5nUG9pbnQueSA9PT0gLTEpIHtcbiAgICAgIHRocm93IFwiQm91bmRhcnkgc3RhcnRpbmcgcG9pbnQgbm90IGZvdW5kXCI7XG4gICAgfVxuXG4gICAgYm91bmRhcnlWZWN0b3IucHVzaChzdGFydGluZ1BvaW50KTtcbiAgICBsZXQgY3VycmVudFBvaW50ID0gc3RhcnRpbmdQb2ludDtcbiAgICBsZXQgZGlyID0gNTtcbiAgICAvLyBjb25zb2xlLmxvZyhgJHtjdXJyZW50UG9pbnQueH0sJHtjdXJyZW50UG9pbnQueX1gKTtcblxuICAgIGxldCBjb3VudCA9IDA7XG4gICAgZG8ge1xuICAgICAgLy8gY29uc29sZS5sb2coJ3dlIGFyZSBoZXJlJyk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhgJHtjdXJyZW50UG9pbnQueH0sJHtjdXJyZW50UG9pbnQueX1gKTtcbiAgICAgIC8vIGF3YWl0IGRlbGF5KDEwKTtcbiAgICAgIGN1cnJlbnRQb2ludCA9IGdldE5leHRCb3VuZGFyeVBvaW50KGltZywgZGlyLCBjdXJyZW50UG9pbnQpO1xuICAgICAgYm91bmRhcnlWZWN0b3IucHVzaChjdXJyZW50UG9pbnQpO1xuICAgICAgLy8gY3YuY2lyY2xlKGltZywge3g6Y3VycmVudFBvaW50LngseTpjdXJyZW50UG9pbnQueSB9LCA1LCBbMTAwLCAxMDAsIDEwMCwgMjU1XSwgLTEpOyAvLyBmb3IgZGVidWdnaW5nXG4gICAgICAvLyBpZihjdXJyZW50UG9pbnQueCA9PT0gMzM1ICYmIGN1cnJlbnRQb2ludC55ID09PSA2NSkge1xuICAgICAgaWYgKGNvdW50ID4gMjAwKSB7XG4gICAgICAgIGJyZWFrOyAvLyB0aGlzIGlzIHdoZXJlIGl0IGdldHMgc3R1Y2tcbiAgICAgIH1cbiAgICAgIC8vIGNvbnNvbGUubG9nKGBjcC54ICR7Y3VycmVudFBvaW50Lnh9IHMudy0xICR7c2l6ZS53aWR0aC0xfWApO1xuICAgICAgY291bnQrKztcbiAgICB9IHdoaWxlIChjdXJyZW50UG9pbnQueCAhPT0gc2l6ZS53aWR0aCAtIDEpO1xuICAgIHJldHVybiBib3VuZGFyeVZlY3RvcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE5leHRCb3VuZGFyeVBvaW50KGltZywgZGlyLCBjdXJyZW50UG9pbnQpIHtcbiAgICAvLyBpbml0IGRpcmVjdGlvblBvaW50c1xuICAgIGxldCBkaXJlY3Rpb25Qb2ludHMgPSBbXTtcbiAgICBkaXJlY3Rpb25Qb2ludHMucHVzaChuZXcgY3YuUG9pbnQoMSwgMCkpO1xuICAgIGRpcmVjdGlvblBvaW50cy5wdXNoKG5ldyBjdi5Qb2ludCgxLCAtMSkpO1xuICAgIGRpcmVjdGlvblBvaW50cy5wdXNoKG5ldyBjdi5Qb2ludCgwLCAtMSkpO1xuICAgIGRpcmVjdGlvblBvaW50cy5wdXNoKG5ldyBjdi5Qb2ludCgtMSwgLTEpKTtcbiAgICBkaXJlY3Rpb25Qb2ludHMucHVzaChuZXcgY3YuUG9pbnQoLTEsIDApKTtcbiAgICBkaXJlY3Rpb25Qb2ludHMucHVzaChuZXcgY3YuUG9pbnQoLTEsIDEpKTtcbiAgICBkaXJlY3Rpb25Qb2ludHMucHVzaChuZXcgY3YuUG9pbnQoMCwgMSkpO1xuICAgIGRpcmVjdGlvblBvaW50cy5wdXNoKG5ldyBjdi5Qb2ludCgxLCAxKSk7XG5cbiAgICBsZXQgbmV4dFBvaW50ID0gbmV3IGN2LlBvaW50KDAsIDApO1xuXG4gICAgbGV0IHN0YXJ0SW5kZXggPSBnZXROZWlnaGJvcmhvb2RTZWFyY2hJbmRleChkaXIpO1xuICAgIGZvciAobGV0IGkgPSBzdGFydEluZGV4OyBpIDwgc3RhcnRJbmRleCArIDg7ICsraSkge1xuICAgICAgbGV0IG5laWdoYm9yUG9pbnQgPSBuZXcgY3YuUG9pbnQoXG4gICAgICAgIGN1cnJlbnRQb2ludC54ICsgZGlyZWN0aW9uUG9pbnRzW2kgJSA4XS54LFxuICAgICAgICBjdXJyZW50UG9pbnQueSArIGRpcmVjdGlvblBvaW50c1tpICUgOF0ueVxuICAgICAgKTtcbiAgICAgIC8vIGRlYnVnZ2VyO1xuICAgICAgaWYgKFxuICAgICAgICBuZWlnaGJvclBvaW50LnkgPj0gMCAmJlxuICAgICAgICBuZWlnaGJvclBvaW50LnkgPCBpbWcucm93cyAmJlxuICAgICAgICBuZWlnaGJvclBvaW50LnggPj0gMCAmJlxuICAgICAgICBuZWlnaGJvclBvaW50LnggPCBpbWcuY29sc1xuICAgICAgKSB7XG4gICAgICAgIGlmIChpbWcudWNoYXJQdHIobmVpZ2hib3JQb2ludC55LCBuZWlnaGJvclBvaW50LngpWzBdID09PSAyNTUpIHtcbiAgICAgICAgICBuZXh0UG9pbnQgPSBuZWlnaGJvclBvaW50O1xuICAgICAgICAgIGRpciA9IGkgJSA4O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXh0UG9pbnQ7XG4gIH1cblxuICBmdW5jdGlvbiBnZXROZWlnaGJvcmhvb2RTZWFyY2hJbmRleChkaXIpIHtcbiAgICBpZiAoZGlyICUgMiA9PT0gMCkge1xuICAgICAgcmV0dXJuIChkaXIgKyA3KSAlIDg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoZGlyICsgNikgJSA4O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXaXRoIE9wZW5DViB3ZSBoYXZlIHRvIHdvcmsgdGhlIGltYWdlcyBhcyBjdi5NYXQgKG1hdHJpY2VzKSxcbiAgICogc28gdGhlIGZpcnN0IHRoaW5nIHdlIGhhdmUgdG8gZG8gaXMgdG8gdHJhbnNmb3JtIHRoZVxuICAgKiBJbWFnZURhdGEgdG8gYSB0eXBlIHRoYXQgb3BlbkNWIGNhbiByZWNvZ25pemUuXG4gICAqL1xuICBmdW5jdGlvbiBpbWFnZVByb2Nlc3NpbmcoeyBtc2csIHBheWxvYWQgfSkge1xuICAgIGxldCBkc3QgPSBjdi5tYXRGcm9tSW1hZ2VEYXRhKHBheWxvYWQpO1xuICAgIGxldCBncmF5ID0gbmV3IGN2Lk1hdCgpO1xuXG4gICAgLy8gV2hhdCB0aGlzIGRvZXMgaXMgY29udmVydCB0aGUgaW1hZ2UgdG8gYSBncmV5IHNjYWxlLlxuICAgIGN2LmN2dENvbG9yKGRzdCwgZ3JheSwgY3YuQ09MT1JfUkdCQTJHUkFZLCAwKTtcblxuICAgIC8vIGRldGVjdCBmYWNlcy5cbiAgICBsZXQgZmFjZXMgPSBuZXcgY3YuUmVjdFZlY3RvcigpO1xuICAgIC8vIGNvbnNvbGUubG9nKGN2Lnhtb2R1bGVzKTtcblxuICAgIGNsYXNzaWZpZXIuZGV0ZWN0TXVsdGlTY2FsZShncmF5LCBmYWNlcywgMS4xLCAzLCAwKTtcbiAgICAvLyBkcmF3IGZhY2VzLlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmFjZXMuc2l6ZSgpOyArK2kpIHtcbiAgICAgIGxldCBmYWNlID0gZmFjZXMuZ2V0KGkpO1xuICAgICAgbGV0IHBvaW50MSA9IG5ldyBjdi5Qb2ludChmYWNlLngsIGZhY2UueSk7XG4gICAgICBsZXQgcG9pbnQyID0gbmV3IGN2LlBvaW50KGZhY2UueCArIGZhY2Uud2lkdGgsIGZhY2UueSArIGZhY2UuaGVpZ2h0KTtcbiAgICAgIGN2LnJlY3RhbmdsZShkc3QsIHBvaW50MSwgcG9pbnQyLCBbMCwgMjU1LCAwLCAyNTVdKTtcbiAgICB9XG4gICAgLy8gbGV0IHNyYyA9IGN2Lk1hdC5leWUoNDAwLCA0MDAsIDApO1xuICAgIC8vIGxldCBkc3QgPSBuZXcgY3YuTWF0KCk7XG4gICAgLy8gZHN0ID0gcmVzdWx0LnJvaShmYWNlcy5nZXQoMCkpO1xuICAgIC8vIGN2Lmltc2hvdygnY2FudmFzT3V0cHV0JywgZHN0KTtcbiAgICBwb3N0TWVzc2FnZSh7IG1zZywgcGF5bG9hZDogaW1hZ2VEYXRhRnJvbU1hdChkc3QpIH0pO1xuICAgIC8vIGRlbGV0ZSBpbWc7XG4gICAgLy8gZGVsZXRlIHJlc3VsdDtcbiAgICAvLyBkZWxldGUgZHN0O1xuICAgIC8vIGRlbGV0ZSBmYWNlcztcbiAgICAvLyBkZWxldGUgY2xhc3NpZmllcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGlzIHRvIGNvbnZlcnQgYWdhaW4gZnJvbSBjdi5NYXQgdG8gSW1hZ2VEYXRhXG4gICAqL1xuICBmdW5jdGlvbiBpbWFnZURhdGFGcm9tTWF0KG1hdCkge1xuICAgIC8vIGNvbnZlcnQgdGhlIG1hdCB0eXBlIHRvIGN2LkNWXzhVXG4gICAgY29uc3QgaW1nID0gbmV3IGN2Lk1hdCgpO1xuICAgIGNvbnN0IGRlcHRoID0gbWF0LnR5cGUoKSAlIDg7XG4gICAgY29uc3Qgc2NhbGUgPVxuICAgICAgZGVwdGggPD0gY3YuQ1ZfOFMgPyAxLjAgOiBkZXB0aCA8PSBjdi5DVl8zMlMgPyAxLjAgLyAyNTYuMCA6IDI1NS4wO1xuICAgIGNvbnN0IHNoaWZ0ID0gZGVwdGggPT09IGN2LkNWXzhTIHx8IGRlcHRoID09PSBjdi5DVl8xNlMgPyAxMjguMCA6IDAuMDtcbiAgICBtYXQuY29udmVydFRvKGltZywgY3YuQ1ZfOFUsIHNjYWxlLCBzaGlmdCk7XG5cbiAgICAvLyBjb252ZXJ0IHRoZSBpbWcgdHlwZSB0byBjdi5DVl84VUM0XG4gICAgc3dpdGNoIChpbWcudHlwZSgpKSB7XG4gICAgICBjYXNlIGN2LkNWXzhVQzE6XG4gICAgICAgIGN2LmN2dENvbG9yKGltZywgaW1nLCBjdi5DT0xPUl9HUkFZMlJHQkEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgY3YuQ1ZfOFVDMzpcbiAgICAgICAgY3YuY3Z0Q29sb3IoaW1nLCBpbWcsIGN2LkNPTE9SX1JHQjJSR0JBKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGN2LkNWXzhVQzQ6XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIFwiQmFkIG51bWJlciBvZiBjaGFubmVscyAoU291cmNlIGltYWdlIG11c3QgaGF2ZSAxLCAzIG9yIDQgY2hhbm5lbHMpXCJcbiAgICAgICAgKTtcbiAgICB9XG4gICAgY29uc3QgY2xhbXBlZEFycmF5ID0gbmV3IEltYWdlRGF0YShcbiAgICAgIG5ldyBVaW50OENsYW1wZWRBcnJheShpbWcuZGF0YSksXG4gICAgICBpbWcuY29scyxcbiAgICAgIGltZy5yb3dzXG4gICAgKTtcbiAgICBpbWcuZGVsZXRlKCk7XG4gICAgcmV0dXJuIGNsYW1wZWRBcnJheTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgSGVyZSB3ZSB3aWxsIGNoZWNrIGZyb20gdGltZSB0byB0aW1lIGlmIHdlIGNhbiBhY2Nlc3MgdGhlIE9wZW5DVlxuICAgKiAgZnVuY3Rpb25zLiBXZSB3aWxsIHJldHVybiBpbiBhIGNhbGxiYWNrIGlmIGl0IGhhcyBiZWVuIHJlc29sdmVkXG4gICAqICB3ZWxsICh0cnVlKSBvciBpZiB0aGVyZSBoYXMgYmVlbiBhIHRpbWVvdXQgKGZhbHNlKS5cbiAgICovXG4gIGZ1bmN0aW9uIHdhaXRGb3JPcGVuY3YoY2FsbGJhY2tGbiwgd2FpdFRpbWVNcyA9IDMwMDAwLCBzdGVwVGltZU1zID0gMTAwMCkge1xuICAgIGlmIChjdi5NYXQpIGNhbGxiYWNrRm4odHJ1ZSk7XG5cbiAgICBsZXQgdGltZVNwZW50TXMgPSAwO1xuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgbGltaXRSZWFjaGVkID0gdGltZVNwZW50TXMgPiB3YWl0VGltZU1zO1xuICAgICAgaWYgKGN2Lk1hdCB8fCBsaW1pdFJlYWNoZWQpIHtcbiAgICAgICAgbGV0IG1hdCA9IG5ldyBjdi5NYXQoKTtcbiAgICAgICAgY29uc29sZS5sb2cobWF0LnNpemUoKSk7XG4gICAgICAgIG1hdC5kZWxldGUoKTtcbiAgICAgICAgYXdhaXQgY3JlYXRlRmlsZUZyb21VcmwoXG4gICAgICAgICAgXCJoYWFyY2FzY2FkZV9mcm9udGFsZmFjZV9kZWZhdWx0LnhtbFwiLFxuICAgICAgICAgIGAke3B1YmxpY1BhdGh9L2pzL2hhYXJjYXNjYWRlX2Zyb250YWxmYWNlX2RlZmF1bHQueG1sYFxuICAgICAgICApO1xuICAgICAgICBjbGFzc2lmaWVyID0gbmV3IGN2LkNhc2NhZGVDbGFzc2lmaWVyKCk7XG4gICAgICAgIC8vIGVpZ2VuUmVjb2duaXplciA9IG5ldyBjdi5FaWdlbkZhY2VSZWNvZ25pemVyKCk7XG4gICAgICAgIGNsYXNzaWZpZXIubG9hZChcImhhYXJjYXNjYWRlX2Zyb250YWxmYWNlX2RlZmF1bHQueG1sXCIpO1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrRm4oIWxpbWl0UmVhY2hlZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aW1lU3BlbnRNcyArPSBzdGVwVGltZU1zO1xuICAgICAgfVxuICAgIH0sIHN0ZXBUaW1lTXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZXhpc3RzIHRvIGNhcHR1cmUgYWxsIHRoZSBldmVudHMgdGhhdCBhcmUgdGhyb3duIG91dCBvZiB0aGUgd29ya2VyXG4gICAqIGludG8gdGhlIHdvcmtlci4gV2l0aG91dCB0aGlzLCB0aGVyZSB3b3VsZCBiZSBubyBjb21tdW5pY2F0aW9uIHBvc3NpYmxlXG4gICAqIHdpdGggb3VyIHByb2plY3QuXG4gICAqIFByb3BlcnRpZXNcbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dvcmtlci9vbm1lc3NhZ2VcbiAgICogTWV0aG9kc1xuICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV29ya2VyL3Bvc3RNZXNzYWdlXG4gICAqL1xuICBzZWxmLm9ubWVzc2FnZSA9IChlKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coZSk7XG4gICAgc3dpdGNoIChlLmRhdGEubXNnKSB7XG4gICAgICBjYXNlIFwibG9hZFwiOiB7XG4gICAgICAgIC8vIEltcG9ydCBXZWJhc3NlbWJseSBzY3JpcHRcbiAgICAgICAgc2VsZi5pbXBvcnRTY3JpcHRzKGAke3B1YmxpY1BhdGh9L2pzL29wZW5jdi00LTMtMC5qc2ApO1xuICAgICAgICBjdiA9IGN2KCk7XG4gICAgICAgIHdhaXRGb3JPcGVuY3YoKHN1Y2Nlc3MpID0+IHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgcG9zdE1lc3NhZ2UoeyBtc2c6IGUuZGF0YS5tc2cgfSk7XG4gICAgICAgICAgfSBlbHNlIHRocm93IG5ldyBFcnJvcihcIkVycm9yIG9uIGxvYWRpbmcgT3BlbkNWXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIFwiaW1hZ2VQcm9jZXNzaW5nXCI6XG4gICAgICAgIHJldHVybiBpbWFnZVByb2Nlc3NpbmcoZS5kYXRhKTtcbiAgICAgIGNhc2UgXCJpbWFnZVByb2Nlc3NpbmcyXCI6XG4gICAgICAgIHJldHVybiBpbWFnZVByb2Nlc3NpbmcyKGUuZGF0YSk7XG4gICAgICBjYXNlIFwiaW1hZ2VQcm9jZXNzaW5nM1wiOlxuICAgICAgICByZXR1cm4gaW1hZ2VQcm9jZXNzaW5nM2EoZS5kYXRhKTtcbiAgICAgIGNhc2UgXCJpbWFnZVByb2Nlc3Npbmc0XCI6XG4gICAgICAgIHJldHVybiBpbWFnZVByb2Nlc3Npbmc0KGUuZGF0YSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH07XG59XG4iXX0=