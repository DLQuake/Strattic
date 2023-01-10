/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/js/app.js":
/*!************************!*\
  !*** ../src/js/app.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sass_app_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/app.sass */ \"../src/sass/app.sass\");\n/* harmony import */ var _sass_app_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_app_sass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _blocks_Quote_clients_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/Quote_clients.block */ \"../src/js/blocks/Quote_clients.block.js\");\n/* harmony import */ var _modules_BurgerMenu_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/BurgerMenu.module */ \"../src/js/modules/BurgerMenu.module.js\");\n/* harmony import */ var _modules_HeaderPrimary_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/HeaderPrimary.module */ \"../src/js/modules/HeaderPrimary.module.js\");\n// import external dependencies\n\n\n\n\n\njquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {\n  _blocks_Quote_clients_block__WEBPACK_IMPORTED_MODULE_2__[\"default\"].init();\n  _modules_BurgerMenu_module__WEBPACK_IMPORTED_MODULE_3__[\"default\"].init();\n  _modules_HeaderPrimary_module__WEBPACK_IMPORTED_MODULE_4__[\"default\"].init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vc3JjL2pzL2FwcC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9zcmMvanMvYXBwLmpzPzdlMDAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IGV4dGVybmFsIGRlcGVuZGVuY2llc1xyXG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcbmltcG9ydCBcIi4uL3Nhc3MvYXBwLnNhc3NcIjtcclxuXHJcbmltcG9ydCBRdW90ZV9jbGllbnRzIGZyb20gXCIuL2Jsb2Nrcy9RdW90ZV9jbGllbnRzLmJsb2NrXCI7XHJcblxyXG5pbXBvcnQgQnVyZ2VyTWVudSBmcm9tIFwiLi9tb2R1bGVzL0J1cmdlck1lbnUubW9kdWxlXCI7XHJcbmltcG9ydCBIZWFkZXJQcmltYXJ5IGZyb20gXCIuL21vZHVsZXMvSGVhZGVyUHJpbWFyeS5tb2R1bGVcIjtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcclxuICBRdW90ZV9jbGllbnRzLmluaXQoKVxyXG4gIEJ1cmdlck1lbnUuaW5pdCgpO1xyXG4gIEhlYWRlclByaW1hcnkuaW5pdCgpO1xyXG59KVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../src/js/app.js\n");

/***/ }),

/***/ "../src/js/blocks/Quote_clients.block.js":
/*!***********************************************!*\
  !*** ../src/js/blocks/Quote_clients.block.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Quote_clients = {\n  settings: {\n    target: '.b-Quote_clients',\n    slider: '.b-Quote_clients__slider'\n  },\n  init: function init(args) {\n    this.settings = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(true, this.settings, args);\n\n    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.settings.target).length > 0) {\n      this.catchDOM(this.settings, this.afterInit.bind(this));\n      this.initSwiper();\n    }\n  },\n  afterInit: function afterInit() {\n    this.bindEvents();\n  },\n  catchDOM: function catchDOM(settings, callback) {\n    var target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(settings.target);\n    this.$target = {\n      root: target,\n      slider: target.find(settings.slider)\n    };\n    callback();\n  },\n  bindEvents: function bindEvents() {},\n  initSwiper: function initSwiper() {\n    var swiper = new Swiper(this.$target.slider[0], {\n      pagination: {\n        el: '.swiper-pagination',\n        type: 'bullets',\n        clickable: true\n      }\n    });\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quote_clients);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vc3JjL2pzL2Jsb2Nrcy9RdW90ZV9jbGllbnRzLmJsb2NrLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL3NyYy9qcy9ibG9ja3MvUXVvdGVfY2xpZW50cy5ibG9jay5qcz81NTc1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmNvbnN0IFF1b3RlX2NsaWVudHMgPSB7XHJcbiAgc2V0dGluZ3M6IHtcclxuICAgIHRhcmdldDogJy5iLVF1b3RlX2NsaWVudHMnLFxyXG4gICAgc2xpZGVyOiAnLmItUXVvdGVfY2xpZW50c19fc2xpZGVyJyxcclxuICB9LFxyXG4gIGluaXQoYXJncykge1xyXG4gICAgdGhpcy5zZXR0aW5ncyA9ICQuZXh0ZW5kKHRydWUsIHRoaXMuc2V0dGluZ3MsIGFyZ3MpO1xyXG4gICAgaWYgKCQodGhpcy5zZXR0aW5ncy50YXJnZXQpLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5jYXRjaERPTSh0aGlzLnNldHRpbmdzLCB0aGlzLmFmdGVySW5pdC5iaW5kKHRoaXMpKTtcclxuICAgICAgdGhpcy5pbml0U3dpcGVyKCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBhZnRlckluaXQoKSB7XHJcbiAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuICB9LFxyXG4gIGNhdGNoRE9NKHNldHRpbmdzLCBjYWxsYmFjaykge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gJChzZXR0aW5ncy50YXJnZXQpO1xyXG4gICAgdGhpcy4kdGFyZ2V0ID0ge1xyXG4gICAgICByb290OiB0YXJnZXQsXHJcbiAgICAgIHNsaWRlcjogdGFyZ2V0LmZpbmQoc2V0dGluZ3Muc2xpZGVyKSxcclxuICAgIH07XHJcbiAgICBjYWxsYmFjaygpO1xyXG4gIH0sXHJcbiAgYmluZEV2ZW50cygpIHtcclxuICB9LFxyXG4gIGluaXRTd2lwZXIoKSB7XHJcbiAgICBjb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKHRoaXMuJHRhcmdldC5zbGlkZXJbMF0sIHtcclxuICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuICAgICAgICB0eXBlOiAnYnVsbGV0cycsXHJcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICB9LFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBRdW90ZV9jbGllbnRzO1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFqQ0E7QUFtQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../src/js/blocks/Quote_clients.block.js\n");

/***/ }),

/***/ "../src/js/modules/BurgerMenu.module.js":
/*!**********************************************!*\
  !*** ../src/js/modules/BurgerMenu.module.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\nvar BurgerMenu = {\n  settings: {\n    target: '.m-BurgerMenu',\n    open: '.m-BurgerMenu__open',\n    close: '.m-BurgerMenu__close',\n    slide: '.m-BurgerMenu__slide',\n    dropButton: '.m-Button.-drop',\n    link: '.m-Button:not(.-drop)'\n  },\n  init: function init(args) {\n    this.settings = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(true, this.settings, args);\n\n    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.settings.target).length > 0) {\n      this.catchDOM(this.settings, this.afterInit.bind(this));\n    }\n  },\n  afterInit: function afterInit() {\n    this.bindEvents();\n  },\n  catchDOM: function catchDOM(settings, callback) {\n    var target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(settings.target);\n    this.$target = {\n      root: target,\n      open: target.find(settings.open),\n      close: target.find(settings.close),\n      slide: target.find(settings.slide),\n      dropButton: target.find(settings.dropButton),\n      link: target.find(settings.link)\n    };\n    callback();\n  },\n  bindEvents: function bindEvents() {\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.$target.open).on('click', this.openMenu.bind(this));\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.$target.close).on('click', this.closeMenu.bind(this));\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.$target.dropButton).on('click', this.dropMenu.bind(this));\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.$target.link).on(\"click\", this.closeMenu.bind(this));\n  },\n  openMenu: function openMenu() {\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.$target.slide).addClass('-open');\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').css('overflow', 'hidden');\n  },\n  closeMenu: function closeMenu() {\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.$target.slide).removeClass('-open');\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeAttr('style');\n  },\n  dropMenu: function dropMenu(e) {\n    var target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget);\n    var drop = jquery__WEBPACK_IMPORTED_MODULE_0___default()(target).siblings('.m-BurgerMenu__drop');\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(drop).slideToggle({\n      duration: 300,\n      start: function start() {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).css('display', 'flex');\n      }\n    }).toggleClass('-open');\n\n    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(drop).hasClass('-open')) {\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(target).find('span').css('transform', 'rotate(-180deg)');\n    } else {\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(target).find('span').removeAttr('style');\n    }\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (BurgerMenu);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vc3JjL2pzL21vZHVsZXMvQnVyZ2VyTWVudS5tb2R1bGUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vc3JjL2pzL21vZHVsZXMvQnVyZ2VyTWVudS5tb2R1bGUuanM/MzRiMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuY29uc3QgQnVyZ2VyTWVudSA9IHtcbiAgc2V0dGluZ3M6IHtcbiAgICB0YXJnZXQ6ICcubS1CdXJnZXJNZW51JyxcbiAgICBvcGVuOiAnLm0tQnVyZ2VyTWVudV9fb3BlbicsXG4gICAgY2xvc2U6ICcubS1CdXJnZXJNZW51X19jbG9zZScsXG4gICAgc2xpZGU6ICcubS1CdXJnZXJNZW51X19zbGlkZScsXG4gICAgZHJvcEJ1dHRvbjogJy5tLUJ1dHRvbi4tZHJvcCcsXG4gICAgbGluazogJy5tLUJ1dHRvbjpub3QoLi1kcm9wKSdcbiAgfSxcbiAgaW5pdChhcmdzKSB7XG4gICAgdGhpcy5zZXR0aW5ncyA9ICQuZXh0ZW5kKHRydWUsIHRoaXMuc2V0dGluZ3MsIGFyZ3MpO1xuICAgIGlmICgkKHRoaXMuc2V0dGluZ3MudGFyZ2V0KS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmNhdGNoRE9NKHRoaXMuc2V0dGluZ3MsIHRoaXMuYWZ0ZXJJbml0LmJpbmQodGhpcykpO1xuICAgIH1cbiAgfSxcbiAgYWZ0ZXJJbml0KCkge1xuICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICB9LFxuICBjYXRjaERPTShzZXR0aW5ncywgY2FsbGJhY2spIHtcbiAgICBjb25zdCB0YXJnZXQgPSAkKHNldHRpbmdzLnRhcmdldCk7XG4gICAgdGhpcy4kdGFyZ2V0ID0ge1xuICAgICAgcm9vdDogdGFyZ2V0LFxuICAgICAgb3BlbjogdGFyZ2V0LmZpbmQoc2V0dGluZ3Mub3BlbiksXG4gICAgICBjbG9zZTogdGFyZ2V0LmZpbmQoc2V0dGluZ3MuY2xvc2UpLFxuICAgICAgc2xpZGU6IHRhcmdldC5maW5kKHNldHRpbmdzLnNsaWRlKSxcbiAgICAgIGRyb3BCdXR0b246IHRhcmdldC5maW5kKHNldHRpbmdzLmRyb3BCdXR0b24pLFxuICAgICAgbGluazogdGFyZ2V0LmZpbmQoc2V0dGluZ3MubGluayksXG4gICAgfTtcbiAgICBjYWxsYmFjaygpO1xuICB9LFxuICBiaW5kRXZlbnRzKCkge1xuICAgICQodGhpcy4kdGFyZ2V0Lm9wZW4pLm9uKCdjbGljaycsIHRoaXMub3Blbk1lbnUuYmluZCh0aGlzKSk7XG4gICAgJCh0aGlzLiR0YXJnZXQuY2xvc2UpLm9uKCdjbGljaycsIHRoaXMuY2xvc2VNZW51LmJpbmQodGhpcykpO1xuICAgICQodGhpcy4kdGFyZ2V0LmRyb3BCdXR0b24pLm9uKCdjbGljaycsIHRoaXMuZHJvcE1lbnUuYmluZCh0aGlzKSk7XG4gICAgJCh0aGlzLiR0YXJnZXQubGluaykub24oXCJjbGlja1wiLCB0aGlzLmNsb3NlTWVudS5iaW5kKHRoaXMpKVxuICB9LFxuICBvcGVuTWVudSgpIHtcbiAgICAkKHRoaXMuJHRhcmdldC5zbGlkZSkuYWRkQ2xhc3MoJy1vcGVuJyk7XG4gICAgJCgnYm9keScpLmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG4gIH0sXG4gIGNsb3NlTWVudSgpIHtcbiAgICAkKHRoaXMuJHRhcmdldC5zbGlkZSkucmVtb3ZlQ2xhc3MoJy1vcGVuJyk7XG4gICAgJCgnYm9keScpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gIH0sXG4gIGRyb3BNZW51KGUpIHtcbiAgICBjb25zdCB0YXJnZXQgPSAkKGUuY3VycmVudFRhcmdldCk7XG4gICAgY29uc3QgZHJvcCA9ICQodGFyZ2V0KS5zaWJsaW5ncygnLm0tQnVyZ2VyTWVudV9fZHJvcCcpO1xuICAgICQoZHJvcCkuc2xpZGVUb2dnbGUoe1xuICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgIHN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS5jc3MoJ2Rpc3BsYXknLCAnZmxleCcpO1xuICAgICAgfVxuICAgIH0pLnRvZ2dsZUNsYXNzKCctb3BlbicpO1xuICAgIGlmICgkKGRyb3ApLmhhc0NsYXNzKCctb3BlbicpKSB7XG4gICAgICAkKHRhcmdldCkuZmluZCgnc3BhbicpLmNzcygndHJhbnNmb3JtJywgJ3JvdGF0ZSgtMTgwZGVnKScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKHRhcmdldCkuZmluZCgnc3BhbicpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgfVxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgQnVyZ2VyTWVudTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTFEQTtBQTREQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../src/js/modules/BurgerMenu.module.js\n");

/***/ }),

/***/ "../src/js/modules/HeaderPrimary.module.js":
/*!*************************************************!*\
  !*** ../src/js/modules/HeaderPrimary.module.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\nvar HeaderPrimary = {\n  settings: {\n    target: '.m-HeaderPrimary',\n    dropButton: '.m-Button.-drop'\n  },\n  init: function init(args) {\n    this.settings = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(true, this.settings, args);\n\n    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.settings.target).length > 0) {\n      this.catchDOM(this.settings, this.afterInit.bind(this));\n    }\n  },\n  afterInit: function afterInit() {\n    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() > 0) {\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.$target.root).addClass('-scroll');\n    }\n\n    this.bindEvents();\n  },\n  catchDOM: function catchDOM(settings, callback) {\n    var target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(settings.target);\n    this.$target = {\n      root: target,\n      dropButton: target.find(settings.dropButton)\n    };\n    callback();\n  },\n  bindEvents: function bindEvents() {\n    var _this = this;\n\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.$target.dropButton).parents(\".m-HeaderPrimary__item\").on('mouseover', this.dropMenu.bind(this));\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.$target.dropButton).parents(\".m-HeaderPrimary__item\").on('mouseleave', this.hideMenu.bind(this));\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('scroll', function () {\n      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() > 0) {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.$target.root).addClass('-scroll');\n      } else {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.$target.root).removeClass('-scroll');\n      }\n    });\n  },\n  dropMenu: function dropMenu(e) {\n    var target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget);\n    var drop = jquery__WEBPACK_IMPORTED_MODULE_0___default()(target).find('.m-HeaderPrimary__drop');\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(drop).slideDown({\n      duration: 300,\n      start: function start() {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).css('display', 'flex');\n      }\n    });\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(target).find(this.settings.dropButton).find('span').css('transform', 'rotate(-180deg)');\n  },\n  hideMenu: function hideMenu(e) {\n    var target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget);\n    var drop = jquery__WEBPACK_IMPORTED_MODULE_0___default()(target).find('.m-HeaderPrimary__drop');\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(drop).slideUp({\n      duration: 300\n    });\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(target).find(this.settings.dropButton).find('span').removeAttr('style');\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeaderPrimary);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vc3JjL2pzL21vZHVsZXMvSGVhZGVyUHJpbWFyeS5tb2R1bGUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vc3JjL2pzL21vZHVsZXMvSGVhZGVyUHJpbWFyeS5tb2R1bGUuanM/MTI0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuY29uc3QgSGVhZGVyUHJpbWFyeSA9IHtcbiAgc2V0dGluZ3M6IHtcbiAgICB0YXJnZXQ6ICcubS1IZWFkZXJQcmltYXJ5JyxcbiAgICBkcm9wQnV0dG9uOiAnLm0tQnV0dG9uLi1kcm9wJ1xuICB9LFxuICBpbml0KGFyZ3MpIHtcbiAgICB0aGlzLnNldHRpbmdzID0gJC5leHRlbmQodHJ1ZSwgdGhpcy5zZXR0aW5ncywgYXJncyk7XG4gICAgaWYgKCQodGhpcy5zZXR0aW5ncy50YXJnZXQpLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuY2F0Y2hET00odGhpcy5zZXR0aW5ncywgdGhpcy5hZnRlckluaXQuYmluZCh0aGlzKSk7XG4gICAgfVxuICB9LFxuICBhZnRlckluaXQoKSB7XG4gICAgaWYgKCQod2luZG93KS5zY3JvbGxUb3AoKSA+IDApIHtcbiAgICAgICQodGhpcy4kdGFyZ2V0LnJvb3QpLmFkZENsYXNzKCctc2Nyb2xsJyk7XG4gICAgfVxuICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICB9LFxuICBjYXRjaERPTShzZXR0aW5ncywgY2FsbGJhY2spIHtcbiAgICBjb25zdCB0YXJnZXQgPSAkKHNldHRpbmdzLnRhcmdldCk7XG4gICAgdGhpcy4kdGFyZ2V0ID0ge1xuICAgICAgcm9vdDogdGFyZ2V0LFxuICAgICAgZHJvcEJ1dHRvbjogdGFyZ2V0LmZpbmQoc2V0dGluZ3MuZHJvcEJ1dHRvbiksXG4gICAgfTtcbiAgICBjYWxsYmFjaygpO1xuICB9LFxuICBiaW5kRXZlbnRzKCkge1xuICAgICQodGhpcy4kdGFyZ2V0LmRyb3BCdXR0b24pLnBhcmVudHMoXCIubS1IZWFkZXJQcmltYXJ5X19pdGVtXCIpLm9uKCdtb3VzZW92ZXInLCB0aGlzLmRyb3BNZW51LmJpbmQodGhpcykpO1xuICAgICQodGhpcy4kdGFyZ2V0LmRyb3BCdXR0b24pLnBhcmVudHMoXCIubS1IZWFkZXJQcmltYXJ5X19pdGVtXCIpLm9uKCdtb3VzZWxlYXZlJywgdGhpcy5oaWRlTWVudS5iaW5kKHRoaXMpKTtcbiAgICAkKHdpbmRvdykub24oJ3Njcm9sbCcsICgpID0+IHtcbiAgICAgIGlmICgkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPiAwKSB7XG4gICAgICAgICQodGhpcy4kdGFyZ2V0LnJvb3QpLmFkZENsYXNzKCctc2Nyb2xsJyk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgJCh0aGlzLiR0YXJnZXQucm9vdCkucmVtb3ZlQ2xhc3MoJy1zY3JvbGwnKTtcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuICBkcm9wTWVudShlKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuICAgIGNvbnN0IGRyb3AgPSAkKHRhcmdldCkuZmluZCgnLm0tSGVhZGVyUHJpbWFyeV9fZHJvcCcpO1xuICAgICQoZHJvcCkuc2xpZGVEb3duKHtcbiAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICBzdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNzcygnZGlzcGxheScsICdmbGV4Jyk7XG4gICAgICB9XG4gICAgfSlcbiAgICAkKHRhcmdldCkuZmluZCh0aGlzLnNldHRpbmdzLmRyb3BCdXR0b24pLmZpbmQoJ3NwYW4nKS5jc3MoJ3RyYW5zZm9ybScsICdyb3RhdGUoLTE4MGRlZyknKTtcbiAgfSxcbiAgaGlkZU1lbnUoZSkge1xuICAgIGNvbnN0IHRhcmdldCA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICBjb25zdCBkcm9wID0gJCh0YXJnZXQpLmZpbmQoJy5tLUhlYWRlclByaW1hcnlfX2Ryb3AnKTtcbiAgICAkKGRyb3ApLnNsaWRlVXAoe1xuICAgICAgZHVyYXRpb246IDMwMCxcbiAgICB9KTtcbiAgICAkKHRhcmdldCkuZmluZCh0aGlzLnNldHRpbmdzLmRyb3BCdXR0b24pLmZpbmQoJ3NwYW4nKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgSGVhZGVyUHJpbWFyeTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBdkRBO0FBeURBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../src/js/modules/HeaderPrimary.module.js\n");

/***/ }),

/***/ "../src/sass/app.sass":
/*!****************************!*\
  !*** ../src/sass/app.sass ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vc3JjL3Nhc3MvYXBwLnNhc3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vc3JjL3Nhc3MvYXBwLnNhc3M/YTVhYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../src/sass/app.sass\n");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = jQuery;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianF1ZXJ5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCI/Y2QwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///jquery\n");

/***/ })

/******/ });