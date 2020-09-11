import React, { Fragment, Component } from 'react';
import LogoSvg from '../svg/logo-svg';
import UrlUtil from '../../util/url-util';
import WaveSvg from '../svg/WaveSvg';


let img;
// https://stackoverflow.com/a/30355080/6907541
if (process.env.BROWSER) {
  require('../global.scss');
  require('./index.scss');
  img = require('../../img/document-file.png').default;
}

class Index extends Component {
  constructor() {
    super();
    this.state = {
      appSettings: []
    };
  }

  componentDidMount() {
    if (process.env.BROWSER) {
      this.loadAppSettings();
      setTimeout(() => {
        document.getElementById('splash').style.animation = 'fadeout 1s';
        document.getElementById('splash').style.opacity = 0;
        document.getElementById('main').style.animation = 'fadein 1s';
        document.getElementById('main').style.opacity = 1;
      }, 1000);
    }
  }

  loadAppSettings = async () => {
    let {appSettings} = {...this.state};
    try {
      const url = "api/app-settings";
      const init = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };
      appSettings = await (await fetch(url, init)).json();
      const titleSetting = appSettings.find(
        (a) => a.settingName === "title"
      );
      if (titleSetting) {
        document.title = titleSetting.settingValue + ' Auth';
      }
    } catch (err) {
      console.log("Error!");
      console.log(err);
    }
    this.setState({appSettings});
  }

  renderHiddenInputs() {
    return (
      <Fragment>
        <input
          type="hidden"
          name="client_id"
          value={UrlUtil.getQueryVariable('client_id')}
        />
        <input
          type="hidden"
          name="response_type"
          value={UrlUtil.getQueryVariable('response_type')}
        />
        <input
          type="hidden"
          name="redirect_url"
          value={UrlUtil.getQueryVariable('redirect_url')}
        />
        <input
          type="hidden"
          name="scope"
          value={UrlUtil.getQueryVariable('scope')}
        />
        <input
          type="hidden"
          name="state"
          value={UrlUtil.getQueryVariable('state')}
        />
      </Fragment>
    );
  }

  render() {
    if (process.env.BROWSER) {
      const {appSettings} = {...this.state};
      const titleSetting = appSettings.find(
        (a) => a.settingName === 'title'
      );
      const title = titleSetting ? titleSetting.settingValue : 'This';
      return (
        <Fragment>
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
                  <img src={img} alt="" />
                  <div className="already">Already a user?</div>
                  <form method="GET" action="login">
                    {this.renderHiddenInputs()}
                    <input className="login" value="Login" type="submit" />
                  </form>

                  <div className="or">or</div>
                  <form method="GET" action="register">
                    {this.renderHiddenInputs()}
                    <input className="sign-up" type="submit" value="Sign-Up" />
                  </form>
                </div>
              </div>
            </section>
          </main>
        </Fragment>
      );
    } else {
      return <Fragment />;
    }
  }
}

export default Index;
