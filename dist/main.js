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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UNIT\": () => /* binding */ UNIT,\n/* harmony export */   \"CANVAS_SIDE_LENGTH\": () => /* binding */ CANVAS_SIDE_LENGTH,\n/* harmony export */   \"CANVAS_START_POS\": () => /* binding */ CANVAS_START_POS,\n/* harmony export */   \"CANVAS_COLOR\": () => /* binding */ CANVAS_COLOR,\n/* harmony export */   \"CANVAS_UP_BOUNDARY\": () => /* binding */ CANVAS_UP_BOUNDARY,\n/* harmony export */   \"CANVAS_DOWN_BOUNDARY\": () => /* binding */ CANVAS_DOWN_BOUNDARY,\n/* harmony export */   \"CANVAS_LEFT_BOUNDARY\": () => /* binding */ CANVAS_LEFT_BOUNDARY,\n/* harmony export */   \"CANVAS_RIGHT_BOUNDARY\": () => /* binding */ CANVAS_RIGHT_BOUNDARY,\n/* harmony export */   \"DIR_DOWN\": () => /* binding */ DIR_DOWN,\n/* harmony export */   \"DIR_LEFT\": () => /* binding */ DIR_LEFT,\n/* harmony export */   \"DIR_RIGHT\": () => /* binding */ DIR_RIGHT,\n/* harmony export */   \"DIR_UP\": () => /* binding */ DIR_UP,\n/* harmony export */   \"DIR_LEFT_UP\": () => /* binding */ DIR_LEFT_UP,\n/* harmony export */   \"DIR_RIGHT_UP\": () => /* binding */ DIR_RIGHT_UP,\n/* harmony export */   \"DIR_DOWN_RIGHT\": () => /* binding */ DIR_DOWN_RIGHT,\n/* harmony export */   \"DIR_DOWN_LEFT\": () => /* binding */ DIR_DOWN_LEFT,\n/* harmony export */   \"DIR_POSSIBLE_MOVES\": () => /* binding */ DIR_POSSIBLE_MOVES,\n/* harmony export */   \"DIR_OPTIONS\": () => /* binding */ DIR_OPTIONS,\n/* harmony export */   \"ENEMY_SIZE\": () => /* binding */ ENEMY_SIZE,\n/* harmony export */   \"ENEMY_COLOR\": () => /* binding */ ENEMY_COLOR,\n/* harmony export */   \"ENEMY_MOVE_LENGTH\": () => /* binding */ ENEMY_MOVE_LENGTH,\n/* harmony export */   \"HERO_COLOR\": () => /* binding */ HERO_COLOR,\n/* harmony export */   \"HERO_DASH_KEY\": () => /* binding */ HERO_DASH_KEY,\n/* harmony export */   \"HERO_DASH_VEL\": () => /* binding */ HERO_DASH_VEL,\n/* harmony export */   \"HERO_SIZE\": () => /* binding */ HERO_SIZE,\n/* harmony export */   \"HERO_MOVE_LENGTH\": () => /* binding */ HERO_MOVE_LENGTH,\n/* harmony export */   \"HERO_START_POS\": () => /* binding */ HERO_START_POS\n/* harmony export */ });\nconst UNIT = 5;\n\nconst CANVAS_SIDE_LENGTH = 500;\nconst CANVAS_START_POS = 50;\nconst CANVAS_COLOR = 'black';\nconst CANVAS_UP_BOUNDARY = 0 + CANVAS_START_POS;\nconst CANVAS_DOWN_BOUNDARY = 0 + CANVAS_START_POS + CANVAS_SIDE_LENGTH;\nconst CANVAS_LEFT_BOUNDARY = 0 + CANVAS_START_POS;\nconst CANVAS_RIGHT_BOUNDARY = 0 + CANVAS_START_POS + CANVAS_SIDE_LENGTH;;\n\nconst DIR_DOWN = 'down'\nconst DIR_LEFT = 'left'\nconst DIR_RIGHT = 'right'\nconst DIR_UP = 'up'\nconst DIR_LEFT_UP = DIR_LEFT + ' ' + DIR_UP\nconst DIR_RIGHT_UP = DIR_RIGHT + ' ' + DIR_UP\nconst DIR_DOWN_RIGHT = DIR_DOWN + ' ' + DIR_RIGHT\nconst DIR_DOWN_LEFT = DIR_DOWN + ' ' + DIR_LEFT\nconst DIR_POSSIBLE_MOVES = [\n    DIR_DOWN,\n    DIR_LEFT,\n    DIR_UP,\n    DIR_RIGHT,\n    DIR_LEFT_UP,\n    DIR_RIGHT_UP,\n    DIR_DOWN_RIGHT,\n    DIR_DOWN_LEFT\n]\n\nconst DIR_OPTIONS = {\n    w: DIR_UP,\n    a: DIR_LEFT,\n    s: DIR_DOWN,\n    d: DIR_RIGHT,\n    ArrowUp: DIR_UP,\n    ArrowLeft: DIR_LEFT,\n    ArrowRight: DIR_RIGHT,\n    ArrowDown: DIR_DOWN,\n}\n\nconst ENEMY_SIZE = UNIT * 3\nconst ENEMY_COLOR = 'red'\nconst ENEMY_MOVE_LENGTH = 2\n\nconst HERO_COLOR = 'blue';\nconst HERO_DASH_KEY = 'z';\nconst HERO_DASH_VEL = 3;\nconst HERO_SIZE = UNIT * 5;\nconst HERO_MOVE_LENGTH = 4;\nconst HERO_START_POS = { x: CANVAS_START_POS, y: CANVAS_START_POS}\n\n\n\n//# sourceURL=webpack://action_rpg/./src/constants.js?");

/***/ }),

/***/ "./src/enemy.js":
/*!**********************!*\
  !*** ./src/enemy.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\n\nclass Enemy {\n    constructor({ pos }) {\n        this.length = _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_SIZE\n        this.color = _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_COLOR\n        this.x = pos.x,\n        this.y = pos.y\n        this.vel = 1\n        this.dir = this.getRandomDir()\n        this.changeDir = this.changeDir.bind(this)\n    }\n\n    draw(ctx) {\n        const { length, color, x, y } = this\n        ctx.fillStyle = color;\n\n        ctx.beginPath();\n        ctx.arc(x, y, length, 0, 2 * Math.PI);\n        ctx.fill();\n\n\n        // Draw hit box\n        ctx.strokeStyle = \"green\";\n        ctx.rect(\n            x - _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_SIZE, \n            y - _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_SIZE, \n            _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_SIZE * 2, \n            _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_SIZE * 2\n        );\n        ctx.stroke();\n    }\n\n    changeDir() {\n        this.dir = this.getRandomDir()\n    }\n\n    changeVel(vel) {\n        this.vel = vel\n    }\n\n    move() {\n        const { x, y, dir, vel } = this;\n        let newX = x\n        let newY = y;\n        switch (dir) {\n            case _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_UP:\n                newY = y - _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_MOVE_LENGTH * vel\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_DOWN:\n                newY = y + _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_MOVE_LENGTH * vel\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_LEFT:\n                newX = x - _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_MOVE_LENGTH * vel\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_RIGHT:\n                newX = x + _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_MOVE_LENGTH * vel\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_LEFT_UP:\n                newX = x - _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_MOVE_LENGTH * vel\n                newY = y - _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_MOVE_LENGTH * vel\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_RIGHT_UP:\n                newX = x + _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_MOVE_LENGTH * vel\n                newY = y - _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_MOVE_LENGTH * vel\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_DOWN_LEFT:\n                newX = x - _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_MOVE_LENGTH * vel\n                newY = y + _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_MOVE_LENGTH * vel\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_DOWN_RIGHT:\n                newX = x + _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_MOVE_LENGTH * vel\n                newY = y + _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_MOVE_LENGTH * vel\n                break;\n        }\n\n        if (this.validMove(dir, newX, newY)) {\n            this.x = newX\n            this.y = newY\n        } else {\n            this.dir = this.getRandomDir(dir)\n            this.move()\n        }\n    }\n\n    getRandomDir(oldDir){\n        let randIdx = Math.floor(Math.random() * _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_POSSIBLE_MOVES.length)\n        let newDir = _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_POSSIBLE_MOVES[randIdx]\n        while(oldDir === newDir){\n            randIdx = Math.floor(Math.random() * _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_POSSIBLE_MOVES.length)\n            newDir = _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_POSSIBLE_MOVES[randIdx]\n        }\n        return newDir\n    }\n\n    validXMove(dir, newX) {\n        return dir === 'left'\n            ? newX >= _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_LEFT_BOUNDARY + 25\n            : newX <= _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_RIGHT_BOUNDARY - _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_SIZE\n    }\n\n    validYMove(dir, newY) {\n        return dir === 'up'\n            ? newY >= _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_UP_BOUNDARY + 25\n            : newY <= _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_DOWN_BOUNDARY - _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_SIZE\n    }\n\n    validMove(dir, newX, newY) {\n        return dir.split(\" \").every(dir => {\n            return (dir === 'up' || dir === 'down')\n                ? this.validYMove(dir, newY)\n                : this.validXMove(dir, newX)\n        })\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Enemy);\n\n//# sourceURL=webpack://action_rpg/./src/enemy.js?");

/***/ }),

/***/ "./src/game_canvas.js":
/*!****************************!*\
  !*** ./src/game_canvas.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero */ \"./src/hero.js\");\n/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enemy */ \"./src/enemy.js\");\n\n\n\n\nconst getRandPos = () => {\n    const factor = _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_SIDE_LENGTH / _constants__WEBPACK_IMPORTED_MODULE_0__.UNIT\n    let x = Math.floor(Math.random() * factor) * _constants__WEBPACK_IMPORTED_MODULE_0__.UNIT\n    let y = Math.floor(Math.random() * factor) * _constants__WEBPACK_IMPORTED_MODULE_0__.UNIT\n    while (x > _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_SIDE_LENGTH \n        || y > _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_SIDE_LENGTH\n        || x < _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_START_POS + _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_SIZE\n        || y < _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_START_POS + _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_SIZE\n    ){\n        x = Math.floor(Math.random() * factor) * _constants__WEBPACK_IMPORTED_MODULE_0__.UNIT\n        y = Math.floor(Math.random() * factor) * _constants__WEBPACK_IMPORTED_MODULE_0__.UNIT\n    }\n    return { x, y }\n}\n\nclass GameCanvas {\n    constructor({ ctx }) {\n        this.ctx = ctx;\n        this.hero = new _hero__WEBPACK_IMPORTED_MODULE_1__.default({ pos: _constants__WEBPACK_IMPORTED_MODULE_0__.HERO_START_POS })\n        this.enemies = []\n\n        this.clearCanvas = this.clearCanvas.bind(this)\n        this.changeEnemyDirections = this.changeEnemyDirections.bind(this)\n    }\n\n    placeNewEnemy() {\n        const { hero } = this;\n        let pos = getRandPos()\n        while (pos.x === hero.x && pos.y === hero.y) pos = getRandPos()\n        let enemy = new _enemy__WEBPACK_IMPORTED_MODULE_2__.default({\n            size: _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_SIZE,\n            color: _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_COLOR,\n            pos\n        })\n        this.enemies.push(enemy)\n    }\n\n    drawEnemies(ctx){\n        this.enemies.forEach(enemy => enemy.draw(ctx))\n    }\n\n    moveEnemies(){\n        this.enemies.forEach(enemy => enemy.move())\n    }\n\n    checkForCollisions(){\n        let collided = this.enemies.some(enemy => this.hero.collidedWith(enemy))\n        if (collided) {\n            this.hero.color = 'purple'\n            setTimeout(() => this.hero.color = 'blue', 3000)\n        }\n        return collided\n    }\n\n    changeEnemyDirections(){\n        this.enemies.forEach(enemy => {\n            const randSecond = Math.floor(Math.random() * 3000)\n            setTimeout(enemy.changeDir,randSecond)\n        })\n    }\n\n    clearCanvas() {\n        const { ctx } = this;\n        ctx.clearRect(\n            _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_SIDE_LENGTH,\n            _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_SIDE_LENGTH,\n            _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_SIDE_LENGTH,\n            _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_SIDE_LENGTH\n        );\n        ctx.fillStyle = _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_COLOR;\n        ctx.fillRect(\n            _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_START_POS,\n            _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_START_POS,\n            _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_SIDE_LENGTH,\n            _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_SIDE_LENGTH\n        );\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameCanvas);\n\n//# sourceURL=webpack://action_rpg/./src/game_canvas.js?");

/***/ }),

/***/ "./src/game_renderer.js":
/*!******************************!*\
  !*** ./src/game_renderer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\n\nclass GameRenderer {\n    constructor({ ctx, gameCanvas }) {\n        this.dirOptions = _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_OPTIONS\n        this.ctx = ctx\n        this.gameCanvas = gameCanvas\n        this.keysDown = {}\n\n        this.step = this.step.bind(this)\n        this.onKeyUp = this.onKeyUp.bind(this)\n        this.onKeyDown = this.onKeyDown.bind(this)\n    }\n\n    start() {\n        this.bindKeyHandlers()\n        requestAnimationFrame(this.step)\n    }\n\n    step() {\n        const { gameCanvas, ctx } = this;\n        gameCanvas.clearCanvas(ctx)\n\n        gameCanvas.hero.draw(ctx);\n        gameCanvas.hero.move();\n        gameCanvas.drawEnemies(ctx);\n        gameCanvas.moveEnemies(ctx);\n        gameCanvas.checkForCollisions()\n\n        requestAnimationFrame(this.step)\n    }\n\n    onKeyUp(e){\n        const { gameCanvas, dirOptions } = this\n\n        if (dirOptions.hasOwnProperty(e.key)) {\n            let dir = dirOptions[e.key]\n            this.keysDown[dir] = false\n        }\n\n        if (Object.values(this.keysDown).every(val => val === false))\n            gameCanvas.hero.changeVel(0)\n\n        if(e.key === _constants__WEBPACK_IMPORTED_MODULE_0__.HERO_DASH_KEY)\n            gameCanvas.hero.changeVel(1)\n        \n    }\n\n    onKeyDown(e) {\n        const { gameCanvas, dirOptions, keysDown } = this;\n\n        if (dirOptions.hasOwnProperty(e.key)){\n            keysDown[dirOptions[e.key]] = true;\n            gameCanvas.hero.changeVel(1)\n            gameCanvas.hero.changeDir(keysDown)\n        }\n\n        if (e.key === _constants__WEBPACK_IMPORTED_MODULE_0__.HERO_DASH_KEY) {\n            gameCanvas.hero.changeVel(3)\n            gameCanvas.hero.changeDir(keysDown)\n        }\n\n        if (e.key === 'q')\n            gameCanvas.placeNewEnemy()\n        \n    }\n\n    bindKeyHandlers() {\n        document.addEventListener(\"keyup\", this.onKeyUp)\n        document.addEventListener(\"keydown\", this.onKeyDown)\n    };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameRenderer);\n\n//# sourceURL=webpack://action_rpg/./src/game_renderer.js?");

/***/ }),

/***/ "./src/hero.js":
/*!*********************!*\
  !*** ./src/hero.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\n\nclass Hero {\n    constructor({pos}){\n        this.length = _constants__WEBPACK_IMPORTED_MODULE_0__.HERO_SIZE\n        this.color = _constants__WEBPACK_IMPORTED_MODULE_0__.HERO_COLOR\n        this.x = pos.x,\n        this.y = pos.y\n        this.vel = 0\n        this.dir = 'down'\n    }\n\n    draw(ctx) {\n        const { length, color, x, y } = this\n        ctx.fillStyle = color;\n\n        ctx.fillRect(x, y, length, length);\n    }\n\n    dash(keysDown){\n        this.changeDir(keysDown, _constants__WEBPACK_IMPORTED_MODULE_0__.HERO_DASH_VEL)\n    }\n\n    changeDir(keysDown){\n        let newDir = Object.entries(keysDown)\n        .filter(([key, val]) => val)\n        .map(([key, val]) => key)\n        .sort()\n        .join(' ');\n        if (_constants__WEBPACK_IMPORTED_MODULE_0__.DIR_POSSIBLE_MOVES.includes(newDir))\n            this.dir = newDir;\n    }\n\n    changeVel(vel){\n        this.vel = vel\n    }\n\n    collidedWith(enemyPos){\n        const enemyX = enemyPos.x - _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_SIZE\n        const enemyY = enemyPos.y - _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_SIZE\n        const enemyWidth = _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_SIZE * 2\n        const heroWidth = _constants__WEBPACK_IMPORTED_MODULE_0__.HERO_SIZE\n\n        // Detect if 2 rectngles have collided\n        return (this.x < enemyX + enemyWidth &&\n            this.x + heroWidth > enemyX &&\n            this.y < enemyY + enemyWidth &&\n            this.y + heroWidth > enemyY) \n    }\n\n    move(){\n        const { x, y, dir, vel } = this;\n        let newX = x\n        let newY = y;\n        switch (dir) {\n            case _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_UP:\n                newY = y - _constants__WEBPACK_IMPORTED_MODULE_0__.HERO_MOVE_LENGTH * vel\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_DOWN:\n                newY = y + _constants__WEBPACK_IMPORTED_MODULE_0__.HERO_MOVE_LENGTH * vel\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_LEFT:\n                newX = x - _constants__WEBPACK_IMPORTED_MODULE_0__.HERO_MOVE_LENGTH * vel\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_RIGHT:\n                newX = x + _constants__WEBPACK_IMPORTED_MODULE_0__.HERO_MOVE_LENGTH * vel\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_LEFT_UP:\n                newX = x - _constants__WEBPACK_IMPORTED_MODULE_0__.HERO_MOVE_LENGTH * vel\n                newY = y - _constants__WEBPACK_IMPORTED_MODULE_0__.HERO_MOVE_LENGTH * vel\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_RIGHT_UP:\n                newX = x + _constants__WEBPACK_IMPORTED_MODULE_0__.HERO_MOVE_LENGTH * vel\n                newY = y - _constants__WEBPACK_IMPORTED_MODULE_0__.HERO_MOVE_LENGTH * vel\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_DOWN_LEFT:\n                newX = x - _constants__WEBPACK_IMPORTED_MODULE_0__.HERO_MOVE_LENGTH * vel\n                newY = y + _constants__WEBPACK_IMPORTED_MODULE_0__.HERO_MOVE_LENGTH * vel\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_DOWN_RIGHT:\n                newX = x + _constants__WEBPACK_IMPORTED_MODULE_0__.HERO_MOVE_LENGTH * vel\n                newY = y + _constants__WEBPACK_IMPORTED_MODULE_0__.HERO_MOVE_LENGTH * vel\n                break;\n        }\n\n        if (this.validMove(dir, newX, newY)) {\n            this.x = newX\n            this.y = newY\n        }\n    }\n\n    validXMove(dir, newX){\n        return dir === 'left' \n            ? newX >= _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_LEFT_BOUNDARY\n            : newX <= _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_RIGHT_BOUNDARY - _constants__WEBPACK_IMPORTED_MODULE_0__.HERO_SIZE\n    }\n\n    validYMove(dir, newY){\n        return dir === 'up' \n            ? newY >= _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_UP_BOUNDARY\n            : newY <= _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_DOWN_BOUNDARY - _constants__WEBPACK_IMPORTED_MODULE_0__.HERO_SIZE\n    }\n\n    validMove(dir, newX, newY){\n        return dir.split(\" \").every(dir => {\n            return (dir === 'up' || dir === 'down') \n                ? this.validYMove(dir, newY)\n                : this.validXMove(dir, newX)\n        })\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);\n\n//# sourceURL=webpack://action_rpg/./src/hero.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_canvas */ \"./src/game_canvas.js\");\n/* harmony import */ var _game_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_renderer */ \"./src/game_renderer.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const canvasEl = document.getElementById(\"game-canvas\")\n    const ctx = canvasEl.getContext(\"2d\");\n\n    const gameCanvas = new _game_canvas__WEBPACK_IMPORTED_MODULE_0__.default({ctx})\n    const gameRenderer = new _game_renderer__WEBPACK_IMPORTED_MODULE_1__.default({gameCanvas, ctx})\n\n    gameRenderer.start()\n    setInterval(gameCanvas.changeEnemyDirections, 1000);\n\n});\n\n//# sourceURL=webpack://action_rpg/./src/index.js?");

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