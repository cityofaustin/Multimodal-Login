import React, { Component } from 'react';
import SimpleStepSvg from '../../svg/SimpleStepSvg';
import GoBackSvg from '../../svg/GoBackSvg';
import { handleIOSBrowser } from '../../../util/browser-util';
import UploadDocSvg from '../../svg/UploadDocSvg';
import StoreDocSvg from '../../svg/StoreDocSvg';
import ShareDocSvg from '../../svg/ShareDocSvg';

export default class OwnerOverview extends Component {
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
    }, 1);
  }

  handleGoBack = () => {
    this.props.handleGoBack('owner', 1);
  };

  render() {
    return (
      <div ref="section" id="section-1-owner" className="section">
        <div className="section-contents">
          <div className="title">Document Owner</div>
          <div className="subtitle">As an owner you can...</div>
          <div className="card owner1">
            {/* <div className="card-title">
              To create and setup your account you need to follow these 3 simple
              steps:
            </div> */}
            <div className="card-body">
              <div className="card-body-section" style={{marginTop: 0}}>
                <UploadDocSvg />
                <div>Upload Documents</div>
              </div>
              <div className="card-body-section">
                <StoreDocSvg />
                <div>Store Documents</div>
              </div>
              <div className="card-body-section">
                <ShareDocSvg />
                <div>Share Documents</div>
              </div>
              <div className="card-body-section">
                <div className="bottom-exerpt">
                  This account type will only allow you to upload store and
                  share your own documents.
                </div>
              </div>
              <input
                style={{ width: '210px', marginTop: '27px' }}
                type="button"
                value="Continue"
                onClick={() => this.props.handleGoForward('owner', 2)}
              />
            </div>
          </div>
          <GoBackSvg color="#2362c7" goBack={this.handleGoBack} />
        </div>
      </div>
    );
  }
}
