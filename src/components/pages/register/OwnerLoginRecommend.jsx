import React, { Component } from 'react';
import { handleIOSBrowser } from '../../../util/browser-util';
import GoBackSvg from '../../svg/GoBackSvg';
// import OptionSvg from '../../svg/OptionSvg';
// import HasPhoneSvg from '../../svg/HasPhoneSvg';
import './OwnerLoginRecommend.scss';
import LoginOption from './LoginOption';
import { animateIn, getSectionClassName } from '../../../util/animation-util';


export default class OwnerLoginRecommend extends Component {
  static defaultProps = {
    handleGoForward: () => {},
    handleGoBack: () => {},
  };

  state = {
    loginMethods: ['password', 'text', 'palm', 'securityQuestions'],
  };

  componentDidMount() {
    handleIOSBrowser();
    animateIn(this.refs.section);
  }

  getRecommended = () => {
    const {
      forgetsPassword,
      lostPhone,
      scanningPalm,
      answeringSecurityQuestions,
    } = {
      ...this.props.questions,
    };
    const recommended = [];
    if (forgetsPassword === 'forgetPasswordRarely') {
      recommended.push('password');
    }
    if (lostPhone !== 'noPhone') {
      recommended.push('text');
    }
    if (scanningPalm === 'palmComfortable') {
      recommended.push('palm');
    }
    if (answeringSecurityQuestions === 'securityGood') {
      recommended.push('securityQuestions');
    }
    return recommended;
  };

  isComplete = (loginMethod) => {
    const { passwordItem, textItem, palmItem, securityItems } = {
      ...this.props,
    };
    switch (loginMethod) {
      case 'password':
        return !!passwordItem;
      case 'text':
        return !!textItem;
      case 'palm':
        return !!palmItem;
      case 'securityQuestions':
        return !!securityItems;
      default:
        return false;
    }
  };

  areAnyComplete = () => {
    const { loginMethods } = { ...this.state };
    for (const loginMethod of loginMethods) {
      if (this.isComplete(loginMethod)) {
        return true;
      }
    }
    return false;
  };

  render() {
    const { loginMethods } = { ...this.state };
    return (
      <div ref="section" id="section-9-owner" className={getSectionClassName(this.props.position)}>
        <div className="section-contents">
          <div className="title">Document Owner</div>
          <div className="subtitle">More ways to login</div>
          <div className="card owner1">
            <div>
              <div className="card-title">
                Based on your answers, we found the following login solution for
                you
              </div>
            </div>
            {this.getRecommended().map((loginMethod) => (
              <div
                key={loginMethod}
                onClick={() =>
                  this.props.handleGoForward('owner', 10, { loginMethod })
                }
              >
                <LoginOption
                  loginMethod={loginMethod}
                  isComplete={this.isComplete(loginMethod)}
                />
              </div>
            ))}
            <div>
              <div className="excerpt1">Other login methods</div>
              <div className="excerpt2">(not recommended for you)</div>
            </div>
            {loginMethods
              .filter(
                (loginMethod) => this.getRecommended().indexOf(loginMethod) < 0
              )
              .map((loginMethod) => (
                <div
                  key={loginMethod}
                  onClick={() =>
                    this.props.handleGoForward('owner', 10, { loginMethod })
                  }
                >
                  <LoginOption
                    loginMethod={loginMethod}
                    isComplete={this.isComplete(loginMethod)}
                  />
                </div>
              ))}
            <div className="submit-section">
              <input
                style={{ width: '210px' }}
                type="button"
                value="Finish"
                // TODO:
                onClick={() => {}}
                disabled={!this.areAnyComplete()}
              />
              <div>Why did you pick this for me?</div>
            </div>
          </div>
          <GoBackSvg
            color="#2362c7"
            goBack={() => this.props.handleGoBack('owner', 9)}
          />
        </div>
      </div>
    );
  }
}
