import React, { Component, Fragment } from "react";
import UrlUtil from "../../../util/url-util";
import LoginMethodOptionSvg from "../../svg/LoginMethodOptionSvg";
import PasswordMethodLoginSvg from "../../svg/PasswordMethodLoginSvg";
import KeycodeInputSvg from "../../svg/KeycodeInputSvg";
import delay from "../../../util/delay";
import TextMethodLoginSvg from "../../svg/TextMethodLoginSvg";
import SecurityMethodLoginSvg from "../../svg/SecurityMethodLoginSvg";
import MSelect from "../../common/MSelect";

if (process.env.BROWSER) {
  import("./LoginMethods.scss");
}

export default class LoginMethods extends Component {
  constructor(props) {
    super(props);
    const { securityQuestions } = { ...this.props };
    let securityItems;
    if (securityQuestions) {
      securityItems = [];
      if (securityQuestions.length > 2) {
        for (let i = 0; i < 2; i++) {
          // They can pick 2 of 3 if they did 3
          securityItems.push({ question: undefined, answer: "" });
        }
      } else {
        for (const {} of securityQuestions) {
          securityItems.push({ question: undefined, answer: "" });
        }
      }
    }

    this.state = {
      username: "",
      password: "",
      faceTemplate: "",
      oneTimeCode: "",
      requestLoginCode: false,
      faceVerify: false,
      keycode: "",
      selectedLoginMethod: "",
      // selectedLoginMethod: "TextLoginType",
      securityItems,
    };
  }

  getOptions = () => {
    const { securityItems } = { ...this.state };
    return [
      {
        value: "streetNumGrewOn",
        label: "What was the street number that you grew up on?",
        isDisabled: securityItems.some(
          (securityItem) => securityItem.question === "streetNumGrewOn"
        ),
      },
      {
        value: "cityGrewIn",
        label: "In what town or city did you grow up in?",
        isDisabled: securityItems.some(
          (securityItem) => securityItem.question === "cityGrewIn"
        ),
      },
      {
        value: "primarySchool",
        label: "What primary school did you go to?",
        isDisabled: securityItems.some(
          (securityItem) => securityItem.question === "primarySchool"
        ),
      },
    ];
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

  isSecurityFilledOut() {
    const { securityItems } = { ...this.state };
    let isFilledOut = true;
    for (const securityItem of securityItems) {
      if (securityItem.answer.length <= 0 || !securityItem.question) {
        isFilledOut = false;
      }
    }
    return isFilledOut;
  }

  renderHiddenInputs() {
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
  }

  renderSelectedLoginMethod(loginMethod) {
    const { password, keycode, securityItems } = { ...this.state };
    switch (loginMethod) {
      case "PasswordLoginType":
        return (
          <div id="section-1-owner">
            <div className="section-contents">
              <form
                method="POST"
                action="/authorize"
                className="card login-card"
              >
                <div className="top-section">
                  <div className="card-title">Password</div>
                  <PasswordMethodLoginSvg />
                </div>
                <div className="card-body">
                  <div className="card-body-section1">
                    <div>Password</div>
                    <input
                      name="password"
                      type="password"
                      value={password}
                      onChange={(e) =>
                        this.setState({ password: e.target.value })
                      }
                    />
                    <div className="excerpt">
                      Please type your password to gain access to your account.
                    </div>
                  </div>
                </div>
                <input
                  style={{ width: "210px" }}
                  type="submit"
                  value="Login"
                  disabled={password.length < 1}
                />
                {this.renderHiddenInputs()}
              </form>
            </div>
          </div>
        );
      case "TextLoginType":
        return (
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
                <input
                  style={{ width: "210px" }}
                  type="submit"
                  value="Login"
                  disabled={keycode.length < 1}
                />
                {this.renderHiddenInputs()}
              </form>
            </div>
          </div>
        );
      case "SecurityQuestionsLoginType":
        return (
          <div id="section-1-owner">
            <div className="section-contents">
              <form
                method="POST"
                action="/authorize"
                className="card login-card"
              >
                <div className="top-section">
                  <div
                    className="card-title"
                    style={{ margin: "0 -18px 12px -18px" }}
                  >
                    Security Questions
                  </div>
                  <SecurityMethodLoginSvg />
                </div>
                <div className="question-container">
                  {securityItems.map((securityItem, i) => {
                    return (
                      <Fragment key={i}>
                        <div className="card-body-section1">
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <label>Question #{i + 1}</label>
                          </div>
                          <MSelect
                            value={this.getOptions().find(
                              (option) => option.value === securityItem.question
                            )}
                            options={this.getOptions()}
                            isSearcheable={false}
                            onChange={(e) => {
                              securityItem.question = e.value;
                              this.setState({ securityItems });
                            }}
                          />
                        </div>
                        <div className="answer-section">
                          <div className="card-body-section1">
                            <label>Answer</label>
                            <input
                              type="text"
                              value={securityItem.answer}
                              onChange={(e) => {
                                securityItem.answer = e.target.value;
                                this.setState({ securityItems });
                              }}
                            />
                          </div>
                        </div>
                      </Fragment>
                    );
                  })}
                </div>
                <div className="security-excerpt">
                  Please clear the questions listed above to gain access to your
                  account.
                </div>
                <input
                  name="securityQuestions"
                  type="hidden"
                  value={JSON.stringify(securityItems)}
                />
                <input
                  style={{ width: "210px" }}
                  type="submit"
                  value="Login"
                  disabled={!this.isSecurityFilledOut()}
                />
                {this.renderHiddenInputs()}
              </form>
            </div>
          </div>
        );
      default:
        return (
          <div id="section-1-owner">
            <div className="section-contents">
              <div className="card login-card">
                <div className="top-section">
                  <div className="card-title">TBD</div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  }

  render() {
    const { loginMethods } = { ...this.props };
    const { selectedLoginMethod } = { ...this.state };
    return (
      <div className="login-container">
        <div className="section">
          <div className="title">How would you like to login?</div>
          <div className="subtitle">Choose your login method</div>
          <div className="login-methods">
            {loginMethods.map((loginMethod) => (
              <div
                key={loginMethod}
                className="login-method"
                onClick={() =>
                  this.setState({ selectedLoginMethod: loginMethod })
                }
              >
                {selectedLoginMethod === loginMethod &&
                  this.renderSelectedLoginMethod(loginMethod)}
                {selectedLoginMethod !== loginMethod && (
                  <LoginMethodOptionSvg loginMethod={loginMethod} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
