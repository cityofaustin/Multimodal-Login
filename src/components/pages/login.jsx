import React, { Fragment } from "react";
import LogoSvg from "../logo-svg";
import ContactSvg from "../contact-svg";

let img;
// https://stackoverflow.com/a/30355080/6907541
if (process.env.BROWSER) {
  require("../global.scss");
  require("./login.scss");
  img = require("../../img/img.jpg").default;
}

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      userName1: "",
      password1: "",
      hasFoundUser: false,
      findUserError: "",
    };
  }

  componentDidMount() {
    if (process.env.BROWSER) {
      setTimeout(() => {
        document.getElementById("splash").style.animation = "fadeout 1s";
        document.getElementById("splash").style.opacity = 0;
        document.getElementById("main").style.animation = "fadein 1s";
        document.getElementById("main").style.opacity = 1;
      }, 1000);
    }
  }

  findUser = async () => {
    const { userName1 } = { ...this.state };
    let { findUserError, hasFoundUser } = { ...this.state };
    const httpResponse = await fetch(`/users/username/${userName1}/matched`);
    const response = await httpResponse.json();
    if (response.matched) {
      findUserError = "";
      hasFoundUser = true;
    } else {
      findUserError = "No account found with that username";
    }
    this.setState({ findUserError, hasFoundUser });
  };

  onFormSubmit = (event) => {
    // event.preventDefault();
    // alert("test");
  };

  handleInputChange = (e) => {
    const { value } = e.target;
    const key = e.target.name;
    this.setState({ [key]: value });
  };

  renderUsernamePrompt() {
    const { userName1, findUserError } = { ...this.state };
    return (
      <div className="username-container">
        <div className="section">
          <div className="title">First off</div>
          <div className="subtitle">Help us find your account</div>
          <div className="card">
            <ContactSvg />
            <div className="username">Username</div>
            <div className="prompt">Please enter your username below...</div>
            <input
              className="username-input"
              name="userName1"
              type="text"
              placeholder="..."
              value={userName1}
              onChange={this.handleInputChange}
            />
            <div className="error">{findUserError}</div>
            <input
              className="find-user"
              type="button"
              value="Find me"
              onClick={this.findUser}
            />
            <div className="forgot">Forgot your username?</div>
          </div>
        </div>
      </div>
    );
  }

  renderLoginWithMethods() {
    const { userName1 } = { ...this.state };
    return (
      <div className="login-container">
        <div className="section">
          <div className="title">Choose your login method</div>
          <div className="subtitle">To access your account</div>
          <div className="card">
            <div className="method-title">Method #1</div>
            <form method="POST" action="/authorize">
              <input
                type="hidden"
                id="userName1"
                name="userName1"
                value={userName1}
              />
              <div className="form-input">
                <label htmlFor="lname">Password1:</label>
                <input
                  type="text"
                  id="password1"
                  name="password1"
                  onChange={this.handleInputChange}
                  value={this.state.password1}
                />
              </div>
              <div className="form-input">
                <label htmlFor="fname">Username2:</label>
                <input type="text" id="userName2" name="userName2" />
              </div>
              <div className="form-input">
                <label htmlFor="lname">Password2:</label>
                <input type="text" id="password2" name="password2" />
              </div>
              <div className="form-input">
                <label htmlFor="fname">Username3:</label>
                <input type="text" id="userName3" name="userName3" />
              </div>

              <div className="form-input">
                <label htmlFor="lname">Password3:</label>
                <input type="text" id="password3" name="password3" />
              </div>

              {/* FIXME: should be set from the query string but this works for now. */}
              <input
                id="client_id"
                name="client_id"
                type="hidden"
                value="t1L0EvTYT-H_xU3oNaR0BBYc"
              />
              <input
                id="response_type"
                name="response_type"
                type="hidden"
                value="code"
              />
              <input
                id="redirect_url"
                name="redirect_url"
                type="hidden"
                value="https://mypass-atx.s3.us-east-2.amazonaws.com/index.html"
              />
              <input id="scope" name="scope" type="hidden" value="" />
              <input id="state" name="state" type="hidden" value="" />

              <input className="login" type="submit" value="Login" />              
            </form>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { hasFoundUser } = { ...this.state };
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
          {!hasFoundUser && this.renderUsernamePrompt()}
          {hasFoundUser && this.renderLoginWithMethods()}
        </main>
      </Fragment>
    );
  }
}

export default Login;
