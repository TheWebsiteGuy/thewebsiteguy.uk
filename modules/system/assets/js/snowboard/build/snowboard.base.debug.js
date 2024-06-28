"use strict";
(self["webpackChunk_wintercms_wn_system_module"] = self["webpackChunk_wintercms_wn_system_module"] || []).push([["/assets/js/snowboard/build/snowboard.base.debug"],{

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
/******/ __webpack_require__.O(0, ["assets/js/snowboard/build/snowboard.vendor"], () => (__webpack_exec__("./assets/js/snowboard/snowboard.base.debug.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2Fzc2V0cy9qcy9zbm93Ym9hcmQvYnVpbGQvc25vd2JvYXJkLmJhc2UuZGVidWcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQSxJQVFxQkEsVUFBVTtFQUMzQjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0ksU0FBQUEsV0FBWUMsU0FBUyxFQUFFO0lBQUFDLGVBQUEsT0FBQUYsVUFBQTtJQUNuQixJQUFJLENBQUNDLFNBQVMsR0FBR0EsU0FBUztFQUM5Qjs7RUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFMSSxPQUFBRSxZQUFBLENBQUFILFVBQUE7SUFBQUksR0FBQTtJQUFBQyxLQUFBLEVBTUEsU0FBQUMsVUFBQSxFQUFZLENBQ1o7O0lBRUE7QUFDSjtBQUNBO0FBQ0E7QUFDQTtFQUpJO0lBQUFGLEdBQUE7SUFBQUMsS0FBQSxFQUtBLFNBQUFFLGFBQUEsRUFBZTtNQUNYLE9BQU8sRUFBRTtJQUNiOztJQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFKSTtJQUFBSCxHQUFBO0lBQUFDLEtBQUEsRUFLQSxTQUFBRyxRQUFBLEVBQVU7TUFDTixPQUFPLENBQUMsQ0FBQztJQUNiOztJQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUxJO0lBQUFKLEdBQUE7SUFBQUMsS0FBQSxFQU1BLFNBQUFJLFNBQUEsRUFBVztNQUNQLElBQUksQ0FBQ0MsTUFBTSxDQUFDLENBQUM7TUFDYixPQUFPLElBQUksQ0FBQ1QsU0FBUztJQUN6Qjs7SUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBSkk7SUFBQUcsR0FBQTtJQUFBQyxLQUFBLEVBS0EsU0FBQU0sV0FBQSxFQUFhO01BQ1QsSUFBSSxDQUFDRixRQUFRLENBQUMsQ0FBQztJQUNuQjtFQUFDO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEVZOztBQUVqQjtBQUNBO0FB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LEVBQUU7UUFDVCxNQUFNLElBQUkvSSxLQUFLLENBQUMsMkJBQTJCLENBQUM7TUFDaEQ7TUFFQSxPQUFRcU4sR0FBRyxDQUFDNUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUN4QjRDLEdBQUcsTUFBQXBOLE1BQUEsQ0FDQW9OLEdBQUcsTUFBRztJQUNuQjtFQUFDO0FBQUEsRUF6SjRCak8sNERBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2ludGVyY21zL3duLXN5c3RlbS1tb2R1bGUvLi9hc3NldHMvanMvc25vd2JvYXJkL2Fic3RyYWN0cy9QbHVnaW5CYXNlLmpzIiwid2VicGFjazovL0B3aW50ZXJjbXMvd24tc3lzdGVtLW1vZHVsZS8uL2Fzc2V0cy9qcy9zbm93Ym9hcmQvYWJzdHJhY3RzL1NpbmdsZXRvbi5qcyIsIndlYnBhY2s6Ly9Ad2ludGVyY21zL3duLXN5c3RlbS1tb2R1bGUvLi9hc3NldHMvanMvc25vd2JvYXJkL21haW4vSW5uZXJQcm94eUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1zeXN0ZW0tbW9kdWxlLy4vYXNzZXRzL2pzL3Nub3dib2FyZC9tYWluL1BsdWdpbkxvYWRlci5qcyIsIndlYnBhY2s6Ly9Ad2ludGVyY21zL3duLXN5c3RlbS1tb2R1bGUvLi9hc3NldHMvanMvc25vd2JvYXJkL21haW4vUHJveHlIYW5kbGVyLmpzIiwid2VicGFjazovL0B3aW50ZXJjbXMvd24tc3lzdGVtLW1vZHVsZS8uL2Fzc2V0cy9qcy9zbm93Ym9hcmQvbWFpbi9Tbm93Ym9hcmQuanMiLCJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1zeXN0ZW0tbW9kdWxlLy4vYXNzZXRzL2pzL3Nub3dib2FyZC9zbm93Ym9hcmQuYmFzZS5kZWJ1Zy5qcyIsIndlYnBhY2s6Ly9Ad2ludGVyY21zL3duLXN5c3RlbS1tb2R1bGUvLi9hc3NldHMvanMvc25vd2JvYXJkL3V0aWxpdGllcy9Db29raWUuanMiLCJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1zeXN0ZW0tbW9kdWxlLy4vYXNzZXRzL2pzL3Nub3dib2FyZC91dGlsaXRpZXMvSnNvblBhcnNlci5qcyIsIndlYnBhY2s6Ly9Ad2ludGVyY21zL3duLXN5c3RlbS1tb2R1bGUvLi9hc3NldHMvanMvc25vd2JvYXJkL3V0aWxpdGllcy9TYW5pdGl6ZXIuanMiLCJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1zeXN0ZW0tbW9kdWxlLy4vYXNzZXRzL2pzL3Nub3dib2FyZC91dGlsaXRpZXMvVXJsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUGx1Z2luIGJhc2UgYWJzdHJhY3QuXG4gKlxuICogVGhpcyBjbGFzcyBwcm92aWRlcyB0aGUgYmFzZSBmdW5jdGlvbmFsaXR5IGZvciBhbGwgcGx1Z2lucy5cbiAqXG4gKiBAY29weXJpZ2h0IDIwMjEgV2ludGVyLlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGx1Z2luQmFzZSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IuXG4gICAgICpcbiAgICAgKiBUaGUgY29uc3RydWN0b3IgaXMgcHJvdmlkZWQgdGhlIFNub3dib2FyZCBmcmFtZXdvcmsgaW5zdGFuY2UsIGFuZCBzaG91bGQgbm90IGJlIG92ZXJ3cml0dGVuXG4gICAgICogdW5sZXNzIHlvdSBhYnNvbHV0ZWx5IGtub3cgd2hhdCB5b3UncmUgZG9pbmcuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1Nub3dib2FyZH0gc25vd2JvYXJkXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc25vd2JvYXJkKSB7XG4gICAgICAgIHRoaXMuc25vd2JvYXJkID0gc25vd2JvYXJkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBsdWdpbiBjb25zdHJ1Y3Rvci5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIHNob3VsZCBiZSB0cmVhdGVkIGFzIHRoZSB0cnVlIGNvbnN0cnVjdG9yIG9mIGEgcGx1Z2luLCBhbmQgY2FuIGJlIG92ZXJ3cml0dGVuLlxuICAgICAqIEl0IHdpbGwgYmUgY2FsbGVkIHN0cmFpZ2h0IGFmdGVyIGNvbnN0cnVjdGlvbi5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3QoKSB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVmaW5lcyB0aGUgcmVxdWlyZWQgcGx1Z2lucyBmb3IgdGhpcyBzcGVjaWZpYyBtb2R1bGUgdG8gd29yay5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmdbXX0gQW4gYXJyYXkgb2YgcGx1Z2lucyByZXF1aXJlZCBmb3IgdGhpcyBtb2R1bGUgdG8gd29yaywgYXMgc3RyaW5ncy5cbiAgICAgKi9cbiAgICBkZXBlbmRlbmNpZXMoKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIHRoZSBsaXN0ZW5lciBtZXRob2RzIGZvciBnbG9iYWwgZXZlbnRzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBsaXN0ZW5zKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGx1Z2luIGRlc3RydWN0b3IuXG4gICAgICpcbiAgICAgKiBGaXJlZCB3aGVuIHRoaXMgcGx1Z2luIGlzIHJlbW92ZWQuIENhbiBiZSBtYW51YWxseSBjYWxsZWQgaWYgeW91IGhhdmUgYW5vdGhlciBzY2VuYXJpbyBmb3JcbiAgICAgKiBkZXN0cnVjdGlvbiwgaWUuIHRoZSBlbGVtZW50IGF0dGFjaGVkIHRvIHRoZSBwbHVnaW4gaXMgcmVtb3ZlZCBvciBjaGFuZ2VkLlxuICAgICAqL1xuICAgIGRlc3RydWN0KCkge1xuICAgICAgICB0aGlzLmRldGFjaCgpO1xuICAgICAgICBkZWxldGUgdGhpcy5zbm93Ym9hcmQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGx1Z2luIGRlc3RydWN0b3IgKG9sZCBtZXRob2QgbmFtZSkuXG4gICAgICpcbiAgICAgKiBBbGxvd3MgcHJldmlvdXMgdXNhZ2Ugb2YgdGhlIFwiZGVzdHJ1Y3RvclwiIG1ldGhvZCB0byBzdGlsbCB3b3JrLlxuICAgICAqL1xuICAgIGRlc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZGVzdHJ1Y3QoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUGx1Z2luQmFzZSBmcm9tICcuL1BsdWdpbkJhc2UnO1xuXG4vKipcbiAqIFNpbmdsZXRvbiBwbHVnaW4gYWJzdHJhY3QuXG4gKlxuICogVGhpcyBpcyBhIHNwZWNpYWwgZGVmaW5pdGlvbiBjbGFzcyB0aGF0IHRoZSBTbm93Ym9hcmQgZnJhbWV3b3JrIHdpbGwgdXNlIHRvIGludGVycHJldCB0aGUgY3VycmVudCBwbHVnaW4gYXMgYVxuICogXCJzaW5nbGV0b25cIi4gVGhpcyB3aWxsIGVuc3VyZSB0aGF0IG9ubHkgb25lIGluc3RhbmNlIG9mIHRoZSBwbHVnaW4gY2xhc3MgaXMgdXNlZCBhY3Jvc3MgdGhlIGJvYXJkLlxuICpcbiAqIFNpbmdsZXRvbnMgYXJlIGluaXRpYWxpc2VkIG9uIHRoZSBcImRvbVJlYWR5XCIgZXZlbnQgYnkgZGVmYXVsdC5cbiAqXG4gKiBAY29weXJpZ2h0IDIwMjEgV2ludGVyLlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2luZ2xldG9uIGV4dGVuZHMgUGx1Z2luQmFzZSB7XG59XG4iLCIvKipcbiAqIEludGVybmFsIHByb3h5IGZvciBTbm93Ym9hcmQuXG4gKlxuICogVGhpcyBoYW5kbGVyIHdyYXBzIHRoZSBTbm93Ym9hcmQgaW5zdGFuY2UgdGhhdCBpcyBwYXNzZWQgdG8gdGhlIGNvbnN0cnVjdG9yIG9mIHBsdWdpbiBpbnN0YW5jZXMuXG4gKiBJdCBwcmV2ZW50cyBhY2Nlc3MgdG8gdGhlIGZvbGxvd2luZyBtZXRob2RzOlxuICogIC0gYGF0dGFjaEFic3RyYWN0c2A6IE5vIG5lZWQgdG8gYXR0YWNoIGFic3RyYWN0cyBhZ2Fpbi5cbiAqICAtIGBsb2FkVXRpbHRpZXNgOiBObyBuZWVkIHRvIGxvYWQgdXRpbGl0aWVzIGFnYWluLlxuICogIC0gYGluaXRpYWxpc2VgOiBTbm93Ym9hcmQgaXMgYWxyZWFkeSBpbml0aWFsaXNlZC5cbiAqICAtIGBpbml0aWFsaXNlU2luZ2xldG9uc2A6IFNpbmdsZXRvbnMgYXJlIGFscmVhZHkgaW5pdGlhbGlzZWQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBnZXQodGFyZ2V0LCBwcm9wLCByZWNlaXZlcikge1xuICAgICAgICBpZiAodHlwZW9mIHByb3AgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wTG93ZXIgPSBwcm9wLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICAgIGlmIChbJ2F0dGFjaEFic3RyYWN0cycsICdsb2FkVXRpbGl0aWVzJywgJ2luaXRpYWxpc2UnLCAnaW5pdGlhbGlzZVNpbmdsZXRvbnMnXS5pbmNsdWRlcyhwcm9wKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgWW91IGNhbm5vdCB1c2UgdGhlIFwiJHtwcm9wfVwiIFNub3dib2FyZCBtZXRob2Qgd2l0aGluIGEgcGx1Z2luLmApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGFyZ2V0Lmhhc1BsdWdpbihwcm9wTG93ZXIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICguLi5wYXJhbXMpID0+IFJlZmxlY3QuZ2V0KHRhcmdldCwgJ3BsdWdpbnMnKVtwcm9wTG93ZXJdLmdldEluc3RhbmNlKC4uLnBhcmFtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXQodGFyZ2V0LCBwcm9wLCByZWNlaXZlcik7XG4gICAgfSxcblxuICAgIGhhcyh0YXJnZXQsIHByb3ApIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwcm9wID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY29uc3QgcHJvcExvd2VyID0gcHJvcC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgICBpZiAoWydhdHRhY2hBYnN0cmFjdHMnLCAnbG9hZFV0aWxpdGllcycsICdpbml0aWFsaXNlJywgJ2luaXRpYWxpc2VTaW5nbGV0b25zJ10uaW5jbHVkZXMocHJvcCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXQuaGFzUGx1Z2luKHByb3BMb3dlcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBSZWZsZWN0Lmhhcyh0YXJnZXQsIHByb3ApO1xuICAgIH0sXG59O1xuIiwiaW1wb3J0IFBsdWdpbkJhc2UgZnJvbSAnLi4vYWJzdHJhY3RzL1BsdWdpbkJhc2UnO1xuaW1wb3J0IFNpbmdsZXRvbiBmcm9tICcuLi9hYnN0cmFjdHMvU2luZ2xldG9uJztcbmltcG9ydCBJbm5lclByb3h5SGFuZGxlciBmcm9tICcuL0lubmVyUHJveHlIYW5kbGVyJztcblxuLyoqXG4gKiBQbHVnaW4gbG9hZGVyIGNsYXNzLlxuICpcbiAqIFRoaXMgaXMgYSBwcm92aWRlciAoZmFjdG9yeSkgY2xhc3MgZm9yIGEgc2luZ2xlIHBsdWdpbiBhbmQgcHJvdmlkZXMgdGhlIGxpbmsgYmV0d2VlbiBTbm93Ym9hcmQgZnJhbWV3b3JrIGZ1bmN0aW9uYWxpdHlcbiAqIGFuZCB0aGUgdW5kZXJseWluZyBwbHVnaW4gaW5zdGFuY2VzLiBJdCBhbHNvIHByb3ZpZGVzIHNvbWUgYmFzaWMgbW9ja2luZyBvZiBwbHVnaW4gbWV0aG9kcyBmb3IgdGVzdGluZy5cbiAqXG4gKiBAY29weXJpZ2h0IDIwMjEgV2ludGVyLlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGx1Z2luTG9hZGVyIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3Rvci5cbiAgICAgKlxuICAgICAqIEJpbmRzIHRoZSBXaW50ZXIgZnJhbWV3b3JrIHRvIHRoZSBpbnN0YW5jZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtIHtTbm93Ym9hcmR9IHNub3dib2FyZFxuICAgICAqIEBwYXJhbSB7UGx1Z2luQmFzZX0gaW5zdGFuY2VcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBzbm93Ym9hcmQsIGluc3RhbmNlKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuc25vd2JvYXJkID0gbmV3IFByb3h5KFxuICAgICAgICAgICAgc25vd2JvYXJkLFxuICAgICAgICAgICAgSW5uZXJQcm94eUhhbmRsZXIsXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcblxuICAgICAgICAvLyBGcmVlemUgaW5zdGFuY2UgdGhhdCBoYXMgYmVlbiBpbnNlcnRlZCBpbnRvIHRoaXMgbG9hZGVyXG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcy5pbnN0YW5jZSk7XG5cbiAgICAgICAgdGhpcy5pbnN0YW5jZXMgPSBbXTtcbiAgICAgICAgdGhpcy5zaW5nbGV0b24gPSB7XG4gICAgICAgICAgICBpbml0aWFsaXNlZDogZmFsc2UsXG4gICAgICAgIH07XG4gICAgICAgIC8vIFByZXZlbnQgZnVydGhlciBleHRlbnNpb24gb2YgdGhlIHNpbmdsZXRvbiBzdGF0dXMgb2JqZWN0XG4gICAgICAgIE9iamVjdC5zZWFsKHRoaXMuc2luZ2xldG9uKTtcblxuICAgICAgICB0aGlzLm1vY2tzID0ge307XG4gICAgICAgIHRoaXMub3JpZ2luYWxGdW5jdGlvbnMgPSB7fTtcblxuICAgICAgICAvLyBGcmVlemUgbG9hZGVyIGl0c2VsZlxuICAgICAgICBPYmplY3QuZnJlZXplKFBsdWdpbkxvYWRlci5wcm90b3R5cGUpO1xuICAgICAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgdGhlIGN1cnJlbnQgcGx1Z2luIGhhcyBhIHNwZWNpZmljIG1ldGhvZCBhdmFpbGFibGUuXG4gICAgICpcbiAgICAgKiBSZXR1cm5zIGZhbHNlIGlmIHRoZSBjdXJyZW50IHBsdWdpbiBpcyBhIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZE5hbWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBoYXNNZXRob2QobWV0aG9kTmFtZSkge1xuICAgICAgICBpZiAodGhpcy5pc0Z1bmN0aW9uKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAodHlwZW9mIHRoaXMuaW5zdGFuY2UucHJvdG90eXBlW21ldGhvZE5hbWVdID09PSAnZnVuY3Rpb24nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxscyBhIHByb3RvdHlwZSBtZXRob2QgZm9yIGEgcGx1Z2luLiBUaGlzIHNob3VsZCBnZW5lcmFsbHkgYmUgdXNlZCBmb3IgXCJzdGF0aWNcIiBjYWxscy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2ROYW1lXG4gICAgICogQHBhcmFtIHsuLi59IGFyZ3NcbiAgICAgKiBAcmV0dXJucyB7YW55fVxuICAgICAqL1xuICAgIGNhbGxNZXRob2QoLi4ucGFyYW1ldGVycykge1xuICAgICAgICBpZiAodGhpcy5pc0Z1bmN0aW9uKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYXJncyA9IHBhcmFtZXRlcnM7XG4gICAgICAgIGNvbnN0IG1ldGhvZE5hbWUgPSBhcmdzLnNoaWZ0KCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UucHJvdG90eXBlW21ldGhvZE5hbWVdKGFyZ3MpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gaW5zdGFuY2Ugb2YgdGhlIGN1cnJlbnQgcGx1Z2luLlxuICAgICAqXG4gICAgICogLSBJZiB0aGlzIGlzIGEgY2FsbGJhY2sgZnVuY3Rpb24gcGx1Z2luLCB0aGUgZnVuY3Rpb24gd2lsbCBiZSByZXR1cm5lZC5cbiAgICAgKiAtIElmIHRoaXMgaXMgYSBzaW5nbGV0b24sIHRoZSBzaW5nbGUgaW5zdGFuY2Ugb2YgdGhlIHBsdWdpbiB3aWxsIGJlIHJldHVybmVkLlxuICAgICAqXG4gICAgICogQHJldHVybnMge1BsdWdpbkJhc2V8RnVuY3Rpb259XG4gICAgICovXG4gICAgZ2V0SW5zdGFuY2UoLi4ucGFyYW1ldGVycykge1xuICAgICAgICBpZiAodGhpcy5pc0Z1bmN0aW9uKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlKC4uLnBhcmFtZXRlcnMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5kZXBlbmRlbmNpZXNGdWxmaWxsZWQoKSkge1xuICAgICAgICAgICAgY29uc3QgdW5tZXQgPSB0aGlzLmdldERlcGVuZGVuY2llcygpLmZpbHRlcigoaXRlbSkgPT4gIXRoaXMuc25vd2JvYXJkLmdldFBsdWdpbk5hbWVzKCkuaW5jbHVkZXMoaXRlbSkpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgXCIke3RoaXMubmFtZX1cIiBwbHVnaW4gcmVxdWlyZXMgdGhlIGZvbGxvd2luZyBwbHVnaW5zOiAke3VubWV0LmpvaW4oJywgJyl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNTaW5nbGV0b24oKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGlzZVNpbmdsZXRvbiguLi5wYXJhbWV0ZXJzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQXBwbHkgbW9ja2VkIG1ldGhvZHNcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLm1vY2tzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5vcmlnaW5hbEZ1bmN0aW9ucykuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgW21ldGhvZE5hbWUsIGNhbGxiYWNrXSA9IGVudHJ5O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlc1swXVttZXRob2ROYW1lXSA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMubW9ja3MpLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IFttZXRob2ROYW1lLCBjYWxsYmFja10gPSBlbnRyeTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXNbMF1bbWV0aG9kTmFtZV0gPSAoLi4ucGFyYW1zKSA9PiBjYWxsYmFjayh0aGlzLCAuLi5wYXJhbXMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXNbMF07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBcHBseSBtb2NrZWQgbWV0aG9kcyB0byBwcm90b3R5cGVcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMubW9ja3MpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMub3JpZ2luYWxGdW5jdGlvbnMpLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgW21ldGhvZE5hbWUsIGNhbGxiYWNrXSA9IGVudHJ5O1xuICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UucHJvdG90eXBlW21ldGhvZE5hbWVdID0gY2FsbGJhY2s7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMubW9ja3MpLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgW21ldGhvZE5hbWUsIGNhbGxiYWNrXSA9IGVudHJ5O1xuICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UucHJvdG90eXBlW21ldGhvZE5hbWVdID0gKC4uLnBhcmFtcykgPT4gY2FsbGJhY2sodGhpcywgLi4ucGFyYW1zKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmV3SW5zdGFuY2UgPSBuZXcgdGhpcy5pbnN0YW5jZSh0aGlzLnNub3dib2FyZCwgLi4ucGFyYW1ldGVycyk7XG4gICAgICAgIG5ld0luc3RhbmNlLmRldGFjaCA9ICgpID0+IHRoaXMuaW5zdGFuY2VzLnNwbGljZSh0aGlzLmluc3RhbmNlcy5pbmRleE9mKG5ld0luc3RhbmNlKSwgMSk7XG4gICAgICAgIG5ld0luc3RhbmNlLmNvbnN0cnVjdCguLi5wYXJhbWV0ZXJzKTtcbiAgICAgICAgdGhpcy5pbnN0YW5jZXMucHVzaChuZXdJbnN0YW5jZSk7XG5cbiAgICAgICAgcmV0dXJuIG5ld0luc3RhbmNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgYWxsIGluc3RhbmNlcyBvZiB0aGUgY3VycmVudCBwbHVnaW4uXG4gICAgICpcbiAgICAgKiBJZiB0aGlzIHBsdWdpbiBpcyBhIGNhbGxiYWNrIGZ1bmN0aW9uIHBsdWdpbiwgYW4gZW1wdHkgYXJyYXkgd2lsbCBiZSByZXR1cm5lZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQbHVnaW5CYXNlW119XG4gICAgICovXG4gICAgZ2V0SW5zdGFuY2VzKCkge1xuICAgICAgICBpZiAodGhpcy5pc0Z1bmN0aW9uKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIHRoZSBjdXJyZW50IHBsdWdpbiBpcyBhIHNpbXBsZSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzRnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAodHlwZW9mIHRoaXMuaW5zdGFuY2UgPT09ICdmdW5jdGlvbicgJiYgdGhpcy5pbnN0YW5jZS5wcm90b3R5cGUgaW5zdGFuY2VvZiBQbHVnaW5CYXNlID09PSBmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiB0aGUgY3VycmVudCBwbHVnaW4gaXMgYSBzaW5nbGV0b24uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc1NpbmdsZXRvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UucHJvdG90eXBlIGluc3RhbmNlb2YgU2luZ2xldG9uID09PSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgYSBzaW5nbGV0b24gaGFzIGJlZW4gaW5pdGlhbGlzZWQuXG4gICAgICpcbiAgICAgKiBOb3JtYWwgcGx1Z2lucyB3aWxsIGFsd2F5cyByZXR1cm4gdHJ1ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzSW5pdGlhbGlzZWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1NpbmdsZXRvbigpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnNpbmdsZXRvbi5pbml0aWFsaXNlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXNlcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgaW5pdGlhbGlzZVNpbmdsZXRvbiguLi5wYXJhbWV0ZXJzKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1NpbmdsZXRvbigpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuZXdJbnN0YW5jZSA9IG5ldyB0aGlzLmluc3RhbmNlKHRoaXMuc25vd2JvYXJkLCAuLi5wYXJhbWV0ZXJzKTtcbiAgICAgICAgbmV3SW5zdGFuY2UuZGV0YWNoID0gKCkgPT4gdGhpcy5pbnN0YW5jZXMuc3BsaWNlKHRoaXMuaW5zdGFuY2VzLmluZGV4T2YobmV3SW5zdGFuY2UpLCAxKTtcbiAgICAgICAgbmV3SW5zdGFuY2UuY29uc3RydWN0KC4uLnBhcmFtZXRlcnMpO1xuICAgICAgICB0aGlzLmluc3RhbmNlcy5wdXNoKG5ld0luc3RhbmNlKTtcbiAgICAgICAgdGhpcy5zaW5nbGV0b24uaW5pdGlhbGlzZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGRlcGVuZGVuY2llcyBvZiB0aGUgY3VycmVudCBwbHVnaW4uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICAgICovXG4gICAgZ2V0RGVwZW5kZW5jaWVzKCkge1xuICAgICAgICAvLyBDYWxsYmFjayBmdW5jdGlvbnMgY2Fubm90IGhhdmUgZGVwZW5kZW5jaWVzLlxuICAgICAgICBpZiAodGhpcy5pc0Z1bmN0aW9uKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE5vIGRlcGVuZGVuY3kgbWV0aG9kIHNwZWNpZmllZC5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmluc3RhbmNlLnByb3RvdHlwZS5kZXBlbmRlbmNpZXMgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlLnByb3RvdHlwZS5kZXBlbmRlbmNpZXMoKS5tYXAoKGl0ZW0pID0+IGl0ZW0udG9Mb3dlckNhc2UoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiB0aGUgY3VycmVudCBwbHVnaW4gaGFzIGFsbCBpdHMgZGVwZW5kZW5jaWVzIGZ1bGZpbGxlZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGRlcGVuZGVuY2llc0Z1bGZpbGxlZCgpIHtcbiAgICAgICAgY29uc3QgZGVwZW5kZW5jaWVzID0gdGhpcy5nZXREZXBlbmRlbmNpZXMoKTtcblxuICAgICAgICBsZXQgZnVsZmlsbGVkID0gdHJ1ZTtcbiAgICAgICAgZGVwZW5kZW5jaWVzLmZvckVhY2goKHBsdWdpbikgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnNub3dib2FyZC5oYXNQbHVnaW4ocGx1Z2luKSkge1xuICAgICAgICAgICAgICAgIGZ1bGZpbGxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZnVsZmlsbGVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFsbG93cyBhIG1ldGhvZCBvZiBhbiBpbnN0YW5jZSB0byBiZSBtb2NrZWQgZm9yIHRlc3RpbmcuXG4gICAgICpcbiAgICAgKiBUaGlzIG1vY2sgd2lsbCBiZSBhcHBsaWVkIGZvciB0aGUgbGlmZSBvZiBhbiBpbnN0YW5jZS4gRm9yIHNpbmdsZXRvbnMsIHRoZSBtb2NrIHdpbGwgYmUgYXBwbGllZCBmb3IgdGhlIGxpZmVcbiAgICAgKiBvZiB0aGUgcGFnZS5cbiAgICAgKlxuICAgICAqIE1vY2tzIGNhbm5vdCBiZSBhcHBsaWVkIHRvIGNhbGxiYWNrIGZ1bmN0aW9uIHBsdWdpbnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kTmFtZVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICovXG4gICAgbW9jayhtZXRob2ROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAodGhpcy5pc0Z1bmN0aW9uKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5pbnN0YW5jZS5wcm90b3R5cGVbbWV0aG9kTmFtZV0pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRnVuY3Rpb24gXCIke21ldGhvZE5hbWV9XCIgZG9lcyBub3QgZXhpc3QgYW5kIGNhbm5vdCBiZSBtb2NrZWRgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubW9ja3NbbWV0aG9kTmFtZV0gPSBjYWxsYmFjaztcbiAgICAgICAgdGhpcy5vcmlnaW5hbEZ1bmN0aW9uc1ttZXRob2ROYW1lXSA9IHRoaXMuaW5zdGFuY2UucHJvdG90eXBlW21ldGhvZE5hbWVdO1xuXG4gICAgICAgIGlmICh0aGlzLmlzU2luZ2xldG9uKCkgJiYgdGhpcy5pbnN0YW5jZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpc2VTaW5nbGV0b24oKTtcblxuICAgICAgICAgICAgLy8gQXBwbHkgbW9ja2VkIG1ldGhvZFxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXNbMF1bbWV0aG9kTmFtZV0gPSAoLi4ucGFyYW1ldGVycykgPT4gY2FsbGJhY2sodGhpcywgLi4ucGFyYW1ldGVycyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgbW9jayBjYWxsYmFjayBmcm9tIGZ1dHVyZSBpbnN0YW5jZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kTmFtZVxuICAgICAqL1xuICAgIHVubW9jayhtZXRob2ROYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRnVuY3Rpb24oKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5tb2Nrc1ttZXRob2ROYW1lXSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXNTaW5nbGV0b24oKSkge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXNbMF1bbWV0aG9kTmFtZV0gPSB0aGlzLm9yaWdpbmFsRnVuY3Rpb25zW21ldGhvZE5hbWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHRoaXMubW9ja3NbbWV0aG9kTmFtZV07XG4gICAgICAgIGRlbGV0ZSB0aGlzLm9yaWdpbmFsRnVuY3Rpb25zW21ldGhvZE5hbWVdO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBnZXQodGFyZ2V0LCBwcm9wLCByZWNlaXZlcikge1xuICAgICAgICBpZiAodHlwZW9mIHByb3AgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wTG93ZXIgPSBwcm9wLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXQuaGFzUGx1Z2luKHByb3BMb3dlcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKC4uLnBhcmFtcykgPT4gUmVmbGVjdC5nZXQodGFyZ2V0LCAncGx1Z2lucycpW3Byb3BMb3dlcl0uZ2V0SW5zdGFuY2UoLi4ucGFyYW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBSZWZsZWN0LmdldCh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKTtcbiAgICB9LFxuXG4gICAgaGFzKHRhcmdldCwgcHJvcCkge1xuICAgICAgICBpZiAodHlwZW9mIHByb3AgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wTG93ZXIgPSBwcm9wLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXQuaGFzUGx1Z2luKHByb3BMb3dlcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBSZWZsZWN0Lmhhcyh0YXJnZXQsIHByb3ApO1xuICAgIH0sXG59O1xuIiwiaW1wb3J0IFBsdWdpbkJhc2UgZnJvbSAnLi4vYWJzdHJhY3RzL1BsdWdpbkJhc2UnO1xuaW1wb3J0IFNpbmdsZXRvbiBmcm9tICcuLi9hYnN0cmFjdHMvU2luZ2xldG9uJztcbmltcG9ydCBQbHVnaW5Mb2FkZXIgZnJvbSAnLi9QbHVnaW5Mb2FkZXInO1xuXG5pbXBvcnQgQ29va2llIGZyb20gJy4uL3V0aWxpdGllcy9Db29raWUnO1xuaW1wb3J0IEpzb25QYXJzZXIgZnJvbSAnLi4vdXRpbGl0aWVzL0pzb25QYXJzZXInO1xuaW1wb3J0IFNhbml0aXplciBmcm9tICcuLi91dGlsaXRpZXMvU2FuaXRpemVyJztcbmltcG9ydCBVcmwgZnJvbSAnLi4vdXRpbGl0aWVzL1VybCc7XG5cbi8qKlxuICogU25vd2JvYXJkIC0gdGhlIFdpbnRlciBKYXZhU2NyaXB0IGZyYW1ld29yay5cbiAqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGJhc2Ugb2YgYSBtb2Rlcm4gdGFrZSBvbiB0aGUgV2ludGVyIEpTIGZyYW1ld29yaywgYmVpbmcgZnVsbHkgZXh0ZW5zaWJsZSBhbmQgdGFraW5nIGFkdmFudGFnZVxuICogb2YgbW9kZXJuIEphdmFTY3JpcHQgZmVhdHVyZXMgYnkgbGV2ZXJhZ2luZyB0aGUgTGFyYXZlbCBNaXggY29tcGlsYXRpb24gZnJhbWV3b3JrLiBJdCBhbHNvIGlzIGNvZGVkIHVwIHRvIHJlbW92ZSB0aGVcbiAqIGRlcGVuZGVuY3kgb2YgalF1ZXJ5LlxuICpcbiAqIEBjb3B5cmlnaHQgMjAyMSBXaW50ZXIuXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICogQGxpbmsgaHR0cHM6Ly93aW50ZXJjbXMuY29tL2RvY3Mvc25vd2JvYXJkL2ludHJvZHVjdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbm93Ym9hcmQge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtib29sZWFufSBhdXRvU2luZ2xldG9ucyBBdXRvbWF0aWNhbGx5IGxvYWQgc2luZ2xldG9ucyB3aGVuIERPTSBpcyByZWFkeS4gRGVmYXVsdDogYHRydWVgLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gZGVidWcgV2hldGhlciBkZWJ1Z2dpbmcgbG9ncyBzaG91bGQgYmUgc2hvd24uIERlZmF1bHQ6IGBmYWxzZWAuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoYXV0b1NpbmdsZXRvbnMsIGRlYnVnKSB7XG4gICAgICAgIHRoaXMuZGVidWdFbmFibGVkID0gKHR5cGVvZiBkZWJ1ZyA9PT0gJ2Jvb2xlYW4nICYmIGRlYnVnID09PSB0cnVlKTtcbiAgICAgICAgdGhpcy5hdXRvSW5pdFNpbmdsZXRvbnMgPSAodHlwZW9mIGF1dG9TaW5nbGV0b25zID09PSAnYm9vbGVhbicgJiYgYXV0b1NpbmdsZXRvbnMgPT09IGZhbHNlKTtcbiAgICAgICAgdGhpcy5wbHVnaW5zID0ge307XG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0ge307XG4gICAgICAgIHRoaXMuZm91bmRCYXNlVXJsID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZWFkaW5lc3MgPSB7XG4gICAgICAgICAgICBkb206IGZhbHNlLFxuICAgICAgICB9O1xuICAgICAgICAvLyBTZWFsIHJlYWRpbmVzcyBmcm9tIGJlaW5nIGFkZGVkIHRvIGZ1cnRoZXIsIGJ1dCBhbGxvdyB0aGUgcHJvcGVydGllcyB0byBiZSBtb2RpZmllZC5cbiAgICAgICAgT2JqZWN0LnNlYWwodGhpcy5yZWFkaW5lc3MpO1xuICAgICAgICB0aGlzLmF0dGFjaEFic3RyYWN0cygpO1xuXG4gICAgICAgIC8vIEZyZWV6ZSB0aGUgU25vd2JvYXJkIGNsYXNzIHRvIHByZXZlbnQgZnVydGhlciBtb2RpZmljYXRpb25zLlxuICAgICAgICBPYmplY3QuZnJlZXplKFNub3dib2FyZC5wcm90b3R5cGUpO1xuICAgICAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuXG4gICAgICAgIHRoaXMubG9hZFV0aWxpdGllcygpO1xuICAgICAgICB0aGlzLmluaXRpYWxpc2UoKTtcblxuICAgICAgICB0aGlzLmRlYnVnKCdTbm93Ym9hcmQgZnJhbWV3b3JrIGluaXRpYWxpc2VkJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXR0YWNoZXMgYWJzdHJhY3QgY2xhc3NlcyBhcyBwcm9wZXJ0aWVzIG9mIHRoZSBTbm93Ym9hcmQgY2xhc3MuXG4gICAgICpcbiAgICAgKiBUaGlzIHdpbGwgYWxsb3cgSmF2YXNjcmlwdCBmdW5jdGlvbmFsaXR5IHdpdGggbm8gYnVpbGQgcHJvY2VzcyB0byBzdGlsbCBleHRlbmQgdGhlc2UgYWJzdHJhY3RzIGJ5IHByZWZpeGluZ1xuICAgICAqIHRoZW0gd2l0aCBcIlNub3dib2FyZFwiLlxuICAgICAqXG4gICAgICogYGBgXG4gICAgICogY2xhc3MgTXlDbGFzcyBleHRlbmRzIFNub3dib2FyZC5QbHVnaW5CYXNlIHtcbiAgICAgKiAgICAgLi4uXG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIGF0dGFjaEFic3RyYWN0cygpIHtcbiAgICAgICAgdGhpcy5QbHVnaW5CYXNlID0gUGx1Z2luQmFzZTtcbiAgICAgICAgdGhpcy5TaW5nbGV0b24gPSBTaW5nbGV0b247XG5cbiAgICAgICAgT2JqZWN0LmZyZWV6ZSh0aGlzLlBsdWdpbkJhc2UucHJvdG90eXBlKTtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZSh0aGlzLlBsdWdpbkJhc2UpO1xuICAgICAgICBPYmplY3QuZnJlZXplKHRoaXMuU2luZ2xldG9uLnByb3RvdHlwZSk7XG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcy5TaW5nbGV0b24pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWRzIHRoZSBkZWZhdWx0IHV0aWxpdGllcy5cbiAgICAgKi9cbiAgICBsb2FkVXRpbGl0aWVzKCkge1xuICAgICAgICB0aGlzLmFkZFBsdWdpbignY29va2llJywgQ29va2llKTtcbiAgICAgICAgdGhpcy5hZGRQbHVnaW4oJ2pzb25QYXJzZXInLCBKc29uUGFyc2VyKTtcbiAgICAgICAgdGhpcy5hZGRQbHVnaW4oJ3Nhbml0aXplcicsIFNhbml0aXplcik7XG4gICAgICAgIHRoaXMuYWRkUGx1Z2luKCd1cmwnLCBVcmwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpc2VzIHRoZSBmcmFtZXdvcmsuXG4gICAgICpcbiAgICAgKiBBdHRhY2hlcyBhIGxpc3RlbmVyIGZvciB0aGUgRE9NIGJlaW5nIHJlYWR5IGFuZCB0cmlnZ2VycyBhIGdsb2JhbCBcInJlYWR5XCIgZXZlbnQgZm9yIHBsdWdpbnMgdG8gYmVnaW4gYXR0YWNoaW5nXG4gICAgICogdGhlbXNlbHZlcyB0byB0aGUgRE9NLlxuICAgICAqL1xuICAgIGluaXRpYWxpc2UoKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuYXV0b0luaXRTaW5nbGV0b25zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsaXNlU2luZ2xldG9ucygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5nbG9iYWxFdmVudCgncmVhZHknKTtcbiAgICAgICAgICAgIHRoaXMucmVhZGluZXNzLmRvbSA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpc2VzIGFuIGluc3RhbmNlIG9mIGV2ZXJ5IHNpbmdsZXRvbi5cbiAgICAgKi9cbiAgICBpbml0aWFsaXNlU2luZ2xldG9ucygpIHtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnBsdWdpbnMpLmZvckVhY2goKHBsdWdpbikgPT4ge1xuICAgICAgICAgICAgaWYgKHBsdWdpbi5pc1NpbmdsZXRvbigpICYmIHBsdWdpbi5kZXBlbmRlbmNpZXNGdWxmaWxsZWQoKSkge1xuICAgICAgICAgICAgICAgIHBsdWdpbi5pbml0aWFsaXNlU2luZ2xldG9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBwbHVnaW4gdG8gdGhlIGZyYW1ld29yay5cbiAgICAgKlxuICAgICAqIFBsdWdpbnMgYXJlIHRoZSBjb3JuZXJzdG9uZSBmb3IgYWRkaXRpb25hbCBmdW5jdGlvbmFsaXR5IGZvciBTbm93Ym9hcmQuIEEgcGx1Z2luIG11c3QgZWl0aGVyIGJlIGFuIEVTMjAxNSBjbGFzc1xuICAgICAqIHRoYXQgZXh0ZW5kcyB0aGUgUGx1Z2luQmFzZSBvciBTaW5nbGV0b24gYWJzdHJhY3QgY2xhc3Nlcywgb3IgYSBzaW1wbGUgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAgICpcbiAgICAgKiBXaGVuIGEgcGx1Z2luIGlzIGFkZGVkLCBpdCBpcyBhdXRvbWF0aWNhbGx5IGFzc2lnbmVkIGFzIGEgbmV3IG1hZ2ljIG1ldGhvZCBpbiB0aGUgU25vd2JvYXJkIGNsYXNzIHVzaW5nIHRoZSBuYW1lXG4gICAgICogcGFyYW1ldGVyLCBhbmQgY2FuIGJlIGNhbGxlZCB2aWEgdGhpcyBtZXRob2QuIFRoaXMgbWV0aG9kIHdpbGwgYWx3YXlzIGJlIHRoZSBcImxvd2VyY2FzZVwiIHZlcnNpb24gb2YgdGhpcyBuYW1lLlxuICAgICAqXG4gICAgICogRm9yIGV4YW1wbGUsIGlmIGEgcGx1Z2luIGlzIGFzc2lnbmVkIHRvIHRoZSBuYW1lIFwibXlQbHVnaW5cIiwgaXQgY2FuIGJlIGNhbGxlZCB2aWEgYFNub3dib2FyZC5teXBsdWdpbigpYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtIHtQbHVnaW5CYXNlfEZ1bmN0aW9ufSBpbnN0YW5jZVxuICAgICAqL1xuICAgIGFkZFBsdWdpbihuYW1lLCBpbnN0YW5jZSkge1xuICAgICAgICBjb25zdCBsb3dlck5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuaGFzUGx1Z2luKGxvd2VyTmFtZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQSBwbHVnaW4gY2FsbGVkIFwiJHtuYW1lfVwiIGlzIGFscmVhZHkgcmVnaXN0ZXJlZC5gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgaW5zdGFuY2UgIT09ICdmdW5jdGlvbicgJiYgaW5zdGFuY2UgaW5zdGFuY2VvZiBQbHVnaW5CYXNlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgcHJvdmlkZWQgcGx1Z2luIG11c3QgZXh0ZW5kIHRoZSBQbHVnaW5CYXNlIGNsYXNzLCBvciBtdXN0IGJlIGEgY2FsbGJhY2sgZnVuY3Rpb24uJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpc1tuYW1lXSAhPT0gdW5kZWZpbmVkIHx8IHRoaXNbbG93ZXJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBnaXZlbiBuYW1lIGlzIGFscmVhZHkgaW4gdXNlIGZvciBhIHByb3BlcnR5IG9yIG1ldGhvZCBvZiB0aGUgU25vd2JvYXJkIGNsYXNzLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wbHVnaW5zW2xvd2VyTmFtZV0gPSBuZXcgUGx1Z2luTG9hZGVyKGxvd2VyTmFtZSwgdGhpcywgaW5zdGFuY2UpO1xuXG4gICAgICAgIHRoaXMuZGVidWcoYFBsdWdpbiBcIiR7bmFtZX1cIiByZWdpc3RlcmVkYCk7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgYW55IHNpbmdsZXRvbnMgbm93IGhhdmUgdGhlaXIgZGVwZW5kZW5jaWVzIGZ1bGZpbGxlZCwgYW5kIGZpcmUgdGhlaXIgXCJyZWFkeVwiIGhhbmRsZXIgaWYgd2UncmVcbiAgICAgICAgLy8gaW4gYSByZWFkeSBzdGF0ZS5cbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLmdldFBsdWdpbnMoKSkuZm9yRWFjaCgocGx1Z2luKSA9PiB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgcGx1Z2luLmlzU2luZ2xldG9uKClcbiAgICAgICAgICAgICAgICAmJiAhcGx1Z2luLmlzSW5pdGlhbGlzZWQoKVxuICAgICAgICAgICAgICAgICYmIHBsdWdpbi5kZXBlbmRlbmNpZXNGdWxmaWxsZWQoKVxuICAgICAgICAgICAgICAgICYmIHBsdWdpbi5oYXNNZXRob2QoJ2xpc3RlbnMnKVxuICAgICAgICAgICAgICAgICYmIE9iamVjdC5rZXlzKHBsdWdpbi5jYWxsTWV0aG9kKCdsaXN0ZW5zJykpLmluY2x1ZGVzKCdyZWFkeScpXG4gICAgICAgICAgICAgICAgJiYgdGhpcy5yZWFkaW5lc3MuZG9tXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWFkeU1ldGhvZCA9IHBsdWdpbi5jYWxsTWV0aG9kKCdsaXN0ZW5zJykucmVhZHk7XG4gICAgICAgICAgICAgICAgcGx1Z2luLmNhbGxNZXRob2QocmVhZHlNZXRob2QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgcGx1Z2luLlxuICAgICAqXG4gICAgICogUmVtb3ZlcyBhIHBsdWdpbiBmcm9tIFNub3dib2FyZCwgY2FsbGluZyB0aGUgZGVzdHJ1Y3RvciBtZXRob2QgZm9yIGFsbCBhY3RpdmUgaW5zdGFuY2VzIG9mIHRoZSBwbHVnaW4uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIHJlbW92ZVBsdWdpbihuYW1lKSB7XG4gICAgICAgIGNvbnN0IGxvd2VyTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICBpZiAoIXRoaXMuaGFzUGx1Z2luKGxvd2VyTmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMuZGVidWcoYFBsdWdpbiBcIiR7bmFtZX1cIiBhbHJlYWR5IHJlbW92ZWRgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENhbGwgZGVzdHJ1Y3RvcnMgZm9yIGFsbCBpbnN0YW5jZXNcbiAgICAgICAgdGhpcy5wbHVnaW5zW2xvd2VyTmFtZV0uZ2V0SW5zdGFuY2VzKCkuZm9yRWFjaCgoaW5zdGFuY2UpID0+IHtcbiAgICAgICAgICAgIGluc3RhbmNlLmRlc3RydWN0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRlbGV0ZSB0aGlzLnBsdWdpbnNbbG93ZXJOYW1lXTtcbiAgICAgICAgZGVsZXRlIHRoaXNbbG93ZXJOYW1lXTtcbiAgICAgICAgZGVsZXRlIHRoaXNbbmFtZV07XG5cbiAgICAgICAgdGhpcy5kZWJ1ZyhgUGx1Z2luIFwiJHtuYW1lfVwiIHJlbW92ZWRgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIGEgcGx1Z2luIGhhcyBiZWVuIHJlZ2lzdGVyZWQgYW5kIGlzIGFjdGl2ZS5cbiAgICAgKlxuICAgICAqIEEgcGx1Z2luIHRoYXQgaXMgc3RpbGwgd2FpdGluZyBmb3IgZGVwZW5kZW5jaWVzIHRvIGJlIHJlZ2lzdGVyZWQgd2lsbCBub3QgYmUgYWN0aXZlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBoYXNQbHVnaW4obmFtZSkge1xuICAgICAgICBjb25zdCBsb3dlck5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgcmV0dXJuICh0aGlzLnBsdWdpbnNbbG93ZXJOYW1lXSAhPT0gdW5kZWZpbmVkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHJlZ2lzdGVyZWQgcGx1Z2lucyBhcyBQbHVnaW5Mb2FkZXIgb2JqZWN0cy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQbHVnaW5Mb2FkZXJbXX1cbiAgICAgKi9cbiAgICBnZXRQbHVnaW5zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wbHVnaW5zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgcmVnaXN0ZXJlZCBwbHVnaW5zLCBieSBuYW1lLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgICAqL1xuICAgIGdldFBsdWdpbk5hbWVzKCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5wbHVnaW5zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgUGx1Z2luTG9hZGVyIG9iamVjdCBvZiBhIGdpdmVuIHBsdWdpbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQbHVnaW5Mb2FkZXJ9XG4gICAgICovXG4gICAgZ2V0UGx1Z2luKG5hbWUpIHtcbiAgICAgICAgY29uc3QgbG93ZXJOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIGlmICghdGhpcy5oYXNQbHVnaW4obG93ZXJOYW1lKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBwbHVnaW4gY2FsbGVkIFwiJHtsb3dlck5hbWV9XCIgaGFzIGJlZW4gcmVnaXN0ZXJlZC5gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnBsdWdpbnNbbG93ZXJOYW1lXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5kcyBhbGwgcGx1Z2lucyB0aGF0IGxpc3RlbiB0byB0aGUgZ2l2ZW4gZXZlbnQuXG4gICAgICpcbiAgICAgKiBUaGlzIHdvcmtzIGZvciBib3RoIG5vcm1hbCBhbmQgcHJvbWlzZSBldmVudHMuIEl0IGRvZXMgTk9UIGNoZWNrIHRoYXQgdGhlIHBsdWdpbidzIGxpc3RlbmVyIGFjdHVhbGx5IGV4aXN0cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nW119IFRoZSBuYW1lIG9mIHRoZSBwbHVnaW5zIHRoYXQgYXJlIGxpc3RlbmluZyB0byB0aGlzIGV2ZW50LlxuICAgICAqL1xuICAgIGxpc3RlbnNUb0V2ZW50KGV2ZW50TmFtZSkge1xuICAgICAgICBjb25zdCBwbHVnaW5zID0gW107XG5cbiAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5wbHVnaW5zKS5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgW25hbWUsIHBsdWdpbl0gPSBlbnRyeTtcblxuICAgICAgICAgICAgaWYgKHBsdWdpbi5pc0Z1bmN0aW9uKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXBsdWdpbi5kZXBlbmRlbmNpZXNGdWxmaWxsZWQoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcGx1Z2luLmhhc01ldGhvZCgnbGlzdGVucycpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBsaXN0ZW5lcnMgPSBwbHVnaW4uY2FsbE1ldGhvZCgnbGlzdGVucycpO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyc1tldmVudE5hbWVdID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgbGlzdGVuZXJzW2V2ZW50TmFtZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBwbHVnaW5zLnB1c2gobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwbHVnaW5zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBhIHNpbXBsZSByZWFkeSBsaXN0ZW5lci5cbiAgICAgKlxuICAgICAqIFN5bm9ueW1vdXMgd2l0aCBqUXVlcnkncyBcIiQoZG9jdW1lbnQpLnJlYWR5KClcIiBmdW5jdGlvbmFsaXR5LCB0aGlzIGFsbG93cyBpbmxpbmUgc2NyaXB0cyB0b1xuICAgICAqIGF0dGFjaCB0aGVtc2VsdmVzIHRvIFNub3dib2FyZCBpbW1lZGlhdGVseSBidXQgb25seSBmaXJlIHdoZW4gdGhlIERPTSBpcyByZWFkeS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICovXG4gICAgcmVhZHkoY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHRoaXMucmVhZGluZXNzLmRvbSkge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub24oJ3JlYWR5JywgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBzaW1wbGUgbGlzdGVuZXIgZm9yIGFuIGV2ZW50LlxuICAgICAqXG4gICAgICogVGhpcyBjYW4gYmUgdXNlZCBmb3IgYWQtaG9jIHNjcmlwdHMgdGhhdCBkb24ndCBuZWVkIGEgZnVsbCBwbHVnaW4uIFRoZSBnaXZlbiBjYWxsYmFjayB3aWxsIGJlXG4gICAgICogY2FsbGVkIHdoZW4gdGhlIGV2ZW50IG5hbWUgcHJvdmlkZWQgZmlyZXMuIFRoaXMgd29ya3MgZm9yIGJvdGggbm9ybWFsIGFuZCBQcm9taXNlIGV2ZW50cy4gRm9yXG4gICAgICogYSBQcm9taXNlIGV2ZW50LCB5b3VyIGNhbGxiYWNrIG11c3QgcmV0dXJuIGEgUHJvbWlzZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudE5hbWVcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqL1xuICAgIG9uKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKCF0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdID0gW107XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0uaW5jbHVkZXMoY2FsbGJhY2spKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdLnB1c2goY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIHNpbXBsZSBsaXN0ZW5lciBmb3IgYW4gZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnROYW1lXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBvZmYoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAoIXRoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXS5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxzIGEgZ2xvYmFsIGV2ZW50IHRvIGFsbCByZWdpc3RlcmVkIHBsdWdpbnMuXG4gICAgICpcbiAgICAgKiBJZiBhbnkgcGx1Z2luIHJldHVybnMgYSBgZmFsc2VgLCB0aGUgZXZlbnQgaXMgY29uc2lkZXJlZCBjYW5jZWxsZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IElmIGV2ZW50IHdhcyBub3QgY2FuY2VsbGVkXG4gICAgICovXG4gICAgZ2xvYmFsRXZlbnQoZXZlbnROYW1lLCAuLi5wYXJhbWV0ZXJzKSB7XG4gICAgICAgIHRoaXMuZGVidWcoYENhbGxpbmcgZ2xvYmFsIGV2ZW50IFwiJHtldmVudE5hbWV9XCJgLCAuLi5wYXJhbWV0ZXJzKTtcblxuICAgICAgICAvLyBGaW5kIHBsdWdpbnMgbGlzdGVuaW5nIHRvIHRoZSBldmVudC5cbiAgICAgICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5zVG9FdmVudChldmVudE5hbWUpO1xuICAgICAgICBpZiAobGlzdGVuZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5kZWJ1ZyhgTm8gbGlzdGVuZXJzIGZvdW5kIGZvciBnbG9iYWwgZXZlbnQgXCIke2V2ZW50TmFtZX1cImApO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZWJ1ZyhgTGlzdGVuZXJzIGZvdW5kIGZvciBnbG9iYWwgZXZlbnQgXCIke2V2ZW50TmFtZX1cIjogJHtsaXN0ZW5lcnMuam9pbignLCAnKX1gKTtcblxuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG5cbiAgICAgICAgbGlzdGVuZXJzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBsdWdpbiA9IHRoaXMuZ2V0UGx1Z2luKG5hbWUpO1xuXG4gICAgICAgICAgICBpZiAocGx1Z2luLmlzRnVuY3Rpb24oKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwbHVnaW4uaXNTaW5nbGV0b24oKSAmJiBwbHVnaW4uZ2V0SW5zdGFuY2VzKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcGx1Z2luLmluaXRpYWxpc2VTaW5nbGV0b24oKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbGlzdGVuTWV0aG9kID0gcGx1Z2luLmNhbGxNZXRob2QoJ2xpc3RlbnMnKVtldmVudE5hbWVdO1xuXG4gICAgICAgICAgICAvLyBDYWxsIGV2ZW50IGhhbmRsZXIgbWV0aG9kcyBmb3IgYWxsIHBsdWdpbnMsIGlmIHRoZXkgaGF2ZSBhIG1ldGhvZCBzcGVjaWZpZWQgZm9yIHRoZSBldmVudC5cbiAgICAgICAgICAgIHBsdWdpbi5nZXRJbnN0YW5jZXMoKS5mb3JFYWNoKChpbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIElmIGEgcGx1Z2luIGhhcyBjYW5jZWxsZWQgdGhlIGV2ZW50LCBubyBmdXJ0aGVyIHBsdWdpbnMgYXJlIGNvbnNpZGVyZWQuXG4gICAgICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5NZXRob2QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGxpc3Rlbk1ldGhvZC5hcHBseShpbnN0YW5jZSwgcGFyYW1ldGVycyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBFcnJvciB0aHJvd24gaW4gXCIke2V2ZW50TmFtZX1cIiBldmVudCBieSBcIiR7bmFtZX1cIiBwbHVnaW4uYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBsaXN0ZW5NZXRob2QgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaW5zdGFuY2VbbGlzdGVuTWV0aG9kXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIFwiJHtsaXN0ZW5NZXRob2R9XCIgbWV0aG9kIGluIFwiJHtuYW1lfVwiIHBsdWdpbmApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnN0YW5jZVtsaXN0ZW5NZXRob2RdKC4uLnBhcmFtZXRlcnMpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWJ1ZyhgR2xvYmFsIGV2ZW50IFwiJHtldmVudE5hbWV9XCIgY2FuY2VsbGVkIGJ5IFwiJHtuYW1lfVwiIHBsdWdpbmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgRXJyb3IgdGhyb3duIGluIFwiJHtldmVudE5hbWV9XCIgZXZlbnQgYnkgXCIke25hbWV9XCIgcGx1Z2luLmAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcihgTGlzdGVuIG1ldGhvZCBmb3IgXCIke2V2ZW50TmFtZX1cIiBldmVudCBpbiBcIiR7bmFtZX1cIiBwbHVnaW4gaXMgbm90IGEgZnVuY3Rpb24gb3Igc3RyaW5nLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBGaW5kIGFkLWhvYyBsaXN0ZW5lcnMgZm9yIHRoaXMgZXZlbnQuXG4gICAgICAgIGlmICghY2FuY2VsbGVkICYmIHRoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0gJiYgdGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmRlYnVnKGBGb3VuZCAke3RoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0ubGVuZ3RofSBhZC1ob2MgbGlzdGVuZXIocykgZm9yIGdsb2JhbCBldmVudCBcIiR7ZXZlbnROYW1lfVwiYCk7XG5cbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0uZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBJZiBhIGxpc3RlbmVyIGhhcyBjYW5jZWxsZWQgdGhlIGV2ZW50LCBubyBmdXJ0aGVyIGxpc3RlbmVycyBhcmUgY29uc2lkZXJlZC5cbiAgICAgICAgICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobGlzdGVuZXIoLi4ucGFyYW1ldGVycykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWJ1ZyhgR2xvYmFsIGV2ZW50IFwiJHtldmVudE5hbWV9IGNhbmNlbGxlZCBieSBhbiBhZC1ob2MgbGlzdGVuZXIuYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgYEVycm9yIHRocm93biBpbiBcIiR7ZXZlbnROYW1lfVwiIGV2ZW50IGJ5IGFuIGFkLWhvYyBsaXN0ZW5lci5gLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gIWNhbmNlbGxlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxscyBhIGdsb2JhbCBldmVudCB0byBhbGwgcmVnaXN0ZXJlZCBwbHVnaW5zLCBleHBlY3RpbmcgYSBQcm9taXNlIHRvIGJlIHJldHVybmVkIGJ5IGFsbC5cbiAgICAgKlxuICAgICAqIFRoaXMgY29sbGF0ZXMgYWxsIHBsdWdpbnMgcmVzcG9uc2VzIGludG8gb25lIGxhcmdlIFByb21pc2UgdGhhdCBlaXRoZXIgZXhwZWN0cyBhbGwgdG8gYmUgcmVzb2x2ZWQsIG9yIG9uZSB0byByZWplY3QuXG4gICAgICogSWYgbm8gbGlzdGVuZXJzIGFyZSBmb3VuZCwgYSByZXNvbHZlZCBQcm9taXNlIGlzIHJldHVybmVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZVxuICAgICAqL1xuICAgIGdsb2JhbFByb21pc2VFdmVudChldmVudE5hbWUsIC4uLnBhcmFtZXRlcnMpIHtcbiAgICAgICAgdGhpcy5kZWJ1ZyhgQ2FsbGluZyBnbG9iYWwgcHJvbWlzZSBldmVudCBcIiR7ZXZlbnROYW1lfVwiYCk7XG5cbiAgICAgICAgLy8gRmluZCBwbHVnaW5zIGxpc3RlbmluZyB0byB0aGlzIGV2ZW50LlxuICAgICAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbnNUb0V2ZW50KGV2ZW50TmFtZSk7XG4gICAgICAgIGlmIChsaXN0ZW5lcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmRlYnVnKGBObyBsaXN0ZW5lcnMgZm91bmQgZm9yIGdsb2JhbCBwcm9taXNlIGV2ZW50IFwiJHtldmVudE5hbWV9XCJgKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlYnVnKGBMaXN0ZW5lcnMgZm91bmQgZm9yIGdsb2JhbCBwcm9taXNlIGV2ZW50IFwiJHtldmVudE5hbWV9XCI6ICR7bGlzdGVuZXJzLmpvaW4oJywgJyl9YCk7XG5cbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBbXTtcblxuICAgICAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGx1Z2luID0gdGhpcy5nZXRQbHVnaW4obmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChwbHVnaW4uaXNGdW5jdGlvbigpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBsdWdpbi5pc1NpbmdsZXRvbigpICYmIHBsdWdpbi5nZXRJbnN0YW5jZXMoKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBwbHVnaW4uaW5pdGlhbGlzZVNpbmdsZXRvbigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBsaXN0ZW5NZXRob2QgPSBwbHVnaW4uY2FsbE1ldGhvZCgnbGlzdGVucycpW2V2ZW50TmFtZV07XG5cbiAgICAgICAgICAgIC8vIENhbGwgZXZlbnQgaGFuZGxlciBtZXRob2RzIGZvciBhbGwgcGx1Z2lucywgaWYgdGhleSBoYXZlIGEgbWV0aG9kIHNwZWNpZmllZCBmb3IgdGhlIGV2ZW50LlxuICAgICAgICAgICAgcGx1Z2luLmdldEluc3RhbmNlcygpLmZvckVhY2goKGluc3RhbmNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5NZXRob2QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlUHJvbWlzZSA9IGxpc3Rlbk1ldGhvZC5hcHBseShpbnN0YW5jZSwgcGFyYW1ldGVycyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnN0YW5jZVByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChpbnN0YW5jZVByb21pc2UpO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgRXJyb3IgdGhyb3duIGluIFwiJHtldmVudE5hbWV9XCIgZXZlbnQgYnkgXCIke25hbWV9XCIgcGx1Z2luLmAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbGlzdGVuTWV0aG9kID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWluc3RhbmNlW2xpc3Rlbk1ldGhvZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTWlzc2luZyBcIiR7bGlzdGVuTWV0aG9kfVwiIG1ldGhvZCBpbiBcIiR7bmFtZX1cIiBwbHVnaW5gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnN0YW5jZVByb21pc2UgPSBpbnN0YW5jZVtsaXN0ZW5NZXRob2RdKC4uLnBhcmFtZXRlcnMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2VQcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goaW5zdGFuY2VQcm9taXNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYEVycm9yIHRocm93biBpbiBcIiR7ZXZlbnROYW1lfVwiIHByb21pc2UgZXZlbnQgYnkgXCIke25hbWV9XCIgcGx1Z2luLmAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcihgTGlzdGVuIG1ldGhvZCBmb3IgXCIke2V2ZW50TmFtZX1cIiBldmVudCBpbiBcIiR7bmFtZX1cIiBwbHVnaW4gaXMgbm90IGEgZnVuY3Rpb24gb3Igc3RyaW5nLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBGaW5kIGFkLWhvYyBsaXN0ZW5lcnMgbGlzdGVuaW5nIHRvIHRoaXMgZXZlbnQuXG4gICAgICAgIGlmICh0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdICYmIHRoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5kZWJ1ZyhgRm91bmQgJHt0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdLmxlbmd0aH0gYWQtaG9jIGxpc3RlbmVyKHMpIGZvciBnbG9iYWwgcHJvbWlzZSBldmVudCBcIiR7ZXZlbnROYW1lfVwiYCk7XG5cbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0uZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaXN0ZW5lclByb21pc2UgPSBsaXN0ZW5lciguLi5wYXJhbWV0ZXJzKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpc3RlbmVyUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKGxpc3RlbmVyUHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgIGBFcnJvciB0aHJvd24gaW4gXCIke2V2ZW50TmFtZX1cIiBwcm9taXNlIGV2ZW50IGJ5IGFuIGFkLWhvYyBsaXN0ZW5lci5gLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvbWlzZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvZyBhIHN0eWxlZCBtZXNzYWdlIGluIHRoZSBjb25zb2xlLlxuICAgICAqXG4gICAgICogSW5jbHVkZXMgcGFyYW1ldGVycyBhbmQgYSBzdGFjayB0cmFjZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIGxvZ01lc3NhZ2UoY29sb3IsIGJvbGQsIG1lc3NhZ2UsIC4uLnBhcmFtZXRlcnMpIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgICAgICAgY29uc29sZS5ncm91cENvbGxhcHNlZChcbiAgICAgICAgICAgICclY1tTbm93Ym9hcmRdJyxcbiAgICAgICAgICAgIGBjb2xvcjogJHtjb2xvcn07IGZvbnQtd2VpZ2h0OiAkeyhib2xkKSA/ICdib2xkJyA6ICdub3JtYWwnfTtgLFxuICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICApO1xuICAgICAgICBpZiAocGFyYW1ldGVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoXG4gICAgICAgICAgICAgICAgYCVjUGFyYW1ldGVycyAlYygke3BhcmFtZXRlcnMubGVuZ3RofSlgLFxuICAgICAgICAgICAgICAgICdjb2xvcjogcmdiKDQ1LCAxNjcsIDE5OSk7IGZvbnQtd2VpZ2h0OiBib2xkOycsXG4gICAgICAgICAgICAgICAgJ2NvbG9yOiByZ2IoODgsIDg4LCA4OCk7IGZvbnQtd2VpZ2h0OiBub3JtYWw7J1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgICAgICBwYXJhbWV0ZXJzLmZvckVhY2goKHBhcmFtKSA9PiB7XG4gICAgICAgICAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJWMke2luZGV4fTpgLCAnY29sb3I6IHJnYig4OCwgODgsIDg4KTsgZm9udC13ZWlnaHQ6IG5vcm1hbDsnLCBwYXJhbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcblxuICAgICAgICAgICAgY29uc29sZS5ncm91cENvbGxhcHNlZCgnJWNUcmFjZScsICdjb2xvcjogcmdiKDQ1LCAxNjcsIDE5OSk7IGZvbnQtd2VpZ2h0OiBib2xkOycpO1xuICAgICAgICAgICAgY29uc29sZS50cmFjZSgpO1xuICAgICAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS50cmFjZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSAqL1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvZyBhIG1lc3NhZ2UuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBsb2cobWVzc2FnZSwgLi4ucGFyYW1ldGVycykge1xuICAgICAgICB0aGlzLmxvZ01lc3NhZ2UoJ3JnYig0NSwgMTY3LCAxOTkpJywgZmFsc2UsIG1lc3NhZ2UsIC4uLnBhcmFtZXRlcnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvZyBhIGRlYnVnIG1lc3NhZ2UuXG4gICAgICpcbiAgICAgKiBUaGVzZSBtZXNzYWdlcyBhcmUgb25seSBzaG93biB3aGVuIGRlYnVnZ2luZyBpcyBlbmFibGVkLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgZGVidWcobWVzc2FnZSwgLi4ucGFyYW1ldGVycykge1xuICAgICAgICBpZiAoIXRoaXMuZGVidWdFbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvZ01lc3NhZ2UoJ3JnYig0NSwgMTY3LCAxOTkpJywgZmFsc2UsIG1lc3NhZ2UsIC4uLnBhcmFtZXRlcnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvZ3MgYW4gZXJyb3IgbWVzc2FnZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIGVycm9yKG1lc3NhZ2UsIC4uLnBhcmFtZXRlcnMpIHtcbiAgICAgICAgdGhpcy5sb2dNZXNzYWdlKCdyZ2IoMjI5LCAzNSwgMzUpJywgdHJ1ZSwgbWVzc2FnZSwgLi4ucGFyYW1ldGVycyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFNub3dib2FyZCBmcm9tICcuL21haW4vU25vd2JvYXJkJztcbmltcG9ydCBQcm94eUhhbmRsZXIgZnJvbSAnLi9tYWluL1Byb3h5SGFuZGxlcic7XG5cbigod2luZG93KSA9PiB7XG4gICAgY29uc3Qgc25vd2JvYXJkID0gbmV3IFByb3h5KFxuICAgICAgICBuZXcgU25vd2JvYXJkKHRydWUsIHRydWUpLFxuICAgICAgICBQcm94eUhhbmRsZXIsXG4gICAgKTtcblxuICAgIC8vIENvdmVyIGFsbCBhbGlhc2VzXG4gICAgd2luZG93LnNub3dib2FyZCA9IHNub3dib2FyZDtcbiAgICB3aW5kb3cuU25vd2JvYXJkID0gc25vd2JvYXJkO1xuICAgIHdpbmRvdy5Tbm93Qm9hcmQgPSBzbm93Ym9hcmQ7XG59KSh3aW5kb3cpO1xuIiwiaW1wb3J0IEJhc2VDb29raWUgZnJvbSAnanMtY29va2llJztcbmltcG9ydCBTaW5nbGV0b24gZnJvbSAnLi4vYWJzdHJhY3RzL1NpbmdsZXRvbic7XG5cbi8qKlxuICogQ29va2llIHV0aWxpdHkuXG4gKlxuICogVGhpcyB1dGlsaXR5IGlzIGEgdGhpbiB3cmFwcGVyIGFyb3VuZCB0aGUgXCJqcy1jb29raWVcIiBsaWJyYXJ5LlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2pzLWNvb2tpZS9qcy1jb29raWVcbiAqIEBjb3B5cmlnaHQgMjAyMSBXaW50ZXIuXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb29raWUgZXh0ZW5kcyBTaW5nbGV0b24ge1xuICAgIGNvbnN0cnVjdCgpIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIGV4cGlyZXM6IG51bGwsXG4gICAgICAgICAgICBwYXRoOiAnLycsXG4gICAgICAgICAgICBkb21haW46IG51bGwsXG4gICAgICAgICAgICBzZWN1cmU6IGZhbHNlLFxuICAgICAgICAgICAgc2FtZVNpdGU6ICdMYXgnLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgZGVmYXVsdCBjb29raWUgcGFyYW1ldGVycyBmb3IgYWxsIHN1YnNlcXVlbnQgXCJzZXRcIiBhbmQgXCJyZW1vdmVcIiBjYWxscy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICovXG4gICAgc2V0RGVmYXVsdHMob3B0aW9ucykge1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nvb2tpZSBkZWZhdWx0cyBtdXN0IGJlIHByb3ZpZGVkIGFzIGFuIG9iamVjdCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmVudHJpZXMob3B0aW9ucykuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IGVudHJ5O1xuXG4gICAgICAgICAgICBpZiAodGhpcy5kZWZhdWx0c1trZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBjdXJyZW50IGRlZmF1bHQgY29va2llIHBhcmFtZXRlcnMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdldERlZmF1bHRzKCkge1xuICAgICAgICBjb25zdCBkZWZhdWx0cyA9IHt9O1xuXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMuZGVmYXVsdHMpLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSBlbnRyeTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZGVmYXVsdHNba2V5XSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGRlZmF1bHRzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGRlZmF1bHRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhIGNvb2tpZSBieSBuYW1lLlxuICAgICAqXG4gICAgICogSWYgYG5hbWVgIGlzIHVuZGVmaW5lZCwgcmV0dXJucyBhbGwgY29va2llcyBhcyBhbiBPYmplY3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R8U3RyaW5nfVxuICAgICAqL1xuICAgIGdldChuYW1lKSB7XG4gICAgICAgIGlmIChuYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvb2tpZXMgPSBCYXNlQ29va2llLmdldCgpO1xuXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhjb29raWVzKS5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtjb29raWVOYW1lLCBjb29raWVWYWx1ZV0gPSBlbnRyeTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdjb29raWUuZ2V0JywgY29va2llTmFtZSwgY29va2llVmFsdWUsIChuZXdWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb29raWVzW2Nvb2tpZU5hbWVdID0gbmV3VmFsdWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGNvb2tpZXM7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdmFsdWUgPSBCYXNlQ29va2llLmdldChuYW1lKTtcblxuICAgICAgICAvLyBBbGxvdyBwbHVnaW5zIHRvIG92ZXJyaWRlIHRoZSBnb3R0ZW4gdmFsdWVcbiAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2Nvb2tpZS5nZXQnLCBuYW1lLCB2YWx1ZSwgKG5ld1ZhbHVlKSA9PiB7XG4gICAgICAgICAgICB2YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGEgY29va2llIGJ5IG5hbWUuXG4gICAgICpcbiAgICAgKiBZb3UgY2FuIHNwZWNpZnkgYWRkaXRpb25hbCBjb29raWUgcGFyYW1ldGVycyB0aHJvdWdoIHRoZSBcIm9wdGlvbnNcIiBwYXJhbWV0ZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBzZXQobmFtZSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgbGV0IHNhdmVWYWx1ZSA9IHZhbHVlO1xuXG4gICAgICAgIC8vIEFsbG93IHBsdWdpbnMgdG8gb3ZlcnJpZGUgdGhlIHZhbHVlIHRvIHNhdmVcbiAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2Nvb2tpZS5zZXQnLCBuYW1lLCB2YWx1ZSwgKG5ld1ZhbHVlKSA9PiB7XG4gICAgICAgICAgICBzYXZlVmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIEJhc2VDb29raWUuc2V0KG5hbWUsIHNhdmVWYWx1ZSwge1xuICAgICAgICAgICAgLi4udGhpcy5nZXREZWZhdWx0cygpLFxuICAgICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGEgY29va2llIGJ5IG5hbWUuXG4gICAgICpcbiAgICAgKiBZb3UgY2FuIHNwZWNpZnkgdGhlIGFkZGl0aW9uYWwgY29va2llIHBhcmFtZXRlcnMgdmlhIHRoZSBcIm9wdGlvbnNcIiBwYXJhbWV0ZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgcmVtb3ZlKG5hbWUsIG9wdGlvbnMpIHtcbiAgICAgICAgQmFzZUNvb2tpZS5yZW1vdmUobmFtZSwge1xuICAgICAgICAgICAgLi4udGhpcy5nZXREZWZhdWx0cygpLFxuICAgICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFNpbmdsZXRvbiBmcm9tICcuLi9hYnN0cmFjdHMvU2luZ2xldG9uJztcblxuLyoqXG4gKiBKU09OIFBhcnNlciB1dGlsaXR5LlxuICpcbiAqIFRoaXMgdXRpbGl0eSBwYXJzZXMgSlNPTi1saWtlIGRhdGEgdGhhdCBkb2VzIG5vdCBzdHJpY3RseSBtZWV0IHRoZSBKU09OIHNwZWNpZmljYXRpb25zIGluIG9yZGVyIHRvIHNpbXBsaWZ5IGRldmVsb3BtZW50LlxuICogSXQgaXMgYSBzYWZlIHJlcGxhY2VtZW50IGZvciBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGV2YWwoXCIoe1wiICsgdmFsdWUgKyBcIn0pXCIpKSkgdGhhdCBkb2VzIG5vdCByZXF1aXJlIHRoZSB1c2Ugb2YgZXZhbCgpXG4gKlxuICogQGF1dGhvciBBeXVtaSBIYW1hc2FraVxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL29jdG9iZXJjbXMvb2N0b2Jlci9wdWxsLzQ1MjdcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSnNvblBhcnNlciBleHRlbmRzIFNpbmdsZXRvbiB7XG4gICAgY29uc3RydWN0KCkge1xuICAgICAgICAvLyBBZGQgdG8gZ2xvYmFsIGZ1bmN0aW9uIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuICAgICAgICB3aW5kb3cud25KU09OID0gKGpzb24pID0+IHRoaXMucGFyc2UoanNvbik7XG4gICAgICAgIHdpbmRvdy5vY0pTT04gPSB3aW5kb3cud25KU09OO1xuICAgIH1cblxuICAgIHBhcnNlKHN0cikge1xuICAgICAgICBjb25zdCBqc29uU3RyaW5nID0gdGhpcy5wYXJzZVN0cmluZyhzdHIpO1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShqc29uU3RyaW5nKTtcbiAgICB9XG5cbiAgICBwYXJzZVN0cmluZyh2YWx1ZSkge1xuICAgICAgICBsZXQgc3RyID0gdmFsdWUudHJpbSgpO1xuXG4gICAgICAgIGlmICghc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdCcm9rZW4gSlNPTiBvYmplY3QuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgICAgIGxldCB0eXBlID0gbnVsbDtcbiAgICAgICAgbGV0IGtleSA9IG51bGw7XG4gICAgICAgIGxldCBib2R5ID0gJyc7XG5cbiAgICAgICAgLypcbiAgICAgICAgKiB0aGUgbWlzdGFrZSAnLCdcbiAgICAgICAgKi9cbiAgICAgICAgd2hpbGUgKHN0ciAmJiBzdHJbMF0gPT09ICcsJykge1xuICAgICAgICAgICAgc3RyID0gc3RyLnN1YnN0cigxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qXG4gICAgICAgICogc3RyaW5nXG4gICAgICAgICovXG4gICAgICAgIGlmIChzdHJbMF0gPT09ICdcIicgfHwgc3RyWzBdID09PSAnXFwnJykge1xuICAgICAgICAgICAgaWYgKHN0cltzdHIubGVuZ3RoIC0gMV0gIT09IHN0clswXSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdHJpbmcgSlNPTiBvYmplY3QuJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJvZHkgPSAnXCInO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzdHIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2ldID09PSAnXFxcXCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltpICsgMV0gPT09ICdcXCcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5ICs9IHN0cltpICsgMV07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5ICs9IHN0cltpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkgKz0gc3RyW2kgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpICs9IDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdHJbaV0gPT09IHN0clswXSkge1xuICAgICAgICAgICAgICAgICAgICBib2R5ICs9ICdcIic7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBib2R5O1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RyW2ldID09PSAnXCInKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHkgKz0gJ1xcXFxcIic7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keSArPSBzdHJbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nIEpTT04gb2JqZWN0LicpO1xuICAgICAgICB9XG5cbiAgICAgICAgLypcbiAgICAgICAgKiBib29sZWFuXG4gICAgICAgICovXG4gICAgICAgIGlmIChzdHIgPT09ICd0cnVlJyB8fCBzdHIgPT09ICdmYWxzZScpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHI7XG4gICAgICAgIH1cblxuICAgICAgICAvKlxuICAgICAgICAqIG51bGxcbiAgICAgICAgKi9cbiAgICAgICAgaWYgKHN0ciA9PT0gJ251bGwnKSB7XG4gICAgICAgICAgICByZXR1cm4gJ251bGwnO1xuICAgICAgICB9XG5cbiAgICAgICAgLypcbiAgICAgICAgKiBudW1iZXJcbiAgICAgICAgKi9cbiAgICAgICAgY29uc3QgbnVtID0gTnVtYmVyKHN0cik7XG4gICAgICAgIGlmICghTnVtYmVyLmlzTmFOKG51bSkpIHtcbiAgICAgICAgICAgIHJldHVybiBudW0udG9TdHJpbmcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qXG4gICAgICAgICogb2JqZWN0XG4gICAgICAgICovXG4gICAgICAgIGlmIChzdHJbMF0gPT09ICd7Jykge1xuICAgICAgICAgICAgdHlwZSA9ICduZWVkS2V5JztcbiAgICAgICAgICAgIGtleSA9IG51bGw7XG4gICAgICAgICAgICByZXN1bHQgPSAneyc7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc3RyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNCbGFua0NoYXIoc3RyW2ldKSkge1xuICAgICAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnbmVlZEtleScgJiYgKHN0cltpXSA9PT0gJ1wiJyB8fCBzdHJbaV0gPT09ICdcXCcnKSkge1xuICAgICAgICAgICAgICAgICAgICBrZXkgPSB0aGlzLnBhcnNlS2V5KHN0ciwgaSArIDEsIHN0cltpXSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSBgXCIke2tleX1cImA7XG4gICAgICAgICAgICAgICAgICAgIGkgKz0ga2V5Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgaSArPSAxO1xuICAgICAgICAgICAgICAgICAgICB0eXBlID0gJ2FmdGVyS2V5JztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICduZWVkS2V5JyAmJiB0aGlzLmNhbkJlS2V5SGVhZChzdHJbaV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGtleSA9IHRoaXMucGFyc2VLZXkoc3RyLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9ICdcIic7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSBrZXk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnXCInO1xuICAgICAgICAgICAgICAgICAgICBpICs9IGtleS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICB0eXBlID0gJ2FmdGVyS2V5JztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdhZnRlcktleScgJiYgc3RyW2ldID09PSAnOicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9ICc6JztcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9ICc6JztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICc6Jykge1xuICAgICAgICAgICAgICAgICAgICBib2R5ID0gdGhpcy5nZXRCb2R5KHN0ciwgaSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaSA9IGkgKyBib2R5Lm9yaWdpbkxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSB0aGlzLnBhcnNlU3RyaW5nKGJvZHkuYm9keSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9ICdhZnRlckJvZHknO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2FmdGVyQm9keScgfHwgdHlwZSA9PT0gJ25lZWRLZXknKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsYXN0ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHN0cltsYXN0XSA9PT0gJywnIHx8IHRoaXMuaXNCbGFua0NoYXIoc3RyW2xhc3RdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdCArPSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbbGFzdF0gPT09ICd9JyAmJiBsYXN0ID09PSBzdHIubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV0gPT09ICcsJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5zdWJzdHIoMCwgcmVzdWx0Lmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9ICd9JztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3QgIT09IGkgJiYgcmVzdWx0ICE9PSAneycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnLCc7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gJ25lZWRLZXknO1xuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IGxhc3QgLSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEJyb2tlbiBKU09OIG9iamVjdCBuZWFyICR7cmVzdWx0fWApO1xuICAgICAgICB9XG5cbiAgICAgICAgLypcbiAgICAgICAgKiBhcnJheVxuICAgICAgICAqL1xuICAgICAgICBpZiAoc3RyWzBdID09PSAnWycpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9ICdbJztcbiAgICAgICAgICAgIHR5cGUgPSAnbmVlZEJvZHknO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzdHIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2ldID09PSAnICcgfHwgc3RyW2ldID09PSAnXFxuJyB8fCBzdHJbaV0gPT09ICdcXHQnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICduZWVkQm9keScpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltpXSA9PT0gJywnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gJ251bGwsJztcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltpXSA9PT0gJ10nICYmIGkgPT09IHN0ci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0W3Jlc3VsdC5sZW5ndGggLSAxXSA9PT0gJywnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnN1YnN0cigwLCByZXN1bHQubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gJ10nO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGJvZHkgPSB0aGlzLmdldEJvZHkoc3RyLCBpKTtcblxuICAgICAgICAgICAgICAgICAgICBpID0gaSArIGJvZHkub3JpZ2luTGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IHRoaXMucGFyc2VTdHJpbmcoYm9keS5ib2R5KTtcblxuICAgICAgICAgICAgICAgICAgICB0eXBlID0gJ2FmdGVyQm9keSc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnYWZ0ZXJCb2R5Jykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ldID09PSAnLCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnLCc7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gJ25lZWRCb2R5JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGVhbCB3aXRoIG1pc3Rha2UgXCIsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChzdHJbaSArIDFdID09PSAnLCcgfHwgdGhpcy5pc0JsYW5rQ2hhcihzdHJbaSArIDFdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaSArIDFdID09PSAnLCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9ICdudWxsLCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdHJbaV0gPT09ICddJyAmJiBpID09PSBzdHIubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9ICddJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQnJva2VuIEpTT04gYXJyYXkgbmVhciAke3Jlc3VsdH1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBnZXRCb2R5KHN0ciwgcG9zKSB7XG4gICAgICAgIGxldCBib2R5ID0gJyc7XG5cbiAgICAgICAgLy8gcGFyc2Ugc3RyaW5nIGJvZHlcbiAgICAgICAgaWYgKHN0cltwb3NdID09PSAnXCInIHx8IHN0cltwb3NdID09PSAnXFwnJykge1xuICAgICAgICAgICAgYm9keSA9IHN0cltwb3NdO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gcG9zICsgMTsgaSA8IHN0ci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbaV0gPT09ICdcXFxcJykge1xuICAgICAgICAgICAgICAgICAgICBib2R5ICs9IHN0cltpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgKyAxIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keSArPSBzdHJbaSArIDFdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGkgKz0gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0cltpXSA9PT0gc3RyW3Bvc10pIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keSArPSBzdHJbcG9zXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbkxlbmd0aDogYm9keS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5LFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHkgKz0gc3RyW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBCcm9rZW4gSlNPTiBzdHJpbmcgYm9keSBuZWFyICR7Ym9keX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBhcnNlIHRydWUgLyBmYWxzZVxuICAgICAgICBpZiAoc3RyW3Bvc10gPT09ICd0Jykge1xuICAgICAgICAgICAgaWYgKHN0ci5pbmRleE9mKCd0cnVlJywgcG9zKSA9PT0gcG9zKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luTGVuZ3RoOiAndHJ1ZScubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICBib2R5OiAndHJ1ZScsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBCcm9rZW4gSlNPTiBib29sZWFuIGJvZHkgbmVhciAke3N0ci5zdWJzdHIoMCwgcG9zICsgMTApfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdHJbcG9zXSA9PT0gJ2YnKSB7XG4gICAgICAgICAgICBpZiAoc3RyLmluZGV4T2YoJ2YnLCBwb3MpID09PSBwb3MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBvcmlnaW5MZW5ndGg6ICdmYWxzZScubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICBib2R5OiAnZmFsc2UnLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQnJva2VuIEpTT04gYm9vbGVhbiBib2R5IG5lYXIgJHtzdHIuc3Vic3RyKDAsIHBvcyArIDEwKX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBhcnNlIG51bGxcbiAgICAgICAgaWYgKHN0cltwb3NdID09PSAnbicpIHtcbiAgICAgICAgICAgIGlmIChzdHIuaW5kZXhPZignbnVsbCcsIHBvcykgPT09IHBvcykge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbkxlbmd0aDogJ251bGwnLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogJ251bGwnLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQnJva2VuIEpTT04gYm9vbGVhbiBib2R5IG5lYXIgJHtzdHIuc3Vic3RyKDAsIHBvcyArIDEwKX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBhcnNlIG51bWJlclxuICAgICAgICBpZiAoc3RyW3Bvc10gPT09ICctJyB8fCBzdHJbcG9zXSA9PT0gJysnIHx8IHN0cltwb3NdID09PSAnLicgfHwgKHN0cltwb3NdID49ICcwJyAmJiBzdHJbcG9zXSA8PSAnOScpKSB7XG4gICAgICAgICAgICBib2R5ID0gJyc7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBwb3M7IGkgPCBzdHIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2ldID09PSAnLScgfHwgc3RyW2ldID09PSAnKycgfHwgc3RyW2ldID09PSAnLicgfHwgKHN0cltpXSA+PSAnMCcgJiYgc3RyW2ldIDw9ICc5JykpIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keSArPSBzdHJbaV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbkxlbmd0aDogYm9keS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5LFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBCcm9rZW4gSlNPTiBudW1iZXIgYm9keSBuZWFyICR7Ym9keX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBhcnNlIG9iamVjdFxuICAgICAgICBpZiAoc3RyW3Bvc10gPT09ICd7JyB8fCBzdHJbcG9zXSA9PT0gJ1snKSB7XG4gICAgICAgICAgICBjb25zdCBzdGFjayA9IFtcbiAgICAgICAgICAgICAgICBzdHJbcG9zXSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBib2R5ID0gc3RyW3Bvc107XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBwb3MgKyAxOyBpIDwgc3RyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgYm9keSArPSBzdHJbaV07XG4gICAgICAgICAgICAgICAgaWYgKHN0cltpXSA9PT0gJ1xcXFwnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpICsgMSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkgKz0gc3RyW2kgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpICs9IDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdHJbaV0gPT09ICdcIicpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdID09PSAnXCInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGFja1tzdGFjay5sZW5ndGggLSAxXSAhPT0gJ1xcJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goc3RyW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RyW2ldID09PSAnXFwnJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0gPT09ICdcXCcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGFja1tzdGFjay5sZW5ndGggLSAxXSAhPT0gJ1wiJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaChzdHJbaV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGFja1tzdGFjay5sZW5ndGggLSAxXSAhPT0gJ1wiJyAmJiBzdGFja1tzdGFjay5sZW5ndGggLSAxXSAhPT0gJ1xcJycpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltpXSA9PT0gJ3snKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKCd7Jyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RyW2ldID09PSAnfScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGFja1tzdGFjay5sZW5ndGggLSAxXSA9PT0gJ3snKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQnJva2VuIEpTT04gJHsoc3RyW3Bvc10gPT09ICd7JyA/ICdvYmplY3QnIDogJ2FycmF5Jyl9IGJvZHkgbmVhciAke2JvZHl9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RyW2ldID09PSAnWycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goJ1snKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdHJbaV0gPT09ICddJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdID09PSAnWycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBCcm9rZW4gSlNPTiAkeyhzdHJbcG9zXSA9PT0gJ3snID8gJ29iamVjdCcgOiAnYXJyYXknKX0gYm9keSBuZWFyICR7Ym9keX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIXN0YWNrLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luTGVuZ3RoOiBpIC0gcG9zLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQnJva2VuIEpTT04gJHsoc3RyW3Bvc10gPT09ICd7JyA/ICdvYmplY3QnIDogJ2FycmF5Jyl9IGJvZHkgbmVhciAke2JvZHl9YCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEJyb2tlbiBKU09OIGJvZHkgbmVhciAke3N0ci5zdWJzdHIoKHBvcyAtIDUgPj0gMCkgPyBwb3MgLSA1IDogMCwgNTApfWApO1xuICAgIH1cblxuICAgIHBhcnNlS2V5KHN0ciwgcG9zLCBxdW90ZSkge1xuICAgICAgICBsZXQga2V5ID0gJyc7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IHBvczsgaSA8IHN0ci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKHF1b3RlICYmIHF1b3RlID09PSBzdHJbaV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFxdW90ZSAmJiAoc3RyW2ldID09PSAnICcgfHwgc3RyW2ldID09PSAnOicpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAga2V5ICs9IHN0cltpXTtcblxuICAgICAgICAgICAgaWYgKHN0cltpXSA9PT0gJ1xcXFwnICYmIGkgKyAxIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGtleSArPSBzdHJbaSArIDFdO1xuICAgICAgICAgICAgICAgIGkgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQnJva2VuIEpTT04gc3ludGF4IG5lYXIgJHtrZXl9YCk7XG4gICAgfVxuXG4gICAgY2FuQmVLZXlIZWFkKGNoKSB7XG4gICAgICAgIGlmIChjaFswXSA9PT0gJ1xcXFwnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChjaFswXSA+PSAnYScgJiYgY2hbMF0gPD0gJ3onKSB8fCAoY2hbMF0gPj0gJ0EnICYmIGNoWzBdIDw9ICdaJykgfHwgY2hbMF0gPT09ICdfJykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoWzBdID49ICcwJyAmJiBjaFswXSA8PSAnOScpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaFswXSA9PT0gJyQnKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2guY2hhckNvZGVBdCgwKSA+IDI1NSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaXNCbGFua0NoYXIoY2gpIHtcbiAgICAgICAgcmV0dXJuIGNoID09PSAnICcgfHwgY2ggPT09ICdcXG4nIHx8IGNoID09PSAnXFx0JztcbiAgICB9XG59XG4iLCJpbXBvcnQgU2luZ2xldG9uIGZyb20gJy4uL2Fic3RyYWN0cy9TaW5nbGV0b24nO1xuXG4vKipcbiAqIFNhbml0aXplciB1dGlsaXR5LlxuICpcbiAqIENsaWVudC1zaWRlIEhUTUwgc2FuaXRpemVyIGRlc2lnbmVkIG1vc3RseSB0byBwcmV2ZW50IHNlbGYtWFNTIGF0dGFja3MuXG4gKiBUaGUgc2FuaXRpemVyIHV0aWxpdHkgd2lsbCBzdHJpcCBhbGwgYXR0cmlidXRlcyB0aGF0IHN0YXJ0IHdpdGggYG9uYCAodXN1YWxseSBKUyBldmVudCBoYW5kbGVycyBhcyBhdHRyaWJ1dGVzLCBpLmUuIGBvbmxvYWRgIG9yIGBvbmVycm9yYCkgb3IgY29udGFpbiB0aGUgYGphdmFzY3JpcHQ6YCBwc2V1ZG8gcHJvdG9jb2wgaW4gdGhlaXIgdmFsdWVzLlxuICpcbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNhbml0aXplciBleHRlbmRzIFNpbmdsZXRvbiB7XG4gICAgY29uc3RydWN0KCkge1xuICAgICAgICAvLyBBZGQgdG8gZ2xvYmFsIGZ1bmN0aW9uIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuICAgICAgICB3aW5kb3cud25TYW5pdGl6ZSA9IChodG1sKSA9PiB0aGlzLnNhbml0aXplKGh0bWwpO1xuICAgICAgICB3aW5kb3cub2NTYW5pdGl6ZSA9IHdpbmRvdy53blNhbml0aXplO1xuICAgIH1cblxuICAgIHNhbml0aXplKGh0bWwsIGJvZHlPbmx5KSB7XG4gICAgICAgIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICAgICAgY29uc3QgZG9tID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhodG1sLCAndGV4dC9odG1sJyk7XG4gICAgICAgIGNvbnN0IHJldHVybkJvZHlPbmx5ID0gKGJvZHlPbmx5ICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGJvZHlPbmx5ID09PSAnYm9vbGVhbicpXG4gICAgICAgICAgICA/IGJvZHlPbmx5XG4gICAgICAgICAgICA6IHRydWU7XG5cbiAgICAgICAgdGhpcy5zYW5pdGl6ZU5vZGUoZG9tLmdldFJvb3ROb2RlKCkpO1xuXG4gICAgICAgIHJldHVybiAocmV0dXJuQm9keU9ubHkpID8gZG9tLmJvZHkuaW5uZXJIVE1MIDogZG9tLmlubmVySFRNTDtcbiAgICB9XG5cbiAgICBzYW5pdGl6ZU5vZGUobm9kZSkge1xuICAgICAgICBpZiAobm9kZS50YWdOYW1lID09PSAnU0NSSVBUJykge1xuICAgICAgICAgICAgbm9kZS5yZW1vdmUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHJpbUF0dHJpYnV0ZXMobm9kZSk7XG5cbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBBcnJheS5mcm9tKG5vZGUuY2hpbGRyZW4pO1xuXG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNhbml0aXplTm9kZShjaGlsZCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRyaW1BdHRyaWJ1dGVzKG5vZGUpIHtcbiAgICAgICAgaWYgKCFub2RlLmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZS5hdHRyaWJ1dGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBjb25zdCBhdHRyTmFtZSA9IG5vZGUuYXR0cmlidXRlcy5pdGVtKGkpLm5hbWU7XG4gICAgICAgICAgICBjb25zdCBhdHRyVmFsdWUgPSBub2RlLmF0dHJpYnV0ZXMuaXRlbShpKS52YWx1ZTtcblxuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICogcmVtb3ZlIGF0dHJpYnV0ZXMgd2hlcmUgdGhlIG5hbWVzIHN0YXJ0IHdpdGggXCJvblwiIChmb3IgZXhhbXBsZTogb25sb2FkLCBvbmVycm9yLi4uKVxuICAgICAgICAgICAgKiByZW1vdmUgYXR0cmlidXRlcyB3aGVyZSB0aGUgdmFsdWUgc3RhcnRzIHdpdGggdGhlIFwiamF2YXNjcmlwdDpcIiBwc2V1ZG8gcHJvdG9jb2wgKGZvciBleGFtcGxlIGhyZWY9XCJqYXZhc2NyaXB0OmFsZXJ0KDEpXCIpXG4gICAgICAgICAgICAqL1xuICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG4gICAgICAgICAgICBpZiAoYXR0ck5hbWUuaW5kZXhPZignb24nKSA9PT0gMCB8fCBhdHRyVmFsdWUuaW5kZXhPZignamF2YXNjcmlwdDonKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKGF0dHJOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBTaW5nbGV0b24gZnJvbSAnLi4vYWJzdHJhY3RzL1NpbmdsZXRvbic7XG5cbi8qKlxuICogVVJMIHV0aWxpdHkuXG4gKlxuICogVGhpcyB1dGlsaXR5IHByb3ZpZGVzIFVSTCBmdW5jdGlvbnMuXG4gKlxuICogQGNvcHlyaWdodCAyMDIyIFdpbnRlci5cbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVybCBleHRlbmRzIFNpbmdsZXRvbiB7XG4gICAgY29uc3RydWN0KCkge1xuICAgICAgICB0aGlzLmZvdW5kQmFzZVVybCA9IG51bGw7XG4gICAgICAgIHRoaXMuZm91bmRBc3NldFVybCA9IG51bGw7XG4gICAgICAgIHRoaXMuYmFzZVVybCgpO1xuICAgICAgICB0aGlzLmFzc2V0VXJsKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBhIFVSTCBiYXNlZCBvbiBhIHJlbGF0aXZlIHBhdGguXG4gICAgICpcbiAgICAgKiBJZiBhbiBhYnNvbHV0ZSBVUkwgaXMgcHJvdmlkZWQsIGl0IHdpbGwgYmUgcmV0dXJuZWQgdW5jaGFuZ2VkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgdG8odXJsKSB7XG4gICAgICAgIGNvbnN0IHVybFJlZ2V4ID0gL14oPzpbXjpdKzpcXC9cXC8pWy1hLXowLTlAOiUuXyt+Iz1dezEsMjU2fVxcYihbLWEtejAtOSgpQDolXysufiM/Ji8vPV0qKS9pO1xuXG4gICAgICAgIGlmICh1cmwubWF0Y2godXJsUmVnZXgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGhlVXJsID0gdXJsLnJlcGxhY2UoL15cXC8rLywgJycpO1xuXG4gICAgICAgIHJldHVybiBgJHt0aGlzLmJhc2VVcmwoKX0ke3RoZVVybH1gO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgYW4gQXNzZXQgVVJMIGJhc2VkIG9uIGEgcmVsYXRpdmUgcGF0aC5cbiAgICAgKlxuICAgICAqIElmIGFuIGFic29sdXRlIFVSTCBpcyBwcm92aWRlZCwgaXQgd2lsbCBiZSByZXR1cm5lZCB1bmNoYW5nZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBhc3NldCh1cmwpIHtcbiAgICAgICAgY29uc3QgdXJsUmVnZXggPSAvXig/OlteOl0rOlxcL1xcLylbLWEtejAtOUA6JS5fK34jPV17MSwyNTZ9XFxiKFstYS16MC05KClAOiVfKy5+Iz8mLy89XSopL2k7XG5cbiAgICAgICAgaWYgKHVybC5tYXRjaCh1cmxSZWdleCkpIHtcbiAgICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0aGVVcmwgPSB1cmwucmVwbGFjZSgvXlxcLysvLCAnJyk7XG5cbiAgICAgICAgcmV0dXJuIGAke3RoaXMuYXNzZXRVcmwoKX0ke3RoZVVybH1gO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhlbHBlciBtZXRob2QgdG8gZ2V0IHRoZSBiYXNlIFVSTCBvZiB0aGlzIGluc3RhbGwuXG4gICAgICpcbiAgICAgKiBUaGlzIGRldGVybWluZXMgdGhlIGJhc2UgVVJMIGZyb20gdGhyZWUgc291cmNlcywgaW4gb3JkZXI6XG4gICAgICogIC0gSWYgU25vd2JvYXJkIGlzIGxvYWRlZCB2aWEgdGhlIGB7JSBzbm93Ym9hcmQgJX1gIHRhZywgaXQgd2lsbCByZXRyaWV2ZSB0aGUgYmFzZSBVUkwgdGhhdFxuICAgICAqIGlzIGF1dG9tYXRpY2FsbHkgaW5jbHVkZWQgdGhlcmUuXG4gICAgICogIC0gSWYgYSBgPGJhc2U+YCB0YWcgaXMgYXZhaWxhYmxlLCBpdCB3aWxsIHVzZSB0aGUgVVJMIHNwZWNpZmllZCBpbiB0aGUgYmFzZSB0YWcuXG4gICAgICogIC0gRmluYWxseSwgaXQgd2lsbCB0YWtlIGEgZ3Vlc3MgZnJvbSB0aGUgY3VycmVudCBsb2NhdGlvbi4gVGhpcyB3aWxsIGxpa2VseSBub3Qgd29yayBmb3Igc2l0ZXNcbiAgICAgKiB0aGF0IHJlc2lkZSBpbiBzdWJkaXJlY3Rvcmllcy5cbiAgICAgKlxuICAgICAqIFRoZSBiYXNlIFVSTCB3aWxsIGFsd2F5cyBjb250YWluIGEgdHJhaWxpbmcgYmFja3NsYXNoLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBiYXNlVXJsKCkge1xuICAgICAgICBpZiAodGhpcy5mb3VuZEJhc2VVcmwgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvdW5kQmFzZVVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbZGF0YS1tb2R1bGU9XCJzbm93Ym9hcmQtYmFzZVwiXScpICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmZvdW5kQmFzZVVybCA9IHRoaXMudmFsaWRhdGVCYXNlVXJsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NjcmlwdFtkYXRhLW1vZHVsZT1cInNub3dib2FyZC1iYXNlXCJdJykuZGF0YXNldC5iYXNlVXJsKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvdW5kQmFzZVVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdiYXNlJykgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZm91bmRCYXNlVXJsID0gdGhpcy52YWxpZGF0ZUJhc2VVcmwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYmFzZScpLmdldEF0dHJpYnV0ZSgnaHJlZicpKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvdW5kQmFzZVVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVybFBhcnRzID0gW1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnByb3RvY29sLFxuICAgICAgICAgICAgJy8vJyxcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ob3N0LFxuICAgICAgICAgICAgJy8nLFxuICAgICAgICBdO1xuICAgICAgICB0aGlzLmZvdW5kQmFzZVVybCA9IHVybFBhcnRzLmpvaW4oJycpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmZvdW5kQmFzZVVybDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgbWV0aG9kIHRvIGdldCB0aGUgYXNzZXQgVVJMIG9mIHRoaXMgaW5zdGFsbC5cbiAgICAgKlxuICAgICAqIFRoaXMgZGV0ZXJtaW5lcyB0aGUgYmFzZSBVUkwgZnJvbSB0aHJlZSBzb3VyY2VzLCBpbiBvcmRlcjpcbiAgICAgKiAgLSBJZiBTbm93Ym9hcmQgaXMgbG9hZGVkIHZpYSB0aGUgYHslIHNub3dib2FyZCAlfWAgdGFnLCBpdCB3aWxsIHJldHJpZXZlIHRoZSBhc3NldCBVUkwgdGhhdFxuICAgICAqIGlzIGF1dG9tYXRpY2FsbHkgaW5jbHVkZWQgdGhlcmUuXG4gICAgICogIC0gSWYgYSBgPGxpbmsgcmVsPVwiYXNzZXRfdXJsXCIgaHJlZj1cImh0dHBzOi8vZXhhbXBsZS5jb21cIj5gIHRhZyBpcyBhdmFpbGFibGUsIGl0IHdpbGwgdXNlIHRoZSBVUkwgc3BlY2lmaWVkIGluIHRoZSBsaW5rIHRhZy5cbiAgICAgKiAgLSBGaW5hbGx5LCBpdCB3aWxsIHRha2UgYSBndWVzcyBmcm9tIHRoZSBjdXJyZW50IGxvY2F0aW9uLiBUaGlzIHdpbGwgbGlrZWx5IG5vdCB3b3JrIGZvciBzaXRlc1xuICAgICAqIHRoYXQgcmVzaWRlIGluIHN1YmRpcmVjdG9yaWVzLlxuICAgICAqXG4gICAgICogVGhlIGFzc2V0IFVSTCB3aWxsIGFsd2F5cyBjb250YWluIGEgdHJhaWxpbmcgYmFja3NsYXNoLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBhc3NldFVybCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZm91bmRBc3NldFVybCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm91bmRBc3NldFVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbZGF0YS1tb2R1bGU9XCJzbm93Ym9hcmQtYmFzZVwiXScpICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmZvdW5kQXNzZXRVcmwgPSB0aGlzLnZhbGlkYXRlQmFzZVVybChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbZGF0YS1tb2R1bGU9XCJzbm93Ym9hcmQtYmFzZVwiXScpLmRhdGFzZXQuYXNzZXRVcmwpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm91bmRBc3NldFVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsaW5rW3JlbD1cImFzc2V0X3VybFwiXScpICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmZvdW5kQXNzZXRVcmwgPSB0aGlzLnZhbGlkYXRlQmFzZVVybChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsaW5rW3JlbD1cImFzc2V0X3VybFwiXScpLmdldEF0dHJpYnV0ZSgnaHJlZicpKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvdW5kQXNzZXRVcmw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1cmxQYXJ0cyA9IFtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCxcbiAgICAgICAgICAgICcvLycsXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaG9zdCxcbiAgICAgICAgICAgICcvJyxcbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy5mb3VuZEFzc2V0VXJsID0gdXJsUGFydHMuam9pbignJyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZm91bmRBc3NldFVybDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZXMgdGhlIGJhc2UgVVJMLCBlbnN1cmluZyBpdCBpcyBhIEhUVFAvSFRUUHMgVVJMLlxuICAgICAqXG4gICAgICogSWYgdGhlIFNub3dib2FyZCBzY3JpcHQgb3IgPGJhc2U+IHRhZyBvbiB0aGUgcGFnZSB1c2UgYSBkaWZmZXJlbnQgdHlwZSBvZiBVUkwsIHRoaXMgd2lsbCBmYWlsIHdpdGhcbiAgICAgKiBhbiBlcnJvci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIHZhbGlkYXRlQmFzZVVybCh1cmwpIHtcbiAgICAgICAgY29uc3QgdXJsUmVnZXggPSAvXigoW146Lz8jXSspOik/KFxcL1xcLyhbXi8/I10qKSk/KFtePyNdKikoXFw/KFteI10qKSk/KCMoLiopKT8vaTtcbiAgICAgICAgY29uc3QgdXJsUGFydHMgPSB1cmxSZWdleC5leGVjKHVybCk7XG4gICAgICAgIGNvbnN0IHByb3RvY29sID0gdXJsUGFydHNbMl07XG4gICAgICAgIGNvbnN0IGRvbWFpbiA9IHVybFBhcnRzWzRdO1xuXG4gICAgICAgIGlmIChwcm90b2NvbCAmJiBbJ2h0dHAnLCAnaHR0cHMnXS5pbmRleE9mKHByb3RvY29sLnRvTG93ZXJDYXNlKCkpID09PSAtMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGJhc2UgVVJMIGRldGVjdGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFkb21haW4pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBiYXNlIFVSTCBkZXRlY3RlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICh1cmwuc3Vic3RyKC0xKSA9PT0gJy8nKVxuICAgICAgICAgICAgPyB1cmxcbiAgICAgICAgICAgIDogYCR7dXJsfS9gO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJQbHVnaW5CYXNlIiwic25vd2JvYXJkIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJjb25zdHJ1Y3QiLCJkZXBlbmRlbmNpZXMiLCJsaXN0ZW5zIiwiZGVzdHJ1Y3QiLCJkZXRhY2giLCJkZXN0cnVjdG9yIiwiZGVmYXVsdCIsIlNpbmdsZXRvbiIsIl9QbHVnaW5CYXNlIiwiX2NhbGxTdXBlciIsImFyZ3VtZW50cyIsIl9pbmhlcml0cyIsImdldCIsInRhcmdldCIsInByb3AiLCJyZWNlaXZlciIsInByb3BMb3dlciIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJFcnJvciIsImNvbmNhdCIsImhhc1BsdWdpbiIsIl9SZWZsZWN0JGdldCRwcm9wTG93ZSIsIlJlZmxlY3QiLCJnZXRJbnN0YW5jZSIsImFwcGx5IiwiaGFzIiwiSW5uZXJQcm94eUhhbmRsZXIiLCJQbHVnaW5Mb2FkZXIiLCJuYW1lIiwiaW5zdGFuY2UiLCJQcm94eSIsIk9iamVjdCIsImZyZWV6ZSIsImluc3RhbmNlcyIsInNpbmdsZXRvbiIsImluaXRpYWxpc2VkIiwic2VhbCIsIm1vY2tzIiwib3JpZ2luYWxGdW5jdGlvbnMiLCJwcm90b3R5cGUiLCJoYXNNZXRob2QiLCJtZXRob2ROYW1lIiwiaXNGdW5jdGlvbiIsImNhbGxNZXRob2QiLCJfbGVuIiwibGVuZ3RoIiwicGFyYW1ldGVycyIsIkFycmF5IiwiX2tleSIsImFyZ3MiLCJzaGlmdCIsIl90aGlzIiwiX2xlbjIiLCJfa2V5MiIsImRlcGVuZGVuY2llc0Z1bGZpbGxlZCIsInVubWV0IiwiZ2V0RGVwZW5kZW5jaWVzIiwiZmlsdGVyIiwiaXRlbSIsImdldFBsdWdpbk5hbWVzIiwiam9pbiIsImlzU2luZ2xldG9uIiwiaW5pdGlhbGlzZVNpbmdsZXRvbiIsImtleXMiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiX2VudHJ5IiwiX3NsaWNlZFRvQXJyYXkiLCJjYWxsYmFjayIsIl9lbnRyeTIiLCJfbGVuMyIsInBhcmFtcyIsIl9rZXkzIiwiX2VudHJ5MyIsIl9lbnRyeTQiLCJfbGVuNCIsIl9rZXk0IiwibmV3SW5zdGFuY2UiLCJfY29uc3RydWN0Iiwic3BsaWNlIiwiaW5kZXhPZiIsInB1c2giLCJnZXRJbnN0YW5jZXMiLCJpc0luaXRpYWxpc2VkIiwiX3RoaXMyIiwiX2xlbjUiLCJfa2V5NSIsIm1hcCIsIl90aGlzMyIsImZ1bGZpbGxlZCIsInBsdWdpbiIsIm1vY2siLCJfdGhpczQiLCJfbGVuNiIsIl9rZXk2IiwidW5tb2NrIiwiQ29va2llIiwiSnNvblBhcnNlciIsIlNhbml0aXplciIsIlVybCIsIlNub3dib2FyZCIsImF1dG9TaW5nbGV0b25zIiwiZGVidWciLCJkZWJ1Z0VuYWJsZWQiLCJhdXRvSW5pdFNpbmdsZXRvbnMiLCJwbHVnaW5zIiwibGlzdGVuZXJzIiwiZm91bmRCYXNlVXJsIiwicmVhZGluZXNzIiwiZG9tIiwiYXR0YWNoQWJzdHJhY3RzIiwibG9hZFV0aWxpdGllcyIsImluaXRpYWxpc2UiLCJhZGRQbHVnaW4iLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaW5pdGlhbGlzZVNpbmdsZXRvbnMiLCJnbG9iYWxFdmVudCIsInZhbHVlcyIsImxvd2VyTmFtZSIsInVuZGVmaW5lZCIsImdldFBsdWdpbnMiLCJyZWFkeU1ldGhvZCIsInJlYWR5IiwicmVtb3ZlUGx1Z2luIiwiZ2V0UGx1Z2luIiwibGlzdGVuc1RvRXZlbnQiLCJldmVudE5hbWUiLCJvbiIsIm9mZiIsImluZGV4IiwiY2FuY2VsbGVkIiwibGlzdGVuTWV0aG9kIiwicmVzdWx0IiwiZXJyb3IiLCJsaXN0ZW5lciIsImdsb2JhbFByb21pc2VFdmVudCIsIlByb21pc2UiLCJyZXNvbHZlIiwicHJvbWlzZXMiLCJpbnN0YW5jZVByb21pc2UiLCJsaXN0ZW5lclByb21pc2UiLCJhbGwiLCJsb2dNZXNzYWdlIiwiY29sb3IiLCJib2xkIiwibWVzc2FnZSIsImNvbnNvbGUiLCJncm91cENvbGxhcHNlZCIsInBhcmFtIiwibG9nIiwiZ3JvdXBFbmQiLCJ0cmFjZSIsIlByb3h5SGFuZGxlciIsIlNub3dCb2FyZCIsIkJhc2VDb29raWUiLCJfU2luZ2xldG9uIiwiZGVmYXVsdHMiLCJleHBpcmVzIiwicGF0aCIsImRvbWFpbiIsInNlY3VyZSIsInNhbWVTaXRlIiwic2V0RGVmYXVsdHMiLCJvcHRpb25zIiwiX3R5cGVvZiIsImdldERlZmF1bHRzIiwiY29va2llcyIsImNvb2tpZU5hbWUiLCJjb29raWVWYWx1ZSIsIm5ld1ZhbHVlIiwic2V0Iiwic2F2ZVZhbHVlIiwiX29iamVjdFNwcmVhZCIsInJlbW92ZSIsInduSlNPTiIsImpzb24iLCJwYXJzZSIsIm9jSlNPTiIsInN0ciIsImpzb25TdHJpbmciLCJwYXJzZVN0cmluZyIsIkpTT04iLCJ0cmltIiwidHlwZSIsImJvZHkiLCJzdWJzdHIiLCJpIiwibnVtIiwiTnVtYmVyIiwiaXNOYU4iLCJ0b1N0cmluZyIsImlzQmxhbmtDaGFyIiwicGFyc2VLZXkiLCJjYW5CZUtleUhlYWQiLCJnZXRCb2R5Iiwib3JpZ2luTGVuZ3RoIiwibGFzdCIsInBvcyIsInN0YWNrIiwicG9wIiwicXVvdGUiLCJjaCIsImNoYXJDb2RlQXQiLCJ3blNhbml0aXplIiwiaHRtbCIsInNhbml0aXplIiwib2NTYW5pdGl6ZSIsImJvZHlPbmx5IiwicGFyc2VyIiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwicmV0dXJuQm9keU9ubHkiLCJzYW5pdGl6ZU5vZGUiLCJnZXRSb290Tm9kZSIsImlubmVySFRNTCIsIm5vZGUiLCJ0YWdOYW1lIiwidHJpbUF0dHJpYnV0ZXMiLCJjaGlsZHJlbiIsImZyb20iLCJjaGlsZCIsImF0dHJpYnV0ZXMiLCJhdHRyTmFtZSIsImF0dHJWYWx1ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImZvdW5kQXNzZXRVcmwiLCJiYXNlVXJsIiwiYXNzZXRVcmwiLCJ0byIsInVybCIsInVybFJlZ2V4IiwibWF0Y2giLCJ0aGVVcmwiLCJyZXBsYWNlIiwiYXNzZXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWxpZGF0ZUJhc2VVcmwiLCJkYXRhc2V0IiwiZ2V0QXR0cmlidXRlIiwidXJsUGFydHMiLCJsb2NhdGlvbiIsInByb3RvY29sIiwiaG9zdCIsImV4ZWMiXSwic291cmNlUm9vdCI6IiJ9