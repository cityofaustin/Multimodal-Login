import React, { Component } from 'react';
import { handleIOSBrowser } from '../../../../util/browser-util';
import GoBackSvg from '../../../svg/GoBackSvg';
import AuthQuestionSvg from '../../../svg/AuthQuestionSvg';
import {
  animateIn,
  getSectionClassName,
} from '../../../../util/animation-util';
if (process.env.BROWSER) {
  import('./OwnerQuizIntro.scss');
}

export default class OwnerQuizIntro extends Component {
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
      <div
        ref="section"
        id="section-3-owner"
        className={getSectionClassName(this.props.position)}
      >
        <div className="section-contents">
          <div className="title">Document Owner</div>
          <div className="subtitle">More ways to login</div>
          <div className="card owner1">
            <div>
              <div className="card-title">
                Let's figure out which login methods work best for you
              </div>
            </div>
            <div>
              <div className="card-subtitle">
                To do this, we'll ask you a few questions.
              </div>
            </div>
            <AuthQuestionSvg />
            <div>
              <div className="card-subtitle">
                This will help you access your account whilst keeping it private
                and secure
              </div>
            </div>
            <div className="section-container">
              <input
                style={{ width: '210px', marginTop: '27px' }}
                type="button"
                value="Continue"
                onClick={() => this.props.handleGoForward('owner', 4)}
              />
            </div>
          </div>
          <GoBackSvg
            color="#2362c7"
            goBack={() => this.props.handleGoBack('owner', 3)}
          />
        </div>
      </div>
    );
  }
}
