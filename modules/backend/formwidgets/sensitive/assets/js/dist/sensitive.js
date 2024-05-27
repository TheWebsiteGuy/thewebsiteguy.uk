"use strict";
(self["webpackChunk_wintercms_wn_backend_module"] = self["webpackChunk_wintercms_wn_backend_module"] || []).push([["/formwidgets/sensitive/assets/js/dist/sensitive"],{

/***/ "./formwidgets/sensitive/assets/js/src/Sensitive.js":
/*!**********************************************************!*\
  !*** ./formwidgets/sensitive/assets/js/src/Sensitive.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _less_sensitive_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../less/sensitive.less */ "./formwidgets/sensitive/assets/less/sensitive.less");
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

(function (Snowboard) {
  /**
   * Sensitive form widget.
   *
   * Renders a text field that acts as a password or secret field, but can be revealed by the
   * user.
   *
   * @author Ben Thomson <git@alfreido.com>
   * @copyright 2023 Winter CMS
   */
  var Sensitive = /*#__PURE__*/function (_Snowboard$PluginBase) {
    function Sensitive() {
      _classCallCheck(this, Sensitive);
      return _callSuper(this, Sensitive, arguments);
    }
    _inherits(Sensitive, _Snowboard$PluginBase);
    return _createClass(Sensitive, [{
      key: "construct",
      value:
      /**
       * Constructor.
       *
       * @param {HTMLElement} element
       */
      function construct(element) {
        var _this = this;
        this.element = element;
        this.config = this.snowboard.dataConfig(this, element);
        this.clean = Boolean(element.dataset.clean);
        this.hidden = true;

        // Child elements
        this.input = element.querySelector('[data-input]');
        this.toggle = element.querySelector('[data-toggle]');
        this.icon = element.querySelector('[data-icon]');
        this.loader = element.querySelector('[data-loader]');
        this.copy = element.querySelector('[data-copy]');

        // Events
        this.events = {
          input: function input() {
            return _this.onInput();
          },
          toggle: function toggle() {
            return _this.onToggle();
          },
          tabChange: function tabChange() {
            return _this.onTabChange();
          },
          copy: function copy() {
            return _this.onCopy();
          }
        };
        this.attachEvents();
      }

      /**
       * Sets the default options for this widget.
       *
       * Available options:
       *
       *  - `data-read-only` - If set, this field will be read-only, but revealable.
       *  - `data-disabled` - If set, this field will be disabled, and unrevealable.
       *  - `data-event-handler=""` - Defines the AJAX event handler that will provide the revealed value.
       *  - `data-hide-on-tab-change` - If set, this field will be hidden when the browser is switched
       *      to another tab or minimized.
       *
       * @returns {Object}
       */
    }, {
      key: "defaults",
      value: function defaults() {
        return {
          readOnly: false,
          disabled: false,
          eventHandler: null,
          hideOnTabChange: false
        };
      }

      /**
       * Attaches event listeners for several interactions.
       */
    }, {
      key: "attachEvents",
      value: function attachEvents() {
        this.input.addEventListener('keydown', this.events.input);
        this.toggle.addEventListener('click', this.events.toggle);
        if (this.config.get('hideOnTabChange')) {
          // Watch for tab change or minimise
          document.addEventListener('visibilitychange', this.events.tabChange);
        }
        if (this.copy) {
          this.copy.addEventListener('click', this.events.copy);
        }
      }

      /**
       * Destructor.
       */
    }, {
      key: "destruct",
      value: function destruct() {
        this.input.removeEventListener('keydown', this.events.input);
        this.toggle.removeEventListener('click', this.events.toggle);
        if (this.config.get('hideOnTabChange')) {
          // Watch for tab change or minimise
          document.removeEventListener('visibilitychange', this.events.tabChange);
        }
        if (this.copy) {
          this.copy.removeEventListener('click', this.events.copy);
        }
        this.input = null;
        this.toggle = null;
        this.icon = null;
        this.loader = null;
        _get(_getPrototypeOf(Sensitive.prototype), "destruct", this).call(this);
      }

      /**
       * Input handler.
       *
       * Resets a clean field to empty if the user types anything in the field without revealing it.
       */
    }, {
      key: "onInput",
      value: function onInput() {
        if (this.clean) {
          this.clean = false;
          this.input.value = '';
        }
      }

      /**
       * Toggle handler.
       *
       * Reveals the value and toggles the visibility of a revealed value.
       */
    }, {
      key: "onToggle",
      value: function onToggle() {
        if (this.input.value !== '' && this.clean) {
          this.reveal();
        } else {
          this.toggleVisibility();
        }
      }

      /**
       * Tab change handler.
       *
       * Fires when the browser is minimized or switched to another tab. This will hide the value.
       */
    }, {
      key: "onTabChange",
      value: function onTabChange() {
        if (document.hidden && !this.hidden) {
          this.toggleVisibility();
        }
      }

      /**
       * Copy handler.
       *
       * Copies the value to the clipboard.
       */
    }, {
      key: "onCopy",
      value: function onCopy() {
        var _this2 = this;
        var promise = new Promise(function (resolve, reject) {
          if (_this2.input.value !== '' && _this2.clean) {
            _this2.reveal(resolve).then(function () {
              return resolve();
            }, function () {
              return reject();
            });
          } else {
            resolve();
          }
        });
        promise.then(function () {
          var isHidden = _this2.hidden;
          if (_this2.hidden) {
            _this2.toggleVisibility();
          }
          _this2.input.focus();
          _this2.input.select();
          try {
            var blob = new Blob([_this2.input.value], {
              type: 'text/plain'
            });
            var item = new ClipboardItem({
              'text/plain': blob
            });
            navigator.clipboard.write([item]);
          } catch (error) {
            _this2.snowboard.error("Clipboard API not supported - ".concat(error));
          }
          _this2.input.blur();
          if (isHidden) {
            _this2.toggleVisibility();
          }
        }, function (error) {
          _this2.snowboard.error("Unable to retrieve hidden value - ".concat(error));
        });
      }

      /**
       * Toggles the visibility of the value within the sensitive field.
       */
    }, {
      key: "toggleVisibility",
      value: function toggleVisibility() {
        this.input.setAttribute('type', this.hidden ? 'text' : 'password');
        this.icon.classList.toggle('icon-eye');
        this.icon.classList.toggle('icon-eye-slash');
        this.hidden = !this.hidden;
      }

      /**
       * Reveals the value of the sensitive field.
       *
       * This will call an AJAX event handler to retrieve the value, allowing for values to be
       * manipulated or controlled by the server.
       *
       * @returns {Promise}
       */
    }, {
      key: "reveal",
      value: function reveal() {
        var _this3 = this;
        return new Promise(function (resolve, reject) {
          // Show loader
          _this3.icon.style.visibility = 'hidden';
          _this3.loader.classList.remove('hide');
          _this3.snowboard.request(_this3.input, _this3.config.get('eventHandler'), {
            success: function success(data) {
              _this3.input.value = data.value;
              _this3.clean = false;

              // Hide loader and reveal
              _this3.icon.style.visibility = 'visible';
              _this3.loader.classList.add('hide');
              _this3.toggleVisibility();
              resolve();
            },
            error: function error(_error) {
              reject(new Error(_error));
            }
          });
        });
      }
    }]);
  }(Snowboard.PluginBase);
  Snowboard.addPlugin('backend.formwidget.sensitive', Sensitive);
  Snowboard['backend.ui.widgethandler']().register('sensitive', 'backend.formwidget.sensitive');
})(window.Snowboard);

/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-17.use[1]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-17.use[2]!../../node_modules/less-loader/dist/cjs.js!./formwidgets/sensitive/assets/less/sensitive.less":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-17.use[1]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-17.use[2]!../../node_modules/less-loader/dist/cjs.js!./formwidgets/sensitive/assets/less/sensitive.less ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "div[data-control=\"sensitive\"] a[data-toggle],\ndiv[data-control=\"sensitive\"] a[data-copy] {\n  box-shadow: none;\n  border: 1px solid #d1d6d9;\n  border-left: 0;\n}\n", "",{"version":3,"sources":["webpack://./formwidgets/sensitive/assets/less/sensitive.less"],"names":[],"mappings":"AAEA;;EAGQ,gBAAA;EACA,yBAAA;EACA,cAAA;AAFR","sourcesContent":["@import \"../../../../assets/less/core/boot.less\";\n\ndiv[data-control=\"sensitive\"] {\n    a[data-toggle],\n    a[data-copy] {\n        box-shadow: none;\n        border: 1px solid @input-group-addon-border-color;\n        border-left: 0;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./formwidgets/sensitive/assets/less/sensitive.less":
/*!**********************************************************!*\
  !*** ./formwidgets/sensitive/assets/less/sensitive.less ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_17_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_17_use_2_node_modules_less_loader_dist_cjs_js_sensitive_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-17.use[1]!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-17.use[2]!../../../../../../node_modules/less-loader/dist/cjs.js!./sensitive.less */ "../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-17.use[1]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-17.use[2]!../../node_modules/less-loader/dist/cjs.js!./formwidgets/sensitive/assets/less/sensitive.less");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_17_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_17_use_2_node_modules_less_loader_dist_cjs_js_sensitive_less__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_17_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_17_use_2_node_modules_less_loader_dist_cjs_js_sensitive_less__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["assets/ui/js/build/vendor"], () => (__webpack_exec__("./formwidgets/sensitive/assets/js/src/Sensitive.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2Zvcm13aWRnZXRzL3NlbnNpdGl2ZS9hc3NldHMvanMvZGlzdC9zZW5zaXRpdmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUM7QUFFbkMsQ0FBQyxVQUFDQSxTQUFTLEVBQUs7RUFDWjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFSSSxJQVNNQyxTQUFTLDBCQUFBQyxxQkFBQTtJQUFBLFNBQUFELFVBQUE7TUFBQUUsZUFBQSxPQUFBRixTQUFBO01BQUEsT0FBQUcsVUFBQSxPQUFBSCxTQUFBLEVBQUFJLFNBQUE7SUFBQTtJQUFBQyxTQUFBLENBQUFMLFNBQUEsRUFBQUMscUJBQUE7SUFBQSxPQUFBSyxZQUFBLENBQUFOLFNBQUE7TUFBQU8sR0FBQTtNQUFBQyxLQUFBO01BQ1g7QUFDUjtBQUNBO0FBQ0E7QUFDQTtNQUNRLFNBQUFDLFVBQVVDLE9BQU8sRUFBRTtRQUFBLElBQUFDLEtBQUE7UUFDZixJQUFJLENBQUNELE9BQU8sR0FBR0EsT0FBTztRQUN0QixJQUFJLENBQUNFLE1BQU0sR0FBRyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0MsVUFBVSxDQUFDLElBQUksRUFBRUosT0FBTyxDQUFDO1FBQ3RELElBQUksQ0FBQ0ssS0FBSyxHQUFHQyxPQUFPLENBQUNOLE9BQU8sQ0FBQ08sT0FBTyxDQUFDRixLQUFLLENBQUM7UUFDM0MsSUFBSSxDQUFDRyxNQUFNLEdBQUcsSUFBSTs7UUFFbEI7UUFDQSxJQUFJLENBQUNDLEtBQUssR0FBR1QsT0FBTyxDQUFDVSxhQUFhLENBQUMsY0FBYyxDQUFDO1FBQ2xELElBQUksQ0FBQ0MsTUFBTSxHQUFHWCxPQUFPLENBQUNVLGFBQWEsQ0FBQyxlQUFlLENBQUM7UUFDcEQsSUFBSSxDQUFDRSxJQUFJLEdBQUdaLE9BQU8sQ0FBQ1UsYUFBYSxDQUFDLGFBQWEsQ0FBQztRQUNoRCxJQUFJLENBQUNHLE1BQU0sR0FBR2IsT0FBTyxDQUFDVSxhQUFhLENBQUMsZUFB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QUVBLGFBQWEsMEdBQUcsQ0FBQyxzTkFBTzs7OztBQUl4QixpRUFBZSxzTkFBTyxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1iYWNrZW5kLW1vZHVsZS8uL2Zvcm13aWRnZXRzL3NlbnNpdGl2ZS9hc3NldHMvanMvc3JjL1NlbnNpdGl2ZS5qcyIsIndlYnBhY2s6Ly9Ad2ludGVyY21zL3duLWJhY2tlbmQtbW9kdWxlLy4vZm9ybXdpZGdldHMvc2Vuc2l0aXZlL2Fzc2V0cy9sZXNzL3NlbnNpdGl2ZS5sZXNzIiwid2VicGFjazovL0B3aW50ZXJjbXMvd24tYmFja2VuZC1tb2R1bGUvLi9mb3Jtd2lkZ2V0cy9zZW5zaXRpdmUvYXNzZXRzL2xlc3Mvc2Vuc2l0aXZlLmxlc3M/YzBhMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uLy4uL2xlc3Mvc2Vuc2l0aXZlLmxlc3MnO1xuXG4oKFNub3dib2FyZCkgPT4ge1xuICAgIC8qKlxuICAgICAqIFNlbnNpdGl2ZSBmb3JtIHdpZGdldC5cbiAgICAgKlxuICAgICAqIFJlbmRlcnMgYSB0ZXh0IGZpZWxkIHRoYXQgYWN0cyBhcyBhIHBhc3N3b3JkIG9yIHNlY3JldCBmaWVsZCwgYnV0IGNhbiBiZSByZXZlYWxlZCBieSB0aGVcbiAgICAgKiB1c2VyLlxuICAgICAqXG4gICAgICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAgICAgKiBAY29weXJpZ2h0IDIwMjMgV2ludGVyIENNU1xuICAgICAqL1xuICAgIGNsYXNzIFNlbnNpdGl2ZSBleHRlbmRzIFNub3dib2FyZC5QbHVnaW5CYXNlIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnN0cnVjdG9yLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAgICAgICAqL1xuICAgICAgICBjb25zdHJ1Y3QoZWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5zbm93Ym9hcmQuZGF0YUNvbmZpZyh0aGlzLCBlbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMuY2xlYW4gPSBCb29sZWFuKGVsZW1lbnQuZGF0YXNldC5jbGVhbik7XG4gICAgICAgICAgICB0aGlzLmhpZGRlbiA9IHRydWU7XG5cbiAgICAgICAgICAgIC8vIENoaWxkIGVsZW1lbnRzXG4gICAgICAgICAgICB0aGlzLmlucHV0ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1pbnB1dF0nKTtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10b2dnbGVdJyk7XG4gICAgICAgICAgICB0aGlzLmljb24gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWljb25dJyk7XG4gICAgICAgICAgICB0aGlzLmxvYWRlciA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtbG9hZGVyXScpO1xuICAgICAgICAgICAgdGhpcy5jb3B5ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1jb3B5XScpO1xuXG4gICAgICAgICAgICAvLyBFdmVudHNcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzID0ge1xuICAgICAgICAgICAgICAgIGlucHV0OiAoKSA9PiB0aGlzLm9uSW5wdXQoKSxcbiAgICAgICAgICAgICAgICB0b2dnbGU6ICgpID0+IHRoaXMub25Ub2dnbGUoKSxcbiAgICAgICAgICAgICAgICB0YWJDaGFuZ2U6ICgpID0+IHRoaXMub25UYWJDaGFuZ2UoKSxcbiAgICAgICAgICAgICAgICBjb3B5OiAoKSA9PiB0aGlzLm9uQ29weSgpLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5hdHRhY2hFdmVudHMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIHRoZSBkZWZhdWx0IG9wdGlvbnMgZm9yIHRoaXMgd2lkZ2V0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBBdmFpbGFibGUgb3B0aW9uczpcbiAgICAgICAgICpcbiAgICAgICAgICogIC0gYGRhdGEtcmVhZC1vbmx5YCAtIElmIHNldCwgdGhpcyBmaWVsZCB3aWxsIGJlIHJlYWQtb25seSwgYnV0IHJldmVhbGFibGUuXG4gICAgICAgICAqICAtIGBkYXRhLWRpc2FibGVkYCAtIElmIHNldCwgdGhpcyBmaWVsZCB3aWxsIGJlIGRpc2FibGVkLCBhbmQgdW5yZXZlYWxhYmxlLlxuICAgICAgICAgKiAgLSBgZGF0YS1ldmVudC1oYW5kbGVyPVwiXCJgIC0gRGVmaW5lcyB0aGUgQUpBWCBldmVudCBoYW5kbGVyIHRoYXQgd2lsbCBwcm92aWRlIHRoZSByZXZlYWxlZCB2YWx1ZS5cbiAgICAgICAgICogIC0gYGRhdGEtaGlkZS1vbi10YWItY2hhbmdlYCAtIElmIHNldCwgdGhpcyBmaWVsZCB3aWxsIGJlIGhpZGRlbiB3aGVuIHRoZSBicm93c2VyIGlzIHN3aXRjaGVkXG4gICAgICAgICAqICAgICAgdG8gYW5vdGhlciB0YWIgb3IgbWluaW1pemVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAgICAgKi9cbiAgICAgICAgZGVmYXVsdHMoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgZXZlbnRIYW5kbGVyOiBudWxsLFxuICAgICAgICAgICAgICAgIGhpZGVPblRhYkNoYW5nZTogZmFsc2UsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEF0dGFjaGVzIGV2ZW50IGxpc3RlbmVycyBmb3Igc2V2ZXJhbCBpbnRlcmFjdGlvbnMuXG4gICAgICAgICAqL1xuICAgICAgICBhdHRhY2hFdmVudHMoKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmV2ZW50cy5pbnB1dCk7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZXZlbnRzLnRvZ2dsZSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5nZXQoJ2hpZGVPblRhYkNoYW5nZScpKSB7XG4gICAgICAgICAgICAgICAgLy8gV2F0Y2ggZm9yIHRhYiBjaGFuZ2Ugb3IgbWluaW1pc2VcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgdGhpcy5ldmVudHMudGFiQ2hhbmdlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuY29weSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29weS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZXZlbnRzLmNvcHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlc3RydWN0b3IuXG4gICAgICAgICAqL1xuICAgICAgICBkZXN0cnVjdCgpIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuZXZlbnRzLmlucHV0KTtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5ldmVudHMudG9nZ2xlKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLmdldCgnaGlkZU9uVGFiQ2hhbmdlJykpIHtcbiAgICAgICAgICAgICAgICAvLyBXYXRjaCBmb3IgdGFiIGNoYW5nZSBvciBtaW5pbWlzZVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCB0aGlzLmV2ZW50cy50YWJDaGFuZ2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5jb3B5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3B5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5ldmVudHMuY29weSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuaW5wdXQgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy50b2dnbGUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5pY29uID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMubG9hZGVyID0gbnVsbDtcblxuICAgICAgICAgICAgc3VwZXIuZGVzdHJ1Y3QoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnB1dCBoYW5kbGVyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBSZXNldHMgYSBjbGVhbiBmaWVsZCB0byBlbXB0eSBpZiB0aGUgdXNlciB0eXBlcyBhbnl0aGluZyBpbiB0aGUgZmllbGQgd2l0aG91dCByZXZlYWxpbmcgaXQuXG4gICAgICAgICAqL1xuICAgICAgICBvbklucHV0KCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2xlYW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRvZ2dsZSBoYW5kbGVyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBSZXZlYWxzIHRoZSB2YWx1ZSBhbmQgdG9nZ2xlcyB0aGUgdmlzaWJpbGl0eSBvZiBhIHJldmVhbGVkIHZhbHVlLlxuICAgICAgICAgKi9cbiAgICAgICAgb25Ub2dnbGUoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pbnB1dC52YWx1ZSAhPT0gJycgJiYgdGhpcy5jbGVhbikge1xuICAgICAgICAgICAgICAgIHRoaXMucmV2ZWFsKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlVmlzaWJpbGl0eSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRhYiBjaGFuZ2UgaGFuZGxlci5cbiAgICAgICAgICpcbiAgICAgICAgICogRmlyZXMgd2hlbiB0aGUgYnJvd3NlciBpcyBtaW5pbWl6ZWQgb3Igc3dpdGNoZWQgdG8gYW5vdGhlciB0YWIuIFRoaXMgd2lsbCBoaWRlIHRoZSB2YWx1ZS5cbiAgICAgICAgICovXG4gICAgICAgIG9uVGFiQ2hhbmdlKCkge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmhpZGRlbiAmJiAhdGhpcy5oaWRkZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZVZpc2liaWxpdHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb3B5IGhhbmRsZXIuXG4gICAgICAgICAqXG4gICAgICAgICAqIENvcGllcyB0aGUgdmFsdWUgdG8gdGhlIGNsaXBib2FyZC5cbiAgICAgICAgICovXG4gICAgICAgIG9uQ29weSgpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXQudmFsdWUgIT09ICcnICYmIHRoaXMuY2xlYW4pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXZlYWwocmVzb2x2ZSkudGhlbihcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHJlc29sdmUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHJlamVjdCgpLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcHJvbWlzZS50aGVuKFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNIaWRkZW4gPSB0aGlzLmhpZGRlbjtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5oaWRkZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlVmlzaWJpbGl0eSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0LnNlbGVjdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW3RoaXMuaW5wdXQudmFsdWVdLCB7IHR5cGU6ICd0ZXh0L3BsYWluJyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBuZXcgQ2xpcGJvYXJkSXRlbSh7ICd0ZXh0L3BsYWluJzogYmxvYiB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGUoW2l0ZW1dKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc25vd2JvYXJkLmVycm9yKGBDbGlwYm9hcmQgQVBJIG5vdCBzdXBwb3J0ZWQgLSAke2Vycm9yfWApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dC5ibHVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0hpZGRlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVWaXNpYmlsaXR5KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNub3dib2FyZC5lcnJvcihgVW5hYmxlIHRvIHJldHJpZXZlIGhpZGRlbiB2YWx1ZSAtICR7ZXJyb3J9YCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVG9nZ2xlcyB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgdmFsdWUgd2l0aGluIHRoZSBzZW5zaXRpdmUgZmllbGQuXG4gICAgICAgICAqL1xuICAgICAgICB0b2dnbGVWaXNpYmlsaXR5KCkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAodGhpcy5oaWRkZW4pID8gJ3RleHQnIDogJ3Bhc3N3b3JkJyk7XG4gICAgICAgICAgICB0aGlzLmljb24uY2xhc3NMaXN0LnRvZ2dsZSgnaWNvbi1leWUnKTtcbiAgICAgICAgICAgIHRoaXMuaWNvbi5jbGFzc0xpc3QudG9nZ2xlKCdpY29uLWV5ZS1zbGFzaCcpO1xuICAgICAgICAgICAgdGhpcy5oaWRkZW4gPSAhdGhpcy5oaWRkZW47XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV2ZWFscyB0aGUgdmFsdWUgb2YgdGhlIHNlbnNpdGl2ZSBmaWVsZC5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhpcyB3aWxsIGNhbGwgYW4gQUpBWCBldmVudCBoYW5kbGVyIHRvIHJldHJpZXZlIHRoZSB2YWx1ZSwgYWxsb3dpbmcgZm9yIHZhbHVlcyB0byBiZVxuICAgICAgICAgKiBtYW5pcHVsYXRlZCBvciBjb250cm9sbGVkIGJ5IHRoZSBzZXJ2ZXIuXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAgICAgKi9cbiAgICAgICAgcmV2ZWFsKCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBTaG93IGxvYWRlclxuICAgICAgICAgICAgICAgIHRoaXMuaWNvbi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zbm93Ym9hcmQucmVxdWVzdCh0aGlzLmlucHV0LCB0aGlzLmNvbmZpZy5nZXQoJ2V2ZW50SGFuZGxlcicpLCB7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0LnZhbHVlID0gZGF0YS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYW4gPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSGlkZSBsb2FkZXIgYW5kIHJldmVhbFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pY29uLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRlci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZVZpc2liaWxpdHkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihlcnJvcikpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBTbm93Ym9hcmQuYWRkUGx1Z2luKCdiYWNrZW5kLmZvcm13aWRnZXQuc2Vuc2l0aXZlJywgU2Vuc2l0aXZlKTtcbiAgICBTbm93Ym9hcmRbJ2JhY2tlbmQudWkud2lkZ2V0aGFuZGxlciddKCkucmVnaXN0ZXIoJ3NlbnNpdGl2ZScsICdiYWNrZW5kLmZvcm13aWRnZXQuc2Vuc2l0aXZlJyk7XG59KSh3aW5kb3cuU25vd2JvYXJkKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2W2RhdGEtY29udHJvbD1cXFwic2Vuc2l0aXZlXFxcIl0gYVtkYXRhLXRvZ2dsZV0sXFxuZGl2W2RhdGEtY29udHJvbD1cXFwic2Vuc2l0aXZlXFxcIl0gYVtkYXRhLWNvcHldIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDFkNmQ5O1xcbiAgYm9yZGVyLWxlZnQ6IDA7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2Zvcm13aWRnZXRzL3NlbnNpdGl2ZS9hc3NldHMvbGVzcy9zZW5zaXRpdmUubGVzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTs7RUFHUSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQUZSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgXFxcIi4uLy4uLy4uLy4uL2Fzc2V0cy9sZXNzL2NvcmUvYm9vdC5sZXNzXFxcIjtcXG5cXG5kaXZbZGF0YS1jb250cm9sPVxcXCJzZW5zaXRpdmVcXFwiXSB7XFxuICAgIGFbZGF0YS10b2dnbGVdLFxcbiAgICBhW2RhdGEtY29weV0ge1xcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIEBpbnB1dC1ncm91cC1hZGRvbi1ib3JkZXItY29sb3I7XFxuICAgICAgICBib3JkZXItbGVmdDogMDtcXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTcudXNlWzFdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xNy51c2VbMl0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2Vuc2l0aXZlLmxlc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwibmFtZXMiOlsiU25vd2JvYXJkIiwiU2Vuc2l0aXZlIiwiX1Nub3dib2FyZCRQbHVnaW5CYXNlIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsImFyZ3VtZW50cyIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY29uc3RydWN0IiwiZWxlbWVudCIsIl90aGlzIiwiY29uZmlnIiwic25vd2JvYXJkIiwiZGF0YUNvbmZpZyIsImNsZWFuIiwiQm9vbGVhbiIsImRhdGFzZXQiLCJoaWRkZW4iLCJpbnB1dCIsInF1ZXJ5U2VsZWN0b3IiLCJ0b2dnbGUiLCJpY29uIiwibG9hZGVyIiwiY29weSIsImV2ZW50cyIsIm9uSW5wdXQiLCJvblRvZ2dsZSIsInRhYkNoYW5nZSIsIm9uVGFiQ2hhbmdlIiwib25Db3B5IiwiYXR0YWNoRXZlbnRzIiwiZGVmYXVsdHMiLCJyZWFkT25seSIsImRpc2FibGVkIiwiZXZlbnRIYW5kbGVyIiwiaGlkZU9uVGFiQ2hhbmdlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImdldCIsImRvY3VtZW50IiwiZGVzdHJ1Y3QiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX2dldCIsIl9nZXRQcm90b3R5cGVPZiIsInByb3RvdHlwZSIsImNhbGwiLCJyZXZlYWwiLCJ0b2dnbGVWaXNpYmlsaXR5IiwiX3RoaXMyIiwicHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidGhlbiIsImlzSGlkZGVuIiwiZm9jdXMiLCJzZWxlY3QiLCJibG9iIiwiQmxvYiIsInR5cGUiLCJpdGVtIiwiQ2xpcGJvYXJkSXRlbSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlIiwiZXJyb3IiLCJjb25jYXQiLCJibHVyIiwic2V0QXR0cmlidXRlIiwiY2xhc3NMaXN0IiwiX3RoaXMzIiwic3R5bGUiLCJ2aXNpYmlsaXR5IiwicmVtb3ZlIiwicmVxdWVzdCIsInN1Y2Nlc3MiLCJkYXRhIiwiYWRkIiwiRXJyb3IiLCJQbHVnaW5CYXNlIiwiYWRkUGx1Z2luIiwicmVnaXN0ZXIiLCJ3aW5kb3ciXSwic291cmNlUm9vdCI6IiJ9