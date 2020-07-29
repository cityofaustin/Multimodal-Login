import React, { Fragment, Component } from 'react';
import LogoSvg from '../svg/logo-svg';
// import WebCameraShapshot from '../web-camera-shapshot';
// import CognitiveFaceService from '../../services/CognitiveFaceService';
import WaveSvg from '../svg/WaveSvg';
import OwnerOverview from './register/OwnerOverview';
import delay from '../../util/delay';
import RoleSelect from './register/RoleSelect';
import HelperOverview from './register/HelperOverview';
import OwnerEmail from './register/OwnerEmail';
import OwnerQuizIntro from './register/quiz/OwnerQuizIntro';
import OwnerPasswordQ from './register/quiz/OwnerPasswordQ';

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
      // selectedRole: 'owner',
      // step: 4,
      isAnimatingForward: false,
      isAnimatingBackward: false,
      faceRegister: false,
      username: '',
      faceTemplate: undefined,
    };
  }

  async componentDidMount() {
    if (process.env.BROWSER) {
      await delay(1000);
      const splash = document.getElementById('splash');
      splash.style.animation = 'fadeout 1s';
      splash.style.opacity = 0;
      document.getElementById('main').style.animation = 'fadein 1s';
      document.getElementById('main').style.opacity = 1;
      await delay(1000);
      splash.parentNode.removeChild(splash);
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

  goBackToWelcome() {
    window.location.href = '../';
  }

  handleGoBack = async (selectedRole, step) => {
    if (step === 0) {
      this.goBackToWelcome();
    }
    this.setState({ isAnimatingBackward: true });
    // waiting for react to put on dom, setState callback didn't seem
    // to do the trick so put in a short delay
    await delay(100);
    const elObj = this.getElObj();
    if (step === 1) {
      elObj.body.style.backgroundImage = `linear-gradient(#2362c7 50%, #4ba9d9 50%)`;
    }
    elObj.wave.style.transform = `translateX(-${(step - 1) * 360}px)`;
    elObj[selectedRole][step].style.transform = 'translateX(360px)';
    elObj[selectedRole][step].style.opacity = 0;
    await delay(1500);
    this.setState({
      selectedRole: step - 1 === 0 ? undefined : selectedRole,
      step: step - 1,
      isAnimatingBackward: false,
    });
  };

  handleGoForward = async (selectedRole, step, data) => {
    const elObj = this.getElObj();
    if (step === 1) {
      elObj.body.style.backgroundImage =
        selectedRole === 'owner'
          ? 'linear-gradient(#2362c7 50%, white 50%)'
          : 'linear-gradient(#4ba9d9 50%, white 50%)';
    }
    elObj.wave.style.transform = `translateX(-${step * 360}px)`;
    elObj[selectedRole][step - 1].style.transform = 'translateX(-360px)';
    elObj[selectedRole][step - 1].style.opacity = '0';
    this.setState({ step, selectedRole, isAnimatingForward: true });
    await delay(1500);
    this.setState({ isAnimatingForward: false });
  };

  getElObj() {
    return {
      body: document.body,
      wave: document.getElementsByClassName('wave-container')[0],
      owner: [
        document.getElementById('section0'),
        document.getElementById('section-1-owner'),
        document.getElementById('section-2-owner'),
        document.getElementById('section-3-owner'),
        document.getElementById('section-4-owner'),
        document.getElementById('section-5-owner'),
      ],
      helper: [
        document.getElementById('section0'),
        document.getElementById('section-1-helper'),
      ],
    };
  }

  renderOnboarding() {
    const { step, selectedRole, isAnimatingForward, isAnimatingBackward } = {
      ...this.state,
    };
    switch (selectedRole) {
      case 'owner':
        switch (step) {
          case 1:
            if (isAnimatingForward) {
              return (
                <Fragment>
                  <RoleSelect />
                  <OwnerOverview position="right" />
                </Fragment>
              );
            } else if (isAnimatingBackward) {
              return (
                <Fragment>
                  <RoleSelect position="left" />
                  <OwnerOverview />
                </Fragment>
              );
            } else {
              return (
                <OwnerOverview
                  handleGoBack={this.handleGoBack}
                  handleGoForward={this.handleGoForward}
                />
              );
            }
          case 2:
            if (isAnimatingForward) {
              return (
                <Fragment>
                  <OwnerOverview />
                  <OwnerEmail position="right" />
                </Fragment>
              );
            } else if (isAnimatingBackward) {
              return (
                <Fragment>
                  <OwnerOverview position="left" />
                  <OwnerEmail />
                </Fragment>
              );
            } else {
              return (
                <OwnerEmail
                  handleGoBack={this.handleGoBack}
                  handleGoForward={this.handleGoForward}
                />
              );
            }
          case 3:
            if (isAnimatingForward) {
              return (
                <Fragment>
                  <OwnerEmail />
                  <OwnerQuizIntro position="right" />
                </Fragment>
              );
            } else if (isAnimatingBackward) {
              return (
                <Fragment>
                  <OwnerEmail position="left" />
                  <OwnerQuizIntro />
                </Fragment>
              );
            } else {
              return (
                <OwnerQuizIntro
                  handleGoBack={this.handleGoBack}
                  handleGoForward={this.handleGoForward}
                />
              );
            }
          case 4:
            if (isAnimatingForward) {
              return (
                <Fragment>
                  <OwnerQuizIntro />
                  <OwnerPasswordQ position="right" />
                </Fragment>
              );
            } else if (isAnimatingBackward) {
              return (
                <Fragment>
                  <OwnerQuizIntro position="left" />
                  <OwnerPasswordQ />
                </Fragment>
              );
            } else {
              return (
                <OwnerPasswordQ
                  handleGoBack={this.handleGoBack}
                  handleGoForward={this.handleGoForward}
                />
              );
            }
          default:
            return <Fragment />;
        }
      case 'helper':
        switch (step) {
          case 1:
            if (isAnimatingForward) {
              return (
                <Fragment>
                  <RoleSelect />
                  <HelperOverview position="right" />
                </Fragment>
              );
            } else if (isAnimatingBackward) {
              return (
                <Fragment>
                  <RoleSelect position="left" />
                  <HelperOverview />
                </Fragment>
              );
            } else {
              return (
                <HelperOverview
                  handleGoBack={this.handleGoBack}
                  handleGoForward={this.handleGoForward}
                />
              );
            }
          default:
            return <Fragment />;
        }
      default:
        return (
          <RoleSelect
            handleGoBack={this.handleGoBack}
            handleGoForward={this.handleGoForward}
          />
        );
    }
  }

  render() {
    if (process.env.BROWSER) {
      return (
        <Fragment>
          {/* <div id="top"></div> */}
          <div id="splash">
            <LogoSvg />
          </div>
          <main id="main" style={{ position: 'absolute', top: 0, opacity: 0 }}>
            <section className="wave-container">
              <WaveSvg />
            </section>
            <section className="container">{this.renderOnboarding()}</section>
          </main>
        </Fragment>
      );
    } else {
      return <Fragment />;
    }
  }
}

export default Register;
