import React, { Component, Fragment } from "react";
import * as PropTypes from "prop-types";
import TextExampleSvg from "../svg/TextExampleSvg";
import TextMethodLoginSvg from "../svg/TextMethodLoginSvg";
import KeycodeInputSvg from "../svg/KeycodeInputSvg";


class TextSetup extends Component {
  renderConfigure() {
    return <Fragment />;
  }
  renderLogin() {
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
  username: PropTypes.string,
  isSettings: PropTypes.bool,
  isAdd: PropTypes.bool
};

export default TextSetup;
