import React, { Component, Fragment } from 'react';

export default class HelperType extends Component {
  constructor(props) {
    super(props);
  }

  renderType() {
    switch (this.props.helperType) {
      case 'Clinical Case Manager':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="37.267"
            height="31.58"
            viewBox="0 0 37.267 31.58"
          >
            <g id="noun_Health_2530427" transform="translate(-8 -32.374)">
              <path
                id="Path_1393"
                fill="#4ba9d9"
                fillRule="evenodd"
                d="M26.692 63.954s-11.286-7.171-16.341-13.99h7.994a.884.884 0 0 0 .823-.588l1.293-2.116 2.821 9.875a.98.98 0 0 0 1.881 0l4.115-14.46 3.409 10.463a.972.972 0 0 0 1.763.235l2.234-3.409h6.231c-5.055 6.819-16.223 13.99-16.223 13.99zM9.176 47.966A8.2 8.2 0 0 1 8 44.2c0-12.222 13.99-15.4 18.692-7.52 4.585-7.877 18.575-4.7 18.575 7.524a7.961 7.961 0 0 1-1.058 3.762h-7.994a1.19 1.19 0 0 0-.823.47l-1.529 2.234-3.644-11.521a.979.979 0 0 0-1.881 0l-4.115 14.342-2.586-8.817a.889.889 0 0 0-1.646-.235l-2.234 3.527z"
                data-name="Path 1393"
              />
            </g>
          </svg>
        );
      case 'Advocate':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="41.75"
            height="41.62"
            viewBox="0 0 41.75 41.62"
          >
            <g id="noun_Megaphone_3377065" transform="translate(-42.49 -43.49)">
              <path
                id="Path_1487"
                fill="#4ba9d9"
                fillRule="evenodd"
                d="M46.957 69.436l6.9-24.109a.784.784 0 0 0-.548-.986l-2.849-.822a.868.868 0 0 0-1.041.548l-6.9 24.109a.842.842 0 0 0 .548 1.041l2.849.822a.9.9 0 0 0 1.041-.603zM68.819 75.3l-2.356 8.164c-.822 2.9-5.26 1.644-4.383-1.26l2.137-7.342-3.617-.331a1.245 1.245 0 0 1-1.151-1.37l.164-2.356L70.9 71.846l-.219 2.3a1.245 1.245 0 0 1-1.37 1.151zm-18.794-7.782l5.37-18.849 22.191 11.178c-.055.11-.11.164-.11.274l-2.685 9.315a.7.7 0 0 0-.055.329zm31.506 3.836l2.685-9.26a.875.875 0 0 0-.6-1.041l-2.794-.822a.892.892 0 0 0-1.041.548l-2.685 9.315a.9.9 0 0 0 .6 1.041l2.794.822a.875.875 0 0 0 1.041-.604z"
                data-name="Path 1487"
              />
            </g>
          </svg>
        );
      case 'Case Manager':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45.604"
            height="39.444"
            viewBox="0 0 45.604 39.444"
          >
            <g id="noun_portfolio_787433" transform="translate(-1.9 -8.2)">
              <path
                id="Path_1488"
                d="M24.153 36.9a12.59 12.59 0 0 1 20.868-9.455V16.7a2.466 2.466 0 0 0-2.483-2.483h-9.646v-1.48A4.534 4.534 0 0 0 28.355 8.2H18.47a4.534 4.534 0 0 0-4.537 4.537v1.48h-9.55A2.466 2.466 0 0 0 1.9 16.7v27.028a2.466 2.466 0 0 0 2.483 2.483H28.26a12.723 12.723 0 0 1-4.107-9.311zM16.7 12.737a1.794 1.794 0 0 1 1.77-1.767h9.885a1.794 1.794 0 0 1 1.767 1.767v1.48H16.7z"
                fill="#4ba9d9"
                data-name="Path 1488"
              />
              <path
                id="Path_1489"
                d="M63.144 45.8a10.744 10.744 0 1 0 10.745 10.744A10.761 10.761 0 0 0 63.144 45.8zm6.829 16.475a3.305 3.305 0 0 0-3.295-2.865h-7.067a3.341 3.341 0 0 0-3.295 2.865 9.083 9.083 0 0 1-2.1-5.73 8.93 8.93 0 1 1 15.758 5.73z"
                fill="#4ba9d9"
                data-name="Path 1489"
                transform="translate(-26.385 -19.645)"
              />
              <path
                id="Path_1490"
                d="M70.72 55.5a3.82 3.82 0 1 0 3.82 3.82 3.831 3.831 0 0 0-3.82-3.82z"
                fill="#4ba9d9"
                data-name="Path 1490"
                transform="translate(-33.961 -24.713)"
              />
            </g>
          </svg>
        );
      case 'Intern':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="47.373"
            height="32.635"
            viewBox="0 0 47.373 32.635"
          >
            <g id="noun_Laptop_1778472" transform="translate(-5 -971.362)">
              <path
                id="Path_1491"
                fill="#4ba9d9"
                d="M10.79 971.362a2.626 2.626 0 0 0-2.632 2.632v23.686h41.057v-23.686a2.626 2.626 0 0 0-2.632-2.632zM5 998.733v2.105A3.151 3.151 0 0 0 8.158 1004h41.057a3.151 3.151 0 0 0 3.158-3.158v-2.105z"
                data-name="Path 1491"
              />
            </g>
          </svg>
        );
      case 'Volunteer':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28.512"
            height="49.69"
            viewBox="0 0 28.512 49.69"
          >
            <path
              id="noun_Hand_2082503"
              fill="#4ba9d9"
              d="M51.111 11.753a2.113 2.113 0 0 0-1.616-.628 2.257 2.257 0 0 0-2.337 2.336l-.048 10.546h-.719V8.889a2.524 2.524 0 0 0-.591-1.736 2.116 2.116 0 0 0-1.618-.628 2.256 2.256 0 0 0-2.337 2.334L41.8 22.693h-.719V7.116a2.524 2.524 0 0 0-.581-1.738 2.115 2.115 0 0 0-1.617-.628 2.256 2.256 0 0 0-2.337 2.336l-.053 17.644h-.718V10.8v-.1a2.478 2.478 0 0 0-.59-1.641 2.115 2.115 0 0 0-1.615-.629 2.256 2.256 0 0 0-2.337 2.336l-.047 18.764c-.151-.237-.318-.51-.476-.769-1.463-2.4-3.907-6.413-6.612-4.967a1.693 1.693 0 0 0-.857 1.2c-.808 3.883 8.219 15.558 9.305 16.947v12.5H48.36V42.062a19.134 19.134 0 0 1 1.423-4.368 32.9 32.9 0 0 0 1.909-6.133l.01-.046V13.491a2.536 2.536 0 0 0-.591-1.738z"
              transform="translate(-23.191 -4.75)"
            />
          </svg>
        );
      case 'Other':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="53.701"
            height="14.923"
            viewBox="0 0 53.701 14.923"
          >
            <g
              id="Group_1740"
              data-name="Group 1740"
              transform="translate(-2.5 -36.8)"
            >
              <circle
                id="Ellipse_496"
                data-name="Ellipse 496"
                cx="7.462"
                cy="7.462"
                r="7.462"
                transform="translate(21.889 36.8)"
                fill="#4ba9d9"
              />
              <circle
                id="Ellipse_497"
                data-name="Ellipse 497"
                cx="7.462"
                cy="7.462"
                r="7.462"
                transform="translate(2.5 36.8)"
                fill="#4ba9d9"
              />
              <circle
                id="Ellipse_498"
                data-name="Ellipse 498"
                cx="7.462"
                cy="7.462"
                r="7.462"
                transform="translate(41.278 36.8)"
                fill="#4ba9d9"
              />
            </g>
          </svg>
        );
      default:
        return <Fragment />;
    }
  }

  render() {
    return <Fragment>{this.renderType()}</Fragment>;
  }
}
