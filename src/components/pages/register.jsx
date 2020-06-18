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
              <label htmlFor="fname">Username:</label>
              <input type="text" id="username" name="username" onChange={this.handleInputChange} />
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
