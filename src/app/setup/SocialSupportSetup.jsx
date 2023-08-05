"use client";
import React, { Component, Fragment } from "react";
import SocialSupportLoginSvg from "../../svg/SocialSupportLoginSvg";
import * as PropTypes from "prop-types";
import KeycodeInputSvg from "../../svg/KeycodeInputSvg";
import UrlUtil from "../../util/url-util";
import HowSvg from "../../svg/HowSvg";
import TextExampleSvg from "../../svg/TextExampleSvg";
import GoBackSvg from "../../svg/GoBackSvg";
import ContactSvg from "../../svg/contact-svg";
import delay from "../../util/delay";

class SocialSupportSetup extends Component {
  state = {
    isDisplayHow: false,
    keycode: "",
    hasKeycodeBeenSent: false,
    isFailedLoginAttempt: false,
  };
  sendKeycodeToHelper = async () => {
    const { username } = { ...this.props };
    this.setState({ hasKeycodeBeenSent: true });
    const keycodeSentEl = document.getElementById("keycode-sent");
    keycodeSentEl.style.opacity = 0.6;
    try {
      const url = "api/users/send-helper-text-otp";
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

  authorize = async (e) => {
    e.preventDefault();
    const target = e.target;
    const httpRes = await fetch(target.action, {
      body: new URLSearchParams(new FormData(target)),
      headers: {
        "Content-Type": target.encoding,
      },
      method: target.method,
    });
    if (httpRes.status === 401) {
      this.setState({ isFailedLoginAttempt: true });
    }
    if (httpRes.status === 200) {
      if (httpRes.redirected) {
        location.replace(httpRes.url);
      }
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
          id="redirect_uri"
          name="redirect_uri"
          type="hidden"
          value={UrlUtil.getQueryVariable("redirect_uri")}
        />
        <input id="scope" name="scope" type="hidden" value="" />
        <input id="state" name="state" type="hidden" value="" />
      </Fragment>
    );
  };
  renderConfigure() {
    const { isDisplayHow } = { ...this.state };
    const { goBack } = { ...this.props };
    return (
      <Fragment>
        {isDisplayHow && this.renderIsDisplayHow()}
        {!isDisplayHow && (
          <div id="section-1-owner">
            <div className="section-contents">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  goBack();
                }}
                className="card login-card"
              >
                <div className="top-section">
                  <div className="card-title">Social Support</div>
                  <ContactSvg />
                </div>
                <div
                  style={{
                    fontSize: "20px",
                    color: "rgba(72, 72, 72, 0.77)",
                    textAlign: "center",
                  }}
                >
                  To configure this login method add contacts to your account
                  and give them permission to help you login to your account
                </div>
                <div>
                  <input
                    style={{ width: "210px" }}
                    type="submit"
                    value="Got it"
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
                {/* {this.renderHiddenInputs()} */}
              </form>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
  renderIsDisplayHow() {
    const { isDisplayHow } = { ...this.state };
    return (
      <div>
        <div className="card owner1">
          <div className="how-container">
            <HowSvg loginMethod="text" />
            <div className="sec-excerpt">
              Two-step verification is a simple way to authenticate a user by
              sending a unique code to their mobile device.
            </div>
            <TextExampleSvg />
          </div>
          <GoBackSvg
            color="#2362c7"
            goBack={() => this.setState({ isDisplayHow: !isDisplayHow })}
          />
        </div>
      </div>
    );
  }
  renderLogin() {
    const {
      isDisplayHow,
      keycode,
      hasKeycodeBeenSent,
      isFailedLoginAttempt,
    } = { ...this.state };
    return (
      <Fragment>
        {!isDisplayHow && (
          <div id="section-1-owner">
            <div className="section-contents">
              <form
                onSubmit={this.authorize}
                method="POST"
                action="/authorize"
                className="card login-card"
              >
                <div className="top-section">
                  <div className="card-title">Social Support</div>
                  <SocialSupportLoginSvg />
                </div>
                <div className="keycode-btn-container">
                  <input
                    className="keycode-btn"
                    style={{ width: "210px", fontSize: "18px" }}
                    type="button"
                    value="Text code to helpers"
                    onClick={() => this.sendKeycodeToHelper()}
                    disabled={hasKeycodeBeenSent}
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
                  {isFailedLoginAttempt && (
                    <div className="error">Failed login attempt</div>
                  )}
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
        {isDisplayHow && this.renderIsDisplayHow()}
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

SocialSupportSetup.propTypes = {
  username: PropTypes.string,
  isSettings: PropTypes.bool,
  goBack: PropTypes.func,
};

export default SocialSupportSetup;
