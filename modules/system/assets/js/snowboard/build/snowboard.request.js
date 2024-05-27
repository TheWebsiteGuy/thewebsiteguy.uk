"use strict";
(self["webpackChunk_wintercms_wn_system_module"] = self["webpackChunk_wintercms_wn_system_module"] || []).push([["/assets/js/snowboard/build/snowboard.request"],{

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./assets/js/snowboard/snowboard.request.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2Fzc2V0cy9qcy9zbm93Ym9hcmQvYnVpbGQvc25vd2JvYXJkLnJlcXVlc3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQSxJQVFxQkEsVUFBVTtFQUMzQjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0ksU0FBQUEsV0FBWUMsU0FBUyxFQUFFO0lBQUFDLGVBQUEsT0FBQUYsVUFBQTtJQUNuQixJQUFJLENBQUNDLFNBQVMsR0FBR0EsU0FBUztFQUM5Qjs7RUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFMSSxPQUFBRSxZQUFBLENBQUFILFVBQUE7SUFBQUksR0FBQTtJQUFBQyxLQUFBLEVBTUEsU0FBQUMsVUFBQSxFQUFZLENBQ1o7O0lBRUE7QUFDSjtBQUNBO0FBQ0E7QUFDQTtFQUpJO0lBQUFGLEdBQUE7SUFBQUMsS0FBQSxFQUtBLFNBQUFFLGFBQUEsRUFBZTtNQUNYLE9BQU8sRUFBRTtJQUNiOztJQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFKSTtJQUFBSCxHQUFBO0lBQUFDLEtBQUEsRUFLQSxTQUFBRyxRQUFBLEVBQVU7TUFDTixPQUFPLENBQUMsQ0FBQztJQUNiOztJQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUxJO0lBQUFKLEdBQUE7SUFBQUMsS0FBQSxFQU1BLFNBQUFJLFNBQUEsRUFBVztNQUNQLElBQUksQ0FBQ0MsTUFBTSxDQUFDLENBQUM7TUFDYixPQUFPLElBQUksQ0FBQ1QsU0FBUztJQUN6Qjs7SUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBSkk7SUFBQUcsR0FBQTtJQUFBQyxLQUFBLEVBS0EsU0FBQU0sV0FBQSxFQUFhO01BQ1QsSUFBSSxDQUFDRixRQUFRLENBQUMsQ0FBQztJQUNuQjtFQUFDO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7K0NDakVMLHFKQUFBSSxtQkFBQSxZQUFBQSxvQkFBQSxXQUFB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Q0FBQ0MsU0FBUyxDQUFDLFNBQVMsRUFBRS9JLHFEQUFPLENBQUM7QUFDM0MsQ0FBQyxFQUFFa0YsTUFBTSxDQUFDNEQsU0FBUyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1zeXN0ZW0tbW9kdWxlLy4vYXNzZXRzL2pzL3Nub3dib2FyZC9hYnN0cmFjdHMvUGx1Z2luQmFzZS5qcyIsIndlYnBhY2s6Ly9Ad2ludGVyY21zL3duLXN5c3RlbS1tb2R1bGUvLi9hc3NldHMvanMvc25vd2JvYXJkL2FqYXgvUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly9Ad2ludGVyY21zL3duLXN5c3RlbS1tb2R1bGUvLi9hc3NldHMvanMvc25vd2JvYXJkL3Nub3dib2FyZC5yZXF1ZXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUGx1Z2luIGJhc2UgYWJzdHJhY3QuXG4gKlxuICogVGhpcyBjbGFzcyBwcm92aWRlcyB0aGUgYmFzZSBmdW5jdGlvbmFsaXR5IGZvciBhbGwgcGx1Z2lucy5cbiAqXG4gKiBAY29weXJpZ2h0IDIwMjEgV2ludGVyLlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGx1Z2luQmFzZSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IuXG4gICAgICpcbiAgICAgKiBUaGUgY29uc3RydWN0b3IgaXMgcHJvdmlkZWQgdGhlIFNub3dib2FyZCBmcmFtZXdvcmsgaW5zdGFuY2UsIGFuZCBzaG91bGQgbm90IGJlIG92ZXJ3cml0dGVuXG4gICAgICogdW5sZXNzIHlvdSBhYnNvbHV0ZWx5IGtub3cgd2hhdCB5b3UncmUgZG9pbmcuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1Nub3dib2FyZH0gc25vd2JvYXJkXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc25vd2JvYXJkKSB7XG4gICAgICAgIHRoaXMuc25vd2JvYXJkID0gc25vd2JvYXJkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBsdWdpbiBjb25zdHJ1Y3Rvci5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIHNob3VsZCBiZSB0cmVhdGVkIGFzIHRoZSB0cnVlIGNvbnN0cnVjdG9yIG9mIGEgcGx1Z2luLCBhbmQgY2FuIGJlIG92ZXJ3cml0dGVuLlxuICAgICAqIEl0IHdpbGwgYmUgY2FsbGVkIHN0cmFpZ2h0IGFmdGVyIGNvbnN0cnVjdGlvbi5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3QoKSB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVmaW5lcyB0aGUgcmVxdWlyZWQgcGx1Z2lucyBmb3IgdGhpcyBzcGVjaWZpYyBtb2R1bGUgdG8gd29yay5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmdbXX0gQW4gYXJyYXkgb2YgcGx1Z2lucyByZXF1aXJlZCBmb3IgdGhpcyBtb2R1bGUgdG8gd29yaywgYXMgc3RyaW5ncy5cbiAgICAgKi9cbiAgICBkZXBlbmRlbmNpZXMoKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIHRoZSBsaXN0ZW5lciBtZXRob2RzIGZvciBnbG9iYWwgZXZlbnRzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBsaXN0ZW5zKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGx1Z2luIGRlc3RydWN0b3IuXG4gICAgICpcbiAgICAgKiBGaXJlZCB3aGVuIHRoaXMgcGx1Z2luIGlzIHJlbW92ZWQuIENhbiBiZSBtYW51YWxseSBjYWxsZWQgaWYgeW91IGhhdmUgYW5vdGhlciBzY2VuYXJpbyBmb3JcbiAgICAgKiBkZXN0cnVjdGlvbiwgaWUuIHRoZSBlbGVtZW50IGF0dGFjaGVkIHRvIHRoZSBwbHVnaW4gaXMgcmVtb3ZlZCBvciBjaGFuZ2VkLlxuICAgICAqL1xuICAgIGRlc3RydWN0KCkge1xuICAgICAgICB0aGlzLmRldGFjaCgpO1xuICAgICAgICBkZWxldGUgdGhpcy5zbm93Ym9hcmQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGx1Z2luIGRlc3RydWN0b3IgKG9sZCBtZXRob2QgbmFtZSkuXG4gICAgICpcbiAgICAgKiBBbGxvd3MgcHJldmlvdXMgdXNhZ2Ugb2YgdGhlIFwiZGVzdHJ1Y3RvclwiIG1ldGhvZCB0byBzdGlsbCB3b3JrLlxuICAgICAqL1xuICAgIGRlc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZGVzdHJ1Y3QoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUGx1Z2luQmFzZSBmcm9tICcuLi9hYnN0cmFjdHMvUGx1Z2luQmFzZSc7XG5cbi8qKlxuICogUmVxdWVzdCBwbHVnaW4uXG4gKlxuICogVGhpcyBpcyB0aGUgZGVmYXVsdCBBSkFYIGhhbmRsZXIgd2hpY2ggd2lsbCBydW4gdXNpbmcgdGhlIGBmZXRjaCgpYCBtZXRob2QgdGhhdCBpcyBkZWZhdWx0IGluIG1vZGVybiBicm93c2Vycy5cbiAqXG4gKiBAY29weXJpZ2h0IDIwMjEgV2ludGVyLlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVxdWVzdCBleHRlbmRzIFBsdWdpbkJhc2Uge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yLlxuICAgICAqXG4gICAgICogVGhlIGNvbnN0cnVjdG9yIGFjY2VwdHMgMiBvciAzIHBhcmFtZXRlcnMuXG4gICAgICpcbiAgICAgKiBJZiAyIHBhcmFtZXRlcnMgYXJlIHByb3ZpZGVkLCB0aGUgZmlyc3QgcGFyYW1ldGVyIGlzIHRoZSBoYW5kbGVyIG5hbWUgYW5kIHRoZSBzZWNvbmRcbiAgICAgKiBwYXJhbWV0ZXIgaXMgdGhlIG9wdGlvbnMuIFRoaXMgYXNzdW1lcyB0aGF0IHRoaXMgaXMgYSBkZXRhY2hlZCBBSkFYIHJlcXVlc3Qgbm90IGNvbm5lY3RlZCB0b1xuICAgICAqIGFuIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBJZiAzIHBhcmFtZXRlcnMgYXJlIHByb3ZpZGVkLCB0aGUgZmlyc3QgcGFyYW1ldGVyIGlzIGFuIGVsZW1lbnQgb3IgYSBzZWxlY3RvciwgYW5kIHRoZSBzZWNvbmRcbiAgICAgKiBhbmQgdGhpcmQgcGFyYW1ldGVycyBhcmUgdGhlIGhhbmRsZXIgYW5kIG9wdGlvbnMsIHJlc3BlY3RpdmVseS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8c3RyaW5nfSBlbGVtZW50XG4gICAgICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBoYW5kbGVyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3QoZWxlbWVudCwgaGFuZGxlciwgb3B0aW9ucykge1xuICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAvLyBBbGxvdyB0aGUgZWxlbWVudCB0byBiZSBhIGhhbmRsZXIgbmFtZS5cbiAgICAgICAgICAgIC8vIFRoaXMgYXNzdW1lcyB0aGUgcmVxdWVzdCBpcyBiZWluZyBtYWRlIGFnYWluc3Qgbm8gZWxlbWVudCwgYW5kIHRoZSBoYW5kbGVyIHBhcmFtZXRlclxuICAgICAgICAgICAgLy8gd2lsbCBjb250YWluIG9wdGlvbnMuXG4gICAgICAgICAgICBpZiAodGhpcy5pc0hhbmRsZXJOYW1lKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZXIgPSBlbGVtZW50O1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IGhhbmRsZXIgfHwge307XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoZWRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KTtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hlZEVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBlbGVtZW50IHdhcyBmb3VuZCB3aXRoIHRoZSBnaXZlbiBzZWxlY3RvcjogJHtlbGVtZW50fWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSBtYXRjaGVkRWxlbWVudDtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZldGNoT3B0aW9ucyA9IHt9O1xuICAgICAgICB0aGlzLnJlc3BvbnNlRGF0YSA9IG51bGw7XG4gICAgICAgIHRoaXMucmVzcG9uc2VFcnJvciA9IG51bGw7XG4gICAgICAgIHRoaXMuY2FuY2VsbGVkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5jaGVja1JlcXVlc3QoKTtcbiAgICAgICAgaWYgKCF0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYWpheFNldHVwJywgdGhpcykpIHtcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IG5ldyBFdmVudCgnYWpheFNldHVwJywgeyBjYW5jZWxhYmxlOiB0cnVlIH0pO1xuICAgICAgICAgICAgZXZlbnQucmVxdWVzdCA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG5cbiAgICAgICAgICAgIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5kb0NsaWVudFZhbGlkYXRpb24oKSkge1xuICAgICAgICAgICAgdGhpcy5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlybSkge1xuICAgICAgICAgICAgdGhpcy5kb0NvbmZpcm0oKS50aGVuKChjb25maXJtZWQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY29uZmlybWVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG9BamF4KCkudGhlbihcbiAgICAgICAgICAgICAgICAgICAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zZURhdGEgPSByZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NVcGRhdGUocmVzcG9uc2UpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5YX1dJTlRFUl9TVUNDRVNTID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc0Vycm9yKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zZUVycm9yID0gZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZG9BamF4KCkudGhlbihcbiAgICAgICAgICAgICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzcG9uc2VEYXRhID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc1VwZGF0ZShyZXNwb25zZSkudGhlbihcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuWF9XSU5URVJfU1VDQ0VTUyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzRXJyb3IocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc1Jlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzcG9uc2VFcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NFcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXBlbmRlbmNpZXMgZm9yIHRoaXMgcGx1Z2luLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgICAqL1xuICAgIGRlcGVuZGVuY2llcygpIHtcbiAgICAgICAgcmV0dXJuIFsnY29va2llJywgJ2pzb25QYXJzZXInXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZXMgdGhlIGVsZW1lbnQgYW5kIGhhbmRsZXIgZ2l2ZW4gaW4gdGhlIHJlcXVlc3QuXG4gICAgICovXG4gICAgY2hlY2tSZXF1ZXN0KCkge1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50ICYmIHRoaXMuZWxlbWVudCBpbnN0YW5jZW9mIEVsZW1lbnQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBlbGVtZW50IHByb3ZpZGVkIG11c3QgYmUgYW4gRWxlbWVudCBpbnN0YW5jZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaGFuZGxlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBBSkFYIGhhbmRsZXIgbmFtZSBpcyBub3Qgc3BlY2lmaWVkLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzSGFuZGxlck5hbWUodGhpcy5oYW5kbGVyKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIEFKQVggaGFuZGxlciBuYW1lLiBUaGUgY29ycmVjdCBoYW5kbGVyIG5hbWUgZm9ybWF0IGlzOiBcIm9uRXZlbnRcIi4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBGZXRjaCByZXF1ZXN0LlxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2QgaXMgbWFkZSBhdmFpbGFibGUgZm9yIHBsdWdpbnMgdG8gZXh0ZW5kIG9yIG92ZXJyaWRlIHRoZSBkZWZhdWx0IGZldGNoKCkgc2V0dGluZ3Mgd2l0aCB0aGVpciBvd24uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICBnZXRGZXRjaCgpIHtcbiAgICAgICAgdGhpcy5mZXRjaE9wdGlvbnMgPSAodGhpcy5vcHRpb25zLmZldGNoT3B0aW9ucyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB0aGlzLm9wdGlvbnMuZmV0Y2hPcHRpb25zID09PSAnb2JqZWN0JylcbiAgICAgICAgICAgID8gdGhpcy5vcHRpb25zLmZldGNoT3B0aW9uc1xuICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgICAgICAgICAgICAgIGJvZHk6IHRoaXMuZGF0YSxcbiAgICAgICAgICAgICAgICByZWRpcmVjdDogJ2ZvbGxvdycsXG4gICAgICAgICAgICAgICAgbW9kZTogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2FqYXhGZXRjaE9wdGlvbnMnLCB0aGlzLmZldGNoT3B0aW9ucywgdGhpcyk7XG5cbiAgICAgICAgcmV0dXJuIGZldGNoKHRoaXMudXJsLCB0aGlzLmZldGNoT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUnVuIGNsaWVudC1zaWRlIHZhbGlkYXRpb24gb24gdGhlIGZvcm0sIGlmIGF2YWlsYWJsZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGRvQ2xpZW50VmFsaWRhdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5icm93c2VyVmFsaWRhdGUgPT09IHRydWUgJiYgdGhpcy5mb3JtKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtLmNoZWNrVmFsaWRpdHkoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0ucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeGVjdXRlcyB0aGUgQUpBWCBxdWVyeS5cbiAgICAgKlxuICAgICAqIFJldHVybnMgYSBQcm9taXNlIG9iamVjdCBmb3Igd2hlbiB0aGUgQUpBWCByZXF1ZXN0IGlzIGNvbXBsZXRlZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIGRvQWpheCgpIHtcbiAgICAgICAgLy8gQWxsb3cgcGx1Z2lucyB0byBjYW5jZWwgdGhlIEFKQVggcmVxdWVzdCBiZWZvcmUgc2VuZGluZ1xuICAgICAgICBpZiAodGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2FqYXhCZWZvcmVTZW5kJywgdGhpcykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgICAgICAgICAgICBjYW5jZWxsZWQ6IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFqYXhQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5nZXRGZXRjaCgpLnRoZW4oXG4gICAgICAgICAgICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2sgJiYgcmVzcG9uc2Uuc3RhdHVzICE9PSA0MDYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5oZWFkZXJzLmhhcygnQ29udGVudC1UeXBlJykgJiYgcmVzcG9uc2UuaGVhZGVycy5nZXQoJ0NvbnRlbnQtVHlwZScpLmluY2x1ZGVzKCcvanNvbicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZXNwb25zZURhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZURhdGEubWVzc2FnZSAmJiByZXNwb25zZURhdGEuZXhjZXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHRoaXMucmVuZGVyRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlRGF0YS5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZURhdGEuZXhjZXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZURhdGEuZmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VEYXRhLmxpbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlRGF0YS50cmFjZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlc3BvbnNlRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHRoaXMucmVuZGVyRXJyb3IoYFVuYWJsZSB0byBwYXJzZSBKU09OIHJlc3BvbnNlOiAke2Vycm9yfWApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS50ZXh0KCkudGhlbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlVGV4dCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHRoaXMucmVuZGVyRXJyb3IocmVzcG9uc2VUZXh0KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHRoaXMucmVuZGVyRXJyb3IoYFVuYWJsZSB0byBwcm9jZXNzIHJlc3BvbnNlOiAke2Vycm9yfWApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmhlYWRlcnMuaGFzKCdDb250ZW50LVR5cGUnKSAmJiByZXNwb25zZS5oZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJykuaW5jbHVkZXMoJy9qc29uJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZXNwb25zZURhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5yZXNwb25zZURhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBYX1dJTlRFUl9TVUNDRVNTOiByZXNwb25zZS5zdGF0dXMgIT09IDQwNixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFhfV0lOVEVSX1JFU1BPTlNFX0NPREU6IHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHRoaXMucmVuZGVyRXJyb3IoYFVuYWJsZSB0byBwYXJzZSBKU09OIHJlc3BvbnNlOiAke2Vycm9yfWApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLnRleHQoKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZXNwb25zZURhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZURhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh0aGlzLnJlbmRlckVycm9yKGBVbmFibGUgdG8gcHJvY2VzcyByZXNwb25zZTogJHtlcnJvcn1gKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIChyZXNwb25zZUVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCh0aGlzLnJlbmRlckVycm9yKGBVbmFibGUgdG8gcmV0cmlldmUgYSByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXI6ICR7cmVzcG9uc2VFcnJvcn1gKSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdhamF4U3RhcnQnLCBhamF4UHJvbWlzZSwgdGhpcyk7XG5cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQoJ2FqYXhQcm9taXNlJyk7XG4gICAgICAgICAgICBldmVudC5wcm9taXNlID0gYWpheFByb21pc2U7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWpheFByb21pc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJlcGFyZXMgZm9yIHVwZGF0aW5nIHRoZSBwYXJ0aWFscyBmcm9tIHRoZSBBSkFYIHJlc3BvbnNlLlxuICAgICAqXG4gICAgICogSWYgYW55IHBhcnRpYWxzIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBBSkFYIHJlc3BvbnNlLCB0aGlzIG1ldGhvZCB3aWxsIGFsc28gYWN0aW9uIHRoZSBwYXJ0aWFsIHVwZGF0ZXMuXG4gICAgICpcbiAgICAgKiBSZXR1cm5zIGEgUHJvbWlzZSBvYmplY3Qgd2hpY2ggdHJhY2tzIHdoZW4gdGhlIHBhcnRpYWwgdXBkYXRlIGlzIGNvbXBsZXRlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlc3BvbnNlXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAgICovXG4gICAgcHJvY2Vzc1VwZGF0ZShyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuYmVmb3JlVXBkYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5iZWZvcmVVcGRhdGUuYXBwbHkodGhpcywgW3Jlc3BvbnNlXSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRXh0cmFjdCBwYXJ0aWFsIGluZm9ybWF0aW9uXG4gICAgICAgICAgICBjb25zdCBwYXJ0aWFscyA9IHt9O1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMocmVzcG9uc2UpLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgW2tleSwgdmFsdWVdID0gZW50cnk7XG5cbiAgICAgICAgICAgICAgICBpZiAoa2V5LnN1YnN0cigwLCA4KSAhPT0gJ1hfV0lOVEVSJykge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0aWFsc1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhwYXJ0aWFscykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLlhfV0lOVEVSX0FTU0VUUykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NBc3NldHMocmVzcG9uc2UuWF9XSU5URVJfQVNTRVRTKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlcyA9IHRoaXMuc25vd2JvYXJkLmdsb2JhbFByb21pc2VFdmVudCgnYWpheEJlZm9yZVVwZGF0ZScsIHJlc3BvbnNlLCB0aGlzKTtcbiAgICAgICAgICAgIHByb21pc2VzLnRoZW4oXG4gICAgICAgICAgICAgICAgYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuWF9XSU5URVJfQVNTRVRTKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnByb2Nlc3NBc3NldHMocmVzcG9uc2UuWF9XSU5URVJfQVNTRVRTKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG9VcGRhdGUocGFydGlhbHMpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWxsb3cgZm9yIEhUTUwgcmVkcmF3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiByZXNvbHZlKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgcGFydGlhbHMgd2l0aCB0aGUgZ2l2ZW4gY29udGVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJ0aWFsc1xuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIGRvVXBkYXRlKHBhcnRpYWxzKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWZmZWN0ZWQgPSBbXTtcblxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMocGFydGlhbHMpLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgW3BhcnRpYWwsIGNvbnRlbnRdID0gZW50cnk7XG5cbiAgICAgICAgICAgICAgICBsZXQgc2VsZWN0b3IgPSAodGhpcy5vcHRpb25zLnVwZGF0ZSAmJiB0aGlzLm9wdGlvbnMudXBkYXRlW3BhcnRpYWxdKVxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMub3B0aW9ucy51cGRhdGVbcGFydGlhbF1cbiAgICAgICAgICAgICAgICAgICAgOiBwYXJ0aWFsO1xuXG4gICAgICAgICAgICAgICAgbGV0IG1vZGUgPSAncmVwbGFjZSc7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0b3Iuc3Vic3RyKDAsIDEpID09PSAnQCcpIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kZSA9ICdhcHBlbmQnO1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvciA9IHNlbGVjdG9yLnN1YnN0cigxKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdG9yLnN1YnN0cigwLCAxKSA9PT0gJ14nKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vZGUgPSAncHJlcGVuZCc7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yID0gc2VsZWN0b3Iuc3Vic3RyKDEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0b3Iuc3Vic3RyKDAsIDEpICE9PSAnIycgJiYgc2VsZWN0b3Iuc3Vic3RyKDAsIDEpICE9PSAnLicpIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kZSA9ICdub29wJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAobW9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2FwcGVuZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MICs9IGNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3ByZXBlbmQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGNvbnRlbnQgKyBlbGVtZW50LmlubmVySFRNTDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnbm9vcCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JlcGxhY2UnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gY29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGFmZmVjdGVkLnB1c2goZWxlbWVudCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZpcmUgdXBkYXRlIGV2ZW50IGZvciBlYWNoIGVsZW1lbnQgdGhhdCBpcyB1cGRhdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYWpheFVwZGF0ZScsIGVsZW1lbnQsIGNvbnRlbnQsIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQoJ2FqYXhVcGRhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LmNvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdhamF4VXBkYXRlQ29tcGxldGUnLCBhZmZlY3RlZCwgdGhpcyk7XG5cbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvY2Vzc2VzIHRoZSByZXNwb25zZSBkYXRhLlxuICAgICAqXG4gICAgICogVGhpcyBmaXJlcyBvZmYgYWxsIG5lY2Vzc2FyeSBwcm9jZXNzaW5nIGZ1bmN0aW9ucyBkZXBlbmRpbmcgb24gdGhlIHJlc3BvbnNlLCBpZS4gaWYgdGhlcmUncyBhbnkgZmxhc2hcbiAgICAgKiBtZXNzYWdlcyB0byBoYW5kbGUsIG9yIGFueSByZWRpcmVjdHMgdG8gYmUgdW5kZXJ0YWtlbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZXNwb25zZVxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIHByb2Nlc3NSZXNwb25zZShyZXNwb25zZSkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnN1Y2Nlc3MgJiYgdHlwZW9mIHRoaXMub3B0aW9ucy5zdWNjZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnN1Y2Nlc3ModGhpcy5yZXNwb25zZURhdGEsIHRoaXMpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFsbG93IHBsdWdpbnMgdG8gY2FuY2VsIGFueSBmdXJ0aGVyIHJlc3BvbnNlIGhhbmRsaW5nXG4gICAgICAgIGlmICh0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYWpheFN1Y2Nlc3MnLCB0aGlzLnJlc3BvbnNlRGF0YSwgdGhpcykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBbGxvdyB0aGUgZWxlbWVudCB0byBjYW5jZWwgYW55IGZ1cnRoZXIgcmVzcG9uc2UgaGFuZGxpbmdcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQoJ2FqYXhEb25lJywgeyBjYW5jZWxhYmxlOiB0cnVlIH0pO1xuICAgICAgICAgICAgZXZlbnQucmVzcG9uc2VEYXRhID0gdGhpcy5yZXNwb25zZURhdGE7XG4gICAgICAgICAgICBldmVudC5yZXF1ZXN0ID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcblxuICAgICAgICAgICAgaWYgKGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5mbGFzaCAmJiByZXNwb25zZS5YX1dJTlRFUl9GTEFTSF9NRVNTQUdFUykge1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzRmxhc2hNZXNzYWdlcyhyZXNwb25zZS5YX1dJTlRFUl9GTEFTSF9NRVNTQUdFUyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBmb3IgYSByZWRpcmVjdCBmcm9tIHRoZSByZXNwb25zZSwgb3IgdXNlIHRoZSByZWRpcmVjdCBhcyBzcGVjaWZpZWQgaW4gdGhlIG9wdGlvbnMuXG4gICAgICAgIGlmICh0aGlzLnJlZGlyZWN0IHx8IHJlc3BvbnNlLlhfV0lOVEVSX1JFRElSRUNUKSB7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NSZWRpcmVjdCh0aGlzLnJlZGlyZWN0IHx8IHJlc3BvbnNlLlhfV0lOVEVSX1JFRElSRUNUKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzZXMgYW4gZXJyb3IgcmVzcG9uc2UgZnJvbSB0aGUgQUpBWCByZXF1ZXN0LlxuICAgICAqXG4gICAgICogVGhpcyBmaXJlcyBvZmYgYWxsIG5lY2Vzc2FyeSBwcm9jZXNzaW5nIGZ1bmN0aW9ucyBkZXBlbmRpbmcgb24gdGhlIGVycm9yIHJlc3BvbnNlLCBpZS4gaWYgdGhlcmUncyBhbnkgZXJyb3Igb3JcbiAgICAgKiB2YWxpZGF0aW9uIG1lc3NhZ2VzIHRvIGhhbmRsZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fEVycm9yfSBlcnJvclxuICAgICAqL1xuICAgIHByb2Nlc3NFcnJvcihlcnJvcikge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmVycm9yICYmIHR5cGVvZiB0aGlzLm9wdGlvbnMuZXJyb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZXJyb3IodGhpcy5yZXNwb25zZUVycm9yLCB0aGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBbGxvdyBwbHVnaW5zIHRvIGNhbmNlbCBhbnkgZnVydGhlciBlcnJvciBoYW5kbGluZ1xuICAgICAgICBpZiAodGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2FqYXhFcnJvcicsIHRoaXMucmVzcG9uc2VFcnJvciwgdGhpcykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBbGxvdyB0aGUgZWxlbWVudCB0byBjYW5jZWwgYW55IGZ1cnRoZXIgZXJyb3IgaGFuZGxpbmdcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQoJ2FqYXhGYWlsJywgeyBjYW5jZWxhYmxlOiB0cnVlIH0pO1xuICAgICAgICAgICAgZXZlbnQucmVzcG9uc2VFcnJvciA9IHRoaXMucmVzcG9uc2VFcnJvcjtcbiAgICAgICAgICAgIGV2ZW50LnJlcXVlc3QgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuXG4gICAgICAgICAgICBpZiAoZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NFcnJvck1lc3NhZ2UoZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgc2tpcEVycm9yID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vIFByb2Nlc3MgdmFsaWRhdGlvbiBlcnJvcnNcbiAgICAgICAgICAgIGlmIChlcnJvci5YX1dJTlRFUl9FUlJPUl9GSUVMRFMpIHtcbiAgICAgICAgICAgICAgICBza2lwRXJyb3IgPSB0aGlzLnByb2Nlc3NWYWxpZGF0aW9uRXJyb3JzKGVycm9yLlhfV0lOVEVSX0VSUk9SX0ZJRUxEUyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlcnJvci5YX1dJTlRFUl9FUlJPUl9NRVNTQUdFICYmICFza2lwRXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NFcnJvck1lc3NhZ2UoZXJyb3IuWF9XSU5URVJfRVJST1JfTUVTU0FHRSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvY2Vzc2VzIGEgcmVkaXJlY3QgcmVzcG9uc2UuXG4gICAgICpcbiAgICAgKiBCeSBkZWZhdWx0LCB0aGlzIHByb2Nlc3NvciB3aWxsIHNpbXBseSByZWRpcmVjdCB0aGUgdXNlciBpbiB0aGVpciBicm93c2VyLlxuICAgICAqXG4gICAgICogUGx1Z2lucyBjYW4gYXVnbWVudCB0aGlzIGZ1bmN0aW9uYWxpdHkgZnJvbSB0aGUgYGFqYXhSZWRpcmVjdGAgZXZlbnQuIFlvdSBtYXkgYWxzbyBvdmVycmlkZSB0aGlzIGZ1bmN0aW9uYWxpdHkgb25cbiAgICAgKiBhIHBlci1yZXF1ZXN0IGJhc2lzIHRocm91Z2ggdGhlIGBoYW5kbGVSZWRpcmVjdFJlc3BvbnNlYCBjYWxsYmFjayBvcHRpb24uIElmIGEgYGZhbHNlYCBpcyByZXR1cm5lZCBmcm9tIGVpdGhlciwgdGhlXG4gICAgICogcmVkaXJlY3Qgd2lsbCBiZSBjYW5jZWxsZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgcHJvY2Vzc1JlZGlyZWN0KHVybCkge1xuICAgICAgICAvLyBSdW4gYSBjdXN0b20gcGVyLXJlcXVlc3QgcmVkaXJlY3QgaGFuZGxlci4gSWYgZmFsc2UgaXMgcmV0dXJuZWQsIGRvbid0IHJ1biB0aGUgcmVkaXJlY3QuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmhhbmRsZVJlZGlyZWN0UmVzcG9uc2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaGFuZGxlUmVkaXJlY3RSZXNwb25zZS5hcHBseSh0aGlzLCBbdXJsXSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWxsb3cgcGx1Z2lucyB0byBjYW5jZWwgdGhlIHJlZGlyZWN0XG4gICAgICAgIGlmICh0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYWpheFJlZGlyZWN0JywgdXJsLCB0aGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluZGljYXRlIHRoYXQgdGhlIEFKQVggcmVxdWVzdCBpcyBmaW5pc2hlZCBpZiB3ZSdyZSBzdGlsbCBvbiB0aGUgY3VycmVudCBwYWdlXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGxvYWRpbmcgaW5kaWNhdG9yIGZvciByZWRpcmVjdHMgdGhhdCBqdXN0IGNoYW5nZSB0aGUgaGFzaCB2YWx1ZSBvZlxuICAgICAgICAvLyB0aGUgVVJMIGluc3RlYWQgb2YgbGVhdmluZyB0aGUgcGFnZSB3aWxsIHByb3Blcmx5IHN0b3AuXG4gICAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL29jdG9iZXJjbXMvb2N0b2Jlci9pc3N1ZXMvMjc4MFxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICAgICAgICAgICAgICBldmVudC5ldmVudE5hbWUgPSAnYWpheFJlZGlyZWN0ZWQnO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgb25jZTogdHJ1ZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbih1cmwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb2Nlc3NlcyBhbiBlcnJvciBtZXNzYWdlLlxuICAgICAqXG4gICAgICogQnkgZGVmYXVsdCwgdGhpcyBwcm9jZXNzb3Igd2lsbCBzaW1wbHkgYWxlcnQgdGhlIHVzZXIgdGhyb3VnaCBhIHNpbXBsZSBgYWxlcnQoKWAgY2FsbC5cbiAgICAgKlxuICAgICAqIFBsdWdpbnMgY2FuIGF1Z21lbnQgdGhpcyBmdW5jdGlvbmFsaXR5IGZyb20gdGhlIGBhamF4RXJyb3JNZXNzYWdlYCBldmVudC4gWW91IG1heSBhbHNvIG92ZXJyaWRlIHRoaXMgZnVuY3Rpb25hbGl0eVxuICAgICAqIG9uIGEgcGVyLXJlcXVlc3QgYmFzaXMgdGhyb3VnaCB0aGUgYGhhbmRsZUVycm9yTWVzc2FnZWAgY2FsbGJhY2sgb3B0aW9uLiBJZiBhIGBmYWxzZWAgaXMgcmV0dXJuZWQgZnJvbSBlaXRoZXIsIHRoZVxuICAgICAqIGVycm9yIG1lc3NhZ2UgaGFuZGxpbmcgd2lsbCBiZSBjYW5jZWxsZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIHByb2Nlc3NFcnJvck1lc3NhZ2UobWVzc2FnZSkge1xuICAgICAgICAvLyBSdW4gYSBjdXN0b20gcGVyLXJlcXVlc3QgaGFuZGxlciBmb3IgZXJyb3IgbWVzc2FnZXMuIElmIGZhbHNlIGlzIHJldHVybmVkLCBkbyBub3QgcHJvY2VzcyB0aGUgZXJyb3IgbWVzc2FnZXNcbiAgICAgICAgLy8gYW55IGZ1cnRoZXIuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmhhbmRsZUVycm9yTWVzc2FnZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5oYW5kbGVFcnJvck1lc3NhZ2UuYXBwbHkodGhpcywgW21lc3NhZ2VdKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBbGxvdyBwbHVnaW5zIHRvIGNhbmNlbCB0aGUgZXJyb3IgbWVzc2FnZSBiZWluZyBzaG93blxuICAgICAgICBpZiAodGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2FqYXhFcnJvck1lc3NhZ2UnLCBtZXNzYWdlLCB0aGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJ5IGRlZmF1bHQsIHNob3cgYSBicm93c2VyIGVycm9yIG1lc3NhZ2VcbiAgICAgICAgd2luZG93LmFsZXJ0KG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb2Nlc3NlcyBmbGFzaCBtZXNzYWdlcyBmcm9tIHRoZSByZXNwb25zZS5cbiAgICAgKlxuICAgICAqIEJ5IGRlZmF1bHQsIG5vIGZsYXNoIG1lc3NhZ2UgaGFuZGxpbmcgd2lsbCBvY2N1ci5cbiAgICAgKlxuICAgICAqIFBsdWdpbnMgY2FuIGF1Z21lbnQgdGhpcyBmdW5jdGlvbmFsaXR5IGZyb20gdGhlIGBhamF4Rmxhc2hNZXNzYWdlc2AgZXZlbnQuIFlvdSBtYXkgYWxzbyBvdmVycmlkZSB0aGlzIGZ1bmN0aW9uYWxpdHlcbiAgICAgKiBvbiBhIHBlci1yZXF1ZXN0IGJhc2lzIHRocm91Z2ggdGhlIGBoYW5kbGVGbGFzaE1lc3NhZ2VzYCBjYWxsYmFjayBvcHRpb24uIElmIGEgYGZhbHNlYCBpcyByZXR1cm5lZCBmcm9tIGVpdGhlciwgdGhlXG4gICAgICogZmxhc2ggbWVzc2FnZSBoYW5kbGluZyB3aWxsIGJlIGNhbmNlbGxlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlc1xuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgcHJvY2Vzc0ZsYXNoTWVzc2FnZXMobWVzc2FnZXMpIHtcbiAgICAgICAgLy8gUnVuIGEgY3VzdG9tIHBlci1yZXF1ZXN0IGZsYXNoIGhhbmRsZXIuIElmIGZhbHNlIGlzIHJldHVybmVkLCBkb24ndCBzaG93IHRoZSBmbGFzaCBtZXNzYWdlXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmhhbmRsZUZsYXNoTWVzc2FnZXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaGFuZGxlRmxhc2hNZXNzYWdlcy5hcHBseSh0aGlzLCBbbWVzc2FnZXNdKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYWpheEZsYXNoTWVzc2FnZXMnLCBtZXNzYWdlcywgdGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvY2Vzc2VzIHZhbGlkYXRpb24gZXJyb3JzIGZvciBmaWVsZHMuXG4gICAgICpcbiAgICAgKiBCeSBkZWZhdWx0LCBubyB2YWxpZGF0aW9uIGVycm9yIGhhbmRsaW5nIHdpbGwgb2NjdXIuXG4gICAgICpcbiAgICAgKiBQbHVnaW5zIGNhbiBhdWdtZW50IHRoaXMgZnVuY3Rpb25hbGl0eSBmcm9tIHRoZSBgYWpheFZhbGlkYXRpb25FcnJvcnNgIGV2ZW50LiBZb3UgbWF5IGFsc28gb3ZlcnJpZGUgdGhpcyBmdW5jdGlvbmFsaXR5XG4gICAgICogb24gYSBwZXItcmVxdWVzdCBiYXNpcyB0aHJvdWdoIHRoZSBgaGFuZGxlVmFsaWRhdGlvbkVycm9yc2AgY2FsbGJhY2sgb3B0aW9uLiBJZiBhIGBmYWxzZWAgaXMgcmV0dXJuZWQgZnJvbSBlaXRoZXIsIHRoZVxuICAgICAqIHZhbGlkYXRpb24gZXJyb3IgaGFuZGxpbmcgd2lsbCBiZSBjYW5jZWxsZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZmllbGRzXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBwcm9jZXNzVmFsaWRhdGlvbkVycm9ycyhmaWVsZHMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuaGFuZGxlVmFsaWRhdGlvbkVycm9ycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5oYW5kbGVWYWxpZGF0aW9uRXJyb3JzLmFwcGx5KHRoaXMsIFt0aGlzLmZvcm0sIGZpZWxkc10pID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWxsb3cgcGx1Z2lucyB0byBjYW5jZWwgdGhlIHZhbGlkYXRpb24gZXJyb3JzIGJlaW5nIGhhbmRsZWRcbiAgICAgICAgaWYgKHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdhamF4VmFsaWRhdGlvbkVycm9ycycsIHRoaXMuZm9ybSwgZmllbGRzLCB0aGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb2Nlc3NlcyBhc3NldHMgcmV0dXJuZWQgYnkgYW4gQUpBWCByZXF1ZXN0LlxuICAgICAqXG4gICAgICogQnkgZGVmYXVsdCwgbm8gYXNzZXQgcHJvY2Vzc2luZyB3aWxsIG9jY3VyIGFuZCB0aGlzIHdpbGwgcmV0dXJuIGEgcmVzb2x2ZWQgUHJvbWlzZS5cbiAgICAgKlxuICAgICAqIFBsdWdpbnMgY2FuIGF1Z21lbnQgdGhpcyBmdW5jdGlvbmFsaXR5IGZyb20gdGhlIGBhamF4TG9hZEFzc2V0c2AgZXZlbnQuIFRoaXMgZXZlbnQgaXMgY29uc2lkZXJlZCBibG9ja2luZywgYW5kXG4gICAgICogYWxsb3dzIGFzc2V0cyB0byBiZSBsb2FkZWQgb3IgcHJvY2Vzc2VkIGJlZm9yZSBjb250aW51aW5nIHdpdGggYW55IGFkZGl0aW9uYWwgZnVuY3Rpb25hbGl0eS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBhc3NldHNcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICBwcm9jZXNzQXNzZXRzKGFzc2V0cykge1xuICAgICAgICByZXR1cm4gdGhpcy5zbm93Ym9hcmQuZ2xvYmFsUHJvbWlzZUV2ZW50KCdhamF4TG9hZEFzc2V0cycsIGFzc2V0cyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29uZmlybXMgdGhlIHJlcXVlc3Qgd2l0aCB0aGUgdXNlciBiZWZvcmUgcHJvY2VlZGluZy5cbiAgICAgKlxuICAgICAqIFRoaXMgaXMgYW4gYXN5bmNocm9ub3VzIG1ldGhvZC4gQnkgZGVmYXVsdCwgaXQgd2lsbCB1c2UgdGhlIGJyb3dzZXIncyBgY29uZmlybSgpYCBtZXRob2QgdG8gcXVlcnkgdGhlIHVzZXIgdG9cbiAgICAgKiBjb25maXJtIHRoZSBhY3Rpb24uIFRoaXMgbWV0aG9kIHdpbGwgcmV0dXJuIGEgUHJvbWlzZSB3aXRoIGEgYm9vbGVhbiB2YWx1ZSBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgdXNlciBjb25maXJtZWRcbiAgICAgKiBvciBub3QuXG4gICAgICpcbiAgICAgKiBQbHVnaW5zIGNhbiBhdWdtZW50IHRoaXMgZnVuY3Rpb25hbGl0eSBmcm9tIHRoZSBgYWpheENvbmZpcm1NZXNzYWdlYCBldmVudC4gWW91IG1heSBhbHNvIG92ZXJyaWRlIHRoaXMgZnVuY3Rpb25hbGl0eVxuICAgICAqIG9uIGEgcGVyLXJlcXVlc3QgYmFzaXMgdGhyb3VnaCB0aGUgYGhhbmRsZUNvbmZpcm1NZXNzYWdlYCBjYWxsYmFjayBvcHRpb24uIElmIGEgYGZhbHNlYCBpcyByZXR1cm5lZCBmcm9tIGVpdGhlcixcbiAgICAgKiB0aGUgY29uZmlybWF0aW9uIGlzIGFzc3VtZWQgdG8gaGF2ZSBiZWVuIGRlbmllZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIGFzeW5jIGRvQ29uZmlybSgpIHtcbiAgICAgICAgLy8gQWxsb3cgZm9yIGEgY3VzdG9tIGhhbmRsZXIgZm9yIHRoZSBjb25maXJtYXRpb24sIHBlciByZXF1ZXN0LlxuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5oYW5kbGVDb25maXJtTWVzc2FnZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5oYW5kbGVDb25maXJtTWVzc2FnZS5hcHBseSh0aGlzLCBbdGhpcy5jb25maXJtXSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIG5vIHBsdWdpbnMgaGF2ZSBjdXN0b21pc2VkIHRoZSBjb25maXJtYXRpb24sIHVzZSBhIHNpbXBsZSBicm93c2VyIGNvbmZpcm1hdGlvbi5cbiAgICAgICAgaWYgKHRoaXMuc25vd2JvYXJkLmxpc3RlbnNUb0V2ZW50KCdhamF4Q29uZmlybU1lc3NhZ2UnKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuY29uZmlybSh0aGlzLmNvbmZpcm0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUnVuIGN1c3RvbSBwbHVnaW4gY29uZmlybWF0aW9uc1xuICAgICAgICBjb25zdCBwcm9taXNlcyA9IHRoaXMuc25vd2JvYXJkLmdsb2JhbFByb21pc2VFdmVudCgnYWpheENvbmZpcm1NZXNzYWdlJywgdGhpcy5jb25maXJtLCB0aGlzKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZnVsZmlsbGVkID0gYXdhaXQgcHJvbWlzZXM7XG4gICAgICAgICAgICBpZiAoZnVsZmlsbGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaXJlcyBvZmYgY29tcGxldGlvbiBldmVudHMgZm9yIHRoZSBSZXF1ZXN0LlxuICAgICAqL1xuICAgIGNvbXBsZXRlKCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmNvbXBsZXRlICYmIHR5cGVvZiB0aGlzLm9wdGlvbnMuY29tcGxldGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jb21wbGV0ZSh0aGlzLnJlc3BvbnNlRGF0YSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2FqYXhEb25lJywgdGhpcy5yZXNwb25zZURhdGEsIHRoaXMpO1xuXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KCdhamF4QWx3YXlzJyk7XG4gICAgICAgICAgICBldmVudC5yZXF1ZXN0ID0gdGhpcztcbiAgICAgICAgICAgIGV2ZW50LnJlc3BvbnNlRGF0YSA9IHRoaXMucmVzcG9uc2VEYXRhO1xuICAgICAgICAgICAgZXZlbnQucmVzcG9uc2VFcnJvciA9IHRoaXMucmVzcG9uc2VFcnJvcjtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZpcmUgb2ZmIHRoZSBkZXN0cnVjdG9yXG4gICAgICAgIHRoaXMuZGVzdHJ1Y3QoKTtcbiAgICB9XG5cbiAgICBnZXQgZm9ybSgpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5mb3JtKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5mb3JtID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy5mb3JtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZm9ybTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudC50YWdOYW1lID09PSAnRk9STScpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICB9XG5cbiAgICBnZXQgY29udGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhhbmRsZXI6IHRoaXMuaGFuZGxlcixcbiAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXQgaGVhZGVycygpIHtcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IHtcbiAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0JywgLy8gS2VlcHMgY29tcGF0aWJpbGl0eSB3aXRoIGpRdWVyeSBBSkFYXG4gICAgICAgICAgICAnWC1XSU5URVItUkVRVUVTVC1IQU5ETEVSJzogdGhpcy5oYW5kbGVyLFxuICAgICAgICAgICAgJ1gtV0lOVEVSLVJFUVVFU1QtUEFSVElBTFMnOiB0aGlzLmV4dHJhY3RQYXJ0aWFscyh0aGlzLm9wdGlvbnMudXBkYXRlIHx8IFtdKSxcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy5mbGFzaCkge1xuICAgICAgICAgICAgaGVhZGVyc1snWC1XSU5URVItUkVRVUVTVC1GTEFTSCddID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnhzcmZUb2tlbikge1xuICAgICAgICAgICAgaGVhZGVyc1snWC1YU1JGLVRPS0VOJ10gPSB0aGlzLnhzcmZUb2tlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBoZWFkZXJzO1xuICAgIH1cblxuICAgIGdldCBsb2FkaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmxvYWRpbmcgfHwgZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0IHVybCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy51cmwgfHwgd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgfVxuXG4gICAgZ2V0IHJlZGlyZWN0KCkge1xuICAgICAgICByZXR1cm4gKHRoaXMub3B0aW9ucy5yZWRpcmVjdCAmJiB0aGlzLm9wdGlvbnMucmVkaXJlY3QubGVuZ3RoKSA/IHRoaXMub3B0aW9ucy5yZWRpcmVjdCA6IG51bGw7XG4gICAgfVxuXG4gICAgZ2V0IGZsYXNoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZsYXNoIHx8IGZhbHNlO1xuICAgIH1cblxuICAgIGdldCBmaWxlcygpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5maWxlcyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKEZvcm1EYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNub3dib2FyZC5kZWJ1ZygnVGhpcyBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgZmlsZSB1cGxvYWRzJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXQgeHNyZlRva2VuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zbm93Ym9hcmQuY29va2llKCkuZ2V0KCdYU1JGLVRPS0VOJyk7XG4gICAgfVxuXG4gICAgZ2V0IGRhdGEoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSAodHlwZW9mIHRoaXMub3B0aW9ucy5kYXRhID09PSAnb2JqZWN0JykgPyB0aGlzLm9wdGlvbnMuZGF0YSA6IHt9O1xuXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMuZm9ybSB8fCB1bmRlZmluZWQpO1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoZGF0YSkuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSBlbnRyeTtcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmb3JtRGF0YTtcbiAgICB9XG5cbiAgICBnZXQgY29uZmlybSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jb25maXJtIHx8IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIHBhcnRpYWxzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHVwZGF0ZVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZXh0cmFjdFBhcnRpYWxzKHVwZGF0ZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModXBkYXRlKS5qb2luKCcmJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyBhbiBlcnJvciB3aXRoIHVzZWZ1bCBkZWJ1ZyBpbmZvcm1hdGlvbi5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgaW50ZXJuYWxseSB3aGVuIHRoZSBBSkFYIHJlcXVlc3QgY291bGQgbm90IGJlIGNvbXBsZXRlZCBvciBwcm9jZXNzZWQgY29ycmVjdGx5IGR1ZSB0byBhbiBlcnJvci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV4Y2VwdGlvblxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGxpbmVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ1tdfSB0cmFjZVxuICAgICAqIEByZXR1cm5zIHtFcnJvcn1cbiAgICAgKi9cbiAgICByZW5kZXJFcnJvcihtZXNzYWdlLCBleGNlcHRpb24sIGZpbGUsIGxpbmUsIHRyYWNlKSB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgICBlcnJvci5leGNlcHRpb24gPSBleGNlcHRpb24gfHwgbnVsbDtcbiAgICAgICAgZXJyb3IuZmlsZSA9IGZpbGUgfHwgbnVsbDtcbiAgICAgICAgZXJyb3IubGluZSA9IGxpbmUgfHwgbnVsbDtcbiAgICAgICAgZXJyb3IudHJhY2UgPSB0cmFjZSB8fCBbXTtcbiAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBhIGdpdmVuIHN0cmluZyB0byBzZWUgaWYgaXQgaXMgYSB2YWxpZCBBSkFYIGhhbmRsZXIgbmFtZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgaXNIYW5kbGVyTmFtZShuYW1lKSB7XG4gICAgICAgIHJldHVybiAvXig/Olxcdys6ezJ9KT9vbltBLVowLTldLy50ZXN0KG5hbWUpO1xuICAgIH1cbn1cbiIsImltcG9ydCBSZXF1ZXN0IGZyb20gJy4vYWpheC9SZXF1ZXN0JztcblxuaWYgKHdpbmRvdy5Tbm93Ym9hcmQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignU25vd2JvYXJkIG11c3QgYmUgbG9hZGVkIGluIG9yZGVyIHRvIHVzZSB0aGUgSmF2YXNjcmlwdCBBSkFYIHJlcXVlc3QgZmVhdHVyZS4nKTtcbn1cblxuKChTbm93Ym9hcmQpID0+IHtcbiAgICBTbm93Ym9hcmQuYWRkUGx1Z2luKCdyZXF1ZXN0JywgUmVxdWVzdCk7XG59KSh3aW5kb3cuU25vd2JvYXJkKTtcbiJdLCJuYW1lcyI6WyJQbHVnaW5CYXNlIiwic25vd2JvYXJkIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJjb25zdHJ1Y3QiLCJkZXBlbmRlbmNpZXMiLCJsaXN0ZW5zIiwiZGVzdHJ1Y3QiLCJkZXRhY2giLCJkZXN0cnVjdG9yIiwiZGVmYXVsdCIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiX3NsaWNlZFRvQXJyYXkiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVSZXN0IiwiX2FycmF5TGlrZVRvQXJyYXkiLCJ0b1N0cmluZyIsIkFycmF5IiwiZnJvbSIsInRlc3QiLCJpc0FycmF5Iiwib3duS2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImZpbHRlciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIl9vYmplY3RTcHJlYWQiLCJfZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsIl90b1Byb3BlcnR5S2V5IiwiX2RlZmluZVByb3BlcnRpZXMiLCJfdG9QcmltaXRpdmUiLCJ0b1ByaW1pdGl2ZSIsIlN0cmluZyIsIk51bWJlciIsIl9jYWxsU3VwZXIiLCJfZ2V0UHJvdG90eXBlT2YiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIlJlZmVyZW5jZUVycm9yIiwiQm9vbGVhbiIsInZhbHVlT2YiLCJiaW5kIiwiX2luaGVyaXRzIiwiX3NldFByb3RvdHlwZU9mIiwiUmVxdWVzdCIsIl9QbHVnaW5CYXNlIiwiZWxlbWVudCIsImhhbmRsZXIiLCJvcHRpb25zIiwiX3RoaXMiLCJpc0hhbmRsZXJOYW1lIiwibWF0Y2hlZEVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb25jYXQiLCJmZXRjaE9wdGlvbnMiLCJyZXNwb25zZURhdGEiLCJyZXNwb25zZUVycm9yIiwiY2FuY2VsbGVkIiwiY2hlY2tSZXF1ZXN0IiwiZ2xvYmFsRXZlbnQiLCJldmVudCIsIkV2ZW50IiwiY2FuY2VsYWJsZSIsInJlcXVlc3QiLCJkaXNwYXRjaEV2ZW50IiwiZGVmYXVsdFByZXZlbnRlZCIsImRvQ2xpZW50VmFsaWRhdGlvbiIsImNvbmZpcm0iLCJkb0NvbmZpcm0iLCJjb25maXJtZWQiLCJkb0FqYXgiLCJyZXNwb25zZSIsInByb2Nlc3NVcGRhdGUiLCJYX1dJTlRFUl9TVUNDRVNTIiwicHJvY2Vzc0Vycm9yIiwicHJvY2Vzc1Jlc3BvbnNlIiwiZXJyb3IiLCJFbGVtZW50IiwidW5kZWZpbmVkIiwiZ2V0RmV0Y2giLCJoZWFkZXJzIiwiYm9keSIsImRhdGEiLCJyZWRpcmVjdCIsIm1vZGUiLCJmZXRjaCIsInVybCIsImJyb3dzZXJWYWxpZGF0ZSIsImZvcm0iLCJjaGVja1ZhbGlkaXR5IiwicmVwb3J0VmFsaWRpdHkiLCJfdGhpczIiLCJhamF4UHJvbWlzZSIsInJlamVjdCIsIm9rIiwic3RhdHVzIiwiaGFzIiwiZ2V0IiwiaW5jbHVkZXMiLCJqc29uIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsInJlbmRlckVycm9yIiwiZmlsZSIsImxpbmUiLCJ0cmFjZSIsInRleHQiLCJyZXNwb25zZVRleHQiLCJYX1dJTlRFUl9SRVNQT05TRV9DT0RFIiwicHJvbWlzZSIsIl90aGlzMyIsImJlZm9yZVVwZGF0ZSIsInBhcnRpYWxzIiwiZW50cmllcyIsImVudHJ5IiwiX2VudHJ5Iiwic3Vic3RyIiwiWF9XSU5URVJfQVNTRVRTIiwicHJvY2Vzc0Fzc2V0cyIsInByb21pc2VzIiwiZ2xvYmFsUHJvbWlzZUV2ZW50IiwiX2NhbGxlZSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJkb1VwZGF0ZSIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIl90aGlzNCIsImFmZmVjdGVkIiwiX2VudHJ5MiIsInBhcnRpYWwiLCJjb250ZW50Iiwic2VsZWN0b3IiLCJ1cGRhdGUiLCJlbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbm5lckhUTUwiLCJzdWNjZXNzIiwiZmxhc2giLCJYX1dJTlRFUl9GTEFTSF9NRVNTQUdFUyIsInByb2Nlc3NGbGFzaE1lc3NhZ2VzIiwiWF9XSU5URVJfUkVESVJFQ1QiLCJwcm9jZXNzUmVkaXJlY3QiLCJwcm9jZXNzRXJyb3JNZXNzYWdlIiwic2tpcEVycm9yIiwiWF9XSU5URVJfRVJST1JfRklFTERTIiwicHJvY2Vzc1ZhbGlkYXRpb25FcnJvcnMiLCJYX1dJTlRFUl9FUlJPUl9NRVNTQUdFIiwiX3RoaXM1IiwiaGFuZGxlUmVkaXJlY3RSZXNwb25zZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjcmVhdGVFdmVudCIsImV2ZW50TmFtZSIsIm9uY2UiLCJsb2NhdGlvbiIsImFzc2lnbiIsImhhbmRsZUVycm9yTWVzc2FnZSIsImFsZXJ0IiwibWVzc2FnZXMiLCJoYW5kbGVGbGFzaE1lc3NhZ2VzIiwiZmllbGRzIiwiaGFuZGxlVmFsaWRhdGlvbkVycm9ycyIsImFzc2V0cyIsIl9kb0NvbmZpcm0iLCJfY2FsbGVlMiIsImZ1bGZpbGxlZCIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImhhbmRsZUNvbmZpcm1NZXNzYWdlIiwibGlzdGVuc1RvRXZlbnQiLCJ0MCIsInRhZ05hbWUiLCJjbG9zZXN0IiwiZXh0cmFjdFBhcnRpYWxzIiwieHNyZlRva2VuIiwibG9hZGluZyIsImhyZWYiLCJmaWxlcyIsIkZvcm1EYXRhIiwiZGVidWciLCJjb29raWUiLCJmb3JtRGF0YSIsIl9lbnRyeTMiLCJhcHBlbmQiLCJqb2luIiwiU25vd2JvYXJkIiwiYWRkUGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==