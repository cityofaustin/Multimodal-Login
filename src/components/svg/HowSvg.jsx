import React, { Component } from 'react';

export default class HowSvg extends Component {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="141"
        height="141"
        viewBox="0 0 141 141"
      >
        <defs>
          <filter
            id="Ellipse_499"
            x="0"
            y="0"
            width="141"
            height="141"
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
          id="Group_2444"
          data-name="Group 2444"
          transform="translate(-110 -142)"
        >
          <g
            transform="matrix(1, 0, 0, 1, 110, 142)"
            filter="url(#Ellipse_499)"
          >
            <circle
              id="Ellipse_499-2"
              data-name="Ellipse 499"
              cx="61.5"
              cy="61.5"
              r="61.5"
              transform="translate(9 6)"
              fill="#fff"
            />
          </g>
          <g
            id="noun_security_question_2758596"
            data-name="noun_security question_2758596"
            transform="translate(140.959 171.568)"
          >
            <path
              id="Path_1392"
              data-name="Path 1392"
              d="M67.635,14.344a4.461,4.461,0,0,1,.134,1.088v19.82a34.262,34.262,0,0,1-17.509,29.8l-8.68,4.873a4.491,4.491,0,0,1-4.392,0l-8.68-4.873A34.262,34.262,0,0,1,11,35.252V15.432c0-1.013.4-4.441,5.468-6.974C21.054,6.162,28.763,5,39.385,5,61.928,5,66.754,10.857,67.635,14.344ZM63.288,35.207V15.432s-1.494-5.961-23.9-5.961c-23.9,0-23.9,5.961-23.9,5.961v19.82A29.792,29.792,0,0,0,30.705,61.227l8.68,4.873,8.68-4.918A29.792,29.792,0,0,0,63.288,35.207ZM39.749,17.373c12.737,0,12.737,9.95,12.737,14.192,0,3.317-2.847,5.109-5.724,6.947S42,41.679,42,43.517a2.248,2.248,0,0,1-4.5,0c0-4.437,3.851-6.842,6.848-8.784,1.543-.971,3.641-2.316,3.641-3.167,0-5.5-.614-9.711-8.241-9.711-8.017,0-8.241,6.035-8.241,6.723a2.248,2.248,0,0,1-4.5,0C27.012,24.708,29.679,17.373,39.749,17.373Zm-.728,38.574A2.547,2.547,0,1,1,41.568,53.4,2.547,2.547,0,0,1,39.021,55.947Z"
              transform="translate(0)"
              fill="#2362c7"
              fillRule="evenodd"
            />
          </g>
        </g>
      </svg>
    );
  }
}
