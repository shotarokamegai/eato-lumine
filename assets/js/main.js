/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Util)
/* harmony export */ });
/* harmony import */ var _BrowserUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


/**
 * @example
 * import _ from 'utils/Util';
 * _.r(0,100);
 * _.show(element);
 */
var Util = /*#__PURE__*/function () {
  function Util() {
    _classCallCheck(this, Util);
  }
  _createClass(Util, null, [{
    key: "r",
    value:
    // const RAD = Math.PI / 180; //.017453293

    function r(min, max) {
      return Math.random() * (max - min) + min;
    }
  }, {
    key: "show",
    value: function show(el) {
      if (!el) return;
      Util.removeClass(el, "dn");
      Util.addClass(el, "db");
    }
  }, {
    key: "hide",
    value: function hide(el) {
      if (!el) return;
      Util.addClass(el, "dn");
      Util.removeClass(el, "db");
    }
  }, {
    key: "el",
    value: function el(id) {
      var el = document.getElementById(id);
      if (!el) el = null;
      return el;
    }
  }, {
    key: "elClass",
    value: function elClass(c) {
      var el = document.getElementsByClassName(c);
      if (!el) el = null;
      return el;
    }
  }, {
    key: "find",
    value: function find(el, selector) {
      if (!el) return;
      return el.querySelectorAll(selector);
    }
  }, {
    key: "find1st",
    value: function find1st(el, selector) {
      if (!el) return;
      return el.querySelectorAll(selector)[0];
    }

    // static each(selector)
    // {
    //  let elements = document.querySelectorAll(selector);
    //  Array.prototype.forEach.call(elements, function(el, i){

    //  });
    // }
  }, {
    key: "append",
    value: function append(parent, el) {
      if (!el) return;
      parent.appendChild(el);
    }
  }, {
    key: "empty",
    value: function empty(el) {
      if (!el || !el.innerHTML) return;
      el.innerHTML = '';
    }
  }, {
    key: "getAttr",
    value: function getAttr(el, prop) {
      if (!el) return;
      return el.getAttribute(prop);
    }
  }, {
    key: "setAttr",
    value: function setAttr(el, prop, val) {
      if (!el) return;
      return el.setAttribute(prop, val);
    }
  }, {
    key: "html",
    value: function html(el, src) {
      if (!el || !el.innerHTML) return;
      return el.innerHTML = src;
    }
  }, {
    key: "prepend",
    value: function prepend(parent, el) {
      if (!el) return;
      parent.insertBefore(el, parent.firstChild);
    }
  }, {
    key: "dispose",
    value: function dispose(el) {
      if (!el) return;
      el.innerHTML = "";
      el.parentNode.removeChild(el);
    }
  }, {
    key: "addEvent",
    value: function addEvent(el, type, eventHandler) {
      if (!el || !type || !eventHandler) return null;
      el.addEventListener(type, eventHandler, false);
    }
  }, {
    key: "removeEvent",
    value: function removeEvent(el, type, eventHandler) {
      if (!el || !type || !eventHandler) return null;
      el.removeEventListener(type, eventHandler, false);
    }
  }, {
    key: "getStyle",
    value: function getStyle(aElement, aCssProperty) {
      if (aElement.currentStyle) {
        return aElement.currentStyle[aCssProperty]; //IE
      } else {
        var style = document.defaultView.getComputedStyle(aElement, null);
        return style.getPropertyValue(aCssProperty);
      }
    }

    /**
     * [static] addClass
     * classを追加します
     * IE11でsvgだとコケる
     *
     * @param element:object
     * @param className:string
     */
  }, {
    key: "addClass",
    value: function addClass(el, className) {
      if (!el) return;
      if (el.classList) el.classList.add(className);else {
        // t(el.getAttribute('class'));
        el.setAttribute('class', className);
      }
    }

    /**
     * [static] removeClass
     * classを削除します
     * IE11でsvgだとコケる
     *
     * @param element:object
     * @param className:string
     */
  }, {
    key: "removeClass",
    value: function removeClass(el, className) {
      if (!el) return;
      if (el.classList) el.classList.remove(className);else {
        // t(el.getAttribute('class'));
        el.setAttribute('class', '');
      }
    }

    /**
     * [static] hasClass
     * classを持っているか判別
     *
     * @param element:object
     * @param className:string
     */
  }, {
    key: "hasClass",
    value: function hasClass(el, className) {
      if (!el) return;
      if (el.classList) return el.classList.contains(className);else return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
    }

    /**
     * [static] toggleClass
     *
     * @param element:object
     * @param className:string
     */
  }, {
    key: "toggleClass",
    value: function toggleClass(el, className) {
      if (!el) return;
      if (el.classList) el.classList.toggle(className);
    }
  }, {
    key: "getPageSize",
    value: function getPageSize() {
      var obj = {};
      obj.sx = document.documentElement.scrollLeft || document.body.scrollLeft;
      obj.sy = document.documentElement.scrollTop || document.body.scrollTop;
      obj.ww = document.documentElement.clientWidth || document.body.clientWidth || document.body.scrollWidth;
      obj.wh = document.documentElement.clientHeight || document.body.clientHeight || document.body.scrollHeight;
      obj.dw = document.documentElement.scrollWidth || document.body.scrollWidth;
      obj.dh = document.documentElement.scrollHeight || document.body.scrollHeight;
      return obj;
    }

    // static offset(el)
    // {
    //   if(!el) return;
    //   let rect = el.getBoundingClientRect();
    //   let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    //   let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    //   return {
    //      top  : rect.top + scrollTop
    //     ,left : rect.left + scrollLeft
    //   }
    // }
  }, {
    key: "getRelativePosition",
    value: function getRelativePosition(target) {
      return {
        x: target.offsetLeft,
        y: target.offsetTop
      };
    }
  }, {
    key: "getPosition",
    value: function getPosition(target) {
      var rect = target.getBoundingClientRect();
      var positionX = rect.left;
      var positionY = rect.top;
      var dElm = document.documentElement,
        dBody = document.body;
      var scrollX = dElm.scrollLeft || dBody.scrollLeft;
      var scrollY = dElm.scrollTop || dBody.scrollTop;
      var x = positionX + scrollX >> 0;
      var y = positionY + scrollY >> 0;
      // t( "x:" + x + "px , y:" + y + "px" );

      return {
        x: x,
        y: y
      };
    }
  }, {
    key: "getRect",
    value: function getRect(el) {
      var rect = Util.getPosition(el);
      rect.width = el.offsetWidth;
      rect.height = el.offsetHeight;
      return rect;
    }
  }, {
    key: "getW",
    value: function getW(el) {
      if (!el) return;
      // offsetWidth : width + padding + border
      // clientWidth : width + padding
      return el.offsetWidth;
    }
  }, {
    key: "getH",
    value: function getH(el) {
      if (!el) return;
      return el.offsetHeight;
    }
  }, {
    key: "delayedCall",
    value: function delayedCall(func, wait) {
      var _int = setTimeout(func, wait * 1000);
      return _int;
    }
  }, {
    key: "killDelayedCall",
    value: function killDelayedCall(_int2) {
      clearTimeout(_int2);
    }

    /**
      一文字ずつ足していって指定した行数で三点リーダーを追加
      divのheightは指定しないこと
    */
    // static addEllipsis(el, row = 3, ellipsis = "...")
    // {
    //   let text = el.innerHTML;
    //   if(!el.origin) el.origin = text;

    //   // 1行の高さ取得
    //   el.innerHTML = "a";
    //   let rowHeight = el.clientHeight;
    //   let rowCount = 1;
    //   // 一旦空にする
    //   el.innerHTML = "";

    //   let len = el.origin.length;
    //   for (let i = 0; i < len; i++)
    //   {
    //     let s = el.origin.substring(0, i + 1);
    //     el.innerHTML = s;

    //     let height = el.clientHeight;
    //     if (height > rowHeight)
    //     {
    //       // 高さが変わったら行数インクリメント
    //       rowHeight = height;
    //       rowCount++;

    //       // 指定行数になったら2文字削って ellipsis 追加
    //       if(rowCount > row)
    //       {
    //         el.innerHTML = el.origin.substring(0, i - 2) + ellipsis;
    //         break;
    //       }
    //     }
    //   }
    // };

    // static getImageSize(img)
    // {
    //  let obj = { w:null, h:null };

    //  if( img.naturalWidth !== undefined )
    //  {
    //    obj.w = img.naturalWidth;
    //    obj.h = img.naturalHeight;
    //  }
    //  else if( img.runtimeStyle !== undefined ) // IE
    //  {
    //    let style = img.runtimeStyle;

    //    style.width = "auto";
    //    style.height = "auto";

    //    obj.w = img.width;
    //    obj.h = img.height;
    //  }
    //  else // Opera
    //  {
    //    img.removeAttribute("width");
    //    img.removeAttribute("height");

    //    obj.w = img.width;
    //    obj.h = img.height;
    //  }

    //  return obj;
    // }

    // static click(el, func, timing)
    // {
    //  if(!el || !el.addEventListener) return;
    //  if(BrowserUtil.isSP())
    //  {
    //    if(timing == "touchstart")
    //    {
    //      el.addEventListener("touchstart", func);
    //      el.addEventListener("touchend", null);
    //    }
    //    else
    //    {
    //      el.addEventListener("touchstart", null);
    //      el.addEventListener("touchend", func);
    //    }
    //  }
    //  else
    //  {
    //    el.addEventListener("click", func);
    //    el.style.cursor = "pointer" ;
    //  }

    //  //offClick用に返す
    //  return func;
    // }

    // static offClick(el, func, timing)
    // {
    //  if(!el || !el.addEventListener) return;

    //  if(BrowserUtil.isSP())
    //  {
    //    if(timing == "touchstart")
    //    {
    //      el.removeEventListener("touchstart", func);
    //      el.removeEventListener("touchend", null);
    //    }
    //    else
    //    {
    //      el.removeEventListener("touchstart", null);
    //      el.removeEventListener("touchend", func);
    //    }
    //  }
    //  else
    //  {
    //    el.removeEventListener("click", func);
    //    el.style.cursor = "auto";
    //  }
    // }

    // static over(el, func)
    // {
    //  if(!el) return;
    //  el.addEventListener("mouseover", func);

    //  //offOver用に返す
    //  return func;
    // }

    // static offOver(el, func)
    // {
    //  if(!el) return;
    //  el.removeEventListener("mouseover", func);
    // }

    // static out(el, func)
    // {
    //  if(!el) return;
    //  el.addEventListener("mouseout", func);

    //  //offOut用に返す
    //  return func;
    // }

    // static offOut(el, func)
    // {
    //  if(!el) return;
    //  el.removeEventListener("mouseout", func);
    // }

    /**
     * [sortObjectArray] 複製せず配列そのものをソート
     * @param  {[type]} data  array
     * @param  {[type]} key   value
     * @param  {[type]} order asc or desc
     * @return {[type]}       sorted array
     */
  }, {
    key: "sortObjectArray",
    value: function sortObjectArray(arr, key, order) {
      //デフォルトでは降順(DESC)
      var num_a = -1;
      var num_b = 1;
      if (order === 'asc') {
        //指定があれば昇順(ASC)
        num_a = 1;
        num_b = -1;
      }
      arr = arr.sort(function (a, b) {
        var x = a[key];
        var y = b[key];
        if (x > y) return num_a;
        if (x < y) return num_b;
        return 0;
      });
    }
  }, {
    key: "shuffle",
    value: function shuffle(arr) {
      var i, j, temp;
      arr = arr.slice();
      i = arr.length;
      if (i === 0) {
        return arr;
      }
      while (--i) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      return arr;
    }
  }]);
  return Util;
}();


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BrowserUtil)
/* harmony export */ });


/**
 * @example
 * import BrowserUtil from 'utils/BrowserUtil';
 * let ua = BrowserUtil.getUserAgent();
 */
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var BrowserUtil = /*#__PURE__*/function () {
  function BrowserUtil() {
    _classCallCheck(this, BrowserUtil);
  }
  _createClass(BrowserUtil, null, [{
    key: "getUserAgent",
    value:
    /**
    * [static] getUserAgent
    * UserAgentを取得します.
    */
    function getUserAgent() {
      var ua = navigator.userAgent;
      if (ua.indexOf("iPhone") != -1) return "IPHONE";else if (ua.indexOf("Android") != -1) return "ANDROID";else if (ua.indexOf("iPad") != -1) return "IPAD";
      return "PC";
    }
  }, {
    key: "isSP",
    value:
    /**
    * [static] isSP
    * モバイル端末かを判別します.
    */
    function isSP() {
      var ua = navigator.userAgent;
      if (ua.indexOf('iPhone') > 0 && ua.indexOf('iPad') == -1 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) return true;
      return false;
    }
  }, {
    key: "isTablet",
    value:
    /**
    * [static] isTablet
    * タブレットかを判別します.
    */
    function isTablet() {
      var ua = navigator.userAgent;
      if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') == -1) return true;
      return false;
    }
  }, {
    key: "checkSpWebView",
    value: function checkSpWebView() {
      var ua = navigator.userAgent.toLowerCase();
      var isTW = /twitter/.test(ua);
      var isFB = /fbav/.test(ua);
      var isLN = /line/.test(ua);
      if (isTW || isFB || isLN) return true;else return false;
    }
  }, {
    key: "isWindows",
    value: function isWindows() {
      return navigator.userAgent.toLowerCase().indexOf('windows') > 0;
    }
  }, {
    key: "getAndroidVersion",
    value:
    /**
     * Androidバージョンを返す
     * @return version : number --> 4.2, 5.0 など
     */
    function getAndroidVersion() {
      var version = -1;
      var ua = navigator.userAgent;
      if (ua.indexOf("Android") > 0) {
        version = parseFloat(ua.slice(ua.indexOf("Android") + 8));
      }
      return version;
    }
  }, {
    key: "isAndroidAOSP",
    value:
    /**
     * android標準ブラウザかどうか
     */
    function isAndroidAOSP() {
      var isNormalBrowser = false;
      if (BrowserUtil.getAndroidVersion() <= 4.4 && BrowserUtil.getUserAgent() == "ANDROID") {
        if ('AudioContext' in window) {} else {
          isNormalBrowser = true;
        }
      }
      return isNormalBrowser;
    }
  }, {
    key: "getiOSVersion",
    value:
    /**
     * iOSバージョンを返す
     * @return version : 百倍されたnumber 9.2 --> 920
     */
    function getiOSVersion() {
      var version = -1;
      var ios_ua = navigator.userAgent;
      if (ios_ua.indexOf("iPhone") > 0) {
        ios_ua.match(/iPhone OS (\w+){1,3}/g);
        version = (RegExp.$1.replace(/_/g, '') + '00').slice(0, 3);
      } else if (ios_ua.indexOf("iPad") > 0) {
        ios_ua.match(/CPU OS (\w+){1,3}/g);
        version = (RegExp.$1.replace(/_/g, '') + '00').slice(0, 3);
      }
      return version;
    }
  }, {
    key: "getBrowser",
    value: function getBrowser() {
      var ua = navigator.userAgent.toLowerCase();
      var ver = navigator.appVersion.toLowerCase();
      var name = 'unknown';
      if (ua.indexOf("msie") != -1) {
        if (ver.indexOf("msie 6.") != -1) {
          name = 'ie6';
        } else if (ver.indexOf("msie 7.") != -1) {
          name = 'ie7';
        } else if (ver.indexOf("msie 8.") != -1) {
          name = 'ie8';
        } else if (ver.indexOf("msie 9.") != -1) {
          name = 'ie9';
        } else if (ver.indexOf("msie 10.") != -1) {
          name = 'ie10';
        } else {
          name = 'ie';
        }
      } else if (ua.indexOf('trident/7') != -1) {
        name = 'ie11';
      } else if (ua.indexOf('edge') != -1) {
        name = 'edge';
      } else if (ua.indexOf('chrome') != -1) {
        name = 'chrome';
      } else if (ua.indexOf('safari') != -1) {
        name = 'safari';
      } else if (ua.indexOf('opera') != -1) {
        name = 'opera';
      } else if (ua.indexOf('firefox') != -1) {
        name = 'firefox';
      }
      return name;
    }
  }, {
    key: "getQuery",
    value:
    /**
    * [static] getLocationSearch
    * ページのパラメータを全て取得します.
    */
    // static getLocationSearch()
    // {
    //   if(window.location.search) return window.location.search.substring(1,window.location.search.length);
    //   return null;
    // };

    /**
    * [static] getQuery
    * ページのパラメータをオブジェクトで返します.
    */
    function getQuery() {
      var query = window.location.search;
      var params = {};
      if (query) {
        var reg = query.match(/(.*)(\?)(.*)/);
        if (RegExp.$3) {
          var a = RegExp.$3.split("&");
          if (a) {
            for (var k = 0; k < a.length; k++) {
              var p = a[k].split("=");
              if (p[0]) params[p[0]] = p[1];
            }
          } else return false;
        } else return false;
      } else return false;
      return params;
    }
  }, {
    key: "removeQuery",
    value:
    /**
    * [static] removeQuery
    * ページのパラメータを消す
    */
    function removeQuery() {
      if (window.history && window.history.pushState) {
        var url = location.href;
        if (url.indexOf("?") > -1) {
          url = url.split("?")[0];
          window.history.pushState("", document.title, url);
        }
      }
    }
  }]);
  return BrowserUtil;
}();


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Scroll)
/* harmony export */ });


// import DisableCover from 'controller/DisableCover';

/**
 * import Scroll from 'utils/Scroll';
 */
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Scroll = /*#__PURE__*/function () {
  function Scroll() {
    _classCallCheck(this, Scroll);
  }
  _createClass(Scroll, null, [{
    key: "to",
    value:
    /**
     * @example Scroll.to(0,1,Power2.easeOut);
     */
    function to(y) {
      var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : .3;
      var ease = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Power3.easeInOut;
      TweenMax.to([document.body, document.documentElement], time, {
        scrollTop: y,
        ease: ease
      });

      // DisableCover.timer(time);
    }

    /**
     * @example Scroll.set(0);
     */
  }, {
    key: "set",
    value: function set() {
      var y = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var tgt;
      if ('scrollingElement' in document) tgt = document.scrollingElement;else if ('WebkitAppearance' in document.documentElement.style) tgt = document.body;else tgt = document.documentElement;
      tgt.scrollTop = y;
    }
  }]);
  return Scroll;
}();


/***/ })
/******/ 	]);
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
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _utils_Scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



// import frag from "./../../assets/shader/main.frag?raw";
// import vert from "./../../assets/shader/main.vert?raw";
var main = /*#__PURE__*/function () {
  function main() {
    var _this = this;
    _classCallCheck(this, main);
    this.pageSize = _utils_Util__WEBPACK_IMPORTED_MODULE_0__["default"].getPageSize();
    this.width = this.pageSize.ww;
    this.height = this.pageSize.wh;
    // this.width = window.innerWidth;
    // this.height = window.innerWidth;
    this.header = document.getElementById('header');
    this.toTop = document.getElementById('to-top');
    this.top = document.getElementById('top');
    this.logo = document.getElementById('logo');
    this.menu = document.getElementById('menu');
    this.footer = document.getElementById('footer');
    this.qa = document.getElementsByClassName('q');
    this.swiperContainer = document.getElementsByClassName('swiper-container');
    this.qaFaq = document.getElementsByClassName('qa-faq');
    this.scrollTrigger = document.getElementsByClassName('scroll-trigger');
    this.menuTrigger = document.getElementsByClassName('menu-trigger');
    this.scroller = document.body;
    this.scrollingElement = 'scrollingElement' in document ? document.scrollingElement : window.navigator.userAgent.indexOf('WebKit') != -1 ? body : document.documentElement || body.parentNode;
    gsap.registerPlugin(ScrollTrigger);
    this.init();
    this.animationScroll();
    for (var i = 0; i < this.menuTrigger.length; i++) {
      this.menuTrigger[i].addEventListener('click', this.triggerMenu.bind(this));
    }
    for (var _i = 0; _i < this.qa.length; _i++) {
      this.qa[_i].addEventListener('click', this.triggerQa.bind(this));
    }
    for (var _i2 = 0; _i2 < this.scrollTrigger.length; _i2++) {
      this.scrollTrigger[_i2].addEventListener('click', this.toScroll.bind(this));
    }
    window.onresize = function () {
      _this.resizeEvent();
    };
    window.onscroll = function () {
      _this.scrollAnimation();
    };
  }
  _createClass(main, [{
    key: "triggerMenu",
    value: function triggerMenu() {
      if (this.menu.classList.contains('active')) {
        this.menu.classList.remove('active');
        for (var i = 0; i < this.menuTrigger.length; i++) {
          this.menuTrigger[i].classList.remove('active');
        }
      } else {
        this.menu.classList.add('active');
        for (var _i3 = 0; _i3 < this.menuTrigger.length; _i3++) {
          this.menuTrigger[_i3].classList.add('active');
        }
      }
    }
  }, {
    key: "detectHeight",
    value: function detectHeight() {
      for (var i = 0; i < this.qaFaq.length; i++) {
        var faq = this.qaFaq[i];
        var a = faq.getElementsByClassName('a')[0];
        var aInner = faq.getElementsByClassName('a__inner')[0];
        if (faq.classList.contains('active')) {
          a.setAttribute('style', "height: ".concat(aInner.clientHeight, "px"));
        }
      }
    }
  }, {
    key: "animationScroll",
    value: function animationScroll() {
      var addactive = document.getElementsByClassName('addactive');
      var _loop = function _loop() {
        var elm = addactive[i];
        var start = "top center+=".concat(window.innerHeight / 2);
        if (elm.classList.contains('first')) {
          start = "top center+=".concat(window.innerHeight / 2);
        }
        gsap.to(elm, {
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: elm,
            start: start,
            onEnter: function onEnter() {
              elm.classList.add('active');
              if (elm.classList.contains('show')) {
                setTimeout(function () {
                  elm.classList.add('nowillchange');
                }, 3000);
              }
            }
          }
        });
      };
      for (var i = 0; i < addactive.length; i++) {
        _loop();
      }
    }
  }, {
    key: "triggerQa",
    value: function triggerQa(e) {
      var elm;
      if (e instanceof HTMLElement) {
        elm = e;
      } else {
        elm = e.currentTarget;
      }
      var parent = elm.parentNode;
      var a = parent.getElementsByClassName('a')[0];
      var aInner = a.getElementsByClassName('a__inner')[0];
      if (parent.classList.contains('active')) {
        parent.classList.remove('active');
        a.setAttribute('style', "height: 0");
      } else {
        parent.classList.add('active');
        a.setAttribute('style', "height: ".concat(aInner.clientHeight, "px"));
      }
    }
  }, {
    key: "toScroll",
    value: function toScroll(e) {
      var elm = e.currentTarget;
      var target = document.getElementById(elm.getAttribute('data-target'));
      var elemRect = target.getBoundingClientRect();
      var scrollY = window.scrollY || window.pageYOffset;
      var top = elemRect.top + scrollY;
      top -= this.header.clientHeight;
      _utils_Scroll__WEBPACK_IMPORTED_MODULE_1__["default"].to(top, 2);
      if (elm.classList.contains('open')) {
        this.triggerQa(target.getElementsByClassName('q')[0]);
      }
    }
  }, {
    key: "initSwiper",
    value: function initSwiper() {
      for (var i = 0; i < this.swiperContainer.length; i++) {
        var thisSwiper = this.swiperContainer[i];
        var space = 20;
        var slides = 2.5;
        var speed = 700;
        var loop = true;
        var initialSlide = 0;
        var autoplay = {
          delay: 3000,
          // pauseOnMouseEnter: true,
          disableOnInteraction: false
        };
        if (thisSwiper.classList.contains('marquee-slider')) {
          speed = 8000;
          slides = 3.5;
          autoplay = {
            delay: 0,
            // pauseOnMouseEnter: true,
            disableOnInteraction: false
          };
          if (this.width < 750) {
            slides = 1.5;
            space = this.width * .04;
          } else {}
        }
        new Swiper(thisSwiper, {
          // Optional parameters
          // direction: 'vertical',
          speed: speed,
          // initialSlide: initialSlide,
          loop: loop,
          autoplay: autoplay,
          slidesPerView: slides,
          spaceBetween: space,
          on: {
            init: function init() {
              ScrollTrigger.refresh();
            }
          }
        });
      }
    }
  }, {
    key: "init",
    value: function init() {
      var _this2 = this;
      this.resizeEvent();
      window.scrollTo(0, 0);
      document.body.classList.add('loaded');
      this.initSwiper();
      setTimeout(function () {
        _this2.logo.setAttribute('src', './assets/img/logo.gif');
        _this2.logo.classList.add('visible');
      }, 500);
    }
  }, {
    key: "resizeEvent",
    value: function resizeEvent() {
      var vh = window.innerHeight * 0.01;
      // カスタム変数--vhの値をドキュメントのルートに設定
      document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
      this.detectHeight();
    }
  }, {
    key: "scrollAnimation",
    value: function scrollAnimation() {
      this.scrollY = this.scrollingElement.scrollTop;
      if (this.scrollY > this.height) {
        this.toTop.classList.add('active');
      } else {
        this.toTop.classList.remove('active');
      }
    }
  }]);
  return main;
}();
window.addEventListener("load", function () {
  new main();
});
})();

/******/ })()
;