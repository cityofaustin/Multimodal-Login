import React, { Component, Fragment } from "react";
import UrlUtil from "../../../util/url-util";
import LoginMethodOptionSvg from "../../svg/LoginMethodOptionSvg";
import delay from "../../../util/delay";
import PalmSetup from "../../setup/PalmSetup";
import ExitConfigSvg from "../../svg/ExitConfigSvg";
import PasswordSetup from "../../setup/PasswordSetup";
import SocialSupportSetup from "../../setup/SocialSupportSetup";
import TextSetup from "../../setup/TextSetup";
import SecurityQuestionsSetup from "../../setup/SecurityQuestionsSetup";
import * as PropTypes from "prop-types";

if (process.env.BROWSER) {
  import("./LoginMethods.scss");
}

class LoginMethods extends Component {
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
      faceTemplate: "",
      oneTimeCode: "",
      requestLoginCode: false,
      faceVerify: false,
      keycode: "",
      selectedLoginMethod: "",
      // selectedLoginMethod: "TextLoginType",
      securityItems,
      isDisplayHow: false
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

  getLoginMethodsNotSetup = () => {
    const { loginMethods } = { ...this.props };
    const allLoginMethods = [
      "SecurityQuestionsLoginType",
      "PasswordLoginType",
      "TextLoginType",
      "SocialSupportType",
      "PalmLoginType",
    ];
    const loginMethodsNotSetup = allLoginMethods.filter(
      (alm) => !loginMethods.find((lm) => lm === alm)
    );
    return loginMethodsNotSetup;
  };

  sendKeycodeToHelper = async () => {
    const { username } = { ...this.props };
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

  renderSelectedLoginMethod(loginMethod, isSettings = false, isAdd = false) {
    const { isDisplayHow } = {
      ...this.state,
    };
    const {
      username,
      loginMethods,
      setLoginMethods,
      securityQuestions,
      setSecurityQuestions,
    } = {
      ...this.props,
    };
    switch (loginMethod) {
      case "PasswordLoginType":
        return (
          <PasswordSetup
            loginMethods={loginMethods}
            setLoginMethods={setLoginMethods}
            username={username}
            isSettings={isSettings}
            isAdd={isAdd}
            goBack={() => this.setState({ selectedLoginMethod: "" })}
          />
        );
      case "TextLoginType":
        return (
          <TextSetup
            loginMethods={loginMethods}
            setLoginMethods={setLoginMethods}
            username={username}
            isSettings={isSettings}
            isAdd={isAdd}
            goBack={() => this.setState({ selectedLoginMethod: "" })}
          />
        );
      case "SecurityQuestionsLoginType":
        return (
          <SecurityQuestionsSetup
            loginMethods={loginMethods}
            setLoginMethods={setLoginMethods}
            isLogin={!isSettings}
            isSettings={isSettings}
            securityItems={securityQuestions}
            setSecurityQuestions={setSecurityQuestions}
            isAdd={isAdd}
            goBack={() => this.setState({ selectedLoginMethod: "" })}
            renderHiddenInputs={this.renderHiddenInputs}
          />
        );
      case "PalmLoginType":
        return (
          <PalmSetup
            isLogin={!isSettings}
            loginMethods={loginMethods}
            setLoginMethods={setLoginMethods}
            isAdd={isAdd}
            isSettings={isSettings}
            renderHiddenInputs={this.renderHiddenInputs}
            toggleDisplayHow={() =>
              this.setState({ isDisplayHow: !isDisplayHow })
            }
            isDisplayHow={isDisplayHow}
            goBack={() => this.setState({ selectedLoginMethod: "" })}
          />
        );
      case "SocialSupportType":
        return (
          <SocialSupportSetup
            username={username}
            isSettings={isSettings}
            goBack={() => this.setState({ selectedLoginMethod: "" })}
          />
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
    const { loginMethods, isSettings } = { ...this.props };
    const { selectedLoginMethod } = { ...this.state };
    return (
      <div className="login-container">
        <div className="section">
          {!isSettings && (
            <Fragment>
              <div className="title">How would you like to login?</div>
              <div className="subtitle">Choose your login method</div>
            </Fragment>
          )}
          {isSettings && (
            <Fragment>
              <div className="title">
                Which login method do you need to configure?
              </div>
              <div className="subtitle">
                Edit an existing login method or add a new one
              </div>
            </Fragment>
          )}
          <div className="login-methods">
            {loginMethods.map((loginMethod) => (
              <div key={loginMethod} className="login-method">
                {selectedLoginMethod === loginMethod &&
                  this.renderSelectedLoginMethod(loginMethod, isSettings)}
                {selectedLoginMethod !== loginMethod && (
                  <div
                    className="login-svg"
                    onClick={() =>
                      this.setState({
                        isDisplayHow: false,
                        selectedLoginMethod: loginMethod,
                      })
                    }
                  >
                    <LoginMethodOptionSvg
                      loginMethod={loginMethod}
                      loginConfigure={isSettings ? "configure" : "none"}
                    />
                  </div>
                )}
              </div>
            ))}
            {isSettings && (
              <Fragment>
                {this.getLoginMethodsNotSetup().map((loginMethod) => (
                  <div key={loginMethod} className="login-method">
                    {selectedLoginMethod === loginMethod &&
                      this.renderSelectedLoginMethod(
                        loginMethod,
                        isSettings,
                        true
                      )}
                    {selectedLoginMethod !== loginMethod && (
                      <div
                        className="login-svg"
                        onClick={() =>
                          this.setState({
                            isDisplayHow: false,
                            selectedLoginMethod: loginMethod,
                          })
                        }
                      >
                        <LoginMethodOptionSvg
                          loginMethod={loginMethod}
                          loginConfigure="add"
                        />
                      </div>
                    )}
                  </div>
                ))}
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    window.location.href = UrlUtil.getQueryVariable(
                      "redirect_url"
                    );
                  }}
                >
                  <ExitConfigSvg />
                </div>
              </Fragment>
            )}
          </div>
        </div>
      </div>
    );
  }
}

LoginMethods.propTypes = {
  securityQuestions: PropTypes.arrayOf(
    PropTypes.shape({
      answer: PropTypes.string,
      question: PropTypes.string,
    })
  ),
  setSecurityQuestions: PropTypes.func,
  loginMethods: PropTypes.arrayOf(PropTypes.string),
  username: PropTypes.string,
  setLoginMethods: PropTypes.func,
  isSettings: PropTypes.bool,
};

export default LoginMethods;
