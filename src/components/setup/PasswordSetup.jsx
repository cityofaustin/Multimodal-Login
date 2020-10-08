import React, { Component, Fragment } from "react";
import UrlUtil from "../../util/url-util";
import PasswordMethodLoginSvg from "../svg/PasswordMethodLoginSvg";
import * as PropTypes from "prop-types";
import EthCrypto from "eth-crypto";

class PasswordSetup extends Component {
  state = {
    password: "",
    confirmPassword: "",
    isPasswordSet: false,
    confirmDelete: false,
  };

  onPasswordChange = (e) => {
    let pass = e.target.value;
    this.setState({ password: pass });

    if (this.state.password !== undefined && pass.length >= 64) {
      let privateKey = pass;
      let publicEncryptionKey;
      let publicAddress;
      let signature;

      if (privateKey.substring(0, 2) !== "0x") {
        privateKey = "0x" + privateKey;
      }

      try {
        publicEncryptionKey = EthCrypto.publicKeyByPrivateKey(privateKey);
        publicAddress = EthCrypto.publicKey.toAddress(publicEncryptionKey);

        const message = publicAddress;
        const messageHash = EthCrypto.hash.keccak256(message);
        signature = EthCrypto.sign(privateKey, messageHash);

        document.cookie =
          "bring-your-own-key=" + privateKey.substring(2, privateKey.length);
      } catch (e) {
        console.log("Not using byok");
      }

      this.setState({ publicAddress });
      this.setState({ signature });
    }
  };

  setPassword = async (e) => {
    e.preventDefault();
    const { password } = { ...this.state };
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
        body: JSON.stringify({ password }),
      };
      await fetch(url, init);
      if (isAdd) {
        loginMethods.push("PasswordLoginType");
        setLoginMethods(loginMethods);
        goBack();
        return;
      }
    } catch (err) {
      console.error(err);
    }
    this.setState({ isPasswordSet: true });
  };
  deletePassword = async () => {
    const { setLoginMethods, goBack } = { ...this.props };
    let { loginMethods } = { ...this.props };
    try {
      const url = "/api/login-methods/PasswordLoginType";
      const authorization = UrlUtil.getQueryVariable("access_token");
      const init = {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${authorization}`,
          "Content-Type": "application/json",
        },
      };
      await fetch(url, init);
      loginMethods = loginMethods.filter((lm) => lm !== "PasswordLoginType");
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
        <input
          type="text"
          id="signature"
          name="signature"
          type="hidden"
          value={this.state.signature}
        />
        <input
          type="text"
          id="publicAddress"
          name="publicAddress"
          type="hidden"
          value={this.state.publicAddress}
        />
      </Fragment>
    );
  };
  renderSetPassword() {
    const { password, confirmPassword, isPasswordSet, confirmDelete } = {
      ...this.state,
    };
    const { goBack, isAdd } = { ...this.props };
    if (confirmDelete) {
      return (
        <div id="section-1-owner">
          <div className="section-contents">
            <div className="card login-card delete">
              <div className="top-section">
                <div className="card-title">Password</div>
                <PasswordMethodLoginSvg />
              </div>
              <div className="delete-excerpt">
                <p>Are you sure you wish to delete this login method?</p>
                <p>
                  You will have to setup a new password if you change your mind
                  later
                </p>
              </div>
              <div>
                <input
                  className="delete-button"
                  style={{ width: "210px" }}
                  type="button"
                  value="Yes, delete"
                  onClick={this.deletePassword}
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
                {!isPasswordSet && (
                  <div className="excerpt">
                    Please type in your new password above
                  </div>
                )}
                {isPasswordSet && (
                  <div
                    className="success"
                    style={{
                      marginTop: "12px",
                      fontSize: "15px",
                      textAlign: "center",
                      color: "#32a736",
                    }}
                  >
                    Password set!
                  </div>
                )}
              </div>
            </div>
            <input
              style={{ width: "210px" }}
              type="submit"
              value="Set Password"
              disabled={
                password.length < 1 ||
                confirmPassword.length < 1 ||
                password !== confirmPassword ||
                isPasswordSet
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
                  // onChange={(e) => this.setState({ password: e.target.value })}
                  onChange={this.onPasswordChange}
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
    const { isSettings } = { ...this.props };
    if (!isSettings) {
      return this.renderLogin();
    } else {
      return this.renderSetPassword();
    }
  }
}

PasswordSetup.propTypes = {
  loginMethods: PropTypes.arrayOf(PropTypes.string),
  setLoginMethods: PropTypes.func,
  username: PropTypes.string,
  isSettings: PropTypes.bool,
  isAdd: PropTypes.bool,
  goBack: PropTypes.func,
};

export default PasswordSetup;
