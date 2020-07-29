import React, { Component } from 'react';
import OwnerChoiceSvg from '../../svg/OwnerChoiceSvg';
import HelperChoiceSvg from '../../svg/HelperChoiceSvg';
import InfoSvg from '../../svg/InfoSvg';
import InfoBubbleSvg from '../../svg/InfoBubbleSvg';
import GoBackSvg from '../../svg/GoBackSvg';
import { handleIOSBrowser } from '../../../util/browser-util';

export default class RoleSelect extends Component {
  static defaultProps = {
    handleGoForward: () => {},
    handleGoBack: () => {},
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
    }, 100);
  }

  render() {
    return (
      <div ref="section" id="section0" className="section">
        <div className="section-contents">
          <div className="title">Sign-up</div>
          <div className="subtitle">What would you like to do?</div>
          <div
            className="card owner owner-choice"
            onClick={() => this.props.handleGoForward('owner', 1)}
          >
            <div className="role">
              <OwnerChoiceSvg />
            </div>
            <div className="desc-title">I'd like to store my documents</div>
          </div>
          <div
            className="card helper helper-choice"
            onClick={() => this.props.handleGoForward('helper', 1)}
          >
            <div className="role">
              <HelperChoiceSvg />
            </div>
            <div className="desc-title">
              I want to help others with their documents
            </div>
          </div>
          <div className="bottom-section">
            <div className="bottom-label">What if I want to do both?</div>
            <div className="info">
              <div className="bubble">
                <InfoBubbleSvg />
              </div>
              <InfoSvg />
            </div>
          </div>
          <GoBackSvg goBack={() => this.props.handleGoBack('', 0)} />
        </div>
      </div>
    );
  }
}