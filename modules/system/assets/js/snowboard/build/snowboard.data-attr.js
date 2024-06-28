"use strict";
(self["webpackChunk_wintercms_wn_system_module"] = self["webpackChunk_wintercms_wn_system_module"] || []).push([["/assets/js/snowboard/build/snowboard.data-attr"],{

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

/***/ "./assets/js/snowboard/ajax/handlers/AttributeRequest.js":
/*!***************************************************************!*\
  !*** ./assets/js/snowboard/ajax/handlers/AttributeRequest.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AttributeRequest)
/* harmony export */ });
/* harmony import */ var _abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../abstracts/Singleton */ "./assets/js/snowboard/abstracts/Singleton.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
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
 * Enable Data Attributes API for AJAX requests.
 *
 * This is an extension of the base AJAX functionality that includes handling of HTML data attributes for processing
 * AJAX requests. It is separated from the base AJAX functionality to allow developers to opt-out of data attribute
 * requests if they do not intend to use them.
 *
 * @copyright 2021 Winter.
 * @author Ben Thomson <git@alfreido.com>
 */
var AttributeRequest = /*#__PURE__*/function (_Singleton) {
  function AttributeRequest() {
    _classCallCheck(this, AttributeRequest);
    return _callSuper(this, AttributeRequest, arguments);
  }
  _inherits(AttributeRequest, _Singleton);
  return _createClass(AttributeRequest, [{
    key: "listens",
    value:
    /**
     * Listeners.
     *
     * @returns {Object}
     */
    function listens() {
      return {
        ready: 'ready',
        ajaxSetup: 'onAjaxSetup'
      };
    }

    /**
     * Ready event callback.
     *
     * Attaches handlers to the window to listen for all request interactions.
     */
  }, {
    key: "ready",
    value: function ready() {
      this.attachHandlers();
      this.disableDefaultFormValidation();
    }

    /**
     * Dependencies.
     *
     * @returns {string[]}
     */
  }, {
    key: "dependencies",
    value: function dependencies() {
      return ['request', 'jsonParser'];
    }

    /**
     * Destructor.
     *
     * Detaches all handlers.
     */
  }, {
    key: "destruct",
    value: function destruct() {
      this.detachHandlers();
      _get(_getPrototypeOf(AttributeRequest.prototype), "destruct", this).call(this);
    }

    /**
     * Attaches the necessary handlers for all request interactions.
     */
  }, {
    key: "attachHandlers",
    value: function attachHandlers() {
      var _this = this;
      window.addEventListener('change', function (event) {
        return _this.changeHandler(event);
      });
      window.addEventListener('click', function (event) {
        return _this.clickHandler(event);
      });
      window.addEventListener('keydown', function (event) {
        return _this.keyDownHandler(event);
      });
      window.addEventListener('submit', function (event) {
        return _this.submitHandler(event);
      });
    }

    /**
     * Disables default form validation for AJAX forms.
     *
     * A form that contains a `data-request` attribute to specify an AJAX call without including a `data-browser-validate`
     * attribute means that the AJAX callback function will likely be handling the validation instead.
     */
  }, {
    key: "disableDefaultFormValidation",
    value: function disableDefaultFormValidation() {
      document.querySelectorAll('form[data-request]:not([data-browser-validate])').forEach(function (form) {
        form.setAttribute('novalidate', true);
      });
    }

    /**
     * Detaches the necessary handlers for all request interactions.
     */
  }, {
    key: "detachHandlers",
    value: function detachHandlers() {
      var _this2 = this;
      window.removeEventListener('change', function (event) {
        return _this2.changeHandler(event);
      });
      window.removeEventListener('click', function (event) {
        return _this2.clickHandler(event);
      });
      window.removeEventListener('keydown', function (event) {
        return _this2.keyDownHandler(event);
      });
      window.removeEventListener('submit', function (event) {
        return _this2.submitHandler(event);
      });
    }

    /**
     * Handles changes to select, radio, checkbox and file inputs.
     *
     * @param {Event} event
     */
  }, {
    key: "changeHandler",
    value: function changeHandler(event) {
      // Check that we are changing a valid element
      if (!event.target.matches('select[data-request], input[type=radio][data-request], input[type=checkbox][data-request], input[type=file][data-request]')) {
        return;
      }
      this.processRequestOnElement(event.target);
    }

    /**
     * Handles clicks on hyperlinks and buttons.
     *
     * This event can bubble up the hierarchy to find a suitable request element.
     *
     * @param {Event} event
     */
  }, {
    key: "clickHandler",
    value: function clickHandler(event) {
      var currentElement = event.target;
      while (currentElement && currentElement.tagName !== 'HTML') {
        if (!currentElement.matches('a[data-request], button[data-request], input[type=button][data-request], input[type=submit][data-request]')) {
          currentElement = currentElement.parentElement;
        } else {
          event.preventDefault();
          this.processRequestOnElement(currentElement);
          break;
        }
      }
    }

    /**
     * Handles key presses on inputs
     *
     * @param {Event} event
     */
  }, {
    key: "keyDownHandler",
    value: function keyDownHandler(event) {
      // Check that we are inputting into a valid element
      if (!event.target.matches('input')) {
        return;
      }

      // Check that the input type is valid
      var validTypes = ['checkbox', 'color', 'date', 'datetime', 'datetime-local', 'email', 'image', 'month', 'number', 'password', 'radio', 'range', 'search', 'tel', 'text', 'time', 'url', 'week'];
      if (validTypes.indexOf(event.target.getAttribute('type')) === -1) {
        return;
      }
      if (event.key === 'Enter' && event.target.matches('*[data-request]')) {
        this.processRequestOnElement(event.target);
        event.preventDefault();
        event.stopImmediatePropagation();
      } else if (event.target.matches('*[data-track-input]')) {
        this.trackInput(event.target);
      }
    }

    /**
     * Handles form submissions.
     *
     * @param {Event} event
     */
  }, {
    key: "submitHandler",
    value: function submitHandler(event) {
      // Check that we are submitting a valid form
      if (!event.target.matches('form[data-request]')) {
        return;
      }
      event.preventDefault();
      this.processRequestOnElement(event.target);
    }

    /**
     * Processes a request on a given element, using its data attributes.
     *
     * @param {HTMLElement} element
     */
  }, {
    key: "processRequestOnElement",
    value: function processRequestOnElement(element) {
      var data = element.dataset;
      var handler = String(data.request);
      var options = {
        confirm: 'requestConfirm' in data ? String(data.requestConfirm) : null,
        redirect: 'requestRedirect' in data ? String(data.requestRedirect) : null,
        loading: 'requestLoading' in data ? String(data.requestLoading) : null,
        flash: 'requestFlash' in data,
        files: 'requestFiles' in data,
        browserValidate: 'requestBrowserValidate' in data,
        form: 'requestForm' in data ? String(data.requestForm) : null,
        url: 'requestUrl' in data ? String(data.requestUrl) : null,
        update: 'requestUpdate' in data ? this.parseData(String(data.requestUpdate)) : [],
        data: 'requestData' in data ? this.parseData(String(data.requestData)) : []
      };
      this.snowboard.request(element, handler, options);
    }

    /**
     * Sets up an AJAX request via HTML attributes.
     *
     * @param {Request} request
     */
  }, {
    key: "onAjaxSetup",
    value: function onAjaxSetup(request) {
      if (!request.element) {
        return;
      }
      var fieldName = request.element.getAttribute('name');
      var data = _objectSpread(_objectSpread({}, this.getParentRequestData(request.element)), request.options.data);
      if (request.element && request.element.matches('input, textarea, select, button') && !request.form && fieldName && !request.options.data[fieldName]) {
        data[fieldName] = request.element.value;
      }
      request.options.data = data;
    }

    /**
     * Parses and collates all data from elements up the DOM hierarchy.
     *
     * @param {Element} target
     * @returns {Object}
     */
  }, {
    key: "getParentRequestData",
    value: function getParentRequestData(target) {
      var _this3 = this;
      var elements = [];
      var data = {};
      var currentElement = target;
      while (currentElement.parentElement && currentElement.parentElement.tagName !== 'HTML') {
        elements.push(currentElement.parentElement);
        currentElement = currentElement.parentElement;
      }
      elements.reverse();
      elements.forEach(function (element) {
        var elementData = element.dataset;
        if ('requestData' in elementData) {
          data = _objectSpread(_objectSpread({}, data), _this3.parseData(elementData.requestData));
        }
      });
      return data;
    }

    /**
     * Parses data in the Winter/October JSON format.
     *
     * @param {String} data
     * @returns {Object}
     */
  }, {
    key: "parseData",
    value: function parseData(data) {
      var value;
      if (data === undefined) {
        value = '';
      }
      if (_typeof(value) === 'object') {
        return value;
      }
      try {
        return this.snowboard.jsonparser().parse("{".concat(data, "}"));
      } catch (e) {
        throw new Error("Error parsing the data attribute on element: ".concat(e.message));
      }
    }
  }, {
    key: "trackInput",
    value: function trackInput(element) {
      var _this4 = this;
      var lastValue = element.dataset.lastValue;
      var interval = element.dataset.trackInput || 300;
      if (lastValue !== undefined && lastValue === element.value) {
        return;
      }
      this.resetTrackInputTimer(element);
      element.dataset.inputTimer = window.setTimeout(function () {
        if (element.dataset.request) {
          _this4.processRequestOnElement(element);
          return;
        }

        // Traverse up the hierarchy and find a form that sends an AJAX query
        var currentElement = element;
        while (currentElement.parentElement && currentElement.parentElement.tagName !== 'HTML') {
          currentElement = currentElement.parentElement;
          if (currentElement.tagName === 'FORM' && currentElement.dataset.request) {
            _this4.processRequestOnElement(currentElement);
            break;
          }
        }
      }, interval);
    }
  }, {
    key: "resetTrackInputTimer",
    value: function resetTrackInputTimer(element) {
      if (element.dataset.inputTimer) {
        window.clearTimeout(element.dataset.inputTimer);
        element.dataset.inputTimer = null;
      }
    }
  }]);
}(_abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./assets/js/snowboard/snowboard.data-attr.js":
/*!****************************************************!*\
  !*** ./assets/js/snowboard/snowboard.data-attr.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ajax_handlers_AttributeRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajax/handlers/AttributeRequest */ "./assets/js/snowboard/ajax/handlers/AttributeRequest.js");

if (window.Snowboard === undefined) {
  throw new Error('Snowboard must be loaded in order to use the HTML data attribute AJAX request feature.');
}
(function (Snowboard) {
  Snowboard.addPlugin('attributeRequest', _ajax_handlers_AttributeRequest__WEBPACK_IMPORTED_MODULE_0__["default"]);
})(window.Snowboard);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./assets/js/snowboard/snowboard.data-attr.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2Fzc2V0cy9qcy9zbm93Ym9hcmQvYnVpbGQvc25vd2JvYXJkLmRhdGEtYXR0ci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBLElBUXFCQSxVQUFVO0VBQzNCO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSSxTQUFBQSxXQUFZQyxTQUFTLEVBQUU7SUFBQUMsZUFBQSxPQUFBRixVQUFBO0lBQ25CLElBQUksQ0FBQ0MsU0FBUyxHQUFHQSxTQUFTO0VBQzlCOztFQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUxJLE9BQUFFLFlBQUEsQ0FBQUgsVUFBQTtJQUFBSSxHQUFBO0lBQUFDLEtBQUEsRUFNQSxTQUFBQyxVQUFBLEVBQVksQ0FDWjs7SUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBSkk7SUFBQUYsR0FBQTtJQUFBQyxLQUFBLEVBS0EsU0FBQUUsYUFBQSxFQUFlO01BQ1gsT0FBTyxFQUFFO0lBQ2I7O0lBRUE7QUFDSjtBQUNBO0FBQ0E7QUFDQTtFQUpJO0lBQUFILEdBQUE7SUFBQUMsS0FBQSxFQUtBLFNBQUFHLFFBQUEsRUFBVTtNQUNOLE9BQU8sQ0FBQyxDQUFDO0lBQ2I7O0lBRUE7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBTEk7SUFBQUosR0FBQTtJQUFBQyxLQUFBLEVBTUEsU0FBQUksU0FBQSxFQUFXO01BQ1AsSUFBSSxDQUFDQyxNQUFNLENBQUMsQ0FBQztNQUNiLE9BQU8sSUFBSSxDQUFDVCxTQUFTO0lBQ3pCOztJQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFKSTtJQUFBRyxHQUFBO0lBQUFDLEtBQUEsRUFLQSxTQUFBTSxXQUFBLEVBQWE7TUFDVCxJQUFJLENBQUNGLFFBQVEsQ0FBQyxDQUFDO0lBQ25CO0VBQUM7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRVk7O0FBRWpCO0FBQ0E7QUFD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QUFDVSxPQUFPLENBQUM7VUFDckM7UUFDSjs7UUFFQTtRQUNBLElBQUlULGNBQWMsR0FBR1MsT0FBTztRQUM1QixPQUFPVCxjQUFjLENBQUNFLGFBQWEsSUFBSUYsY0FBYyxDQUFDRSxhQUFhLENBQUNELE9BQU8sS0FBSyxNQUFNLEVBQUU7VUFDcEZELGNBQWMsR0FBR0EsY0FBYyxDQUFDRSxhQUFhO1VBRTdDLElBQUlGLGNBQWMsQ0FBQ0MsT0FBTyxLQUFLLE1BQU0sSUFBSUQsY0FBYyxDQUFDVyxPQUFPLENBQUNHLE9BQU8sRUFBRTtZQUNyRW1DLE1BQUksQ0FBQ2xELHVCQUF1QixDQUFDQyxjQUFjLENBQUM7WUFDNUM7VUFDSjtRQUNKO01BQ0osQ0FBQyxFQUFFbUQsUUFBUSxDQUFDO0lBQ2hCO0VBQUM7SUFBQTlGLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUE4RixxQkFBcUIzQyxPQUFPLEVBQUU7TUFDMUIsSUFBSUEsT0FBTyxDQUFDRSxPQUFPLENBQUMwQyxVQUFVLEVBQUU7UUFDNUJ0RSxNQUFNLENBQUN3RSxZQUFZLENBQUM5QyxPQUFPLENBQUNFLE9BQU8sQ0FBQzBDLFVBQVUsQ0FBQztRQUMvQzVDLE9BQU8sQ0FBQ0UsT0FBTyxDQUFDMEMsVUFBVSxHQUFHLElBQUk7TUFDckM7SUFDSjtFQUFDO0FBQUEsRUE3VHlDdkYsNERBQVM7Ozs7Ozs7Ozs7Ozs7QUNaaEM7QUFFdkIsSUFBSWlCLE1BQU0sQ0FBQ3lFLFNBQVMsS0FBS2YsU0FBUyxFQUFFO0VBQ2hDLE1BQU0sSUFBSU0sS0FBSyxDQUFDLHdGQUF3RixDQUFDO0FBQzdHO0FBRUEsQ0FBQyxVQUFDUyxTQUFTLEVBQUs7RUFDWkEsU0FBUyxDQUFDQyxTQUFTLENBQUMsa0JBQWtCLEVBQUV0Rix1RUFBZ0IsQ0FBQztBQUM3RCxDQUFDLEVBQUVZLE1BQU0sQ0FBQ3lFLFNBQVMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0B3aW50ZXJjbXMvd24tc3lzdGVtLW1vZHVsZS8uL2Fzc2V0cy9qcy9zbm93Ym9hcmQvYWJzdHJhY3RzL1BsdWdpbkJhc2UuanMiLCJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1zeXN0ZW0tbW9kdWxlLy4vYXNzZXRzL2pzL3Nub3dib2FyZC9hYnN0cmFjdHMvU2luZ2xldG9uLmpzIiwid2VicGFjazovL0B3aW50ZXJjbXMvd24tc3lzdGVtLW1vZHVsZS8uL2Fzc2V0cy9qcy9zbm93Ym9hcmQvYWpheC9oYW5kbGVycy9BdHRyaWJ1dGVSZXF1ZXN0LmpzIiwid2VicGFjazovL0B3aW50ZXJjbXMvd24tc3lzdGVtLW1vZHVsZS8uL2Fzc2V0cy9qcy9zbm93Ym9hcmQvc25vd2JvYXJkLmRhdGEtYXR0ci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFBsdWdpbiBiYXNlIGFic3RyYWN0LlxuICpcbiAqIFRoaXMgY2xhc3MgcHJvdmlkZXMgdGhlIGJhc2UgZnVuY3Rpb25hbGl0eSBmb3IgYWxsIHBsdWdpbnMuXG4gKlxuICogQGNvcHlyaWdodCAyMDIxIFdpbnRlci5cbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsdWdpbkJhc2Uge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yLlxuICAgICAqXG4gICAgICogVGhlIGNvbnN0cnVjdG9yIGlzIHByb3ZpZGVkIHRoZSBTbm93Ym9hcmQgZnJhbWV3b3JrIGluc3RhbmNlLCBhbmQgc2hvdWxkIG5vdCBiZSBvdmVyd3JpdHRlblxuICAgICAqIHVubGVzcyB5b3UgYWJzb2x1dGVseSBrbm93IHdoYXQgeW91J3JlIGRvaW5nLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTbm93Ym9hcmR9IHNub3dib2FyZFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNub3dib2FyZCkge1xuICAgICAgICB0aGlzLnNub3dib2FyZCA9IHNub3dib2FyZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQbHVnaW4gY29uc3RydWN0b3IuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBzaG91bGQgYmUgdHJlYXRlZCBhcyB0aGUgdHJ1ZSBjb25zdHJ1Y3RvciBvZiBhIHBsdWdpbiwgYW5kIGNhbiBiZSBvdmVyd3JpdHRlbi5cbiAgICAgKiBJdCB3aWxsIGJlIGNhbGxlZCBzdHJhaWdodCBhZnRlciBjb25zdHJ1Y3Rpb24uXG4gICAgICovXG4gICAgY29uc3RydWN0KCkge1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZmluZXMgdGhlIHJlcXVpcmVkIHBsdWdpbnMgZm9yIHRoaXMgc3BlY2lmaWMgbW9kdWxlIHRvIHdvcmsuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nW119IEFuIGFycmF5IG9mIHBsdWdpbnMgcmVxdWlyZWQgZm9yIHRoaXMgbW9kdWxlIHRvIHdvcmssIGFzIHN0cmluZ3MuXG4gICAgICovXG4gICAgZGVwZW5kZW5jaWVzKCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVmaW5lcyB0aGUgbGlzdGVuZXIgbWV0aG9kcyBmb3IgZ2xvYmFsIGV2ZW50cy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgbGlzdGVucygpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBsdWdpbiBkZXN0cnVjdG9yLlxuICAgICAqXG4gICAgICogRmlyZWQgd2hlbiB0aGlzIHBsdWdpbiBpcyByZW1vdmVkLiBDYW4gYmUgbWFudWFsbHkgY2FsbGVkIGlmIHlvdSBoYXZlIGFub3RoZXIgc2NlbmFyaW8gZm9yXG4gICAgICogZGVzdHJ1Y3Rpb24sIGllLiB0aGUgZWxlbWVudCBhdHRhY2hlZCB0byB0aGUgcGx1Z2luIGlzIHJlbW92ZWQgb3IgY2hhbmdlZC5cbiAgICAgKi9cbiAgICBkZXN0cnVjdCgpIHtcbiAgICAgICAgdGhpcy5kZXRhY2goKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuc25vd2JvYXJkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBsdWdpbiBkZXN0cnVjdG9yIChvbGQgbWV0aG9kIG5hbWUpLlxuICAgICAqXG4gICAgICogQWxsb3dzIHByZXZpb3VzIHVzYWdlIG9mIHRoZSBcImRlc3RydWN0b3JcIiBtZXRob2QgdG8gc3RpbGwgd29yay5cbiAgICAgKi9cbiAgICBkZXN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRlc3RydWN0KCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFBsdWdpbkJhc2UgZnJvbSAnLi9QbHVnaW5CYXNlJztcblxuLyoqXG4gKiBTaW5nbGV0b24gcGx1Z2luIGFic3RyYWN0LlxuICpcbiAqIFRoaXMgaXMgYSBzcGVjaWFsIGRlZmluaXRpb24gY2xhc3MgdGhhdCB0aGUgU25vd2JvYXJkIGZyYW1ld29yayB3aWxsIHVzZSB0byBpbnRlcnByZXQgdGhlIGN1cnJlbnQgcGx1Z2luIGFzIGFcbiAqIFwic2luZ2xldG9uXCIuIFRoaXMgd2lsbCBlbnN1cmUgdGhhdCBvbmx5IG9uZSBpbnN0YW5jZSBvZiB0aGUgcGx1Z2luIGNsYXNzIGlzIHVzZWQgYWNyb3NzIHRoZSBib2FyZC5cbiAqXG4gKiBTaW5nbGV0b25zIGFyZSBpbml0aWFsaXNlZCBvbiB0aGUgXCJkb21SZWFkeVwiIGV2ZW50IGJ5IGRlZmF1bHQuXG4gKlxuICogQGNvcHlyaWdodCAyMDIxIFdpbnRlci5cbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbmdsZXRvbiBleHRlbmRzIFBsdWdpbkJhc2Uge1xufVxuIiwiaW1wb3J0IFNpbmdsZXRvbiBmcm9tICcuLi8uLi9hYnN0cmFjdHMvU2luZ2xldG9uJztcblxuLyoqXG4gKiBFbmFibGUgRGF0YSBBdHRyaWJ1dGVzIEFQSSBmb3IgQUpBWCByZXF1ZXN0cy5cbiAqXG4gKiBUaGlzIGlzIGFuIGV4dGVuc2lvbiBvZiB0aGUgYmFzZSBBSkFYIGZ1bmN0aW9uYWxpdHkgdGhhdCBpbmNsdWRlcyBoYW5kbGluZyBvZiBIVE1MIGRhdGEgYXR0cmlidXRlcyBmb3IgcHJvY2Vzc2luZ1xuICogQUpBWCByZXF1ZXN0cy4gSXQgaXMgc2VwYXJhdGVkIGZyb20gdGhlIGJhc2UgQUpBWCBmdW5jdGlvbmFsaXR5IHRvIGFsbG93IGRldmVsb3BlcnMgdG8gb3B0LW91dCBvZiBkYXRhIGF0dHJpYnV0ZVxuICogcmVxdWVzdHMgaWYgdGhleSBkbyBub3QgaW50ZW5kIHRvIHVzZSB0aGVtLlxuICpcbiAqIEBjb3B5cmlnaHQgMjAyMSBXaW50ZXIuXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdHRyaWJ1dGVSZXF1ZXN0IGV4dGVuZHMgU2luZ2xldG9uIHtcbiAgICAvKipcbiAgICAgKiBMaXN0ZW5lcnMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGxpc3RlbnMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZWFkeTogJ3JlYWR5JyxcbiAgICAgICAgICAgIGFqYXhTZXR1cDogJ29uQWpheFNldHVwJyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWFkeSBldmVudCBjYWxsYmFjay5cbiAgICAgKlxuICAgICAqIEF0dGFjaGVzIGhhbmRsZXJzIHRvIHRoZSB3aW5kb3cgdG8gbGlzdGVuIGZvciBhbGwgcmVxdWVzdCBpbnRlcmFjdGlvbnMuXG4gICAgICovXG4gICAgcmVhZHkoKSB7XG4gICAgICAgIHRoaXMuYXR0YWNoSGFuZGxlcnMoKTtcbiAgICAgICAgdGhpcy5kaXNhYmxlRGVmYXVsdEZvcm1WYWxpZGF0aW9uKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVwZW5kZW5jaWVzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgICAqL1xuICAgIGRlcGVuZGVuY2llcygpIHtcbiAgICAgICAgcmV0dXJuIFsncmVxdWVzdCcsICdqc29uUGFyc2VyJ107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzdHJ1Y3Rvci5cbiAgICAgKlxuICAgICAqIERldGFjaGVzIGFsbCBoYW5kbGVycy5cbiAgICAgKi9cbiAgICBkZXN0cnVjdCgpIHtcbiAgICAgICAgdGhpcy5kZXRhY2hIYW5kbGVycygpO1xuXG4gICAgICAgIHN1cGVyLmRlc3RydWN0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXR0YWNoZXMgdGhlIG5lY2Vzc2FyeSBoYW5kbGVycyBmb3IgYWxsIHJlcXVlc3QgaW50ZXJhY3Rpb25zLlxuICAgICAqL1xuICAgIGF0dGFjaEhhbmRsZXJzKCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB0aGlzLmNoYW5nZUhhbmRsZXIoZXZlbnQpKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB0aGlzLmNsaWNrSGFuZGxlcihldmVudCkpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4gdGhpcy5rZXlEb3duSGFuZGxlcihldmVudCkpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB0aGlzLnN1Ym1pdEhhbmRsZXIoZXZlbnQpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEaXNhYmxlcyBkZWZhdWx0IGZvcm0gdmFsaWRhdGlvbiBmb3IgQUpBWCBmb3Jtcy5cbiAgICAgKlxuICAgICAqIEEgZm9ybSB0aGF0IGNvbnRhaW5zIGEgYGRhdGEtcmVxdWVzdGAgYXR0cmlidXRlIHRvIHNwZWNpZnkgYW4gQUpBWCBjYWxsIHdpdGhvdXQgaW5jbHVkaW5nIGEgYGRhdGEtYnJvd3Nlci12YWxpZGF0ZWBcbiAgICAgKiBhdHRyaWJ1dGUgbWVhbnMgdGhhdCB0aGUgQUpBWCBjYWxsYmFjayBmdW5jdGlvbiB3aWxsIGxpa2VseSBiZSBoYW5kbGluZyB0aGUgdmFsaWRhdGlvbiBpbnN0ZWFkLlxuICAgICAqL1xuICAgIGRpc2FibGVEZWZhdWx0Rm9ybVZhbGlkYXRpb24oKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm1bZGF0YS1yZXF1ZXN0XTpub3QoW2RhdGEtYnJvd3Nlci12YWxpZGF0ZV0pJykuZm9yRWFjaCgoZm9ybSkgPT4ge1xuICAgICAgICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ25vdmFsaWRhdGUnLCB0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0YWNoZXMgdGhlIG5lY2Vzc2FyeSBoYW5kbGVycyBmb3IgYWxsIHJlcXVlc3QgaW50ZXJhY3Rpb25zLlxuICAgICAqL1xuICAgIGRldGFjaEhhbmRsZXJzKCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB0aGlzLmNoYW5nZUhhbmRsZXIoZXZlbnQpKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB0aGlzLmNsaWNrSGFuZGxlcihldmVudCkpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4gdGhpcy5rZXlEb3duSGFuZGxlcihldmVudCkpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB0aGlzLnN1Ym1pdEhhbmRsZXIoZXZlbnQpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIGNoYW5nZXMgdG8gc2VsZWN0LCByYWRpbywgY2hlY2tib3ggYW5kIGZpbGUgaW5wdXRzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICAgKi9cbiAgICBjaGFuZ2VIYW5kbGVyKGV2ZW50KSB7XG4gICAgICAgIC8vIENoZWNrIHRoYXQgd2UgYXJlIGNoYW5naW5nIGEgdmFsaWQgZWxlbWVudFxuICAgICAgICBpZiAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKFxuICAgICAgICAgICAgJ3NlbGVjdFtkYXRhLXJlcXVlc3RdLCBpbnB1dFt0eXBlPXJhZGlvXVtkYXRhLXJlcXVlc3RdLCBpbnB1dFt0eXBlPWNoZWNrYm94XVtkYXRhLXJlcXVlc3RdLCBpbnB1dFt0eXBlPWZpbGVdW2RhdGEtcmVxdWVzdF0nLFxuICAgICAgICApKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByb2Nlc3NSZXF1ZXN0T25FbGVtZW50KGV2ZW50LnRhcmdldCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlcyBjbGlja3Mgb24gaHlwZXJsaW5rcyBhbmQgYnV0dG9ucy5cbiAgICAgKlxuICAgICAqIFRoaXMgZXZlbnQgY2FuIGJ1YmJsZSB1cCB0aGUgaGllcmFyY2h5IHRvIGZpbmQgYSBzdWl0YWJsZSByZXF1ZXN0IGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqL1xuICAgIGNsaWNrSGFuZGxlcihldmVudCkge1xuICAgICAgICBsZXQgY3VycmVudEVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG5cbiAgICAgICAgd2hpbGUgKGN1cnJlbnRFbGVtZW50ICYmIGN1cnJlbnRFbGVtZW50LnRhZ05hbWUgIT09ICdIVE1MJykge1xuICAgICAgICAgICAgaWYgKCFjdXJyZW50RWxlbWVudC5tYXRjaGVzKFxuICAgICAgICAgICAgICAgICdhW2RhdGEtcmVxdWVzdF0sIGJ1dHRvbltkYXRhLXJlcXVlc3RdLCBpbnB1dFt0eXBlPWJ1dHRvbl1bZGF0YS1yZXF1ZXN0XSwgaW5wdXRbdHlwZT1zdWJtaXRdW2RhdGEtcmVxdWVzdF0nLFxuICAgICAgICAgICAgKSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50ID0gY3VycmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NSZXF1ZXN0T25FbGVtZW50KGN1cnJlbnRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMga2V5IHByZXNzZXMgb24gaW5wdXRzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqL1xuICAgIGtleURvd25IYW5kbGVyKGV2ZW50KSB7XG4gICAgICAgIC8vIENoZWNrIHRoYXQgd2UgYXJlIGlucHV0dGluZyBpbnRvIGEgdmFsaWQgZWxlbWVudFxuICAgICAgICBpZiAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKFxuICAgICAgICAgICAgJ2lucHV0JyxcbiAgICAgICAgKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgdGhhdCB0aGUgaW5wdXQgdHlwZSBpcyB2YWxpZFxuICAgICAgICBjb25zdCB2YWxpZFR5cGVzID0gW1xuICAgICAgICAgICAgJ2NoZWNrYm94JyxcbiAgICAgICAgICAgICdjb2xvcicsXG4gICAgICAgICAgICAnZGF0ZScsXG4gICAgICAgICAgICAnZGF0ZXRpbWUnLFxuICAgICAgICAgICAgJ2RhdGV0aW1lLWxvY2FsJyxcbiAgICAgICAgICAgICdlbWFpbCcsXG4gICAgICAgICAgICAnaW1hZ2UnLFxuICAgICAgICAgICAgJ21vbnRoJyxcbiAgICAgICAgICAgICdudW1iZXInLFxuICAgICAgICAgICAgJ3Bhc3N3b3JkJyxcbiAgICAgICAgICAgICdyYWRpbycsXG4gICAgICAgICAgICAncmFuZ2UnLFxuICAgICAgICAgICAgJ3NlYXJjaCcsXG4gICAgICAgICAgICAndGVsJyxcbiAgICAgICAgICAgICd0ZXh0JyxcbiAgICAgICAgICAgICd0aW1lJyxcbiAgICAgICAgICAgICd1cmwnLFxuICAgICAgICAgICAgJ3dlZWsnLFxuICAgICAgICBdO1xuICAgICAgICBpZiAodmFsaWRUeXBlcy5pbmRleE9mKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKSkgPT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInICYmIGV2ZW50LnRhcmdldC5tYXRjaGVzKCcqW2RhdGEtcmVxdWVzdF0nKSkge1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzUmVxdWVzdE9uRWxlbWVudChldmVudC50YXJnZXQpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5tYXRjaGVzKCcqW2RhdGEtdHJhY2staW5wdXRdJykpIHtcbiAgICAgICAgICAgIHRoaXMudHJhY2tJbnB1dChldmVudC50YXJnZXQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlcyBmb3JtIHN1Ym1pc3Npb25zLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICAgKi9cbiAgICBzdWJtaXRIYW5kbGVyKGV2ZW50KSB7XG4gICAgICAgIC8vIENoZWNrIHRoYXQgd2UgYXJlIHN1Ym1pdHRpbmcgYSB2YWxpZCBmb3JtXG4gICAgICAgIGlmICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoXG4gICAgICAgICAgICAnZm9ybVtkYXRhLXJlcXVlc3RdJyxcbiAgICAgICAgKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB0aGlzLnByb2Nlc3NSZXF1ZXN0T25FbGVtZW50KGV2ZW50LnRhcmdldCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvY2Vzc2VzIGEgcmVxdWVzdCBvbiBhIGdpdmVuIGVsZW1lbnQsIHVzaW5nIGl0cyBkYXRhIGF0dHJpYnV0ZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAgICovXG4gICAgcHJvY2Vzc1JlcXVlc3RPbkVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICBjb25zdCBkYXRhID0gZWxlbWVudC5kYXRhc2V0O1xuXG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSBTdHJpbmcoZGF0YS5yZXF1ZXN0KTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNvbmZpcm06ICgncmVxdWVzdENvbmZpcm0nIGluIGRhdGEpID8gU3RyaW5nKGRhdGEucmVxdWVzdENvbmZpcm0pIDogbnVsbCxcbiAgICAgICAgICAgIHJlZGlyZWN0OiAoJ3JlcXVlc3RSZWRpcmVjdCcgaW4gZGF0YSkgPyBTdHJpbmcoZGF0YS5yZXF1ZXN0UmVkaXJlY3QpIDogbnVsbCxcbiAgICAgICAgICAgIGxvYWRpbmc6ICgncmVxdWVzdExvYWRpbmcnIGluIGRhdGEpID8gU3RyaW5nKGRhdGEucmVxdWVzdExvYWRpbmcpIDogbnVsbCxcbiAgICAgICAgICAgIGZsYXNoOiAoJ3JlcXVlc3RGbGFzaCcgaW4gZGF0YSksXG4gICAgICAgICAgICBmaWxlczogKCdyZXF1ZXN0RmlsZXMnIGluIGRhdGEpLFxuICAgICAgICAgICAgYnJvd3NlclZhbGlkYXRlOiAoJ3JlcXVlc3RCcm93c2VyVmFsaWRhdGUnIGluIGRhdGEpLFxuICAgICAgICAgICAgZm9ybTogKCdyZXF1ZXN0Rm9ybScgaW4gZGF0YSkgPyBTdHJpbmcoZGF0YS5yZXF1ZXN0Rm9ybSkgOiBudWxsLFxuICAgICAgICAgICAgdXJsOiAoJ3JlcXVlc3RVcmwnIGluIGRhdGEpID8gU3RyaW5nKGRhdGEucmVxdWVzdFVybCkgOiBudWxsLFxuICAgICAgICAgICAgdXBkYXRlOiAoJ3JlcXVlc3RVcGRhdGUnIGluIGRhdGEpID8gdGhpcy5wYXJzZURhdGEoU3RyaW5nKGRhdGEucmVxdWVzdFVwZGF0ZSkpIDogW10sXG4gICAgICAgICAgICBkYXRhOiAoJ3JlcXVlc3REYXRhJyBpbiBkYXRhKSA/IHRoaXMucGFyc2VEYXRhKFN0cmluZyhkYXRhLnJlcXVlc3REYXRhKSkgOiBbXSxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnNub3dib2FyZC5yZXF1ZXN0KGVsZW1lbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdXAgYW4gQUpBWCByZXF1ZXN0IHZpYSBIVE1MIGF0dHJpYnV0ZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1JlcXVlc3R9IHJlcXVlc3RcbiAgICAgKi9cbiAgICBvbkFqYXhTZXR1cChyZXF1ZXN0KSB7XG4gICAgICAgIGlmICghcmVxdWVzdC5lbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmaWVsZE5hbWUgPSByZXF1ZXN0LmVsZW1lbnQuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIC4uLnRoaXMuZ2V0UGFyZW50UmVxdWVzdERhdGEocmVxdWVzdC5lbGVtZW50KSxcbiAgICAgICAgICAgIC4uLnJlcXVlc3Qub3B0aW9ucy5kYXRhLFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChyZXF1ZXN0LmVsZW1lbnQgJiYgcmVxdWVzdC5lbGVtZW50Lm1hdGNoZXMoJ2lucHV0LCB0ZXh0YXJlYSwgc2VsZWN0LCBidXR0b24nKSAmJiAhcmVxdWVzdC5mb3JtICYmIGZpZWxkTmFtZSAmJiAhcmVxdWVzdC5vcHRpb25zLmRhdGFbZmllbGROYW1lXSkge1xuICAgICAgICAgICAgZGF0YVtmaWVsZE5hbWVdID0gcmVxdWVzdC5lbGVtZW50LnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdC5vcHRpb25zLmRhdGEgPSBkYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyBhbmQgY29sbGF0ZXMgYWxsIGRhdGEgZnJvbSBlbGVtZW50cyB1cCB0aGUgRE9NIGhpZXJhcmNoeS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0XG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBnZXRQYXJlbnRSZXF1ZXN0RGF0YSh0YXJnZXQpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBbXTtcbiAgICAgICAgbGV0IGRhdGEgPSB7fTtcbiAgICAgICAgbGV0IGN1cnJlbnRFbGVtZW50ID0gdGFyZ2V0O1xuXG4gICAgICAgIHdoaWxlIChjdXJyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50ICYmIGN1cnJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQudGFnTmFtZSAhPT0gJ0hUTUwnKSB7XG4gICAgICAgICAgICBlbGVtZW50cy5wdXNoKGN1cnJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQpO1xuICAgICAgICAgICAgY3VycmVudEVsZW1lbnQgPSBjdXJyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgZWxlbWVudHMucmV2ZXJzZSgpO1xuXG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnREYXRhID0gZWxlbWVudC5kYXRhc2V0O1xuXG4gICAgICAgICAgICBpZiAoJ3JlcXVlc3REYXRhJyBpbiBlbGVtZW50RGF0YSkge1xuICAgICAgICAgICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIC4uLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMucGFyc2VEYXRhKGVsZW1lbnREYXRhLnJlcXVlc3REYXRhKSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgZGF0YSBpbiB0aGUgV2ludGVyL09jdG9iZXIgSlNPTiBmb3JtYXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgcGFyc2VEYXRhKGRhdGEpIHtcbiAgICAgICAgbGV0IHZhbHVlO1xuXG4gICAgICAgIGlmIChkYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHZhbHVlID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zbm93Ym9hcmQuanNvbnBhcnNlcigpLnBhcnNlKGB7JHtkYXRhfX1gKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciBwYXJzaW5nIHRoZSBkYXRhIGF0dHJpYnV0ZSBvbiBlbGVtZW50OiAke2UubWVzc2FnZX1gKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRyYWNrSW5wdXQoZWxlbWVudCkge1xuICAgICAgICBjb25zdCB7IGxhc3RWYWx1ZSB9ID0gZWxlbWVudC5kYXRhc2V0O1xuICAgICAgICBjb25zdCBpbnRlcnZhbCA9IGVsZW1lbnQuZGF0YXNldC50cmFja0lucHV0IHx8IDMwMDtcblxuICAgICAgICBpZiAobGFzdFZhbHVlICE9PSB1bmRlZmluZWQgJiYgbGFzdFZhbHVlID09PSBlbGVtZW50LnZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlc2V0VHJhY2tJbnB1dFRpbWVyKGVsZW1lbnQpO1xuXG4gICAgICAgIGVsZW1lbnQuZGF0YXNldC5pbnB1dFRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQuZGF0YXNldC5yZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzUmVxdWVzdE9uRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFRyYXZlcnNlIHVwIHRoZSBoaWVyYXJjaHkgYW5kIGZpbmQgYSBmb3JtIHRoYXQgc2VuZHMgYW4gQUpBWCBxdWVyeVxuICAgICAgICAgICAgbGV0IGN1cnJlbnRFbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgICAgIHdoaWxlIChjdXJyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50ICYmIGN1cnJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQudGFnTmFtZSAhPT0gJ0hUTUwnKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudEVsZW1lbnQgPSBjdXJyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRFbGVtZW50LnRhZ05hbWUgPT09ICdGT1JNJyAmJiBjdXJyZW50RWxlbWVudC5kYXRhc2V0LnJlcXVlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzUmVxdWVzdE9uRWxlbWVudChjdXJyZW50RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgaW50ZXJ2YWwpO1xuICAgIH1cblxuICAgIHJlc2V0VHJhY2tJbnB1dFRpbWVyKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQuZGF0YXNldC5pbnB1dFRpbWVyKSB7XG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KGVsZW1lbnQuZGF0YXNldC5pbnB1dFRpbWVyKTtcbiAgICAgICAgICAgIGVsZW1lbnQuZGF0YXNldC5pbnB1dFRpbWVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBBdHRyaWJ1dGVSZXF1ZXN0IGZyb20gJy4vYWpheC9oYW5kbGVycy9BdHRyaWJ1dGVSZXF1ZXN0JztcblxuaWYgKHdpbmRvdy5Tbm93Ym9hcmQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignU25vd2JvYXJkIG11c3QgYmUgbG9hZGVkIGluIG9yZGVyIHRvIHVzZSB0aGUgSFRNTCBkYXRhIGF0dHJpYnV0ZSBBSkFYIHJlcXVlc3QgZmVhdHVyZS4nKTtcbn1cblxuKChTbm93Ym9hcmQpID0+IHtcbiAgICBTbm93Ym9hcmQuYWRkUGx1Z2luKCdhdHRyaWJ1dGVSZXF1ZXN0JywgQXR0cmlidXRlUmVxdWVzdCk7XG59KSh3aW5kb3cuU25vd2JvYXJkKTtcbiJdLCJuYW1lcyI6WyJQbHVnaW5CYXNlIiwic25vd2JvYXJkIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJjb25zdHJ1Y3QiLCJkZXBlbmRlbmNpZXMiLCJsaXN0ZW5zIiwiZGVzdHJ1Y3QiLCJkZXRhY2giLCJkZXN0cnVjdG9yIiwiZGVmYXVsdCIsIlNpbmdsZXRvbiIsIl9QbHVnaW5CYXNlIiwiX2NhbGxTdXBlciIsImFyZ3VtZW50cyIsIl9pbmhlcml0cyIsIkF0dHJpYnV0ZVJlcXVlc3QiLCJfU2luZ2xldG9uIiwicmVhZHkiLCJhamF4U2V0dXAiLCJhdHRhY2hIYW5kbGVycyIsImRpc2FibGVEZWZhdWx0Rm9ybVZhbGlkYXRpb24iLCJkZXRhY2hIYW5kbGVycyIsIl9nZXQiLCJfZ2V0UHJvdG90eXBlT2YiLCJwcm90b3R5cGUiLCJjYWxsIiwiX3RoaXMiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjaGFuZ2VIYW5kbGVyIiwiY2xpY2tIYW5kbGVyIiwia2V5RG93bkhhbmRsZXIiLCJzdWJtaXRIYW5kbGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImZvcm0iLCJzZXRBdHRyaWJ1dGUiLCJfdGhpczIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidGFyZ2V0IiwibWF0Y2hlcyIsInByb2Nlc3NSZXF1ZXN0T25FbGVtZW50IiwiY3VycmVudEVsZW1lbnQiLCJ0YWdOYW1lIiwicGFyZW50RWxlbWVudCIsInByZXZlbnREZWZhdWx0IiwidmFsaWRUeXBlcyIsImluZGV4T2YiLCJnZXRBdHRyaWJ1dGUiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJ0cmFja0lucHV0IiwiZWxlbWVudCIsImRhdGEiLCJkYXRhc2V0IiwiaGFuZGxlciIsIlN0cmluZyIsInJlcXVlc3QiLCJvcHRpb25zIiwiY29uZmlybSIsInJlcXVlc3RDb25maXJtIiwicmVkaXJlY3QiLCJyZXF1ZXN0UmVkaXJlY3QiLCJsb2FkaW5nIiwicmVxdWVzdExvYWRpbmciLCJmbGFzaCIsImZpbGVzIiwiYnJvd3NlclZhbGlkYXRlIiwicmVxdWVzdEZvcm0iLCJ1cmwiLCJyZXF1ZXN0VXJsIiwidXBkYXRlIiwicGFyc2VEYXRhIiwicmVxdWVzdFVwZGF0ZSIsInJlcXVlc3REYXRhIiwib25BamF4U2V0dXAiLCJmaWVsZE5hbWUiLCJfb2JqZWN0U3ByZWFkIiwiZ2V0UGFyZW50UmVxdWVzdERhdGEiLCJfdGhpczMiLCJlbGVtZW50cyIsInB1c2giLCJyZXZlcnNlIiwiZWxlbWVudERhdGEiLCJ1bmRlZmluZWQiLCJfdHlwZW9mIiwianNvbnBhcnNlciIsInBhcnNlIiwiY29uY2F0IiwiZSIsIkVycm9yIiwibWVzc2FnZSIsIl90aGlzNCIsImxhc3RWYWx1ZSIsImludGVydmFsIiwicmVzZXRUcmFja0lucHV0VGltZXIiLCJpbnB1dFRpbWVyIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsIlNub3dib2FyZCIsImFkZFBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=