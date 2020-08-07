import React, { Component, Fragment } from 'react';
import { handleIOSBrowser } from '../../../../util/browser-util';
import GoBackSvg from '../../../svg/GoBackSvg';
import './LoginMethodSetup.scss';
import PasswordSetup from './PasswordSetup';
import PalmSetup from './PalmSetup';
import TextSetup from './TextSetup';
import SecurityQuestionSetup from './SecurityQuestionsSetup';
import delay from '../../../../util/delay';
import {
  animateIn,
  getSectionClassName,
} from '../../../../util/animation-util';

export default class LoginMethodSetup extends Component {
  static defaultProps = {
    handleGoForward: () => {},
    handleGoBack: () => {},
    loginMethod: 'securityQuestions',
  };

  state = {
    isDisplayHow: false,
  };

  async componentDidMount() {
    handleIOSBrowser();
    animateIn(this.refs.section);
  }

  toggleDisplayHow = () => {
    const { isDisplayHow } = { ...this.state };
    this.setState({ isDisplayHow: !isDisplayHow });
  };

  renderTitles() {
    const { isDisplayHow } = { ...this.state };
    const { loginMethod } = { ...this.props };
    let title = 'Document Owner';
    let subtitle = 'More ways to login';
    if (!!isDisplayHow) {
      switch (loginMethod) {
        case 'securityQuestions':
          title = 'What are Security Questions?';
          subtitle = 'In a nutshell';
          break;
      }
    }
    return (
      <Fragment>
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
      </Fragment>
    );
  }

  render() {
    const {
      passwordItem,
      textItem,
      palmItem,
      securityItems,
      loginMethod,
      handleGoBack,
    } = { ...this.props };
    const { isDisplayHow } = { ...this.state };
    return (
      <div
        ref="section"
        id="section-10-owner"
        className={getSectionClassName(this.props.position)}
      >
        <div className="section-contents">
          {this.renderTitles()}
          {loginMethod === 'password' && (
            <PasswordSetup
              passwordItem={passwordItem}
              handleGoBack={(selectedRole, step, data) =>
                handleGoBack(selectedRole, step, data)
              }
            />
          )}
          {loginMethod === 'palm' && (
            <PalmSetup
              palmItem={palmItem}
              handleGoBack={(selectedRole, step, data) =>
                handleGoBack(selectedRole, step, data)
              }
            />
          )}
          {loginMethod === 'text' && (
            <TextSetup
              textItem={textItem}
              handleGoBack={(selectedRole, step, data) =>
                handleGoBack(selectedRole, step, data)
              }
            />
          )}
          {loginMethod === 'securityQuestions' && (
            <SecurityQuestionSetup
              securityItems={securityItems}
              handleGoBack={(selectedRole, step, data) =>
                handleGoBack(selectedRole, step, data)
              }
              toggleDisplayHow={this.toggleDisplayHow}
              isDisplayHow={isDisplayHow}
            />
          )}
          <GoBackSvg
            color="#2362c7"
            goBack={() => {
              const { isDisplayHow } = { ...this.state };
              if (isDisplayHow) {
                this.setState({ isDisplayHow: !isDisplayHow });
              } else {
                handleGoBack('owner', 10);
              }
            }}
          />
        </div>
      </div>
    );
  }
}
