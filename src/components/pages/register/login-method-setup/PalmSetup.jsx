import React, { Component } from 'react';
import PalmDetectedSvg from '../../../svg/PalmDetectedSvg';
import PalmNotDetectedSvg from '../../../svg/PalmNotDetectedSvg';
import HowSvg from '../../../svg/HowSvg';
import PalmExampleSvg from '../../../svg/PalmExampleSvg';
if (process.env.BROWSER) {
  import('./PalmSetup.scss');
}
export default class PalmSetup extends Component {
  constructor(props) {
    super(props);
    const palmTemplate = props.palmItem
      ? props.palmItem.palmTemplate
      : undefined;
    this.state = {
      palmTemplate,
    };
  }

  renderPalmCard() {
    const { palmTemplate } = { ...this.state };
    return (
      <div id="palm-setup" className="card owner1">
        <div className="card-content">
          <div className="card-title">Palm Login</div>
          <div className="excerpt">
            Please use your camera to register your palm
          </div>
        </div>
        <div>
          {!palmTemplate && <PalmNotDetectedSvg />}
          {palmTemplate && <PalmDetectedSvg />}
        </div>
        <div className="submit-section">
          {!palmTemplate && (
            <input
              type="button"
              value="Open Camera"
              // TODO:
              onClick={() => this.setState({ palmTemplate: '123' })}
            />
          )}
          {palmTemplate && (
            <input
              type="button"
              value="Set Palm"
              onClick={() =>
                this.props.handleGoBack('owner', 10, {
                  palmItem: { palmTemplate },
                })
              }
            />
          )}
          <div className="how">How does this work?</div>
        </div>
      </div>
    );
  }

  renderHow() {
    return (
      <div className="how-container">
        <HowSvg loginMethod="palm" />
        <div className="sec-excerpt">
          Palm recognition is a technology that records your unique palm print
          and utilizes it to login to your account using your device's camera.{' '}
        </div>
        <PalmExampleSvg />
      </div>
    );
  }

  render() {
    const { isDisplayHow } = { ...this.props };
    return !isDisplayHow ? this.renderPalmCard() : this.renderHow();
  }
}
