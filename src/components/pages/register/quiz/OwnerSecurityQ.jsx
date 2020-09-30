import React, { Component } from "react";
import { handleIOSBrowser } from "../../../../util/browser-util";
import GoBackSvg from "../../../svg/GoBackSvg";
import OptionSvg from "../../../svg/OptionSvg";
import SecurityQuestionSvg from "../../../svg/SecurityQuestionSvg";
import {
  animateIn,
  getSectionClassName,
} from "../../../../util/animation-util";
if (process.env.BROWSER) {
  import("./OwnerSecurityQ.scss");
}

export default class OwnerSecurityQ extends Component {
  static defaultProps = {
    handleGoForward: () => {},
    handleGoBack: () => {},
  };

  constructor(props) {
    super(props);
    const { answeringSecurityQuestions } = props.questions;
    const selectedOption = answeringSecurityQuestions
      ? answeringSecurityQuestions
      : undefined;
    this.state = {
      options: ["securityNotGood", "securityGood"],
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
        id="section-8-owner"
        className={getSectionClassName(this.props.position)}
      >
        <div className="section-contents">
          <div className="title">Document Owner</div>
          <div className="subtitle">More ways to login</div>
          <div className="card owner1">
            <div>
              <div className="card-title">
                How good are you at answering security questions?
              </div>
              <div className="card-subtitle">
                Example: "What's your mother's maiden name?
              </div>
            </div>
            <SecurityQuestionSvg />
            <div className="options">
              {options.map((option) => {
                const svgType =
                  option === options[0] ? "meh-security" : "smiley-security";
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
                  q.answeringSecurityQuestions = selectedOption;
                  this.props.handleGoForward("owner", 9, { questions: q });
                }}
                disabled={!selectedOption}
              />
            </div>
          </div>
          <GoBackSvg
            color="#2362c7"
            goBack={() => this.props.handleGoBack("owner", 8)}
          />
        </div>
      </div>
    );
  }
}
