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
      isLoading: true,
      userId: 'none',
      matchedUserId: 'none',
      distance: 0,
      matchResponse: 0, // 0 none, 1 success, 2 failure
      methodType: 'line', // 'line' or 'texture'
    };
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
      this.setState({ isLoading: false });
    }
  }

  start = async () => {
    const {methodType} = {...this.state};
    let {matchResponse} = {...this.state};
    const canvas = document.getElementById('query-image');
    const ctx = canvas.getContext('2d');
    const image = ctx.getImageData(0, 0, imageWidth, imageHeight);
    const processedImage2 = await cvservice.imageProcessing2(image);
    // debugger;
    // Render the processed image to the canvas
    const canvas2 = document.getElementById('preprocessed-image2');
    const ctx2 = canvas2.getContext('2d');
    const imageData2 = processedImage2.data.payload;
    ctx2.canvas.width = 111; // cols
    ctx2.canvas.height = 110; // rows
    ctx2.putImageData(imageData2, 0, 0);

    const processedImage3 = await cvservice.imageProcessing3(imageData2);
    const canvas3 = document.getElementById('preprocessed-image3');
    const ctx3 = canvas3.getContext('2d');
    const imageData3 = processedImage3.data.payload;
    ctx3.canvas.width = 128;
    ctx3.canvas.height = 128;
    ctx3.putImageData(imageData3, 0, 0);

    // let payload = await cvservice.imageProcessing4(imageData3);
    // payload = payload.data.payload;
    // const canvas4 = document.getElementById('preprocessed-image4');
    // const ctx4 = canvas4.getContext('2d');
    // const imageData4 = payload.img;
    // ctx4.canvas.width = 128;
    // ctx4.canvas.height = 128;
    // ctx4.putImageData(imageData4, 0, 0);

    // if(methodType === 'line') {
    //   matchResponse = (payload.distance < 0.011) ? 1 : 2;
    // } else {
    //   // otherwise it's texture
    //   matchResponse = (payload.distance < 0.137) ? 1 : 2;
    // }
    // this.setState({
    //   userId: payload.userId,
    //   matchedUserId: payload.userId,
    //   // rounds to 7 decimals places
    //   distance: Number(Math.round(payload.distance+'e7')+'e-7'),
    //   matchResponse
    // });
  };

  render() {
    const { userId, matchedUserId, distance, matchResponse } = {
      ...this.state,
    };
    return (
      <div>
        <h1>Palm Detection</h1>
        <div className="top-form">
          <button
            id="startStopButton"
            type="button"
            disabled={this.state.isLoading}
            onClick={this.start}
          >
            Start Identification
          </button>
          <div className="form-control">
            <label htmlFor="method-select">Method</label>
            <select name="pets" id="method-select">
              <option value="line">Line based</option>
              <option value="texture" disabled>Texture based</option>
            </select>
          </div>
        </div>
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
        <input
          id="choose-different"
          type="file"
          accept="image/png, image/jpeg"
          // disabled={this.state.isLoading}
        />
        <div className="cv-section">
          <div className="image-container">
            <canvas
              id="preprocessed-image2"
              width={111}
              height={110}
              style={{
                marginTop: '20px',
                maxWidth: '100%',
                backgroundColor: 'black',
                border: '1px solid #555',
              }}
            />
            <div>Extracted ROI</div>
          </div>
          <div className="image-container">
            <canvas
              id="preprocessed-image3"
              width={128}
              height={128}
              style={{
                marginTop: '20px',
                maxWidth: '100%',
                backgroundColor: 'black',
                border: '1px solid #555',
              }}
            />
            <div>Extracted Feature</div>
          </div>
          <div className="image-container">
            <canvas
              id="preprocessed-image4"
              width={128}
              height={128}
              style={{
                marginTop: '20px',
                maxWidth: '100%',
                backgroundColor: 'black',
                border: '1px solid #555',
              }}
            />
            <div>Matched Feature</div>
          </div>
          <div className="results">
            <div>User Id: {userId}</div>
            <div>Matched User Id: {matchedUserId}</div>
            <div>Distance: {distance}</div>
            {matchResponse === 1 && <div className="success">ACCEPT</div>}
            {matchResponse === 2 && <div className="fail">DECLINE</div>}
          </div>
        </div>
      </div>
    );
  }
}
