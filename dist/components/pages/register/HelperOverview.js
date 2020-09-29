"use strict";var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react = _interopRequireWildcard(require("react"));
var _GoBackSvg = _interopRequireDefault(require("../../svg/GoBackSvg"));
var _browserUtil = require("../../../util/browser-util");
var _HelperTypeSvg = _interopRequireDefault(require("../../svg/HelperTypeSvg"));

class HelperOverview extends _react.Component {





  constructor() {
    super();(0, _defineProperty2.default)(this, "isHelperRoleSelected",




















    _helperRoleType => {
      const { helperRoleType } = { ...this.state };
      return _helperRoleType === helperRoleType;
    });this.state = { helperRoleType: undefined };}componentDidMount() {(0, _browserUtil.handleIOSBrowser)();if (this.props.position === 'right') {this.refs.section.classList.add('section-right');} else if (this.props.position === 'left') {this.refs.section.classList.add('section-left');} else {this.refs.section.classList.add('section-center');}setTimeout(() => {this.refs.section.style.transform = 'translateX(0)';this.refs.section.style.opacity = '1';}, 1);}

  render() {
    return /*#__PURE__*/(
      _react.default.createElement("div", { ref: "section", id: "section-1-helper", className: "section" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "section-contents" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "title" }, "Helper"), /*#__PURE__*/
      _react.default.createElement("div", { className: "subtitle" }, "What type of helper are you?"), /*#__PURE__*/
      _react.default.createElement("div", { className: "helper-type" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "helper-row" }, /*#__PURE__*/
      _react.default.createElement("div", {
        className: `helper-item ${
        this.isHelperRoleSelected('Clinical Case Manager') && 'active'
        }`,
        onClick: () =>
        this.setState({ helperRoleType: 'Clinical Case Manager' }) }, /*#__PURE__*/


      _react.default.createElement(_HelperTypeSvg.default, { helperType: "Clinical Case Manager" }), /*#__PURE__*/
      _react.default.createElement("div", { className: "type-name" }, "Clinical Case Manager")), /*#__PURE__*/

      _react.default.createElement("div", {
        className: `helper-item ${
        this.isHelperRoleSelected('Advocate') && 'active'
        }`,
        onClick: () => this.setState({ helperRoleType: 'Advocate' }) }, /*#__PURE__*/

      _react.default.createElement(_HelperTypeSvg.default, { helperType: "Advocate" }), /*#__PURE__*/
      _react.default.createElement("div", { className: "type-name" }, "Advocate")), /*#__PURE__*/

      _react.default.createElement("div", {
        className: `helper-item ${
        this.isHelperRoleSelected('Case Manager') && 'active'
        }`,
        onClick: () =>
        this.setState({ helperRoleType: 'Case Manager' }) }, /*#__PURE__*/


      _react.default.createElement(_HelperTypeSvg.default, { helperType: "Case Manager" }), /*#__PURE__*/
      _react.default.createElement("div", { className: "type-name" }, "Case Manager"))), /*#__PURE__*/


      _react.default.createElement("div", { className: "helper-row" }, /*#__PURE__*/
      _react.default.createElement("div", {
        className: `helper-item ${
        this.isHelperRoleSelected('Intern') && 'active'
        }`,
        onClick: () => this.setState({ helperRoleType: 'Intern' }) }, /*#__PURE__*/

      _react.default.createElement(_HelperTypeSvg.default, { helperType: "Intern" }), /*#__PURE__*/
      _react.default.createElement("div", { className: "type-name" }, "Intern")), /*#__PURE__*/

      _react.default.createElement("div", {
        className: `helper-item ${
        this.isHelperRoleSelected('Volunteer') && 'active'
        }`,
        onClick: () => this.setState({ helperRoleType: 'Volunteer' }) }, /*#__PURE__*/

      _react.default.createElement(_HelperTypeSvg.default, { helperType: "Volunteer" }), /*#__PURE__*/
      _react.default.createElement("div", { className: "type-name" }, "Volunteer")), /*#__PURE__*/

      _react.default.createElement("div", {
        className: `helper-item ${
        this.isHelperRoleSelected('Other') && 'active'
        }`,
        onClick: () => this.setState({ helperRoleType: 'Other' }) }, /*#__PURE__*/

      _react.default.createElement(_HelperTypeSvg.default, { helperType: "Other" }), /*#__PURE__*/
      _react.default.createElement("div", { className: "type-name" }, "Other")))), /*#__PURE__*/



      _react.default.createElement("div", { className: "note" }, "Note: this role requires Admin authorization to finish your registration"), /*#__PURE__*/



      _react.default.createElement("div", { className: "card helper1" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "card-title" }, "Are you a registered notary?"), /*#__PURE__*/
      _react.default.createElement("div", { className: "card-body" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "section1" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "label" }, "No, I'm not."), /*#__PURE__*/
      _react.default.createElement("input", { className: "checkbox", type: "checkbox" })), /*#__PURE__*/

      _react.default.createElement("div", { className: "label section2" }, "Yes, I'm licensed in the state of..."), /*#__PURE__*/


      _react.default.createElement("div", { className: "select-container" }, /*#__PURE__*/
      _react.default.createElement("select", null, /*#__PURE__*/
      _react.default.createElement("option", null, "Select"))))), /*#__PURE__*/




      _react.default.createElement(_GoBackSvg.default, {
        color: "#4ba9d9",
        goBack: () => this.props.handleGoBack('helper', 1) }))));




  }}exports.default = HelperOverview;(0, _defineProperty2.default)(HelperOverview, "defaultProps", { handleGoForward: () => {}, handleGoBack: () => {} });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BhZ2VzL3JlZ2lzdGVyL0hlbHBlck92ZXJ2aWV3LmpzeCJdLCJuYW1lcyI6WyJIZWxwZXJPdmVydmlldyIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwiX2hlbHBlclJvbGVUeXBlIiwiaGVscGVyUm9sZVR5cGUiLCJzdGF0ZSIsInVuZGVmaW5lZCIsImNvbXBvbmVudERpZE1vdW50IiwicHJvcHMiLCJwb3NpdGlvbiIsInJlZnMiLCJzZWN0aW9uIiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0VGltZW91dCIsInN0eWxlIiwidHJhbnNmb3JtIiwib3BhY2l0eSIsInJlbmRlciIsImlzSGVscGVyUm9sZVNlbGVjdGVkIiwic2V0U3RhdGUiLCJoYW5kbGVHb0JhY2siLCJoYW5kbGVHb0ZvcndhcmQiXSwibWFwcGluZ3MiOiJnWEFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxNQUFNQSxjQUFOLFNBQTZCQyxnQkFBN0IsQ0FBdUM7Ozs7OztBQU1wREMsRUFBQUEsV0FBVyxHQUFHO0FBQ1osWUFEWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JVQyxJQUFBQSxlQUFELElBQXFCO0FBQzFDLFlBQU0sRUFBRUMsY0FBRixLQUFxQixFQUFFLEdBQUcsS0FBS0MsS0FBVixFQUEzQjtBQUNBLGFBQU9GLGVBQWUsS0FBS0MsY0FBM0I7QUFDRCxLQXpCYSxFQUVaLEtBQUtDLEtBQUwsR0FBYSxFQUNYRCxjQUFjLEVBQUVFLFNBREwsRUFBYixDQUdELENBRURDLGlCQUFpQixHQUFHLENBQ2xCLHFDQUNBLElBQUksS0FBS0MsS0FBTCxDQUFXQyxRQUFYLEtBQXdCLE9BQTVCLEVBQXFDLENBQ25DLEtBQUtDLElBQUwsQ0FBVUMsT0FBVixDQUFrQkMsU0FBbEIsQ0FBNEJDLEdBQTVCLENBQWdDLGVBQWhDLEVBQ0QsQ0FGRCxNQUVPLElBQUksS0FBS0wsS0FBTCxDQUFXQyxRQUFYLEtBQXdCLE1BQTVCLEVBQW9DLENBQ3pDLEtBQUtD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QUFDdkMsVUFISDtBQUlFLFFBQUEsT0FBTyxFQUFFLE1BQU0sS0FBS0MsUUFBTCxDQUFjLEVBQUVoQixjQUFjLEVBQUUsT0FBbEIsRUFBZCxDQUpqQjs7QUFNRSxtQ0FBQyxzQkFBRCxJQUFlLFVBQVUsRUFBQyxPQUExQixHQU5GO0FBT0UsNENBQUssU0FBUyxFQUFDLFdBQWYsWUFQRixDQW5CRixDQWxDRixDQUhGOzs7O0FBbUVFLDRDQUFLLFNBQVMsRUFBQyxNQUFmLCtFQW5FRjs7OztBQXVFRSw0Q0FBSyxTQUFTLEVBQUMsY0FBZjtBQUNFLDRDQUFLLFNBQVMsRUFBQyxZQUFmLG1DQURGO0FBRUUsNENBQUssU0FBUyxFQUFDLFdBQWY7QUFDRSw0Q0FBSyxTQUFTLEVBQUMsVUFBZjtBQUNFLDRDQUFLLFNBQVMsRUFBQyxPQUFmLG1CQURGO0FBRUUsOENBQU8sU0FBUyxFQUFDLFVBQWpCLEVBQTRCLElBQUksRUFBQyxVQUFqQyxHQUZGLENBREY7O0FBS0UsNENBQUssU0FBUyxFQUFDLGdCQUFmLDJDQUxGOzs7QUFRRSw0Q0FBSyxTQUFTLEVBQUMsa0JBQWY7QUFDRTtBQUNFLDREQURGLENBREYsQ0FSRixDQUZGLENBdkVGOzs7OztBQXdGRSxtQ0FBQyxrQkFBRDtBQUNFLFFBQUEsS0FBSyxFQUFDLFNBRFI7QUFFRSxRQUFBLE1BQU0sRUFBRSxNQUFNLEtBQUtJLEtBQUwsQ0FBV2EsWUFBWCxDQUF3QixRQUF4QixFQUFrQyxDQUFsQyxDQUZoQixHQXhGRixDQURGLENBREY7Ozs7O0FBaUdELEdBbkltRCxDLCtEQUFqQ3JCLGMsa0JBQ0csRUFDcEJzQixlQUFlLEVBQUUsTUFBTSxDQUFFLENBREwsRUFFcEJELFlBQVksRUFBRSxNQUFNLENBQUUsQ0FGRixFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBHb0JhY2tTdmcgZnJvbSAnLi4vLi4vc3ZnL0dvQmFja1N2Zyc7XG5pbXBvcnQgeyBoYW5kbGVJT1NCcm93c2VyIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9icm93c2VyLXV0aWwnO1xuaW1wb3J0IEhlbHBlclR5cGVTdmcgZnJvbSAnLi4vLi4vc3ZnL0hlbHBlclR5cGVTdmcnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWxwZXJPdmVydmlldyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaGFuZGxlR29Gb3J3YXJkOiAoKSA9PiB7fSxcbiAgICBoYW5kbGVHb0JhY2s6ICgpID0+IHt9LFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGhlbHBlclJvbGVUeXBlOiB1bmRlZmluZWQsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGhhbmRsZUlPU0Jyb3dzZXIoKTtcbiAgICBpZiAodGhpcy5wcm9wcy5wb3NpdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgdGhpcy5yZWZzLnNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnc2VjdGlvbi1yaWdodCcpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5wb3NpdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgICB0aGlzLnJlZnMuc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLWxlZnQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZWZzLnNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnc2VjdGlvbi1jZW50ZXInKTtcbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnJlZnMuc2VjdGlvbi5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgwKSc7XG4gICAgICB0aGlzLnJlZnMuc2VjdGlvbi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgIH0sIDEpO1xuICB9XG5cbiAgaXNIZWxwZXJSb2xlU2VsZWN0ZWQgPSAoX2hlbHBlclJvbGVUeXBlKSA9PiB7XG4gICAgY29uc3QgeyBoZWxwZXJSb2xlVHlwZSB9ID0geyAuLi50aGlzLnN0YXRlIH07XG4gICAgcmV0dXJuIF9oZWxwZXJSb2xlVHlwZSA9PT0gaGVscGVyUm9sZVR5cGU7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHJlZj1cInNlY3Rpb25cIiBpZD1cInNlY3Rpb24tMS1oZWxwZXJcIiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1jb250ZW50c1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5IZWxwZXI8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+V2hhdCB0eXBlIG9mIGhlbHBlciBhcmUgeW91PzwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVscGVyLXR5cGVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVscGVyLXJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaGVscGVyLWl0ZW0gJHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuaXNIZWxwZXJSb2xlU2VsZWN0ZWQoJ0NsaW5pY2FsIENhc2UgTWFuYWdlcicpICYmICdhY3RpdmUnXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoZWxwZXJSb2xlVHlwZTogJ0NsaW5pY2FsIENhc2UgTWFuYWdlcicgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SGVscGVyVHlwZVN2ZyBoZWxwZXJUeXBlPVwiQ2xpbmljYWwgQ2FzZSBNYW5hZ2VyXCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR5cGUtbmFtZVwiPkNsaW5pY2FsIENhc2UgTWFuYWdlcjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGhlbHBlci1pdGVtICR7XG4gICAgICAgICAgICAgICAgICB0aGlzLmlzSGVscGVyUm9sZVNlbGVjdGVkKCdBZHZvY2F0ZScpICYmICdhY3RpdmUnXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGhlbHBlclJvbGVUeXBlOiAnQWR2b2NhdGUnIH0pfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEhlbHBlclR5cGVTdmcgaGVscGVyVHlwZT1cIkFkdm9jYXRlXCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR5cGUtbmFtZVwiPkFkdm9jYXRlPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaGVscGVyLWl0ZW0gJHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuaXNIZWxwZXJSb2xlU2VsZWN0ZWQoJ0Nhc2UgTWFuYWdlcicpICYmICdhY3RpdmUnXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoZWxwZXJSb2xlVHlwZTogJ0Nhc2UgTWFuYWdlcicgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SGVscGVyVHlwZVN2ZyBoZWxwZXJUeXBlPVwiQ2FzZSBNYW5hZ2VyXCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR5cGUtbmFtZVwiPkNhc2UgTWFuYWdlcjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWxwZXItcm93XCI+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BoZWxwZXItaXRlbSAke1xuICAgICAgICAgICAgICAgICAgdGhpcy5pc0hlbHBlclJvbGVTZWxlY3RlZCgnSW50ZXJuJykgJiYgJ2FjdGl2ZSdcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgaGVscGVyUm9sZVR5cGU6ICdJbnRlcm4nIH0pfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEhlbHBlclR5cGVTdmcgaGVscGVyVHlwZT1cIkludGVyblwiIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0eXBlLW5hbWVcIj5JbnRlcm48L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BoZWxwZXItaXRlbSAke1xuICAgICAgICAgICAgICAgICAgdGhpcy5pc0hlbHBlclJvbGVTZWxlY3RlZCgnVm9sdW50ZWVyJykgJiYgJ2FjdGl2ZSdcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgaGVscGVyUm9sZVR5cGU6ICdWb2x1bnRlZXInIH0pfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEhlbHBlclR5cGVTdmcgaGVscGVyVHlwZT1cIlZvbHVudGVlclwiIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0eXBlLW5hbWVcIj5Wb2x1bnRlZXI8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BoZWxwZXItaXRlbSAke1xuICAgICAgICAgICAgICAgICAgdGhpcy5pc0hlbHBlclJvbGVTZWxlY3RlZCgnT3RoZXInKSAmJiAnYWN0aXZlJ1xuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBoZWxwZXJSb2xlVHlwZTogJ090aGVyJyB9KX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxIZWxwZXJUeXBlU3ZnIGhlbHBlclR5cGU9XCJPdGhlclwiIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0eXBlLW5hbWVcIj5PdGhlcjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm90ZVwiPlxuICAgICAgICAgICAgTm90ZTogdGhpcyByb2xlIHJlcXVpcmVzIEFkbWluIGF1dGhvcml6YXRpb24gdG8gZmluaXNoIHlvdXJcbiAgICAgICAgICAgIHJlZ2lzdHJhdGlvblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBoZWxwZXIxXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5BcmUgeW91IGEgcmVnaXN0ZXJlZCBub3Rhcnk/PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24xXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPk5vLCBJJ20gbm90LjwvZGl2PlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJjaGVja2JveFwiIHR5cGU9XCJjaGVja2JveFwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsIHNlY3Rpb24yXCI+XG4gICAgICAgICAgICAgICAgWWVzLCBJJ20gbGljZW5zZWQgaW4gdGhlIHN0YXRlIG9mLi4uXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8c2VsZWN0PlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj5TZWxlY3Q8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8R29CYWNrU3ZnXG4gICAgICAgICAgICBjb2xvcj1cIiM0YmE5ZDlcIlxuICAgICAgICAgICAgZ29CYWNrPXsoKSA9PiB0aGlzLnByb3BzLmhhbmRsZUdvQmFjaygnaGVscGVyJywgMSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=