// import delay from '../util/delay';
import finalLines from "./finalLines";
import matchedTemplate from "./matchedTemplate";
import {
  H1_0,
  H1_45,
  H1_90,
  H1_135,
  H2_0,
  H2_45,
  H2_90,
  H2_135,
} from "./gaussian";
import storedFeatures from "./palmlinedb.json";

const publicPath = process.env.FE ? "" : "/public";
if (process.env.BROWSER) {
  import("./opencv-4-3-0.js");
  import("./haarcascade_frontalface_default.xml");

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
    cv.FS_createDataFile("/", path, data, true, true, false);
    console.log(`📦${url} downloaded. Mounted on /${path}`);
  }

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
      1
    );
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
    let width = 467-x-120; //	the width of the rectangle.
    let height = 720-y-140; // the height of the rectangle.
    let rect = new cv.Rect(x,y,width,height);
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
      borderType
    );
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
      l2gradient
    );
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
      maxLineGap
    );
    let dst = new cv.Mat(grayscaleMat.size(), cv.CV_8UC1);
    // draw lines
    for (let i = 0; i < lines.rows; ++i) {
      let startPoint = new cv.Point(
        lines.data32S[i * 4],
        lines.data32S[i * 4 + 1]
      );
      let endPoint = new cv.Point(
        lines.data32S[i * 4 + 2],
        lines.data32S[i * 4 + 3]
      );
      cv.line(dst, startPoint, endPoint, color);
    }
    const data = [];
    cv.resize(dst, dst, new cv.Size(128, 128));
    for(let row=0; row < 128; row++) {
      const rowItem = [];
      for(let col=0; col < 128; col++) {
        if(dst.ucharPtr(row, col)[0] > 100) { // threshold value for detection
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
        img: imageDataFromMat(dst),
      },
    });
  }

  function imageProcessing3({ msg, payload }) {
    let finalLinesMat = new cv.Mat(128, 128, cv.CV_8UC1, new cv.Scalar(0));
    let count = 0;
    for (let dataItem of finalLines) {
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
      JSON.stringify(Object.keys(mat.data).map((key) => mat.data[key]))
    );
  }

  function imageProcessing4({ msg, payload }) {
    const rgbaMat = cv.matFromImageData(payload);
    const mat = doPreprocessingGrayscaleSm(rgbaMat);
    const distanceTransImg = doDistanceTransformation(mat);
    if (storedFeatures.length == 0) {
      console.error("Error: database is empty");
    }
    let min = 2147483647.0; // max int
    let min_id = 0;
    let matchedIndex = -1;
    let sum = 0;
    // Calculate Chamfer distance
    for (let i = 0; i < storedFeatures.length; i++) {
      sum = 0;
      // array of points for this particular template
      let temp = storedFeatures[i].featureData;
      if (temp.length != 0) {
        for (let j = 0; j < temp.length; ++j) {
          // [0] is x and [1] is y
          sum += distanceTransImg.ucharPtr(temp[j][0], temp[j][1])[0];
        }
        sum = sum / (temp.length * 255);
        if (sum < min) {
          min = sum;
          min_id = storedFeatures[i].userId;
          matchedIndex = i;
        }
      }
    }
    // console.log(`sum 0.026889297385620917 matchedIndex 2 min 0.006030897207367796`);
    // console.log(`sum ${sum} matchedIndex ${matchedIndex} min ${min}`);
    let matchedImage = new cv.Mat(128, 128, cv.CV_8UC1, new cv.Scalar(0));

    // for (let p of matchedTemplate) {
    for (let p of storedFeatures[matchedIndex].featureData) {
      matchedImage.ucharPtr(p[0], p[1])[0] = 255;
    }
    postMessage({
      msg,
      payload: {
        distance: min,
        userId: min_id,
        img: imageDataFromMat(matchedImage),
      },
    });
  }

  function doDistanceTransformation(img) {
    // Two pass algorithm with two Euclidean kernel
    let invImg = new cv.Mat();
    cv.subtract(
      new cv.Mat(128, 128, cv.CV_8UC1, new cv.Scalar(255)),
      img,
      invImg
    );
    // First pass from top left
    for (let x = 1; x < invImg.rows - 1; x++) {
      for (let y = 1; y < invImg.cols - 1; y++) {
        if (
          invImg.ucharPtr(x, y)[0] >
          invImg.ucharPtr(x - 1, y - 1)[0] + Math.sqrt(2)
        ) {
          invImg.ucharPtr(x, y)[0] =
            invImg.ucharPtr(x - 1, y - 1)[0] + Math.sqrt(2);
        }
        if (invImg.ucharPtr(x, y)[0] > invImg.ucharPtr(x, y - 1)[0] + 1) {
          invImg.ucharPtr(x, y)[0] =
            invImg.ucharPtr(x, y - 1)[0] + Math.sqrt(2);
        }
        if (
          invImg.ucharPtr(x, y)[0] >
          invImg.ucharPtr(x + 1, y - 1)[0] + Math.sqrt(2)
        ) {
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
          invImg.ucharPtr(x - 1, y + 1)[0] + Math.sqrt(2)
        ) {
          invImg.ucharPtr(x, y)[0] =
            invImg.ucharPtr(x - 1, y + 1)[0] + Math.sqrt(2);
        }
        if (invImg.ucharPtr(x, y)[0] > invImg.ucharPtr(x, y + 1)[0] + 1) {
          invImg.ucharPtr(x, y)[0] = invImg.ucharPtr(x, y + 1)[0] + 1;
        }
        if (
          invImg.ucharPtr(x, y)[0] >
          invImg.ucharPtr(x + 1, y + 1)[0] + Math.sqrt(2)
        ) {
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
    let linesInDir0 = locatePrincipalLineInGivenDirection(mat, H1_0, H2_0, 0);
    let linesInDir90 = locatePrincipalLineInGivenDirection(
      mat,
      H1_90,
      H2_90,
      90
    );
    let linesInDir45 = locatePrincipalLineInGivenDirection(
      mat,
      H1_45,
      H2_45,
      45
    );
    let linesInDir135 = locatePrincipalLineInGivenDirection(
      mat,
      H1_135,
      H2_135,
      135
    );
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
            I_der2[j][i - j] > secondDerivThresholdValue
          ) {
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
      segmentedImage.rows
    );
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
        -1
      ); // for debugging
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
          "Bad number of channels (Source image must have 1, 3 or 4 channels)"
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
          "haarcascade_frontalface_default.xml",
          `${publicPath}/js/haarcascade_frontalface_default.xml`
        );
        classifier = new cv.CascadeClassifier();
        // eigenRecognizer = new cv.EigenFaceRecognizer();
        classifier.load("haarcascade_frontalface_default.xml");
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
      case "load": {
        // Import Webassembly script
        self.importScripts(`${publicPath}/js/opencv-4-3-0.js`);
        cv = cv();
        waitForOpencv((success) => {
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
        break;
    }
  };
}
