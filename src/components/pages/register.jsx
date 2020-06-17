import React, { Fragment, Component } from 'react';
import LogoSvg from '../svg/logo-svg';
import WebCameraShapshot from '../web-camera-shapshot';
import CognitiveFaceService from '../../services/CognitiveFaceService';

// https://stackoverflow.com/a/30355080/6907541
if (process.env.BROWSER) {
  require('../global.scss');
  require('./register.scss');
}

class Register extends Component {
  constructor() {
    super();
    this.state = {
      faceRegister: false,
      userName1: '',
    };
  }

  componentDidMount() {
    if (process.env.BROWSER) {
      setTimeout(() => {
        document.getElementById('splash').style.animation = 'fadeout 1s';
        document.getElementById('splash').style.opacity = 0;
        document.getElementById('main').style.animation = 'fadein 1s';
        document.getElementById('main').style.opacity = 1;
      }, 1000);
    }
  }

  handleInputChange = (e) => {
    const { value } = e.target;
    const key = e.target.name;
    this.setState({ [key]: value });
  };

  handleSnapshot = async (blob) => {
    const { userName1 } = {...this.state};
    if (blob) {
      try {
        const imgFile = new File([blob], 'imgFile.png', {
          type: blob.type,
          lastModified: Date.now(),
        });
        const input = '/register/face';
        const formdata = new FormData();
        formdata.append('img', imgFile, 'imgFile');
        formdata.append('username', userName1);
        const init = {
          method: 'POST',
          body: formdata
        };
        const response = await fetch(input, init);
        console.log(response);
      } catch (err) {
        console.error(err.message);
      }
    }
  };

  renderRegister() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="jumbotron">
            <h1>Register</h1>
            <form method="POST" action="/register">
              <label htmlFor="fname">Username1:</label>
              <input type="text" id="userName1" name="userName1" onChange={this.handleInputChange} />
              <br />
              <br />
              <label htmlFor="lname">Password1:</label>
              <input type="text" id="password1" name="password1" />
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
              <label htmlFor="fname">Username2:</label>
              <input type="text" id="userName3" name="userName3" />
              <br />
              <br />
              <label htmlFor="lname">Password3:</label>
              <input type="text" id="password3" name="password3" />
              <br />
              <br />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { faceRegister } = { ...this.state };
    if (process.env.BROWSER) {
      return (
        <Fragment>
          <div id="splash">
            <LogoSvg />
          </div>
          <main id="main">{this.renderRegister()}</main>
          <input
            type="button"
            value="Face Register as Billy"
            onClick={() => {
              this.setState({ faceRegister: !faceRegister });
            }}
          />
          {faceRegister && (
            <WebCameraShapshot handleSnapshot={this.handleSnapshot} />
          )}
        </Fragment>
      );
    } else {
      return <Fragment />;
    }
  }
}

export default Register;
