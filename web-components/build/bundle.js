/******/ (function(modules) {
	// webpackBootstrap
	/******/ // The module cache
	/******/ var installedModules = {}; // The require function
	/******/
	/******/ /******/ function __webpack_require__(moduleId) {
		/******/
		/******/ // Check if module is in cache
		/******/ if (installedModules[moduleId]) {
			/******/ return installedModules[moduleId].exports;
			/******/
		} // Create a new module (and put it into the cache)
		/******/ /******/ var module = (installedModules[moduleId] = {
			/******/ i: moduleId,
			/******/ l: false,
			/******/ exports: {},
			/******/
		}); // Execute the module function
		/******/
		/******/ /******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); // Flag the module as loaded
		/******/
		/******/ /******/ module.l = true; // Return the exports of the module
		/******/
		/******/ /******/ return module.exports;
		/******/
	} // expose the modules object (__webpack_modules__)
	/******/
	/******/
	/******/ /******/ __webpack_require__.m = modules; // expose the module cache
	/******/
	/******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
	/******/
	/******/ /******/ __webpack_require__.d = function(exports, name, getter) {
		/******/ if (!__webpack_require__.o(exports, name)) {
			/******/ Object.defineProperty(exports, name, { enumerable: true, get: getter });
			/******/
		}
		/******/
	}; // define __esModule on exports
	/******/
	/******/ /******/ __webpack_require__.r = function(exports) {
		/******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
			/******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
			/******/
		}
		/******/ Object.defineProperty(exports, '__esModule', { value: true });
		/******/
	}; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
	/******/
	/******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(value, mode) {
		/******/ if (mode & 1) value = __webpack_require__(value);
		/******/ if (mode & 8) return value;
		/******/ if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
		/******/ var ns = Object.create(null);
		/******/ __webpack_require__.r(ns);
		/******/ Object.defineProperty(ns, 'default', { enumerable: true, value: value });
		/******/ if (mode & 2 && typeof value != 'string')
			for (var key in value)
				__webpack_require__.d(
					ns,
					key,
					function(key) {
						return value[key];
					}.bind(null, key),
				);
		/******/ return ns;
		/******/
	}; // getDefaultExport function for compatibility with non-harmony modules
	/******/
	/******/ /******/ __webpack_require__.n = function(module) {
		/******/ var getter =
			module && module.__esModule
				? /******/ function getDefault() {
						return module['default'];
				  }
				: /******/ function getModuleExports() {
						return module;
				  };
		/******/ __webpack_require__.d(getter, 'a', getter);
		/******/ return getter;
		/******/
	}; // Object.prototype.hasOwnProperty.call
	/******/
	/******/ /******/ __webpack_require__.o = function(object, property) {
		return Object.prototype.hasOwnProperty.call(object, property);
	}; // __webpack_public_path__
	/******/
	/******/ /******/ __webpack_require__.p = ''; // Load entry module and return exports
	/******/
	/******/
	/******/ /******/ return __webpack_require__((__webpack_require__.s = './index.js'));
	/******/
})(
	/************************************************************************/
	/******/ {
		/***/ './components/FormInput.js':
			/*!*********************************!*\
  !*** ./components/FormInput.js ***!
  \*********************************/
			/*! no static exports found */
			/***/ function(module, exports) {
				eval(
					'function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar template = document.createElement(\'template\');\ntemplate.innerHTML = "\\n    <style>\\n        input {\\n            border: 0;\\n            border-top: 5px solid gray;\\n            outline: none;\\n            width: calc(100% - 2px);\\n            height: 40px;\\n            font-size: 50px;\\n            padding: 25px 50px;\\n            margin: 0;\\n            position: fixed;\\n            bottom: 0;\\n        }\\n\\n        :host {\\n            display: inline-block;\\n        }\\n    </style>\\n    <input type=\\"text\\">\\n";\n\nvar FormInput =\n/*#__PURE__*/\nfunction (_HTMLElement) {\n  _inherits(FormInput, _HTMLElement);\n\n  function FormInput() {\n    var _this;\n\n    _classCallCheck(this, FormInput);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormInput).call(this));\n    _this.shadowRoot = _this.attachShadow({\n      mode: \'open\'\n    });\n\n    _this.shadowRoot.appendChild(template.content.cloneNode(true));\n\n    _this.$input = _this.shadowRoot.querySelector(\'input\');\n    return _this;\n  }\n\n  _createClass(FormInput, [{\n    key: "attributeChangedCallback",\n    value: function attributeChangedCallback(name, oldValue, newValue) {\n      this.$input.setAttribute(name, newValue);\n    }\n  }, {\n    key: "value",\n    get: function get() {\n      return this.$input.value;\n    },\n    set: function set(newValue) {\n      this.$input.value = newValue;\n    }\n  }], [{\n    key: "observedAttributes",\n    get: function get() {\n      return [\'name\', \'value\', \'placeholder\', \'disabled\'];\n    }\n  }]);\n\n  return FormInput;\n}(_wrapNativeSuper(HTMLElement));\n\ncustomElements.define(\'form-input\', FormInput);\n\n//# sourceURL=webpack:///./components/FormInput.js?',
				);

				/***/
			},

		/***/ './components/MessageContainer.js':
			/*!****************************************!*\
  !*** ./components/MessageContainer.js ***!
  \****************************************/
			/*! no static exports found */
			/***/ function(module, exports) {
				eval(
					'function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar template = document.createElement(\'template\');\ntemplate.innerHTML = "\\n    <style>\\n        .message {\\n            font-size: 50px;\\n            font-family: Arial, SansSerif, Helvetica, \\"DejaVu Sans\\",monospace;\\n            overflow-wrap: break-word;\\n            white-space: pre-wrap;\\n            line-height: 45px;\\n        }\\n        .date {\\n            display: inline-block;\\n            font-size: 30px;\\n            font-style: italic;\\n        }\\n        .wrapper {\\n            background: #dac6eb;\\n            border-radius: 15px;\\n            width: auto;\\n            padding: 15px;\\n            margin-bottom: 50px;\\n            max-width: 700px;\\n        }\\n    </style>\\n    <div class=\\"wrapper\\">\\n        <p class=\\"message\\"></p>\\n        <span class=\\"date\\"></span>\\n    </div>\\n";\n\nvar MessageContainer =\n/*#__PURE__*/\nfunction (_HTMLElement) {\n  _inherits(MessageContainer, _HTMLElement);\n\n  function MessageContainer() {\n    var _this;\n\n    _classCallCheck(this, MessageContainer);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(MessageContainer).call(this));\n    _this.shadowRoot = _this.attachShadow({\n      mode: \'open\'\n    });\n\n    _this.shadowRoot.appendChild(template.content.cloneNode(true));\n\n    _this.$message = _this.shadowRoot.querySelector(\'.message\');\n    _this.$date = _this.shadowRoot.querySelector(\'.date\');\n    return _this;\n  }\n\n  _createClass(MessageContainer, [{\n    key: "attributeChangedCallback",\n    value: function attributeChangedCallback(name, oldValue, newValue) {\n      switch (name) {\n        case \'message\':\n          this.$message.innerHTML = newValue;\n          break;\n\n        case \'date\':\n          this.$date.innerHTML = newValue;\n          break;\n\n        default:\n          break;\n      }\n    }\n  }, {\n    key: "message",\n    get: function get() {\n      return this.$message.value;\n    },\n    set: function set(newValue) {\n      this.$message.innerHTML = newValue;\n    }\n  }, {\n    key: "date",\n    get: function get() {\n      return this.$date.value;\n    },\n    set: function set(newValue) {\n      this.$date.innerHTML = newValue;\n    }\n  }], [{\n    key: "observedAttributes",\n    get: function get() {\n      return [\'message\', \'date\'];\n    }\n  }]);\n\n  return MessageContainer;\n}(_wrapNativeSuper(HTMLElement));\n\ncustomElements.define(\'message-container\', MessageContainer);\n\n//# sourceURL=webpack:///./components/MessageContainer.js?',
				);

				/***/
			},

		/***/ './components/MessageForm.js':
			/*!***********************************!*\
  !*** ./components/MessageForm.js ***!
  \***********************************/
			/*! no static exports found */
			/***/ function(module, exports) {
				eval(
					'function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar template = document.createElement(\'template\');\ntemplate.innerHTML = "\\n    <style>\\n        form-input {\\n            width: auto;\\n        }\\n\\n        .top-panel {\\n            background: darkviolet;\\n            /*min-height: 80px;*/\\n            width: 100%;\\n            position: fixed;\\n            top: 0;\\n            display: table-cell;\\n            vertical-align: middle;\\n            height: 80px;\\n        }\\n        \\n        .result {\\n            background: #dac6eb;\\n            display: flex;\\n            flex-direction: column;\\n            align-items: flex-end;\\n            padding: 50px;\\n            overflow: hidden;\\n            margin-top: 80px;\\n            margin-bottom: 30px;\\n        }\\n\\n        input[type=submit] {\\n            visibility: collapse;\\n        }\\n    </style>\\n    <form>\\n        <div style=\\"display: table; width: 100%\\">\\n            <div class=\\"top-panel\\">\\n                <h1 style=\\"text-align: center;\\">Chat header</h1>\\n            </div>\\n        </div>\\n        <div class=\\"result\\"></div>\\n        <form-input name=\\"message-text\\" placeholder=\\"\\u0412\\u0432\\u0435\\u0434\\u0438\\u0442\\u0435 \\u0441\\u043E\\u043E\\u0431\\u0449\\u0435\\u043D\\u0438\\u0435\\"></form-input>\\n    </form>\\n";\n\nvar MessageForm =\n/*#__PURE__*/\nfunction (_HTMLElement) {\n  _inherits(MessageForm, _HTMLElement);\n\n  function MessageForm() {\n    var _this;\n\n    _classCallCheck(this, MessageForm);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(MessageForm).call(this));\n    _this._shadowRoot = _this.attachShadow({\n      mode: \'open\'\n    });\n\n    _this._shadowRoot.appendChild(template.content.cloneNode(true));\n\n    _this.$form = _this._shadowRoot.querySelector(\'form\');\n    _this.$input = _this._shadowRoot.querySelector(\'form-input\');\n    _this.$result = _this._shadowRoot.querySelector(\'.result\');\n\n    _this.$form.addEventListener(\'submit\', _this._onSubmit.bind(_assertThisInitialized(_this)));\n\n    _this.$form.addEventListener(\'keypress\', _this._onKeyPress.bind(_assertThisInitialized(_this)));\n\n    var messages = localStorage.getItem(\'messages\');\n\n    if (messages === null) {\n      localStorage.setItem(\'messages\', JSON.stringify([]));\n    } else {\n      JSON.parse(messages).forEach(function (element) {\n        var $message = document.createElement(\'message-container\');\n        $message.setAttribute(\'message\', element[0]);\n        $message.setAttribute(\'date\', element[1]);\n\n        _this.$result.appendChild($message);\n      });\n    }\n\n    return _this;\n  }\n\n  _createClass(MessageForm, [{\n    key: "_onSubmit",\n    value: function _onSubmit(event) {\n      event.preventDefault();\n      var minutes;\n      var hours;\n\n      if (this.$input.value.length > 0) {\n        var date = new Date();\n        minutes = date.getMinutes().toString();\n\n        if (minutes.length < 2) {\n          minutes = "0".concat(minutes);\n        }\n\n        hours = date.getHours().toString();\n        var time = "".concat(hours, ":").concat(minutes);\n        var messages = JSON.parse(localStorage.getItem(\'messages\'));\n        messages.push([this.$input.value, time]);\n        localStorage.setItem(\'messages\', JSON.stringify(messages));\n        var $message = document.createElement(\'message-container\');\n        $message.message = this.$input.value;\n        this.$input.value = \'\';\n        location.reload();\n        window.scrollTo(0, this.$result.scrollHeight);\n      }\n    }\n  }, {\n    key: "_onKeyPress",\n    value: function _onKeyPress(event) {\n      if (event.keyCode === 13) {\n        this.$form.dispatchEvent(new Event(\'submit\'));\n      }\n    }\n  }]);\n\n  return MessageForm;\n}(_wrapNativeSuper(HTMLElement));\n\ncustomElements.define(\'message-form\', MessageForm);\n\n//# sourceURL=webpack:///./components/MessageForm.js?',
				);

				/***/
			},

		/***/ './index.css':
			/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
			/*! no static exports found */
			/***/ function(module, exports, __webpack_require__) {
				eval('// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./index.css?');

				/***/
			},

		/***/ './index.js':
			/*!******************!*\
  !*** ./index.js ***!
  \******************/
			/*! no exports provided */
			/***/ function(module, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./index.css");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_FormInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/FormInput */ "./components/FormInput.js");\n/* harmony import */ var _components_FormInput__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_FormInput__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_MessageForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/MessageForm */ "./components/MessageForm.js");\n/* harmony import */ var _components_MessageForm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_MessageForm__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_MessageContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/MessageContainer */ "./components/MessageContainer.js");\n/* harmony import */ var _components_MessageContainer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_MessageContainer__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n//# sourceURL=webpack:///./index.js?',
				);

				/***/
			},

		/******/
	},
);
