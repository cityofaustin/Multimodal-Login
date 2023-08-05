"use client";

import React, { Fragment, useEffect } from "react";
import LogoSvg from "../../svg/logo-svg";
import ContactSvg from "../../svg/contact-svg";
import LoaderSvg from "../../svg/LoaderSvg";
import UrlUtil from "../../util/url-util";

import "../global.scss";
import "./unregister.scss";
import "../login/index.scss";

const Unregister = () => {
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

  const deleteMyAccount = async () => {
    try {
      const url = "/api/my-account";
      const authorization = UrlUtil.getQueryVariable("access_token");
      const init = {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${authorization}`,
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(url, init);
      const replaceQueryParam = (param, newval, search) => {
        const regex = new RegExp("([?;&])" + param + "[^&;]*[;&]?");
        const query = search.replace(regex, "$1").replace(/&$/, "");
        return (
          (query.length > 2 ? query + "&" : "?") +
          (newval ? param + "=" + newval : "")
        );
      };
      if (response.status === 403) {
        window.location.href =
          "../" + replaceQueryParam("access_token", "", location.search);
      }
      await response.json();
      window.location.href =
        "../" + replaceQueryParam("access_token", "", location.search);
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
    deleteMyAccount();
  }, []);

  return (
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
        <div className="unregister-container">
          <div className="section">
            <div className="title">Removing Account...</div>
            <ContactSvg />
            <div className="rotate">
              <LoaderSvg />
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Unregister;
