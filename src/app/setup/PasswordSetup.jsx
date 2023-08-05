"use client";
import React, { Fragment, useState } from "react";
import UrlUtil from "../../util/url-util";
import PasswordMethodLoginSvg from "../../svg/PasswordMethodLoginSvg";
// import * as PropTypes from "prop-types";
import EthCrypto from "eth-crypto";

const PasswordSetup = (props) => {
  const { username, isSettings, isAdd, loginMethods, setLoginMethods, goBack } =
    props;

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordSet, setIsPasswordSet] = useState("");
  const [confirmDelete, setConfirmDelete] = useState("");
  const [isFailedLoginAttempt, setIsFailedLoginAttempt] = useState("");
  const [publicAddress, setPublicAddress] = useState("");
  const [signature, setSignature] = useState("");

  const onPasswordChange = (e) => {
    let pass = e.target.value;
    setPassword(pass);

    if (pass !== undefined && pass.length >= 64) {
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

      setPublicAddress(publicAddress);
      setSignature(signature);
    }
  };

  const handleSetPassword = async (e) => {
    e.preventDefault();

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
    setIsPasswordSet(true);
  };
  const deletePassword = async () => {
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
      const newLoginMethods = loginMethods.filter((lm) => lm !== "PasswordLoginType");
      setLoginMethods(newLoginMethods);
      goBack();
    } catch (err) {
      console.error(err);
    }
  };

  const authorize = async (e) => {
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
      setIsFailedLoginAttempt(true);
    }
    if (httpRes.status === 200) {
      if (httpRes.redirected) {
        location.replace(httpRes.url);
      }
    }
  };

  const renderHiddenInputs = () => {
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
        <input
          type="text"
          id="signature"
          name="signature"
          type="hidden"
          value={signature}
        />
        <input
          type="text"
          id="publicAddress"
          name="publicAddress"
          type="hidden"
          value={publicAddress}
        />
      </Fragment>
    );
  };

  const renderSetPassword = () => {
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
                  onClick={deletePassword}
                />
                <div
                  className="delete-excerpt"
                  onClick={() => setConfirmDelete(false)}
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
          <form onSubmit={handleSetPassword} className="card login-card">
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
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div
                  style={{ marginTop: "13px", color: "rgba(72, 72, 72, 0.77)" }}
                >
                  Confirm New Password
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
              id="submit"
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
                onClick={() => setConfirmDelete(true)}
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
  };
  const renderLogin = () => {
    return (
      <div id="section-1-owner">
        <div className="section-contents">
          <form
            onSubmit={authorize}
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
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  // onChange={(e) => this.setState({ password: e.target.value })}
                  onChange={onPasswordChange}
                />
                {isFailedLoginAttempt && (
                  <div className="error">Failed login attempt</div>
                )}
                <div className="excerpt">
                  Please type your password to gain access to your account.
                </div>
              </div>
            </div>
            <input
              id="submit"
              style={{ width: "210px" }}
              type="submit"
              value="Login"
              disabled={password.length < 1}
            />
            {renderHiddenInputs()}
          </form>
        </div>
      </div>
    );
  };
  return (
    <>
      {!isSettings && renderLogin()}
      {isSettings && renderSetPassword()}
    </>
  );
};

// PasswordSetup.propTypes = {
//   loginMethods: PropTypes.arrayOf(PropTypes.string),
//   setLoginMethods: PropTypes.func,
//   username: PropTypes.string,
//   isSettings: PropTypes.bool,
//   isAdd: PropTypes.bool,
//   goBack: PropTypes.func,
// };

export default PasswordSetup;
