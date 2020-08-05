import React, { Component } from 'react';
import { handleIOSBrowser } from '../../../../util/browser-util';
import GoBackSvg from '../../../svg/GoBackSvg';
import './LoginMethodSetup.scss';
import PasswordSetup from './PasswordSetup';
import PalmSetup from './PalmSetup';
import TextSetup from './TextSetup';
import SecurityQuestionSetup from './SecurityQuestionsSetup';
import delay from '../../../../util/delay';

export default class LoginMethodSetup extends Component {
  static defaultProps = {
    handleGoForward: () => {},
    handleGoBack: () => {},
    loginMethod: 'securityQuestions',
  };

  async componentDidMount() {
    handleIOSBrowser();
    await delay(50);
    this.refs.section.style.transform = 'translateX(0)';
    this.refs.section.style.opacity = '1';
  }

  render() {
    const {
      passwordItem,
      textItem,
      palmItem,
      securityItems,
      loginMethod,
      position,
      handleGoBack,
    } = { ...this.props };
    let positionClass = 'section-center';
    positionClass = position ? `section-${position}` : positionClass;
    return (
      <div
        ref="section"
        id="section-10-owner"
        className={`section ${positionClass}`}
      >
        <div className="section-contents">
          <div className="title">Document Owner</div>
          <div className="subtitle">More ways to login</div>
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
            />
          )}
          <GoBackSvg color="#2362c7" goBack={() => handleGoBack('owner', 10)} />
        </div>
      </div>
    );
  }
}
