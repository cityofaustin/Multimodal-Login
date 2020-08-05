import React, { Component } from 'react';
import './TextSetup.scss';
import delay from '../../../../util/delay';
import KeycodeInputSvg from '../../../svg/KeycodeInputSvg';

export default class TextSetup extends Component {
  constructor(props) {
    super(props);
    const phoneNumber = props.textItem ? props.textItem.phoneNumber : '';
    const keycode = props.textItem ? props.textItem.keycode : '';
    this.state = {
      phoneNumber,
      keycode
    }
  }

  async sendKeycode() {
    const keycodeSentEl = document.getElementById('keycode-sent');
    keycodeSentEl.style.opacity = 0.6;
    await delay(2000);
    keycodeSentEl.style.opacity = 0;
  }

  render() {
    const { phoneNumber, keycode } = { ...this.state };
    return (
      <div id="text-setup" className="card owner1">
        <div className="card-content">
          <div className="card-title">Text Login</div>
          <div className="excerpt1">
            Enter your phone number to get a keycode
          </div>
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
                <div className="keycode-btn-container">
                  <input
                    className="keycode-btn"
                    style={{ width: '210px' }}
                    type="button"
                    value="Text me my keycode"
                    onClick={() => this.sendKeycode()}
                    disabled={!phoneNumber}
                  />
                  <div id="keycode-sent">Your keycode has been sent!</div>
                </div>
              </div>
            </div>
          </div>
          <div className="email-section">
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
          </div>
        </div>
        <div className="submit-section">
          <input
            style={{ width: '210px' }}
            type="button"
            value="Link Phone"
            onClick={() => this.props.handleGoBack('owner', 10, {textItem: {phoneNumber, keycode}})}
            disabled={!phoneNumber || !keycode}
          />
          <div className="how">How does this work?</div>
        </div>
      </div>
    );
  }
}
