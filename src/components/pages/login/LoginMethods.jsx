import React, { Component, Fragment } from "react";
import UrlUtil from "../../../util/url-util";
import LoginMethodOptionSvg from "../../svg/LoginMethodOptionSvg";
import PasswordMethodLoginSvg from "../../svg/PasswordMethodLoginSvg";
if (process.env.BROWSER) {
  import("./LoginMethods.scss");
}

export default class LoginMethods extends Component {
  state = {
    username: "",
    password: "",
    faceTemplate: "",
    oneTimeCode: "",
    requestLoginCode: false,
    faceVerify: false,
    selectedLoginMethod: "",
    // selectedLoginMethod: "PasswordLoginType",
  };

  renderSelectedLoginMethod(loginMethod) {
    const { password } = { ...this.state };
    const { username } = { ...this.props };
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
                  type="hidden"
                  id="username"
                  name="username"
                  value={username}
                />
                <input
                  style={{ width: "210px" }}
                  type="submit"
                  value="Login"
                  disabled={password.length < 1}
                />
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
