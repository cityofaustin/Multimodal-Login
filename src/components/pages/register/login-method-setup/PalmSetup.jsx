import React, { Component, Fragment } from "react";
import PalmDetectedSvg from "../../../svg/PalmDetectedSvg";
import PalmNotDetectedSvg from "../../../svg/PalmNotDetectedSvg";
import HowSvg from "../../../svg/HowSvg";
import PalmExampleSvg from "../../../svg/PalmExampleSvg";
import MStepper from "../../../common/MStepper";
import PalmHashDiagramSvg from "../../../svg/PalmHashDiagramSvg";
import PalmSvg from "../../../svg/PalmSvg";
import NoWifiSvg from "../../../svg/NoWifiSvg";
import AirplaneModeHelpSvg from "../../../svg/AirplaneModeHelpSvg";
import delay from "../../../../util/delay";
import templateSample from "../../../../palmLines.json";

if (process.env.BROWSER) {
  import("./PalmSetup.scss");
}
export default class PalmSetup extends Component {
  constructor(props) {
    super(props);
    this.videoElement = null;
    this.width = 204;
    this.height = 314;
    const palmTemplate = props.palmItem
      ? props.palmItem.palmTemplate
      : undefined;
    this.state = {
      palmTemplate,
      currentStep: 1,
      totalSteps: 4,
    };
  }

  handleOpenCamera = () => {
    this.setupCamera();
    this.setState({ enableCamera: true });
  };

  handleTakePicture = () => {
    const { currentStep } = { ...this.state };
    // Turns off webcam
    const stream = this.videoElement.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach((track) => track.stop());
    this.videoElement.srcObject = null;
    let palmTemplate = "";
    templateSample.forEach((dataPoint) => {
      palmTemplate += dataPoint.toString();
    });
    this.setState({
      palmTemplate,
      enableCamera: false,
      currentStep: currentStep + 1,
    });
  };

  async setupCamera() {
    // Turns on webcam
    await delay(50); // enough time for react to render the video element.
    this.videoElement.width = this.width;
    this.videoElement.height = this.height;

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          facingMode: "user",
          width: this.width,
          height: this.height,
        },
      });
      this.videoElement.srcObject = stream;

      return new Promise((resolve) => {
        this.videoElement.onloadedmetadata = () => {
          this.videoElement.play();
          resolve(this.videoElement);
        };
      });
    }
    const errorMessage =
      "This browser does not support video capture, or this device does not have a camera";
    alert(errorMessage);
    return Promise.reject(errorMessage);
  }

  renderTakePicture() {
    const { palmTemplate, currentStep, enableCamera, totalSteps } = {
      ...this.state,
    };
    return (
      <div id="palm-setup" className="card owner1">
        <div className="card-content">
          <div className="card-title">Palm Login</div>
          <div className="excerpt">
            {!palmTemplate && "Please use your camera to register your palm"}
            {palmTemplate &&
              "Great! Here’s the hash that was created from your palm print:"}
          </div>
        </div>

        {!palmTemplate && !enableCamera && (
          <div>
            <PalmNotDetectedSvg />
          </div>
        )}
        {!palmTemplate && enableCamera && (
          <div>
            <video
              className="video"
              playsInline
              ref={(videoElement) => {
                this.videoElement = videoElement;
              }}
            />
          </div>
        )}
        {palmTemplate && (
          <Fragment>
            <span className="palm-template">{palmTemplate}</span>
            <div className="diagram-excerpt-1">
              We will send this hash to our server to verify you.
            </div>
            <div className="diagram-excerpt-1">
              If you disabled your internet connection, re-enable it first and
              then tap the button below.
            </div>
            {/* <PalmDetectedSvg /> */}
          </Fragment>
        )}
        <MStepper currentStep={currentStep} totalSteps={totalSteps} />
        <div className="submit-section">
          {!palmTemplate && !enableCamera && (
            <input
              type="button"
              value="Open Camera"
              onClick={this.handleOpenCamera}
            />
          )}
          {!palmTemplate && enableCamera && (
            <input
              type="button"
              value="Take Picture"
              onClick={this.handleTakePicture}
            />
          )}
          {palmTemplate && (
            <input
              type="button"
              value="Set Palm"
              onClick={() =>
                this.props.handleGoBack("owner", 10, {
                  palmItem: { palmTemplate },
                })
              }
            />
          )}
          <div className="how">How does this work?</div>
        </div>
      </div>
    );
  }

  renderPalmCard() {
    const { palmTemplate, currentStep, totalSteps } = { ...this.state };
    switch (currentStep) {
      case 1:
        return (
          <div id="palm-setup" className="card owner1">
            <div className="card-content">
              <div className="card-title">Palm Login</div>
              <PalmSvg />
            </div>
            <PalmHashDiagramSvg />
            <div className="diagram-excerpt-1">
              In the following screens, we’ll take a picture of your palm and
              convert it to a hash password that is specific to you.
            </div>
            <MStepper currentStep={currentStep} totalSteps={totalSteps} />
            <div className="submit-section">
              <input
                type="button"
                value="Next"
                onClick={() => this.setState({ currentStep: currentStep + 1 })}
              />
              <div className="how">How does this work?</div>
            </div>
          </div>
        );
      case 2:
        return (
          <div id="palm-setup" className="card owner1">
            <div className="card-content">
              <div className="card-title">Test it for youself</div>
            </div>
            <div className="diagram-excerpt-1">
              By storing the picture of your palm locally in your phone, we
              ensure it doesn't get leaked or stolen. We do this by not
              uploading it to our servers.
            </div>
            <div className="diagram-section-1">
              <NoWifiSvg />
              <a href="https://www.computerhope.com/issues/ch001957.htm#:~:text=In%20the%20pop%2Dup%20menu,Airplane%20mode%20on%20or%20off.">
                <AirplaneModeHelpSvg />
              </a>
            </div>
            <div className="diagram-excerpt-1">
              To test this, you may temporarily disable your internet connection
              or skip this optional step if you trust us to handle your data
              safely.
            </div>
            <MStepper currentStep={currentStep} totalSteps={totalSteps} />
            <div className="submit-section">
              <input
                type="button"
                value="Next"
                onClick={() => this.setState({ currentStep: currentStep + 1 })}
              />
              <div className="how">How does this work?</div>
            </div>
          </div>
        );
      case 3:
        return this.renderTakePicture();
      case 4:
        return this.renderTakePicture();
      default:
        return <Fragment />;
    }
  }

  renderHow() {
    return (
      <div className="how-container">
        <HowSvg loginMethod="palm" />
        <div className="sec-excerpt">
          Palm recognition is a technology that records your unique palm print
          and utilizes it to login to your account using your device's camera.
        </div>
        <PalmExampleSvg />
      </div>
    );
  }

  render() {
    const { isDisplayHow } = { ...this.props };
    return !isDisplayHow ? this.renderPalmCard() : this.renderHow();
  }
}
