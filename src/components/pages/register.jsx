import React, { Fragment, Component } from "react";
import LogoSvg from "../svg/logo-svg";

// https://stackoverflow.com/a/30355080/6907541
if (process.env.BROWSER) {
  require("../global.scss");
  require("./register.scss");
}

class Register extends Component {
  constructor() {
    super();
    this.state = {};
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

  renderRegister() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="jumbotron">
            <h1>Register</h1>
            <form method="POST" action="/register">
              <label htmlFor="fname">Username:</label>
              <input type="text" id="username" name="username" />
              <br />
              <br />
              <label htmlFor="lname">Password:</label>
              <input type="text" id="password" name="password" />
              <br />
              <br />
              <label htmlFor="lname">Face Template Guid</label>
              <input type="text" id="faceTemplate" name="faceTemplate" />
              <br />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }

  render() {
    if (process.env.BROWSER) {
      return (
        <Fragment>
          <div id="splash">
            <LogoSvg />
          </div>
          <main id="main">{this.renderRegister()}</main>
        </Fragment>
      );
    } else {
      return <Fragment />;
    }
  }
}

export default Register;
