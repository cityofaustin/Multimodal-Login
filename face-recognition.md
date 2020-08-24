# References

## opencv general
https://docs.opencv.org/3.4/df/d0a/tutorial_js_intro.html good intro to opencv for browser

https://docs.opencv.org/4.3.0/d2/d75/namespacecv.html open cv api documentation

https://docs.opencv.org/master/d5/d10/tutorial_js_root.html opencv js general tutorials root

https://docs.opencv.org/master/de/d06/tutorial_js_basic_ops.html js mat data structure

https://github.com/opencv/opencv opencv public repo

https://github.com/opencv/opencv_contrib opencv extra modules repo EigenFaceRecognizer, Fisher, or lbph didn't work with js

https://docs.opencv.org/3.4/modules.html opencv list of modules

https://community.risingstack.com/opencv-tutorial-computer-vision-with-node-js/ general opencv node getting started examples

https://scotch.io/tutorials/introduction-to-computer-vision-in-javascript-using-opencvjs opencv js detecting/drawing shapes

https://docs.opencv.org/3.4/dd/d00/tutorial_js_video_display.html opencv js processing video


Eigenfaces (1991)
Local Binary Patterns Histograms (LBPH) (1996)
Fisherfaces (1997)
openface (2016)

https://core.ac.uk/reader/84801048 comparing face algorithms

## opencv face detection
https://github.com/opencv/opencv/blob/master/data/haarcascades/haarcascade_frontalface_default.xml trained classifier for detecting faces

https://docs.opencv.org/3.4/df/d6c/tutorial_js_face_detection_camera.html opencv js putting face detected on video


## opencv face recognition
https://docs.opencv.org/2.4/modules/contrib/doc/facerec/facerec_tutorial.html#id27 general face recognition c++

https://medium.com/@muehler.v/node-js-opencv-for-face-recognition-37fa7cb860e8 opencv4nodejs face recognition

https://gist.github.com/antonioru/b4797c8c74edee5252b7b8e209929ef5 opencv4nodejs face module recognition

https://github.com/justadudewhohacks/face-api.js face recognition library based off tensorflow

https://github.com/opencv/opencv/blob/master/samples/dnn/js_face_recognition.html opencv js dnn


## opencv face recognition dnn
https://nyhackr.blob.core.windows.net/presentations/Choosing-a-Deep-Learning-Library_Jesse-Brizzi.pdf different deep learning libs
caffe, tensorflow, torch, darknet

https://docs.opencv.org/master/d5/d86/tutorial_dnn_javascript.html js dnn


## building opencv
https://emscripten.org/docs/getting_started/downloads.html this is what is used to convert c++ to webassembly, tried using but couldn't get to work but nice to know

https://docs.opencv.org/4.3.0/d4/da1/tutorial_js_setup.html docker build the build js file works a little differently e.g. await cv


## grabbing prebuilt opencv
https://docs.opencv.org/4.3.0/opencv.js


## techincal opencv articles
https://dev.to/kjunichi/requireopencvjs-is-not-enough-for-using-opencvjs-8ff loading opencv before using

https://willowtreeapps.com/ideas/improving-web-app-performance-with-web-worker general web worker example

https://www.pyimagesearch.com/2018/09/24/opencv-face-recognition/ face recognition

## demo projects
https://github.com/vinissimus/opencv-js-webworker this was super helpful with the html5 videostream/react/webpack/opencv example

https://github.com/mecab/opencvjs-wasm-webworker-webpack-demo the demo is great, live face tracking, webpack, couldn't get project to run though

https://docs.opencv.org/master/d5/d86/tutorial_dnn_javascript.html opencv dnn face recognition example

https://justadudewhohacks.github.io/face-api.js/face_recognition face-api face recognition example based off tensorflow

## webpack
https://webpack.js.org/loaders/worker-loader/ for web worker

https://webpack.js.org/loaders/raw-loader/ for opencv library

https://openbase.io/js/script-loader/documentation using raw-loader to replace script-loader and eval the script

## palm
https://github.com/szaboa/PalmPrintAuthentication palm print auth c++, it runs but it needed a newer version of json11, file paths needed to be changed
