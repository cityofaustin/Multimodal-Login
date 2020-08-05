import React, { Component } from 'react';
import { handleIOSBrowser } from '../../../util/browser-util';
import GoBackSvg from '../../svg/GoBackSvg';
import './OwnerEmail.scss';

export default class OwnerEmail extends Component {
  static defaultProps = {
    handleGoForward: () => {},
    handleGoBack: () => {},
  };

  state = {
    email: '',
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
    const { email } = { ...this.state };
    return (
      <div ref="section" id="section-2-owner" className="section">
        <div className="section-contents">
          <div className="title">Document Owner</div>
          <div className="subtitle">Ok. Let's get started.</div>
          <div className="card owner1">
            <div>
              <div className="card-title">
                What is your
                <br />
                e-mail account?
              </div>
              <div className="card-subtitle">
                You can use this to sign and to recover your account in case you
                get locked out of it.
              </div>
            </div>
            <div className="email-section">
              <div className="card-body">
                <div className="card-body-section">
                  <div>E-mail</div>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                </div>
              </div>
            </div>
            <div className="submit-section">
              <input
                style={{ width: '210px', marginTop: '27px' }}
                type="button"
                value="Next"
                disabled={email.length <= 0}
                onClick={() => this.props.handleGoForward('owner', 3, {email})}
              />
              <div>I don't have an e-mail</div>
            </div>
          </div>
          <GoBackSvg
            color="#2362c7"
            goBack={() => this.props.handleGoBack('owner', 2)}
          />
        </div>
      </div>
    );
  }
}
