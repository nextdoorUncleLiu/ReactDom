/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 180);
/******/ })
/************************************************************************/
/******/ ({

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(32);

var _react2 = _interopRequireDefault(_react);

var _leftMenu = __webpack_require__(82);

var _rightCont = __webpack_require__(83);

var _reactDom = __webpack_require__(31);

var _jquery = __webpack_require__(81);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AjaxData = function AjaxData() {
	_classCallCheck(this, AjaxData);

	this.promise = Promise.resolve(_jquery2.default.ajax(__dirname + './build/json/data.json'));
};

var ajaxData = new AjaxData();

var Comment = function (_Component) {
	_inherits(Comment, _Component);

	function Comment(props) {
		_classCallCheck(this, Comment);

		var _this = _possibleConstructorReturn(this, (Comment.__proto__ || Object.getPrototypeOf(Comment)).call(this));

		_this.state = {
			list: props.data,
			curViewData: {
				title: '',
				contents: '',
				time: ''
			},
			bool: false
		};
		return _this;
	}
	/**
  * [viewRightCont 显示右侧内容]
  */


	_createClass(Comment, [{
		key: 'viewRightCont',
		value: function viewRightCont() {
			this.clearArticle();
			this.setState({
				bool: true
			});
		}
		/**
   * [hideRightCont 隐藏右侧内容]
   */

	}, {
		key: 'hideRightCont',
		value: function hideRightCont() {
			this.setState({
				bool: false
			});
		}
		/**
   * [addArticle 添加内容]
   * @param {object} oArg [添加的新内容]
   */

	}, {
		key: 'addArticle',
		value: function addArticle(oArg) {
			this.state.list.push(oArg);
			this.setState({
				list: this.state.list
			});
		}
		/**
   * [clearArticle 清空当前显示内容]
   */

	}, {
		key: 'clearArticle',
		value: function clearArticle() {
			this.state.curViewData = {
				id: '',
				title: '',
				contents: '',
				time: ''
			};
		}
		/**
   * [updateArticle 更新内容]
   * @param  {number} nId [更新内容的id]
   */

	}, {
		key: 'updateArticle',
		value: function updateArticle(oArg) {
			this.state.list.map(function (oCurObj, nIndex, aArr) {
				if (oCurObj.id && oCurObj.id == oArg.id) {
					for (var sKey in oCurObj) {
						oCurObj[sKey] = oArg[sKey];
					}
				}
			});
			this.setState({
				list: this.state.list
			});
		}
		/**
   * [viewArticle 显示内容]
   * @param  {object} oArg [显示的内容]
   */

	}, {
		key: 'viewArticle',
		value: function viewArticle(oArg) {
			this.state.curViewData = oArg;
			this.setState({
				bool: true
			});
		}
		/**
   * [render 渲染组件]
   */

	}, {
		key: 'render',
		value: function render() {
			var viewDom = void 0;
			if (this.state.bool) {
				viewDom = _react2.default.createElement(_rightCont.RightCont, _extends({ ref: 'rightCont' }, this.state, { updateArticle: this.updateArticle.bind(this), clearArticle: this.clearArticle.bind(this), addArticle: this.addArticle.bind(this), hideRightCont: this.hideRightCont.bind(this) }));
			}
			return _react2.default.createElement(
				'div',
				{ className: 'main' },
				_react2.default.createElement(_leftMenu.LeftMenu, _extends({ ref: 'leftMenu' }, this.state, { viewArticle: this.viewArticle.bind(this), viewRightCont: this.viewRightCont.bind(this) })),
				viewDom
			);
		}
	}]);

	return Comment;
}(_react.Component);

ajaxData.promise.then(function (arg) {
	(0, _reactDom.render)(_react2.default.createElement(Comment, arg), document.querySelector('#comment'));
}, function (arg) {
	console.log(arg);
});
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'D:\\git\\reactDom\\demo1\\node_modules\\.3.0.1@uuid\\index.js'\n    at Error (native)");

/***/ }),

/***/ 31:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'D:\\git\\reactDom\\demo1\\node_modules\\.15.4.2@react-dom\\index.js'\n    at Error (native)");

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'D:\\git\\reactDom\\demo1\\node_modules\\.15.4.2@react\\react.js'\n    at Error (native)");

/***/ }),

/***/ 81:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'D:\\git\\reactDom\\demo1\\node_modules\\.3.1.1@jquery\\dist\\jquery.js'\n    at Error (native)");

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.LeftMenu = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(32);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(31);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LeftMenu = exports.LeftMenu = function (_Component) {
	_inherits(LeftMenu, _Component);

	function LeftMenu() {
		_classCallCheck(this, LeftMenu);

		return _possibleConstructorReturn(this, (LeftMenu.__proto__ || Object.getPrototypeOf(LeftMenu)).call(this));
	}
	/**
  * [getCurData 获取当前的数据]
  * @param  {object} oObj [当前点击的对象]
  * @param  {string} sKey [当前对象的key]
  */


	_createClass(LeftMenu, [{
		key: 'getCurData',
		value: function getCurData(oObj, sKey) {
			this.props.viewArticle(oObj, sKey);
		}
	}, {
		key: 'render',
		value: function render() {
			var _self = this;
			return _react2.default.createElement(
				'div',
				{ className: 'leftMenu' },
				_react2.default.createElement(
					'button',
					{ onClick: this.props.viewRightCont },
					'\u6DFB\u52A0\u65B0\u7684\u6587\u7AE0'
				),
				_react2.default.createElement(
					'ul',
					null,
					this.props.list.map(function (key, val) {
						return _react2.default.createElement(
							'li',
							{ ref: val, key: val, onClick: _self.getCurData.bind(_self, key) },
							key.title
						);
					})
				)
			);
		}
	}]);

	return LeftMenu;
}(_react.Component);

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.RightCont = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(32);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(31);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var uuid = __webpack_require__(184);

var RightCont = exports.RightCont = function (_Component) {
	_inherits(RightCont, _Component);

	function RightCont() {
		_classCallCheck(this, RightCont);

		return _possibleConstructorReturn(this, (RightCont.__proto__ || Object.getPrototypeOf(RightCont)).call(this));
	}
	/**
  * [saveBtn 保存按钮]
  */


	_createClass(RightCont, [{
		key: 'saveBtn',
		value: function saveBtn() {
			var oResf = this.refs;
			var tit = oResf.tit.value;
			var cont = oResf.cont.value;
			if (tit != '' && cont != '') {
				var propsFn = void 0,
				    id = void 0;
				if (oResf.saveBtn.id) {
					propsFn = this.props.updateArticle;
					id = oResf.saveBtn.id;
				} else {
					propsFn = this.props.addArticle;
					id = uuid.v4();
				}
				propsFn({
					id: id,
					title: tit,
					contents: cont,
					time: new Date()
				});
			}
			this.props.clearArticle();
		}
		/**
   * [componentWillReceiveProps 获取新的prop属性]
   * @param  {object} oNextProps [新的prop属性]
   */

	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(oNextProps) {
			this.refs.tit.value = oNextProps.curViewData.title;
			this.refs.cont.value = oNextProps.curViewData.contents;
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'rightCont' },
				_react2.default.createElement(
					'button',
					{ className: 'saveBtn', ref: 'saveBtn', id: this.props.curViewData.id, onClick: this.saveBtn.bind(this) },
					'\u4FDD\u5B58'
				),
				_react2.default.createElement(
					'button',
					{ className: 'clearBtn', ref: 'clearBtn', onClick: this.props.hideRightCont },
					'\u53D6\u6D88'
				),
				_react2.default.createElement('input', { className: 'title', ref: 'tit', placeholder: '\u8FD9\u662F\u6807\u9898', defaultValue: this.props.curViewData.title }),
				_react2.default.createElement('textarea', { rows: '3', cols: '20', className: 'contents', ref: 'cont', placeholder: '\u8FD9\u662F\u5185\u5BB9', defaultValue: this.props.curViewData.contents })
			);
		}
	}]);

	return RightCont;
}(_react.Component);

/***/ })

/******/ });