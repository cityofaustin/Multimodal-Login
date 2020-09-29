"use strict";var _interopRequireWildcard3 = require("@babel/runtime/helpers/interopRequireWildcard");var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));var _react = _interopRequireWildcard3(require("react"));
var _browserUtil = require("../../../../util/browser-util");
var _GoBackSvg = _interopRequireDefault(require("../../../svg/GoBackSvg"));

var _OptionSvg = _interopRequireDefault(require("../../../svg/OptionSvg"));
var _animationUtil = require("../../../../util/animation-util"); // import PasswordSvg from '../../../svg/PasswordSvg';



if (process.env.BROWSER) {
  Promise.resolve().then(() => (0, _interopRequireWildcard2.default)("/public/css/b31054288198bc8a5754022b6fdf8cc5.scss"));
}

class OwnerCameraQ extends _react.Component {





  constructor(props) {
    super(props);(0, _defineProperty2.default)(this, "handleOptionSelect",


















    option => {
      const { options } = { ...this.state };
      let { selectedOptions } = { ...this.state };
      if (option === options[0] && selectedOptions.indexOf(option) < 0) {
        // select none
        selectedOptions = [options[0]];
      } else if (selectedOptions.indexOf(option) > -1) {
        // de select
        selectedOptions.splice(selectedOptions.indexOf(option), 1);
      } else {
        // select
        if (selectedOptions.indexOf(options[0]) > -1) {
          // remove select none if selected
          selectedOptions.splice(selectedOptions.indexOf(options[0]));
        }
        selectedOptions.push(option);
      }
      this.setState({ selectedOptions });
    });const { devicesWithCamera } = props.questions;const _selectedOptions = devicesWithCamera ? devicesWithCamera : [];this.state = { options: ['cameraAccessNone', 'cameraAccessTablet', 'cameraAccessComputer', 'cameraAccessPhone'], selectedOptions: _selectedOptions };}componentDidMount() {(0, _browserUtil.handleIOSBrowser)();(0, _animationUtil.animateIn)(this.refs.section);}

  render() {
    const { options, selectedOptions } = { ...this.state };
    return /*#__PURE__*/(
      _react.default.createElement("div", {
        ref: "section",
        id: "section-5-owner",
        className: (0, _animationUtil.getSectionClassName)(this.props.position) }, /*#__PURE__*/

      _react.default.createElement("div", { className: "section-contents" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "title" }, "Document Owner"), /*#__PURE__*/
      _react.default.createElement("div", { className: "subtitle" }, "More ways to login"), /*#__PURE__*/
      _react.default.createElement("div", { className: "card owner1" }, /*#__PURE__*/
      _react.default.createElement("div", null, /*#__PURE__*/
      _react.default.createElement("div", { className: "card-title" }, "Do you have access to a device with a working camera?")), /*#__PURE__*/



      _react.default.createElement("div", { className: "options" },
      options.map(option => {
        let svgType = option.substring(12, option.length).toLowerCase();
        return /*#__PURE__*/(
          _react.default.createElement(_OptionSvg.default, {
            key: option,
            svgType: svgType,
            handleClick: () => this.handleOptionSelect(option),
            isSelected: selectedOptions.indexOf(option) > -1 }));


      })), /*#__PURE__*/

      _react.default.createElement("div", { className: "section-container" }, /*#__PURE__*/
      _react.default.createElement("input", {
        style: { width: '210px' },
        type: "button",
        value: "Next",
        onClick: () => {
          const q = this.props.questions;
          q.devicesWithCamera = selectedOptions;
          if (q.devicesWithCamera.indexOf('cameraAccessNone') > -1) {
            q.scanningPalm = undefined;
          }
          this.props.handleGoForward('owner', 6, { questions: q });
        },
        disabled: selectedOptions.length < 1 }))), /*#__PURE__*/



      _react.default.createElement(_GoBackSvg.default, {
        color: "#2362c7",
        goBack: () => this.props.handleGoBack('owner', 5) }))));




  }}exports.default = OwnerCameraQ;(0, _defineProperty2.default)(OwnerCameraQ, "defaultProps", { handleGoForward: () => {}, handleGoBack: () => {} });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BhZ2VzL3JlZ2lzdGVyL3F1aXovT3duZXJDYW1lcmFRLmpzeCJdLCJuYW1lcyI6WyJwcm9jZXNzIiwiZW52IiwiQlJPV1NFUiIsIk93bmVyQ2FtZXJhUSIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJvcHRpb24iLCJvcHRpb25zIiwic3RhdGUiLCJzZWxlY3RlZE9wdGlvbnMiLCJpbmRleE9mIiwic3BsaWNlIiwicHVzaCIsInNldFN0YXRlIiwiZGV2aWNlc1dpdGhDYW1lcmEiLCJxdWVzdGlvbnMiLCJjb21wb25lbnREaWRNb3VudCIsInJlZnMiLCJzZWN0aW9uIiwicmVuZGVyIiwicG9zaXRpb24iLCJtYXAiLCJzdmdUeXBlIiwic3Vic3RyaW5nIiwibGVuZ3RoIiwidG9Mb3dlckNhc2UiLCJoYW5kbGVPcHRpb25TZWxlY3QiLCJ3aWR0aCIsInEiLCJzY2FubmluZ1BhbG0iLCJ1bmRlZmluZWQiLCJoYW5kbGVHb0ZvcndhcmQiLCJoYW5kbGVHb0JhY2siXSwibWFwcGluZ3MiOiJpZUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnRSxDQUZBOzs7O0FBTUEsSUFBSUEsT0FBTyxDQUFDQyxHQUFSLENBQVlDLE9BQWhCLEVBQXlCO0FBQ3ZCO0FBQ0Q7O0FBRWMsTUFBTUMsWUFBTixTQUEyQkMsZ0JBQTNCLENBQXFDOzs7Ozs7QUFNbERDLEVBQUFBLFdBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU4sRUFEaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkdDLElBQUFBLE1BQUQsSUFBWTtBQUMvQixZQUFNLEVBQUVDLE9BQUYsS0FBYyxFQUFFLEdBQUcsS0FBS0MsS0FBVixFQUFwQjtBQUNBLFVBQUksRUFBRUMsZUFBRixLQUFzQixFQUFFLEdBQUcsS0FBS0QsS0FBVixFQUExQjtBQUNBLFVBQUlGLE1BQU0sS0FBS0MsT0FBTyxDQUFDLENBQUQsQ0FBbEIsSUFBeUJFLGVB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LENBQVdVLFNBQXJCO0FBQ0FhLFVBQUFBLENBQUMsQ0FBQ2QsaUJBQUYsR0FBc0JMLGVBQXRCO0FBQ0EsY0FBSW1CLENBQUMsQ0FBQ2QsaUJBQUYsQ0FBb0JKLE9BQXBCLENBQTRCLGtCQUE1QixJQUFrRCxDQUFDLENBQXZELEVBQTBEO0FBQ3hEa0IsWUFBQUEsQ0FBQyxDQUFDQyxZQUFGLEdBQWlCQyxTQUFqQjtBQUNEO0FBQ0QsZUFBS3pCLEtBQUwsQ0FBVzBCLGVBQVgsQ0FBMkIsT0FBM0IsRUFBb0MsQ0FBcEMsRUFBdUMsRUFBRWhCLFNBQVMsRUFBRWEsQ0FBYixFQUF2QztBQUNELFNBWEg7QUFZRSxRQUFBLFFBQVEsRUFBRW5CLGVBQWUsQ0FBQ2UsTUFBaEIsR0FBeUIsQ0FackMsR0FERixDQW5CRixDQUhGOzs7O0FBdUNFLG1DQUFDLGtCQUFEO0FBQ0UsUUFBQSxLQUFLLEVBQUMsU0FEUjtBQUVFLFFBQUEsTUFBTSxFQUFFLE1BQU0sS0FBS25CLEtBQUwsQ0FBVzJCLFlBQVgsQ0FBd0IsT0FBeEIsRUFBaUMsQ0FBakMsQ0FGaEIsR0F2Q0YsQ0FMRixDQURGOzs7OztBQW9ERCxHQXBHaUQsQyw2REFBL0I5QixZLGtCQUNHLEVBQ3BCNkIsZUFBZSxFQUFFLE1BQU0sQ0FBRSxDQURMLEVBRXBCQyxZQUFZLEVBQUUsTUFBTSxDQUFFLENBRkYsRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBoYW5kbGVJT1NCcm93c2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbC9icm93c2VyLXV0aWwnO1xuaW1wb3J0IEdvQmFja1N2ZyBmcm9tICcuLi8uLi8uLi9zdmcvR29CYWNrU3ZnJztcbi8vIGltcG9ydCBQYXNzd29yZFN2ZyBmcm9tICcuLi8uLi8uLi9zdmcvUGFzc3dvcmRTdmcnO1xuaW1wb3J0IE9wdGlvblN2ZyBmcm9tICcuLi8uLi8uLi9zdmcvT3B0aW9uU3ZnJztcbmltcG9ydCB7XG4gIGFuaW1hdGVJbixcbiAgZ2V0U2VjdGlvbkNsYXNzTmFtZSxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbC9hbmltYXRpb24tdXRpbCc7XG5pZiAocHJvY2Vzcy5lbnYuQlJPV1NFUikge1xuICBpbXBvcnQoJy4vT3duZXJDYW1lcmFRLnNjc3MnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3duZXJDYW1lcmFRIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBoYW5kbGVHb0ZvcndhcmQ6ICgpID0+IHt9LFxuICAgIGhhbmRsZUdvQmFjazogKCkgPT4ge30sXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3QgeyBkZXZpY2VzV2l0aENhbWVyYSB9ID0gcHJvcHMucXVlc3Rpb25zO1xuICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9ucyA9IGRldmljZXNXaXRoQ2FtZXJhID8gZGV2aWNlc1dpdGhDYW1lcmEgOiBbXTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgb3B0aW9uczogW1xuICAgICAgICAnY2FtZXJhQWNjZXNzTm9uZScsXG4gICAgICAgICdjYW1lcmFBY2Nlc3NUYWJsZXQnLFxuICAgICAgICAnY2FtZXJhQWNjZXNzQ29tcHV0ZXInLFxuICAgICAgICAnY2FtZXJhQWNjZXNzUGhvbmUnLFxuICAgICAgXSxcbiAgICAgIHNlbGVjdGVkT3B0aW9ucyxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaGFuZGxlSU9TQnJvd3NlcigpO1xuICAgIGFuaW1hdGVJbih0aGlzLnJlZnMuc2VjdGlvbik7XG4gIH1cblxuICBoYW5kbGVPcHRpb25TZWxlY3QgPSAob3B0aW9uKSA9PiB7XG4gICAgY29uc3QgeyBvcHRpb25zIH0gPSB7IC4uLnRoaXMuc3RhdGUgfTtcbiAgICBsZXQgeyBzZWxlY3RlZE9wdGlvbnMgfSA9IHsgLi4udGhpcy5zdGF0ZSB9O1xuICAgIGlmIChvcHRpb24gPT09IG9wdGlvbnNbMF0gJiYgc2VsZWN0ZWRPcHRpb25zLmluZGV4T2Yob3B0aW9uKSA8IDApIHtcbiAgICAgIC8vIHNlbGVjdCBub25lXG4gICAgICBzZWxlY3RlZE9wdGlvbnMgPSBbb3B0aW9uc1swXV07XG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZE9wdGlvbnMuaW5kZXhPZihvcHRpb24pID4gLTEpIHtcbiAgICAgIC8vIGRlIHNlbGVjdFxuICAgICAgc2VsZWN0ZWRPcHRpb25zLnNwbGljZShzZWxlY3RlZE9wdGlvbnMuaW5kZXhPZihvcHRpb24pLCAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gc2VsZWN0XG4gICAgICBpZiAoc2VsZWN0ZWRPcHRpb25zLmluZGV4T2Yob3B0aW9uc1swXSkgPiAtMSkge1xuICAgICAgICAvLyByZW1vdmUgc2VsZWN0IG5vbmUgaWYgc2VsZWN0ZWRcbiAgICAgICAgc2VsZWN0ZWRPcHRpb25zLnNwbGljZShzZWxlY3RlZE9wdGlvbnMuaW5kZXhPZihvcHRpb25zWzBdKSk7XG4gICAgICB9XG4gICAgICBzZWxlY3RlZE9wdGlvbnMucHVzaChvcHRpb24pO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRPcHRpb25zIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG9wdGlvbnMsIHNlbGVjdGVkT3B0aW9ucyB9ID0geyAuLi50aGlzLnN0YXRlIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgcmVmPVwic2VjdGlvblwiXG4gICAgICAgIGlkPVwic2VjdGlvbi01LW93bmVyXCJcbiAgICAgICAgY2xhc3NOYW1lPXtnZXRTZWN0aW9uQ2xhc3NOYW1lKHRoaXMucHJvcHMucG9zaXRpb24pfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tY29udGVudHNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+RG9jdW1lbnQgT3duZXI8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+TW9yZSB3YXlzIHRvIGxvZ2luPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIG93bmVyMVwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgRG8geW91IGhhdmUgYWNjZXNzIHRvIGEgZGV2aWNlIHdpdGggYSB3b3JraW5nIGNhbWVyYT9cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uc1wiPlxuICAgICAgICAgICAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzdmdUeXBlID0gb3B0aW9uLnN1YnN0cmluZygxMiwgb3B0aW9uLmxlbmd0aCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPE9wdGlvblN2Z1xuICAgICAgICAgICAgICAgICAgICBrZXk9e29wdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgc3ZnVHlwZT17c3ZnVHlwZX1cbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlT3B0aW9uU2VsZWN0KG9wdGlvbil9XG4gICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQ9e3NlbGVjdGVkT3B0aW9ucy5pbmRleE9mKG9wdGlvbikgPiAtMX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcyMTBweCcgfX1cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cIk5leHRcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHEgPSB0aGlzLnByb3BzLnF1ZXN0aW9ucztcbiAgICAgICAgICAgICAgICAgIHEuZGV2aWNlc1dpdGhDYW1lcmEgPSBzZWxlY3RlZE9wdGlvbnM7XG4gICAgICAgICAgICAgICAgICBpZiAocS5kZXZpY2VzV2l0aENhbWVyYS5pbmRleE9mKCdjYW1lcmFBY2Nlc3NOb25lJykgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICBxLnNjYW5uaW5nUGFsbSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGFuZGxlR29Gb3J3YXJkKCdvd25lcicsIDYsIHsgcXVlc3Rpb25zOiBxIH0pO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3NlbGVjdGVkT3B0aW9ucy5sZW5ndGggPCAxfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEdvQmFja1N2Z1xuICAgICAgICAgICAgY29sb3I9XCIjMjM2MmM3XCJcbiAgICAgICAgICAgIGdvQmFjaz17KCkgPT4gdGhpcy5wcm9wcy5oYW5kbGVHb0JhY2soJ293bmVyJywgNSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=