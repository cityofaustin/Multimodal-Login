import React, { Component } from "react";
import { handleIOSBrowser } from "../../../../util/browser-util";
import GoBackSvg from "../../../svg/GoBackSvg";
import OptionSvg from "../../../svg/OptionSvg";
import PalmInfoSvg from "../../../svg/PalmInfoSvg";
import {
  animateIn,
  getSectionClassName,
} from "../../../../util/animation-util";
if (process.env.BROWSER) {
  import("./OwnerPalmQ.scss");
}

export default class OwnerPalmQ extends Component {
  static defaultProps = {
    handleGoForward: () => {},
    handleGoBack: () => {},
    displayNone: false,
  };

  constructor(props) {
    super(props);
    const { scanningPalm } = props.questions;
    const selectedOption = scanningPalm ? scanningPalm : undefined;
    this.state = {
      options: ["palmNotComfortable", "palmComfortable"],
      selectedOption,
    };
  }

  componentDidMount() {
    handleIOSBrowser();
    animateIn(this.refs.section);
  }

  render() {
    const { options, selectedOption } = { ...this.state };
    return (
      <div
        ref="section"
        id="section-7-owner"
        className={getSectionClassName(this.props.position)}
      >
        <div className="section-contents">
          <div className="title">Document Owner</div>
          <div className="subtitle">More ways to login</div>
          <div className="card owner1">
            <div>
              <div className="card-title">
                How comfortable are you using your camera to scan your palm?
              </div>
            </div>
            <PalmInfoSvg />
            <div className="options">
              {options.map((option) => {
                const svgType =
                  option === options[0] ? "meh-palm" : "smiley-palm";
                return (
                  <OptionSvg
                    key={option}
                    svgType={svgType}
                    handleClick={() => {
                      if (!this.props.position) {
                        this.setState({ selectedOption: option });
                      }
                    }}
                    isSelected={selectedOption === option}
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
                  q.scanningPalm = selectedOption;
                  this.props.handleGoForward("owner", 8, { questions: q });
                }}
                disabled={!selectedOption}
              />
            </div>
          </div>
          <GoBackSvg
            color="#2362c7"
            goBack={() => this.props.handleGoBack("owner", 7)}
          />
        </div>
      </div>
    );
  }
}
