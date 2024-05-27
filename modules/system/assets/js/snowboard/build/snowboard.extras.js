"use strict";
(self["webpackChunk_wintercms_wn_system_module"] = self["webpackChunk_wintercms_wn_system_module"] || []).push([["/assets/js/snowboard/build/snowboard.extras"],{

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

/***/ "./assets/js/snowboard/extras/FlashListener.js":
/*!*****************************************************!*\
  !*** ./assets/js/snowboard/extras/FlashListener.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FlashListener)
/* harmony export */ });
/* harmony import */ var _abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/Singleton */ "./assets/js/snowboard/abstracts/Singleton.js");
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
 * Defines a default listener for flash events.
 *
 * Connects the Flash plugin to various events that use flash messages.
 *
 * @copyright 2021 Winter.
 * @author Ben Thomson <git@alfreido.com>
 */
var FlashListener = /*#__PURE__*/function (_Singleton) {
  function FlashListener() {
    _classCallCheck(this, FlashListener);
    return _callSuper(this, FlashListener, arguments);
  }
  _inherits(FlashListener, _Singleton);
  return _createClass(FlashListener, [{
    key: "dependencies",
    value:
    /**
     * Defines dependenices.
     *
     * @returns {string[]}
     */
    function dependencies() {
      return ['flash'];
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
        ajaxErrorMessage: 'ajaxErrorMessage',
        ajaxFlashMessages: 'ajaxFlashMessages'
      };
    }

    /**
     * Do flash messages for PHP flash responses.
     */
  }, {
    key: "ready",
    value: function ready() {
      var _this = this;
      document.querySelectorAll('[data-control="flash-message"]').forEach(function (element) {
        _this.snowboard.flash(element.innerHTML, element.dataset.flashType, element.dataset.flashDuration);
        element.remove();
      });
    }

    /**
     * Shows a flash message for AJAX errors.
     *
     * @param {string} message
     * @returns {Boolean}
     */
  }, {
    key: "ajaxErrorMessage",
    value: function ajaxErrorMessage(message) {
      this.snowboard.flash(message, 'error');
      return false;
    }

    /**
     * Shows flash messages returned directly from AJAX functionality.
     *
     * @param {Object} messages
     */
  }, {
    key: "ajaxFlashMessages",
    value: function ajaxFlashMessages(messages) {
      var _this2 = this;
      Object.entries(messages).forEach(function (entry) {
        var _entry = _slicedToArray(entry, 2),
          cssClass = _entry[0],
          message = _entry[1];
        _this2.snowboard.flash(message, cssClass);
      });
      return false;
    }
  }]);
}(_abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./assets/js/snowboard/extras/FormValidation.js":
/*!******************************************************!*\
  !*** ./assets/js/snowboard/extras/FormValidation.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormValidation)
/* harmony export */ });
/* harmony import */ var _abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/Singleton */ "./assets/js/snowboard/abstracts/Singleton.js");
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
 * Adds AJAX-driven form validation to Snowboard requests.
 *
 * Documentation for this feature can be found here:
 * https://wintercms.com/docs/snowboard/extras#ajax-validation
 *
 * @copyright 2022 Winter.
 * @author Ben Thomson <git@alfreido.com>
 */
var FormValidation = /*#__PURE__*/function (_Singleton) {
  function FormValidation() {
    _classCallCheck(this, FormValidation);
    return _callSuper(this, FormValidation, arguments);
  }
  _inherits(FormValidation, _Singleton);
  return _createClass(FormValidation, [{
    key: "construct",
    value:
    /**
     * Constructor.
     */
    function construct() {
      this.errorBags = [];
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
        ajaxStart: 'clearValidation',
        ajaxValidationErrors: 'doValidation'
      };
    }

    /**
     * Ready event handler.
     */
  }, {
    key: "ready",
    value: function ready() {
      this.collectErrorBags(document);
    }

    /**
     * Retrieves validation errors from an AJAX response and passes them through to the error bags.
     *
     * This handler returns false to cancel any further validation handling, and prevents the flash
     * message that is displayed by default for field errors in AJAX requests from showing.
     *
     * @param {HTMLFormElement} form
     * @param {Object} invalidFields
     * @param {Request} request
     * @returns {Boolean}
     */
  }, {
    key: "doValidation",
    value: function doValidation(form, invalidFields, request) {
      var _this = this;
      if (request.element && request.element.dataset.requestValidate === undefined) {
        return null;
      }
      if (!form) {
        return null;
      }
      var errorBags = this.errorBags.filter(function (errorBag) {
        return errorBag.form === form;
      });
      errorBags.forEach(function (errorBag) {
        _this.showErrorBag(errorBag, invalidFields);
      });
      return false;
    }

    /**
     * Clears any validation errors in the given form.
     *
     * @param {Promise} promise
     * @param {Request} request
     * @returns {void}
     */
  }, {
    key: "clearValidation",
    value: function clearValidation(promise, request) {
      var _this2 = this;
      if (request.element && request.element.dataset.requestValidate === undefined) {
        return;
      }
      if (!request.form) {
        return;
      }
      var errorBags = this.errorBags.filter(function (errorBag) {
        return errorBag.form === request.form;
      });
      errorBags.forEach(function (errorBag) {
        _this2.hideErrorBag(errorBag);
      });
    }

    /**
     * Collects error bags (elements with "data-validate-error" attribute) and links them to a
     * placeholder and form.
     *
     * The error bags will be initially hidden, and will only show when validation errors occur.
     *
     * @param {HTMLElement} rootNode
     */
  }, {
    key: "collectErrorBags",
    value: function collectErrorBags(rootNode) {
      var _this3 = this;
      rootNode.querySelectorAll('[data-validate-error], [data-validate-for]').forEach(function (errorBag) {
        var form = errorBag.closest('form[data-request-validate]');

        // If this error bag does not reside within a validating form, remove it
        if (!form) {
          errorBag.parentNode.removeChild(errorBag);
          return;
        }

        // Find message list node, if available
        var messageListElement = null;
        if (errorBag.matches('[data-validate-error]')) {
          messageListElement = errorBag.querySelector('[data-message]');
        }

        // Create a placeholder node
        var placeholder = document.createComment('');

        // Register error bag and replace with placeholder
        var errorBagData = {
          element: errorBag,
          form: form,
          validateFor: errorBag.dataset.validateFor ? errorBag.dataset.validateFor.split(/\s*,\s*/) : '*',
          placeholder: placeholder,
          messageListElement: messageListElement ? messageListElement.cloneNode(true) : null,
          messageListAnchor: null,
          customMessage: errorBag.dataset.validateFor ? errorBag.textContent !== '' || errorBag.childNodes.length > 0 : false
        };

        // If an message list element exists, create another placeholder to act as an anchor point
        if (messageListElement) {
          var messageListAnchor = document.createComment('');
          messageListElement.parentNode.replaceChild(messageListAnchor, messageListElement);
          errorBagData.messageListAnchor = messageListAnchor;
        }
        errorBag.parentNode.replaceChild(placeholder, errorBag);
        _this3.errorBags.push(errorBagData);
      });
    }

    /**
     * Hides an error bag, replacing the error messages with a placeholder node.
     *
     * @param {Object} errorBag
     */
  }, {
    key: "hideErrorBag",
    value: function hideErrorBag(errorBag) {
      if (errorBag.element.isConnected) {
        errorBag.element.parentNode.replaceChild(errorBag.placeholder, errorBag.element);
      }
    }

    /**
     * Shows an error bag with the given invalid fields.
     *
     * @param {Object} errorBag
     * @param {Object} invalidFields
     */
  }, {
    key: "showErrorBag",
    value: function showErrorBag(errorBag, invalidFields) {
      if (!this.errorBagValidatesField(errorBag, invalidFields)) {
        return;
      }
      if (!errorBag.element.isConnected) {
        errorBag.placeholder.parentNode.replaceChild(errorBag.element, errorBag.placeholder);
      }
      if (errorBag.validateFor !== '*') {
        if (!errorBag.customMessage) {
          var firstField = Object.keys(invalidFields).filter(function (field) {
            return errorBag.validateFor.includes(field);
          }).shift();
          var _invalidFields$firstF = _slicedToArray(invalidFields[firstField], 1);
          errorBag.element.innerHTML = _invalidFields$firstF[0];
        }
      } else if (errorBag.messageListElement) {
        // Remove previous error messages
        errorBag.element.querySelectorAll('[data-validation-message]').forEach(function (message) {
          message.parentNode.removeChild(message);
        });
        Object.entries(invalidFields).forEach(function (entry) {
          var _entry = _slicedToArray(entry, 2),
            errors = _entry[1];
          errors.forEach(function (error) {
            var messageElement = errorBag.messageListElement.cloneNode(true);
            messageElement.dataset.validationMessage = '';
            messageElement.innerHTML = error;
            errorBag.messageListAnchor.after(messageElement);
          });
        });
      } else {
        var _invalidFields$Object = _slicedToArray(invalidFields[Object.keys(invalidFields).shift()], 1);
        errorBag.element.innerHTML = _invalidFields$Object[0];
      }
    }

    /**
     * Determines if a given error bag applies for the given invalid fields.
     *
     * @param {Object} errorBag
     * @param {Object} invalidFields
     * @returns {Boolean}
     */
  }, {
    key: "errorBagValidatesField",
    value: function errorBagValidatesField(errorBag, invalidFields) {
      if (errorBag.validateFor === '*') {
        return true;
      }
      return Object.keys(invalidFields).filter(function (field) {
        return errorBag.validateFor.includes(field);
      }).length > 0;
    }
  }]);
}(_abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__["default"]);


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

/***/ "./assets/js/snowboard/snowboard.extras.js":
/*!*************************************************!*\
  !*** ./assets/js/snowboard/snowboard.extras.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _extras_Flash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extras/Flash */ "./assets/js/snowboard/extras/Flash.js");
/* harmony import */ var _extras_FlashListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extras/FlashListener */ "./assets/js/snowboard/extras/FlashListener.js");
/* harmony import */ var _extras_FormValidation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extras/FormValidation */ "./assets/js/snowboard/extras/FormValidation.js");
/* harmony import */ var _extras_Transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extras/Transition */ "./assets/js/snowboard/extras/Transition.js");
/* harmony import */ var _extras_AttachLoading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./extras/AttachLoading */ "./assets/js/snowboard/extras/AttachLoading.js");
/* harmony import */ var _extras_StripeLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./extras/StripeLoader */ "./assets/js/snowboard/extras/StripeLoader.js");
/* harmony import */ var _extras_StylesheetLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./extras/StylesheetLoader */ "./assets/js/snowboard/extras/StylesheetLoader.js");
/* harmony import */ var _extras_AssetLoader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./extras/AssetLoader */ "./assets/js/snowboard/extras/AssetLoader.js");
/* harmony import */ var _extras_DataConfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./extras/DataConfig */ "./assets/js/snowboard/extras/DataConfig.js");









if (window.Snowboard === undefined) {
  throw new Error('Snowboard must be loaded in order to use the extra plugins.');
}
(function (Snowboard) {
  Snowboard.addPlugin('assetLoader', _extras_AssetLoader__WEBPACK_IMPORTED_MODULE_7__["default"]);
  Snowboard.addPlugin('dataConfig', _extras_DataConfig__WEBPACK_IMPORTED_MODULE_8__["default"]);
  Snowboard.addPlugin('extrasStyles', _extras_StylesheetLoader__WEBPACK_IMPORTED_MODULE_6__["default"]);
  Snowboard.addPlugin('transition', _extras_Transition__WEBPACK_IMPORTED_MODULE_3__["default"]);
  Snowboard.addPlugin('flash', _extras_Flash__WEBPACK_IMPORTED_MODULE_0__["default"]);
  Snowboard.addPlugin('flashListener', _extras_FlashListener__WEBPACK_IMPORTED_MODULE_1__["default"]);
  Snowboard.addPlugin('formValidation', _extras_FormValidation__WEBPACK_IMPORTED_MODULE_2__["default"]);
  Snowboard.addPlugin('attachLoading', _extras_AttachLoading__WEBPACK_IMPORTED_MODULE_4__["default"]);
  Snowboard.addPlugin('stripeLoader', _extras_StripeLoader__WEBPACK_IMPORTED_MODULE_5__["default"]);
})(window.Snowboard);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./assets/js/snowboard/snowboard.extras.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2Fzc2V0cy9qcy9zbm93Ym9hcmQvYnVpbGQvc25vd2JvYXJkLmV4dHJhcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBLElBUXFCQSxVQUFVO0VBQzNCO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSSxTQUFBQSxXQUFZQyxTQUFTLEVBQUU7SUFBQUMsZUFBQSxPQUFBRixVQUFBO0lBQ25CLElBQUksQ0FBQ0MsU0FBUyxHQUFHQSxTQUFTO0VBQzlCOztFQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUxJLE9BQUFFLFlBQUEsQ0FBQUgsVUFBQTtJQUFBSSxHQUFBO0lBQUFDLEtBQUEsRUFNQSxTQUFBQyxVQUFBLEVBQVksQ0FDWjs7SUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBSkk7SUFBQUYsR0FBQTtJQUFBQyxLQUFBLEVBS0EsU0FBQUUsYUFBQSxFQUFlO01BQ1gsT0FBTyxFQUFFO0lBQ2I7O0lBRUE7QUFDSjtBQUNBO0FBQ0E7QUFDQTtFQUpJO0lBQUFILEdBQUE7SUFBQUMsS0FBQSxFQUtBLFNBQUFHLFFBQUEsRUFBVTtNQUNOLE9BQU8sQ0FBQyxDQUFDO0lBQ2I7O0lBRUE7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBTEk7SUFBQUosR0FBQTtJQUFBQyxLQUFBLEVBTUEsU0FBQUksU0FBQSxFQUFXO01BQ1AsSUFBSSxDQUFDQyxNQUFNLENBQUMsQ0FBQztNQUNiLE9BQU8sSUFBSSxDQUFDVCxTQUFTO0lBQ3pCOztJQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFKSTtJQUFBRyxHQUFBO0lBQUFDLEtBQUEsRUFLQSxTQUFBTSxXQUFBLEVBQWE7TUFDVCxJQUFJLENBQUNGLFFBQVEsQ0FBQyxDQUFDO0lBQ25CO0VBQUM7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRVk7O0FBRWpCO0FBQ0E7QUFDQTtB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LDJEQUFXLENBQUM7RUFDL0NxTixTQUFTLENBQUNDLFNBQVMsQ0FBQyxZQUFZLEVBQUVqSiwwREFBVSxDQUFDO0VBQzdDZ0osU0FBUyxDQUFDQyxTQUFTLENBQUMsY0FBYyxFQUFFbEMsZ0VBQWdCLENBQUM7RUFDckRpQyxTQUFTLENBQUNDLFNBQVMsQ0FBQyxZQUFZLEVBQUU3QiwwREFBVSxDQUFDO0VBQzdDNEIsU0FBUyxDQUFDQyxTQUFTLENBQUMsT0FBTyxFQUFFdEgscURBQUssQ0FBQztFQUNuQ3FILFNBQVMsQ0FBQ0MsU0FBUyxDQUFDLGVBQWUsRUFBRW5HLDZEQUFhLENBQUM7RUFDbkRrRyxTQUFTLENBQUNDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRXZGLDhEQUFjLENBQUM7RUFDckRzRixTQUFTLENBQUNDLFNBQVMsQ0FBQyxlQUFlLEVBQUVsSyw2REFBYSxDQUFDO0VBQ25EaUssU0FBUyxDQUFDQyxTQUFTLENBQUMsY0FBYyxFQUFFN0MsNERBQVksQ0FBQztBQUNyRCxDQUFDLEVBQUVuRSxNQUFNLENBQUMrRyxTQUFTLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2ludGVyY21zL3duLXN5c3RlbS1tb2R1bGUvLi9hc3NldHMvanMvc25vd2JvYXJkL2Fic3RyYWN0cy9QbHVnaW5CYXNlLmpzIiwid2VicGFjazovL0B3aW50ZXJjbXMvd24tc3lzdGVtLW1vZHVsZS8uL2Fzc2V0cy9qcy9zbm93Ym9hcmQvYWJzdHJhY3RzL1NpbmdsZXRvbi5qcyIsIndlYnBhY2s6Ly9Ad2ludGVyY21zL3duLXN5c3RlbS1tb2R1bGUvLi9hc3NldHMvanMvc25vd2JvYXJkL2V4dHJhcy9Bc3NldExvYWRlci5qcyIsIndlYnBhY2s6Ly9Ad2ludGVyY21zL3duLXN5c3RlbS1tb2R1bGUvLi9hc3NldHMvanMvc25vd2JvYXJkL2V4dHJhcy9BdHRhY2hMb2FkaW5nLmpzIiwid2VicGFjazovL0B3aW50ZXJjbXMvd24tc3lzdGVtLW1vZHVsZS8uL2Fzc2V0cy9qcy9zbm93Ym9hcmQvZXh0cmFzL0RhdGFDb25maWcuanMiLCJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1zeXN0ZW0tbW9kdWxlLy4vYXNzZXRzL2pzL3Nub3dib2FyZC9leHRyYXMvRmxhc2guanMiLCJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1zeXN0ZW0tbW9kdWxlLy4vYXNzZXRzL2pzL3Nub3dib2FyZC9leHRyYXMvRmxhc2hMaXN0ZW5lci5qcyIsIndlYnBhY2s6Ly9Ad2ludGVyY21zL3duLXN5c3RlbS1tb2R1bGUvLi9hc3NldHMvanMvc25vd2JvYXJkL2V4dHJhcy9Gb3JtVmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly9Ad2ludGVyY21zL3duLXN5c3RlbS1tb2R1bGUvLi9hc3NldHMvanMvc25vd2JvYXJkL2V4dHJhcy9TdHJpcGVMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1zeXN0ZW0tbW9kdWxlLy4vYXNzZXRzL2pzL3Nub3dib2FyZC9leHRyYXMvU3R5bGVzaGVldExvYWRlci5qcyIsIndlYnBhY2s6Ly9Ad2ludGVyY21zL3duLXN5c3RlbS1tb2R1bGUvLi9hc3NldHMvanMvc25vd2JvYXJkL2V4dHJhcy9UcmFuc2l0aW9uLmpzIiwid2VicGFjazovL0B3aW50ZXJjbXMvd24tc3lzdGVtLW1vZHVsZS8uL2Fzc2V0cy9qcy9zbm93Ym9hcmQvc25vd2JvYXJkLmV4dHJhcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFBsdWdpbiBiYXNlIGFic3RyYWN0LlxuICpcbiAqIFRoaXMgY2xhc3MgcHJvdmlkZXMgdGhlIGJhc2UgZnVuY3Rpb25hbGl0eSBmb3IgYWxsIHBsdWdpbnMuXG4gKlxuICogQGNvcHlyaWdodCAyMDIxIFdpbnRlci5cbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsdWdpbkJhc2Uge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yLlxuICAgICAqXG4gICAgICogVGhlIGNvbnN0cnVjdG9yIGlzIHByb3ZpZGVkIHRoZSBTbm93Ym9hcmQgZnJhbWV3b3JrIGluc3RhbmNlLCBhbmQgc2hvdWxkIG5vdCBiZSBvdmVyd3JpdHRlblxuICAgICAqIHVubGVzcyB5b3UgYWJzb2x1dGVseSBrbm93IHdoYXQgeW91J3JlIGRvaW5nLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTbm93Ym9hcmR9IHNub3dib2FyZFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNub3dib2FyZCkge1xuICAgICAgICB0aGlzLnNub3dib2FyZCA9IHNub3dib2FyZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQbHVnaW4gY29uc3RydWN0b3IuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBzaG91bGQgYmUgdHJlYXRlZCBhcyB0aGUgdHJ1ZSBjb25zdHJ1Y3RvciBvZiBhIHBsdWdpbiwgYW5kIGNhbiBiZSBvdmVyd3JpdHRlbi5cbiAgICAgKiBJdCB3aWxsIGJlIGNhbGxlZCBzdHJhaWdodCBhZnRlciBjb25zdHJ1Y3Rpb24uXG4gICAgICovXG4gICAgY29uc3RydWN0KCkge1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZmluZXMgdGhlIHJlcXVpcmVkIHBsdWdpbnMgZm9yIHRoaXMgc3BlY2lmaWMgbW9kdWxlIHRvIHdvcmsuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nW119IEFuIGFycmF5IG9mIHBsdWdpbnMgcmVxdWlyZWQgZm9yIHRoaXMgbW9kdWxlIHRvIHdvcmssIGFzIHN0cmluZ3MuXG4gICAgICovXG4gICAgZGVwZW5kZW5jaWVzKCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVmaW5lcyB0aGUgbGlzdGVuZXIgbWV0aG9kcyBmb3IgZ2xvYmFsIGV2ZW50cy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgbGlzdGVucygpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBsdWdpbiBkZXN0cnVjdG9yLlxuICAgICAqXG4gICAgICogRmlyZWQgd2hlbiB0aGlzIHBsdWdpbiBpcyByZW1vdmVkLiBDYW4gYmUgbWFudWFsbHkgY2FsbGVkIGlmIHlvdSBoYXZlIGFub3RoZXIgc2NlbmFyaW8gZm9yXG4gICAgICogZGVzdHJ1Y3Rpb24sIGllLiB0aGUgZWxlbWVudCBhdHRhY2hlZCB0byB0aGUgcGx1Z2luIGlzIHJlbW92ZWQgb3IgY2hhbmdlZC5cbiAgICAgKi9cbiAgICBkZXN0cnVjdCgpIHtcbiAgICAgICAgdGhpcy5kZXRhY2goKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuc25vd2JvYXJkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBsdWdpbiBkZXN0cnVjdG9yIChvbGQgbWV0aG9kIG5hbWUpLlxuICAgICAqXG4gICAgICogQWxsb3dzIHByZXZpb3VzIHVzYWdlIG9mIHRoZSBcImRlc3RydWN0b3JcIiBtZXRob2QgdG8gc3RpbGwgd29yay5cbiAgICAgKi9cbiAgICBkZXN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRlc3RydWN0KCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFBsdWdpbkJhc2UgZnJvbSAnLi9QbHVnaW5CYXNlJztcblxuLyoqXG4gKiBTaW5nbGV0b24gcGx1Z2luIGFic3RyYWN0LlxuICpcbiAqIFRoaXMgaXMgYSBzcGVjaWFsIGRlZmluaXRpb24gY2xhc3MgdGhhdCB0aGUgU25vd2JvYXJkIGZyYW1ld29yayB3aWxsIHVzZSB0byBpbnRlcnByZXQgdGhlIGN1cnJlbnQgcGx1Z2luIGFzIGFcbiAqIFwic2luZ2xldG9uXCIuIFRoaXMgd2lsbCBlbnN1cmUgdGhhdCBvbmx5IG9uZSBpbnN0YW5jZSBvZiB0aGUgcGx1Z2luIGNsYXNzIGlzIHVzZWQgYWNyb3NzIHRoZSBib2FyZC5cbiAqXG4gKiBTaW5nbGV0b25zIGFyZSBpbml0aWFsaXNlZCBvbiB0aGUgXCJkb21SZWFkeVwiIGV2ZW50IGJ5IGRlZmF1bHQuXG4gKlxuICogQGNvcHlyaWdodCAyMDIxIFdpbnRlci5cbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbmdsZXRvbiBleHRlbmRzIFBsdWdpbkJhc2Uge1xufVxuIiwiaW1wb3J0IFNpbmdsZXRvbiBmcm9tICcuLi9hYnN0cmFjdHMvU2luZ2xldG9uJztcblxuLyoqXG4gKiBBc3NldCBMb2FkZXIuXG4gKlxuICogUHJvdmlkZXMgc2ltcGxlIGFzc2V0IGxvYWRpbmcgZnVuY3Rpb25hbGl0eSBmb3IgU25vd2JvYXJkLCBtYWtpbmcgaXQgZWFzeSB0byBwcmUtbG9hZCBpbWFnZXMgb3JcbiAqIGluY2x1ZGUgSmF2YVNjcmlwdCBvciBDU1MgYXNzZXRzIG9uIHRoZSBmbHkuXG4gKlxuICogQnkgZGVmYXVsdCwgdGhpcyBsb2FkZXIgd2lsbCBsaXN0ZW4gdG8gYW55IGFzc2V0cyB0aGF0IGhhdmUgYmVlbiByZXF1ZXN0ZWQgdG8gbG9hZCBpbiBhbiBBSkFYXG4gKiByZXNwb25zZSwgc3VjaCBhcyByZXNwb25zZXMgZnJvbSBhIGNvbXBvbmVudC5cbiAqXG4gKiBZb3UgY2FuIGFsc28gbG9hZCBhc3NldHMgbWFudWFsbHkgYnkgY2FsbGluZyB0aGUgZm9sbG93aW5nOlxuICpcbiAqIGBgYGpzXG4gKiBTbm93Ym9hcmQuYWRkUGx1Z2luKCdhc3NldExvYWRlcicsIEFzc2V0TG9hZGVyKTtcbiAqIFNub3dib2FyZC5hc3NldExvYWRlcigpLnByb2Nlc3NBc3NldHMoYXNzZXRzKTtcbiAqIGBgYFxuICpcbiAqIEBjb3B5cmlnaHQgMjAyMSBXaW50ZXIuXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBc3NldExvYWRlciBleHRlbmRzIFNpbmdsZXRvbiB7XG4gICAgLyoqXG4gICAgICogRXZlbnQgbGlzdGVuZXJzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBsaXN0ZW5zKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWpheExvYWRBc3NldHM6ICdsb2FkJyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXBlbmRlbmNpZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgZGVwZW5kZW5jaWVzKCkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgJ3VybCcsXG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvY2VzcyBhbmQgbG9hZCBhc3NldHMuXG4gICAgICpcbiAgICAgKiBUaGUgYGFzc2V0c2AgcHJvcGVydHkgb2YgdGhpcyBtZXRob2QgcmVxdWlyZXMgYW4gb2JqZWN0IHdpdGggYW55IG9mIHRoZSBmb2xsb3dpbmcga2V5cyBhbmQgYW5cbiAgICAgKiBhcnJheSBvZiBwYXRoczpcbiAgICAgKlxuICAgICAqIC0gYGpzYDogQW4gYXJyYXkgb2YgSmF2YVNjcmlwdCBVUkxzIHRvIGxvYWRcbiAgICAgKiAtIGBjc3NgOiBBbiBhcnJheSBvZiBDU1Mgc3R5bGVzaGVldCBVUkxzIHRvIGxvYWRcbiAgICAgKiAtIGBpbWdgOiBBbiBhcnJheSBvZiBpbWFnZSBVUkxzIHRvIHByZS1sb2FkXG4gICAgICpcbiAgICAgKiBCb3RoIGBqc2AgYW5kIGBjc3NgIGZpbGVzIHdpbGwgYmUgYXV0b21hdGljYWxseSBpbmplY3RlZCwgaG93ZXZlciBgaW1nYCBmaWxlcyB3aWxsIG5vdC5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIHdpbGwgcmV0dXJuIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gYWxsIHJlcXVpcmVkIGFzc2V0cyBhcmUgbG9hZGVkLiBJZiBhblxuICAgICAqIGFzc2V0IGZhaWxzIHRvIGxvYWQsIHRoaXMgUHJvbWlzZSB3aWxsIGJlIHJlamVjdGVkLlxuICAgICAqXG4gICAgICogRVNMaW50ICpSRUFMTFkqIGRvZXNuJ3QgbGlrZSB0aGlzIGNvZGUsIGJ1dCBpZ25vcmUgaXQuIEl0J3MgdGhlIG9ubHkgd2F5IGl0IHdvcmtzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGFzc2V0c1xuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIGFzeW5jIGxvYWQoYXNzZXRzKSB7XG4gICAgICAgIGlmIChhc3NldHMuanMgJiYgYXNzZXRzLmpzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc2NyaXB0IG9mIGFzc2V0cy5qcykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMubG9hZFNjcmlwdChzY3JpcHQpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFzc2V0cy5jc3MgJiYgYXNzZXRzLmNzcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHN0eWxlIG9mIGFzc2V0cy5jc3MpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmxvYWRTdHlsZShzdHlsZSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXNzZXRzLmltZyAmJiBhc3NldHMuaW1nLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaW1hZ2Ugb2YgYXNzZXRzLmltZykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMubG9hZEltYWdlKGltYWdlKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbmplY3RzIGFuZCBsb2FkcyBhIEphdmFTY3JpcHQgVVJMIGludG8gdGhlIERPTS5cbiAgICAgKlxuICAgICAqIFRoZSBzY3JpcHQgd2lsbCBiZSBhcHBlbmRlZCBiZWZvcmUgdGhlIGNsb3NpbmcgYDwvYm9keT5gIHRhZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzY3JpcHRcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICBsb2FkU2NyaXB0KHNjcmlwdCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgLy8gUmVzb2x2ZSBzY3JpcHQgVVJMXG4gICAgICAgICAgICBzY3JpcHQgPSB0aGlzLnNub3dib2FyZC51cmwoKS5hc3NldChzY3JpcHQpO1xuXG4gICAgICAgICAgICAvLyBDaGVjayB0aGF0IHNjcmlwdCBpcyBub3QgYWxyZWFkeSBsb2FkZWRcbiAgICAgICAgICAgIGNvbnN0IGxvYWRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmM9XCIke3NjcmlwdH1cIl1gKTtcbiAgICAgICAgICAgIGlmIChsb2FkZWQpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDcmVhdGUgc2NyaXB0XG4gICAgICAgICAgICBjb25zdCBkb21TY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgICAgIGRvbVNjcmlwdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9qYXZhc2NyaXB0Jyk7XG4gICAgICAgICAgICBkb21TY3JpcHQuc2V0QXR0cmlidXRlKCdzcmMnLCBzY3JpcHQpO1xuICAgICAgICAgICAgZG9tU2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2Fzc2V0TG9hZGVyLmxvYWRlZCcsICdzY3JpcHQnLCBzY3JpcHQsIGRvbVNjcmlwdCk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkb21TY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2Fzc2V0TG9hZGVyLmVycm9yJywgJ3NjcmlwdCcsIHNjcmlwdCwgZG9tU2NyaXB0KTtcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBVbmFibGUgdG8gbG9hZCBzY3JpcHQgZmlsZTogXCIke3NjcmlwdH1cImApKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoZG9tU2NyaXB0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5qZWN0cyBhbmQgbG9hZHMgYSBDU1Mgc3R5bGVzaGVldCBpbnRvIHRoZSBET00uXG4gICAgICpcbiAgICAgKiBUaGUgc3R5bGVzaGVldCB3aWxsIGJlIGFwcGVuZGVkIGJlZm9yZSB0aGUgY2xvc2luZyBgPC9oZWFkPmAgdGFnLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHN0eWxlXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAgICovXG4gICAgbG9hZFN0eWxlKHN0eWxlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAvLyBSZXNvbHZlIHN0eWxlIFVSTFxuICAgICAgICAgICAgc3R5bGUgPSB0aGlzLnNub3dib2FyZC51cmwoKS5hc3NldChzdHlsZSk7XG5cbiAgICAgICAgICAgIC8vIENoZWNrIHRoYXQgc3R5bGVzaGVldCBpcyBub3QgYWxyZWFkeSBsb2FkZWRcbiAgICAgICAgICAgIGNvbnN0IGxvYWRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwic3R5bGVzaGVldFwiXVtocmVmPVwiJHtzdHlsZX1cIl1gKTtcbiAgICAgICAgICAgIGlmIChsb2FkZWQpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDcmVhdGUgc3R5bGVzaGVldFxuICAgICAgICAgICAgY29uc3QgZG9tQ3NzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICAgICAgZG9tQ3NzLnNldEF0dHJpYnV0ZSgncmVsJywgJ3N0eWxlc2hlZXQnKTtcbiAgICAgICAgICAgIGRvbUNzcy5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBzdHlsZSk7XG4gICAgICAgICAgICBkb21Dc3MuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYXNzZXRMb2FkZXIubG9hZGVkJywgJ3N0eWxlJywgc3R5bGUsIGRvbUNzcyk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkb21Dc3MuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2Fzc2V0TG9hZGVyLmVycm9yJywgJ3N0eWxlJywgc3R5bGUsIGRvbUNzcyk7XG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgVW5hYmxlIHRvIGxvYWQgc3R5bGVzaGVldCBmaWxlOiBcIiR7c3R5bGV9XCJgKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kKGRvbUNzcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByZS1sb2FkcyBhbiBpbWFnZS5cbiAgICAgKlxuICAgICAqIFRoZSBpbWFnZSB3aWxsIG5vdCBiZSBpbmplY3RlZCBpbnRvIHRoZSBET00uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaW1hZ2VcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICBsb2FkSW1hZ2UoaW1hZ2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIC8vIFJlc29sdmUgc2NyaXB0IFVSTFxuICAgICAgICAgICAgaW1hZ2UgPSB0aGlzLnNub3dib2FyZC51cmwoKS5hc3NldChpbWFnZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2Fzc2V0TG9hZGVyLmxvYWRlZCcsICdpbWFnZScsIGltYWdlLCBpbWcpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdhc3NldExvYWRlci5lcnJvcicsICdpbWFnZScsIGltYWdlLCBpbWcpO1xuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYFVuYWJsZSB0byBsb2FkIGltYWdlIGZpbGU6IFwiJHtpbWFnZX1cImApKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaW1nLnNyYyA9IGltYWdlO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgU2luZ2xldG9uIGZyb20gJy4uL2Fic3RyYWN0cy9TaW5nbGV0b24nO1xuXG4vKipcbiAqIEFsbG93cyBhdHRhY2hpbmcgYSBsb2FkaW5nIGNsYXNzIG9uIGVsZW1lbnRzIHRoYXQgYW4gQUpBWCByZXF1ZXN0IGlzIHRhcmdldGluZy5cbiAqXG4gKiBAY29weXJpZ2h0IDIwMjEgV2ludGVyLlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXR0YWNoTG9hZGluZyBleHRlbmRzIFNpbmdsZXRvbiB7XG4gICAgLyoqXG4gICAgICogRGVmaW5lcyBkZXBlbmRlbmljZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICAgICovXG4gICAgZGVwZW5kZW5jaWVzKCkge1xuICAgICAgICByZXR1cm4gWydyZXF1ZXN0J107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVmaW5lcyBsaXN0ZW5lcnMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGxpc3RlbnMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhamF4U3RhcnQ6ICdhamF4U3RhcnQnLFxuICAgICAgICAgICAgYWpheERvbmU6ICdhamF4RG9uZScsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYWpheFN0YXJ0KHByb21pc2UsIHJlcXVlc3QpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0LmVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXF1ZXN0LmVsZW1lbnQudGFnTmFtZSA9PT0gJ0ZPUk0nKSB7XG4gICAgICAgICAgICBjb25zdCBsb2FkRWxlbWVudHMgPSByZXF1ZXN0LmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYXR0YWNoLWxvYWRpbmddJyk7XG4gICAgICAgICAgICBpZiAobG9hZEVsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBsb2FkRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5nZXRMb2FkaW5nQ2xhc3MoZWxlbWVudCkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJlcXVlc3QuZWxlbWVudC5kYXRhc2V0LmF0dGFjaExvYWRpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmVxdWVzdC5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5nZXRMb2FkaW5nQ2xhc3MocmVxdWVzdC5lbGVtZW50KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhamF4RG9uZShkYXRhLCByZXF1ZXN0KSB7XG4gICAgICAgIGlmICghcmVxdWVzdC5lbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVxdWVzdC5lbGVtZW50LnRhZ05hbWUgPT09ICdGT1JNJykge1xuICAgICAgICAgICAgY29uc3QgbG9hZEVsZW1lbnRzID0gcmVxdWVzdC5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWF0dGFjaC1sb2FkaW5nXScpO1xuICAgICAgICAgICAgaWYgKGxvYWRFbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbG9hZEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuZ2V0TG9hZGluZ0NsYXNzKGVsZW1lbnQpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyZXF1ZXN0LmVsZW1lbnQuZGF0YXNldC5hdHRhY2hMb2FkaW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJlcXVlc3QuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuZ2V0TG9hZGluZ0NsYXNzKHJlcXVlc3QuZWxlbWVudCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TG9hZGluZ0NsYXNzKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIChlbGVtZW50LmRhdGFzZXQuYXR0YWNoTG9hZGluZyAhPT0gdW5kZWZpbmVkICYmIGVsZW1lbnQuZGF0YXNldC5hdHRhY2hMb2FkaW5nICE9PSAnJylcbiAgICAgICAgICAgID8gZWxlbWVudC5kYXRhc2V0LmF0dGFjaExvYWRpbmdcbiAgICAgICAgICAgIDogJ3duLWxvYWRpbmcnO1xuICAgIH1cbn1cbiIsImltcG9ydCBQbHVnaW5CYXNlIGZyb20gJy4uL2Fic3RyYWN0cy9QbHVnaW5CYXNlJztcblxuLyoqXG4gKiBEYXRhIGNvbmZpZ3VyYXRpb24gcHJvdmlkZXIuXG4gKlxuICogUHJvdmlkZXMgYSBtZWNoYW5pc20gZm9yIHBhc3NpbmcgY29uZmlndXJhdGlvbiBkYXRhIHRocm91Z2ggYW4gZWxlbWVudCdzIGRhdGEgYXR0cmlidXRlcy4gVGhpc1xuICogaXMgZ2VuZXJhbGx5IHVzZWQgZm9yIHdpZGdldHMgb3IgVUkgaW50ZXJhY3Rpb25zIHRvIGNvbmZpZ3VyZSB0aGVtLlxuICpcbiAqIEBjb3B5cmlnaHQgMjAyMiBXaW50ZXIuXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhQ29uZmlnIGV4dGVuZHMgUGx1Z2luQmFzZSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1BsdWdpbkJhc2V9IGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBsb2NhbENvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdChpbnN0YW5jZSwgZWxlbWVudCwgbG9jYWxDb25maWcpIHtcbiAgICAgICAgaWYgKGluc3RhbmNlIGluc3RhbmNlb2YgUGx1Z2luQmFzZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG11c3QgcHJvdmlkZSBhIFNub3dib2FyZCBwbHVnaW4gdG8gZW5hYmxlIGRhdGEgY29uZmlndXJhdGlvbicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RhdGEgY29uZmlndXJhdGlvbiBjYW4gb25seSBiZSBleHRyYWN0ZWQgZnJvbSBIVE1MIGVsZW1lbnRzJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMubG9jYWxDb25maWcgPSBsb2NhbENvbmZpZyB8fCB7fTtcbiAgICAgICAgdGhpcy5pbnN0YW5jZUNvbmZpZyA9IHt9O1xuICAgICAgICB0aGlzLmFjY2VwdGVkQ29uZmlncyA9IHt9O1xuICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBjb25maWcgZm9yIHRoaXMgaW5zdGFuY2UuXG4gICAgICpcbiAgICAgKiBJZiB0aGUgYGNvbmZpZ2AgcGFyYW1ldGVyIGlzIHVuc3BlY2lmaWVkLCByZXR1cm5zIHRoZSBlbnRpcmUgY29uZmlndXJhdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWdcbiAgICAgKi9cbiAgICBnZXQoY29uZmlnKSB7XG4gICAgICAgIGlmIChjb25maWcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VDb25maWc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZUNvbmZpZ1tjb25maWddICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlQ29uZmlnW2NvbmZpZ107XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGNvbmZpZyBmb3IgdGhpcyBpbnN0YW5jZS5cbiAgICAgKlxuICAgICAqIFRoaXMgYWxsb3dzIHlvdSB0byBvdmVycmlkZSwgYXQgcnVudGltZSwgYW55IGNvbmZpZ3VyYXRpb24gdmFsdWUgYXMgbmVjZXNzYXJ5LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcGVyc2lzdFxuICAgICAqL1xuICAgIHNldChjb25maWcsIHZhbHVlLCBwZXJzaXN0KSB7XG4gICAgICAgIGlmIChjb25maWcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbXVzdCBwcm92aWRlIGEgY29uZmlndXJhdGlvbiBrZXkgdG8gc2V0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluc3RhbmNlQ29uZmlnW2NvbmZpZ10gPSB2YWx1ZTtcblxuICAgICAgICBpZiAocGVyc2lzdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmRhdGFzZXRbY29uZmlnXSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5sb2NhbENvbmZpZ1tjb25maWddID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWZyZXNoZXMgdGhlIGNvbmZpZ3VyYXRpb24gZnJvbSB0aGUgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIFRoaXMgd2lsbCBhbGxvdyB5b3UgdG8gbWFrZSBjaGFuZ2VzIHRvIHRoZSBkYXRhIGNvbmZpZyBvbiBhIERPTSBsZXZlbCBhbmQgcmUtYXBwbHkgdGhlbVxuICAgICAqIHRvIHRoZSBjb25maWcgb24gdGhlIEphdmFTY3JpcHQgc2lkZS5cbiAgICAgKi9cbiAgICByZWZyZXNoKCkge1xuICAgICAgICB0aGlzLmFjY2VwdGVkQ29uZmlncyA9IHRoaXMuZ2V0QWNjZXB0ZWRDb25maWdzKCk7XG4gICAgICAgIHRoaXMuaW5zdGFuY2VDb25maWcgPSB0aGlzLnByb2Nlc3NDb25maWcoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHRoZSBhdmFpbGFibGUgY29uZmlndXJhdGlvbnMgdGhhdCBjYW4gYmUgc2V0IHRocm91Z2ggdGhlIGRhdGEgY29uZmlnLlxuICAgICAqXG4gICAgICogSWYgYW4gaW5zdGFuY2UgaGFzIGFuIGBhY2NlcHRBbGxEYXRhQ29uZmlnc2AgcHJvcGVydHksIHNldCB0byBgdHJ1ZWAsIHRoZW4gYWxsIGRhdGFcbiAgICAgKiBhdHRyaWJ1dGVzIHdpbGwgYmUgYXZhaWxhYmxlIGFzIGNvbmZpZ3VyYXRpb24gdmFsdWVzLiBUaGlzIGNhbiBiZSBhIHNlY3VyaXR5IGNvbmNlcm4sIHNvXG4gICAgICogdHJlYWQgY2FyZWZ1bGx5LlxuICAgICAqXG4gICAgICogT3RoZXJ3aXNlLCBhdmFpbGFibGUgY29uZmlndXJhdGlvbnMgd2lsbCBiZSBkZXRlcm1pbmVkIGJ5IHRoZSBrZXlzIGF2YWlsYWJsZSBpbiBhbiBvYmplY3RcbiAgICAgKiByZXR1cm5lZCBieSBhIGBkZWZhdWx0cygpYCBtZXRob2QgaW4gdGhlIGluc3RhbmNlLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ1tdfGJvb2xlYW59XG4gICAgICovXG4gICAgZ2V0QWNjZXB0ZWRDb25maWdzKCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLmFjY2VwdEFsbERhdGFDb25maWdzICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICYmIHRoaXMuaW5zdGFuY2UuYWNjZXB0QWxsRGF0YUNvbmZpZ3MgPT09IHRydWVcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UuZGVmYXVsdHMgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgJiYgdHlwZW9mIHRoaXMuaW5zdGFuY2UuZGVmYXVsdHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICYmIHR5cGVvZiB0aGlzLmluc3RhbmNlLmRlZmF1bHRzKCkgPT09ICdvYmplY3QnXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuaW5zdGFuY2UuZGVmYXVsdHMoKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZGVmYXVsdCB2YWx1ZXMgZm9yIHRoZSBpbnN0YW5jZS5cbiAgICAgKlxuICAgICAqIFRoaXMgd2lsbCBiZSBhbiBlbXB0eSBvYmplY3QgaWYgdGhlIGluc3RhbmNlIGVpdGhlciBkb2VzIG5vdCBoYXZlIGEgYGRlZmF1bHRzKClgIG1ldGhvZCwgb3JcbiAgICAgKiB0aGUgbWV0aG9kIGl0c2VsZiBkb2VzIG5vdCByZXR1cm4gYW4gb2JqZWN0LlxuICAgICAqXG4gICAgICogQHJldHVybnMge29iamVjdH1cbiAgICAgKi9cbiAgICBnZXREZWZhdWx0cygpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5kZWZhdWx0cyAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAmJiB0eXBlb2YgdGhpcy5pbnN0YW5jZS5kZWZhdWx0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgJiYgdHlwZW9mIHRoaXMuaW5zdGFuY2UuZGVmYXVsdHMoKSA9PT0gJ29iamVjdCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5kZWZhdWx0cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb2Nlc3NlcyB0aGUgY29uZmlndXJhdGlvbi5cbiAgICAgKlxuICAgICAqIExvYWRzIHVwIHRoZSBkZWZhdWx0cywgdGhlbiBwb3B1bGF0ZXMgaXQgd2l0aCBhbnkgY29uZmlndXJhdGlvbiB2YWx1ZXMgcHJvdmlkZWQgYnkgdGhlIGRhdGFcbiAgICAgKiBhdHRyaWJ1dGVzLCBiYXNlZCBvbiB0aGUgcnVsZXMgb2YgdGhlIGFjY2VwdGVkIGNvbmZpZ3VyYXRpb25zLlxuICAgICAqXG4gICAgICogVGhpcyBjb25maWd1cmF0aW9uIG9iamVjdCBpcyB0aGVuIGNhY2hlZCBhbmQgYXZhaWxhYmxlIHRocm91Z2ggYGNvbmZpZy5nZXQoKWAgY2FsbHMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgICAqL1xuICAgIHByb2Nlc3NDb25maWcoKSB7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuZ2V0RGVmYXVsdHMoKTtcblxuICAgICAgICBpZiAodGhpcy5hY2NlcHRlZENvbmZpZ3MgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gY29uZmlnO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5lbGVtZW50LmRhdGFzZXQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFjY2VwdGVkQ29uZmlncyA9PT0gdHJ1ZSB8fCB0aGlzLmFjY2VwdGVkQ29uZmlncy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnW2tleV0gPSB0aGlzLmNvZXJjZVZhbHVlKHRoaXMuZWxlbWVudC5kYXRhc2V0W2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5sb2NhbENvbmZpZykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWNjZXB0ZWRDb25maWdzID09PSB0cnVlIHx8IHRoaXMuYWNjZXB0ZWRDb25maWdzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgICBjb25maWdba2V5XSA9IHRoaXMubG9jYWxDb25maWdba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlICovXG5cbiAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb2VyY2VzIGNvbmZpZ3VyYXRpb24gdmFsdWVzIGZvciBKYXZhU2NyaXB0LlxuICAgICAqXG4gICAgICogVGFrZXMgdGhlIHN0cmluZyB2YWx1ZSByZXR1cm5lZCBmcm9tIHRoZSBkYXRhIGF0dHJpYnV0ZSBhbmQgY29lcmNlcyBpdCBpbnRvIGEgbW9yZSBzdWl0YWJsZVxuICAgICAqIHR5cGUgZm9yIEphdmFTY3JpcHQgcHJvY2Vzc2luZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBjb2VyY2VWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBjb25zdCBzdHJpbmdWYWx1ZSA9IFN0cmluZyh2YWx1ZSk7XG5cbiAgICAgICAgLy8gTnVsbCB2YWx1ZVxuICAgICAgICBpZiAoc3RyaW5nVmFsdWUgPT09ICdudWxsJykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVbmRlZmluZWQgdmFsdWVcbiAgICAgICAgaWYgKHN0cmluZ1ZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJhc2U2NCB2YWx1ZVxuICAgICAgICBpZiAoc3RyaW5nVmFsdWUuc3RhcnRzV2l0aCgnYmFzZTY0OicpKSB7XG4gICAgICAgICAgICBjb25zdCBiYXNlNjRzdHIgPSBzdHJpbmdWYWx1ZS5yZXBsYWNlKC9eYmFzZTY0Oi8sICcnKTtcbiAgICAgICAgICAgIGNvbnN0IGRlY29kZWQgPSBhdG9iKGJhc2U2NHN0cik7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb2VyY2VWYWx1ZShkZWNvZGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJvb2xlYW4gdmFsdWVcbiAgICAgICAgaWYgKFsndHJ1ZScsICd5ZXMnXS5pbmNsdWRlcyhzdHJpbmdWYWx1ZS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFsnZmFsc2UnLCAnbm8nXS5pbmNsdWRlcyhzdHJpbmdWYWx1ZS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTnVtZXJpYyB2YWx1ZVxuICAgICAgICBpZiAoL15bLStdP1swLTldKyhcXC5bMC05XSspPyQvLnRlc3Qoc3RyaW5nVmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyKHN0cmluZ1ZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEpTT04gdmFsdWVcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNub3dib2FyZC5qc29uUGFyc2VyKCkucGFyc2Uoc3RyaW5nVmFsdWUpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gKHN0cmluZ1ZhbHVlID09PSAnJykgPyB0cnVlIDogc3RyaW5nVmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgUGx1Z2luQmFzZSBmcm9tICcuLi9hYnN0cmFjdHMvUGx1Z2luQmFzZSc7XG5cbi8qKlxuICogUHJvdmlkZXMgZmxhc2ggbWVzc2FnZXMgZm9yIHRoZSBDTVMuXG4gKlxuICogRmxhc2ggbWVzc2FnZXMgd2lsbCBwb3AgdXAgYXQgdGhlIHRvcCBjZW50ZXIgb2YgdGhlIHBhZ2UgYW5kIHdpbGwgcmVtYWluIGZvciA3IHNlY29uZHMgYnkgZGVmYXVsdC4gSG92ZXJpbmcgb3ZlclxuICogdGhlIG1lc3NhZ2Ugd2lsbCByZXNldCBhbmQgcGF1c2UgdGhlIHRpbWVyLiBDbGlja2luZyBvbiB0aGUgZmxhc2ggbWVzc2FnZSB3aWxsIGRpc21pc3MgaXQuXG4gKlxuICogQXJndW1lbnRzOlxuICogIC0gXCJtZXNzYWdlXCI6IFRoZSBjb250ZW50IG9mIHRoZSBmbGFzaCBtZXNzYWdlLiBIVE1MIGlzIGFjY2VwdGVkLlxuICogIC0gXCJ0eXBlXCI6IFRoZSB0eXBlIG9mIGZsYXNoIG1lc3NhZ2UuIFRoaXMgaXMgYXBwZW5kZWQgYXMgYSBjbGFzcyB0byB0aGUgZmxhc2ggbWVzc2FnZSBpdHNlbGYuXG4gKiAgLSBcImR1cmF0aW9uXCI6IEhvdyBsb25nIHRoZSBmbGFzaCBtZXNzYWdlIHdpbGwgc3RheSB2aXNpYmxlIGZvciwgaW4gc2Vjb25kcy4gRGVmYXVsdDogNyBzZWNvbmRzLlxuICpcbiAqIFVzYWdlOlxuICogICAgICBTbm93Ym9hcmQuZmxhc2goJ1RoaXMgaXMgYSBmbGFzaCBtZXNzYWdlJywgJ2luZm8nLCA4KTtcbiAqXG4gKiBAY29weXJpZ2h0IDIwMjEgV2ludGVyLlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxhc2ggZXh0ZW5kcyBQbHVnaW5CYXNlIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3Rvci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZHVyYXRpb25cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3QobWVzc2FnZSwgdHlwZSwgZHVyYXRpb24pIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZSB8fCAnZGVmYXVsdCc7XG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBOdW1iZXIoZHVyYXRpb24gfHwgNyk7XG5cbiAgICAgICAgaWYgKHRoaXMuZHVyYXRpb24gPCAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZsYXNoIGR1cmF0aW9uIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXIsIG9yIHplcm8nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XG4gICAgICAgIHRoaXMuZmxhc2hUaW1lciA9IG51bGw7XG4gICAgICAgIHRoaXMuY3JlYXRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVmaW5lcyBkZXBlbmRlbmNpZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICAgICovXG4gICAgZGVwZW5kZW5jaWVzKCkge1xuICAgICAgICByZXR1cm4gWyd0cmFuc2l0aW9uJ107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzdHJ1Y3Rvci5cbiAgICAgKlxuICAgICAqIFRoaXMgd2lsbCBlbnN1cmUgdGhlIGZsYXNoIG1lc3NhZ2UgaXMgcmVtb3ZlZCBhbmQgdGltZW91dCBpcyBjbGVhcmVkIGlmIHRoZSBtb2R1bGUgaXMgcmVtb3ZlZC5cbiAgICAgKi9cbiAgICBkZXN0cnVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMudGltZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5mbGFzaFRpbWVyKSB7XG4gICAgICAgICAgICB0aGlzLmZsYXNoVGltZXIucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5mbGFzaCkge1xuICAgICAgICAgICAgdGhpcy5mbGFzaC5yZW1vdmUoKTtcbiAgICAgICAgICAgIHRoaXMuZmxhc2ggPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5mbGFzaFRpbWVyID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLmRlc3RydWN0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyB0aGUgZmxhc2ggbWVzc2FnZS5cbiAgICAgKi9cbiAgICBjcmVhdGUoKSB7XG4gICAgICAgIHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdmbGFzaC5jcmVhdGUnLCB0aGlzKTtcblxuICAgICAgICB0aGlzLmZsYXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgICAgIHRoaXMuZmxhc2guaW5uZXJIVE1MID0gdGhpcy5tZXNzYWdlO1xuICAgICAgICB0aGlzLmZsYXNoLmNsYXNzTGlzdC5hZGQoJ2ZsYXNoLW1lc3NhZ2UnLCB0aGlzLnR5cGUpO1xuICAgICAgICB0aGlzLmZsYXNoLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1jb250cm9sJyk7XG4gICAgICAgIHRoaXMuZmxhc2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnJlbW92ZSgpKTtcbiAgICAgICAgdGhpcy5mbGFzaC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB0aGlzLnN0b3BUaW1lcigpKTtcbiAgICAgICAgdGhpcy5mbGFzaC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHRoaXMuc3RhcnRUaW1lcigpKTtcblxuICAgICAgICBpZiAodGhpcy5kdXJhdGlvbiA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZmxhc2hUaW1lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgICAgICAgICAgdGhpcy5mbGFzaFRpbWVyLmNsYXNzTGlzdC5hZGQoJ2ZsYXNoLXRpbWVyJyk7XG4gICAgICAgICAgICB0aGlzLmZsYXNoLmFwcGVuZENoaWxkKHRoaXMuZmxhc2hUaW1lcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZsYXNoLmNsYXNzTGlzdC5hZGQoJ25vLXRpbWVyJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgdG8gYm9keVxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZmxhc2gpO1xuXG4gICAgICAgIHRoaXMuc25vd2JvYXJkLnRyYW5zaXRpb24odGhpcy5mbGFzaCwgJ3Nob3cnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0VGltZXIoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgZmxhc2ggbWVzc2FnZS5cbiAgICAgKi9cbiAgICByZW1vdmUoKSB7XG4gICAgICAgIHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdmbGFzaC5yZW1vdmUnLCB0aGlzKTtcblxuICAgICAgICB0aGlzLnN0b3BUaW1lcigpO1xuXG4gICAgICAgIHRoaXMuc25vd2JvYXJkLnRyYW5zaXRpb24odGhpcy5mbGFzaCwgJ2hpZGUnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZsYXNoLnJlbW92ZSgpO1xuICAgICAgICAgICAgdGhpcy5mbGFzaCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmRlc3RydWN0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFycyBhbGwgZmxhc2ggbWVzc2FnZXMgYXZhaWxhYmxlIG9uIHRoZSBwYWdlLlxuICAgICAqL1xuICAgIGNsZWFyKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdib2R5ID4gZGl2LmZsYXNoLW1lc3NhZ2UnKS5mb3JFYWNoKChlbGVtZW50KSA9PiBlbGVtZW50LnJlbW92ZSgpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdGFydHMgdGhlIHRpbWVyIGZvciB0aGlzIGZsYXNoIG1lc3NhZ2UuXG4gICAgICovXG4gICAgc3RhcnRUaW1lcigpIHtcbiAgICAgICAgaWYgKHRoaXMuZHVyYXRpb24gPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudGltZXJUcmFucyA9IHRoaXMuc25vd2JvYXJkLnRyYW5zaXRpb24odGhpcy5mbGFzaFRpbWVyLCAndGltZW91dCcsIG51bGwsIGAke3RoaXMuZHVyYXRpb259LjBzYCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMudGltZXIgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB0aGlzLnJlbW92ZSgpLCB0aGlzLmR1cmF0aW9uICogMTAwMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXRzIHRoZSB0aW1lciBmb3IgdGhpcyBmbGFzaCBtZXNzYWdlLlxuICAgICAqL1xuICAgIHN0b3BUaW1lcigpIHtcbiAgICAgICAgaWYgKHRoaXMudGltZXJUcmFucykge1xuICAgICAgICAgICAgdGhpcy50aW1lclRyYW5zLmNhbmNlbCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnRpbWVyKSB7XG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IFNpbmdsZXRvbiBmcm9tICcuLi9hYnN0cmFjdHMvU2luZ2xldG9uJztcblxuLyoqXG4gKiBEZWZpbmVzIGEgZGVmYXVsdCBsaXN0ZW5lciBmb3IgZmxhc2ggZXZlbnRzLlxuICpcbiAqIENvbm5lY3RzIHRoZSBGbGFzaCBwbHVnaW4gdG8gdmFyaW91cyBldmVudHMgdGhhdCB1c2UgZmxhc2ggbWVzc2FnZXMuXG4gKlxuICogQGNvcHlyaWdodCAyMDIxIFdpbnRlci5cbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsYXNoTGlzdGVuZXIgZXh0ZW5kcyBTaW5nbGV0b24ge1xuICAgIC8qKlxuICAgICAqIERlZmluZXMgZGVwZW5kZW5pY2VzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgICAqL1xuICAgIGRlcGVuZGVuY2llcygpIHtcbiAgICAgICAgcmV0dXJuIFsnZmxhc2gnXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIGxpc3RlbmVycy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgbGlzdGVucygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlYWR5OiAncmVhZHknLFxuICAgICAgICAgICAgYWpheEVycm9yTWVzc2FnZTogJ2FqYXhFcnJvck1lc3NhZ2UnLFxuICAgICAgICAgICAgYWpheEZsYXNoTWVzc2FnZXM6ICdhamF4Rmxhc2hNZXNzYWdlcycsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRG8gZmxhc2ggbWVzc2FnZXMgZm9yIFBIUCBmbGFzaCByZXNwb25zZXMuXG4gICAgICovXG4gICAgcmVhZHkoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNvbnRyb2w9XCJmbGFzaC1tZXNzYWdlXCJdJykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zbm93Ym9hcmQuZmxhc2goXG4gICAgICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwsXG4gICAgICAgICAgICAgICAgZWxlbWVudC5kYXRhc2V0LmZsYXNoVHlwZSxcbiAgICAgICAgICAgICAgICBlbGVtZW50LmRhdGFzZXQuZmxhc2hEdXJhdGlvbixcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3dzIGEgZmxhc2ggbWVzc2FnZSBmb3IgQUpBWCBlcnJvcnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGFqYXhFcnJvck1lc3NhZ2UobWVzc2FnZSkge1xuICAgICAgICB0aGlzLnNub3dib2FyZC5mbGFzaChtZXNzYWdlLCAnZXJyb3InKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3dzIGZsYXNoIG1lc3NhZ2VzIHJldHVybmVkIGRpcmVjdGx5IGZyb20gQUpBWCBmdW5jdGlvbmFsaXR5LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2VzXG4gICAgICovXG4gICAgYWpheEZsYXNoTWVzc2FnZXMobWVzc2FnZXMpIHtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMobWVzc2FnZXMpLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBbY3NzQ2xhc3MsIG1lc3NhZ2VdID0gZW50cnk7XG4gICAgICAgICAgICB0aGlzLnNub3dib2FyZC5mbGFzaChtZXNzYWdlLCBjc3NDbGFzcyk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuIiwiaW1wb3J0IFNpbmdsZXRvbiBmcm9tICcuLi9hYnN0cmFjdHMvU2luZ2xldG9uJztcblxuLyoqXG4gKiBBZGRzIEFKQVgtZHJpdmVuIGZvcm0gdmFsaWRhdGlvbiB0byBTbm93Ym9hcmQgcmVxdWVzdHMuXG4gKlxuICogRG9jdW1lbnRhdGlvbiBmb3IgdGhpcyBmZWF0dXJlIGNhbiBiZSBmb3VuZCBoZXJlOlxuICogaHR0cHM6Ly93aW50ZXJjbXMuY29tL2RvY3Mvc25vd2JvYXJkL2V4dHJhcyNhamF4LXZhbGlkYXRpb25cbiAqXG4gKiBAY29weXJpZ2h0IDIwMjIgV2ludGVyLlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybVZhbGlkYXRpb24gZXh0ZW5kcyBTaW5nbGV0b24ge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdCgpIHtcbiAgICAgICAgdGhpcy5lcnJvckJhZ3MgPSBbXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIGxpc3RlbmVycy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgbGlzdGVucygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlYWR5OiAncmVhZHknLFxuICAgICAgICAgICAgYWpheFN0YXJ0OiAnY2xlYXJWYWxpZGF0aW9uJyxcbiAgICAgICAgICAgIGFqYXhWYWxpZGF0aW9uRXJyb3JzOiAnZG9WYWxpZGF0aW9uJyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWFkeSBldmVudCBoYW5kbGVyLlxuICAgICAqL1xuICAgIHJlYWR5KCkge1xuICAgICAgICB0aGlzLmNvbGxlY3RFcnJvckJhZ3MoZG9jdW1lbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyB2YWxpZGF0aW9uIGVycm9ycyBmcm9tIGFuIEFKQVggcmVzcG9uc2UgYW5kIHBhc3NlcyB0aGVtIHRocm91Z2ggdG8gdGhlIGVycm9yIGJhZ3MuXG4gICAgICpcbiAgICAgKiBUaGlzIGhhbmRsZXIgcmV0dXJucyBmYWxzZSB0byBjYW5jZWwgYW55IGZ1cnRoZXIgdmFsaWRhdGlvbiBoYW5kbGluZywgYW5kIHByZXZlbnRzIHRoZSBmbGFzaFxuICAgICAqIG1lc3NhZ2UgdGhhdCBpcyBkaXNwbGF5ZWQgYnkgZGVmYXVsdCBmb3IgZmllbGQgZXJyb3JzIGluIEFKQVggcmVxdWVzdHMgZnJvbSBzaG93aW5nLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRm9ybUVsZW1lbnR9IGZvcm1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaW52YWxpZEZpZWxkc1xuICAgICAqIEBwYXJhbSB7UmVxdWVzdH0gcmVxdWVzdFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGRvVmFsaWRhdGlvbihmb3JtLCBpbnZhbGlkRmllbGRzLCByZXF1ZXN0KSB7XG4gICAgICAgIGlmIChyZXF1ZXN0LmVsZW1lbnQgJiYgcmVxdWVzdC5lbGVtZW50LmRhdGFzZXQucmVxdWVzdFZhbGlkYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZm9ybSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlcnJvckJhZ3MgPSB0aGlzLmVycm9yQmFncy5maWx0ZXIoKGVycm9yQmFnKSA9PiBlcnJvckJhZy5mb3JtID09PSBmb3JtKTtcbiAgICAgICAgZXJyb3JCYWdzLmZvckVhY2goKGVycm9yQmFnKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dFcnJvckJhZyhlcnJvckJhZywgaW52YWxpZEZpZWxkcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYW55IHZhbGlkYXRpb24gZXJyb3JzIGluIHRoZSBnaXZlbiBmb3JtLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtQcm9taXNlfSBwcm9taXNlXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0fSByZXF1ZXN0XG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgY2xlYXJWYWxpZGF0aW9uKHByb21pc2UsIHJlcXVlc3QpIHtcbiAgICAgICAgaWYgKHJlcXVlc3QuZWxlbWVudCAmJiByZXF1ZXN0LmVsZW1lbnQuZGF0YXNldC5yZXF1ZXN0VmFsaWRhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcmVxdWVzdC5mb3JtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlcnJvckJhZ3MgPSB0aGlzLmVycm9yQmFncy5maWx0ZXIoKGVycm9yQmFnKSA9PiBlcnJvckJhZy5mb3JtID09PSByZXF1ZXN0LmZvcm0pO1xuICAgICAgICBlcnJvckJhZ3MuZm9yRWFjaCgoZXJyb3JCYWcpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGlkZUVycm9yQmFnKGVycm9yQmFnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29sbGVjdHMgZXJyb3IgYmFncyAoZWxlbWVudHMgd2l0aCBcImRhdGEtdmFsaWRhdGUtZXJyb3JcIiBhdHRyaWJ1dGUpIGFuZCBsaW5rcyB0aGVtIHRvIGFcbiAgICAgKiBwbGFjZWhvbGRlciBhbmQgZm9ybS5cbiAgICAgKlxuICAgICAqIFRoZSBlcnJvciBiYWdzIHdpbGwgYmUgaW5pdGlhbGx5IGhpZGRlbiwgYW5kIHdpbGwgb25seSBzaG93IHdoZW4gdmFsaWRhdGlvbiBlcnJvcnMgb2NjdXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSByb290Tm9kZVxuICAgICAqL1xuICAgIGNvbGxlY3RFcnJvckJhZ3Mocm9vdE5vZGUpIHtcbiAgICAgICAgcm9vdE5vZGUucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdmFsaWRhdGUtZXJyb3JdLCBbZGF0YS12YWxpZGF0ZS1mb3JdJykuZm9yRWFjaCgoZXJyb3JCYWcpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSBlcnJvckJhZy5jbG9zZXN0KCdmb3JtW2RhdGEtcmVxdWVzdC12YWxpZGF0ZV0nKTtcblxuICAgICAgICAgICAgLy8gSWYgdGhpcyBlcnJvciBiYWcgZG9lcyBub3QgcmVzaWRlIHdpdGhpbiBhIHZhbGlkYXRpbmcgZm9ybSwgcmVtb3ZlIGl0XG4gICAgICAgICAgICBpZiAoIWZvcm0pIHtcbiAgICAgICAgICAgICAgICBlcnJvckJhZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVycm9yQmFnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEZpbmQgbWVzc2FnZSBsaXN0IG5vZGUsIGlmIGF2YWlsYWJsZVxuICAgICAgICAgICAgbGV0IG1lc3NhZ2VMaXN0RWxlbWVudCA9IG51bGw7XG4gICAgICAgICAgICBpZiAoZXJyb3JCYWcubWF0Y2hlcygnW2RhdGEtdmFsaWRhdGUtZXJyb3JdJykpIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTGlzdEVsZW1lbnQgPSBlcnJvckJhZy5xdWVyeVNlbGVjdG9yKCdbZGF0YS1tZXNzYWdlXScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDcmVhdGUgYSBwbGFjZWhvbGRlciBub2RlXG4gICAgICAgICAgICBjb25zdCBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpO1xuXG4gICAgICAgICAgICAvLyBSZWdpc3RlciBlcnJvciBiYWcgYW5kIHJlcGxhY2Ugd2l0aCBwbGFjZWhvbGRlclxuICAgICAgICAgICAgY29uc3QgZXJyb3JCYWdEYXRhID0ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGVycm9yQmFnLFxuICAgICAgICAgICAgICAgIGZvcm0sXG4gICAgICAgICAgICAgICAgdmFsaWRhdGVGb3I6IChlcnJvckJhZy5kYXRhc2V0LnZhbGlkYXRlRm9yKVxuICAgICAgICAgICAgICAgICAgICA/IGVycm9yQmFnLmRhdGFzZXQudmFsaWRhdGVGb3Iuc3BsaXQoL1xccyosXFxzKi8pXG4gICAgICAgICAgICAgICAgICAgIDogJyonLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VMaXN0RWxlbWVudDogKG1lc3NhZ2VMaXN0RWxlbWVudClcbiAgICAgICAgICAgICAgICAgICAgPyBtZXNzYWdlTGlzdEVsZW1lbnQuY2xvbmVOb2RlKHRydWUpXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgICAgICAgICBtZXNzYWdlTGlzdEFuY2hvcjogbnVsbCxcbiAgICAgICAgICAgICAgICBjdXN0b21NZXNzYWdlOiAoZXJyb3JCYWcuZGF0YXNldC52YWxpZGF0ZUZvcilcbiAgICAgICAgICAgICAgICAgICAgPyAoZXJyb3JCYWcudGV4dENvbnRlbnQgIT09ICcnIHx8IGVycm9yQmFnLmNoaWxkTm9kZXMubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICAgICAgOiBmYWxzZSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIElmIGFuIG1lc3NhZ2UgbGlzdCBlbGVtZW50IGV4aXN0cywgY3JlYXRlIGFub3RoZXIgcGxhY2Vob2xkZXIgdG8gYWN0IGFzIGFuIGFuY2hvciBwb2ludFxuICAgICAgICAgICAgaWYgKG1lc3NhZ2VMaXN0RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VMaXN0QW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnJyk7XG4gICAgICAgICAgICAgICAgbWVzc2FnZUxpc3RFbGVtZW50LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG1lc3NhZ2VMaXN0QW5jaG9yLCBtZXNzYWdlTGlzdEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGVycm9yQmFnRGF0YS5tZXNzYWdlTGlzdEFuY2hvciA9IG1lc3NhZ2VMaXN0QW5jaG9yO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlcnJvckJhZy5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChwbGFjZWhvbGRlciwgZXJyb3JCYWcpO1xuXG4gICAgICAgICAgICB0aGlzLmVycm9yQmFncy5wdXNoKGVycm9yQmFnRGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhpZGVzIGFuIGVycm9yIGJhZywgcmVwbGFjaW5nIHRoZSBlcnJvciBtZXNzYWdlcyB3aXRoIGEgcGxhY2Vob2xkZXIgbm9kZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlcnJvckJhZ1xuICAgICAqL1xuICAgIGhpZGVFcnJvckJhZyhlcnJvckJhZykge1xuICAgICAgICBpZiAoZXJyb3JCYWcuZWxlbWVudC5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgZXJyb3JCYWcuZWxlbWVudC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChlcnJvckJhZy5wbGFjZWhvbGRlciwgZXJyb3JCYWcuZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93cyBhbiBlcnJvciBiYWcgd2l0aCB0aGUgZ2l2ZW4gaW52YWxpZCBmaWVsZHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXJyb3JCYWdcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaW52YWxpZEZpZWxkc1xuICAgICAqL1xuICAgIHNob3dFcnJvckJhZyhlcnJvckJhZywgaW52YWxpZEZpZWxkcykge1xuICAgICAgICBpZiAoIXRoaXMuZXJyb3JCYWdWYWxpZGF0ZXNGaWVsZChlcnJvckJhZywgaW52YWxpZEZpZWxkcykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZXJyb3JCYWcuZWxlbWVudC5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgZXJyb3JCYWcucGxhY2Vob2xkZXIucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoZXJyb3JCYWcuZWxlbWVudCwgZXJyb3JCYWcucGxhY2Vob2xkZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yQmFnLnZhbGlkYXRlRm9yICE9PSAnKicpIHtcbiAgICAgICAgICAgIGlmICghZXJyb3JCYWcuY3VzdG9tTWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0RmllbGQgPSBPYmplY3Qua2V5cyhpbnZhbGlkRmllbGRzKVxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChmaWVsZCkgPT4gZXJyb3JCYWcudmFsaWRhdGVGb3IuaW5jbHVkZXMoZmllbGQpKVxuICAgICAgICAgICAgICAgICAgICAuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICBbZXJyb3JCYWcuZWxlbWVudC5pbm5lckhUTUxdID0gaW52YWxpZEZpZWxkc1tmaXJzdEZpZWxkXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChlcnJvckJhZy5tZXNzYWdlTGlzdEVsZW1lbnQpIHtcbiAgICAgICAgICAgIC8vIFJlbW92ZSBwcmV2aW91cyBlcnJvciBtZXNzYWdlc1xuICAgICAgICAgICAgZXJyb3JCYWcuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS12YWxpZGF0aW9uLW1lc3NhZ2VdJykuZm9yRWFjaCgobWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChtZXNzYWdlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhpbnZhbGlkRmllbGRzKS5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IFssIGVycm9yc10gPSBlbnRyeTtcblxuICAgICAgICAgICAgICAgIGVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlRWxlbWVudCA9IGVycm9yQmFnLm1lc3NhZ2VMaXN0RWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbGVtZW50LmRhdGFzZXQudmFsaWRhdGlvbk1lc3NhZ2UgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsZW1lbnQuaW5uZXJIVE1MID0gZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yQmFnLm1lc3NhZ2VMaXN0QW5jaG9yLmFmdGVyKG1lc3NhZ2VFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgW2Vycm9yQmFnLmVsZW1lbnQuaW5uZXJIVE1MXSA9IGludmFsaWRGaWVsZHNbT2JqZWN0LmtleXMoaW52YWxpZEZpZWxkcykuc2hpZnQoKV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIGEgZ2l2ZW4gZXJyb3IgYmFnIGFwcGxpZXMgZm9yIHRoZSBnaXZlbiBpbnZhbGlkIGZpZWxkcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlcnJvckJhZ1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpbnZhbGlkRmllbGRzXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgZXJyb3JCYWdWYWxpZGF0ZXNGaWVsZChlcnJvckJhZywgaW52YWxpZEZpZWxkcykge1xuICAgICAgICBpZiAoZXJyb3JCYWcudmFsaWRhdGVGb3IgPT09ICcqJykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoaW52YWxpZEZpZWxkcylcbiAgICAgICAgICAgIC5maWx0ZXIoKGZpZWxkKSA9PiBlcnJvckJhZy52YWxpZGF0ZUZvci5pbmNsdWRlcyhmaWVsZCkpXG4gICAgICAgICAgICAubGVuZ3RoID4gMDtcbiAgICB9XG59XG4iLCJpbXBvcnQgU2luZ2xldG9uIGZyb20gJy4uL2Fic3RyYWN0cy9TaW5nbGV0b24nO1xuXG4vKipcbiAqIERpc3BsYXlzIGEgc3RyaXBlIGF0IHRoZSB0b3Agb2YgdGhlIHBhZ2UgdGhhdCBpbmRpY2F0ZXMgbG9hZGluZy5cbiAqXG4gKiBAY29weXJpZ2h0IDIwMjEgV2ludGVyLlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RyaXBlTG9hZGVyIGV4dGVuZHMgU2luZ2xldG9uIHtcbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIGRlcGVuZGVuaWNlcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAgICAgKi9cbiAgICBkZXBlbmRlbmNpZXMoKSB7XG4gICAgICAgIHJldHVybiBbJ3JlcXVlc3QnXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIGxpc3RlbmVycy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgbGlzdGVucygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlYWR5OiAncmVhZHknLFxuICAgICAgICAgICAgYWpheFN0YXJ0OiAnYWpheFN0YXJ0JyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZWFkeSgpIHtcbiAgICAgICAgdGhpcy5jb3VudGVyID0gMDtcblxuICAgICAgICB0aGlzLmNyZWF0ZVN0cmlwZSgpO1xuICAgIH1cblxuICAgIGFqYXhTdGFydChwcm9taXNlLCByZXF1ZXN0KSB7XG4gICAgICAgIGlmIChyZXF1ZXN0Lm9wdGlvbnMuc3RyaXBlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zaG93KCk7XG5cbiAgICAgICAgcHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY3JlYXRlU3RyaXBlKCkge1xuICAgICAgICB0aGlzLmluZGljYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgICAgICB0aGlzLnN0cmlwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgICAgICB0aGlzLnN0cmlwZUxvYWRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuXG4gICAgICAgIHRoaXMuaW5kaWNhdG9yLmNsYXNzTGlzdC5hZGQoJ3N0cmlwZS1sb2FkaW5nLWluZGljYXRvcicsICdsb2FkZWQnKTtcbiAgICAgICAgdGhpcy5zdHJpcGUuY2xhc3NMaXN0LmFkZCgnc3RyaXBlJyk7XG4gICAgICAgIHRoaXMuc3RyaXBlTG9hZGVkLmNsYXNzTGlzdC5hZGQoJ3N0cmlwZS1sb2FkZWQnKTtcblxuICAgICAgICB0aGlzLmluZGljYXRvci5hcHBlbmRDaGlsZCh0aGlzLnN0cmlwZSk7XG4gICAgICAgIHRoaXMuaW5kaWNhdG9yLmFwcGVuZENoaWxkKHRoaXMuc3RyaXBlTG9hZGVkKTtcblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuaW5kaWNhdG9yKTtcbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgICB0aGlzLmNvdW50ZXIgKz0gMTtcblxuICAgICAgICBjb25zdCBuZXdTdHJpcGUgPSB0aGlzLnN0cmlwZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIHRoaXMuaW5kaWNhdG9yLmFwcGVuZENoaWxkKG5ld1N0cmlwZSk7XG4gICAgICAgIHRoaXMuc3RyaXBlLnJlbW92ZSgpO1xuICAgICAgICB0aGlzLnN0cmlwZSA9IG5ld1N0cmlwZTtcblxuICAgICAgICBpZiAodGhpcy5jb3VudGVyID4gMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbmRpY2F0b3IuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGVkJyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnd24tbG9hZGluZycpO1xuICAgIH1cblxuICAgIGhpZGUoZm9yY2UpIHtcbiAgICAgICAgdGhpcy5jb3VudGVyIC09IDE7XG5cbiAgICAgICAgaWYgKGZvcmNlID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmNvdW50ZXIgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmluZGljYXRvci5jbGFzc0xpc3QuYWRkKCdsb2FkZWQnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnd24tbG9hZGluZycpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IFNpbmdsZXRvbiBmcm9tICcuLi9hYnN0cmFjdHMvU2luZ2xldG9uJztcblxuLyoqXG4gKiBFbWJlZHMgdGhlIFwiZXh0cmFzXCIgc3R5bGVzaGVldCBpbnRvIHRoZSBwYWdlLCBpZiBpdCBpcyBub3QgbG9hZGVkIHRocm91Z2ggdGhlIHRoZW1lLlxuICpcbiAqIEBjb3B5cmlnaHQgMjAyMSBXaW50ZXIuXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHlsZXNoZWV0TG9hZGVyIGV4dGVuZHMgU2luZ2xldG9uIHtcbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIGxpc3RlbmVycy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgbGlzdGVucygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlYWR5OiAncmVhZHknLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJlYWR5KCkge1xuICAgICAgICBsZXQgc3R5bGVzTG9hZGVkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gRGV0ZXJtaW5lIGlmIHN0eWxlc2hlZXQgaXMgYWxyZWFkeSBsb2FkZWRcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJykuZm9yRWFjaCgoY3NzKSA9PiB7XG4gICAgICAgICAgICBpZiAoY3NzLmhyZWYuZW5kc1dpdGgoJy9tb2R1bGVzL3N5c3RlbS9hc3NldHMvY3NzL3Nub3dib2FyZC5leHRyYXMuY3NzJykpIHtcbiAgICAgICAgICAgICAgICBzdHlsZXNMb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXN0eWxlc0xvYWRlZCkge1xuICAgICAgICAgICAgY29uc3Qgc3R5bGVzaGVldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgICAgIHN0eWxlc2hlZXQuc2V0QXR0cmlidXRlKCdyZWwnLCAnc3R5bGVzaGVldCcpO1xuICAgICAgICAgICAgc3R5bGVzaGVldC5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCB0aGlzLnNub3dib2FyZC51cmwoKS5hc3NldCgnL21vZHVsZXMvc3lzdGVtL2Fzc2V0cy9jc3Mvc25vd2JvYXJkLmV4dHJhcy5jc3MnKSk7XG4gICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlc2hlZXQpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IFBsdWdpbkJhc2UgZnJvbSAnLi4vYWJzdHJhY3RzL1BsdWdpbkJhc2UnO1xuXG4vKipcbiAqIFByb3ZpZGVzIHRyYW5zaXRpb24gc3VwcG9ydCBmb3IgZWxlbWVudHMuXG4gKlxuICogVHJhbnNpdGlvbiBhbGxvd3MgQ1NTIHRyYW5zaXRpb25zIHRvIGJlIGNvbnRyb2xsZWQgYW5kIGNhbGxiYWNrcyB0byBiZSBydW4gb25jZSBjb21wbGV0ZWQuIEl0IHdvcmtzIHNpbWlsYXIgdG8gVnVlXG4gKiB0cmFuc2l0aW9ucyB3aXRoIDMgc3RhZ2VzIG9mIHRyYW5zaXRpb24sIGFuZCBjbGFzc2VzIGFzc2lnbmVkIHRvIHRoZSBlbGVtZW50IHdpdGggdGhlIHRyYW5zaXRpb24gbmFtZSBzdWZmaXhlZCB3aXRoXG4gKiB0aGUgc3RhZ2Ugb2YgdHJhbnNpdGlvbjpcbiAqXG4gKiAgLSBgaW5gOiBBIGNsYXNzIGFzc2lnbmVkIHRvIHRoZSBlbGVtZW50IGZvciB0aGUgZmlyc3QgZnJhbWUgb2YgdGhlIHRyYW5zaXRpb24sIHJlbW92ZWQgYWZ0ZXJ3YXJkcy4gVGhpcyBzaG91bGQgYmVcbiAqICAgICAgdXNlZCB0byBkZWZpbmUgdGhlIGluaXRpYWwgc3RhdGUgb2YgdGhlIHRyYW5zaXRpb24uXG4gKiAgLSBgYWN0aXZlYDogQSBjbGFzcyBhc3NpZ25lZCB0byB0aGUgZWxlbWVudCBmb3IgdGhlIGR1cmF0aW9uIG9mIHRoZSB0cmFuc2l0aW9uLiBUaGlzIHNob3VsZCBiZSB1c2VkIHRvIGRlZmluZSB0aGVcbiAqICAgICAgdHJhbnNpdGlvbiBpdHNlbGYuXG4gKiAgLSBgb3V0YDogQSBjbGFzcyBhc3NpZ25lZCB0byB0aGUgZWxlbWVudCBhZnRlciB0aGUgZmlyc3QgZnJhbWUgb2YgdGhlIHRyYW5zaXRpb24gYW5kIGtlcHQgdG8gdGhlIGVuZCBvZiB0aGVcbiAqICAgICAgdHJhbnNpdGlvbi4gVGhpcyBzaG91bGQgZGVmaW5lIHRoZSBlbmQgc3RhdGUgb2YgdGhlIHRyYW5zaXRpb24uXG4gKlxuICogVXNhZ2U6XG4gKiAgICAgIFNub3dib2FyZC50cmFuc2l0aW9uKGRvY3VtZW50LmVsZW1lbnQsICd0cmFuc2l0aW9uJywgKCkgPT4ge1xuICogICAgICAgICAgY29uc29sZS5sb2coJ1JlbW92ZSBlbGVtZW50IGFmdGVyIDcgc2Vjb25kcycpO1xuICogICAgICAgICAgdGhpcy5yZW1vdmUoKTtcbiAqICAgICAgfSwgJzdzJyk7XG4gKlxuICogQGNvcHlyaWdodCAyMDIxIFdpbnRlci5cbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYW5zaXRpb24gZXh0ZW5kcyBQbHVnaW5CYXNlIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3Rvci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdG8gdHJhbnNpdGlvblxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0cmFuc2l0aW9uIFRoZSBuYW1lIG9mIHRoZSB0cmFuc2l0aW9uLCB0aGlzIHByZWZpeGVzIHRoZSBzdGFnZXMgb2YgdHJhbnNpdGlvbi5cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0byBjYWxsIHdoZW4gdGhlIHRyYW5zaXRpb24gZW5kcy5cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZHVyYXRpb24gQW4gb3B0aW9uYWwgb3ZlcnJpZGUgb24gdGhlIHRyYW5zaXRpb24gZHVyYXRpb24uIE11c3QgYmUgc3BlY2lmaWVkIGFzICdzJyAoc2Vjcykgb3IgJ21zJyAobXNlY3MpLlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdHJhaWxUbyBJZiB0cnVlLCB0aGUgXCJvdXRcIiBjbGFzcyB3aWxsIHJlbWFpbiBhZnRlciB0aGUgZW5kIG9mIHRoZSB0cmFuc2l0aW9uLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdChlbGVtZW50LCB0cmFuc2l0aW9uLCBjYWxsYmFjaywgZHVyYXRpb24sIHRyYWlsVG8pIHtcbiAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQSBIVE1MRWxlbWVudCBtdXN0IGJlIHByb3ZpZGVkIGZvciB0cmFuc2l0aW9uaW5nJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblxuICAgICAgICBpZiAodHlwZW9mIHRyYW5zaXRpb24gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyYW5zaXRpb24gbmFtZSBtdXN0IGJlIHNwZWNpZmllZCBhcyBhIHN0cmluZycpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbiA9IHRyYW5zaXRpb247XG5cbiAgICAgICAgaWYgKGNhbGxiYWNrICYmIHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYWxsYmFjayBtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG5cbiAgICAgICAgaWYgKGR1cmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmR1cmF0aW9uID0gdGhpcy5wYXJzZUR1cmF0aW9uKGR1cmF0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZHVyYXRpb24gPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50cmFpbFRvID0gKHRyYWlsVG8gPT09IHRydWUpO1xuXG4gICAgICAgIHRoaXMuZG9UcmFuc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFwcyBldmVudCBjbGFzc2VzIHRvIHRoZSBnaXZlbiB0cmFuc2l0aW9uIHN0YXRlLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7Li4uYW55fSBhcmdzXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIGV2ZW50Q2xhc3NlcyguLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50Q2xhc3NlcyA9IHtcbiAgICAgICAgICAgIGluOiBgJHt0aGlzLnRyYW5zaXRpb259LWluYCxcbiAgICAgICAgICAgIGFjdGl2ZTogYCR7dGhpcy50cmFuc2l0aW9ufS1hY3RpdmVgLFxuICAgICAgICAgICAgb3V0OiBgJHt0aGlzLnRyYW5zaXRpb259LW91dGAsXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhldmVudENsYXNzZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmV0dXJuQ2xhc3NlcyA9IFtdO1xuICAgICAgICBPYmplY3QuZW50cmllcyhldmVudENsYXNzZXMpLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSBlbnRyeTtcblxuICAgICAgICAgICAgaWYgKGFyZ3MuaW5kZXhPZihrZXkpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybkNsYXNzZXMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXR1cm5DbGFzc2VzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4ZWN1dGVzIHRoZSB0cmFuc2l0aW9uLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgZG9UcmFuc2l0aW9uKCkge1xuICAgICAgICAvLyBBZGQgZHVyYXRpb24gb3ZlcnJpZGVcbiAgICAgICAgaWYgKHRoaXMuZHVyYXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSB0aGlzLmR1cmF0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZXNldENsYXNzZXMoKTtcblxuICAgICAgICAvLyBTdGFydCB0cmFuc2l0aW9uIC0gc2hvdyBcImluXCIgYW5kIFwiYWN0aXZlXCIgY2xhc3Nlc1xuICAgICAgICB0aGlzLmV2ZW50Q2xhc3NlcygnaW4nLCAnYWN0aXZlJykuZm9yRWFjaCgoZXZlbnRDbGFzcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoZXZlbnRDbGFzcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgLy8gRW5zdXJlIGEgdHJhbnNpdGlvbiBleGlzdHNcbiAgICAgICAgICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQpWyd0cmFuc2l0aW9uLWR1cmF0aW9uJ10gIT09ICcwcycpIHtcbiAgICAgICAgICAgICAgICAvLyBMaXN0ZW4gZm9yIHRoZSB0cmFuc2l0aW9uIHRvIGVuZFxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKCkgPT4gdGhpcy5vblRyYW5zaXRpb25FbmQoKSwge1xuICAgICAgICAgICAgICAgICAgICBvbmNlOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmV2ZW50Q2xhc3NlcygnaW4nKVswXSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuZXZlbnRDbGFzc2VzKCdvdXQnKVswXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRDbGFzc2VzKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxiYWNrLmFwcGx5KHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5kZXN0cnVjdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayBmdW5jdGlvbiB3aGVuIHRoZSB0cmFuc2l0aW9uIGVuZHMuXG4gICAgICpcbiAgICAgKiBXaGVuIGEgdHJhbnNpdGlvbiBlbmRzLCB0aGUgaW5zdGFuY2Ugb2YgdGhlIHRyYW5zaXRpb24gaXMgYXV0b21hdGljYWxseSBkZXN0cnVjdGVkLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgb25UcmFuc2l0aW9uRW5kKCkge1xuICAgICAgICB0aGlzLmV2ZW50Q2xhc3NlcygnYWN0aXZlJywgKCF0aGlzLnRyYWlsVG8pID8gJ291dCcgOiAnJykuZm9yRWFjaCgoZXZlbnRDbGFzcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoZXZlbnRDbGFzcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLmNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrLmFwcGx5KHRoaXMuZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgZHVyYXRpb24gb3ZlcnJpZGVcbiAgICAgICAgaWYgKHRoaXMuZHVyYXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kZXN0cnVjdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbmNlbHMgYSB0cmFuc2l0aW9uLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgY2FuY2VsKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsICgpID0+IHRoaXMub25UcmFuc2l0aW9uRW5kLCB7XG4gICAgICAgICAgICBvbmNlOiB0cnVlLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnJlc2V0Q2xhc3NlcygpO1xuXG4gICAgICAgIC8vIFJlbW92ZSBkdXJhdGlvbiBvdmVycmlkZVxuICAgICAgICBpZiAodGhpcy5kdXJhdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDYWxsIGRlc3RydWN0b3JcbiAgICAgICAgdGhpcy5kZXN0cnVjdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0cyB0aGUgY2xhc3NlcywgcmVtb3ZpbmcgYW55IHRyYW5zaXRpb24gY2xhc3Nlcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIHJlc2V0Q2xhc3NlcygpIHtcbiAgICAgICAgdGhpcy5ldmVudENsYXNzZXMoKS5mb3JFYWNoKChldmVudENsYXNzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShldmVudENsYXNzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIGEgZ2l2ZW4gZHVyYXRpb24gYW5kIGNvbnZlcnRzIGl0IHRvIGEgXCJtc1wiIHZhbHVlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGR1cmF0aW9uXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBwYXJzZUR1cmF0aW9uKGR1cmF0aW9uKSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IC9eKFswLTldKyhcXC5bMC05XSspPykobT9zKT8kLy5leGVjKGR1cmF0aW9uKTtcbiAgICAgICAgY29uc3QgYW1vdW50ID0gTnVtYmVyKHBhcnNlZFsxXSk7XG4gICAgICAgIGNvbnN0IHVuaXQgPSAocGFyc2VkWzNdID09PSAncycpXG4gICAgICAgICAgICA/ICdzZWMnXG4gICAgICAgICAgICA6ICdtc2VjJztcblxuICAgICAgICByZXR1cm4gKHVuaXQgPT09ICdzZWMnKVxuICAgICAgICAgICAgPyBgJHthbW91bnQgKiAxMDAwfW1zYFxuICAgICAgICAgICAgOiBgJHtNYXRoLmZsb29yKGFtb3VudCl9bXNgO1xuICAgIH1cbn1cbiIsImltcG9ydCBGbGFzaCBmcm9tICcuL2V4dHJhcy9GbGFzaCc7XG5pbXBvcnQgRmxhc2hMaXN0ZW5lciBmcm9tICcuL2V4dHJhcy9GbGFzaExpc3RlbmVyJztcbmltcG9ydCBGb3JtVmFsaWRhdGlvbiBmcm9tICcuL2V4dHJhcy9Gb3JtVmFsaWRhdGlvbic7XG5pbXBvcnQgVHJhbnNpdGlvbiBmcm9tICcuL2V4dHJhcy9UcmFuc2l0aW9uJztcbmltcG9ydCBBdHRhY2hMb2FkaW5nIGZyb20gJy4vZXh0cmFzL0F0dGFjaExvYWRpbmcnO1xuaW1wb3J0IFN0cmlwZUxvYWRlciBmcm9tICcuL2V4dHJhcy9TdHJpcGVMb2FkZXInO1xuaW1wb3J0IFN0eWxlc2hlZXRMb2FkZXIgZnJvbSAnLi9leHRyYXMvU3R5bGVzaGVldExvYWRlcic7XG5pbXBvcnQgQXNzZXRMb2FkZXIgZnJvbSAnLi9leHRyYXMvQXNzZXRMb2FkZXInO1xuaW1wb3J0IERhdGFDb25maWcgZnJvbSAnLi9leHRyYXMvRGF0YUNvbmZpZyc7XG5cbmlmICh3aW5kb3cuU25vd2JvYXJkID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1Nub3dib2FyZCBtdXN0IGJlIGxvYWRlZCBpbiBvcmRlciB0byB1c2UgdGhlIGV4dHJhIHBsdWdpbnMuJyk7XG59XG5cbigoU25vd2JvYXJkKSA9PiB7XG4gICAgU25vd2JvYXJkLmFkZFBsdWdpbignYXNzZXRMb2FkZXInLCBBc3NldExvYWRlcik7XG4gICAgU25vd2JvYXJkLmFkZFBsdWdpbignZGF0YUNvbmZpZycsIERhdGFDb25maWcpO1xuICAgIFNub3dib2FyZC5hZGRQbHVnaW4oJ2V4dHJhc1N0eWxlcycsIFN0eWxlc2hlZXRMb2FkZXIpO1xuICAgIFNub3dib2FyZC5hZGRQbHVnaW4oJ3RyYW5zaXRpb24nLCBUcmFuc2l0aW9uKTtcbiAgICBTbm93Ym9hcmQuYWRkUGx1Z2luKCdmbGFzaCcsIEZsYXNoKTtcbiAgICBTbm93Ym9hcmQuYWRkUGx1Z2luKCdmbGFzaExpc3RlbmVyJywgRmxhc2hMaXN0ZW5lcik7XG4gICAgU25vd2JvYXJkLmFkZFBsdWdpbignZm9ybVZhbGlkYXRpb24nLCBGb3JtVmFsaWRhdGlvbik7XG4gICAgU25vd2JvYXJkLmFkZFBsdWdpbignYXR0YWNoTG9hZGluZycsIEF0dGFjaExvYWRpbmcpO1xuICAgIFNub3dib2FyZC5hZGRQbHVnaW4oJ3N0cmlwZUxvYWRlcicsIFN0cmlwZUxvYWRlcik7XG59KSh3aW5kb3cuU25vd2JvYXJkKTtcbiJdLCJuYW1lcyI6WyJQbHVnaW5CYXNlIiwic25vd2JvYXJkIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJjb25zdHJ1Y3QiLCJkZXBlbmRlbmNpZXMiLCJsaXN0ZW5zIiwiZGVzdHJ1Y3QiLCJkZXRhY2giLCJkZXN0cnVjdG9yIiwiZGVmYXVsdCIsIlNpbmdsZXRvbiIsIl9QbHVnaW5CYXNlIiwiX2NhbGxTdXBlciIsImFyZ3VtZW50cyIsIl9pbmhlcml0cyIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJBcnJheSIsImlzQXJyYXkiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbiIsIkYiLCJfYXJyYXlMaWtlVG9BcnJheSIsInRvU3RyaW5nIiwiZnJvbSIsInRlc3QiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJfYXN5bmNUb0dlbmVyYXRvciIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJfZGVmaW5lUHJvcGVydGllcyIsIl90b1Byb3BlcnR5S2V5IiwiX3RvUHJpbWl0aXZlIiwidG9QcmltaXRpdmUiLCJTdHJpbmciLCJOdW1iZXIiLCJfZ2V0UHJvdG90eXBlT2YiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIlJlZmVyZW5jZUVycm9yIiwiQm9vbGVhbiIsInZhbHVlT2YiLCJiaW5kIiwiX3NldFByb3RvdHlwZU9mIiwiQXNzZXRMb2FkZXIiLCJfU2luZ2xldG9uIiwiYWpheExvYWRBc3NldHMiLCJfbG9hZCIsIl9jYWxsZWUiLCJhc3NldHMiLCJfaXRlcmF0b3IiLCJfc3RlcCIsInNjcmlwdCIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJzdHlsZSIsIl9pdGVyYXRvcjMiLCJfc3RlcDMiLCJpbWFnZSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJqcyIsImxvYWRTY3JpcHQiLCJ0MCIsInJlamVjdCIsInQxIiwiY3NzIiwibG9hZFN0eWxlIiwidDIiLCJ0MyIsImltZyIsImxvYWRJbWFnZSIsInQ0IiwidDUiLCJsb2FkIiwiX3giLCJfdGhpcyIsInVybCIsImFzc2V0IiwibG9hZGVkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29uY2F0IiwiZG9tU2NyaXB0IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJnbG9iYWxFdmVudCIsImJvZHkiLCJhcHBlbmQiLCJfdGhpczIiLCJkb21Dc3MiLCJoZWFkIiwiX3RoaXMzIiwiSW1hZ2UiLCJzcmMiLCJBdHRhY2hMb2FkaW5nIiwiYWpheFN0YXJ0IiwiYWpheERvbmUiLCJwcm9taXNlIiwicmVxdWVzdCIsImVsZW1lbnQiLCJ0YWdOYW1lIiwibG9hZEVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImNsYXNzTGlzdCIsImFkZCIsImdldExvYWRpbmdDbGFzcyIsImRhdGFzZXQiLCJhdHRhY2hMb2FkaW5nIiwidW5kZWZpbmVkIiwiZGF0YSIsInJlbW92ZSIsIkRhdGFDb25maWciLCJpbnN0YW5jZSIsImxvY2FsQ29uZmlnIiwiSFRNTEVsZW1lbnQiLCJpbnN0YW5jZUNvbmZpZyIsImFjY2VwdGVkQ29uZmlncyIsInJlZnJlc2giLCJnZXQiLCJjb25maWciLCJzZXQiLCJwZXJzaXN0IiwiZ2V0QWNjZXB0ZWRDb25maWdzIiwicHJvY2Vzc0NvbmZpZyIsImFjY2VwdEFsbERhdGFDb25maWdzIiwiZGVmYXVsdHMiLCJnZXREZWZhdWx0cyIsImluY2x1ZGVzIiwiY29lcmNlVmFsdWUiLCJzdHJpbmdWYWx1ZSIsInN0YXJ0c1dpdGgiLCJiYXNlNjRzdHIiLCJyZXBsYWNlIiwiZGVjb2RlZCIsImF0b2IiLCJ0b0xvd2VyQ2FzZSIsImpzb25QYXJzZXIiLCJwYXJzZSIsIkZsYXNoIiwibWVzc2FnZSIsImR1cmF0aW9uIiwiY2xlYXIiLCJ0aW1lciIsImZsYXNoVGltZXIiLCJ3aW5kb3ciLCJjbGVhclRpbWVvdXQiLCJmbGFzaCIsIl9nZXQiLCJpbm5lckhUTUwiLCJyZW1vdmVBdHRyaWJ1dGUiLCJzdG9wVGltZXIiLCJzdGFydFRpbWVyIiwiYXBwZW5kQ2hpbGQiLCJ0cmFuc2l0aW9uIiwidGltZXJUcmFucyIsInNldFRpbWVvdXQiLCJjYW5jZWwiLCJGbGFzaExpc3RlbmVyIiwicmVhZHkiLCJhamF4RXJyb3JNZXNzYWdlIiwiYWpheEZsYXNoTWVzc2FnZXMiLCJmbGFzaFR5cGUiLCJmbGFzaER1cmF0aW9uIiwibWVzc2FnZXMiLCJlbnRyaWVzIiwiZW50cnkiLCJfZW50cnkiLCJfc2xpY2VkVG9BcnJheSIsImNzc0NsYXNzIiwiRm9ybVZhbGlkYXRpb24iLCJlcnJvckJhZ3MiLCJhamF4VmFsaWRhdGlvbkVycm9ycyIsImNvbGxlY3RFcnJvckJhZ3MiLCJkb1ZhbGlkYXRpb24iLCJmb3JtIiwiaW52YWxpZEZpZWxkcyIsInJlcXVlc3RWYWxpZGF0ZSIsImZpbHRlciIsImVycm9yQmFnIiwic2hvd0Vycm9yQmFnIiwiY2xlYXJWYWxpZGF0aW9uIiwiaGlkZUVycm9yQmFnIiwicm9vdE5vZGUiLCJjbG9zZXN0IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwibWVzc2FnZUxpc3RFbGVtZW50IiwibWF0Y2hlcyIsInBsYWNlaG9sZGVyIiwiY3JlYXRlQ29tbWVudCIsImVycm9yQmFnRGF0YSIsInZhbGlkYXRlRm9yIiwic3BsaXQiLCJjbG9uZU5vZGUiLCJtZXNzYWdlTGlzdEFuY2hvciIsImN1c3RvbU1lc3NhZ2UiLCJ0ZXh0Q29udGVudCIsImNoaWxkTm9kZXMiLCJyZXBsYWNlQ2hpbGQiLCJpc0Nvbm5lY3RlZCIsImVycm9yQmFnVmFsaWRhdGVzRmllbGQiLCJmaXJzdEZpZWxkIiwiZmllbGQiLCJzaGlmdCIsIl9pbnZhbGlkRmllbGRzJGZpcnN0RiIsImVycm9ycyIsImVycm9yIiwibWVzc2FnZUVsZW1lbnQiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsImFmdGVyIiwiX2ludmFsaWRGaWVsZHMkT2JqZWN0IiwiU3RyaXBlTG9hZGVyIiwiY291bnRlciIsImNyZWF0ZVN0cmlwZSIsIm9wdGlvbnMiLCJzdHJpcGUiLCJzaG93IiwiaGlkZSIsImluZGljYXRvciIsInN0cmlwZUxvYWRlZCIsIm5ld1N0cmlwZSIsImZvcmNlIiwiU3R5bGVzaGVldExvYWRlciIsInN0eWxlc0xvYWRlZCIsImhyZWYiLCJlbmRzV2l0aCIsInN0eWxlc2hlZXQiLCJUcmFuc2l0aW9uIiwiY2FsbGJhY2siLCJ0cmFpbFRvIiwicGFyc2VEdXJhdGlvbiIsImRvVHJhbnNpdGlvbiIsImV2ZW50Q2xhc3NlcyIsIl9sZW4iLCJhcmdzIiwiX2tleSIsImFjdGl2ZSIsIm91dCIsInJldHVybkNsYXNzZXMiLCJpbmRleE9mIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwicmVzZXRDbGFzc2VzIiwiZXZlbnRDbGFzcyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImdldENvbXB1dGVkU3R5bGUiLCJvblRyYW5zaXRpb25FbmQiLCJvbmNlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl90aGlzNCIsInBhcnNlZCIsImV4ZWMiLCJhbW91bnQiLCJ1bml0IiwiTWF0aCIsImZsb29yIiwiU25vd2JvYXJkIiwiYWRkUGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==