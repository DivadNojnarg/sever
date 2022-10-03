(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Shiny"));
	else if(typeof define === 'function' && define.amd)
		define(["Shiny"], factory);
	else if(typeof exports === 'object')
		exports["sever"] = factory(require("Shiny"));
	else
		root["sever"] = factory(root["Shiny"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE_shiny__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./srcjs/exts/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./srcjs/exts/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Hide Button */\n#ss-connect-dialog{\n  display: none !important;\n}\n\n#shiny-disconnected-overlay{\n  cursor: not-allowed !important;\n  z-index: 999999!;\n  background-size: cover;\n}\n\n@keyframes expand {\n  from {\n    transform: scale(.5);\n  }\n}\n\n/* Custom */\n.cleave-overlay{\n  z-index:999;\n  color: black;\n}\n\n.staticParent{\n  position: static;\n}\n\n", "",{"version":3,"sources":["webpack://./srcjs/exts/style.css"],"names":[],"mappings":"AAAA,gBAAgB;AAChB;EACE,wBAAwB;AAC1B;;AAEA;EACE,8BAA8B;EAC9B,gBAAgB;EAChB,sBAAsB;AACxB;;AAEA;EACE;IACE,oBAAoB;EACtB;AACF;;AAEA,WAAW;AACX;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,gBAAgB;AAClB","sourcesContent":["/* Hide Button */\n#ss-connect-dialog{\n  display: none !important;\n}\n\n#shiny-disconnected-overlay{\n  cursor: not-allowed !important;\n  z-index: 999999!;\n  background-size: cover;\n}\n\n@keyframes expand {\n  from {\n    transform: scale(.5);\n  }\n}\n\n/* Custom */\n.cleave-overlay{\n  z-index:999;\n  color: black;\n}\n\n.staticParent{\n  position: static;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./srcjs/exts/style.css":
/*!******************************!*\
  !*** ./srcjs/exts/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/getTarget.js */ "./node_modules/style-loader/dist/runtime/getTarget.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./srcjs/exts/style.css");

      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = function(css, style){
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
      while (style.firstChild) {
        style.removeChild(style.firstChild);
      }

      style.appendChild(document.createTextNode(css));
    }
  };
options.setAttributes = function(style) {
        var nonce =
           true ? __webpack_require__.nc : 0;

        if (nonce) {
          style.setAttribute("nonce", nonce);
        }
      };
options.insert = function(style){
    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()("head");

    if (!target) {
      throw new Error(
        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
      );
    }

    target.appendChild(style);
  };
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/getTarget.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/getTarget.js ***!
  \*************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}

module.exports = getTarget;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./srcjs/exts/cleave.js":
/*!******************************!*\
  !*** ./srcjs/exts/cleave.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cleave": () => (/* binding */ cleave)
/* harmony export */ });
// compute offset position of waiter overlay
const getOffset = (element) => {
  let elementPosition = {};

  let width = element.offsetWidth;
  let height = element.offsetHeight;

  if(height < 20)
    height = 20;

  if(width < 20)
    width = 20;

  //set width and height
  // -6 pixels to keep margin between plot if stacked up/side by side
  elementPosition.width = width;
  elementPosition.height = height;

  //calculate element top and left
  let _x = element.offsetLeft;
  let _y = element.offsetTop;
  if(isNaN(_x))
    _x = 0;
  if(isNaN(_y))
    _y = 0;
  
  //set top and left
  //use 3 margin (6/2)
  elementPosition.top = _y;
  elementPosition.left = _x;

  return elementPosition;
}

// elements to hide on recomputed
var waiter_to_hide = [];

// show waiter overlay
const cleave = (
	id, 
	html, 
	color, 
	bg_color, 
	duration, 
	center_vertical, 
	center_horizontal
) => {
  // declare
  let dom;
  let exists = false;
  let to_hide = false;

  // get parent
  dom = document.getElementById(id);
  if(dom == undefined){
    console.error("Cannot find", id);
    return ;
  }

  // if(dom.offsetHeight < 10)
  //   return ;
  
  // allow missing for testing
  to_hide = to_hide || false;

  // add to array
  if(to_hide)
    waiter_to_hide.push(id);

  let el = getOffset(dom); // get dimensions
  
  // force static if position relative
  // otherwise overlay is completely off
  let pos = window.getComputedStyle(dom, null).position;
  if(pos == 'relative')
    dom.className += ' staticParent';

  // check if overlay exists
  dom.childNodes.forEach(function(el){
    if(el.className === 'cleave-overlay')
      exists = true;
  });

  if(exists === true){
    console.info("cleave on", id, "already exists");
    return;
  }

  // create overlay
  let overlay = document.createElement("DIV");
  // create overlay content
  let overlay_content = document.createElement("DIV");
  // insert html
  overlay_content.innerHTML = html;
  overlay_content.classList.add("cleave-overlay-content");

  // some elements are too small in height
  if(center_vertical && el.height > 50)
    overlay_content.style.paddingTop = (el.height / 2) - 10 + 'px';

  if(center_horizontal)
    overlay_content.style.textAlign = "center";
  

  // add styles
  overlay.style.height = el.height + 'px';
  overlay.style.width = el.width + 'px';
  overlay.style.top = el.top + 'px';
  overlay.style.left = el.left + 'px';
  overlay.style.color = color;
  overlay.style.backgroundColor = bg_color;
  overlay.style.position = "absolute";
  overlay.style.zIndex = 999;
  overlay.style.animation = "expand " + duration + "s ease-in-out";
  overlay.classList.add("cleave-overlay");

  // append overlay content in overlay
  overlay.appendChild(overlay_content);

  // append overlay to dom
  dom.innerHTML = '';
  dom.appendChild(overlay);
}


/***/ }),

/***/ "./srcjs/exts/rupture.js":
/*!*******************************!*\
  !*** ./srcjs/exts/rupture.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "watchActivity": () => (/* binding */ watchActivity),
/* harmony export */   "unrupt": () => (/* binding */ unrupt)
/* harmony export */ });
const watchActivity = (opts) => {
  const logout = () => {
    rupture(opts);
  }
  
  const resetTimer = () => {
    clearTimeout(t);
    t = setTimeout(logout, opts.ms);  // time is in milliseconds (1000 is 1 second)
  }

  var t = setTimeout(logout, opts.ms);
  window.onmousemove = resetTimer; // catches mouse movements
  window.onmousedown = resetTimer; // catches mouse movements
  window.onclick = resetTimer;     // catches mouse clicks
  window.onscroll = resetTimer;    // catches scrolling
  window.onkeypress = resetTimer;  //catches keyboard actions
}

const rupture = (opts) => {
  // declare
  var classes = "severed",
    dv = document.createElement("DIV"),
    bg = document.createElement("DIV"),
    parent = document.createElement("DIV");
  
  // insert content
  dv.innerHTML = opts.content;

  // bg
  bg.id = "ruptured";
  bg.style.position = 'absolute';
  bg.style.top = '0px';
  bg.style.width = window.innerWidth + 'px';
  bg.style.height = window.innerHeight + 'px';
  bg.style.backgroundColor = opts.bg_color;
  bg.style.opacity = opts.opacity;
  bg.style.zIndex = 99999998;
  if(opts.bg_image)
    bg.style.backgroundImage = "url(" + opts.bg_image + ")";

  // change classes if is box
  if(opts.box){
    classes += " panel";
    dv.className = "panel-body";
  }

  parent.className = classes;
  parent.style.zIndex = 99999999;
  parent.style.textAlign = "center";
  parent.style.position = "fixed";
  parent.style.top = "50%";
  parent.style.left = "50%";
  parent.style.transform = "translate(-50%, -50%)";
  parent.style.color = opts.color;

  parent.appendChild(dv);

  document.body.appendChild(bg);
  document.body.appendChild(parent);
}

const unrupt = () => {
  removeRupture();
  if(!Shiny.shinyapp.isConnected())
    Shiny.shinyapp.reconnect();
}

const removeRupture = () => {
  let ruptured = document.getElementById('ruptured');
  ruptured.remove();
  let severed = document.getElementsByClassName('severed');
  for (let s of severed) {
    s.remove();
  }
}

/***/ }),

/***/ "./srcjs/exts/sever-foo.js":
/*!*********************************!*\
  !*** ./srcjs/exts/sever-foo.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeSever": () => (/* binding */ removeSever),
/* harmony export */   "handleSever": () => (/* binding */ handleSever)
/* harmony export */ });
const changeDefault = (opts) => {
  // set css
  let css,
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');
  
  let bgColor = opts.bg_color;

  if(bgColor == undefined || bgColor == null)
    bgColor = "none";

  css = "#shiny-disconnected-overlay{background-color: " + bgColor + "; opacity: " + opts.opacity + "; background-size: cover; background-image: url('" + opts.bg_image + "')}";

  head.appendChild(style);

  if (style.styleSheet){
    // This is required for IE8 and below.
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

const sever = (opts) => {
  // declare
  var classes = "severed";
  var dv = document.createElement("DIV"),
      parent = document.createElement("DIV");
  
  // insert content
  dv.innerHTML = opts.content;

  // change classes if is box
  if(opts.box){
    classes += " panel";
    dv.className = "panel-body";
  }

  parent.className = classes;
  parent.style.zIndex = 99999999;
  parent.style.textAlign = "center";
  parent.style.position = "fixed";
  parent.style.top = "50%";
  parent.style.left = "50%";
  parent.style.transform = "translate(-50%, -50%)";
  parent.style.color = opts.color;

  parent.appendChild(dv);

  document.body.appendChild(parent);
}

const removeSever = () => {
  let severed = document.getElementsByClassName("severed");
  for (let s of severed) {
    s.remove();
  }
}

const handleSever = (opts) => {
	changeDefault(opts);
	sever(opts);
}

/***/ }),

/***/ "shiny":
/*!************************!*\
  !*** external "Shiny" ***!
  \************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_shiny__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./srcjs/exts/sever.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "unrupt": () => (/* reexport safe */ _rupture__WEBPACK_IMPORTED_MODULE_2__.unrupt)
/* harmony export */ });
/* harmony import */ var shiny__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shiny */ "shiny");
/* harmony import */ var shiny__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shiny__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sever_foo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sever-foo */ "./srcjs/exts/sever-foo.js");
/* harmony import */ var _rupture__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rupture */ "./srcjs/exts/rupture.js");
/* harmony import */ var _cleave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cleave */ "./srcjs/exts/cleave.js");





__webpack_require__(/*! ./style.css */ "./srcjs/exts/style.css");

Shiny.addCustomMessageHandler('sever-it', function(opts) {

  $(document).on('shiny:disconnected', function(event) {
    (0,_sever_foo__WEBPACK_IMPORTED_MODULE_1__.handleSever)(opts);
  });

  $(document).on('shiny:connected', (e) => {
    removeSever();
    $('#shiny-disconnected-overlay').remove();
    Shiny.shinyapp.onDisconnected = function() {};
  });
});

Shiny.addCustomMessageHandler('rupture-it', function(opts) {
  (0,_rupture__WEBPACK_IMPORTED_MODULE_2__.watchActivity)(opts);
});

Shiny.addCustomMessageHandler('cleave-it', function(opts) {

  $(document).on('shiny:error', function(event) {

    if(!opts.silent_errors && event.error.type != null)
      return;

    event.preventDefault();

    if(opts.html == null)
      opts.html = '<span>' + event.error.message + '</span>';

    if(opts.bg_color == null)
      opts.bg_color = 'rgba(0,0,0,0)';

    // apply to all 
    if(opts.ids == null){

      (0,_cleave__WEBPACK_IMPORTED_MODULE_3__.cleave)(event.name, opts.html, opts.color, opts.bg_color, opts.duration, opts.center_vertical, opts.center_horizontal)
    
    } else { // apply to relevant ids) => {
      opts.ids.forEach((value, index) => {

        if(value == event.name){
          (0,_cleave__WEBPACK_IMPORTED_MODULE_3__.cleave)(event.name, opts.html, opts.color, opts.bg_color, opts.duration, opts.center_vertical, opts.center_horizontal)
        }
      });
    }
  });

  $(document).on('shiny:value shiny:outputinvalidated', function(event){
    if(opts.ids == null){
      $('.cleave-overlay').remove();
    } else { // apply to relevant ids) => {
      opts.ids.forEach((value, index) => {
        if(value == event.name){
          let selector = '#' + event.name + '>.cleave-overlay';
          $(selector).remove();
        }
      });
    }
  });

});

// chisel
Shiny.addCustomMessageHandler('chisel-it', function(opts) {

  $(document).on('shiny:error', function(event) {
    console.log(event);

    if(event.error.type == null)
      return;

    event.preventDefault();

    if(opts.html == null)
      opts.html = '<span>' + event.error.message + '</span>';

    if(opts.bg_color == null)
      opts.bg_color = 'rgba(0,0,0,0)';

    // apply to all 
    if(opts.ids == null){

      (0,_cleave__WEBPACK_IMPORTED_MODULE_3__.cleave)(event.name, opts.html, opts.color, opts.bg_color, opts.duration, opts.center_vertical, opts.center_horizontal)
    
    } else { // apply to relevant ids) => {
      opts.ids.forEach((value, index) => {

        if(value == event.name){
          (0,_cleave__WEBPACK_IMPORTED_MODULE_3__.cleave)(event.name, opts.html, opts.color, opts.bg_color, opts.duration, opts.center_vertical, opts.center_horizontal)
        }
      });
    }
  });

  $(document).on('shiny:value shiny:outputinvalidated', function(event){
    if(opts.ids == null){
      $('.cleave-overlay').remove();
    } else { // apply to relevant ids) => {
      opts.ids.forEach((value, index) => {
        if(value == event.name){
          let selector = '#' + event.name + '>.cleave-overlay';
          $(selector).remove();
        }
      });
    }
  });

});


})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXZlci93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vc2V2ZXIvLi9zcmNqcy9leHRzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9zZXZlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vc2V2ZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9zZXZlci8uL3NyY2pzL2V4dHMvc3R5bGUuY3NzPzhkNGQiLCJ3ZWJwYWNrOi8vc2V2ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRUYXJnZXQuanMiLCJ3ZWJwYWNrOi8vc2V2ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vc2V2ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc2V2ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9zZXZlci8uL3NyY2pzL2V4dHMvY2xlYXZlLmpzIiwid2VicGFjazovL3NldmVyLy4vc3JjanMvZXh0cy9ydXB0dXJlLmpzIiwid2VicGFjazovL3NldmVyLy4vc3JjanMvZXh0cy9zZXZlci1mb28uanMiLCJ3ZWJwYWNrOi8vc2V2ZXIvZXh0ZXJuYWwgXCJTaGlueVwiIiwid2VicGFjazovL3NldmVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NldmVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3NldmVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zZXZlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NldmVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc2V2ZXIvLi9zcmNqcy9leHRzL3NldmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUN5SDtBQUM3QjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsZ0ZBQWdGLDZCQUE2QixHQUFHLGdDQUFnQyxtQ0FBbUMscUJBQXFCLDJCQUEyQixHQUFHLHVCQUF1QixVQUFVLDJCQUEyQixLQUFLLEdBQUcsa0NBQWtDLGdCQUFnQixpQkFBaUIsR0FBRyxrQkFBa0IscUJBQXFCLEdBQUcsV0FBVyw4RkFBOEYsTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxVQUFVLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGdFQUFnRSw2QkFBNkIsR0FBRyxnQ0FBZ0MsbUNBQW1DLHFCQUFxQiwyQkFBMkIsR0FBRyx1QkFBdUIsVUFBVSwyQkFBMkIsS0FBSyxHQUFHLGtDQUFrQyxnQkFBZ0IsaUJBQWlCLEdBQUcsa0JBQWtCLHFCQUFxQixHQUFHLHVCQUF1QjtBQUMza0M7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxxQkFBcUI7QUFDakU7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsSUFBSTtB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RCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTmU7QUFDMkI7QUFDUTtBQUNoQjs7QUFFbEMsbUJBQU8sQ0FBQywyQ0FBYTs7QUFFckI7O0FBRUE7QUFDQSxJQUFJLHVEQUFXO0FBQ2YsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0EsRUFBRSx1REFBYTtBQUNmLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxNQUFNLCtDQUFNOztBQUVaLEtBQUssT0FBTztBQUNaOztBQUVBO0FBQ0EsVUFBVSwrQ0FBTTtBQUNoQjtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsS0FBSyxPQUFPO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUgsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxNQUFNLCtDQUFNOztBQUVaLEtBQUssT0FBTztBQUNaOztBQUVBO0FBQ0EsVUFBVSwrQ0FBTTtBQUNoQjtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsS0FBSyxPQUFPO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUgsQ0FBQyIsImZpbGUiOiJzZXZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIlNoaW55XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIlNoaW55XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInNldmVyXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiU2hpbnlcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInNldmVyXCJdID0gZmFjdG9yeShyb290W1wiU2hpbnlcIl0pO1xufSkoc2VsZiwgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9zaGlueV9fKSB7XG5yZXR1cm4gIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBIaWRlIEJ1dHRvbiAqL1xcbiNzcy1jb25uZWN0LWRpYWxvZ3tcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuI3NoaW55LWRpc2Nvbm5lY3RlZC1vdmVybGF5e1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZCAhaW1wb3J0YW50O1xcbiAgei1pbmRleDogOTk5OTk5ITtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbkBrZXlmcmFtZXMgZXhwYW5kIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC41KTtcXG4gIH1cXG59XFxuXFxuLyogQ3VzdG9tICovXFxuLmNsZWF2ZS1vdmVybGF5e1xcbiAgei1pbmRleDo5OTk7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5zdGF0aWNQYXJlbnR7XFxuICBwb3NpdGlvbjogc3RhdGljO1xcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmNqcy9leHRzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUFDaEI7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFO0lBQ0Usb0JBQW9CO0VBQ3RCO0FBQ0Y7O0FBRUEsV0FBVztBQUNYO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBIaWRlIEJ1dHRvbiAqL1xcbiNzcy1jb25uZWN0LWRpYWxvZ3tcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuI3NoaW55LWRpc2Nvbm5lY3RlZC1vdmVybGF5e1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZCAhaW1wb3J0YW50O1xcbiAgei1pbmRleDogOTk5OTk5ITtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbkBrZXlmcmFtZXMgZXhwYW5kIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC41KTtcXG4gIH1cXG59XFxuXFxuLyogQ3VzdG9tICovXFxuLmNsZWF2ZS1vdmVybGF5e1xcbiAgei1pbmRleDo5OTk7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5zdGF0aWNQYXJlbnR7XFxuICBwb3NpdGlvbjogc3RhdGljO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGdldFRhcmdldCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFRhcmdldC5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBmdW5jdGlvbihjc3MsIHN0eWxlKXtcbiAgICAgIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gICAgfVxuICB9O1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gZnVuY3Rpb24oc3R5bGUpIHtcbiAgICAgICAgdmFyIG5vbmNlID1cbiAgICAgICAgICB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICAgICAgaWYgKG5vbmNlKSB7XG4gICAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICAgICAgICB9XG4gICAgICB9O1xub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihzdHlsZSl7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChcImhlYWRcIik7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9O1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFyZ2V0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCIvLyBjb21wdXRlIG9mZnNldCBwb3NpdGlvbiBvZiB3YWl0ZXIgb3ZlcmxheVxuY29uc3QgZ2V0T2Zmc2V0ID0gKGVsZW1lbnQpID0+IHtcbiAgbGV0IGVsZW1lbnRQb3NpdGlvbiA9IHt9O1xuXG4gIGxldCB3aWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gIGxldCBoZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcblxuICBpZihoZWlnaHQgPCAyMClcbiAgICBoZWlnaHQgPSAyMDtcblxuICBpZih3aWR0aCA8IDIwKVxuICAgIHdpZHRoID0gMjA7XG5cbiAgLy9zZXQgd2lkdGggYW5kIGhlaWdodFxuICAvLyAtNiBwaXhlbHMgdG8ga2VlcCBtYXJnaW4gYmV0d2VlbiBwbG90IGlmIHN0YWNrZWQgdXAvc2lkZSBieSBzaWRlXG4gIGVsZW1lbnRQb3NpdGlvbi53aWR0aCA9IHdpZHRoO1xuICBlbGVtZW50UG9zaXRpb24uaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gIC8vY2FsY3VsYXRlIGVsZW1lbnQgdG9wIGFuZCBsZWZ0XG4gIGxldCBfeCA9IGVsZW1lbnQub2Zmc2V0TGVmdDtcbiAgbGV0IF95ID0gZWxlbWVudC5vZmZzZXRUb3A7XG4gIGlmKGlzTmFOKF94KSlcbiAgICBfeCA9IDA7XG4gIGlmKGlzTmFOKF95KSlcbiAgICBfeSA9IDA7XG4gIFxuICAvL3NldCB0b3AgYW5kIGxlZnRcbiAgLy91c2UgMyBtYXJnaW4gKDYvMilcbiAgZWxlbWVudFBvc2l0aW9uLnRvcCA9IF95O1xuICBlbGVtZW50UG9zaXRpb24ubGVmdCA9IF94O1xuXG4gIHJldHVybiBlbGVtZW50UG9zaXRpb247XG59XG5cbi8vIGVsZW1lbnRzIHRvIGhpZGUgb24gcmVjb21wdXRlZFxudmFyIHdhaXRlcl90b19oaWRlID0gW107XG5cbi8vIHNob3cgd2FpdGVyIG92ZXJsYXlcbmV4cG9ydCBjb25zdCBjbGVhdmUgPSAoXG5cdGlkLCBcblx0aHRtbCwgXG5cdGNvbG9yLCBcblx0YmdfY29sb3IsIFxuXHRkdXJhdGlvbiwgXG5cdGNlbnRlcl92ZXJ0aWNhbCwgXG5cdGNlbnRlcl9ob3Jpem9udGFsXG4pID0+IHtcbiAgLy8gZGVjbGFyZVxuICBsZXQgZG9tO1xuICBsZXQgZXhpc3RzID0gZmFsc2U7XG4gIGxldCB0b19oaWRlID0gZmFsc2U7XG5cbiAgLy8gZ2V0IHBhcmVudFxuICBkb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gIGlmKGRvbSA9PSB1bmRlZmluZWQpe1xuICAgIGNvbnNvbGUuZXJyb3IoXCJDYW5ub3QgZmluZFwiLCBpZCk7XG4gICAgcmV0dXJuIDtcbiAgfVxuXG4gIC8vIGlmKGRvbS5vZmZzZXRIZWlnaHQgPCAxMClcbiAgLy8gICByZXR1cm4gO1xuICBcbiAgLy8gYWxsb3cgbWlzc2luZyBmb3IgdGVzdGluZ1xuICB0b19oaWRlID0gdG9faGlkZSB8fCBmYWxzZTtcblxuICAvLyBhZGQgdG8gYXJyYXlcbiAgaWYodG9faGlkZSlcbiAgICB3YWl0ZXJfdG9faGlkZS5wdXNoKGlkKTtcblxuICBsZXQgZWwgPSBnZXRPZmZzZXQoZG9tKTsgLy8gZ2V0IGRpbWVuc2lvbnNcbiAgXG4gIC8vIGZvcmNlIHN0YXRpYyBpZiBwb3NpdGlvbiByZWxhdGl2ZVxuICAvLyBvdGhlcndpc2Ugb3ZlcmxheSBpcyBjb21wbGV0ZWx5IG9mZlxuICBsZXQgcG9zID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9tLCBudWxsKS5wb3NpdGlvbjtcbiAgaWYocG9zID09ICdyZWxhdGl2ZScpXG4gICAgZG9tLmNsYXNzTmFtZSArPSAnIHN0YXRpY1BhcmVudCc7XG5cbiAgLy8gY2hlY2sgaWYgb3ZlcmxheSBleGlzdHNcbiAgZG9tLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbihlbCl7XG4gICAgaWYoZWwuY2xhc3NOYW1lID09PSAnY2xlYXZlLW92ZXJsYXknKVxuICAgICAgZXhpc3RzID0gdHJ1ZTtcbiAgfSk7XG5cbiAgaWYoZXhpc3RzID09PSB0cnVlKXtcbiAgICBjb25zb2xlLmluZm8oXCJjbGVhdmUgb25cIiwgaWQsIFwiYWxyZWFkeSBleGlzdHNcIik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gY3JlYXRlIG92ZXJsYXlcbiAgbGV0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpO1xuICAvLyBjcmVhdGUgb3ZlcmxheSBjb250ZW50XG4gIGxldCBvdmVybGF5X2NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpO1xuICAvLyBpbnNlcnQgaHRtbFxuICBvdmVybGF5X2NvbnRlbnQuaW5uZXJIVE1MID0gaHRtbDtcbiAgb3ZlcmxheV9jb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjbGVhdmUtb3ZlcmxheS1jb250ZW50XCIpO1xuXG4gIC8vIHNvbWUgZWxlbWVudHMgYXJlIHRvbyBzbWFsbCBpbiBoZWlnaHRcbiAgaWYoY2VudGVyX3ZlcnRpY2FsICYmIGVsLmhlaWdodCA+IDUwKVxuICAgIG92ZXJsYXlfY29udGVudC5zdHlsZS5wYWRkaW5nVG9wID0gKGVsLmhlaWdodCAvIDIpIC0gMTAgKyAncHgnO1xuXG4gIGlmKGNlbnRlcl9ob3Jpem9udGFsKVxuICAgIG92ZXJsYXlfY29udGVudC5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICBcblxuICAvLyBhZGQgc3R5bGVzXG4gIG92ZXJsYXkuc3R5bGUuaGVpZ2h0ID0gZWwuaGVpZ2h0ICsgJ3B4JztcbiAgb3ZlcmxheS5zdHlsZS53aWR0aCA9IGVsLndpZHRoICsgJ3B4JztcbiAgb3ZlcmxheS5zdHlsZS50b3AgPSBlbC50b3AgKyAncHgnO1xuICBvdmVybGF5LnN0eWxlLmxlZnQgPSBlbC5sZWZ0ICsgJ3B4JztcbiAgb3ZlcmxheS5zdHlsZS5jb2xvciA9IGNvbG9yO1xuICBvdmVybGF5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGJnX2NvbG9yO1xuICBvdmVybGF5LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICBvdmVybGF5LnN0eWxlLnpJbmRleCA9IDk5OTtcbiAgb3ZlcmxheS5zdHlsZS5hbmltYXRpb24gPSBcImV4cGFuZCBcIiArIGR1cmF0aW9uICsgXCJzIGVhc2UtaW4tb3V0XCI7XG4gIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImNsZWF2ZS1vdmVybGF5XCIpO1xuXG4gIC8vIGFwcGVuZCBvdmVybGF5IGNvbnRlbnQgaW4gb3ZlcmxheVxuICBvdmVybGF5LmFwcGVuZENoaWxkKG92ZXJsYXlfY29udGVudCk7XG5cbiAgLy8gYXBwZW5kIG92ZXJsYXkgdG8gZG9tXG4gIGRvbS5pbm5lckhUTUwgPSAnJztcbiAgZG9tLmFwcGVuZENoaWxkKG92ZXJsYXkpO1xufVxuIiwiZXhwb3J0IGNvbnN0IHdhdGNoQWN0aXZpdHkgPSAob3B0cykgPT4ge1xuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XG4gICAgcnVwdHVyZShvcHRzKTtcbiAgfVxuICBcbiAgY29uc3QgcmVzZXRUaW1lciA9ICgpID0+IHtcbiAgICBjbGVhclRpbWVvdXQodCk7XG4gICAgdCA9IHNldFRpbWVvdXQobG9nb3V0LCBvcHRzLm1zKTsgIC8vIHRpbWUgaXMgaW4gbWlsbGlzZWNvbmRzICgxMDAwIGlzIDEgc2Vjb25kKVxuICB9XG5cbiAgdmFyIHQgPSBzZXRUaW1lb3V0KGxvZ291dCwgb3B0cy5tcyk7XG4gIHdpbmRvdy5vbm1vdXNlbW92ZSA9IHJlc2V0VGltZXI7IC8vIGNhdGNoZXMgbW91c2UgbW92ZW1lbnRzXG4gIHdpbmRvdy5vbm1vdXNlZG93biA9IHJlc2V0VGltZXI7IC8vIGNhdGNoZXMgbW91c2UgbW92ZW1lbnRzXG4gIHdpbmRvdy5vbmNsaWNrID0gcmVzZXRUaW1lcjsgICAgIC8vIGNhdGNoZXMgbW91c2UgY2xpY2tzXG4gIHdpbmRvdy5vbnNjcm9sbCA9IHJlc2V0VGltZXI7ICAgIC8vIGNhdGNoZXMgc2Nyb2xsaW5nXG4gIHdpbmRvdy5vbmtleXByZXNzID0gcmVzZXRUaW1lcjsgIC8vY2F0Y2hlcyBrZXlib2FyZCBhY3Rpb25zXG59XG5cbmNvbnN0IHJ1cHR1cmUgPSAob3B0cykgPT4ge1xuICAvLyBkZWNsYXJlXG4gIHZhciBjbGFzc2VzID0gXCJzZXZlcmVkXCIsXG4gICAgZHYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpLFxuICAgIGJnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRJVlwiKSxcbiAgICBwYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpO1xuICBcbiAgLy8gaW5zZXJ0IGNvbnRlbnRcbiAgZHYuaW5uZXJIVE1MID0gb3B0cy5jb250ZW50O1xuXG4gIC8vIGJnXG4gIGJnLmlkID0gXCJydXB0dXJlZFwiO1xuICBiZy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gIGJnLnN0eWxlLnRvcCA9ICcwcHgnO1xuICBiZy5zdHlsZS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICsgJ3B4JztcbiAgYmcuc3R5bGUuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICsgJ3B4JztcbiAgYmcuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gb3B0cy5iZ19jb2xvcjtcbiAgYmcuc3R5bGUub3BhY2l0eSA9IG9wdHMub3BhY2l0eTtcbiAgYmcuc3R5bGUuekluZGV4ID0gOTk5OTk5OTg7XG4gIGlmKG9wdHMuYmdfaW1hZ2UpXG4gICAgYmcuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoXCIgKyBvcHRzLmJnX2ltYWdlICsgXCIpXCI7XG5cbiAgLy8gY2hhbmdlIGNsYXNzZXMgaWYgaXMgYm94XG4gIGlmKG9wdHMuYm94KXtcbiAgICBjbGFzc2VzICs9IFwiIHBhbmVsXCI7XG4gICAgZHYuY2xhc3NOYW1lID0gXCJwYW5lbC1ib2R5XCI7XG4gIH1cblxuICBwYXJlbnQuY2xhc3NOYW1lID0gY2xhc3NlcztcbiAgcGFyZW50LnN0eWxlLnpJbmRleCA9IDk5OTk5OTk5O1xuICBwYXJlbnQuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgcGFyZW50LnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuICBwYXJlbnQuc3R5bGUudG9wID0gXCI1MCVcIjtcbiAgcGFyZW50LnN0eWxlLmxlZnQgPSBcIjUwJVwiO1xuICBwYXJlbnQuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIjtcbiAgcGFyZW50LnN0eWxlLmNvbG9yID0gb3B0cy5jb2xvcjtcblxuICBwYXJlbnQuYXBwZW5kQ2hpbGQoZHYpO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYmcpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBhcmVudCk7XG59XG5cbmV4cG9ydCBjb25zdCB1bnJ1cHQgPSAoKSA9PiB7XG4gIHJlbW92ZVJ1cHR1cmUoKTtcbiAgaWYoIVNoaW55LnNoaW55YXBwLmlzQ29ubmVjdGVkKCkpXG4gICAgU2hpbnkuc2hpbnlhcHAucmVjb25uZWN0KCk7XG59XG5cbmNvbnN0IHJlbW92ZVJ1cHR1cmUgPSAoKSA9PiB7XG4gIGxldCBydXB0dXJlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdydXB0dXJlZCcpO1xuICBydXB0dXJlZC5yZW1vdmUoKTtcbiAgbGV0IHNldmVyZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZXZlcmVkJyk7XG4gIGZvciAobGV0IHMgb2Ygc2V2ZXJlZCkge1xuICAgIHMucmVtb3ZlKCk7XG4gIH1cbn0iLCJjb25zdCBjaGFuZ2VEZWZhdWx0ID0gKG9wdHMpID0+IHtcbiAgLy8gc2V0IGNzc1xuICBsZXQgY3NzLFxuICAgIGhlYWQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0sXG4gICAgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICBcbiAgbGV0IGJnQ29sb3IgPSBvcHRzLmJnX2NvbG9yO1xuXG4gIGlmKGJnQ29sb3IgPT0gdW5kZWZpbmVkIHx8IGJnQ29sb3IgPT0gbnVsbClcbiAgICBiZ0NvbG9yID0gXCJub25lXCI7XG5cbiAgY3NzID0gXCIjc2hpbnktZGlzY29ubmVjdGVkLW92ZXJsYXl7YmFja2dyb3VuZC1jb2xvcjogXCIgKyBiZ0NvbG9yICsgXCI7IG9wYWNpdHk6IFwiICsgb3B0cy5vcGFjaXR5ICsgXCI7IGJhY2tncm91bmQtc2l6ZTogY292ZXI7IGJhY2tncm91bmQtaW1hZ2U6IHVybCgnXCIgKyBvcHRzLmJnX2ltYWdlICsgXCInKX1cIjtcblxuICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCl7XG4gICAgLy8gVGhpcyBpcyByZXF1aXJlZCBmb3IgSUU4IGFuZCBiZWxvdy5cbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxuY29uc3Qgc2V2ZXIgPSAob3B0cykgPT4ge1xuICAvLyBkZWNsYXJlXG4gIHZhciBjbGFzc2VzID0gXCJzZXZlcmVkXCI7XG4gIHZhciBkdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIiksXG4gICAgICBwYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpO1xuICBcbiAgLy8gaW5zZXJ0IGNvbnRlbnRcbiAgZHYuaW5uZXJIVE1MID0gb3B0cy5jb250ZW50O1xuXG4gIC8vIGNoYW5nZSBjbGFzc2VzIGlmIGlzIGJveFxuICBpZihvcHRzLmJveCl7XG4gICAgY2xhc3NlcyArPSBcIiBwYW5lbFwiO1xuICAgIGR2LmNsYXNzTmFtZSA9IFwicGFuZWwtYm9keVwiO1xuICB9XG5cbiAgcGFyZW50LmNsYXNzTmFtZSA9IGNsYXNzZXM7XG4gIHBhcmVudC5zdHlsZS56SW5kZXggPSA5OTk5OTk5OTtcbiAgcGFyZW50LnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gIHBhcmVudC5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcbiAgcGFyZW50LnN0eWxlLnRvcCA9IFwiNTAlXCI7XG4gIHBhcmVudC5zdHlsZS5sZWZ0ID0gXCI1MCVcIjtcbiAgcGFyZW50LnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKC01MCUsIC01MCUpXCI7XG4gIHBhcmVudC5zdHlsZS5jb2xvciA9IG9wdHMuY29sb3I7XG5cbiAgcGFyZW50LmFwcGVuZENoaWxkKGR2KTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBhcmVudCk7XG59XG5cbmV4cG9ydCBjb25zdCByZW1vdmVTZXZlciA9ICgpID0+IHtcbiAgbGV0IHNldmVyZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic2V2ZXJlZFwiKTtcbiAgZm9yIChsZXQgcyBvZiBzZXZlcmVkKSB7XG4gICAgcy5yZW1vdmUoKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgaGFuZGxlU2V2ZXIgPSAob3B0cykgPT4ge1xuXHRjaGFuZ2VEZWZhdWx0KG9wdHMpO1xuXHRzZXZlcihvcHRzKTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfc2hpbnlfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICdzaGlueSc7XG5pbXBvcnQgeyBoYW5kbGVTZXZlciB9IGZyb20gJy4vc2V2ZXItZm9vJztcbmltcG9ydCB7IHdhdGNoQWN0aXZpdHksIHVucnVwdCB9IGZyb20gJy4vcnVwdHVyZSc7XG5pbXBvcnQgeyBjbGVhdmUgfSBmcm9tICcuL2NsZWF2ZSc7XG5cbnJlcXVpcmUoJy4vc3R5bGUuY3NzJyk7XG5cblNoaW55LmFkZEN1c3RvbU1lc3NhZ2VIYW5kbGVyKCdzZXZlci1pdCcsIGZ1bmN0aW9uKG9wdHMpIHtcblxuICAkKGRvY3VtZW50KS5vbignc2hpbnk6ZGlzY29ubmVjdGVkJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBoYW5kbGVTZXZlcihvcHRzKTtcbiAgfSk7XG5cbiAgJChkb2N1bWVudCkub24oJ3NoaW55OmNvbm5lY3RlZCcsIChlKSA9PiB7XG4gICAgcmVtb3ZlU2V2ZXIoKTtcbiAgICAkKCcjc2hpbnktZGlzY29ubmVjdGVkLW92ZXJsYXknKS5yZW1vdmUoKTtcbiAgICBTaGlueS5zaGlueWFwcC5vbkRpc2Nvbm5lY3RlZCA9IGZ1bmN0aW9uKCkge307XG4gIH0pO1xufSk7XG5cblNoaW55LmFkZEN1c3RvbU1lc3NhZ2VIYW5kbGVyKCdydXB0dXJlLWl0JywgZnVuY3Rpb24ob3B0cykge1xuICB3YXRjaEFjdGl2aXR5KG9wdHMpO1xufSk7XG5cblNoaW55LmFkZEN1c3RvbU1lc3NhZ2VIYW5kbGVyKCdjbGVhdmUtaXQnLCBmdW5jdGlvbihvcHRzKSB7XG5cbiAgJChkb2N1bWVudCkub24oJ3NoaW55OmVycm9yJywgZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgIGlmKCFvcHRzLnNpbGVudF9lcnJvcnMgJiYgZXZlbnQuZXJyb3IudHlwZSAhPSBudWxsKVxuICAgICAgcmV0dXJuO1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmKG9wdHMuaHRtbCA9PSBudWxsKVxuICAgICAgb3B0cy5odG1sID0gJzxzcGFuPicgKyBldmVudC5lcnJvci5tZXNzYWdlICsgJzwvc3Bhbj4nO1xuXG4gICAgaWYob3B0cy5iZ19jb2xvciA9PSBudWxsKVxuICAgICAgb3B0cy5iZ19jb2xvciA9ICdyZ2JhKDAsMCwwLDApJztcblxuICAgIC8vIGFwcGx5IHRvIGFsbCBcbiAgICBpZihvcHRzLmlkcyA9PSBudWxsKXtcblxuICAgICAgY2xlYXZlKGV2ZW50Lm5hbWUsIG9wdHMuaHRtbCwgb3B0cy5jb2xvciwgb3B0cy5iZ19jb2xvciwgb3B0cy5kdXJhdGlvbiwgb3B0cy5jZW50ZXJfdmVydGljYWwsIG9wdHMuY2VudGVyX2hvcml6b250YWwpXG4gICAgXG4gICAgfSBlbHNlIHsgLy8gYXBwbHkgdG8gcmVsZXZhbnQgaWRzKSA9PiB7XG4gICAgICBvcHRzLmlkcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcblxuICAgICAgICBpZih2YWx1ZSA9PSBldmVudC5uYW1lKXtcbiAgICAgICAgICBjbGVhdmUoZXZlbnQubmFtZSwgb3B0cy5odG1sLCBvcHRzLmNvbG9yLCBvcHRzLmJnX2NvbG9yLCBvcHRzLmR1cmF0aW9uLCBvcHRzLmNlbnRlcl92ZXJ0aWNhbCwgb3B0cy5jZW50ZXJfaG9yaXpvbnRhbClcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICAkKGRvY3VtZW50KS5vbignc2hpbnk6dmFsdWUgc2hpbnk6b3V0cHV0aW52YWxpZGF0ZWQnLCBmdW5jdGlvbihldmVudCl7XG4gICAgaWYob3B0cy5pZHMgPT0gbnVsbCl7XG4gICAgICAkKCcuY2xlYXZlLW92ZXJsYXknKS5yZW1vdmUoKTtcbiAgICB9IGVsc2UgeyAvLyBhcHBseSB0byByZWxldmFudCBpZHMpID0+IHtcbiAgICAgIG9wdHMuaWRzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICBpZih2YWx1ZSA9PSBldmVudC5uYW1lKXtcbiAgICAgICAgICBsZXQgc2VsZWN0b3IgPSAnIycgKyBldmVudC5uYW1lICsgJz4uY2xlYXZlLW92ZXJsYXknO1xuICAgICAgICAgICQoc2VsZWN0b3IpLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG59KTtcblxuLy8gY2hpc2VsXG5TaGlueS5hZGRDdXN0b21NZXNzYWdlSGFuZGxlcignY2hpc2VsLWl0JywgZnVuY3Rpb24ob3B0cykge1xuXG4gICQoZG9jdW1lbnQpLm9uKCdzaGlueTplcnJvcicsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coZXZlbnQpO1xuXG4gICAgaWYoZXZlbnQuZXJyb3IudHlwZSA9PSBudWxsKVxuICAgICAgcmV0dXJuO1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmKG9wdHMuaHRtbCA9PSBudWxsKVxuICAgICAgb3B0cy5odG1sID0gJzxzcGFuPicgKyBldmVudC5lcnJvci5tZXNzYWdlICsgJzwvc3Bhbj4nO1xuXG4gICAgaWYob3B0cy5iZ19jb2xvciA9PSBudWxsKVxuICAgICAgb3B0cy5iZ19jb2xvciA9ICdyZ2JhKDAsMCwwLDApJztcblxuICAgIC8vIGFwcGx5IHRvIGFsbCBcbiAgICBpZihvcHRzLmlkcyA9PSBudWxsKXtcblxuICAgICAgY2xlYXZlKGV2ZW50Lm5hbWUsIG9wdHMuaHRtbCwgb3B0cy5jb2xvciwgb3B0cy5iZ19jb2xvciwgb3B0cy5kdXJhdGlvbiwgb3B0cy5jZW50ZXJfdmVydGljYWwsIG9wdHMuY2VudGVyX2hvcml6b250YWwpXG4gICAgXG4gICAgfSBlbHNlIHsgLy8gYXBwbHkgdG8gcmVsZXZhbnQgaWRzKSA9PiB7XG4gICAgICBvcHRzLmlkcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcblxuICAgICAgICBpZih2YWx1ZSA9PSBldmVudC5uYW1lKXtcbiAgICAgICAgICBjbGVhdmUoZXZlbnQubmFtZSwgb3B0cy5odG1sLCBvcHRzLmNvbG9yLCBvcHRzLmJnX2NvbG9yLCBvcHRzLmR1cmF0aW9uLCBvcHRzLmNlbnRlcl92ZXJ0aWNhbCwgb3B0cy5jZW50ZXJfaG9yaXpvbnRhbClcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICAkKGRvY3VtZW50KS5vbignc2hpbnk6dmFsdWUgc2hpbnk6b3V0cHV0aW52YWxpZGF0ZWQnLCBmdW5jdGlvbihldmVudCl7XG4gICAgaWYob3B0cy5pZHMgPT0gbnVsbCl7XG4gICAgICAkKCcuY2xlYXZlLW92ZXJsYXknKS5yZW1vdmUoKTtcbiAgICB9IGVsc2UgeyAvLyBhcHBseSB0byByZWxldmFudCBpZHMpID0+IHtcbiAgICAgIG9wdHMuaWRzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICBpZih2YWx1ZSA9PSBldmVudC5uYW1lKXtcbiAgICAgICAgICBsZXQgc2VsZWN0b3IgPSAnIycgKyBldmVudC5uYW1lICsgJz4uY2xlYXZlLW92ZXJsYXknO1xuICAgICAgICAgICQoc2VsZWN0b3IpLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG59KTtcblxuZXhwb3J0IHsgdW5ydXB0IH0iXSwic291cmNlUm9vdCI6IiJ9