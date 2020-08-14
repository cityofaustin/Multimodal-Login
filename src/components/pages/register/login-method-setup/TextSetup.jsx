import React, { Component } from "react";
import delay from "../../../../util/delay";
// import KeycodeInputSvg from "../../../svg/KeycodeInputSvg";
import HowSvg from "../../../svg/HowSvg";
import TextExampleSvg from "../../../svg/TextExampleSvg";
if (process.env.BROWSER) {
  import("./TextSetup.scss");
}

export default class TextSetup extends Component {
  constructor(props) {
    super(props);
    const phoneNumber = props.textItem ? props.textItem.phoneNumber : "";
    // const keycode = props.textItem ? props.textItem.keycode : "";
    this.state = {
      phoneNumber,
      // keycode,
    };
  }

  // async sendKeycode() {
  //   const keycodeSentEl = document.getElementById("keycode-sent");
  //   keycodeSentEl.style.opacity = 0.6;
  //   await delay(2000);
  //   keycodeSentEl.style.opacity = 0;
  // }

  renderTextCard() {
    const {
      phoneNumber,
      // keycode
    } = { ...this.state };
    const { toggleDisplayHow } = { ...this.props };
    return (
      <div id="text-setup" className="card owner1">
        <div className="card-content">
          <div className="card-title">Text Login</div>
          <div className="excerpt1">Enter your phone number</div>
          <div className="email-section">
            <div className="card-body">
              <div className="card-body-section2">
                <div>Phone Number</div>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => {
                    this.setState({ phoneNumber: e.target.value });
                  }}
                />
                {/* <div className="keycode-btn-container">
                  <input
                    className="keycode-btn"
                    style={{ width: '210px' }}
                    type="button"
                    value="Text me my keycode"
                    onClick={() => this.sendKeycode()}
                    disabled={!phoneNumber}
                  />
                  <div id="keycode-sent">Your keycode has been sent!</div>
                </div> */}
              </div>
            </div>
          </div>
          {/* <div className="email-section">
            <div className="card-body">
              <div className="card-body-section2">
                <div>Your Keycode</div>
                <div className="keycode-input">
                  <KeycodeInputSvg />
                  <input
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
            </div>
          </div> */}
        </div>
        <div className="submit-section">
          <input
            style={{ width: "210px" }}
            type="button"
            value="Link Phone"
            onClick={() =>
              this.props.handleGoBack("owner", 10, {
                textItem: {
                  phoneNumber,
                  // , keycode
                },
              })
            }
            disabled={
              !phoneNumber
              // || !keycode
            }
          />
          <div className="how" onClick={toggleDisplayHow}>
            How does this work?
          </div>
        </div>
      </div>
    );
  }

  renderHow() {
    return (
      <div className="how-container">
        <HowSvg loginMethod="text" />
        <div className="sec-excerpt">
          Two-step verification is a simple way to authenticate a user by
          sending a unique code to their mobile device.
        </div>
        <TextExampleSvg />
      </div>
    );
  }

  render() {
    const { isDisplayHow } = { ...this.props };
    return !isDisplayHow ? this.renderTextCard() : this.renderHow();
  }
}
