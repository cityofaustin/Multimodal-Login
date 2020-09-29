"use strict";var _interopRequireWildcard3 = require("@babel/runtime/helpers/interopRequireWildcard");var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));var _react = _interopRequireWildcard3(require("react"));
var _browserUtil = require("../../../util/browser-util");
var _GoBackSvg = _interopRequireDefault(require("../../svg/GoBackSvg"));
var _animationUtil = require("../../../util/animation-util");
if (process.env.BROWSER) {
  Promise.resolve().then(() => (0, _interopRequireWildcard2.default)("/public/css/1078ec8e0236fdbf37e3c90673de076c.scss"));
}

class OwnerEmail extends _react.Component {





  constructor(props) {
    super(props);
    const email =
    props.emailItem && props.emailItem.email ? props.emailItem.email : '';
    const username =
    props.emailItem && props.emailItem.username ?
    props.emailItem.username :
    '';
    const useEmail = props.emailItem ? !!props.emailItem.useEmail : true;
    this.state = {
      email,
      username,
      useEmail };

  }

  componentDidMount() {
    (0, _browserUtil.handleIOSBrowser)();
    (0, _animationUtil.animateIn)(this.refs.section);
  }

  render() {
    const { email, username, useEmail } = { ...this.state };
    return /*#__PURE__*/(
      _react.default.createElement("div", {
        ref: "section",
        id: "section-2-owner",
        className: (0, _animationUtil.getSectionClassName)(this.props.position) }, /*#__PURE__*/

      _react.default.createElement("div", { className: "section-contents" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "title" }, "Document Owner"), /*#__PURE__*/
      _react.default.createElement("div", { className: "subtitle" }, "Ok. Let's get started."), /*#__PURE__*/
      _react.default.createElement("div", { className: "card owner1" }, /*#__PURE__*/
      _react.default.createElement("div", null, /*#__PURE__*/
      _react.default.createElement("div", { className: "card-title" },
      useEmail ? /*#__PURE__*/
      _react.default.createElement(_react.Fragment, null, "What is your", /*#__PURE__*/

      _react.default.createElement("br", null), "e-mail account?") :



      'What username would you like to use to login?'),


      useEmail && /*#__PURE__*/
      _react.default.createElement("div", { className: "card-subtitle" }, "You can use this to sign and to recover your account in case you get locked out of it.")), /*#__PURE__*/





      _react.default.createElement("div", { className: "email-section" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "card-body" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "card-body-section" }, /*#__PURE__*/
      _react.default.createElement("div", null, useEmail ? 'E-mail' : 'Username'),
      useEmail ? /*#__PURE__*/
      _react.default.createElement("input", {
        type: "email",
        value: email,
        onChange: e => this.setState({ email: e.target.value }) }) : /*#__PURE__*/


      _react.default.createElement("input", {
        type: "text",
        value: username,
        onChange: (e) =>
        this.setState({ username: e.target.value }) })))), /*#__PURE__*/






      _react.default.createElement("div", { className: "submit-section" }, /*#__PURE__*/
      _react.default.createElement("input", {
        style: { width: '210px', marginTop: '27px' },
        type: "button",
        value: "Next",
        disabled:
        useEmail && email.length <= 0 ||
        !useEmail && username.length <= 0,

        onClick: () =>
        this.props.handleGoForward('owner', 3, {
          emailItem: { email, username, useEmail } }) }), /*#__PURE__*/



      _react.default.createElement("div", { onClick: () => this.setState({ useEmail: !useEmail }) },
      useEmail ? "I don't have an e-mail" : 'I rather use e-mail'))), /*#__PURE__*/



      _react.default.createElement(_GoBackSvg.default, {
        color: "#2362c7",
        goBack: () => this.props.handleGoBack('owner', 2) }))));




  }}exports.default = OwnerEmail;(0, _defineProperty2.default)(OwnerEmail, "defaultProps", { handleGoForward: () => {}, handleGoBack: () => {} });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BhZ2VzL3JlZ2lzdGVyL093bmVyRW1haWwuanN4Il0sIm5hbWVzIjpbInByb2Nlc3MiLCJlbnYiLCJCUk9XU0VSIiwiT3duZXJFbWFpbCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJlbWFpbCIsImVtYWlsSXRlbSIsInVzZXJuYW1lIiwidXNlRW1haWwiLCJzdGF0ZSIsImNvbXBvbmVudERpZE1vdW50IiwicmVmcyIsInNlY3Rpb24iLCJyZW5kZXIiLCJwb3NpdGlvbiIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJsZW5ndGgiLCJoYW5kbGVHb0ZvcndhcmQiLCJoYW5kbGVHb0JhY2siXSwibWFwcGluZ3MiOiJpZUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxPQUFoQixFQUF5QjtBQUN2QjtBQUNEOztBQUVjLE1BQU1DLFVBQU4sU0FBeUJDLGdCQUF6QixDQUFtQzs7Ozs7O0FBTWhEQyxFQUFBQSxXQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNqQixVQUFNQSxLQUFOO0FBQ0EsVUFBTUMsS0FBSztBQUNURCxJQUFBQSxLQUFLLENBQUNFLFNBQU4sSUFBbUJGLEtBQUssQ0FBQ0UsU0FBTixDQUFnQkQsS0FBbkMsR0FBMkNELEtBQUssQ0FBQ0UsU0FBTixDQUFnQkQsS0FBM0QsR0FBbUUsRUFEckU7QUFFQSxVQUFNRSxRQUFRO0FBQ1pILElBQUFBLEtBQUssQ0FBQ0UsU0FBTixJQUFtQkYsS0FBSyxDQUFDRSxTQUFOLENBQWdCQyxRQUFuQztBQUNJSCxJQUFBQSxLQUFLLENBQUNFLFNBQU4sQ0FBZ0JDLFFBRHBCO0FBRUksTUFITjtBQUlBLFVBQU1DLFFBQVEsR0FBR0osS0FBSyxDQUFDRSxTQUFOLEdBQWtCLENBQUMsQ0FBQ0YsS0FBSyxDQUFDRSxTQUFOLENBQWdCRSxRQUFwQyxHQUErQyxJ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QUwsQ0FBV21CLFlBQVgsQ0FBd0IsT0FBeEIsRUFBaUMsQ0FBakMsQ0FGaEIsR0FqRUYsQ0FMRixDQURGOzs7OztBQThFRCxHQTNHK0MsQywyREFBN0J0QixVLGtCQUNHLEVBQ3BCcUIsZUFBZSxFQUFFLE1BQU0sQ0FBRSxDQURMLEVBRXBCQyxZQUFZLEVBQUUsTUFBTSxDQUFFLENBRkYsRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaGFuZGxlSU9TQnJvd3NlciB9IGZyb20gJy4uLy4uLy4uL3V0aWwvYnJvd3Nlci11dGlsJztcbmltcG9ydCBHb0JhY2tTdmcgZnJvbSAnLi4vLi4vc3ZnL0dvQmFja1N2Zyc7XG5pbXBvcnQgeyBhbmltYXRlSW4sIGdldFNlY3Rpb25DbGFzc05hbWUgfSBmcm9tICcuLi8uLi8uLi91dGlsL2FuaW1hdGlvbi11dGlsJztcbmlmIChwcm9jZXNzLmVudi5CUk9XU0VSKSB7XG4gIGltcG9ydCgnLi9Pd25lckVtYWlsLnNjc3MnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3duZXJFbWFpbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaGFuZGxlR29Gb3J3YXJkOiAoKSA9PiB7fSxcbiAgICBoYW5kbGVHb0JhY2s6ICgpID0+IHt9LFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IGVtYWlsID1cbiAgICAgIHByb3BzLmVtYWlsSXRlbSAmJiBwcm9wcy5lbWFpbEl0ZW0uZW1haWwgPyBwcm9wcy5lbWFpbEl0ZW0uZW1haWwgOiAnJztcbiAgICBjb25zdCB1c2VybmFtZSA9XG4gICAgICBwcm9wcy5lbWFpbEl0ZW0gJiYgcHJvcHMuZW1haWxJdGVtLnVzZXJuYW1lXG4gICAgICAgID8gcHJvcHMuZW1haWxJdGVtLnVzZXJuYW1lXG4gICAgICAgIDogJyc7XG4gICAgY29uc3QgdXNlRW1haWwgPSBwcm9wcy5lbWFpbEl0ZW0gPyAhIXByb3BzLmVtYWlsSXRlbS51c2VFbWFpbCA6IHRydWU7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVtYWlsLFxuICAgICAgdXNlcm5hbWUsXG4gICAgICB1c2VFbWFpbCxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaGFuZGxlSU9TQnJvd3NlcigpO1xuICAgIGFuaW1hdGVJbih0aGlzLnJlZnMuc2VjdGlvbik7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBlbWFpbCwgdXNlcm5hbWUsIHVzZUVtYWlsIH0gPSB7IC4uLnRoaXMuc3RhdGUgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICByZWY9XCJzZWN0aW9uXCJcbiAgICAgICAgaWQ9XCJzZWN0aW9uLTItb3duZXJcIlxuICAgICAgICBjbGFzc05hbWU9e2dldFNlY3Rpb25DbGFzc05hbWUodGhpcy5wcm9wcy5wb3NpdGlvbil9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1jb250ZW50c1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5Eb2N1bWVudCBPd25lcjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5Pay4gTGV0J3MgZ2V0IHN0YXJ0ZWQuPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIG93bmVyMVwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAge3VzZUVtYWlsID8gKFxuICAgICAgICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICBXaGF0IGlzIHlvdXJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIGUtbWFpbCBhY2NvdW50P1xuICAgICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgJ1doYXQgdXNlcm5hbWUgd291bGQgeW91IGxpa2UgdG8gdXNlIHRvIGxvZ2luPydcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAge3VzZUVtYWlsICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtc3VidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgIFlvdSBjYW4gdXNlIHRoaXMgdG8gc2lnbiBhbmQgdG8gcmVjb3ZlciB5b3VyIGFjY291bnQgaW4gY2FzZVxuICAgICAgICAgICAgICAgICAgeW91IGdldCBsb2NrZWQgb3V0IG9mIGl0LlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtYWlsLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keS1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2Pnt1c2VFbWFpbCA/ICdFLW1haWwnIDogJ1VzZXJuYW1lJ308L2Rpdj5cbiAgICAgICAgICAgICAgICAgIHt1c2VFbWFpbCA/IChcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXNlcm5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VibWl0LXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcyMTBweCcsIG1hcmdpblRvcDogJzI3cHgnIH19XG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJOZXh0XCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17XG4gICAgICAgICAgICAgICAgICAodXNlRW1haWwgJiYgZW1haWwubGVuZ3RoIDw9IDApIHx8XG4gICAgICAgICAgICAgICAgICAoIXVzZUVtYWlsICYmIHVzZXJuYW1lLmxlbmd0aCA8PSAwKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oYW5kbGVHb0ZvcndhcmQoJ293bmVyJywgMywge1xuICAgICAgICAgICAgICAgICAgICBlbWFpbEl0ZW06IHsgZW1haWwsIHVzZXJuYW1lLCB1c2VFbWFpbCB9LFxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHVzZUVtYWlsOiAhdXNlRW1haWwgfSl9PlxuICAgICAgICAgICAgICAgIHt1c2VFbWFpbCA/IFwiSSBkb24ndCBoYXZlIGFuIGUtbWFpbFwiIDogJ0kgcmF0aGVyIHVzZSBlLW1haWwnfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxHb0JhY2tTdmdcbiAgICAgICAgICAgIGNvbG9yPVwiIzIzNjJjN1wiXG4gICAgICAgICAgICBnb0JhY2s9eygpID0+IHRoaXMucHJvcHMuaGFuZGxlR29CYWNrKCdvd25lcicsIDIpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19