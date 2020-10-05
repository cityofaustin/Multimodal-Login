import React, { Component, Fragment } from "react";
import UrlUtil from "../../util/url-util";
import PasswordMethodLoginSvg from "../svg/PasswordMethodLoginSvg";
import * as PropTypes from "prop-types";

class PasswordSetup extends Component {
  state = {
    password: "",
    confirmPassword: "",
  };

  setPassword = (e) => {
    e.preventDefault();
    alert("todo");
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
  renderSetPassword() {
    const { password, confirmPassword } = { ...this.state };

    return (
      <div id="section-1-owner">
        <div className="section-contents">
          <form onSubmit={this.setPassword} className="card login-card">
            <div className="top-section">
              <div className="card-title">Password</div>
              <PasswordMethodLoginSvg />
            </div>
            <div className="card-body">
              <div className="card-body-section1">
                <div style={{ color: "rgba(72, 72, 72, 0.77)" }}>
                  New Password
                </div>
                <input
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
                <div
                  style={{ marginTop: "13px", color: "rgba(72, 72, 72, 0.77)" }}
                >
                  Confirm New Password
                </div>
                <input
                  name="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) =>
                    this.setState({ confirmPassword: e.target.value })
                  }
                />
                <div className="excerpt">
                  Please type in your new password above
                </div>
              </div>
            </div>
            <input
              style={{ width: "210px" }}
              type="submit"
              value="Set Password"
              disabled={
                password.length < 1 ||
                confirmPassword.length < 1 ||
                password !== confirmPassword
              }
            />
          </form>
        </div>
      </div>
    );
  }
  renderLogin() {
    const { password } = { ...this.state };
    return (
      <div id="section-1-owner">
        <div className="section-contents">
          <form method="POST" action="/authorize" className="card login-card">
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
                  onChange={(e) => this.setState({ password: e.target.value })}
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
  }
  render() {
    const { isSettings, isAdd } = { ...this.props };
    if (!isSettings) {
      return this.renderLogin();
    } else {
      return this.renderSetPassword();
    }
  }
}

PasswordSetup.propTypes = {
  username: PropTypes.string,
  isSettings: PropTypes.bool,
  isAdd: PropTypes.bool,
};

export default PasswordSetup;
