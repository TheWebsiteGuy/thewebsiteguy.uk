"use strict";
(self["webpackChunk_wintercms_wn_system_module"] = self["webpackChunk_wintercms_wn_system_module"] || []).push([["/assets/js/build/system.debug"],{

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

/***/ "./assets/js/snowboard/snowboard.base.debug.js":
/*!*****************************************************!*\
  !*** ./assets/js/snowboard/snowboard.base.debug.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_Snowboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main/Snowboard */ "./assets/js/snowboard/main/Snowboard.js");
/* harmony import */ var _main_ProxyHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/ProxyHandler */ "./assets/js/snowboard/main/ProxyHandler.js");


(function (window) {
  var snowboard = new Proxy(new _main_Snowboard__WEBPACK_IMPORTED_MODULE_0__["default"](true, true), _main_ProxyHandler__WEBPACK_IMPORTED_MODULE_1__["default"]);

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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["assets/js/snowboard/build/snowboard.vendor"], () => (__webpack_exec__("./assets/js/snowboard/snowboard.base.debug.js"), __webpack_exec__("./assets/js/snowboard/snowboard.request.js"), __webpack_exec__("./assets/js/snowboard/snowboard.backend.extras.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixRQUFRLENBQUN3VCxRQUFRLEVBQ3hCLElBQUksRUFDSnJWLE1BQU0sQ0FBQzZCLFFBQVEsQ0FBQ3lULElBQUksRUFDcEIsR0FBRyxDQUNOO01BQ0QsSUFBSSxDQUFDWCxhQUFhLEdBQUdTLFFBQVEsQ0FBQ3pSLElBQUksQ0FBQyxFQUFFLENBQUM7TUFFdEMsT0FBTyxJQUFJLENBQUNnUixhQUFhO0lBQzdCOztJQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQVJJO0lBQUF4akIsR0FBQTtJQUFBQyxLQUFBLEVBU0EsU0FBQThqQixnQkFBZ0J6WCxHQUFHLEVBQUU7TUFDakIsSUFBTXNYLFFBQVEsR0FBRyw4REFBOEQ7TUFDL0UsSUFBTUssUUFBUSxHQUFHTCxRQUFRLENBQUN2SixJQUFJLENBQUMvTixHQUFHLENBQUM7TUFDbkMsSUFBTTRYLFFBQVEsR0FBR0QsUUFBUSxDQUFDLENBQUMsQ0FBQztNQUM1QixJQUFNdkQsTUFBTSxHQUFHdUQsUUFBUSxDQUFDLENBQUMsQ0FBQztNQUUxQixJQUFJQyxRQUFRLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUNySyxPQUFPLENBQUNxSyxRQUFRLENBQUNuTixXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7UUFDdEUsTUFBTSxJQUFJM1MsS0FBSyxDQUFDLDJCQUEyQixDQUFDO01BQ2hEO01BQ0EsSUFBSSxDQUFDc2MsTUFBTSxFQUFFO1FBQ1QsTUFBTSxJQUFJdGMsS0FBSyxDQUFDLDJCQUEyQixDQUFDO01BQ2hEO01BRUEsT0FBUWtJLEdBQUcsQ0FBQzhCLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FDeEI5QixHQUFHLE1BQUFqQyxNQUFBLENBQ0FpQyxHQUFHLE1BQUc7SUFDbkI7RUFBQztBQUFBLEVBeko0QjdMLDREQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1zeXN0ZW0tbW9kdWxlLy4vYXNzZXRzL2pzL3Nub3dib2FyZC9hYnN0cmFjdHMvUGx1Z2luQmFzZS5qcyIsIndlYnBhY2s6Ly9Ad2ludGVyY21zL3duLXN5c3RlbS1tb2R1bGUvLi9hc3NldHMvanMvc25vd2JvYXJkL2Fic3RyYWN0cy9TaW5nbGV0b24uanMiLCJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1zeXN0ZW0tbW9kdWxlLy4vYXNzZXRzL2pzL3Nub3dib2FyZC9hamF4L1JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1zeXN0ZW0tbW9kdWxlLy4vYXNzZXRzL2pzL3Nub3dib2FyZC9leHRyYXMvQXNzZXRMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1zeXN0ZW0tbW9kdWxlLy4vYXNzZXRzL2pzL3Nub3dib2FyZC9leHRyYXMvQXR0YWNoTG9hZGluZy5qcyIsIndlYnBhY2s6Ly9Ad2ludGVyY21zL3duLXN5c3RlbS1tb2R1bGUvLi9hc3NldHMvanMvc25vd2JvYXJkL2V4dHJhcy9EYXRhQ29uZmlnLmpzIiwid2VicGFjazovL0B3aW50ZXJjbXMvd24tc3lzdGVtLW1vZHVsZS8uL2Fzc2V0cy9qcy9zbm93Ym9hcmQvZXh0cmFzL0ZsYXNoLmpzIiwid2VicGFjazovL0B3aW50ZXJjbXMvd24tc3lzdGVtLW1vZHVsZS8uL2Fzc2V0cy9qcy9zbm93Ym9hcmQvZXh0cmFzL1N0cmlwZUxvYWRlci5qcyIsIndlYnBhY2s6Ly9Ad2ludGVyY21zL3duLXN5c3RlbS1tb2R1bGUvLi9hc3NldHMvanMvc25vd2JvYXJkL2V4dHJhcy9TdHlsZXNoZWV0TG9hZGVyLmpzIiwid2VicGFjazovL0B3aW50ZXJjbXMvd24tc3lzdGVtLW1vZHVsZS8uL2Fzc2V0cy9qcy9zbm93Ym9hcmQvZXh0cmFzL1RyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1zeXN0ZW0tbW9kdWxlLy4vYXNzZXRzL2pzL3Nub3dib2FyZC9tYWluL0lubmVyUHJveHlIYW5kbGVyLmpzIiwid2VicGFjazovL0B3aW50ZXJjbXMvd24tc3lzdGVtLW1vZHVsZS8uL2Fzc2V0cy9qcy9zbm93Ym9hcmQvbWFpbi9QbHVnaW5Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1zeXN0ZW0tbW9kdWxlLy4vYXNzZXRzL2pzL3Nub3dib2FyZC9tYWluL1Byb3h5SGFuZGxlci5qcyIsIndlYnBhY2s6Ly9Ad2ludGVyY21zL3duLXN5c3RlbS1tb2R1bGUvLi9hc3NldHMvanMvc25vd2JvYXJkL21haW4vU25vd2JvYXJkLmpzIiwid2VicGFjazovL0B3aW50ZXJjbXMvd24tc3lzdGVtLW1vZHVsZS8uL2Fzc2V0cy9qcy9zbm93Ym9hcmQvc25vd2JvYXJkLmJhY2tlbmQuZXh0cmFzLmpzIiwid2VicGFjazovL0B3aW50ZXJjbXMvd24tc3lzdGVtLW1vZHVsZS8uL2Fzc2V0cy9qcy9zbm93Ym9hcmQvc25vd2JvYXJkLmJhc2UuZGVidWcuanMiLCJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1zeXN0ZW0tbW9kdWxlLy4vYXNzZXRzL2pzL3Nub3dib2FyZC9zbm93Ym9hcmQucmVxdWVzdC5qcyIsIndlYnBhY2s6Ly9Ad2ludGVyY21zL3duLXN5c3RlbS1tb2R1bGUvLi9hc3NldHMvanMvc25vd2JvYXJkL3V0aWxpdGllcy9Db29raWUuanMiLCJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1zeXN0ZW0tbW9kdWxlLy4vYXNzZXRzL2pzL3Nub3dib2FyZC91dGlsaXRpZXMvSnNvblBhcnNlci5qcyIsIndlYnBhY2s6Ly9Ad2ludGVyY21zL3duLXN5c3RlbS1tb2R1bGUvLi9hc3NldHMvanMvc25vd2JvYXJkL3V0aWxpdGllcy9TYW5pdGl6ZXIuanMiLCJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1zeXN0ZW0tbW9kdWxlLy4vYXNzZXRzL2pzL3Nub3dib2FyZC91dGlsaXRpZXMvVXJsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUGx1Z2luIGJhc2UgYWJzdHJhY3QuXG4gKlxuICogVGhpcyBjbGFzcyBwcm92aWRlcyB0aGUgYmFzZSBmdW5jdGlvbmFsaXR5IGZvciBhbGwgcGx1Z2lucy5cbiAqXG4gKiBAY29weXJpZ2h0IDIwMjEgV2ludGVyLlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGx1Z2luQmFzZSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IuXG4gICAgICpcbiAgICAgKiBUaGUgY29uc3RydWN0b3IgaXMgcHJvdmlkZWQgdGhlIFNub3dib2FyZCBmcmFtZXdvcmsgaW5zdGFuY2UsIGFuZCBzaG91bGQgbm90IGJlIG92ZXJ3cml0dGVuXG4gICAgICogdW5sZXNzIHlvdSBhYnNvbHV0ZWx5IGtub3cgd2hhdCB5b3UncmUgZG9pbmcuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1Nub3dib2FyZH0gc25vd2JvYXJkXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc25vd2JvYXJkKSB7XG4gICAgICAgIHRoaXMuc25vd2JvYXJkID0gc25vd2JvYXJkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBsdWdpbiBjb25zdHJ1Y3Rvci5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIHNob3VsZCBiZSB0cmVhdGVkIGFzIHRoZSB0cnVlIGNvbnN0cnVjdG9yIG9mIGEgcGx1Z2luLCBhbmQgY2FuIGJlIG92ZXJ3cml0dGVuLlxuICAgICAqIEl0IHdpbGwgYmUgY2FsbGVkIHN0cmFpZ2h0IGFmdGVyIGNvbnN0cnVjdGlvbi5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3QoKSB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVmaW5lcyB0aGUgcmVxdWlyZWQgcGx1Z2lucyBmb3IgdGhpcyBzcGVjaWZpYyBtb2R1bGUgdG8gd29yay5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmdbXX0gQW4gYXJyYXkgb2YgcGx1Z2lucyByZXF1aXJlZCBmb3IgdGhpcyBtb2R1bGUgdG8gd29yaywgYXMgc3RyaW5ncy5cbiAgICAgKi9cbiAgICBkZXBlbmRlbmNpZXMoKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIHRoZSBsaXN0ZW5lciBtZXRob2RzIGZvciBnbG9iYWwgZXZlbnRzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBsaXN0ZW5zKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGx1Z2luIGRlc3RydWN0b3IuXG4gICAgICpcbiAgICAgKiBGaXJlZCB3aGVuIHRoaXMgcGx1Z2luIGlzIHJlbW92ZWQuIENhbiBiZSBtYW51YWxseSBjYWxsZWQgaWYgeW91IGhhdmUgYW5vdGhlciBzY2VuYXJpbyBmb3JcbiAgICAgKiBkZXN0cnVjdGlvbiwgaWUuIHRoZSBlbGVtZW50IGF0dGFjaGVkIHRvIHRoZSBwbHVnaW4gaXMgcmVtb3ZlZCBvciBjaGFuZ2VkLlxuICAgICAqL1xuICAgIGRlc3RydWN0KCkge1xuICAgICAgICB0aGlzLmRldGFjaCgpO1xuICAgICAgICBkZWxldGUgdGhpcy5zbm93Ym9hcmQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGx1Z2luIGRlc3RydWN0b3IgKG9sZCBtZXRob2QgbmFtZSkuXG4gICAgICpcbiAgICAgKiBBbGxvd3MgcHJldmlvdXMgdXNhZ2Ugb2YgdGhlIFwiZGVzdHJ1Y3RvclwiIG1ldGhvZCB0byBzdGlsbCB3b3JrLlxuICAgICAqL1xuICAgIGRlc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZGVzdHJ1Y3QoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUGx1Z2luQmFzZSBmcm9tICcuL1BsdWdpbkJhc2UnO1xuXG4vKipcbiAqIFNpbmdsZXRvbiBwbHVnaW4gYWJzdHJhY3QuXG4gKlxuICogVGhpcyBpcyBhIHNwZWNpYWwgZGVmaW5pdGlvbiBjbGFzcyB0aGF0IHRoZSBTbm93Ym9hcmQgZnJhbWV3b3JrIHdpbGwgdXNlIHRvIGludGVycHJldCB0aGUgY3VycmVudCBwbHVnaW4gYXMgYVxuICogXCJzaW5nbGV0b25cIi4gVGhpcyB3aWxsIGVuc3VyZSB0aGF0IG9ubHkgb25lIGluc3RhbmNlIG9mIHRoZSBwbHVnaW4gY2xhc3MgaXMgdXNlZCBhY3Jvc3MgdGhlIGJvYXJkLlxuICpcbiAqIFNpbmdsZXRvbnMgYXJlIGluaXRpYWxpc2VkIG9uIHRoZSBcImRvbVJlYWR5XCIgZXZlbnQgYnkgZGVmYXVsdC5cbiAqXG4gKiBAY29weXJpZ2h0IDIwMjEgV2ludGVyLlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2luZ2xldG9uIGV4dGVuZHMgUGx1Z2luQmFzZSB7XG59XG4iLCJpbXBvcnQgUGx1Z2luQmFzZSBmcm9tICcuLi9hYnN0cmFjdHMvUGx1Z2luQmFzZSc7XG5cbi8qKlxuICogUmVxdWVzdCBwbHVnaW4uXG4gKlxuICogVGhpcyBpcyB0aGUgZGVmYXVsdCBBSkFYIGhhbmRsZXIgd2hpY2ggd2lsbCBydW4gdXNpbmcgdGhlIGBmZXRjaCgpYCBtZXRob2QgdGhhdCBpcyBkZWZhdWx0IGluIG1vZGVybiBicm93c2Vycy5cbiAqXG4gKiBAY29weXJpZ2h0IDIwMjEgV2ludGVyLlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVxdWVzdCBleHRlbmRzIFBsdWdpbkJhc2Uge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yLlxuICAgICAqXG4gICAgICogVGhlIGNvbnN0cnVjdG9yIGFjY2VwdHMgMiBvciAzIHBhcmFtZXRlcnMuXG4gICAgICpcbiAgICAgKiBJZiAyIHBhcmFtZXRlcnMgYXJlIHByb3ZpZGVkLCB0aGUgZmlyc3QgcGFyYW1ldGVyIGlzIHRoZSBoYW5kbGVyIG5hbWUgYW5kIHRoZSBzZWNvbmRcbiAgICAgKiBwYXJhbWV0ZXIgaXMgdGhlIG9wdGlvbnMuIFRoaXMgYXNzdW1lcyB0aGF0IHRoaXMgaXMgYSBkZXRhY2hlZCBBSkFYIHJlcXVlc3Qgbm90IGNvbm5lY3RlZCB0b1xuICAgICAqIGFuIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBJZiAzIHBhcmFtZXRlcnMgYXJlIHByb3ZpZGVkLCB0aGUgZmlyc3QgcGFyYW1ldGVyIGlzIGFuIGVsZW1lbnQgb3IgYSBzZWxlY3RvciwgYW5kIHRoZSBzZWNvbmRcbiAgICAgKiBhbmQgdGhpcmQgcGFyYW1ldGVycyBhcmUgdGhlIGhhbmRsZXIgYW5kIG9wdGlvbnMsIHJlc3BlY3RpdmVseS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8c3RyaW5nfSBlbGVtZW50XG4gICAgICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBoYW5kbGVyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3QoZWxlbWVudCwgaGFuZGxlciwgb3B0aW9ucykge1xuICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAvLyBBbGxvdyB0aGUgZWxlbWVudCB0byBiZSBhIGhhbmRsZXIgbmFtZS5cbiAgICAgICAgICAgIC8vIFRoaXMgYXNzdW1lcyB0aGUgcmVxdWVzdCBpcyBiZWluZyBtYWRlIGFnYWluc3Qgbm8gZWxlbWVudCwgYW5kIHRoZSBoYW5kbGVyIHBhcmFtZXRlclxuICAgICAgICAgICAgLy8gd2lsbCBjb250YWluIG9wdGlvbnMuXG4gICAgICAgICAgICBpZiAodGhpcy5pc0hhbmRsZXJOYW1lKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZXIgPSBlbGVtZW50O1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IGhhbmRsZXIgfHwge307XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoZWRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KTtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hlZEVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBlbGVtZW50IHdhcyBmb3VuZCB3aXRoIHRoZSBnaXZlbiBzZWxlY3RvcjogJHtlbGVtZW50fWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSBtYXRjaGVkRWxlbWVudDtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZldGNoT3B0aW9ucyA9IHt9O1xuICAgICAgICB0aGlzLnJlc3BvbnNlRGF0YSA9IG51bGw7XG4gICAgICAgIHRoaXMucmVzcG9uc2VFcnJvciA9IG51bGw7XG4gICAgICAgIHRoaXMuY2FuY2VsbGVkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5jaGVja1JlcXVlc3QoKTtcbiAgICAgICAgaWYgKCF0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYWpheFNldHVwJywgdGhpcykpIHtcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IG5ldyBFdmVudCgnYWpheFNldHVwJywgeyBjYW5jZWxhYmxlOiB0cnVlIH0pO1xuICAgICAgICAgICAgZXZlbnQucmVxdWVzdCA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG5cbiAgICAgICAgICAgIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5kb0NsaWVudFZhbGlkYXRpb24oKSkge1xuICAgICAgICAgICAgdGhpcy5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlybSkge1xuICAgICAgICAgICAgdGhpcy5kb0NvbmZpcm0oKS50aGVuKChjb25maXJtZWQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY29uZmlybWVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG9BamF4KCkudGhlbihcbiAgICAgICAgICAgICAgICAgICAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zZURhdGEgPSByZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NVcGRhdGUocmVzcG9uc2UpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5YX1dJTlRFUl9TVUNDRVNTID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc0Vycm9yKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zZUVycm9yID0gZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZG9BamF4KCkudGhlbihcbiAgICAgICAgICAgICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzcG9uc2VEYXRhID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc1VwZGF0ZShyZXNwb25zZSkudGhlbihcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuWF9XSU5URVJfU1VDQ0VTUyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzRXJyb3IocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc1Jlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzcG9uc2VFcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NFcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXBlbmRlbmNpZXMgZm9yIHRoaXMgcGx1Z2luLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgICAqL1xuICAgIGRlcGVuZGVuY2llcygpIHtcbiAgICAgICAgcmV0dXJuIFsnY29va2llJywgJ2pzb25QYXJzZXInXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZXMgdGhlIGVsZW1lbnQgYW5kIGhhbmRsZXIgZ2l2ZW4gaW4gdGhlIHJlcXVlc3QuXG4gICAgICovXG4gICAgY2hlY2tSZXF1ZXN0KCkge1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50ICYmIHRoaXMuZWxlbWVudCBpbnN0YW5jZW9mIEVsZW1lbnQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBlbGVtZW50IHByb3ZpZGVkIG11c3QgYmUgYW4gRWxlbWVudCBpbnN0YW5jZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaGFuZGxlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBBSkFYIGhhbmRsZXIgbmFtZSBpcyBub3Qgc3BlY2lmaWVkLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzSGFuZGxlck5hbWUodGhpcy5oYW5kbGVyKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIEFKQVggaGFuZGxlciBuYW1lLiBUaGUgY29ycmVjdCBoYW5kbGVyIG5hbWUgZm9ybWF0IGlzOiBcIm9uRXZlbnRcIi4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBGZXRjaCByZXF1ZXN0LlxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2QgaXMgbWFkZSBhdmFpbGFibGUgZm9yIHBsdWdpbnMgdG8gZXh0ZW5kIG9yIG92ZXJyaWRlIHRoZSBkZWZhdWx0IGZldGNoKCkgc2V0dGluZ3Mgd2l0aCB0aGVpciBvd24uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICBnZXRGZXRjaCgpIHtcbiAgICAgICAgdGhpcy5mZXRjaE9wdGlvbnMgPSAodGhpcy5vcHRpb25zLmZldGNoT3B0aW9ucyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB0aGlzLm9wdGlvbnMuZmV0Y2hPcHRpb25zID09PSAnb2JqZWN0JylcbiAgICAgICAgICAgID8gdGhpcy5vcHRpb25zLmZldGNoT3B0aW9uc1xuICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgICAgICAgICAgICAgIGJvZHk6IHRoaXMuZGF0YSxcbiAgICAgICAgICAgICAgICByZWRpcmVjdDogJ2ZvbGxvdycsXG4gICAgICAgICAgICAgICAgbW9kZTogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2FqYXhGZXRjaE9wdGlvbnMnLCB0aGlzLmZldGNoT3B0aW9ucywgdGhpcyk7XG5cbiAgICAgICAgcmV0dXJuIGZldGNoKHRoaXMudXJsLCB0aGlzLmZldGNoT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUnVuIGNsaWVudC1zaWRlIHZhbGlkYXRpb24gb24gdGhlIGZvcm0sIGlmIGF2YWlsYWJsZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGRvQ2xpZW50VmFsaWRhdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5icm93c2VyVmFsaWRhdGUgPT09IHRydWUgJiYgdGhpcy5mb3JtKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtLmNoZWNrVmFsaWRpdHkoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0ucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeGVjdXRlcyB0aGUgQUpBWCBxdWVyeS5cbiAgICAgKlxuICAgICAqIFJldHVybnMgYSBQcm9taXNlIG9iamVjdCBmb3Igd2hlbiB0aGUgQUpBWCByZXF1ZXN0IGlzIGNvbXBsZXRlZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIGRvQWpheCgpIHtcbiAgICAgICAgLy8gQWxsb3cgcGx1Z2lucyB0byBjYW5jZWwgdGhlIEFKQVggcmVxdWVzdCBiZWZvcmUgc2VuZGluZ1xuICAgICAgICBpZiAodGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2FqYXhCZWZvcmVTZW5kJywgdGhpcykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgICAgICAgICAgICBjYW5jZWxsZWQ6IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFqYXhQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5nZXRGZXRjaCgpLnRoZW4oXG4gICAgICAgICAgICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2sgJiYgcmVzcG9uc2Uuc3RhdHVzICE9PSA0MDYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5oZWFkZXJzLmhhcygnQ29udGVudC1UeXBlJykgJiYgcmVzcG9uc2UuaGVhZGVycy5nZXQoJ0NvbnRlbnQtVHlwZScpLmluY2x1ZGVzKCcvanNvbicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZXNwb25zZURhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZURhdGEubWVzc2FnZSAmJiByZXNwb25zZURhdGEuZXhjZXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHRoaXMucmVuZGVyRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlRGF0YS5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZURhdGEuZXhjZXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZURhdGEuZmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VEYXRhLmxpbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlRGF0YS50cmFjZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlc3BvbnNlRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHRoaXMucmVuZGVyRXJyb3IoYFVuYWJsZSB0byBwYXJzZSBKU09OIHJlc3BvbnNlOiAke2Vycm9yfWApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS50ZXh0KCkudGhlbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlVGV4dCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHRoaXMucmVuZGVyRXJyb3IocmVzcG9uc2VUZXh0KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHRoaXMucmVuZGVyRXJyb3IoYFVuYWJsZSB0byBwcm9jZXNzIHJlc3BvbnNlOiAke2Vycm9yfWApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmhlYWRlcnMuaGFzKCdDb250ZW50LVR5cGUnKSAmJiByZXNwb25zZS5oZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJykuaW5jbHVkZXMoJy9qc29uJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZXNwb25zZURhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5yZXNwb25zZURhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBYX1dJTlRFUl9TVUNDRVNTOiByZXNwb25zZS5zdGF0dXMgIT09IDQwNixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFhfV0lOVEVSX1JFU1BPTlNFX0NPREU6IHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHRoaXMucmVuZGVyRXJyb3IoYFVuYWJsZSB0byBwYXJzZSBKU09OIHJlc3BvbnNlOiAke2Vycm9yfWApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLnRleHQoKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZXNwb25zZURhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZURhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh0aGlzLnJlbmRlckVycm9yKGBVbmFibGUgdG8gcHJvY2VzcyByZXNwb25zZTogJHtlcnJvcn1gKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIChyZXNwb25zZUVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCh0aGlzLnJlbmRlckVycm9yKGBVbmFibGUgdG8gcmV0cmlldmUgYSByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXI6ICR7cmVzcG9uc2VFcnJvcn1gKSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdhamF4U3RhcnQnLCBhamF4UHJvbWlzZSwgdGhpcyk7XG5cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQoJ2FqYXhQcm9taXNlJyk7XG4gICAgICAgICAgICBldmVudC5wcm9taXNlID0gYWpheFByb21pc2U7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWpheFByb21pc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJlcGFyZXMgZm9yIHVwZGF0aW5nIHRoZSBwYXJ0aWFscyBmcm9tIHRoZSBBSkFYIHJlc3BvbnNlLlxuICAgICAqXG4gICAgICogSWYgYW55IHBhcnRpYWxzIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBBSkFYIHJlc3BvbnNlLCB0aGlzIG1ldGhvZCB3aWxsIGFsc28gYWN0aW9uIHRoZSBwYXJ0aWFsIHVwZGF0ZXMuXG4gICAgICpcbiAgICAgKiBSZXR1cm5zIGEgUHJvbWlzZSBvYmplY3Qgd2hpY2ggdHJhY2tzIHdoZW4gdGhlIHBhcnRpYWwgdXBkYXRlIGlzIGNvbXBsZXRlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlc3BvbnNlXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAgICovXG4gICAgcHJvY2Vzc1VwZGF0ZShyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuYmVmb3JlVXBkYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5iZWZvcmVVcGRhdGUuYXBwbHkodGhpcywgW3Jlc3BvbnNlXSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRXh0cmFjdCBwYXJ0aWFsIGluZm9ybWF0aW9uXG4gICAgICAgICAgICBjb25zdCBwYXJ0aWFscyA9IHt9O1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMocmVzcG9uc2UpLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgW2tleSwgdmFsdWVdID0gZW50cnk7XG5cbiAgICAgICAgICAgICAgICBpZiAoa2V5LnN1YnN0cigwLCA4KSAhPT0gJ1hfV0lOVEVSJykge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0aWFsc1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhwYXJ0aWFscykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLlhfV0lOVEVSX0FTU0VUUykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NBc3NldHMocmVzcG9uc2UuWF9XSU5URVJfQVNTRVRTKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlcyA9IHRoaXMuc25vd2JvYXJkLmdsb2JhbFByb21pc2VFdmVudCgnYWpheEJlZm9yZVVwZGF0ZScsIHJlc3BvbnNlLCB0aGlzKTtcbiAgICAgICAgICAgIHByb21pc2VzLnRoZW4oXG4gICAgICAgICAgICAgICAgYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuWF9XSU5URVJfQVNTRVRTKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnByb2Nlc3NBc3NldHMocmVzcG9uc2UuWF9XSU5URVJfQVNTRVRTKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG9VcGRhdGUocGFydGlhbHMpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWxsb3cgZm9yIEhUTUwgcmVkcmF3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiByZXNvbHZlKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgcGFydGlhbHMgd2l0aCB0aGUgZ2l2ZW4gY29udGVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJ0aWFsc1xuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIGRvVXBkYXRlKHBhcnRpYWxzKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWZmZWN0ZWQgPSBbXTtcblxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMocGFydGlhbHMpLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgW3BhcnRpYWwsIGNvbnRlbnRdID0gZW50cnk7XG5cbiAgICAgICAgICAgICAgICBsZXQgc2VsZWN0b3IgPSAodGhpcy5vcHRpb25zLnVwZGF0ZSAmJiB0aGlzLm9wdGlvbnMudXBkYXRlW3BhcnRpYWxdKVxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMub3B0aW9ucy51cGRhdGVbcGFydGlhbF1cbiAgICAgICAgICAgICAgICAgICAgOiBwYXJ0aWFsO1xuXG4gICAgICAgICAgICAgICAgbGV0IG1vZGUgPSAncmVwbGFjZSc7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0b3Iuc3Vic3RyKDAsIDEpID09PSAnQCcpIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kZSA9ICdhcHBlbmQnO1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvciA9IHNlbGVjdG9yLnN1YnN0cigxKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdG9yLnN1YnN0cigwLCAxKSA9PT0gJ14nKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vZGUgPSAncHJlcGVuZCc7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yID0gc2VsZWN0b3Iuc3Vic3RyKDEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0b3Iuc3Vic3RyKDAsIDEpICE9PSAnIycgJiYgc2VsZWN0b3Iuc3Vic3RyKDAsIDEpICE9PSAnLicpIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kZSA9ICdub29wJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAobW9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2FwcGVuZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MICs9IGNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3ByZXBlbmQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGNvbnRlbnQgKyBlbGVtZW50LmlubmVySFRNTDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnbm9vcCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JlcGxhY2UnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gY29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGFmZmVjdGVkLnB1c2goZWxlbWVudCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZpcmUgdXBkYXRlIGV2ZW50IGZvciBlYWNoIGVsZW1lbnQgdGhhdCBpcyB1cGRhdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYWpheFVwZGF0ZScsIGVsZW1lbnQsIGNvbnRlbnQsIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQoJ2FqYXhVcGRhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LmNvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdhamF4VXBkYXRlQ29tcGxldGUnLCBhZmZlY3RlZCwgdGhpcyk7XG5cbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvY2Vzc2VzIHRoZSByZXNwb25zZSBkYXRhLlxuICAgICAqXG4gICAgICogVGhpcyBmaXJlcyBvZmYgYWxsIG5lY2Vzc2FyeSBwcm9jZXNzaW5nIGZ1bmN0aW9ucyBkZXBlbmRpbmcgb24gdGhlIHJlc3BvbnNlLCBpZS4gaWYgdGhlcmUncyBhbnkgZmxhc2hcbiAgICAgKiBtZXNzYWdlcyB0byBoYW5kbGUsIG9yIGFueSByZWRpcmVjdHMgdG8gYmUgdW5kZXJ0YWtlbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZXNwb25zZVxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIHByb2Nlc3NSZXNwb25zZShyZXNwb25zZSkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnN1Y2Nlc3MgJiYgdHlwZW9mIHRoaXMub3B0aW9ucy5zdWNjZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnN1Y2Nlc3ModGhpcy5yZXNwb25zZURhdGEsIHRoaXMpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFsbG93IHBsdWdpbnMgdG8gY2FuY2VsIGFueSBmdXJ0aGVyIHJlc3BvbnNlIGhhbmRsaW5nXG4gICAgICAgIGlmICh0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYWpheFN1Y2Nlc3MnLCB0aGlzLnJlc3BvbnNlRGF0YSwgdGhpcykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBbGxvdyB0aGUgZWxlbWVudCB0byBjYW5jZWwgYW55IGZ1cnRoZXIgcmVzcG9uc2UgaGFuZGxpbmdcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQoJ2FqYXhEb25lJywgeyBjYW5jZWxhYmxlOiB0cnVlIH0pO1xuICAgICAgICAgICAgZXZlbnQucmVzcG9uc2VEYXRhID0gdGhpcy5yZXNwb25zZURhdGE7XG4gICAgICAgICAgICBldmVudC5yZXF1ZXN0ID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcblxuICAgICAgICAgICAgaWYgKGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5mbGFzaCAmJiByZXNwb25zZS5YX1dJTlRFUl9GTEFTSF9NRVNTQUdFUykge1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzRmxhc2hNZXNzYWdlcyhyZXNwb25zZS5YX1dJTlRFUl9GTEFTSF9NRVNTQUdFUyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBmb3IgYSByZWRpcmVjdCBmcm9tIHRoZSByZXNwb25zZSwgb3IgdXNlIHRoZSByZWRpcmVjdCBhcyBzcGVjaWZpZWQgaW4gdGhlIG9wdGlvbnMuXG4gICAgICAgIGlmICh0aGlzLnJlZGlyZWN0IHx8IHJlc3BvbnNlLlhfV0lOVEVSX1JFRElSRUNUKSB7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NSZWRpcmVjdCh0aGlzLnJlZGlyZWN0IHx8IHJlc3BvbnNlLlhfV0lOVEVSX1JFRElSRUNUKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzZXMgYW4gZXJyb3IgcmVzcG9uc2UgZnJvbSB0aGUgQUpBWCByZXF1ZXN0LlxuICAgICAqXG4gICAgICogVGhpcyBmaXJlcyBvZmYgYWxsIG5lY2Vzc2FyeSBwcm9jZXNzaW5nIGZ1bmN0aW9ucyBkZXBlbmRpbmcgb24gdGhlIGVycm9yIHJlc3BvbnNlLCBpZS4gaWYgdGhlcmUncyBhbnkgZXJyb3Igb3JcbiAgICAgKiB2YWxpZGF0aW9uIG1lc3NhZ2VzIHRvIGhhbmRsZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fEVycm9yfSBlcnJvclxuICAgICAqL1xuICAgIHByb2Nlc3NFcnJvcihlcnJvcikge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmVycm9yICYmIHR5cGVvZiB0aGlzLm9wdGlvbnMuZXJyb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZXJyb3IodGhpcy5yZXNwb25zZUVycm9yLCB0aGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBbGxvdyBwbHVnaW5zIHRvIGNhbmNlbCBhbnkgZnVydGhlciBlcnJvciBoYW5kbGluZ1xuICAgICAgICBpZiAodGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2FqYXhFcnJvcicsIHRoaXMucmVzcG9uc2VFcnJvciwgdGhpcykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBbGxvdyB0aGUgZWxlbWVudCB0byBjYW5jZWwgYW55IGZ1cnRoZXIgZXJyb3IgaGFuZGxpbmdcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQoJ2FqYXhGYWlsJywgeyBjYW5jZWxhYmxlOiB0cnVlIH0pO1xuICAgICAgICAgICAgZXZlbnQucmVzcG9uc2VFcnJvciA9IHRoaXMucmVzcG9uc2VFcnJvcjtcbiAgICAgICAgICAgIGV2ZW50LnJlcXVlc3QgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuXG4gICAgICAgICAgICBpZiAoZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NFcnJvck1lc3NhZ2UoZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgc2tpcEVycm9yID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vIFByb2Nlc3MgdmFsaWRhdGlvbiBlcnJvcnNcbiAgICAgICAgICAgIGlmIChlcnJvci5YX1dJTlRFUl9FUlJPUl9GSUVMRFMpIHtcbiAgICAgICAgICAgICAgICBza2lwRXJyb3IgPSB0aGlzLnByb2Nlc3NWYWxpZGF0aW9uRXJyb3JzKGVycm9yLlhfV0lOVEVSX0VSUk9SX0ZJRUxEUyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlcnJvci5YX1dJTlRFUl9FUlJPUl9NRVNTQUdFICYmICFza2lwRXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NFcnJvck1lc3NhZ2UoZXJyb3IuWF9XSU5URVJfRVJST1JfTUVTU0FHRSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvY2Vzc2VzIGEgcmVkaXJlY3QgcmVzcG9uc2UuXG4gICAgICpcbiAgICAgKiBCeSBkZWZhdWx0LCB0aGlzIHByb2Nlc3NvciB3aWxsIHNpbXBseSByZWRpcmVjdCB0aGUgdXNlciBpbiB0aGVpciBicm93c2VyLlxuICAgICAqXG4gICAgICogUGx1Z2lucyBjYW4gYXVnbWVudCB0aGlzIGZ1bmN0aW9uYWxpdHkgZnJvbSB0aGUgYGFqYXhSZWRpcmVjdGAgZXZlbnQuIFlvdSBtYXkgYWxzbyBvdmVycmlkZSB0aGlzIGZ1bmN0aW9uYWxpdHkgb25cbiAgICAgKiBhIHBlci1yZXF1ZXN0IGJhc2lzIHRocm91Z2ggdGhlIGBoYW5kbGVSZWRpcmVjdFJlc3BvbnNlYCBjYWxsYmFjayBvcHRpb24uIElmIGEgYGZhbHNlYCBpcyByZXR1cm5lZCBmcm9tIGVpdGhlciwgdGhlXG4gICAgICogcmVkaXJlY3Qgd2lsbCBiZSBjYW5jZWxsZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgcHJvY2Vzc1JlZGlyZWN0KHVybCkge1xuICAgICAgICAvLyBSdW4gYSBjdXN0b20gcGVyLXJlcXVlc3QgcmVkaXJlY3QgaGFuZGxlci4gSWYgZmFsc2UgaXMgcmV0dXJuZWQsIGRvbid0IHJ1biB0aGUgcmVkaXJlY3QuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmhhbmRsZVJlZGlyZWN0UmVzcG9uc2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaGFuZGxlUmVkaXJlY3RSZXNwb25zZS5hcHBseSh0aGlzLCBbdXJsXSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWxsb3cgcGx1Z2lucyB0byBjYW5jZWwgdGhlIHJlZGlyZWN0XG4gICAgICAgIGlmICh0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYWpheFJlZGlyZWN0JywgdXJsLCB0aGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluZGljYXRlIHRoYXQgdGhlIEFKQVggcmVxdWVzdCBpcyBmaW5pc2hlZCBpZiB3ZSdyZSBzdGlsbCBvbiB0aGUgY3VycmVudCBwYWdlXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGxvYWRpbmcgaW5kaWNhdG9yIGZvciByZWRpcmVjdHMgdGhhdCBqdXN0IGNoYW5nZSB0aGUgaGFzaCB2YWx1ZSBvZlxuICAgICAgICAvLyB0aGUgVVJMIGluc3RlYWQgb2YgbGVhdmluZyB0aGUgcGFnZSB3aWxsIHByb3Blcmx5IHN0b3AuXG4gICAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL29jdG9iZXJjbXMvb2N0b2Jlci9pc3N1ZXMvMjc4MFxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICAgICAgICAgICAgICBldmVudC5ldmVudE5hbWUgPSAnYWpheFJlZGlyZWN0ZWQnO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgb25jZTogdHJ1ZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbih1cmwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb2Nlc3NlcyBhbiBlcnJvciBtZXNzYWdlLlxuICAgICAqXG4gICAgICogQnkgZGVmYXVsdCwgdGhpcyBwcm9jZXNzb3Igd2lsbCBzaW1wbHkgYWxlcnQgdGhlIHVzZXIgdGhyb3VnaCBhIHNpbXBsZSBgYWxlcnQoKWAgY2FsbC5cbiAgICAgKlxuICAgICAqIFBsdWdpbnMgY2FuIGF1Z21lbnQgdGhpcyBmdW5jdGlvbmFsaXR5IGZyb20gdGhlIGBhamF4RXJyb3JNZXNzYWdlYCBldmVudC4gWW91IG1heSBhbHNvIG92ZXJyaWRlIHRoaXMgZnVuY3Rpb25hbGl0eVxuICAgICAqIG9uIGEgcGVyLXJlcXVlc3QgYmFzaXMgdGhyb3VnaCB0aGUgYGhhbmRsZUVycm9yTWVzc2FnZWAgY2FsbGJhY2sgb3B0aW9uLiBJZiBhIGBmYWxzZWAgaXMgcmV0dXJuZWQgZnJvbSBlaXRoZXIsIHRoZVxuICAgICAqIGVycm9yIG1lc3NhZ2UgaGFuZGxpbmcgd2lsbCBiZSBjYW5jZWxsZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIHByb2Nlc3NFcnJvck1lc3NhZ2UobWVzc2FnZSkge1xuICAgICAgICAvLyBSdW4gYSBjdXN0b20gcGVyLXJlcXVlc3QgaGFuZGxlciBmb3IgZXJyb3IgbWVzc2FnZXMuIElmIGZhbHNlIGlzIHJldHVybmVkLCBkbyBub3QgcHJvY2VzcyB0aGUgZXJyb3IgbWVzc2FnZXNcbiAgICAgICAgLy8gYW55IGZ1cnRoZXIuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmhhbmRsZUVycm9yTWVzc2FnZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5oYW5kbGVFcnJvck1lc3NhZ2UuYXBwbHkodGhpcywgW21lc3NhZ2VdKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBbGxvdyBwbHVnaW5zIHRvIGNhbmNlbCB0aGUgZXJyb3IgbWVzc2FnZSBiZWluZyBzaG93blxuICAgICAgICBpZiAodGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2FqYXhFcnJvck1lc3NhZ2UnLCBtZXNzYWdlLCB0aGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJ5IGRlZmF1bHQsIHNob3cgYSBicm93c2VyIGVycm9yIG1lc3NhZ2VcbiAgICAgICAgd2luZG93LmFsZXJ0KG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb2Nlc3NlcyBmbGFzaCBtZXNzYWdlcyBmcm9tIHRoZSByZXNwb25zZS5cbiAgICAgKlxuICAgICAqIEJ5IGRlZmF1bHQsIG5vIGZsYXNoIG1lc3NhZ2UgaGFuZGxpbmcgd2lsbCBvY2N1ci5cbiAgICAgKlxuICAgICAqIFBsdWdpbnMgY2FuIGF1Z21lbnQgdGhpcyBmdW5jdGlvbmFsaXR5IGZyb20gdGhlIGBhamF4Rmxhc2hNZXNzYWdlc2AgZXZlbnQuIFlvdSBtYXkgYWxzbyBvdmVycmlkZSB0aGlzIGZ1bmN0aW9uYWxpdHlcbiAgICAgKiBvbiBhIHBlci1yZXF1ZXN0IGJhc2lzIHRocm91Z2ggdGhlIGBoYW5kbGVGbGFzaE1lc3NhZ2VzYCBjYWxsYmFjayBvcHRpb24uIElmIGEgYGZhbHNlYCBpcyByZXR1cm5lZCBmcm9tIGVpdGhlciwgdGhlXG4gICAgICogZmxhc2ggbWVzc2FnZSBoYW5kbGluZyB3aWxsIGJlIGNhbmNlbGxlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlc1xuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgcHJvY2Vzc0ZsYXNoTWVzc2FnZXMobWVzc2FnZXMpIHtcbiAgICAgICAgLy8gUnVuIGEgY3VzdG9tIHBlci1yZXF1ZXN0IGZsYXNoIGhhbmRsZXIuIElmIGZhbHNlIGlzIHJldHVybmVkLCBkb24ndCBzaG93IHRoZSBmbGFzaCBtZXNzYWdlXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmhhbmRsZUZsYXNoTWVzc2FnZXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaGFuZGxlRmxhc2hNZXNzYWdlcy5hcHBseSh0aGlzLCBbbWVzc2FnZXNdKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYWpheEZsYXNoTWVzc2FnZXMnLCBtZXNzYWdlcywgdGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvY2Vzc2VzIHZhbGlkYXRpb24gZXJyb3JzIGZvciBmaWVsZHMuXG4gICAgICpcbiAgICAgKiBCeSBkZWZhdWx0LCBubyB2YWxpZGF0aW9uIGVycm9yIGhhbmRsaW5nIHdpbGwgb2NjdXIuXG4gICAgICpcbiAgICAgKiBQbHVnaW5zIGNhbiBhdWdtZW50IHRoaXMgZnVuY3Rpb25hbGl0eSBmcm9tIHRoZSBgYWpheFZhbGlkYXRpb25FcnJvcnNgIGV2ZW50LiBZb3UgbWF5IGFsc28gb3ZlcnJpZGUgdGhpcyBmdW5jdGlvbmFsaXR5XG4gICAgICogb24gYSBwZXItcmVxdWVzdCBiYXNpcyB0aHJvdWdoIHRoZSBgaGFuZGxlVmFsaWRhdGlvbkVycm9yc2AgY2FsbGJhY2sgb3B0aW9uLiBJZiBhIGBmYWxzZWAgaXMgcmV0dXJuZWQgZnJvbSBlaXRoZXIsIHRoZVxuICAgICAqIHZhbGlkYXRpb24gZXJyb3IgaGFuZGxpbmcgd2lsbCBiZSBjYW5jZWxsZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZmllbGRzXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBwcm9jZXNzVmFsaWRhdGlvbkVycm9ycyhmaWVsZHMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuaGFuZGxlVmFsaWRhdGlvbkVycm9ycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5oYW5kbGVWYWxpZGF0aW9uRXJyb3JzLmFwcGx5KHRoaXMsIFt0aGlzLmZvcm0sIGZpZWxkc10pID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWxsb3cgcGx1Z2lucyB0byBjYW5jZWwgdGhlIHZhbGlkYXRpb24gZXJyb3JzIGJlaW5nIGhhbmRsZWRcbiAgICAgICAgaWYgKHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdhamF4VmFsaWRhdGlvbkVycm9ycycsIHRoaXMuZm9ybSwgZmllbGRzLCB0aGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb2Nlc3NlcyBhc3NldHMgcmV0dXJuZWQgYnkgYW4gQUpBWCByZXF1ZXN0LlxuICAgICAqXG4gICAgICogQnkgZGVmYXVsdCwgbm8gYXNzZXQgcHJvY2Vzc2luZyB3aWxsIG9jY3VyIGFuZCB0aGlzIHdpbGwgcmV0dXJuIGEgcmVzb2x2ZWQgUHJvbWlzZS5cbiAgICAgKlxuICAgICAqIFBsdWdpbnMgY2FuIGF1Z21lbnQgdGhpcyBmdW5jdGlvbmFsaXR5IGZyb20gdGhlIGBhamF4TG9hZEFzc2V0c2AgZXZlbnQuIFRoaXMgZXZlbnQgaXMgY29uc2lkZXJlZCBibG9ja2luZywgYW5kXG4gICAgICogYWxsb3dzIGFzc2V0cyB0byBiZSBsb2FkZWQgb3IgcHJvY2Vzc2VkIGJlZm9yZSBjb250aW51aW5nIHdpdGggYW55IGFkZGl0aW9uYWwgZnVuY3Rpb25hbGl0eS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBhc3NldHNcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICBwcm9jZXNzQXNzZXRzKGFzc2V0cykge1xuICAgICAgICByZXR1cm4gdGhpcy5zbm93Ym9hcmQuZ2xvYmFsUHJvbWlzZUV2ZW50KCdhamF4TG9hZEFzc2V0cycsIGFzc2V0cyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29uZmlybXMgdGhlIHJlcXVlc3Qgd2l0aCB0aGUgdXNlciBiZWZvcmUgcHJvY2VlZGluZy5cbiAgICAgKlxuICAgICAqIFRoaXMgaXMgYW4gYXN5bmNocm9ub3VzIG1ldGhvZC4gQnkgZGVmYXVsdCwgaXQgd2lsbCB1c2UgdGhlIGJyb3dzZXIncyBgY29uZmlybSgpYCBtZXRob2QgdG8gcXVlcnkgdGhlIHVzZXIgdG9cbiAgICAgKiBjb25maXJtIHRoZSBhY3Rpb24uIFRoaXMgbWV0aG9kIHdpbGwgcmV0dXJuIGEgUHJvbWlzZSB3aXRoIGEgYm9vbGVhbiB2YWx1ZSBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgdXNlciBjb25maXJtZWRcbiAgICAgKiBvciBub3QuXG4gICAgICpcbiAgICAgKiBQbHVnaW5zIGNhbiBhdWdtZW50IHRoaXMgZnVuY3Rpb25hbGl0eSBmcm9tIHRoZSBgYWpheENvbmZpcm1NZXNzYWdlYCBldmVudC4gWW91IG1heSBhbHNvIG92ZXJyaWRlIHRoaXMgZnVuY3Rpb25hbGl0eVxuICAgICAqIG9uIGEgcGVyLXJlcXVlc3QgYmFzaXMgdGhyb3VnaCB0aGUgYGhhbmRsZUNvbmZpcm1NZXNzYWdlYCBjYWxsYmFjayBvcHRpb24uIElmIGEgYGZhbHNlYCBpcyByZXR1cm5lZCBmcm9tIGVpdGhlcixcbiAgICAgKiB0aGUgY29uZmlybWF0aW9uIGlzIGFzc3VtZWQgdG8gaGF2ZSBiZWVuIGRlbmllZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIGFzeW5jIGRvQ29uZmlybSgpIHtcbiAgICAgICAgLy8gQWxsb3cgZm9yIGEgY3VzdG9tIGhhbmRsZXIgZm9yIHRoZSBjb25maXJtYXRpb24sIHBlciByZXF1ZXN0LlxuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5oYW5kbGVDb25maXJtTWVzc2FnZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5oYW5kbGVDb25maXJtTWVzc2FnZS5hcHBseSh0aGlzLCBbdGhpcy5jb25maXJtXSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIG5vIHBsdWdpbnMgaGF2ZSBjdXN0b21pc2VkIHRoZSBjb25maXJtYXRpb24sIHVzZSBhIHNpbXBsZSBicm93c2VyIGNvbmZpcm1hdGlvbi5cbiAgICAgICAgaWYgKHRoaXMuc25vd2JvYXJkLmxpc3RlbnNUb0V2ZW50KCdhamF4Q29uZmlybU1lc3NhZ2UnKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuY29uZmlybSh0aGlzLmNvbmZpcm0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUnVuIGN1c3RvbSBwbHVnaW4gY29uZmlybWF0aW9uc1xuICAgICAgICBjb25zdCBwcm9taXNlcyA9IHRoaXMuc25vd2JvYXJkLmdsb2JhbFByb21pc2VFdmVudCgnYWpheENvbmZpcm1NZXNzYWdlJywgdGhpcy5jb25maXJtLCB0aGlzKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZnVsZmlsbGVkID0gYXdhaXQgcHJvbWlzZXM7XG4gICAgICAgICAgICBpZiAoZnVsZmlsbGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaXJlcyBvZmYgY29tcGxldGlvbiBldmVudHMgZm9yIHRoZSBSZXF1ZXN0LlxuICAgICAqL1xuICAgIGNvbXBsZXRlKCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmNvbXBsZXRlICYmIHR5cGVvZiB0aGlzLm9wdGlvbnMuY29tcGxldGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jb21wbGV0ZSh0aGlzLnJlc3BvbnNlRGF0YSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2FqYXhEb25lJywgdGhpcy5yZXNwb25zZURhdGEsIHRoaXMpO1xuXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KCdhamF4QWx3YXlzJyk7XG4gICAgICAgICAgICBldmVudC5yZXF1ZXN0ID0gdGhpcztcbiAgICAgICAgICAgIGV2ZW50LnJlc3BvbnNlRGF0YSA9IHRoaXMucmVzcG9uc2VEYXRhO1xuICAgICAgICAgICAgZXZlbnQucmVzcG9uc2VFcnJvciA9IHRoaXMucmVzcG9uc2VFcnJvcjtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZpcmUgb2ZmIHRoZSBkZXN0cnVjdG9yXG4gICAgICAgIHRoaXMuZGVzdHJ1Y3QoKTtcbiAgICB9XG5cbiAgICBnZXQgZm9ybSgpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5mb3JtKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5mb3JtID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy5mb3JtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZm9ybTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudC50YWdOYW1lID09PSAnRk9STScpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICB9XG5cbiAgICBnZXQgY29udGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhhbmRsZXI6IHRoaXMuaGFuZGxlcixcbiAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXQgaGVhZGVycygpIHtcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IHtcbiAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0JywgLy8gS2VlcHMgY29tcGF0aWJpbGl0eSB3aXRoIGpRdWVyeSBBSkFYXG4gICAgICAgICAgICAnWC1XSU5URVItUkVRVUVTVC1IQU5ETEVSJzogdGhpcy5oYW5kbGVyLFxuICAgICAgICAgICAgJ1gtV0lOVEVSLVJFUVVFU1QtUEFSVElBTFMnOiB0aGlzLmV4dHJhY3RQYXJ0aWFscyh0aGlzLm9wdGlvbnMudXBkYXRlIHx8IFtdKSxcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy5mbGFzaCkge1xuICAgICAgICAgICAgaGVhZGVyc1snWC1XSU5URVItUkVRVUVTVC1GTEFTSCddID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnhzcmZUb2tlbikge1xuICAgICAgICAgICAgaGVhZGVyc1snWC1YU1JGLVRPS0VOJ10gPSB0aGlzLnhzcmZUb2tlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBoZWFkZXJzO1xuICAgIH1cblxuICAgIGdldCBsb2FkaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmxvYWRpbmcgfHwgZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0IHVybCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy51cmwgfHwgd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgfVxuXG4gICAgZ2V0IHJlZGlyZWN0KCkge1xuICAgICAgICByZXR1cm4gKHRoaXMub3B0aW9ucy5yZWRpcmVjdCAmJiB0aGlzLm9wdGlvbnMucmVkaXJlY3QubGVuZ3RoKSA/IHRoaXMub3B0aW9ucy5yZWRpcmVjdCA6IG51bGw7XG4gICAgfVxuXG4gICAgZ2V0IGZsYXNoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZsYXNoIHx8IGZhbHNlO1xuICAgIH1cblxuICAgIGdldCBmaWxlcygpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5maWxlcyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKEZvcm1EYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNub3dib2FyZC5kZWJ1ZygnVGhpcyBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgZmlsZSB1cGxvYWRzJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXQgeHNyZlRva2VuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zbm93Ym9hcmQuY29va2llKCkuZ2V0KCdYU1JGLVRPS0VOJyk7XG4gICAgfVxuXG4gICAgZ2V0IGRhdGEoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSAodHlwZW9mIHRoaXMub3B0aW9ucy5kYXRhID09PSAnb2JqZWN0JykgPyB0aGlzLm9wdGlvbnMuZGF0YSA6IHt9O1xuXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMuZm9ybSB8fCB1bmRlZmluZWQpO1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoZGF0YSkuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSBlbnRyeTtcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmb3JtRGF0YTtcbiAgICB9XG5cbiAgICBnZXQgY29uZmlybSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jb25maXJtIHx8IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIHBhcnRpYWxzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHVwZGF0ZVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZXh0cmFjdFBhcnRpYWxzKHVwZGF0ZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModXBkYXRlKS5qb2luKCcmJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyBhbiBlcnJvciB3aXRoIHVzZWZ1bCBkZWJ1ZyBpbmZvcm1hdGlvbi5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgaW50ZXJuYWxseSB3aGVuIHRoZSBBSkFYIHJlcXVlc3QgY291bGQgbm90IGJlIGNvbXBsZXRlZCBvciBwcm9jZXNzZWQgY29ycmVjdGx5IGR1ZSB0byBhbiBlcnJvci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV4Y2VwdGlvblxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGxpbmVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ1tdfSB0cmFjZVxuICAgICAqIEByZXR1cm5zIHtFcnJvcn1cbiAgICAgKi9cbiAgICByZW5kZXJFcnJvcihtZXNzYWdlLCBleGNlcHRpb24sIGZpbGUsIGxpbmUsIHRyYWNlKSB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgICBlcnJvci5leGNlcHRpb24gPSBleGNlcHRpb24gfHwgbnVsbDtcbiAgICAgICAgZXJyb3IuZmlsZSA9IGZpbGUgfHwgbnVsbDtcbiAgICAgICAgZXJyb3IubGluZSA9IGxpbmUgfHwgbnVsbDtcbiAgICAgICAgZXJyb3IudHJhY2UgPSB0cmFjZSB8fCBbXTtcbiAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBhIGdpdmVuIHN0cmluZyB0byBzZWUgaWYgaXQgaXMgYSB2YWxpZCBBSkFYIGhhbmRsZXIgbmFtZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgaXNIYW5kbGVyTmFtZShuYW1lKSB7XG4gICAgICAgIHJldHVybiAvXig/Olxcdys6ezJ9KT9vbltBLVowLTldLy50ZXN0KG5hbWUpO1xuICAgIH1cbn1cbiIsImltcG9ydCBTaW5nbGV0b24gZnJvbSAnLi4vYWJzdHJhY3RzL1NpbmdsZXRvbic7XG5cbi8qKlxuICogQXNzZXQgTG9hZGVyLlxuICpcbiAqIFByb3ZpZGVzIHNpbXBsZSBhc3NldCBsb2FkaW5nIGZ1bmN0aW9uYWxpdHkgZm9yIFNub3dib2FyZCwgbWFraW5nIGl0IGVhc3kgdG8gcHJlLWxvYWQgaW1hZ2VzIG9yXG4gKiBpbmNsdWRlIEphdmFTY3JpcHQgb3IgQ1NTIGFzc2V0cyBvbiB0aGUgZmx5LlxuICpcbiAqIEJ5IGRlZmF1bHQsIHRoaXMgbG9hZGVyIHdpbGwgbGlzdGVuIHRvIGFueSBhc3NldHMgdGhhdCBoYXZlIGJlZW4gcmVxdWVzdGVkIHRvIGxvYWQgaW4gYW4gQUpBWFxuICogcmVzcG9uc2UsIHN1Y2ggYXMgcmVzcG9uc2VzIGZyb20gYSBjb21wb25lbnQuXG4gKlxuICogWW91IGNhbiBhbHNvIGxvYWQgYXNzZXRzIG1hbnVhbGx5IGJ5IGNhbGxpbmcgdGhlIGZvbGxvd2luZzpcbiAqXG4gKiBgYGBqc1xuICogU25vd2JvYXJkLmFkZFBsdWdpbignYXNzZXRMb2FkZXInLCBBc3NldExvYWRlcik7XG4gKiBTbm93Ym9hcmQuYXNzZXRMb2FkZXIoKS5wcm9jZXNzQXNzZXRzKGFzc2V0cyk7XG4gKiBgYGBcbiAqXG4gKiBAY29weXJpZ2h0IDIwMjEgV2ludGVyLlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXNzZXRMb2FkZXIgZXh0ZW5kcyBTaW5nbGV0b24ge1xuICAgIC8qKlxuICAgICAqIEV2ZW50IGxpc3RlbmVycy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgbGlzdGVucygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFqYXhMb2FkQXNzZXRzOiAnbG9hZCcsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVwZW5kZW5jaWVzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIGRlcGVuZGVuY2llcygpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICd1cmwnLFxuICAgICAgICBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb2Nlc3MgYW5kIGxvYWQgYXNzZXRzLlxuICAgICAqXG4gICAgICogVGhlIGBhc3NldHNgIHByb3BlcnR5IG9mIHRoaXMgbWV0aG9kIHJlcXVpcmVzIGFuIG9iamVjdCB3aXRoIGFueSBvZiB0aGUgZm9sbG93aW5nIGtleXMgYW5kIGFuXG4gICAgICogYXJyYXkgb2YgcGF0aHM6XG4gICAgICpcbiAgICAgKiAtIGBqc2A6IEFuIGFycmF5IG9mIEphdmFTY3JpcHQgVVJMcyB0byBsb2FkXG4gICAgICogLSBgY3NzYDogQW4gYXJyYXkgb2YgQ1NTIHN0eWxlc2hlZXQgVVJMcyB0byBsb2FkXG4gICAgICogLSBgaW1nYDogQW4gYXJyYXkgb2YgaW1hZ2UgVVJMcyB0byBwcmUtbG9hZFxuICAgICAqXG4gICAgICogQm90aCBganNgIGFuZCBgY3NzYCBmaWxlcyB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgaW5qZWN0ZWQsIGhvd2V2ZXIgYGltZ2AgZmlsZXMgd2lsbCBub3QuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCB3aWxsIHJldHVybiBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIGFsbCByZXF1aXJlZCBhc3NldHMgYXJlIGxvYWRlZC4gSWYgYW5cbiAgICAgKiBhc3NldCBmYWlscyB0byBsb2FkLCB0aGlzIFByb21pc2Ugd2lsbCBiZSByZWplY3RlZC5cbiAgICAgKlxuICAgICAqIEVTTGludCAqUkVBTExZKiBkb2Vzbid0IGxpa2UgdGhpcyBjb2RlLCBidXQgaWdub3JlIGl0LiBJdCdzIHRoZSBvbmx5IHdheSBpdCB3b3Jrcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBhc3NldHNcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICBhc3luYyBsb2FkKGFzc2V0cykge1xuICAgICAgICBpZiAoYXNzZXRzLmpzICYmIGFzc2V0cy5qcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHNjcmlwdCBvZiBhc3NldHMuanMpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmxvYWRTY3JpcHQoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhc3NldHMuY3NzICYmIGFzc2V0cy5jc3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBzdHlsZSBvZiBhc3NldHMuY3NzKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5sb2FkU3R5bGUoc3R5bGUpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFzc2V0cy5pbWcgJiYgYXNzZXRzLmltZy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGltYWdlIG9mIGFzc2V0cy5pbWcpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmxvYWRJbWFnZShpbWFnZSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5qZWN0cyBhbmQgbG9hZHMgYSBKYXZhU2NyaXB0IFVSTCBpbnRvIHRoZSBET00uXG4gICAgICpcbiAgICAgKiBUaGUgc2NyaXB0IHdpbGwgYmUgYXBwZW5kZWQgYmVmb3JlIHRoZSBjbG9zaW5nIGA8L2JvZHk+YCB0YWcuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc2NyaXB0XG4gICAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAgICovXG4gICAgbG9hZFNjcmlwdChzY3JpcHQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIC8vIFJlc29sdmUgc2NyaXB0IFVSTFxuICAgICAgICAgICAgc2NyaXB0ID0gdGhpcy5zbm93Ym9hcmQudXJsKCkuYXNzZXQoc2NyaXB0KTtcblxuICAgICAgICAgICAgLy8gQ2hlY2sgdGhhdCBzY3JpcHQgaXMgbm90IGFscmVhZHkgbG9hZGVkXG4gICAgICAgICAgICBjb25zdCBsb2FkZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjPVwiJHtzY3JpcHR9XCJdYCk7XG4gICAgICAgICAgICBpZiAobG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ3JlYXRlIHNjcmlwdFxuICAgICAgICAgICAgY29uc3QgZG9tU2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgICAgICBkb21TY3JpcHQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvamF2YXNjcmlwdCcpO1xuICAgICAgICAgICAgZG9tU2NyaXB0LnNldEF0dHJpYnV0ZSgnc3JjJywgc2NyaXB0KTtcbiAgICAgICAgICAgIGRvbVNjcmlwdC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdhc3NldExvYWRlci5sb2FkZWQnLCAnc2NyaXB0Jywgc2NyaXB0LCBkb21TY3JpcHQpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZG9tU2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdhc3NldExvYWRlci5lcnJvcicsICdzY3JpcHQnLCBzY3JpcHQsIGRvbVNjcmlwdCk7XG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgVW5hYmxlIHRvIGxvYWQgc2NyaXB0IGZpbGU6IFwiJHtzY3JpcHR9XCJgKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGRvbVNjcmlwdCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluamVjdHMgYW5kIGxvYWRzIGEgQ1NTIHN0eWxlc2hlZXQgaW50byB0aGUgRE9NLlxuICAgICAqXG4gICAgICogVGhlIHN0eWxlc2hlZXQgd2lsbCBiZSBhcHBlbmRlZCBiZWZvcmUgdGhlIGNsb3NpbmcgYDwvaGVhZD5gIHRhZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzdHlsZVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIGxvYWRTdHlsZShzdHlsZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgLy8gUmVzb2x2ZSBzdHlsZSBVUkxcbiAgICAgICAgICAgIHN0eWxlID0gdGhpcy5zbm93Ym9hcmQudXJsKCkuYXNzZXQoc3R5bGUpO1xuXG4gICAgICAgICAgICAvLyBDaGVjayB0aGF0IHN0eWxlc2hlZXQgaXMgbm90IGFscmVhZHkgbG9hZGVkXG4gICAgICAgICAgICBjb25zdCBsb2FkZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl1baHJlZj1cIiR7c3R5bGV9XCJdYCk7XG4gICAgICAgICAgICBpZiAobG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ3JlYXRlIHN0eWxlc2hlZXRcbiAgICAgICAgICAgIGNvbnN0IGRvbUNzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgICAgIGRvbUNzcy5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdzdHlsZXNoZWV0Jyk7XG4gICAgICAgICAgICBkb21Dc3Muc2V0QXR0cmlidXRlKCdocmVmJywgc3R5bGUpO1xuICAgICAgICAgICAgZG9tQ3NzLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2Fzc2V0TG9hZGVyLmxvYWRlZCcsICdzdHlsZScsIHN0eWxlLCBkb21Dc3MpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZG9tQ3NzLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdhc3NldExvYWRlci5lcnJvcicsICdzdHlsZScsIHN0eWxlLCBkb21Dc3MpO1xuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYFVuYWJsZSB0byBsb2FkIHN0eWxlc2hlZXQgZmlsZTogXCIke3N0eWxlfVwiYCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZChkb21Dc3MpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcmUtbG9hZHMgYW4gaW1hZ2UuXG4gICAgICpcbiAgICAgKiBUaGUgaW1hZ2Ugd2lsbCBub3QgYmUgaW5qZWN0ZWQgaW50byB0aGUgRE9NLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGltYWdlXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAgICovXG4gICAgbG9hZEltYWdlKGltYWdlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAvLyBSZXNvbHZlIHNjcmlwdCBVUkxcbiAgICAgICAgICAgIGltYWdlID0gdGhpcy5zbm93Ym9hcmQudXJsKCkuYXNzZXQoaW1hZ2UpO1xuXG4gICAgICAgICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdhc3NldExvYWRlci5sb2FkZWQnLCAnaW1hZ2UnLCBpbWFnZSwgaW1nKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYXNzZXRMb2FkZXIuZXJyb3InLCAnaW1hZ2UnLCBpbWFnZSwgaW1nKTtcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBVbmFibGUgdG8gbG9hZCBpbWFnZSBmaWxlOiBcIiR7aW1hZ2V9XCJgKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGltZy5zcmMgPSBpbWFnZTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFNpbmdsZXRvbiBmcm9tICcuLi9hYnN0cmFjdHMvU2luZ2xldG9uJztcblxuLyoqXG4gKiBBbGxvd3MgYXR0YWNoaW5nIGEgbG9hZGluZyBjbGFzcyBvbiBlbGVtZW50cyB0aGF0IGFuIEFKQVggcmVxdWVzdCBpcyB0YXJnZXRpbmcuXG4gKlxuICogQGNvcHlyaWdodCAyMDIxIFdpbnRlci5cbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF0dGFjaExvYWRpbmcgZXh0ZW5kcyBTaW5nbGV0b24ge1xuICAgIC8qKlxuICAgICAqIERlZmluZXMgZGVwZW5kZW5pY2VzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgICAqL1xuICAgIGRlcGVuZGVuY2llcygpIHtcbiAgICAgICAgcmV0dXJuIFsncmVxdWVzdCddO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZmluZXMgbGlzdGVuZXJzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBsaXN0ZW5zKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWpheFN0YXJ0OiAnYWpheFN0YXJ0JyxcbiAgICAgICAgICAgIGFqYXhEb25lOiAnYWpheERvbmUnLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFqYXhTdGFydChwcm9taXNlLCByZXF1ZXN0KSB7XG4gICAgICAgIGlmICghcmVxdWVzdC5lbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVxdWVzdC5lbGVtZW50LnRhZ05hbWUgPT09ICdGT1JNJykge1xuICAgICAgICAgICAgY29uc3QgbG9hZEVsZW1lbnRzID0gcmVxdWVzdC5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWF0dGFjaC1sb2FkaW5nXScpO1xuICAgICAgICAgICAgaWYgKGxvYWRFbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbG9hZEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuZ2V0TG9hZGluZ0NsYXNzKGVsZW1lbnQpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyZXF1ZXN0LmVsZW1lbnQuZGF0YXNldC5hdHRhY2hMb2FkaW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJlcXVlc3QuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuZ2V0TG9hZGluZ0NsYXNzKHJlcXVlc3QuZWxlbWVudCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWpheERvbmUoZGF0YSwgcmVxdWVzdCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QuZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlcXVlc3QuZWxlbWVudC50YWdOYW1lID09PSAnRk9STScpIHtcbiAgICAgICAgICAgIGNvbnN0IGxvYWRFbGVtZW50cyA9IHJlcXVlc3QuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1hdHRhY2gtbG9hZGluZ10nKTtcbiAgICAgICAgICAgIGlmIChsb2FkRWxlbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGxvYWRFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmdldExvYWRpbmdDbGFzcyhlbGVtZW50KSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocmVxdWVzdC5lbGVtZW50LmRhdGFzZXQuYXR0YWNoTG9hZGluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXF1ZXN0LmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmdldExvYWRpbmdDbGFzcyhyZXF1ZXN0LmVsZW1lbnQpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldExvYWRpbmdDbGFzcyhlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiAoZWxlbWVudC5kYXRhc2V0LmF0dGFjaExvYWRpbmcgIT09IHVuZGVmaW5lZCAmJiBlbGVtZW50LmRhdGFzZXQuYXR0YWNoTG9hZGluZyAhPT0gJycpXG4gICAgICAgICAgICA/IGVsZW1lbnQuZGF0YXNldC5hdHRhY2hMb2FkaW5nXG4gICAgICAgICAgICA6ICd3bi1sb2FkaW5nJztcbiAgICB9XG59XG4iLCJpbXBvcnQgUGx1Z2luQmFzZSBmcm9tICcuLi9hYnN0cmFjdHMvUGx1Z2luQmFzZSc7XG5cbi8qKlxuICogRGF0YSBjb25maWd1cmF0aW9uIHByb3ZpZGVyLlxuICpcbiAqIFByb3ZpZGVzIGEgbWVjaGFuaXNtIGZvciBwYXNzaW5nIGNvbmZpZ3VyYXRpb24gZGF0YSB0aHJvdWdoIGFuIGVsZW1lbnQncyBkYXRhIGF0dHJpYnV0ZXMuIFRoaXNcbiAqIGlzIGdlbmVyYWxseSB1c2VkIGZvciB3aWRnZXRzIG9yIFVJIGludGVyYWN0aW9ucyB0byBjb25maWd1cmUgdGhlbS5cbiAqXG4gKiBAY29weXJpZ2h0IDIwMjIgV2ludGVyLlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YUNvbmZpZyBleHRlbmRzIFBsdWdpbkJhc2Uge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtQbHVnaW5CYXNlfSBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbG9jYWxDb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3QoaW5zdGFuY2UsIGVsZW1lbnQsIGxvY2FsQ29uZmlnKSB7XG4gICAgICAgIGlmIChpbnN0YW5jZSBpbnN0YW5jZW9mIFBsdWdpbkJhc2UgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtdXN0IHByb3ZpZGUgYSBTbm93Ym9hcmQgcGx1Z2luIHRvIGVuYWJsZSBkYXRhIGNvbmZpZ3VyYXRpb24nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEYXRhIGNvbmZpZ3VyYXRpb24gY2FuIG9ubHkgYmUgZXh0cmFjdGVkIGZyb20gSFRNTCBlbGVtZW50cycpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLmxvY2FsQ29uZmlnID0gbG9jYWxDb25maWcgfHwge307XG4gICAgICAgIHRoaXMuaW5zdGFuY2VDb25maWcgPSB7fTtcbiAgICAgICAgdGhpcy5hY2NlcHRlZENvbmZpZ3MgPSB7fTtcbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgY29uZmlnIGZvciB0aGlzIGluc3RhbmNlLlxuICAgICAqXG4gICAgICogSWYgdGhlIGBjb25maWdgIHBhcmFtZXRlciBpcyB1bnNwZWNpZmllZCwgcmV0dXJucyB0aGUgZW50aXJlIGNvbmZpZ3VyYXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnXG4gICAgICovXG4gICAgZ2V0KGNvbmZpZykge1xuICAgICAgICBpZiAoY29uZmlnID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlQ29uZmlnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2VDb25maWdbY29uZmlnXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZUNvbmZpZ1tjb25maWddO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBjb25maWcgZm9yIHRoaXMgaW5zdGFuY2UuXG4gICAgICpcbiAgICAgKiBUaGlzIGFsbG93cyB5b3UgdG8gb3ZlcnJpZGUsIGF0IHJ1bnRpbWUsIGFueSBjb25maWd1cmF0aW9uIHZhbHVlIGFzIG5lY2Vzc2FyeS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWdcbiAgICAgKiBAcGFyYW0ge2FueX0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHBlcnNpc3RcbiAgICAgKi9cbiAgICBzZXQoY29uZmlnLCB2YWx1ZSwgcGVyc2lzdCkge1xuICAgICAgICBpZiAoY29uZmlnID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG11c3QgcHJvdmlkZSBhIGNvbmZpZ3VyYXRpb24ga2V5IHRvIHNldCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbnN0YW5jZUNvbmZpZ1tjb25maWddID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKHBlcnNpc3QgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5kYXRhc2V0W2NvbmZpZ10gPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMubG9jYWxDb25maWdbY29uZmlnXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVmcmVzaGVzIHRoZSBjb25maWd1cmF0aW9uIGZyb20gdGhlIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBUaGlzIHdpbGwgYWxsb3cgeW91IHRvIG1ha2UgY2hhbmdlcyB0byB0aGUgZGF0YSBjb25maWcgb24gYSBET00gbGV2ZWwgYW5kIHJlLWFwcGx5IHRoZW1cbiAgICAgKiB0byB0aGUgY29uZmlnIG9uIHRoZSBKYXZhU2NyaXB0IHNpZGUuXG4gICAgICovXG4gICAgcmVmcmVzaCgpIHtcbiAgICAgICAgdGhpcy5hY2NlcHRlZENvbmZpZ3MgPSB0aGlzLmdldEFjY2VwdGVkQ29uZmlncygpO1xuICAgICAgICB0aGlzLmluc3RhbmNlQ29uZmlnID0gdGhpcy5wcm9jZXNzQ29uZmlnKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB0aGUgYXZhaWxhYmxlIGNvbmZpZ3VyYXRpb25zIHRoYXQgY2FuIGJlIHNldCB0aHJvdWdoIHRoZSBkYXRhIGNvbmZpZy5cbiAgICAgKlxuICAgICAqIElmIGFuIGluc3RhbmNlIGhhcyBhbiBgYWNjZXB0QWxsRGF0YUNvbmZpZ3NgIHByb3BlcnR5LCBzZXQgdG8gYHRydWVgLCB0aGVuIGFsbCBkYXRhXG4gICAgICogYXR0cmlidXRlcyB3aWxsIGJlIGF2YWlsYWJsZSBhcyBjb25maWd1cmF0aW9uIHZhbHVlcy4gVGhpcyBjYW4gYmUgYSBzZWN1cml0eSBjb25jZXJuLCBzb1xuICAgICAqIHRyZWFkIGNhcmVmdWxseS5cbiAgICAgKlxuICAgICAqIE90aGVyd2lzZSwgYXZhaWxhYmxlIGNvbmZpZ3VyYXRpb25zIHdpbGwgYmUgZGV0ZXJtaW5lZCBieSB0aGUga2V5cyBhdmFpbGFibGUgaW4gYW4gb2JqZWN0XG4gICAgICogcmV0dXJuZWQgYnkgYSBgZGVmYXVsdHMoKWAgbWV0aG9kIGluIHRoZSBpbnN0YW5jZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmdbXXxib29sZWFufVxuICAgICAqL1xuICAgIGdldEFjY2VwdGVkQ29uZmlncygpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5hY2NlcHRBbGxEYXRhQ29uZmlncyAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAmJiB0aGlzLmluc3RhbmNlLmFjY2VwdEFsbERhdGFDb25maWdzID09PSB0cnVlXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLmRlZmF1bHRzICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICYmIHR5cGVvZiB0aGlzLmluc3RhbmNlLmRlZmF1bHRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAmJiB0eXBlb2YgdGhpcy5pbnN0YW5jZS5kZWZhdWx0cygpID09PSAnb2JqZWN0J1xuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmluc3RhbmNlLmRlZmF1bHRzKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGRlZmF1bHQgdmFsdWVzIGZvciB0aGUgaW5zdGFuY2UuXG4gICAgICpcbiAgICAgKiBUaGlzIHdpbGwgYmUgYW4gZW1wdHkgb2JqZWN0IGlmIHRoZSBpbnN0YW5jZSBlaXRoZXIgZG9lcyBub3QgaGF2ZSBhIGBkZWZhdWx0cygpYCBtZXRob2QsIG9yXG4gICAgICogdGhlIG1ldGhvZCBpdHNlbGYgZG9lcyBub3QgcmV0dXJuIGFuIG9iamVjdC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAgICovXG4gICAgZ2V0RGVmYXVsdHMoKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UuZGVmYXVsdHMgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgJiYgdHlwZW9mIHRoaXMuaW5zdGFuY2UuZGVmYXVsdHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICYmIHR5cGVvZiB0aGlzLmluc3RhbmNlLmRlZmF1bHRzKCkgPT09ICdvYmplY3QnXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UuZGVmYXVsdHMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzZXMgdGhlIGNvbmZpZ3VyYXRpb24uXG4gICAgICpcbiAgICAgKiBMb2FkcyB1cCB0aGUgZGVmYXVsdHMsIHRoZW4gcG9wdWxhdGVzIGl0IHdpdGggYW55IGNvbmZpZ3VyYXRpb24gdmFsdWVzIHByb3ZpZGVkIGJ5IHRoZSBkYXRhXG4gICAgICogYXR0cmlidXRlcywgYmFzZWQgb24gdGhlIHJ1bGVzIG9mIHRoZSBhY2NlcHRlZCBjb25maWd1cmF0aW9ucy5cbiAgICAgKlxuICAgICAqIFRoaXMgY29uZmlndXJhdGlvbiBvYmplY3QgaXMgdGhlbiBjYWNoZWQgYW5kIGF2YWlsYWJsZSB0aHJvdWdoIGBjb25maWcuZ2V0KClgIGNhbGxzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge29iamVjdH1cbiAgICAgKi9cbiAgICBwcm9jZXNzQ29uZmlnKCkge1xuICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLmdldERlZmF1bHRzKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuYWNjZXB0ZWRDb25maWdzID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlICovXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuZWxlbWVudC5kYXRhc2V0KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY2NlcHRlZENvbmZpZ3MgPT09IHRydWUgfHwgdGhpcy5hY2NlcHRlZENvbmZpZ3MuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgICAgIGNvbmZpZ1trZXldID0gdGhpcy5jb2VyY2VWYWx1ZSh0aGlzLmVsZW1lbnQuZGF0YXNldFtrZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMubG9jYWxDb25maWcpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFjY2VwdGVkQ29uZmlncyA9PT0gdHJ1ZSB8fCB0aGlzLmFjY2VwdGVkQ29uZmlncy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnW2tleV0gPSB0aGlzLmxvY2FsQ29uZmlnW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSAqL1xuXG4gICAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29lcmNlcyBjb25maWd1cmF0aW9uIHZhbHVlcyBmb3IgSmF2YVNjcmlwdC5cbiAgICAgKlxuICAgICAqIFRha2VzIHRoZSBzdHJpbmcgdmFsdWUgcmV0dXJuZWQgZnJvbSB0aGUgZGF0YSBhdHRyaWJ1dGUgYW5kIGNvZXJjZXMgaXQgaW50byBhIG1vcmUgc3VpdGFibGVcbiAgICAgKiB0eXBlIGZvciBKYXZhU2NyaXB0IHByb2Nlc3NpbmcuXG4gICAgICpcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgY29lcmNlVmFsdWUodmFsdWUpIHtcbiAgICAgICAgY29uc3Qgc3RyaW5nVmFsdWUgPSBTdHJpbmcodmFsdWUpO1xuXG4gICAgICAgIC8vIE51bGwgdmFsdWVcbiAgICAgICAgaWYgKHN0cmluZ1ZhbHVlID09PSAnbnVsbCcpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVW5kZWZpbmVkIHZhbHVlXG4gICAgICAgIGlmIChzdHJpbmdWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCYXNlNjQgdmFsdWVcbiAgICAgICAgaWYgKHN0cmluZ1ZhbHVlLnN0YXJ0c1dpdGgoJ2Jhc2U2NDonKSkge1xuICAgICAgICAgICAgY29uc3QgYmFzZTY0c3RyID0gc3RyaW5nVmFsdWUucmVwbGFjZSgvXmJhc2U2NDovLCAnJyk7XG4gICAgICAgICAgICBjb25zdCBkZWNvZGVkID0gYXRvYihiYXNlNjRzdHIpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29lcmNlVmFsdWUoZGVjb2RlZCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCb29sZWFuIHZhbHVlXG4gICAgICAgIGlmIChbJ3RydWUnLCAneWVzJ10uaW5jbHVkZXMoc3RyaW5nVmFsdWUudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChbJ2ZhbHNlJywgJ25vJ10uaW5jbHVkZXMoc3RyaW5nVmFsdWUudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE51bWVyaWMgdmFsdWVcbiAgICAgICAgaWYgKC9eWy0rXT9bMC05XSsoXFwuWzAtOV0rKT8kLy50ZXN0KHN0cmluZ1ZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIE51bWJlcihzdHJpbmdWYWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBKU09OIHZhbHVlXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zbm93Ym9hcmQuanNvblBhcnNlcigpLnBhcnNlKHN0cmluZ1ZhbHVlKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIChzdHJpbmdWYWx1ZSA9PT0gJycpID8gdHJ1ZSA6IHN0cmluZ1ZhbHVlO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IFBsdWdpbkJhc2UgZnJvbSAnLi4vYWJzdHJhY3RzL1BsdWdpbkJhc2UnO1xuXG4vKipcbiAqIFByb3ZpZGVzIGZsYXNoIG1lc3NhZ2VzIGZvciB0aGUgQ01TLlxuICpcbiAqIEZsYXNoIG1lc3NhZ2VzIHdpbGwgcG9wIHVwIGF0IHRoZSB0b3AgY2VudGVyIG9mIHRoZSBwYWdlIGFuZCB3aWxsIHJlbWFpbiBmb3IgNyBzZWNvbmRzIGJ5IGRlZmF1bHQuIEhvdmVyaW5nIG92ZXJcbiAqIHRoZSBtZXNzYWdlIHdpbGwgcmVzZXQgYW5kIHBhdXNlIHRoZSB0aW1lci4gQ2xpY2tpbmcgb24gdGhlIGZsYXNoIG1lc3NhZ2Ugd2lsbCBkaXNtaXNzIGl0LlxuICpcbiAqIEFyZ3VtZW50czpcbiAqICAtIFwibWVzc2FnZVwiOiBUaGUgY29udGVudCBvZiB0aGUgZmxhc2ggbWVzc2FnZS4gSFRNTCBpcyBhY2NlcHRlZC5cbiAqICAtIFwidHlwZVwiOiBUaGUgdHlwZSBvZiBmbGFzaCBtZXNzYWdlLiBUaGlzIGlzIGFwcGVuZGVkIGFzIGEgY2xhc3MgdG8gdGhlIGZsYXNoIG1lc3NhZ2UgaXRzZWxmLlxuICogIC0gXCJkdXJhdGlvblwiOiBIb3cgbG9uZyB0aGUgZmxhc2ggbWVzc2FnZSB3aWxsIHN0YXkgdmlzaWJsZSBmb3IsIGluIHNlY29uZHMuIERlZmF1bHQ6IDcgc2Vjb25kcy5cbiAqXG4gKiBVc2FnZTpcbiAqICAgICAgU25vd2JvYXJkLmZsYXNoKCdUaGlzIGlzIGEgZmxhc2ggbWVzc2FnZScsICdpbmZvJywgOCk7XG4gKlxuICogQGNvcHlyaWdodCAyMDIxIFdpbnRlci5cbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsYXNoIGV4dGVuZHMgUGx1Z2luQmFzZSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGR1cmF0aW9uXG4gICAgICovXG4gICAgY29uc3RydWN0KG1lc3NhZ2UsIHR5cGUsIGR1cmF0aW9uKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGUgfHwgJ2RlZmF1bHQnO1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gTnVtYmVyKGR1cmF0aW9uIHx8IDcpO1xuXG4gICAgICAgIGlmICh0aGlzLmR1cmF0aW9uIDwgMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGbGFzaCBkdXJhdGlvbiBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyLCBvciB6ZXJvJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMudGltZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmZsYXNoVGltZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmNyZWF0ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZmluZXMgZGVwZW5kZW5jaWVzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgICAqL1xuICAgIGRlcGVuZGVuY2llcygpIHtcbiAgICAgICAgcmV0dXJuIFsndHJhbnNpdGlvbiddO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc3RydWN0b3IuXG4gICAgICpcbiAgICAgKiBUaGlzIHdpbGwgZW5zdXJlIHRoZSBmbGFzaCBtZXNzYWdlIGlzIHJlbW92ZWQgYW5kIHRpbWVvdXQgaXMgY2xlYXJlZCBpZiB0aGUgbW9kdWxlIGlzIHJlbW92ZWQuXG4gICAgICovXG4gICAgZGVzdHJ1Y3QoKSB7XG4gICAgICAgIGlmICh0aGlzLnRpbWVyICE9PSBudWxsKSB7XG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZmxhc2hUaW1lcikge1xuICAgICAgICAgICAgdGhpcy5mbGFzaFRpbWVyLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZmxhc2gpIHtcbiAgICAgICAgICAgIHRoaXMuZmxhc2gucmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLmZsYXNoID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuZmxhc2hUaW1lciA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBzdXBlci5kZXN0cnVjdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIGZsYXNoIG1lc3NhZ2UuXG4gICAgICovXG4gICAgY3JlYXRlKCkge1xuICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnZmxhc2guY3JlYXRlJywgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5mbGFzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgICAgICB0aGlzLmZsYXNoLmlubmVySFRNTCA9IHRoaXMubWVzc2FnZTtcbiAgICAgICAgdGhpcy5mbGFzaC5jbGFzc0xpc3QuYWRkKCdmbGFzaC1tZXNzYWdlJywgdGhpcy50eXBlKTtcbiAgICAgICAgdGhpcy5mbGFzaC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtY29udHJvbCcpO1xuICAgICAgICB0aGlzLmZsYXNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5yZW1vdmUoKSk7XG4gICAgICAgIHRoaXMuZmxhc2guYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4gdGhpcy5zdG9wVGltZXIoKSk7XG4gICAgICAgIHRoaXMuZmxhc2guYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB0aGlzLnN0YXJ0VGltZXIoKSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZHVyYXRpb24gPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmZsYXNoVGltZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgICAgIHRoaXMuZmxhc2hUaW1lci5jbGFzc0xpc3QuYWRkKCdmbGFzaC10aW1lcicpO1xuICAgICAgICAgICAgdGhpcy5mbGFzaC5hcHBlbmRDaGlsZCh0aGlzLmZsYXNoVGltZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mbGFzaC5jbGFzc0xpc3QuYWRkKCduby10aW1lcicpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIHRvIGJvZHlcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmZsYXNoKTtcblxuICAgICAgICB0aGlzLnNub3dib2FyZC50cmFuc2l0aW9uKHRoaXMuZmxhc2gsICdzaG93JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdGFydFRpbWVyKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdGhlIGZsYXNoIG1lc3NhZ2UuXG4gICAgICovXG4gICAgcmVtb3ZlKCkge1xuICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnZmxhc2gucmVtb3ZlJywgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5zdG9wVGltZXIoKTtcblxuICAgICAgICB0aGlzLnNub3dib2FyZC50cmFuc2l0aW9uKHRoaXMuZmxhc2gsICdoaWRlJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5mbGFzaC5yZW1vdmUoKTtcbiAgICAgICAgICAgIHRoaXMuZmxhc2ggPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5kZXN0cnVjdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYWxsIGZsYXNoIG1lc3NhZ2VzIGF2YWlsYWJsZSBvbiB0aGUgcGFnZS5cbiAgICAgKi9cbiAgICBjbGVhcigpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYm9keSA+IGRpdi5mbGFzaC1tZXNzYWdlJykuZm9yRWFjaCgoZWxlbWVudCkgPT4gZWxlbWVudC5yZW1vdmUoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RhcnRzIHRoZSB0aW1lciBmb3IgdGhpcyBmbGFzaCBtZXNzYWdlLlxuICAgICAqL1xuICAgIHN0YXJ0VGltZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmR1cmF0aW9uID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRpbWVyVHJhbnMgPSB0aGlzLnNub3dib2FyZC50cmFuc2l0aW9uKHRoaXMuZmxhc2hUaW1lciwgJ3RpbWVvdXQnLCBudWxsLCBgJHt0aGlzLmR1cmF0aW9ufS4wc2AsIHRydWUpO1xuICAgICAgICB0aGlzLnRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZW1vdmUoKSwgdGhpcy5kdXJhdGlvbiAqIDEwMDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0cyB0aGUgdGltZXIgZm9yIHRoaXMgZmxhc2ggbWVzc2FnZS5cbiAgICAgKi9cbiAgICBzdG9wVGltZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnRpbWVyVHJhbnMpIHtcbiAgICAgICAgICAgIHRoaXMudGltZXJUcmFucy5jYW5jZWwoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50aW1lcikge1xuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBTaW5nbGV0b24gZnJvbSAnLi4vYWJzdHJhY3RzL1NpbmdsZXRvbic7XG5cbi8qKlxuICogRGlzcGxheXMgYSBzdHJpcGUgYXQgdGhlIHRvcCBvZiB0aGUgcGFnZSB0aGF0IGluZGljYXRlcyBsb2FkaW5nLlxuICpcbiAqIEBjb3B5cmlnaHQgMjAyMSBXaW50ZXIuXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJpcGVMb2FkZXIgZXh0ZW5kcyBTaW5nbGV0b24ge1xuICAgIC8qKlxuICAgICAqIERlZmluZXMgZGVwZW5kZW5pY2VzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgICAqL1xuICAgIGRlcGVuZGVuY2llcygpIHtcbiAgICAgICAgcmV0dXJuIFsncmVxdWVzdCddO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZmluZXMgbGlzdGVuZXJzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBsaXN0ZW5zKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVhZHk6ICdyZWFkeScsXG4gICAgICAgICAgICBhamF4U3RhcnQ6ICdhamF4U3RhcnQnLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJlYWR5KCkge1xuICAgICAgICB0aGlzLmNvdW50ZXIgPSAwO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlU3RyaXBlKCk7XG4gICAgfVxuXG4gICAgYWpheFN0YXJ0KHByb21pc2UsIHJlcXVlc3QpIHtcbiAgICAgICAgaWYgKHJlcXVlc3Qub3B0aW9ucy5zdHJpcGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNob3coKTtcblxuICAgICAgICBwcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjcmVhdGVTdHJpcGUoKSB7XG4gICAgICAgIHRoaXMuaW5kaWNhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgICAgIHRoaXMuc3RyaXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgICAgIHRoaXMuc3RyaXBlTG9hZGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG5cbiAgICAgICAgdGhpcy5pbmRpY2F0b3IuY2xhc3NMaXN0LmFkZCgnc3RyaXBlLWxvYWRpbmctaW5kaWNhdG9yJywgJ2xvYWRlZCcpO1xuICAgICAgICB0aGlzLnN0cmlwZS5jbGFzc0xpc3QuYWRkKCdzdHJpcGUnKTtcbiAgICAgICAgdGhpcy5zdHJpcGVMb2FkZWQuY2xhc3NMaXN0LmFkZCgnc3RyaXBlLWxvYWRlZCcpO1xuXG4gICAgICAgIHRoaXMuaW5kaWNhdG9yLmFwcGVuZENoaWxkKHRoaXMuc3RyaXBlKTtcbiAgICAgICAgdGhpcy5pbmRpY2F0b3IuYXBwZW5kQ2hpbGQodGhpcy5zdHJpcGVMb2FkZWQpO1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5pbmRpY2F0b3IpO1xuICAgIH1cblxuICAgIHNob3coKSB7XG4gICAgICAgIHRoaXMuY291bnRlciArPSAxO1xuXG4gICAgICAgIGNvbnN0IG5ld1N0cmlwZSA9IHRoaXMuc3RyaXBlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgdGhpcy5pbmRpY2F0b3IuYXBwZW5kQ2hpbGQobmV3U3RyaXBlKTtcbiAgICAgICAgdGhpcy5zdHJpcGUucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMuc3RyaXBlID0gbmV3U3RyaXBlO1xuXG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPiAxKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluZGljYXRvci5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkZWQnKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCd3bi1sb2FkaW5nJyk7XG4gICAgfVxuXG4gICAgaGlkZShmb3JjZSkge1xuICAgICAgICB0aGlzLmNvdW50ZXIgLT0gMTtcblxuICAgICAgICBpZiAoZm9yY2UgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuY291bnRlciA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb3VudGVyIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMuaW5kaWNhdG9yLmNsYXNzTGlzdC5hZGQoJ2xvYWRlZCcpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCd3bi1sb2FkaW5nJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgU2luZ2xldG9uIGZyb20gJy4uL2Fic3RyYWN0cy9TaW5nbGV0b24nO1xuXG4vKipcbiAqIEVtYmVkcyB0aGUgXCJleHRyYXNcIiBzdHlsZXNoZWV0IGludG8gdGhlIHBhZ2UsIGlmIGl0IGlzIG5vdCBsb2FkZWQgdGhyb3VnaCB0aGUgdGhlbWUuXG4gKlxuICogQGNvcHlyaWdodCAyMDIxIFdpbnRlci5cbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0eWxlc2hlZXRMb2FkZXIgZXh0ZW5kcyBTaW5nbGV0b24ge1xuICAgIC8qKlxuICAgICAqIERlZmluZXMgbGlzdGVuZXJzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBsaXN0ZW5zKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVhZHk6ICdyZWFkeScsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVhZHkoKSB7XG4gICAgICAgIGxldCBzdHlsZXNMb2FkZWQgPSBmYWxzZTtcblxuICAgICAgICAvLyBEZXRlcm1pbmUgaWYgc3R5bGVzaGVldCBpcyBhbHJlYWR5IGxvYWRlZFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKS5mb3JFYWNoKChjc3MpID0+IHtcbiAgICAgICAgICAgIGlmIChjc3MuaHJlZi5lbmRzV2l0aCgnL21vZHVsZXMvc3lzdGVtL2Fzc2V0cy9jc3Mvc25vd2JvYXJkLmV4dHJhcy5jc3MnKSkge1xuICAgICAgICAgICAgICAgIHN0eWxlc0xvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghc3R5bGVzTG9hZGVkKSB7XG4gICAgICAgICAgICBjb25zdCBzdHlsZXNoZWV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICAgICAgc3R5bGVzaGVldC5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdzdHlsZXNoZWV0Jyk7XG4gICAgICAgICAgICBzdHlsZXNoZWV0LnNldEF0dHJpYnV0ZSgnaHJlZicsIHRoaXMuc25vd2JvYXJkLnVybCgpLmFzc2V0KCcvbW9kdWxlcy9zeXN0ZW0vYXNzZXRzL2Nzcy9zbm93Ym9hcmQuZXh0cmFzLmNzcycpKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVzaGVldCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgUGx1Z2luQmFzZSBmcm9tICcuLi9hYnN0cmFjdHMvUGx1Z2luQmFzZSc7XG5cbi8qKlxuICogUHJvdmlkZXMgdHJhbnNpdGlvbiBzdXBwb3J0IGZvciBlbGVtZW50cy5cbiAqXG4gKiBUcmFuc2l0aW9uIGFsbG93cyBDU1MgdHJhbnNpdGlvbnMgdG8gYmUgY29udHJvbGxlZCBhbmQgY2FsbGJhY2tzIHRvIGJlIHJ1biBvbmNlIGNvbXBsZXRlZC4gSXQgd29ya3Mgc2ltaWxhciB0byBWdWVcbiAqIHRyYW5zaXRpb25zIHdpdGggMyBzdGFnZXMgb2YgdHJhbnNpdGlvbiwgYW5kIGNsYXNzZXMgYXNzaWduZWQgdG8gdGhlIGVsZW1lbnQgd2l0aCB0aGUgdHJhbnNpdGlvbiBuYW1lIHN1ZmZpeGVkIHdpdGhcbiAqIHRoZSBzdGFnZSBvZiB0cmFuc2l0aW9uOlxuICpcbiAqICAtIGBpbmA6IEEgY2xhc3MgYXNzaWduZWQgdG8gdGhlIGVsZW1lbnQgZm9yIHRoZSBmaXJzdCBmcmFtZSBvZiB0aGUgdHJhbnNpdGlvbiwgcmVtb3ZlZCBhZnRlcndhcmRzLiBUaGlzIHNob3VsZCBiZVxuICogICAgICB1c2VkIHRvIGRlZmluZSB0aGUgaW5pdGlhbCBzdGF0ZSBvZiB0aGUgdHJhbnNpdGlvbi5cbiAqICAtIGBhY3RpdmVgOiBBIGNsYXNzIGFzc2lnbmVkIHRvIHRoZSBlbGVtZW50IGZvciB0aGUgZHVyYXRpb24gb2YgdGhlIHRyYW5zaXRpb24uIFRoaXMgc2hvdWxkIGJlIHVzZWQgdG8gZGVmaW5lIHRoZVxuICogICAgICB0cmFuc2l0aW9uIGl0c2VsZi5cbiAqICAtIGBvdXRgOiBBIGNsYXNzIGFzc2lnbmVkIHRvIHRoZSBlbGVtZW50IGFmdGVyIHRoZSBmaXJzdCBmcmFtZSBvZiB0aGUgdHJhbnNpdGlvbiBhbmQga2VwdCB0byB0aGUgZW5kIG9mIHRoZVxuICogICAgICB0cmFuc2l0aW9uLiBUaGlzIHNob3VsZCBkZWZpbmUgdGhlIGVuZCBzdGF0ZSBvZiB0aGUgdHJhbnNpdGlvbi5cbiAqXG4gKiBVc2FnZTpcbiAqICAgICAgU25vd2JvYXJkLnRyYW5zaXRpb24oZG9jdW1lbnQuZWxlbWVudCwgJ3RyYW5zaXRpb24nLCAoKSA9PiB7XG4gKiAgICAgICAgICBjb25zb2xlLmxvZygnUmVtb3ZlIGVsZW1lbnQgYWZ0ZXIgNyBzZWNvbmRzJyk7XG4gKiAgICAgICAgICB0aGlzLnJlbW92ZSgpO1xuICogICAgICB9LCAnN3MnKTtcbiAqXG4gKiBAY29weXJpZ2h0IDIwMjEgV2ludGVyLlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhbnNpdGlvbiBleHRlbmRzIFBsdWdpbkJhc2Uge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0byB0cmFuc2l0aW9uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRyYW5zaXRpb24gVGhlIG5hbWUgb2YgdGhlIHRyYW5zaXRpb24sIHRoaXMgcHJlZml4ZXMgdGhlIHN0YWdlcyBvZiB0cmFuc2l0aW9uLlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRvIGNhbGwgd2hlbiB0aGUgdHJhbnNpdGlvbiBlbmRzLlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBkdXJhdGlvbiBBbiBvcHRpb25hbCBvdmVycmlkZSBvbiB0aGUgdHJhbnNpdGlvbiBkdXJhdGlvbi4gTXVzdCBiZSBzcGVjaWZpZWQgYXMgJ3MnIChzZWNzKSBvciAnbXMnIChtc2VjcykuXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB0cmFpbFRvIElmIHRydWUsIHRoZSBcIm91dFwiIGNsYXNzIHdpbGwgcmVtYWluIGFmdGVyIHRoZSBlbmQgb2YgdGhlIHRyYW5zaXRpb24uXG4gICAgICovXG4gICAgY29uc3RydWN0KGVsZW1lbnQsIHRyYW5zaXRpb24sIGNhbGxiYWNrLCBkdXJhdGlvbiwgdHJhaWxUbykge1xuICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIEhUTUxFbGVtZW50IG11c3QgYmUgcHJvdmlkZWQgZm9yIHRyYW5zaXRpb25pbmcnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgICAgIGlmICh0eXBlb2YgdHJhbnNpdGlvbiAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVHJhbnNpdGlvbiBuYW1lIG11c3QgYmUgc3BlY2lmaWVkIGFzIGEgc3RyaW5nJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmFuc2l0aW9uID0gdHJhbnNpdGlvbjtcblxuICAgICAgICBpZiAoY2FsbGJhY2sgJiYgdHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbGxiYWNrIG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcblxuICAgICAgICBpZiAoZHVyYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuZHVyYXRpb24gPSB0aGlzLnBhcnNlRHVyYXRpb24oZHVyYXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kdXJhdGlvbiA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRyYWlsVG8gPSAodHJhaWxUbyA9PT0gdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5kb1RyYW5zaXRpb24oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNYXBzIGV2ZW50IGNsYXNzZXMgdG8gdGhlIGdpdmVuIHRyYW5zaXRpb24gc3RhdGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHsuLi5hbnl9IGFyZ3NcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgZXZlbnRDbGFzc2VzKC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3QgZXZlbnRDbGFzc2VzID0ge1xuICAgICAgICAgICAgaW46IGAke3RoaXMudHJhbnNpdGlvbn0taW5gLFxuICAgICAgICAgICAgYWN0aXZlOiBgJHt0aGlzLnRyYW5zaXRpb259LWFjdGl2ZWAsXG4gICAgICAgICAgICBvdXQ6IGAke3RoaXMudHJhbnNpdGlvbn0tb3V0YCxcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoYXJncy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKGV2ZW50Q2xhc3Nlcyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXR1cm5DbGFzc2VzID0gW107XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKGV2ZW50Q2xhc3NlcykuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IGVudHJ5O1xuXG4gICAgICAgICAgICBpZiAoYXJncy5pbmRleE9mKGtleSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuQ2xhc3Nlcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJldHVybkNsYXNzZXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXhlY3V0ZXMgdGhlIHRyYW5zaXRpb24uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBkb1RyYW5zaXRpb24oKSB7XG4gICAgICAgIC8vIEFkZCBkdXJhdGlvbiBvdmVycmlkZVxuICAgICAgICBpZiAodGhpcy5kdXJhdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IHRoaXMuZHVyYXRpb247XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlc2V0Q2xhc3NlcygpO1xuXG4gICAgICAgIC8vIFN0YXJ0IHRyYW5zaXRpb24gLSBzaG93IFwiaW5cIiBhbmQgXCJhY3RpdmVcIiBjbGFzc2VzXG4gICAgICAgIHRoaXMuZXZlbnRDbGFzc2VzKCdpbicsICdhY3RpdmUnKS5mb3JFYWNoKChldmVudENsYXNzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChldmVudENsYXNzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAvLyBFbnN1cmUgYSB0cmFuc2l0aW9uIGV4aXN0c1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudClbJ3RyYW5zaXRpb24tZHVyYXRpb24nXSAhPT0gJzBzJykge1xuICAgICAgICAgICAgICAgIC8vIExpc3RlbiBmb3IgdGhlIHRyYW5zaXRpb24gdG8gZW5kXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB0aGlzLm9uVHJhbnNpdGlvbkVuZCgpLCB7XG4gICAgICAgICAgICAgICAgICAgIG9uY2U6IHRydWUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuZXZlbnRDbGFzc2VzKCdpbicpWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5ldmVudENsYXNzZXMoJ291dCcpWzBdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldENsYXNzZXMoKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsbGJhY2suYXBwbHkodGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmRlc3RydWN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIGZ1bmN0aW9uIHdoZW4gdGhlIHRyYW5zaXRpb24gZW5kcy5cbiAgICAgKlxuICAgICAqIFdoZW4gYSB0cmFuc2l0aW9uIGVuZHMsIHRoZSBpbnN0YW5jZSBvZiB0aGUgdHJhbnNpdGlvbiBpcyBhdXRvbWF0aWNhbGx5IGRlc3RydWN0ZWQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBvblRyYW5zaXRpb25FbmQoKSB7XG4gICAgICAgIHRoaXMuZXZlbnRDbGFzc2VzKCdhY3RpdmUnLCAoIXRoaXMudHJhaWxUbykgPyAnb3V0JyA6ICcnKS5mb3JFYWNoKChldmVudENsYXNzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShldmVudENsYXNzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2suYXBwbHkodGhpcy5lbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSBkdXJhdGlvbiBvdmVycmlkZVxuICAgICAgICBpZiAodGhpcy5kdXJhdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRlc3RydWN0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FuY2VscyBhIHRyYW5zaXRpb24uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBjYW5jZWwoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKCkgPT4gdGhpcy5vblRyYW5zaXRpb25FbmQsIHtcbiAgICAgICAgICAgIG9uY2U6IHRydWUsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucmVzZXRDbGFzc2VzKCk7XG5cbiAgICAgICAgLy8gUmVtb3ZlIGR1cmF0aW9uIG92ZXJyaWRlXG4gICAgICAgIGlmICh0aGlzLmR1cmF0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENhbGwgZGVzdHJ1Y3RvclxuICAgICAgICB0aGlzLmRlc3RydWN0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXRzIHRoZSBjbGFzc2VzLCByZW1vdmluZyBhbnkgdHJhbnNpdGlvbiBjbGFzc2VzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgcmVzZXRDbGFzc2VzKCkge1xuICAgICAgICB0aGlzLmV2ZW50Q2xhc3NlcygpLmZvckVhY2goKGV2ZW50Q2xhc3MpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGV2ZW50Q2xhc3MpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgYSBnaXZlbiBkdXJhdGlvbiBhbmQgY29udmVydHMgaXQgdG8gYSBcIm1zXCIgdmFsdWUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZHVyYXRpb25cbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIHBhcnNlRHVyYXRpb24oZHVyYXRpb24pIHtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gL14oWzAtOV0rKFxcLlswLTldKyk/KShtP3MpPyQvLmV4ZWMoZHVyYXRpb24pO1xuICAgICAgICBjb25zdCBhbW91bnQgPSBOdW1iZXIocGFyc2VkWzFdKTtcbiAgICAgICAgY29uc3QgdW5pdCA9IChwYXJzZWRbM10gPT09ICdzJylcbiAgICAgICAgICAgID8gJ3NlYydcbiAgICAgICAgICAgIDogJ21zZWMnO1xuXG4gICAgICAgIHJldHVybiAodW5pdCA9PT0gJ3NlYycpXG4gICAgICAgICAgICA/IGAke2Ftb3VudCAqIDEwMDB9bXNgXG4gICAgICAgICAgICA6IGAke01hdGguZmxvb3IoYW1vdW50KX1tc2A7XG4gICAgfVxufVxuIiwiLyoqXG4gKiBJbnRlcm5hbCBwcm94eSBmb3IgU25vd2JvYXJkLlxuICpcbiAqIFRoaXMgaGFuZGxlciB3cmFwcyB0aGUgU25vd2JvYXJkIGluc3RhbmNlIHRoYXQgaXMgcGFzc2VkIHRvIHRoZSBjb25zdHJ1Y3RvciBvZiBwbHVnaW4gaW5zdGFuY2VzLlxuICogSXQgcHJldmVudHMgYWNjZXNzIHRvIHRoZSBmb2xsb3dpbmcgbWV0aG9kczpcbiAqICAtIGBhdHRhY2hBYnN0cmFjdHNgOiBObyBuZWVkIHRvIGF0dGFjaCBhYnN0cmFjdHMgYWdhaW4uXG4gKiAgLSBgbG9hZFV0aWx0aWVzYDogTm8gbmVlZCB0byBsb2FkIHV0aWxpdGllcyBhZ2Fpbi5cbiAqICAtIGBpbml0aWFsaXNlYDogU25vd2JvYXJkIGlzIGFscmVhZHkgaW5pdGlhbGlzZWQuXG4gKiAgLSBgaW5pdGlhbGlzZVNpbmdsZXRvbnNgOiBTaW5nbGV0b25zIGFyZSBhbHJlYWR5IGluaXRpYWxpc2VkLlxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZ2V0KHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwcm9wID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY29uc3QgcHJvcExvd2VyID0gcHJvcC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgICBpZiAoWydhdHRhY2hBYnN0cmFjdHMnLCAnbG9hZFV0aWxpdGllcycsICdpbml0aWFsaXNlJywgJ2luaXRpYWxpc2VTaW5nbGV0b25zJ10uaW5jbHVkZXMocHJvcCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdSBjYW5ub3QgdXNlIHRoZSBcIiR7cHJvcH1cIiBTbm93Ym9hcmQgbWV0aG9kIHdpdGhpbiBhIHBsdWdpbi5gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRhcmdldC5oYXNQbHVnaW4ocHJvcExvd2VyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoLi4ucGFyYW1zKSA9PiBSZWZsZWN0LmdldCh0YXJnZXQsICdwbHVnaW5zJylbcHJvcExvd2VyXS5nZXRJbnN0YW5jZSguLi5wYXJhbXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0KHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpO1xuICAgIH0sXG5cbiAgICBoYXModGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcHJvcCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb3BMb3dlciA9IHByb3AudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgICAgaWYgKFsnYXR0YWNoQWJzdHJhY3RzJywgJ2xvYWRVdGlsaXRpZXMnLCAnaW5pdGlhbGlzZScsICdpbml0aWFsaXNlU2luZ2xldG9ucyddLmluY2x1ZGVzKHByb3ApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGFyZ2V0Lmhhc1BsdWdpbihwcm9wTG93ZXIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUmVmbGVjdC5oYXModGFyZ2V0LCBwcm9wKTtcbiAgICB9LFxufTtcbiIsImltcG9ydCBQbHVnaW5CYXNlIGZyb20gJy4uL2Fic3RyYWN0cy9QbHVnaW5CYXNlJztcbmltcG9ydCBTaW5nbGV0b24gZnJvbSAnLi4vYWJzdHJhY3RzL1NpbmdsZXRvbic7XG5pbXBvcnQgSW5uZXJQcm94eUhhbmRsZXIgZnJvbSAnLi9Jbm5lclByb3h5SGFuZGxlcic7XG5cbi8qKlxuICogUGx1Z2luIGxvYWRlciBjbGFzcy5cbiAqXG4gKiBUaGlzIGlzIGEgcHJvdmlkZXIgKGZhY3RvcnkpIGNsYXNzIGZvciBhIHNpbmdsZSBwbHVnaW4gYW5kIHByb3ZpZGVzIHRoZSBsaW5rIGJldHdlZW4gU25vd2JvYXJkIGZyYW1ld29yayBmdW5jdGlvbmFsaXR5XG4gKiBhbmQgdGhlIHVuZGVybHlpbmcgcGx1Z2luIGluc3RhbmNlcy4gSXQgYWxzbyBwcm92aWRlcyBzb21lIGJhc2ljIG1vY2tpbmcgb2YgcGx1Z2luIG1ldGhvZHMgZm9yIHRlc3RpbmcuXG4gKlxuICogQGNvcHlyaWdodCAyMDIxIFdpbnRlci5cbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsdWdpbkxvYWRlciB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IuXG4gICAgICpcbiAgICAgKiBCaW5kcyB0aGUgV2ludGVyIGZyYW1ld29yayB0byB0aGUgaW5zdGFuY2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7U25vd2JvYXJkfSBzbm93Ym9hcmRcbiAgICAgKiBAcGFyYW0ge1BsdWdpbkJhc2V9IGluc3RhbmNlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IobmFtZSwgc25vd2JvYXJkLCBpbnN0YW5jZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnNub3dib2FyZCA9IG5ldyBQcm94eShcbiAgICAgICAgICAgIHNub3dib2FyZCxcbiAgICAgICAgICAgIElubmVyUHJveHlIYW5kbGVyLFxuICAgICAgICApO1xuICAgICAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XG5cbiAgICAgICAgLy8gRnJlZXplIGluc3RhbmNlIHRoYXQgaGFzIGJlZW4gaW5zZXJ0ZWQgaW50byB0aGlzIGxvYWRlclxuICAgICAgICBPYmplY3QuZnJlZXplKHRoaXMuaW5zdGFuY2UpO1xuXG4gICAgICAgIHRoaXMuaW5zdGFuY2VzID0gW107XG4gICAgICAgIHRoaXMuc2luZ2xldG9uID0ge1xuICAgICAgICAgICAgaW5pdGlhbGlzZWQ6IGZhbHNlLFxuICAgICAgICB9O1xuICAgICAgICAvLyBQcmV2ZW50IGZ1cnRoZXIgZXh0ZW5zaW9uIG9mIHRoZSBzaW5nbGV0b24gc3RhdHVzIG9iamVjdFxuICAgICAgICBPYmplY3Quc2VhbCh0aGlzLnNpbmdsZXRvbik7XG5cbiAgICAgICAgdGhpcy5tb2NrcyA9IHt9O1xuICAgICAgICB0aGlzLm9yaWdpbmFsRnVuY3Rpb25zID0ge307XG5cbiAgICAgICAgLy8gRnJlZXplIGxvYWRlciBpdHNlbGZcbiAgICAgICAgT2JqZWN0LmZyZWV6ZShQbHVnaW5Mb2FkZXIucHJvdG90eXBlKTtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIHRoZSBjdXJyZW50IHBsdWdpbiBoYXMgYSBzcGVjaWZpYyBtZXRob2QgYXZhaWxhYmxlLlxuICAgICAqXG4gICAgICogUmV0dXJucyBmYWxzZSBpZiB0aGUgY3VycmVudCBwbHVnaW4gaXMgYSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2ROYW1lXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaGFzTWV0aG9kKG1ldGhvZE5hbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNGdW5jdGlvbigpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKHR5cGVvZiB0aGlzLmluc3RhbmNlLnByb3RvdHlwZVttZXRob2ROYW1lXSA9PT0gJ2Z1bmN0aW9uJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbHMgYSBwcm90b3R5cGUgbWV0aG9kIGZvciBhIHBsdWdpbi4gVGhpcyBzaG91bGQgZ2VuZXJhbGx5IGJlIHVzZWQgZm9yIFwic3RhdGljXCIgY2FsbHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kTmFtZVxuICAgICAqIEBwYXJhbSB7Li4ufSBhcmdzXG4gICAgICogQHJldHVybnMge2FueX1cbiAgICAgKi9cbiAgICBjYWxsTWV0aG9kKC4uLnBhcmFtZXRlcnMpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNGdW5jdGlvbigpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFyZ3MgPSBwYXJhbWV0ZXJzO1xuICAgICAgICBjb25zdCBtZXRob2ROYW1lID0gYXJncy5zaGlmdCgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlLnByb3RvdHlwZVttZXRob2ROYW1lXShhcmdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGluc3RhbmNlIG9mIHRoZSBjdXJyZW50IHBsdWdpbi5cbiAgICAgKlxuICAgICAqIC0gSWYgdGhpcyBpcyBhIGNhbGxiYWNrIGZ1bmN0aW9uIHBsdWdpbiwgdGhlIGZ1bmN0aW9uIHdpbGwgYmUgcmV0dXJuZWQuXG4gICAgICogLSBJZiB0aGlzIGlzIGEgc2luZ2xldG9uLCB0aGUgc2luZ2xlIGluc3RhbmNlIG9mIHRoZSBwbHVnaW4gd2lsbCBiZSByZXR1cm5lZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQbHVnaW5CYXNlfEZ1bmN0aW9ufVxuICAgICAqL1xuICAgIGdldEluc3RhbmNlKC4uLnBhcmFtZXRlcnMpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNGdW5jdGlvbigpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZSguLi5wYXJhbWV0ZXJzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuZGVwZW5kZW5jaWVzRnVsZmlsbGVkKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHVubWV0ID0gdGhpcy5nZXREZXBlbmRlbmNpZXMoKS5maWx0ZXIoKGl0ZW0pID0+ICF0aGlzLnNub3dib2FyZC5nZXRQbHVnaW5OYW1lcygpLmluY2x1ZGVzKGl0ZW0pKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIFwiJHt0aGlzLm5hbWV9XCIgcGx1Z2luIHJlcXVpcmVzIHRoZSBmb2xsb3dpbmcgcGx1Z2luczogJHt1bm1ldC5qb2luKCcsICcpfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzU2luZ2xldG9uKCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmluc3RhbmNlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxpc2VTaW5nbGV0b24oLi4ucGFyYW1ldGVycyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFwcGx5IG1vY2tlZCBtZXRob2RzXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5tb2NrcykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMub3JpZ2luYWxGdW5jdGlvbnMpLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IFttZXRob2ROYW1lLCBjYWxsYmFja10gPSBlbnRyeTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXNbMF1bbWV0aG9kTmFtZV0gPSBjYWxsYmFjaztcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLm1vY2tzKS5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBbbWV0aG9kTmFtZSwgY2FsbGJhY2tdID0gZW50cnk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2VzWzBdW21ldGhvZE5hbWVdID0gKC4uLnBhcmFtcykgPT4gY2FsbGJhY2sodGhpcywgLi4ucGFyYW1zKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQXBwbHkgbW9ja2VkIG1ldGhvZHMgdG8gcHJvdG90eXBlXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLm1vY2tzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLm9yaWdpbmFsRnVuY3Rpb25zKS5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IFttZXRob2ROYW1lLCBjYWxsYmFja10gPSBlbnRyeTtcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLnByb3RvdHlwZVttZXRob2ROYW1lXSA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLm1vY2tzKS5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IFttZXRob2ROYW1lLCBjYWxsYmFja10gPSBlbnRyeTtcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLnByb3RvdHlwZVttZXRob2ROYW1lXSA9ICguLi5wYXJhbXMpID0+IGNhbGxiYWNrKHRoaXMsIC4uLnBhcmFtcyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5ld0luc3RhbmNlID0gbmV3IHRoaXMuaW5zdGFuY2UodGhpcy5zbm93Ym9hcmQsIC4uLnBhcmFtZXRlcnMpO1xuICAgICAgICBuZXdJbnN0YW5jZS5kZXRhY2ggPSAoKSA9PiB0aGlzLmluc3RhbmNlcy5zcGxpY2UodGhpcy5pbnN0YW5jZXMuaW5kZXhPZihuZXdJbnN0YW5jZSksIDEpO1xuICAgICAgICBuZXdJbnN0YW5jZS5jb25zdHJ1Y3QoLi4ucGFyYW1ldGVycyk7XG4gICAgICAgIHRoaXMuaW5zdGFuY2VzLnB1c2gobmV3SW5zdGFuY2UpO1xuXG4gICAgICAgIHJldHVybiBuZXdJbnN0YW5jZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGFsbCBpbnN0YW5jZXMgb2YgdGhlIGN1cnJlbnQgcGx1Z2luLlxuICAgICAqXG4gICAgICogSWYgdGhpcyBwbHVnaW4gaXMgYSBjYWxsYmFjayBmdW5jdGlvbiBwbHVnaW4sIGFuIGVtcHR5IGFycmF5IHdpbGwgYmUgcmV0dXJuZWQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UGx1Z2luQmFzZVtdfVxuICAgICAqL1xuICAgIGdldEluc3RhbmNlcygpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNGdW5jdGlvbigpKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiB0aGUgY3VycmVudCBwbHVnaW4gaXMgYSBzaW1wbGUgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc0Z1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gKHR5cGVvZiB0aGlzLmluc3RhbmNlID09PSAnZnVuY3Rpb24nICYmIHRoaXMuaW5zdGFuY2UucHJvdG90eXBlIGluc3RhbmNlb2YgUGx1Z2luQmFzZSA9PT0gZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgdGhlIGN1cnJlbnQgcGx1Z2luIGlzIGEgc2luZ2xldG9uLlxuICAgICAqXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNTaW5nbGV0b24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlLnByb3RvdHlwZSBpbnN0YW5jZW9mIFNpbmdsZXRvbiA9PT0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIGEgc2luZ2xldG9uIGhhcyBiZWVuIGluaXRpYWxpc2VkLlxuICAgICAqXG4gICAgICogTm9ybWFsIHBsdWdpbnMgd2lsbCBhbHdheXMgcmV0dXJuIHRydWUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc0luaXRpYWxpc2VkKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNTaW5nbGV0b24oKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5zaW5nbGV0b24uaW5pdGlhbGlzZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGlzZXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIGluaXRpYWxpc2VTaW5nbGV0b24oLi4ucGFyYW1ldGVycykge1xuICAgICAgICBpZiAoIXRoaXMuaXNTaW5nbGV0b24oKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmV3SW5zdGFuY2UgPSBuZXcgdGhpcy5pbnN0YW5jZSh0aGlzLnNub3dib2FyZCwgLi4ucGFyYW1ldGVycyk7XG4gICAgICAgIG5ld0luc3RhbmNlLmRldGFjaCA9ICgpID0+IHRoaXMuaW5zdGFuY2VzLnNwbGljZSh0aGlzLmluc3RhbmNlcy5pbmRleE9mKG5ld0luc3RhbmNlKSwgMSk7XG4gICAgICAgIG5ld0luc3RhbmNlLmNvbnN0cnVjdCguLi5wYXJhbWV0ZXJzKTtcbiAgICAgICAgdGhpcy5pbnN0YW5jZXMucHVzaChuZXdJbnN0YW5jZSk7XG4gICAgICAgIHRoaXMuc2luZ2xldG9uLmluaXRpYWxpc2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBkZXBlbmRlbmNpZXMgb2YgdGhlIGN1cnJlbnQgcGx1Z2luLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgICAqL1xuICAgIGdldERlcGVuZGVuY2llcygpIHtcbiAgICAgICAgLy8gQ2FsbGJhY2sgZnVuY3Rpb25zIGNhbm5vdCBoYXZlIGRlcGVuZGVuY2llcy5cbiAgICAgICAgaWYgKHRoaXMuaXNGdW5jdGlvbigpKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cblxuICAgICAgICAvLyBObyBkZXBlbmRlbmN5IG1ldGhvZCBzcGVjaWZpZWQuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5pbnN0YW5jZS5wcm90b3R5cGUuZGVwZW5kZW5jaWVzICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5wcm90b3R5cGUuZGVwZW5kZW5jaWVzKCkubWFwKChpdGVtKSA9PiBpdGVtLnRvTG93ZXJDYXNlKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgdGhlIGN1cnJlbnQgcGx1Z2luIGhhcyBhbGwgaXRzIGRlcGVuZGVuY2llcyBmdWxmaWxsZWQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBkZXBlbmRlbmNpZXNGdWxmaWxsZWQoKSB7XG4gICAgICAgIGNvbnN0IGRlcGVuZGVuY2llcyA9IHRoaXMuZ2V0RGVwZW5kZW5jaWVzKCk7XG5cbiAgICAgICAgbGV0IGZ1bGZpbGxlZCA9IHRydWU7XG4gICAgICAgIGRlcGVuZGVuY2llcy5mb3JFYWNoKChwbHVnaW4pID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5zbm93Ym9hcmQuaGFzUGx1Z2luKHBsdWdpbikpIHtcbiAgICAgICAgICAgICAgICBmdWxmaWxsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bGZpbGxlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbGxvd3MgYSBtZXRob2Qgb2YgYW4gaW5zdGFuY2UgdG8gYmUgbW9ja2VkIGZvciB0ZXN0aW5nLlxuICAgICAqXG4gICAgICogVGhpcyBtb2NrIHdpbGwgYmUgYXBwbGllZCBmb3IgdGhlIGxpZmUgb2YgYW4gaW5zdGFuY2UuIEZvciBzaW5nbGV0b25zLCB0aGUgbW9jayB3aWxsIGJlIGFwcGxpZWQgZm9yIHRoZSBsaWZlXG4gICAgICogb2YgdGhlIHBhZ2UuXG4gICAgICpcbiAgICAgKiBNb2NrcyBjYW5ub3QgYmUgYXBwbGllZCB0byBjYWxsYmFjayBmdW5jdGlvbiBwbHVnaW5zLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZE5hbWVcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqL1xuICAgIG1vY2sobWV0aG9kTmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHRoaXMuaXNGdW5jdGlvbigpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuaW5zdGFuY2UucHJvdG90eXBlW21ldGhvZE5hbWVdKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZ1bmN0aW9uIFwiJHttZXRob2ROYW1lfVwiIGRvZXMgbm90IGV4aXN0IGFuZCBjYW5ub3QgYmUgbW9ja2VkYCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1vY2tzW21ldGhvZE5hbWVdID0gY2FsbGJhY2s7XG4gICAgICAgIHRoaXMub3JpZ2luYWxGdW5jdGlvbnNbbWV0aG9kTmFtZV0gPSB0aGlzLmluc3RhbmNlLnByb3RvdHlwZVttZXRob2ROYW1lXTtcblxuICAgICAgICBpZiAodGhpcy5pc1NpbmdsZXRvbigpICYmIHRoaXMuaW5zdGFuY2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXNlU2luZ2xldG9uKCk7XG5cbiAgICAgICAgICAgIC8vIEFwcGx5IG1vY2tlZCBtZXRob2RcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2VzWzBdW21ldGhvZE5hbWVdID0gKC4uLnBhcmFtZXRlcnMpID0+IGNhbGxiYWNrKHRoaXMsIC4uLnBhcmFtZXRlcnMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIG1vY2sgY2FsbGJhY2sgZnJvbSBmdXR1cmUgaW5zdGFuY2VzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZE5hbWVcbiAgICAgKi9cbiAgICB1bm1vY2sobWV0aG9kTmFtZSkge1xuICAgICAgICBpZiAodGhpcy5pc0Z1bmN0aW9uKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMubW9ja3NbbWV0aG9kTmFtZV0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlzU2luZ2xldG9uKCkpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2VzWzBdW21ldGhvZE5hbWVdID0gdGhpcy5vcmlnaW5hbEZ1bmN0aW9uc1ttZXRob2ROYW1lXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSB0aGlzLm1vY2tzW21ldGhvZE5hbWVdO1xuICAgICAgICBkZWxldGUgdGhpcy5vcmlnaW5hbEZ1bmN0aW9uc1ttZXRob2ROYW1lXTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgZ2V0KHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwcm9wID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY29uc3QgcHJvcExvd2VyID0gcHJvcC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgICBpZiAodGFyZ2V0Lmhhc1BsdWdpbihwcm9wTG93ZXIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICguLi5wYXJhbXMpID0+IFJlZmxlY3QuZ2V0KHRhcmdldCwgJ3BsdWdpbnMnKVtwcm9wTG93ZXJdLmdldEluc3RhbmNlKC4uLnBhcmFtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXQodGFyZ2V0LCBwcm9wLCByZWNlaXZlcik7XG4gICAgfSxcblxuICAgIGhhcyh0YXJnZXQsIHByb3ApIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwcm9wID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY29uc3QgcHJvcExvd2VyID0gcHJvcC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgICBpZiAodGFyZ2V0Lmhhc1BsdWdpbihwcm9wTG93ZXIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUmVmbGVjdC5oYXModGFyZ2V0LCBwcm9wKTtcbiAgICB9LFxufTtcbiIsImltcG9ydCBQbHVnaW5CYXNlIGZyb20gJy4uL2Fic3RyYWN0cy9QbHVnaW5CYXNlJztcbmltcG9ydCBTaW5nbGV0b24gZnJvbSAnLi4vYWJzdHJhY3RzL1NpbmdsZXRvbic7XG5pbXBvcnQgUGx1Z2luTG9hZGVyIGZyb20gJy4vUGx1Z2luTG9hZGVyJztcblxuaW1wb3J0IENvb2tpZSBmcm9tICcuLi91dGlsaXRpZXMvQ29va2llJztcbmltcG9ydCBKc29uUGFyc2VyIGZyb20gJy4uL3V0aWxpdGllcy9Kc29uUGFyc2VyJztcbmltcG9ydCBTYW5pdGl6ZXIgZnJvbSAnLi4vdXRpbGl0aWVzL1Nhbml0aXplcic7XG5pbXBvcnQgVXJsIGZyb20gJy4uL3V0aWxpdGllcy9VcmwnO1xuXG4vKipcbiAqIFNub3dib2FyZCAtIHRoZSBXaW50ZXIgSmF2YVNjcmlwdCBmcmFtZXdvcmsuXG4gKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBiYXNlIG9mIGEgbW9kZXJuIHRha2Ugb24gdGhlIFdpbnRlciBKUyBmcmFtZXdvcmssIGJlaW5nIGZ1bGx5IGV4dGVuc2libGUgYW5kIHRha2luZyBhZHZhbnRhZ2VcbiAqIG9mIG1vZGVybiBKYXZhU2NyaXB0IGZlYXR1cmVzIGJ5IGxldmVyYWdpbmcgdGhlIExhcmF2ZWwgTWl4IGNvbXBpbGF0aW9uIGZyYW1ld29yay4gSXQgYWxzbyBpcyBjb2RlZCB1cCB0byByZW1vdmUgdGhlXG4gKiBkZXBlbmRlbmN5IG9mIGpRdWVyeS5cbiAqXG4gKiBAY29weXJpZ2h0IDIwMjEgV2ludGVyLlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqIEBsaW5rIGh0dHBzOi8vd2ludGVyY21zLmNvbS9kb2NzL3Nub3dib2FyZC9pbnRyb2R1Y3Rpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU25vd2JvYXJkIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3Rvci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gYXV0b1NpbmdsZXRvbnMgQXV0b21hdGljYWxseSBsb2FkIHNpbmdsZXRvbnMgd2hlbiBET00gaXMgcmVhZHkuIERlZmF1bHQ6IGB0cnVlYC5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGRlYnVnIFdoZXRoZXIgZGVidWdnaW5nIGxvZ3Mgc2hvdWxkIGJlIHNob3duLiBEZWZhdWx0OiBgZmFsc2VgLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGF1dG9TaW5nbGV0b25zLCBkZWJ1Zykge1xuICAgICAgICB0aGlzLmRlYnVnRW5hYmxlZCA9ICh0eXBlb2YgZGVidWcgPT09ICdib29sZWFuJyAmJiBkZWJ1ZyA9PT0gdHJ1ZSk7XG4gICAgICAgIHRoaXMuYXV0b0luaXRTaW5nbGV0b25zID0gKHR5cGVvZiBhdXRvU2luZ2xldG9ucyA9PT0gJ2Jvb2xlYW4nICYmIGF1dG9TaW5nbGV0b25zID09PSBmYWxzZSk7XG4gICAgICAgIHRoaXMucGx1Z2lucyA9IHt9O1xuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IHt9O1xuICAgICAgICB0aGlzLmZvdW5kQmFzZVVybCA9IG51bGw7XG4gICAgICAgIHRoaXMucmVhZGluZXNzID0ge1xuICAgICAgICAgICAgZG9tOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICAgICAgLy8gU2VhbCByZWFkaW5lc3MgZnJvbSBiZWluZyBhZGRlZCB0byBmdXJ0aGVyLCBidXQgYWxsb3cgdGhlIHByb3BlcnRpZXMgdG8gYmUgbW9kaWZpZWQuXG4gICAgICAgIE9iamVjdC5zZWFsKHRoaXMucmVhZGluZXNzKTtcbiAgICAgICAgdGhpcy5hdHRhY2hBYnN0cmFjdHMoKTtcblxuICAgICAgICAvLyBGcmVlemUgdGhlIFNub3dib2FyZCBjbGFzcyB0byBwcmV2ZW50IGZ1cnRoZXIgbW9kaWZpY2F0aW9ucy5cbiAgICAgICAgT2JqZWN0LmZyZWV6ZShTbm93Ym9hcmQucHJvdG90eXBlKTtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcblxuICAgICAgICB0aGlzLmxvYWRVdGlsaXRpZXMoKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXNlKCk7XG5cbiAgICAgICAgdGhpcy5kZWJ1ZygnU25vd2JvYXJkIGZyYW1ld29yayBpbml0aWFsaXNlZCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEF0dGFjaGVzIGFic3RyYWN0IGNsYXNzZXMgYXMgcHJvcGVydGllcyBvZiB0aGUgU25vd2JvYXJkIGNsYXNzLlxuICAgICAqXG4gICAgICogVGhpcyB3aWxsIGFsbG93IEphdmFzY3JpcHQgZnVuY3Rpb25hbGl0eSB3aXRoIG5vIGJ1aWxkIHByb2Nlc3MgdG8gc3RpbGwgZXh0ZW5kIHRoZXNlIGFic3RyYWN0cyBieSBwcmVmaXhpbmdcbiAgICAgKiB0aGVtIHdpdGggXCJTbm93Ym9hcmRcIi5cbiAgICAgKlxuICAgICAqIGBgYFxuICAgICAqIGNsYXNzIE15Q2xhc3MgZXh0ZW5kcyBTbm93Ym9hcmQuUGx1Z2luQmFzZSB7XG4gICAgICogICAgIC4uLlxuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBhdHRhY2hBYnN0cmFjdHMoKSB7XG4gICAgICAgIHRoaXMuUGx1Z2luQmFzZSA9IFBsdWdpbkJhc2U7XG4gICAgICAgIHRoaXMuU2luZ2xldG9uID0gU2luZ2xldG9uO1xuXG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcy5QbHVnaW5CYXNlLnByb3RvdHlwZSk7XG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcy5QbHVnaW5CYXNlKTtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZSh0aGlzLlNpbmdsZXRvbi5wcm90b3R5cGUpO1xuICAgICAgICBPYmplY3QuZnJlZXplKHRoaXMuU2luZ2xldG9uKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkcyB0aGUgZGVmYXVsdCB1dGlsaXRpZXMuXG4gICAgICovXG4gICAgbG9hZFV0aWxpdGllcygpIHtcbiAgICAgICAgdGhpcy5hZGRQbHVnaW4oJ2Nvb2tpZScsIENvb2tpZSk7XG4gICAgICAgIHRoaXMuYWRkUGx1Z2luKCdqc29uUGFyc2VyJywgSnNvblBhcnNlcik7XG4gICAgICAgIHRoaXMuYWRkUGx1Z2luKCdzYW5pdGl6ZXInLCBTYW5pdGl6ZXIpO1xuICAgICAgICB0aGlzLmFkZFBsdWdpbigndXJsJywgVXJsKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXNlcyB0aGUgZnJhbWV3b3JrLlxuICAgICAqXG4gICAgICogQXR0YWNoZXMgYSBsaXN0ZW5lciBmb3IgdGhlIERPTSBiZWluZyByZWFkeSBhbmQgdHJpZ2dlcnMgYSBnbG9iYWwgXCJyZWFkeVwiIGV2ZW50IGZvciBwbHVnaW5zIHRvIGJlZ2luIGF0dGFjaGluZ1xuICAgICAqIHRoZW1zZWx2ZXMgdG8gdGhlIERPTS5cbiAgICAgKi9cbiAgICBpbml0aWFsaXNlKCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmF1dG9Jbml0U2luZ2xldG9ucykge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGlzZVNpbmdsZXRvbnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZ2xvYmFsRXZlbnQoJ3JlYWR5Jyk7XG4gICAgICAgICAgICB0aGlzLnJlYWRpbmVzcy5kb20gPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXNlcyBhbiBpbnN0YW5jZSBvZiBldmVyeSBzaW5nbGV0b24uXG4gICAgICovXG4gICAgaW5pdGlhbGlzZVNpbmdsZXRvbnMoKSB7XG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5wbHVnaW5zKS5mb3JFYWNoKChwbHVnaW4pID0+IHtcbiAgICAgICAgICAgIGlmIChwbHVnaW4uaXNTaW5nbGV0b24oKSAmJiBwbHVnaW4uZGVwZW5kZW5jaWVzRnVsZmlsbGVkKCkpIHtcbiAgICAgICAgICAgICAgICBwbHVnaW4uaW5pdGlhbGlzZVNpbmdsZXRvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgcGx1Z2luIHRvIHRoZSBmcmFtZXdvcmsuXG4gICAgICpcbiAgICAgKiBQbHVnaW5zIGFyZSB0aGUgY29ybmVyc3RvbmUgZm9yIGFkZGl0aW9uYWwgZnVuY3Rpb25hbGl0eSBmb3IgU25vd2JvYXJkLiBBIHBsdWdpbiBtdXN0IGVpdGhlciBiZSBhbiBFUzIwMTUgY2xhc3NcbiAgICAgKiB0aGF0IGV4dGVuZHMgdGhlIFBsdWdpbkJhc2Ugb3IgU2luZ2xldG9uIGFic3RyYWN0IGNsYXNzZXMsIG9yIGEgc2ltcGxlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgICAqXG4gICAgICogV2hlbiBhIHBsdWdpbiBpcyBhZGRlZCwgaXQgaXMgYXV0b21hdGljYWxseSBhc3NpZ25lZCBhcyBhIG5ldyBtYWdpYyBtZXRob2QgaW4gdGhlIFNub3dib2FyZCBjbGFzcyB1c2luZyB0aGUgbmFtZVxuICAgICAqIHBhcmFtZXRlciwgYW5kIGNhbiBiZSBjYWxsZWQgdmlhIHRoaXMgbWV0aG9kLiBUaGlzIG1ldGhvZCB3aWxsIGFsd2F5cyBiZSB0aGUgXCJsb3dlcmNhc2VcIiB2ZXJzaW9uIG9mIHRoaXMgbmFtZS5cbiAgICAgKlxuICAgICAqIEZvciBleGFtcGxlLCBpZiBhIHBsdWdpbiBpcyBhc3NpZ25lZCB0byB0aGUgbmFtZSBcIm15UGx1Z2luXCIsIGl0IGNhbiBiZSBjYWxsZWQgdmlhIGBTbm93Ym9hcmQubXlwbHVnaW4oKWAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7UGx1Z2luQmFzZXxGdW5jdGlvbn0gaW5zdGFuY2VcbiAgICAgKi9cbiAgICBhZGRQbHVnaW4obmFtZSwgaW5zdGFuY2UpIHtcbiAgICAgICAgY29uc3QgbG93ZXJOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIGlmICh0aGlzLmhhc1BsdWdpbihsb3dlck5hbWUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEEgcGx1Z2luIGNhbGxlZCBcIiR7bmFtZX1cIiBpcyBhbHJlYWR5IHJlZ2lzdGVyZWQuYCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGluc3RhbmNlICE9PSAnZnVuY3Rpb24nICYmIGluc3RhbmNlIGluc3RhbmNlb2YgUGx1Z2luQmFzZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHByb3ZpZGVkIHBsdWdpbiBtdXN0IGV4dGVuZCB0aGUgUGx1Z2luQmFzZSBjbGFzcywgb3IgbXVzdCBiZSBhIGNhbGxiYWNrIGZ1bmN0aW9uLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXNbbmFtZV0gIT09IHVuZGVmaW5lZCB8fCB0aGlzW2xvd2VyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgZ2l2ZW4gbmFtZSBpcyBhbHJlYWR5IGluIHVzZSBmb3IgYSBwcm9wZXJ0eSBvciBtZXRob2Qgb2YgdGhlIFNub3dib2FyZCBjbGFzcy4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucGx1Z2luc1tsb3dlck5hbWVdID0gbmV3IFBsdWdpbkxvYWRlcihsb3dlck5hbWUsIHRoaXMsIGluc3RhbmNlKTtcblxuICAgICAgICB0aGlzLmRlYnVnKGBQbHVnaW4gXCIke25hbWV9XCIgcmVnaXN0ZXJlZGApO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIGFueSBzaW5nbGV0b25zIG5vdyBoYXZlIHRoZWlyIGRlcGVuZGVuY2llcyBmdWxmaWxsZWQsIGFuZCBmaXJlIHRoZWlyIFwicmVhZHlcIiBoYW5kbGVyIGlmIHdlJ3JlXG4gICAgICAgIC8vIGluIGEgcmVhZHkgc3RhdGUuXG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5nZXRQbHVnaW5zKCkpLmZvckVhY2goKHBsdWdpbikgPT4ge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHBsdWdpbi5pc1NpbmdsZXRvbigpXG4gICAgICAgICAgICAgICAgJiYgIXBsdWdpbi5pc0luaXRpYWxpc2VkKClcbiAgICAgICAgICAgICAgICAmJiBwbHVnaW4uZGVwZW5kZW5jaWVzRnVsZmlsbGVkKClcbiAgICAgICAgICAgICAgICAmJiBwbHVnaW4uaGFzTWV0aG9kKCdsaXN0ZW5zJylcbiAgICAgICAgICAgICAgICAmJiBPYmplY3Qua2V5cyhwbHVnaW4uY2FsbE1ldGhvZCgnbGlzdGVucycpKS5pbmNsdWRlcygncmVhZHknKVxuICAgICAgICAgICAgICAgICYmIHRoaXMucmVhZGluZXNzLmRvbVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVhZHlNZXRob2QgPSBwbHVnaW4uY2FsbE1ldGhvZCgnbGlzdGVucycpLnJlYWR5O1xuICAgICAgICAgICAgICAgIHBsdWdpbi5jYWxsTWV0aG9kKHJlYWR5TWV0aG9kKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIHBsdWdpbi5cbiAgICAgKlxuICAgICAqIFJlbW92ZXMgYSBwbHVnaW4gZnJvbSBTbm93Ym9hcmQsIGNhbGxpbmcgdGhlIGRlc3RydWN0b3IgbWV0aG9kIGZvciBhbGwgYWN0aXZlIGluc3RhbmNlcyBvZiB0aGUgcGx1Z2luLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICByZW1vdmVQbHVnaW4obmFtZSkge1xuICAgICAgICBjb25zdCBsb3dlck5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmhhc1BsdWdpbihsb3dlck5hbWUpKSB7XG4gICAgICAgICAgICB0aGlzLmRlYnVnKGBQbHVnaW4gXCIke25hbWV9XCIgYWxyZWFkeSByZW1vdmVkYCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDYWxsIGRlc3RydWN0b3JzIGZvciBhbGwgaW5zdGFuY2VzXG4gICAgICAgIHRoaXMucGx1Z2luc1tsb3dlck5hbWVdLmdldEluc3RhbmNlcygpLmZvckVhY2goKGluc3RhbmNlKSA9PiB7XG4gICAgICAgICAgICBpbnN0YW5jZS5kZXN0cnVjdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkZWxldGUgdGhpcy5wbHVnaW5zW2xvd2VyTmFtZV07XG4gICAgICAgIGRlbGV0ZSB0aGlzW2xvd2VyTmFtZV07XG4gICAgICAgIGRlbGV0ZSB0aGlzW25hbWVdO1xuXG4gICAgICAgIHRoaXMuZGVidWcoYFBsdWdpbiBcIiR7bmFtZX1cIiByZW1vdmVkYCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiBhIHBsdWdpbiBoYXMgYmVlbiByZWdpc3RlcmVkIGFuZCBpcyBhY3RpdmUuXG4gICAgICpcbiAgICAgKiBBIHBsdWdpbiB0aGF0IGlzIHN0aWxsIHdhaXRpbmcgZm9yIGRlcGVuZGVuY2llcyB0byBiZSByZWdpc3RlcmVkIHdpbGwgbm90IGJlIGFjdGl2ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaGFzUGx1Z2luKG5hbWUpIHtcbiAgICAgICAgY29uc3QgbG93ZXJOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIHJldHVybiAodGhpcy5wbHVnaW5zW2xvd2VyTmFtZV0gIT09IHVuZGVmaW5lZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiByZWdpc3RlcmVkIHBsdWdpbnMgYXMgUGx1Z2luTG9hZGVyIG9iamVjdHMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UGx1Z2luTG9hZGVyW119XG4gICAgICovXG4gICAgZ2V0UGx1Z2lucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGx1Z2lucztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHJlZ2lzdGVyZWQgcGx1Z2lucywgYnkgbmFtZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAgICAgKi9cbiAgICBnZXRQbHVnaW5OYW1lcygpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMucGx1Z2lucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIFBsdWdpbkxvYWRlciBvYmplY3Qgb2YgYSBnaXZlbiBwbHVnaW4uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UGx1Z2luTG9hZGVyfVxuICAgICAqL1xuICAgIGdldFBsdWdpbihuYW1lKSB7XG4gICAgICAgIGNvbnN0IGxvd2VyTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICBpZiAoIXRoaXMuaGFzUGx1Z2luKGxvd2VyTmFtZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gcGx1Z2luIGNhbGxlZCBcIiR7bG93ZXJOYW1lfVwiIGhhcyBiZWVuIHJlZ2lzdGVyZWQuYCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5wbHVnaW5zW2xvd2VyTmFtZV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZHMgYWxsIHBsdWdpbnMgdGhhdCBsaXN0ZW4gdG8gdGhlIGdpdmVuIGV2ZW50LlxuICAgICAqXG4gICAgICogVGhpcyB3b3JrcyBmb3IgYm90aCBub3JtYWwgYW5kIHByb21pc2UgZXZlbnRzLiBJdCBkb2VzIE5PVCBjaGVjayB0aGF0IHRoZSBwbHVnaW4ncyBsaXN0ZW5lciBhY3R1YWxseSBleGlzdHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lXG4gICAgICogQHJldHVybnMge3N0cmluZ1tdfSBUaGUgbmFtZSBvZiB0aGUgcGx1Z2lucyB0aGF0IGFyZSBsaXN0ZW5pbmcgdG8gdGhpcyBldmVudC5cbiAgICAgKi9cbiAgICBsaXN0ZW5zVG9FdmVudChldmVudE5hbWUpIHtcbiAgICAgICAgY29uc3QgcGx1Z2lucyA9IFtdO1xuXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMucGx1Z2lucykuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IFtuYW1lLCBwbHVnaW5dID0gZW50cnk7XG5cbiAgICAgICAgICAgIGlmIChwbHVnaW4uaXNGdW5jdGlvbigpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFwbHVnaW4uZGVwZW5kZW5jaWVzRnVsZmlsbGVkKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXBsdWdpbi5oYXNNZXRob2QoJ2xpc3RlbnMnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbGlzdGVuZXJzID0gcGx1Z2luLmNhbGxNZXRob2QoJ2xpc3RlbnMnKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lcnNbZXZlbnROYW1lXSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGxpc3RlbmVyc1tldmVudE5hbWVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcGx1Z2lucy5wdXNoKG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcGx1Z2lucztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYSBzaW1wbGUgcmVhZHkgbGlzdGVuZXIuXG4gICAgICpcbiAgICAgKiBTeW5vbnltb3VzIHdpdGggalF1ZXJ5J3MgXCIkKGRvY3VtZW50KS5yZWFkeSgpXCIgZnVuY3Rpb25hbGl0eSwgdGhpcyBhbGxvd3MgaW5saW5lIHNjcmlwdHMgdG9cbiAgICAgKiBhdHRhY2ggdGhlbXNlbHZlcyB0byBTbm93Ym9hcmQgaW1tZWRpYXRlbHkgYnV0IG9ubHkgZmlyZSB3aGVuIHRoZSBET00gaXMgcmVhZHkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqL1xuICAgIHJlYWR5KGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICh0aGlzLnJlYWRpbmVzcy5kb20pIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9uKCdyZWFkeScsIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgc2ltcGxlIGxpc3RlbmVyIGZvciBhbiBldmVudC5cbiAgICAgKlxuICAgICAqIFRoaXMgY2FuIGJlIHVzZWQgZm9yIGFkLWhvYyBzY3JpcHRzIHRoYXQgZG9uJ3QgbmVlZCBhIGZ1bGwgcGx1Z2luLiBUaGUgZ2l2ZW4gY2FsbGJhY2sgd2lsbCBiZVxuICAgICAqIGNhbGxlZCB3aGVuIHRoZSBldmVudCBuYW1lIHByb3ZpZGVkIGZpcmVzLiBUaGlzIHdvcmtzIGZvciBib3RoIG5vcm1hbCBhbmQgUHJvbWlzZSBldmVudHMuIEZvclxuICAgICAqIGEgUHJvbWlzZSBldmVudCwgeW91ciBjYWxsYmFjayBtdXN0IHJldHVybiBhIFByb21pc2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnROYW1lXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBvbihldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICghdGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXSkge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdLmluY2x1ZGVzKGNhbGxiYWNrKSkge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBzaW1wbGUgbGlzdGVuZXIgZm9yIGFuIGV2ZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50TmFtZVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICovXG4gICAgb2ZmKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKCF0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0uaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxscyBhIGdsb2JhbCBldmVudCB0byBhbGwgcmVnaXN0ZXJlZCBwbHVnaW5zLlxuICAgICAqXG4gICAgICogSWYgYW55IHBsdWdpbiByZXR1cm5zIGEgYGZhbHNlYCwgdGhlIGV2ZW50IGlzIGNvbnNpZGVyZWQgY2FuY2VsbGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSBJZiBldmVudCB3YXMgbm90IGNhbmNlbGxlZFxuICAgICAqL1xuICAgIGdsb2JhbEV2ZW50KGV2ZW50TmFtZSwgLi4ucGFyYW1ldGVycykge1xuICAgICAgICB0aGlzLmRlYnVnKGBDYWxsaW5nIGdsb2JhbCBldmVudCBcIiR7ZXZlbnROYW1lfVwiYCwgLi4ucGFyYW1ldGVycyk7XG5cbiAgICAgICAgLy8gRmluZCBwbHVnaW5zIGxpc3RlbmluZyB0byB0aGUgZXZlbnQuXG4gICAgICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMubGlzdGVuc1RvRXZlbnQoZXZlbnROYW1lKTtcbiAgICAgICAgaWYgKGxpc3RlbmVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGVidWcoYE5vIGxpc3RlbmVycyBmb3VuZCBmb3IgZ2xvYmFsIGV2ZW50IFwiJHtldmVudE5hbWV9XCJgKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVidWcoYExpc3RlbmVycyBmb3VuZCBmb3IgZ2xvYmFsIGV2ZW50IFwiJHtldmVudE5hbWV9XCI6ICR7bGlzdGVuZXJzLmpvaW4oJywgJyl9YCk7XG5cbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuXG4gICAgICAgIGxpc3RlbmVycy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwbHVnaW4gPSB0aGlzLmdldFBsdWdpbihuYW1lKTtcblxuICAgICAgICAgICAgaWYgKHBsdWdpbi5pc0Z1bmN0aW9uKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGx1Z2luLmlzU2luZ2xldG9uKCkgJiYgcGx1Z2luLmdldEluc3RhbmNlcygpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHBsdWdpbi5pbml0aWFsaXNlU2luZ2xldG9uKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGxpc3Rlbk1ldGhvZCA9IHBsdWdpbi5jYWxsTWV0aG9kKCdsaXN0ZW5zJylbZXZlbnROYW1lXTtcblxuICAgICAgICAgICAgLy8gQ2FsbCBldmVudCBoYW5kbGVyIG1ldGhvZHMgZm9yIGFsbCBwbHVnaW5zLCBpZiB0aGV5IGhhdmUgYSBtZXRob2Qgc3BlY2lmaWVkIGZvciB0aGUgZXZlbnQuXG4gICAgICAgICAgICBwbHVnaW4uZ2V0SW5zdGFuY2VzKCkuZm9yRWFjaCgoaW5zdGFuY2UpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBJZiBhIHBsdWdpbiBoYXMgY2FuY2VsbGVkIHRoZSBldmVudCwgbm8gZnVydGhlciBwbHVnaW5zIGFyZSBjb25zaWRlcmVkLlxuICAgICAgICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbGlzdGVuTWV0aG9kID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBsaXN0ZW5NZXRob2QuYXBwbHkoaW5zdGFuY2UsIHBhcmFtZXRlcnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgRXJyb3IgdGhyb3duIGluIFwiJHtldmVudE5hbWV9XCIgZXZlbnQgYnkgXCIke25hbWV9XCIgcGx1Z2luLmAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbGlzdGVuTWV0aG9kID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWluc3RhbmNlW2xpc3Rlbk1ldGhvZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTWlzc2luZyBcIiR7bGlzdGVuTWV0aG9kfVwiIG1ldGhvZCBpbiBcIiR7bmFtZX1cIiBwbHVnaW5gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2VbbGlzdGVuTWV0aG9kXSguLi5wYXJhbWV0ZXJzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVidWcoYEdsb2JhbCBldmVudCBcIiR7ZXZlbnROYW1lfVwiIGNhbmNlbGxlZCBieSBcIiR7bmFtZX1cIiBwbHVnaW5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYEVycm9yIHRocm93biBpbiBcIiR7ZXZlbnROYW1lfVwiIGV2ZW50IGJ5IFwiJHtuYW1lfVwiIHBsdWdpbi5gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoYExpc3RlbiBtZXRob2QgZm9yIFwiJHtldmVudE5hbWV9XCIgZXZlbnQgaW4gXCIke25hbWV9XCIgcGx1Z2luIGlzIG5vdCBhIGZ1bmN0aW9uIG9yIHN0cmluZy5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gRmluZCBhZC1ob2MgbGlzdGVuZXJzIGZvciB0aGlzIGV2ZW50LlxuICAgICAgICBpZiAoIWNhbmNlbGxlZCAmJiB0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdICYmIHRoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5kZWJ1ZyhgRm91bmQgJHt0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdLmxlbmd0aH0gYWQtaG9jIGxpc3RlbmVyKHMpIGZvciBnbG9iYWwgZXZlbnQgXCIke2V2ZW50TmFtZX1cImApO1xuXG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gSWYgYSBsaXN0ZW5lciBoYXMgY2FuY2VsbGVkIHRoZSBldmVudCwgbm8gZnVydGhlciBsaXN0ZW5lcnMgYXJlIGNvbnNpZGVyZWQuXG4gICAgICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpc3RlbmVyKC4uLnBhcmFtZXRlcnMpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVidWcoYEdsb2JhbCBldmVudCBcIiR7ZXZlbnROYW1lfSBjYW5jZWxsZWQgYnkgYW4gYWQtaG9jIGxpc3RlbmVyLmApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgIGBFcnJvciB0aHJvd24gaW4gXCIke2V2ZW50TmFtZX1cIiBldmVudCBieSBhbiBhZC1ob2MgbGlzdGVuZXIuYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICFjYW5jZWxsZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbHMgYSBnbG9iYWwgZXZlbnQgdG8gYWxsIHJlZ2lzdGVyZWQgcGx1Z2lucywgZXhwZWN0aW5nIGEgUHJvbWlzZSB0byBiZSByZXR1cm5lZCBieSBhbGwuXG4gICAgICpcbiAgICAgKiBUaGlzIGNvbGxhdGVzIGFsbCBwbHVnaW5zIHJlc3BvbnNlcyBpbnRvIG9uZSBsYXJnZSBQcm9taXNlIHRoYXQgZWl0aGVyIGV4cGVjdHMgYWxsIHRvIGJlIHJlc29sdmVkLCBvciBvbmUgdG8gcmVqZWN0LlxuICAgICAqIElmIG5vIGxpc3RlbmVycyBhcmUgZm91bmQsIGEgcmVzb2x2ZWQgUHJvbWlzZSBpcyByZXR1cm5lZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcbiAgICAgKi9cbiAgICBnbG9iYWxQcm9taXNlRXZlbnQoZXZlbnROYW1lLCAuLi5wYXJhbWV0ZXJzKSB7XG4gICAgICAgIHRoaXMuZGVidWcoYENhbGxpbmcgZ2xvYmFsIHByb21pc2UgZXZlbnQgXCIke2V2ZW50TmFtZX1cImApO1xuXG4gICAgICAgIC8vIEZpbmQgcGx1Z2lucyBsaXN0ZW5pbmcgdG8gdGhpcyBldmVudC5cbiAgICAgICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5zVG9FdmVudChldmVudE5hbWUpO1xuICAgICAgICBpZiAobGlzdGVuZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5kZWJ1ZyhgTm8gbGlzdGVuZXJzIGZvdW5kIGZvciBnbG9iYWwgcHJvbWlzZSBldmVudCBcIiR7ZXZlbnROYW1lfVwiYCk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZWJ1ZyhgTGlzdGVuZXJzIGZvdW5kIGZvciBnbG9iYWwgcHJvbWlzZSBldmVudCBcIiR7ZXZlbnROYW1lfVwiOiAke2xpc3RlbmVycy5qb2luKCcsICcpfWApO1xuXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gW107XG5cbiAgICAgICAgbGlzdGVuZXJzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBsdWdpbiA9IHRoaXMuZ2V0UGx1Z2luKG5hbWUpO1xuXG4gICAgICAgICAgICBpZiAocGx1Z2luLmlzRnVuY3Rpb24oKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwbHVnaW4uaXNTaW5nbGV0b24oKSAmJiBwbHVnaW4uZ2V0SW5zdGFuY2VzKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcGx1Z2luLmluaXRpYWxpc2VTaW5nbGV0b24oKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbGlzdGVuTWV0aG9kID0gcGx1Z2luLmNhbGxNZXRob2QoJ2xpc3RlbnMnKVtldmVudE5hbWVdO1xuXG4gICAgICAgICAgICAvLyBDYWxsIGV2ZW50IGhhbmRsZXIgbWV0aG9kcyBmb3IgYWxsIHBsdWdpbnMsIGlmIHRoZXkgaGF2ZSBhIG1ldGhvZCBzcGVjaWZpZWQgZm9yIHRoZSBldmVudC5cbiAgICAgICAgICAgIHBsdWdpbi5nZXRJbnN0YW5jZXMoKS5mb3JFYWNoKChpbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbGlzdGVuTWV0aG9kID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnN0YW5jZVByb21pc2UgPSBsaXN0ZW5NZXRob2QuYXBwbHkoaW5zdGFuY2UsIHBhcmFtZXRlcnMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2VQcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goaW5zdGFuY2VQcm9taXNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYEVycm9yIHRocm93biBpbiBcIiR7ZXZlbnROYW1lfVwiIGV2ZW50IGJ5IFwiJHtuYW1lfVwiIHBsdWdpbi5gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGxpc3Rlbk1ldGhvZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpbnN0YW5jZVtsaXN0ZW5NZXRob2RdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE1pc3NpbmcgXCIke2xpc3Rlbk1ldGhvZH1cIiBtZXRob2QgaW4gXCIke25hbWV9XCIgcGx1Z2luYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5zdGFuY2VQcm9taXNlID0gaW5zdGFuY2VbbGlzdGVuTWV0aG9kXSguLi5wYXJhbWV0ZXJzKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluc3RhbmNlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKGluc3RhbmNlUHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBFcnJvciB0aHJvd24gaW4gXCIke2V2ZW50TmFtZX1cIiBwcm9taXNlIGV2ZW50IGJ5IFwiJHtuYW1lfVwiIHBsdWdpbi5gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoYExpc3RlbiBtZXRob2QgZm9yIFwiJHtldmVudE5hbWV9XCIgZXZlbnQgaW4gXCIke25hbWV9XCIgcGx1Z2luIGlzIG5vdCBhIGZ1bmN0aW9uIG9yIHN0cmluZy5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gRmluZCBhZC1ob2MgbGlzdGVuZXJzIGxpc3RlbmluZyB0byB0aGlzIGV2ZW50LlxuICAgICAgICBpZiAodGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXSAmJiB0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGVidWcoYEZvdW5kICR7dGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXS5sZW5ndGh9IGFkLWhvYyBsaXN0ZW5lcihzKSBmb3IgZ2xvYmFsIHByb21pc2UgZXZlbnQgXCIke2V2ZW50TmFtZX1cImApO1xuXG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGlzdGVuZXJQcm9taXNlID0gbGlzdGVuZXIoLi4ucGFyYW1ldGVycyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsaXN0ZW5lclByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChsaXN0ZW5lclByb21pc2UpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICBgRXJyb3IgdGhyb3duIGluIFwiJHtldmVudE5hbWV9XCIgcHJvbWlzZSBldmVudCBieSBhbiBhZC1ob2MgbGlzdGVuZXIuYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb21pc2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2cgYSBzdHlsZWQgbWVzc2FnZSBpbiB0aGUgY29uc29sZS5cbiAgICAgKlxuICAgICAqIEluY2x1ZGVzIHBhcmFtZXRlcnMgYW5kIGEgc3RhY2sgdHJhY2UuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBsb2dNZXNzYWdlKGNvbG9yLCBib2xkLCBtZXNzYWdlLCAuLi5wYXJhbWV0ZXJzKSB7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlICovXG4gICAgICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoXG4gICAgICAgICAgICAnJWNbU25vd2JvYXJkXScsXG4gICAgICAgICAgICBgY29sb3I6ICR7Y29sb3J9OyBmb250LXdlaWdodDogJHsoYm9sZCkgPyAnYm9sZCcgOiAnbm9ybWFsJ307YCxcbiAgICAgICAgICAgIG1lc3NhZ2VcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHBhcmFtZXRlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKFxuICAgICAgICAgICAgICAgIGAlY1BhcmFtZXRlcnMgJWMoJHtwYXJhbWV0ZXJzLmxlbmd0aH0pYCxcbiAgICAgICAgICAgICAgICAnY29sb3I6IHJnYig0NSwgMTY3LCAxOTkpOyBmb250LXdlaWdodDogYm9sZDsnLFxuICAgICAgICAgICAgICAgICdjb2xvcjogcmdiKDg4LCA4OCwgODgpOyBmb250LXdlaWdodDogbm9ybWFsOydcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICAgICAgcGFyYW1ldGVycy5mb3JFYWNoKChwYXJhbSkgPT4ge1xuICAgICAgICAgICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCVjJHtpbmRleH06YCwgJ2NvbG9yOiByZ2IoODgsIDg4LCA4OCk7IGZvbnQtd2VpZ2h0OiBub3JtYWw7JywgcGFyYW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoJyVjVHJhY2UnLCAnY29sb3I6IHJnYig0NSwgMTY3LCAxOTkpOyBmb250LXdlaWdodDogYm9sZDsnKTtcbiAgICAgICAgICAgIGNvbnNvbGUudHJhY2UoKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUudHJhY2UoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgKi9cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2cgYSBtZXNzYWdlLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgbG9nKG1lc3NhZ2UsIC4uLnBhcmFtZXRlcnMpIHtcbiAgICAgICAgdGhpcy5sb2dNZXNzYWdlKCdyZ2IoNDUsIDE2NywgMTk5KScsIGZhbHNlLCBtZXNzYWdlLCAuLi5wYXJhbWV0ZXJzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2cgYSBkZWJ1ZyBtZXNzYWdlLlxuICAgICAqXG4gICAgICogVGhlc2UgbWVzc2FnZXMgYXJlIG9ubHkgc2hvd24gd2hlbiBkZWJ1Z2dpbmcgaXMgZW5hYmxlZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIGRlYnVnKG1lc3NhZ2UsIC4uLnBhcmFtZXRlcnMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRlYnVnRW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sb2dNZXNzYWdlKCdyZ2IoNDUsIDE2NywgMTk5KScsIGZhbHNlLCBtZXNzYWdlLCAuLi5wYXJhbWV0ZXJzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2dzIGFuIGVycm9yIG1lc3NhZ2UuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBlcnJvcihtZXNzYWdlLCAuLi5wYXJhbWV0ZXJzKSB7XG4gICAgICAgIHRoaXMubG9nTWVzc2FnZSgncmdiKDIyOSwgMzUsIDM1KScsIHRydWUsIG1lc3NhZ2UsIC4uLnBhcmFtZXRlcnMpO1xuICAgIH1cbn1cbiIsImltcG9ydCBGbGFzaCBmcm9tICcuL2V4dHJhcy9GbGFzaCc7XG5pbXBvcnQgVHJhbnNpdGlvbiBmcm9tICcuL2V4dHJhcy9UcmFuc2l0aW9uJztcbmltcG9ydCBBdHRhY2hMb2FkaW5nIGZyb20gJy4vZXh0cmFzL0F0dGFjaExvYWRpbmcnO1xuaW1wb3J0IFN0cmlwZUxvYWRlciBmcm9tICcuL2V4dHJhcy9TdHJpcGVMb2FkZXInO1xuaW1wb3J0IFN0eWxlc2hlZXRMb2FkZXIgZnJvbSAnLi9leHRyYXMvU3R5bGVzaGVldExvYWRlcic7XG5pbXBvcnQgQXNzZXRMb2FkZXIgZnJvbSAnLi9leHRyYXMvQXNzZXRMb2FkZXInO1xuaW1wb3J0IERhdGFDb25maWcgZnJvbSAnLi9leHRyYXMvRGF0YUNvbmZpZyc7XG5cbmlmICh3aW5kb3cuU25vd2JvYXJkID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1Nub3dib2FyZCBtdXN0IGJlIGxvYWRlZCBpbiBvcmRlciB0byB1c2UgdGhlIGV4dHJhIHBsdWdpbnMuJyk7XG59XG5cbigoU25vd2JvYXJkKSA9PiB7XG4gICAgU25vd2JvYXJkLmFkZFBsdWdpbignYXNzZXRMb2FkZXInLCBBc3NldExvYWRlcik7XG4gICAgU25vd2JvYXJkLmFkZFBsdWdpbignZGF0YUNvbmZpZycsIERhdGFDb25maWcpO1xuICAgIFNub3dib2FyZC5hZGRQbHVnaW4oJ2V4dHJhc1N0eWxlcycsIFN0eWxlc2hlZXRMb2FkZXIpO1xuICAgIFNub3dib2FyZC5hZGRQbHVnaW4oJ3RyYW5zaXRpb24nLCBUcmFuc2l0aW9uKTtcbiAgICBTbm93Ym9hcmQuYWRkUGx1Z2luKCdmbGFzaCcsIEZsYXNoKTtcbiAgICBTbm93Ym9hcmQuYWRkUGx1Z2luKCdhdHRhY2hMb2FkaW5nJywgQXR0YWNoTG9hZGluZyk7XG4gICAgU25vd2JvYXJkLmFkZFBsdWdpbignc3RyaXBlTG9hZGVyJywgU3RyaXBlTG9hZGVyKTtcbn0pKHdpbmRvdy5Tbm93Ym9hcmQpO1xuIiwiaW1wb3J0IFNub3dib2FyZCBmcm9tICcuL21haW4vU25vd2JvYXJkJztcbmltcG9ydCBQcm94eUhhbmRsZXIgZnJvbSAnLi9tYWluL1Byb3h5SGFuZGxlcic7XG5cbigod2luZG93KSA9PiB7XG4gICAgY29uc3Qgc25vd2JvYXJkID0gbmV3IFByb3h5KFxuICAgICAgICBuZXcgU25vd2JvYXJkKHRydWUsIHRydWUpLFxuICAgICAgICBQcm94eUhhbmRsZXIsXG4gICAgKTtcblxuICAgIC8vIENvdmVyIGFsbCBhbGlhc2VzXG4gICAgd2luZG93LnNub3dib2FyZCA9IHNub3dib2FyZDtcbiAgICB3aW5kb3cuU25vd2JvYXJkID0gc25vd2JvYXJkO1xuICAgIHdpbmRvdy5Tbm93Qm9hcmQgPSBzbm93Ym9hcmQ7XG59KSh3aW5kb3cpO1xuIiwiaW1wb3J0IFJlcXVlc3QgZnJvbSAnLi9hamF4L1JlcXVlc3QnO1xuXG5pZiAod2luZG93LlNub3dib2FyZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTbm93Ym9hcmQgbXVzdCBiZSBsb2FkZWQgaW4gb3JkZXIgdG8gdXNlIHRoZSBKYXZhc2NyaXB0IEFKQVggcmVxdWVzdCBmZWF0dXJlLicpO1xufVxuXG4oKFNub3dib2FyZCkgPT4ge1xuICAgIFNub3dib2FyZC5hZGRQbHVnaW4oJ3JlcXVlc3QnLCBSZXF1ZXN0KTtcbn0pKHdpbmRvdy5Tbm93Ym9hcmQpO1xuIiwiaW1wb3J0IEJhc2VDb29raWUgZnJvbSAnanMtY29va2llJztcbmltcG9ydCBTaW5nbGV0b24gZnJvbSAnLi4vYWJzdHJhY3RzL1NpbmdsZXRvbic7XG5cbi8qKlxuICogQ29va2llIHV0aWxpdHkuXG4gKlxuICogVGhpcyB1dGlsaXR5IGlzIGEgdGhpbiB3cmFwcGVyIGFyb3VuZCB0aGUgXCJqcy1jb29raWVcIiBsaWJyYXJ5LlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2pzLWNvb2tpZS9qcy1jb29raWVcbiAqIEBjb3B5cmlnaHQgMjAyMSBXaW50ZXIuXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb29raWUgZXh0ZW5kcyBTaW5nbGV0b24ge1xuICAgIGNvbnN0cnVjdCgpIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIGV4cGlyZXM6IG51bGwsXG4gICAgICAgICAgICBwYXRoOiAnLycsXG4gICAgICAgICAgICBkb21haW46IG51bGwsXG4gICAgICAgICAgICBzZWN1cmU6IGZhbHNlLFxuICAgICAgICAgICAgc2FtZVNpdGU6ICdMYXgnLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgZGVmYXVsdCBjb29raWUgcGFyYW1ldGVycyBmb3IgYWxsIHN1YnNlcXVlbnQgXCJzZXRcIiBhbmQgXCJyZW1vdmVcIiBjYWxscy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICovXG4gICAgc2V0RGVmYXVsdHMob3B0aW9ucykge1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nvb2tpZSBkZWZhdWx0cyBtdXN0IGJlIHByb3ZpZGVkIGFzIGFuIG9iamVjdCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmVudHJpZXMob3B0aW9ucykuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IGVudHJ5O1xuXG4gICAgICAgICAgICBpZiAodGhpcy5kZWZhdWx0c1trZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBjdXJyZW50IGRlZmF1bHQgY29va2llIHBhcmFtZXRlcnMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdldERlZmF1bHRzKCkge1xuICAgICAgICBjb25zdCBkZWZhdWx0cyA9IHt9O1xuXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMuZGVmYXVsdHMpLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSBlbnRyeTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZGVmYXVsdHNba2V5XSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGRlZmF1bHRzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGRlZmF1bHRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhIGNvb2tpZSBieSBuYW1lLlxuICAgICAqXG4gICAgICogSWYgYG5hbWVgIGlzIHVuZGVmaW5lZCwgcmV0dXJucyBhbGwgY29va2llcyBhcyBhbiBPYmplY3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R8U3RyaW5nfVxuICAgICAqL1xuICAgIGdldChuYW1lKSB7XG4gICAgICAgIGlmIChuYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvb2tpZXMgPSBCYXNlQ29va2llLmdldCgpO1xuXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhjb29raWVzKS5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtjb29raWVOYW1lLCBjb29raWVWYWx1ZV0gPSBlbnRyeTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdjb29raWUuZ2V0JywgY29va2llTmFtZSwgY29va2llVmFsdWUsIChuZXdWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb29raWVzW2Nvb2tpZU5hbWVdID0gbmV3VmFsdWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGNvb2tpZXM7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdmFsdWUgPSBCYXNlQ29va2llLmdldChuYW1lKTtcblxuICAgICAgICAvLyBBbGxvdyBwbHVnaW5zIHRvIG92ZXJyaWRlIHRoZSBnb3R0ZW4gdmFsdWVcbiAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2Nvb2tpZS5nZXQnLCBuYW1lLCB2YWx1ZSwgKG5ld1ZhbHVlKSA9PiB7XG4gICAgICAgICAgICB2YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGEgY29va2llIGJ5IG5hbWUuXG4gICAgICpcbiAgICAgKiBZb3UgY2FuIHNwZWNpZnkgYWRkaXRpb25hbCBjb29raWUgcGFyYW1ldGVycyB0aHJvdWdoIHRoZSBcIm9wdGlvbnNcIiBwYXJhbWV0ZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBzZXQobmFtZSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgbGV0IHNhdmVWYWx1ZSA9IHZhbHVlO1xuXG4gICAgICAgIC8vIEFsbG93IHBsdWdpbnMgdG8gb3ZlcnJpZGUgdGhlIHZhbHVlIHRvIHNhdmVcbiAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2Nvb2tpZS5zZXQnLCBuYW1lLCB2YWx1ZSwgKG5ld1ZhbHVlKSA9PiB7XG4gICAgICAgICAgICBzYXZlVmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIEJhc2VDb29raWUuc2V0KG5hbWUsIHNhdmVWYWx1ZSwge1xuICAgICAgICAgICAgLi4udGhpcy5nZXREZWZhdWx0cygpLFxuICAgICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGEgY29va2llIGJ5IG5hbWUuXG4gICAgICpcbiAgICAgKiBZb3UgY2FuIHNwZWNpZnkgdGhlIGFkZGl0aW9uYWwgY29va2llIHBhcmFtZXRlcnMgdmlhIHRoZSBcIm9wdGlvbnNcIiBwYXJhbWV0ZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgcmVtb3ZlKG5hbWUsIG9wdGlvbnMpIHtcbiAgICAgICAgQmFzZUNvb2tpZS5yZW1vdmUobmFtZSwge1xuICAgICAgICAgICAgLi4udGhpcy5nZXREZWZhdWx0cygpLFxuICAgICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFNpbmdsZXRvbiBmcm9tICcuLi9hYnN0cmFjdHMvU2luZ2xldG9uJztcblxuLyoqXG4gKiBKU09OIFBhcnNlciB1dGlsaXR5LlxuICpcbiAqIFRoaXMgdXRpbGl0eSBwYXJzZXMgSlNPTi1saWtlIGRhdGEgdGhhdCBkb2VzIG5vdCBzdHJpY3RseSBtZWV0IHRoZSBKU09OIHNwZWNpZmljYXRpb25zIGluIG9yZGVyIHRvIHNpbXBsaWZ5IGRldmVsb3BtZW50LlxuICogSXQgaXMgYSBzYWZlIHJlcGxhY2VtZW50IGZvciBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGV2YWwoXCIoe1wiICsgdmFsdWUgKyBcIn0pXCIpKSkgdGhhdCBkb2VzIG5vdCByZXF1aXJlIHRoZSB1c2Ugb2YgZXZhbCgpXG4gKlxuICogQGF1dGhvciBBeXVtaSBIYW1hc2FraVxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL29jdG9iZXJjbXMvb2N0b2Jlci9wdWxsLzQ1MjdcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSnNvblBhcnNlciBleHRlbmRzIFNpbmdsZXRvbiB7XG4gICAgY29uc3RydWN0KCkge1xuICAgICAgICAvLyBBZGQgdG8gZ2xvYmFsIGZ1bmN0aW9uIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuICAgICAgICB3aW5kb3cud25KU09OID0gKGpzb24pID0+IHRoaXMucGFyc2UoanNvbik7XG4gICAgICAgIHdpbmRvdy5vY0pTT04gPSB3aW5kb3cud25KU09OO1xuICAgIH1cblxuICAgIHBhcnNlKHN0cikge1xuICAgICAgICBjb25zdCBqc29uU3RyaW5nID0gdGhpcy5wYXJzZVN0cmluZyhzdHIpO1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShqc29uU3RyaW5nKTtcbiAgICB9XG5cbiAgICBwYXJzZVN0cmluZyh2YWx1ZSkge1xuICAgICAgICBsZXQgc3RyID0gdmFsdWUudHJpbSgpO1xuXG4gICAgICAgIGlmICghc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdCcm9rZW4gSlNPTiBvYmplY3QuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgICAgIGxldCB0eXBlID0gbnVsbDtcbiAgICAgICAgbGV0IGtleSA9IG51bGw7XG4gICAgICAgIGxldCBib2R5ID0gJyc7XG5cbiAgICAgICAgLypcbiAgICAgICAgKiB0aGUgbWlzdGFrZSAnLCdcbiAgICAgICAgKi9cbiAgICAgICAgd2hpbGUgKHN0ciAmJiBzdHJbMF0gPT09ICcsJykge1xuICAgICAgICAgICAgc3RyID0gc3RyLnN1YnN0cigxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qXG4gICAgICAgICogc3RyaW5nXG4gICAgICAgICovXG4gICAgICAgIGlmIChzdHJbMF0gPT09ICdcIicgfHwgc3RyWzBdID09PSAnXFwnJykge1xuICAgICAgICAgICAgaWYgKHN0cltzdHIubGVuZ3RoIC0gMV0gIT09IHN0clswXSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdHJpbmcgSlNPTiBvYmplY3QuJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJvZHkgPSAnXCInO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzdHIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2ldID09PSAnXFxcXCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltpICsgMV0gPT09ICdcXCcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5ICs9IHN0cltpICsgMV07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5ICs9IHN0cltpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkgKz0gc3RyW2kgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpICs9IDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdHJbaV0gPT09IHN0clswXSkge1xuICAgICAgICAgICAgICAgICAgICBib2R5ICs9ICdcIic7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBib2R5O1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RyW2ldID09PSAnXCInKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHkgKz0gJ1xcXFxcIic7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keSArPSBzdHJbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nIEpTT04gb2JqZWN0LicpO1xuICAgICAgICB9XG5cbiAgICAgICAgLypcbiAgICAgICAgKiBib29sZWFuXG4gICAgICAgICovXG4gICAgICAgIGlmIChzdHIgPT09ICd0cnVlJyB8fCBzdHIgPT09ICdmYWxzZScpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHI7XG4gICAgICAgIH1cblxuICAgICAgICAvKlxuICAgICAgICAqIG51bGxcbiAgICAgICAgKi9cbiAgICAgICAgaWYgKHN0ciA9PT0gJ251bGwnKSB7XG4gICAgICAgICAgICByZXR1cm4gJ251bGwnO1xuICAgICAgICB9XG5cbiAgICAgICAgLypcbiAgICAgICAgKiBudW1iZXJcbiAgICAgICAgKi9cbiAgICAgICAgY29uc3QgbnVtID0gTnVtYmVyKHN0cik7XG4gICAgICAgIGlmICghTnVtYmVyLmlzTmFOKG51bSkpIHtcbiAgICAgICAgICAgIHJldHVybiBudW0udG9TdHJpbmcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qXG4gICAgICAgICogb2JqZWN0XG4gICAgICAgICovXG4gICAgICAgIGlmIChzdHJbMF0gPT09ICd7Jykge1xuICAgICAgICAgICAgdHlwZSA9ICduZWVkS2V5JztcbiAgICAgICAgICAgIGtleSA9IG51bGw7XG4gICAgICAgICAgICByZXN1bHQgPSAneyc7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc3RyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNCbGFua0NoYXIoc3RyW2ldKSkge1xuICAgICAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnbmVlZEtleScgJiYgKHN0cltpXSA9PT0gJ1wiJyB8fCBzdHJbaV0gPT09ICdcXCcnKSkge1xuICAgICAgICAgICAgICAgICAgICBrZXkgPSB0aGlzLnBhcnNlS2V5KHN0ciwgaSArIDEsIHN0cltpXSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSBgXCIke2tleX1cImA7XG4gICAgICAgICAgICAgICAgICAgIGkgKz0ga2V5Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgaSArPSAxO1xuICAgICAgICAgICAgICAgICAgICB0eXBlID0gJ2FmdGVyS2V5JztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICduZWVkS2V5JyAmJiB0aGlzLmNhbkJlS2V5SGVhZChzdHJbaV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGtleSA9IHRoaXMucGFyc2VLZXkoc3RyLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9ICdcIic7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSBrZXk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnXCInO1xuICAgICAgICAgICAgICAgICAgICBpICs9IGtleS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICB0eXBlID0gJ2FmdGVyS2V5JztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdhZnRlcktleScgJiYgc3RyW2ldID09PSAnOicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9ICc6JztcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9ICc6JztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICc6Jykge1xuICAgICAgICAgICAgICAgICAgICBib2R5ID0gdGhpcy5nZXRCb2R5KHN0ciwgaSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaSA9IGkgKyBib2R5Lm9yaWdpbkxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSB0aGlzLnBhcnNlU3RyaW5nKGJvZHkuYm9keSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9ICdhZnRlckJvZHknO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2FmdGVyQm9keScgfHwgdHlwZSA9PT0gJ25lZWRLZXknKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsYXN0ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHN0cltsYXN0XSA9PT0gJywnIHx8IHRoaXMuaXNCbGFua0NoYXIoc3RyW2xhc3RdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdCArPSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbbGFzdF0gPT09ICd9JyAmJiBsYXN0ID09PSBzdHIubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV0gPT09ICcsJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5zdWJzdHIoMCwgcmVzdWx0Lmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9ICd9JztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3QgIT09IGkgJiYgcmVzdWx0ICE9PSAneycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnLCc7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gJ25lZWRLZXknO1xuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IGxhc3QgLSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEJyb2tlbiBKU09OIG9iamVjdCBuZWFyICR7cmVzdWx0fWApO1xuICAgICAgICB9XG5cbiAgICAgICAgLypcbiAgICAgICAgKiBhcnJheVxuICAgICAgICAqL1xuICAgICAgICBpZiAoc3RyWzBdID09PSAnWycpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9ICdbJztcbiAgICAgICAgICAgIHR5cGUgPSAnbmVlZEJvZHknO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzdHIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2ldID09PSAnICcgfHwgc3RyW2ldID09PSAnXFxuJyB8fCBzdHJbaV0gPT09ICdcXHQnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICduZWVkQm9keScpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltpXSA9PT0gJywnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gJ251bGwsJztcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltpXSA9PT0gJ10nICYmIGkgPT09IHN0ci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0W3Jlc3VsdC5sZW5ndGggLSAxXSA9PT0gJywnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnN1YnN0cigwLCByZXN1bHQubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gJ10nO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGJvZHkgPSB0aGlzLmdldEJvZHkoc3RyLCBpKTtcblxuICAgICAgICAgICAgICAgICAgICBpID0gaSArIGJvZHkub3JpZ2luTGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IHRoaXMucGFyc2VTdHJpbmcoYm9keS5ib2R5KTtcblxuICAgICAgICAgICAgICAgICAgICB0eXBlID0gJ2FmdGVyQm9keSc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnYWZ0ZXJCb2R5Jykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ldID09PSAnLCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnLCc7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gJ25lZWRCb2R5JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGVhbCB3aXRoIG1pc3Rha2UgXCIsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChzdHJbaSArIDFdID09PSAnLCcgfHwgdGhpcy5pc0JsYW5rQ2hhcihzdHJbaSArIDFdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaSArIDFdID09PSAnLCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9ICdudWxsLCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdHJbaV0gPT09ICddJyAmJiBpID09PSBzdHIubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9ICddJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQnJva2VuIEpTT04gYXJyYXkgbmVhciAke3Jlc3VsdH1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBnZXRCb2R5KHN0ciwgcG9zKSB7XG4gICAgICAgIGxldCBib2R5ID0gJyc7XG5cbiAgICAgICAgLy8gcGFyc2Ugc3RyaW5nIGJvZHlcbiAgICAgICAgaWYgKHN0cltwb3NdID09PSAnXCInIHx8IHN0cltwb3NdID09PSAnXFwnJykge1xuICAgICAgICAgICAgYm9keSA9IHN0cltwb3NdO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gcG9zICsgMTsgaSA8IHN0ci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbaV0gPT09ICdcXFxcJykge1xuICAgICAgICAgICAgICAgICAgICBib2R5ICs9IHN0cltpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgKyAxIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keSArPSBzdHJbaSArIDFdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGkgKz0gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0cltpXSA9PT0gc3RyW3Bvc10pIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keSArPSBzdHJbcG9zXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbkxlbmd0aDogYm9keS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5LFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHkgKz0gc3RyW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBCcm9rZW4gSlNPTiBzdHJpbmcgYm9keSBuZWFyICR7Ym9keX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBhcnNlIHRydWUgLyBmYWxzZVxuICAgICAgICBpZiAoc3RyW3Bvc10gPT09ICd0Jykge1xuICAgICAgICAgICAgaWYgKHN0ci5pbmRleE9mKCd0cnVlJywgcG9zKSA9PT0gcG9zKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luTGVuZ3RoOiAndHJ1ZScubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICBib2R5OiAndHJ1ZScsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBCcm9rZW4gSlNPTiBib29sZWFuIGJvZHkgbmVhciAke3N0ci5zdWJzdHIoMCwgcG9zICsgMTApfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdHJbcG9zXSA9PT0gJ2YnKSB7XG4gICAgICAgICAgICBpZiAoc3RyLmluZGV4T2YoJ2YnLCBwb3MpID09PSBwb3MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBvcmlnaW5MZW5ndGg6ICdmYWxzZScubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICBib2R5OiAnZmFsc2UnLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQnJva2VuIEpTT04gYm9vbGVhbiBib2R5IG5lYXIgJHtzdHIuc3Vic3RyKDAsIHBvcyArIDEwKX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBhcnNlIG51bGxcbiAgICAgICAgaWYgKHN0cltwb3NdID09PSAnbicpIHtcbiAgICAgICAgICAgIGlmIChzdHIuaW5kZXhPZignbnVsbCcsIHBvcykgPT09IHBvcykge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbkxlbmd0aDogJ251bGwnLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogJ251bGwnLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQnJva2VuIEpTT04gYm9vbGVhbiBib2R5IG5lYXIgJHtzdHIuc3Vic3RyKDAsIHBvcyArIDEwKX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBhcnNlIG51bWJlclxuICAgICAgICBpZiAoc3RyW3Bvc10gPT09ICctJyB8fCBzdHJbcG9zXSA9PT0gJysnIHx8IHN0cltwb3NdID09PSAnLicgfHwgKHN0cltwb3NdID49ICcwJyAmJiBzdHJbcG9zXSA8PSAnOScpKSB7XG4gICAgICAgICAgICBib2R5ID0gJyc7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBwb3M7IGkgPCBzdHIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2ldID09PSAnLScgfHwgc3RyW2ldID09PSAnKycgfHwgc3RyW2ldID09PSAnLicgfHwgKHN0cltpXSA+PSAnMCcgJiYgc3RyW2ldIDw9ICc5JykpIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keSArPSBzdHJbaV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbkxlbmd0aDogYm9keS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5LFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBCcm9rZW4gSlNPTiBudW1iZXIgYm9keSBuZWFyICR7Ym9keX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBhcnNlIG9iamVjdFxuICAgICAgICBpZiAoc3RyW3Bvc10gPT09ICd7JyB8fCBzdHJbcG9zXSA9PT0gJ1snKSB7XG4gICAgICAgICAgICBjb25zdCBzdGFjayA9IFtcbiAgICAgICAgICAgICAgICBzdHJbcG9zXSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBib2R5ID0gc3RyW3Bvc107XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBwb3MgKyAxOyBpIDwgc3RyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgYm9keSArPSBzdHJbaV07XG4gICAgICAgICAgICAgICAgaWYgKHN0cltpXSA9PT0gJ1xcXFwnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpICsgMSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkgKz0gc3RyW2kgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpICs9IDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdHJbaV0gPT09ICdcIicpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdID09PSAnXCInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGFja1tzdGFjay5sZW5ndGggLSAxXSAhPT0gJ1xcJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goc3RyW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RyW2ldID09PSAnXFwnJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0gPT09ICdcXCcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGFja1tzdGFjay5sZW5ndGggLSAxXSAhPT0gJ1wiJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaChzdHJbaV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGFja1tzdGFjay5sZW5ndGggLSAxXSAhPT0gJ1wiJyAmJiBzdGFja1tzdGFjay5sZW5ndGggLSAxXSAhPT0gJ1xcJycpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltpXSA9PT0gJ3snKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKCd7Jyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RyW2ldID09PSAnfScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGFja1tzdGFjay5sZW5ndGggLSAxXSA9PT0gJ3snKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQnJva2VuIEpTT04gJHsoc3RyW3Bvc10gPT09ICd7JyA/ICdvYmplY3QnIDogJ2FycmF5Jyl9IGJvZHkgbmVhciAke2JvZHl9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RyW2ldID09PSAnWycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goJ1snKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdHJbaV0gPT09ICddJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdID09PSAnWycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBCcm9rZW4gSlNPTiAkeyhzdHJbcG9zXSA9PT0gJ3snID8gJ29iamVjdCcgOiAnYXJyYXknKX0gYm9keSBuZWFyICR7Ym9keX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIXN0YWNrLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luTGVuZ3RoOiBpIC0gcG9zLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQnJva2VuIEpTT04gJHsoc3RyW3Bvc10gPT09ICd7JyA/ICdvYmplY3QnIDogJ2FycmF5Jyl9IGJvZHkgbmVhciAke2JvZHl9YCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEJyb2tlbiBKU09OIGJvZHkgbmVhciAke3N0ci5zdWJzdHIoKHBvcyAtIDUgPj0gMCkgPyBwb3MgLSA1IDogMCwgNTApfWApO1xuICAgIH1cblxuICAgIHBhcnNlS2V5KHN0ciwgcG9zLCBxdW90ZSkge1xuICAgICAgICBsZXQga2V5ID0gJyc7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IHBvczsgaSA8IHN0ci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKHF1b3RlICYmIHF1b3RlID09PSBzdHJbaV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFxdW90ZSAmJiAoc3RyW2ldID09PSAnICcgfHwgc3RyW2ldID09PSAnOicpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAga2V5ICs9IHN0cltpXTtcblxuICAgICAgICAgICAgaWYgKHN0cltpXSA9PT0gJ1xcXFwnICYmIGkgKyAxIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGtleSArPSBzdHJbaSArIDFdO1xuICAgICAgICAgICAgICAgIGkgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQnJva2VuIEpTT04gc3ludGF4IG5lYXIgJHtrZXl9YCk7XG4gICAgfVxuXG4gICAgY2FuQmVLZXlIZWFkKGNoKSB7XG4gICAgICAgIGlmIChjaFswXSA9PT0gJ1xcXFwnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChjaFswXSA+PSAnYScgJiYgY2hbMF0gPD0gJ3onKSB8fCAoY2hbMF0gPj0gJ0EnICYmIGNoWzBdIDw9ICdaJykgfHwgY2hbMF0gPT09ICdfJykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoWzBdID49ICcwJyAmJiBjaFswXSA8PSAnOScpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaFswXSA9PT0gJyQnKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2guY2hhckNvZGVBdCgwKSA+IDI1NSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaXNCbGFua0NoYXIoY2gpIHtcbiAgICAgICAgcmV0dXJuIGNoID09PSAnICcgfHwgY2ggPT09ICdcXG4nIHx8IGNoID09PSAnXFx0JztcbiAgICB9XG59XG4iLCJpbXBvcnQgU2luZ2xldG9uIGZyb20gJy4uL2Fic3RyYWN0cy9TaW5nbGV0b24nO1xuXG4vKipcbiAqIFNhbml0aXplciB1dGlsaXR5LlxuICpcbiAqIENsaWVudC1zaWRlIEhUTUwgc2FuaXRpemVyIGRlc2lnbmVkIG1vc3RseSB0byBwcmV2ZW50IHNlbGYtWFNTIGF0dGFja3MuXG4gKiBUaGUgc2FuaXRpemVyIHV0aWxpdHkgd2lsbCBzdHJpcCBhbGwgYXR0cmlidXRlcyB0aGF0IHN0YXJ0IHdpdGggYG9uYCAodXN1YWxseSBKUyBldmVudCBoYW5kbGVycyBhcyBhdHRyaWJ1dGVzLCBpLmUuIGBvbmxvYWRgIG9yIGBvbmVycm9yYCkgb3IgY29udGFpbiB0aGUgYGphdmFzY3JpcHQ6YCBwc2V1ZG8gcHJvdG9jb2wgaW4gdGhlaXIgdmFsdWVzLlxuICpcbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNhbml0aXplciBleHRlbmRzIFNpbmdsZXRvbiB7XG4gICAgY29uc3RydWN0KCkge1xuICAgICAgICAvLyBBZGQgdG8gZ2xvYmFsIGZ1bmN0aW9uIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuICAgICAgICB3aW5kb3cud25TYW5pdGl6ZSA9IChodG1sKSA9PiB0aGlzLnNhbml0aXplKGh0bWwpO1xuICAgICAgICB3aW5kb3cub2NTYW5pdGl6ZSA9IHdpbmRvdy53blNhbml0aXplO1xuICAgIH1cblxuICAgIHNhbml0aXplKGh0bWwsIGJvZHlPbmx5KSB7XG4gICAgICAgIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICAgICAgY29uc3QgZG9tID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhodG1sLCAndGV4dC9odG1sJyk7XG4gICAgICAgIGNvbnN0IHJldHVybkJvZHlPbmx5ID0gKGJvZHlPbmx5ICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGJvZHlPbmx5ID09PSAnYm9vbGVhbicpXG4gICAgICAgICAgICA/IGJvZHlPbmx5XG4gICAgICAgICAgICA6IHRydWU7XG5cbiAgICAgICAgdGhpcy5zYW5pdGl6ZU5vZGUoZG9tLmdldFJvb3ROb2RlKCkpO1xuXG4gICAgICAgIHJldHVybiAocmV0dXJuQm9keU9ubHkpID8gZG9tLmJvZHkuaW5uZXJIVE1MIDogZG9tLmlubmVySFRNTDtcbiAgICB9XG5cbiAgICBzYW5pdGl6ZU5vZGUobm9kZSkge1xuICAgICAgICBpZiAobm9kZS50YWdOYW1lID09PSAnU0NSSVBUJykge1xuICAgICAgICAgICAgbm9kZS5yZW1vdmUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHJpbUF0dHJpYnV0ZXMobm9kZSk7XG5cbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBBcnJheS5mcm9tKG5vZGUuY2hpbGRyZW4pO1xuXG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNhbml0aXplTm9kZShjaGlsZCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRyaW1BdHRyaWJ1dGVzKG5vZGUpIHtcbiAgICAgICAgaWYgKCFub2RlLmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZS5hdHRyaWJ1dGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBjb25zdCBhdHRyTmFtZSA9IG5vZGUuYXR0cmlidXRlcy5pdGVtKGkpLm5hbWU7XG4gICAgICAgICAgICBjb25zdCBhdHRyVmFsdWUgPSBub2RlLmF0dHJpYnV0ZXMuaXRlbShpKS52YWx1ZTtcblxuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICogcmVtb3ZlIGF0dHJpYnV0ZXMgd2hlcmUgdGhlIG5hbWVzIHN0YXJ0IHdpdGggXCJvblwiIChmb3IgZXhhbXBsZTogb25sb2FkLCBvbmVycm9yLi4uKVxuICAgICAgICAgICAgKiByZW1vdmUgYXR0cmlidXRlcyB3aGVyZSB0aGUgdmFsdWUgc3RhcnRzIHdpdGggdGhlIFwiamF2YXNjcmlwdDpcIiBwc2V1ZG8gcHJvdG9jb2wgKGZvciBleGFtcGxlIGhyZWY9XCJqYXZhc2NyaXB0OmFsZXJ0KDEpXCIpXG4gICAgICAgICAgICAqL1xuICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG4gICAgICAgICAgICBpZiAoYXR0ck5hbWUuaW5kZXhPZignb24nKSA9PT0gMCB8fCBhdHRyVmFsdWUuaW5kZXhPZignamF2YXNjcmlwdDonKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKGF0dHJOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBTaW5nbGV0b24gZnJvbSAnLi4vYWJzdHJhY3RzL1NpbmdsZXRvbic7XG5cbi8qKlxuICogVVJMIHV0aWxpdHkuXG4gKlxuICogVGhpcyB1dGlsaXR5IHByb3ZpZGVzIFVSTCBmdW5jdGlvbnMuXG4gKlxuICogQGNvcHlyaWdodCAyMDIyIFdpbnRlci5cbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVybCBleHRlbmRzIFNpbmdsZXRvbiB7XG4gICAgY29uc3RydWN0KCkge1xuICAgICAgICB0aGlzLmZvdW5kQmFzZVVybCA9IG51bGw7XG4gICAgICAgIHRoaXMuZm91bmRBc3NldFVybCA9IG51bGw7XG4gICAgICAgIHRoaXMuYmFzZVVybCgpO1xuICAgICAgICB0aGlzLmFzc2V0VXJsKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBhIFVSTCBiYXNlZCBvbiBhIHJlbGF0aXZlIHBhdGguXG4gICAgICpcbiAgICAgKiBJZiBhbiBhYnNvbHV0ZSBVUkwgaXMgcHJvdmlkZWQsIGl0IHdpbGwgYmUgcmV0dXJuZWQgdW5jaGFuZ2VkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgdG8odXJsKSB7XG4gICAgICAgIGNvbnN0IHVybFJlZ2V4ID0gL14oPzpbXjpdKzpcXC9cXC8pWy1hLXowLTlAOiUuXyt+Iz1dezEsMjU2fVxcYihbLWEtejAtOSgpQDolXysufiM/Ji8vPV0qKS9pO1xuXG4gICAgICAgIGlmICh1cmwubWF0Y2godXJsUmVnZXgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGhlVXJsID0gdXJsLnJlcGxhY2UoL15cXC8rLywgJycpO1xuXG4gICAgICAgIHJldHVybiBgJHt0aGlzLmJhc2VVcmwoKX0ke3RoZVVybH1gO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgYW4gQXNzZXQgVVJMIGJhc2VkIG9uIGEgcmVsYXRpdmUgcGF0aC5cbiAgICAgKlxuICAgICAqIElmIGFuIGFic29sdXRlIFVSTCBpcyBwcm92aWRlZCwgaXQgd2lsbCBiZSByZXR1cm5lZCB1bmNoYW5nZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBhc3NldCh1cmwpIHtcbiAgICAgICAgY29uc3QgdXJsUmVnZXggPSAvXig/OlteOl0rOlxcL1xcLylbLWEtejAtOUA6JS5fK34jPV17MSwyNTZ9XFxiKFstYS16MC05KClAOiVfKy5+Iz8mLy89XSopL2k7XG5cbiAgICAgICAgaWYgKHVybC5tYXRjaCh1cmxSZWdleCkpIHtcbiAgICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0aGVVcmwgPSB1cmwucmVwbGFjZSgvXlxcLysvLCAnJyk7XG5cbiAgICAgICAgcmV0dXJuIGAke3RoaXMuYXNzZXRVcmwoKX0ke3RoZVVybH1gO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhlbHBlciBtZXRob2QgdG8gZ2V0IHRoZSBiYXNlIFVSTCBvZiB0aGlzIGluc3RhbGwuXG4gICAgICpcbiAgICAgKiBUaGlzIGRldGVybWluZXMgdGhlIGJhc2UgVVJMIGZyb20gdGhyZWUgc291cmNlcywgaW4gb3JkZXI6XG4gICAgICogIC0gSWYgU25vd2JvYXJkIGlzIGxvYWRlZCB2aWEgdGhlIGB7JSBzbm93Ym9hcmQgJX1gIHRhZywgaXQgd2lsbCByZXRyaWV2ZSB0aGUgYmFzZSBVUkwgdGhhdFxuICAgICAqIGlzIGF1dG9tYXRpY2FsbHkgaW5jbHVkZWQgdGhlcmUuXG4gICAgICogIC0gSWYgYSBgPGJhc2U+YCB0YWcgaXMgYXZhaWxhYmxlLCBpdCB3aWxsIHVzZSB0aGUgVVJMIHNwZWNpZmllZCBpbiB0aGUgYmFzZSB0YWcuXG4gICAgICogIC0gRmluYWxseSwgaXQgd2lsbCB0YWtlIGEgZ3Vlc3MgZnJvbSB0aGUgY3VycmVudCBsb2NhdGlvbi4gVGhpcyB3aWxsIGxpa2VseSBub3Qgd29yayBmb3Igc2l0ZXNcbiAgICAgKiB0aGF0IHJlc2lkZSBpbiBzdWJkaXJlY3Rvcmllcy5cbiAgICAgKlxuICAgICAqIFRoZSBiYXNlIFVSTCB3aWxsIGFsd2F5cyBjb250YWluIGEgdHJhaWxpbmcgYmFja3NsYXNoLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBiYXNlVXJsKCkge1xuICAgICAgICBpZiAodGhpcy5mb3VuZEJhc2VVcmwgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvdW5kQmFzZVVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbZGF0YS1tb2R1bGU9XCJzbm93Ym9hcmQtYmFzZVwiXScpICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmZvdW5kQmFzZVVybCA9IHRoaXMudmFsaWRhdGVCYXNlVXJsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NjcmlwdFtkYXRhLW1vZHVsZT1cInNub3dib2FyZC1iYXNlXCJdJykuZGF0YXNldC5iYXNlVXJsKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvdW5kQmFzZVVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdiYXNlJykgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZm91bmRCYXNlVXJsID0gdGhpcy52YWxpZGF0ZUJhc2VVcmwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYmFzZScpLmdldEF0dHJpYnV0ZSgnaHJlZicpKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvdW5kQmFzZVVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVybFBhcnRzID0gW1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnByb3RvY29sLFxuICAgICAgICAgICAgJy8vJyxcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ob3N0LFxuICAgICAgICAgICAgJy8nLFxuICAgICAgICBdO1xuICAgICAgICB0aGlzLmZvdW5kQmFzZVVybCA9IHVybFBhcnRzLmpvaW4oJycpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmZvdW5kQmFzZVVybDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgbWV0aG9kIHRvIGdldCB0aGUgYXNzZXQgVVJMIG9mIHRoaXMgaW5zdGFsbC5cbiAgICAgKlxuICAgICAqIFRoaXMgZGV0ZXJtaW5lcyB0aGUgYmFzZSBVUkwgZnJvbSB0aHJlZSBzb3VyY2VzLCBpbiBvcmRlcjpcbiAgICAgKiAgLSBJZiBTbm93Ym9hcmQgaXMgbG9hZGVkIHZpYSB0aGUgYHslIHNub3dib2FyZCAlfWAgdGFnLCBpdCB3aWxsIHJldHJpZXZlIHRoZSBhc3NldCBVUkwgdGhhdFxuICAgICAqIGlzIGF1dG9tYXRpY2FsbHkgaW5jbHVkZWQgdGhlcmUuXG4gICAgICogIC0gSWYgYSBgPGxpbmsgcmVsPVwiYXNzZXRfdXJsXCIgaHJlZj1cImh0dHBzOi8vZXhhbXBsZS5jb21cIj5gIHRhZyBpcyBhdmFpbGFibGUsIGl0IHdpbGwgdXNlIHRoZSBVUkwgc3BlY2lmaWVkIGluIHRoZSBsaW5rIHRhZy5cbiAgICAgKiAgLSBGaW5hbGx5LCBpdCB3aWxsIHRha2UgYSBndWVzcyBmcm9tIHRoZSBjdXJyZW50IGxvY2F0aW9uLiBUaGlzIHdpbGwgbGlrZWx5IG5vdCB3b3JrIGZvciBzaXRlc1xuICAgICAqIHRoYXQgcmVzaWRlIGluIHN1YmRpcmVjdG9yaWVzLlxuICAgICAqXG4gICAgICogVGhlIGFzc2V0IFVSTCB3aWxsIGFsd2F5cyBjb250YWluIGEgdHJhaWxpbmcgYmFja3NsYXNoLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBhc3NldFVybCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZm91bmRBc3NldFVybCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm91bmRBc3NldFVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbZGF0YS1tb2R1bGU9XCJzbm93Ym9hcmQtYmFzZVwiXScpICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmZvdW5kQXNzZXRVcmwgPSB0aGlzLnZhbGlkYXRlQmFzZVVybChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbZGF0YS1tb2R1bGU9XCJzbm93Ym9hcmQtYmFzZVwiXScpLmRhdGFzZXQuYXNzZXRVcmwpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm91bmRBc3NldFVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsaW5rW3JlbD1cImFzc2V0X3VybFwiXScpICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmZvdW5kQXNzZXRVcmwgPSB0aGlzLnZhbGlkYXRlQmFzZVVybChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsaW5rW3JlbD1cImFzc2V0X3VybFwiXScpLmdldEF0dHJpYnV0ZSgnaHJlZicpKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvdW5kQXNzZXRVcmw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1cmxQYXJ0cyA9IFtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCxcbiAgICAgICAgICAgICcvLycsXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaG9zdCxcbiAgICAgICAgICAgICcvJyxcbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy5mb3VuZEFzc2V0VXJsID0gdXJsUGFydHMuam9pbignJyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZm91bmRBc3NldFVybDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZXMgdGhlIGJhc2UgVVJMLCBlbnN1cmluZyBpdCBpcyBhIEhUVFAvSFRUUHMgVVJMLlxuICAgICAqXG4gICAgICogSWYgdGhlIFNub3dib2FyZCBzY3JpcHQgb3IgPGJhc2U+IHRhZyBvbiB0aGUgcGFnZSB1c2UgYSBkaWZmZXJlbnQgdHlwZSBvZiBVUkwsIHRoaXMgd2lsbCBmYWlsIHdpdGhcbiAgICAgKiBhbiBlcnJvci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIHZhbGlkYXRlQmFzZVVybCh1cmwpIHtcbiAgICAgICAgY29uc3QgdXJsUmVnZXggPSAvXigoW146Lz8jXSspOik/KFxcL1xcLyhbXi8/I10qKSk/KFtePyNdKikoXFw/KFteI10qKSk/KCMoLiopKT8vaTtcbiAgICAgICAgY29uc3QgdXJsUGFydHMgPSB1cmxSZWdleC5leGVjKHVybCk7XG4gICAgICAgIGNvbnN0IHByb3RvY29sID0gdXJsUGFydHNbMl07XG4gICAgICAgIGNvbnN0IGRvbWFpbiA9IHVybFBhcnRzWzRdO1xuXG4gICAgICAgIGlmIChwcm90b2NvbCAmJiBbJ2h0dHAnLCAnaHR0cHMnXS5pbmRleE9mKHByb3RvY29sLnRvTG93ZXJDYXNlKCkpID09PSAtMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGJhc2UgVVJMIGRldGVjdGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFkb21haW4pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBiYXNlIFVSTCBkZXRlY3RlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICh1cmwuc3Vic3RyKC0xKSA9PT0gJy8nKVxuICAgICAgICAgICAgPyB1cmxcbiAgICAgICAgICAgIDogYCR7dXJsfS9gO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJQbHVnaW5CYXNlIiwic25vd2JvYXJkIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJjb25zdHJ1Y3QiLCJkZXBlbmRlbmNpZXMiLCJsaXN0ZW5zIiwiZGVzdHJ1Y3QiLCJkZXRhY2giLCJkZXN0cnVjdG9yIiwiZGVmYXVsdCIsIlNpbmdsZXRvbiIsIl9QbHVnaW5CYXNlIiwiX2NhbGxTdXBlciIsImFyZ3VtZW50cyIsIl9pbmhlcml0cyIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiX3NsaWNlZFRvQXJyYXkiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVSZXN0IiwiX2FycmF5TGlrZVRvQXJyYXkiLCJ0b1N0cmluZyIsIkFycmF5IiwiZnJvbSIsInRlc3QiLCJpc0FycmF5Iiwib3duS2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImZpbHRlciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIl9vYmplY3RTcHJlYWQiLCJfZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsIl90b1Byb3BlcnR5S2V5IiwiX2RlZmluZVByb3BlcnRpZXMiLCJfdG9QcmltaXRpdmUiLCJ0b1ByaW1pdGl2ZSIsIlN0cmluZyIsIk51bWJlciIsIl9nZXRQcm90b3R5cGVPZiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwiUmVmZXJlbmNlRXJyb3IiLCJCb29sZWFuIiwidmFsdWVPZiIsImJpbmQiLCJfc2V0UHJvdG90eXBlT2YiLCJSZXF1ZXN0IiwiZWxlbWVudCIsImhhbmRsZXIiLCJvcHRpb25zIiwiX3RoaXMiLCJpc0hhbmRsZXJOYW1lIiwibWF0Y2hlZEVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb25jYXQiLCJmZXRjaE9wdGlvbnMiLCJyZXNwb25zZURhdGEiLCJyZXNwb25zZUVycm9yIiwiY2FuY2VsbGVkIiwiY2hlY2tSZXF1ZXN0IiwiZ2xvYmFsRXZlbnQiLCJldmVudCIsIkV2ZW50IiwiY2FuY2VsYWJsZSIsInJlcXVlc3QiLCJkaXNwYXRjaEV2ZW50IiwiZGVmYXVsdFByZXZlbnRlZCIsImRvQ2xpZW50VmFsaWRhdGlvbiIsImNvbmZpcm0iLCJkb0NvbmZpcm0iLCJjb25maXJtZWQiLCJkb0FqYXgiLCJyZXNwb25zZSIsInByb2Nlc3NVcGRhdGUiLCJYX1dJTlRFUl9TVUNDRVNTIiwicHJvY2Vzc0Vycm9yIiwicHJvY2Vzc1Jlc3BvbnNlIiwiZXJyb3IiLCJFbGVtZW50IiwidW5kZWZpbmVkIiwiZ2V0RmV0Y2giLCJoZWFkZXJzIiwiYm9keSIsImRhdGEiLCJyZWRpcmVjdCIsIm1vZGUiLCJmZXRjaCIsInVybCIsImJyb3dzZXJWYWxpZGF0ZSIsImZvcm0iLCJjaGVja1ZhbGlkaXR5IiwicmVwb3J0VmFsaWRpdHkiLCJfdGhpczIiLCJhamF4UHJvbWlzZSIsInJlamVjdCIsIm9rIiwic3RhdHVzIiwiaGFzIiwiZ2V0IiwiaW5jbHVkZXMiLCJqc29uIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsInJlbmRlckVycm9yIiwiZmlsZSIsImxpbmUiLCJ0cmFjZSIsInRleHQiLCJyZXNwb25zZVRleHQiLCJYX1dJTlRFUl9SRVNQT05TRV9DT0RFIiwicHJvbWlzZSIsIl90aGlzMyIsImJlZm9yZVVwZGF0ZSIsInBhcnRpYWxzIiwiZW50cmllcyIsImVudHJ5IiwiX2VudHJ5Iiwic3Vic3RyIiwiWF9XSU5URVJfQVNTRVRTIiwicHJvY2Vzc0Fzc2V0cyIsInByb21pc2VzIiwiZ2xvYmFsUHJvbWlzZUV2ZW50IiwiX2NhbGxlZSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJkb1VwZGF0ZSIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIl90aGlzNCIsImFmZmVjdGVkIiwiX2VudHJ5MiIsInBhcnRpYWwiLCJjb250ZW50Iiwic2VsZWN0b3IiLCJ1cGRhdGUiLCJlbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbm5lckhUTUwiLCJzdWNjZXNzIiwiZmxhc2giLCJYX1dJTlRFUl9GTEFTSF9NRVNTQUdFUyIsInByb2Nlc3NGbGFzaE1lc3NhZ2VzIiwiWF9XSU5URVJfUkVESVJFQ1QiLCJwcm9jZXNzUmVkaXJlY3QiLCJwcm9jZXNzRXJyb3JNZXNzYWdlIiwic2tpcEVycm9yIiwiWF9XSU5URVJfRVJST1JfRklFTERTIiwicHJvY2Vzc1ZhbGlkYXRpb25FcnJvcnMiLCJYX1dJTlRFUl9FUlJPUl9NRVNTQUdFIiwiX3RoaXM1IiwiaGFuZGxlUmVkaXJlY3RSZXNwb25zZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjcmVhdGVFdmVudCIsImV2ZW50TmFtZSIsIm9uY2UiLCJsb2NhdGlvbiIsImFzc2lnbiIsImhhbmRsZUVycm9yTWVzc2FnZSIsImFsZXJ0IiwibWVzc2FnZXMiLCJoYW5kbGVGbGFzaE1lc3NhZ2VzIiwiZmllbGRzIiwiaGFuZGxlVmFsaWRhdGlvbkVycm9ycyIsImFzc2V0cyIsIl9kb0NvbmZpcm0iLCJfY2FsbGVlMiIsImZ1bGZpbGxlZCIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImhhbmRsZUNvbmZpcm1NZXNzYWdlIiwibGlzdGVuc1RvRXZlbnQiLCJ0MCIsInRhZ05hbWUiLCJjbG9zZXN0IiwiZXh0cmFjdFBhcnRpYWxzIiwieHNyZlRva2VuIiwibG9hZGluZyIsImhyZWYiLCJmaWxlcyIsIkZvcm1EYXRhIiwiZGVidWciLCJjb29raWUiLCJmb3JtRGF0YSIsIl9lbnRyeTMiLCJhcHBlbmQiLCJqb2luIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfbiIsIkYiLCJBc3NldExvYWRlciIsIl9TaW5nbGV0b24iLCJhamF4TG9hZEFzc2V0cyIsIl9sb2FkIiwiX2l0ZXJhdG9yIiwiX3N0ZXAiLCJzY3JpcHQiLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwic3R5bGUiLCJfaXRlcmF0b3IzIiwiX3N0ZXAzIiwiaW1hZ2UiLCJqcyIsImxvYWRTY3JpcHQiLCJ0MSIsImNzcyIsImxvYWRTdHlsZSIsInQyIiwidDMiLCJpbWciLCJsb2FkSW1hZ2UiLCJ0NCIsInQ1IiwibG9hZCIsIl94IiwiYXNzZXQiLCJsb2FkZWQiLCJkb21TY3JpcHQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiZG9tQ3NzIiwiaGVhZCIsIkltYWdlIiwic3JjIiwiQXR0YWNoTG9hZGluZyIsImFqYXhTdGFydCIsImFqYXhEb25lIiwibG9hZEVsZW1lbnRzIiwiY2xhc3NMaXN0IiwiYWRkIiwiZ2V0TG9hZGluZ0NsYXNzIiwiZGF0YXNldCIsImF0dGFjaExvYWRpbmciLCJyZW1vdmUiLCJEYXRhQ29uZmlnIiwiaW5zdGFuY2UiLCJsb2NhbENvbmZpZyIsIkhUTUxFbGVtZW50IiwiaW5zdGFuY2VDb25maWciLCJhY2NlcHRlZENvbmZpZ3MiLCJyZWZyZXNoIiwiY29uZmlnIiwic2V0IiwicGVyc2lzdCIsImdldEFjY2VwdGVkQ29uZmlncyIsInByb2Nlc3NDb25maWciLCJhY2NlcHRBbGxEYXRhQ29uZmlncyIsImRlZmF1bHRzIiwiZ2V0RGVmYXVsdHMiLCJjb2VyY2VWYWx1ZSIsInN0cmluZ1ZhbHVlIiwic3RhcnRzV2l0aCIsImJhc2U2NHN0ciIsInJlcGxhY2UiLCJkZWNvZGVkIiwiYXRvYiIsInRvTG93ZXJDYXNlIiwianNvblBhcnNlciIsInBhcnNlIiwiRmxhc2giLCJkdXJhdGlvbiIsImNsZWFyIiwidGltZXIiLCJmbGFzaFRpbWVyIiwiY2xlYXJUaW1lb3V0IiwiX2dldCIsInJlbW92ZUF0dHJpYnV0ZSIsInN0b3BUaW1lciIsInN0YXJ0VGltZXIiLCJhcHBlbmRDaGlsZCIsInRyYW5zaXRpb24iLCJ0aW1lclRyYW5zIiwic2V0VGltZW91dCIsImNhbmNlbCIsIlN0cmlwZUxvYWRlciIsInJlYWR5IiwiY291bnRlciIsImNyZWF0ZVN0cmlwZSIsInN0cmlwZSIsInNob3ciLCJoaWRlIiwiaW5kaWNhdG9yIiwic3RyaXBlTG9hZGVkIiwibmV3U3RyaXBlIiwiY2xvbmVOb2RlIiwiZm9yY2UiLCJTdHlsZXNoZWV0TG9hZGVyIiwic3R5bGVzTG9hZGVkIiwiZW5kc1dpdGgiLCJzdHlsZXNoZWV0IiwiVHJhbnNpdGlvbiIsImNhbGxiYWNrIiwidHJhaWxUbyIsInBhcnNlRHVyYXRpb24iLCJkb1RyYW5zaXRpb24iLCJldmVudENsYXNzZXMiLCJfbGVuIiwiYXJncyIsIl9rZXkiLCJhY3RpdmUiLCJvdXQiLCJyZXR1cm5DbGFzc2VzIiwiaW5kZXhPZiIsInRyYW5zaXRpb25EdXJhdGlvbiIsInJlc2V0Q2xhc3NlcyIsImV2ZW50Q2xhc3MiLCJnZXRDb21wdXRlZFN0eWxlIiwib25UcmFuc2l0aW9uRW5kIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInBhcnNlZCIsImV4ZWMiLCJhbW91bnQiLCJ1bml0IiwiTWF0aCIsImZsb29yIiwidGFyZ2V0IiwicHJvcCIsInJlY2VpdmVyIiwicHJvcExvd2VyIiwiaGFzUGx1Z2luIiwiX1JlZmxlY3QkZ2V0JHByb3BMb3dlIiwiZ2V0SW5zdGFuY2UiLCJJbm5lclByb3h5SGFuZGxlciIsIlBsdWdpbkxvYWRlciIsIlByb3h5IiwiZnJlZXplIiwiaW5zdGFuY2VzIiwic2luZ2xldG9uIiwiaW5pdGlhbGlzZWQiLCJzZWFsIiwibW9ja3MiLCJvcmlnaW5hbEZ1bmN0aW9ucyIsImhhc01ldGhvZCIsIm1ldGhvZE5hbWUiLCJpc0Z1bmN0aW9uIiwiY2FsbE1ldGhvZCIsInBhcmFtZXRlcnMiLCJzaGlmdCIsIl9sZW4yIiwiX2tleTIiLCJkZXBlbmRlbmNpZXNGdWxmaWxsZWQiLCJ1bm1ldCIsImdldERlcGVuZGVuY2llcyIsIml0ZW0iLCJnZXRQbHVnaW5OYW1lcyIsImlzU2luZ2xldG9uIiwiaW5pdGlhbGlzZVNpbmdsZXRvbiIsIl9sZW4zIiwicGFyYW1zIiwiX2tleTMiLCJfZW50cnk0IiwiX2xlbjQiLCJfa2V5NCIsIm5ld0luc3RhbmNlIiwiX2NvbnN0cnVjdCIsInNwbGljZSIsImdldEluc3RhbmNlcyIsImlzSW5pdGlhbGlzZWQiLCJfbGVuNSIsIl9rZXk1IiwibWFwIiwicGx1Z2luIiwibW9jayIsIl9sZW42IiwiX2tleTYiLCJ1bm1vY2siLCJDb29raWUiLCJKc29uUGFyc2VyIiwiU2FuaXRpemVyIiwiVXJsIiwiU25vd2JvYXJkIiwiYXV0b1NpbmdsZXRvbnMiLCJkZWJ1Z0VuYWJsZWQiLCJhdXRvSW5pdFNpbmdsZXRvbnMiLCJwbHVnaW5zIiwibGlzdGVuZXJzIiwiZm91bmRCYXNlVXJsIiwicmVhZGluZXNzIiwiZG9tIiwiYXR0YWNoQWJzdHJhY3RzIiwibG9hZFV0aWxpdGllcyIsImluaXRpYWxpc2UiLCJhZGRQbHVnaW4iLCJpbml0aWFsaXNlU2luZ2xldG9ucyIsImxvd2VyTmFtZSIsImdldFBsdWdpbnMiLCJyZWFkeU1ldGhvZCIsInJlbW92ZVBsdWdpbiIsImdldFBsdWdpbiIsIm9uIiwib2ZmIiwiaW5kZXgiLCJsaXN0ZW5NZXRob2QiLCJyZXN1bHQiLCJsaXN0ZW5lciIsImluc3RhbmNlUHJvbWlzZSIsImxpc3RlbmVyUHJvbWlzZSIsImFsbCIsImxvZ01lc3NhZ2UiLCJjb2xvciIsImJvbGQiLCJjb25zb2xlIiwiZ3JvdXBDb2xsYXBzZWQiLCJwYXJhbSIsImxvZyIsImdyb3VwRW5kIiwiUHJveHlIYW5kbGVyIiwiU25vd0JvYXJkIiwiQmFzZUNvb2tpZSIsImV4cGlyZXMiLCJwYXRoIiwiZG9tYWluIiwic2VjdXJlIiwic2FtZVNpdGUiLCJzZXREZWZhdWx0cyIsImNvb2tpZXMiLCJjb29raWVOYW1lIiwiY29va2llVmFsdWUiLCJuZXdWYWx1ZSIsInNhdmVWYWx1ZSIsInduSlNPTiIsIm9jSlNPTiIsInN0ciIsImpzb25TdHJpbmciLCJwYXJzZVN0cmluZyIsIkpTT04iLCJ0cmltIiwibnVtIiwiaXNCbGFua0NoYXIiLCJwYXJzZUtleSIsImNhbkJlS2V5SGVhZCIsImdldEJvZHkiLCJvcmlnaW5MZW5ndGgiLCJsYXN0IiwicG9zIiwic3RhY2siLCJxdW90ZSIsImNoIiwiY2hhckNvZGVBdCIsInduU2FuaXRpemUiLCJodG1sIiwic2FuaXRpemUiLCJvY1Nhbml0aXplIiwiYm9keU9ubHkiLCJwYXJzZXIiLCJET01QYXJzZXIiLCJwYXJzZUZyb21TdHJpbmciLCJyZXR1cm5Cb2R5T25seSIsInNhbml0aXplTm9kZSIsImdldFJvb3ROb2RlIiwibm9kZSIsInRyaW1BdHRyaWJ1dGVzIiwiY2hpbGRyZW4iLCJjaGlsZCIsImF0dHJpYnV0ZXMiLCJhdHRyTmFtZSIsImF0dHJWYWx1ZSIsImZvdW5kQXNzZXRVcmwiLCJiYXNlVXJsIiwiYXNzZXRVcmwiLCJ0byIsInVybFJlZ2V4IiwibWF0Y2giLCJ0aGVVcmwiLCJ2YWxpZGF0ZUJhc2VVcmwiLCJnZXRBdHRyaWJ1dGUiLCJ1cmxQYXJ0cyIsInByb3RvY29sIiwiaG9zdCJdLCJzb3VyY2VSb290IjoiIn0=