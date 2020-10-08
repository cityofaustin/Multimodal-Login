import React, { Fragment } from "react";
import LogoSvg from "../svg/logo-svg";
import ContactSvg from "../svg/contact-svg";
// import WebCameraShapshot from '../web-camera-shapshot';
// import CognitiveFaceService from '../../services/CognitiveFaceService';
import UrlUtil from "../../util/url-util";
import axios from "axios";
import LoginMethods from "./login/LoginMethods";
import EthCrypto from "eth-crypto";
// import opencv from '../../workers/opencv-4-3-0.js';
// import test from '../../fonts/Montserrat/Montserrat-Regular.ttf'

// console.log(test);
// console.log(opencv);
let img;
// https://stackoverflow.com/a/30355080/6907541
if (process.env.BROWSER) {
  require("../global.scss");
  require("./login.scss");
  img = require("../../img/img.jpg").default;
}

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      // username: "adamtest",
      password: "",
      faceTemplate: "",
      oneTimeCode: "",
      loginMethods: undefined,
      // loginMethods: [
      // "PasswordLoginType",
      // "SecurityQuestionsLoginType",
      // "PalmLoginType",
      // "TextLoginType",
      // ],
      securityQuestions: undefined,
      // securityQuestions: ["streetNumGrewOn", "cityGrewIn", "primarySchool"],
      findUserError: "",
      requestLoginCode: false,
      faceVerify: false,
    };
  }

  componentDidMount() {
    if (process.env.BROWSER) {
      this.loadAppSettings();
      setTimeout(() => {
        document.getElementById("splash").style.animation = "fadeout 1s";
        document.getElementById("splash").style.opacity = 0;
        document.getElementById("main").style.animation = "fadein 1s";
        document.getElementById("main").style.opacity = 1;
      }, 1000);
    }
  }

  loadAppSettings = async () => {
    try {
      const url = "api/app-settings";
      const init = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };
      const response = await fetch(url, init);
      const appSettings = await response.json();
      const titleSetting = appSettings.find((a) => a.settingName === "title");
      if (titleSetting) {
        document.title = titleSetting.settingValue + " Auth";
      }
    } catch (err) {
      console.log("Error!");
      console.log(err);
    }
  };

  requestLoginCode = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append(username, this.state.username);

    let res;

    try {
      res = await axios.post("/request-social-login-code", {
        username: this.state.username,
      });
    } catch (err) {
      console.log("Error!");
      console.log(err);
    }
    await res.data;
    this.setState({ requestLoginCode: true });
  };

  findUser = async (e) => {
    e.preventDefault();

    const { username } = { ...this.state };
    let { findUserError, loginMethods, securityQuestions } = { ...this.state };
    const input = "/api/users/login-info";
    const init = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ usernameOrEmail: username }),
    };
    const httpResponse = await fetch(input, init);
    const response = await httpResponse.json();
    if (response.loginMethods) {
      findUserError = "";
      loginMethods = response.loginMethods;
      securityQuestions = response.securityQuestions ? response.securityQuestions.map((sq) => {
        return { answer: "", question: sq };
      }) : [];
    } else {
      findUserError = "No account found with that username";
    }
    this.setState({ findUserError, loginMethods, securityQuestions });
  };

  handleInputChange = (e) => {
    const { value } = e.target;
    const key = e.target.name;
    this.setState({ [key]: value });
  };

  handleSnapshot = async (blob) => {
    const { userName1 } = { ...this.state };
    // if (blob) {
    //   try {
    //     const imgFile = new File([blob], 'imgFile.png', {
    //       type: blob.type,
    //       lastModified: Date.now(),
    //     });
    //     const input = '/verify/face';
    //     const formdata = new FormData();
    //     formdata.append('img', imgFile, 'imgFile');
    //     formdata.append('username', userName1);
    //     const init = {
    //       method: 'POST',
    //       body: formdata,
    //     };
    //     const response = await fetch(input, init);
    //     console.log(response);
    //   } catch (err) {
    //     console.error(err.message);
    //   }
    // }
  };

  renderUsernamePrompt() {
    const { username, findUserError } = { ...this.state };
    return (
      <div className="username-container">
        <div className="section">
          <div className="title">First off</div>
          <div className="subtitle">Help us find your account</div>
          <form onSubmit={(e) => this.findUser(e)}>
            <div className="card">
              <ContactSvg />
              <div className="username">E-mail or Username</div>
              <div className="prompt">
                Please enter your e-mail or username below...
              </div>
              <input
                className="username-input"
                name="username"
                type="text"
                // placeholder="..."
                value={username}
                onChange={this.handleInputChange}
              />
              <div className="error">
                {findUserError.length > 0 && (
                  <span>
                    {findUserError}
                    <br />
                  </span>
                )}
                {UrlUtil.getQueryVariable("success") === "false" && (
                  <Fragment>Failed login attempt</Fragment>
                )}
              </div>

              {/* <div className="error">{findUserError}</div> */}
              <input
                className="find-user"
                type="submit"
                value="Find me"
                disabled={username.length < 1}
              />
              {/* TODO: not functional so commenting out for now. */}
              {/* <div className="forgot">Forgot your username?</div> */}
            </div>
          </form>
        </div>
      </div>
    );
  }

  renderLoginWithMethods() {
    const { username } = { ...this.state };
    let oneTimeCodeHidden = "hidden";

    if (this.state.requestLoginCode) {
      oneTimeCodeHidden = "text";
    }

    let passwordInput = (
      <input
        type="text"
        id="password"
        name="password"
        onChange={this.handleInputChange}
        value={this.state.password}
      />
    );

    if (this.state.password !== undefined && this.state.password.length >= 64) {
      let privateKey = this.state.password;

      if (privateKey.substring(0, 2) !== "0x") {
        privateKey = "0x" + privateKey;
      }

      let publicEncryptionKey;
      let publicAddress;

      try {
        publicEncryptionKey = EthCrypto.publicKeyByPrivateKey(privateKey);
        publicAddress = EthCrypto.publicKey.toAddress(publicEncryptionKey);

        document.cookie =
          "bring-your-own-key=" + privateKey.substring(2, privateKey.length);
      } catch (e) {
        console.log("Not using byok");
      }

      if (publicAddress !== undefined) {
        passwordInput = (
          <Fragment>
            <input
              type="text"
              id="signature"
              name="signature"
              value="request-signature"
            />
            <input
              type="text"
              id="publicAddress"
              name="publicAddress"
              value={publicAddress}
            />
          </Fragment>
        );
      }
    }

    return (
      <div className="login-container">
        <div className="section">
          <div className="title">Choose your login method</div>
          <div className="subtitle">To access your account</div>
          <div className="card">
            <input
              className="login"
              type="submit"
              value="Request One Time Code"
              onClick={this.requestLoginCode}
            />

            <div className="method-title">Method #1</div>
            <form method="POST" action="/authorize">
              <input
                type="hidden"
                id="username"
                name="username"
                value={username}
              />
              <div className="form-input">
                <label htmlFor="lname">Password:</label>
                {passwordInput}
              </div>

              <div className="form-input">
                <label htmlFor="lname">Face Template:</label>
                <input
                  type="text"
                  id="faceTemplate"
                  name="faceTemplate"
                  onChange={this.handleInputChange}
                  value={this.state.faceTemplate}
                />
              </div>

              <div className="form-input">
                <label htmlFor="lname">One Time Code:</label>
                <input
                  type={oneTimeCodeHidden}
                  id="oneTimeCode"
                  name="oneTimeCode"
                  onChange={this.handleInputChange}
                  value={this.state.oneTimeCode}
                />
              </div>

              <input
                id="client_id"
                name="client_id"
                type="hidden"
                value={UrlUtil.getQueryVariable("client_id")}
              />
              <input
                id="response_type"
                name="response_type"
                type="hidden"
                value={UrlUtil.getQueryVariable("response_type")}
              />
              <input
                id="redirect_url"
                name="redirect_url"
                type="hidden"
                value={UrlUtil.getQueryVariable("redirect_url")}
              />
              <input id="scope" name="scope" type="hidden" value="" />
              <input id="state" name="state" type="hidden" value="" />

              <input className="login" type="submit" value="Login" />
            </form>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { loginMethods, username, securityQuestions } = { ...this.state };
    return (
      <Fragment>
        <Fragment>
          <div
            id="splash"
            style={{
              backgroundColor: "#2362c7",
              minHeight: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <LogoSvg />
          </div>
          <main id="main" style={{ position: "absolute", top: 0, opacity: 0 }}>
            {!loginMethods && this.renderUsernamePrompt()}
            {loginMethods && (
              <LoginMethods
                loginMethods={loginMethods}
                username={username}
                securityQuestions={securityQuestions}
              />
            )}
          </main>
        </Fragment>
      </Fragment>
    );
  }
}

export default Login;
