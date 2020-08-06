import React, { Component } from 'react';
import { handleIOSBrowser } from '../../../util/browser-util';
import GoBackSvg from '../../svg/GoBackSvg';
// import OptionSvg from '../../svg/OptionSvg';
// import HasPhoneSvg from '../../svg/HasPhoneSvg';
import './OwnerLoginRecommend.scss';
import LoginOption from './LoginOption';
import { animateIn, getSectionClassName } from '../../../util/animation-util';
import AnsweredItemSvg from '../../svg/AnsweredItemSvg';

export default class OwnerLoginRecommend extends Component {
  static defaultProps = {
    handleGoForward: () => {},
    handleGoBack: () => {},
  };

  answerTitles = {
    password: 'How often do you completely forget your passwords?',
    text:
      'In the last five years, how many times have you permanently lost your phone? ',
    palm: 'How comfortable are you using your camera to scan your palm?',
    securityQuestions: 'How good are you at answering security questions?',
  };

  state = {
    loginMethods: ['password', 'text', 'palm', 'securityQuestions'],
    isDisplayWhy: false,
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

  isQuestionSuccess = (loginMethod) => {
    const recommendedLoginMethods = this.getRecommended();
    return recommendedLoginMethods.indexOf(loginMethod) > -1;
  };

  renderSectionContents() {
    const { loginMethods, isDisplayWhy } = { ...this.state };
    return (
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
            <div onClick={() => this.setState({ isDisplayWhy: !isDisplayWhy })}>
              Why did you pick this for me?
            </div>
          </div>
        </div>
        <GoBackSvg
          color="#2362c7"
          goBack={() => this.props.handleGoBack('owner', 9)}
        />
      </div>
    );
  }

  renderSectionWhy() {
    const { loginMethods, isDisplayWhy } = { ...this.state };

    return (
      <div className="section-contents">
        <div className="title">Document Owner</div>
        <div className="subtitle">More ways to login</div>
        <div className="card owner1 why-card">
          <div className="why-title">Why did you pick this for me?</div>
          {loginMethods.map((loginMethod) => (
            <div key={loginMethod} className="why-item">
              <div className="why-item-title">
                {this.answerTitles[loginMethod]}
              </div>
              <AnsweredItemSvg
                loginMethod={loginMethod}
                isSuccess={this.isQuestionSuccess(loginMethod)}
              />
            </div>
          ))}
        </div>
        <GoBackSvg
          color="#2362c7"
          goBack={() => this.setState({ isDisplayWhy: !isDisplayWhy })}
        />
      </div>
    );
  }

  render() {
    const { isDisplayWhy } = { ...this.state };
    return (
      <div
        ref="section"
        id="section-9-owner"
        className={getSectionClassName(this.props.position)}
      >
        {isDisplayWhy ? this.renderSectionWhy() : this.renderSectionContents()}
      </div>
    );
  }
}
