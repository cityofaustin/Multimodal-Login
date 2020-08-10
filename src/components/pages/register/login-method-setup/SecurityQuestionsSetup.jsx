import React, { Component, Fragment } from 'react';
import MSelect from '../../../common/MSelect';
import HowSvg from '../../../svg/HowSvg';
import SecurityExampleSvg from '../../../svg/SecurityExampleSvg';
if (process.env.BROWSER) {
  import('./SecurityQuestionsSetup.scss');
}
export default class SecurityQuestionSetup extends Component {
  constructor(props) {
    super(props);
    let securityItems = [
      {
        question: undefined,
        answer: '',
      },
      {
        question: undefined,
        answer: '',
      },
      {
        question: undefined,
        answer: '',
      },
    ];
    securityItems = props.securityItems ? props.securityItems : securityItems;
    this.state = {
      securityItems,
    };
  }

  renderSecurityCard() {
    const { securityItems } = { ...this.state };
    const { toggleDisplayHow } = { ...this.props };
    return (
      <div id="security-questions-setup" className="card owner1">
        <div className="card-content">
          <div className="card-title">Security Questions</div>
          <div className="excerpt1">
            Select a maximum of three preferred security questions followed by
            your answers
          </div>
          {securityItems.map((securityItem, i) => {
            return (
              <Fragment key={i}>
                <div className="card-body-section1">
                  <label>Question #{i + 1}</label>
                  <MSelect
                    value={this.getOptions().find(
                      (option) => option.value === securityItem.question
                    )}
                    options={this.getOptions()}
                    isSearcheable={false}
                    onChange={(e) => {
                      securityItem.question = e.value;
                      this.setState({ securityItems });
                    }}
                  />
                </div>
                <div className="answer-section">
                  <div className="card-body-section1">
                    <div>Answer</div>
                    <input
                      type="text"
                      value={securityItem.answer}
                      onChange={(e) => {
                        securityItem.answer = e.target.value;
                        this.setState({ securityItems });
                      }}
                    />
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>
        <div className="submit-section">
          <input
            style={{ width: '210px' }}
            type="button"
            value="Set Questions"
            onClick={() =>
              this.props.handleGoBack('owner', 10, { securityItems })
            }
            disabled={this.isDisabled()}
          />
        </div>
        <div className="how" onClick={toggleDisplayHow}>
          How does this work?
        </div>
      </div>
    );
  }

  renderHow() {
    return (
      <div className="how-container">
        <HowSvg loginMethod="securityAnswers" />
        <div className="sec-excerpt">
          Two-step verification is a simple way to authenticate a user by
          sending a unique code to their mobile device.
        </div>
        <SecurityExampleSvg />
      </div>
    );
  }

  render() {
    const { isDisplayHow } = { ...this.props };
    return !isDisplayHow ? this.renderSecurityCard() : this.renderHow();
  }

  isDisabled = () => {
    const { securityItems } = { ...this.state };
    let matched = securityItems.filter(
      (securityItem) => securityItem.answer.length > 0 && securityItem.question
    );
    return matched.length < securityItems.length;
  };

  getOptions = () => {
    const { securityItems } = { ...this.state };
    return [
      {
        value: 'streetNumGrewOn',
        label: 'What was the street number that you grew up on?',
        isDisabled: securityItems.some(
          (securityItem) => securityItem.question === 'streetNumGrewOn'
        ),
      },
      {
        value: 'cityGrewIn',
        label: 'In what town or city did you grow up in?',
        isDisabled: securityItems.some(
          (securityItem) => securityItem.question === 'cityGrewIn'
        ),
      },
      {
        value: 'primarySchool',
        label: 'What primary school did you go to?',
        isDisabled: securityItems.some(
          (securityItem) => securityItem.question === 'primarySchool'
        ),
      },
    ];
  };
}
