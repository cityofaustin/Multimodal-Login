import React, { Component, Fragment } from 'react';

export default class AnsweredItemSvg extends Component {
  static defaultProps = {
    loginMethod: 'password',
    isSuccess: true,
  };

  render() {
    const { loginMethod, isSuccess } = { ...this.props };
    return isSuccess
      ? answeredObj[loginMethod].success
      : answeredObj[loginMethod].fail;
  }
}

const answeredObj = {
  password: {
    success: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="257"
        height="90"
        viewBox="0 0 257 90"
      >
        <defs>
          <filter
            id="Path_1515"
            x="0"
            y="13"
            width="248"
            height="63"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="3" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feFlood floodOpacity="0.09" />
            <feComposite operator="in" in2="blur" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter
            id="Rectangle_1284"
            x="167"
            y="0"
            width="90"
            height="90"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="3" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="3" result="blur-2" />
            <feFlood floodOpacity="0.161" />
            <feComposite operator="in" in2="blur-2" />
            <feComposite in="SourceGraphic" />
          </filter>
        </defs>
        <g
          id="Component_167_50"
          data-name="Component 167 – 50"
          transform="translate(9 6)"
        >
          <g
            id="Group_2367"
            data-name="Group 2367"
            transform="translate(-65 -217)"
          >
            <g transform="matrix(1, 0, 0, 1, 56, 211)" filter="url(#Path_1515)">
              <path
                id="Path_1515-2"
                data-name="Path 1515"
                d="M22.5,0h185a22.5,22.5,0,0,1,0,45H22.5a22.5,22.5,0,0,1,0-45Z"
                transform="translate(9 19)"
                fill="#fff"
              />
            </g>
            <text
              id="Password"
              transform="translate(132 243)"
              fill="#32a736"
              fontSize="14"
              fontFamily="Montserrat-Medium, Montserrat"
              fontWeight="500"
            >
              <tspan x="0" y="14">
                Password
              </tspan>
            </text>
            <g
              id="Group_1797"
              data-name="Group 1797"
              transform="translate(-668.561 -915.561)"
            >
              <circle
                id="Ellipse_495"
                data-name="Ellipse 495"
                cx="12"
                cy="12"
                r="12"
                transform="translate(929.56 1156.56)"
                fill="#f2f2f2"
              />
              <path
                id="Path_1486"
                data-name="Path 1486"
                d="M18.222,10.011l-6.509,6.509L8.774,13.582a.893.893,0,0,0-1.262,1.262l3.57,3.57a.893.893,0,0,0,1.262,0l7.14-7.14a.893.893,0,0,0-1.262-1.262Z"
                transform="translate(928.144 1154.379)"
                fill="#fff"
              />
            </g>
            <g
              id="Group_1798"
              data-name="Group 1798"
              transform="translate(76.5 214.1)"
            >
              <path
                id="Path_1510"
                data-name="Path 1510"
                d="M76.838,35.832H76.3V33.238A4.342,4.342,0,0,0,71.963,28.9H70.4a4.342,4.342,0,0,0-4.338,4.338v2.594h-.537A1.909,1.909,0,0,0,63.6,37.755v8.05a1.909,1.909,0,0,0,1.923,1.923H76.838a1.909,1.909,0,0,0,1.923-1.923v-8.05A1.937,1.937,0,0,0,76.838,35.832Zm-4.383,8.5a.314.314,0,0,1-.313.4H70.219a.33.33,0,0,1-.313-.4l.626-2.5a1.481,1.481,0,0,1-.894-1.386,1.521,1.521,0,1,1,3.041,0,1.481,1.481,0,0,1-.894,1.386Zm1.252-8.5H68.654V33.238A1.746,1.746,0,0,1,70.4,31.494h1.565a1.746,1.746,0,0,1,1.744,1.744v2.594Z"
                transform="translate(-33.773)"
                fill="#32a736"
              />
              <path
                id="Path_1511"
                data-name="Path 1511"
                d="M16.165,47.121a.651.651,0,0,0-.894-.224l-1.118.626v-1.3a.626.626,0,1,0-1.252,0v1.3L11.782,46.9a.652.652,0,1,0-.671,1.118l1.118.626-1.118.626a.651.651,0,0,0-.224.894.584.584,0,0,0,.537.313.829.829,0,0,0,.313-.089l1.118-.626v1.3a.626.626,0,0,0,1.252,0v-1.3l1.118.626a.829.829,0,0,0,.313.089.62.62,0,0,0,.537-.313.651.651,0,0,0-.224-.894l-1.118-.626,1.118-.626A.667.667,0,0,0,16.165,47.121Z"
                transform="translate(-4.586 -9.231)"
                fill="#32a736"
              />
              <path
                id="Path_1512"
                data-name="Path 1512"
                d="M33.665,47.121a.651.651,0,0,0-.894-.224l-1.118.626v-1.3a.626.626,0,1,0-1.252,0v1.3L29.282,46.9a.652.652,0,1,0-.671,1.118l1.118.626-1.118.626a.651.651,0,0,0-.224.894.584.584,0,0,0,.537.313.829.829,0,0,0,.313-.089l1.118-.626v1.3a.626.626,0,0,0,1.252,0v-1.3l1.118.626a.829.829,0,0,0,.313.089.62.62,0,0,0,.537-.313.651.651,0,0,0-.224-.894l-1.118-.626,1.118-.626A.667.667,0,0,0,33.665,47.121Z"
                transform="translate(-14.259 -9.231)"
                fill="#32a736"
              />
              <path
                id="Path_1513"
                data-name="Path 1513"
                d="M51.165,47.121a.651.651,0,0,0-.894-.224l-1.118.626v-1.3a.626.626,0,0,0-1.252,0v1.3L46.782,46.9a.652.652,0,1,0-.671,1.118l1.118.626-1.118.626a.651.651,0,0,0-.224.894.584.584,0,0,0,.537.313.829.829,0,0,0,.313-.089l1.118-.626v1.3a.626.626,0,0,0,1.252,0v-1.3l1.118.626a.829.829,0,0,0,.313.089.62.62,0,0,0,.537-.313.651.651,0,0,0-.224-.894l-1.118-.626,1.118-.626A.667.667,0,0,0,51.165,47.121Z"
                transform="translate(-23.932 -9.231)"
                fill="#32a736"
              />
              <path
                id="Path_1514"
                data-name="Path 1514"
                d="M30.319,39.226a.611.611,0,0,0-.626-.626H6.033A3.541,3.541,0,0,0,2.5,42.133v5.233A3.541,3.541,0,0,0,6.033,50.9h21.2a.626.626,0,1,0,0-1.252H6.033a2.291,2.291,0,0,1-2.281-2.281V42.133a2.291,2.291,0,0,1,2.281-2.281H29.692A.587.587,0,0,0,30.319,39.226Z"
                transform="translate(0 -5.362)"
                fill="#32a736"
              />
            </g>
          </g>
          <text
            id="You_answered"
            data-name="You answered"
            transform="translate(32 63)"
            fill="#9a9a9a"
            fontSize="13"
            fontFamily="Montserrat-SemiBold, Montserrat"
            fontWeight="600"
          >
            <tspan x="8.408" y="13">
              You answered
            </tspan>
          </text>
          <g
            id="Group_2444"
            data-name="Group 2444"
            transform="translate(-43 -322)"
          >
            <g
              transform="matrix(1, 0, 0, 1, 34, 316)"
              filter="url(#Rectangle_1284)"
            >
              <rect
                id="Rectangle_1284-2"
                data-name="Rectangle 1284"
                width="72"
                height="72"
                rx="12"
                transform="translate(176 6)"
                fill="#32a736"
              />
            </g>
            <g
              id="Group_2337"
              data-name="Group 2337"
              transform="translate(228.439 331.659)"
            >
              <ellipse
                id="Ellipse_676"
                data-name="Ellipse 676"
                cx="18"
                cy="17.5"
                rx="18"
                ry="17.5"
                transform="translate(-0.439 0.342)"
                fill="#fff"
              />
              <g
                id="Ellipse_679"
                data-name="Ellipse 679"
                transform="translate(7.561 10.342)"
                fill="#32a736"
                stroke="#32a736"
                strokeWidth="1"
              >
                <circle cx="3" cy="3" r="3" stroke="none" />
                <circle cx="3" cy="3" r="2.5" fill="none" />
              </g>
              <g
                id="Ellipse_680"
                data-name="Ellipse 680"
                transform="translate(21.561 10.342)"
                fill="#32a736"
                stroke="#32a736"
                strokeWidth="1"
              >
                <circle cx="3" cy="3" r="3" stroke="none" />
                <circle cx="3" cy="3" r="2.5" fill="none" />
              </g>
              <g
                id="Component_158_228"
                data-name="Component 158 – 228"
                transform="translate(7.176 22.183)"
              >
                <path
                  id="Path_1853"
                  data-name="Path 1853"
                  d="M-13468.782-9602c2.481.343,16.612.526,19.279,0s-2.132,7.326-9.032,7.326S-13471.264-9602.344-13468.782-9602Z"
                  transform="translate(13469.365 9602.026)"
                  fill="#32a736"
                />
              </g>
            </g>
            <text
              id="Never"
              transform="translate(245.863 382.813)"
              fill="#fff"
              fontSize="10"
              fontFamily="Montserrat-Bold, Montserrat"
              fontWeight="700"
            >
              <tspan x="-15.37" y="0">
                Never
              </tspan>
            </text>
          </g>
        </g>
      </svg>
    ),
    fail: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="257"
        height="90"
        viewBox="0 0 257 90"
      >
        <defs>
          <filter
            id="Path_1515"
            x="0"
            y="13"
            width="248"
            height="63"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="3" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feFlood floodOpacity="0.09" />
            <feComposite operator="in" in2="blur" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter
            id="Rectangle_1284"
            x="167"
            y="0"
            width="90"
            height="90"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="3" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="3" result="blur-2" />
            <feFlood floodOpacity="0.161" />
            <feComposite operator="in" in2="blur-2" />
            <feComposite in="SourceGraphic" />
          </filter>
        </defs>
        <g
          id="Component_167_51"
          data-name="Component 167 – 51"
          transform="translate(9 6)"
        >
          <g
            id="Group_2367"
            data-name="Group 2367"
            transform="translate(-65 -217)"
          >
            <g transform="matrix(1, 0, 0, 1, 56, 211)" filter="url(#Path_1515)">
              <path
                id="Path_1515-2"
                data-name="Path 1515"
                d="M22.5,0h185a22.5,22.5,0,0,1,0,45H22.5a22.5,22.5,0,0,1,0-45Z"
                transform="translate(9 19)"
                fill="#fff"
              />
            </g>
            <text
              id="Password"
              transform="translate(132 243)"
              fill="#d95868"
              fontSize="14"
              fontFamily="Montserrat-Medium, Montserrat"
              fontWeight="500"
            >
              <tspan x="0" y="14">
                Password
              </tspan>
            </text>
            <g
              id="Group_1797"
              data-name="Group 1797"
              transform="translate(-668.561 -915.561)"
            >
              <circle
                id="Ellipse_495"
                data-name="Ellipse 495"
                cx="12"
                cy="12"
                r="12"
                transform="translate(929.56 1156.56)"
                fill="#f2f2f2"
              />
              <path
                id="Path_1486"
                data-name="Path 1486"
                d="M18.222,10.011l-6.509,6.509L8.774,13.582a.893.893,0,0,0-1.262,1.262l3.57,3.57a.893.893,0,0,0,1.262,0l7.14-7.14a.893.893,0,0,0-1.262-1.262Z"
                transform="translate(928.144 1154.379)"
                fill="#fff"
              />
            </g>
            <g
              id="Group_1798"
              data-name="Group 1798"
              transform="translate(76.5 214.1)"
            >
              <path
                id="Path_1510"
                data-name="Path 1510"
                d="M76.838,35.832H76.3V33.238A4.342,4.342,0,0,0,71.963,28.9H70.4a4.342,4.342,0,0,0-4.338,4.338v2.594h-.537A1.909,1.909,0,0,0,63.6,37.755v8.05a1.909,1.909,0,0,0,1.923,1.923H76.838a1.909,1.909,0,0,0,1.923-1.923v-8.05A1.937,1.937,0,0,0,76.838,35.832Zm-4.383,8.5a.314.314,0,0,1-.313.4H70.219a.33.33,0,0,1-.313-.4l.626-2.5a1.481,1.481,0,0,1-.894-1.386,1.521,1.521,0,1,1,3.041,0,1.481,1.481,0,0,1-.894,1.386Zm1.252-8.5H68.654V33.238A1.746,1.746,0,0,1,70.4,31.494h1.565a1.746,1.746,0,0,1,1.744,1.744v2.594Z"
                transform="translate(-33.773)"
                fill="#d95868"
              />
              <path
                id="Path_1511"
                data-name="Path 1511"
                d="M16.165,47.121a.651.651,0,0,0-.894-.224l-1.118.626v-1.3a.626.626,0,1,0-1.252,0v1.3L11.782,46.9a.652.652,0,1,0-.671,1.118l1.118.626-1.118.626a.651.651,0,0,0-.224.894.584.584,0,0,0,.537.313.829.829,0,0,0,.313-.089l1.118-.626v1.3a.626.626,0,0,0,1.252,0v-1.3l1.118.626a.829.829,0,0,0,.313.089.62.62,0,0,0,.537-.313.651.651,0,0,0-.224-.894l-1.118-.626,1.118-.626A.667.667,0,0,0,16.165,47.121Z"
                transform="translate(-4.586 -9.231)"
                fill="#d95868"
              />
              <path
                id="Path_1512"
                data-name="Path 1512"
                d="M33.665,47.121a.651.651,0,0,0-.894-.224l-1.118.626v-1.3a.626.626,0,1,0-1.252,0v1.3L29.282,46.9a.652.652,0,1,0-.671,1.118l1.118.626-1.118.626a.651.651,0,0,0-.224.894.584.584,0,0,0,.537.313.829.829,0,0,0,.313-.089l1.118-.626v1.3a.626.626,0,0,0,1.252,0v-1.3l1.118.626a.829.829,0,0,0,.313.089.62.62,0,0,0,.537-.313.651.651,0,0,0-.224-.894l-1.118-.626,1.118-.626A.667.667,0,0,0,33.665,47.121Z"
                transform="translate(-14.259 -9.231)"
                fill="#d95868"
              />
              <path
                id="Path_1513"
                data-name="Path 1513"
                d="M51.165,47.121a.651.651,0,0,0-.894-.224l-1.118.626v-1.3a.626.626,0,0,0-1.252,0v1.3L46.782,46.9a.652.652,0,1,0-.671,1.118l1.118.626-1.118.626a.651.651,0,0,0-.224.894.584.584,0,0,0,.537.313.829.829,0,0,0,.313-.089l1.118-.626v1.3a.626.626,0,0,0,1.252,0v-1.3l1.118.626a.829.829,0,0,0,.313.089.62.62,0,0,0,.537-.313.651.651,0,0,0-.224-.894l-1.118-.626,1.118-.626A.667.667,0,0,0,51.165,47.121Z"
                transform="translate(-23.932 -9.231)"
                fill="#d95868"
              />
              <path
                id="Path_1514"
                data-name="Path 1514"
                d="M30.319,39.226a.611.611,0,0,0-.626-.626H6.033A3.541,3.541,0,0,0,2.5,42.133v5.233A3.541,3.541,0,0,0,6.033,50.9h21.2a.626.626,0,1,0,0-1.252H6.033a2.291,2.291,0,0,1-2.281-2.281V42.133a2.291,2.291,0,0,1,2.281-2.281H29.692A.587.587,0,0,0,30.319,39.226Z"
                transform="translate(0 -5.362)"
                fill="#d95868"
              />
            </g>
          </g>
          <g
            id="Group_2366"
            data-name="Group 2366"
            transform="translate(-83 -294)"
          >
            <g
              transform="matrix(1, 0, 0, 1, 74, 288)"
              filter="url(#Rectangle_1284)"
            >
              <rect
                id="Rectangle_1284-2"
                data-name="Rectangle 1284"
                width="72"
                height="72"
                rx="13"
                transform="translate(176 6)"
                fill="#d95868"
              />
            </g>
            <text
              id="Often"
              transform="translate(286 355)"
              fill="#fff"
              fontSize="10"
              fontFamily="Montserrat-Bold, Montserrat"
              fontWeight="700"
            >
              <tspan x="-14.855" y="0">
                Often
              </tspan>
            </text>
            <g
              id="Group_2403"
              data-name="Group 2403"
              transform="translate(268.327 303.818)"
            >
              <ellipse
                id="Ellipse_676"
                data-name="Ellipse 676"
                cx="18"
                cy="17.5"
                rx="18"
                ry="17.5"
                transform="translate(-0.327 0.182)"
                fill="#fff"
              />
              <g
                id="Ellipse_679"
                data-name="Ellipse 679"
                transform="translate(7.673 10.182)"
                fill="#d95868"
                stroke="#d95868"
                strokeWidth="1"
              >
                <circle cx="3" cy="3" r="3" stroke="none" />
                <circle cx="3" cy="3" r="2.5" fill="none" />
              </g>
              <g
                id="Ellipse_680"
                data-name="Ellipse 680"
                transform="translate(21.673 10.182)"
                fill="#d95868"
                stroke="#d95868"
                strokeWidth="1"
              >
                <circle cx="3" cy="3" r="3" stroke="none" />
                <circle cx="3" cy="3" r="2.5" fill="none" />
              </g>
              <g
                id="Component_158_215"
                data-name="Component 158 – 215"
                transform="translate(11.754 23.834)"
              >
                <path
                  id="Path_1851"
                  data-name="Path 1851"
                  d="M-13460.541-9599.252a88.012,88.012,0,0,1,11.865-1.8"
                  transform="translate(13460.541 9601.057)"
                  fill="none"
                  stroke="#d95868"
                  strokeLinecap="round"
                  strokeWidth="4"
                />
              </g>
            </g>
          </g>
          <text
            id="You_answered"
            data-name="You answered"
            transform="translate(32 63)"
            fill="#9a9a9a"
            fontSize="13"
            fontFamily="Montserrat-SemiBold, Montserrat"
            fontWeight="600"
          >
            <tspan x="8.408" y="13">
              You answered
            </tspan>
          </text>
        </g>
      </svg>
    ),
  },
  text: {
    success: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="260"
        height="90"
        viewBox="0 0 260 90"
      >
        <defs>
          <filter
            id="Rectangle_1222"
            x="0"
            y="13"
            width="248"
            height="63"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="3" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feFlood floodOpacity="0.09" />
            <feComposite operator="in" in2="blur" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter
            id="Rectangle_1284"
            x="170"
            y="0"
            width="90"
            height="90"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="3" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="3" result="blur-2" />
            <feFlood floodOpacity="0.161" />
            <feComposite operator="in" in2="blur-2" />
            <feComposite in="SourceGraphic" />
          </filter>
        </defs>
        <g
          id="Component_168"
          data-name="Component 168"
          transform="translate(9 6)"
        >
          <g
            id="Group_2369"
            data-name="Group 2369"
            transform="translate(-73 -348)"
          >
            <g
              id="Group_1780"
              data-name="Group 1780"
              transform="translate(0 85)"
            >
              <g
                transform="matrix(1, 0, 0, 1, 64, 257)"
                filter="url(#Rectangle_1222)"
              >
                <rect
                  id="Rectangle_1222-2"
                  data-name="Rectangle 1222"
                  width="230"
                  height="45"
                  rx="22.5"
                  transform="translate(9 19)"
                  fill="#fff"
                />
              </g>
              <g
                id="Group_1729"
                data-name="Group 1729"
                transform="translate(-660.561 -870.561)"
              >
                <circle
                  id="Ellipse_495"
                  data-name="Ellipse 495"
                  cx="12"
                  cy="12"
                  r="12"
                  transform="translate(929.56 1156.56)"
                  fill="#f2f2f2"
                />
                <path
                  id="Path_1486"
                  data-name="Path 1486"
                  d="M18.222,10.011l-6.509,6.509L8.774,13.582a.893.893,0,0,0-1.262,1.262l3.57,3.57a.893.893,0,0,0,1.262,0l7.14-7.14a.893.893,0,0,0-1.262-1.262Z"
                  transform="translate(928.144 1154.379)"
                  fill="#fff"
                />
              </g>
            </g>
            <text
              id="Text_Login"
              data-name="Text Login"
              transform="translate(131 387)"
              fill="#32a736"
              fontSize="14"
              fontFamily="Montserrat-Medium, Montserrat"
              fontWeight="500"
            >
              <tspan x="0" y="0">
                Text Login
              </tspan>
            </text>
            <g
              id="Group_2376"
              data-name="Group 2376"
              transform="translate(11023 9849.255)"
            >
              <g
                id="noun_Phone_1375627_1_"
                data-name="noun_Phone_1375627 (1)"
                transform="translate(-10921 -9480.255)"
              >
                <path
                  id="Path_1909"
                  data-name="Path 1909"
                  d="M28.848,958.362A1.807,1.807,0,0,0,27,960.134v22.453a1.807,1.807,0,0,0,1.848,1.772H39.319a1.807,1.807,0,0,0,1.848-1.772V960.134a1.807,1.807,0,0,0-1.848-1.773H28.848Zm3.387,1.178h3.692a.3.3,0,1,1,0,.591H32.235a.3.3,0,1,1,0-.591Zm-4.006,1.773H39.934v18.909H28.229Zm5.851,19.8a1.183,1.183,0,1,1-1.232,1.178,1.207,1.207,0,0,1,1.235-1.177Z"
                  transform="translate(-27 -958.36)"
                  fill="#32a736"
                  stroke="#fff"
                  strokeWidth="0.2"
                />
              </g>
              <path
                id="Rectangle_1288"
                data-name="Rectangle 1288"
                d="M0,0H11V18.068H0Z"
                transform="translate(-10919.429 -9476.912)"
                fill="#32a736"
                opacity="0.5"
              />
            </g>
          </g>
          <text
            id="You_answered"
            data-name="You answered"
            transform="translate(35 63)"
            fill="#9a9a9a"
            fontSize="13"
            fontFamily="Montserrat-SemiBold, Montserrat"
            fontWeight="600"
          >
            <tspan x="8.408" y="13">
              You answered
            </tspan>
          </text>
          <g
            id="Group_2446"
            data-name="Group 2446"
            transform="translate(-40 -322)"
          >
            <g
              transform="matrix(1, 0, 0, 1, 31, 316)"
              filter="url(#Rectangle_1284)"
            >
              <rect
                id="Rectangle_1284-2"
                data-name="Rectangle 1284"
                width="72"
                height="72"
                rx="12"
                transform="translate(179 6)"
                fill="#32a736"
              />
            </g>
            <g
              id="Group_2337"
              data-name="Group 2337"
              transform="translate(228.439 331.659)"
            >
              <ellipse
                id="Ellipse_676"
                data-name="Ellipse 676"
                cx="18"
                cy="17.5"
                rx="18"
                ry="17.5"
                transform="translate(-0.439 0.342)"
                fill="#fff"
              />
              <g
                id="Ellipse_679"
                data-name="Ellipse 679"
                transform="translate(7.561 10.342)"
                fill="#32a736"
                stroke="#32a736"
                strokeWidth="1"
              >
                <circle cx="3" cy="3" r="3" stroke="none" />
                <circle cx="3" cy="3" r="2.5" fill="none" />
              </g>
              <g
                id="Ellipse_680"
                data-name="Ellipse 680"
                transform="translate(21.561 10.342)"
                fill="#32a736"
                stroke="#32a736"
                strokeWidth="1"
              >
                <circle cx="3" cy="3" r="3" stroke="none" />
                <circle cx="3" cy="3" r="2.5" fill="none" />
              </g>
              <g
                id="Component_158_230"
                data-name="Component 158 – 230"
                transform="translate(7.176 22.183)"
              >
                <path
                  id="Path_1853"
                  data-name="Path 1853"
                  d="M-13468.782-9602c2.481.343,16.612.526,19.279,0s-2.132,7.326-9.032,7.326S-13471.264-9602.344-13468.782-9602Z"
                  transform="translate(13469.365 9602.026)"
                  fill="#32a736"
                />
              </g>
            </g>
            <text
              id="Never"
              transform="translate(245.863 382.813)"
              fill="#fff"
              fontSize="10"
              fontFamily="Montserrat-Bold, Montserrat"
              fontWeight="700"
            >
              <tspan x="-15.37" y="0">
                Never
              </tspan>
            </text>
          </g>
        </g>
      </svg>
    ),
    fail: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="260"
        height="90"
        viewBox="0 0 260 90"
      >
        <defs>
          <filter
            id="Rectangle_1222"
            x="0"
            y="14"
            width="248"
            height="63"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="3" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feFlood floodOpacity="0.09" />
            <feComposite operator="in" in2="blur" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter
            id="Rectangle_1284"
            x="170"
            y="0"
            width="90"
            height="90"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="3" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="3" result="blur-2" />
            <feFlood floodOpacity="0.161" />
            <feComposite operator="in" in2="blur-2" />
            <feComposite in="SourceGraphic" />
          </filter>
        </defs>
        <g
          id="Component_168_53"
          data-name="Component 168 – 53"
          transform="translate(9 6)"
        >
          <g
            id="Group_2369"
            data-name="Group 2369"
            transform="translate(-73 -347)"
          >
            <g
              id="Group_1780"
              data-name="Group 1780"
              transform="translate(0 85)"
            >
              <g
                transform="matrix(1, 0, 0, 1, 64, 256)"
                filter="url(#Rectangle_1222)"
              >
                <rect
                  id="Rectangle_1222-2"
                  data-name="Rectangle 1222"
                  width="230"
                  height="45"
                  rx="22.5"
                  transform="translate(9 20)"
                  fill="#fff"
                />
              </g>
              <g
                id="Group_1729"
                data-name="Group 1729"
                transform="translate(-660.561 -870.561)"
              >
                <circle
                  id="Ellipse_495"
                  data-name="Ellipse 495"
                  cx="12"
                  cy="12"
                  r="12"
                  transform="translate(929.56 1156.56)"
                  fill="#f2f2f2"
                />
                <path
                  id="Path_1486"
                  data-name="Path 1486"
                  d="M18.222,10.011l-6.509,6.509L8.774,13.582a.893.893,0,0,0-1.262,1.262l3.57,3.57a.893.893,0,0,0,1.262,0l7.14-7.14a.893.893,0,0,0-1.262-1.262Z"
                  transform="translate(928.144 1154.379)"
                  fill="#fff"
                />
              </g>
            </g>
            <text
              id="Text_Login"
              data-name="Text Login"
              transform="translate(131 387)"
              fill="#d95868"
              fontSize="14"
              fontFamily="Montserrat-Medium, Montserrat"
              fontWeight="500"
            >
              <tspan x="0" y="0">
                Text Login
              </tspan>
            </text>
            <g
              id="Group_2376"
              data-name="Group 2376"
              transform="translate(11023 9849.255)"
            >
              <g
                id="noun_Phone_1375627_1_"
                data-name="noun_Phone_1375627 (1)"
                transform="translate(-10921 -9480.255)"
              >
                <path
                  id="Path_1909"
                  data-name="Path 1909"
                  d="M28.848,958.362A1.807,1.807,0,0,0,27,960.134v22.453a1.807,1.807,0,0,0,1.848,1.772H39.319a1.807,1.807,0,0,0,1.848-1.772V960.134a1.807,1.807,0,0,0-1.848-1.773H28.848Zm3.387,1.178h3.692a.3.3,0,1,1,0,.591H32.235a.3.3,0,1,1,0-.591Zm-4.006,1.773H39.934v18.909H28.229Zm5.851,19.8a1.183,1.183,0,1,1-1.232,1.178,1.207,1.207,0,0,1,1.235-1.177Z"
                  transform="translate(-27 -958.36)"
                  fill="#d95868"
                  stroke="#fff"
                  strokeWidth="0.2"
                />
              </g>
              <path
                id="Rectangle_1288"
                data-name="Rectangle 1288"
                d="M0,0H11V18.068H0Z"
                transform="translate(-10919.429 -9476.912)"
                fill="#d95868"
                opacity="0.5"
              />
            </g>
          </g>
          <text
            id="You_answered"
            data-name="You answered"
            transform="translate(35 64)"
            fill="#9a9a9a"
            fontSize="13"
            fontFamily="Montserrat-SemiBold, Montserrat"
            fontWeight="600"
          >
            <tspan x="8.408" y="13">
              You answered
            </tspan>
          </text>
          <g
            id="Group_2443"
            data-name="Group 2443"
            transform="translate(-80 -294)"
          >
            <g
              transform="matrix(1, 0, 0, 1, 71, 288)"
              filter="url(#Rectangle_1284)"
            >
              <rect
                id="Rectangle_1284-2"
                data-name="Rectangle 1284"
                width="72"
                height="72"
                rx="13"
                transform="translate(179 6)"
                fill="#d95868"
              />
            </g>
            <g
              id="Group_2403"
              data-name="Group 2403"
              transform="translate(268.327 303.818)"
            >
              <ellipse
                id="Ellipse_676"
                data-name="Ellipse 676"
                cx="18"
                cy="17.5"
                rx="18"
                ry="17.5"
                transform="translate(-0.327 0.182)"
                fill="#fff"
              />
              <g
                id="Ellipse_679"
                data-name="Ellipse 679"
                transform="translate(7.673 10.182)"
                fill="#d95868"
                stroke="#d95868"
                strokeWidth="1"
              >
                <circle cx="3" cy="3" r="3" stroke="none" />
                <circle cx="3" cy="3" r="2.5" fill="none" />
              </g>
              <g
                id="Ellipse_680"
                data-name="Ellipse 680"
                transform="translate(21.673 10.182)"
                fill="#d95868"
                stroke="#d95868"
                strokeWidth="1"
              >
                <circle cx="3" cy="3" r="3" stroke="none" />
                <circle cx="3" cy="3" r="2.5" fill="none" />
              </g>
              <g
                id="Component_158_214"
                data-name="Component 158 – 214"
                transform="translate(11.754 23.834)"
              >
                <path
                  id="Path_1851"
                  data-name="Path 1851"
                  d="M-13460.541-9599.252a88.012,88.012,0,0,1,11.865-1.8"
                  transform="translate(13460.541 9601.057)"
                  fill="none"
                  stroke="#d95868"
                  strokeLinecap="round"
                  strokeWidth="4"
                />
              </g>
            </g>
            <text
              id="Once_or_more"
              data-name="Once or more"
              transform="translate(286 353)"
              fill="#fff"
              fontSize="9"
              fontFamily="Montserrat-Bold, Montserrat"
              fontWeight="700"
            >
              <tspan x="-32.27" y="0">
                Once or more
              </tspan>
            </text>
          </g>
        </g>
      </svg>
    ),
  },
  palm: {
    success: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="254"
        height="90"
        viewBox="0 0 254 90"
      >
        <defs>
          <filter
            id="Rectangle_1222"
            x="0"
            y="13"
            width="248"
            height="63"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="3" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feFlood floodOpacity="0.09" />
            <feComposite operator="in" in2="blur" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter
            id="Rectangle_1284"
            x="164"
            y="0"
            width="90"
            height="90"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="3" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="3" result="blur-2" />
            <feFlood floodOpacity="0.161" />
            <feComposite operator="in" in2="blur-2" />
            <feComposite in="SourceGraphic" />
          </filter>
        </defs>
        <g
          id="Component_169"
          data-name="Component 169"
          transform="translate(9 6)"
        >
          <text
            id="You_answered"
            data-name="You answered"
            transform="translate(29 63)"
            fill="#9a9a9a"
            fontSize="13"
            fontFamily="Montserrat-SemiBold, Montserrat"
            fontWeight="600"
          >
            <tspan x="8.408" y="13">
              You answered
            </tspan>
          </text>
          <g
            id="Group_2343"
            data-name="Group 2343"
            transform="translate(-73 -262)"
          >
            <g
              transform="matrix(1, 0, 0, 1, 64, 256)"
              filter="url(#Rectangle_1222)"
            >
              <rect
                id="Rectangle_1222-2"
                data-name="Rectangle 1222"
                width="230"
                height="45"
                rx="22.5"
                transform="translate(9 19)"
                fill="#fff"
              />
            </g>
            <g
              id="Group_1729"
              data-name="Group 1729"
              transform="translate(-660.561 -870.561)"
            >
              <circle
                id="Ellipse_495"
                data-name="Ellipse 495"
                cx="12"
                cy="12"
                r="12"
                transform="translate(929.56 1156.56)"
                fill="#f2f2f2"
              />
              <path
                id="Path_1486"
                data-name="Path 1486"
                d="M18.222,10.011l-6.509,6.509L8.774,13.582a.893.893,0,0,0-1.262,1.262l3.57,3.57a.893.893,0,0,0,1.262,0l7.14-7.14a.893.893,0,0,0-1.262-1.262Z"
                transform="translate(928.144 1154.379)"
                fill="#fff"
              />
            </g>
            <text
              id="Palm_Login"
              data-name="Palm Login"
              transform="translate(124 288)"
              fill="#32a736"
              fontSize="14"
              fontFamily="Montserrat-Medium, Montserrat"
              fontWeight="500"
            >
              <tspan x="0" y="14">
                Palm Login
              </tspan>
            </text>
            <path
              id="Path_1504"
              data-name="Path 1504"
              d="M-528.787-82.579a1.3,1.3,0,0,0-1.3,1.3v6.224a.639.639,0,0,1-.638.638.638.638,0,0,1-.638-.638V-84.6a1.3,1.3,0,0,0-1.3-1.3,1.3,1.3,0,0,0-1.288,1.135v9.1a.638.638,0,0,1-.638.638.638.638,0,0,1-.638-.638v-8.792a.643.643,0,0,1-.017-.142v-1.009a1.3,1.3,0,0,0-.382-.923,1.3,1.3,0,0,0-.921-.38,1.3,1.3,0,0,0-1.3,1.3v9.943a.638.638,0,0,1-.638.638.638.638,0,0,1-.638-.638v-8.058s0,0,0,0a1.293,1.293,0,0,0-.381-.921,1.294,1.294,0,0,0-.921-.385,1.306,1.306,0,0,0-1.3,1.305v6.563a2.562,2.562,0,0,1,.475,1.482v3.419a.761.761,0,0,0,.563.727,7.125,7.125,0,0,1,3.073,1.8,7.318,7.318,0,0,1,2.013,3.937.639.639,0,0,1-.524.735.636.636,0,0,1-.106.009.638.638,0,0,1-.629-.533,6.031,6.031,0,0,0-1.656-3.243,5.865,5.865,0,0,0-2.529-1.482,2.028,2.028,0,0,1-1.481-1.952v-3.419a1.271,1.271,0,0,0-.319-.845l-.02-.022c-.34-.389-.4-.438-.686-.438h-1.378l0,7.669c0,4.967,3.358,8.573,7.985,8.573h1.029a8.483,8.483,0,0,0,5.975-2.42A8.093,8.093,0,0,0-527.484-69V-81.276a1.29,1.29,0,0,0-.382-.921A1.288,1.288,0,0,0-528.787-82.579Z"
              transform="translate(637.803 371.777)"
              fill="#32a736"
            />
          </g>
          <g
            id="Group_2404"
            data-name="Group 2404"
            transform="translate(-46 -322)"
          >
            <g
              transform="matrix(1, 0, 0, 1, 37, 316)"
              filter="url(#Rectangle_1284)"
            >
              <rect
                id="Rectangle_1284-2"
                data-name="Rectangle 1284"
                width="72"
                height="72"
                rx="12"
                transform="translate(173 6)"
                fill="#32a736"
              />
            </g>
            <g
              id="Group_2337"
              data-name="Group 2337"
              transform="translate(228.439 331.659)"
            >
              <ellipse
                id="Ellipse_676"
                data-name="Ellipse 676"
                cx="18"
                cy="17.5"
                rx="18"
                ry="17.5"
                transform="translate(-0.439 0.342)"
                fill="#fff"
              />
              <g
                id="Ellipse_679"
                data-name="Ellipse 679"
                transform="translate(7.561 10.342)"
                fill="#32a736"
                stroke="#32a736"
                strokeWidth="1"
              >
                <circle cx="3" cy="3" r="3" stroke="none" />
                <circle cx="3" cy="3" r="2.5" fill="none" />
              </g>
              <g
                id="Ellipse_680"
                data-name="Ellipse 680"
                transform="translate(21.561 10.342)"
                fill="#32a736"
                stroke="#32a736"
                strokeWidth="1"
              >
                <circle cx="3" cy="3" r="3" stroke="none" />
                <circle cx="3" cy="3" r="2.5" fill="none" />
              </g>
              <g
                id="Component_158_212"
                data-name="Component 158 – 212"
                transform="translate(7.176 22.183)"
              >
                <path
                  id="Path_1853"
                  data-name="Path 1853"
                  d="M-13468.782-9602c2.481.343,16.612.526,19.279,0s-2.132,7.326-9.032,7.326S-13471.264-9602.344-13468.782-9602Z"
                  transform="translate(13469.365 9602.026)"
                  fill="#32a736"
                />
              </g>
            </g>
          </g>
          <text
            id="I_m_comfortable"
            data-name="I'm comfortable"
            transform="translate(199.862 58.813)"
            fill="#fff"
            fontSize="8"
            fontFamily="Montserrat-Bold, Montserrat"
            fontWeight="700"
          >
            <tspan x="-33.332" y="0">
              I&apos;m comfortable
            </tspan>
          </text>
        </g>
      </svg>
    ),
    fail: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="254"
        height="90"
        viewBox="0 0 254 90"
      >
        <defs>
          <filter
            id="Rectangle_1222"
            x="0"
            y="13"
            width="248"
            height="63"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="3" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feFlood floodOpacity="0.09" />
            <feComposite operator="in" in2="blur" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter
            id="Rectangle_1284"
            x="164"
            y="0"
            width="90"
            height="90"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="3" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="3" result="blur-2" />
            <feFlood floodOpacity="0.161" />
            <feComposite operator="in" in2="blur-2" />
            <feComposite in="SourceGraphic" />
          </filter>
        </defs>
        <g
          id="Component_169_51"
          data-name="Component 169 – 51"
          transform="translate(9 6)"
        >
          <text
            id="You_answered"
            data-name="You answered"
            transform="translate(29 63)"
            fill="#9a9a9a"
            fontSize="13"
            fontFamily="Montserrat-SemiBold, Montserrat"
            fontWeight="600"
          >
            <tspan x="8.408" y="13">
              You answered
            </tspan>
          </text>
          <g
            id="Group_2343"
            data-name="Group 2343"
            transform="translate(-73 -262)"
          >
            <g
              transform="matrix(1, 0, 0, 1, 64, 256)"
              filter="url(#Rectangle_1222)"
            >
              <rect
                id="Rectangle_1222-2"
                data-name="Rectangle 1222"
                width="230"
                height="45"
                rx="22.5"
                transform="translate(9 19)"
                fill="#fff"
              />
            </g>
            <g
              id="Group_1729"
              data-name="Group 1729"
              transform="translate(-660.561 -870.561)"
            >
              <circle
                id="Ellipse_495"
                data-name="Ellipse 495"
                cx="12"
                cy="12"
                r="12"
                transform="translate(929.56 1156.56)"
                fill="#f2f2f2"
              />
              <path
                id="Path_1486"
                data-name="Path 1486"
                d="M18.222,10.011l-6.509,6.509L8.774,13.582a.893.893,0,0,0-1.262,1.262l3.57,3.57a.893.893,0,0,0,1.262,0l7.14-7.14a.893.893,0,0,0-1.262-1.262Z"
                transform="translate(928.144 1154.379)"
                fill="#fff"
              />
            </g>
            <text
              id="Palm_Login"
              data-name="Palm Login"
              transform="translate(124 288)"
              fill="#d95868"
              fontSize="14"
              fontFamily="Montserrat-Medium, Montserrat"
              fontWeight="500"
            >
              <tspan x="0" y="14">
                Palm Login
              </tspan>
            </text>
            <path
              id="Path_1504"
              data-name="Path 1504"
              d="M-528.787-82.579a1.3,1.3,0,0,0-1.3,1.3v6.224a.639.639,0,0,1-.638.638.638.638,0,0,1-.638-.638V-84.6a1.3,1.3,0,0,0-1.3-1.3,1.3,1.3,0,0,0-1.288,1.135v9.1a.638.638,0,0,1-.638.638.638.638,0,0,1-.638-.638v-8.792a.643.643,0,0,1-.017-.142v-1.009a1.3,1.3,0,0,0-.382-.923,1.3,1.3,0,0,0-.921-.38,1.3,1.3,0,0,0-1.3,1.3v9.943a.638.638,0,0,1-.638.638.638.638,0,0,1-.638-.638v-8.058s0,0,0,0a1.293,1.293,0,0,0-.381-.921,1.294,1.294,0,0,0-.921-.385,1.306,1.306,0,0,0-1.3,1.305v6.563a2.562,2.562,0,0,1,.475,1.482v3.419a.761.761,0,0,0,.563.727,7.125,7.125,0,0,1,3.073,1.8,7.318,7.318,0,0,1,2.013,3.937.639.639,0,0,1-.524.735.636.636,0,0,1-.106.009.638.638,0,0,1-.629-.533,6.031,6.031,0,0,0-1.656-3.243,5.865,5.865,0,0,0-2.529-1.482,2.028,2.028,0,0,1-1.481-1.952v-3.419a1.271,1.271,0,0,0-.319-.845l-.02-.022c-.34-.389-.4-.438-.686-.438h-1.378l0,7.669c0,4.967,3.358,8.573,7.985,8.573h1.029a8.483,8.483,0,0,0,5.975-2.42A8.093,8.093,0,0,0-527.484-69V-81.276a1.29,1.29,0,0,0-.382-.921A1.288,1.288,0,0,0-528.787-82.579Z"
              transform="translate(637.803 371.777)"
              fill="#d95868"
            />
          </g>
          <g
            id="Group_2447"
            data-name="Group 2447"
            transform="translate(-71 -530)"
          >
            <g
              transform="matrix(1, 0, 0, 1, 62, 524)"
              filter="url(#Rectangle_1284)"
            >
              <rect
                id="Rectangle_1284-2"
                data-name="Rectangle 1284"
                width="72"
                height="72"
                rx="12"
                transform="translate(173 6)"
                fill="#d95868"
              />
            </g>
            <g
              id="Group_2337"
              data-name="Group 2337"
              transform="translate(253.327 535.818)"
            >
              <ellipse
                id="Ellipse_676"
                data-name="Ellipse 676"
                cx="18"
                cy="17.5"
                rx="18"
                ry="17.5"
                transform="translate(-0.327 0.182)"
                fill="#fff"
              />
              <g
                id="Ellipse_679"
                data-name="Ellipse 679"
                transform="translate(7.673 10.182)"
                fill="#d95868"
                stroke="#d95868"
                strokeWidth="1"
              >
                <circle cx="3" cy="3" r="3" stroke="none" />
                <circle cx="3" cy="3" r="2.5" fill="none" />
              </g>
              <g
                id="Ellipse_680"
                data-name="Ellipse 680"
                transform="translate(21.673 10.182)"
                fill="#d95868"
                stroke="#d95868"
                strokeWidth="1"
              >
                <circle cx="3" cy="3" r="3" stroke="none" />
                <circle cx="3" cy="3" r="2.5" fill="none" />
              </g>
              <g
                id="Component_158_231"
                data-name="Component 158 – 231"
                transform="translate(11.754 23.834)"
              >
                <path
                  id="Path_1851"
                  data-name="Path 1851"
                  d="M-13460.541-9599.252a88.012,88.012,0,0,1,11.865-1.8"
                  transform="translate(13460.541 9601.057)"
                  fill="none"
                  stroke="#d95868"
                  strokeLinecap="round"
                  strokeWidth="4"
                />
              </g>
            </g>
            <text
              id="I_m_not_comfortable"
              data-name="I'm not 
  comfortable"
              transform="translate(271 583)"
              fill="#fff"
              fontSize="9"
              fontFamily="Montserrat-Bold, Montserrat"
              fontWeight="700"
            >
              <tspan x="-17.82" y="0">
                I&apos;m not{' '}
              </tspan>
              <tspan x="-28.993" y="11">
                comfortable
              </tspan>
            </text>
          </g>
        </g>
      </svg>
    ),
  },
  securityQuestions: {
    success: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="254"
        height="90"
        viewBox="0 0 254 90"
      >
        <defs>
          <filter
            id="Rectangle_1222"
            x="0"
            y="13"
            width="248"
            height="63"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="3" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feFlood floodOpacity="0.09" />
            <feComposite operator="in" in2="blur" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter
            id="Rectangle_1284"
            x="164"
            y="0"
            width="90"
            height="90"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="3" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="3" result="blur-2" />
            <feFlood floodOpacity="0.161" />
            <feComposite operator="in" in2="blur-2" />
            <feComposite in="SourceGraphic" />
          </filter>
        </defs>
        <g
          id="Component_170"
          data-name="Component 170"
          transform="translate(9 6)"
        >
          <text
            id="You_answered"
            data-name="You answered"
            transform="translate(29 63)"
            fill="#9a9a9a"
            fontSize="13"
            fontFamily="Montserrat-SemiBold, Montserrat"
            fontWeight="600"
          >
            <tspan x="8.408" y="13">
              You answered
            </tspan>
          </text>
          <g
            id="Group_2343"
            data-name="Group 2343"
            transform="translate(-73 -262)"
          >
            <g
              transform="matrix(1, 0, 0, 1, 64, 256)"
              filter="url(#Rectangle_1222)"
            >
              <rect
                id="Rectangle_1222-2"
                data-name="Rectangle 1222"
                width="230"
                height="45"
                rx="22.5"
                transform="translate(9 19)"
                fill="#fff"
              />
            </g>
            <g
              id="Group_1729"
              data-name="Group 1729"
              transform="translate(-660.561 -870.561)"
            >
              <circle
                id="Ellipse_495"
                data-name="Ellipse 495"
                cx="12"
                cy="12"
                r="12"
                transform="translate(929.56 1156.56)"
                fill="#f2f2f2"
              />
              <path
                id="Path_1486"
                data-name="Path 1486"
                d="M18.222,10.011l-6.509,6.509L8.774,13.582a.893.893,0,0,0-1.262,1.262l3.57,3.57a.893.893,0,0,0,1.262,0l7.14-7.14a.893.893,0,0,0-1.262-1.262Z"
                transform="translate(928.144 1154.379)"
                fill="#fff"
              />
            </g>
            <text
              id="Security_Questions"
              data-name="Security Questions"
              transform="translate(124 288)"
              fill="#32a736"
              fontSize="14"
              fontFamily="Montserrat-Medium, Montserrat"
              fontWeight="500"
            >
              <tspan x="0" y="14">
                Security Questions
              </tspan>
            </text>
            <path
              id="Path_1544"
              data-name="Path 1544"
              d="M-367.532,22.1c-9.256,0-9.256,2.309-9.256,2.309V32.08a11.536,11.536,0,0,0,5.9,10.059l3.361,1.887,3.361-1.9a11.537,11.537,0,0,0,5.9-10.059V24.4S-358.854,22.1-367.532,22.1Zm-.141,18a.986.986,0,0,1-.986-.986.986.986,0,0,1,.986-.986.986.986,0,0,1,.986.986A.986.986,0,0,1-367.673,40.094Zm3-6.752c-1.114.711-1.845,1.226-1.845,1.938a.869.869,0,0,1-.87.868.869.869,0,0,1-.87-.868c0-1.718,1.491-2.65,2.652-3.4.6-.376,1.41-.9,1.41-1.226,0-2.129-.238-3.76-3.192-3.76-3.1,0-3.192,2.337-3.192,2.6a.869.869,0,0,1-.87.868.869.869,0,0,1-.87-.868c0-1.5,1.033-4.339,4.932-4.339,4.932,0,4.932,3.853,4.932,5.5C-362.459,31.937-363.561,32.631-364.675,33.342Z"
              transform="translate(470.945 266)"
              fill="#32a736"
              fillRule="evenodd"
            />
          </g>
          <g
            id="Group_2448"
            data-name="Group 2448"
            transform="translate(-46 -322)"
          >
            <g
              transform="matrix(1, 0, 0, 1, 37, 316)"
              filter="url(#Rectangle_1284)"
            >
              <rect
                id="Rectangle_1284-2"
                data-name="Rectangle 1284"
                width="72"
                height="72"
                rx="12"
                transform="translate(173 6)"
                fill="#32a736"
              />
            </g>
            <g
              id="Group_2337"
              data-name="Group 2337"
              transform="translate(228.439 331.659)"
            >
              <ellipse
                id="Ellipse_676"
                data-name="Ellipse 676"
                cx="18"
                cy="17.5"
                rx="18"
                ry="17.5"
                transform="translate(-0.439 0.342)"
                fill="#fff"
              />
              <g
                id="Ellipse_679"
                data-name="Ellipse 679"
                transform="translate(7.561 10.342)"
                fill="#32a736"
                stroke="#32a736"
                strokeWidth="1"
              >
                <circle cx="3" cy="3" r="3" stroke="none" />
                <circle cx="3" cy="3" r="2.5" fill="none" />
              </g>
              <g
                id="Ellipse_680"
                data-name="Ellipse 680"
                transform="translate(21.561 10.342)"
                fill="#32a736"
                stroke="#32a736"
                strokeWidth="1"
              >
                <circle cx="3" cy="3" r="3" stroke="none" />
                <circle cx="3" cy="3" r="2.5" fill="none" />
              </g>
              <g
                id="Component_158_232"
                data-name="Component 158 – 232"
                transform="translate(7.176 22.183)"
              >
                <path
                  id="Path_1853"
                  data-name="Path 1853"
                  d="M-13468.782-9602c2.481.343,16.612.526,19.279,0s-2.132,7.326-9.032,7.326S-13471.264-9602.344-13468.782-9602Z"
                  transform="translate(13469.365 9602.026)"
                  fill="#32a736"
                />
              </g>
            </g>
            <text
              id="I_m_good"
              data-name="I'm good"
              transform="translate(246 383)"
              fill="#fff"
              fontSize="10"
              fontFamily="Montserrat-Bold, Montserrat"
              fontWeight="700"
            >
              <tspan x="-22.96" y="0">
                I&apos;m good
              </tspan>
            </text>
          </g>
        </g>
      </svg>
    ),
    fail: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="254"
        height="90"
        viewBox="0 0 254 90"
      >
        <defs>
          <filter
            id="Rectangle_1222"
            x="0"
            y="13"
            width="248"
            height="63"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="3" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feFlood floodOpacity="0.09" />
            <feComposite operator="in" in2="blur" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter
            id="Rectangle_1284"
            x="164"
            y="0"
            width="90"
            height="90"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="3" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="3" result="blur-2" />
            <feFlood floodOpacity="0.161" />
            <feComposite operator="in" in2="blur-2" />
            <feComposite in="SourceGraphic" />
          </filter>
        </defs>
        <g
          id="Component_170_50"
          data-name="Component 170 – 50"
          transform="translate(9 6)"
        >
          <text
            id="You_answered"
            data-name="You answered"
            transform="translate(29 63)"
            fill="#9a9a9a"
            fontSize="13"
            fontFamily="Montserrat-SemiBold, Montserrat"
            fontWeight="600"
          >
            <tspan x="8.408" y="13">
              You answered
            </tspan>
          </text>
          <g
            id="Group_2343"
            data-name="Group 2343"
            transform="translate(-73 -262)"
          >
            <g
              transform="matrix(1, 0, 0, 1, 64, 256)"
              filter="url(#Rectangle_1222)"
            >
              <rect
                id="Rectangle_1222-2"
                data-name="Rectangle 1222"
                width="230"
                height="45"
                rx="22.5"
                transform="translate(9 19)"
                fill="#fff"
              />
            </g>
            <g
              id="Group_1729"
              data-name="Group 1729"
              transform="translate(-660.561 -870.561)"
            >
              <circle
                id="Ellipse_495"
                data-name="Ellipse 495"
                cx="12"
                cy="12"
                r="12"
                transform="translate(929.56 1156.56)"
                fill="#f2f2f2"
              />
              <path
                id="Path_1486"
                data-name="Path 1486"
                d="M18.222,10.011l-6.509,6.509L8.774,13.582a.893.893,0,0,0-1.262,1.262l3.57,3.57a.893.893,0,0,0,1.262,0l7.14-7.14a.893.893,0,0,0-1.262-1.262Z"
                transform="translate(928.144 1154.379)"
                fill="#fff"
              />
            </g>
            <text
              id="Security_Questions"
              data-name="Security Questions"
              transform="translate(124 288)"
              fill="#d95868"
              fontSize="14"
              fontFamily="Montserrat-Medium, Montserrat"
              fontWeight="500"
            >
              <tspan x="0" y="14">
                Security Questions
              </tspan>
            </text>
            <path
              id="Path_1544"
              data-name="Path 1544"
              d="M-367.532,22.1c-9.256,0-9.256,2.309-9.256,2.309V32.08a11.536,11.536,0,0,0,5.9,10.059l3.361,1.887,3.361-1.9a11.537,11.537,0,0,0,5.9-10.059V24.4S-358.854,22.1-367.532,22.1Zm-.141,18a.986.986,0,0,1-.986-.986.986.986,0,0,1,.986-.986.986.986,0,0,1,.986.986A.986.986,0,0,1-367.673,40.094Zm3-6.752c-1.114.711-1.845,1.226-1.845,1.938a.869.869,0,0,1-.87.868.869.869,0,0,1-.87-.868c0-1.718,1.491-2.65,2.652-3.4.6-.376,1.41-.9,1.41-1.226,0-2.129-.238-3.76-3.192-3.76-3.1,0-3.192,2.337-3.192,2.6a.869.869,0,0,1-.87.868.869.869,0,0,1-.87-.868c0-1.5,1.033-4.339,4.932-4.339,4.932,0,4.932,3.853,4.932,5.5C-362.459,31.937-363.561,32.631-364.675,33.342Z"
              transform="translate(470.945 266)"
              fill="#d95868"
              fillRule="evenodd"
            />
          </g>
          <g
            id="Group_2375"
            data-name="Group 2375"
            transform="translate(-71 -530)"
          >
            <g
              transform="matrix(1, 0, 0, 1, 62, 524)"
              filter="url(#Rectangle_1284)"
            >
              <rect
                id="Rectangle_1284-2"
                data-name="Rectangle 1284"
                width="72"
                height="72"
                rx="12"
                transform="translate(173 6)"
                fill="#d95868"
              />
            </g>
            <g
              id="Group_2337"
              data-name="Group 2337"
              transform="translate(253.327 539.818)"
            >
              <ellipse
                id="Ellipse_676"
                data-name="Ellipse 676"
                cx="18"
                cy="17.5"
                rx="18"
                ry="17.5"
                transform="translate(-0.327 0.182)"
                fill="#fff"
              />
              <g
                id="Ellipse_679"
                data-name="Ellipse 679"
                transform="translate(7.673 10.182)"
                fill="#d95868"
                stroke="#d95868"
                strokeWidth="1"
              >
                <circle cx="3" cy="3" r="3" stroke="none" />
                <circle cx="3" cy="3" r="2.5" fill="none" />
              </g>
              <g
                id="Ellipse_680"
                data-name="Ellipse 680"
                transform="translate(21.673 10.182)"
                fill="#d95868"
                stroke="#d95868"
                strokeWidth="1"
              >
                <circle cx="3" cy="3" r="3" stroke="none" />
                <circle cx="3" cy="3" r="2.5" fill="none" />
              </g>
              <g
                id="Component_158_213"
                data-name="Component 158 – 213"
                transform="translate(11.754 23.834)"
              >
                <path
                  id="Path_1851"
                  data-name="Path 1851"
                  d="M-13460.541-9599.252a88.012,88.012,0,0,1,11.865-1.8"
                  transform="translate(13460.541 9601.057)"
                  fill="none"
                  stroke="#d95868"
                  strokeLinecap="round"
                  strokeWidth="4"
                />
              </g>
            </g>
            <text
              id="I_m_not_good"
              data-name="I'm not good"
              transform="translate(270.535 589.813)"
              fill="#fff"
              fontSize="8"
              fontFamily="Montserrat-Bold, Montserrat"
              fontWeight="700"
            >
              <tspan x="-26.648" y="0">
                I&apos;m not good
              </tspan>
            </text>
          </g>
        </g>
      </svg>
    ),
  },
};
