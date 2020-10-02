import React, { Fragment } from "react";
import LogoSvg from "../svg/logo-svg";
import ContactSvg from "../svg/contact-svg";
import LoaderSvg from "../svg/LoaderSvg";
import UrlUtil from "../../util/url-util";
// import UrlUtil from "../../util/url-util";
// import LoginMethods from "./login/LoginMethods";

if (process.env.BROWSER) {
  require("../global.scss");
  require("./settings.scss");
}

class Settings extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoadingLoginMethods: true,
    };
  }

  componentDidMount() {
    if (process.env.BROWSER) {
      this.loadAppSettings();
      setTimeout(() => {
        document.getElementById("splash").style.animation = "fadeout 0.5s";
        document.getElementById("splash").style.opacity = 0;
        document.getElementById("main").style.animation = "fadein 0.5s";
        document.getElementById("main").style.opacity = 1;
      }, 500);
      this.loadLoginMethods();
    }
  }

  loadAppSettings = async () => {
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

  loadLoginMethods = async () => {
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
      if(response.status === 403) {
        // NOTE: uncomment when done
        // window.location.href = '../' + location.search;
      }
      const loginMethods = await response.json();
      // this.setState({ isLoadingLoginMethods: false });
    } catch (err) {
      console.error(err);
    }
  };

  findUser = async (e) => {
    e.preventDefault();

    const { username, isLoadingLoginMethods } = { ...this.state };
    let { findUserError, loginMethods, securityQuestions } = { ...this.state };
    const input = "/api/users/login-info";
    const init = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ usernameOrEmail: username }),
    };
    const httpResponse = await fetch(input, init);
    const response = await httpResponse.json();
    if (response.loginMethods) {
      findUserError = "";
      loginMethods = response.loginMethods;
      securityQuestions = response.securityQuestions;
    } else {
      findUserError = "No account found with that username";
    }
    this.setState({ findUserError, loginMethods, securityQuestions });
  };

  render() {
    const { isLoadingLoginMethods } = { ...this.state };
    // const { loginMethods, username, securityQuestions } = { ...this.state };
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
              <div className="login-methods">
                Which login method do you need to configure?
              </div>
            )}
            {/* {!loginMethods && this.renderUsernamePrompt()}
            {loginMethods && (
              <LoginMethods
                loginMethods={loginMethods}
                username={username}
                securityQuestions={securityQuestions}
              />
            )} */}
          </main>
        </Fragment>
      </Fragment>
    );
  }
}

export default Settings;
