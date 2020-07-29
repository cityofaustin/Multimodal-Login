import React, { Component } from 'react';
import GoBackSvg from '../../svg/GoBackSvg';
import { handleIOSBrowser } from '../../../util/browser-util';
import HelperTypeSvg from '../../svg/HelperTypeSvg';

export default class HelperOverview extends Component {
  static defaultProps = {
    handleGoForward: () => {},
    handleGoBack: () => {},
  };

  constructor() {
    super();
    this.state = {
      helperRoleType: undefined,
    };
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

  isHelperRoleSelected = (_helperRoleType) => {
    const { helperRoleType } = { ...this.state };
    return _helperRoleType === helperRoleType;
  };

  render() {
    return (
      <div ref="section" id="section-1-helper" className="section">
        <div className="section-contents">
          <div className="title">Helper</div>
          <div className="subtitle">What type of helper are you?</div>
          <div className="helper-type">
            <div className="helper-row">
              <div
                className={`helper-item ${
                  this.isHelperRoleSelected('Clinical Case Manager') && 'active'
                }`}
                onClick={() =>
                  this.setState({ helperRoleType: 'Clinical Case Manager' })
                }
              >
                <HelperTypeSvg helperType="Clinical Case Manager" />
                <div className="type-name">Clinical Case Manager</div>
              </div>
              <div
                className={`helper-item ${
                  this.isHelperRoleSelected('Advocate') && 'active'
                }`}
                onClick={() => this.setState({ helperRoleType: 'Advocate' })}
              >
                <HelperTypeSvg helperType="Advocate" />
                <div className="type-name">Advocate</div>
              </div>
              <div
                className={`helper-item ${
                  this.isHelperRoleSelected('Case Manager') && 'active'
                }`}
                onClick={() =>
                  this.setState({ helperRoleType: 'Case Manager' })
                }
              >
                <HelperTypeSvg helperType="Case Manager" />
                <div className="type-name">Case Manager</div>
              </div>
            </div>
            <div className="helper-row">
              <div
                className={`helper-item ${
                  this.isHelperRoleSelected('Intern') && 'active'
                }`}
                onClick={() => this.setState({ helperRoleType: 'Intern' })}
              >
                <HelperTypeSvg helperType="Intern" />
                <div className="type-name">Intern</div>
              </div>
              <div
                className={`helper-item ${
                  this.isHelperRoleSelected('Volunteer') && 'active'
                }`}
                onClick={() => this.setState({ helperRoleType: 'Volunteer' })}
              >
                <HelperTypeSvg helperType="Volunteer" />
                <div className="type-name">Volunteer</div>
              </div>
              <div
                className={`helper-item ${
                  this.isHelperRoleSelected('Other') && 'active'
                }`}
                onClick={() => this.setState({ helperRoleType: 'Other' })}
              >
                <HelperTypeSvg helperType="Other" />
                <div className="type-name">Other</div>
              </div>
            </div>
          </div>
          <div className="note">
            Note: this role requires Admin authorization to finish your
            registration
          </div>
          <div className="card helper1">
            <div className="card-title">Are you a registered notary?</div>
            <div className="card-body">
              <div className="section1">
                <div className="label">No, I'm not.</div>
                <input className="checkbox" type="checkbox" />
              </div>
              <div className="label section2">
                Yes, I'm licensed in the state of...
              </div>
              <div className="select-container">
                <select>
                  <option>Select</option>
                </select>
              </div>
            </div>
          </div>
          <GoBackSvg
            color="#4ba9d9"
            goBack={() => this.props.handleGoBack('helper', 1)}
          />
        </div>
      </div>
    );
  }
}
