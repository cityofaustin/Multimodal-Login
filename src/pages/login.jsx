import React from "react";

// import global from './global.css'
// import index from './index.css'

// import img from './img.jpg'

class Login extends React.Component {
  constructor() {
    super();
    this.state = { userName1: "1", password1: "1" };
  }

  onFormSubmit = (event) => {
    // event.preventDefault();
    // alert('test');
  };

  // onNameChangeHandler = (event) => {
  //   this.setState({ name: event.target.value });
  // };

  // onEmailChangeHandler = (event) => {
  //   this.setState({ email: event.target.value });
  // };

  handleInputChange = (e) => {
    const { value } = e.target;
    const key = e.target.name;
    this.setState({ [key]: value });
  };

  render() {
    return (
      <main>
        <div>
          <div>
            <div>
              <h1>Login</h1>
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
    );
  }
}

export default Login;
