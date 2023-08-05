"use client";

import React, { Fragment, useEffect, useState } from "react";
import LogoSvg from "../../svg/logo-svg";
import ContactSvg from "../../svg/contact-svg";
import LoaderSvg from "../../svg/LoaderSvg";
import UrlUtil from "../../util/url-util";
import LoginMethods from "../login/LoginMethods";
// import UrlUtil from "../../util/url-util";
// import LoginMethods from "./login/LoginMethods";

import "../global.scss";
import "./settings.scss";
import "../login/index.scss";

const Settings = () => {
  const [isLoadingLoginMethods, setIsLoadingLoginMethods] = useState(true);
  const [loginMethods, setLoginMethods] = useState([]);
  const [securityQuestions, setSecurityQuestions] = useState([]);
  const [username, setUsername] = useState("");

  const loadAppSettings = async () => {
    try {
      const url = "/api/app-settings";
      const init = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(url, init);
      const appSettings = await response.json();
      const titleSetting = appSettings.find((a) => a.settingName === "title");
      if (titleSetting) {
        document.title = titleSetting.settingValue + " Auth";
      }
    } catch (err) {
      console.log("Error!");
      console.log(err);
    }
  };

  const loadLoginMethods = async () => {
    try {
      const url = "/api/login-methods";
      const authorization = UrlUtil.getQueryVariable("access_token");
      const init = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${authorization}`,
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(url, init);
      if (response.status === 403) {
        window.location.href = "../" + location.search;
      }
      const responseJson = await response.json();
      const newLoginMethods = responseJson.loginMethods;
      const newSecurityQuestions = responseJson.securityQuestions
        ? responseJson.securityQuestions.map((sq) => {
            return { answer: "", question: sq };
          })
        : [];
      setIsLoadingLoginMethods(false);
      setLoginMethods(newLoginMethods);
      setSecurityQuestions(newSecurityQuestions);
      // setUsername(username);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadAppSettings();
    setTimeout(() => {
      document.getElementById("splash").style.animation = "fadeout 0.5s";
      document.getElementById("splash").style.opacity = 0;
      document.getElementById("main").style.animation = "fadein 0.5s";
      document.getElementById("main").style.opacity = 1;
    }, 500);
    loadLoginMethods();
  }, []);

  return (
    <Fragment>
      <Fragment>
        <div
          id="splash"
          style={{
            backgroundColor: "#2362c7",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LogoSvg />
        </div>
        <main id="main" style={{ position: "absolute", top: 0, opacity: 0 }}>
          {isLoadingLoginMethods && (
            <div className="loading-user">
              <ContactSvg />
              <div className="title">MyAccount</div>
              <div className="rotate">
                <LoaderSvg />
              </div>
              <div className="excerpt">Loading your login methods...</div>
            </div>
          )}
          {!isLoadingLoginMethods && (
            <LoginMethods
              loginMethods={loginMethods}
              setSecurityQuestions={setSecurityQuestions}
              setLoginMethods={setLoginMethods}
              username={username}
              securityQuestions={securityQuestions}
              isSettings
            />
          )}
        </main>
      </Fragment>
    </Fragment>
  );
};

export default Settings;
