import React, { Component, Fragment } from 'react';
import cvservice from '../../services/CvService';

// import("../../opencv").then(async (rawModule) => {
//   eval.call(null, rawModule.default);
//   cv = await cv;
//   let mat = new cv.Mat();
//   console.log(mat.size());
//   mat.delete();
//   main();
// });

// const imageWidth = 1600;
// const imageHeight = 1200;
const imageWidth = 640;
const imageHeight = 480;

let img;
if (process.env.BROWSER) {
  require('../global.scss');
  require('./PalmTest.scss');
  img = require('../../img/001_IMG__ (4).jpg').default;
}

export default class PalmTest extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    this.load();
  }

  async load() {
    if (process.env.BROWSER) {
      await cvservice.load();
      // debugger;
      const canvas = document.getElementById('query-image');
      const ctx = canvas.getContext('2d');
      const image = document.getElementById('source');
      canvas.width = imageWidth;
      canvas.height = imageHeight;
      ctx.drawImage(image, 0, 0, imageWidth, imageHeight);
      // image.addEventListener('load', (e) => {
      // ctx.drawImage(image);
      // });
      // const button = document.getElementById('startStopButton');
      this.setState({isLoading: false});
    }
  }

  start = async () => {
    const canvas = document.getElementById('query-image');
    const ctx = canvas.getContext('2d');
    const image = ctx.getImageData(0, 0, imageWidth, imageHeight);
    const processedImage = await cvservice.imageProcessing2(image);
    // debugger;
    // Render the processed image to the canvas
    const canvas2 = document.getElementById('preprocessed-image');
    const ctx2 = canvas2.getContext('2d');
    const imageData = processedImage.data.payload;
    ctx2.canvas.width = imageWidth;
    ctx2.canvas.height = imageHeight;
    ctx2.putImageData(imageData, 0, 0);
  };

  render() {
    return (
      <div>
        <h1>Palm Detection</h1>
        <button id="startStopButton" type="button" disabled={this.state.isLoading} onClick={this.start}>
          Start
        </button>
        <div id="status"></div>
        <img id="source" src={img} style={{ display: 'none' }} />
        <div className="image-container">
          <canvas
            id="query-image"
            width={imageWidth}
            height={imageHeight}
            style={{
              marginTop: '20px',
              maxWidth: '100%',
              backgroundColor: 'black',
              border: '1px solid #555',
            }}
          />
          <div>Query Image</div>
        </div>
        <div className="image-container">
          <canvas
            id="preprocessed-image"
            width={imageWidth}
            height={imageHeight}
            style={{
              marginTop: '20px',
              maxWidth: '100%',
              backgroundColor: 'black',
              border: '1px solid #555',
            }}
          />
          <div>preprocessed Image</div>
        </div>
        <table>
          <tbody>
            <tr id="targetImgs"></tr>
            <tr id="targetNames"></tr>
          </tbody>
        </table>
        {/* <button id="addPersonButton" type="button" disabled>
          Add a person
        </button> */}
      </div>
    );
  }
}
