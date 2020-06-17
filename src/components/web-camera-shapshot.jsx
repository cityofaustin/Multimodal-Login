import React, { Component } from 'react';
import * as PropTypes from 'prop-types';

// NOTE: would like to do this/sort of used this as a reference at least for the web camera snapshot:
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

    tracks.forEach(function(track) {
      track.stop();
    });

    this.videoElement.srcObject = null;
  }

  async load() {
    const videoLoaded = await this.setupCamera();
    videoLoaded.play();
    return videoLoaded;
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
    const {handleSnapshot} = {...this.props};
    this.setState({ processing: true });

    const ctx = this.canvasEl.getContext('2d');
    ctx.drawImage(this.videoElement, 0, 0, maxVideoSize, maxVideoSize);
    const image = ctx.getImageData(0, 0, maxVideoSize, maxVideoSize);
    // Load the model
    // await cv.load()
    // Processing image
    // const processedImage = await cv.imageProcessing(image)
    // Render the processed image to the canvas
    // ctx.putImageData(processedImage.data.payload, 0, 0)
    const getCanvasBlob = (canvas) => {
      return new Promise((resolve, reject) => {
        return canvas.toBlob((blob) => {
          return resolve(blob);
        })
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
  handleSnaphot: () => {}
}

WebCameraShapshot.propTypes = {
  handleSnaphot: PropTypes.func.isRequired
};

export default WebCameraShapshot;
