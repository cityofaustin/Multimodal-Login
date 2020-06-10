import React, { Fragment, createElement } from "react";
import DeleteSvg from "../delete-svg";
import LogoSvg from "../logo-svg";

let img;
// https://stackoverflow.com/a/30355080/6907541
if (process.env.BROWSER) {
  require("./global.scss");
  require("./login.scss");
  img = require("../../img/img.jpg").default;
}

class Login extends React.Component {
  constructor() {
    super();
    this.state = { userName1: "1", password1: "1" };
  }

  componentWillMount() {
    if (process.env.BROWSER) {
      setTimeout(() => {
        document.getElementById("splash").style.animation = "fadeout 2s";
        document.getElementById("splash").style.opacity = 0;
        document.getElementById("main").style.animation = "fadein 2s";
        document.getElementById("main").style.opacity = 1;
      }, 2000);
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

        <main id="main" style={{ position: 'absolute', top: 0, opacity: 0 }}>
          <div>
            <div>
              <div>
                {/* <DeleteSvg /> */}
                <h1 className="heading">Login</h1>
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
        </main>
      </Fragment>
    );
  }
}

export default Login;
