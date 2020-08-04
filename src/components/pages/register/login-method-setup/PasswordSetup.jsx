import React, { Component } from 'react';
import PasswordMethod from '../../../svg/PasswordMethod';

export default class PasswordSetup extends Component {
  state = {
    password: '',
    confirmPassword: '',
  };

  render() {
    const { password, confirmPassword } = { ...this.state };

    return (
      <div className="card owner1">
        <div className="card-content">
          <div className="card-title">Password</div>
          <PasswordMethod />
          <div className="excerpt">
            Please choose a password to log into your account
          </div>
          <div className="email-section">
            <div className="card-body">
              <div className="card-body-section1">
                <div>Password</div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
              </div>
            </div>
          </div>
          <div className="email-section">
            <div className="card-body">
              <div className="card-body-section1">
                <div>Confirm Password</div>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) =>
                    this.setState({ confirmPassword: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="submit-section">
          <input
            style={{ width: '210px' }}
            type="button"
            value="Set Password"
            onClick={() => this.props.handleGoBack('owner', 10)}
            disabled={!password || !confirmPassword}
          />
        </div>
      </div>
    );
  }
}
