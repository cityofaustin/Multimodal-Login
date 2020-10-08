import React, { Fragment } from "react";
import LogoSvg from "../svg/logo-svg";
import ContactSvg from "../svg/contact-svg";
import LoaderSvg from "../svg/LoaderSvg";
import UrlUtil from "../../util/url-util";
import LoginMethods from "./login/LoginMethods";
// import UrlUtil from "../../util/url-util";
// import LoginMethods from "./login/LoginMethods";

if (process.env.BROWSER) {
  require("../global.scss");
  require("./settings.scss");
  require("./login.scss");
}

class Settings extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoadingLoginMethods: true,
      loginMethods: [],
      securityQuestions: [],
      username: "",
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
    let { loginMethods, securityQuestions, username } = { ...this.state };
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
        // NOTE: uncomment when done
        // window.location.href = '../' + location.search;
      }
      const responseJson = await response.json();
      loginMethods = responseJson.loginMethods;
      securityQuestions = responseJson.securityQuestions
        ? responseJson.securityQuestions.map((sq) => {
            return { answer: "", question: sq };
          })
        : [];
      this.setState({
        isLoadingLoginMethods: false,
        loginMethods,
        securityQuestions,
        username,
      });
    } catch (err) {
      console.error(err);
    }
  };

  setSecurityQuestions = (securityQuestions) => {
    this.setState({ securityQuestions });
  };

  setLoginMethods = (loginMethods) => {
    this.setState({ loginMethods });
  };

  render() {
    const {
      isLoadingLoginMethods,
      loginMethods,
      securityQuestions,
      username,
    } = { ...this.state };
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
                setSecurityQuestions={this.setSecurityQuestions}
                setLoginMethods={this.setLoginMethods}
                username={username}
                securityQuestions={securityQuestions}
                isSettings
              />
            )}
          </main>
        </Fragment>
      </Fragment>
    );
  }
}

export default Settings;
