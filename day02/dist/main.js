/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ToyReact.js":
/*!*********************!*\
  !*** ./ToyReact.js ***!
  \*********************/
/*! exports provided: Component, ToyReact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return Component; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ToyReact\", function() { return ToyReact; });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar ElementWrapper = /*#__PURE__*/function () {\n  function ElementWrapper(type) {\n    _classCallCheck(this, ElementWrapper);\n\n    this.root = document.createElement(type);\n  }\n\n  _createClass(ElementWrapper, [{\n    key: \"setAttribute\",\n    value: function setAttribute(name, value) {\n      if (name.match(/^on([\\s\\S]+)$/)) {\n        // console.log('ElementWrapper');\n        console.log(RegExp.$1); // let eventName = RegExp.$1.toLowerCase();\t\t//字符串整体应用小写\n\n        var eventName = RegExp.$1.replace(/^[\\s\\S]/, function ($0) {\n          return $0.toLowerCase();\n        }); // let eventName = RegExp.$1.replace(/^[\\s\\S]/, function($0){\n        // \treturn $0.toLowerCase();\t//$0是匹配到的首字母C\n        // });\n\n        this.root.addEventListener(eventName, value);\n      }\n\n      if (name === \"className\") name = \"class\";\n      this.root.setAttribute(name, value);\n    }\n  }, {\n    key: \"appendChild\",\n    value: function appendChild(vchild) {\n      var range = document.createRange();\n\n      if (this.root.children.length) {\n        range.setStartAfter(this.root.lastChild);\n        range.setEndAfter(this.root.lastChild);\n      } else {\n        range.setStart(this.root, 0);\n        range.setEnd(this.root, 0);\n      }\n\n      vchild.mountTo(range); // <= vchild.mountTo(this.root);\n    } // mountTo(parent){\n    // \tparent.appendChild(this.root);\n    // }\n\n  }, {\n    key: \"mountTo\",\n    value: function mountTo(range) {\n      range.deleteContents();\n      range.insertNode(this.root);\n    }\n  }]);\n\n  return ElementWrapper;\n}();\n\nvar TextWrapper = /*#__PURE__*/function () {\n  function TextWrapper(content) {\n    _classCallCheck(this, TextWrapper);\n\n    this.root = document.createTextNode(content);\n  } // mountTo(parent){\n  // \tparent.appendChild(this.root);\n  // }\n\n\n  _createClass(TextWrapper, [{\n    key: \"mountTo\",\n    value: function mountTo(range) {\n      range.deleteContents();\n      range.insertNode(this.root);\n    }\n  }]);\n\n  return TextWrapper;\n}(); //Wrapper只是为了让我们的component跟原生的DOM的行为一致\n\n\nvar Component = /*#__PURE__*/function () {\n  function Component() {\n    _classCallCheck(this, Component);\n\n    this.children = [];\n    this.props = Object.create(null);\n  }\n\n  _createClass(Component, [{\n    key: \"setAttribute\",\n    value: function setAttribute(name, value) {\n      if (name.match(/^on([\\s\\S]+)$/)) {\n        console.log('Component');\n        console.log(RegExp.$1);\n      }\n\n      this.props[name] = value;\n      this[name] = value;\n    } // mountTo(parent) {\n    // \tlet vdom = this.render();\n    // \t// console.log('here')\n    // \t// console.log(parent)\n    // \tvdom.mountTo(parent);\n    // \t// console.log(vdom)\n    // \t// console.log(parent)\n    // }\n\n  }, {\n    key: \"mountTo\",\n    value: function mountTo(range) {\n      this.range = range;\n      this.update();\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      var placeholder = document.createComment(\"placeholder\");\n      var range = document.createRange();\n      range.setStart(this.range.endContainer, this.range.endOffset);\n      range.setEnd(this.range.endContainer, this.range.endOffset);\n      range.insertNode(placeholder); // console.log(this.range)\n\n      this.range.deleteContents();\n      var vdom = this.render();\n      vdom.mountTo(this.range); // placeholder.parentNode.removeChild(placeholder);\n    }\n  }, {\n    key: \"appendChild\",\n    value: function appendChild(vchild) {\n      this.children.push(vchild);\n    }\n  }, {\n    key: \"setState\",\n    value: function setState(state) {\n      var merge = function merge(oldState, newState) {\n        for (var p in newState) {\n          if (_typeof(newState[p]) === 'object') {\n            if (_typeof(oldState[p]) !== 'object' || oldState[p] === null) {\n              oldState[p] = {};\n            }\n\n            merge(oldState[p], newState[p]);\n          } else {\n            oldState[p] = newState[p];\n          }\n        }\n      };\n\n      if (!this.state && state) this.state = state;\n      merge(this.state, state);\n      console.log(this.state);\n      this.update(); //re-render\n      // 测试this.state没有的情况 => 模板中的button节点内部的this.state也不能有\n      // 测试main.js箭头函数使用普通函数情况 => 不可以，因为涉及了this指针的使用\n      // 测试main.js中state传值的value值是个对象而this.state.value值不是对象 => this.state.value值也不能是null，null也是object\n      // 测试merge 给state传值传个不是value的值 => this.state累加新属性，与value同级并列存在\n    }\n  }]);\n\n  return Component;\n}(); //Component需要被class MyComponent继承，所以也必须只能class\n//注意class和let定义的两种格式区别：=和,(class都没有)\n\nvar ToyReact = {\n  createElement: function createElement(type, attributes) {\n    // console.log(arguments);\n    // debugger;\n    // let element = document.createElement(type)\n    var element;\n    if (typeof type === \"string\") element = new ElementWrapper(type);else element = new type();\n\n    for (var name in attributes) {\n      element.setAttribute(name, attributes[name]);\n    }\n\n    var insertChildren = function insertChildren(children) {\n      var _iterator = _createForOfIteratorHelper(children),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var child = _step.value;\n\n          if (_typeof(child) === \"object\" && child instanceof Array) {\n            insertChildren(child);\n          } else {\n            if (!(child instanceof Component) && !(child instanceof ElementWrapper) && !(child instanceof TextWrapper)) child = String(child);\n            if (typeof child === \"string\") // child = document.createTextNode(child);\n              child = new TextWrapper(child);\n            element.appendChild(child);\n          }\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n    };\n\n    for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n      children[_key - 2] = arguments[_key];\n    }\n\n    insertChildren(children);\n    return element;\n  },\n  render: function render(vdom, element) {\n    var range = document.createRange(); // console.log(element)\t//html文件中script必须在body中，否则element会为null。script不能在head中\n\n    if (element.children.length) {\n      range.setStartAfter(element.lastChild);\n      range.setEndAfter(element.lastChild);\n    } else {\n      range.setStart(element, 0);\n      range.setEnd(element, 0);\n    }\n\n    vdom.mountTo(range); // <= vdom.mountTo(element); // <= element.appendChild(vdom);\n  }\n};\n\n//# sourceURL=webpack:///./ToyReact.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ToyReact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToyReact.js */ \"./ToyReact.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar MyComponent = /*#__PURE__*/function (_Component) {\n  _inherits(MyComponent, _Component);\n\n  var _super = _createSuper(MyComponent);\n\n  function MyComponent() {\n    _classCallCheck(this, MyComponent);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(MyComponent, [{\n    key: \"render\",\n    value: function render() {\n      return _ToyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(\"div\", null, _ToyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(\"span\", null, \"hello\"), _ToyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(\"span\", null, \"world!\"), _ToyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(\"div\", null, true), _ToyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(\"div\", null, this.children));\n    }\n  }]);\n\n  return MyComponent;\n}(_ToyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar Square = /*#__PURE__*/function (_Component2) {\n  _inherits(Square, _Component2);\n\n  var _super2 = _createSuper(Square);\n\n  function Square(props) {\n    var _this;\n\n    _classCallCheck(this, Square);\n\n    _this = _super2.call(this, props);\n    _this.state = {\n      value: null\n    };\n    return _this;\n  }\n\n  _createClass(Square, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return (// <button className=\"square\" onClick={function() { alert('click'); }}>\n        // \t{this.props.value}\n        // </button>\n        // <button className=\"square\" onClick={function() { this.setState({value: 'X'}); }}>\n        // \t{this.state.value}\n        // </button>\n        // // wrong => because \"this\"\n        // <button className=\"square\" onClick={() => this.setState({key: 'X'})}>\n        // \t{this.state.value}\n        // </button>\n        _ToyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(\"button\", {\n          className: \"square\",\n          onClick: function onClick() {\n            return _this2.setState({\n              value: 'X'\n            });\n          }\n        }, this.state.value ? this.state.value : \" \")\n      );\n    }\n  }]);\n\n  return Square;\n}(_ToyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar Board = /*#__PURE__*/function (_Component3) {\n  _inherits(Board, _Component3);\n\n  var _super3 = _createSuper(Board);\n\n  function Board() {\n    _classCallCheck(this, Board);\n\n    return _super3.apply(this, arguments);\n  }\n\n  _createClass(Board, [{\n    key: \"renderSquare\",\n    value: function renderSquare(i) {\n      return _ToyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(Square, {\n        value: i\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return _ToyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(\"div\", null, _ToyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(\"div\", {\n        className: \"board-row\"\n      }, this.renderSquare(0), this.renderSquare(1), this.renderSquare(2)), _ToyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(\"div\", {\n        className: \"board-row\"\n      }, this.renderSquare(3), this.renderSquare(4), this.renderSquare(5)), _ToyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(\"div\", {\n        className: \"board-row\"\n      }, this.renderSquare(6), this.renderSquare(7), this.renderSquare(8)));\n    }\n  }]);\n\n  return Board;\n}(_ToyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar a = _ToyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(Board, null); // let a = <MyComponent name=\"a\" id=\"ida\">\n// \t\t<span>hello </span>\n// \t\t<span>myWorld</span>\n// \t\t<span>!</span>\n// \t\t<div>123</div>\n// \t\t<span>1234</span>\n// \t</MyComponent>\n// console.log(a)\n\n_ToyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].render(a, document.body);\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });