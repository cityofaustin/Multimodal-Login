import React, { Component } from 'react';

export default class SimpleStepSvg extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: '#ababab',
          borderRadius: '7px',
          width: '56px',
          height: '59px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35.186"
          height="32.679"
          viewBox="0 0 35.186 32.679"
        >
          <path
            id="prefix__noun_typing_1665918"
            fill="#fff"
            stroke="#fff"
            strokeWidth="0.5px"
            d="M28.36 2.168H9.126A7.734 7.734 0 0 0 1.4 9.894v11.243a7.734 7.734 0 0 0 7.726 7.726h4.607a.707.707 0 0 1 .561.278l3.658 4.82a.982.982 0 0 0 .78.386.982.982 0 0 0 .78-.384l3.675-4.815a.7.7 0 0 1 .56-.278h4.611a7.734 7.734 0 0 0 7.727-7.732V9.894a7.734 7.734 0 0 0-7.725-7.726zm5.762 18.969a5.769 5.769 0 0 1-5.76 5.763H23.75a2.683 2.683 0 0 0-2.127 1.049l-2.88 3.791-2.878-3.788a2.685 2.685 0 0 0-2.127-1.052H9.126a5.769 5.769 0 0 1-5.762-5.762V9.894A5.769 5.769 0 0 1 9.126 4.13H28.36a5.769 5.769 0 0 1 5.762 5.764zM13.98 15.516a2.045 2.045 0 1 1-2.045-2.045 2.045 2.045 0 0 1 2.045 2.045zm6.808 0a2.045 2.045 0 1 1-2.045-2.045 2.045 2.045 0 0 1 2.045 2.045zm6.808 0a2.045 2.045 0 1 1-2.045-2.045 2.045 2.045 0 0 1 2.049 2.045z"
            transform="translate(-1.15 -1.918)"
          />
        </svg>
      </div>
    );
  }
}
