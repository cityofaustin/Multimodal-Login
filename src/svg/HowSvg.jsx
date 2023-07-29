import React, { Component } from "react";

export default class HowSvg extends Component {
  static defaultProps = {
    loginMethod: "securityAnswers",
  };

  render() {
    const { loginMethod } = { ...this.props };
    return howSvg[loginMethod];
  }
}

const howSvg = {
  securityAnswers: (
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
        <g transform="matrix(1, 0, 0, 1, 110, 142)" filter="url(#Ellipse_499)">
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
  ),
  text: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
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
        id="Group_2495"
        data-name="Group 2495"
        transform="translate(-110 -142)"
      >
        <g id="Group_2497" data-name="Group 2497">
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
          <g id="Group_2496" data-name="Group 2496">
            <path
              id="noun_Key_677345_1_"
              data-name="noun_Key_677345 (1)"
              d="M31.944,45.28l2.928,2.928a3.313,3.313,0,0,0,2.465,1.02H40.8v2.928a3.975,3.975,0,0,0,3.975,3.975h2.928v3.458a3.5,3.5,0,0,0,1,2.438l2.3,2.3a3.246,3.246,0,0,0,2.292.941h9.13a2.856,2.856,0,0,0,2.849-2.849h0V53.29a3.24,3.24,0,0,0-.954-2.306L45.28,31.944A21.767,21.767,0,1,0,31.944,45.28ZM12.167,12.154A17.789,17.789,0,0,1,41.133,31.665a1.988,1.988,0,0,0,.424,2.18L61.294,53.588v7.705H53.588l-1.941-1.941V54.668a2.557,2.557,0,0,0-2.557-2.557H44.777v-4.3a2.557,2.557,0,0,0-2.557-2.557H37.542l-3.7-3.7a1.988,1.988,0,0,0-2.18-.424,17.789,17.789,0,0,1-19.5-28.966Z"
              transform="translate(143.026 176.026)"
              fill="#2362c7"
            />
            <g
              id="Ellipse_690"
              data-name="Ellipse 690"
              transform="translate(156 189)"
              fill="#fff"
              stroke="#2362c7"
              strokeWidth="4"
            >
              <circle cx="7.5" cy="7.5" r="7.5" stroke="none" />
              <circle cx="7.5" cy="7.5" r="5.5" fill="none" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
  palm: (
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
        id="Group_2447"
        data-name="Group 2447"
        transform="translate(-110 -142)"
      >
        <g transform="matrix(1, 0, 0, 1, 110, 142)" filter="url(#Ellipse_499)">
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
        <g id="noun_palm_1671954" transform="translate(136.516 168)">
          <path
            id="Path_1362"
            data-name="Path 1362"
            d="M41.99,77.384h2.594a24.579,24.579,0,0,0,17.308-7.017A23.587,23.587,0,0,0,69.08,53.383h0V22.434a6.489,6.489,0,0,0-9.785-5.6V14.045A6.491,6.491,0,0,0,48.926,8.829,6.547,6.547,0,0,0,47.6,6.9a6.5,6.5,0,0,0-11.039,3.772,6.433,6.433,0,0,0-3.341-.935,6.514,6.514,0,0,0-6.507,6.507V30.19a5.162,5.162,0,0,0-1.383-.178H21.858a3.214,3.214,0,0,0-3.211,3.211V52.56C18.646,66.945,28.464,77.384,41.99,77.384ZM21.857,33.23H25.33c.733,0,.871.125,1.728,1.1l.049.056a3.2,3.2,0,0,1,.8,2.129v8.618a5.111,5.111,0,0,0,3.733,4.92,14.781,14.781,0,0,1,6.375,3.735,15.2,15.2,0,0,1,4.174,8.174,1.609,1.609,0,0,0,3.174-.53,18.447,18.447,0,0,0-5.075-9.922,17.96,17.96,0,0,0-7.744-4.544,1.918,1.918,0,0,1-1.418-1.832V36.519a6.457,6.457,0,0,0-1.2-3.734V16.244a3.282,3.282,0,0,1,5.611-2.32,3.259,3.259,0,0,1,.96,2.32s0,0,0,.008V36.563a1.609,1.609,0,1,0,3.217,0V11.5a3.284,3.284,0,1,1,6.568,0v2.544a1.637,1.637,0,0,0,.043.357v22.16a1.609,1.609,0,1,0,3.217,0V13.622a3.278,3.278,0,0,1,6.53.423V38.122a1.609,1.609,0,1,0,3.217,0V22.434a3.288,3.288,0,0,1,3.284-3.284,3.287,3.287,0,0,1,3.284,3.284V53.383h0a20.4,20.4,0,0,1-6.221,14.684,21.379,21.379,0,0,1-15.058,6.1H41.99c-11.662,0-20.126-9.087-20.126-21.607Z"
            transform="translate(0 0)"
            fill="#2362c7"
            stroke="#2362c7"
            strokeWidth="1"
          />
        </g>
      </g>
    </svg>
  ),
};
