import React, { Fragment } from "react";
import LogoSvg from "../svg/logo-svg";
import ContactSvg from "../svg/contact-svg";
import axios from "axios";

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
      username: "",
      password: "",
      faceTemplate: "",
      oneTimeCode: "",
      hasFoundUser: false,
      findUserError: "",
      requestLoginCode: false,
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

  requestLoginCode = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append(username, this.state.username);

    let res;

    try {
      res = await axios.post(
        "http://localhost:5001/request-social-login-code",
        { username: this.state.username }
      );
    } catch (err) {
      console.log("Error!");
      console.log(err);
    }

    console.log(res);
    let data = await res.data;
    console.log(data);

    this.setState({ requestLoginCode: true });
  };

  findUser = async () => {
    const { username } = { ...this.state };
    let { findUserError, hasFoundUser } = { ...this.state };
    const httpResponse = await fetch(`/users/username/${username}/matched`);
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
    const { username, findUserError } = { ...this.state };
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
              name="username"
              type="text"
              placeholder="..."
              value={username}
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
    const { username } = { ...this.state };
    let oneTimeCodeHidden = "hidden";

    if (this.state.requestLoginCode) {
      oneTimeCodeHidden = "text";
    }
    return (
      <div className="login-container">
        <div className="section">
          <div className="title">Choose your login method</div>
          <div className="subtitle">To access your account</div>
          <div className="card">
            <input
              className="login"
              type="submit"
              value="Request One Time Code"
              onClick={this.requestLoginCode}
            />

            <div className="method-title">Method #1</div>
            <form method="POST" action="/authorize">
              <input
                type="hidden"
                id="username"
                name="username"
                value={username}
              />
              <div className="form-input">
                <label htmlFor="lname">Password:</label>
                <input
                  type="text"
                  id="password"
                  name="password"
                  onChange={this.handleInputChange}
                  value={this.state.password}
                />
              </div>

              <div className="form-input">
                <label htmlFor="lname">Face Template:</label>
                <input
                  type="text"
                  id="faceTemplate"
                  name="faceTemplate"
                  onChange={this.handleInputChange}
                  value={this.state.faceTemplate}
                />
              </div>

              <div className="form-input">
                <label htmlFor="lname">One Time Code:</label>
                <input
                  type={oneTimeCodeHidden}
                  id="oneTimeCode"
                  name="oneTimeCode"
                  onChange={this.handleInputChange}
                  value={this.state.oneTimeCode}
                />
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
                // value="http://mypass-atx.s3-website.us-east-2.amazonaws.com"
                // TODO: get https setup for auth service if pointing to https
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
