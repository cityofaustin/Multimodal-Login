import React, { Component } from 'react';
import OwnerChoiceSvg from '../../svg/OwnerChoiceSvg';
import HelperChoiceSvg from '../../svg/HelperChoiceSvg';
import InfoSvg from '../../svg/InfoSvg';
import InfoBubbleSvg from '../../svg/InfoBubbleSvg';
import GoBackSvg from '../../svg/GoBackSvg';
import { handleIOSBrowser } from '../../../util/browser-util';
import { animateIn, getSectionClassName } from '../../../util/animation-util';

export default class RoleSelect extends Component {
  static defaultProps = {
    handleGoForward: () => {},
    handleGoBack: () => {},
  };

  componentDidMount() {
    handleIOSBrowser();
    animateIn(this.refs.section);
  }

  render() {
    return (
      <div ref="section" id="section0" className={getSectionClassName(this.props.position)}>
        <div className="section-contents">
          <div className="title">Sign-up</div>
          <div className="subtitle">What would you like to do?</div>
          <div
            style={{margin: "92px 0"}}
            className="card owner owner-choice"
            onClick={() => this.props.handleGoForward('owner', 1)}
          >
            <div className="role">
              <OwnerChoiceSvg />
            </div>
            <div className="desc-title">I'd like to store my documents</div>
          </div>
          {/* <div
            className="card helper helper-choice"
            onClick={() => this.props.handleGoForward('helper', 1)}
          >
            <div className="role">
              <HelperChoiceSvg />
            </div>
            <div className="desc-title">
              I want to help others with their documents
            </div>
          </div> */}
          {/* <div className="bottom-section">
            <div className="bottom-label">What if I want to do both?</div>
            <div className="info">
              <div className="bubble">
                <InfoBubbleSvg />
              </div>
              <InfoSvg />
            </div>
          </div> */}
          <GoBackSvg goBack={() => this.props.handleGoBack('', 0)} />
        </div>
      </div>
    );
  }
}
