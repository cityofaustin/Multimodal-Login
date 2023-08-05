import React, { Component } from "react";

export default class AirplaneModeHelpSvg extends Component {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="108"
        height="108"
        viewBox="0 0 108 108"
      >
        <defs>
          <filter
            id="Rectangle_1284"
            x="0"
            y="0"
            width="108"
            height="108"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="3" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feFlood floodOpacity="0.161" />
            <feComposite operator="in" in2="blur" />
            <feComposite in="SourceGraphic" />
          </filter>
        </defs>
        <g
          id="Group_2434"
          data-name="Group 2434"
          transform="translate(-176 -247)"
        >
          <g
            transform="matrix(1, 0, 0, 1, 176, 247)"
            filter="url(#Rectangle_1284)"
          >
            <rect
              id="Rectangle_1284-2"
              data-name="Rectangle 1284"
              width="90"
              height="90"
              rx="16"
              transform="translate(9 6)"
              fill="#fff"
            />
          </g>
          <text
            id="Help_me_turn_on_airplane_mode"
            data-name="Help me turn on
airplane mode"
            transform="translate(230.284 322.344)"
            fill="#2362c7"
            fontSize="9"
            fontFamily="Montserrat-Bold, Montserrat"
            fontWeight="700"
          >
            <tspan x="-39.753" y="0">
              Help me turn on{" "}
            </tspan>
            <tspan x="-34.187" y="11">
              airplane mode
            </tspan>
          </text>
          <g
            id="noun_airplane_mode_1427487"
            data-name="noun_airplane mode_1427487"
            transform="translate(209.966 265.966)"
          >
            <path
              id="Path_1923"
              data-name="Path 1923"
              d="M31.181,31.181l7.98-3.42c2.66-1.14,1.52-3.04-.76-2.66l-8.36,1.14-9.5-10.26,14.44-6.84c4.18-1.52,2.28-4.18-1.9-3.04l-18.62,3.04L8,1.921C6.481.021,1.541-.359.4.4c-.76,1.14-.38,6.08,1.52,7.6l7.22,6.46L6.1,33.081c-1.14,4.18,1.52,6.08,3.04,1.9l6.84-14.44,10.26,9.5L25.1,38.4c-.38,2.28,1.52,3.42,2.66.76Z"
              transform="translate(0 0)"
              fill="#2362c7"
              fillRule="evenodd"
            />
          </g>
        </g>
      </svg>
    );
  }
}
