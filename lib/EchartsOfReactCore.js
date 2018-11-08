"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * core component
 */
var EChartsOfReact =
/*#__PURE__*/
function (_React$Component) {
  _inherits(EChartsOfReact, _React$Component);

  function EChartsOfReact() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EChartsOfReact);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EChartsOfReact)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "chartSizeChange", function () {
      _this.chart.resize();
    });

    return _this;
  }

  _createClass(EChartsOfReact, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          id = _this$props.id,
          option = _this$props.option,
          echarts = _this$props.echarts;
      this.chart = echarts.init(document.getElementById(id));

      if (!!option) {
        this.chart.setOption(option);
      }

      window.addEventListener('resize', this.chartSizeChange);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.option !== nextProps.option) {
        this.chart.setOption(nextProps.option);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.chartSizeChange);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          id = _this$props2.id,
          defaultWidth = _this$props2.defaultWidth,
          defaultHeight = _this$props2.defaultHeight;
      return _react.default.createElement("div", {
        id: id,
        style: {
          width: defaultWidth,
          height: defaultHeight
        }
      });
    }
  }]);

  return EChartsOfReact;
}(_react.default.Component);

exports.default = EChartsOfReact;

_defineProperty(EChartsOfReact, "propTypes", {
  /**
   * echarts object
   */
  echarts: _propTypes.default.object,

  /**
   * id selector
   */
  id: _propTypes.default.string.isRequired,

  /**
   * echarts option
   */
  option: _propTypes.default.object,

  /**
   * default width
   */
  defaultWidth: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]).isRequired,

  /**
   * default height
   */
  defaultHeight: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]).isRequired
});