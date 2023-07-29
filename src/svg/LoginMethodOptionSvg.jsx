import React, { Component, Fragment } from "react";

export default class LoginMethodOptionSvg extends Component {
  static defaultProps = {
    loginMethod: "PasswordLoginType",
    loginConfigure: "none", // add, configure
  };
  render() {
    const { loginMethod, loginConfigure } = { ...this.props };
    return renderLoginMethod(loginMethod, loginConfigure);
  }
}
const renderLoginConfigure = (loginConfigure) => {
  return (
    <Fragment>
      {loginConfigure === "add" && (
        <g
          id="Group_2598"
          data-name="Group 2598"
          transform="translate(-113 -239)"
        >
          <rect
            id="Rectangle_1368"
            data-name="Rectangle 1368"
            width="85"
            height="18"
            rx="9"
            transform="translate(147 354)"
            fill="#2362c7"
          />
          <text
            id="Add_Method"
            data-name="Add Method"
            transform="translate(156 367)"
            fill="#fff"
            fontSize="12"
            fontFamily="HelveticaNeue, Helvetica Neue"
          >
            <tspan x="0" y="0">
              Add Method
            </tspan>
          </text>
        </g>
      )}
      {loginConfigure === "configure" && (
        <g
          id="Group_2600"
          data-name="Group 2600"
          transform="translate(-105 -241)"
        >
          <rect
            id="Rectangle_1368"
            data-name="Rectangle 1368"
            width="70"
            height="18"
            rx="9"
            transform="translate(147 354)"
            fill="#2362c7"
          />
          <text
            id="Configure"
            transform="translate(156 367)"
            fill="#fff"
            fontSize="12"
            fontFamily="HelveticaNeue, Helvetica Neue"
          >
            <tspan x="0" y="0">
              Configure
            </tspan>
          </text>
        </g>
      )}
    </Fragment>
  );
};
const renderLoginMethod = (loginMethod, loginConfigure) => {
  const blue = "#2362c7";
  const grey = "#9a9a9a";
  switch (loginMethod) {
    case "SecurityQuestionsLoginType":
      if (loginConfigure === "none") {
        return (
          <svg
            id="Component_158_1"
            data-name="Component 158 – 1"
            xmlns="http://www.w3.org/2000/svg"
            width="153"
            height="153"
            viewBox="0 0 153 153"
          >
            <rect
              id="Rectangle_1279"
              data-name="Rectangle 1279"
              width="153"
              height="153"
              rx="76.5"
              fill="#fff"
            />
            <g
              id="Group_2299"
              data-name="Group 2299"
              transform="translate(37.279 36)"
            >
              <text
                id="Security_Questions"
                data-name="Security
      Questions"
                transform="translate(38.721 69.158)"
                fill="#2362c7"
                fontSize="17"
                fontFamily="Montserrat-Bold, Montserrat"
                fontWeight="700"
              >
                <tspan x="-38.938" y="0">
                  Security{" "}
                </tspan>
                <tspan x="-45.101" y="20">
                  Questions
                </tspan>
              </text>
              <g
                id="Group_2129"
                data-name="Group 2129"
                transform="translate(13.634 -11.603)"
              >
                <g
                  id="Group_2126"
                  data-name="Group 2126"
                  transform="translate(0)"
                >
                  <path
                    id="Path_1517"
                    data-name="Path 1517"
                    d="M-351.334,22.1c-25.454,0-25.454,6.348-25.454,6.348V49.55a31.724,31.724,0,0,0,16.211,27.66l9.243,5.19,9.243-5.237A31.726,31.726,0,0,0-325.88,49.5V28.444S-327.471,22.1-351.334,22.1Zm-.388,49.492a2.713,2.713,0,0,1-2.713-2.713,2.713,2.713,0,0,1,2.713-2.713,2.713,2.713,0,0,1,2.713,2.713A2.713,2.713,0,0,1-351.722,71.588Zm8.243-18.566c-3.064,1.956-5.074,3.372-5.074,5.329a2.39,2.39,0,0,1-2.393,2.386,2.39,2.39,0,0,1-2.393-2.386c0-4.725,4.1-7.286,7.292-9.355,1.643-1.034,3.878-2.465,3.878-3.372,0-5.855-.655-10.341-8.777-10.341-8.537,0-8.777,6.427-8.777,7.158a2.389,2.389,0,0,1-2.393,2.386,2.39,2.39,0,0,1-2.393-2.386c0-4.12,2.841-11.931,13.563-11.931,13.563,0,13.563,10.595,13.563,15.113C-337.383,49.157-340.415,51.065-343.479,53.022Z"
                    transform="translate(376.788 -22.096)"
                    fill="#2362c7"
                    fillRule="evenodd"
                  />
                </g>
              </g>
            </g>
          </svg>
        );
      } else {
        return (
          <svg
            id="Component_158_1"
            data-name="Component 158 – 1"
            xmlns="http://www.w3.org/2000/svg"
            width="153"
            height="153"
            viewBox="0 0 153 153"
          >
            <rect
              id="Rectangle_1279"
              data-name="Rectangle 1279"
              width="153"
              height="153"
              rx="76.5"
              fill="#fff"
            />
            <g
              id="Group_2299"
              data-name="Group 2299"
              transform="translate(38.279 27)"
            >
              <text
                id="Security_Questions"
                data-name="Security
Questions"
                transform="translate(38.721 69.158)"
                fill={loginConfigure === "configure" ? blue : grey}
                fontSize="17"
                fontFamily="Montserrat-Bold, Montserrat"
                fontWeight="700"
              >
                <tspan x="-38.938" y="0">
                  Security{" "}
                </tspan>
                <tspan x="-45.101" y="20">
                  Questions
                </tspan>
              </text>
              <g
                id="Group_2129"
                data-name="Group 2129"
                transform="translate(13.634 -11.603)"
              >
                <g
                  id="Group_2126"
                  data-name="Group 2126"
                  transform="translate(0)"
                >
                  <path
                    id="Path_1517"
                    data-name="Path 1517"
                    d="M-351.334,22.1c-25.454,0-25.454,6.348-25.454,6.348V49.55a31.724,31.724,0,0,0,16.211,27.66l9.243,5.19,9.243-5.237A31.726,31.726,0,0,0-325.88,49.5V28.444S-327.471,22.1-351.334,22.1Zm-.388,49.492a2.713,2.713,0,0,1-2.713-2.713,2.713,2.713,0,0,1,2.713-2.713,2.713,2.713,0,0,1,2.713,2.713A2.713,2.713,0,0,1-351.722,71.588Zm8.243-18.566c-3.064,1.956-5.074,3.372-5.074,5.329a2.39,2.39,0,0,1-2.393,2.386,2.39,2.39,0,0,1-2.393-2.386c0-4.725,4.1-7.286,7.292-9.355,1.643-1.034,3.878-2.465,3.878-3.372,0-5.855-.655-10.341-8.777-10.341-8.537,0-8.777,6.427-8.777,7.158a2.389,2.389,0,0,1-2.393,2.386,2.39,2.39,0,0,1-2.393-2.386c0-4.12,2.841-11.931,13.563-11.931,13.563,0,13.563,10.595,13.563,15.113C-337.383,49.157-340.415,51.065-343.479,53.022Z"
                    transform="translate(376.788 -22.096)"
                    fill={loginConfigure === "configure" ? blue : grey}
                    fillRule="evenodd"
                  />
                </g>
              </g>
            </g>
            <g transform="translate(0 7)">
              {renderLoginConfigure(loginConfigure)}
            </g>
          </svg>
        );
      }
    case "PasswordLoginType":
      if (loginConfigure === "none") {
        return (
          <svg
            id="Component_167_3"
            data-name="Component 167 – 3"
            xmlns="http://www.w3.org/2000/svg"
            width="153"
            height="153"
            viewBox="0 0 153 153"
          >
            <rect
              id="Rectangle_1279"
              data-name="Rectangle 1279"
              width="153"
              height="153"
              rx="76.5"
              fill="#fff"
            />
            <g
              id="Group_2299"
              data-name="Group 2299"
              transform="translate(37.279 30)"
            >
              <g
                id="Group_2302"
                data-name="Group 2302"
                transform="translate(1 12.994)"
              >
                <text
                  id="Password"
                  transform="translate(38.721 69.158)"
                  fill="#2362c7"
                  fontSize="17"
                  fontFamily="Montserrat-Bold, Montserrat"
                  fontWeight="700"
                >
                  <tspan x="-43.154" y="0">
                    Password
                  </tspan>
                </text>
                <g
                  id="Group_1798"
                  data-name="Group 1798"
                  transform="translate(-10.971 -1.43)"
                >
                  <path
                    id="Path_1510"
                    data-name="Path 1510"
                    d="M93.72,44.672H92.5v-5.9A9.88,9.88,0,0,0,82.629,28.9H79.067A9.88,9.88,0,0,0,69.2,38.771v5.9H67.976A4.343,4.343,0,0,0,63.6,49.048V67.364a4.343,4.343,0,0,0,4.376,4.376H93.72A4.343,4.343,0,0,0,98.1,67.364V49.048A4.408,4.408,0,0,0,93.72,44.672ZM83.748,64.006a.714.714,0,0,1-.712.916H78.66a.75.75,0,0,1-.712-.916l1.425-5.7a3.37,3.37,0,0,1-2.035-3.154,3.46,3.46,0,1,1,6.92,0,3.37,3.37,0,0,1-2.035,3.154ZM86.6,44.672H75.1v-5.9A3.973,3.973,0,0,1,79.067,34.8h3.561A3.973,3.973,0,0,1,86.6,38.771v5.9Z"
                    transform="translate(-1.426 -28.9)"
                    fill="#2362c7"
                  />
                  <path
                    id="Path_1511"
                    data-name="Path 1511"
                    d="M23.011,49.06a1.482,1.482,0,0,0-2.035-.509l-2.544,1.425V47.025a1.425,1.425,0,1,0-2.849,0v2.951l-2.544-1.425a1.483,1.483,0,1,0-1.526,2.544l2.544,1.425-2.544,1.425A1.482,1.482,0,0,0,11,55.979a1.329,1.329,0,0,0,1.221.712,1.886,1.886,0,0,0,.712-.2l2.544-1.425v2.951a1.425,1.425,0,0,0,2.849,0V55.063l2.544,1.425a1.886,1.886,0,0,0,.712.2,1.412,1.412,0,0,0,1.221-.712,1.482,1.482,0,0,0-.509-2.035L19.755,52.52,22.3,51.095A1.518,1.518,0,0,0,23.011,49.06Z"
                    transform="translate(-2.354 -28.606)"
                    fill="#2362c7"
                  />
                  <path
                    id="Path_1512"
                    data-name="Path 1512"
                    d="M40.511,49.06a1.482,1.482,0,0,0-2.035-.509l-2.544,1.425V47.025a1.425,1.425,0,1,0-2.849,0v2.951l-2.544-1.425a1.483,1.483,0,1,0-1.526,2.544l2.544,1.425-2.544,1.425a1.482,1.482,0,0,0-.509,2.035,1.329,1.329,0,0,0,1.221.712,1.886,1.886,0,0,0,.712-.2l2.544-1.425v2.951a1.425,1.425,0,0,0,2.849,0V55.063l2.544,1.425a1.887,1.887,0,0,0,.712.2,1.412,1.412,0,0,0,1.221-.712,1.482,1.482,0,0,0-.509-2.035L37.255,52.52,39.8,51.095A1.518,1.518,0,0,0,40.511,49.06Z"
                    transform="translate(-2.047 -28.606)"
                    fill="#2362c7"
                  />
                  <path
                    id="Path_1513"
                    data-name="Path 1513"
                    d="M58.011,49.06a1.482,1.482,0,0,0-2.035-.509l-2.544,1.425V47.025a1.425,1.425,0,0,0-2.849,0v2.951l-2.544-1.425a1.483,1.483,0,1,0-1.526,2.544l2.544,1.425-2.544,1.425A1.482,1.482,0,0,0,46,55.979a1.329,1.329,0,0,0,1.221.712,1.886,1.886,0,0,0,.712-.2l2.544-1.425v2.951a1.425,1.425,0,0,0,2.849,0V55.063l2.544,1.425a1.886,1.886,0,0,0,.712.2,1.412,1.412,0,0,0,1.221-.712,1.482,1.482,0,0,0-.509-2.035L54.755,52.52,57.3,51.095A1.518,1.518,0,0,0,58.011,49.06Z"
                    transform="translate(-1.739 -28.606)"
                    fill="#2362c7"
                  />
                  <path
                    id="Path_1514"
                    data-name="Path 1514"
                    d="M65.793,40.025A1.391,1.391,0,0,0,64.369,38.6H10.539A8.056,8.056,0,0,0,2.5,46.639V58.545a8.056,8.056,0,0,0,8.039,8.039H58.772a1.425,1.425,0,1,0,0-2.849H10.539a5.211,5.211,0,0,1-5.19-5.19V46.639a5.211,5.211,0,0,1,5.19-5.19h53.83A1.335,1.335,0,0,0,65.793,40.025Z"
                    transform="translate(-2.5 -28.729)"
                    fill="#2362c7"
                  />
                </g>
              </g>
            </g>
          </svg>
        );
      } else {
        return (
          <svg
            id="Component_167_3"
            data-name="Component 167 – 3"
            xmlns="http://www.w3.org/2000/svg"
            width="153"
            height="153"
            viewBox="0 0 153 153"
          >
            <rect
              id="Rectangle_1279"
              data-name="Rectangle 1279"
              width="153"
              height="153"
              rx="76.5"
              fill="#fff"
            />
            <g
              id="Group_2299"
              data-name="Group 2299"
              transform="translate(37.279 28)"
            >
              <g
                id="Group_2302"
                data-name="Group 2302"
                transform="translate(1 12.994)"
              >
                <text
                  id="Password"
                  transform="translate(38.721 63.158)"
                  fill={loginConfigure === "configure" ? blue : grey}
                  fontSize="17"
                  fontFamily="Montserrat-Bold, Montserrat"
                  fontWeight="700"
                >
                  <tspan x="-43.154" y="0">
                    Password
                  </tspan>
                </text>
                <g
                  id="Group_1798"
                  data-name="Group 1798"
                  transform="translate(-10.971 -1.43)"
                >
                  <path
                    id="Path_1510"
                    data-name="Path 1510"
                    d="M93.72,44.672H92.5v-5.9A9.88,9.88,0,0,0,82.629,28.9H79.067A9.88,9.88,0,0,0,69.2,38.771v5.9H67.976A4.343,4.343,0,0,0,63.6,49.048V67.364a4.343,4.343,0,0,0,4.376,4.376H93.72A4.343,4.343,0,0,0,98.1,67.364V49.048A4.408,4.408,0,0,0,93.72,44.672ZM83.748,64.006a.714.714,0,0,1-.712.916H78.66a.75.75,0,0,1-.712-.916l1.425-5.7a3.37,3.37,0,0,1-2.035-3.154,3.46,3.46,0,1,1,6.92,0,3.37,3.37,0,0,1-2.035,3.154ZM86.6,44.672H75.1v-5.9A3.973,3.973,0,0,1,79.067,34.8h3.561A3.973,3.973,0,0,1,86.6,38.771v5.9Z"
                    transform="translate(-1.426 -28.9)"
                    fill={loginConfigure === "configure" ? blue : grey}
                  />
                  <path
                    id="Path_1511"
                    data-name="Path 1511"
                    d="M23.011,49.06a1.482,1.482,0,0,0-2.035-.509l-2.544,1.425V47.025a1.425,1.425,0,1,0-2.849,0v2.951l-2.544-1.425a1.483,1.483,0,1,0-1.526,2.544l2.544,1.425-2.544,1.425A1.482,1.482,0,0,0,11,55.979a1.329,1.329,0,0,0,1.221.712,1.886,1.886,0,0,0,.712-.2l2.544-1.425v2.951a1.425,1.425,0,0,0,2.849,0V55.063l2.544,1.425a1.886,1.886,0,0,0,.712.2,1.412,1.412,0,0,0,1.221-.712,1.482,1.482,0,0,0-.509-2.035L19.755,52.52,22.3,51.095A1.518,1.518,0,0,0,23.011,49.06Z"
                    transform="translate(-2.354 -28.606)"
                    fill={loginConfigure === "configure" ? blue : grey}
                  />
                  <path
                    id="Path_1512"
                    data-name="Path 1512"
                    d="M40.511,49.06a1.482,1.482,0,0,0-2.035-.509l-2.544,1.425V47.025a1.425,1.425,0,1,0-2.849,0v2.951l-2.544-1.425a1.483,1.483,0,1,0-1.526,2.544l2.544,1.425-2.544,1.425a1.482,1.482,0,0,0-.509,2.035,1.329,1.329,0,0,0,1.221.712,1.886,1.886,0,0,0,.712-.2l2.544-1.425v2.951a1.425,1.425,0,0,0,2.849,0V55.063l2.544,1.425a1.887,1.887,0,0,0,.712.2,1.412,1.412,0,0,0,1.221-.712,1.482,1.482,0,0,0-.509-2.035L37.255,52.52,39.8,51.095A1.518,1.518,0,0,0,40.511,49.06Z"
                    transform="translate(-2.047 -28.606)"
                    fill={loginConfigure === "configure" ? blue : grey}
                  />
                  <path
                    id="Path_1513"
                    data-name="Path 1513"
                    d="M58.011,49.06a1.482,1.482,0,0,0-2.035-.509l-2.544,1.425V47.025a1.425,1.425,0,0,0-2.849,0v2.951l-2.544-1.425a1.483,1.483,0,1,0-1.526,2.544l2.544,1.425-2.544,1.425A1.482,1.482,0,0,0,46,55.979a1.329,1.329,0,0,0,1.221.712,1.886,1.886,0,0,0,.712-.2l2.544-1.425v2.951a1.425,1.425,0,0,0,2.849,0V55.063l2.544,1.425a1.886,1.886,0,0,0,.712.2,1.412,1.412,0,0,0,1.221-.712,1.482,1.482,0,0,0-.509-2.035L54.755,52.52,57.3,51.095A1.518,1.518,0,0,0,58.011,49.06Z"
                    transform="translate(-1.739 -28.606)"
                    fill={loginConfigure === "configure" ? blue : grey}
                  />
                  <path
                    id="Path_1514"
                    data-name="Path 1514"
                    d="M65.793,40.025A1.391,1.391,0,0,0,64.369,38.6H10.539A8.056,8.056,0,0,0,2.5,46.639V58.545a8.056,8.056,0,0,0,8.039,8.039H58.772a1.425,1.425,0,1,0,0-2.849H10.539a5.211,5.211,0,0,1-5.19-5.19V46.639a5.211,5.211,0,0,1,5.19-5.19h53.83A1.335,1.335,0,0,0,65.793,40.025Z"
                    transform="translate(-2.5 -28.729)"
                    fill={loginConfigure === "configure" ? blue : grey}
                  />
                </g>
              </g>
            </g>
            {renderLoginConfigure(loginConfigure)}
          </svg>
        );
      }
    case "TextLoginType":
      if (loginConfigure === "none") {
        return (
          <svg
            id="Component_168_3"
            data-name="Component 168 – 3"
            xmlns="http://www.w3.org/2000/svg"
            width="153"
            height="153"
            viewBox="0 0 153 153"
          >
            <rect
              id="Rectangle_1279"
              data-name="Rectangle 1279"
              width="153"
              height="153"
              rx="76.5"
              fill="#fff"
            />
            <g
              id="Group_2299"
              data-name="Group 2299"
              transform="translate(37.279 30)"
            >
              <g
                id="Group_2302"
                data-name="Group 2302"
                transform="translate(1 12.994)"
              >
                <text
                  id="Text_Login"
                  data-name="Text Login"
                  transform="translate(38.721 69.158)"
                  fill="#2362c7"
                  fontSize="17"
                  fontFamily="Montserrat-Bold, Montserrat"
                  fontWeight="700"
                >
                  <tspan x="-46.232" y="0">
                    Text Login
                  </tspan>
                </text>
              </g>
            </g>
            <g
              id="Group_2376"
              data-name="Group 2376"
              transform="translate(10980 9505.859)"
            >
              <g
                id="noun_Phone_1375627_1_"
                data-name="noun_Phone_1375627 (1)"
                transform="translate(-10921 -9480.255)"
              >
                <path
                  id="Path_1909"
                  data-name="Path 1909"
                  d="M31.505,958.363A4.406,4.406,0,0,0,27,962.685v54.748a4.405,4.405,0,0,0,4.505,4.321H57.037a4.405,4.405,0,0,0,4.505-4.321V962.685a4.405,4.405,0,0,0-4.505-4.323H31.505Zm8.26,2.873h9a.72.72,0,1,1,0,1.44h-9a.72.72,0,1,1,0-1.44ZM30,965.56H58.536v46.106H30Zm14.266,48.27a2.885,2.885,0,1,1-3,2.873,2.944,2.944,0,0,1,3.011-2.869Z"
                  transform="translate(-27 -958.361)"
                  fill="#2362c7"
                  stroke="#fff"
                  strokeWidth="0.2"
                />
              </g>
              <path
                id="Rectangle_1288"
                data-name="Rectangle 1288"
                d="M0,0H26.817V44.056H0Z"
                transform="translate(-10917.169 -9472.104)"
                fill="#2362c7"
                opacity="0.5"
              />
            </g>
          </svg>
        );
      } else {
        return (
          <svg
            id="Component_168_35"
            data-name="Component 168 – 35"
            xmlns="http://www.w3.org/2000/svg"
            width="153"
            height="153"
            viewBox="0 0 153 153"
          >
            <rect
              id="Rectangle_1279"
              data-name="Rectangle 1279"
              width="153"
              height="153"
              rx="76.5"
              fill="#fff"
            />
            <g
              id="Group_2299"
              data-name="Group 2299"
              transform="translate(37.279 26)"
            >
              <g
                id="Group_2302"
                data-name="Group 2302"
                transform="translate(1 12.994)"
              >
                <text
                  id="Text_Login"
                  data-name="Text Login"
                  transform="translate(38.721 69.158)"
                  fill={loginConfigure === "configure" ? blue : grey}
                  fontSize="17"
                  fontFamily="Montserrat-Bold, Montserrat"
                  fontWeight="700"
                >
                  <tspan x="-46.232" y="0">
                    Text Login
                  </tspan>
                </text>
              </g>
            </g>
            <g
              id="Group_2376"
              data-name="Group 2376"
              transform="translate(10980 9501.859)"
            >
              <g
                id="noun_Phone_1375627_1_"
                data-name="noun_Phone_1375627 (1)"
                transform="translate(-10921 -9480.255)"
              >
                <path
                  id="Path_1909"
                  data-name="Path 1909"
                  d="M31.505,958.363A4.406,4.406,0,0,0,27,962.685v54.748a4.405,4.405,0,0,0,4.505,4.321H57.037a4.405,4.405,0,0,0,4.505-4.321V962.685a4.405,4.405,0,0,0-4.505-4.323H31.505Zm8.26,2.873h9a.72.72,0,1,1,0,1.44h-9a.72.72,0,1,1,0-1.44ZM30,965.56H58.536v46.106H30Zm14.266,48.27a2.885,2.885,0,1,1-3,2.873,2.944,2.944,0,0,1,3.011-2.869Z"
                  transform="translate(-27 -958.361)"
                  fill={loginConfigure === "configure" ? blue : grey}
                  stroke="#fff"
                  strokeWidth="0.2"
                />
              </g>
              <path
                id="Rectangle_1288"
                data-name="Rectangle 1288"
                d="M0,0H26.817V44.056H0Z"
                transform="translate(-10917.169 -9472.104)"
                fill={loginConfigure === "configure" ? blue : grey}
                opacity="0.5"
              />
            </g>
            {renderLoginConfigure(loginConfigure)}
          </svg>
        );
      }
    case "SocialSupportType":
      if (loginConfigure === "none") {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="153"
            height="153"
            viewBox="0 0 394 394"
          >
            <g
              id="Component_169_1"
              data-name="Component 169 – 1"
              transform="translate(0 -0.235)"
            >
              <rect
                id="Rectangle_1279"
                data-name="Rectangle 1279"
                width="394"
                height="394"
                rx="195"
                transform="translate(0 0.235)"
                fill="#fff"
              />
              <g
                id="Group_2299"
                data-name="Group 2299"
                transform="translate(105.582 65.276)"
              >
                <g
                  id="Group_2302"
                  data-name="Group 2302"
                  transform="translate(0 0)"
                >
                  <text
                    id="Social_Support"
                    data-name="Social
        Support"
                    transform="translate(87 214.606)"
                    fill="#2362c7"
                    fontSize="41"
                    fontFamily="Montserrat-Bold, Montserrat"
                    fontWeight="700"
                  >
                    <tspan x="-69.413" y="0">
                      Social{" "}
                    </tspan>
                    <tspan x="-86.941" y="50">
                      Support
                    </tspan>
                  </text>
                  <g
                    id="Group_1773"
                    data-name="Group 1773"
                    transform="translate(31.933 0)"
                  >
                    <path
                      id="Union_69"
                      data-name="Union 69"
                      d="M26.155,157.975c-7.713,0-14.053-2.466-18.842-7.324C2.462,145.727,0,139.052,0,130.8c0-3.17.1-6.309.3-9.329a99.269,99.269,0,0,1,1.2-9.983,83.319,83.319,0,0,1,2.3-10.036A51.025,51.025,0,0,1,7.674,92.1a35.056,35.056,0,0,1,5.836-8.109,25.541,25.541,0,0,1,8.39-5.613,27.35,27.35,0,0,1,10.706-2.07c1.512,0,2.977.662,5.8,2.624,1.766,1.227,3.8,2.624,6.051,4.155a33.594,33.594,0,0,0,7.821,3.674,28.631,28.631,0,0,0,19.138,0,33.67,33.67,0,0,0,7.821-3.674c2.273-1.546,4.308-2.943,6.047-4.155,2.827-1.958,4.293-2.62,5.8-2.62a27.449,27.449,0,0,1,10.71,2.062,25.552,25.552,0,0,1,8.386,5.616,35.181,35.181,0,0,1,5.84,8.109,51.3,51.3,0,0,1,3.874,9.359,83.322,83.322,0,0,1,2.3,10.036c.592,3.543,1,6.9,1.2,9.979.2,3.008.3,6.151.3,9.332,0,8.248-2.462,14.926-7.313,19.846-4.793,4.859-11.133,7.324-18.842,7.324ZM35.664,64.95a38.08,38.08,0,0,1-10.46-26.9,38.077,38.077,0,0,1,10.46-26.9,34.179,34.179,0,0,1,50.5,0,38.07,38.07,0,0,1,10.463,26.9,38.066,38.066,0,0,1-10.463,26.9,34.179,34.179,0,0,1-50.5,0Z"
                      transform="translate(0 0)"
                      fill="#2362c7"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        );
      } else {
        return (
          <svg
            id="Component_169_3"
            data-name="Component 169 – 3"
            xmlns="http://www.w3.org/2000/svg"
            width="153"
            height="153"
            viewBox="0 0 153 153"
          >
            <rect
              id="Rectangle_1279"
              data-name="Rectangle 1279"
              width="153"
              height="153"
              rx="76.5"
              fill="#fff"
            />
            <g
              id="Group_2299"
              data-name="Group 2299"
              transform="translate(37.279 30)"
            >
              <g
                id="Group_2302"
                data-name="Group 2302"
                transform="translate(1 12.994)"
              >
                <text
                  id="Social_Support"
                  data-name="Social Support"
                  transform="translate(38.721 54.158)"
                  fill={loginConfigure === "configure" ? blue : grey}
                  fontSize="17"
                  fontFamily="Montserrat-Bold, Montserrat"
                  fontWeight="700"
                >
                  <tspan x="-64.829" y="0">
                    Social Support
                  </tspan>
                </text>
                <g
                  id="Group_1773"
                  data-name="Group 1773"
                  transform="translate(15.121 -28.646)"
                >
                  <path
                    id="Union_69"
                    data-name="Union 69"
                    d="M10.157,61.346A9.863,9.863,0,0,1,2.84,58.5,10.548,10.548,0,0,1,0,50.795c0-1.231.039-2.45.115-3.623A38.549,38.549,0,0,1,.581,43.3a32.355,32.355,0,0,1,.895-3.9,19.814,19.814,0,0,1,1.5-3.634,13.613,13.613,0,0,1,2.266-3.149A9.918,9.918,0,0,1,8.5,30.435a10.621,10.621,0,0,1,4.157-.8,4.074,4.074,0,0,1,2.253,1.019c.686.477,1.477,1.019,2.35,1.613A13.045,13.045,0,0,0,20.3,33.69a11.118,11.118,0,0,0,7.432,0,13.075,13.075,0,0,0,3.037-1.427c.883-.6,1.673-1.143,2.348-1.613a4.088,4.088,0,0,1,2.254-1.017,10.659,10.659,0,0,1,4.159.8,9.923,9.923,0,0,1,3.257,2.181,13.662,13.662,0,0,1,2.268,3.149,19.92,19.92,0,0,1,1.5,3.634,32.356,32.356,0,0,1,.895,3.9c.23,1.376.388,2.68.466,3.875.076,1.168.115,2.389.117,3.624A10.545,10.545,0,0,1,45.2,58.5a9.867,9.867,0,0,1-7.317,2.844Zm3.693-36.124A14.787,14.787,0,0,1,9.788,14.774,14.786,14.786,0,0,1,13.849,4.328a13.272,13.272,0,0,1,19.611,0,14.784,14.784,0,0,1,4.063,10.446A14.782,14.782,0,0,1,33.46,25.222a13.272,13.272,0,0,1-19.611,0Z"
                    transform="translate(0 0)"
                    fill={loginConfigure === "configure" ? blue : grey}
                  />
                </g>
              </g>
            </g>
            {renderLoginConfigure(loginConfigure)}
          </svg>
        );
      }

    case "PalmLoginType":
      if (loginConfigure === "none") {
        return (
          <svg
            id="Component_166_12"
            data-name="Component 166 – 12"
            xmlns="http://www.w3.org/2000/svg"
            width="153"
            height="153"
            viewBox="0 0 153 153"
          >
            <rect
              id="Rectangle_1279"
              data-name="Rectangle 1279"
              width="153"
              height="153"
              rx="76.5"
              fill="#fff"
            />
            <g
              id="Group_2299"
              data-name="Group 2299"
              transform="translate(37.279 30)"
            >
              <g
                id="Group_2302"
                data-name="Group 2302"
                transform="translate(1 12.994)"
              >
                <text
                  id="Palm_Login"
                  data-name="Palm Login"
                  transform="translate(38.721 69.158)"
                  fill="#2362c7"
                  fontSize="17"
                  fontFamily="Montserrat-Bold, Montserrat"
                  fontWeight="700"
                >
                  <tspan x="-50.269" y="0">
                    Palm Login
                  </tspan>
                </text>
                <path
                  id="Path_1504"
                  data-name="Path 1504"
                  d="M-506.9-76.7a3.072,3.072,0,0,0-3.068,3.068v14.657a1.5,1.5,0,0,1-1.5,1.5,1.5,1.5,0,0,1-1.5-1.5v-22.5a3.072,3.072,0,0,0-3.068-3.068,3.063,3.063,0,0,0-3.033,2.673v21.434a1.5,1.5,0,0,1-1.5,1.5,1.5,1.5,0,0,1-1.5-1.5v-20.7a1.513,1.513,0,0,1-.04-.334v-2.377a3.066,3.066,0,0,0-.9-2.174,3.06,3.06,0,0,0-2.168-.895,3.072,3.072,0,0,0-3.068,3.068v23.414a1.5,1.5,0,0,1-1.5,1.5,1.5,1.5,0,0,1-1.5-1.5V-79.41s0-.005,0-.008a3.045,3.045,0,0,0-.9-2.168,3.048,3.048,0,0,0-2.169-.905,3.076,3.076,0,0,0-3.073,3.073v15.455a6.033,6.033,0,0,1,1.12,3.489v8.051a1.793,1.793,0,0,0,1.325,1.712,16.778,16.778,0,0,1,7.235,4.246,17.232,17.232,0,0,1,4.742,9.27,1.5,1.5,0,0,1-1.235,1.73,1.5,1.5,0,0,1-.25.021,1.5,1.5,0,0,1-1.48-1.256,14.2,14.2,0,0,0-3.9-7.637,13.811,13.811,0,0,0-5.956-3.49,4.775,4.775,0,0,1-3.488-4.6v-8.051a2.993,2.993,0,0,0-.751-1.989l-.046-.053c-.8-.915-.93-1.032-1.615-1.032h-3.245l.007,18.061c0,11.7,7.908,20.187,18.8,20.187h2.423A19.976,19.976,0,0,0-509.641-31a19.057,19.057,0,0,0,5.812-13.72V-73.634a3.037,3.037,0,0,0-.9-2.168A3.033,3.033,0,0,0-506.9-76.7Z"
                  transform="translate(561.207 70.572)"
                  fill="#2362c7"
                />
              </g>
            </g>
          </svg>
        );
      } else {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="153"
            height="153"
            viewBox="0 0 153 153"
          >
            <g
              id="Group_2602"
              data-name="Group 2602"
              transform="translate(-104 -412)"
            >
              <rect
                id="Rectangle_1279"
                data-name="Rectangle 1279"
                width="153"
                height="153"
                rx="76.5"
                transform="translate(104 412)"
                fill="#fff"
              />
              <g
                id="Group_2299"
                data-name="Group 2299"
                transform="translate(142.279 440)"
              >
                <g
                  id="Group_2302"
                  data-name="Group 2302"
                  transform="translate(1 12.994)"
                >
                  <text
                    id="Palm_Login"
                    data-name="Palm Login"
                    transform="translate(38.721 67.158)"
                    fill={loginConfigure === "configure" ? blue : grey}
                    fontSize="17"
                    fontFamily="Montserrat-Bold, Montserrat"
                    fontWeight="700"
                  >
                    <tspan x="-50.269" y="0">
                      Palm Login
                    </tspan>
                  </text>
                  <path
                    id="Path_1504"
                    data-name="Path 1504"
                    d="M-506.9-76.7a3.072,3.072,0,0,0-3.068,3.068v14.657a1.5,1.5,0,0,1-1.5,1.5,1.5,1.5,0,0,1-1.5-1.5v-22.5a3.072,3.072,0,0,0-3.068-3.068,3.063,3.063,0,0,0-3.033,2.673v21.434a1.5,1.5,0,0,1-1.5,1.5,1.5,1.5,0,0,1-1.5-1.5v-20.7a1.513,1.513,0,0,1-.04-.334v-2.377a3.066,3.066,0,0,0-.9-2.174,3.06,3.06,0,0,0-2.168-.895,3.072,3.072,0,0,0-3.068,3.068v23.414a1.5,1.5,0,0,1-1.5,1.5,1.5,1.5,0,0,1-1.5-1.5V-79.41s0-.005,0-.008a3.045,3.045,0,0,0-.9-2.168,3.048,3.048,0,0,0-2.169-.905,3.076,3.076,0,0,0-3.073,3.073v15.455a6.033,6.033,0,0,1,1.12,3.489v8.051a1.793,1.793,0,0,0,1.325,1.712,16.778,16.778,0,0,1,7.235,4.246,17.232,17.232,0,0,1,4.742,9.27,1.5,1.5,0,0,1-1.235,1.73,1.5,1.5,0,0,1-.25.021,1.5,1.5,0,0,1-1.48-1.256,14.2,14.2,0,0,0-3.9-7.637,13.811,13.811,0,0,0-5.956-3.49,4.775,4.775,0,0,1-3.488-4.6v-8.051a2.993,2.993,0,0,0-.751-1.989l-.046-.053c-.8-.915-.93-1.032-1.615-1.032h-3.245l.007,18.061c0,11.7,7.908,20.187,18.8,20.187h2.423A19.976,19.976,0,0,0-509.641-31a19.057,19.057,0,0,0,5.812-13.72V-73.634a3.037,3.037,0,0,0-.9-2.168A3.033,3.033,0,0,0-506.9-76.7Z"
                    transform="translate(561.207 70.572)"
                    fill={loginConfigure === "configure" ? blue : grey}
                  />
                </g>
              </g>
              <g transform="translate(105 416)">{renderLoginConfigure(loginConfigure)}</g>
            </g>
          </svg>
        );
      }
  }
};
