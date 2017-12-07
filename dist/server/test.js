exports.ids = [0];
exports.modules = {

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getPrototypeOf = __webpack_require__(34);

var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);

var _setPrototypeOf = __webpack_require__(35);

var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);

var _create = __webpack_require__(33);

var _create2 = _interopRequireDefault2(_create);

var _typeof2 = __webpack_require__(36);

var _typeof3 = _interopRequireDefault2(_typeof2);

var _defineProperty = __webpack_require__(14);

var _defineProperty2 = _interopRequireDefault2(_defineProperty);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__(13);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(81);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
}

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(_head2.default, null, this.props.children);
    }
  }]);

  return Header;
}(_react2.default.Component);

exports.default = Header;
module.exports = exports["default"];

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getPrototypeOf = __webpack_require__(34);

var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);

var _setPrototypeOf = __webpack_require__(35);

var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);

var _create = __webpack_require__(33);

var _create2 = _interopRequireDefault2(_create);

var _typeof2 = __webpack_require__(36);

var _typeof3 = _interopRequireDefault2(_typeof2);

var _defineProperty = __webpack_require__(14);

var _defineProperty2 = _interopRequireDefault2(_defineProperty);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__(13);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(82);

var _head = __webpack_require__(173);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
}

var Test = function (_React$Component) {
  _inherits(Test, _React$Component);

  function Test(props) {
    _classCallCheck(this, Test);

    return _possibleConstructorReturn(this, (Test.__proto__ || (0, _getPrototypeOf2.default)(Test)).call(this, props));
  }

  _createClass(Test, [{
    key: 'renderList',
    value: function renderList(count) {
      for (var i = 0; i < count.length; i++) {}
    }
  }, {
    key: 'render',
    value: function render() {
      var _props$params = this.props.params,
          params = _props$params === undefined ? {} : _props$params;
      var _params$count = params.count,
          count = _params$count === undefined ? 100 : _params$count;

      var out = [];
      for (var i = 0; i < count; i++) {
        out.push(i);
      }

      return _react2.default.createElement('div', null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', null, "\u538B\u6D4B\u8282\u70B9\u6570 ", count)), _react2.default.createElement('div', null, _react2.default.createElement('ul', null, out.map(function (item, index) {
        return _react2.default.createElement('li', { key: index }, 'This is row ', index + 1);
      }))));
    }
  }]);

  return Test;
}(_react2.default.Component);

exports.default = Test;
module.exports = exports['default'];

/***/ })

};;