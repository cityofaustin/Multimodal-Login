import React, { Component } from "react";

export default class MStepper extends Component {
  static defaultProps = {
    currentStep: 1,
    totalSteps: 1,
  };

  renderSteps() {
    const { currentStep, totalSteps } = { ...this.props };
    let steps = [];
    let currentXOffset = 0;
    for (let i = 0; i < totalSteps; i++) {
      const otherCircle = (
        <circle
          key={i}
          cx="6"
          cy="6"
          r="6"
          transform={`translate(${currentXOffset} 5)`}
          fill="#cbcbcb"
        />
      );
      const currentCircle = (
        <circle
          key={i}
          cx="11"
          cy="11"
          r="11"
          transform={`translate(${currentXOffset} 0)`}
          fill="#2362c7"
        />
      );
      currentXOffset = i + 1 === currentStep ? currentXOffset + 22 + 10 : currentXOffset + 22;
      steps.push(i + 1 === currentStep ? currentCircle : otherCircle);
    }
    return steps;
  }

  render() {
    const { totalSteps } = { ...this.props };
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="88"
        height="22"
        viewBox={`0 0 ${22 * totalSteps} 22`}
      >
        {this.renderSteps()}
        {/* <circle cx="6" cy="6" r="6" transform="translate(0 5)" fill="#cbcbcb" /> */}
        {/* <circle
          cx="11"
          cy="11"
          r="11"
          transform="translate(22)"
          fill="#2362c7"
        /> */}
        {/* <circle
          cx="6"
          cy="6"
          r="6"
          // transform="translate(44 5)" + 10
          transform="translate(54 5)"
          fill="#cbcbcb"
        />
        <circle
          cx="6"
          cy="6"
          r="6"
          transform="translate(76 5)"
          fill="#cbcbcb"
        /> */}
      </svg>
    );
  }
}
