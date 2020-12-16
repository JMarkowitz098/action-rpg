/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CANVAS_SIDE_LENGTH\": () => /* binding */ CANVAS_SIDE_LENGTH,\n/* harmony export */   \"CANVAS_START_POS\": () => /* binding */ CANVAS_START_POS,\n/* harmony export */   \"HERO_COLOR\": () => /* binding */ HERO_COLOR,\n/* harmony export */   \"UNIT\": () => /* binding */ UNIT\n/* harmony export */ });\nconst CANVAS_SIDE_LENGTH = 300;\nconst CANVAS_START_POS = 100;\n\nconst HERO_COLOR = 'blue';\n\nconst UNIT = 25;\n\n//# sourceURL=webpack://action_rpg/./src/constants.js?");

/***/ }),

/***/ "./src/game_canvas.js":
/*!****************************!*\
  !*** ./src/game_canvas.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero */ \"./src/hero.js\");\n\n\n\n// const getRandPos = () => {\n//     const factor = CONSTANTS.CANVAS_SIDE_LENGTH / CONSTANTS.BLOCK_SIZE\n//     let x = Math.floor(Math.random() * factor) * CONSTANTS.BLOCK_SIZE + 100\n//     let y = Math.floor(Math.random() * factor) * CONSTANTS.BLOCK_SIZE + 100\n//     return { x, y }\n// }\n\nclass GameCanvas {\n    constructor({ ctx }) {\n        this.ctx = ctx;\n        this.clearCanvas = this.clearCanvas.bind(this)\n        this.hero = this.placeHero()\n    }\n\n    placeHero(){\n        const hero = new _hero__WEBPACK_IMPORTED_MODULE_1__.default({pos: {x: 100, y: 100}})\n        return hero;\n    }\n\n    clearCanvas() {\n        const { ctx } = this;\n        ctx.clearRect(\n            _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_SIDE_LENGTH,\n            _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_SIDE_LENGTH,\n            _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_SIDE_LENGTH,\n            _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_SIDE_LENGTH\n        );\n        ctx.fillStyle = \"black\";\n        ctx.fillRect(\n            _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_START_POS,\n            _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_START_POS,\n            _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_SIDE_LENGTH,\n            _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_SIDE_LENGTH\n        );\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameCanvas);\n\n//# sourceURL=webpack://action_rpg/./src/game_canvas.js?");

/***/ }),

/***/ "./src/game_renderer.js":
/*!******************************!*\
  !*** ./src/game_renderer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\n\nclass GameRenderer {\n    constructor({ ctx, gameCanvas }) {\n        this.dirOptions = _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_OPTIONS\n        this.ctx = ctx\n        this.gameCanvas = gameCanvas\n\n        this.step = this.step.bind(this)\n        // this.onKeyDown = this.onKeyDown.bind(this)\n    }\n\n    start() {\n        // this.bindKeyHandlers()\n        requestAnimationFrame(this.step)\n    }\n\n    step() {\n        const { gameCanvas, ctx } = this;\n        gameCanvas.clearCanvas(ctx)\n\n        gameCanvas.hero.draw(ctx);\n\n        requestAnimationFrame(this.step)\n    }\n\n    // onKeyDown(e) {\n    //     const { gameCanvas, dirOptions } = this\n    //     const newDir = dirOptions[e.key];\n\n    //     if (Object.keys(dirOptions).includes(e.key))\n    //         gameCanvas.snake.changeDir(newDir)\n\n    //     // if (e.key === 'q') gameCanvas.snake.increaseLength(); //Cheat\n    // }\n\n    // bindKeyHandlers() {\n    //     document.addEventListener(\"keydown\", this.onKeyDown)\n    // };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameRenderer);\n\n//# sourceURL=webpack://action_rpg/./src/game_renderer.js?");

/***/ }),

/***/ "./src/hero.js":
/*!*********************!*\
  !*** ./src/hero.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\n\nclass Hero {\n    constructor({pos}){\n        this.length = _constants__WEBPACK_IMPORTED_MODULE_0__.UNIT\n        this.color = _constants__WEBPACK_IMPORTED_MODULE_0__.HERO_COLOR\n        this.x = pos.x,\n        this.y = pos.y\n    }\n\n    draw(ctx) {\n        const { length, color, x, y } = this\n        ctx.fillStyle = color;\n\n        ctx.fillRect(x, y, length, length);\n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);\n\n//# sourceURL=webpack://action_rpg/./src/hero.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_canvas */ \"./src/game_canvas.js\");\n/* harmony import */ var _game_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_renderer */ \"./src/game_renderer.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const canvasEl = document.getElementById(\"game-canvas\")\n    const ctx = canvasEl.getContext(\"2d\");\n\n    const gameCanvas = new _game_canvas__WEBPACK_IMPORTED_MODULE_0__.default({ctx})\n    const gameRenderer = new _game_renderer__WEBPACK_IMPORTED_MODULE_1__.default({gameCanvas, ctx})\n\n    gameRenderer.start()\n\n});\n\n//# sourceURL=webpack://action_rpg/./src/index.js?");

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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;