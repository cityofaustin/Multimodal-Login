import React, { Component } from 'react';
import { handleIOSBrowser } from '../../../../util/browser-util';
import GoBackSvg from '../../../svg/GoBackSvg';
import OptionSvg from '../../../svg/OptionSvg';
import SecurityQuestionSvg from '../../../svg/SecurityQuestionSvg';
import './OwnerSecurityQ.scss';

export default class OwnerSecurityQ extends Component {
  static defaultProps = {
    handleGoForward: () => {},
    handleGoBack: () => {},
  };

  state = {
    options: ['securityNotGood', 'securityGood'],
    selectedOption: undefined,
  };

  componentDidMount() {
    handleIOSBrowser();
    if (this.props.position === 'right') {
      this.refs.section.classList.add('section-right');
    } else if (this.props.position === 'left') {
      this.refs.section.classList.add('section-left');
    } else {
      this.refs.section.classList.add('section-center');
    }
    setTimeout(() => {
      this.refs.section.style.transform = 'translateX(0)';
      this.refs.section.style.opacity = '1';
    }, 1);
  }

  render() {
    const { options, selectedOption } = { ...this.state };
    return (
      <div ref="section" id="section-8-owner" className="section">
        <div className="section-contents">
          <div className="title">Document Owner</div>
          <div className="subtitle">More ways to login</div>
          <div className="card owner1">
            <div>
              <div className="card-title">
                How good are you at answering security questions?
              </div>
              <div className="card-subtitle">
                Example: "What's your mother's maiden name?
              </div>
            </div>
            <SecurityQuestionSvg />
            <div className="options">
              {options.map((option) => {
                const svgType =
                  option === options[0] ? 'meh-security' : 'smiley-security';
                return (
                  <OptionSvg
                    key={option}
                    svgType={svgType}
                    handleClick={() =>
                      this.setState({ selectedOption: option })
                    }
                    isSelected={selectedOption === option}
                  />
                );
              })}
            </div>
            <div className="section-container">
              <input
                style={{ width: '210px' }}
                type="button"
                value="Next"
                onClick={() => this.props.handleGoForward('owner', 9)}
                disabled={!selectedOption}
              />
            </div>
          </div>
          <GoBackSvg
            color="#2362c7"
            goBack={() => this.props.handleGoBack('owner', 8)}
          />
        </div>
      </div>
    );
  }
}
