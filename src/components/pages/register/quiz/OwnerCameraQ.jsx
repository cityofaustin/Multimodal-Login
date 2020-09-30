import React, { Component } from "react";
import { handleIOSBrowser } from "../../../../util/browser-util";
import GoBackSvg from "../../../svg/GoBackSvg";
// import PasswordSvg from '../../../svg/PasswordSvg';
import OptionSvg from "../../../svg/OptionSvg";
import {
  animateIn,
  getSectionClassName,
} from "../../../../util/animation-util";
if (process.env.BROWSER) {
  import("./OwnerCameraQ.scss");
}

export default class OwnerCameraQ extends Component {
  static defaultProps = {
    handleGoForward: () => {},
    handleGoBack: () => {},
  };

  constructor(props) {
    super(props);
    const { devicesWithCamera } = props.questions;
    const selectedOptions = devicesWithCamera ? devicesWithCamera : [];
    this.state = {
      options: [
        "cameraAccessNone",
        "cameraAccessTablet",
        "cameraAccessComputer",
        "cameraAccessPhone",
      ],
      selectedOptions,
    };
  }

  componentDidMount() {
    handleIOSBrowser();
    animateIn(this.refs.section);
  }

  handleOptionSelect = (option) => {
    const { options } = { ...this.state };
    let { selectedOptions } = { ...this.state };
    if (option === options[0] && selectedOptions.indexOf(option) < 0) {
      // select none
      selectedOptions = [options[0]];
    } else if (selectedOptions.indexOf(option) > -1) {
      // de select
      selectedOptions.splice(selectedOptions.indexOf(option), 1);
    } else {
      // select
      if (selectedOptions.indexOf(options[0]) > -1) {
        // remove select none if selected
        selectedOptions.splice(selectedOptions.indexOf(options[0]));
      }
      selectedOptions.push(option);
    }
    this.setState({ selectedOptions });
  };

  render() {
    const { options, selectedOptions } = { ...this.state };
    return (
      <div
        ref="section"
        id="section-5-owner"
        className={getSectionClassName(this.props.position)}
      >
        <div className="section-contents">
          <div className="title">Document Owner</div>
          <div className="subtitle">More ways to login</div>
          <div className="card owner1">
            <div>
              <div className="card-title">
                Do you have access to a device with a working camera?
              </div>
            </div>
            <div className="options">
              {options.map((option) => {
                let svgType = option.substring(12, option.length).toLowerCase();
                return (
                  <OptionSvg
                    key={option}
                    svgType={svgType}
                    handleClick={() => {
                      if (!this.props.position) {
                        this.handleOptionSelect(option);
                      }
                    }}
                    isSelected={selectedOptions.indexOf(option) > -1}
                  />
                );
              })}
            </div>
            <div className="section-container">
              <input
                style={{ width: "210px" }}
                type="button"
                value="Next"
                onClick={() => {
                  const q = this.props.questions;
                  q.devicesWithCamera = selectedOptions;
                  if (q.devicesWithCamera.indexOf("cameraAccessNone") > -1) {
                    q.scanningPalm = undefined;
                  }
                  this.props.handleGoForward("owner", 6, { questions: q });
                }}
                disabled={selectedOptions.length < 1}
              />
            </div>
          </div>
          <GoBackSvg
            color="#2362c7"
            goBack={() => this.props.handleGoBack("owner", 5)}
          />
        </div>
      </div>
    );
  }
}
