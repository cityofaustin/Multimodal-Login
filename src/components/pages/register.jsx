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
import OwnerCameraQ from './register/quiz/OwnerCameraQ';
import OwnerLostPhoneQ from './register/quiz/OwnerLostPhoneQ';
import OwnerPalmQ from './register/quiz/OwnerPalmQ';
import OwnerSecurityQ from './register/quiz/OwnerSecurityQ';
import OwnerLoginRecommend from './register/OwnerLoginRecommend';
import LoginMethodSetup from './register/login-method-setup/LoginMethodSetup';

// https://stackoverflow.com/a/30355080/6907541
if (process.env.BROWSER) {
  require('../global.scss');
  require('./register.scss');
}

class Register extends Component {
  constructor() {
    super();
    this.state = {
      selectedRole: 'owner',
      step: 1,
      // selectedRole: 'owner',
      // step: 10,
      isAnimatingForward: false,
      isAnimatingBackward: false,
      faceRegister: false,
      faceTemplate: undefined,
      totalSteps: 10,
      emailItem: undefined,
      questions: {
        forgetsPassword: undefined,
        devicesWithCamera: undefined,
        lostPhone: undefined,
        scanningPalm: undefined,
        answeringSecurityQuestions: undefined,
      },
      passwordItem: undefined,
      textItem: undefined,
      palmItem: undefined,
      securityItems: undefined,
    };
  }

  async componentDidMount() {
    if (process.env.BROWSER) {
      this.loadAppSettings();
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

  loadAppSettings = async () => {
    try {
      const url = "api/app-settings";
      const init = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };
      const response = await fetch(url, init);
      const appSettings = await response.json();
      const titleSetting = appSettings.find(
        (a) => a.settingName === "title"
      );
      if (titleSetting) {
        document.title = titleSetting.settingValue + ' Auth';
      }
    } catch (err) {
      console.log("Error!");
      console.log(err);
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
    window.location.href = '../' + location.search;
  }

  handleGoBack = async (selectedRole, step, data) => {
    const { totalSteps, questions } = { ...this.state };
    if (data && Object.keys(data)) {
      const key = Object.keys(data)[0];
      this.setState({ [key]: data[key] });
    }
    if (step === 1) {
      this.goBackToWelcome();
      return;
    }
    this.setState({ isAnimatingBackward: true });
    // waiting for react to put on dom, setState callback didn't seem
    // to do the trick so put in a short delay
    await delay(100);
    const elObj = this.getElObj();
    if (step === 1) {
      elObj.body.style.backgroundImage = `linear-gradient(#2362c7 50%, #4ba9d9 50%)`;
      elObj.progressContainer.style.opacity = 0;
    }
    let skipDistance = 360;
    elObj[selectedRole][step].style.transform = `translateX(${skipDistance}px)`;
    elObj[selectedRole][step].style.opacity = 0;
    if (step === 8 && this.skipPalm(questions)) {
      // skip palm question since no camera
      step--;
    }
    elObj.wave.style.transform = `translateX(-${(step - 1) * 360}px)`;
    elObj.progress.style.width = ((step - 1) * 100) / totalSteps + '%';
    await delay(1500);
    this.setState({
      selectedRole: step - 1 === 0 ? undefined : selectedRole,
      step: step - 1,
      isAnimatingBackward: false,
    });
  };

  skipPalm(questions) {
    return (
      questions.devicesWithCamera &&
      questions.devicesWithCamera.indexOf('cameraAccessNone') > -1
    );
  }

  handleGoForward = async (selectedRole, step, data) => {
    const { totalSteps } = { ...this.state };
    let { emailItem, questions, loginMethod } = { ...this.state };
    if (data && data.emailItem) {
      ({ emailItem } = data);
    }
    if (data && data.questions) {
      ({ questions } = data);
    }
    if (data && data.loginMethod) {
      ({ loginMethod } = data);
    }
    await delay(100);
    const elObj = this.getElObj();
    if (step === 1) {
      elObj.body.style.backgroundImage =
        selectedRole === 'owner'
          ? 'linear-gradient(#2362c7 50%, white 50%)'
          : 'linear-gradient(#4ba9d9 50%, white 50%)';
      elObj.progressContainer.style.opacity = 1;
    }
    elObj[selectedRole][step - 1].style.transform = 'translateX(-360px)';
    elObj[selectedRole][step - 1].style.opacity = '0';
    if (step === 7 && this.skipPalm(questions)) {
      // skip palm question since no camera
      step++;
    }
    elObj.wave.style.transform = `translateX(-${step * 360}px)`;
    elObj.progress.style.width = (step * 100) / totalSteps + '%';
    this.setState({
      step,
      selectedRole,
      isAnimatingForward: true,
      emailItem,
      questions,
      loginMethod,
    });
    await delay(1500);
    this.setState({ isAnimatingForward: false });
  };

  getElObj() {
    return {
      body: document.body,
      wave: document.getElementsByClassName('wave-container')[0],
      progress: document.getElementById('progress'),
      progressContainer: document.getElementsByClassName(
        'progress-container'
      )[0],
      owner: [
        document.getElementById('section0'),
        document.getElementById('section-1-owner'),
        document.getElementById('section-2-owner'),
        document.getElementById('section-3-owner'),
        document.getElementById('section-4-owner'),
        document.getElementById('section-5-owner'),
        document.getElementById('section-6-owner'),
        document.getElementById('section-7-owner'),
        document.getElementById('section-8-owner'),
        document.getElementById('section-9-owner'),
        document.getElementById('section-10-owner'),
        document.getElementById('section-11-owner'),
        document.getElementById('section-12-owner'),
        document.getElementById('section-13-owner'),
      ],
      helper: [
        document.getElementById('section0'),
        document.getElementById('section-1-helper'),
      ],
    };
  }

  renderOnboarding() {
    const {
      step,
      selectedRole,
      isAnimatingForward,
      isAnimatingBackward,
      emailItem,
      questions,
      loginMethod,
      passwordItem,
      textItem,
      palmItem,
      securityItems,
    } = {
      ...this.state,
    };
    const skipPalm = this.skipPalm(questions);
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
                  <OwnerEmail emailItem={emailItem} position="right" />
                </Fragment>
              );
            } else if (isAnimatingBackward) {
              return (
                <Fragment>
                  <OwnerOverview position="left" />
                  <OwnerEmail emailItem={emailItem} />
                </Fragment>
              );
            } else {
              return (
                <OwnerEmail
                  emailItem={emailItem}
                  handleGoBack={this.handleGoBack}
                  handleGoForward={this.handleGoForward}
                />
              );
            }
          case 3:
            if (isAnimatingForward) {
              return (
                <Fragment>
                  <OwnerEmail emailItem={emailItem} />
                  <OwnerQuizIntro position="right" />
                </Fragment>
              );
            } else if (isAnimatingBackward) {
              return (
                <Fragment>
                  <OwnerEmail
                    emailItem={emailItem}
                    position="left"
                  />
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
                  <OwnerPasswordQ questions={questions} position="right" />
                </Fragment>
              );
            } else if (isAnimatingBackward) {
              return (
                <Fragment>
                  <OwnerQuizIntro position="left" />
                  <OwnerPasswordQ questions={questions} />
                </Fragment>
              );
            } else {
              return (
                <OwnerPasswordQ
                  questions={questions}
                  handleGoBack={this.handleGoBack}
                  handleGoForward={this.handleGoForward}
                />
              );
            }
          case 5:
            if (isAnimatingForward) {
              return (
                <Fragment>
                  <OwnerPasswordQ questions={questions} />
                  <OwnerCameraQ questions={questions} position="right" />
                </Fragment>
              );
            } else if (isAnimatingBackward) {
              return (
                <Fragment>
                  <OwnerPasswordQ questions={questions} position="left" />
                  <OwnerCameraQ questions={questions} />
                </Fragment>
              );
            } else {
              return (
                <OwnerCameraQ
                  questions={questions}
                  handleGoBack={this.handleGoBack}
                  handleGoForward={this.handleGoForward}
                />
              );
            }
          case 6:
            if (isAnimatingForward) {
              return (
                <Fragment>
                  <OwnerCameraQ questions={questions} />
                  <OwnerLostPhoneQ questions={questions} position="right" />
                </Fragment>
              );
            } else if (isAnimatingBackward) {
              return (
                <Fragment>
                  <OwnerCameraQ questions={questions} position="left" />
                  <OwnerLostPhoneQ questions={questions} />
                </Fragment>
              );
            } else {
              return (
                <OwnerLostPhoneQ
                  questions={questions}
                  handleGoBack={this.handleGoBack}
                  handleGoForward={this.handleGoForward}
                />
              );
            }
          case 7:
            if (isAnimatingForward) {
              return (
                <Fragment>
                  <OwnerLostPhoneQ questions={questions} />
                  <OwnerPalmQ questions={questions} position="right" />
                </Fragment>
              );
            } else if (isAnimatingBackward) {
              return (
                <Fragment>
                  <OwnerLostPhoneQ questions={questions} position="left" />
                  <OwnerPalmQ questions={questions} />
                </Fragment>
              );
            } else {
              return (
                <OwnerPalmQ
                  questions={questions}
                  handleGoBack={this.handleGoBack}
                  handleGoForward={this.handleGoForward}
                />
              );
            }
          case 8:
            if (isAnimatingForward) {
              if (skipPalm) {
                return (
                  <Fragment>
                    <OwnerLostPhoneQ questions={questions} />
                    <OwnerSecurityQ questions={questions} position="right" />
                  </Fragment>
                );
              } else {
                return (
                  <Fragment>
                    <OwnerPalmQ questions={questions} />
                    <OwnerSecurityQ questions={questions} position="right" />
                  </Fragment>
                );
              }
            } else if (isAnimatingBackward) {
              return (
                <Fragment>
                  {this.skipPalm(questions) && (
                    <OwnerLostPhoneQ questions={questions} position="left" />
                  )}
                  {!this.skipPalm(questions) && (
                    <OwnerPalmQ questions={questions} position="left" />
                  )}
                  <OwnerSecurityQ questions={questions} />
                </Fragment>
              );
            } else {
              return (
                <OwnerSecurityQ
                  questions={questions}
                  handleGoBack={this.handleGoBack}
                  handleGoForward={this.handleGoForward}
                />
              );
            }
          case 9:
            if (isAnimatingForward) {
              return (
                <Fragment>
                  <OwnerSecurityQ questions={questions} />
                  <OwnerLoginRecommend
                    position="right"
                    emailItem={emailItem}
                    questions={questions}
                    passwordItem={passwordItem}
                    textItem={textItem}
                    palmItem={palmItem}
                    securityItems={securityItems}
                  />
                </Fragment>
              );
            } else if (isAnimatingBackward) {
              return (
                <Fragment>
                  <OwnerSecurityQ questions={questions} position="left" />
                  <OwnerLoginRecommend
                    emailItem={emailItem}
                    questions={questions}
                    passwordItem={passwordItem}
                    textItem={textItem}
                    palmItem={palmItem}
                    securityItems={securityItems}
                  />
                </Fragment>
              );
            } else {
              return (
                <OwnerLoginRecommend
                  emailItem={emailItem}
                  questions={questions}
                  passwordItem={passwordItem}
                  textItem={textItem}
                  palmItem={palmItem}
                  securityItems={securityItems}
                  handleGoBack={this.handleGoBack}
                  handleGoForward={this.handleGoForward}
                />
              );
            }
          case 10:
            if (isAnimatingForward) {
              return (
                <Fragment>
                  <OwnerLoginRecommend
                    emailItem={emailItem}
                    questions={questions}
                    passwordItem={passwordItem}
                    textItem={textItem}
                    palmItem={palmItem}
                    securityItems={securityItems}
                  />
                  <LoginMethodSetup
                    position="right"
                    loginMethod={loginMethod}
                    passwordItem={passwordItem}
                    textItem={textItem}
                    palmItem={palmItem}
                    securityItems={securityItems}
                  />
                </Fragment>
              );
            } else if (isAnimatingBackward) {
              return (
                <Fragment>
                  <OwnerLoginRecommend
                    emailItem={emailItem}
                    questions={questions}
                    position="left"
                    passwordItem={passwordItem}
                    textItem={textItem}
                    palmItem={palmItem}
                    securityItems={securityItems}
                  />
                  <LoginMethodSetup
                    loginMethod={loginMethod}
                    passwordItem={passwordItem}
                    textItem={textItem}
                    palmItem={palmItem}
                    securityItems={securityItems}
                  />
                </Fragment>
              );
            } else {
              return (
                <LoginMethodSetup
                  handleGoBack={this.handleGoBack}
                  handleGoForward={this.handleGoForward}
                  loginMethod={loginMethod}
                  passwordItem={passwordItem}
                  textItem={textItem}
                  palmItem={palmItem}
                  securityItems={securityItems}
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
      const { step } = { ...this.state };
      return (
        <Fragment>
          <div id="splash">
            <LogoSvg />
          </div>
          <div className="progress-container">
            <div id="progress" className="progress-bar"></div>
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
