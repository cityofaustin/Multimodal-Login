import React, { Component, Fragment } from 'react';
if (process.env.BROWSER) {
  import('./OptionSvg.scss');
}

export default class OptionSvg extends Component {
  static defaultProps = {
    svgType: 'meh',
    handleClick: () => {},
    isSelected: false,
  };

  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="128"
        height="128"
        viewBox="0 0 128 128"
        className={`${this.props.isSelected ? 'selected' : ''}`}
        onClick={this.props.handleClick}
      >
        {this.renderSvg()}
      </svg>
    );
  }

  renderSvg() {
    switch (this.props.svgType) {
      case 'meh':
        return meh();
      case 'no-phone':
        return noPhone;
      case 'meh-phone':
        return meh('-48.451', 'Once or more ');
      case 'meh-security':
        return meh('-43.303', "I'm not good");
      case 'meh-palm':
        return mehPalm;
      case 'smiley':
        return smiley();
      case 'smiley-phone':
        return smiley('-19.981', 'Never');
      case 'smiley-security':
        return smiley('-29.848', "I'm good");
      case 'smiley-palm':
        return smileyPalm;
      case 'none':
        return none;
      case 'tablet':
        return tablet;
      case 'computer':
        return computer;
      case 'phone':
        return phone;
      default:
        return <Fragment />;
    }
  }
}

const meh = (x = '-19.312', text = 'Often') => (
  <Fragment>
    <defs>
      <filter
        id="Rectangle_1284"
        x="0"
        y="0"
        width="128"
        height="128"
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
      id="Component_161_1"
      data-name="Component 161 – 1"
      transform="translate(9 6)"
    >
      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_1284)">
        <rect
          id="Rectangle_1284-2"
          data-name="Rectangle 1284"
          width="110"
          height="110"
          rx="26"
          transform="translate(9 6)"
          fill="#fff"
        />
      </g>
      <text
        id="Often"
        transform="translate(54.929 91.103)"
        fill="#ababab"
        fontSize="13"
        fontFamily="Montserrat-Bold, Montserrat"
        fontWeight="700"
      >
        <tspan x={x} y="0">
          {text}
        </tspan>
      </text>
      <g id="Group_2337" data-name="Group 2337" transform="translate(27 17)">
        <circle
          id="Ellipse_676"
          data-name="Ellipse 676"
          cx="27"
          cy="27"
          r="27"
          fill="#ababab"
        />
        <g
          id="Ellipse_679"
          data-name="Ellipse 679"
          transform="translate(12 16)"
          fill="#fff"
          stroke="#fff"
          strokeWidth="1"
        >
          <circle cx="4.5" cy="4.5" r="4.5" stroke="none" />
          <circle cx="4.5" cy="4.5" r="4" fill="none" />
        </g>
        <g
          id="Ellipse_680"
          data-name="Ellipse 680"
          transform="translate(33 16)"
          fill="#fff"
          stroke="#fff"
          strokeWidth="1"
        >
          <circle cx="4.5" cy="4.5" r="4.5" stroke="none" />
          <circle cx="4.5" cy="4.5" r="4" fill="none" />
        </g>
        <g
          id="Component_158_171"
          data-name="Component 158 – 171"
          transform="translate(17.957 36.414)"
        >
          <path
            id="Path_1851"
            data-name="Path 1851"
            d="M-13460.542-9598.3a134.452,134.452,0,0,1,18.129-2.759"
            transform="translate(13460.542 9601.058)"
            fill="none"
            stroke="#fbfdfd"
            strokeLinecap="round"
            strokeWidth="4"
          />
        </g>
      </g>
    </g>
  </Fragment>
);

const smiley = (x = '-21.443', text = 'Rarely') => (
  <Fragment>
    <defs>
      <filter
        id="Rectangle_1284"
        x="0"
        y="0"
        width="128"
        height="128"
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
      id="Component_161_14"
      data-name="Component 161 – 14"
      transform="translate(9 6)"
    >
      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_1284)">
        <rect
          id="Rectangle_1284-2"
          data-name="Rectangle 1284"
          width="110"
          height="110"
          rx="26"
          transform="translate(9 6)"
          fill="#fff"
        />
      </g>
      <g id="Group_2337" data-name="Group 2337" transform="translate(28 17)">
        <circle
          id="Ellipse_676"
          data-name="Ellipse 676"
          cx="27"
          cy="27"
          r="27"
          fill="#ababab"
        />
        <g
          id="Ellipse_679"
          data-name="Ellipse 679"
          transform="translate(12 16)"
          fill="#fff"
          stroke="#fff"
          strokeWidth="1"
        >
          <circle cx="4.5" cy="4.5" r="4.5" stroke="none" />
          <circle cx="4.5" cy="4.5" r="4" fill="none" />
        </g>
        <g
          id="Ellipse_680"
          data-name="Ellipse 680"
          transform="translate(33 16)"
          fill="#fff"
          stroke="#fff"
          strokeWidth="1"
        >
          <circle cx="4.5" cy="4.5" r="4.5" stroke="none" />
          <circle cx="4.5" cy="4.5" r="4" fill="none" />
        </g>
        <g
          id="Component_158_33"
          data-name="Component 158 – 33"
          transform="translate(11.134 33.647)"
        >
          <path
            id="Path_1853"
            data-name="Path 1853"
            d="M-13468.475-9601.988c3.791.523,25.38.8,29.454,0s-3.257,11.192-13.8,11.192S-13472.266-9602.511-13468.475-9601.988Z"
            transform="translate(13469.364 9602.026)"
            fill="#fff"
          />
        </g>
      </g>
      <text
        id="Rarely"
        transform="translate(54.929 91.103)"
        fill="#ababab"
        fontSize="13"
        fontFamily="Montserrat-Bold, Montserrat"
        fontWeight="700"
      >
        <tspan x={x} y="0">
          {text}
        </tspan>
      </text>
    </g>
  </Fragment>
);

const noPhone = (
  <Fragment>
    <defs>
      <filter
        id="Rectangle_1284"
        x="0"
        y="0"
        width="128"
        height="128"
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
      id="Component_161_37"
      data-name="Component 161 – 37"
      transform="translate(9 6)"
    >
      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_1284)">
        <rect
          id="Rectangle_1284-2"
          data-name="Rectangle 1284"
          width="110"
          height="110"
          rx="26"
          transform="translate(9 6)"
          fill="#fff"
        />
      </g>
      <text
        id="I_don_t_have_a_phone"
        data-name="I don't have
 a phone"
        transform="translate(54.929 81.103)"
        fill="#ababab"
        fontSize="13"
        fontFamily="Montserrat-Bold, Montserrat"
        fontWeight="700"
      >
        <tspan x="-39.708" y="0">
          I don&apos;t have
        </tspan>
        {/* <tspan x="-29.594" y="16" xml:space="preserve"> */}
        <tspan x="-29.594" y="16">
          a phone
        </tspan>
      </text>
      <g
        id="Group_2429"
        data-name="Group 2429"
        transform="translate(-109 -214)"
      >
        <g
          id="noun_Phone_1375627_1_"
          data-name="noun_Phone_1375627 (1)"
          transform="translate(151.207 229)"
        >
          <path
            id="Path_1909"
            data-name="Path 1909"
            d="M30.316,958.363a3.292,3.292,0,0,0-2.318.877,3.114,3.114,0,0,0-1,2.216v39.187a3.114,3.114,0,0,0,1,2.216,3.293,3.293,0,0,0,2.318.877H49.107a3.293,3.293,0,0,0,2.318-.877,3.114,3.114,0,0,0,1-2.216V961.455a3.113,3.113,0,0,0-1-2.217,3.293,3.293,0,0,0-2.319-.877H30.316Zm6.079,2.056h6.626a.516.516,0,1,1,0,1.031H36.395a.516.516,0,1,1,0-1.031Zm-7.19,3.094H50.211v33H29.2Zm10.5,34.55a2.066,2.066,0,1,1-2.211,2.056,2.141,2.141,0,0,1,2.216-2.054Z"
            transform="translate(-27 -958.36)"
            fill="#ababab"
            stroke="#fff"
            strokeWidth="0.2"
          />
        </g>
        <g
          id="Group_2388"
          data-name="Group 2388"
          transform="translate(154.293 242.067)"
        >
          <g
            id="Ellipse_688"
            data-name="Ellipse 688"
            transform="translate(1.706 0.933)"
            fill="#ababab"
            stroke="#707070"
            strokeWidth="1"
          >
            <ellipse cx="8" cy="8.5" rx="8" ry="8.5" stroke="none" />
            <ellipse cx="8" cy="8.5" rx="7.5" ry="8" fill="none" />
          </g>
          <path
            id="noun_Question_670398"
            d="M12.454,3a9.454,9.454,0,1,0,9.454,9.454A9.454,9.454,0,0,0,12.454,3Zm-.129,15.674a1.082,1.082,0,1,1,1.082-1.082A1.082,1.082,0,0,1,12.326,18.674Zm1.183-5.254s-.107.038-.107.1v.859a1.077,1.077,0,1,1-2.154,0v-.859a2.277,2.277,0,0,1,1.571-2.142,1.529,1.529,0,0,0,1.044-1.5,1.571,1.571,0,0,0-1.547-1.489,1.525,1.525,0,0,0-1.37.869A1.077,1.077,0,1,1,9,8.323,3.667,3.667,0,0,1,12.3,6.235h.022a3.717,3.717,0,0,1,3.693,3.579,3.671,3.671,0,0,1-2.5,3.6Z"
            transform="translate(-3 -3)"
            fill="#fff"
          />
        </g>
      </g>
    </g>
  </Fragment>
);

const mehPalm = (
  <Fragment>
    <defs>
      <filter
        id="Rectangle_1284"
        x="0"
        y="0"
        width="128"
        height="128"
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
      id="Component_161_1"
      data-name="Component 161 – 1"
      transform="translate(9 6)"
    >
      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_1284)">
        <rect
          id="Rectangle_1284-2"
          data-name="Rectangle 1284"
          width="110"
          height="110"
          rx="26"
          transform="translate(9 6)"
          fill="#fff"
        />
      </g>
      <text
        id="I_m_not_comfortable"
        data-name="I'm not
comfortable"
        transform="translate(54.929 83.103)"
        fill="#ababab"
        fontSize="13"
        fontFamily="Montserrat-Bold, Montserrat"
        fontWeight="700"
      >
        <tspan x="-25.74" y="0">
          I&apos;m not{' '}
        </tspan>
        <tspan x="-41.88" y="16">
          comfortable
        </tspan>
      </text>
      <g id="Group_2337" data-name="Group 2337" transform="translate(27 9)">
        <circle
          id="Ellipse_676"
          data-name="Ellipse 676"
          cx="27"
          cy="27"
          r="27"
          fill="#ababab"
        />
        <g
          id="Ellipse_679"
          data-name="Ellipse 679"
          transform="translate(12 16)"
          fill="#fff"
          stroke="#fff"
          strokeWidth="1"
        >
          <circle cx="4.5" cy="4.5" r="4.5" stroke="none" />
          <circle cx="4.5" cy="4.5" r="4" fill="none" />
        </g>
        <g
          id="Ellipse_680"
          data-name="Ellipse 680"
          transform="translate(33 16)"
          fill="#fff"
          stroke="#fff"
          strokeWidth="1"
        >
          <circle cx="4.5" cy="4.5" r="4.5" stroke="none" />
          <circle cx="4.5" cy="4.5" r="4" fill="none" />
        </g>
        <g
          id="Component_158_173"
          data-name="Component 158 – 173"
          transform="translate(17.957 36.414)"
        >
          <path
            id="Path_1851"
            data-name="Path 1851"
            d="M-13460.542-9598.3a134.452,134.452,0,0,1,18.129-2.759"
            transform="translate(13460.542 9601.058)"
            fill="none"
            stroke="#fbfdfd"
            strokeLinecap="round"
            strokeWidth="4"
          />
        </g>
      </g>
    </g>
  </Fragment>
);

const smileyPalm = (
  <Fragment>
    <defs>
      <filter
        id="Rectangle_1284"
        x="0"
        y="0"
        width="128"
        height="128"
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
      id="Component_161_14"
      data-name="Component 161 – 4"
      transform="translate(9 6)"
    >
      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_1284)">
        <rect
          id="Rectangle_1284-2"
          data-name="Rectangle 1284"
          width="110"
          height="110"
          rx="26"
          transform="translate(9 6)"
          fill="#fff"
        />
      </g>
      <g id="Group_2337" data-name="Group 2337" transform="translate(28 18)">
        <circle
          id="Ellipse_676"
          data-name="Ellipse 676"
          cx="27"
          cy="27"
          r="27"
          fill="#ababab"
        />
        <g
          id="Ellipse_679"
          data-name="Ellipse 679"
          transform="translate(12 16)"
          fill="#fff"
          stroke="#fff"
          strokeWidth="1"
        >
          <circle cx="4.5" cy="4.5" r="4.5" stroke="none" />
          <circle cx="4.5" cy="4.5" r="4" fill="none" />
        </g>
        <g
          id="Ellipse_680"
          data-name="Ellipse 680"
          transform="translate(33 16)"
          fill="#fff"
          stroke="#fff"
          strokeWidth="1"
        >
          <circle cx="4.5" cy="4.5" r="4.5" stroke="none" />
          <circle cx="4.5" cy="4.5" r="4" fill="none" />
        </g>
        <g
          id="Component_158_33"
          data-name="Component 158 – 33"
          transform="translate(11.134 33.647)"
        >
          <path
            id="Path_1853"
            data-name="Path 1853"
            d="M-13468.475-9601.988c3.791.523,25.38.8,29.454,0s-3.257,11.192-13.8,11.192S-13472.266-9602.511-13468.475-9601.988Z"
            transform="translate(13469.364 9602.026)"
            fill="#fff"
          />
        </g>
      </g>
      <text
        id="I_m_comfortable"
        data-name="I'm comfortable"
        transform="translate(54.929 88.103)"
        fill="#ababab"
        fontSize="11"
        fontFamily="Montserrat-Bold, Montserrat"
        fontWeight="700"
      >
        <tspan x="-45.832" y="0">
          I&apos;m comfortable
        </tspan>
      </text>
    </g>
  </Fragment>
);

const none = (
  <Fragment>
    <defs>
      <filter
        id="Rectangle_1284"
        x="0"
        y="0"
        width="128"
        height="128"
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
      id="Component_161_31"
      data-name="Component 161 – 31"
      transform="translate(9 6)"
    >
      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_1284)">
        <rect
          id="Rectangle_1284-2"
          data-name="Rectangle 1284"
          width="110"
          height="110"
          rx="26"
          transform="translate(9 6)"
          fill="#fff"
        />
      </g>
      <text
        id="I_don_t"
        data-name="I don't"
        transform="translate(54.929 89.103)"
        fill="#ababab"
        fontSize="13"
        fontFamily="Montserrat-Bold, Montserrat"
        fontWeight="700"
      >
        <tspan x="-21.541" y="0">
          I don&apos;t
        </tspan>
      </text>
      <path
        id="noun_Stop_1877355"
        d="M48.4,13.638a.879.879,0,0,0-.1-.127l-.415-.415a.837.837,0,0,0-.131-.107,24.912,24.912,0,0,0-34.461.322c-9.641,9.339-9.213,24.883-.311,34.474a.841.841,0,0,0,.1.118l.415.415a.889.889,0,0,0,.124.1A24.914,24.914,0,0,0,48.084,48.1C57.723,38.767,57.3,23.23,48.4,13.638Zm-33.719,1.6C22.907,6.465,36.74,6.519,45.57,14.17L14.15,45.589A22.528,22.528,0,0,1,14.685,15.239Zm16,37.737a22.868,22.868,0,0,1-14.882-5.728L47.231,15.823A22.257,22.257,0,0,1,30.689,52.976Z"
        transform="translate(23.816 9.771)"
        fill="#868686"
        stroke="#868686"
        strokeWidth="1"
      />
    </g>
  </Fragment>
);
const tablet = (
  <Fragment>
    <defs>
      <filter
        id="Rectangle_1284"
        x="0"
        y="0"
        width="128"
        height="128"
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
      id="Component_161_1a"
      data-name="Component 161 – 1"
      transform="translate(9 6)"
    >
      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_1284)">
        <rect
          id="Rectangle_1284-2"
          data-name="Rectangle 1284"
          width="110"
          height="110"
          rx="26"
          transform="translate(9 6)"
          fill="#fff"
        />
      </g>
      <text
        id="A_tablet"
        data-name="A tablet"
        transform="translate(54.929 89.103)"
        fill="#ababab"
        fontSize="13"
        fontFamily="Montserrat-Bold, Montserrat"
        fontWeight="700"
      >
        <tspan x="-27.027" y="0">
          A tablet
        </tspan>
      </text>
      <path
        id="noun_Tablet_867078"
        d="M47.989,2.167H15.423a3.135,3.135,0,0,0-3.05,3.214V50.625a3.135,3.135,0,0,0,3.05,3.214H47.989a3.135,3.135,0,0,0,3.049-3.214V5.381A3.135,3.135,0,0,0,47.989,2.167ZM29.783,4.215h4.138c.309,0,.559.188.559.419s-.251.419-.559.419H29.783c-.309,0-.559-.188-.559-.419S29.475,4.215,29.783,4.215ZM31.706,51.93a1.419,1.419,0,1,1,1.418-1.419A1.419,1.419,0,0,1,31.706,51.93Zm17.414-4.91H14.29V7.275H49.12V47.021Z"
        transform="translate(23.627 12.833)"
        fill="#868686"
      />
    </g>
  </Fragment>
);
const computer = (
  <Fragment>
    <defs>
      <filter
        id="Rectangle_1284"
        x="0"
        y="0"
        width="128"
        height="128"
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
      id="Component_161_3"
      data-name="Component 161 – 3"
      transform="translate(9 6)"
    >
      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_1284)">
        <rect
          id="Rectangle_1284-2"
          data-name="Rectangle 1284"
          width="110"
          height="110"
          rx="26"
          transform="translate(9 6)"
          fill="#fff"
        />
      </g>
      <text
        id="A_computer"
        data-name="A computer"
        transform="translate(54.929 89.103)"
        fill="#ababab"
        fontSize="13"
        fontFamily="Montserrat-Bold, Montserrat"
        fontWeight="700"
      >
        <tspan x="-40.261" y="0">
          A computer
        </tspan>
      </text>
      <g id="noun_Laptop_3067137" transform="translate(78 -179.5)">
        <path
          id="Path_1913"
          data-name="Path 1913"
          d="M9.217,486.874,4.333,474.838A1.345,1.345,0,0,0,3.1,474H-48.647a1.345,1.345,0,0,0-1.237.838l-4.9,12.037A3.114,3.114,0,0,0-55,488.008v.284a1.884,1.884,0,0,0,1.882,1.882H7.542a1.884,1.884,0,0,0,1.882-1.882v-.284A2.855,2.855,0,0,0,9.217,486.874Zm-26.38-.232H-28.414a.689.689,0,0,1-.683-.8l.631-3.892a.468.468,0,0,1,.451-.387h10.426a.448.448,0,0,1,.451.387l.631,3.892A.659.659,0,0,1-17.163,486.642Z"
          transform="translate(0 -243.48)"
          fill="#868686"
        />
        <path
          id="Path_1914"
          data-name="Path 1914"
          d="M-9.72,228.419H42.035a.578.578,0,0,0,.58-.58V195.08a.578.578,0,0,0-.58-.58H-9.72a.578.578,0,0,0-.58.58v32.759A.577.577,0,0,0-9.72,228.419Zm1.8-31.587H40.231v29.254H-7.916Z"
          transform="translate(-38.939 0)"
          fill="#868686"
        />
      </g>
    </g>
  </Fragment>
);
const phone = (
  <Fragment>
    <defs>
      <filter
        id="Rectangle_1284"
        x="0"
        y="0"
        width="128"
        height="128"
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
      id="Component_161_4"
      data-name="Component 161 – 4"
      transform="translate(9 6)"
    >
      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_1284)">
        <rect
          id="Rectangle_1284-2"
          data-name="Rectangle 1284"
          width="110"
          height="110"
          rx="26"
          transform="translate(9 6)"
          fill="#fff"
        />
      </g>
      <text
        id="A_phone"
        data-name="A phone"
        transform="translate(54.929 89.103)"
        fill="#ababab"
        fontSize="13"
        fontFamily="Montserrat-Bold, Montserrat"
        fontWeight="700"
      >
        <tspan x="-28.723" y="0">
          A phone
        </tspan>
      </text>
      <g
        id="Group_2376"
        data-name="Group 2376"
        transform="translate(10964 9507.255)"
      >
        <g
          id="noun_Phone_1375627_1_"
          data-name="noun_Phone_1375627 (1)"
          transform="translate(-10923 -9492.255)"
        >
          <path
            id="Path_1909"
            data-name="Path 1909"
            d="M30.691,958.363A3.61,3.61,0,0,0,27,961.9v44.861a3.61,3.61,0,0,0,3.691,3.541h20.92a3.61,3.61,0,0,0,3.691-3.541V961.9a3.61,3.61,0,0,0-3.691-3.542H30.691Zm6.768,2.354h7.377a.59.59,0,0,1,0,1.18H37.459a.59.59,0,0,1,0-1.18Zm-8,3.543H52.84v37.779H29.455Zm11.69,39.552a2.364,2.364,0,1,1-2.461,2.354,2.412,2.412,0,0,1,2.467-2.351Z"
            transform="translate(-27 -958.36)"
            fill="#868686"
            stroke="#fff"
            strokeWidth="0.2"
          />
        </g>
      </g>
    </g>
  </Fragment>
);
