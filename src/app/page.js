"use client";
import { useEffect, useState } from "react";
import axios from "axios";

import LogoSvg from "../svg/logo-svg";
import UrlUtil from "../util/url-util";
import WaveSvg from "../svg/WaveSvg";
import "./index.scss";

export default function Home() {
  const [appSettings, setAppSettings] = useState([]);
  const titleSetting = appSettings.find((a) => a.settingName === "title");
  const title = titleSetting ? titleSetting.settingValue : "This";

  const loadAppSettings = async () => {
    let newAppSettings = [];
    try {
      const url = "api/app-settings";
      const init = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };
      newAppSettings = (await axios({ url, ...init })).data;
      const titleSetting = newAppSettings.find(
        (a) => a.settingName === "title"
      );
      if (titleSetting) {
        document.title = titleSetting.settingValue + " Auth";
      }
    } catch (err) {
      console.log("Error!");
      console.log(err);
    }
    setAppSettings(newAppSettings);
  };

  useEffect(() => {
    loadAppSettings();
    setTimeout(() => {
      document.getElementById("splash").style.animation = "fadeout 1s";
      document.getElementById("splash").style.opacity = 0;
      document.getElementById("main").style.animation = "fadein 1s";
      document.getElementById("main").style.opacity = 1;
    }, 1000);
  }, []);

  const renderHiddenInputs = () => {
    return (
      <>
        <input
          type="hidden"
          name="client_id"
          value={UrlUtil.getQueryVariable("client_id")}
        />
        <input
          type="hidden"
          name="response_type"
          value={UrlUtil.getQueryVariable("response_type")}
        />
        <input
          type="hidden"
          name="redirect_uri"
          value={UrlUtil.getQueryVariable("redirect_uri")}
        />
        <input
          type="hidden"
          name="scope"
          value={UrlUtil.getQueryVariable("scope")}
        />
        <input
          type="hidden"
          name="state"
          value={UrlUtil.getQueryVariable("state")}
        />
      </>
    );
  };

  return (
    <>
      <div id="splash">
        <LogoSvg />
      </div>
      <main id="main">
        <section className="wave-container">
          <WaveSvg />
        </section>
        <section className="welcome-container">
          <div className="section">
            <div className="title">Welcome!</div>
            <div className="subtitle">
              {title} is a secure &amp; private document storage solution.
            </div>
            <div className="sub-section">
              <img src={"/img/document-file.png"} alt="" />
              <div className="already">Already a user?</div>
              <form method="GET" action="login">
                {renderHiddenInputs()}
                <input className="login" value="Find me" type="submit" />
              </form>

              <div className="or">or</div>
              <form method="GET" action="register">
                {renderHiddenInputs()}
                <input
                  className="sign-up"
                  type="submit"
                  value="Create Account"
                />
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
