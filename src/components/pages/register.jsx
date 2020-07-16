import React, { Fragment, Component } from 'react';
import LogoSvg from '../svg/logo-svg';
import WebCameraShapshot from '../web-camera-shapshot';
import CognitiveFaceService from '../../services/CognitiveFaceService';
import OwnerSvg from '../svg/OwnerSvg';
import HelperSvg from '../svg/HelperSvg';
import GoBackSvg from '../svg/GoBackSvg';
import SimpleStepSvg from '../svg/SimpleStepSvg';

// https://stackoverflow.com/a/30355080/6907541
if (process.env.BROWSER) {
  require('../global.scss');
  require('./register.scss');
}

class Register extends Component {
  constructor() {
    super();
    this.state = {
      selectedRole: undefined,
      step: 0,
      faceRegister: false,
      username: '',
      faceTemplate: undefined,
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
    const { username } = { ...this.state };
    if (blob) {
      try {
        const imgFile = new File([blob], 'imgFile.png', {
          type: blob.type,
          lastModified: Date.now(),
        });
        const input = '/register/face';
        const formdata = new FormData();
        formdata.append('img', imgFile, 'imgFile');
        formdata.append('username', username);
        const init = {
          method: 'POST',
          body: formdata,
        };
        const response = await fetch(input, init);
        const responseJSON = await response.json();
        console.log(response);
        this.setState({
          faceTemplate: responseJSON.registerFaceResponse.personId,
          faceRegister: false,
        });
      } catch (err) {
        console.error(err.message);
      }
    }
  };

  renderRegister() {
    const { faceRegister, faceTemplate } = { ...this.state };
    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="jumbotron">
            <h1>Register</h1>
            <form method="POST" action="/register">
              <label htmlFor="fname">Username: </label>
              <input
                type="text"
                id="username"
                name="username"
                onChange={this.handleInputChange}
              />
              <br />
              <br />
              <label htmlFor="lname">Password: </label>
              <input type="text" id="password" name="password" />
              <br />
              <br />
              <label htmlFor="lname">Face Recognition: {faceTemplate} </label>
              <input
                type="button"
                value="Setup"
                onClick={() => {
                  this.setState({ faceRegister: !faceRegister });
                }}
              />
              {faceRegister && (
                <WebCameraShapshot handleSnapshot={this.handleSnapshot} />
              )}
              <input
                type="hidden"
                id="faceTemplate"
                name="faceTemplate"
                value={faceTemplate}
              />
              <br />
              <br />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }

  renderOnboarding() {
    const { step, selectedRole } = { ...this.state };
    switch (selectedRole) {
      case 'owner':
        switch (step) {
          case 1:
            return this.renderOwnerBeforeStart();
          default:
            return this.renderOwnerBeforeStart();
        }
      case 'helper':
        switch (step) {
          case 1:
            return this.renderHelperType();
          default:
            return this.renderHelperType();
        }
      default:
        return this.renderRoleSelect();
    }
  }

  renderRoleSelect() {
    const { step, selectedRole } = { ...this.state };
    return (
      <section className="container">
        <div className="section">
          <div className="title">Sign-up</div>
          <div className="subtitle">What type of user are you?</div>
          <div
            className="card owner"
            onClick={() => {
              this.setState({ step: 1, selectedRole: 'owner' });
              document.body.style.backgroundImage =
                'linear-gradient(#2362c7 42%, white 42%)';
            }}
          >
            <div className="role">
              <OwnerSvg />
              <div className="role-name">Document Owner</div>
            </div>
            <div className="desc">
              Select this option if you're a regular user that wishes to use
              MyPass as a way to upload and store your documents.
            </div>
          </div>
          <div
            className="card helper"
            onClick={() => {
              this.setState({ step: 1, selectedRole: 'helper' });
              document.body.style.backgroundImage =
                'linear-gradient(#4ba9d9 42%, white 42%)';
            }}
          >
            <div className="role">
              <HelperSvg />
              <div className="role-name">Document Helper</div>
            </div>
            <div className="desc">
              Select this option if you're a case worker or a notary with
              clients that require assistance in notarizing and/or uploading
              their documents.
            </div>
          </div>
        </div>
      </section>
    );
  }

  renderOwnerBeforeStart() {
    return (
      <section className="container">
        <div className="section">
          <div className="title">Owner</div>
          <div className="subtitle">Before we start</div>
          <div className="card owner1">
            <div className="card-title">
              To create and setup your account you need to follow these 3 simple
              steps:
            </div>
            <div className="card-body">
              <div className="card-body-section">
                <SimpleStepSvg />
                <div>Choose a username</div>
              </div>
              <div className="card-body-section">
                <SimpleStepSvg />
                <div>Choose and register your login methods</div>
              </div>
              <div className="card-body-section">
                <SimpleStepSvg />
                <div>Configure default Network Contacts permissions</div>
              </div>
              <input
                style={{ width: '210px', marginTop: '27px' }}
                type="button"
                value="I'm ready"
              />
            </div>
          </div>
          <div
            onClick={() => {
              document.body.style.backgroundImage =
                'linear-gradient(#2362c7 42%, white 42%, white 64%, #4ba9d9 64%)';
              this.setState({ step: 0, selectedRole: undefined });
            }}
          >
            <GoBackSvg />
          </div>
        </div>
      </section>
    );
  }

  renderHelperType() {
    return (
      <section className="container">
        <div className="section">
          <div className="title">Helper</div>
          <div className="subtitle">What type of heelper are you?</div>
          <div className="card owner1">
            <div className="card-title">todo</div>
            <div>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type specimen book.
            </div>
          </div>
          <div
            onClick={() => {
              document.body.style.backgroundImage =
                'linear-gradient(#2362c7 42%, white 42%, white 64%, #4ba9d9 64%)';
              this.setState({ step: 0, selectedRole: undefined });
            }}
          >
            <GoBackSvg isOwner={false} />
          </div>
        </div>
      </section>
    );
  }

  render() {
    if (process.env.BROWSER) {
      return (
        <Fragment>
          <div id="splash">
            <LogoSvg />
          </div>
          <main id="main" style={{ position: 'absolute', top: 0, opacity: 0 }}>
            {this.renderOnboarding()}
          </main>
        </Fragment>
      );
    } else {
      return <Fragment />;
    }
  }
}

export default Register;
