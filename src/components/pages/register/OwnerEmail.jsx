import React, { Component, Fragment } from 'react';
import { handleIOSBrowser } from '../../../util/browser-util';
import GoBackSvg from '../../svg/GoBackSvg';
import { animateIn, getSectionClassName } from '../../../util/animation-util';
if (process.env.BROWSER) {
  import('./OwnerEmail.scss');
}

export default class OwnerEmail extends Component {
  static defaultProps = {
    handleGoForward: () => {},
    handleGoBack: () => {},
  };

  constructor(props) {
    super(props);
    const email =
      props.emailItem && props.emailItem.email ? props.emailItem.email : '';
    const username =
      props.emailItem && props.emailItem.username
        ? props.emailItem.username
        : '';
    const useEmail = props.emailItem ? !!props.emailItem.useEmail : true;
    this.state = {
      email,
      username,
      useEmail,
    };
  }

  componentDidMount() {
    handleIOSBrowser();
    animateIn(this.refs.section);
  }

  render() {
    const { email, username, useEmail } = { ...this.state };
    return (
      <div
        ref="section"
        id="section-2-owner"
        className={getSectionClassName(this.props.position)}
      >
        <div className="section-contents">
          <div className="title">Document Owner</div>
          <div className="subtitle">Ok. Let's get started.</div>
          <div className="card owner1">
            <div>
              <div className="card-title">
                {useEmail ? (
                  <Fragment>
                    What is your
                    <br />
                    e-mail account?
                  </Fragment>
                ) : (
                  'What username would you like to use to login?'
                )}
              </div>
              {useEmail && (
                <div className="card-subtitle">
                  You can use this to sign and to recover your account in case
                  you get locked out of it.
                </div>
              )}
            </div>
            <div className="email-section">
              <div className="card-body">
                <div className="card-body-section">
                  <div>{useEmail ? 'E-mail' : 'Username'}</div>
                  {useEmail ? (
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => this.setState({ email: e.target.value })}
                    />
                  ) : (
                    <input
                      type="text"
                      value={username}
                      onChange={(e) =>
                        this.setState({ username: e.target.value })
                      }
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="submit-section">
              <input
                style={{ width: '210px', marginTop: '27px' }}
                type="button"
                value="Next"
                disabled={
                  (useEmail && email.length <= 0) ||
                  (!useEmail && username.length <= 0)
                }
                onClick={() =>
                  this.props.handleGoForward('owner', 3, {
                    emailItem: { email, username, useEmail },
                  })
                }
              />
              <div onClick={() => this.setState({ useEmail: !useEmail })}>
                {useEmail ? "I don't have an e-mail" : 'I rather use e-mail'}
              </div>
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
