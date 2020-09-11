import React, { Component } from 'react';

export default class InfoBubble extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="135"
        height="86"
        viewBox="0 0 135 86"
      >
        <g
          id="Group_1690"
          data-name="Group 1690"
          transform="translate(-126 -308)"
        >
          <path
            id="Polygon_2"
            data-name="Polygon 2"
            d="M6.5,0,13,9H0Z"
            transform="translate(216 394) rotate(180)"
            fill="#90afe2"
          />
          <rect
            id="Rectangle_1191"
            data-name="Rectangle 1191"
            width="135"
            height="79"
            rx="2"
            transform="translate(126 308)"
            fill="#90afe2"
          />
          <text
            id="If_you_wish_to_do_both_you_must_create_two_separate_MyPass_accounts."
            data-name="If you wish to do
both, you must
create two separate
accounts."
            transform="translate(193.5 327)"
            fill="#fff"
            fontSize="12"
            fontFamily="Montserrat-Regular, Montserrat"
          >
            <tspan x="-50.466" y="0">
              If you wish to do{' '}
            </tspan>
            <tspan x="-47.052" y="15">
              both, you must{' '}
            </tspan>
            <tspan x="-60.75" y="30">
              create two separate{' '}
            </tspan>
            <tspan x="-52.884" y="45">
              accounts.
            </tspan>
          </text>
        </g>
      </svg>
    );
  }
}
