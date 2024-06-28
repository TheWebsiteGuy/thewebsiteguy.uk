"use strict";
(self["webpackChunk_wintercms_wn_system_module"] = self["webpackChunk_wintercms_wn_system_module"] || []).push([["/assets/js/build/system"],{

/***/ "./assets/js/snowboard/abstracts/PluginBase.js":
/*!*****************************************************!*\
  !*** ./assets/js/snowboard/abstracts/PluginBase.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PluginBase)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Plugin base abstract.
 *
 * This class provides the base functionality for all plugins.
 *
 * @copyright 2021 Winter.
 * @author Ben Thomson <git@alfreido.com>
 */
var PluginBase = /*#__PURE__*/function () {
  /**
   * Constructor.
   *
   * The constructor is provided the Snowboard framework instance, and should not be overwritten
   * unless you absolutely know what you're doing.
   *
   * @param {Snowboard} snowboard
   */
  function PluginBase(snowboard) {
    _classCallCheck(this, PluginBase);
    this.snowboard = snowboard;
  }

  /**
   * Plugin constructor.
   *
   * This method should be treated as the true constructor of a plugin, and can be overwritten.
   * It will be called straight after construction.
   */
  return _createClass(PluginBase, [{
    key: "construct",
    value: function construct() {}

    /**
     * Defines the required plugins for this specific module to work.
     *
     * @returns {string[]} An array of plugins required for this module to work, as strings.
     */
  }, {
    key: "dependencies",
    value: function dependencies() {
      return [];
    }

    /**
     * Defines the listener methods for global events.
     *
     * @returns {Object}
     */
  }, {
    key: "listens",
    value: function listens() {
      return {};
    }

    /**
     * Plugin destructor.
     *
     * Fired when this plugin is removed. Can be manually called if you have another scenario for
     * destruction, ie. the element attached to the plugin is removed or changed.
     */
  }, {
    key: "destruct",
    value: function destruct() {
      this.detach();
      delete this.snowboard;
    }

    /**
     * Plugin destructor (old method name).
     *
     * Allows previous usage of the "destructor" method to still work.
     */
  }, {
    key: "destructor",
    value: function destructor() {
      this.destruct();
    }
  }]);
}();


/***/ }),

/***/ "./assets/js/snowboard/abstracts/Singleton.js":
/*!****************************************************!*\
  !*** ./assets/js/snowboard/abstracts/Singleton.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Singleton)
/* harmony export */ });
/* harmony import */ var _PluginBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PluginBase */ "./assets/js/snowboard/abstracts/PluginBase.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


/**
 * Singleton plugin abstract.
 *
 * This is a special definition class that the Snowboard framework will use to interpret the current plugin as a
 * "singleton". This will ensure that only one instance of the plugin class is used across the board.
 *
 * Singletons are initialised on the "domReady" event by default.
 *
 * @copyright 2021 Winter.
 * @author Ben Thomson <git@alfreido.com>
 */
var Singleton = /*#__PURE__*/function (_PluginBase) {
  function Singleton() {
    _classCallCheck(this, Singleton);
    return _callSuper(this, Singleton, arguments);
  }
  _inherits(Singleton, _PluginBase);
  return _createClass(Singleton);
}(_PluginBase__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./assets/js/snowboard/ajax/Request.js":
/*!*********************************************!*\
  !*** ./assets/js/snowboard/ajax/Request.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Request)
/* harmony export */ });
/* harmony import */ var _abstracts_PluginBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/PluginBase */ "./assets/js/snowboard/abstracts/PluginBase.js");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


/**
 * Request plugin.
 *
 * This is the default AJAX handler which will run using the `fetch()` method that is default in modern browsers.
 *
 * @copyright 2021 Winter.
 * @author Ben Thomson <git@alfreido.com>
 */
var Request = /*#__PURE__*/function (_PluginBase) {
  function Request() {
    _classCallCheck(this, Request);
    return _callSuper(this, Request, arguments);
  }
  _inherits(Request, _PluginBase);
  return _createClass(Request, [{
    key: "construct",
    value:
    /**
     * Constructor.
     *
     * The constructor accepts 2 or 3 parameters.
     *
     * If 2 parameters are provided, the first parameter is the handler name and the second
     * parameter is the options. This assumes that this is a detached AJAX request not connected to
     * an element.
     *
     * If 3 parameters are provided, the first parameter is an element or a selector, and the second
     * and third parameters are the handler and options, respectively.
     *
     * @param {HTMLElement|string} element
     * @param {string|Object} handler
     * @param {Object} options
     */
    function construct(element, handler, options) {
      var _this = this;
      if (typeof element === 'string') {
        // Allow the element to be a handler name.
        // This assumes the request is being made against no element, and the handler parameter
        // will contain options.
        if (this.isHandlerName(element)) {
          this.element = null;
          this.handler = element;
          this.options = handler || {};
        } else {
          var matchedElement = document.querySelector(element);
          if (matchedElement === null) {
            throw new Error("No element was found with the given selector: ".concat(element));
          }
          this.element = matchedElement;
          this.handler = handler;
          this.options = options || {};
        }
      } else {
        this.element = element;
        this.handler = handler;
        this.options = options || {};
      }
      this.fetchOptions = {};
      this.responseData = null;
      this.responseError = null;
      this.cancelled = false;
      this.checkRequest();
      if (!this.snowboard.globalEvent('ajaxSetup', this)) {
        this.cancelled = true;
        return;
      }
      if (this.element) {
        var event = new Event('ajaxSetup', {
          cancelable: true
        });
        event.request = this;
        this.element.dispatchEvent(event);
        if (event.defaultPrevented) {
          this.cancelled = true;
          return;
        }
      }
      if (!this.doClientValidation()) {
        this.cancelled = true;
        return;
      }
      if (this.confirm) {
        this.doConfirm().then(function (confirmed) {
          if (confirmed) {
            _this.doAjax().then(function (response) {
              if (response.cancelled) {
                _this.cancelled = true;
                _this.complete();
                return;
              }
              _this.responseData = response;
              _this.processUpdate(response).then(function () {
                if (response.X_WINTER_SUCCESS === false) {
                  _this.processError(response);
                } else {
                  _this.processResponse(response);
                }
              });
            }, function (error) {
              _this.responseError = error;
              _this.processError(error);
            });
          }
        });
      } else {
        this.doAjax().then(function (response) {
          if (response.cancelled) {
            _this.cancelled = true;
            _this.complete();
            return;
          }
          _this.responseData = response;
          _this.processUpdate(response).then(function () {
            if (response.X_WINTER_SUCCESS === false) {
              _this.processError(response);
            } else {
              _this.processResponse(response);
            }
          });
        }, function (error) {
          _this.responseError = error;
          _this.processError(error);
        });
      }
    }

    /**
     * Dependencies for this plugin.
     *
     * @returns {string[]}
     */
  }, {
    key: "dependencies",
    value: function dependencies() {
      return ['cookie', 'jsonParser'];
    }

    /**
     * Validates the element and handler given in the request.
     */
  }, {
    key: "checkRequest",
    value: function checkRequest() {
      if (this.element && this.element instanceof Element === false) {
        throw new Error('The element provided must be an Element instance');
      }
      if (this.handler === undefined) {
        throw new Error('The AJAX handler name is not specified.');
      }
      if (!this.isHandlerName(this.handler)) {
        throw new Error('Invalid AJAX handler name. The correct handler name format is: "onEvent".');
      }
    }

    /**
     * Creates a Fetch request.
     *
     * This method is made available for plugins to extend or override the default fetch() settings with their own.
     *
     * @returns {Promise}
     */
  }, {
    key: "getFetch",
    value: function getFetch() {
      this.fetchOptions = this.options.fetchOptions !== undefined && _typeof(this.options.fetchOptions) === 'object' ? this.options.fetchOptions : {
        method: 'POST',
        headers: this.headers,
        body: this.data,
        redirect: 'follow',
        mode: 'same-origin'
      };
      this.snowboard.globalEvent('ajaxFetchOptions', this.fetchOptions, this);
      return fetch(this.url, this.fetchOptions);
    }

    /**
     * Run client-side validation on the form, if available.
     *
     * @returns {boolean}
     */
  }, {
    key: "doClientValidation",
    value: function doClientValidation() {
      if (this.options.browserValidate === true && this.form) {
        if (this.form.checkValidity() === false) {
          this.form.reportValidity();
          return false;
        }
      }
      return true;
    }

    /**
     * Executes the AJAX query.
     *
     * Returns a Promise object for when the AJAX request is completed.
     *
     * @returns {Promise}
     */
  }, {
    key: "doAjax",
    value: function doAjax() {
      var _this2 = this;
      // Allow plugins to cancel the AJAX request before sending
      if (this.snowboard.globalEvent('ajaxBeforeSend', this) === false) {
        return Promise.resolve({
          cancelled: true
        });
      }
      var ajaxPromise = new Promise(function (resolve, reject) {
        _this2.getFetch().then(function (response) {
          if (!response.ok && response.status !== 406) {
            if (response.headers.has('Content-Type') && response.headers.get('Content-Type').includes('/json')) {
              response.json().then(function (responseData) {
                if (responseData.message && responseData.exception) {
                  reject(_this2.renderError(responseData.message, responseData.exception, responseData.file, responseData.line, responseData.trace));
                } else {
                  reject(responseData);
                }
              }, function (error) {
                reject(_this2.renderError("Unable to parse JSON response: ".concat(error)));
              });
            } else {
              response.text().then(function (responseText) {
                reject(_this2.renderError(responseText));
              }, function (error) {
                reject(_this2.renderError("Unable to process response: ".concat(error)));
              });
            }
            return;
          }
          if (response.headers.has('Content-Type') && response.headers.get('Content-Type').includes('/json')) {
            response.json().then(function (responseData) {
              resolve(_objectSpread(_objectSpread({}, responseData), {}, {
                X_WINTER_SUCCESS: response.status !== 406,
                X_WINTER_RESPONSE_CODE: response.status
              }));
            }, function (error) {
              reject(_this2.renderError("Unable to parse JSON response: ".concat(error)));
            });
          } else {
            response.text().then(function (responseData) {
              resolve(responseData);
            }, function (error) {
              reject(_this2.renderError("Unable to process response: ".concat(error)));
            });
          }
        }, function (responseError) {
          reject(_this2.renderError("Unable to retrieve a response from the server: ".concat(responseError)));
        });
      });
      this.snowboard.globalEvent('ajaxStart', ajaxPromise, this);
      if (this.element) {
        var event = new Event('ajaxPromise');
        event.promise = ajaxPromise;
        this.element.dispatchEvent(event);
      }
      return ajaxPromise;
    }

    /**
     * Prepares for updating the partials from the AJAX response.
     *
     * If any partials are returned from the AJAX response, this method will also action the partial updates.
     *
     * Returns a Promise object which tracks when the partial update is complete.
     *
     * @param {Object} response
     * @returns {Promise}
     */
  }, {
    key: "processUpdate",
    value: function processUpdate(response) {
      var _this3 = this;
      return new Promise(function (resolve, reject) {
        if (typeof _this3.options.beforeUpdate === 'function') {
          if (_this3.options.beforeUpdate.apply(_this3, [response]) === false) {
            resolve();
            return;
          }
        }

        // Extract partial information
        var partials = {};
        Object.entries(response).forEach(function (entry) {
          var _entry = _slicedToArray(entry, 2),
            key = _entry[0],
            value = _entry[1];
          if (key.substr(0, 8) !== 'X_WINTER') {
            partials[key] = value;
          }
        });
        if (Object.keys(partials).length === 0) {
          if (response.X_WINTER_ASSETS) {
            _this3.processAssets(response.X_WINTER_ASSETS).then(function () {
              resolve();
            }, function () {
              reject();
            });
          } else {
            resolve();
          }
          return;
        }
        var promises = _this3.snowboard.globalPromiseEvent('ajaxBeforeUpdate', response, _this3);
        promises.then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (!response.X_WINTER_ASSETS) {
                  _context.next = 3;
                  break;
                }
                _context.next = 3;
                return _this3.processAssets(response.X_WINTER_ASSETS);
              case 3:
                _this3.doUpdate(partials).then(function () {
                  // Allow for HTML redraw
                  window.requestAnimationFrame(function () {
                    return resolve();
                  });
                }, function () {
                  reject();
                });
              case 4:
              case "end":
                return _context.stop();
            }
          }, _callee);
        })), function () {
          resolve();
        });
      });
    }

    /**
     * Updates the partials with the given content.
     *
     * @param {Object} partials
     * @returns {Promise}
     */
  }, {
    key: "doUpdate",
    value: function doUpdate(partials) {
      var _this4 = this;
      return new Promise(function (resolve) {
        var affected = [];
        Object.entries(partials).forEach(function (entry) {
          var _entry2 = _slicedToArray(entry, 2),
            partial = _entry2[0],
            content = _entry2[1];
          var selector = _this4.options.update && _this4.options.update[partial] ? _this4.options.update[partial] : partial;
          var mode = 'replace';
          if (selector.substr(0, 1) === '@') {
            mode = 'append';
            selector = selector.substr(1);
          } else if (selector.substr(0, 1) === '^') {
            mode = 'prepend';
            selector = selector.substr(1);
          } else if (selector.substr(0, 1) !== '#' && selector.substr(0, 1) !== '.') {
            mode = 'noop';
          }
          var elements = document.querySelectorAll(selector);
          if (elements.length > 0) {
            elements.forEach(function (element) {
              switch (mode) {
                case 'append':
                  element.innerHTML += content;
                  break;
                case 'prepend':
                  element.innerHTML = content + element.innerHTML;
                  break;
                case 'noop':
                  break;
                case 'replace':
                default:
                  element.innerHTML = content;
                  break;
              }
              affected.push(element);

              // Fire update event for each element that is updated
              _this4.snowboard.globalEvent('ajaxUpdate', element, content, _this4);
              var event = new Event('ajaxUpdate');
              event.content = content;
              element.dispatchEvent(event);
            });
          }
        });
        _this4.snowboard.globalEvent('ajaxUpdateComplete', affected, _this4);
        resolve();
      });
    }

    /**
     * Processes the response data.
     *
     * This fires off all necessary processing functions depending on the response, ie. if there's any flash
     * messages to handle, or any redirects to be undertaken.
     *
     * @param {Object} response
     * @returns {void}
     */
  }, {
    key: "processResponse",
    value: function processResponse(response) {
      if (this.options.success && typeof this.options.success === 'function') {
        if (this.options.success(this.responseData, this) === false) {
          return;
        }
      }

      // Allow plugins to cancel any further response handling
      if (this.snowboard.globalEvent('ajaxSuccess', this.responseData, this) === false) {
        return;
      }

      // Allow the element to cancel any further response handling
      if (this.element) {
        var event = new Event('ajaxDone', {
          cancelable: true
        });
        event.responseData = this.responseData;
        event.request = this;
        this.element.dispatchEvent(event);
        if (event.defaultPrevented) {
          return;
        }
      }
      if (this.flash && response.X_WINTER_FLASH_MESSAGES) {
        this.processFlashMessages(response.X_WINTER_FLASH_MESSAGES);
      }

      // Check for a redirect from the response, or use the redirect as specified in the options.
      if (this.redirect || response.X_WINTER_REDIRECT) {
        this.processRedirect(this.redirect || response.X_WINTER_REDIRECT);
        return;
      }
      this.complete();
    }

    /**
     * Processes an error response from the AJAX request.
     *
     * This fires off all necessary processing functions depending on the error response, ie. if there's any error or
     * validation messages to handle.
     *
     * @param {Object|Error} error
     */
  }, {
    key: "processError",
    value: function processError(error) {
      if (this.options.error && typeof this.options.error === 'function') {
        if (this.options.error(this.responseError, this) === false) {
          return;
        }
      }

      // Allow plugins to cancel any further error handling
      if (this.snowboard.globalEvent('ajaxError', this.responseError, this) === false) {
        return;
      }

      // Allow the element to cancel any further error handling
      if (this.element) {
        var event = new Event('ajaxFail', {
          cancelable: true
        });
        event.responseError = this.responseError;
        event.request = this;
        this.element.dispatchEvent(event);
        if (event.defaultPrevented) {
          return;
        }
      }
      if (error instanceof Error) {
        this.processErrorMessage(error.message);
      } else {
        var skipError = false;

        // Process validation errors
        if (error.X_WINTER_ERROR_FIELDS) {
          skipError = this.processValidationErrors(error.X_WINTER_ERROR_FIELDS);
        }
        if (error.X_WINTER_ERROR_MESSAGE && !skipError) {
          this.processErrorMessage(error.X_WINTER_ERROR_MESSAGE);
        }
      }
      this.complete();
    }

    /**
     * Processes a redirect response.
     *
     * By default, this processor will simply redirect the user in their browser.
     *
     * Plugins can augment this functionality from the `ajaxRedirect` event. You may also override this functionality on
     * a per-request basis through the `handleRedirectResponse` callback option. If a `false` is returned from either, the
     * redirect will be cancelled.
     *
     * @param {string} url
     * @returns {void}
     */
  }, {
    key: "processRedirect",
    value: function processRedirect(url) {
      var _this5 = this;
      // Run a custom per-request redirect handler. If false is returned, don't run the redirect.
      if (typeof this.options.handleRedirectResponse === 'function') {
        if (this.options.handleRedirectResponse.apply(this, [url]) === false) {
          return;
        }
      }

      // Allow plugins to cancel the redirect
      if (this.snowboard.globalEvent('ajaxRedirect', url, this) === false) {
        return;
      }

      // Indicate that the AJAX request is finished if we're still on the current page
      // so that the loading indicator for redirects that just change the hash value of
      // the URL instead of leaving the page will properly stop.
      // @see https://github.com/octobercms/october/issues/2780
      window.addEventListener('popstate', function () {
        if (_this5.element) {
          var event = document.createEvent('CustomEvent');
          event.eventName = 'ajaxRedirected';
          _this5.element.dispatchEvent(event);
        }
      }, {
        once: true
      });
      window.location.assign(url);
    }

    /**
     * Processes an error message.
     *
     * By default, this processor will simply alert the user through a simple `alert()` call.
     *
     * Plugins can augment this functionality from the `ajaxErrorMessage` event. You may also override this functionality
     * on a per-request basis through the `handleErrorMessage` callback option. If a `false` is returned from either, the
     * error message handling will be cancelled.
     *
     * @param {string} message
     * @returns {void}
     */
  }, {
    key: "processErrorMessage",
    value: function processErrorMessage(message) {
      // Run a custom per-request handler for error messages. If false is returned, do not process the error messages
      // any further.
      if (typeof this.options.handleErrorMessage === 'function') {
        if (this.options.handleErrorMessage.apply(this, [message]) === false) {
          return;
        }
      }

      // Allow plugins to cancel the error message being shown
      if (this.snowboard.globalEvent('ajaxErrorMessage', message, this) === false) {
        return;
      }

      // By default, show a browser error message
      window.alert(message);
    }

    /**
     * Processes flash messages from the response.
     *
     * By default, no flash message handling will occur.
     *
     * Plugins can augment this functionality from the `ajaxFlashMessages` event. You may also override this functionality
     * on a per-request basis through the `handleFlashMessages` callback option. If a `false` is returned from either, the
     * flash message handling will be cancelled.
     *
     * @param {Object} messages
     * @returns
     */
  }, {
    key: "processFlashMessages",
    value: function processFlashMessages(messages) {
      // Run a custom per-request flash handler. If false is returned, don't show the flash message
      if (typeof this.options.handleFlashMessages === 'function') {
        if (this.options.handleFlashMessages.apply(this, [messages]) === false) {
          return;
        }
      }
      this.snowboard.globalEvent('ajaxFlashMessages', messages, this);
    }

    /**
     * Processes validation errors for fields.
     *
     * By default, no validation error handling will occur.
     *
     * Plugins can augment this functionality from the `ajaxValidationErrors` event. You may also override this functionality
     * on a per-request basis through the `handleValidationErrors` callback option. If a `false` is returned from either, the
     * validation error handling will be cancelled.
     *
     * @param {Object} fields
     * @returns
     */
  }, {
    key: "processValidationErrors",
    value: function processValidationErrors(fields) {
      if (typeof this.options.handleValidationErrors === 'function') {
        if (this.options.handleValidationErrors.apply(this, [this.form, fields]) === false) {
          return true;
        }
      }

      // Allow plugins to cancel the validation errors being handled
      if (this.snowboard.globalEvent('ajaxValidationErrors', this.form, fields, this) === false) {
        return true;
      }
      return false;
    }

    /**
     * Processes assets returned by an AJAX request.
     *
     * By default, no asset processing will occur and this will return a resolved Promise.
     *
     * Plugins can augment this functionality from the `ajaxLoadAssets` event. This event is considered blocking, and
     * allows assets to be loaded or processed before continuing with any additional functionality.
     *
     * @param {Object} assets
     * @returns {Promise}
     */
  }, {
    key: "processAssets",
    value: function processAssets(assets) {
      return this.snowboard.globalPromiseEvent('ajaxLoadAssets', assets);
    }

    /**
     * Confirms the request with the user before proceeding.
     *
     * This is an asynchronous method. By default, it will use the browser's `confirm()` method to query the user to
     * confirm the action. This method will return a Promise with a boolean value depending on whether the user confirmed
     * or not.
     *
     * Plugins can augment this functionality from the `ajaxConfirmMessage` event. You may also override this functionality
     * on a per-request basis through the `handleConfirmMessage` callback option. If a `false` is returned from either,
     * the confirmation is assumed to have been denied.
     *
     * @returns {Promise}
     */
  }, {
    key: "doConfirm",
    value: (function () {
      var _doConfirm = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var promises, fulfilled;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(typeof this.options.handleConfirmMessage === 'function')) {
                _context2.next = 4;
                break;
              }
              if (!(this.options.handleConfirmMessage.apply(this, [this.confirm]) === false)) {
                _context2.next = 3;
                break;
              }
              return _context2.abrupt("return", false);
            case 3:
              return _context2.abrupt("return", true);
            case 4:
              if (!(this.snowboard.listensToEvent('ajaxConfirmMessage').length === 0)) {
                _context2.next = 6;
                break;
              }
              return _context2.abrupt("return", window.confirm(this.confirm));
            case 6:
              // Run custom plugin confirmations
              promises = this.snowboard.globalPromiseEvent('ajaxConfirmMessage', this.confirm, this);
              _context2.prev = 7;
              _context2.next = 10;
              return promises;
            case 10:
              fulfilled = _context2.sent;
              if (!fulfilled) {
                _context2.next = 13;
                break;
              }
              return _context2.abrupt("return", true);
            case 13:
              _context2.next = 18;
              break;
            case 15:
              _context2.prev = 15;
              _context2.t0 = _context2["catch"](7);
              return _context2.abrupt("return", false);
            case 18:
              return _context2.abrupt("return", false);
            case 19:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[7, 15]]);
      }));
      function doConfirm() {
        return _doConfirm.apply(this, arguments);
      }
      return doConfirm;
    }()
    /**
     * Fires off completion events for the Request.
     */
    )
  }, {
    key: "complete",
    value: function complete() {
      if (this.options.complete && typeof this.options.complete === 'function') {
        this.options.complete(this.responseData, this);
      }
      this.snowboard.globalEvent('ajaxDone', this.responseData, this);
      if (this.element) {
        var event = new Event('ajaxAlways');
        event.request = this;
        event.responseData = this.responseData;
        event.responseError = this.responseError;
        this.element.dispatchEvent(event);
      }

      // Fire off the destructor
      this.destruct();
    }
  }, {
    key: "form",
    get: function get() {
      if (this.options.form) {
        if (typeof this.options.form === 'string') {
          return document.querySelector(this.options.form);
        }
        return this.options.form;
      }
      if (!this.element) {
        return null;
      }
      if (this.element.tagName === 'FORM') {
        return this.element;
      }
      return this.element.closest('form');
    }
  }, {
    key: "context",
    get: function get() {
      return {
        handler: this.handler,
        options: this.options
      };
    }
  }, {
    key: "headers",
    get: function get() {
      var headers = {
        'X-Requested-With': 'XMLHttpRequest',
        // Keeps compatibility with jQuery AJAX
        'X-WINTER-REQUEST-HANDLER': this.handler,
        'X-WINTER-REQUEST-PARTIALS': this.extractPartials(this.options.update || [])
      };
      if (this.flash) {
        headers['X-WINTER-REQUEST-FLASH'] = 1;
      }
      if (this.xsrfToken) {
        headers['X-XSRF-TOKEN'] = this.xsrfToken;
      }
      return headers;
    }
  }, {
    key: "loading",
    get: function get() {
      return this.options.loading || false;
    }
  }, {
    key: "url",
    get: function get() {
      return this.options.url || window.location.href;
    }
  }, {
    key: "redirect",
    get: function get() {
      return this.options.redirect && this.options.redirect.length ? this.options.redirect : null;
    }
  }, {
    key: "flash",
    get: function get() {
      return this.options.flash || false;
    }
  }, {
    key: "files",
    get: function get() {
      if (this.options.files === true) {
        if (FormData === undefined) {
          this.snowboard.debug('This browser does not support file uploads');
          return false;
        }
        return true;
      }
      return false;
    }
  }, {
    key: "xsrfToken",
    get: function get() {
      return this.snowboard.cookie().get('XSRF-TOKEN');
    }
  }, {
    key: "data",
    get: function get() {
      var data = _typeof(this.options.data) === 'object' ? this.options.data : {};
      var formData = new FormData(this.form || undefined);
      if (Object.keys(data).length > 0) {
        Object.entries(data).forEach(function (entry) {
          var _entry3 = _slicedToArray(entry, 2),
            key = _entry3[0],
            value = _entry3[1];
          formData.append(key, value);
        });
      }
      return formData;
    }
  }, {
    key: "confirm",
    get: function get() {
      return this.options.confirm || false;
    }

    /**
     * Extracts partials.
     *
     * @param {Object} update
     * @returns {string}
     */
  }, {
    key: "extractPartials",
    value: function extractPartials(update) {
      return Object.keys(update).join('&');
    }

    /**
     * Renders an error with useful debug information.
     *
     * This method is used internally when the AJAX request could not be completed or processed correctly due to an error.
     *
     * @param {string} message
     * @param {string} exception
     * @param {string} file
     * @param {Number} line
     * @param {string[]} trace
     * @returns {Error}
     */
  }, {
    key: "renderError",
    value: function renderError(message, exception, file, line, trace) {
      var error = new Error(message);
      error.exception = exception || null;
      error.file = file || null;
      error.line = line || null;
      error.trace = trace || [];
      return error;
    }

    /**
     * Checks a given string to see if it is a valid AJAX handler name.
     *
     * @param {String} name
     * @returns {Boolean}
     */
  }, {
    key: "isHandlerName",
    value: function isHandlerName(name) {
      return /^(?:\w+:{2})?on[A-Z0-9]/.test(name);
    }
  }]);
}(_abstracts_PluginBase__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./assets/js/snowboard/extras/AssetLoader.js":
/*!***************************************************!*\
  !*** ./assets/js/snowboard/extras/AssetLoader.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AssetLoader)
/* harmony export */ });
/* harmony import */ var _abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/Singleton */ "./assets/js/snowboard/abstracts/Singleton.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


/**
 * Asset Loader.
 *
 * Provides simple asset loading functionality for Snowboard, making it easy to pre-load images or
 * include JavaScript or CSS assets on the fly.
 *
 * By default, this loader will listen to any assets that have been requested to load in an AJAX
 * response, such as responses from a component.
 *
 * You can also load assets manually by calling the following:
 *
 * ```js
 * Snowboard.addPlugin('assetLoader', AssetLoader);
 * Snowboard.assetLoader().processAssets(assets);
 * ```
 *
 * @copyright 2021 Winter.
 * @author Ben Thomson <git@alfreido.com>
 */
var AssetLoader = /*#__PURE__*/function (_Singleton) {
  function AssetLoader() {
    _classCallCheck(this, AssetLoader);
    return _callSuper(this, AssetLoader, arguments);
  }
  _inherits(AssetLoader, _Singleton);
  return _createClass(AssetLoader, [{
    key: "listens",
    value:
    /**
     * Event listeners.
     *
     * @returns {Object}
     */
    function listens() {
      return {
        ajaxLoadAssets: 'load'
      };
    }

    /**
     * Dependencies.
     *
     * @returns {Array}
     */
  }, {
    key: "dependencies",
    value: function dependencies() {
      return ['url'];
    }

    /**
     * Process and load assets.
     *
     * The `assets` property of this method requires an object with any of the following keys and an
     * array of paths:
     *
     * - `js`: An array of JavaScript URLs to load
     * - `css`: An array of CSS stylesheet URLs to load
     * - `img`: An array of image URLs to pre-load
     *
     * Both `js` and `css` files will be automatically injected, however `img` files will not.
     *
     * This method will return a Promise that resolves when all required assets are loaded. If an
     * asset fails to load, this Promise will be rejected.
     *
     * ESLint *REALLY* doesn't like this code, but ignore it. It's the only way it works.
     *
     * @param {Object} assets
     * @returns {Promise}
     */
  }, {
    key: "load",
    value: (function () {
      var _load = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(assets) {
        var _iterator, _step, script, _iterator2, _step2, style, _iterator3, _step3, image;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(assets.js && assets.js.length > 0)) {
                _context.next = 24;
                break;
              }
              _iterator = _createForOfIteratorHelper(assets.js);
              _context.prev = 2;
              _iterator.s();
            case 4:
              if ((_step = _iterator.n()).done) {
                _context.next = 16;
                break;
              }
              script = _step.value;
              _context.prev = 6;
              _context.next = 9;
              return this.loadScript(script);
            case 9:
              _context.next = 14;
              break;
            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](6);
              return _context.abrupt("return", Promise.reject(_context.t0));
            case 14:
              _context.next = 4;
              break;
            case 16:
              _context.next = 21;
              break;
            case 18:
              _context.prev = 18;
              _context.t1 = _context["catch"](2);
              _iterator.e(_context.t1);
            case 21:
              _context.prev = 21;
              _iterator.f();
              return _context.finish(21);
            case 24:
              if (!(assets.css && assets.css.length > 0)) {
                _context.next = 48;
                break;
              }
              _iterator2 = _createForOfIteratorHelper(assets.css);
              _context.prev = 26;
              _iterator2.s();
            case 28:
              if ((_step2 = _iterator2.n()).done) {
                _context.next = 40;
                break;
              }
              style = _step2.value;
              _context.prev = 30;
              _context.next = 33;
              return this.loadStyle(style);
            case 33:
              _context.next = 38;
              break;
            case 35:
              _context.prev = 35;
              _context.t2 = _context["catch"](30);
              return _context.abrupt("return", Promise.reject(_context.t2));
            case 38:
              _context.next = 28;
              break;
            case 40:
              _context.next = 45;
              break;
            case 42:
              _context.prev = 42;
              _context.t3 = _context["catch"](26);
              _iterator2.e(_context.t3);
            case 45:
              _context.prev = 45;
              _iterator2.f();
              return _context.finish(45);
            case 48:
              if (!(assets.img && assets.img.length > 0)) {
                _context.next = 72;
                break;
              }
              _iterator3 = _createForOfIteratorHelper(assets.img);
              _context.prev = 50;
              _iterator3.s();
            case 52:
              if ((_step3 = _iterator3.n()).done) {
                _context.next = 64;
                break;
              }
              image = _step3.value;
              _context.prev = 54;
              _context.next = 57;
              return this.loadImage(image);
            case 57:
              _context.next = 62;
              break;
            case 59:
              _context.prev = 59;
              _context.t4 = _context["catch"](54);
              return _context.abrupt("return", Promise.reject(_context.t4));
            case 62:
              _context.next = 52;
              break;
            case 64:
              _context.next = 69;
              break;
            case 66:
              _context.prev = 66;
              _context.t5 = _context["catch"](50);
              _iterator3.e(_context.t5);
            case 69:
              _context.prev = 69;
              _iterator3.f();
              return _context.finish(69);
            case 72:
              return _context.abrupt("return", Promise.resolve());
            case 73:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[2, 18, 21, 24], [6, 11], [26, 42, 45, 48], [30, 35], [50, 66, 69, 72], [54, 59]]);
      }));
      function load(_x) {
        return _load.apply(this, arguments);
      }
      return load;
    }()
    /**
     * Injects and loads a JavaScript URL into the DOM.
     *
     * The script will be appended before the closing `</body>` tag.
     *
     * @param {String} script
     * @returns {Promise}
     */
    )
  }, {
    key: "loadScript",
    value: function loadScript(script) {
      var _this = this;
      return new Promise(function (resolve, reject) {
        // Resolve script URL
        script = _this.snowboard.url().asset(script);

        // Check that script is not already loaded
        var loaded = document.querySelector("script[src=\"".concat(script, "\"]"));
        if (loaded) {
          resolve();
          return;
        }

        // Create script
        var domScript = document.createElement('script');
        domScript.setAttribute('type', 'text/javascript');
        domScript.setAttribute('src', script);
        domScript.addEventListener('load', function () {
          _this.snowboard.globalEvent('assetLoader.loaded', 'script', script, domScript);
          resolve();
        });
        domScript.addEventListener('error', function () {
          _this.snowboard.globalEvent('assetLoader.error', 'script', script, domScript);
          reject(new Error("Unable to load script file: \"".concat(script, "\"")));
        });
        document.body.append(domScript);
      });
    }

    /**
     * Injects and loads a CSS stylesheet into the DOM.
     *
     * The stylesheet will be appended before the closing `</head>` tag.
     *
     * @param {String} style
     * @returns {Promise}
     */
  }, {
    key: "loadStyle",
    value: function loadStyle(style) {
      var _this2 = this;
      return new Promise(function (resolve, reject) {
        // Resolve style URL
        style = _this2.snowboard.url().asset(style);

        // Check that stylesheet is not already loaded
        var loaded = document.querySelector("link[rel=\"stylesheet\"][href=\"".concat(style, "\"]"));
        if (loaded) {
          resolve();
          return;
        }

        // Create stylesheet
        var domCss = document.createElement('link');
        domCss.setAttribute('rel', 'stylesheet');
        domCss.setAttribute('href', style);
        domCss.addEventListener('load', function () {
          _this2.snowboard.globalEvent('assetLoader.loaded', 'style', style, domCss);
          resolve();
        });
        domCss.addEventListener('error', function () {
          _this2.snowboard.globalEvent('assetLoader.error', 'style', style, domCss);
          reject(new Error("Unable to load stylesheet file: \"".concat(style, "\"")));
        });
        document.head.append(domCss);
      });
    }

    /**
     * Pre-loads an image.
     *
     * The image will not be injected into the DOM.
     *
     * @param {String} image
     * @returns {Promise}
     */
  }, {
    key: "loadImage",
    value: function loadImage(image) {
      var _this3 = this;
      return new Promise(function (resolve, reject) {
        // Resolve script URL
        image = _this3.snowboard.url().asset(image);
        var img = new Image();
        img.addEventListener('load', function () {
          _this3.snowboard.globalEvent('assetLoader.loaded', 'image', image, img);
          resolve();
        });
        img.addEventListener('error', function () {
          _this3.snowboard.globalEvent('assetLoader.error', 'image', image, img);
          reject(new Error("Unable to load image file: \"".concat(image, "\"")));
        });
        img.src = image;
      });
    }
  }]);
}(_abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./assets/js/snowboard/extras/AttachLoading.js":
/*!*****************************************************!*\
  !*** ./assets/js/snowboard/extras/AttachLoading.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AttachLoading)
/* harmony export */ });
/* harmony import */ var _abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/Singleton */ "./assets/js/snowboard/abstracts/Singleton.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


/**
 * Allows attaching a loading class on elements that an AJAX request is targeting.
 *
 * @copyright 2021 Winter.
 * @author Ben Thomson <git@alfreido.com>
 */
var AttachLoading = /*#__PURE__*/function (_Singleton) {
  function AttachLoading() {
    _classCallCheck(this, AttachLoading);
    return _callSuper(this, AttachLoading, arguments);
  }
  _inherits(AttachLoading, _Singleton);
  return _createClass(AttachLoading, [{
    key: "dependencies",
    value:
    /**
     * Defines dependenices.
     *
     * @returns {string[]}
     */
    function dependencies() {
      return ['request'];
    }

    /**
     * Defines listeners.
     *
     * @returns {Object}
     */
  }, {
    key: "listens",
    value: function listens() {
      return {
        ajaxStart: 'ajaxStart',
        ajaxDone: 'ajaxDone'
      };
    }
  }, {
    key: "ajaxStart",
    value: function ajaxStart(promise, request) {
      var _this = this;
      if (!request.element) {
        return;
      }
      if (request.element.tagName === 'FORM') {
        var loadElements = request.element.querySelectorAll('[data-attach-loading]');
        if (loadElements.length > 0) {
          loadElements.forEach(function (element) {
            element.classList.add(_this.getLoadingClass(element));
          });
        }
      } else if (request.element.dataset.attachLoading !== undefined) {
        request.element.classList.add(this.getLoadingClass(request.element));
      }
    }
  }, {
    key: "ajaxDone",
    value: function ajaxDone(data, request) {
      var _this2 = this;
      if (!request.element) {
        return;
      }
      if (request.element.tagName === 'FORM') {
        var loadElements = request.element.querySelectorAll('[data-attach-loading]');
        if (loadElements.length > 0) {
          loadElements.forEach(function (element) {
            element.classList.remove(_this2.getLoadingClass(element));
          });
        }
      } else if (request.element.dataset.attachLoading !== undefined) {
        request.element.classList.remove(this.getLoadingClass(request.element));
      }
    }
  }, {
    key: "getLoadingClass",
    value: function getLoadingClass(element) {
      return element.dataset.attachLoading !== undefined && element.dataset.attachLoading !== '' ? element.dataset.attachLoading : 'wn-loading';
    }
  }]);
}(_abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./assets/js/snowboard/extras/DataConfig.js":
/*!**************************************************!*\
  !*** ./assets/js/snowboard/extras/DataConfig.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DataConfig)
/* harmony export */ });
/* harmony import */ var _abstracts_PluginBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/PluginBase */ "./assets/js/snowboard/abstracts/PluginBase.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


/**
 * Data configuration provider.
 *
 * Provides a mechanism for passing configuration data through an element's data attributes. This
 * is generally used for widgets or UI interactions to configure them.
 *
 * @copyright 2022 Winter.
 * @author Ben Thomson <git@alfreido.com>
 */
var DataConfig = /*#__PURE__*/function (_PluginBase) {
  function DataConfig() {
    _classCallCheck(this, DataConfig);
    return _callSuper(this, DataConfig, arguments);
  }
  _inherits(DataConfig, _PluginBase);
  return _createClass(DataConfig, [{
    key: "construct",
    value:
    /**
     * Constructor.
     *
     * @param {PluginBase} instance
     * @param {HTMLElement} element
     * @param {Object} localConfig
     */
    function construct(instance, element, localConfig) {
      if (instance instanceof _abstracts_PluginBase__WEBPACK_IMPORTED_MODULE_0__["default"] === false) {
        throw new Error('You must provide a Snowboard plugin to enable data configuration');
      }
      if (element instanceof HTMLElement === false) {
        throw new Error('Data configuration can only be extracted from HTML elements');
      }
      this.instance = instance;
      this.element = element;
      this.localConfig = localConfig || {};
      this.instanceConfig = {};
      this.acceptedConfigs = {};
      this.refresh();
    }

    /**
     * Gets the config for this instance.
     *
     * If the `config` parameter is unspecified, returns the entire configuration.
     *
     * @param {string} config
     */
  }, {
    key: "get",
    value: function get(config) {
      if (config === undefined) {
        return this.instanceConfig;
      }
      if (this.instanceConfig[config] !== undefined) {
        return this.instanceConfig[config];
      }
      return undefined;
    }

    /**
     * Sets the config for this instance.
     *
     * This allows you to override, at runtime, any configuration value as necessary.
     *
     * @param {string} config
     * @param {any} value
     * @param {boolean} persist
     */
  }, {
    key: "set",
    value: function set(config, value, persist) {
      if (config === undefined) {
        throw new Error('You must provide a configuration key to set');
      }
      this.instanceConfig[config] = value;
      if (persist === true) {
        this.element.dataset[config] = value;
        this.localConfig[config] = value;
      }
    }

    /**
     * Refreshes the configuration from the element.
     *
     * This will allow you to make changes to the data config on a DOM level and re-apply them
     * to the config on the JavaScript side.
     */
  }, {
    key: "refresh",
    value: function refresh() {
      this.acceptedConfigs = this.getAcceptedConfigs();
      this.instanceConfig = this.processConfig();
    }

    /**
     * Determines the available configurations that can be set through the data config.
     *
     * If an instance has an `acceptAllDataConfigs` property, set to `true`, then all data
     * attributes will be available as configuration values. This can be a security concern, so
     * tread carefully.
     *
     * Otherwise, available configurations will be determined by the keys available in an object
     * returned by a `defaults()` method in the instance.
     *
     * @returns {string[]|boolean}
     */
  }, {
    key: "getAcceptedConfigs",
    value: function getAcceptedConfigs() {
      if (this.instance.acceptAllDataConfigs !== undefined && this.instance.acceptAllDataConfigs === true) {
        return true;
      }
      if (this.instance.defaults !== undefined && typeof this.instance.defaults === 'function' && _typeof(this.instance.defaults()) === 'object') {
        return Object.keys(this.instance.defaults());
      }
      return false;
    }

    /**
     * Returns the default values for the instance.
     *
     * This will be an empty object if the instance either does not have a `defaults()` method, or
     * the method itself does not return an object.
     *
     * @returns {object}
     */
  }, {
    key: "getDefaults",
    value: function getDefaults() {
      if (this.instance.defaults !== undefined && typeof this.instance.defaults === 'function' && _typeof(this.instance.defaults()) === 'object') {
        return this.instance.defaults();
      }
      return {};
    }

    /**
     * Processes the configuration.
     *
     * Loads up the defaults, then populates it with any configuration values provided by the data
     * attributes, based on the rules of the accepted configurations.
     *
     * This configuration object is then cached and available through `config.get()` calls.
     *
     * @returns {object}
     */
  }, {
    key: "processConfig",
    value: function processConfig() {
      var config = this.getDefaults();
      if (this.acceptedConfigs === false) {
        return config;
      }

      /* eslint-disable */
      for (var key in this.element.dataset) {
        if (this.acceptedConfigs === true || this.acceptedConfigs.includes(key)) {
          config[key] = this.coerceValue(this.element.dataset[key]);
        }
      }
      for (var _key in this.localConfig) {
        if (this.acceptedConfigs === true || this.acceptedConfigs.includes(_key)) {
          config[_key] = this.localConfig[_key];
        }
      }
      /* eslint-enable */

      return config;
    }

    /**
     * Coerces configuration values for JavaScript.
     *
     * Takes the string value returned from the data attribute and coerces it into a more suitable
     * type for JavaScript processing.
     *
     * @param {*} value
     * @returns {*}
     */
  }, {
    key: "coerceValue",
    value: function coerceValue(value) {
      var stringValue = String(value);

      // Null value
      if (stringValue === 'null') {
        return null;
      }

      // Undefined value
      if (stringValue === 'undefined') {
        return undefined;
      }

      // Base64 value
      if (stringValue.startsWith('base64:')) {
        var base64str = stringValue.replace(/^base64:/, '');
        var decoded = atob(base64str);
        return this.coerceValue(decoded);
      }

      // Boolean value
      if (['true', 'yes'].includes(stringValue.toLowerCase())) {
        return true;
      }
      if (['false', 'no'].includes(stringValue.toLowerCase())) {
        return false;
      }

      // Numeric value
      if (/^[-+]?[0-9]+(\.[0-9]+)?$/.test(stringValue)) {
        return Number(stringValue);
      }

      // JSON value
      try {
        return this.snowboard.jsonParser().parse(stringValue);
      } catch (e) {
        return stringValue === '' ? true : stringValue;
      }
    }
  }]);
}(_abstracts_PluginBase__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./assets/js/snowboard/extras/Flash.js":
/*!*********************************************!*\
  !*** ./assets/js/snowboard/extras/Flash.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Flash)
/* harmony export */ });
/* harmony import */ var _abstracts_PluginBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/PluginBase */ "./assets/js/snowboard/abstracts/PluginBase.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


/**
 * Provides flash messages for the CMS.
 *
 * Flash messages will pop up at the top center of the page and will remain for 7 seconds by default. Hovering over
 * the message will reset and pause the timer. Clicking on the flash message will dismiss it.
 *
 * Arguments:
 *  - "message": The content of the flash message. HTML is accepted.
 *  - "type": The type of flash message. This is appended as a class to the flash message itself.
 *  - "duration": How long the flash message will stay visible for, in seconds. Default: 7 seconds.
 *
 * Usage:
 *      Snowboard.flash('This is a flash message', 'info', 8);
 *
 * @copyright 2021 Winter.
 * @author Ben Thomson <git@alfreido.com>
 */
var Flash = /*#__PURE__*/function (_PluginBase) {
  function Flash() {
    _classCallCheck(this, Flash);
    return _callSuper(this, Flash, arguments);
  }
  _inherits(Flash, _PluginBase);
  return _createClass(Flash, [{
    key: "construct",
    value:
    /**
     * Constructor.
     *
     * @param {string} message
     * @param {string} type
     * @param {Number} duration
     */
    function construct(message, type, duration) {
      this.message = message;
      this.type = type || 'default';
      this.duration = Number(duration || 7);
      if (this.duration < 0) {
        throw new Error('Flash duration must be a positive number, or zero');
      }
      this.clear();
      this.timer = null;
      this.flashTimer = null;
      this.create();
    }

    /**
     * Defines dependencies.
     *
     * @returns {string[]}
     */
  }, {
    key: "dependencies",
    value: function dependencies() {
      return ['transition'];
    }

    /**
     * Destructor.
     *
     * This will ensure the flash message is removed and timeout is cleared if the module is removed.
     */
  }, {
    key: "destruct",
    value: function destruct() {
      if (this.timer !== null) {
        window.clearTimeout(this.timer);
      }
      if (this.flashTimer) {
        this.flashTimer.remove();
      }
      if (this.flash) {
        this.flash.remove();
        this.flash = null;
        this.flashTimer = null;
      }
      _get(_getPrototypeOf(Flash.prototype), "destruct", this).call(this);
    }

    /**
     * Creates the flash message.
     */
  }, {
    key: "create",
    value: function create() {
      var _this = this;
      this.snowboard.globalEvent('flash.create', this);
      this.flash = document.createElement('DIV');
      this.flash.innerHTML = this.message;
      this.flash.classList.add('flash-message', this.type);
      this.flash.removeAttribute('data-control');
      this.flash.addEventListener('click', function () {
        return _this.remove();
      });
      this.flash.addEventListener('mouseover', function () {
        return _this.stopTimer();
      });
      this.flash.addEventListener('mouseout', function () {
        return _this.startTimer();
      });
      if (this.duration > 0) {
        this.flashTimer = document.createElement('DIV');
        this.flashTimer.classList.add('flash-timer');
        this.flash.appendChild(this.flashTimer);
      } else {
        this.flash.classList.add('no-timer');
      }

      // Add to body
      document.body.appendChild(this.flash);
      this.snowboard.transition(this.flash, 'show', function () {
        _this.startTimer();
      });
    }

    /**
     * Removes the flash message.
     */
  }, {
    key: "remove",
    value: function remove() {
      var _this2 = this;
      this.snowboard.globalEvent('flash.remove', this);
      this.stopTimer();
      this.snowboard.transition(this.flash, 'hide', function () {
        _this2.flash.remove();
        _this2.flash = null;
        _this2.destruct();
      });
    }

    /**
     * Clears all flash messages available on the page.
     */
  }, {
    key: "clear",
    value: function clear() {
      document.querySelectorAll('body > div.flash-message').forEach(function (element) {
        return element.remove();
      });
    }

    /**
     * Starts the timer for this flash message.
     */
  }, {
    key: "startTimer",
    value: function startTimer() {
      var _this3 = this;
      if (this.duration === 0) {
        return;
      }
      this.timerTrans = this.snowboard.transition(this.flashTimer, 'timeout', null, "".concat(this.duration, ".0s"), true);
      this.timer = window.setTimeout(function () {
        return _this3.remove();
      }, this.duration * 1000);
    }

    /**
     * Resets the timer for this flash message.
     */
  }, {
    key: "stopTimer",
    value: function stopTimer() {
      if (this.timerTrans) {
        this.timerTrans.cancel();
      }
      if (this.timer) {
        window.clearTimeout(this.timer);
      }
    }
  }]);
}(_abstracts_PluginBase__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./assets/js/snowboard/extras/StripeLoader.js":
/*!****************************************************!*\
  !*** ./assets/js/snowboard/extras/StripeLoader.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StripeLoader)
/* harmony export */ });
/* harmony import */ var _abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/Singleton */ "./assets/js/snowboard/abstracts/Singleton.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


/**
 * Displays a stripe at the top of the page that indicates loading.
 *
 * @copyright 2021 Winter.
 * @author Ben Thomson <git@alfreido.com>
 */
var StripeLoader = /*#__PURE__*/function (_Singleton) {
  function StripeLoader() {
    _classCallCheck(this, StripeLoader);
    return _callSuper(this, StripeLoader, arguments);
  }
  _inherits(StripeLoader, _Singleton);
  return _createClass(StripeLoader, [{
    key: "dependencies",
    value:
    /**
     * Defines dependenices.
     *
     * @returns {string[]}
     */
    function dependencies() {
      return ['request'];
    }

    /**
     * Defines listeners.
     *
     * @returns {Object}
     */
  }, {
    key: "listens",
    value: function listens() {
      return {
        ready: 'ready',
        ajaxStart: 'ajaxStart'
      };
    }
  }, {
    key: "ready",
    value: function ready() {
      this.counter = 0;
      this.createStripe();
    }
  }, {
    key: "ajaxStart",
    value: function ajaxStart(promise, request) {
      var _this = this;
      if (request.options.stripe === false) {
        return;
      }
      this.show();
      promise.then(function () {
        _this.hide();
      })["catch"](function () {
        _this.hide();
      });
    }
  }, {
    key: "createStripe",
    value: function createStripe() {
      this.indicator = document.createElement('DIV');
      this.stripe = document.createElement('DIV');
      this.stripeLoaded = document.createElement('DIV');
      this.indicator.classList.add('stripe-loading-indicator', 'loaded');
      this.stripe.classList.add('stripe');
      this.stripeLoaded.classList.add('stripe-loaded');
      this.indicator.appendChild(this.stripe);
      this.indicator.appendChild(this.stripeLoaded);
      document.body.appendChild(this.indicator);
    }
  }, {
    key: "show",
    value: function show() {
      this.counter += 1;
      var newStripe = this.stripe.cloneNode(true);
      this.indicator.appendChild(newStripe);
      this.stripe.remove();
      this.stripe = newStripe;
      if (this.counter > 1) {
        return;
      }
      this.indicator.classList.remove('loaded');
      document.body.classList.add('wn-loading');
    }
  }, {
    key: "hide",
    value: function hide(force) {
      this.counter -= 1;
      if (force === true) {
        this.counter = 0;
      }
      if (this.counter <= 0) {
        this.indicator.classList.add('loaded');
        document.body.classList.remove('wn-loading');
      }
    }
  }]);
}(_abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./assets/js/snowboard/extras/StylesheetLoader.js":
/*!********************************************************!*\
  !*** ./assets/js/snowboard/extras/StylesheetLoader.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StylesheetLoader)
/* harmony export */ });
/* harmony import */ var _abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/Singleton */ "./assets/js/snowboard/abstracts/Singleton.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


/**
 * Embeds the "extras" stylesheet into the page, if it is not loaded through the theme.
 *
 * @copyright 2021 Winter.
 * @author Ben Thomson <git@alfreido.com>
 */
var StylesheetLoader = /*#__PURE__*/function (_Singleton) {
  function StylesheetLoader() {
    _classCallCheck(this, StylesheetLoader);
    return _callSuper(this, StylesheetLoader, arguments);
  }
  _inherits(StylesheetLoader, _Singleton);
  return _createClass(StylesheetLoader, [{
    key: "listens",
    value:
    /**
     * Defines listeners.
     *
     * @returns {Object}
     */
    function listens() {
      return {
        ready: 'ready'
      };
    }
  }, {
    key: "ready",
    value: function ready() {
      var stylesLoaded = false;

      // Determine if stylesheet is already loaded
      document.querySelectorAll('link[rel="stylesheet"]').forEach(function (css) {
        if (css.href.endsWith('/modules/system/assets/css/snowboard.extras.css')) {
          stylesLoaded = true;
        }
      });
      if (!stylesLoaded) {
        var stylesheet = document.createElement('link');
        stylesheet.setAttribute('rel', 'stylesheet');
        stylesheet.setAttribute('href', this.snowboard.url().asset('/modules/system/assets/css/snowboard.extras.css'));
        document.head.appendChild(stylesheet);
      }
    }
  }]);
}(_abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./assets/js/snowboard/extras/Transition.js":
/*!**************************************************!*\
  !*** ./assets/js/snowboard/extras/Transition.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Transition)
/* harmony export */ });
/* harmony import */ var _abstracts_PluginBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/PluginBase */ "./assets/js/snowboard/abstracts/PluginBase.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


/**
 * Provides transition support for elements.
 *
 * Transition allows CSS transitions to be controlled and callbacks to be run once completed. It works similar to Vue
 * transitions with 3 stages of transition, and classes assigned to the element with the transition name suffixed with
 * the stage of transition:
 *
 *  - `in`: A class assigned to the element for the first frame of the transition, removed afterwards. This should be
 *      used to define the initial state of the transition.
 *  - `active`: A class assigned to the element for the duration of the transition. This should be used to define the
 *      transition itself.
 *  - `out`: A class assigned to the element after the first frame of the transition and kept to the end of the
 *      transition. This should define the end state of the transition.
 *
 * Usage:
 *      Snowboard.transition(document.element, 'transition', () => {
 *          console.log('Remove element after 7 seconds');
 *          this.remove();
 *      }, '7s');
 *
 * @copyright 2021 Winter.
 * @author Ben Thomson <git@alfreido.com>
 */
var Transition = /*#__PURE__*/function (_PluginBase) {
  function Transition() {
    _classCallCheck(this, Transition);
    return _callSuper(this, Transition, arguments);
  }
  _inherits(Transition, _PluginBase);
  return _createClass(Transition, [{
    key: "construct",
    value:
    /**
     * Constructor.
     *
     * @param {HTMLElement} element The element to transition
     * @param {string} transition The name of the transition, this prefixes the stages of transition.
     * @param {Function} callback An optional callback to call when the transition ends.
     * @param {Number} duration An optional override on the transition duration. Must be specified as 's' (secs) or 'ms' (msecs).
     * @param {Boolean} trailTo If true, the "out" class will remain after the end of the transition.
     */
    function construct(element, transition, callback, duration, trailTo) {
      if (element instanceof HTMLElement === false) {
        throw new Error('A HTMLElement must be provided for transitioning');
      }
      this.element = element;
      if (typeof transition !== 'string') {
        throw new Error('Transition name must be specified as a string');
      }
      this.transition = transition;
      if (callback && typeof callback !== 'function') {
        throw new Error('Callback must be a valid function');
      }
      this.callback = callback;
      if (duration) {
        this.duration = this.parseDuration(duration);
      } else {
        this.duration = null;
      }
      this.trailTo = trailTo === true;
      this.doTransition();
    }

    /**
     * Maps event classes to the given transition state.
     *
     * @param  {...any} args
     * @returns {Array}
     */
  }, {
    key: "eventClasses",
    value: function eventClasses() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var eventClasses = {
        "in": "".concat(this.transition, "-in"),
        active: "".concat(this.transition, "-active"),
        out: "".concat(this.transition, "-out")
      };
      if (args.length === 0) {
        return Object.values(eventClasses);
      }
      var returnClasses = [];
      Object.entries(eventClasses).forEach(function (entry) {
        var _entry = _slicedToArray(entry, 2),
          key = _entry[0],
          value = _entry[1];
        if (args.indexOf(key) !== -1) {
          returnClasses.push(value);
        }
      });
      return returnClasses;
    }

    /**
     * Executes the transition.
     *
     * @returns {void}
     */
  }, {
    key: "doTransition",
    value: function doTransition() {
      var _this = this;
      // Add duration override
      if (this.duration !== null) {
        this.element.style.transitionDuration = this.duration;
      }
      this.resetClasses();

      // Start transition - show "in" and "active" classes
      this.eventClasses('in', 'active').forEach(function (eventClass) {
        _this.element.classList.add(eventClass);
      });
      window.requestAnimationFrame(function () {
        // Ensure a transition exists
        if (window.getComputedStyle(_this.element)['transition-duration'] !== '0s') {
          // Listen for the transition to end
          _this.element.addEventListener('transitionend', function () {
            return _this.onTransitionEnd();
          }, {
            once: true
          });
          window.requestAnimationFrame(function () {
            _this.element.classList.remove(_this.eventClasses('in')[0]);
            _this.element.classList.add(_this.eventClasses('out')[0]);
          });
        } else {
          _this.resetClasses();
          if (_this.callback) {
            _this.callback.apply(_this.element);
          }
          _this.destruct();
        }
      });
    }

    /**
     * Callback function when the transition ends.
     *
     * When a transition ends, the instance of the transition is automatically destructed.
     *
     * @returns {void}
     */
  }, {
    key: "onTransitionEnd",
    value: function onTransitionEnd() {
      var _this2 = this;
      this.eventClasses('active', !this.trailTo ? 'out' : '').forEach(function (eventClass) {
        _this2.element.classList.remove(eventClass);
      });
      if (this.callback) {
        this.callback.apply(this.element);
      }

      // Remove duration override
      if (this.duration !== null) {
        this.element.style.transitionDuration = null;
      }
      this.destruct();
    }

    /**
     * Cancels a transition.
     *
     * @returns {void}
     */
  }, {
    key: "cancel",
    value: function cancel() {
      var _this3 = this;
      this.element.removeEventListener('transitionend', function () {
        return _this3.onTransitionEnd;
      }, {
        once: true
      });
      this.resetClasses();

      // Remove duration override
      if (this.duration !== null) {
        this.element.style.transitionDuration = null;
      }

      // Call destructor
      this.destruct();
    }

    /**
     * Resets the classes, removing any transition classes.
     *
     * @returns {void}
     */
  }, {
    key: "resetClasses",
    value: function resetClasses() {
      var _this4 = this;
      this.eventClasses().forEach(function (eventClass) {
        _this4.element.classList.remove(eventClass);
      });
    }

    /**
     * Parses a given duration and converts it to a "ms" value.
     *
     * @param {String} duration
     * @returns {String}
     */
  }, {
    key: "parseDuration",
    value: function parseDuration(duration) {
      var parsed = /^([0-9]+(\.[0-9]+)?)(m?s)?$/.exec(duration);
      var amount = Number(parsed[1]);
      var unit = parsed[3] === 's' ? 'sec' : 'msec';
      return unit === 'sec' ? "".concat(amount * 1000, "ms") : "".concat(Math.floor(amount), "ms");
    }
  }]);
}(_abstracts_PluginBase__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./assets/js/snowboard/main/InnerProxyHandler.js":
/*!*******************************************************!*\
  !*** ./assets/js/snowboard/main/InnerProxyHandler.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Internal proxy for Snowboard.
 *
 * This handler wraps the Snowboard instance that is passed to the constructor of plugin instances.
 * It prevents access to the following methods:
 *  - `attachAbstracts`: No need to attach abstracts again.
 *  - `loadUtilties`: No need to load utilities again.
 *  - `initialise`: Snowboard is already initialised.
 *  - `initialiseSingletons`: Singletons are already initialised.
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  get: function get(target, prop, receiver) {
    if (typeof prop === 'string') {
      var propLower = prop.toLowerCase();
      if (['attachAbstracts', 'loadUtilities', 'initialise', 'initialiseSingletons'].includes(prop)) {
        throw new Error("You cannot use the \"".concat(prop, "\" Snowboard method within a plugin."));
      }
      if (target.hasPlugin(propLower)) {
        return function () {
          var _Reflect$get$propLowe;
          return (_Reflect$get$propLowe = Reflect.get(target, 'plugins')[propLower]).getInstance.apply(_Reflect$get$propLowe, arguments);
        };
      }
    }
    return Reflect.get(target, prop, receiver);
  },
  has: function has(target, prop) {
    if (typeof prop === 'string') {
      var propLower = prop.toLowerCase();
      if (['attachAbstracts', 'loadUtilities', 'initialise', 'initialiseSingletons'].includes(prop)) {
        return false;
      }
      if (target.hasPlugin(propLower)) {
        return true;
      }
    }
    return Reflect.has(target, prop);
  }
});

/***/ }),

/***/ "./assets/js/snowboard/main/PluginLoader.js":
/*!**************************************************!*\
  !*** ./assets/js/snowboard/main/PluginLoader.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PluginLoader)
/* harmony export */ });
/* harmony import */ var _abstracts_PluginBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/PluginBase */ "./assets/js/snowboard/abstracts/PluginBase.js");
/* harmony import */ var _abstracts_Singleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstracts/Singleton */ "./assets/js/snowboard/abstracts/Singleton.js");
/* harmony import */ var _InnerProxyHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InnerProxyHandler */ "./assets/js/snowboard/main/InnerProxyHandler.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




/**
 * Plugin loader class.
 *
 * This is a provider (factory) class for a single plugin and provides the link between Snowboard framework functionality
 * and the underlying plugin instances. It also provides some basic mocking of plugin methods for testing.
 *
 * @copyright 2021 Winter.
 * @author Ben Thomson <git@alfreido.com>
 */
var PluginLoader = /*#__PURE__*/function () {
  /**
   * Constructor.
   *
   * Binds the Winter framework to the instance.
   *
   * @param {string} name
   * @param {Snowboard} snowboard
   * @param {PluginBase} instance
   */
  function PluginLoader(name, snowboard, instance) {
    _classCallCheck(this, PluginLoader);
    this.name = name;
    this.snowboard = new Proxy(snowboard, _InnerProxyHandler__WEBPACK_IMPORTED_MODULE_2__["default"]);
    this.instance = instance;

    // Freeze instance that has been inserted into this loader
    Object.freeze(this.instance);
    this.instances = [];
    this.singleton = {
      initialised: false
    };
    // Prevent further extension of the singleton status object
    Object.seal(this.singleton);
    this.mocks = {};
    this.originalFunctions = {};

    // Freeze loader itself
    Object.freeze(PluginLoader.prototype);
    Object.freeze(this);
  }

  /**
   * Determines if the current plugin has a specific method available.
   *
   * Returns false if the current plugin is a callback function.
   *
   * @param {string} methodName
   * @returns {boolean}
   */
  return _createClass(PluginLoader, [{
    key: "hasMethod",
    value: function hasMethod(methodName) {
      if (this.isFunction()) {
        return false;
      }
      return typeof this.instance.prototype[methodName] === 'function';
    }

    /**
     * Calls a prototype method for a plugin. This should generally be used for "static" calls.
     *
     * @param {string} methodName
     * @param {...} args
     * @returns {any}
     */
  }, {
    key: "callMethod",
    value: function callMethod() {
      if (this.isFunction()) {
        return null;
      }
      for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
        parameters[_key] = arguments[_key];
      }
      var args = parameters;
      var methodName = args.shift();
      return this.instance.prototype[methodName](args);
    }

    /**
     * Returns an instance of the current plugin.
     *
     * - If this is a callback function plugin, the function will be returned.
     * - If this is a singleton, the single instance of the plugin will be returned.
     *
     * @returns {PluginBase|Function}
     */
  }, {
    key: "getInstance",
    value: function getInstance() {
      var _this = this;
      for (var _len2 = arguments.length, parameters = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        parameters[_key2] = arguments[_key2];
      }
      if (this.isFunction()) {
        return this.instance.apply(this, parameters);
      }
      if (!this.dependenciesFulfilled()) {
        var unmet = this.getDependencies().filter(function (item) {
          return !_this.snowboard.getPluginNames().includes(item);
        });
        throw new Error("The \"".concat(this.name, "\" plugin requires the following plugins: ").concat(unmet.join(', ')));
      }
      if (this.isSingleton()) {
        if (this.instances.length === 0) {
          this.initialiseSingleton.apply(this, parameters);
        }

        // Apply mocked methods
        if (Object.keys(this.mocks).length > 0) {
          Object.entries(this.originalFunctions).forEach(function (entry) {
            var _entry = _slicedToArray(entry, 2),
              methodName = _entry[0],
              callback = _entry[1];
            _this.instances[0][methodName] = callback;
          });
          Object.entries(this.mocks).forEach(function (entry) {
            var _entry2 = _slicedToArray(entry, 2),
              methodName = _entry2[0],
              callback = _entry2[1];
            _this.instances[0][methodName] = function () {
              for (var _len3 = arguments.length, params = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                params[_key3] = arguments[_key3];
              }
              return callback.apply(void 0, [_this].concat(params));
            };
          });
        }
        return this.instances[0];
      }

      // Apply mocked methods to prototype
      if (Object.keys(this.mocks).length > 0) {
        Object.entries(this.originalFunctions).forEach(function (entry) {
          var _entry3 = _slicedToArray(entry, 2),
            methodName = _entry3[0],
            callback = _entry3[1];
          _this.instance.prototype[methodName] = callback;
        });
        Object.entries(this.mocks).forEach(function (entry) {
          var _entry4 = _slicedToArray(entry, 2),
            methodName = _entry4[0],
            callback = _entry4[1];
          _this.instance.prototype[methodName] = function () {
            for (var _len4 = arguments.length, params = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              params[_key4] = arguments[_key4];
            }
            return callback.apply(void 0, [_this].concat(params));
          };
        });
      }
      var newInstance = _construct(this.instance, [this.snowboard].concat(parameters));
      newInstance.detach = function () {
        return _this.instances.splice(_this.instances.indexOf(newInstance), 1);
      };
      newInstance.construct.apply(newInstance, parameters);
      this.instances.push(newInstance);
      return newInstance;
    }

    /**
     * Gets all instances of the current plugin.
     *
     * If this plugin is a callback function plugin, an empty array will be returned.
     *
     * @returns {PluginBase[]}
     */
  }, {
    key: "getInstances",
    value: function getInstances() {
      if (this.isFunction()) {
        return [];
      }
      return this.instances;
    }

    /**
     * Determines if the current plugin is a simple callback function.
     *
     * @returns {boolean}
     */
  }, {
    key: "isFunction",
    value: function isFunction() {
      return typeof this.instance === 'function' && this.instance.prototype instanceof _abstracts_PluginBase__WEBPACK_IMPORTED_MODULE_0__["default"] === false;
    }

    /**
     * Determines if the current plugin is a singleton.
     *
     * @returns {boolean}
     */
  }, {
    key: "isSingleton",
    value: function isSingleton() {
      return this.instance.prototype instanceof _abstracts_Singleton__WEBPACK_IMPORTED_MODULE_1__["default"] === true;
    }

    /**
     * Determines if a singleton has been initialised.
     *
     * Normal plugins will always return true.
     *
     * @returns {boolean}
     */
  }, {
    key: "isInitialised",
    value: function isInitialised() {
      if (!this.isSingleton()) {
        return true;
      }
      return this.singleton.initialised;
    }

    /**
     * Initialises the singleton instance.
     *
     * @returns {void}
     */
  }, {
    key: "initialiseSingleton",
    value: function initialiseSingleton() {
      var _this2 = this;
      if (!this.isSingleton()) {
        return;
      }
      for (var _len5 = arguments.length, parameters = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        parameters[_key5] = arguments[_key5];
      }
      var newInstance = _construct(this.instance, [this.snowboard].concat(parameters));
      newInstance.detach = function () {
        return _this2.instances.splice(_this2.instances.indexOf(newInstance), 1);
      };
      newInstance.construct.apply(newInstance, parameters);
      this.instances.push(newInstance);
      this.singleton.initialised = true;
    }

    /**
     * Gets the dependencies of the current plugin.
     *
     * @returns {string[]}
     */
  }, {
    key: "getDependencies",
    value: function getDependencies() {
      // Callback functions cannot have dependencies.
      if (this.isFunction()) {
        return [];
      }

      // No dependency method specified.
      if (typeof this.instance.prototype.dependencies !== 'function') {
        return [];
      }
      return this.instance.prototype.dependencies().map(function (item) {
        return item.toLowerCase();
      });
    }

    /**
     * Determines if the current plugin has all its dependencies fulfilled.
     *
     * @returns {boolean}
     */
  }, {
    key: "dependenciesFulfilled",
    value: function dependenciesFulfilled() {
      var _this3 = this;
      var dependencies = this.getDependencies();
      var fulfilled = true;
      dependencies.forEach(function (plugin) {
        if (!_this3.snowboard.hasPlugin(plugin)) {
          fulfilled = false;
        }
      });
      return fulfilled;
    }

    /**
     * Allows a method of an instance to be mocked for testing.
     *
     * This mock will be applied for the life of an instance. For singletons, the mock will be applied for the life
     * of the page.
     *
     * Mocks cannot be applied to callback function plugins.
     *
     * @param {string} methodName
     * @param {Function} callback
     */
  }, {
    key: "mock",
    value: function mock(methodName, callback) {
      var _this4 = this;
      if (this.isFunction()) {
        return;
      }
      if (!this.instance.prototype[methodName]) {
        throw new Error("Function \"".concat(methodName, "\" does not exist and cannot be mocked"));
      }
      this.mocks[methodName] = callback;
      this.originalFunctions[methodName] = this.instance.prototype[methodName];
      if (this.isSingleton() && this.instances.length === 0) {
        this.initialiseSingleton();

        // Apply mocked method
        this.instances[0][methodName] = function () {
          for (var _len6 = arguments.length, parameters = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            parameters[_key6] = arguments[_key6];
          }
          return callback.apply(void 0, [_this4].concat(parameters));
        };
      }
    }

    /**
     * Removes a mock callback from future instances.
     *
     * @param {string} methodName
     */
  }, {
    key: "unmock",
    value: function unmock(methodName) {
      if (this.isFunction()) {
        return;
      }
      if (!this.mocks[methodName]) {
        return;
      }
      if (this.isSingleton()) {
        this.instances[0][methodName] = this.originalFunctions[methodName];
      }
      delete this.mocks[methodName];
      delete this.originalFunctions[methodName];
    }
  }]);
}();


/***/ }),

/***/ "./assets/js/snowboard/main/ProxyHandler.js":
/*!**************************************************!*\
  !*** ./assets/js/snowboard/main/ProxyHandler.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  get: function get(target, prop, receiver) {
    if (typeof prop === 'string') {
      var propLower = prop.toLowerCase();
      if (target.hasPlugin(propLower)) {
        return function () {
          var _Reflect$get$propLowe;
          return (_Reflect$get$propLowe = Reflect.get(target, 'plugins')[propLower]).getInstance.apply(_Reflect$get$propLowe, arguments);
        };
      }
    }
    return Reflect.get(target, prop, receiver);
  },
  has: function has(target, prop) {
    if (typeof prop === 'string') {
      var propLower = prop.toLowerCase();
      if (target.hasPlugin(propLower)) {
        return true;
      }
    }
    return Reflect.has(target, prop);
  }
});

/***/ }),

/***/ "./assets/js/snowboard/main/Snowboard.js":
/*!***********************************************!*\
  !*** ./assets/js/snowboard/main/Snowboard.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Snowboard)
/* harmony export */ });
/* harmony import */ var _abstracts_PluginBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/PluginBase */ "./assets/js/snowboard/abstracts/PluginBase.js");
/* harmony import */ var _abstracts_Singleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstracts/Singleton */ "./assets/js/snowboard/abstracts/Singleton.js");
/* harmony import */ var _PluginLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PluginLoader */ "./assets/js/snowboard/main/PluginLoader.js");
/* harmony import */ var _utilities_Cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/Cookie */ "./assets/js/snowboard/utilities/Cookie.js");
/* harmony import */ var _utilities_JsonParser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/JsonParser */ "./assets/js/snowboard/utilities/JsonParser.js");
/* harmony import */ var _utilities_Sanitizer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utilities/Sanitizer */ "./assets/js/snowboard/utilities/Sanitizer.js");
/* harmony import */ var _utilities_Url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utilities/Url */ "./assets/js/snowboard/utilities/Url.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }








/**
 * Snowboard - the Winter JavaScript framework.
 *
 * This class represents the base of a modern take on the Winter JS framework, being fully extensible and taking advantage
 * of modern JavaScript features by leveraging the Laravel Mix compilation framework. It also is coded up to remove the
 * dependency of jQuery.
 *
 * @copyright 2021 Winter.
 * @author Ben Thomson <git@alfreido.com>
 * @link https://wintercms.com/docs/snowboard/introduction
 */
var Snowboard = /*#__PURE__*/function () {
  /**
   * Constructor.
   *
   * @param {boolean} autoSingletons Automatically load singletons when DOM is ready. Default: `true`.
   * @param {boolean} debug Whether debugging logs should be shown. Default: `false`.
   */
  function Snowboard(autoSingletons, debug) {
    _classCallCheck(this, Snowboard);
    this.debugEnabled = typeof debug === 'boolean' && debug === true;
    this.autoInitSingletons = typeof autoSingletons === 'boolean' && autoSingletons === false;
    this.plugins = {};
    this.listeners = {};
    this.foundBaseUrl = null;
    this.readiness = {
      dom: false
    };
    // Seal readiness from being added to further, but allow the properties to be modified.
    Object.seal(this.readiness);
    this.attachAbstracts();

    // Freeze the Snowboard class to prevent further modifications.
    Object.freeze(Snowboard.prototype);
    Object.freeze(this);
    this.loadUtilities();
    this.initialise();
    this.debug('Snowboard framework initialised');
  }

  /**
   * Attaches abstract classes as properties of the Snowboard class.
   *
   * This will allow Javascript functionality with no build process to still extend these abstracts by prefixing
   * them with "Snowboard".
   *
   * ```
   * class MyClass extends Snowboard.PluginBase {
   *     ...
   * }
   * ```
   */
  return _createClass(Snowboard, [{
    key: "attachAbstracts",
    value: function attachAbstracts() {
      this.PluginBase = _abstracts_PluginBase__WEBPACK_IMPORTED_MODULE_0__["default"];
      this.Singleton = _abstracts_Singleton__WEBPACK_IMPORTED_MODULE_1__["default"];
      Object.freeze(this.PluginBase.prototype);
      Object.freeze(this.PluginBase);
      Object.freeze(this.Singleton.prototype);
      Object.freeze(this.Singleton);
    }

    /**
     * Loads the default utilities.
     */
  }, {
    key: "loadUtilities",
    value: function loadUtilities() {
      this.addPlugin('cookie', _utilities_Cookie__WEBPACK_IMPORTED_MODULE_3__["default"]);
      this.addPlugin('jsonParser', _utilities_JsonParser__WEBPACK_IMPORTED_MODULE_4__["default"]);
      this.addPlugin('sanitizer', _utilities_Sanitizer__WEBPACK_IMPORTED_MODULE_5__["default"]);
      this.addPlugin('url', _utilities_Url__WEBPACK_IMPORTED_MODULE_6__["default"]);
    }

    /**
     * Initialises the framework.
     *
     * Attaches a listener for the DOM being ready and triggers a global "ready" event for plugins to begin attaching
     * themselves to the DOM.
     */
  }, {
    key: "initialise",
    value: function initialise() {
      var _this = this;
      window.addEventListener('DOMContentLoaded', function () {
        if (_this.autoInitSingletons) {
          _this.initialiseSingletons();
        }
        _this.globalEvent('ready');
        _this.readiness.dom = true;
      });
    }

    /**
     * Initialises an instance of every singleton.
     */
  }, {
    key: "initialiseSingletons",
    value: function initialiseSingletons() {
      Object.values(this.plugins).forEach(function (plugin) {
        if (plugin.isSingleton() && plugin.dependenciesFulfilled()) {
          plugin.initialiseSingleton();
        }
      });
    }

    /**
     * Adds a plugin to the framework.
     *
     * Plugins are the cornerstone for additional functionality for Snowboard. A plugin must either be an ES2015 class
     * that extends the PluginBase or Singleton abstract classes, or a simple callback function.
     *
     * When a plugin is added, it is automatically assigned as a new magic method in the Snowboard class using the name
     * parameter, and can be called via this method. This method will always be the "lowercase" version of this name.
     *
     * For example, if a plugin is assigned to the name "myPlugin", it can be called via `Snowboard.myplugin()`.
     *
     * @param {string} name
     * @param {PluginBase|Function} instance
     */
  }, {
    key: "addPlugin",
    value: function addPlugin(name, instance) {
      var _this2 = this;
      var lowerName = name.toLowerCase();
      if (this.hasPlugin(lowerName)) {
        throw new Error("A plugin called \"".concat(name, "\" is already registered."));
      }
      if (typeof instance !== 'function' && instance instanceof _abstracts_PluginBase__WEBPACK_IMPORTED_MODULE_0__["default"] === false) {
        throw new Error('The provided plugin must extend the PluginBase class, or must be a callback function.');
      }
      if (this[name] !== undefined || this[lowerName] !== undefined) {
        throw new Error('The given name is already in use for a property or method of the Snowboard class.');
      }
      this.plugins[lowerName] = new _PluginLoader__WEBPACK_IMPORTED_MODULE_2__["default"](lowerName, this, instance);
      this.debug("Plugin \"".concat(name, "\" registered"));

      // Check if any singletons now have their dependencies fulfilled, and fire their "ready" handler if we're
      // in a ready state.
      Object.values(this.getPlugins()).forEach(function (plugin) {
        if (plugin.isSingleton() && !plugin.isInitialised() && plugin.dependenciesFulfilled() && plugin.hasMethod('listens') && Object.keys(plugin.callMethod('listens')).includes('ready') && _this2.readiness.dom) {
          var readyMethod = plugin.callMethod('listens').ready;
          plugin.callMethod(readyMethod);
        }
      });
    }

    /**
     * Removes a plugin.
     *
     * Removes a plugin from Snowboard, calling the destructor method for all active instances of the plugin.
     *
     * @param {string} name
     * @returns {void}
     */
  }, {
    key: "removePlugin",
    value: function removePlugin(name) {
      var lowerName = name.toLowerCase();
      if (!this.hasPlugin(lowerName)) {
        this.debug("Plugin \"".concat(name, "\" already removed"));
        return;
      }

      // Call destructors for all instances
      this.plugins[lowerName].getInstances().forEach(function (instance) {
        instance.destruct();
      });
      delete this.plugins[lowerName];
      delete this[lowerName];
      delete this[name];
      this.debug("Plugin \"".concat(name, "\" removed"));
    }

    /**
     * Determines if a plugin has been registered and is active.
     *
     * A plugin that is still waiting for dependencies to be registered will not be active.
     *
     * @param {string} name
     * @returns {boolean}
     */
  }, {
    key: "hasPlugin",
    value: function hasPlugin(name) {
      var lowerName = name.toLowerCase();
      return this.plugins[lowerName] !== undefined;
    }

    /**
     * Returns an array of registered plugins as PluginLoader objects.
     *
     * @returns {PluginLoader[]}
     */
  }, {
    key: "getPlugins",
    value: function getPlugins() {
      return this.plugins;
    }

    /**
     * Returns an array of registered plugins, by name.
     *
     * @returns {string[]}
     */
  }, {
    key: "getPluginNames",
    value: function getPluginNames() {
      return Object.keys(this.plugins);
    }

    /**
     * Returns a PluginLoader object of a given plugin.
     *
     * @returns {PluginLoader}
     */
  }, {
    key: "getPlugin",
    value: function getPlugin(name) {
      var lowerName = name.toLowerCase();
      if (!this.hasPlugin(lowerName)) {
        throw new Error("No plugin called \"".concat(lowerName, "\" has been registered."));
      }
      return this.plugins[lowerName];
    }

    /**
     * Finds all plugins that listen to the given event.
     *
     * This works for both normal and promise events. It does NOT check that the plugin's listener actually exists.
     *
     * @param {string} eventName
     * @returns {string[]} The name of the plugins that are listening to this event.
     */
  }, {
    key: "listensToEvent",
    value: function listensToEvent(eventName) {
      var plugins = [];
      Object.entries(this.plugins).forEach(function (entry) {
        var _entry = _slicedToArray(entry, 2),
          name = _entry[0],
          plugin = _entry[1];
        if (plugin.isFunction()) {
          return;
        }
        if (!plugin.dependenciesFulfilled()) {
          return;
        }
        if (!plugin.hasMethod('listens')) {
          return;
        }
        var listeners = plugin.callMethod('listens');
        if (typeof listeners[eventName] === 'string' || typeof listeners[eventName] === 'function') {
          plugins.push(name);
        }
      });
      return plugins;
    }

    /**
     * Add a simple ready listener.
     *
     * Synonymous with jQuery's "$(document).ready()" functionality, this allows inline scripts to
     * attach themselves to Snowboard immediately but only fire when the DOM is ready.
     *
     * @param {Function} callback
     */
  }, {
    key: "ready",
    value: function ready(callback) {
      if (this.readiness.dom) {
        callback();
      }
      this.on('ready', callback);
    }

    /**
     * Adds a simple listener for an event.
     *
     * This can be used for ad-hoc scripts that don't need a full plugin. The given callback will be
     * called when the event name provided fires. This works for both normal and Promise events. For
     * a Promise event, your callback must return a Promise.
     *
     * @param {String} eventName
     * @param {Function} callback
     */
  }, {
    key: "on",
    value: function on(eventName, callback) {
      if (!this.listeners[eventName]) {
        this.listeners[eventName] = [];
      }
      if (!this.listeners[eventName].includes(callback)) {
        this.listeners[eventName].push(callback);
      }
    }

    /**
     * Removes a simple listener for an event.
     *
     * @param {String} eventName
     * @param {Function} callback
     */
  }, {
    key: "off",
    value: function off(eventName, callback) {
      if (!this.listeners[eventName]) {
        return;
      }
      var index = this.listeners[eventName].indexOf(callback);
      if (index === -1) {
        return;
      }
      this.listeners[eventName].splice(index, 1);
    }

    /**
     * Calls a global event to all registered plugins.
     *
     * If any plugin returns a `false`, the event is considered cancelled.
     *
     * @param {string} eventName
     * @returns {boolean} If event was not cancelled
     */
  }, {
    key: "globalEvent",
    value: function globalEvent(eventName) {
      var _this3 = this;
      for (var _len = arguments.length, parameters = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        parameters[_key - 1] = arguments[_key];
      }
      this.debug.apply(this, ["Calling global event \"".concat(eventName, "\"")].concat(parameters));

      // Find plugins listening to the event.
      var listeners = this.listensToEvent(eventName);
      if (listeners.length === 0) {
        this.debug("No listeners found for global event \"".concat(eventName, "\""));
        return true;
      }
      this.debug("Listeners found for global event \"".concat(eventName, "\": ").concat(listeners.join(', ')));
      var cancelled = false;
      listeners.forEach(function (name) {
        var plugin = _this3.getPlugin(name);
        if (plugin.isFunction()) {
          return;
        }
        if (plugin.isSingleton() && plugin.getInstances().length === 0) {
          plugin.initialiseSingleton();
        }
        var listenMethod = plugin.callMethod('listens')[eventName];

        // Call event handler methods for all plugins, if they have a method specified for the event.
        plugin.getInstances().forEach(function (instance) {
          // If a plugin has cancelled the event, no further plugins are considered.
          if (cancelled) {
            return;
          }
          if (typeof listenMethod === 'function') {
            try {
              var result = listenMethod.apply(instance, parameters);
              if (result === false) {
                cancelled = true;
              }
            } catch (error) {
              _this3.error("Error thrown in \"".concat(eventName, "\" event by \"").concat(name, "\" plugin."), error);
            }
          } else if (typeof listenMethod === 'string') {
            if (!instance[listenMethod]) {
              throw new Error("Missing \"".concat(listenMethod, "\" method in \"").concat(name, "\" plugin"));
            }
            try {
              if (instance[listenMethod].apply(instance, parameters) === false) {
                cancelled = true;
                _this3.debug("Global event \"".concat(eventName, "\" cancelled by \"").concat(name, "\" plugin"));
              }
            } catch (error) {
              _this3.error("Error thrown in \"".concat(eventName, "\" event by \"").concat(name, "\" plugin."), error);
            }
          } else {
            _this3.error("Listen method for \"".concat(eventName, "\" event in \"").concat(name, "\" plugin is not a function or string."));
          }
        });
      });

      // Find ad-hoc listeners for this event.
      if (!cancelled && this.listeners[eventName] && this.listeners[eventName].length > 0) {
        this.debug("Found ".concat(this.listeners[eventName].length, " ad-hoc listener(s) for global event \"").concat(eventName, "\""));
        this.listeners[eventName].forEach(function (listener) {
          // If a listener has cancelled the event, no further listeners are considered.
          if (cancelled) {
            return;
          }
          try {
            if (listener.apply(void 0, parameters) === false) {
              cancelled = true;
              _this3.debug("Global event \"".concat(eventName, " cancelled by an ad-hoc listener."));
            }
          } catch (error) {
            _this3.error("Error thrown in \"".concat(eventName, "\" event by an ad-hoc listener."), error);
          }
        });
      }
      return !cancelled;
    }

    /**
     * Calls a global event to all registered plugins, expecting a Promise to be returned by all.
     *
     * This collates all plugins responses into one large Promise that either expects all to be resolved, or one to reject.
     * If no listeners are found, a resolved Promise is returned.
     *
     * @param {string} eventName
     */
  }, {
    key: "globalPromiseEvent",
    value: function globalPromiseEvent(eventName) {
      var _this4 = this;
      for (var _len2 = arguments.length, parameters = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        parameters[_key2 - 1] = arguments[_key2];
      }
      this.debug("Calling global promise event \"".concat(eventName, "\""));

      // Find plugins listening to this event.
      var listeners = this.listensToEvent(eventName);
      if (listeners.length === 0) {
        this.debug("No listeners found for global promise event \"".concat(eventName, "\""));
        return Promise.resolve();
      }
      this.debug("Listeners found for global promise event \"".concat(eventName, "\": ").concat(listeners.join(', ')));
      var promises = [];
      listeners.forEach(function (name) {
        var plugin = _this4.getPlugin(name);
        if (plugin.isFunction()) {
          return;
        }
        if (plugin.isSingleton() && plugin.getInstances().length === 0) {
          plugin.initialiseSingleton();
        }
        var listenMethod = plugin.callMethod('listens')[eventName];

        // Call event handler methods for all plugins, if they have a method specified for the event.
        plugin.getInstances().forEach(function (instance) {
          if (typeof listenMethod === 'function') {
            try {
              var instancePromise = listenMethod.apply(instance, parameters);
              if (instancePromise instanceof Promise === false) {
                return;
              }
              promises.push(instancePromise);
            } catch (error) {
              _this4.error("Error thrown in \"".concat(eventName, "\" event by \"").concat(name, "\" plugin."), error);
            }
          } else if (typeof listenMethod === 'string') {
            if (!instance[listenMethod]) {
              throw new Error("Missing \"".concat(listenMethod, "\" method in \"").concat(name, "\" plugin"));
            }
            try {
              var _instancePromise = instance[listenMethod].apply(instance, parameters);
              if (_instancePromise instanceof Promise === false) {
                return;
              }
              promises.push(_instancePromise);
            } catch (error) {
              _this4.error("Error thrown in \"".concat(eventName, "\" promise event by \"").concat(name, "\" plugin."), error);
            }
          } else {
            _this4.error("Listen method for \"".concat(eventName, "\" event in \"").concat(name, "\" plugin is not a function or string."));
          }
        });
      });

      // Find ad-hoc listeners listening to this event.
      if (this.listeners[eventName] && this.listeners[eventName].length > 0) {
        this.debug("Found ".concat(this.listeners[eventName].length, " ad-hoc listener(s) for global promise event \"").concat(eventName, "\""));
        this.listeners[eventName].forEach(function (listener) {
          try {
            var listenerPromise = listener.apply(void 0, parameters);
            if (listenerPromise instanceof Promise === false) {
              return;
            }
            promises.push(listenerPromise);
          } catch (error) {
            _this4.error("Error thrown in \"".concat(eventName, "\" promise event by an ad-hoc listener."), error);
          }
        });
      }
      if (promises.length === 0) {
        return Promise.resolve();
      }
      return Promise.all(promises);
    }

    /**
     * Log a styled message in the console.
     *
     * Includes parameters and a stack trace.
     *
     * @returns {void}
     */
  }, {
    key: "logMessage",
    value: function logMessage(color, bold, message) {
      /* eslint-disable */
      console.groupCollapsed('%c[Snowboard]', "color: ".concat(color, "; font-weight: ").concat(bold ? 'bold' : 'normal', ";"), message);
      for (var _len3 = arguments.length, parameters = new Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
        parameters[_key3 - 3] = arguments[_key3];
      }
      if (parameters.length) {
        console.groupCollapsed("%cParameters %c(".concat(parameters.length, ")"), 'color: rgb(45, 167, 199); font-weight: bold;', 'color: rgb(88, 88, 88); font-weight: normal;');
        var index = 0;
        parameters.forEach(function (param) {
          index += 1;
          console.log("%c".concat(index, ":"), 'color: rgb(88, 88, 88); font-weight: normal;', param);
        });
        console.groupEnd();
        console.groupCollapsed('%cTrace', 'color: rgb(45, 167, 199); font-weight: bold;');
        console.trace();
        console.groupEnd();
      } else {
        console.trace();
      }
      console.groupEnd();
      /* eslint-enable */
    }

    /**
     * Log a message.
     *
     * @returns {void}
     */
  }, {
    key: "log",
    value: function log(message) {
      for (var _len4 = arguments.length, parameters = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        parameters[_key4 - 1] = arguments[_key4];
      }
      this.logMessage.apply(this, ['rgb(45, 167, 199)', false, message].concat(parameters));
    }

    /**
     * Log a debug message.
     *
     * These messages are only shown when debugging is enabled.
     *
     * @returns {void}
     */
  }, {
    key: "debug",
    value: function debug(message) {
      if (!this.debugEnabled) {
        return;
      }
      for (var _len5 = arguments.length, parameters = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        parameters[_key5 - 1] = arguments[_key5];
      }
      this.logMessage.apply(this, ['rgb(45, 167, 199)', false, message].concat(parameters));
    }

    /**
     * Logs an error message.
     *
     * @returns {void}
     */
  }, {
    key: "error",
    value: function error(message) {
      for (var _len6 = arguments.length, parameters = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
        parameters[_key6 - 1] = arguments[_key6];
      }
      this.logMessage.apply(this, ['rgb(229, 35, 35)', true, message].concat(parameters));
    }
  }]);
}();


/***/ }),

/***/ "./assets/js/snowboard/snowboard.backend.extras.js":
/*!*********************************************************!*\
  !*** ./assets/js/snowboard/snowboard.backend.extras.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _extras_Flash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extras/Flash */ "./assets/js/snowboard/extras/Flash.js");
/* harmony import */ var _extras_Transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extras/Transition */ "./assets/js/snowboard/extras/Transition.js");
/* harmony import */ var _extras_AttachLoading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extras/AttachLoading */ "./assets/js/snowboard/extras/AttachLoading.js");
/* harmony import */ var _extras_StripeLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extras/StripeLoader */ "./assets/js/snowboard/extras/StripeLoader.js");
/* harmony import */ var _extras_StylesheetLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./extras/StylesheetLoader */ "./assets/js/snowboard/extras/StylesheetLoader.js");
/* harmony import */ var _extras_AssetLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./extras/AssetLoader */ "./assets/js/snowboard/extras/AssetLoader.js");
/* harmony import */ var _extras_DataConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./extras/DataConfig */ "./assets/js/snowboard/extras/DataConfig.js");







if (window.Snowboard === undefined) {
  throw new Error('Snowboard must be loaded in order to use the extra plugins.');
}
(function (Snowboard) {
  Snowboard.addPlugin('assetLoader', _extras_AssetLoader__WEBPACK_IMPORTED_MODULE_5__["default"]);
  Snowboard.addPlugin('dataConfig', _extras_DataConfig__WEBPACK_IMPORTED_MODULE_6__["default"]);
  Snowboard.addPlugin('extrasStyles', _extras_StylesheetLoader__WEBPACK_IMPORTED_MODULE_4__["default"]);
  Snowboard.addPlugin('transition', _extras_Transition__WEBPACK_IMPORTED_MODULE_1__["default"]);
  Snowboard.addPlugin('flash', _extras_Flash__WEBPACK_IMPORTED_MODULE_0__["default"]);
  Snowboard.addPlugin('attachLoading', _extras_AttachLoading__WEBPACK_IMPORTED_MODULE_2__["default"]);
  Snowboard.addPlugin('stripeLoader', _extras_StripeLoader__WEBPACK_IMPORTED_MODULE_3__["default"]);
})(window.Snowboard);

/***/ }),

/***/ "./assets/js/snowboard/snowboard.base.js":
/*!***********************************************!*\
  !*** ./assets/js/snowboard/snowboard.base.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_Snowboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main/Snowboard */ "./assets/js/snowboard/main/Snowboard.js");
/* harmony import */ var _main_ProxyHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/ProxyHandler */ "./assets/js/snowboard/main/ProxyHandler.js");


(function (window) {
  var snowboard = new Proxy(new _main_Snowboard__WEBPACK_IMPORTED_MODULE_0__["default"](), _main_ProxyHandler__WEBPACK_IMPORTED_MODULE_1__["default"]);

  // Cover all aliases
  window.snowboard = snowboard;
  window.Snowboard = snowboard;
  window.SnowBoard = snowboard;
})(window);

/***/ }),

/***/ "./assets/js/snowboard/snowboard.request.js":
/*!**************************************************!*\
  !*** ./assets/js/snowboard/snowboard.request.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ajax_Request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajax/Request */ "./assets/js/snowboard/ajax/Request.js");

if (window.Snowboard === undefined) {
  throw new Error('Snowboard must be loaded in order to use the Javascript AJAX request feature.');
}
(function (Snowboard) {
  Snowboard.addPlugin('request', _ajax_Request__WEBPACK_IMPORTED_MODULE_0__["default"]);
})(window.Snowboard);

/***/ }),

/***/ "./assets/js/snowboard/utilities/Cookie.js":
/*!*************************************************!*\
  !*** ./assets/js/snowboard/utilities/Cookie.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cookie)
/* harmony export */ });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "../../node_modules/js-cookie/dist/js.cookie.mjs");
/* harmony import */ var _abstracts_Singleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstracts/Singleton */ "./assets/js/snowboard/abstracts/Singleton.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }



/**
 * Cookie utility.
 *
 * This utility is a thin wrapper around the "js-cookie" library.
 *
 * @see https://github.com/js-cookie/js-cookie
 * @copyright 2021 Winter.
 * @author Ben Thomson <git@alfreido.com>
 */
var Cookie = /*#__PURE__*/function (_Singleton) {
  function Cookie() {
    _classCallCheck(this, Cookie);
    return _callSuper(this, Cookie, arguments);
  }
  _inherits(Cookie, _Singleton);
  return _createClass(Cookie, [{
    key: "construct",
    value: function construct() {
      this.defaults = {
        expires: null,
        path: '/',
        domain: null,
        secure: false,
        sameSite: 'Lax'
      };
    }

    /**
     * Set the default cookie parameters for all subsequent "set" and "remove" calls.
     *
     * @param {Object} options
     */
  }, {
    key: "setDefaults",
    value: function setDefaults(options) {
      var _this = this;
      if (_typeof(options) !== 'object') {
        throw new Error('Cookie defaults must be provided as an object');
      }
      Object.entries(options).forEach(function (entry) {
        var _entry = _slicedToArray(entry, 2),
          key = _entry[0],
          value = _entry[1];
        if (_this.defaults[key] !== undefined) {
          _this.defaults[key] = value;
        }
      });
    }

    /**
     * Get the current default cookie parameters.
     *
     * @returns {Object}
     */
  }, {
    key: "getDefaults",
    value: function getDefaults() {
      var _this2 = this;
      var defaults = {};
      Object.entries(this.defaults).forEach(function (entry) {
        var _entry2 = _slicedToArray(entry, 2),
          key = _entry2[0],
          value = _entry2[1];
        if (_this2.defaults[key] !== null) {
          defaults[key] = value;
        }
      });
      return defaults;
    }

    /**
     * Get a cookie by name.
     *
     * If `name` is undefined, returns all cookies as an Object.
     *
     * @param {String} name
     * @returns {Object|String}
     */
  }, {
    key: "get",
    value: function get(name) {
      var _this3 = this;
      if (name === undefined) {
        var cookies = js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].get();
        Object.entries(cookies).forEach(function (entry) {
          var _entry3 = _slicedToArray(entry, 2),
            cookieName = _entry3[0],
            cookieValue = _entry3[1];
          _this3.snowboard.globalEvent('cookie.get', cookieName, cookieValue, function (newValue) {
            cookies[cookieName] = newValue;
          });
        });
        return cookies;
      }
      var value = js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].get(name);

      // Allow plugins to override the gotten value
      this.snowboard.globalEvent('cookie.get', name, value, function (newValue) {
        value = newValue;
      });
      return value;
    }

    /**
     * Set a cookie by name.
     *
     * You can specify additional cookie parameters through the "options" parameter.
     *
     * @param {String} name
     * @param {String} value
     * @param {Object} options
     * @returns {String}
     */
  }, {
    key: "set",
    value: function set(name, value, options) {
      var saveValue = value;

      // Allow plugins to override the value to save
      this.snowboard.globalEvent('cookie.set', name, value, function (newValue) {
        saveValue = newValue;
      });
      return js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].set(name, saveValue, _objectSpread(_objectSpread({}, this.getDefaults()), options));
    }

    /**
     * Remove a cookie by name.
     *
     * You can specify the additional cookie parameters via the "options" parameter.
     *
     * @param {String} name
     * @param {Object} options
     * @returns {void}
     */
  }, {
    key: "remove",
    value: function remove(name, options) {
      js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].remove(name, _objectSpread(_objectSpread({}, this.getDefaults()), options));
    }
  }]);
}(_abstracts_Singleton__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./assets/js/snowboard/utilities/JsonParser.js":
/*!*****************************************************!*\
  !*** ./assets/js/snowboard/utilities/JsonParser.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ JsonParser)
/* harmony export */ });
/* harmony import */ var _abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/Singleton */ "./assets/js/snowboard/abstracts/Singleton.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


/**
 * JSON Parser utility.
 *
 * This utility parses JSON-like data that does not strictly meet the JSON specifications in order to simplify development.
 * It is a safe replacement for JSON.parse(JSON.stringify(eval("({" + value + "})"))) that does not require the use of eval()
 *
 * @author Ayumi Hamasaki
 * @author Ben Thomson <git@alfreido.com>
 * @see https://github.com/octobercms/october/pull/4527
 */
var JsonParser = /*#__PURE__*/function (_Singleton) {
  function JsonParser() {
    _classCallCheck(this, JsonParser);
    return _callSuper(this, JsonParser, arguments);
  }
  _inherits(JsonParser, _Singleton);
  return _createClass(JsonParser, [{
    key: "construct",
    value: function construct() {
      var _this = this;
      // Add to global function for backwards compatibility
      window.wnJSON = function (json) {
        return _this.parse(json);
      };
      window.ocJSON = window.wnJSON;
    }
  }, {
    key: "parse",
    value: function parse(str) {
      var jsonString = this.parseString(str);
      return JSON.parse(jsonString);
    }
  }, {
    key: "parseString",
    value: function parseString(value) {
      var str = value.trim();
      if (!str.length) {
        throw new Error('Broken JSON object.');
      }
      var result = '';
      var type = null;
      var key = null;
      var body = '';

      /*
      * the mistake ','
      */
      while (str && str[0] === ',') {
        str = str.substr(1);
      }

      /*
      * string
      */
      if (str[0] === '"' || str[0] === '\'') {
        if (str[str.length - 1] !== str[0]) {
          throw new Error('Invalid string JSON object.');
        }
        body = '"';
        for (var i = 1; i < str.length; i += 1) {
          if (str[i] === '\\') {
            if (str[i + 1] === '\'') {
              body += str[i + 1];
            } else {
              body += str[i];
              body += str[i + 1];
            }
            i += 1;
          } else if (str[i] === str[0]) {
            body += '"';
            return body;
          } else if (str[i] === '"') {
            body += '\\"';
          } else {
            body += str[i];
          }
        }
        throw new Error('Invalid string JSON object.');
      }

      /*
      * boolean
      */
      if (str === 'true' || str === 'false') {
        return str;
      }

      /*
      * null
      */
      if (str === 'null') {
        return 'null';
      }

      /*
      * number
      */
      var num = Number(str);
      if (!Number.isNaN(num)) {
        return num.toString();
      }

      /*
      * object
      */
      if (str[0] === '{') {
        type = 'needKey';
        key = null;
        result = '{';
        for (var _i = 1; _i < str.length; _i += 1) {
          if (this.isBlankChar(str[_i])) {
            /* eslint-disable-next-line */
            continue;
          }
          if (type === 'needKey' && (str[_i] === '"' || str[_i] === '\'')) {
            key = this.parseKey(str, _i + 1, str[_i]);
            result += "\"".concat(key, "\"");
            _i += key.length;
            _i += 1;
            type = 'afterKey';
          } else if (type === 'needKey' && this.canBeKeyHead(str[_i])) {
            key = this.parseKey(str, _i);
            result += '"';
            result += key;
            result += '"';
            _i += key.length - 1;
            type = 'afterKey';
          } else if (type === 'afterKey' && str[_i] === ':') {
            result += ':';
            type = ':';
          } else if (type === ':') {
            body = this.getBody(str, _i);
            _i = _i + body.originLength - 1;
            result += this.parseString(body.body);
            type = 'afterBody';
          } else if (type === 'afterBody' || type === 'needKey') {
            var last = _i;
            while (str[last] === ',' || this.isBlankChar(str[last])) {
              last += 1;
            }
            if (str[last] === '}' && last === str.length - 1) {
              while (result[result.length - 1] === ',') {
                result = result.substr(0, result.length - 1);
              }
              result += '}';
              return result;
            }
            if (last !== _i && result !== '{') {
              result += ',';
              type = 'needKey';
              _i = last - 1;
            }
          }
        }
        throw new Error("Broken JSON object near ".concat(result));
      }

      /*
      * array
      */
      if (str[0] === '[') {
        result = '[';
        type = 'needBody';
        for (var _i2 = 1; _i2 < str.length; _i2 += 1) {
          if (str[_i2] === ' ' || str[_i2] === '\n' || str[_i2] === '\t') {
            /* eslint-disable-next-line */
            continue;
          } else if (type === 'needBody') {
            if (str[_i2] === ',') {
              result += 'null,';
              /* eslint-disable-next-line */
              continue;
            }
            if (str[_i2] === ']' && _i2 === str.length - 1) {
              if (result[result.length - 1] === ',') {
                result = result.substr(0, result.length - 1);
              }
              result += ']';
              return result;
            }
            body = this.getBody(str, _i2);
            _i2 = _i2 + body.originLength - 1;
            result += this.parseString(body.body);
            type = 'afterBody';
          } else if (type === 'afterBody') {
            if (str[_i2] === ',') {
              result += ',';
              type = 'needBody';

              // deal with mistake ","
              while (str[_i2 + 1] === ',' || this.isBlankChar(str[_i2 + 1])) {
                if (str[_i2 + 1] === ',') {
                  result += 'null,';
                }
                _i2 += 1;
              }
            } else if (str[_i2] === ']' && _i2 === str.length - 1) {
              result += ']';
              return result;
            }
          }
        }
        throw new Error("Broken JSON array near ".concat(result));
      }
      return '';
    }
  }, {
    key: "getBody",
    value: function getBody(str, pos) {
      var body = '';

      // parse string body
      if (str[pos] === '"' || str[pos] === '\'') {
        body = str[pos];
        for (var i = pos + 1; i < str.length; i += 1) {
          if (str[i] === '\\') {
            body += str[i];
            if (i + 1 < str.length) {
              body += str[i + 1];
            }
            i += 1;
          } else if (str[i] === str[pos]) {
            body += str[pos];
            return {
              originLength: body.length,
              body: body
            };
          } else {
            body += str[i];
          }
        }
        throw new Error("Broken JSON string body near ".concat(body));
      }

      // parse true / false
      if (str[pos] === 't') {
        if (str.indexOf('true', pos) === pos) {
          return {
            originLength: 'true'.length,
            body: 'true'
          };
        }
        throw new Error("Broken JSON boolean body near ".concat(str.substr(0, pos + 10)));
      }
      if (str[pos] === 'f') {
        if (str.indexOf('f', pos) === pos) {
          return {
            originLength: 'false'.length,
            body: 'false'
          };
        }
        throw new Error("Broken JSON boolean body near ".concat(str.substr(0, pos + 10)));
      }

      // parse null
      if (str[pos] === 'n') {
        if (str.indexOf('null', pos) === pos) {
          return {
            originLength: 'null'.length,
            body: 'null'
          };
        }
        throw new Error("Broken JSON boolean body near ".concat(str.substr(0, pos + 10)));
      }

      // parse number
      if (str[pos] === '-' || str[pos] === '+' || str[pos] === '.' || str[pos] >= '0' && str[pos] <= '9') {
        body = '';
        for (var _i3 = pos; _i3 < str.length; _i3 += 1) {
          if (str[_i3] === '-' || str[_i3] === '+' || str[_i3] === '.' || str[_i3] >= '0' && str[_i3] <= '9') {
            body += str[_i3];
          } else {
            return {
              originLength: body.length,
              body: body
            };
          }
        }
        throw new Error("Broken JSON number body near ".concat(body));
      }

      // parse object
      if (str[pos] === '{' || str[pos] === '[') {
        var stack = [str[pos]];
        body = str[pos];
        for (var _i4 = pos + 1; _i4 < str.length; _i4 += 1) {
          body += str[_i4];
          if (str[_i4] === '\\') {
            if (_i4 + 1 < str.length) {
              body += str[_i4 + 1];
            }
            _i4 += 1;
          } else if (str[_i4] === '"') {
            if (stack[stack.length - 1] === '"') {
              stack.pop();
            } else if (stack[stack.length - 1] !== '\'') {
              stack.push(str[_i4]);
            }
          } else if (str[_i4] === '\'') {
            if (stack[stack.length - 1] === '\'') {
              stack.pop();
            } else if (stack[stack.length - 1] !== '"') {
              stack.push(str[_i4]);
            }
          } else if (stack[stack.length - 1] !== '"' && stack[stack.length - 1] !== '\'') {
            if (str[_i4] === '{') {
              stack.push('{');
            } else if (str[_i4] === '}') {
              if (stack[stack.length - 1] === '{') {
                stack.pop();
              } else {
                throw new Error("Broken JSON ".concat(str[pos] === '{' ? 'object' : 'array', " body near ").concat(body));
              }
            } else if (str[_i4] === '[') {
              stack.push('[');
            } else if (str[_i4] === ']') {
              if (stack[stack.length - 1] === '[') {
                stack.pop();
              } else {
                throw new Error("Broken JSON ".concat(str[pos] === '{' ? 'object' : 'array', " body near ").concat(body));
              }
            }
          }
          if (!stack.length) {
            return {
              originLength: _i4 - pos,
              body: body
            };
          }
        }
        throw new Error("Broken JSON ".concat(str[pos] === '{' ? 'object' : 'array', " body near ").concat(body));
      }
      throw new Error("Broken JSON body near ".concat(str.substr(pos - 5 >= 0 ? pos - 5 : 0, 50)));
    }
  }, {
    key: "parseKey",
    value: function parseKey(str, pos, quote) {
      var key = '';
      for (var i = pos; i < str.length; i += 1) {
        if (quote && quote === str[i]) {
          return key;
        }
        if (!quote && (str[i] === ' ' || str[i] === ':')) {
          return key;
        }
        key += str[i];
        if (str[i] === '\\' && i + 1 < str.length) {
          key += str[i + 1];
          i += 1;
        }
      }
      throw new Error("Broken JSON syntax near ".concat(key));
    }
  }, {
    key: "canBeKeyHead",
    value: function canBeKeyHead(ch) {
      if (ch[0] === '\\') {
        return false;
      }
      if (ch[0] >= 'a' && ch[0] <= 'z' || ch[0] >= 'A' && ch[0] <= 'Z' || ch[0] === '_') {
        return true;
      }
      if (ch[0] >= '0' && ch[0] <= '9') {
        return true;
      }
      if (ch[0] === '$') {
        return true;
      }
      if (ch.charCodeAt(0) > 255) {
        return true;
      }
      return false;
    }
  }, {
    key: "isBlankChar",
    value: function isBlankChar(ch) {
      return ch === ' ' || ch === '\n' || ch === '\t';
    }
  }]);
}(_abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./assets/js/snowboard/utilities/Sanitizer.js":
/*!****************************************************!*\
  !*** ./assets/js/snowboard/utilities/Sanitizer.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sanitizer)
/* harmony export */ });
/* harmony import */ var _abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/Singleton */ "./assets/js/snowboard/abstracts/Singleton.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


/**
 * Sanitizer utility.
 *
 * Client-side HTML sanitizer designed mostly to prevent self-XSS attacks.
 * The sanitizer utility will strip all attributes that start with `on` (usually JS event handlers as attributes, i.e. `onload` or `onerror`) or contain the `javascript:` pseudo protocol in their values.
 *
 * @author Ben Thomson <git@alfreido.com>
 */
var Sanitizer = /*#__PURE__*/function (_Singleton) {
  function Sanitizer() {
    _classCallCheck(this, Sanitizer);
    return _callSuper(this, Sanitizer, arguments);
  }
  _inherits(Sanitizer, _Singleton);
  return _createClass(Sanitizer, [{
    key: "construct",
    value: function construct() {
      var _this = this;
      // Add to global function for backwards compatibility
      window.wnSanitize = function (html) {
        return _this.sanitize(html);
      };
      window.ocSanitize = window.wnSanitize;
    }
  }, {
    key: "sanitize",
    value: function sanitize(html, bodyOnly) {
      var parser = new DOMParser();
      var dom = parser.parseFromString(html, 'text/html');
      var returnBodyOnly = bodyOnly !== undefined && typeof bodyOnly === 'boolean' ? bodyOnly : true;
      this.sanitizeNode(dom.getRootNode());
      return returnBodyOnly ? dom.body.innerHTML : dom.innerHTML;
    }
  }, {
    key: "sanitizeNode",
    value: function sanitizeNode(node) {
      var _this2 = this;
      if (node.tagName === 'SCRIPT') {
        node.remove();
        return;
      }
      this.trimAttributes(node);
      var children = Array.from(node.children);
      children.forEach(function (child) {
        _this2.sanitizeNode(child);
      });
    }
  }, {
    key: "trimAttributes",
    value: function trimAttributes(node) {
      if (!node.attributes) {
        return;
      }
      for (var i = 0; i < node.attributes.length; i += 1) {
        var attrName = node.attributes.item(i).name;
        var attrValue = node.attributes.item(i).value;

        /*
        * remove attributes where the names start with "on" (for example: onload, onerror...)
        * remove attributes where the value starts with the "javascript:" pseudo protocol (for example href="javascript:alert(1)")
        */
        /* eslint-disable-next-line */
        if (attrName.indexOf('on') === 0 || attrValue.indexOf('javascript:') === 0) {
          node.removeAttribute(attrName);
        }
      }
    }
  }]);
}(_abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./assets/js/snowboard/utilities/Url.js":
/*!**********************************************!*\
  !*** ./assets/js/snowboard/utilities/Url.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Url)
/* harmony export */ });
/* harmony import */ var _abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/Singleton */ "./assets/js/snowboard/abstracts/Singleton.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


/**
 * URL utility.
 *
 * This utility provides URL functions.
 *
 * @copyright 2022 Winter.
 * @author Ben Thomson <git@alfreido.com>
 */
var Url = /*#__PURE__*/function (_Singleton) {
  function Url() {
    _classCallCheck(this, Url);
    return _callSuper(this, Url, arguments);
  }
  _inherits(Url, _Singleton);
  return _createClass(Url, [{
    key: "construct",
    value: function construct() {
      this.foundBaseUrl = null;
      this.foundAssetUrl = null;
      this.baseUrl();
      this.assetUrl();
    }

    /**
     * Gets a URL based on a relative path.
     *
     * If an absolute URL is provided, it will be returned unchanged.
     *
     * @param {string} url
     * @returns {string}
     */
  }, {
    key: "to",
    value: function to(url) {
      var urlRegex = /^(?:[^:]+:\/\/)[-a-z0-9@:%._+~#=]{1,256}\b([-a-z0-9()@:%_+.~#?&//=]*)/i;
      if (url.match(urlRegex)) {
        return url;
      }
      var theUrl = url.replace(/^\/+/, '');
      return "".concat(this.baseUrl()).concat(theUrl);
    }

    /**
     * Gets an Asset URL based on a relative path.
     *
     * If an absolute URL is provided, it will be returned unchanged.
     *
     * @param {string} url
     * @returns {string}
     */
  }, {
    key: "asset",
    value: function asset(url) {
      var urlRegex = /^(?:[^:]+:\/\/)[-a-z0-9@:%._+~#=]{1,256}\b([-a-z0-9()@:%_+.~#?&//=]*)/i;
      if (url.match(urlRegex)) {
        return url;
      }
      var theUrl = url.replace(/^\/+/, '');
      return "".concat(this.assetUrl()).concat(theUrl);
    }

    /**
     * Helper method to get the base URL of this install.
     *
     * This determines the base URL from three sources, in order:
     *  - If Snowboard is loaded via the `{% snowboard %}` tag, it will retrieve the base URL that
     * is automatically included there.
     *  - If a `<base>` tag is available, it will use the URL specified in the base tag.
     *  - Finally, it will take a guess from the current location. This will likely not work for sites
     * that reside in subdirectories.
     *
     * The base URL will always contain a trailing backslash.
     *
     * @returns {string}
     */
  }, {
    key: "baseUrl",
    value: function baseUrl() {
      if (this.foundBaseUrl !== null) {
        return this.foundBaseUrl;
      }
      if (document.querySelector('script[data-module="snowboard-base"]') !== null) {
        this.foundBaseUrl = this.validateBaseUrl(document.querySelector('script[data-module="snowboard-base"]').dataset.baseUrl);
        return this.foundBaseUrl;
      }
      if (document.querySelector('base') !== null) {
        this.foundBaseUrl = this.validateBaseUrl(document.querySelector('base').getAttribute('href'));
        return this.foundBaseUrl;
      }
      var urlParts = [window.location.protocol, '//', window.location.host, '/'];
      this.foundBaseUrl = urlParts.join('');
      return this.foundBaseUrl;
    }

    /**
     * Helper method to get the asset URL of this install.
     *
     * This determines the base URL from three sources, in order:
     *  - If Snowboard is loaded via the `{% snowboard %}` tag, it will retrieve the asset URL that
     * is automatically included there.
     *  - If a `<link rel="asset_url" href="https://example.com">` tag is available, it will use the URL specified in the link tag.
     *  - Finally, it will take a guess from the current location. This will likely not work for sites
     * that reside in subdirectories.
     *
     * The asset URL will always contain a trailing backslash.
     *
     * @returns {string}
     */
  }, {
    key: "assetUrl",
    value: function assetUrl() {
      if (this.foundAssetUrl !== null) {
        return this.foundAssetUrl;
      }
      if (document.querySelector('script[data-module="snowboard-base"]') !== null) {
        this.foundAssetUrl = this.validateBaseUrl(document.querySelector('script[data-module="snowboard-base"]').dataset.assetUrl);
        return this.foundAssetUrl;
      }
      if (document.querySelector('link[rel="asset_url"]') !== null) {
        this.foundAssetUrl = this.validateBaseUrl(document.querySelector('link[rel="asset_url"]').getAttribute('href'));
        return this.foundAssetUrl;
      }
      var urlParts = [window.location.protocol, '//', window.location.host, '/'];
      this.foundAssetUrl = urlParts.join('');
      return this.foundAssetUrl;
    }

    /**
     * Validates the base URL, ensuring it is a HTTP/HTTPs URL.
     *
     * If the Snowboard script or <base> tag on the page use a different type of URL, this will fail with
     * an error.
     *
     * @param {string} url
     * @returns {string}
     */
  }, {
    key: "validateBaseUrl",
    value: function validateBaseUrl(url) {
      var urlRegex = /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/i;
      var urlParts = urlRegex.exec(url);
      var protocol = urlParts[2];
      var domain = urlParts[4];
      if (protocol && ['http', 'https'].indexOf(protocol.toLowerCase()) === -1) {
        throw new Error('Invalid base URL detected');
      }
      if (!domain) {
        throw new Error('Invalid base URL detected');
      }
      return url.substr(-1) === '/' ? url : "".concat(url, "/");
    }
  }]);
}(_abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./assets/ui/icons.less":
/*!******************************!*\
  !*** ./assets/ui/icons.less ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/less/styles.less":
/*!*********************************!*\
  !*** ./assets/less/styles.less ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/ui/storm.less":
/*!******************************!*\
  !*** ./assets/ui/storm.less ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/less/framework.extras.less":
/*!*******************************************!*\
  !*** ./assets/less/framework.extras.less ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/less/snowboard.extras.less":
/*!*******************************************!*\
  !*** ./assets/less/snowboard.extras.less ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/ui/less/select.less":
/*!************************************!*\
  !*** ./assets/ui/less/select.less ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["assets/js/snowboard/build/snowboard.vendor","assets/ui/vendor/select2/css/select2","assets/css/snowboard.extras","assets/css/framework.extras","assets/ui/storm","assets/css/styles","assets/ui/icons"], () => (__webpack_exec__("./assets/js/snowboard/snowboard.base.js"), __webpack_exec__("./assets/js/snowboard/snowboard.request.js"), __webpack_exec__("./assets/js/snowboard/snowboard.backend.extras.js"), __webpack_exec__("./assets/less/styles.less"), __webpack_exec__("./assets/ui/storm.less"), __webpack_exec__("./assets/less/framework.extras.less"), __webpack_exec__("./assets/less/snowboard.extras.less"), __webpack_exec__("./assets/ui/less/select.less"), __webpack_exec__("./assets/ui/icons.less")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Iiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1zeXN0ZW0tbW9kdWxlLy4vYXNzZXRzL2pzL3Nub3dib2FyZC9hYnN0cmFjdHMvUGx1Z2luQmFzZS5qcyIsIndlYnBhY2s6Ly9Ad2ludGVyY21zL3duLXN5c3RlbS1tb2R1bGUvLi9hc3NldHMvanMvc25vd2JvYXJkL2Fic3RyYWN0cy9TaW5nbGV0b24uanMiLCJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1zeXN0ZW0tbW9kdWxlLy4vYXNzZXRzL2pzL3Nub3dib2FyZC9hamF4L1JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1zeXN0ZW0tbW9kdWxlLy4vYXNzZXRzL2pzL3Nub3dib2FyZC9leHRyYXMvQXNzZXRMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1zeXN0ZW0tbW9kdWxlLy4vYXNzZXRzL2pzL3Nub3dib2FyZC9leHRyYXMvQXR0YWNoTG9hZGluZy5qcyIsIndlYnBhY2s6Ly9Ad2ludGVyY21zL3duLXN5c3RlbS1tb2R1bGUvLi9hc3NldHMvanMvc25vd2JvYXJkL2V4dHJhcy9EYXRhQ29uZmlnLmpzIiwid2VicGFjazovL0B3aW50ZXJjbXMvd24tc3lzdGVtLW1vZHVsZS8uL2Fzc2V0cy9qcy9zbm93Ym9hcmQvZXh0cmFzL0ZsYXNoLmpzIiwid2VicGFjazovL0B3aW50ZXJjbXMvd24tc3lzdGVtLW1vZHVsZS8uL2Fzc2V0cy9qcy9zbm93Ym9hcmQvZXh0cmFzL1N0cmlwZUxvYWRlci5qcyIsIndlYnBhY2s6Ly9Ad2ludGVyY21zL3duLXN5c3RlbS1tb2R1bGUvLi9hc3NldHMvanMvc25vd2JvYXJkL2V4dHJhcy9TdHlsZXNoZWV0TG9hZGVyLmpzIiwid2VicGFjazovL0B3aW50ZXJjbXMvd24tc3lzdGVtLW1vZHVsZS8uL2Fzc2V0cy9qcy9zbm93Ym9hcmQvZXh0cmFzL1RyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1zeXN0ZW0tbW9kdWxlLy4vYXNzZXRzL2pzL3Nub3dib2FyZC9tYWluL0lubmVyUHJveHlIYW5kbGVyLmpzIiwid2VicGFjazovL0B3aW50ZXJjbXMvd24tc3lzdGVtLW1vZHVsZS8uL2Fzc2V0cy9qcy9zbm93Ym9hcmQvbWFpbi9QbHVnaW5Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1zeXN0ZW0tbW9kdWxlLy4vYXNzZXRzL2pzL3Nub3dib2FyZC9tYWluL1Byb3h5SGFuZGxlci5qcyIsIndlYnBhY2s6Ly9Ad2ludGVyY21zL3duLXN5c3RlbS1tb2R1bGUvLi9hc3NldHMvanMvc25vd2JvYXJkL21haW4vU25vd2JvYXJkLmpzIiwid2VicGFjazovL0B3aW50ZXJjbXMvd24tc3lzdGVtLW1vZHVsZS8uL2Fzc2V0cy9qcy9zbm93Ym9hcmQvc25vd2JvYXJkLmJhY2tlbmQuZXh0cmFzLmpzIiwid2VicGFjazovL0B3aW50ZXJjbXMvd24tc3lzdGVtLW1vZHVsZS8uL2Fzc2V0cy9qcy9zbm93Ym9hcmQvc25vd2JvYXJkLmJhc2UuanMiLCJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1zeXN0ZW0tbW9kdWxlLy4vYXNzZXRzL2pzL3Nub3dib2FyZC9zbm93Ym9hcmQucmVxdWVzdC5qcyIsIndlYnBhY2s6Ly9Ad2ludGVyY21zL3duLXN5c3RlbS1tb2R1bGUvLi9hc3NldHMvanMvc25vd2JvYXJkL3V0aWxpdGllcy9Db29raWUuanMiLCJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1zeXN0ZW0tbW9kdWxlLy4vYXNzZXRzL2pzL3Nub3dib2FyZC91dGlsaXRpZXMvSnNvblBhcnNlci5qcyIsIndlYnBhY2s6Ly9Ad2ludGVyY21zL3duLXN5c3RlbS1tb2R1bGUvLi9hc3NldHMvanMvc25vd2JvYXJkL3V0aWxpdGllcy9TYW5pdGl6ZXIuanMiLCJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1zeXN0ZW0tbW9kdWxlLy4vYXNzZXRzL2pzL3Nub3dib2FyZC91dGlsaXRpZXMvVXJsLmpzIiwid2VicGFjazovL0B3aW50ZXJjbXMvd24tc3lzdGVtLW1vZHVsZS8uL2Fzc2V0cy91aS9pY29ucy5sZXNzPzE1ODkiLCJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1zeXN0ZW0tbW9kdWxlLy4vYXNzZXRzL2xlc3Mvc3R5bGVzLmxlc3M/YjQ4OCIsIndlYnBhY2s6Ly9Ad2ludGVyY21zL3duLXN5c3RlbS1tb2R1bGUvLi9hc3NldHMvdWkvc3Rvcm0ubGVzcz8yMzY3Iiwid2VicGFjazovL0B3aW50ZXJjbXMvd24tc3lzdGVtLW1vZHVsZS8uL2Fzc2V0cy9sZXNzL2ZyYW1ld29yay5leHRyYXMubGVzcz8wYWU2Iiwid2VicGFjazovL0B3aW50ZXJjbXMvd24tc3lzdGVtLW1vZHVsZS8uL2Fzc2V0cy9sZXNzL3Nub3dib2FyZC5leHRyYXMubGVzcz8yMzkwIiwid2VicGFjazovL0B3aW50ZXJjbXMvd24tc3lzdGVtLW1vZHVsZS8uL2Fzc2V0cy91aS9sZXNzL3NlbGVjdC5sZXNzPzhlMGEiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBQbHVnaW4gYmFzZSBhYnN0cmFjdC5cbiAqXG4gKiBUaGlzIGNsYXNzIHByb3ZpZGVzIHRoZSBiYXNlIGZ1bmN0aW9uYWxpdHkgZm9yIGFsbCBwbHVnaW5zLlxuICpcbiAqIEBjb3B5cmlnaHQgMjAyMSBXaW50ZXIuXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbHVnaW5CYXNlIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3Rvci5cbiAgICAgKlxuICAgICAqIFRoZSBjb25zdHJ1Y3RvciBpcyBwcm92aWRlZCB0aGUgU25vd2JvYXJkIGZyYW1ld29yayBpbnN0YW5jZSwgYW5kIHNob3VsZCBub3QgYmUgb3ZlcndyaXR0ZW5cbiAgICAgKiB1bmxlc3MgeW91IGFic29sdXRlbHkga25vdyB3aGF0IHlvdSdyZSBkb2luZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U25vd2JvYXJkfSBzbm93Ym9hcmRcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihzbm93Ym9hcmQpIHtcbiAgICAgICAgdGhpcy5zbm93Ym9hcmQgPSBzbm93Ym9hcmQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGx1Z2luIGNvbnN0cnVjdG9yLlxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2Qgc2hvdWxkIGJlIHRyZWF0ZWQgYXMgdGhlIHRydWUgY29uc3RydWN0b3Igb2YgYSBwbHVnaW4sIGFuZCBjYW4gYmUgb3ZlcndyaXR0ZW4uXG4gICAgICogSXQgd2lsbCBiZSBjYWxsZWQgc3RyYWlnaHQgYWZ0ZXIgY29uc3RydWN0aW9uLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdCgpIHtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIHRoZSByZXF1aXJlZCBwbHVnaW5zIGZvciB0aGlzIHNwZWNpZmljIG1vZHVsZSB0byB3b3JrLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ1tdfSBBbiBhcnJheSBvZiBwbHVnaW5zIHJlcXVpcmVkIGZvciB0aGlzIG1vZHVsZSB0byB3b3JrLCBhcyBzdHJpbmdzLlxuICAgICAqL1xuICAgIGRlcGVuZGVuY2llcygpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZmluZXMgdGhlIGxpc3RlbmVyIG1ldGhvZHMgZm9yIGdsb2JhbCBldmVudHMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGxpc3RlbnMoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQbHVnaW4gZGVzdHJ1Y3Rvci5cbiAgICAgKlxuICAgICAqIEZpcmVkIHdoZW4gdGhpcyBwbHVnaW4gaXMgcmVtb3ZlZC4gQ2FuIGJlIG1hbnVhbGx5IGNhbGxlZCBpZiB5b3UgaGF2ZSBhbm90aGVyIHNjZW5hcmlvIGZvclxuICAgICAqIGRlc3RydWN0aW9uLCBpZS4gdGhlIGVsZW1lbnQgYXR0YWNoZWQgdG8gdGhlIHBsdWdpbiBpcyByZW1vdmVkIG9yIGNoYW5nZWQuXG4gICAgICovXG4gICAgZGVzdHJ1Y3QoKSB7XG4gICAgICAgIHRoaXMuZGV0YWNoKCk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNub3dib2FyZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQbHVnaW4gZGVzdHJ1Y3RvciAob2xkIG1ldGhvZCBuYW1lKS5cbiAgICAgKlxuICAgICAqIEFsbG93cyBwcmV2aW91cyB1c2FnZSBvZiB0aGUgXCJkZXN0cnVjdG9yXCIgbWV0aG9kIHRvIHN0aWxsIHdvcmsuXG4gICAgICovXG4gICAgZGVzdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kZXN0cnVjdCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCBQbHVnaW5CYXNlIGZyb20gJy4vUGx1Z2luQmFzZSc7XG5cbi8qKlxuICogU2luZ2xldG9uIHBsdWdpbiBhYnN0cmFjdC5cbiAqXG4gKiBUaGlzIGlzIGEgc3BlY2lhbCBkZWZpbml0aW9uIGNsYXNzIHRoYXQgdGhlIFNub3dib2FyZCBmcmFtZXdvcmsgd2lsbCB1c2UgdG8gaW50ZXJwcmV0IHRoZSBjdXJyZW50IHBsdWdpbiBhcyBhXG4gKiBcInNpbmdsZXRvblwiLiBUaGlzIHdpbGwgZW5zdXJlIHRoYXQgb25seSBvbmUgaW5zdGFuY2Ugb2YgdGhlIHBsdWdpbiBjbGFzcyBpcyB1c2VkIGFjcm9zcyB0aGUgYm9hcmQuXG4gKlxuICogU2luZ2xldG9ucyBhcmUgaW5pdGlhbGlzZWQgb24gdGhlIFwiZG9tUmVhZHlcIiBldmVudCBieSBkZWZhdWx0LlxuICpcbiAqIEBjb3B5cmlnaHQgMjAyMSBXaW50ZXIuXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW5nbGV0b24gZXh0ZW5kcyBQbHVnaW5CYXNlIHtcbn1cbiIsImltcG9ydCBQbHVnaW5CYXNlIGZyb20gJy4uL2Fic3RyYWN0cy9QbHVnaW5CYXNlJztcblxuLyoqXG4gKiBSZXF1ZXN0IHBsdWdpbi5cbiAqXG4gKiBUaGlzIGlzIHRoZSBkZWZhdWx0IEFKQVggaGFuZGxlciB3aGljaCB3aWxsIHJ1biB1c2luZyB0aGUgYGZldGNoKClgIG1ldGhvZCB0aGF0IGlzIGRlZmF1bHQgaW4gbW9kZXJuIGJyb3dzZXJzLlxuICpcbiAqIEBjb3B5cmlnaHQgMjAyMSBXaW50ZXIuXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXF1ZXN0IGV4dGVuZHMgUGx1Z2luQmFzZSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IuXG4gICAgICpcbiAgICAgKiBUaGUgY29uc3RydWN0b3IgYWNjZXB0cyAyIG9yIDMgcGFyYW1ldGVycy5cbiAgICAgKlxuICAgICAqIElmIDIgcGFyYW1ldGVycyBhcmUgcHJvdmlkZWQsIHRoZSBmaXJzdCBwYXJhbWV0ZXIgaXMgdGhlIGhhbmRsZXIgbmFtZSBhbmQgdGhlIHNlY29uZFxuICAgICAqIHBhcmFtZXRlciBpcyB0aGUgb3B0aW9ucy4gVGhpcyBhc3N1bWVzIHRoYXQgdGhpcyBpcyBhIGRldGFjaGVkIEFKQVggcmVxdWVzdCBub3QgY29ubmVjdGVkIHRvXG4gICAgICogYW4gZWxlbWVudC5cbiAgICAgKlxuICAgICAqIElmIDMgcGFyYW1ldGVycyBhcmUgcHJvdmlkZWQsIHRoZSBmaXJzdCBwYXJhbWV0ZXIgaXMgYW4gZWxlbWVudCBvciBhIHNlbGVjdG9yLCBhbmQgdGhlIHNlY29uZFxuICAgICAqIGFuZCB0aGlyZCBwYXJhbWV0ZXJzIGFyZSB0aGUgaGFuZGxlciBhbmQgb3B0aW9ucywgcmVzcGVjdGl2ZWx5LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudHxzdHJpbmd9IGVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IGhhbmRsZXJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdChlbGVtZW50LCBoYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIC8vIEFsbG93IHRoZSBlbGVtZW50IHRvIGJlIGEgaGFuZGxlciBuYW1lLlxuICAgICAgICAgICAgLy8gVGhpcyBhc3N1bWVzIHRoZSByZXF1ZXN0IGlzIGJlaW5nIG1hZGUgYWdhaW5zdCBubyBlbGVtZW50LCBhbmQgdGhlIGhhbmRsZXIgcGFyYW1ldGVyXG4gICAgICAgICAgICAvLyB3aWxsIGNvbnRhaW4gb3B0aW9ucy5cbiAgICAgICAgICAgIGlmICh0aGlzLmlzSGFuZGxlck5hbWUoZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlciA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gaGFuZGxlciB8fCB7fTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hlZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaGVkRWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIGVsZW1lbnQgd2FzIGZvdW5kIHdpdGggdGhlIGdpdmVuIHNlbGVjdG9yOiAke2VsZW1lbnR9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudCA9IG1hdGNoZWRFbGVtZW50O1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZmV0Y2hPcHRpb25zID0ge307XG4gICAgICAgIHRoaXMucmVzcG9uc2VEYXRhID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZXNwb25zZUVycm9yID0gbnVsbDtcbiAgICAgICAgdGhpcy5jYW5jZWxsZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmNoZWNrUmVxdWVzdCgpO1xuICAgICAgICBpZiAoIXRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdhamF4U2V0dXAnLCB0aGlzKSkge1xuICAgICAgICAgICAgdGhpcy5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KCdhamF4U2V0dXAnLCB7IGNhbmNlbGFibGU6IHRydWUgfSk7XG4gICAgICAgICAgICBldmVudC5yZXF1ZXN0ID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcblxuICAgICAgICAgICAgaWYgKGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmRvQ2xpZW50VmFsaWRhdGlvbigpKSB7XG4gICAgICAgICAgICB0aGlzLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb25maXJtKSB7XG4gICAgICAgICAgICB0aGlzLmRvQ29uZmlybSgpLnRoZW4oKGNvbmZpcm1lZCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjb25maXJtZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb0FqYXgoKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3BvbnNlRGF0YSA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc1VwZGF0ZShyZXNwb25zZSkudGhlbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLlhfV0lOVEVSX1NVQ0NFU1MgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzRXJyb3IocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NSZXNwb25zZShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3BvbnNlRXJyb3IgPSBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NFcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kb0FqYXgoKS50aGVuKFxuICAgICAgICAgICAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zZURhdGEgPSByZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzVXBkYXRlKHJlc3BvbnNlKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5YX1dJTlRFUl9TVUNDRVNTID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NFcnJvcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zZUVycm9yID0gZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc0Vycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlcGVuZGVuY2llcyBmb3IgdGhpcyBwbHVnaW4uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICAgICovXG4gICAgZGVwZW5kZW5jaWVzKCkge1xuICAgICAgICByZXR1cm4gWydjb29raWUnLCAnanNvblBhcnNlciddO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFZhbGlkYXRlcyB0aGUgZWxlbWVudCBhbmQgaGFuZGxlciBnaXZlbiBpbiB0aGUgcmVxdWVzdC5cbiAgICAgKi9cbiAgICBjaGVja1JlcXVlc3QoKSB7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQgJiYgdGhpcy5lbGVtZW50IGluc3RhbmNlb2YgRWxlbWVudCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGVsZW1lbnQgcHJvdmlkZWQgbXVzdCBiZSBhbiBFbGVtZW50IGluc3RhbmNlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5oYW5kbGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIEFKQVggaGFuZGxlciBuYW1lIGlzIG5vdCBzcGVjaWZpZWQuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuaXNIYW5kbGVyTmFtZSh0aGlzLmhhbmRsZXIpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgQUpBWCBoYW5kbGVyIG5hbWUuIFRoZSBjb3JyZWN0IGhhbmRsZXIgbmFtZSBmb3JtYXQgaXM6IFwib25FdmVudFwiLicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIEZldGNoIHJlcXVlc3QuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBtYWRlIGF2YWlsYWJsZSBmb3IgcGx1Z2lucyB0byBleHRlbmQgb3Igb3ZlcnJpZGUgdGhlIGRlZmF1bHQgZmV0Y2goKSBzZXR0aW5ncyB3aXRoIHRoZWlyIG93bi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIGdldEZldGNoKCkge1xuICAgICAgICB0aGlzLmZldGNoT3B0aW9ucyA9ICh0aGlzLm9wdGlvbnMuZmV0Y2hPcHRpb25zICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHRoaXMub3B0aW9ucy5mZXRjaE9wdGlvbnMgPT09ICdvYmplY3QnKVxuICAgICAgICAgICAgPyB0aGlzLm9wdGlvbnMuZmV0Y2hPcHRpb25zXG4gICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgICAgICAgICAgICAgYm9keTogdGhpcy5kYXRhLFxuICAgICAgICAgICAgICAgIHJlZGlyZWN0OiAnZm9sbG93JyxcbiAgICAgICAgICAgICAgICBtb2RlOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYWpheEZldGNoT3B0aW9ucycsIHRoaXMuZmV0Y2hPcHRpb25zLCB0aGlzKTtcblxuICAgICAgICByZXR1cm4gZmV0Y2godGhpcy51cmwsIHRoaXMuZmV0Y2hPcHRpb25zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSdW4gY2xpZW50LXNpZGUgdmFsaWRhdGlvbiBvbiB0aGUgZm9ybSwgaWYgYXZhaWxhYmxlLlxuICAgICAqXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgZG9DbGllbnRWYWxpZGF0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmJyb3dzZXJWYWxpZGF0ZSA9PT0gdHJ1ZSAmJiB0aGlzLmZvcm0pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uY2hlY2tWYWxpZGl0eSgpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4ZWN1dGVzIHRoZSBBSkFYIHF1ZXJ5LlxuICAgICAqXG4gICAgICogUmV0dXJucyBhIFByb21pc2Ugb2JqZWN0IGZvciB3aGVuIHRoZSBBSkFYIHJlcXVlc3QgaXMgY29tcGxldGVkLlxuICAgICAqXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAgICovXG4gICAgZG9BamF4KCkge1xuICAgICAgICAvLyBBbGxvdyBwbHVnaW5zIHRvIGNhbmNlbCB0aGUgQUpBWCByZXF1ZXN0IGJlZm9yZSBzZW5kaW5nXG4gICAgICAgIGlmICh0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYWpheEJlZm9yZVNlbmQnLCB0aGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICAgICAgICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWpheFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmdldEZldGNoKCkudGhlbihcbiAgICAgICAgICAgICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vayAmJiByZXNwb25zZS5zdGF0dXMgIT09IDQwNikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmhlYWRlcnMuaGFzKCdDb250ZW50LVR5cGUnKSAmJiByZXNwb25zZS5oZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJykuaW5jbHVkZXMoJy9qc29uJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5qc29uKCkudGhlbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlRGF0YS5tZXNzYWdlICYmIHJlc3BvbnNlRGF0YS5leGNlcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QodGhpcy5yZW5kZXJFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VEYXRhLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlRGF0YS5leGNlcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlRGF0YS5maWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZURhdGEubGluZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VEYXRhLnRyYWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QocmVzcG9uc2VEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QodGhpcy5yZW5kZXJFcnJvcihgVW5hYmxlIHRvIHBhcnNlIEpTT04gcmVzcG9uc2U6ICR7ZXJyb3J9YCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLnRleHQoKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2VUZXh0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QodGhpcy5yZW5kZXJFcnJvcihyZXNwb25zZVRleHQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QodGhpcy5yZW5kZXJFcnJvcihgVW5hYmxlIHRvIHByb2Nlc3MgcmVzcG9uc2U6ICR7ZXJyb3J9YCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuaGVhZGVycy5oYXMoJ0NvbnRlbnQtVHlwZScpICYmIHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKS5pbmNsdWRlcygnL2pzb24nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnJlc3BvbnNlRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFhfV0lOVEVSX1NVQ0NFU1M6IHJlc3BvbnNlLnN0YXR1cyAhPT0gNDA2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWF9XSU5URVJfUkVTUE9OU0VfQ09ERTogcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QodGhpcy5yZW5kZXJFcnJvcihgVW5hYmxlIHRvIHBhcnNlIEpTT04gcmVzcG9uc2U6ICR7ZXJyb3J9YCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UudGV4dCgpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHRoaXMucmVuZGVyRXJyb3IoYFVuYWJsZSB0byBwcm9jZXNzIHJlc3BvbnNlOiAke2Vycm9yfWApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKHJlc3BvbnNlRXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHRoaXMucmVuZGVyRXJyb3IoYFVuYWJsZSB0byByZXRyaWV2ZSBhIHJlc3BvbnNlIGZyb20gdGhlIHNlcnZlcjogJHtyZXNwb25zZUVycm9yfWApKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2FqYXhTdGFydCcsIGFqYXhQcm9taXNlLCB0aGlzKTtcblxuICAgICAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IG5ldyBFdmVudCgnYWpheFByb21pc2UnKTtcbiAgICAgICAgICAgIGV2ZW50LnByb21pc2UgPSBhamF4UHJvbWlzZTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhamF4UHJvbWlzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcmVwYXJlcyBmb3IgdXBkYXRpbmcgdGhlIHBhcnRpYWxzIGZyb20gdGhlIEFKQVggcmVzcG9uc2UuXG4gICAgICpcbiAgICAgKiBJZiBhbnkgcGFydGlhbHMgYXJlIHJldHVybmVkIGZyb20gdGhlIEFKQVggcmVzcG9uc2UsIHRoaXMgbWV0aG9kIHdpbGwgYWxzbyBhY3Rpb24gdGhlIHBhcnRpYWwgdXBkYXRlcy5cbiAgICAgKlxuICAgICAqIFJldHVybnMgYSBQcm9taXNlIG9iamVjdCB3aGljaCB0cmFja3Mgd2hlbiB0aGUgcGFydGlhbCB1cGRhdGUgaXMgY29tcGxldGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVzcG9uc2VcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICBwcm9jZXNzVXBkYXRlKHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5iZWZvcmVVcGRhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmJlZm9yZVVwZGF0ZS5hcHBseSh0aGlzLCBbcmVzcG9uc2VdKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBFeHRyYWN0IHBhcnRpYWwgaW5mb3JtYXRpb25cbiAgICAgICAgICAgIGNvbnN0IHBhcnRpYWxzID0ge307XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhyZXNwb25zZSkuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSBlbnRyeTtcblxuICAgICAgICAgICAgICAgIGlmIChrZXkuc3Vic3RyKDAsIDgpICE9PSAnWF9XSU5URVInKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnRpYWxzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHBhcnRpYWxzKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuWF9XSU5URVJfQVNTRVRTKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc0Fzc2V0cyhyZXNwb25zZS5YX1dJTlRFUl9BU1NFVFMpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHByb21pc2VzID0gdGhpcy5zbm93Ym9hcmQuZ2xvYmFsUHJvbWlzZUV2ZW50KCdhamF4QmVmb3JlVXBkYXRlJywgcmVzcG9uc2UsIHRoaXMpO1xuICAgICAgICAgICAgcHJvbWlzZXMudGhlbihcbiAgICAgICAgICAgICAgICBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5YX1dJTlRFUl9BU1NFVFMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucHJvY2Vzc0Fzc2V0cyhyZXNwb25zZS5YX1dJTlRFUl9BU1NFVFMpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb1VwZGF0ZShwYXJ0aWFscykudGhlbihcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBbGxvdyBmb3IgSFRNTCByZWRyYXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHJlc29sdmUoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBwYXJ0aWFscyB3aXRoIHRoZSBnaXZlbiBjb250ZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBhcnRpYWxzXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAgICovXG4gICAgZG9VcGRhdGUocGFydGlhbHMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhZmZlY3RlZCA9IFtdO1xuXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhwYXJ0aWFscykuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBbcGFydGlhbCwgY29udGVudF0gPSBlbnRyeTtcblxuICAgICAgICAgICAgICAgIGxldCBzZWxlY3RvciA9ICh0aGlzLm9wdGlvbnMudXBkYXRlICYmIHRoaXMub3B0aW9ucy51cGRhdGVbcGFydGlhbF0pXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5vcHRpb25zLnVwZGF0ZVtwYXJ0aWFsXVxuICAgICAgICAgICAgICAgICAgICA6IHBhcnRpYWw7XG5cbiAgICAgICAgICAgICAgICBsZXQgbW9kZSA9ICdyZXBsYWNlJztcblxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3Rvci5zdWJzdHIoMCwgMSkgPT09ICdAJykge1xuICAgICAgICAgICAgICAgICAgICBtb2RlID0gJ2FwcGVuZCc7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yID0gc2VsZWN0b3Iuc3Vic3RyKDEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0b3Iuc3Vic3RyKDAsIDEpID09PSAnXicpIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kZSA9ICdwcmVwZW5kJztcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3IgPSBzZWxlY3Rvci5zdWJzdHIoMSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxlY3Rvci5zdWJzdHIoMCwgMSkgIT09ICcjJyAmJiBzZWxlY3Rvci5zdWJzdHIoMCwgMSkgIT09ICcuJykge1xuICAgICAgICAgICAgICAgICAgICBtb2RlID0gJ25vb3AnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChtb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnYXBwZW5kJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgKz0gY29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncHJlcGVuZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gY29udGVudCArIGVsZW1lbnQuaW5uZXJIVE1MO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdub29wJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncmVwbGFjZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBjb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgYWZmZWN0ZWQucHVzaChlbGVtZW50KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmlyZSB1cGRhdGUgZXZlbnQgZm9yIGVhY2ggZWxlbWVudCB0aGF0IGlzIHVwZGF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdhamF4VXBkYXRlJywgZWxlbWVudCwgY29udGVudCwgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBldmVudCA9IG5ldyBFdmVudCgnYWpheFVwZGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2FqYXhVcGRhdGVDb21wbGV0ZScsIGFmZmVjdGVkLCB0aGlzKTtcblxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzZXMgdGhlIHJlc3BvbnNlIGRhdGEuXG4gICAgICpcbiAgICAgKiBUaGlzIGZpcmVzIG9mZiBhbGwgbmVjZXNzYXJ5IHByb2Nlc3NpbmcgZnVuY3Rpb25zIGRlcGVuZGluZyBvbiB0aGUgcmVzcG9uc2UsIGllLiBpZiB0aGVyZSdzIGFueSBmbGFzaFxuICAgICAqIG1lc3NhZ2VzIHRvIGhhbmRsZSwgb3IgYW55IHJlZGlyZWN0cyB0byBiZSB1bmRlcnRha2VuLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlc3BvbnNlXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgcHJvY2Vzc1Jlc3BvbnNlKHJlc3BvbnNlKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3VjY2VzcyAmJiB0eXBlb2YgdGhpcy5vcHRpb25zLnN1Y2Nlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3VjY2Vzcyh0aGlzLnJlc3BvbnNlRGF0YSwgdGhpcykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWxsb3cgcGx1Z2lucyB0byBjYW5jZWwgYW55IGZ1cnRoZXIgcmVzcG9uc2UgaGFuZGxpbmdcbiAgICAgICAgaWYgKHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdhamF4U3VjY2VzcycsIHRoaXMucmVzcG9uc2VEYXRhLCB0aGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFsbG93IHRoZSBlbGVtZW50IHRvIGNhbmNlbCBhbnkgZnVydGhlciByZXNwb25zZSBoYW5kbGluZ1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IG5ldyBFdmVudCgnYWpheERvbmUnLCB7IGNhbmNlbGFibGU6IHRydWUgfSk7XG4gICAgICAgICAgICBldmVudC5yZXNwb25zZURhdGEgPSB0aGlzLnJlc3BvbnNlRGF0YTtcbiAgICAgICAgICAgIGV2ZW50LnJlcXVlc3QgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuXG4gICAgICAgICAgICBpZiAoZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmZsYXNoICYmIHJlc3BvbnNlLlhfV0lOVEVSX0ZMQVNIX01FU1NBR0VTKSB7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NGbGFzaE1lc3NhZ2VzKHJlc3BvbnNlLlhfV0lOVEVSX0ZMQVNIX01FU1NBR0VTKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIGZvciBhIHJlZGlyZWN0IGZyb20gdGhlIHJlc3BvbnNlLCBvciB1c2UgdGhlIHJlZGlyZWN0IGFzIHNwZWNpZmllZCBpbiB0aGUgb3B0aW9ucy5cbiAgICAgICAgaWYgKHRoaXMucmVkaXJlY3QgfHwgcmVzcG9uc2UuWF9XSU5URVJfUkVESVJFQ1QpIHtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc1JlZGlyZWN0KHRoaXMucmVkaXJlY3QgfHwgcmVzcG9uc2UuWF9XSU5URVJfUkVESVJFQ1QpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb2Nlc3NlcyBhbiBlcnJvciByZXNwb25zZSBmcm9tIHRoZSBBSkFYIHJlcXVlc3QuXG4gICAgICpcbiAgICAgKiBUaGlzIGZpcmVzIG9mZiBhbGwgbmVjZXNzYXJ5IHByb2Nlc3NpbmcgZnVuY3Rpb25zIGRlcGVuZGluZyBvbiB0aGUgZXJyb3IgcmVzcG9uc2UsIGllLiBpZiB0aGVyZSdzIGFueSBlcnJvciBvclxuICAgICAqIHZhbGlkYXRpb24gbWVzc2FnZXMgdG8gaGFuZGxlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R8RXJyb3J9IGVycm9yXG4gICAgICovXG4gICAgcHJvY2Vzc0Vycm9yKGVycm9yKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZXJyb3IgJiYgdHlwZW9mIHRoaXMub3B0aW9ucy5lcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5lcnJvcih0aGlzLnJlc3BvbnNlRXJyb3IsIHRoaXMpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFsbG93IHBsdWdpbnMgdG8gY2FuY2VsIGFueSBmdXJ0aGVyIGVycm9yIGhhbmRsaW5nXG4gICAgICAgIGlmICh0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYWpheEVycm9yJywgdGhpcy5yZXNwb25zZUVycm9yLCB0aGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFsbG93IHRoZSBlbGVtZW50IHRvIGNhbmNlbCBhbnkgZnVydGhlciBlcnJvciBoYW5kbGluZ1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IG5ldyBFdmVudCgnYWpheEZhaWwnLCB7IGNhbmNlbGFibGU6IHRydWUgfSk7XG4gICAgICAgICAgICBldmVudC5yZXNwb25zZUVycm9yID0gdGhpcy5yZXNwb25zZUVycm9yO1xuICAgICAgICAgICAgZXZlbnQucmVxdWVzdCA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG5cbiAgICAgICAgICAgIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc0Vycm9yTWVzc2FnZShlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBza2lwRXJyb3IgPSBmYWxzZTtcblxuICAgICAgICAgICAgLy8gUHJvY2VzcyB2YWxpZGF0aW9uIGVycm9yc1xuICAgICAgICAgICAgaWYgKGVycm9yLlhfV0lOVEVSX0VSUk9SX0ZJRUxEUykge1xuICAgICAgICAgICAgICAgIHNraXBFcnJvciA9IHRoaXMucHJvY2Vzc1ZhbGlkYXRpb25FcnJvcnMoZXJyb3IuWF9XSU5URVJfRVJST1JfRklFTERTKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGVycm9yLlhfV0lOVEVSX0VSUk9SX01FU1NBR0UgJiYgIXNraXBFcnJvcikge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc0Vycm9yTWVzc2FnZShlcnJvci5YX1dJTlRFUl9FUlJPUl9NRVNTQUdFKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzZXMgYSByZWRpcmVjdCByZXNwb25zZS5cbiAgICAgKlxuICAgICAqIEJ5IGRlZmF1bHQsIHRoaXMgcHJvY2Vzc29yIHdpbGwgc2ltcGx5IHJlZGlyZWN0IHRoZSB1c2VyIGluIHRoZWlyIGJyb3dzZXIuXG4gICAgICpcbiAgICAgKiBQbHVnaW5zIGNhbiBhdWdtZW50IHRoaXMgZnVuY3Rpb25hbGl0eSBmcm9tIHRoZSBgYWpheFJlZGlyZWN0YCBldmVudC4gWW91IG1heSBhbHNvIG92ZXJyaWRlIHRoaXMgZnVuY3Rpb25hbGl0eSBvblxuICAgICAqIGEgcGVyLXJlcXVlc3QgYmFzaXMgdGhyb3VnaCB0aGUgYGhhbmRsZVJlZGlyZWN0UmVzcG9uc2VgIGNhbGxiYWNrIG9wdGlvbi4gSWYgYSBgZmFsc2VgIGlzIHJldHVybmVkIGZyb20gZWl0aGVyLCB0aGVcbiAgICAgKiByZWRpcmVjdCB3aWxsIGJlIGNhbmNlbGxlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBwcm9jZXNzUmVkaXJlY3QodXJsKSB7XG4gICAgICAgIC8vIFJ1biBhIGN1c3RvbSBwZXItcmVxdWVzdCByZWRpcmVjdCBoYW5kbGVyLiBJZiBmYWxzZSBpcyByZXR1cm5lZCwgZG9uJ3QgcnVuIHRoZSByZWRpcmVjdC5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuaGFuZGxlUmVkaXJlY3RSZXNwb25zZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5oYW5kbGVSZWRpcmVjdFJlc3BvbnNlLmFwcGx5KHRoaXMsIFt1cmxdKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBbGxvdyBwbHVnaW5zIHRvIGNhbmNlbCB0aGUgcmVkaXJlY3RcbiAgICAgICAgaWYgKHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdhamF4UmVkaXJlY3QnLCB1cmwsIHRoaXMpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW5kaWNhdGUgdGhhdCB0aGUgQUpBWCByZXF1ZXN0IGlzIGZpbmlzaGVkIGlmIHdlJ3JlIHN0aWxsIG9uIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgbG9hZGluZyBpbmRpY2F0b3IgZm9yIHJlZGlyZWN0cyB0aGF0IGp1c3QgY2hhbmdlIHRoZSBoYXNoIHZhbHVlIG9mXG4gICAgICAgIC8vIHRoZSBVUkwgaW5zdGVhZCBvZiBsZWF2aW5nIHRoZSBwYWdlIHdpbGwgcHJvcGVybHkgc3RvcC5cbiAgICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vb2N0b2JlcmNtcy9vY3RvYmVyL2lzc3Vlcy8yNzgwXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgICAgICAgICAgICAgIGV2ZW50LmV2ZW50TmFtZSA9ICdhamF4UmVkaXJlY3RlZCc7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBvbmNlOiB0cnVlLFxuICAgICAgICB9KTtcblxuICAgICAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKHVybCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvY2Vzc2VzIGFuIGVycm9yIG1lc3NhZ2UuXG4gICAgICpcbiAgICAgKiBCeSBkZWZhdWx0LCB0aGlzIHByb2Nlc3NvciB3aWxsIHNpbXBseSBhbGVydCB0aGUgdXNlciB0aHJvdWdoIGEgc2ltcGxlIGBhbGVydCgpYCBjYWxsLlxuICAgICAqXG4gICAgICogUGx1Z2lucyBjYW4gYXVnbWVudCB0aGlzIGZ1bmN0aW9uYWxpdHkgZnJvbSB0aGUgYGFqYXhFcnJvck1lc3NhZ2VgIGV2ZW50LiBZb3UgbWF5IGFsc28gb3ZlcnJpZGUgdGhpcyBmdW5jdGlvbmFsaXR5XG4gICAgICogb24gYSBwZXItcmVxdWVzdCBiYXNpcyB0aHJvdWdoIHRoZSBgaGFuZGxlRXJyb3JNZXNzYWdlYCBjYWxsYmFjayBvcHRpb24uIElmIGEgYGZhbHNlYCBpcyByZXR1cm5lZCBmcm9tIGVpdGhlciwgdGhlXG4gICAgICogZXJyb3IgbWVzc2FnZSBoYW5kbGluZyB3aWxsIGJlIGNhbmNlbGxlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgcHJvY2Vzc0Vycm9yTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgICAgIC8vIFJ1biBhIGN1c3RvbSBwZXItcmVxdWVzdCBoYW5kbGVyIGZvciBlcnJvciBtZXNzYWdlcy4gSWYgZmFsc2UgaXMgcmV0dXJuZWQsIGRvIG5vdCBwcm9jZXNzIHRoZSBlcnJvciBtZXNzYWdlc1xuICAgICAgICAvLyBhbnkgZnVydGhlci5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuaGFuZGxlRXJyb3JNZXNzYWdlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmhhbmRsZUVycm9yTWVzc2FnZS5hcHBseSh0aGlzLCBbbWVzc2FnZV0pID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFsbG93IHBsdWdpbnMgdG8gY2FuY2VsIHRoZSBlcnJvciBtZXNzYWdlIGJlaW5nIHNob3duXG4gICAgICAgIGlmICh0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYWpheEVycm9yTWVzc2FnZScsIG1lc3NhZ2UsIHRoaXMpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQnkgZGVmYXVsdCwgc2hvdyBhIGJyb3dzZXIgZXJyb3IgbWVzc2FnZVxuICAgICAgICB3aW5kb3cuYWxlcnQobWVzc2FnZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvY2Vzc2VzIGZsYXNoIG1lc3NhZ2VzIGZyb20gdGhlIHJlc3BvbnNlLlxuICAgICAqXG4gICAgICogQnkgZGVmYXVsdCwgbm8gZmxhc2ggbWVzc2FnZSBoYW5kbGluZyB3aWxsIG9jY3VyLlxuICAgICAqXG4gICAgICogUGx1Z2lucyBjYW4gYXVnbWVudCB0aGlzIGZ1bmN0aW9uYWxpdHkgZnJvbSB0aGUgYGFqYXhGbGFzaE1lc3NhZ2VzYCBldmVudC4gWW91IG1heSBhbHNvIG92ZXJyaWRlIHRoaXMgZnVuY3Rpb25hbGl0eVxuICAgICAqIG9uIGEgcGVyLXJlcXVlc3QgYmFzaXMgdGhyb3VnaCB0aGUgYGhhbmRsZUZsYXNoTWVzc2FnZXNgIGNhbGxiYWNrIG9wdGlvbi4gSWYgYSBgZmFsc2VgIGlzIHJldHVybmVkIGZyb20gZWl0aGVyLCB0aGVcbiAgICAgKiBmbGFzaCBtZXNzYWdlIGhhbmRsaW5nIHdpbGwgYmUgY2FuY2VsbGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2VzXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBwcm9jZXNzRmxhc2hNZXNzYWdlcyhtZXNzYWdlcykge1xuICAgICAgICAvLyBSdW4gYSBjdXN0b20gcGVyLXJlcXVlc3QgZmxhc2ggaGFuZGxlci4gSWYgZmFsc2UgaXMgcmV0dXJuZWQsIGRvbid0IHNob3cgdGhlIGZsYXNoIG1lc3NhZ2VcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuaGFuZGxlRmxhc2hNZXNzYWdlcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5oYW5kbGVGbGFzaE1lc3NhZ2VzLmFwcGx5KHRoaXMsIFttZXNzYWdlc10pID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdhamF4Rmxhc2hNZXNzYWdlcycsIG1lc3NhZ2VzLCB0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzZXMgdmFsaWRhdGlvbiBlcnJvcnMgZm9yIGZpZWxkcy5cbiAgICAgKlxuICAgICAqIEJ5IGRlZmF1bHQsIG5vIHZhbGlkYXRpb24gZXJyb3IgaGFuZGxpbmcgd2lsbCBvY2N1ci5cbiAgICAgKlxuICAgICAqIFBsdWdpbnMgY2FuIGF1Z21lbnQgdGhpcyBmdW5jdGlvbmFsaXR5IGZyb20gdGhlIGBhamF4VmFsaWRhdGlvbkVycm9yc2AgZXZlbnQuIFlvdSBtYXkgYWxzbyBvdmVycmlkZSB0aGlzIGZ1bmN0aW9uYWxpdHlcbiAgICAgKiBvbiBhIHBlci1yZXF1ZXN0IGJhc2lzIHRocm91Z2ggdGhlIGBoYW5kbGVWYWxpZGF0aW9uRXJyb3JzYCBjYWxsYmFjayBvcHRpb24uIElmIGEgYGZhbHNlYCBpcyByZXR1cm5lZCBmcm9tIGVpdGhlciwgdGhlXG4gICAgICogdmFsaWRhdGlvbiBlcnJvciBoYW5kbGluZyB3aWxsIGJlIGNhbmNlbGxlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBmaWVsZHNcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIHByb2Nlc3NWYWxpZGF0aW9uRXJyb3JzKGZpZWxkcykge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5oYW5kbGVWYWxpZGF0aW9uRXJyb3JzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmhhbmRsZVZhbGlkYXRpb25FcnJvcnMuYXBwbHkodGhpcywgW3RoaXMuZm9ybSwgZmllbGRzXSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBbGxvdyBwbHVnaW5zIHRvIGNhbmNlbCB0aGUgdmFsaWRhdGlvbiBlcnJvcnMgYmVpbmcgaGFuZGxlZFxuICAgICAgICBpZiAodGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2FqYXhWYWxpZGF0aW9uRXJyb3JzJywgdGhpcy5mb3JtLCBmaWVsZHMsIHRoaXMpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvY2Vzc2VzIGFzc2V0cyByZXR1cm5lZCBieSBhbiBBSkFYIHJlcXVlc3QuXG4gICAgICpcbiAgICAgKiBCeSBkZWZhdWx0LCBubyBhc3NldCBwcm9jZXNzaW5nIHdpbGwgb2NjdXIgYW5kIHRoaXMgd2lsbCByZXR1cm4gYSByZXNvbHZlZCBQcm9taXNlLlxuICAgICAqXG4gICAgICogUGx1Z2lucyBjYW4gYXVnbWVudCB0aGlzIGZ1bmN0aW9uYWxpdHkgZnJvbSB0aGUgYGFqYXhMb2FkQXNzZXRzYCBldmVudC4gVGhpcyBldmVudCBpcyBjb25zaWRlcmVkIGJsb2NraW5nLCBhbmRcbiAgICAgKiBhbGxvd3MgYXNzZXRzIHRvIGJlIGxvYWRlZCBvciBwcm9jZXNzZWQgYmVmb3JlIGNvbnRpbnVpbmcgd2l0aCBhbnkgYWRkaXRpb25hbCBmdW5jdGlvbmFsaXR5LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGFzc2V0c1xuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIHByb2Nlc3NBc3NldHMoYXNzZXRzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNub3dib2FyZC5nbG9iYWxQcm9taXNlRXZlbnQoJ2FqYXhMb2FkQXNzZXRzJywgYXNzZXRzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb25maXJtcyB0aGUgcmVxdWVzdCB3aXRoIHRoZSB1c2VyIGJlZm9yZSBwcm9jZWVkaW5nLlxuICAgICAqXG4gICAgICogVGhpcyBpcyBhbiBhc3luY2hyb25vdXMgbWV0aG9kLiBCeSBkZWZhdWx0LCBpdCB3aWxsIHVzZSB0aGUgYnJvd3NlcidzIGBjb25maXJtKClgIG1ldGhvZCB0byBxdWVyeSB0aGUgdXNlciB0b1xuICAgICAqIGNvbmZpcm0gdGhlIGFjdGlvbi4gVGhpcyBtZXRob2Qgd2lsbCByZXR1cm4gYSBQcm9taXNlIHdpdGggYSBib29sZWFuIHZhbHVlIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSB1c2VyIGNvbmZpcm1lZFxuICAgICAqIG9yIG5vdC5cbiAgICAgKlxuICAgICAqIFBsdWdpbnMgY2FuIGF1Z21lbnQgdGhpcyBmdW5jdGlvbmFsaXR5IGZyb20gdGhlIGBhamF4Q29uZmlybU1lc3NhZ2VgIGV2ZW50LiBZb3UgbWF5IGFsc28gb3ZlcnJpZGUgdGhpcyBmdW5jdGlvbmFsaXR5XG4gICAgICogb24gYSBwZXItcmVxdWVzdCBiYXNpcyB0aHJvdWdoIHRoZSBgaGFuZGxlQ29uZmlybU1lc3NhZ2VgIGNhbGxiYWNrIG9wdGlvbi4gSWYgYSBgZmFsc2VgIGlzIHJldHVybmVkIGZyb20gZWl0aGVyLFxuICAgICAqIHRoZSBjb25maXJtYXRpb24gaXMgYXNzdW1lZCB0byBoYXZlIGJlZW4gZGVuaWVkLlxuICAgICAqXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAgICovXG4gICAgYXN5bmMgZG9Db25maXJtKCkge1xuICAgICAgICAvLyBBbGxvdyBmb3IgYSBjdXN0b20gaGFuZGxlciBmb3IgdGhlIGNvbmZpcm1hdGlvbiwgcGVyIHJlcXVlc3QuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmhhbmRsZUNvbmZpcm1NZXNzYWdlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmhhbmRsZUNvbmZpcm1NZXNzYWdlLmFwcGx5KHRoaXMsIFt0aGlzLmNvbmZpcm1dKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgbm8gcGx1Z2lucyBoYXZlIGN1c3RvbWlzZWQgdGhlIGNvbmZpcm1hdGlvbiwgdXNlIGEgc2ltcGxlIGJyb3dzZXIgY29uZmlybWF0aW9uLlxuICAgICAgICBpZiAodGhpcy5zbm93Ym9hcmQubGlzdGVuc1RvRXZlbnQoJ2FqYXhDb25maXJtTWVzc2FnZScpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5jb25maXJtKHRoaXMuY29uZmlybSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSdW4gY3VzdG9tIHBsdWdpbiBjb25maXJtYXRpb25zXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gdGhpcy5zbm93Ym9hcmQuZ2xvYmFsUHJvbWlzZUV2ZW50KCdhamF4Q29uZmlybU1lc3NhZ2UnLCB0aGlzLmNvbmZpcm0sIHRoaXMpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBmdWxmaWxsZWQgPSBhd2FpdCBwcm9taXNlcztcbiAgICAgICAgICAgIGlmIChmdWxmaWxsZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpcmVzIG9mZiBjb21wbGV0aW9uIGV2ZW50cyBmb3IgdGhlIFJlcXVlc3QuXG4gICAgICovXG4gICAgY29tcGxldGUoKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuY29tcGxldGUgJiYgdHlwZW9mIHRoaXMub3B0aW9ucy5jb21wbGV0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNvbXBsZXRlKHRoaXMucmVzcG9uc2VEYXRhLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYWpheERvbmUnLCB0aGlzLnJlc3BvbnNlRGF0YSwgdGhpcyk7XG5cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQoJ2FqYXhBbHdheXMnKTtcbiAgICAgICAgICAgIGV2ZW50LnJlcXVlc3QgPSB0aGlzO1xuICAgICAgICAgICAgZXZlbnQucmVzcG9uc2VEYXRhID0gdGhpcy5yZXNwb25zZURhdGE7XG4gICAgICAgICAgICBldmVudC5yZXNwb25zZUVycm9yID0gdGhpcy5yZXNwb25zZUVycm9yO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmlyZSBvZmYgdGhlIGRlc3RydWN0b3JcbiAgICAgICAgdGhpcy5kZXN0cnVjdCgpO1xuICAgIH1cblxuICAgIGdldCBmb3JtKCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmZvcm0pIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmZvcm0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5vcHRpb25zLmZvcm0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5mb3JtO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5lbGVtZW50LnRhZ05hbWUgPT09ICdGT1JNJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQuY2xvc2VzdCgnZm9ybScpO1xuICAgIH1cblxuICAgIGdldCBjb250ZXh0KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaGFuZGxlcjogdGhpcy5oYW5kbGVyLFxuICAgICAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldCBoZWFkZXJzKCkge1xuICAgICAgICBjb25zdCBoZWFkZXJzID0ge1xuICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnLCAvLyBLZWVwcyBjb21wYXRpYmlsaXR5IHdpdGggalF1ZXJ5IEFKQVhcbiAgICAgICAgICAgICdYLVdJTlRFUi1SRVFVRVNULUhBTkRMRVInOiB0aGlzLmhhbmRsZXIsXG4gICAgICAgICAgICAnWC1XSU5URVItUkVRVUVTVC1QQVJUSUFMUyc6IHRoaXMuZXh0cmFjdFBhcnRpYWxzKHRoaXMub3B0aW9ucy51cGRhdGUgfHwgW10pLFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0aGlzLmZsYXNoKSB7XG4gICAgICAgICAgICBoZWFkZXJzWydYLVdJTlRFUi1SRVFVRVNULUZMQVNIJ10gPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMueHNyZlRva2VuKSB7XG4gICAgICAgICAgICBoZWFkZXJzWydYLVhTUkYtVE9LRU4nXSA9IHRoaXMueHNyZlRva2VuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGhlYWRlcnM7XG4gICAgfVxuXG4gICAgZ2V0IGxvYWRpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMubG9hZGluZyB8fCBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXQgdXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnVybCB8fCB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICB9XG5cbiAgICBnZXQgcmVkaXJlY3QoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5vcHRpb25zLnJlZGlyZWN0ICYmIHRoaXMub3B0aW9ucy5yZWRpcmVjdC5sZW5ndGgpID8gdGhpcy5vcHRpb25zLnJlZGlyZWN0IDogbnVsbDtcbiAgICB9XG5cbiAgICBnZXQgZmxhc2goKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZmxhc2ggfHwgZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0IGZpbGVzKCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmZpbGVzID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoRm9ybURhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc25vd2JvYXJkLmRlYnVnKCdUaGlzIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBmaWxlIHVwbG9hZHMnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGdldCB4c3JmVG9rZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNub3dib2FyZC5jb29raWUoKS5nZXQoJ1hTUkYtVE9LRU4nKTtcbiAgICB9XG5cbiAgICBnZXQgZGF0YSgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9ICh0eXBlb2YgdGhpcy5vcHRpb25zLmRhdGEgPT09ICdvYmplY3QnKSA/IHRoaXMub3B0aW9ucy5kYXRhIDoge307XG5cbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcy5mb3JtIHx8IHVuZGVmaW5lZCk7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhkYXRhKS5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IGVudHJ5O1xuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZvcm1EYXRhO1xuICAgIH1cblxuICAgIGdldCBjb25maXJtKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNvbmZpcm0gfHwgZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdHMgcGFydGlhbHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdXBkYXRlXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBleHRyYWN0UGFydGlhbHModXBkYXRlKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh1cGRhdGUpLmpvaW4oJyYnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIGFuIGVycm9yIHdpdGggdXNlZnVsIGRlYnVnIGluZm9ybWF0aW9uLlxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2QgaXMgdXNlZCBpbnRlcm5hbGx5IHdoZW4gdGhlIEFKQVggcmVxdWVzdCBjb3VsZCBub3QgYmUgY29tcGxldGVkIG9yIHByb2Nlc3NlZCBjb3JyZWN0bHkgZHVlIHRvIGFuIGVycm9yLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXhjZXB0aW9uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gbGluZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nW119IHRyYWNlXG4gICAgICogQHJldHVybnMge0Vycm9yfVxuICAgICAqL1xuICAgIHJlbmRlckVycm9yKG1lc3NhZ2UsIGV4Y2VwdGlvbiwgZmlsZSwgbGluZSwgdHJhY2UpIHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICAgIGVycm9yLmV4Y2VwdGlvbiA9IGV4Y2VwdGlvbiB8fCBudWxsO1xuICAgICAgICBlcnJvci5maWxlID0gZmlsZSB8fCBudWxsO1xuICAgICAgICBlcnJvci5saW5lID0gbGluZSB8fCBudWxsO1xuICAgICAgICBlcnJvci50cmFjZSA9IHRyYWNlIHx8IFtdO1xuICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGEgZ2l2ZW4gc3RyaW5nIHRvIHNlZSBpZiBpdCBpcyBhIHZhbGlkIEFKQVggaGFuZGxlciBuYW1lLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBpc0hhbmRsZXJOYW1lKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIC9eKD86XFx3Kzp7Mn0pP29uW0EtWjAtOV0vLnRlc3QobmFtZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFNpbmdsZXRvbiBmcm9tICcuLi9hYnN0cmFjdHMvU2luZ2xldG9uJztcblxuLyoqXG4gKiBBc3NldCBMb2FkZXIuXG4gKlxuICogUHJvdmlkZXMgc2ltcGxlIGFzc2V0IGxvYWRpbmcgZnVuY3Rpb25hbGl0eSBmb3IgU25vd2JvYXJkLCBtYWtpbmcgaXQgZWFzeSB0byBwcmUtbG9hZCBpbWFnZXMgb3JcbiAqIGluY2x1ZGUgSmF2YVNjcmlwdCBvciBDU1MgYXNzZXRzIG9uIHRoZSBmbHkuXG4gKlxuICogQnkgZGVmYXVsdCwgdGhpcyBsb2FkZXIgd2lsbCBsaXN0ZW4gdG8gYW55IGFzc2V0cyB0aGF0IGhhdmUgYmVlbiByZXF1ZXN0ZWQgdG8gbG9hZCBpbiBhbiBBSkFYXG4gKiByZXNwb25zZSwgc3VjaCBhcyByZXNwb25zZXMgZnJvbSBhIGNvbXBvbmVudC5cbiAqXG4gKiBZb3UgY2FuIGFsc28gbG9hZCBhc3NldHMgbWFudWFsbHkgYnkgY2FsbGluZyB0aGUgZm9sbG93aW5nOlxuICpcbiAqIGBgYGpzXG4gKiBTbm93Ym9hcmQuYWRkUGx1Z2luKCdhc3NldExvYWRlcicsIEFzc2V0TG9hZGVyKTtcbiAqIFNub3dib2FyZC5hc3NldExvYWRlcigpLnByb2Nlc3NBc3NldHMoYXNzZXRzKTtcbiAqIGBgYFxuICpcbiAqIEBjb3B5cmlnaHQgMjAyMSBXaW50ZXIuXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBc3NldExvYWRlciBleHRlbmRzIFNpbmdsZXRvbiB7XG4gICAgLyoqXG4gICAgICogRXZlbnQgbGlzdGVuZXJzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBsaXN0ZW5zKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWpheExvYWRBc3NldHM6ICdsb2FkJyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXBlbmRlbmNpZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgZGVwZW5kZW5jaWVzKCkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgJ3VybCcsXG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvY2VzcyBhbmQgbG9hZCBhc3NldHMuXG4gICAgICpcbiAgICAgKiBUaGUgYGFzc2V0c2AgcHJvcGVydHkgb2YgdGhpcyBtZXRob2QgcmVxdWlyZXMgYW4gb2JqZWN0IHdpdGggYW55IG9mIHRoZSBmb2xsb3dpbmcga2V5cyBhbmQgYW5cbiAgICAgKiBhcnJheSBvZiBwYXRoczpcbiAgICAgKlxuICAgICAqIC0gYGpzYDogQW4gYXJyYXkgb2YgSmF2YVNjcmlwdCBVUkxzIHRvIGxvYWRcbiAgICAgKiAtIGBjc3NgOiBBbiBhcnJheSBvZiBDU1Mgc3R5bGVzaGVldCBVUkxzIHRvIGxvYWRcbiAgICAgKiAtIGBpbWdgOiBBbiBhcnJheSBvZiBpbWFnZSBVUkxzIHRvIHByZS1sb2FkXG4gICAgICpcbiAgICAgKiBCb3RoIGBqc2AgYW5kIGBjc3NgIGZpbGVzIHdpbGwgYmUgYXV0b21hdGljYWxseSBpbmplY3RlZCwgaG93ZXZlciBgaW1nYCBmaWxlcyB3aWxsIG5vdC5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIHdpbGwgcmV0dXJuIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gYWxsIHJlcXVpcmVkIGFzc2V0cyBhcmUgbG9hZGVkLiBJZiBhblxuICAgICAqIGFzc2V0IGZhaWxzIHRvIGxvYWQsIHRoaXMgUHJvbWlzZSB3aWxsIGJlIHJlamVjdGVkLlxuICAgICAqXG4gICAgICogRVNMaW50ICpSRUFMTFkqIGRvZXNuJ3QgbGlrZSB0aGlzIGNvZGUsIGJ1dCBpZ25vcmUgaXQuIEl0J3MgdGhlIG9ubHkgd2F5IGl0IHdvcmtzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGFzc2V0c1xuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIGFzeW5jIGxvYWQoYXNzZXRzKSB7XG4gICAgICAgIGlmIChhc3NldHMuanMgJiYgYXNzZXRzLmpzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc2NyaXB0IG9mIGFzc2V0cy5qcykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMubG9hZFNjcmlwdChzY3JpcHQpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFzc2V0cy5jc3MgJiYgYXNzZXRzLmNzcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHN0eWxlIG9mIGFzc2V0cy5jc3MpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmxvYWRTdHlsZShzdHlsZSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXNzZXRzLmltZyAmJiBhc3NldHMuaW1nLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaW1hZ2Ugb2YgYXNzZXRzLmltZykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMubG9hZEltYWdlKGltYWdlKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbmplY3RzIGFuZCBsb2FkcyBhIEphdmFTY3JpcHQgVVJMIGludG8gdGhlIERPTS5cbiAgICAgKlxuICAgICAqIFRoZSBzY3JpcHQgd2lsbCBiZSBhcHBlbmRlZCBiZWZvcmUgdGhlIGNsb3NpbmcgYDwvYm9keT5gIHRhZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzY3JpcHRcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICBsb2FkU2NyaXB0KHNjcmlwdCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgLy8gUmVzb2x2ZSBzY3JpcHQgVVJMXG4gICAgICAgICAgICBzY3JpcHQgPSB0aGlzLnNub3dib2FyZC51cmwoKS5hc3NldChzY3JpcHQpO1xuXG4gICAgICAgICAgICAvLyBDaGVjayB0aGF0IHNjcmlwdCBpcyBub3QgYWxyZWFkeSBsb2FkZWRcbiAgICAgICAgICAgIGNvbnN0IGxvYWRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmM9XCIke3NjcmlwdH1cIl1gKTtcbiAgICAgICAgICAgIGlmIChsb2FkZWQpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDcmVhdGUgc2NyaXB0XG4gICAgICAgICAgICBjb25zdCBkb21TY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgICAgIGRvbVNjcmlwdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9qYXZhc2NyaXB0Jyk7XG4gICAgICAgICAgICBkb21TY3JpcHQuc2V0QXR0cmlidXRlKCdzcmMnLCBzY3JpcHQpO1xuICAgICAgICAgICAgZG9tU2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2Fzc2V0TG9hZGVyLmxvYWRlZCcsICdzY3JpcHQnLCBzY3JpcHQsIGRvbVNjcmlwdCk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkb21TY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2Fzc2V0TG9hZGVyLmVycm9yJywgJ3NjcmlwdCcsIHNjcmlwdCwgZG9tU2NyaXB0KTtcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBVbmFibGUgdG8gbG9hZCBzY3JpcHQgZmlsZTogXCIke3NjcmlwdH1cImApKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoZG9tU2NyaXB0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5qZWN0cyBhbmQgbG9hZHMgYSBDU1Mgc3R5bGVzaGVldCBpbnRvIHRoZSBET00uXG4gICAgICpcbiAgICAgKiBUaGUgc3R5bGVzaGVldCB3aWxsIGJlIGFwcGVuZGVkIGJlZm9yZSB0aGUgY2xvc2luZyBgPC9oZWFkPmAgdGFnLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHN0eWxlXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAgICovXG4gICAgbG9hZFN0eWxlKHN0eWxlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAvLyBSZXNvbHZlIHN0eWxlIFVSTFxuICAgICAgICAgICAgc3R5bGUgPSB0aGlzLnNub3dib2FyZC51cmwoKS5hc3NldChzdHlsZSk7XG5cbiAgICAgICAgICAgIC8vIENoZWNrIHRoYXQgc3R5bGVzaGVldCBpcyBub3QgYWxyZWFkeSBsb2FkZWRcbiAgICAgICAgICAgIGNvbnN0IGxvYWRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwic3R5bGVzaGVldFwiXVtocmVmPVwiJHtzdHlsZX1cIl1gKTtcbiAgICAgICAgICAgIGlmIChsb2FkZWQpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDcmVhdGUgc3R5bGVzaGVldFxuICAgICAgICAgICAgY29uc3QgZG9tQ3NzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICAgICAgZG9tQ3NzLnNldEF0dHJpYnV0ZSgncmVsJywgJ3N0eWxlc2hlZXQnKTtcbiAgICAgICAgICAgIGRvbUNzcy5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBzdHlsZSk7XG4gICAgICAgICAgICBkb21Dc3MuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYXNzZXRMb2FkZXIubG9hZGVkJywgJ3N0eWxlJywgc3R5bGUsIGRvbUNzcyk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkb21Dc3MuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2Fzc2V0TG9hZGVyLmVycm9yJywgJ3N0eWxlJywgc3R5bGUsIGRvbUNzcyk7XG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgVW5hYmxlIHRvIGxvYWQgc3R5bGVzaGVldCBmaWxlOiBcIiR7c3R5bGV9XCJgKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kKGRvbUNzcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByZS1sb2FkcyBhbiBpbWFnZS5cbiAgICAgKlxuICAgICAqIFRoZSBpbWFnZSB3aWxsIG5vdCBiZSBpbmplY3RlZCBpbnRvIHRoZSBET00uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaW1hZ2VcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICBsb2FkSW1hZ2UoaW1hZ2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIC8vIFJlc29sdmUgc2NyaXB0IFVSTFxuICAgICAgICAgICAgaW1hZ2UgPSB0aGlzLnNub3dib2FyZC51cmwoKS5hc3NldChpbWFnZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2Fzc2V0TG9hZGVyLmxvYWRlZCcsICdpbWFnZScsIGltYWdlLCBpbWcpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdhc3NldExvYWRlci5lcnJvcicsICdpbWFnZScsIGltYWdlLCBpbWcpO1xuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYFVuYWJsZSB0byBsb2FkIGltYWdlIGZpbGU6IFwiJHtpbWFnZX1cImApKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaW1nLnNyYyA9IGltYWdlO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgU2luZ2xldG9uIGZyb20gJy4uL2Fic3RyYWN0cy9TaW5nbGV0b24nO1xuXG4vKipcbiAqIEFsbG93cyBhdHRhY2hpbmcgYSBsb2FkaW5nIGNsYXNzIG9uIGVsZW1lbnRzIHRoYXQgYW4gQUpBWCByZXF1ZXN0IGlzIHRhcmdldGluZy5cbiAqXG4gKiBAY29weXJpZ2h0IDIwMjEgV2ludGVyLlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXR0YWNoTG9hZGluZyBleHRlbmRzIFNpbmdsZXRvbiB7XG4gICAgLyoqXG4gICAgICogRGVmaW5lcyBkZXBlbmRlbmljZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICAgICovXG4gICAgZGVwZW5kZW5jaWVzKCkge1xuICAgICAgICByZXR1cm4gWydyZXF1ZXN0J107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVmaW5lcyBsaXN0ZW5lcnMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGxpc3RlbnMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhamF4U3RhcnQ6ICdhamF4U3RhcnQnLFxuICAgICAgICAgICAgYWpheERvbmU6ICdhamF4RG9uZScsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYWpheFN0YXJ0KHByb21pc2UsIHJlcXVlc3QpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0LmVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXF1ZXN0LmVsZW1lbnQudGFnTmFtZSA9PT0gJ0ZPUk0nKSB7XG4gICAgICAgICAgICBjb25zdCBsb2FkRWxlbWVudHMgPSByZXF1ZXN0LmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYXR0YWNoLWxvYWRpbmddJyk7XG4gICAgICAgICAgICBpZiAobG9hZEVsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBsb2FkRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5nZXRMb2FkaW5nQ2xhc3MoZWxlbWVudCkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJlcXVlc3QuZWxlbWVudC5kYXRhc2V0LmF0dGFjaExvYWRpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmVxdWVzdC5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5nZXRMb2FkaW5nQ2xhc3MocmVxdWVzdC5lbGVtZW50KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhamF4RG9uZShkYXRhLCByZXF1ZXN0KSB7XG4gICAgICAgIGlmICghcmVxdWVzdC5lbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVxdWVzdC5lbGVtZW50LnRhZ05hbWUgPT09ICdGT1JNJykge1xuICAgICAgICAgICAgY29uc3QgbG9hZEVsZW1lbnRzID0gcmVxdWVzdC5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWF0dGFjaC1sb2FkaW5nXScpO1xuICAgICAgICAgICAgaWYgKGxvYWRFbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbG9hZEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuZ2V0TG9hZGluZ0NsYXNzKGVsZW1lbnQpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyZXF1ZXN0LmVsZW1lbnQuZGF0YXNldC5hdHRhY2hMb2FkaW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJlcXVlc3QuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuZ2V0TG9hZGluZ0NsYXNzKHJlcXVlc3QuZWxlbWVudCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TG9hZGluZ0NsYXNzKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIChlbGVtZW50LmRhdGFzZXQuYXR0YWNoTG9hZGluZyAhPT0gdW5kZWZpbmVkICYmIGVsZW1lbnQuZGF0YXNldC5hdHRhY2hMb2FkaW5nICE9PSAnJylcbiAgICAgICAgICAgID8gZWxlbWVudC5kYXRhc2V0LmF0dGFjaExvYWRpbmdcbiAgICAgICAgICAgIDogJ3duLWxvYWRpbmcnO1xuICAgIH1cbn1cbiIsImltcG9ydCBQbHVnaW5CYXNlIGZyb20gJy4uL2Fic3RyYWN0cy9QbHVnaW5CYXNlJztcblxuLyoqXG4gKiBEYXRhIGNvbmZpZ3VyYXRpb24gcHJvdmlkZXIuXG4gKlxuICogUHJvdmlkZXMgYSBtZWNoYW5pc20gZm9yIHBhc3NpbmcgY29uZmlndXJhdGlvbiBkYXRhIHRocm91Z2ggYW4gZWxlbWVudCdzIGRhdGEgYXR0cmlidXRlcy4gVGhpc1xuICogaXMgZ2VuZXJhbGx5IHVzZWQgZm9yIHdpZGdldHMgb3IgVUkgaW50ZXJhY3Rpb25zIHRvIGNvbmZpZ3VyZSB0aGVtLlxuICpcbiAqIEBjb3B5cmlnaHQgMjAyMiBXaW50ZXIuXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhQ29uZmlnIGV4dGVuZHMgUGx1Z2luQmFzZSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1BsdWdpbkJhc2V9IGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBsb2NhbENvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdChpbnN0YW5jZSwgZWxlbWVudCwgbG9jYWxDb25maWcpIHtcbiAgICAgICAgaWYgKGluc3RhbmNlIGluc3RhbmNlb2YgUGx1Z2luQmFzZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG11c3QgcHJvdmlkZSBhIFNub3dib2FyZCBwbHVnaW4gdG8gZW5hYmxlIGRhdGEgY29uZmlndXJhdGlvbicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RhdGEgY29uZmlndXJhdGlvbiBjYW4gb25seSBiZSBleHRyYWN0ZWQgZnJvbSBIVE1MIGVsZW1lbnRzJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMubG9jYWxDb25maWcgPSBsb2NhbENvbmZpZyB8fCB7fTtcbiAgICAgICAgdGhpcy5pbnN0YW5jZUNvbmZpZyA9IHt9O1xuICAgICAgICB0aGlzLmFjY2VwdGVkQ29uZmlncyA9IHt9O1xuICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBjb25maWcgZm9yIHRoaXMgaW5zdGFuY2UuXG4gICAgICpcbiAgICAgKiBJZiB0aGUgYGNvbmZpZ2AgcGFyYW1ldGVyIGlzIHVuc3BlY2lmaWVkLCByZXR1cm5zIHRoZSBlbnRpcmUgY29uZmlndXJhdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWdcbiAgICAgKi9cbiAgICBnZXQoY29uZmlnKSB7XG4gICAgICAgIGlmIChjb25maWcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VDb25maWc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZUNvbmZpZ1tjb25maWddICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlQ29uZmlnW2NvbmZpZ107XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGNvbmZpZyBmb3IgdGhpcyBpbnN0YW5jZS5cbiAgICAgKlxuICAgICAqIFRoaXMgYWxsb3dzIHlvdSB0byBvdmVycmlkZSwgYXQgcnVudGltZSwgYW55IGNvbmZpZ3VyYXRpb24gdmFsdWUgYXMgbmVjZXNzYXJ5LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcGVyc2lzdFxuICAgICAqL1xuICAgIHNldChjb25maWcsIHZhbHVlLCBwZXJzaXN0KSB7XG4gICAgICAgIGlmIChjb25maWcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbXVzdCBwcm92aWRlIGEgY29uZmlndXJhdGlvbiBrZXkgdG8gc2V0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluc3RhbmNlQ29uZmlnW2NvbmZpZ10gPSB2YWx1ZTtcblxuICAgICAgICBpZiAocGVyc2lzdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmRhdGFzZXRbY29uZmlnXSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5sb2NhbENvbmZpZ1tjb25maWddID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWZyZXNoZXMgdGhlIGNvbmZpZ3VyYXRpb24gZnJvbSB0aGUgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIFRoaXMgd2lsbCBhbGxvdyB5b3UgdG8gbWFrZSBjaGFuZ2VzIHRvIHRoZSBkYXRhIGNvbmZpZyBvbiBhIERPTSBsZXZlbCBhbmQgcmUtYXBwbHkgdGhlbVxuICAgICAqIHRvIHRoZSBjb25maWcgb24gdGhlIEphdmFTY3JpcHQgc2lkZS5cbiAgICAgKi9cbiAgICByZWZyZXNoKCkge1xuICAgICAgICB0aGlzLmFjY2VwdGVkQ29uZmlncyA9IHRoaXMuZ2V0QWNjZXB0ZWRDb25maWdzKCk7XG4gICAgICAgIHRoaXMuaW5zdGFuY2VDb25maWcgPSB0aGlzLnByb2Nlc3NDb25maWcoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHRoZSBhdmFpbGFibGUgY29uZmlndXJhdGlvbnMgdGhhdCBjYW4gYmUgc2V0IHRocm91Z2ggdGhlIGRhdGEgY29uZmlnLlxuICAgICAqXG4gICAgICogSWYgYW4gaW5zdGFuY2UgaGFzIGFuIGBhY2NlcHRBbGxEYXRhQ29uZmlnc2AgcHJvcGVydHksIHNldCB0byBgdHJ1ZWAsIHRoZW4gYWxsIGRhdGFcbiAgICAgKiBhdHRyaWJ1dGVzIHdpbGwgYmUgYXZhaWxhYmxlIGFzIGNvbmZpZ3VyYXRpb24gdmFsdWVzLiBUaGlzIGNhbiBiZSBhIHNlY3VyaXR5IGNvbmNlcm4sIHNvXG4gICAgICogdHJlYWQgY2FyZWZ1bGx5LlxuICAgICAqXG4gICAgICogT3RoZXJ3aXNlLCBhdmFpbGFibGUgY29uZmlndXJhdGlvbnMgd2lsbCBiZSBkZXRlcm1pbmVkIGJ5IHRoZSBrZXlzIGF2YWlsYWJsZSBpbiBhbiBvYmplY3RcbiAgICAgKiByZXR1cm5lZCBieSBhIGBkZWZhdWx0cygpYCBtZXRob2QgaW4gdGhlIGluc3RhbmNlLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ1tdfGJvb2xlYW59XG4gICAgICovXG4gICAgZ2V0QWNjZXB0ZWRDb25maWdzKCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLmFjY2VwdEFsbERhdGFDb25maWdzICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICYmIHRoaXMuaW5zdGFuY2UuYWNjZXB0QWxsRGF0YUNvbmZpZ3MgPT09IHRydWVcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UuZGVmYXVsdHMgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgJiYgdHlwZW9mIHRoaXMuaW5zdGFuY2UuZGVmYXVsdHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICYmIHR5cGVvZiB0aGlzLmluc3RhbmNlLmRlZmF1bHRzKCkgPT09ICdvYmplY3QnXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuaW5zdGFuY2UuZGVmYXVsdHMoKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZGVmYXVsdCB2YWx1ZXMgZm9yIHRoZSBpbnN0YW5jZS5cbiAgICAgKlxuICAgICAqIFRoaXMgd2lsbCBiZSBhbiBlbXB0eSBvYmplY3QgaWYgdGhlIGluc3RhbmNlIGVpdGhlciBkb2VzIG5vdCBoYXZlIGEgYGRlZmF1bHRzKClgIG1ldGhvZCwgb3JcbiAgICAgKiB0aGUgbWV0aG9kIGl0c2VsZiBkb2VzIG5vdCByZXR1cm4gYW4gb2JqZWN0LlxuICAgICAqXG4gICAgICogQHJldHVybnMge29iamVjdH1cbiAgICAgKi9cbiAgICBnZXREZWZhdWx0cygpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5kZWZhdWx0cyAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAmJiB0eXBlb2YgdGhpcy5pbnN0YW5jZS5kZWZhdWx0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgJiYgdHlwZW9mIHRoaXMuaW5zdGFuY2UuZGVmYXVsdHMoKSA9PT0gJ29iamVjdCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5kZWZhdWx0cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb2Nlc3NlcyB0aGUgY29uZmlndXJhdGlvbi5cbiAgICAgKlxuICAgICAqIExvYWRzIHVwIHRoZSBkZWZhdWx0cywgdGhlbiBwb3B1bGF0ZXMgaXQgd2l0aCBhbnkgY29uZmlndXJhdGlvbiB2YWx1ZXMgcHJvdmlkZWQgYnkgdGhlIGRhdGFcbiAgICAgKiBhdHRyaWJ1dGVzLCBiYXNlZCBvbiB0aGUgcnVsZXMgb2YgdGhlIGFjY2VwdGVkIGNvbmZpZ3VyYXRpb25zLlxuICAgICAqXG4gICAgICogVGhpcyBjb25maWd1cmF0aW9uIG9iamVjdCBpcyB0aGVuIGNhY2hlZCBhbmQgYXZhaWxhYmxlIHRocm91Z2ggYGNvbmZpZy5nZXQoKWAgY2FsbHMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgICAqL1xuICAgIHByb2Nlc3NDb25maWcoKSB7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuZ2V0RGVmYXVsdHMoKTtcblxuICAgICAgICBpZiAodGhpcy5hY2NlcHRlZENvbmZpZ3MgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gY29uZmlnO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5lbGVtZW50LmRhdGFzZXQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFjY2VwdGVkQ29uZmlncyA9PT0gdHJ1ZSB8fCB0aGlzLmFjY2VwdGVkQ29uZmlncy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnW2tleV0gPSB0aGlzLmNvZXJjZVZhbHVlKHRoaXMuZWxlbWVudC5kYXRhc2V0W2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5sb2NhbENvbmZpZykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWNjZXB0ZWRDb25maWdzID09PSB0cnVlIHx8IHRoaXMuYWNjZXB0ZWRDb25maWdzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgICBjb25maWdba2V5XSA9IHRoaXMubG9jYWxDb25maWdba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlICovXG5cbiAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb2VyY2VzIGNvbmZpZ3VyYXRpb24gdmFsdWVzIGZvciBKYXZhU2NyaXB0LlxuICAgICAqXG4gICAgICogVGFrZXMgdGhlIHN0cmluZyB2YWx1ZSByZXR1cm5lZCBmcm9tIHRoZSBkYXRhIGF0dHJpYnV0ZSBhbmQgY29lcmNlcyBpdCBpbnRvIGEgbW9yZSBzdWl0YWJsZVxuICAgICAqIHR5cGUgZm9yIEphdmFTY3JpcHQgcHJvY2Vzc2luZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBjb2VyY2VWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBjb25zdCBzdHJpbmdWYWx1ZSA9IFN0cmluZyh2YWx1ZSk7XG5cbiAgICAgICAgLy8gTnVsbCB2YWx1ZVxuICAgICAgICBpZiAoc3RyaW5nVmFsdWUgPT09ICdudWxsJykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVbmRlZmluZWQgdmFsdWVcbiAgICAgICAgaWYgKHN0cmluZ1ZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJhc2U2NCB2YWx1ZVxuICAgICAgICBpZiAoc3RyaW5nVmFsdWUuc3RhcnRzV2l0aCgnYmFzZTY0OicpKSB7XG4gICAgICAgICAgICBjb25zdCBiYXNlNjRzdHIgPSBzdHJpbmdWYWx1ZS5yZXBsYWNlKC9eYmFzZTY0Oi8sICcnKTtcbiAgICAgICAgICAgIGNvbnN0IGRlY29kZWQgPSBhdG9iKGJhc2U2NHN0cik7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb2VyY2VWYWx1ZShkZWNvZGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJvb2xlYW4gdmFsdWVcbiAgICAgICAgaWYgKFsndHJ1ZScsICd5ZXMnXS5pbmNsdWRlcyhzdHJpbmdWYWx1ZS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFsnZmFsc2UnLCAnbm8nXS5pbmNsdWRlcyhzdHJpbmdWYWx1ZS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTnVtZXJpYyB2YWx1ZVxuICAgICAgICBpZiAoL15bLStdP1swLTldKyhcXC5bMC05XSspPyQvLnRlc3Qoc3RyaW5nVmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyKHN0cmluZ1ZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEpTT04gdmFsdWVcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNub3dib2FyZC5qc29uUGFyc2VyKCkucGFyc2Uoc3RyaW5nVmFsdWUpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gKHN0cmluZ1ZhbHVlID09PSAnJykgPyB0cnVlIDogc3RyaW5nVmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgUGx1Z2luQmFzZSBmcm9tICcuLi9hYnN0cmFjdHMvUGx1Z2luQmFzZSc7XG5cbi8qKlxuICogUHJvdmlkZXMgZmxhc2ggbWVzc2FnZXMgZm9yIHRoZSBDTVMuXG4gKlxuICogRmxhc2ggbWVzc2FnZXMgd2lsbCBwb3AgdXAgYXQgdGhlIHRvcCBjZW50ZXIgb2YgdGhlIHBhZ2UgYW5kIHdpbGwgcmVtYWluIGZvciA3IHNlY29uZHMgYnkgZGVmYXVsdC4gSG92ZXJpbmcgb3ZlclxuICogdGhlIG1lc3NhZ2Ugd2lsbCByZXNldCBhbmQgcGF1c2UgdGhlIHRpbWVyLiBDbGlja2luZyBvbiB0aGUgZmxhc2ggbWVzc2FnZSB3aWxsIGRpc21pc3MgaXQuXG4gKlxuICogQXJndW1lbnRzOlxuICogIC0gXCJtZXNzYWdlXCI6IFRoZSBjb250ZW50IG9mIHRoZSBmbGFzaCBtZXNzYWdlLiBIVE1MIGlzIGFjY2VwdGVkLlxuICogIC0gXCJ0eXBlXCI6IFRoZSB0eXBlIG9mIGZsYXNoIG1lc3NhZ2UuIFRoaXMgaXMgYXBwZW5kZWQgYXMgYSBjbGFzcyB0byB0aGUgZmxhc2ggbWVzc2FnZSBpdHNlbGYuXG4gKiAgLSBcImR1cmF0aW9uXCI6IEhvdyBsb25nIHRoZSBmbGFzaCBtZXNzYWdlIHdpbGwgc3RheSB2aXNpYmxlIGZvciwgaW4gc2Vjb25kcy4gRGVmYXVsdDogNyBzZWNvbmRzLlxuICpcbiAqIFVzYWdlOlxuICogICAgICBTbm93Ym9hcmQuZmxhc2goJ1RoaXMgaXMgYSBmbGFzaCBtZXNzYWdlJywgJ2luZm8nLCA4KTtcbiAqXG4gKiBAY29weXJpZ2h0IDIwMjEgV2ludGVyLlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxhc2ggZXh0ZW5kcyBQbHVnaW5CYXNlIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3Rvci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZHVyYXRpb25cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3QobWVzc2FnZSwgdHlwZSwgZHVyYXRpb24pIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZSB8fCAnZGVmYXVsdCc7XG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBOdW1iZXIoZHVyYXRpb24gfHwgNyk7XG5cbiAgICAgICAgaWYgKHRoaXMuZHVyYXRpb24gPCAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZsYXNoIGR1cmF0aW9uIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXIsIG9yIHplcm8nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XG4gICAgICAgIHRoaXMuZmxhc2hUaW1lciA9IG51bGw7XG4gICAgICAgIHRoaXMuY3JlYXRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVmaW5lcyBkZXBlbmRlbmNpZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICAgICovXG4gICAgZGVwZW5kZW5jaWVzKCkge1xuICAgICAgICByZXR1cm4gWyd0cmFuc2l0aW9uJ107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzdHJ1Y3Rvci5cbiAgICAgKlxuICAgICAqIFRoaXMgd2lsbCBlbnN1cmUgdGhlIGZsYXNoIG1lc3NhZ2UgaXMgcmVtb3ZlZCBhbmQgdGltZW91dCBpcyBjbGVhcmVkIGlmIHRoZSBtb2R1bGUgaXMgcmVtb3ZlZC5cbiAgICAgKi9cbiAgICBkZXN0cnVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMudGltZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5mbGFzaFRpbWVyKSB7XG4gICAgICAgICAgICB0aGlzLmZsYXNoVGltZXIucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5mbGFzaCkge1xuICAgICAgICAgICAgdGhpcy5mbGFzaC5yZW1vdmUoKTtcbiAgICAgICAgICAgIHRoaXMuZmxhc2ggPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5mbGFzaFRpbWVyID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLmRlc3RydWN0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyB0aGUgZmxhc2ggbWVzc2FnZS5cbiAgICAgKi9cbiAgICBjcmVhdGUoKSB7XG4gICAgICAgIHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdmbGFzaC5jcmVhdGUnLCB0aGlzKTtcblxuICAgICAgICB0aGlzLmZsYXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgICAgIHRoaXMuZmxhc2guaW5uZXJIVE1MID0gdGhpcy5tZXNzYWdlO1xuICAgICAgICB0aGlzLmZsYXNoLmNsYXNzTGlzdC5hZGQoJ2ZsYXNoLW1lc3NhZ2UnLCB0aGlzLnR5cGUpO1xuICAgICAgICB0aGlzLmZsYXNoLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1jb250cm9sJyk7XG4gICAgICAgIHRoaXMuZmxhc2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnJlbW92ZSgpKTtcbiAgICAgICAgdGhpcy5mbGFzaC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB0aGlzLnN0b3BUaW1lcigpKTtcbiAgICAgICAgdGhpcy5mbGFzaC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHRoaXMuc3RhcnRUaW1lcigpKTtcblxuICAgICAgICBpZiAodGhpcy5kdXJhdGlvbiA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZmxhc2hUaW1lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgICAgICAgICAgdGhpcy5mbGFzaFRpbWVyLmNsYXNzTGlzdC5hZGQoJ2ZsYXNoLXRpbWVyJyk7XG4gICAgICAgICAgICB0aGlzLmZsYXNoLmFwcGVuZENoaWxkKHRoaXMuZmxhc2hUaW1lcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZsYXNoLmNsYXNzTGlzdC5hZGQoJ25vLXRpbWVyJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgdG8gYm9keVxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZmxhc2gpO1xuXG4gICAgICAgIHRoaXMuc25vd2JvYXJkLnRyYW5zaXRpb24odGhpcy5mbGFzaCwgJ3Nob3cnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0VGltZXIoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgZmxhc2ggbWVzc2FnZS5cbiAgICAgKi9cbiAgICByZW1vdmUoKSB7XG4gICAgICAgIHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdmbGFzaC5yZW1vdmUnLCB0aGlzKTtcblxuICAgICAgICB0aGlzLnN0b3BUaW1lcigpO1xuXG4gICAgICAgIHRoaXMuc25vd2JvYXJkLnRyYW5zaXRpb24odGhpcy5mbGFzaCwgJ2hpZGUnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZsYXNoLnJlbW92ZSgpO1xuICAgICAgICAgICAgdGhpcy5mbGFzaCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmRlc3RydWN0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFycyBhbGwgZmxhc2ggbWVzc2FnZXMgYXZhaWxhYmxlIG9uIHRoZSBwYWdlLlxuICAgICAqL1xuICAgIGNsZWFyKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdib2R5ID4gZGl2LmZsYXNoLW1lc3NhZ2UnKS5mb3JFYWNoKChlbGVtZW50KSA9PiBlbGVtZW50LnJlbW92ZSgpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdGFydHMgdGhlIHRpbWVyIGZvciB0aGlzIGZsYXNoIG1lc3NhZ2UuXG4gICAgICovXG4gICAgc3RhcnRUaW1lcigpIHtcbiAgICAgICAgaWYgKHRoaXMuZHVyYXRpb24gPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudGltZXJUcmFucyA9IHRoaXMuc25vd2JvYXJkLnRyYW5zaXRpb24odGhpcy5mbGFzaFRpbWVyLCAndGltZW91dCcsIG51bGwsIGAke3RoaXMuZHVyYXRpb259LjBzYCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMudGltZXIgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB0aGlzLnJlbW92ZSgpLCB0aGlzLmR1cmF0aW9uICogMTAwMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXRzIHRoZSB0aW1lciBmb3IgdGhpcyBmbGFzaCBtZXNzYWdlLlxuICAgICAqL1xuICAgIHN0b3BUaW1lcigpIHtcbiAgICAgICAgaWYgKHRoaXMudGltZXJUcmFucykge1xuICAgICAgICAgICAgdGhpcy50aW1lclRyYW5zLmNhbmNlbCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnRpbWVyKSB7XG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IFNpbmdsZXRvbiBmcm9tICcuLi9hYnN0cmFjdHMvU2luZ2xldG9uJztcblxuLyoqXG4gKiBEaXNwbGF5cyBhIHN0cmlwZSBhdCB0aGUgdG9wIG9mIHRoZSBwYWdlIHRoYXQgaW5kaWNhdGVzIGxvYWRpbmcuXG4gKlxuICogQGNvcHlyaWdodCAyMDIxIFdpbnRlci5cbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0cmlwZUxvYWRlciBleHRlbmRzIFNpbmdsZXRvbiB7XG4gICAgLyoqXG4gICAgICogRGVmaW5lcyBkZXBlbmRlbmljZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICAgICovXG4gICAgZGVwZW5kZW5jaWVzKCkge1xuICAgICAgICByZXR1cm4gWydyZXF1ZXN0J107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVmaW5lcyBsaXN0ZW5lcnMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGxpc3RlbnMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZWFkeTogJ3JlYWR5JyxcbiAgICAgICAgICAgIGFqYXhTdGFydDogJ2FqYXhTdGFydCcsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVhZHkoKSB7XG4gICAgICAgIHRoaXMuY291bnRlciA9IDA7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVTdHJpcGUoKTtcbiAgICB9XG5cbiAgICBhamF4U3RhcnQocHJvbWlzZSwgcmVxdWVzdCkge1xuICAgICAgICBpZiAocmVxdWVzdC5vcHRpb25zLnN0cmlwZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2hvdygpO1xuXG4gICAgICAgIHByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNyZWF0ZVN0cmlwZSgpIHtcbiAgICAgICAgdGhpcy5pbmRpY2F0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgdGhpcy5zdHJpcGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgdGhpcy5zdHJpcGVMb2FkZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcblxuICAgICAgICB0aGlzLmluZGljYXRvci5jbGFzc0xpc3QuYWRkKCdzdHJpcGUtbG9hZGluZy1pbmRpY2F0b3InLCAnbG9hZGVkJyk7XG4gICAgICAgIHRoaXMuc3RyaXBlLmNsYXNzTGlzdC5hZGQoJ3N0cmlwZScpO1xuICAgICAgICB0aGlzLnN0cmlwZUxvYWRlZC5jbGFzc0xpc3QuYWRkKCdzdHJpcGUtbG9hZGVkJyk7XG5cbiAgICAgICAgdGhpcy5pbmRpY2F0b3IuYXBwZW5kQ2hpbGQodGhpcy5zdHJpcGUpO1xuICAgICAgICB0aGlzLmluZGljYXRvci5hcHBlbmRDaGlsZCh0aGlzLnN0cmlwZUxvYWRlZCk7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmluZGljYXRvcik7XG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgdGhpcy5jb3VudGVyICs9IDE7XG5cbiAgICAgICAgY29uc3QgbmV3U3RyaXBlID0gdGhpcy5zdHJpcGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICB0aGlzLmluZGljYXRvci5hcHBlbmRDaGlsZChuZXdTdHJpcGUpO1xuICAgICAgICB0aGlzLnN0cmlwZS5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5zdHJpcGUgPSBuZXdTdHJpcGU7XG5cbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA+IDEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5kaWNhdG9yLmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRlZCcpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3duLWxvYWRpbmcnKTtcbiAgICB9XG5cbiAgICBoaWRlKGZvcmNlKSB7XG4gICAgICAgIHRoaXMuY291bnRlciAtPSAxO1xuXG4gICAgICAgIGlmIChmb3JjZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5jb3VudGVyID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5pbmRpY2F0b3IuY2xhc3NMaXN0LmFkZCgnbG9hZGVkJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3duLWxvYWRpbmcnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBTaW5nbGV0b24gZnJvbSAnLi4vYWJzdHJhY3RzL1NpbmdsZXRvbic7XG5cbi8qKlxuICogRW1iZWRzIHRoZSBcImV4dHJhc1wiIHN0eWxlc2hlZXQgaW50byB0aGUgcGFnZSwgaWYgaXQgaXMgbm90IGxvYWRlZCB0aHJvdWdoIHRoZSB0aGVtZS5cbiAqXG4gKiBAY29weXJpZ2h0IDIwMjEgV2ludGVyLlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3R5bGVzaGVldExvYWRlciBleHRlbmRzIFNpbmdsZXRvbiB7XG4gICAgLyoqXG4gICAgICogRGVmaW5lcyBsaXN0ZW5lcnMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGxpc3RlbnMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZWFkeTogJ3JlYWR5JyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZWFkeSgpIHtcbiAgICAgICAgbGV0IHN0eWxlc0xvYWRlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIERldGVybWluZSBpZiBzdHlsZXNoZWV0IGlzIGFscmVhZHkgbG9hZGVkXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwic3R5bGVzaGVldFwiXScpLmZvckVhY2goKGNzcykgPT4ge1xuICAgICAgICAgICAgaWYgKGNzcy5ocmVmLmVuZHNXaXRoKCcvbW9kdWxlcy9zeXN0ZW0vYXNzZXRzL2Nzcy9zbm93Ym9hcmQuZXh0cmFzLmNzcycpKSB7XG4gICAgICAgICAgICAgICAgc3R5bGVzTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFzdHlsZXNMb2FkZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlc2hlZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgICAgICBzdHlsZXNoZWV0LnNldEF0dHJpYnV0ZSgncmVsJywgJ3N0eWxlc2hlZXQnKTtcbiAgICAgICAgICAgIHN0eWxlc2hlZXQuc2V0QXR0cmlidXRlKCdocmVmJywgdGhpcy5zbm93Ym9hcmQudXJsKCkuYXNzZXQoJy9tb2R1bGVzL3N5c3RlbS9hc3NldHMvY3NzL3Nub3dib2FyZC5leHRyYXMuY3NzJykpO1xuICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZXNoZWV0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBQbHVnaW5CYXNlIGZyb20gJy4uL2Fic3RyYWN0cy9QbHVnaW5CYXNlJztcblxuLyoqXG4gKiBQcm92aWRlcyB0cmFuc2l0aW9uIHN1cHBvcnQgZm9yIGVsZW1lbnRzLlxuICpcbiAqIFRyYW5zaXRpb24gYWxsb3dzIENTUyB0cmFuc2l0aW9ucyB0byBiZSBjb250cm9sbGVkIGFuZCBjYWxsYmFja3MgdG8gYmUgcnVuIG9uY2UgY29tcGxldGVkLiBJdCB3b3JrcyBzaW1pbGFyIHRvIFZ1ZVxuICogdHJhbnNpdGlvbnMgd2l0aCAzIHN0YWdlcyBvZiB0cmFuc2l0aW9uLCBhbmQgY2xhc3NlcyBhc3NpZ25lZCB0byB0aGUgZWxlbWVudCB3aXRoIHRoZSB0cmFuc2l0aW9uIG5hbWUgc3VmZml4ZWQgd2l0aFxuICogdGhlIHN0YWdlIG9mIHRyYW5zaXRpb246XG4gKlxuICogIC0gYGluYDogQSBjbGFzcyBhc3NpZ25lZCB0byB0aGUgZWxlbWVudCBmb3IgdGhlIGZpcnN0IGZyYW1lIG9mIHRoZSB0cmFuc2l0aW9uLCByZW1vdmVkIGFmdGVyd2FyZHMuIFRoaXMgc2hvdWxkIGJlXG4gKiAgICAgIHVzZWQgdG8gZGVmaW5lIHRoZSBpbml0aWFsIHN0YXRlIG9mIHRoZSB0cmFuc2l0aW9uLlxuICogIC0gYGFjdGl2ZWA6IEEgY2xhc3MgYXNzaWduZWQgdG8gdGhlIGVsZW1lbnQgZm9yIHRoZSBkdXJhdGlvbiBvZiB0aGUgdHJhbnNpdGlvbi4gVGhpcyBzaG91bGQgYmUgdXNlZCB0byBkZWZpbmUgdGhlXG4gKiAgICAgIHRyYW5zaXRpb24gaXRzZWxmLlxuICogIC0gYG91dGA6IEEgY2xhc3MgYXNzaWduZWQgdG8gdGhlIGVsZW1lbnQgYWZ0ZXIgdGhlIGZpcnN0IGZyYW1lIG9mIHRoZSB0cmFuc2l0aW9uIGFuZCBrZXB0IHRvIHRoZSBlbmQgb2YgdGhlXG4gKiAgICAgIHRyYW5zaXRpb24uIFRoaXMgc2hvdWxkIGRlZmluZSB0aGUgZW5kIHN0YXRlIG9mIHRoZSB0cmFuc2l0aW9uLlxuICpcbiAqIFVzYWdlOlxuICogICAgICBTbm93Ym9hcmQudHJhbnNpdGlvbihkb2N1bWVudC5lbGVtZW50LCAndHJhbnNpdGlvbicsICgpID0+IHtcbiAqICAgICAgICAgIGNvbnNvbGUubG9nKCdSZW1vdmUgZWxlbWVudCBhZnRlciA3IHNlY29uZHMnKTtcbiAqICAgICAgICAgIHRoaXMucmVtb3ZlKCk7XG4gKiAgICAgIH0sICc3cycpO1xuICpcbiAqIEBjb3B5cmlnaHQgMjAyMSBXaW50ZXIuXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFuc2l0aW9uIGV4dGVuZHMgUGx1Z2luQmFzZSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHRvIHRyYW5zaXRpb25cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHJhbnNpdGlvbiBUaGUgbmFtZSBvZiB0aGUgdHJhbnNpdGlvbiwgdGhpcyBwcmVmaXhlcyB0aGUgc3RhZ2VzIG9mIHRyYW5zaXRpb24uXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdG8gY2FsbCB3aGVuIHRoZSB0cmFuc2l0aW9uIGVuZHMuXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGR1cmF0aW9uIEFuIG9wdGlvbmFsIG92ZXJyaWRlIG9uIHRoZSB0cmFuc2l0aW9uIGR1cmF0aW9uLiBNdXN0IGJlIHNwZWNpZmllZCBhcyAncycgKHNlY3MpIG9yICdtcycgKG1zZWNzKS5cbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHRyYWlsVG8gSWYgdHJ1ZSwgdGhlIFwib3V0XCIgY2xhc3Mgd2lsbCByZW1haW4gYWZ0ZXIgdGhlIGVuZCBvZiB0aGUgdHJhbnNpdGlvbi5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3QoZWxlbWVudCwgdHJhbnNpdGlvbiwgY2FsbGJhY2ssIGR1cmF0aW9uLCB0cmFpbFRvKSB7XG4gICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgSFRNTEVsZW1lbnQgbXVzdCBiZSBwcm92aWRlZCBmb3IgdHJhbnNpdGlvbmluZycpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0cmFuc2l0aW9uICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUcmFuc2l0aW9uIG5hbWUgbXVzdCBiZSBzcGVjaWZpZWQgYXMgYSBzdHJpbmcnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRyYW5zaXRpb24gPSB0cmFuc2l0aW9uO1xuXG4gICAgICAgIGlmIChjYWxsYmFjayAmJiB0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2FsbGJhY2sgbXVzdCBiZSBhIHZhbGlkIGZ1bmN0aW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuXG4gICAgICAgIGlmIChkdXJhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5kdXJhdGlvbiA9IHRoaXMucGFyc2VEdXJhdGlvbihkdXJhdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmR1cmF0aW9uID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHJhaWxUbyA9ICh0cmFpbFRvID09PSB0cnVlKTtcblxuICAgICAgICB0aGlzLmRvVHJhbnNpdGlvbigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1hcHMgZXZlbnQgY2xhc3NlcyB0byB0aGUgZ2l2ZW4gdHJhbnNpdGlvbiBzdGF0ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgey4uLmFueX0gYXJnc1xuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKi9cbiAgICBldmVudENsYXNzZXMoLi4uYXJncykge1xuICAgICAgICBjb25zdCBldmVudENsYXNzZXMgPSB7XG4gICAgICAgICAgICBpbjogYCR7dGhpcy50cmFuc2l0aW9ufS1pbmAsXG4gICAgICAgICAgICBhY3RpdmU6IGAke3RoaXMudHJhbnNpdGlvbn0tYWN0aXZlYCxcbiAgICAgICAgICAgIG91dDogYCR7dGhpcy50cmFuc2l0aW9ufS1vdXRgLFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoZXZlbnRDbGFzc2VzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJldHVybkNsYXNzZXMgPSBbXTtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoZXZlbnRDbGFzc2VzKS5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgW2tleSwgdmFsdWVdID0gZW50cnk7XG5cbiAgICAgICAgICAgIGlmIChhcmdzLmluZGV4T2Yoa2V5KSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5DbGFzc2VzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmV0dXJuQ2xhc3NlcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeGVjdXRlcyB0aGUgdHJhbnNpdGlvbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIGRvVHJhbnNpdGlvbigpIHtcbiAgICAgICAgLy8gQWRkIGR1cmF0aW9uIG92ZXJyaWRlXG4gICAgICAgIGlmICh0aGlzLmR1cmF0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gdGhpcy5kdXJhdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVzZXRDbGFzc2VzKCk7XG5cbiAgICAgICAgLy8gU3RhcnQgdHJhbnNpdGlvbiAtIHNob3cgXCJpblwiIGFuZCBcImFjdGl2ZVwiIGNsYXNzZXNcbiAgICAgICAgdGhpcy5ldmVudENsYXNzZXMoJ2luJywgJ2FjdGl2ZScpLmZvckVhY2goKGV2ZW50Q2xhc3MpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKGV2ZW50Q2xhc3MpO1xuICAgICAgICB9KTtcblxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIC8vIEVuc3VyZSBhIHRyYW5zaXRpb24gZXhpc3RzXG4gICAgICAgICAgICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50KVsndHJhbnNpdGlvbi1kdXJhdGlvbiddICE9PSAnMHMnKSB7XG4gICAgICAgICAgICAgICAgLy8gTGlzdGVuIGZvciB0aGUgdHJhbnNpdGlvbiB0byBlbmRcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsICgpID0+IHRoaXMub25UcmFuc2l0aW9uRW5kKCksIHtcbiAgICAgICAgICAgICAgICAgICAgb25jZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5ldmVudENsYXNzZXMoJ2luJylbMF0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmV2ZW50Q2xhc3Nlcygnb3V0JylbMF0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0Q2xhc3NlcygpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsYmFjay5hcHBseSh0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJ1Y3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgZnVuY3Rpb24gd2hlbiB0aGUgdHJhbnNpdGlvbiBlbmRzLlxuICAgICAqXG4gICAgICogV2hlbiBhIHRyYW5zaXRpb24gZW5kcywgdGhlIGluc3RhbmNlIG9mIHRoZSB0cmFuc2l0aW9uIGlzIGF1dG9tYXRpY2FsbHkgZGVzdHJ1Y3RlZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIG9uVHJhbnNpdGlvbkVuZCgpIHtcbiAgICAgICAgdGhpcy5ldmVudENsYXNzZXMoJ2FjdGl2ZScsICghdGhpcy50cmFpbFRvKSA/ICdvdXQnIDogJycpLmZvckVhY2goKGV2ZW50Q2xhc3MpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGV2ZW50Q2xhc3MpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5jYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5jYWxsYmFjay5hcHBseSh0aGlzLmVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIGR1cmF0aW9uIG92ZXJyaWRlXG4gICAgICAgIGlmICh0aGlzLmR1cmF0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGVzdHJ1Y3QoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYW5jZWxzIGEgdHJhbnNpdGlvbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIGNhbmNlbCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB0aGlzLm9uVHJhbnNpdGlvbkVuZCwge1xuICAgICAgICAgICAgb25jZTogdHJ1ZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5yZXNldENsYXNzZXMoKTtcblxuICAgICAgICAvLyBSZW1vdmUgZHVyYXRpb24gb3ZlcnJpZGVcbiAgICAgICAgaWYgKHRoaXMuZHVyYXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2FsbCBkZXN0cnVjdG9yXG4gICAgICAgIHRoaXMuZGVzdHJ1Y3QoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldHMgdGhlIGNsYXNzZXMsIHJlbW92aW5nIGFueSB0cmFuc2l0aW9uIGNsYXNzZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICByZXNldENsYXNzZXMoKSB7XG4gICAgICAgIHRoaXMuZXZlbnRDbGFzc2VzKCkuZm9yRWFjaCgoZXZlbnRDbGFzcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoZXZlbnRDbGFzcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyBhIGdpdmVuIGR1cmF0aW9uIGFuZCBjb252ZXJ0cyBpdCB0byBhIFwibXNcIiB2YWx1ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkdXJhdGlvblxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgcGFyc2VEdXJhdGlvbihkdXJhdGlvbikge1xuICAgICAgICBjb25zdCBwYXJzZWQgPSAvXihbMC05XSsoXFwuWzAtOV0rKT8pKG0/cyk/JC8uZXhlYyhkdXJhdGlvbik7XG4gICAgICAgIGNvbnN0IGFtb3VudCA9IE51bWJlcihwYXJzZWRbMV0pO1xuICAgICAgICBjb25zdCB1bml0ID0gKHBhcnNlZFszXSA9PT0gJ3MnKVxuICAgICAgICAgICAgPyAnc2VjJ1xuICAgICAgICAgICAgOiAnbXNlYyc7XG5cbiAgICAgICAgcmV0dXJuICh1bml0ID09PSAnc2VjJylcbiAgICAgICAgICAgID8gYCR7YW1vdW50ICogMTAwMH1tc2BcbiAgICAgICAgICAgIDogYCR7TWF0aC5mbG9vcihhbW91bnQpfW1zYDtcbiAgICB9XG59XG4iLCIvKipcbiAqIEludGVybmFsIHByb3h5IGZvciBTbm93Ym9hcmQuXG4gKlxuICogVGhpcyBoYW5kbGVyIHdyYXBzIHRoZSBTbm93Ym9hcmQgaW5zdGFuY2UgdGhhdCBpcyBwYXNzZWQgdG8gdGhlIGNvbnN0cnVjdG9yIG9mIHBsdWdpbiBpbnN0YW5jZXMuXG4gKiBJdCBwcmV2ZW50cyBhY2Nlc3MgdG8gdGhlIGZvbGxvd2luZyBtZXRob2RzOlxuICogIC0gYGF0dGFjaEFic3RyYWN0c2A6IE5vIG5lZWQgdG8gYXR0YWNoIGFic3RyYWN0cyBhZ2Fpbi5cbiAqICAtIGBsb2FkVXRpbHRpZXNgOiBObyBuZWVkIHRvIGxvYWQgdXRpbGl0aWVzIGFnYWluLlxuICogIC0gYGluaXRpYWxpc2VgOiBTbm93Ym9hcmQgaXMgYWxyZWFkeSBpbml0aWFsaXNlZC5cbiAqICAtIGBpbml0aWFsaXNlU2luZ2xldG9uc2A6IFNpbmdsZXRvbnMgYXJlIGFscmVhZHkgaW5pdGlhbGlzZWQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBnZXQodGFyZ2V0LCBwcm9wLCByZWNlaXZlcikge1xuICAgICAgICBpZiAodHlwZW9mIHByb3AgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wTG93ZXIgPSBwcm9wLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICAgIGlmIChbJ2F0dGFjaEFic3RyYWN0cycsICdsb2FkVXRpbGl0aWVzJywgJ2luaXRpYWxpc2UnLCAnaW5pdGlhbGlzZVNpbmdsZXRvbnMnXS5pbmNsdWRlcyhwcm9wKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgWW91IGNhbm5vdCB1c2UgdGhlIFwiJHtwcm9wfVwiIFNub3dib2FyZCBtZXRob2Qgd2l0aGluIGEgcGx1Z2luLmApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGFyZ2V0Lmhhc1BsdWdpbihwcm9wTG93ZXIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICguLi5wYXJhbXMpID0+IFJlZmxlY3QuZ2V0KHRhcmdldCwgJ3BsdWdpbnMnKVtwcm9wTG93ZXJdLmdldEluc3RhbmNlKC4uLnBhcmFtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXQodGFyZ2V0LCBwcm9wLCByZWNlaXZlcik7XG4gICAgfSxcblxuICAgIGhhcyh0YXJnZXQsIHByb3ApIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwcm9wID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY29uc3QgcHJvcExvd2VyID0gcHJvcC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgICBpZiAoWydhdHRhY2hBYnN0cmFjdHMnLCAnbG9hZFV0aWxpdGllcycsICdpbml0aWFsaXNlJywgJ2luaXRpYWxpc2VTaW5nbGV0b25zJ10uaW5jbHVkZXMocHJvcCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXQuaGFzUGx1Z2luKHByb3BMb3dlcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBSZWZsZWN0Lmhhcyh0YXJnZXQsIHByb3ApO1xuICAgIH0sXG59O1xuIiwiaW1wb3J0IFBsdWdpbkJhc2UgZnJvbSAnLi4vYWJzdHJhY3RzL1BsdWdpbkJhc2UnO1xuaW1wb3J0IFNpbmdsZXRvbiBmcm9tICcuLi9hYnN0cmFjdHMvU2luZ2xldG9uJztcbmltcG9ydCBJbm5lclByb3h5SGFuZGxlciBmcm9tICcuL0lubmVyUHJveHlIYW5kbGVyJztcblxuLyoqXG4gKiBQbHVnaW4gbG9hZGVyIGNsYXNzLlxuICpcbiAqIFRoaXMgaXMgYSBwcm92aWRlciAoZmFjdG9yeSkgY2xhc3MgZm9yIGEgc2luZ2xlIHBsdWdpbiBhbmQgcHJvdmlkZXMgdGhlIGxpbmsgYmV0d2VlbiBTbm93Ym9hcmQgZnJhbWV3b3JrIGZ1bmN0aW9uYWxpdHlcbiAqIGFuZCB0aGUgdW5kZXJseWluZyBwbHVnaW4gaW5zdGFuY2VzLiBJdCBhbHNvIHByb3ZpZGVzIHNvbWUgYmFzaWMgbW9ja2luZyBvZiBwbHVnaW4gbWV0aG9kcyBmb3IgdGVzdGluZy5cbiAqXG4gKiBAY29weXJpZ2h0IDIwMjEgV2ludGVyLlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGx1Z2luTG9hZGVyIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3Rvci5cbiAgICAgKlxuICAgICAqIEJpbmRzIHRoZSBXaW50ZXIgZnJhbWV3b3JrIHRvIHRoZSBpbnN0YW5jZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtIHtTbm93Ym9hcmR9IHNub3dib2FyZFxuICAgICAqIEBwYXJhbSB7UGx1Z2luQmFzZX0gaW5zdGFuY2VcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBzbm93Ym9hcmQsIGluc3RhbmNlKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuc25vd2JvYXJkID0gbmV3IFByb3h5KFxuICAgICAgICAgICAgc25vd2JvYXJkLFxuICAgICAgICAgICAgSW5uZXJQcm94eUhhbmRsZXIsXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcblxuICAgICAgICAvLyBGcmVlemUgaW5zdGFuY2UgdGhhdCBoYXMgYmVlbiBpbnNlcnRlZCBpbnRvIHRoaXMgbG9hZGVyXG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcy5pbnN0YW5jZSk7XG5cbiAgICAgICAgdGhpcy5pbnN0YW5jZXMgPSBbXTtcbiAgICAgICAgdGhpcy5zaW5nbGV0b24gPSB7XG4gICAgICAgICAgICBpbml0aWFsaXNlZDogZmFsc2UsXG4gICAgICAgIH07XG4gICAgICAgIC8vIFByZXZlbnQgZnVydGhlciBleHRlbnNpb24gb2YgdGhlIHNpbmdsZXRvbiBzdGF0dXMgb2JqZWN0XG4gICAgICAgIE9iamVjdC5zZWFsKHRoaXMuc2luZ2xldG9uKTtcblxuICAgICAgICB0aGlzLm1vY2tzID0ge307XG4gICAgICAgIHRoaXMub3JpZ2luYWxGdW5jdGlvbnMgPSB7fTtcblxuICAgICAgICAvLyBGcmVlemUgbG9hZGVyIGl0c2VsZlxuICAgICAgICBPYmplY3QuZnJlZXplKFBsdWdpbkxvYWRlci5wcm90b3R5cGUpO1xuICAgICAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgdGhlIGN1cnJlbnQgcGx1Z2luIGhhcyBhIHNwZWNpZmljIG1ldGhvZCBhdmFpbGFibGUuXG4gICAgICpcbiAgICAgKiBSZXR1cm5zIGZhbHNlIGlmIHRoZSBjdXJyZW50IHBsdWdpbiBpcyBhIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZE5hbWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBoYXNNZXRob2QobWV0aG9kTmFtZSkge1xuICAgICAgICBpZiAodGhpcy5pc0Z1bmN0aW9uKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAodHlwZW9mIHRoaXMuaW5zdGFuY2UucHJvdG90eXBlW21ldGhvZE5hbWVdID09PSAnZnVuY3Rpb24nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxscyBhIHByb3RvdHlwZSBtZXRob2QgZm9yIGEgcGx1Z2luLiBUaGlzIHNob3VsZCBnZW5lcmFsbHkgYmUgdXNlZCBmb3IgXCJzdGF0aWNcIiBjYWxscy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2ROYW1lXG4gICAgICogQHBhcmFtIHsuLi59IGFyZ3NcbiAgICAgKiBAcmV0dXJucyB7YW55fVxuICAgICAqL1xuICAgIGNhbGxNZXRob2QoLi4ucGFyYW1ldGVycykge1xuICAgICAgICBpZiAodGhpcy5pc0Z1bmN0aW9uKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYXJncyA9IHBhcmFtZXRlcnM7XG4gICAgICAgIGNvbnN0IG1ldGhvZE5hbWUgPSBhcmdzLnNoaWZ0KCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UucHJvdG90eXBlW21ldGhvZE5hbWVdKGFyZ3MpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gaW5zdGFuY2Ugb2YgdGhlIGN1cnJlbnQgcGx1Z2luLlxuICAgICAqXG4gICAgICogLSBJZiB0aGlzIGlzIGEgY2FsbGJhY2sgZnVuY3Rpb24gcGx1Z2luLCB0aGUgZnVuY3Rpb24gd2lsbCBiZSByZXR1cm5lZC5cbiAgICAgKiAtIElmIHRoaXMgaXMgYSBzaW5nbGV0b24sIHRoZSBzaW5nbGUgaW5zdGFuY2Ugb2YgdGhlIHBsdWdpbiB3aWxsIGJlIHJldHVybmVkLlxuICAgICAqXG4gICAgICogQHJldHVybnMge1BsdWdpbkJhc2V8RnVuY3Rpb259XG4gICAgICovXG4gICAgZ2V0SW5zdGFuY2UoLi4ucGFyYW1ldGVycykge1xuICAgICAgICBpZiAodGhpcy5pc0Z1bmN0aW9uKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlKC4uLnBhcmFtZXRlcnMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5kZXBlbmRlbmNpZXNGdWxmaWxsZWQoKSkge1xuICAgICAgICAgICAgY29uc3QgdW5tZXQgPSB0aGlzLmdldERlcGVuZGVuY2llcygpLmZpbHRlcigoaXRlbSkgPT4gIXRoaXMuc25vd2JvYXJkLmdldFBsdWdpbk5hbWVzKCkuaW5jbHVkZXMoaXRlbSkpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgXCIke3RoaXMubmFtZX1cIiBwbHVnaW4gcmVxdWlyZXMgdGhlIGZvbGxvd2luZyBwbHVnaW5zOiAke3VubWV0LmpvaW4oJywgJyl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNTaW5nbGV0b24oKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGlzZVNpbmdsZXRvbiguLi5wYXJhbWV0ZXJzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQXBwbHkgbW9ja2VkIG1ldGhvZHNcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLm1vY2tzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5vcmlnaW5hbEZ1bmN0aW9ucykuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgW21ldGhvZE5hbWUsIGNhbGxiYWNrXSA9IGVudHJ5O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlc1swXVttZXRob2ROYW1lXSA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMubW9ja3MpLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IFttZXRob2ROYW1lLCBjYWxsYmFja10gPSBlbnRyeTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXNbMF1bbWV0aG9kTmFtZV0gPSAoLi4ucGFyYW1zKSA9PiBjYWxsYmFjayh0aGlzLCAuLi5wYXJhbXMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXNbMF07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBcHBseSBtb2NrZWQgbWV0aG9kcyB0byBwcm90b3R5cGVcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMubW9ja3MpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMub3JpZ2luYWxGdW5jdGlvbnMpLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgW21ldGhvZE5hbWUsIGNhbGxiYWNrXSA9IGVudHJ5O1xuICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UucHJvdG90eXBlW21ldGhvZE5hbWVdID0gY2FsbGJhY2s7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMubW9ja3MpLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgW21ldGhvZE5hbWUsIGNhbGxiYWNrXSA9IGVudHJ5O1xuICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UucHJvdG90eXBlW21ldGhvZE5hbWVdID0gKC4uLnBhcmFtcykgPT4gY2FsbGJhY2sodGhpcywgLi4ucGFyYW1zKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmV3SW5zdGFuY2UgPSBuZXcgdGhpcy5pbnN0YW5jZSh0aGlzLnNub3dib2FyZCwgLi4ucGFyYW1ldGVycyk7XG4gICAgICAgIG5ld0luc3RhbmNlLmRldGFjaCA9ICgpID0+IHRoaXMuaW5zdGFuY2VzLnNwbGljZSh0aGlzLmluc3RhbmNlcy5pbmRleE9mKG5ld0luc3RhbmNlKSwgMSk7XG4gICAgICAgIG5ld0luc3RhbmNlLmNvbnN0cnVjdCguLi5wYXJhbWV0ZXJzKTtcbiAgICAgICAgdGhpcy5pbnN0YW5jZXMucHVzaChuZXdJbnN0YW5jZSk7XG5cbiAgICAgICAgcmV0dXJuIG5ld0luc3RhbmNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgYWxsIGluc3RhbmNlcyBvZiB0aGUgY3VycmVudCBwbHVnaW4uXG4gICAgICpcbiAgICAgKiBJZiB0aGlzIHBsdWdpbiBpcyBhIGNhbGxiYWNrIGZ1bmN0aW9uIHBsdWdpbiwgYW4gZW1wdHkgYXJyYXkgd2lsbCBiZSByZXR1cm5lZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQbHVnaW5CYXNlW119XG4gICAgICovXG4gICAgZ2V0SW5zdGFuY2VzKCkge1xuICAgICAgICBpZiAodGhpcy5pc0Z1bmN0aW9uKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIHRoZSBjdXJyZW50IHBsdWdpbiBpcyBhIHNpbXBsZSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzRnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAodHlwZW9mIHRoaXMuaW5zdGFuY2UgPT09ICdmdW5jdGlvbicgJiYgdGhpcy5pbnN0YW5jZS5wcm90b3R5cGUgaW5zdGFuY2VvZiBQbHVnaW5CYXNlID09PSBmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiB0aGUgY3VycmVudCBwbHVnaW4gaXMgYSBzaW5nbGV0b24uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc1NpbmdsZXRvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UucHJvdG90eXBlIGluc3RhbmNlb2YgU2luZ2xldG9uID09PSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgYSBzaW5nbGV0b24gaGFzIGJlZW4gaW5pdGlhbGlzZWQuXG4gICAgICpcbiAgICAgKiBOb3JtYWwgcGx1Z2lucyB3aWxsIGFsd2F5cyByZXR1cm4gdHJ1ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzSW5pdGlhbGlzZWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1NpbmdsZXRvbigpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnNpbmdsZXRvbi5pbml0aWFsaXNlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXNlcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgaW5pdGlhbGlzZVNpbmdsZXRvbiguLi5wYXJhbWV0ZXJzKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1NpbmdsZXRvbigpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuZXdJbnN0YW5jZSA9IG5ldyB0aGlzLmluc3RhbmNlKHRoaXMuc25vd2JvYXJkLCAuLi5wYXJhbWV0ZXJzKTtcbiAgICAgICAgbmV3SW5zdGFuY2UuZGV0YWNoID0gKCkgPT4gdGhpcy5pbnN0YW5jZXMuc3BsaWNlKHRoaXMuaW5zdGFuY2VzLmluZGV4T2YobmV3SW5zdGFuY2UpLCAxKTtcbiAgICAgICAgbmV3SW5zdGFuY2UuY29uc3RydWN0KC4uLnBhcmFtZXRlcnMpO1xuICAgICAgICB0aGlzLmluc3RhbmNlcy5wdXNoKG5ld0luc3RhbmNlKTtcbiAgICAgICAgdGhpcy5zaW5nbGV0b24uaW5pdGlhbGlzZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGRlcGVuZGVuY2llcyBvZiB0aGUgY3VycmVudCBwbHVnaW4uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICAgICovXG4gICAgZ2V0RGVwZW5kZW5jaWVzKCkge1xuICAgICAgICAvLyBDYWxsYmFjayBmdW5jdGlvbnMgY2Fubm90IGhhdmUgZGVwZW5kZW5jaWVzLlxuICAgICAgICBpZiAodGhpcy5pc0Z1bmN0aW9uKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE5vIGRlcGVuZGVuY3kgbWV0aG9kIHNwZWNpZmllZC5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmluc3RhbmNlLnByb3RvdHlwZS5kZXBlbmRlbmNpZXMgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlLnByb3RvdHlwZS5kZXBlbmRlbmNpZXMoKS5tYXAoKGl0ZW0pID0+IGl0ZW0udG9Mb3dlckNhc2UoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiB0aGUgY3VycmVudCBwbHVnaW4gaGFzIGFsbCBpdHMgZGVwZW5kZW5jaWVzIGZ1bGZpbGxlZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGRlcGVuZGVuY2llc0Z1bGZpbGxlZCgpIHtcbiAgICAgICAgY29uc3QgZGVwZW5kZW5jaWVzID0gdGhpcy5nZXREZXBlbmRlbmNpZXMoKTtcblxuICAgICAgICBsZXQgZnVsZmlsbGVkID0gdHJ1ZTtcbiAgICAgICAgZGVwZW5kZW5jaWVzLmZvckVhY2goKHBsdWdpbikgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnNub3dib2FyZC5oYXNQbHVnaW4ocGx1Z2luKSkge1xuICAgICAgICAgICAgICAgIGZ1bGZpbGxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZnVsZmlsbGVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFsbG93cyBhIG1ldGhvZCBvZiBhbiBpbnN0YW5jZSB0byBiZSBtb2NrZWQgZm9yIHRlc3RpbmcuXG4gICAgICpcbiAgICAgKiBUaGlzIG1vY2sgd2lsbCBiZSBhcHBsaWVkIGZvciB0aGUgbGlmZSBvZiBhbiBpbnN0YW5jZS4gRm9yIHNpbmdsZXRvbnMsIHRoZSBtb2NrIHdpbGwgYmUgYXBwbGllZCBmb3IgdGhlIGxpZmVcbiAgICAgKiBvZiB0aGUgcGFnZS5cbiAgICAgKlxuICAgICAqIE1vY2tzIGNhbm5vdCBiZSBhcHBsaWVkIHRvIGNhbGxiYWNrIGZ1bmN0aW9uIHBsdWdpbnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kTmFtZVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICovXG4gICAgbW9jayhtZXRob2ROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAodGhpcy5pc0Z1bmN0aW9uKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5pbnN0YW5jZS5wcm90b3R5cGVbbWV0aG9kTmFtZV0pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRnVuY3Rpb24gXCIke21ldGhvZE5hbWV9XCIgZG9lcyBub3QgZXhpc3QgYW5kIGNhbm5vdCBiZSBtb2NrZWRgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubW9ja3NbbWV0aG9kTmFtZV0gPSBjYWxsYmFjaztcbiAgICAgICAgdGhpcy5vcmlnaW5hbEZ1bmN0aW9uc1ttZXRob2ROYW1lXSA9IHRoaXMuaW5zdGFuY2UucHJvdG90eXBlW21ldGhvZE5hbWVdO1xuXG4gICAgICAgIGlmICh0aGlzLmlzU2luZ2xldG9uKCkgJiYgdGhpcy5pbnN0YW5jZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpc2VTaW5nbGV0b24oKTtcblxuICAgICAgICAgICAgLy8gQXBwbHkgbW9ja2VkIG1ldGhvZFxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXNbMF1bbWV0aG9kTmFtZV0gPSAoLi4ucGFyYW1ldGVycykgPT4gY2FsbGJhY2sodGhpcywgLi4ucGFyYW1ldGVycyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgbW9jayBjYWxsYmFjayBmcm9tIGZ1dHVyZSBpbnN0YW5jZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kTmFtZVxuICAgICAqL1xuICAgIHVubW9jayhtZXRob2ROYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRnVuY3Rpb24oKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5tb2Nrc1ttZXRob2ROYW1lXSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXNTaW5nbGV0b24oKSkge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXNbMF1bbWV0aG9kTmFtZV0gPSB0aGlzLm9yaWdpbmFsRnVuY3Rpb25zW21ldGhvZE5hbWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHRoaXMubW9ja3NbbWV0aG9kTmFtZV07XG4gICAgICAgIGRlbGV0ZSB0aGlzLm9yaWdpbmFsRnVuY3Rpb25zW21ldGhvZE5hbWVdO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBnZXQodGFyZ2V0LCBwcm9wLCByZWNlaXZlcikge1xuICAgICAgICBpZiAodHlwZW9mIHByb3AgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wTG93ZXIgPSBwcm9wLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXQuaGFzUGx1Z2luKHByb3BMb3dlcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKC4uLnBhcmFtcykgPT4gUmVmbGVjdC5nZXQodGFyZ2V0LCAncGx1Z2lucycpW3Byb3BMb3dlcl0uZ2V0SW5zdGFuY2UoLi4ucGFyYW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBSZWZsZWN0LmdldCh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKTtcbiAgICB9LFxuXG4gICAgaGFzKHRhcmdldCwgcHJvcCkge1xuICAgICAgICBpZiAodHlwZW9mIHByb3AgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wTG93ZXIgPSBwcm9wLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXQuaGFzUGx1Z2luKHByb3BMb3dlcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBSZWZsZWN0Lmhhcyh0YXJnZXQsIHByb3ApO1xuICAgIH0sXG59O1xuIiwiaW1wb3J0IFBsdWdpbkJhc2UgZnJvbSAnLi4vYWJzdHJhY3RzL1BsdWdpbkJhc2UnO1xuaW1wb3J0IFNpbmdsZXRvbiBmcm9tICcuLi9hYnN0cmFjdHMvU2luZ2xldG9uJztcbmltcG9ydCBQbHVnaW5Mb2FkZXIgZnJvbSAnLi9QbHVnaW5Mb2FkZXInO1xuXG5pbXBvcnQgQ29va2llIGZyb20gJy4uL3V0aWxpdGllcy9Db29raWUnO1xuaW1wb3J0IEpzb25QYXJzZXIgZnJvbSAnLi4vdXRpbGl0aWVzL0pzb25QYXJzZXInO1xuaW1wb3J0IFNhbml0aXplciBmcm9tICcuLi91dGlsaXRpZXMvU2FuaXRpemVyJztcbmltcG9ydCBVcmwgZnJvbSAnLi4vdXRpbGl0aWVzL1VybCc7XG5cbi8qKlxuICogU25vd2JvYXJkIC0gdGhlIFdpbnRlciBKYXZhU2NyaXB0IGZyYW1ld29yay5cbiAqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGJhc2Ugb2YgYSBtb2Rlcm4gdGFrZSBvbiB0aGUgV2ludGVyIEpTIGZyYW1ld29yaywgYmVpbmcgZnVsbHkgZXh0ZW5zaWJsZSBhbmQgdGFraW5nIGFkdmFudGFnZVxuICogb2YgbW9kZXJuIEphdmFTY3JpcHQgZmVhdHVyZXMgYnkgbGV2ZXJhZ2luZyB0aGUgTGFyYXZlbCBNaXggY29tcGlsYXRpb24gZnJhbWV3b3JrLiBJdCBhbHNvIGlzIGNvZGVkIHVwIHRvIHJlbW92ZSB0aGVcbiAqIGRlcGVuZGVuY3kgb2YgalF1ZXJ5LlxuICpcbiAqIEBjb3B5cmlnaHQgMjAyMSBXaW50ZXIuXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICogQGxpbmsgaHR0cHM6Ly93aW50ZXJjbXMuY29tL2RvY3Mvc25vd2JvYXJkL2ludHJvZHVjdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbm93Ym9hcmQge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtib29sZWFufSBhdXRvU2luZ2xldG9ucyBBdXRvbWF0aWNhbGx5IGxvYWQgc2luZ2xldG9ucyB3aGVuIERPTSBpcyByZWFkeS4gRGVmYXVsdDogYHRydWVgLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gZGVidWcgV2hldGhlciBkZWJ1Z2dpbmcgbG9ncyBzaG91bGQgYmUgc2hvd24uIERlZmF1bHQ6IGBmYWxzZWAuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoYXV0b1NpbmdsZXRvbnMsIGRlYnVnKSB7XG4gICAgICAgIHRoaXMuZGVidWdFbmFibGVkID0gKHR5cGVvZiBkZWJ1ZyA9PT0gJ2Jvb2xlYW4nICYmIGRlYnVnID09PSB0cnVlKTtcbiAgICAgICAgdGhpcy5hdXRvSW5pdFNpbmdsZXRvbnMgPSAodHlwZW9mIGF1dG9TaW5nbGV0b25zID09PSAnYm9vbGVhbicgJiYgYXV0b1NpbmdsZXRvbnMgPT09IGZhbHNlKTtcbiAgICAgICAgdGhpcy5wbHVnaW5zID0ge307XG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0ge307XG4gICAgICAgIHRoaXMuZm91bmRCYXNlVXJsID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZWFkaW5lc3MgPSB7XG4gICAgICAgICAgICBkb206IGZhbHNlLFxuICAgICAgICB9O1xuICAgICAgICAvLyBTZWFsIHJlYWRpbmVzcyBmcm9tIGJlaW5nIGFkZGVkIHRvIGZ1cnRoZXIsIGJ1dCBhbGxvdyB0aGUgcHJvcGVydGllcyB0byBiZSBtb2RpZmllZC5cbiAgICAgICAgT2JqZWN0LnNlYWwodGhpcy5yZWFkaW5lc3MpO1xuICAgICAgICB0aGlzLmF0dGFjaEFic3RyYWN0cygpO1xuXG4gICAgICAgIC8vIEZyZWV6ZSB0aGUgU25vd2JvYXJkIGNsYXNzIHRvIHByZXZlbnQgZnVydGhlciBtb2RpZmljYXRpb25zLlxuICAgICAgICBPYmplY3QuZnJlZXplKFNub3dib2FyZC5wcm90b3R5cGUpO1xuICAgICAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuXG4gICAgICAgIHRoaXMubG9hZFV0aWxpdGllcygpO1xuICAgICAgICB0aGlzLmluaXRpYWxpc2UoKTtcblxuICAgICAgICB0aGlzLmRlYnVnKCdTbm93Ym9hcmQgZnJhbWV3b3JrIGluaXRpYWxpc2VkJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXR0YWNoZXMgYWJzdHJhY3QgY2xhc3NlcyBhcyBwcm9wZXJ0aWVzIG9mIHRoZSBTbm93Ym9hcmQgY2xhc3MuXG4gICAgICpcbiAgICAgKiBUaGlzIHdpbGwgYWxsb3cgSmF2YXNjcmlwdCBmdW5jdGlvbmFsaXR5IHdpdGggbm8gYnVpbGQgcHJvY2VzcyB0byBzdGlsbCBleHRlbmQgdGhlc2UgYWJzdHJhY3RzIGJ5IHByZWZpeGluZ1xuICAgICAqIHRoZW0gd2l0aCBcIlNub3dib2FyZFwiLlxuICAgICAqXG4gICAgICogYGBgXG4gICAgICogY2xhc3MgTXlDbGFzcyBleHRlbmRzIFNub3dib2FyZC5QbHVnaW5CYXNlIHtcbiAgICAgKiAgICAgLi4uXG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIGF0dGFjaEFic3RyYWN0cygpIHtcbiAgICAgICAgdGhpcy5QbHVnaW5CYXNlID0gUGx1Z2luQmFzZTtcbiAgICAgICAgdGhpcy5TaW5nbGV0b24gPSBTaW5nbGV0b247XG5cbiAgICAgICAgT2JqZWN0LmZyZWV6ZSh0aGlzLlBsdWdpbkJhc2UucHJvdG90eXBlKTtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZSh0aGlzLlBsdWdpbkJhc2UpO1xuICAgICAgICBPYmplY3QuZnJlZXplKHRoaXMuU2luZ2xldG9uLnByb3RvdHlwZSk7XG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcy5TaW5nbGV0b24pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWRzIHRoZSBkZWZhdWx0IHV0aWxpdGllcy5cbiAgICAgKi9cbiAgICBsb2FkVXRpbGl0aWVzKCkge1xuICAgICAgICB0aGlzLmFkZFBsdWdpbignY29va2llJywgQ29va2llKTtcbiAgICAgICAgdGhpcy5hZGRQbHVnaW4oJ2pzb25QYXJzZXInLCBKc29uUGFyc2VyKTtcbiAgICAgICAgdGhpcy5hZGRQbHVnaW4oJ3Nhbml0aXplcicsIFNhbml0aXplcik7XG4gICAgICAgIHRoaXMuYWRkUGx1Z2luKCd1cmwnLCBVcmwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpc2VzIHRoZSBmcmFtZXdvcmsuXG4gICAgICpcbiAgICAgKiBBdHRhY2hlcyBhIGxpc3RlbmVyIGZvciB0aGUgRE9NIGJlaW5nIHJlYWR5IGFuZCB0cmlnZ2VycyBhIGdsb2JhbCBcInJlYWR5XCIgZXZlbnQgZm9yIHBsdWdpbnMgdG8gYmVnaW4gYXR0YWNoaW5nXG4gICAgICogdGhlbXNlbHZlcyB0byB0aGUgRE9NLlxuICAgICAqL1xuICAgIGluaXRpYWxpc2UoKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuYXV0b0luaXRTaW5nbGV0b25zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsaXNlU2luZ2xldG9ucygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5nbG9iYWxFdmVudCgncmVhZHknKTtcbiAgICAgICAgICAgIHRoaXMucmVhZGluZXNzLmRvbSA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpc2VzIGFuIGluc3RhbmNlIG9mIGV2ZXJ5IHNpbmdsZXRvbi5cbiAgICAgKi9cbiAgICBpbml0aWFsaXNlU2luZ2xldG9ucygpIHtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnBsdWdpbnMpLmZvckVhY2goKHBsdWdpbikgPT4ge1xuICAgICAgICAgICAgaWYgKHBsdWdpbi5pc1NpbmdsZXRvbigpICYmIHBsdWdpbi5kZXBlbmRlbmNpZXNGdWxmaWxsZWQoKSkge1xuICAgICAgICAgICAgICAgIHBsdWdpbi5pbml0aWFsaXNlU2luZ2xldG9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBwbHVnaW4gdG8gdGhlIGZyYW1ld29yay5cbiAgICAgKlxuICAgICAqIFBsdWdpbnMgYXJlIHRoZSBjb3JuZXJzdG9uZSBmb3IgYWRkaXRpb25hbCBmdW5jdGlvbmFsaXR5IGZvciBTbm93Ym9hcmQuIEEgcGx1Z2luIG11c3QgZWl0aGVyIGJlIGFuIEVTMjAxNSBjbGFzc1xuICAgICAqIHRoYXQgZXh0ZW5kcyB0aGUgUGx1Z2luQmFzZSBvciBTaW5nbGV0b24gYWJzdHJhY3QgY2xhc3Nlcywgb3IgYSBzaW1wbGUgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAgICpcbiAgICAgKiBXaGVuIGEgcGx1Z2luIGlzIGFkZGVkLCBpdCBpcyBhdXRvbWF0aWNhbGx5IGFzc2lnbmVkIGFzIGEgbmV3IG1hZ2ljIG1ldGhvZCBpbiB0aGUgU25vd2JvYXJkIGNsYXNzIHVzaW5nIHRoZSBuYW1lXG4gICAgICogcGFyYW1ldGVyLCBhbmQgY2FuIGJlIGNhbGxlZCB2aWEgdGhpcyBtZXRob2QuIFRoaXMgbWV0aG9kIHdpbGwgYWx3YXlzIGJlIHRoZSBcImxvd2VyY2FzZVwiIHZlcnNpb24gb2YgdGhpcyBuYW1lLlxuICAgICAqXG4gICAgICogRm9yIGV4YW1wbGUsIGlmIGEgcGx1Z2luIGlzIGFzc2lnbmVkIHRvIHRoZSBuYW1lIFwibXlQbHVnaW5cIiwgaXQgY2FuIGJlIGNhbGxlZCB2aWEgYFNub3dib2FyZC5teXBsdWdpbigpYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtIHtQbHVnaW5CYXNlfEZ1bmN0aW9ufSBpbnN0YW5jZVxuICAgICAqL1xuICAgIGFkZFBsdWdpbihuYW1lLCBpbnN0YW5jZSkge1xuICAgICAgICBjb25zdCBsb3dlck5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuaGFzUGx1Z2luKGxvd2VyTmFtZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQSBwbHVnaW4gY2FsbGVkIFwiJHtuYW1lfVwiIGlzIGFscmVhZHkgcmVnaXN0ZXJlZC5gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgaW5zdGFuY2UgIT09ICdmdW5jdGlvbicgJiYgaW5zdGFuY2UgaW5zdGFuY2VvZiBQbHVnaW5CYXNlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgcHJvdmlkZWQgcGx1Z2luIG11c3QgZXh0ZW5kIHRoZSBQbHVnaW5CYXNlIGNsYXNzLCBvciBtdXN0IGJlIGEgY2FsbGJhY2sgZnVuY3Rpb24uJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpc1tuYW1lXSAhPT0gdW5kZWZpbmVkIHx8IHRoaXNbbG93ZXJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBnaXZlbiBuYW1lIGlzIGFscmVhZHkgaW4gdXNlIGZvciBhIHByb3BlcnR5IG9yIG1ldGhvZCBvZiB0aGUgU25vd2JvYXJkIGNsYXNzLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wbHVnaW5zW2xvd2VyTmFtZV0gPSBuZXcgUGx1Z2luTG9hZGVyKGxvd2VyTmFtZSwgdGhpcywgaW5zdGFuY2UpO1xuXG4gICAgICAgIHRoaXMuZGVidWcoYFBsdWdpbiBcIiR7bmFtZX1cIiByZWdpc3RlcmVkYCk7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgYW55IHNpbmdsZXRvbnMgbm93IGhhdmUgdGhlaXIgZGVwZW5kZW5jaWVzIGZ1bGZpbGxlZCwgYW5kIGZpcmUgdGhlaXIgXCJyZWFkeVwiIGhhbmRsZXIgaWYgd2UncmVcbiAgICAgICAgLy8gaW4gYSByZWFkeSBzdGF0ZS5cbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLmdldFBsdWdpbnMoKSkuZm9yRWFjaCgocGx1Z2luKSA9PiB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgcGx1Z2luLmlzU2luZ2xldG9uKClcbiAgICAgICAgICAgICAgICAmJiAhcGx1Z2luLmlzSW5pdGlhbGlzZWQoKVxuICAgICAgICAgICAgICAgICYmIHBsdWdpbi5kZXBlbmRlbmNpZXNGdWxmaWxsZWQoKVxuICAgICAgICAgICAgICAgICYmIHBsdWdpbi5oYXNNZXRob2QoJ2xpc3RlbnMnKVxuICAgICAgICAgICAgICAgICYmIE9iamVjdC5rZXlzKHBsdWdpbi5jYWxsTWV0aG9kKCdsaXN0ZW5zJykpLmluY2x1ZGVzKCdyZWFkeScpXG4gICAgICAgICAgICAgICAgJiYgdGhpcy5yZWFkaW5lc3MuZG9tXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWFkeU1ldGhvZCA9IHBsdWdpbi5jYWxsTWV0aG9kKCdsaXN0ZW5zJykucmVhZHk7XG4gICAgICAgICAgICAgICAgcGx1Z2luLmNhbGxNZXRob2QocmVhZHlNZXRob2QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgcGx1Z2luLlxuICAgICAqXG4gICAgICogUmVtb3ZlcyBhIHBsdWdpbiBmcm9tIFNub3dib2FyZCwgY2FsbGluZyB0aGUgZGVzdHJ1Y3RvciBtZXRob2QgZm9yIGFsbCBhY3RpdmUgaW5zdGFuY2VzIG9mIHRoZSBwbHVnaW4uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIHJlbW92ZVBsdWdpbihuYW1lKSB7XG4gICAgICAgIGNvbnN0IGxvd2VyTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICBpZiAoIXRoaXMuaGFzUGx1Z2luKGxvd2VyTmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMuZGVidWcoYFBsdWdpbiBcIiR7bmFtZX1cIiBhbHJlYWR5IHJlbW92ZWRgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENhbGwgZGVzdHJ1Y3RvcnMgZm9yIGFsbCBpbnN0YW5jZXNcbiAgICAgICAgdGhpcy5wbHVnaW5zW2xvd2VyTmFtZV0uZ2V0SW5zdGFuY2VzKCkuZm9yRWFjaCgoaW5zdGFuY2UpID0+IHtcbiAgICAgICAgICAgIGluc3RhbmNlLmRlc3RydWN0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRlbGV0ZSB0aGlzLnBsdWdpbnNbbG93ZXJOYW1lXTtcbiAgICAgICAgZGVsZXRlIHRoaXNbbG93ZXJOYW1lXTtcbiAgICAgICAgZGVsZXRlIHRoaXNbbmFtZV07XG5cbiAgICAgICAgdGhpcy5kZWJ1ZyhgUGx1Z2luIFwiJHtuYW1lfVwiIHJlbW92ZWRgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIGEgcGx1Z2luIGhhcyBiZWVuIHJlZ2lzdGVyZWQgYW5kIGlzIGFjdGl2ZS5cbiAgICAgKlxuICAgICAqIEEgcGx1Z2luIHRoYXQgaXMgc3RpbGwgd2FpdGluZyBmb3IgZGVwZW5kZW5jaWVzIHRvIGJlIHJlZ2lzdGVyZWQgd2lsbCBub3QgYmUgYWN0aXZlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBoYXNQbHVnaW4obmFtZSkge1xuICAgICAgICBjb25zdCBsb3dlck5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgcmV0dXJuICh0aGlzLnBsdWdpbnNbbG93ZXJOYW1lXSAhPT0gdW5kZWZpbmVkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHJlZ2lzdGVyZWQgcGx1Z2lucyBhcyBQbHVnaW5Mb2FkZXIgb2JqZWN0cy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQbHVnaW5Mb2FkZXJbXX1cbiAgICAgKi9cbiAgICBnZXRQbHVnaW5zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wbHVnaW5zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgcmVnaXN0ZXJlZCBwbHVnaW5zLCBieSBuYW1lLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgICAqL1xuICAgIGdldFBsdWdpbk5hbWVzKCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5wbHVnaW5zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgUGx1Z2luTG9hZGVyIG9iamVjdCBvZiBhIGdpdmVuIHBsdWdpbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQbHVnaW5Mb2FkZXJ9XG4gICAgICovXG4gICAgZ2V0UGx1Z2luKG5hbWUpIHtcbiAgICAgICAgY29uc3QgbG93ZXJOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIGlmICghdGhpcy5oYXNQbHVnaW4obG93ZXJOYW1lKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBwbHVnaW4gY2FsbGVkIFwiJHtsb3dlck5hbWV9XCIgaGFzIGJlZW4gcmVnaXN0ZXJlZC5gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnBsdWdpbnNbbG93ZXJOYW1lXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5kcyBhbGwgcGx1Z2lucyB0aGF0IGxpc3RlbiB0byB0aGUgZ2l2ZW4gZXZlbnQuXG4gICAgICpcbiAgICAgKiBUaGlzIHdvcmtzIGZvciBib3RoIG5vcm1hbCBhbmQgcHJvbWlzZSBldmVudHMuIEl0IGRvZXMgTk9UIGNoZWNrIHRoYXQgdGhlIHBsdWdpbidzIGxpc3RlbmVyIGFjdHVhbGx5IGV4aXN0cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nW119IFRoZSBuYW1lIG9mIHRoZSBwbHVnaW5zIHRoYXQgYXJlIGxpc3RlbmluZyB0byB0aGlzIGV2ZW50LlxuICAgICAqL1xuICAgIGxpc3RlbnNUb0V2ZW50KGV2ZW50TmFtZSkge1xuICAgICAgICBjb25zdCBwbHVnaW5zID0gW107XG5cbiAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5wbHVnaW5zKS5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgW25hbWUsIHBsdWdpbl0gPSBlbnRyeTtcblxuICAgICAgICAgICAgaWYgKHBsdWdpbi5pc0Z1bmN0aW9uKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXBsdWdpbi5kZXBlbmRlbmNpZXNGdWxmaWxsZWQoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcGx1Z2luLmhhc01ldGhvZCgnbGlzdGVucycpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBsaXN0ZW5lcnMgPSBwbHVnaW4uY2FsbE1ldGhvZCgnbGlzdGVucycpO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyc1tldmVudE5hbWVdID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgbGlzdGVuZXJzW2V2ZW50TmFtZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBwbHVnaW5zLnB1c2gobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwbHVnaW5zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBhIHNpbXBsZSByZWFkeSBsaXN0ZW5lci5cbiAgICAgKlxuICAgICAqIFN5bm9ueW1vdXMgd2l0aCBqUXVlcnkncyBcIiQoZG9jdW1lbnQpLnJlYWR5KClcIiBmdW5jdGlvbmFsaXR5LCB0aGlzIGFsbG93cyBpbmxpbmUgc2NyaXB0cyB0b1xuICAgICAqIGF0dGFjaCB0aGVtc2VsdmVzIHRvIFNub3dib2FyZCBpbW1lZGlhdGVseSBidXQgb25seSBmaXJlIHdoZW4gdGhlIERPTSBpcyByZWFkeS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICovXG4gICAgcmVhZHkoY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHRoaXMucmVhZGluZXNzLmRvbSkge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub24oJ3JlYWR5JywgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBzaW1wbGUgbGlzdGVuZXIgZm9yIGFuIGV2ZW50LlxuICAgICAqXG4gICAgICogVGhpcyBjYW4gYmUgdXNlZCBmb3IgYWQtaG9jIHNjcmlwdHMgdGhhdCBkb24ndCBuZWVkIGEgZnVsbCBwbHVnaW4uIFRoZSBnaXZlbiBjYWxsYmFjayB3aWxsIGJlXG4gICAgICogY2FsbGVkIHdoZW4gdGhlIGV2ZW50IG5hbWUgcHJvdmlkZWQgZmlyZXMuIFRoaXMgd29ya3MgZm9yIGJvdGggbm9ybWFsIGFuZCBQcm9taXNlIGV2ZW50cy4gRm9yXG4gICAgICogYSBQcm9taXNlIGV2ZW50LCB5b3VyIGNhbGxiYWNrIG11c3QgcmV0dXJuIGEgUHJvbWlzZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudE5hbWVcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqL1xuICAgIG9uKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKCF0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdID0gW107XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0uaW5jbHVkZXMoY2FsbGJhY2spKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdLnB1c2goY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIHNpbXBsZSBsaXN0ZW5lciBmb3IgYW4gZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnROYW1lXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBvZmYoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAoIXRoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXS5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxzIGEgZ2xvYmFsIGV2ZW50IHRvIGFsbCByZWdpc3RlcmVkIHBsdWdpbnMuXG4gICAgICpcbiAgICAgKiBJZiBhbnkgcGx1Z2luIHJldHVybnMgYSBgZmFsc2VgLCB0aGUgZXZlbnQgaXMgY29uc2lkZXJlZCBjYW5jZWxsZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IElmIGV2ZW50IHdhcyBub3QgY2FuY2VsbGVkXG4gICAgICovXG4gICAgZ2xvYmFsRXZlbnQoZXZlbnROYW1lLCAuLi5wYXJhbWV0ZXJzKSB7XG4gICAgICAgIHRoaXMuZGVidWcoYENhbGxpbmcgZ2xvYmFsIGV2ZW50IFwiJHtldmVudE5hbWV9XCJgLCAuLi5wYXJhbWV0ZXJzKTtcblxuICAgICAgICAvLyBGaW5kIHBsdWdpbnMgbGlzdGVuaW5nIHRvIHRoZSBldmVudC5cbiAgICAgICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5zVG9FdmVudChldmVudE5hbWUpO1xuICAgICAgICBpZiAobGlzdGVuZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5kZWJ1ZyhgTm8gbGlzdGVuZXJzIGZvdW5kIGZvciBnbG9iYWwgZXZlbnQgXCIke2V2ZW50TmFtZX1cImApO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZWJ1ZyhgTGlzdGVuZXJzIGZvdW5kIGZvciBnbG9iYWwgZXZlbnQgXCIke2V2ZW50TmFtZX1cIjogJHtsaXN0ZW5lcnMuam9pbignLCAnKX1gKTtcblxuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG5cbiAgICAgICAgbGlzdGVuZXJzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBsdWdpbiA9IHRoaXMuZ2V0UGx1Z2luKG5hbWUpO1xuXG4gICAgICAgICAgICBpZiAocGx1Z2luLmlzRnVuY3Rpb24oKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwbHVnaW4uaXNTaW5nbGV0b24oKSAmJiBwbHVnaW4uZ2V0SW5zdGFuY2VzKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcGx1Z2luLmluaXRpYWxpc2VTaW5nbGV0b24oKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbGlzdGVuTWV0aG9kID0gcGx1Z2luLmNhbGxNZXRob2QoJ2xpc3RlbnMnKVtldmVudE5hbWVdO1xuXG4gICAgICAgICAgICAvLyBDYWxsIGV2ZW50IGhhbmRsZXIgbWV0aG9kcyBmb3IgYWxsIHBsdWdpbnMsIGlmIHRoZXkgaGF2ZSBhIG1ldGhvZCBzcGVjaWZpZWQgZm9yIHRoZSBldmVudC5cbiAgICAgICAgICAgIHBsdWdpbi5nZXRJbnN0YW5jZXMoKS5mb3JFYWNoKChpbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIElmIGEgcGx1Z2luIGhhcyBjYW5jZWxsZWQgdGhlIGV2ZW50LCBubyBmdXJ0aGVyIHBsdWdpbnMgYXJlIGNvbnNpZGVyZWQuXG4gICAgICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5NZXRob2QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGxpc3Rlbk1ldGhvZC5hcHBseShpbnN0YW5jZSwgcGFyYW1ldGVycyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBFcnJvciB0aHJvd24gaW4gXCIke2V2ZW50TmFtZX1cIiBldmVudCBieSBcIiR7bmFtZX1cIiBwbHVnaW4uYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBsaXN0ZW5NZXRob2QgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaW5zdGFuY2VbbGlzdGVuTWV0aG9kXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIFwiJHtsaXN0ZW5NZXRob2R9XCIgbWV0aG9kIGluIFwiJHtuYW1lfVwiIHBsdWdpbmApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnN0YW5jZVtsaXN0ZW5NZXRob2RdKC4uLnBhcmFtZXRlcnMpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWJ1ZyhgR2xvYmFsIGV2ZW50IFwiJHtldmVudE5hbWV9XCIgY2FuY2VsbGVkIGJ5IFwiJHtuYW1lfVwiIHBsdWdpbmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgRXJyb3IgdGhyb3duIGluIFwiJHtldmVudE5hbWV9XCIgZXZlbnQgYnkgXCIke25hbWV9XCIgcGx1Z2luLmAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcihgTGlzdGVuIG1ldGhvZCBmb3IgXCIke2V2ZW50TmFtZX1cIiBldmVudCBpbiBcIiR7bmFtZX1cIiBwbHVnaW4gaXMgbm90IGEgZnVuY3Rpb24gb3Igc3RyaW5nLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBGaW5kIGFkLWhvYyBsaXN0ZW5lcnMgZm9yIHRoaXMgZXZlbnQuXG4gICAgICAgIGlmICghY2FuY2VsbGVkICYmIHRoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0gJiYgdGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmRlYnVnKGBGb3VuZCAke3RoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0ubGVuZ3RofSBhZC1ob2MgbGlzdGVuZXIocykgZm9yIGdsb2JhbCBldmVudCBcIiR7ZXZlbnROYW1lfVwiYCk7XG5cbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0uZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBJZiBhIGxpc3RlbmVyIGhhcyBjYW5jZWxsZWQgdGhlIGV2ZW50LCBubyBmdXJ0aGVyIGxpc3RlbmVycyBhcmUgY29uc2lkZXJlZC5cbiAgICAgICAgICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobGlzdGVuZXIoLi4ucGFyYW1ldGVycykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWJ1ZyhgR2xvYmFsIGV2ZW50IFwiJHtldmVudE5hbWV9IGNhbmNlbGxlZCBieSBhbiBhZC1ob2MgbGlzdGVuZXIuYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgYEVycm9yIHRocm93biBpbiBcIiR7ZXZlbnROYW1lfVwiIGV2ZW50IGJ5IGFuIGFkLWhvYyBsaXN0ZW5lci5gLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gIWNhbmNlbGxlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxscyBhIGdsb2JhbCBldmVudCB0byBhbGwgcmVnaXN0ZXJlZCBwbHVnaW5zLCBleHBlY3RpbmcgYSBQcm9taXNlIHRvIGJlIHJldHVybmVkIGJ5IGFsbC5cbiAgICAgKlxuICAgICAqIFRoaXMgY29sbGF0ZXMgYWxsIHBsdWdpbnMgcmVzcG9uc2VzIGludG8gb25lIGxhcmdlIFByb21pc2UgdGhhdCBlaXRoZXIgZXhwZWN0cyBhbGwgdG8gYmUgcmVzb2x2ZWQsIG9yIG9uZSB0byByZWplY3QuXG4gICAgICogSWYgbm8gbGlzdGVuZXJzIGFyZSBmb3VuZCwgYSByZXNvbHZlZCBQcm9taXNlIGlzIHJldHVybmVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZVxuICAgICAqL1xuICAgIGdsb2JhbFByb21pc2VFdmVudChldmVudE5hbWUsIC4uLnBhcmFtZXRlcnMpIHtcbiAgICAgICAgdGhpcy5kZWJ1ZyhgQ2FsbGluZyBnbG9iYWwgcHJvbWlzZSBldmVudCBcIiR7ZXZlbnROYW1lfVwiYCk7XG5cbiAgICAgICAgLy8gRmluZCBwbHVnaW5zIGxpc3RlbmluZyB0byB0aGlzIGV2ZW50LlxuICAgICAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbnNUb0V2ZW50KGV2ZW50TmFtZSk7XG4gICAgICAgIGlmIChsaXN0ZW5lcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmRlYnVnKGBObyBsaXN0ZW5lcnMgZm91bmQgZm9yIGdsb2JhbCBwcm9taXNlIGV2ZW50IFwiJHtldmVudE5hbWV9XCJgKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlYnVnKGBMaXN0ZW5lcnMgZm91bmQgZm9yIGdsb2JhbCBwcm9taXNlIGV2ZW50IFwiJHtldmVudE5hbWV9XCI6ICR7bGlzdGVuZXJzLmpvaW4oJywgJyl9YCk7XG5cbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBbXTtcblxuICAgICAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGx1Z2luID0gdGhpcy5nZXRQbHVnaW4obmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChwbHVnaW4uaXNGdW5jdGlvbigpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBsdWdpbi5pc1NpbmdsZXRvbigpICYmIHBsdWdpbi5nZXRJbnN0YW5jZXMoKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBwbHVnaW4uaW5pdGlhbGlzZVNpbmdsZXRvbigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBsaXN0ZW5NZXRob2QgPSBwbHVnaW4uY2FsbE1ldGhvZCgnbGlzdGVucycpW2V2ZW50TmFtZV07XG5cbiAgICAgICAgICAgIC8vIENhbGwgZXZlbnQgaGFuZGxlciBtZXRob2RzIGZvciBhbGwgcGx1Z2lucywgaWYgdGhleSBoYXZlIGEgbWV0aG9kIHNwZWNpZmllZCBmb3IgdGhlIGV2ZW50LlxuICAgICAgICAgICAgcGx1Z2luLmdldEluc3RhbmNlcygpLmZvckVhY2goKGluc3RhbmNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5NZXRob2QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlUHJvbWlzZSA9IGxpc3Rlbk1ldGhvZC5hcHBseShpbnN0YW5jZSwgcGFyYW1ldGVycyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnN0YW5jZVByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChpbnN0YW5jZVByb21pc2UpO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgRXJyb3IgdGhyb3duIGluIFwiJHtldmVudE5hbWV9XCIgZXZlbnQgYnkgXCIke25hbWV9XCIgcGx1Z2luLmAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbGlzdGVuTWV0aG9kID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWluc3RhbmNlW2xpc3Rlbk1ldGhvZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTWlzc2luZyBcIiR7bGlzdGVuTWV0aG9kfVwiIG1ldGhvZCBpbiBcIiR7bmFtZX1cIiBwbHVnaW5gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnN0YW5jZVByb21pc2UgPSBpbnN0YW5jZVtsaXN0ZW5NZXRob2RdKC4uLnBhcmFtZXRlcnMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2VQcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goaW5zdGFuY2VQcm9taXNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYEVycm9yIHRocm93biBpbiBcIiR7ZXZlbnROYW1lfVwiIHByb21pc2UgZXZlbnQgYnkgXCIke25hbWV9XCIgcGx1Z2luLmAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcihgTGlzdGVuIG1ldGhvZCBmb3IgXCIke2V2ZW50TmFtZX1cIiBldmVudCBpbiBcIiR7bmFtZX1cIiBwbHVnaW4gaXMgbm90IGEgZnVuY3Rpb24gb3Igc3RyaW5nLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBGaW5kIGFkLWhvYyBsaXN0ZW5lcnMgbGlzdGVuaW5nIHRvIHRoaXMgZXZlbnQuXG4gICAgICAgIGlmICh0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdICYmIHRoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5kZWJ1ZyhgRm91bmQgJHt0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdLmxlbmd0aH0gYWQtaG9jIGxpc3RlbmVyKHMpIGZvciBnbG9iYWwgcHJvbWlzZSBldmVudCBcIiR7ZXZlbnROYW1lfVwiYCk7XG5cbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0uZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaXN0ZW5lclByb21pc2UgPSBsaXN0ZW5lciguLi5wYXJhbWV0ZXJzKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpc3RlbmVyUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKGxpc3RlbmVyUHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgIGBFcnJvciB0aHJvd24gaW4gXCIke2V2ZW50TmFtZX1cIiBwcm9taXNlIGV2ZW50IGJ5IGFuIGFkLWhvYyBsaXN0ZW5lci5gLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvbWlzZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvZyBhIHN0eWxlZCBtZXNzYWdlIGluIHRoZSBjb25zb2xlLlxuICAgICAqXG4gICAgICogSW5jbHVkZXMgcGFyYW1ldGVycyBhbmQgYSBzdGFjayB0cmFjZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIGxvZ01lc3NhZ2UoY29sb3IsIGJvbGQsIG1lc3NhZ2UsIC4uLnBhcmFtZXRlcnMpIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgICAgICAgY29uc29sZS5ncm91cENvbGxhcHNlZChcbiAgICAgICAgICAgICclY1tTbm93Ym9hcmRdJyxcbiAgICAgICAgICAgIGBjb2xvcjogJHtjb2xvcn07IGZvbnQtd2VpZ2h0OiAkeyhib2xkKSA/ICdib2xkJyA6ICdub3JtYWwnfTtgLFxuICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICApO1xuICAgICAgICBpZiAocGFyYW1ldGVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoXG4gICAgICAgICAgICAgICAgYCVjUGFyYW1ldGVycyAlYygke3BhcmFtZXRlcnMubGVuZ3RofSlgLFxuICAgICAgICAgICAgICAgICdjb2xvcjogcmdiKDQ1LCAxNjcsIDE5OSk7IGZvbnQtd2VpZ2h0OiBib2xkOycsXG4gICAgICAgICAgICAgICAgJ2NvbG9yOiByZ2IoODgsIDg4LCA4OCk7IGZvbnQtd2VpZ2h0OiBub3JtYWw7J1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgICAgICBwYXJhbWV0ZXJzLmZvckVhY2goKHBhcmFtKSA9PiB7XG4gICAgICAgICAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJWMke2luZGV4fTpgLCAnY29sb3I6IHJnYig4OCwgODgsIDg4KTsgZm9udC13ZWlnaHQ6IG5vcm1hbDsnLCBwYXJhbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcblxuICAgICAgICAgICAgY29uc29sZS5ncm91cENvbGxhcHNlZCgnJWNUcmFjZScsICdjb2xvcjogcmdiKDQ1LCAxNjcsIDE5OSk7IGZvbnQtd2VpZ2h0OiBib2xkOycpO1xuICAgICAgICAgICAgY29uc29sZS50cmFjZSgpO1xuICAgICAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS50cmFjZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSAqL1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvZyBhIG1lc3NhZ2UuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBsb2cobWVzc2FnZSwgLi4ucGFyYW1ldGVycykge1xuICAgICAgICB0aGlzLmxvZ01lc3NhZ2UoJ3JnYig0NSwgMTY3LCAxOTkpJywgZmFsc2UsIG1lc3NhZ2UsIC4uLnBhcmFtZXRlcnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvZyBhIGRlYnVnIG1lc3NhZ2UuXG4gICAgICpcbiAgICAgKiBUaGVzZSBtZXNzYWdlcyBhcmUgb25seSBzaG93biB3aGVuIGRlYnVnZ2luZyBpcyBlbmFibGVkLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgZGVidWcobWVzc2FnZSwgLi4ucGFyYW1ldGVycykge1xuICAgICAgICBpZiAoIXRoaXMuZGVidWdFbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvZ01lc3NhZ2UoJ3JnYig0NSwgMTY3LCAxOTkpJywgZmFsc2UsIG1lc3NhZ2UsIC4uLnBhcmFtZXRlcnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvZ3MgYW4gZXJyb3IgbWVzc2FnZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIGVycm9yKG1lc3NhZ2UsIC4uLnBhcmFtZXRlcnMpIHtcbiAgICAgICAgdGhpcy5sb2dNZXNzYWdlKCdyZ2IoMjI5LCAzNSwgMzUpJywgdHJ1ZSwgbWVzc2FnZSwgLi4ucGFyYW1ldGVycyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IEZsYXNoIGZyb20gJy4vZXh0cmFzL0ZsYXNoJztcbmltcG9ydCBUcmFuc2l0aW9uIGZyb20gJy4vZXh0cmFzL1RyYW5zaXRpb24nO1xuaW1wb3J0IEF0dGFjaExvYWRpbmcgZnJvbSAnLi9leHRyYXMvQXR0YWNoTG9hZGluZyc7XG5pbXBvcnQgU3RyaXBlTG9hZGVyIGZyb20gJy4vZXh0cmFzL1N0cmlwZUxvYWRlcic7XG5pbXBvcnQgU3R5bGVzaGVldExvYWRlciBmcm9tICcuL2V4dHJhcy9TdHlsZXNoZWV0TG9hZGVyJztcbmltcG9ydCBBc3NldExvYWRlciBmcm9tICcuL2V4dHJhcy9Bc3NldExvYWRlcic7XG5pbXBvcnQgRGF0YUNvbmZpZyBmcm9tICcuL2V4dHJhcy9EYXRhQ29uZmlnJztcblxuaWYgKHdpbmRvdy5Tbm93Ym9hcmQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignU25vd2JvYXJkIG11c3QgYmUgbG9hZGVkIGluIG9yZGVyIHRvIHVzZSB0aGUgZXh0cmEgcGx1Z2lucy4nKTtcbn1cblxuKChTbm93Ym9hcmQpID0+IHtcbiAgICBTbm93Ym9hcmQuYWRkUGx1Z2luKCdhc3NldExvYWRlcicsIEFzc2V0TG9hZGVyKTtcbiAgICBTbm93Ym9hcmQuYWRkUGx1Z2luKCdkYXRhQ29uZmlnJywgRGF0YUNvbmZpZyk7XG4gICAgU25vd2JvYXJkLmFkZFBsdWdpbignZXh0cmFzU3R5bGVzJywgU3R5bGVzaGVldExvYWRlcik7XG4gICAgU25vd2JvYXJkLmFkZFBsdWdpbigndHJhbnNpdGlvbicsIFRyYW5zaXRpb24pO1xuICAgIFNub3dib2FyZC5hZGRQbHVnaW4oJ2ZsYXNoJywgRmxhc2gpO1xuICAgIFNub3dib2FyZC5hZGRQbHVnaW4oJ2F0dGFjaExvYWRpbmcnLCBBdHRhY2hMb2FkaW5nKTtcbiAgICBTbm93Ym9hcmQuYWRkUGx1Z2luKCdzdHJpcGVMb2FkZXInLCBTdHJpcGVMb2FkZXIpO1xufSkod2luZG93LlNub3dib2FyZCk7XG4iLCJpbXBvcnQgU25vd2JvYXJkIGZyb20gJy4vbWFpbi9Tbm93Ym9hcmQnO1xuaW1wb3J0IFByb3h5SGFuZGxlciBmcm9tICcuL21haW4vUHJveHlIYW5kbGVyJztcblxuKCh3aW5kb3cpID0+IHtcbiAgICBjb25zdCBzbm93Ym9hcmQgPSBuZXcgUHJveHkoXG4gICAgICAgIG5ldyBTbm93Ym9hcmQoKSxcbiAgICAgICAgUHJveHlIYW5kbGVyLFxuICAgICk7XG5cbiAgICAvLyBDb3ZlciBhbGwgYWxpYXNlc1xuICAgIHdpbmRvdy5zbm93Ym9hcmQgPSBzbm93Ym9hcmQ7XG4gICAgd2luZG93LlNub3dib2FyZCA9IHNub3dib2FyZDtcbiAgICB3aW5kb3cuU25vd0JvYXJkID0gc25vd2JvYXJkO1xufSkod2luZG93KTtcbiIsImltcG9ydCBSZXF1ZXN0IGZyb20gJy4vYWpheC9SZXF1ZXN0JztcblxuaWYgKHdpbmRvdy5Tbm93Ym9hcmQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignU25vd2JvYXJkIG11c3QgYmUgbG9hZGVkIGluIG9yZGVyIHRvIHVzZSB0aGUgSmF2YXNjcmlwdCBBSkFYIHJlcXVlc3QgZmVhdHVyZS4nKTtcbn1cblxuKChTbm93Ym9hcmQpID0+IHtcbiAgICBTbm93Ym9hcmQuYWRkUGx1Z2luKCdyZXF1ZXN0JywgUmVxdWVzdCk7XG59KSh3aW5kb3cuU25vd2JvYXJkKTtcbiIsImltcG9ydCBCYXNlQ29va2llIGZyb20gJ2pzLWNvb2tpZSc7XG5pbXBvcnQgU2luZ2xldG9uIGZyb20gJy4uL2Fic3RyYWN0cy9TaW5nbGV0b24nO1xuXG4vKipcbiAqIENvb2tpZSB1dGlsaXR5LlxuICpcbiAqIFRoaXMgdXRpbGl0eSBpcyBhIHRoaW4gd3JhcHBlciBhcm91bmQgdGhlIFwianMtY29va2llXCIgbGlicmFyeS5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9qcy1jb29raWUvanMtY29va2llXG4gKiBAY29weXJpZ2h0IDIwMjEgV2ludGVyLlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29va2llIGV4dGVuZHMgU2luZ2xldG9uIHtcbiAgICBjb25zdHJ1Y3QoKSB7XG4gICAgICAgIHRoaXMuZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBleHBpcmVzOiBudWxsLFxuICAgICAgICAgICAgcGF0aDogJy8nLFxuICAgICAgICAgICAgZG9tYWluOiBudWxsLFxuICAgICAgICAgICAgc2VjdXJlOiBmYWxzZSxcbiAgICAgICAgICAgIHNhbWVTaXRlOiAnTGF4JyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGRlZmF1bHQgY29va2llIHBhcmFtZXRlcnMgZm9yIGFsbCBzdWJzZXF1ZW50IFwic2V0XCIgYW5kIFwicmVtb3ZlXCIgY2FsbHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqL1xuICAgIHNldERlZmF1bHRzKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb29raWUgZGVmYXVsdHMgbXVzdCBiZSBwcm92aWRlZCBhcyBhbiBvYmplY3QnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKG9wdGlvbnMpLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSBlbnRyeTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZGVmYXVsdHNba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWZhdWx0c1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY3VycmVudCBkZWZhdWx0IGNvb2tpZSBwYXJhbWV0ZXJzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBnZXREZWZhdWx0cygpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdHMgPSB7fTtcblxuICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLmRlZmF1bHRzKS5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgW2tleSwgdmFsdWVdID0gZW50cnk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmRlZmF1bHRzW2tleV0gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0c1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBkZWZhdWx0cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYSBjb29raWUgYnkgbmFtZS5cbiAgICAgKlxuICAgICAqIElmIGBuYW1lYCBpcyB1bmRlZmluZWQsIHJldHVybnMgYWxsIGNvb2tpZXMgYXMgYW4gT2JqZWN0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fFN0cmluZ31cbiAgICAgKi9cbiAgICBnZXQobmFtZSkge1xuICAgICAgICBpZiAobmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBjb29raWVzID0gQmFzZUNvb2tpZS5nZXQoKTtcblxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoY29va2llcykuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBbY29va2llTmFtZSwgY29va2llVmFsdWVdID0gZW50cnk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnY29va2llLmdldCcsIGNvb2tpZU5hbWUsIGNvb2tpZVZhbHVlLCAobmV3VmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29va2llc1tjb29raWVOYW1lXSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBjb29raWVzO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHZhbHVlID0gQmFzZUNvb2tpZS5nZXQobmFtZSk7XG5cbiAgICAgICAgLy8gQWxsb3cgcGx1Z2lucyB0byBvdmVycmlkZSB0aGUgZ290dGVuIHZhbHVlXG4gICAgICAgIHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdjb29raWUuZ2V0JywgbmFtZSwgdmFsdWUsIChuZXdWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBhIGNvb2tpZSBieSBuYW1lLlxuICAgICAqXG4gICAgICogWW91IGNhbiBzcGVjaWZ5IGFkZGl0aW9uYWwgY29va2llIHBhcmFtZXRlcnMgdGhyb3VnaCB0aGUgXCJvcHRpb25zXCIgcGFyYW1ldGVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgc2V0KG5hbWUsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICAgIGxldCBzYXZlVmFsdWUgPSB2YWx1ZTtcblxuICAgICAgICAvLyBBbGxvdyBwbHVnaW5zIHRvIG92ZXJyaWRlIHRoZSB2YWx1ZSB0byBzYXZlXG4gICAgICAgIHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdjb29raWUuc2V0JywgbmFtZSwgdmFsdWUsIChuZXdWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgc2F2ZVZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBCYXNlQ29va2llLnNldChuYW1lLCBzYXZlVmFsdWUsIHtcbiAgICAgICAgICAgIC4uLnRoaXMuZ2V0RGVmYXVsdHMoKSxcbiAgICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhIGNvb2tpZSBieSBuYW1lLlxuICAgICAqXG4gICAgICogWW91IGNhbiBzcGVjaWZ5IHRoZSBhZGRpdGlvbmFsIGNvb2tpZSBwYXJhbWV0ZXJzIHZpYSB0aGUgXCJvcHRpb25zXCIgcGFyYW1ldGVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIHJlbW92ZShuYW1lLCBvcHRpb25zKSB7XG4gICAgICAgIEJhc2VDb29raWUucmVtb3ZlKG5hbWUsIHtcbiAgICAgICAgICAgIC4uLnRoaXMuZ2V0RGVmYXVsdHMoKSxcbiAgICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCBTaW5nbGV0b24gZnJvbSAnLi4vYWJzdHJhY3RzL1NpbmdsZXRvbic7XG5cbi8qKlxuICogSlNPTiBQYXJzZXIgdXRpbGl0eS5cbiAqXG4gKiBUaGlzIHV0aWxpdHkgcGFyc2VzIEpTT04tbGlrZSBkYXRhIHRoYXQgZG9lcyBub3Qgc3RyaWN0bHkgbWVldCB0aGUgSlNPTiBzcGVjaWZpY2F0aW9ucyBpbiBvcmRlciB0byBzaW1wbGlmeSBkZXZlbG9wbWVudC5cbiAqIEl0IGlzIGEgc2FmZSByZXBsYWNlbWVudCBmb3IgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShldmFsKFwiKHtcIiArIHZhbHVlICsgXCJ9KVwiKSkpIHRoYXQgZG9lcyBub3QgcmVxdWlyZSB0aGUgdXNlIG9mIGV2YWwoKVxuICpcbiAqIEBhdXRob3IgQXl1bWkgSGFtYXNha2lcbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9vY3RvYmVyY21zL29jdG9iZXIvcHVsbC80NTI3XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpzb25QYXJzZXIgZXh0ZW5kcyBTaW5nbGV0b24ge1xuICAgIGNvbnN0cnVjdCgpIHtcbiAgICAgICAgLy8gQWRkIHRvIGdsb2JhbCBmdW5jdGlvbiBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbiAgICAgICAgd2luZG93LnduSlNPTiA9IChqc29uKSA9PiB0aGlzLnBhcnNlKGpzb24pO1xuICAgICAgICB3aW5kb3cub2NKU09OID0gd2luZG93LnduSlNPTjtcbiAgICB9XG5cbiAgICBwYXJzZShzdHIpIHtcbiAgICAgICAgY29uc3QganNvblN0cmluZyA9IHRoaXMucGFyc2VTdHJpbmcoc3RyKTtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoanNvblN0cmluZyk7XG4gICAgfVxuXG4gICAgcGFyc2VTdHJpbmcodmFsdWUpIHtcbiAgICAgICAgbGV0IHN0ciA9IHZhbHVlLnRyaW0oKTtcblxuICAgICAgICBpZiAoIXN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQnJva2VuIEpTT04gb2JqZWN0LicpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgICAgICBsZXQgdHlwZSA9IG51bGw7XG4gICAgICAgIGxldCBrZXkgPSBudWxsO1xuICAgICAgICBsZXQgYm9keSA9ICcnO1xuXG4gICAgICAgIC8qXG4gICAgICAgICogdGhlIG1pc3Rha2UgJywnXG4gICAgICAgICovXG4gICAgICAgIHdoaWxlIChzdHIgJiYgc3RyWzBdID09PSAnLCcpIHtcbiAgICAgICAgICAgIHN0ciA9IHN0ci5zdWJzdHIoMSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKlxuICAgICAgICAqIHN0cmluZ1xuICAgICAgICAqL1xuICAgICAgICBpZiAoc3RyWzBdID09PSAnXCInIHx8IHN0clswXSA9PT0gJ1xcJycpIHtcbiAgICAgICAgICAgIGlmIChzdHJbc3RyLmxlbmd0aCAtIDFdICE9PSBzdHJbMF0pIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nIEpTT04gb2JqZWN0LicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBib2R5ID0gJ1wiJztcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc3RyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltpXSA9PT0gJ1xcXFwnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaSArIDFdID09PSAnXFwnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keSArPSBzdHJbaSArIDFdO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keSArPSBzdHJbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5ICs9IHN0cltpICsgMV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaSArPSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RyW2ldID09PSBzdHJbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keSArPSAnXCInO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYm9keTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0cltpXSA9PT0gJ1wiJykge1xuICAgICAgICAgICAgICAgICAgICBib2R5ICs9ICdcXFxcXCInO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHkgKz0gc3RyW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0cmluZyBKU09OIG9iamVjdC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qXG4gICAgICAgICogYm9vbGVhblxuICAgICAgICAqL1xuICAgICAgICBpZiAoc3RyID09PSAndHJ1ZScgfHwgc3RyID09PSAnZmFsc2UnKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyO1xuICAgICAgICB9XG5cbiAgICAgICAgLypcbiAgICAgICAgKiBudWxsXG4gICAgICAgICovXG4gICAgICAgIGlmIChzdHIgPT09ICdudWxsJykge1xuICAgICAgICAgICAgcmV0dXJuICdudWxsJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qXG4gICAgICAgICogbnVtYmVyXG4gICAgICAgICovXG4gICAgICAgIGNvbnN0IG51bSA9IE51bWJlcihzdHIpO1xuICAgICAgICBpZiAoIU51bWJlci5pc05hTihudW0pKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKlxuICAgICAgICAqIG9iamVjdFxuICAgICAgICAqL1xuICAgICAgICBpZiAoc3RyWzBdID09PSAneycpIHtcbiAgICAgICAgICAgIHR5cGUgPSAnbmVlZEtleSc7XG4gICAgICAgICAgICBrZXkgPSBudWxsO1xuICAgICAgICAgICAgcmVzdWx0ID0gJ3snO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHN0ci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQmxhbmtDaGFyKHN0cltpXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ25lZWRLZXknICYmIChzdHJbaV0gPT09ICdcIicgfHwgc3RyW2ldID09PSAnXFwnJykpIHtcbiAgICAgICAgICAgICAgICAgICAga2V5ID0gdGhpcy5wYXJzZUtleShzdHIsIGkgKyAxLCBzdHJbaV0pO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gYFwiJHtrZXl9XCJgO1xuICAgICAgICAgICAgICAgICAgICBpICs9IGtleS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGkgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9ICdhZnRlcktleSc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnbmVlZEtleScgJiYgdGhpcy5jYW5CZUtleUhlYWQoc3RyW2ldKSkge1xuICAgICAgICAgICAgICAgICAgICBrZXkgPSB0aGlzLnBhcnNlS2V5KHN0ciwgaSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnXCInO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0ga2V5O1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gJ1wiJztcbiAgICAgICAgICAgICAgICAgICAgaSArPSBrZXkubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9ICdhZnRlcktleSc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnYWZ0ZXJLZXknICYmIHN0cltpXSA9PT0gJzonKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnOic7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSAnOic7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnOicpIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keSA9IHRoaXMuZ2V0Qm9keShzdHIsIGkpO1xuXG4gICAgICAgICAgICAgICAgICAgIGkgPSBpICsgYm9keS5vcmlnaW5MZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gdGhpcy5wYXJzZVN0cmluZyhib2R5LmJvZHkpO1xuXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSAnYWZ0ZXJCb2R5JztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdhZnRlckJvZHknIHx8IHR5cGUgPT09ICduZWVkS2V5Jykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbGFzdCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChzdHJbbGFzdF0gPT09ICcsJyB8fCB0aGlzLmlzQmxhbmtDaGFyKHN0cltsYXN0XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3QgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2xhc3RdID09PSAnfScgJiYgbGFzdCA9PT0gc3RyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChyZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdID09PSAnLCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuc3Vic3RyKDAsIHJlc3VsdC5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnfSc7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXN0ICE9PSBpICYmIHJlc3VsdCAhPT0gJ3snKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gJywnO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9ICduZWVkS2V5JztcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSBsYXN0IC0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBCcm9rZW4gSlNPTiBvYmplY3QgbmVhciAke3Jlc3VsdH1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qXG4gICAgICAgICogYXJyYXlcbiAgICAgICAgKi9cbiAgICAgICAgaWYgKHN0clswXSA9PT0gJ1snKSB7XG4gICAgICAgICAgICByZXN1bHQgPSAnWyc7XG4gICAgICAgICAgICB0eXBlID0gJ25lZWRCb2R5JztcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc3RyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltpXSA9PT0gJyAnIHx8IHN0cltpXSA9PT0gJ1xcbicgfHwgc3RyW2ldID09PSAnXFx0Jykge1xuICAgICAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnbmVlZEJvZHknKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaV0gPT09ICcsJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9ICdudWxsLCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaV0gPT09ICddJyAmJiBpID09PSBzdHIubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV0gPT09ICcsJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5zdWJzdHIoMCwgcmVzdWx0Lmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9ICddJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBib2R5ID0gdGhpcy5nZXRCb2R5KHN0ciwgaSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaSA9IGkgKyBib2R5Lm9yaWdpbkxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSB0aGlzLnBhcnNlU3RyaW5nKGJvZHkuYm9keSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9ICdhZnRlckJvZHknO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2FmdGVyQm9keScpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltpXSA9PT0gJywnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gJywnO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9ICduZWVkQm9keSc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRlYWwgd2l0aCBtaXN0YWtlIFwiLFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoc3RyW2kgKyAxXSA9PT0gJywnIHx8IHRoaXMuaXNCbGFua0NoYXIoc3RyW2kgKyAxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2kgKyAxXSA9PT0gJywnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnbnVsbCwnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpICs9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RyW2ldID09PSAnXScgJiYgaSA9PT0gc3RyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnXSc7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEJyb2tlbiBKU09OIGFycmF5IG5lYXIgJHtyZXN1bHR9YCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgZ2V0Qm9keShzdHIsIHBvcykge1xuICAgICAgICBsZXQgYm9keSA9ICcnO1xuXG4gICAgICAgIC8vIHBhcnNlIHN0cmluZyBib2R5XG4gICAgICAgIGlmIChzdHJbcG9zXSA9PT0gJ1wiJyB8fCBzdHJbcG9zXSA9PT0gJ1xcJycpIHtcbiAgICAgICAgICAgIGJvZHkgPSBzdHJbcG9zXTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHBvcyArIDE7IGkgPCBzdHIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2ldID09PSAnXFxcXCcpIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keSArPSBzdHJbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChpICsgMSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkgKz0gc3RyW2kgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpICs9IDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdHJbaV0gPT09IHN0cltwb3NdKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHkgKz0gc3RyW3Bvc107XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5MZW5ndGg6IGJvZHkubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBib2R5ICs9IHN0cltpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQnJva2VuIEpTT04gc3RyaW5nIGJvZHkgbmVhciAke2JvZHl9YCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwYXJzZSB0cnVlIC8gZmFsc2VcbiAgICAgICAgaWYgKHN0cltwb3NdID09PSAndCcpIHtcbiAgICAgICAgICAgIGlmIChzdHIuaW5kZXhPZigndHJ1ZScsIHBvcykgPT09IHBvcykge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbkxlbmd0aDogJ3RydWUnLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogJ3RydWUnLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQnJva2VuIEpTT04gYm9vbGVhbiBib2R5IG5lYXIgJHtzdHIuc3Vic3RyKDAsIHBvcyArIDEwKX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RyW3Bvc10gPT09ICdmJykge1xuICAgICAgICAgICAgaWYgKHN0ci5pbmRleE9mKCdmJywgcG9zKSA9PT0gcG9zKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luTGVuZ3RoOiAnZmFsc2UnLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogJ2ZhbHNlJyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEJyb2tlbiBKU09OIGJvb2xlYW4gYm9keSBuZWFyICR7c3RyLnN1YnN0cigwLCBwb3MgKyAxMCl9YCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwYXJzZSBudWxsXG4gICAgICAgIGlmIChzdHJbcG9zXSA9PT0gJ24nKSB7XG4gICAgICAgICAgICBpZiAoc3RyLmluZGV4T2YoJ251bGwnLCBwb3MpID09PSBwb3MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBvcmlnaW5MZW5ndGg6ICdudWxsJy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6ICdudWxsJyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEJyb2tlbiBKU09OIGJvb2xlYW4gYm9keSBuZWFyICR7c3RyLnN1YnN0cigwLCBwb3MgKyAxMCl9YCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwYXJzZSBudW1iZXJcbiAgICAgICAgaWYgKHN0cltwb3NdID09PSAnLScgfHwgc3RyW3Bvc10gPT09ICcrJyB8fCBzdHJbcG9zXSA9PT0gJy4nIHx8IChzdHJbcG9zXSA+PSAnMCcgJiYgc3RyW3Bvc10gPD0gJzknKSkge1xuICAgICAgICAgICAgYm9keSA9ICcnO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gcG9zOyBpIDwgc3RyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltpXSA9PT0gJy0nIHx8IHN0cltpXSA9PT0gJysnIHx8IHN0cltpXSA9PT0gJy4nIHx8IChzdHJbaV0gPj0gJzAnICYmIHN0cltpXSA8PSAnOScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHkgKz0gc3RyW2ldO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5MZW5ndGg6IGJvZHkubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQnJva2VuIEpTT04gbnVtYmVyIGJvZHkgbmVhciAke2JvZHl9YCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwYXJzZSBvYmplY3RcbiAgICAgICAgaWYgKHN0cltwb3NdID09PSAneycgfHwgc3RyW3Bvc10gPT09ICdbJykge1xuICAgICAgICAgICAgY29uc3Qgc3RhY2sgPSBbXG4gICAgICAgICAgICAgICAgc3RyW3Bvc10sXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgYm9keSA9IHN0cltwb3NdO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gcG9zICsgMTsgaSA8IHN0ci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGJvZHkgKz0gc3RyW2ldO1xuICAgICAgICAgICAgICAgIGlmIChzdHJbaV0gPT09ICdcXFxcJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSArIDEgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5ICs9IHN0cltpICsgMV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaSArPSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RyW2ldID09PSAnXCInKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGFja1tzdGFjay5sZW5ndGggLSAxXSA9PT0gJ1wiJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0gIT09ICdcXCcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKHN0cltpXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0cltpXSA9PT0gJ1xcJycpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdID09PSAnXFwnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0gIT09ICdcIicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goc3RyW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0gIT09ICdcIicgJiYgc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0gIT09ICdcXCcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaV0gPT09ICd7Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaCgneycpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0cltpXSA9PT0gJ30nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0gPT09ICd7Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEJyb2tlbiBKU09OICR7KHN0cltwb3NdID09PSAneycgPyAnb2JqZWN0JyA6ICdhcnJheScpfSBib2R5IG5lYXIgJHtib2R5fWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0cltpXSA9PT0gJ1snKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKCdbJyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RyW2ldID09PSAnXScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGFja1tzdGFjay5sZW5ndGggLSAxXSA9PT0gJ1snKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQnJva2VuIEpTT04gJHsoc3RyW3Bvc10gPT09ICd7JyA/ICdvYmplY3QnIDogJ2FycmF5Jyl9IGJvZHkgbmVhciAke2JvZHl9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFzdGFjay5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbkxlbmd0aDogaSAtIHBvcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHksXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEJyb2tlbiBKU09OICR7KHN0cltwb3NdID09PSAneycgPyAnb2JqZWN0JyA6ICdhcnJheScpfSBib2R5IG5lYXIgJHtib2R5fWApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBCcm9rZW4gSlNPTiBib2R5IG5lYXIgJHtzdHIuc3Vic3RyKChwb3MgLSA1ID49IDApID8gcG9zIC0gNSA6IDAsIDUwKX1gKTtcbiAgICB9XG5cbiAgICBwYXJzZUtleShzdHIsIHBvcywgcXVvdGUpIHtcbiAgICAgICAgbGV0IGtleSA9ICcnO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSBwb3M7IGkgPCBzdHIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmIChxdW90ZSAmJiBxdW90ZSA9PT0gc3RyW2ldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcXVvdGUgJiYgKHN0cltpXSA9PT0gJyAnIHx8IHN0cltpXSA9PT0gJzonKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGtleSArPSBzdHJbaV07XG5cbiAgICAgICAgICAgIGlmIChzdHJbaV0gPT09ICdcXFxcJyAmJiBpICsgMSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBrZXkgKz0gc3RyW2kgKyAxXTtcbiAgICAgICAgICAgICAgICBpICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEJyb2tlbiBKU09OIHN5bnRheCBuZWFyICR7a2V5fWApO1xuICAgIH1cblxuICAgIGNhbkJlS2V5SGVhZChjaCkge1xuICAgICAgICBpZiAoY2hbMF0gPT09ICdcXFxcJykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoY2hbMF0gPj0gJ2EnICYmIGNoWzBdIDw9ICd6JykgfHwgKGNoWzBdID49ICdBJyAmJiBjaFswXSA8PSAnWicpIHx8IGNoWzBdID09PSAnXycpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaFswXSA+PSAnMCcgJiYgY2hbMF0gPD0gJzknKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hbMF0gPT09ICckJykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoLmNoYXJDb2RlQXQoMCkgPiAyNTUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlzQmxhbmtDaGFyKGNoKSB7XG4gICAgICAgIHJldHVybiBjaCA9PT0gJyAnIHx8IGNoID09PSAnXFxuJyB8fCBjaCA9PT0gJ1xcdCc7XG4gICAgfVxufVxuIiwiaW1wb3J0IFNpbmdsZXRvbiBmcm9tICcuLi9hYnN0cmFjdHMvU2luZ2xldG9uJztcblxuLyoqXG4gKiBTYW5pdGl6ZXIgdXRpbGl0eS5cbiAqXG4gKiBDbGllbnQtc2lkZSBIVE1MIHNhbml0aXplciBkZXNpZ25lZCBtb3N0bHkgdG8gcHJldmVudCBzZWxmLVhTUyBhdHRhY2tzLlxuICogVGhlIHNhbml0aXplciB1dGlsaXR5IHdpbGwgc3RyaXAgYWxsIGF0dHJpYnV0ZXMgdGhhdCBzdGFydCB3aXRoIGBvbmAgKHVzdWFsbHkgSlMgZXZlbnQgaGFuZGxlcnMgYXMgYXR0cmlidXRlcywgaS5lLiBgb25sb2FkYCBvciBgb25lcnJvcmApIG9yIGNvbnRhaW4gdGhlIGBqYXZhc2NyaXB0OmAgcHNldWRvIHByb3RvY29sIGluIHRoZWlyIHZhbHVlcy5cbiAqXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTYW5pdGl6ZXIgZXh0ZW5kcyBTaW5nbGV0b24ge1xuICAgIGNvbnN0cnVjdCgpIHtcbiAgICAgICAgLy8gQWRkIHRvIGdsb2JhbCBmdW5jdGlvbiBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbiAgICAgICAgd2luZG93LnduU2FuaXRpemUgPSAoaHRtbCkgPT4gdGhpcy5zYW5pdGl6ZShodG1sKTtcbiAgICAgICAgd2luZG93Lm9jU2FuaXRpemUgPSB3aW5kb3cud25TYW5pdGl6ZTtcbiAgICB9XG5cbiAgICBzYW5pdGl6ZShodG1sLCBib2R5T25seSkge1xuICAgICAgICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgICAgIGNvbnN0IGRvbSA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoaHRtbCwgJ3RleHQvaHRtbCcpO1xuICAgICAgICBjb25zdCByZXR1cm5Cb2R5T25seSA9IChib2R5T25seSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBib2R5T25seSA9PT0gJ2Jvb2xlYW4nKVxuICAgICAgICAgICAgPyBib2R5T25seVxuICAgICAgICAgICAgOiB0cnVlO1xuXG4gICAgICAgIHRoaXMuc2FuaXRpemVOb2RlKGRvbS5nZXRSb290Tm9kZSgpKTtcblxuICAgICAgICByZXR1cm4gKHJldHVybkJvZHlPbmx5KSA/IGRvbS5ib2R5LmlubmVySFRNTCA6IGRvbS5pbm5lckhUTUw7XG4gICAgfVxuXG4gICAgc2FuaXRpemVOb2RlKG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUudGFnTmFtZSA9PT0gJ1NDUklQVCcpIHtcbiAgICAgICAgICAgIG5vZGUucmVtb3ZlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRyaW1BdHRyaWJ1dGVzKG5vZGUpO1xuXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gQXJyYXkuZnJvbShub2RlLmNoaWxkcmVuKTtcblxuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zYW5pdGl6ZU5vZGUoY2hpbGQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0cmltQXR0cmlidXRlcyhub2RlKSB7XG4gICAgICAgIGlmICghbm9kZS5hdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGUuYXR0cmlidXRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgY29uc3QgYXR0ck5hbWUgPSBub2RlLmF0dHJpYnV0ZXMuaXRlbShpKS5uYW1lO1xuICAgICAgICAgICAgY29uc3QgYXR0clZhbHVlID0gbm9kZS5hdHRyaWJ1dGVzLml0ZW0oaSkudmFsdWU7XG5cbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAqIHJlbW92ZSBhdHRyaWJ1dGVzIHdoZXJlIHRoZSBuYW1lcyBzdGFydCB3aXRoIFwib25cIiAoZm9yIGV4YW1wbGU6IG9ubG9hZCwgb25lcnJvci4uLilcbiAgICAgICAgICAgICogcmVtb3ZlIGF0dHJpYnV0ZXMgd2hlcmUgdGhlIHZhbHVlIHN0YXJ0cyB3aXRoIHRoZSBcImphdmFzY3JpcHQ6XCIgcHNldWRvIHByb3RvY29sIChmb3IgZXhhbXBsZSBocmVmPVwiamF2YXNjcmlwdDphbGVydCgxKVwiKVxuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuICAgICAgICAgICAgaWYgKGF0dHJOYW1lLmluZGV4T2YoJ29uJykgPT09IDAgfHwgYXR0clZhbHVlLmluZGV4T2YoJ2phdmFzY3JpcHQ6JykgPT09IDApIHtcbiAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgU2luZ2xldG9uIGZyb20gJy4uL2Fic3RyYWN0cy9TaW5nbGV0b24nO1xuXG4vKipcbiAqIFVSTCB1dGlsaXR5LlxuICpcbiAqIFRoaXMgdXRpbGl0eSBwcm92aWRlcyBVUkwgZnVuY3Rpb25zLlxuICpcbiAqIEBjb3B5cmlnaHQgMjAyMiBXaW50ZXIuXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVcmwgZXh0ZW5kcyBTaW5nbGV0b24ge1xuICAgIGNvbnN0cnVjdCgpIHtcbiAgICAgICAgdGhpcy5mb3VuZEJhc2VVcmwgPSBudWxsO1xuICAgICAgICB0aGlzLmZvdW5kQXNzZXRVcmwgPSBudWxsO1xuICAgICAgICB0aGlzLmJhc2VVcmwoKTtcbiAgICAgICAgdGhpcy5hc3NldFVybCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgYSBVUkwgYmFzZWQgb24gYSByZWxhdGl2ZSBwYXRoLlxuICAgICAqXG4gICAgICogSWYgYW4gYWJzb2x1dGUgVVJMIGlzIHByb3ZpZGVkLCBpdCB3aWxsIGJlIHJldHVybmVkIHVuY2hhbmdlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRvKHVybCkge1xuICAgICAgICBjb25zdCB1cmxSZWdleCA9IC9eKD86W146XSs6XFwvXFwvKVstYS16MC05QDolLl8rfiM9XXsxLDI1Nn1cXGIoWy1hLXowLTkoKUA6JV8rLn4jPyYvLz1dKikvaTtcblxuICAgICAgICBpZiAodXJsLm1hdGNoKHVybFJlZ2V4KSkge1xuICAgICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRoZVVybCA9IHVybC5yZXBsYWNlKC9eXFwvKy8sICcnKTtcblxuICAgICAgICByZXR1cm4gYCR7dGhpcy5iYXNlVXJsKCl9JHt0aGVVcmx9YDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGFuIEFzc2V0IFVSTCBiYXNlZCBvbiBhIHJlbGF0aXZlIHBhdGguXG4gICAgICpcbiAgICAgKiBJZiBhbiBhYnNvbHV0ZSBVUkwgaXMgcHJvdmlkZWQsIGl0IHdpbGwgYmUgcmV0dXJuZWQgdW5jaGFuZ2VkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgYXNzZXQodXJsKSB7XG4gICAgICAgIGNvbnN0IHVybFJlZ2V4ID0gL14oPzpbXjpdKzpcXC9cXC8pWy1hLXowLTlAOiUuXyt+Iz1dezEsMjU2fVxcYihbLWEtejAtOSgpQDolXysufiM/Ji8vPV0qKS9pO1xuXG4gICAgICAgIGlmICh1cmwubWF0Y2godXJsUmVnZXgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGhlVXJsID0gdXJsLnJlcGxhY2UoL15cXC8rLywgJycpO1xuXG4gICAgICAgIHJldHVybiBgJHt0aGlzLmFzc2V0VXJsKCl9JHt0aGVVcmx9YDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgbWV0aG9kIHRvIGdldCB0aGUgYmFzZSBVUkwgb2YgdGhpcyBpbnN0YWxsLlxuICAgICAqXG4gICAgICogVGhpcyBkZXRlcm1pbmVzIHRoZSBiYXNlIFVSTCBmcm9tIHRocmVlIHNvdXJjZXMsIGluIG9yZGVyOlxuICAgICAqICAtIElmIFNub3dib2FyZCBpcyBsb2FkZWQgdmlhIHRoZSBgeyUgc25vd2JvYXJkICV9YCB0YWcsIGl0IHdpbGwgcmV0cmlldmUgdGhlIGJhc2UgVVJMIHRoYXRcbiAgICAgKiBpcyBhdXRvbWF0aWNhbGx5IGluY2x1ZGVkIHRoZXJlLlxuICAgICAqICAtIElmIGEgYDxiYXNlPmAgdGFnIGlzIGF2YWlsYWJsZSwgaXQgd2lsbCB1c2UgdGhlIFVSTCBzcGVjaWZpZWQgaW4gdGhlIGJhc2UgdGFnLlxuICAgICAqICAtIEZpbmFsbHksIGl0IHdpbGwgdGFrZSBhIGd1ZXNzIGZyb20gdGhlIGN1cnJlbnQgbG9jYXRpb24uIFRoaXMgd2lsbCBsaWtlbHkgbm90IHdvcmsgZm9yIHNpdGVzXG4gICAgICogdGhhdCByZXNpZGUgaW4gc3ViZGlyZWN0b3JpZXMuXG4gICAgICpcbiAgICAgKiBUaGUgYmFzZSBVUkwgd2lsbCBhbHdheXMgY29udGFpbiBhIHRyYWlsaW5nIGJhY2tzbGFzaC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgYmFzZVVybCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZm91bmRCYXNlVXJsICE9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb3VuZEJhc2VVcmw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2NyaXB0W2RhdGEtbW9kdWxlPVwic25vd2JvYXJkLWJhc2VcIl0nKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5mb3VuZEJhc2VVcmwgPSB0aGlzLnZhbGlkYXRlQmFzZVVybChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbZGF0YS1tb2R1bGU9XCJzbm93Ym9hcmQtYmFzZVwiXScpLmRhdGFzZXQuYmFzZVVybCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb3VuZEJhc2VVcmw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYmFzZScpICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmZvdW5kQmFzZVVybCA9IHRoaXMudmFsaWRhdGVCYXNlVXJsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Jhc2UnKS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb3VuZEJhc2VVcmw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1cmxQYXJ0cyA9IFtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCxcbiAgICAgICAgICAgICcvLycsXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaG9zdCxcbiAgICAgICAgICAgICcvJyxcbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy5mb3VuZEJhc2VVcmwgPSB1cmxQYXJ0cy5qb2luKCcnKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5mb3VuZEJhc2VVcmw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGVscGVyIG1ldGhvZCB0byBnZXQgdGhlIGFzc2V0IFVSTCBvZiB0aGlzIGluc3RhbGwuXG4gICAgICpcbiAgICAgKiBUaGlzIGRldGVybWluZXMgdGhlIGJhc2UgVVJMIGZyb20gdGhyZWUgc291cmNlcywgaW4gb3JkZXI6XG4gICAgICogIC0gSWYgU25vd2JvYXJkIGlzIGxvYWRlZCB2aWEgdGhlIGB7JSBzbm93Ym9hcmQgJX1gIHRhZywgaXQgd2lsbCByZXRyaWV2ZSB0aGUgYXNzZXQgVVJMIHRoYXRcbiAgICAgKiBpcyBhdXRvbWF0aWNhbGx5IGluY2x1ZGVkIHRoZXJlLlxuICAgICAqICAtIElmIGEgYDxsaW5rIHJlbD1cImFzc2V0X3VybFwiIGhyZWY9XCJodHRwczovL2V4YW1wbGUuY29tXCI+YCB0YWcgaXMgYXZhaWxhYmxlLCBpdCB3aWxsIHVzZSB0aGUgVVJMIHNwZWNpZmllZCBpbiB0aGUgbGluayB0YWcuXG4gICAgICogIC0gRmluYWxseSwgaXQgd2lsbCB0YWtlIGEgZ3Vlc3MgZnJvbSB0aGUgY3VycmVudCBsb2NhdGlvbi4gVGhpcyB3aWxsIGxpa2VseSBub3Qgd29yayBmb3Igc2l0ZXNcbiAgICAgKiB0aGF0IHJlc2lkZSBpbiBzdWJkaXJlY3Rvcmllcy5cbiAgICAgKlxuICAgICAqIFRoZSBhc3NldCBVUkwgd2lsbCBhbHdheXMgY29udGFpbiBhIHRyYWlsaW5nIGJhY2tzbGFzaC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgYXNzZXRVcmwoKSB7XG4gICAgICAgIGlmICh0aGlzLmZvdW5kQXNzZXRVcmwgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvdW5kQXNzZXRVcmw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2NyaXB0W2RhdGEtbW9kdWxlPVwic25vd2JvYXJkLWJhc2VcIl0nKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5mb3VuZEFzc2V0VXJsID0gdGhpcy52YWxpZGF0ZUJhc2VVcmwoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2NyaXB0W2RhdGEtbW9kdWxlPVwic25vd2JvYXJkLWJhc2VcIl0nKS5kYXRhc2V0LmFzc2V0VXJsKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvdW5kQXNzZXRVcmw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGlua1tyZWw9XCJhc3NldF91cmxcIl0nKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5mb3VuZEFzc2V0VXJsID0gdGhpcy52YWxpZGF0ZUJhc2VVcmwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGlua1tyZWw9XCJhc3NldF91cmxcIl0nKS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb3VuZEFzc2V0VXJsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXJsUGFydHMgPSBbXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wsXG4gICAgICAgICAgICAnLy8nLFxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhvc3QsXG4gICAgICAgICAgICAnLycsXG4gICAgICAgIF07XG4gICAgICAgIHRoaXMuZm91bmRBc3NldFVybCA9IHVybFBhcnRzLmpvaW4oJycpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmZvdW5kQXNzZXRVcmw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVmFsaWRhdGVzIHRoZSBiYXNlIFVSTCwgZW5zdXJpbmcgaXQgaXMgYSBIVFRQL0hUVFBzIFVSTC5cbiAgICAgKlxuICAgICAqIElmIHRoZSBTbm93Ym9hcmQgc2NyaXB0IG9yIDxiYXNlPiB0YWcgb24gdGhlIHBhZ2UgdXNlIGEgZGlmZmVyZW50IHR5cGUgb2YgVVJMLCB0aGlzIHdpbGwgZmFpbCB3aXRoXG4gICAgICogYW4gZXJyb3IuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICB2YWxpZGF0ZUJhc2VVcmwodXJsKSB7XG4gICAgICAgIGNvbnN0IHVybFJlZ2V4ID0gL14oKFteOi8/I10rKTopPyhcXC9cXC8oW14vPyNdKikpPyhbXj8jXSopKFxcPyhbXiNdKikpPygjKC4qKSk/L2k7XG4gICAgICAgIGNvbnN0IHVybFBhcnRzID0gdXJsUmVnZXguZXhlYyh1cmwpO1xuICAgICAgICBjb25zdCBwcm90b2NvbCA9IHVybFBhcnRzWzJdO1xuICAgICAgICBjb25zdCBkb21haW4gPSB1cmxQYXJ0c1s0XTtcblxuICAgICAgICBpZiAocHJvdG9jb2wgJiYgWydodHRwJywgJ2h0dHBzJ10uaW5kZXhPZihwcm90b2NvbC50b0xvd2VyQ2FzZSgpKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBiYXNlIFVSTCBkZXRlY3RlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZG9tYWluKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYmFzZSBVUkwgZGV0ZWN0ZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAodXJsLnN1YnN0cigtMSkgPT09ICcvJylcbiAgICAgICAgICAgID8gdXJsXG4gICAgICAgICAgICA6IGAke3VybH0vYDtcbiAgICB9XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiUGx1Z2luQmFzZSIsInNub3dib2FyZCIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY29uc3RydWN0IiwiZGVwZW5kZW5jaWVzIiwibGlzdGVucyIsImRlc3RydWN0IiwiZGV0YWNoIiwiZGVzdHJ1Y3RvciIsImRlZmF1bHQiLCJTaW5nbGV0b24iLCJfUGx1Z2luQmFzZSIsIl9jYWxsU3VwZXIiLCJhcmd1bWVudHMiLCJfaW5oZXJpdHMiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIl9zbGljZWRUb0FycmF5IiwiX2FycmF5V2l0aEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlUmVzdCIsIl9hcnJheUxpa2VUb0FycmF5IiwidG9TdHJpbmciLCJBcnJheSIsImZyb20iLCJ0ZXN0IiwiaXNBcnJheSIsIm93bktleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJmaWx0ZXIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfb2JqZWN0U3ByZWFkIiwiX2RlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJfdG9Qcm9wZXJ0eUtleSIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwiX3RvUHJpbWl0aXZlIiwidG9QcmltaXRpdmUiLCJTdHJpbmciLCJOdW1iZXIiLCJfZ2V0UHJvdG90eXBlT2YiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIlJlZmVyZW5jZUVycm9yIiwiQm9vbGVhbiIsInZhbHVlT2YiLCJiaW5kIiwiX3NldFByb3RvdHlwZU9mIiwiUmVxdWVzdCIsImVsZW1lbnQiLCJoYW5kbGVyIiwib3B0aW9ucyIsIl90aGlzIiwiaXNIYW5kbGVyTmFtZSIsIm1hdGNoZWRFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29uY2F0IiwiZmV0Y2hPcHRpb25zIiwicmVzcG9uc2VEYXRhIiwicmVzcG9uc2VFcnJvciIsImNhbmNlbGxlZCIsImNoZWNrUmVxdWVzdCIsImdsb2JhbEV2ZW50IiwiZXZlbnQiLCJFdmVudCIsImNhbmNlbGFibGUiLCJyZXF1ZXN0IiwiZGlzcGF0Y2hFdmVudCIsImRlZmF1bHRQcmV2ZW50ZWQiLCJkb0NsaWVudFZhbGlkYXRpb24iLCJjb25maXJtIiwiZG9Db25maXJtIiwiY29uZmlybWVkIiwiZG9BamF4IiwicmVzcG9uc2UiLCJwcm9jZXNzVXBkYXRlIiwiWF9XSU5URVJfU1VDQ0VTUyIsInByb2Nlc3NFcnJvciIsInByb2Nlc3NSZXNwb25zZSIsImVycm9yIiwiRWxlbWVudCIsInVuZGVmaW5lZCIsImdldEZldGNoIiwiaGVhZGVycyIsImJvZHkiLCJkYXRhIiwicmVkaXJlY3QiLCJtb2RlIiwiZmV0Y2giLCJ1cmwiLCJicm93c2VyVmFsaWRhdGUiLCJmb3JtIiwiY2hlY2tWYWxpZGl0eSIsInJlcG9ydFZhbGlkaXR5IiwiX3RoaXMyIiwiYWpheFByb21pc2UiLCJyZWplY3QiLCJvayIsInN0YXR1cyIsImhhcyIsImdldCIsImluY2x1ZGVzIiwianNvbiIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJyZW5kZXJFcnJvciIsImZpbGUiLCJsaW5lIiwidHJhY2UiLCJ0ZXh0IiwicmVzcG9uc2VUZXh0IiwiWF9XSU5URVJfUkVTUE9OU0VfQ09ERSIsInByb21pc2UiLCJfdGhpczMiLCJiZWZvcmVVcGRhdGUiLCJwYXJ0aWFscyIsImVudHJpZXMiLCJlbnRyeSIsIl9lbnRyeSIsInN1YnN0ciIsIlhfV0lOVEVSX0FTU0VUUyIsInByb2Nlc3NBc3NldHMiLCJwcm9taXNlcyIsImdsb2JhbFByb21pc2VFdmVudCIsIl9jYWxsZWUiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiZG9VcGRhdGUiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJfdGhpczQiLCJhZmZlY3RlZCIsIl9lbnRyeTIiLCJwYXJ0aWFsIiwiY29udGVudCIsInNlbGVjdG9yIiwidXBkYXRlIiwiZWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5uZXJIVE1MIiwic3VjY2VzcyIsImZsYXNoIiwiWF9XSU5URVJfRkxBU0hfTUVTU0FHRVMiLCJwcm9jZXNzRmxhc2hNZXNzYWdlcyIsIlhfV0lOVEVSX1JFRElSRUNUIiwicHJvY2Vzc1JlZGlyZWN0IiwicHJvY2Vzc0Vycm9yTWVzc2FnZSIsInNraXBFcnJvciIsIlhfV0lOVEVSX0VSUk9SX0ZJRUxEUyIsInByb2Nlc3NWYWxpZGF0aW9uRXJyb3JzIiwiWF9XSU5URVJfRVJST1JfTUVTU0FHRSIsIl90aGlzNSIsImhhbmRsZVJlZGlyZWN0UmVzcG9uc2UiLCJhZGRFdmVudExpc3RlbmVyIiwiY3JlYXRlRXZlbnQiLCJldmVudE5hbWUiLCJvbmNlIiwibG9jYXRpb24iLCJhc3NpZ24iLCJoYW5kbGVFcnJvck1lc3NhZ2UiLCJhbGVydCIsIm1lc3NhZ2VzIiwiaGFuZGxlRmxhc2hNZXNzYWdlcyIsImZpZWxkcyIsImhhbmRsZVZhbGlkYXRpb25FcnJvcnMiLCJhc3NldHMiLCJfZG9Db25maXJtIiwiX2NhbGxlZTIiLCJmdWxmaWxsZWQiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJoYW5kbGVDb25maXJtTWVzc2FnZSIsImxpc3RlbnNUb0V2ZW50IiwidDAiLCJ0YWdOYW1lIiwiY2xvc2VzdCIsImV4dHJhY3RQYXJ0aWFscyIsInhzcmZUb2tlbiIsImxvYWRpbmciLCJocmVmIiwiZmlsZXMiLCJGb3JtRGF0YSIsImRlYnVnIiwiY29va2llIiwiZm9ybURhdGEiLCJfZW50cnkzIiwiYXBwZW5kIiwiam9pbiIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX24iLCJGIiwiQXNzZXRMb2FkZXIiLCJfU2luZ2xldG9uIiwiYWpheExvYWRBc3NldHMiLCJfbG9hZCIsIl9pdGVyYXRvciIsIl9zdGVwIiwic2NyaXB0IiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsInN0eWxlIiwiX2l0ZXJhdG9yMyIsIl9zdGVwMyIsImltYWdlIiwianMiLCJsb2FkU2NyaXB0IiwidDEiLCJjc3MiLCJsb2FkU3R5bGUiLCJ0MiIsInQzIiwiaW1nIiwibG9hZEltYWdlIiwidDQiLCJ0NSIsImxvYWQiLCJfeCIsImFzc2V0IiwibG9hZGVkIiwiZG9tU2NyaXB0IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImRvbUNzcyIsImhlYWQiLCJJbWFnZSIsInNyYyIsIkF0dGFjaExvYWRpbmciLCJhamF4U3RhcnQiLCJhamF4RG9uZSIsImxvYWRFbGVtZW50cyIsImNsYXNzTGlzdCIsImFkZCIsImdldExvYWRpbmdDbGFzcyIsImRhdGFzZXQiLCJhdHRhY2hMb2FkaW5nIiwicmVtb3ZlIiwiRGF0YUNvbmZpZyIsImluc3RhbmNlIiwibG9jYWxDb25maWciLCJIVE1MRWxlbWVudCIsImluc3RhbmNlQ29uZmlnIiwiYWNjZXB0ZWRDb25maWdzIiwicmVmcmVzaCIsImNvbmZpZyIsInNldCIsInBlcnNpc3QiLCJnZXRBY2NlcHRlZENvbmZpZ3MiLCJwcm9jZXNzQ29uZmlnIiwiYWNjZXB0QWxsRGF0YUNvbmZpZ3MiLCJkZWZhdWx0cyIsImdldERlZmF1bHRzIiwiY29lcmNlVmFsdWUiLCJzdHJpbmdWYWx1ZSIsInN0YXJ0c1dpdGgiLCJiYXNlNjRzdHIiLCJyZXBsYWNlIiwiZGVjb2RlZCIsImF0b2IiLCJ0b0xvd2VyQ2FzZSIsImpzb25QYXJzZXIiLCJwYXJzZSIsIkZsYXNoIiwiZHVyYXRpb24iLCJjbGVhciIsInRpbWVyIiwiZmxhc2hUaW1lciIsImNsZWFyVGltZW91dCIsIl9nZXQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJzdG9wVGltZXIiLCJzdGFydFRpbWVyIiwiYXBwZW5kQ2hpbGQiLCJ0cmFuc2l0aW9uIiwidGltZXJUcmFucyIsInNldFRpbWVvdXQiLCJjYW5jZWwiLCJTdHJpcGVMb2FkZXIiLCJyZWFkeSIsImNvdW50ZXIiLCJjcmVhdGVTdHJpcGUiLCJzdHJpcGUiLCJzaG93IiwiaGlkZSIsImluZGljYXRvciIsInN0cmlwZUxvYWRlZCIsIm5ld1N0cmlwZSIsImNsb25lTm9kZSIsImZvcmNlIiwiU3R5bGVzaGVldExvYWRlciIsInN0eWxlc0xvYWRlZCIsImVuZHNXaXRoIiwic3R5bGVzaGVldCIsIlRyYW5zaXRpb24iLCJjYWxsYmFjayIsInRyYWlsVG8iLCJwYXJzZUR1cmF0aW9uIiwiZG9UcmFuc2l0aW9uIiwiZXZlbnRDbGFzc2VzIiwiX2xlbiIsImFyZ3MiLCJfa2V5IiwiYWN0aXZlIiwib3V0IiwicmV0dXJuQ2xhc3NlcyIsImluZGV4T2YiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJyZXNldENsYXNzZXMiLCJldmVudENsYXNzIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm9uVHJhbnNpdGlvbkVuZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJwYXJzZWQiLCJleGVjIiwiYW1vdW50IiwidW5pdCIsIk1hdGgiLCJmbG9vciIsInRhcmdldCIsInByb3AiLCJyZWNlaXZlciIsInByb3BMb3dlciIsImhhc1BsdWdpbiIsIl9SZWZsZWN0JGdldCRwcm9wTG93ZSIsImdldEluc3RhbmNlIiwiSW5uZXJQcm94eUhhbmRsZXIiLCJQbHVnaW5Mb2FkZXIiLCJQcm94eSIsImZyZWV6ZSIsImluc3RhbmNlcyIsInNpbmdsZXRvbiIsImluaXRpYWxpc2VkIiwic2VhbCIsIm1vY2tzIiwib3JpZ2luYWxGdW5jdGlvbnMiLCJoYXNNZXRob2QiLCJtZXRob2ROYW1lIiwiaXNGdW5jdGlvbiIsImNhbGxNZXRob2QiLCJwYXJhbWV0ZXJzIiwic2hpZnQiLCJfbGVuMiIsIl9rZXkyIiwiZGVwZW5kZW5jaWVzRnVsZmlsbGVkIiwidW5tZXQiLCJnZXREZXBlbmRlbmNpZXMiLCJpdGVtIiwiZ2V0UGx1Z2luTmFtZXMiLCJpc1NpbmdsZXRvbiIsImluaXRpYWxpc2VTaW5nbGV0b24iLCJfbGVuMyIsInBhcmFtcyIsIl9rZXkzIiwiX2VudHJ5NCIsIl9sZW40IiwiX2tleTQiLCJuZXdJbnN0YW5jZSIsIl9jb25zdHJ1Y3QiLCJzcGxpY2UiLCJnZXRJbnN0YW5jZXMiLCJpc0luaXRpYWxpc2VkIiwiX2xlbjUiLCJfa2V5NSIsIm1hcCIsInBsdWdpbiIsIm1vY2siLCJfbGVuNiIsIl9rZXk2IiwidW5tb2NrIiwiQ29va2llIiwiSnNvblBhcnNlciIsIlNhbml0aXplciIsIlVybCIsIlNub3dib2FyZCIsImF1dG9TaW5nbGV0b25zIiwiZGVidWdFbmFibGVkIiwiYXV0b0luaXRTaW5nbGV0b25zIiwicGx1Z2lucyIsImxpc3RlbmVycyIsImZvdW5kQmFzZVVybCIsInJlYWRpbmVzcyIsImRvbSIsImF0dGFjaEFic3RyYWN0cyIsImxvYWRVdGlsaXRpZXMiLCJpbml0aWFsaXNlIiwiYWRkUGx1Z2luIiwiaW5pdGlhbGlzZVNpbmdsZXRvbnMiLCJsb3dlck5hbWUiLCJnZXRQbHVnaW5zIiwicmVhZHlNZXRob2QiLCJyZW1vdmVQbHVnaW4iLCJnZXRQbHVnaW4iLCJvbiIsIm9mZiIsImluZGV4IiwibGlzdGVuTWV0aG9kIiwicmVzdWx0IiwibGlzdGVuZXIiLCJpbnN0YW5jZVByb21pc2UiLCJsaXN0ZW5lclByb21pc2UiLCJhbGwiLCJsb2dNZXNzYWdlIiwiY29sb3IiLCJib2xkIiwiY29uc29sZSIsImdyb3VwQ29sbGFwc2VkIiwicGFyYW0iLCJsb2ciLCJncm91cEVuZCIsIlByb3h5SGFuZGxlciIsIlNub3dCb2FyZCIsIkJhc2VDb29raWUiLCJleHBpcmVzIiwicGF0aCIsImRvbWFpbiIsInNlY3VyZSIsInNhbWVTaXRlIiwic2V0RGVmYXVsdHMiLCJjb29raWVzIiwiY29va2llTmFtZSIsImNvb2tpZVZhbHVlIiwibmV3VmFsdWUiLCJzYXZlVmFsdWUiLCJ3bkpTT04iLCJvY0pTT04iLCJzdHIiLCJqc29uU3RyaW5nIiwicGFyc2VTdHJpbmciLCJKU09OIiwidHJpbSIsIm51bSIsImlzQmxhbmtDaGFyIiwicGFyc2VLZXkiLCJjYW5CZUtleUhlYWQiLCJnZXRCb2R5Iiwib3JpZ2luTGVuZ3RoIiwibGFzdCIsInBvcyIsInN0YWNrIiwicXVvdGUiLCJjaCIsImNoYXJDb2RlQXQiLCJ3blNhbml0aXplIiwiaHRtbCIsInNhbml0aXplIiwib2NTYW5pdGl6ZSIsImJvZHlPbmx5IiwicGFyc2VyIiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwicmV0dXJuQm9keU9ubHkiLCJzYW5pdGl6ZU5vZGUiLCJnZXRSb290Tm9kZSIsIm5vZGUiLCJ0cmltQXR0cmlidXRlcyIsImNoaWxkcmVuIiwiY2hpbGQiLCJhdHRyaWJ1dGVzIiwiYXR0ck5hbWUiLCJhdHRyVmFsdWUiLCJmb3VuZEFzc2V0VXJsIiwiYmFzZVVybCIsImFzc2V0VXJsIiwidG8iLCJ1cmxSZWdleCIsIm1hdGNoIiwidGhlVXJsIiwidmFsaWRhdGVCYXNlVXJsIiwiZ2V0QXR0cmlidXRlIiwidXJsUGFydHMiLCJwcm90b2NvbCIsImhvc3QiXSwic291cmNlUm9vdCI6IiJ9