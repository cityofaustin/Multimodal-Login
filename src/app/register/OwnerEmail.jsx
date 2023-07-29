import React, { Fragment, useEffect, useRef, useState } from "react";
import { handleIOSBrowser } from "../../util/browser-util";
import GoBackSvg from "../../svg/GoBackSvg";
import { animateIn, getSectionClassName } from "../../util/animation-util";
import UrlUtil from "../../util/url-util";
import "./OwnerEmail.scss";

const OwnerEmail = ({
  handleGoForward = () => {},
  handleGoBack = () => {},
  emailItem,
  position,
  appSettings,
}) => {
  const initEmail =
    emailItem && emailItem.email ? emailItem.email : "";
  const initUsername =
    emailItem && emailItem.username ? emailItem.username : "";
  const initUseEmail = emailItem ? !!emailItem.useEmail : true;
  let initError;
  if (UrlUtil.getQueryVariable("error") === "user-exists") {
    if (UrlUtil.getQueryVariable("type") === "email") {
      initError = "emailExists";
    } else {
      initError = "usernameExists";
    }
  }
  const sectionRef = useRef(null);

  const [state, setState] = useState({
    email: initEmail,
    username: initUsername,
    useEmail: initEmail,
    error: initError,
  });

  useEffect(() => {
    handleIOSBrowser();
    animateIn(sectionRef.current);
  }, []);

  const { email, username, useEmail, error } = { ...state };
  const titleSetting =
    appSettings && appSettings.find((a) => a.settingName === "title");
  const title = titleSetting ? titleSetting.settingValue : undefined;
  return (
    <div
      ref={sectionRef}
      id="section-2-owner"
      className={getSectionClassName(position)}
    >
      <div className="section-contents">
        <div className="title">Document Owner</div>
        <div className="subtitle">Ok. Let&apos;s get started.</div>
        <div className="card owner1">
          <div>
            <div className="card-title">
              {useEmail ? (
                <Fragment>
                  What is your
                  <br />
                  e-mail account?
                </Fragment>
              ) : (
                "What username would you like to use to login?"
              )}
            </div>
            {useEmail && (
              <div className="card-subtitle">
                You can use this to sign and to recover your account in case you
                get locked out of it.
              </div>
            )}
          </div>
          <div className="email-section">
            <div className="card-body">
              <div className="card-body-section">
                {error && (
                  <>
                    <div className="error">
                      The{" "}
                      {error === "emailExists" ? "email address" : "username"}{" "}
                      is already being used
                      {title ? ` on ${title}` : ""}, please click on &quot;Go
                      Back&quot; or
                    </div>
                    <a
                      href={
                        location.origin +
                        "/login" +
                        location.search.replace("success=false", "success=true")
                      }
                    >
                      login here
                    </a>
                  </>
                )}
                <div>{useEmail ? "E-mail" : "Username"}</div>
                {useEmail ? (
                  <input
                    className={error ? "error" : ""}
                    type="email"
                    value={email}
                    onChange={(e) =>
                      setState({ ...state, email: e.target.value })
                    }
                  />
                ) : (
                  <input
                    className={error ? "error" : ""}
                    type="text"
                    value={username}
                    onChange={(e) =>
                      setState({ ...state, username: e.target.value })
                    }
                  />
                )}
              </div>
            </div>
          </div>
          <div className="submit-section">
            <input
              style={{ width: "210px", marginTop: "27px" }}
              type="button"
              value="Next"
              disabled={
                (useEmail && email.length <= 0) ||
                (!useEmail && username.length <= 0)
              }
              onClick={() =>
                handleGoForward("owner", 3, {
                  emailItem: { email, username, useEmail },
                })
              }
            />
            <div onClick={() => setState({ ...state, useEmail: !useEmail })}>
              {useEmail ? "I don't have an e-mail" : "I'd rather use e-mail"}
            </div>
          </div>
        </div>
        <GoBackSvg color="#2362c7" goBack={() => handleGoBack("owner", 2)} />
      </div>
    </div>
  );
};

export default OwnerEmail;
