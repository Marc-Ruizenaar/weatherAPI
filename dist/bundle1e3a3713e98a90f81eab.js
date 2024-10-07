/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/font/HelveticaNeueMedium.otf */ "./src/assets/font/HelveticaNeueMedium.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/font/HelveticaNeueRoman.otf */ "./src/assets/font/HelveticaNeueRoman.otf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n  font-family: \"Helvetica Neue\";\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  font-weight: 500;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Helvetica Neue\";\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n  font-weight: 400;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  font-family: \"Helvetica Neue\", sans-serif;\r\n  overflow: hidden;\r\n  margin: 0;\r\n  padding: 20px;\r\n  background-color: #1f1f1f;\r\n  color: white;\r\n\r\n  max-width: 1000px;\r\n  margin: 0 auto;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n  background-color: transparent;\r\n  border: none;\r\n  color: white;\r\n}\r\n\r\n.gray {\r\n  color: #9aa0a6;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-bottom: 40px;\r\n\r\n  form {\r\n    position: relative;\r\n\r\n    button {\r\n      position: absolute;\r\n      right: 15px;\r\n      top: 52%;\r\n      transform: translate(0, -50%);\r\n    }\r\n\r\n    input#place {\r\n      border: none;\r\n      padding: 15px;\r\n      border-radius: 25px;\r\n      background-color: #4d5156;\r\n    }\r\n\r\n    svg {\r\n      width: 25px;\r\n      height: 25px;\r\n      fill: #949fc4;\r\n    }\r\n  }\r\n}\r\n\r\n.weatherDays {\r\n  display: grid;\r\n  grid-template-columns: repeat(8, 1fr);\r\n  gap: 10px;\r\n  margin-top: 40px;\r\n\r\n  @media (max-width: 768px) {\r\n    grid-template-columns: repeat(3, 1fr);\r\n  }\r\n\r\n  .active {\r\n    background-color: #303134;\r\n    border-radius: 10px;\r\n  }\r\n\r\n  #day {\r\n    padding: 10px;\r\n  }\r\n\r\n  div {\r\n    text-align: center;\r\n  }\r\n\r\n  #temp {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    gap: 5px;\r\n  }\r\n}\r\n\r\n.weatherTop {\r\n  display: flex;\r\n  justify-content: space-between;\r\n\r\n  p {\r\n    color: #9e9e9e;\r\n    font-size: 0.85rem;\r\n    line-height: 1.2rem;\r\n    font-weight: 400;\r\n  }\r\n\r\n  .left {\r\n    display: flex;\r\n    align-items: flex-start;\r\n    gap: 10px;\r\n\r\n    .tempature {\r\n      font-size: 2.8rem;\r\n      line-height: 4rem;\r\n    }\r\n\r\n    button {\r\n      font-size: 1rem;\r\n      color: #9aa0a6;\r\n    }\r\n\r\n    .active {\r\n      color: white;\r\n    }\r\n\r\n    .weatherMeasurement {\r\n      display: flex;\r\n      justify-content: center;\r\n      gap: 5px;\r\n\r\n      span {\r\n        color: #9aa0a6;\r\n      }\r\n    }\r\n  }\r\n\r\n  .right {\r\n    text-align: end;\r\n  }\r\n\r\n  @media screen and (max-width: 768px) {\r\n    flex-direction: column-reverse;\r\n\r\n    .right {\r\n      text-align: start;\r\n      margin-bottom: 20px;\r\n    }\r\n\r\n    .left {\r\n      flex-wrap: wrap;\r\n    }\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAAA;EACE,6BAA6B;EAC7B,4CAAkD;EAClD,gBAAgB;AAClB;;AAEA;EACE,6BAA6B;EAC7B,4CAAiD;EACjD,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,yCAAyC;EACzC,gBAAgB;EAChB,SAAS;EACT,aAAa;EACb,yBAAyB;EACzB,YAAY;;EAEZ,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,6BAA6B;EAC7B,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,mBAAmB;;EAEnB;IACE,kBAAkB;;IAElB;MACE,kBAAkB;MAClB,WAAW;MACX,QAAQ;MACR,6BAA6B;IAC/B;;IAEA;MACE,YAAY;MACZ,aAAa;MACb,mBAAmB;MACnB,yBAAyB;IAC3B;;IAEA;MACE,WAAW;MACX,YAAY;MACZ,aAAa;IACf;EACF;AACF;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,SAAS;EACT,gBAAgB;;EAEhB;IACE,qCAAqC;EACvC;;EAEA;IACE,yBAAyB;IACzB,mBAAmB;EACrB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,QAAQ;EACV;AACF;;AAEA;EACE,aAAa;EACb,8BAA8B;;EAE9B;IACE,cAAc;IACd,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;EAClB;;EAEA;IACE,aAAa;IACb,uBAAuB;IACvB,SAAS;;IAET;MACE,iBAAiB;MACjB,iBAAiB;IACnB;;IAEA;MACE,eAAe;MACf,cAAc;IAChB;;IAEA;MACE,YAAY;IACd;;IAEA;MACE,aAAa;MACb,uBAAuB;MACvB,QAAQ;;MAER;QACE,cAAc;MAChB;IACF;EACF;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,8BAA8B;;IAE9B;MACE,iBAAiB;MACjB,mBAAmB;IACrB;;IAEA;MACE,eAAe;IACjB;EACF;AACF","sourcesContent":["@font-face {\r\n  font-family: \"Helvetica Neue\";\r\n  src: url(\"../assets/font/HelveticaNeueMedium.otf\");\r\n  font-weight: 500;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Helvetica Neue\";\r\n  src: url(\"../assets/font/HelveticaNeueRoman.otf\");\r\n  font-weight: 400;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  font-family: \"Helvetica Neue\", sans-serif;\r\n  overflow: hidden;\r\n  margin: 0;\r\n  padding: 20px;\r\n  background-color: #1f1f1f;\r\n  color: white;\r\n\r\n  max-width: 1000px;\r\n  margin: 0 auto;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n  background-color: transparent;\r\n  border: none;\r\n  color: white;\r\n}\r\n\r\n.gray {\r\n  color: #9aa0a6;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-bottom: 40px;\r\n\r\n  form {\r\n    position: relative;\r\n\r\n    button {\r\n      position: absolute;\r\n      right: 15px;\r\n      top: 52%;\r\n      transform: translate(0, -50%);\r\n    }\r\n\r\n    input#place {\r\n      border: none;\r\n      padding: 15px;\r\n      border-radius: 25px;\r\n      background-color: #4d5156;\r\n    }\r\n\r\n    svg {\r\n      width: 25px;\r\n      height: 25px;\r\n      fill: #949fc4;\r\n    }\r\n  }\r\n}\r\n\r\n.weatherDays {\r\n  display: grid;\r\n  grid-template-columns: repeat(8, 1fr);\r\n  gap: 10px;\r\n  margin-top: 40px;\r\n\r\n  @media (max-width: 768px) {\r\n    grid-template-columns: repeat(3, 1fr);\r\n  }\r\n\r\n  .active {\r\n    background-color: #303134;\r\n    border-radius: 10px;\r\n  }\r\n\r\n  #day {\r\n    padding: 10px;\r\n  }\r\n\r\n  div {\r\n    text-align: center;\r\n  }\r\n\r\n  #temp {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    gap: 5px;\r\n  }\r\n}\r\n\r\n.weatherTop {\r\n  display: flex;\r\n  justify-content: space-between;\r\n\r\n  p {\r\n    color: #9e9e9e;\r\n    font-size: 0.85rem;\r\n    line-height: 1.2rem;\r\n    font-weight: 400;\r\n  }\r\n\r\n  .left {\r\n    display: flex;\r\n    align-items: flex-start;\r\n    gap: 10px;\r\n\r\n    .tempature {\r\n      font-size: 2.8rem;\r\n      line-height: 4rem;\r\n    }\r\n\r\n    button {\r\n      font-size: 1rem;\r\n      color: #9aa0a6;\r\n    }\r\n\r\n    .active {\r\n      color: white;\r\n    }\r\n\r\n    .weatherMeasurement {\r\n      display: flex;\r\n      justify-content: center;\r\n      gap: 5px;\r\n\r\n      span {\r\n        color: #9aa0a6;\r\n      }\r\n    }\r\n  }\r\n\r\n  .right {\r\n    text-align: end;\r\n  }\r\n\r\n  @media screen and (max-width: 768px) {\r\n    flex-direction: column-reverse;\r\n\r\n    .right {\r\n      text-align: start;\r\n      margin-bottom: 20px;\r\n    }\r\n\r\n    .left {\r\n      flex-wrap: wrap;\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
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

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
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
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
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
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/scripts/weatherAPI/fetchAPI.js":
/*!********************************************!*\
  !*** ./src/scripts/weatherAPI/fetchAPI.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWeatherApi": () => (/* binding */ getWeatherApi)
/* harmony export */ });
/* harmony import */ var _showResults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showResults */ "./src/scripts/weatherAPI/showResults.js");
/* harmony import */ var _weatherConstructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherConstructor */ "./src/scripts/weatherAPI/weatherConstructor.js");



async function getWeatherApi(locationValueInput) {
  const apiKey = "6e4e86b7f6ae4664a2785516240610"; // Free version of the api without payment connected
  const apiUrl = "http://api.weatherapi.com/v1/";
  const apiForcast = "/forecast.json"; // .xml is also possible
  const apiQ = "&q=" + locationValueInput;
  const apiDays = "&days=3"; // Free verion of the api only allows 3 days
  const fullApiRequest =
    apiUrl + apiForcast + "?key=" + apiKey + apiQ + apiDays;

  try {
    const response = await fetch(fullApiRequest);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    const weatherData = (0,_weatherConstructor__WEBPACK_IMPORTED_MODULE_1__.weatherConstructor)(json);
    (0,_showResults__WEBPACK_IMPORTED_MODULE_0__.showResults)(weatherData);

  } catch (error) {
    console.error(error.message);
  }

}


/***/ }),

/***/ "./src/scripts/weatherAPI/locationInput.js":
/*!*************************************************!*\
  !*** ./src/scripts/weatherAPI/locationInput.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locationInput": () => (/* binding */ locationInput)
/* harmony export */ });
/* harmony import */ var _fetchAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchAPI */ "./src/scripts/weatherAPI/fetchAPI.js");
/* harmony import */ var _showResults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showResults */ "./src/scripts/weatherAPI/showResults.js");



function locationInput() {
  
    const selector = document.querySelector("#place-submit");

    selector.addEventListener("click", (e) => {
        e.preventDefault();
        
        const locationValueInput = document.querySelector("#place").value;

        // Get the weather API and the value of the location
        (0,_fetchAPI__WEBPACK_IMPORTED_MODULE_0__.getWeatherApi)(locationValueInput);

        // After the API is fetched, show the results
        (0,_showResults__WEBPACK_IMPORTED_MODULE_1__.showResults)();

    });
}

/***/ }),

/***/ "./src/scripts/weatherAPI/showResults.js":
/*!***********************************************!*\
  !*** ./src/scripts/weatherAPI/showResults.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showResults": () => (/* binding */ showResults)
/* harmony export */ });
// Modify your showResults function to accept the weather object
function showResults(weatherData) {
  console.log(weatherData);

  const weatherTop = document.querySelector(".weatherTop");

  // Left part of the weather
  const weatherLeft = document.createElement("div");
  weatherLeft.classList.add("left");

  const weatherLeftImg = document.createElement("img");
  weatherLeftImg.classList.add("weatherIcon");
  weatherLeftImg.setAttribute("src", weatherData.forecast[0].condition.icon);

  const weatherLeftTemp = document.createElement("span");
  weatherLeftTemp.innerText = Math.floor(
    weatherData.forecast[0].temp.maxtemp_c
  );
  weatherLeftTemp.classList.add("tempature");

  const weatherLeftMeasurement = document.createElement("div");
  weatherLeftMeasurement.classList.add("weatherMeasurement");

  const weatherLeftButtonC = document.createElement("button");
  weatherLeftButtonC.innerText = "°C";
  weatherLeftButtonC.classList.add("active");
  weatherLeftButtonC.onclick = function () {
    const selectTemp = document.querySelector(".tempature");
    selectTemp.innerText = Math.floor(weatherData.forecast[0].temp.maxtemp_c);

    const selectMaxTemp = document.querySelectorAll(".maxTemp");
    selectMaxTemp.forEach((temp) => {
      temp.innerText = Math.floor(weatherData.forecast[0].temp.maxtemp_c) + "°";
    });

    const selectMinTemp = document.querySelectorAll(".minTemp");
    selectMinTemp.forEach((temp) => {
      temp.innerText = Math.floor(weatherData.forecast[0].temp.mintemp_c) + "°";
    });

    weatherLeftButtonC.classList.add("active");
    weatherLeftButtonF.classList.remove("active");
  };

  const weatherLeftButtonF = document.createElement("button");
  weatherLeftButtonF.innerText = "°F";
  weatherLeftButtonF.onclick = function () {
    const selectTemp = document.querySelector(".tempature");
    selectTemp.innerText = Math.floor(weatherData.forecast[0].temp.maxtemp_f);

    const selectMaxTemp = document.querySelectorAll(".maxTemp");
    selectMaxTemp.forEach((temp) => {
      temp.innerText = Math.floor(weatherData.forecast[0].temp.maxtemp_f) + "°";
    });

    const selectMinTemp = document.querySelectorAll(".minTemp");
    selectMinTemp.forEach((temp) => {
      temp.innerText = Math.floor(weatherData.forecast[0].temp.mintemp_f) + "°";
    });

    weatherLeftButtonC.classList.remove("active");
    weatherLeftButtonF.classList.add("active");
  };

  const weatherOthersDiv = document.createElement("div");

  const weatherLeftP1 = document.createElement("p");
  weatherLeftP1.classList.add("precipitation");
  weatherLeftP1.innerText = `Precipitation probability: ${weatherData.forecast[0].other.precip_mm}%`;

  const weatherLeftP2 = document.createElement("p");
  weatherLeftP2.classList.add("humidity");
  weatherLeftP2.innerText = `Humidity: ${weatherData.forecast[0].other.humidity}%`;

  const weatherLeftP3 = document.createElement("p");
  weatherLeftP3.classList.add("wind");
  weatherLeftP3.innerText = `Wind: ${weatherData.forecast[0].other.wind_kph} m/s`;

  weatherTop.appendChild(weatherLeft);
  weatherLeft.appendChild(weatherLeftImg);
  weatherLeft.appendChild(weatherLeftTemp);
  weatherLeft.appendChild(weatherLeftMeasurement);
  weatherLeftMeasurement.appendChild(weatherLeftButtonC);
  weatherLeftMeasurement.appendChild(weatherLeftButtonF);
  weatherLeft.appendChild(weatherOthersDiv);
  weatherOthersDiv.appendChild(weatherLeftP1);
  weatherOthersDiv.appendChild(weatherLeftP2);
  weatherOthersDiv.appendChild(weatherLeftP3);

  // Right part of the weather
  const weatherRight = document.createElement("div");
  weatherRight.classList.add("right");

  const weatherRightTitle = document.createElement("h2");
  weatherRightTitle.innerText = "Weather";

  const weatherRightDay = document.createElement("p");
  weatherRightDay.classList.add("dayText");
  weatherRightDay.innerText = "Today";

  const weatherRightWeather = document.createElement("p");
  weatherRightWeather.classList.add("weatherText");
  weatherRightWeather.innerText = weatherData.forecast[0].condition.text;

  weatherTop.appendChild(weatherRight);
  weatherRight.appendChild(weatherRightTitle);
  weatherRight.appendChild(weatherRightDay);
  weatherRight.appendChild(weatherRightWeather);

  // Lower part of the weather
  const next3Days = document.querySelector(".weatherDays");

  for (let i = 0; i <= 3; i++) {
    const day = weatherData.forecast[i];
    const date = new Date(day.date);
    const options = { weekday: "short" };
    const currentDayShort = date.toLocaleDateString("en-US", options);

    // Full name of the day
    const optionsFull = { weekday: "long" };
    const currentDay = date.toLocaleDateString("en-US", optionsFull);

    // If date is today name it Today if its tomorrow name it Tomorrow else name it by the day
    let currentDayFull;
    if (i === 0) {
      currentDayFull = "Today";
    } else if (i === 1) {
      currentDayFull = "Tomorrow";
    } else {
      currentDayFull = currentDay;
    }

    
    const gridDays = document.createElement("button");
    gridDays.setAttribute("id", "day");
    if (i === 0) {
      gridDays.classList.add("active");
    }

    gridDays.onclick = function () {
      const activeDays = document.querySelectorAll("#day.active");
      activeDays.forEach((activeDay) => {
      activeDay.classList.remove("active");
      });
      gridDays.classList.add("active");

      const selectImg = document.querySelector(".weatherIcon");
      selectImg.src = day.condition.icon;

      // When Farhenheit is selected show the temperature in F
      //  else show the temperature in Celcius
      if (weatherLeftButtonF.classList.contains("active")) {
        const selectTemp = document.querySelector(".tempature");
        selectTemp.innerText = Math.floor(day.temp.maxtemp_f);
      } else {
        const selectTemp = document.querySelector(".tempature");
        selectTemp.innerText = Math.floor(day.temp.maxtemp_c);
      }

      const selectPrecipitation = document.querySelector(".precipitation");
      selectPrecipitation.innerText = `Precipitation probability: ${day.other.precip_mm}%`;

      const selectHumidity = document.querySelector(".humidity");
      selectHumidity.innerText = `Humidity: ${day.other.humidity}%`;

      const selectWind = document.querySelector(".wind");
      selectWind.innerText = `Wind: ${day.other.wind_kph} m/s`;

      const selectWeather = document.querySelector(".weatherText");
      selectWeather.innerText = day.condition.text;

      const selectDay = document.querySelector(".dayText");
      selectDay.innerText = currentDayFull;
    };

    const pDays = document.createElement("p");
    pDays.innerHTML = currentDayShort;

    const pImg = document.createElement("img");
    pImg.src = day.condition.icon;

    const tempDiv = document.createElement("div");
    tempDiv.setAttribute("id", "temp");

    const tempMaxSpan = document.createElement("span");
    tempMaxSpan.classList.add("maxTemp");
    tempMaxSpan.innerHTML = Math.floor(day.temp.maxtemp_c) + "°";

    const tempMixSpan = document.createElement("span");
    tempMixSpan.classList.add("gray", "minTemp");
    tempMixSpan.innerHTML = Math.floor(day.temp.mintemp_c) + "°";

    next3Days.appendChild(gridDays);
    gridDays.appendChild(pDays);
    gridDays.appendChild(pImg);
    gridDays.appendChild(tempDiv);
    tempDiv.appendChild(tempMaxSpan);
    tempDiv.appendChild(tempMixSpan);
  }
}


/***/ }),

/***/ "./src/scripts/weatherAPI/weatherConstructor.js":
/*!******************************************************!*\
  !*** ./src/scripts/weatherAPI/weatherConstructor.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "weatherConstructor": () => (/* binding */ weatherConstructor)
/* harmony export */ });
function weatherConstructor(json) {
  // Place all the input into the object

  console.log("JSON ", json);

  const weatherType = {
    location: {
      location: json.location.name,
      country: json.location.country,
    },
    forecast: json.forecast.forecastday.map((day) => ({
      date: day.date,
      temp: {
        maxtemp_c: day.day.maxtemp_c,
        mintemp_c: day.day.mintemp_c,
        avgtemp_c: day.day.avgtemp_c,
        maxtemp_f: day.day.maxtemp_f,
        mintemp_f: day.day.mintemp_f,
        avgtemp_f: day.day.avgtemp_f,
      },
      condition: {
        text: day.day.condition.text,
        icon: day.day.condition.icon,
      },
      other: {
        wind_kph: day.day.maxwind_kph,
        humidity: day.day.avghumidity,
        precip_mm: day.day.totalprecip_mm,
      }
    })),
  };

  //   console.log(weatherType);
  return weatherType;
}

/***/ }),

/***/ "./src/assets/font/HelveticaNeueMedium.otf":
/*!*************************************************!*\
  !*** ./src/assets/font/HelveticaNeueMedium.otf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "HelveticaNeueMedium.otf";

/***/ }),

/***/ "./src/assets/font/HelveticaNeueRoman.otf":
/*!************************************************!*\
  !*** ./src/assets/font/HelveticaNeueRoman.otf ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "HelveticaNeueRoman.otf";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _scripts_weatherAPI_locationInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/weatherAPI/locationInput */ "./src/scripts/weatherAPI/locationInput.js");
// Load styles


// Load script


// Weather API scripts
(0,_scripts_weatherAPI_locationInput__WEBPACK_IMPORTED_MODULE_1__.locationInput)();
})();

/******/ })()
;
//# sourceMappingURL=bundle1e3a3713e98a90f81eab.js.map