import React, { Component, Fragment } from "react";
import PalmDetectedSvg from "../svg/PalmDetectedSvg";
import PalmNotDetectedSvg from "../svg/PalmNotDetectedSvg";
import HowSvg from "../svg/HowSvg";
import PalmExampleSvg from "../svg/PalmExampleSvg";
import MStepper from "../common/MStepper";
import PalmHashDiagramSvg from "../svg/PalmHashDiagramSvg";
import PalmSvg from "../svg/PalmSvg";
import NoWifiSvg from "../svg/NoWifiSvg";
import AirplaneModeHelpSvg from "../svg/AirplaneModeHelpSvg";
import delay from "../../util/delay";
// import templateSample from "../../../../palmLines.json";
import GoBackSvg from "../svg/GoBackSvg";
import cvservice from "../../services/CvService";
import UrlUtil from "../../util/url-util";
import PalmDiagramSvg from "../svg/PalmDiagram";

if (process.env.BROWSER) {
  import("./PalmSetup.scss");
}
export default class PalmSetup extends Component {
  videoElement = null; // the webcam ref
  canvasElement = null; // the original snapshot ref
  canvasElement2 = null; // the processed snapshot ref
  imageData = null; // the template palm image data
  // this.width = 204;
  // this.height = 314;
  width = 467.77;
  height = 720;

  constructor(props) {
    super(props);
    // const palmTemplate = props.palmItem
    //   ? props.palmItem.palmTemplate
    //   : undefined;
    this.state = {
      palmTemplate: undefined,
      currentStep: 1,
      // currentStep: 3,
      totalSteps: 4,
      reConfigure: false,
    };
  }

  componentDidMount() {
    this.load();
  }

  async load() {
    if (process.env.BROWSER) {
      await cvservice.load();
    }
  }

  handleOpenCamera = () => {
    this.setupCamera();
    this.setState({ enableCamera: true });
  };

  handleTakePicture = async () => {
    const { currentStep } = { ...this.state };
    // TODO:
    // 1) add palm overlay for desired ROI of palm
    // 2) add canvas over here, send back ROI of palm to canvas
    // 3) run houghline code https://answers.opencv.org/question/218774/how-to-extract-palm-lines/
    this.ctx1 = this.canvasElement.getContext("2d");
    const image = this.videoElement; // An element to draw into the context.
    const sx = 40; // The x-axis coordinate of the top left corner of the sub-rectangle of the source image to draw into the destination context.
    const sy = 100; // The y-axis coordinate of the top left corner of the sub-rectangle of the source image to draw into the destination context.
    const sWidth = 128; // The width of the sub-rectangle of the source image to draw into the destination context. If not specified, the entire rectangle from the coordinates specified by sx and sy to the bottom-right corner of the image is used.
    const sHeight = 128; // The height of the sub-rectangle of the source image to draw into the destination context.
    const dx = 0; // The x-axis coordinate in the destination canvas at which to place the top-left corner of the source image.
    const dy = 0; // The y-axis coordinate in the destination canvas at which to place the top-left corner of the source image.
    const dWidth = 128; // The width to draw the image in the destination canvas. This allows scaling of the drawn image. If not specified, the image is not scaled in width when drawn.
    const dHeight = 128; // The height to draw the image in the destination canvas. This allows scaling of the drawn image. If not specified, the image is not scaled in height when drawn.
    // this.ctx1.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    this.ctx1.drawImage(
      image,
      0,
      0,
      this.width,
      this.height,
      0,
      0,
      this.width,
      this.height
    );
    // Turns off webcam
    const stream = this.videoElement.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach((track) => track.stop());
    this.videoElement.srcObject = null;

    const imageInput = this.ctx1.getImageData(0, 0, this.width, this.height);
    const payload = (await cvservice.imageProcessing3(imageInput)).data.payload;
    this.imageData = payload.img;

    // const ctx2 = this.canvasElement2.getContext("2d");
    // ctx2.canvas.width = 128;
    // ctx2.canvas.height = 128;
    // ctx2.putImageData(this.imageData, 0, 0);

    // let palmTemplate = "";
    // templateSample.forEach((dataPoint) => {
    //   palmTemplate += dataPoint.toString();
    // });
    const palmTemplate = payload.template;

    this.setState(
      {
        palmTemplate,
        enableCamera: false,
        currentStep: currentStep + 1,
      },
      async () => {
        await delay(50); // enough time for react to render the canvas element.
        const ctx2 = this.canvasElement2.getContext("2d");
        ctx2.canvas.width = 128;
        ctx2.canvas.height = 128;
        ctx2.putImageData(this.imageData, 0, 0);
      }
    );
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

  verifyAndSave = async (e) => {
    e.preventDefault();
    const { goBack, isAdd, loginMethods, setLoginMethods } = { ...this.props };
    const { palmTemplate } = { ...this.state };
    try {
      const url = "/api/login-methods";
      const authorization = UrlUtil.getQueryVariable("access_token");
      const init = {
        method: isAdd ? "POST" : "PUT",
        headers: {
          Authorization: `Bearer ${authorization}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ palmTemplate: JSON.stringify(palmTemplate) }),
      };
      await fetch(url, init);
      if (isAdd) {
        loginMethods.push("PalmLoginType");
        setLoginMethods(loginMethods);
      }
      goBack();
    } catch (err) {
      console.error(err);
    }
  };

  deletePalm = async () => {
    const { setLoginMethods, goBack } = { ...this.props };
    let { loginMethods } = { ...this.props };
    try {
      const url = "/api/login-methods/PalmLoginType";
      const authorization = UrlUtil.getQueryVariable("access_token");
      const init = {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${authorization}`,
          "Content-Type": "application/json",
        },
      };
      await fetch(url, init);
      loginMethods = loginMethods.filter(lm => lm !== "PalmLoginType");
      setLoginMethods(loginMethods);
      goBack();
    } catch (err) {
      console.error(err);
    }
  };

  renderConfigure() {
    return (
      <form onSubmit={this.verifyAndSave}>
        <input
          style={{ width: "210px", fontSize: "22px" }}
          type="submit"
          value="Verify and Save"
        />
      </form>
    );
  }

  renderLogin() {
    const { renderHiddenInputs } = { ...this.props };
    const { palmTemplate } = { ...this.state };
    return (
      <form method="POST" action="/authorize">
        <input name="palmTemplate" type="hidden" value={palmTemplate} />
        {renderHiddenInputs()}
        <input
          style={{ width: "210px", fontSize: "22px" }}
          type="submit"
          value="Verify and Login"
        />
      </form>
    );
  }

  renderTakePicture() {
    const { isLogin, toggleDisplayHow, isSettings } = { ...this.props };
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
          <div style={{ position: "relative" }}>
            <div className="palm-overlay">
              <PalmExampleSvg />
            </div>
            <video
              className="video"
              playsInline
              ref={(videoElement) => {
                this.videoElement = videoElement;
              }}
            />
            <canvas
              ref={(canvasElement) => {
                this.canvasElement = canvasElement;
              }}
              width={this.width}
              height={this.height}
              style={{
                display: "none",
                marginTop: "20px",
                maxWidth: "100%",
                backgroundColor: "black",
                border: "1px solid #555",
              }}
            />
          </div>
        )}
        {palmTemplate && (
          <Fragment>
            <canvas
              ref={(canvasElement2) => {
                this.canvasElement2 = canvasElement2;
              }}
              width={128}
              height={128}
              style={{
                maxWidth: "100%",
                backgroundColor: "black",
                border: "1px solid #555",
              }}
            />
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
          {palmTemplate && !isLogin && !isSettings && (
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
          {palmTemplate && isLogin && this.renderLogin()}
          {palmTemplate && isSettings && this.renderConfigure()}
          {toggleDisplayHow && (
            <div className="how" onClick={toggleDisplayHow}>
              How does this work?
            </div>
          )}
        </div>
      </div>
    );
  }

  renderPalmCard() {
    const { toggleDisplayHow, isSettings, isAdd } = { ...this.props };
    const { currentStep, totalSteps, reConfigure, confirmDelete } = {
      ...this.state,
    };
    if (confirmDelete) {
      return (
        <div
          id="palm-setup"
          className="card owner1 delete"
          style={{ width: "216px" }}
        >
          <div className="card-content">
            <div className="card-title">Palm Login</div>
            <PalmSvg />
          </div>
          <div className="delete-excerpt">
            <p>Are you sure you wish to delete this login method?</p>
            <p>
              You will have to re-configure your palm print from scratch if you
              change your mind
            </p>
          </div>
          <div>
            <input
              className="delete-button"
              style={{ width: "210px" }}
              type="button"
              value="Yes, delete"
              onClick={this.deletePalm}
            />
            <div
              className="delete-excerpt"
              onClick={() => this.setState({ confirmDelete: false })}
              style={{
                marginTop: "12px",
                cursor: "pointer",
              }}
            >
              no, take me back
            </div>
          </div>
        </div>
      );
    }
    if (isSettings && !isAdd && !reConfigure) {
      return (
        <div id="palm-setup" className="card owner1" style={{ width: "216px" }}>
          <div className="card-content">
            <div className="card-title">Palm Login</div>
            <PalmSvg />
          </div>
          <div
            style={{
              fontSize: "15px",
              color: "rgba(72, 72, 72, 0.77)",
              textAlign: "center",
              fontWeight: "500",
            }}
          >
            Welcome to your palm print configuration!
          </div>
          <PalmDiagramSvg />
          <div
            style={{
              fontSize: "15px",
              color: "rgba(72, 72, 72, 0.77)",
              textAlign: "center",
              fontWeight: "500",
            }}
          >
            Tap below to replace your existing biometric data with a new palm
            print.
          </div>
          <div>
            <input
              style={{ width: "210px" }}
              type="button"
              value="Re-configure"
              onClick={() => {
                this.setState({ reConfigure: true });
              }}
            />
            <div
              onClick={() => this.setState({ confirmDelete: true })}
              style={{
                color: "#d95868",
                marginTop: "12px",
                fontSize: "15px",
                cursor: "pointer",
                textAlign: "center",
              }}
            >
              delete this login method
            </div>
          </div>
        </div>
      );
    }
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
              {toggleDisplayHow && (
                <div className="how" onClick={toggleDisplayHow}>
                  How does this work?
                </div>
              )}
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
              {toggleDisplayHow && (
                <div className="how" onClick={toggleDisplayHow}>
                  How does this work?
                </div>
              )}
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
    const { isLogin, toggleDisplayHow, isSettings } = { ...this.props };
    const howSection = (
      <div className="how-container">
        <HowSvg loginMethod="palm" />
        <div className="sec-excerpt">
          Palm recognition is a technology that records your unique palm print
          and utilizes it to login to your account using your device's camera.
        </div>
        <PalmExampleSvg />
      </div>
    );
    return isLogin || isSettings ? (
      <div>
        <div className="card owner1">
          {howSection}
          <GoBackSvg color="#2362c7" goBack={() => toggleDisplayHow()} />
        </div>
      </div>
    ) : (
      howSection
    );
  }

  render() {
    const { isDisplayHow } = { ...this.props };
    return !isDisplayHow ? this.renderPalmCard() : this.renderHow();
  }
}
