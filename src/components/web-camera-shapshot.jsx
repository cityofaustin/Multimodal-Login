import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import cvservice from '../services/CvService';
import Worker from '../workers/example.worker.js';

// if (process.env.BROWSER) {

// import('../workers/opencv-4-3-0.js').then((rawModule) => {
//   eval.call(null, rawModule.default);
//   cv['onRuntimeInitialized'] = () => {
//     let mat = new cv.Mat();
//     console.log(mat.size());
//     mat.delete();
//   };
// });

const runWorker = async () => {
  const worker = new Worker();
  const message = await new Promise((resolve, reject) => {
    worker.addEventListener('message', (event) => resolve(event.data), false);
    worker.addEventListener('error', reject, false);
  });
  return message;
};

// ref: https://aralroca.com/blog/opencv-in-the-web
// We'll limit the processing size to 200px.
const maxVideoSize = 200;

class WebCameraShapshot extends Component {
  constructor(props) {
    super(props);
    this.videoElement = null;
    this.canvasEl = null;

    this.state = {
      processing: false,
    };
  }

  componentDidMount() {
    this.load();
  }

  componentWillUnmount() {
    // Turns off webcam
    const stream = this.videoElement.srcObject;
    const tracks = stream.getTracks();

    tracks.forEach(function (track) {
      track.stop();
    });

    this.videoElement.srcObject = null;
  }

  async load() {
    const videoLoaded = await this.setupCamera();
    await cvservice.load();
    videoLoaded.addEventListener(
      'play',
      () => {
        this.timerCallback();
      },
      false
    );
    videoLoaded.play();

    return videoLoaded;
  }

  timerCallback() {
    if (this.videoElement.paused || this.videoElement.ended) {
      return;
    }
    this.computeFrame();
    let self = this;
    setTimeout(function () {
      self.timerCallback();
    }, 1000);
  }

  async computeFrame() {
    const ctx = this.canvasEl.getContext('2d');
    ctx.canvas.width = maxVideoSize;
    ctx.canvas.height = maxVideoSize;
    ctx.drawImage(this.videoElement, 0, 0, maxVideoSize, maxVideoSize);
    // this.ctx1.drawImage(this.video, 0, 0, this.width, this.height);
    // let frame = this.ctx1.getImageData(0, 0, this.width, this.height);
    // let l = frame.data.length / 4;

    // for (let i = 0; i < l; i++) {
    //   let r = frame.data[i * 4 + 0];
    //   let g = frame.data[i * 4 + 1];
    //   let b = frame.data[i * 4 + 2];
    //   if (g > 100 && r > 100 && b < 43)
    //     frame.data[i * 4 + 3] = 0;
    // }
    // this.ctx2.putImageData(frame, 0, 0);
    const image = ctx.getImageData(0, 0, maxVideoSize, maxVideoSize);
    const processedImage = await cvservice.imageProcessing(image);
    // Render the processed image to the canvas
    const imageData = processedImage.data.payload;
    ctx.canvas.width = imageData.width;
    ctx.canvas.height = imageData.height;
    ctx.putImageData(imageData, 0, 0);
    return;
  }

  async setupCamera() {
    this.videoElement.width = maxVideoSize;
    this.videoElement.height = maxVideoSize;

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          facingMode: 'user',
          width: maxVideoSize,
          height: maxVideoSize,
        },
      });
      this.videoElement.srcObject = stream;

      return new Promise((resolve) => {
        this.videoElement.onloadedmetadata = () => {
          resolve(this.videoElement);
        };
      });
    }
    const errorMessage =
      'This browser does not support video capture, or this device does not have a camera';
    alert(errorMessage);
    return Promise.reject(errorMessage);
  }

  /**
   * What we will do in the onClick event is capture a frame within
   * the video to pass this image on our service.
   */
  onClick = async () => {
    // debugger;

    const { handleSnapshot } = { ...this.props };
    this.setState({ processing: true });

    const ctx = this.canvasEl.getContext('2d');
    ctx.canvas.width = maxVideoSize;
    ctx.canvas.height = maxVideoSize;
    ctx.drawImage(this.videoElement, 0, 0, maxVideoSize, maxVideoSize);
    const image = ctx.getImageData(0, 0, maxVideoSize, maxVideoSize);
    // const keyPair = await runWorker();
    // console.log(keyPair);
    // console.log("!");
    // Load the model
    // console.log("!");

    // Processing image
    const processedImage = await cvservice.imageProcessing(image);
    // debugger;
    // Render the processed image to the canvas
    const imageData = processedImage.data.payload;
    ctx.canvas.width = imageData.width;
    ctx.canvas.height = imageData.height;
    ctx.putImageData(imageData, 0, 0);
    const getCanvasBlob = (canvas) => {
      return new Promise((resolve, reject) => {
        return canvas.toBlob((blob) => {
          return resolve(blob);
        });
      });
    };
    const blob = await getCanvasBlob(ctx.canvas);
    handleSnapshot(blob);
    this.setState({ processing: false });
  };

  /**
   * What we're going to render is:
   *
   * 1. A video component for the user to see what he sees on the camera.
   *
   * 2. A simple button, that with the onClick we will generate an image of
   *  the video, we will load OpenCV and we will treat the image.
   *
   * 3. A canvas, which will allow us to capture the image of the video
   * while showing the user what image has been taken from the video after
   * pressing the button.
   *
   */
  render() {
    const { processing } = { ...this.state };
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <video
          style={{ display: 'none' }}
          className="video"
          playsInline
          ref={(videoElement) => {
            this.videoElement = videoElement;
          }}
        />
        <button
          disabled={processing}
          style={{ width: maxVideoSize, padding: 10 }}
          onClick={() => this.onClick()}
        >
          {processing ? 'Processing...' : 'Take a photo'}
        </button>
        <canvas
          ref={(canvasEl) => {
            this.canvasEl = canvasEl;
          }}
          width={maxVideoSize}
          height={maxVideoSize}
        ></canvas>
      </div>
    );
  }
}

WebCameraShapshot.defaultProps = {
  handleSnaphot: () => {},
};

WebCameraShapshot.propTypes = {
  handleSnaphot: PropTypes.func.isRequired,
};

export default WebCameraShapshot;
