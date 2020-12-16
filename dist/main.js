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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UNIT\": () => /* binding */ UNIT,\n/* harmony export */   \"CANVAS_SIDE_LENGTH\": () => /* binding */ CANVAS_SIDE_LENGTH,\n/* harmony export */   \"CANVAS_START_POS\": () => /* binding */ CANVAS_START_POS,\n/* harmony export */   \"CANVAS_UP_BOUNDARY\": () => /* binding */ CANVAS_UP_BOUNDARY,\n/* harmony export */   \"CANVAS_DOWN_BOUNDARY\": () => /* binding */ CANVAS_DOWN_BOUNDARY,\n/* harmony export */   \"CANVAS_LEFT_BOUNDARY\": () => /* binding */ CANVAS_LEFT_BOUNDARY,\n/* harmony export */   \"CANVAS_RIGHT_BOUNDARY\": () => /* binding */ CANVAS_RIGHT_BOUNDARY,\n/* harmony export */   \"DIR_DOWN\": () => /* binding */ DIR_DOWN,\n/* harmony export */   \"DIR_LEFT\": () => /* binding */ DIR_LEFT,\n/* harmony export */   \"DIR_RIGHT\": () => /* binding */ DIR_RIGHT,\n/* harmony export */   \"DIR_UP\": () => /* binding */ DIR_UP,\n/* harmony export */   \"DIR_OPTIONS\": () => /* binding */ DIR_OPTIONS,\n/* harmony export */   \"HERO_COLOR\": () => /* binding */ HERO_COLOR,\n/* harmony export */   \"HERO_SIZE\": () => /* binding */ HERO_SIZE,\n/* harmony export */   \"HERO_MOVE_LENGTH\": () => /* binding */ HERO_MOVE_LENGTH,\n/* harmony export */   \"HERO_START_POS\": () => /* binding */ HERO_START_POS\n/* harmony export */ });\nconst UNIT = 5;\n\nconst CANVAS_SIDE_LENGTH = 300;\nconst CANVAS_START_POS = 100;\nconst CANVAS_UP_BOUNDARY = 0 + CANVAS_START_POS;\nconst CANVAS_DOWN_BOUNDARY = 0 + CANVAS_START_POS + CANVAS_SIDE_LENGTH;\nconst CANVAS_LEFT_BOUNDARY = 0 + CANVAS_START_POS;\nconst CANVAS_RIGHT_BOUNDARY = 0 + CANVAS_START_POS + CANVAS_SIDE_LENGTH;;\n\nconst DIR_DOWN = 'down'\nconst DIR_LEFT = 'left'\nconst DIR_RIGHT = 'right'\nconst DIR_UP = 'up'\nconst DIR_OPTIONS = {\n    w: DIR_UP,\n    a: DIR_LEFT,\n    s: DIR_DOWN,\n    d: DIR_RIGHT,\n    ArrowUp: DIR_UP,\n    ArrowLeft: DIR_LEFT,\n    ArrowRight: DIR_RIGHT,\n    ArrowDown: DIR_DOWN,\n}\n\nconst HERO_COLOR = 'blue';\nconst HERO_SIZE = UNIT * 5;\nconst HERO_MOVE_LENGTH = UNIT * 2;\nconst HERO_START_POS = { x: CANVAS_START_POS, y: CANVAS_START_POS}\n\n\n\n//# sourceURL=webpack://action_rpg/./src/constants.js?");

/***/ }),

/***/ "./src/game_canvas.js":
/*!****************************!*\
  !*** ./src/game_canvas.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero */ \"./src/hero.js\");\n\n\n\n// const getRandPos = () => {\n//     const factor = CONSTANTS.CANVAS_SIDE_LENGTH / CONSTANTS.BLOCK_SIZE\n//     let x = Math.floor(Math.random() * factor) * CONSTANTS.BLOCK_SIZE + 100\n//     let y = Math.floor(Math.random() * factor) * CONSTANTS.BLOCK_SIZE + 100\n//     return { x, y }\n// }\n\nclass GameCanvas {\n    constructor({ ctx }) {\n        this.ctx = ctx;\n        this.clearCanvas = this.clearCanvas.bind(this)\n        this.hero = this.placeHero()\n    }\n\n    placeHero(){\n        const hero = new _hero__WEBPACK_IMPORTED_MODULE_1__.default({pos: _constants__WEBPACK_IMPORTED_MODULE_0__.HERO_START_POS})\n        return hero;\n    }\n\n    clearCanvas() {\n        const { ctx } = this;\n        ctx.clearRect(\n            _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_SIDE_LENGTH,\n            _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_SIDE_LENGTH,\n            _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_SIDE_LENGTH,\n            _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_SIDE_LENGTH\n        );\n        ctx.fillStyle = \"black\";\n        ctx.fillRect(\n            _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_START_POS,\n            _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_START_POS,\n            _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_SIDE_LENGTH,\n            _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_SIDE_LENGTH\n        );\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameCanvas);\n\n//# sourceURL=webpack://action_rpg/./src/game_canvas.js?");

/***/ }),

/***/ "./src/game_renderer.js":
/*!******************************!*\
  !*** ./src/game_renderer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\n\nclass GameRenderer {\n    constructor({ ctx, gameCanvas }) {\n        this.dirOptions = _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_OPTIONS\n        this.ctx = ctx\n        this.gameCanvas = gameCanvas\n\n        this.step = this.step.bind(this)\n        this.onKeyDown = this.onKeyDown.bind(this)\n    }\n\n    start() {\n        this.bindKeyHandlers()\n        requestAnimationFrame(this.step)\n    }\n\n    step() {\n        const { gameCanvas, ctx } = this;\n        gameCanvas.clearCanvas(ctx)\n\n        gameCanvas.hero.draw(ctx);\n\n        requestAnimationFrame(this.step)\n    }\n\n    onKeyDown(e) {\n        const { gameCanvas, dirOptions } = this\n        console.log(e.key)\n\n        if (Object.keys(dirOptions).includes(e.key))\n            gameCanvas.hero.move(dirOptions[e.key])\n    }\n\n    bindKeyHandlers() {\n        document.addEventListener(\"keydown\", this.onKeyDown)\n    };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameRenderer);\n\n//# sourceURL=webpack://action_rpg/./src/game_renderer.js?");

/***/ }),

/***/ "./src/hero.js":
/*!*********************!*\
  !*** ./src/hero.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\n\nclass Hero {\n    constructor({pos}){\n        this.length = _constants__WEBPACK_IMPORTED_MODULE_0__.HERO_SIZE\n        this.color = _constants__WEBPACK_IMPORTED_MODULE_0__.HERO_COLOR\n        this.x = pos.x,\n        this.y = pos.y\n    }\n\n    draw(ctx) {\n        const { length, color, x, y } = this\n        ctx.fillStyle = color;\n\n        ctx.fillRect(x, y, length, length);\n    }\n\n    move(dir){\n        const {x,y} = this\n        switch (dir) {\n            case _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_UP:\n                let newUp = y - _constants__WEBPACK_IMPORTED_MODULE_0__.HERO_MOVE_LENGTH\n                if (newUp >= _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_UP_BOUNDARY) this.y = newUp\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_DOWN:\n                let newDown = y + _constants__WEBPACK_IMPORTED_MODULE_0__.HERO_MOVE_LENGTH\n                if (newDown <= \n                    _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_DOWN_BOUNDARY - _constants__WEBPACK_IMPORTED_MODULE_0__.HERO_SIZE) \n                        this.y = newDown\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_LEFT:\n                let newLeft = x - _constants__WEBPACK_IMPORTED_MODULE_0__.HERO_MOVE_LENGTH\n                if (newLeft >= _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_LEFT_BOUNDARY) this.x = newLeft\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_RIGHT:\n                let newRight = x + _constants__WEBPACK_IMPORTED_MODULE_0__.HERO_MOVE_LENGTH\n                if (newRight <=\n                    _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_DOWN_BOUNDARY - _constants__WEBPACK_IMPORTED_MODULE_0__.HERO_SIZE)\n                    this.x = newRight\n                break;\n        }\n    }\n\n    validMove(newPos, boundary){\n        return\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);\n\n//# sourceURL=webpack://action_rpg/./src/hero.js?");

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