import React from "react";

// import global from './global.css'
// import index from './index.css'
// import img from './img.jpg'

class Register extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <main>
        <div class="row">
          <div class="col-sm-12">
            <div class="jumbotron">
              <h1>Register</h1>
              <form method="POST" action="/register">
                <label for="fname">Username1:</label>
                <input type="text" id="userName1" name="userName1" />
                <br />
                <br />
                <label for="lname">Password1:</label>
                <input type="text" id="password1" name="password1" />
                <br />
                <br />
                <label for="fname">Username2:</label>
                <input type="text" id="userName2" name="userName2" />
                <br />
                <br />
                <label for="lname">Password2:</label>
                <input type="text" id="password2" name="password2" />
                <br />
                <br />
                <label for="fname">Username2:</label>
                <input type="text" id="userName3" name="userName3" />
                <br />
                <br />
                <label for="lname">Password3:</label>
                <input type="text" id="password3" name="password3" />
                <br />
                <br />
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Register;
