import React, { Component } from 'react';
import { handleIOSBrowser } from '../../../../util/browser-util';
import GoBackSvg from '../../../svg/GoBackSvg';
import PasswordSvg from '../../../svg/PasswordSvg';
import OptionSvg from '../../../svg/OptionSvg';
import './OwnerPasswordQ.scss';

export default class OwnerPasswordQ extends Component {
  static defaultProps = {
    handleGoForward: () => {},
    handleGoBack: () => {},
  };

  constructor(props) {
    super(props);
    const { forgetsPassword } = props.questions;
    const selectedOption = forgetsPassword ? forgetsPassword : undefined;
    this.state = {
      options: ['forgetPasswordOften', 'forgetPasswordRarely'],
      selectedOption,
    }
  }

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
      <div ref="section" id="section-4-owner" className="section">
        <div className="section-contents">
          <div className="title">Document Owner</div>
          <div className="subtitle">More ways to login</div>
          <div className="card owner1">
            <div>
              <div className="card-title">
                How often do you forget your passwords and have to reset them?
              </div>
            </div>
            <div>
              <PasswordSvg />
            </div>
            <div className="options">
              {options.map((option) => {
                const svgType =
                  option === options[0] ? 'meh' : 'smiley';
                return (
                  <OptionSvg
                    key={option}
                    svgType={svgType}
                    handleClick={() => this.setState({ selectedOption: option })}
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
                onClick={() => {
                  const q = this.props.questions;
                  q.forgetsPassword = selectedOption;
                  this.props.handleGoForward('owner', 5, { questions: q });
                }}
                disabled={!selectedOption}
              />
            </div>
          </div>
          <GoBackSvg
            color="#2362c7"
            goBack={() => this.props.handleGoBack('owner', 4)}
          />
        </div>
      </div>
    );
  }
}
