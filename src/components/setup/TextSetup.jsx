import React, { Component, Fragment } from "react";
import * as PropTypes from "prop-types";
import TextExampleSvg from "../svg/TextExampleSvg";
import TextMethodLoginSvg from "../svg/TextMethodLoginSvg";
import KeycodeInputSvg from "../svg/KeycodeInputSvg";
import UrlUtil from "../../util/url-util";
import delay from "../../util/delay";

class TextSetup extends Component {
  state = {
    keycode: "",
    phoneNumber: "",
    isTextSet: false,
    confirmDelete: false,
  };
  setText = async (e) => {
    e.preventDefault();
    const { phoneNumber } = { ...this.state };
    const { isAdd, loginMethods, setLoginMethods, goBack } = { ...this.props };
    try {
      const url = "/api/login-methods";
      const authorization = UrlUtil.getQueryVariable("access_token");
      const init = {
        method: isAdd ? "POST" : "PUT",
        headers: {
          Authorization: `Bearer ${authorization}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: phoneNumber }),
      };
      await fetch(url, init);
      if (isAdd) {
        loginMethods.push("TextLoginType");
        setLoginMethods(loginMethods);
        goBack();
        return;
      }
    } catch (err) {
      console.error(err);
    }
    this.setState({ isTextSet: true });
  };
  sendKeycode = async () => {
    const { username } = { ...this.props };
    const keycodeSentEl = document.getElementById("keycode-sent");
    keycodeSentEl.style.opacity = 0.6;
    try {
      const url = "api/users/send-text-otp";
      const init = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
        }),
      };
      await fetch(url, init);
    } catch (err) {
      console.log("Error!");
      console.log(err);
    }
    await delay(2000);
    keycodeSentEl.style.opacity = 0;
  };
  deleteTextLogin = async () => {
    const { setLoginMethods, goBack } = { ...this.props };
    let { loginMethods } = { ...this.props };
    try {
      const url = "/api/login-methods/TextLoginType";
      const authorization = UrlUtil.getQueryVariable("access_token");
      const init = {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${authorization}`,
          "Content-Type": "application/json",
        },
      };
      await fetch(url, init);
      loginMethods = loginMethods.filter((lm) => lm !== "TextLoginType");
      setLoginMethods(loginMethods);
      goBack();
    } catch (err) {
      console.error(err);
    }
  };
  renderHiddenInputs = () => {
    const { username } = { ...this.props };
    return (
      <Fragment>
        <input type="hidden" id="username" name="username" value={username} />
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
      </Fragment>
    );
  };
  renderConfigure() {
    const { isAdd, goBack } = { ...this.props };
    const { phoneNumber, isTextSet, confirmDelete } = { ...this.state };
    if (confirmDelete) {
      return (
        <div id="section-1-owner">
          <div className="section-contents">
            <div className="card login-card delete">
              <div className="top-section">
                <div className="card-title">Text Login</div>
                <TextMethodLoginSvg />
              </div>
              <div className="delete-excerpt">
                <p>Are you sure you wish to delete this login method?</p>
                <p>
                  You will have to add a new phone number later if you change
                  your mind
                </p>
              </div>
              <div>
                <input
                  className="delete-button"
                  style={{ width: "210px" }}
                  type="button"
                  value="Yes, delete"
                  onClick={this.deleteTextLogin}
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
          </div>
        </div>
      );
    }
    return (
      <div id="section-1-owner">
        <div className="section-contents">
          <form onSubmit={this.setText} className="card login-card">
            <div className="top-section">
              <div className="card-title">Text Login</div>
              <TextMethodLoginSvg />
            </div>
            <div className="card-body-section2">
              <div>New Phone Number</div>
              <input
                style={{
                  width: "210px",
                  height: "35px",
                  lineHeight: "35px",
                  borderRadius: "8px",
                  border: "solid 1px rgba(112, 112, 112, 0.27)",
                  backgroundColor: "#e8f0fe",
                  paddingLeft: "14px",
                  fontSize: "15px",
                  color: "rgba(72, 72, 72, 0.77)",
                  fontFamily: "Montserrat",
                  marginTop: "3.3px",
                }}
                type="tel"
                value={phoneNumber}
                onChange={(e) => {
                  this.setState({ phoneNumber: e.target.value });
                }}
              />
              {!isTextSet && (
                <div
                  style={{
                    color: "rgba(72, 72, 72, 0.77)",
                    fontSize: "15px",
                    textAlign: "center",
                    marginTop: "12px",
                  }}
                >
                  Please type in your new phone number above
                </div>
              )}
              {isTextSet && (
                <div
                  className="success"
                  style={{
                    marginTop: "12px",
                    fontSize: "15px",
                    textAlign: "center",
                    color: "#32a736",
                  }}
                >
                  Phone number set!
                </div>
              )}
            </div>
            <div>
              <input
                style={{ width: "210px" }}
                type="submit"
                value="Link Phone"
                disabled={
                  !phoneNumber ||
                  phoneNumber.length < 10 ||
                  phoneNumber.length > 10
                }
              />
              {isAdd && (
                <div className="how" onClick={goBack}>
                  Take me back
                </div>
              )}
              {!isAdd && (
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
              )}
              {/* <div
                className="how"
                onClick={() => this.setState({ isDisplayHow: !isDisplayHow })}
              >
                How does this work?
              </div> */}
            </div>
            {this.renderHiddenInputs()}
          </form>
        </div>
      </div>
    );
  }
  renderLogin() {
    const { keycode, isDisplayHow } = { ...this.state };
    return (
      <Fragment>
        {!isDisplayHow && (
          <div id="section-1-owner">
            <div className="section-contents">
              <form
                method="POST"
                action="/authorize"
                className="card login-card"
              >
                <div className="top-section">
                  <div className="card-title">Text Login</div>
                  <TextMethodLoginSvg />
                </div>
                <div className="keycode-btn-container">
                  <input
                    className="keycode-btn"
                    style={{ width: "210px" }}
                    type="button"
                    value="Text me my code"
                    onClick={() => this.sendKeycode()}
                    // disabled={!phoneNumber}
                  />
                  <div id="keycode-sent">Your keycode has been sent!</div>
                </div>
                <div className="card-body-section2">
                  <div>Your Keycode</div>
                  <div className="keycode-input">
                    <KeycodeInputSvg />
                    <input
                      name="oneTimeCode"
                      type="number"
                      maxLength="6"
                      minLength="6"
                      value={keycode}
                      onChange={(e) => {
                        this.setState({ keycode: e.target.value });
                      }}
                    />
                  </div>
                  <div className="input-excerpt">
                    Please enter your 6 digit keycode
                  </div>
                </div>
                <div>
                  <input
                    style={{ width: "210px" }}
                    type="submit"
                    value="Login"
                    disabled={keycode.length < 1}
                  />
                  <div
                    className="how"
                    onClick={() =>
                      this.setState({ isDisplayHow: !isDisplayHow })
                    }
                  >
                    How does this work?
                  </div>
                </div>
                {this.renderHiddenInputs()}
              </form>
            </div>
          </div>
        )}
        {isDisplayHow && (
          <div>
            <div className="card owner1">
              <div className="how-container">
                <HowSvg loginMethod="text" />
                <div className="sec-excerpt">
                  Two-step verification is a simple way to authenticate a user
                  by sending a unique code to their mobile device.
                </div>
                <TextExampleSvg />
              </div>
              <GoBackSvg
                color="#2362c7"
                goBack={() => this.setState({ isDisplayHow: !isDisplayHow })}
              />
            </div>
          </div>
        )}
      </Fragment>
    );
  }
  render() {
    const { isSettings } = { ...this.props };
    if (!isSettings) {
      return this.renderLogin();
    } else {
      return this.renderConfigure();
    }
  }
}

TextSetup.propTypes = {
  loginMethods: PropTypes.arrayOf(PropTypes.string),
  setLoginMethods: PropTypes.func,
  username: PropTypes.string,
  isSettings: PropTypes.bool,
  isAdd: PropTypes.bool,
  goBack: PropTypes.func,
};

export default TextSetup;
