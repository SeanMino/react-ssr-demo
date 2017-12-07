exports.ids = [1];
exports.modules = {

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(24);

var _regenerator2 = _interopRequireDefault2(_regenerator);

var _getPrototypeOf = __webpack_require__(34);

var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);

var _setPrototypeOf = __webpack_require__(35);

var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);

var _create = __webpack_require__(33);

var _create2 = _interopRequireDefault2(_create);

var _typeof2 = __webpack_require__(36);

var _typeof3 = _interopRequireDefault2(_typeof2);

var _promise = __webpack_require__(15);

var _promise2 = _interopRequireDefault2(_promise);

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

var _index = __webpack_require__(174);

var _head = __webpack_require__(173);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _asyncToGenerator(fn) {
  return function () {
    var gen = fn.apply(this, arguments);return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);var value = info.value;
        } catch (error) {
          reject(error);return;
        }if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }return step("next");
    });
  };
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

var Article = function (_Component) {
  _inherits(Article, _Component);

  function Article(props) {
    _classCallCheck(this, Article);

    return _possibleConstructorReturn(this, (Article.__proto__ || (0, _getPrototypeOf2.default)(Article)).call(this, props));
  }

  // 渲染html


  _createClass(Article, [{
    key: 'renderHtml',
    value: function renderHtml(html) {
      return _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: html } });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props$body = this.props.body,
          body = _props$body === undefined ? {} : _props$body;

      var data = body.content || {};
      var title = data.title;

      return _react2.default.createElement('div', { id: 'main' }, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', null, title)), _react2.default.createElement('article', { className: 'post detail' }, _react2.default.createElement('div', { className: 'meta' }, _react2.default.createElement('div', { className: 'date' }, data.createdAt)), _react2.default.createElement('h1', { className: 'title' }, data.title), _react2.default.createElement('div', { className: 'entry-content' }, _react2.default.createElement('div', { id: 'toc', className: 'toc' }, this.renderHtml(data.toc)), this.renderHtml(data.content))));
    }
  }]);

  return Article;
}(_react.Component);

exports.default = Article;

Article.getInitialProps = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(rootProps) {
    var params, url;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            params = rootProps.params;
            url = '/api/article/' + params.pathName;
            _context.next = 4;
            return (0, _index.Ajax)({
              url: url
            }).then(function (resp) {
              return { body: resp };
            });

          case 4:
            return _context.abrupt('return', _context.sent);

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();
module.exports = exports['default'];

/***/ }),

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

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _promise = __webpack_require__(15);

var _promise2 = _interopRequireDefault2(_promise);

var _assign = __webpack_require__(58);

var _assign2 = _interopRequireDefault2(_assign);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ajax = Ajax;
exports.getURLParams = getURLParams;

var _axios = __webpack_require__(175);

var _axios2 = _interopRequireDefault(_axios);

var _react = __webpack_require__(13);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var config = __webpack_require__(57);

/**
 * @param  {Object} options
 * @return {Object}         Return Promise
 */
function Ajax(options) {
  var defaults = {
    url: "",
    method: 'get',
    data: {}
  };

  options = (0, _assign2.default)({}, defaults, options);

  var url = options.url;

  if (typeof window === "undefined") {
    url = "http://localhost:" + config.frontPort + url;
  }

  if (options.method === "get") {
    url = url + toString(options.data);
  }

  var promise = _axios2.default[options.method](url);
  return new _promise2.default(function (resolve) {
    promise.then(function (resp) {
      if (resp.status === 200) {
        resolve(resp.data);
      }
    }).catch(function (err) {
      console.log(err);
    });
  });
}

function toString(data) {
  var string = [];
  for (var name in data) {
    string.push(name + "=" + encodeURI(data[name]));
  }
  if (string.length) {
    return "?" + string.join("&");
  }
  return '';
}

/**
 * @return {Object} Return url params
 */
function getURLParams() {
  var search = location.search.slice(1),
      rParam = /([^&]*)=([^&]*)/g;
  var ret = {},
      param = void 0;

  while (param = rParam.exec(search)) {
    ret[param[1]] = param[2];
  }

  return ret;
}

/***/ })

};;