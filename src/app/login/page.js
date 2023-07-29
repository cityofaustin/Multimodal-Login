"use client";
import React, { Fragment, useEffect, useState } from "react";
import LogoSvg from "../../svg/logo-svg";
import ContactSvg from "../../svg/contact-svg";
// import WebCameraShapshot from '../web-camera-shapshot';
// import CognitiveFaceService from '../../services/CognitiveFaceService';
import UrlUtil from "../../util/url-util";
import axios from "axios";
import LoginMethods from "./LoginMethods";
import EthCrypto from "eth-crypto";
import LoaderSvg from "../../svg/LoaderSvg";
// import opencv from '../../workers/opencv-4-3-0.js';
// import test from '../../fonts/Montserrat/Montserrat-Regular.ttf'
import "./index.scss";

// console.log(test);
// console.log(opencv);

const Login = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  // username: "adamtest",
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [faceTemplate, setFaceTemplate] = useState("");
  const [oneTimeCode, setOneTimeCode] = useState("");
  // loginMethods: [
  // "PasswordLoginType",
  // "SecurityQuestionsLoginType",
  // "PalmLoginType",
  // "TextLoginType",
  // ],
  const [loginMethods, setLoginMethods] = useState(undefined);
  // securityQuestions: ["streetNumGrewOn", "cityGrewIn", "primarySchool"],
  const [securityQuestions, setSecurityQuestions] = useState(undefined);
  const [findUserError, setFindUserError] = useState("");
  const [requestLoginCode, setRequestLoginCode] = useState(false);
  const [faceVerify, setFaceVerify] = useState(false);

  useEffect(() => {
    loadAppSettings();
    setTimeout(() => {
      document.getElementById("splash").style.animation = "fadeout 1s";
      document.getElementById("splash").style.opacity = 0;
      document.getElementById("main").style.animation = "fadein 1s";
      document.getElementById("main").style.opacity = 1;
    }, 1000);
  }, []);

  const loadAppSettings = async () => {
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

  const handleRequestLoginCode = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", username);

    let res;

    try {
      res = await axios.post("/request-social-login-code", {
        username,
      });
    } catch (err) {
      console.log("Error!");
      console.log(err);
    }
    await res.data;
    setRequestLoginCode(true);
  };

  const findUser = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    // let { findUserError, loginMethods, securityQuestions } = { ...this.state };
    let newFindUserError;
    let newSecurityQuestions = securityQuestions;
    let newLoginMethods = loginMethods;
    try {
      const input = "/api/users/login-info";
      const init = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usernameOrEmail: username }),
      };
      const httpResponse = await fetch(input, init);
      const response = await httpResponse.json();
      if (response.loginMethods) {
        newFindUserError = "";
        newLoginMethods = response.loginMethods;
        newSecurityQuestions = response.securityQuestions
          ? response.securityQuestions.map((sq) => {
              return { answer: "", question: sq };
            })
          : [];
      } else {
        newFindUserError = "No account found with that username";
      }
      setFindUserError(newFindUserError);
      setLoginMethods(newLoginMethods);
      setSecurityQuestions(newSecurityQuestions);
      setIsLoading(false);
    } catch (err) {
      setFindUserError("Something went wrong");
      setLoginMethods(newLoginMethods);
      setSecurityQuestions(newSecurityQuestions);
      setIsLoading(false);
    }
  };

  // const handleInputChange = (e) => {
  //   const { value } = e.target;
  //   const key = e.target.name;
  //   this.setState({ [key]: value });
  // };

  // const handleSnapshot = async (blob) => {
  //   // const { userName1 } = { ...this.state };
  //   // if (blob) {
  //   //   try {
  //   //     const imgFile = new File([blob], 'imgFile.png', {
  //   //       type: blob.type,
  //   //       lastModified: Date.now(),
  //   //     });
  //   //     const input = '/verify/face';
  //   //     const formdata = new FormData();
  //   //     formdata.append('img', imgFile, 'imgFile');
  //   //     formdata.append('username', userName1);
  //   //     const init = {
  //   //       method: 'POST',
  //   //       body: formdata,
  //   //     };
  //   //     const response = await fetch(input, init);
  //   //     console.log(response);
  //   //   } catch (err) {
  //   //     console.error(err.message);
  //   //   }
  //   // }
  // };

  const renderUsernamePrompt = () => {
    // const { username, findUserError, isLoading } = { ...this.state };
    return (
      <div className="username-container">
        <div className="section">
          <div className="title">First off</div>
          <div className="subtitle">Help us find your account</div>
          <form onSubmit={(e) => findUser(e)}>
            <div className="card">
              <div style={{ marginTop: "-20px" }}>
                <ContactSvg />
              </div>
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
                onChange={(e) => setUsername(e.target.value)}
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
              {isLoading && (
                <div className="rotate">
                  <LoaderSvg />
                </div>
              )}
              {/* TODO: not functional so commenting out for now. */}
              {/* <div className="forgot">Forgot your username?</div> */}
            </div>
          </form>
        </div>
      </div>
    );
  };

  const renderLoginWithMethods = () => {
    // const { username } = { ...this.state };
    let oneTimeCodeHidden = "hidden";

    if (requestLoginCode) {
      oneTimeCodeHidden = "text";
    }

    let passwordInput = (
      <input
        type="text"
        id="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
    );

    if (password !== undefined && password.length >= 64) {
      let privateKey = password;

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
              onClick={handleRequestLoginCode}
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
                  onChange={(e) => setFaceTemplate(e.target.value)}
                  value={faceTemplate}
                />
              </div>

              <div className="form-input">
                <label htmlFor="lname">One Time Code:</label>
                <input
                  type={oneTimeCodeHidden}
                  id="oneTimeCode"
                  name="oneTimeCode"
                  onChange={(e) => setOneTimeCode(e.target.value)}
                  value={oneTimeCode}
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
                id="redirect_uri"
                name="redirect_uri"
                type="hidden"
                value={UrlUtil.getQueryVariable("redirect_uri")}
              />
              <input id="scope" name="scope" type="hidden" value="" />
              <input id="state" name="state" type="hidden" value="" />

              <input className="login" type="submit" value="Login" />
            </form>
          </div>
        </div>
      </div>
    );
  };

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
          {!loginMethods && renderUsernamePrompt()}
          {loginMethods && (
            <>
              <LoginMethods
                loginMethods={loginMethods}
                username={username}
                securityQuestions={securityQuestions}
              />
            </>
          )}
        </main>
      </Fragment>
    </Fragment>
  );
};

export default Login;
