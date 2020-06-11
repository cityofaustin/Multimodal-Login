import React, { Fragment, createElement } from "react";
// import DeleteSvg from "../delete-svg";
import LogoSvg from "../logo-svg";
import ContactSvg from "../contact-svg";

let img;
// https://stackoverflow.com/a/30355080/6907541
if (process.env.BROWSER) {
  require("../global.scss");
  require("./login.scss");
  img = require("../../img/img.jpg").default;
  const img2 = require("../../img/delete.svg").default;
}

class Login extends React.Component {
  constructor() {
    super();
    this.state = { userName1: "owner1", password1: "owner1" };
  }

  componentDidMount() {
    if (process.env.BROWSER) {
      setTimeout(() => {
        document.getElementById("splash").style.animation = "fadeout 2s";
        document.getElementById("splash").style.opacity = 0;
        document.getElementById("main").style.animation = "fadein 2s";
        document.getElementById("main").style.opacity = 1;
      }, 1000);
    }
  }

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
    return (
      <div className="username-container">
        <div className="section">
          <div className="title">First off</div>
          <div className="subtitle">Help us find your account</div>
          <div className="card">
            <ContactSvg />
            <div className="username">Username</div>
            <div className="prompt">Please enter your username below...</div>
            <input className="username-input" type="text" placeholder="..." />
            <div className="error"></div>
            <input className="find-user" type="button" value="Find me" />
            <div className="forgot">Forgot your username?</div>
          </div>
        </div>
      </div>
    );
  }

  renderLogin() {
    return (
      <div>
        <div>
          <div>
            {/* <DeleteSvg /> */}
            <h1 className="heading">Login!</h1>
            <form
              // onSubmit={this.onFormSubmit}
              method="POST"
              action="/authorize"
            >
              <label htmlFor="fname">Username1:</label>
              <input
                type="text"
                id="userName1"
                name="userName1"
                onChange={this.handleInputChange}
                value={this.state.userName1}
              />
              <br />
              <br />
              <label htmlFor="lname">Password1:</label>
              <input
                type="text"
                id="password1"
                name="password1"
                onChange={this.handleInputChange}
                value={this.state.password1}
              />
              <br />
              <br />

              <label htmlFor="fname">Username2:</label>
              <input type="text" id="userName2" name="userName2" />
              <br />
              <br />
              <label htmlFor="lname">Password2:</label>
              <input type="text" id="password2" name="password2" />
              <br />
              <br />

              <label htmlFor="fname">Username3:</label>
              <input type="text" id="userName3" name="userName3" />
              <br />
              <br />
              <label htmlFor="lname">Password3:</label>
              <input type="text" id="password3" name="password3" />
              <br />
              <br />

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
                value="http://localhost:3001"
              />
              <input id="scope" name="scope" type="hidden" value="" />
              <input id="state" name="state" type="hidden" value="" />

              <input type="submit" value="Submit" />
            </form>
            <img
              src={"/public/img/f53665075594dc59980862e7e2dca27a.jpg"}
              width="200"
              height="200"
              alt="something"
            />
            <span>
              <h5>username1: {this.state.userName1}</h5>
            </span>
            <span>
              <h5>password1: {this.state.password1}</h5>
            </span>
          </div>
        </div>
      </div>
    );
  }

  render() {
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
          {this.renderLogin()}
          {/* {this.renderUsernamePrompt()} */}
        </main>
      </Fragment>
    );
  }
}

export default Login;
