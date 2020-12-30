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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UNIT\": () => /* binding */ UNIT,\n/* harmony export */   \"CANVAS_SIDE_LENGTH\": () => /* binding */ CANVAS_SIDE_LENGTH,\n/* harmony export */   \"CANVAS_START_POS\": () => /* binding */ CANVAS_START_POS,\n/* harmony export */   \"CANVAS_COLOR\": () => /* binding */ CANVAS_COLOR,\n/* harmony export */   \"CANVAS_UP_BOUNDARY\": () => /* binding */ CANVAS_UP_BOUNDARY,\n/* harmony export */   \"CANVAS_DOWN_BOUNDARY\": () => /* binding */ CANVAS_DOWN_BOUNDARY,\n/* harmony export */   \"CANVAS_LEFT_BOUNDARY\": () => /* binding */ CANVAS_LEFT_BOUNDARY,\n/* harmony export */   \"CANVAS_RIGHT_BOUNDARY\": () => /* binding */ CANVAS_RIGHT_BOUNDARY,\n/* harmony export */   \"CANVAS_OUTSIDE_COLOR\": () => /* binding */ CANVAS_OUTSIDE_COLOR,\n/* harmony export */   \"DIR_DOWN\": () => /* binding */ DIR_DOWN,\n/* harmony export */   \"DIR_LEFT\": () => /* binding */ DIR_LEFT,\n/* harmony export */   \"DIR_RIGHT\": () => /* binding */ DIR_RIGHT,\n/* harmony export */   \"DIR_UP\": () => /* binding */ DIR_UP,\n/* harmony export */   \"DIR_LEFT_UP\": () => /* binding */ DIR_LEFT_UP,\n/* harmony export */   \"DIR_RIGHT_UP\": () => /* binding */ DIR_RIGHT_UP,\n/* harmony export */   \"DIR_DOWN_RIGHT\": () => /* binding */ DIR_DOWN_RIGHT,\n/* harmony export */   \"DIR_DOWN_LEFT\": () => /* binding */ DIR_DOWN_LEFT,\n/* harmony export */   \"DIR_POSSIBLE_MOVES\": () => /* binding */ DIR_POSSIBLE_MOVES,\n/* harmony export */   \"DIR_OPTIONS\": () => /* binding */ DIR_OPTIONS,\n/* harmony export */   \"ENEMY_SIZE\": () => /* binding */ ENEMY_SIZE,\n/* harmony export */   \"ENEMY_COLOR\": () => /* binding */ ENEMY_COLOR,\n/* harmony export */   \"ENEMY_MOVE_LENGTH\": () => /* binding */ ENEMY_MOVE_LENGTH,\n/* harmony export */   \"ENEMY_SPAWN_RATE\": () => /* binding */ ENEMY_SPAWN_RATE,\n/* harmony export */   \"ENEMY_START_VEL\": () => /* binding */ ENEMY_START_VEL,\n/* harmony export */   \"HERO_COLOR\": () => /* binding */ HERO_COLOR,\n/* harmony export */   \"HERO_DASH_KEY\": () => /* binding */ HERO_DASH_KEY,\n/* harmony export */   \"HERO_DASH_VEL\": () => /* binding */ HERO_DASH_VEL,\n/* harmony export */   \"HERO_SIZE\": () => /* binding */ HERO_SIZE,\n/* harmony export */   \"HERO_MOVE_LENGTH\": () => /* binding */ HERO_MOVE_LENGTH,\n/* harmony export */   \"HERO_START_POS\": () => /* binding */ HERO_START_POS,\n/* harmony export */   \"HERO_START_DIR\": () => /* binding */ HERO_START_DIR,\n/* harmony export */   \"HERO_MOVEMENT\": () => /* binding */ HERO_MOVEMENT,\n/* harmony export */   \"WEAPON_COLOR\": () => /* binding */ WEAPON_COLOR,\n/* harmony export */   \"WEAPON_LENGTH\": () => /* binding */ WEAPON_LENGTH,\n/* harmony export */   \"WEAPON_WIDTH\": () => /* binding */ WEAPON_WIDTH,\n/* harmony export */   \"WEAPON_DIST\": () => /* binding */ WEAPON_DIST,\n/* harmony export */   \"WEAPON_DIR_HORIZONTAL\": () => /* binding */ WEAPON_DIR_HORIZONTAL,\n/* harmony export */   \"WEAPON_DIR_VERTICAL\": () => /* binding */ WEAPON_DIR_VERTICAL,\n/* harmony export */   \"WEAPON_DIR_DIAG_LEFT\": () => /* binding */ WEAPON_DIR_DIAG_LEFT,\n/* harmony export */   \"WEAPON_DIR_DIAG_RIGHT\": () => /* binding */ WEAPON_DIR_DIAG_RIGHT\n/* harmony export */ });\nconst UNIT = 5;\n\nconst CANVAS_SIDE_LENGTH = 500;\nconst CANVAS_START_POS = 50;\nconst CANVAS_COLOR = 'black';\nconst CANVAS_UP_BOUNDARY = 0 + CANVAS_START_POS;\nconst CANVAS_DOWN_BOUNDARY = 0 + CANVAS_START_POS + CANVAS_SIDE_LENGTH;\nconst CANVAS_LEFT_BOUNDARY = 0 + CANVAS_START_POS;\nconst CANVAS_RIGHT_BOUNDARY = 0 + CANVAS_START_POS + CANVAS_SIDE_LENGTH;\nconst CANVAS_OUTSIDE_COLOR = 'white'\n\nconst DIR_DOWN = 'down'\nconst DIR_LEFT = 'left'\nconst DIR_RIGHT = 'right'\nconst DIR_UP = 'up'\nconst DIR_LEFT_UP = DIR_LEFT + ' ' + DIR_UP\nconst DIR_RIGHT_UP = DIR_RIGHT + ' ' + DIR_UP\nconst DIR_DOWN_RIGHT = DIR_DOWN + ' ' + DIR_RIGHT\nconst DIR_DOWN_LEFT = DIR_DOWN + ' ' + DIR_LEFT\nconst DIR_POSSIBLE_MOVES = [\n    DIR_DOWN,\n    DIR_LEFT,\n    DIR_UP,\n    DIR_RIGHT,\n    DIR_LEFT_UP,\n    DIR_RIGHT_UP,\n    DIR_DOWN_RIGHT,\n    DIR_DOWN_LEFT\n]\n\nconst DIR_OPTIONS = {\n    w: DIR_UP,\n    a: DIR_LEFT,\n    s: DIR_DOWN,\n    d: DIR_RIGHT,\n    ArrowUp: DIR_UP,\n    ArrowLeft: DIR_LEFT,\n    ArrowRight: DIR_RIGHT,\n    ArrowDown: DIR_DOWN,\n}\n\nconst ENEMY_SIZE = UNIT * 3\nconst ENEMY_COLOR = 'red'\nconst ENEMY_MOVE_LENGTH = 2\nconst ENEMY_SPAWN_RATE = 1000\nconst ENEMY_START_VEL = 1\n\nconst HERO_COLOR = 'blue';\nconst HERO_DASH_KEY = 'z';\nconst HERO_DASH_VEL = 3;\nconst HERO_SIZE = UNIT * 5;\nconst HERO_MOVE_LENGTH = 4;\nconst HERO_START_POS = { x: CANVAS_START_POS, y: CANVAS_START_POS}\nconst HERO_START_DIR = DIR_DOWN\nconst HERO_MOVEMENT = 'hero_movement' \n\nconst WEAPON_COLOR = 'green'\nconst WEAPON_LENGTH = UNIT * 12\nconst WEAPON_WIDTH = UNIT * 6\nconst WEAPON_DIST = 40\nconst WEAPON_DIR_HORIZONTAL = 'horizontal'\nconst WEAPON_DIR_VERTICAL = 'vertical'\nconst WEAPON_DIR_DIAG_LEFT = 'diag_left'\nconst WEAPON_DIR_DIAG_RIGHT = 'diag_right'\n\n\n\n\n//# sourceURL=webpack://action_rpg/./src/constants.js?");

/***/ }),

/***/ "./src/enemy.js":
/*!**********************!*\
  !*** ./src/enemy.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _game_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_object */ \"./src/game_object.js\");\n\n\n\nconst getRandomDir = (oldDir = '') => {\n        let randIdx = Math.floor(Math.random() * _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_POSSIBLE_MOVES.length)\n        let newDir = _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_POSSIBLE_MOVES[randIdx]\n        while(oldDir === newDir){\n            randIdx = Math.floor(Math.random() * _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_POSSIBLE_MOVES.length)\n            newDir = _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_POSSIBLE_MOVES[randIdx]\n        }\n        return newDir\n}\n\nclass Enemy extends _game_object__WEBPACK_IMPORTED_MODULE_1__.default {\n    constructor(attributes) {\n        attributes = { \n            ...attributes, \n            vel: _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_START_VEL, \n            dir: getRandomDir(),\n            color: _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_COLOR\n        }\n        super(attributes)\n\n        this.length = _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_SIZE\n        this.changeDir = this.changeDir.bind(this)\n    }\n\n    draw() {\n        const { length, color, x, y, ctx } = this\n        ctx.fillStyle = color;\n\n        ctx.beginPath();\n        ctx.arc(x, y, length, 0, 2 * Math.PI);\n        ctx.fill();\n\n\n        // Draw hit box\n        ctx.strokeStyle = \"green\";\n        ctx.rect(\n            x - _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_SIZE, \n            y - _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_SIZE, \n            _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_SIZE * 2, \n            _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_SIZE * 2\n        );\n        ctx.stroke();\n    }\n\n    changeDir() {\n        this.dir = getRandomDir()\n    }\n\n    changeVel(vel) {\n        this.vel = vel\n    }\n\n    die() {\n        this.color = _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_OUTSIDE_COLOR\n        this.x = null;\n        this.y = null;\n    }\n\n    move() {\n        const { x, y, dir, vel } = this;\n        let newX = x\n        let newY = y;\n        switch (dir) {\n            case _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_UP:\n                newY = y - _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_MOVE_LENGTH * vel\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_DOWN:\n                newY = y + _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_MOVE_LENGTH * vel\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_LEFT:\n                newX = x - _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_MOVE_LENGTH * vel\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_RIGHT:\n                newX = x + _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_MOVE_LENGTH * vel\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_LEFT_UP:\n                newX = x - _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_MOVE_LENGTH * vel\n                newY = y - _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_MOVE_LENGTH * vel\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_RIGHT_UP:\n                newX = x + _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_MOVE_LENGTH * vel\n                newY = y - _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_MOVE_LENGTH * vel\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_DOWN_LEFT:\n                newX = x - _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_MOVE_LENGTH * vel\n                newY = y + _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_MOVE_LENGTH * vel\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_DOWN_RIGHT:\n                newX = x + _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_MOVE_LENGTH * vel\n                newY = y + _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_MOVE_LENGTH * vel\n                break;\n        }\n\n        if (this.validMove(dir, newX, newY)) {\n            this.x = newX\n            this.y = newY\n        } else {\n            this.dir = this.getRandomDir(dir)\n            this.move()\n        }\n    }\n\n    getRandomDir(oldDir){\n        let randIdx = Math.floor(Math.random() * _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_POSSIBLE_MOVES.length)\n        let newDir = _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_POSSIBLE_MOVES[randIdx]\n        while(oldDir === newDir){\n            randIdx = Math.floor(Math.random() * _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_POSSIBLE_MOVES.length)\n            newDir = _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_POSSIBLE_MOVES[randIdx]\n        }\n        return newDir\n    }\n\n    validXMove(dir, newX) {\n        return dir === 'left'\n            ? newX >= _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_LEFT_BOUNDARY + 25\n            : newX <= _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_RIGHT_BOUNDARY - _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_SIZE\n    }\n\n    validYMove(dir, newY) {\n        return dir === 'up'\n            ? newY >= _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_UP_BOUNDARY + 25\n            : newY <= _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_DOWN_BOUNDARY - _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_SIZE\n    }\n\n    validMove(dir, newX, newY) {\n        return dir.split(\" \").every(dir => {\n            return (dir === 'up' || dir === 'down')\n                ? this.validYMove(dir, newY)\n                : this.validXMove(dir, newX)\n        })\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Enemy);\n\n//# sourceURL=webpack://action_rpg/./src/enemy.js?");

/***/ }),

/***/ "./src/game_canvas.js":
/*!****************************!*\
  !*** ./src/game_canvas.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero */ \"./src/hero.js\");\n/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enemy */ \"./src/enemy.js\");\n\n\n\n\nconst getRandPos = () => {\n    const factor = _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_SIDE_LENGTH / _constants__WEBPACK_IMPORTED_MODULE_0__.UNIT\n    let x = Math.floor(Math.random() * factor) * _constants__WEBPACK_IMPORTED_MODULE_0__.UNIT\n    let y = Math.floor(Math.random() * factor) * _constants__WEBPACK_IMPORTED_MODULE_0__.UNIT\n    while (x > _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_SIDE_LENGTH \n        || y > _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_SIDE_LENGTH\n        || x < _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_START_POS + _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_SIZE\n        || y < _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_START_POS + _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_SIZE\n    ){\n        x = Math.floor(Math.random() * factor) * _constants__WEBPACK_IMPORTED_MODULE_0__.UNIT\n        y = Math.floor(Math.random() * factor) * _constants__WEBPACK_IMPORTED_MODULE_0__.UNIT\n    }\n    return { x, y }\n}\n\nclass GameCanvas {\n    constructor({ ctx }) {\n        this.ctx = ctx;\n        this.hero = new _hero__WEBPACK_IMPORTED_MODULE_1__.default({ pos: _constants__WEBPACK_IMPORTED_MODULE_0__.HERO_START_POS, ctx })\n        this.enemies = []\n\n        this.clearCanvas = this.clearCanvas.bind(this)\n        this.changeEnemyDirections = this.changeEnemyDirections.bind(this)\n        this.placeNewEnemy = this.placeNewEnemy.bind(this)\n    }\n\n    placeNewEnemy() {\n        const { hero, ctx } = this;\n        let pos = getRandPos()\n        while (pos.x === hero.x && pos.y === hero.y) pos = getRandPos()\n        let enemy = new _enemy__WEBPACK_IMPORTED_MODULE_2__.default({\n            size: _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_SIZE,\n            color: _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_COLOR,\n            pos,\n            ctx\n        })\n        this.enemies.push(enemy)\n    }\n\n    drawEnemies(){\n        this.enemies.forEach(enemy => enemy.draw())\n    }\n\n    moveEnemies(){\n        this.enemies.forEach(enemy => enemy.move())\n    }\n\n    checkForCollisions(){\n        let heroColidedWithEnemy = \n            this.enemies.some(enemy => this.hero.collidedWith(enemy))\n        if (heroColidedWithEnemy) {\n            this.hero.color = 'purple'\n            setTimeout(() => this.hero.color = 'blue', 3000)\n        }\n        \n        let enemyIdxs = []\n        this.enemies.forEach((enemy, idx) => {\n            if (this.hero.weapon.collidedWith(enemy)) enemyIdxs.push(idx)\n        })\n        enemyIdxs.forEach(idx => {\n            this.enemies.splice(idx, 1)\n            this.increaseScore()\n        })\n    }\n\n    changeEnemyDirections(){\n        this.enemies.forEach(enemy => {\n            const randSecond = Math.floor(Math.random() * 3000)\n            setTimeout(enemy.changeDir,randSecond)\n        })\n    }\n\n    increaseScore(){\n        let scoreEle = document.getElementById('score')\n        let scoreStr = scoreEle.innerHTML\n        let score = parseInt(scoreStr.split(':')[1])\n        score += 1\n        scoreEle.innerHTML = `Score: ${score}`;\n\n    }\n\n    clearCanvas() {\n        const { ctx } = this;\n        ctx.clearRect(\n            _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_SIDE_LENGTH,\n            _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_SIDE_LENGTH,\n            _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_SIDE_LENGTH,\n            _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_SIDE_LENGTH\n        );\n        ctx.fillStyle = _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_COLOR;\n        ctx.fillRect(\n            _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_START_POS,\n            _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_START_POS,\n            _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_SIDE_LENGTH,\n            _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_SIDE_LENGTH\n        );\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameCanvas);\n\n//# sourceURL=webpack://action_rpg/./src/game_canvas.js?");

/***/ }),

/***/ "./src/game_object.js":
/*!****************************!*\
  !*** ./src/game_object.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\n\nclass GameObject {\n    constructor({ctx, pos, vel, dir, color}){\n        this.ctx = ctx\n        this.x = pos.x\n        this.y = pos.y\n        this.vel = vel\n        this.dir = dir\n        this.color = color\n\n        this.isColliding = false;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameObject);\n\n//# sourceURL=webpack://action_rpg/./src/game_object.js?");

/***/ }),

/***/ "./src/game_renderer.js":
/*!******************************!*\
  !*** ./src/game_renderer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\n\nclass GameRenderer {\n    constructor({ ctx, gameCanvas }) {\n        this.dirOptions = _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_OPTIONS\n        this.ctx = ctx\n        this.gameCanvas = gameCanvas\n        this.keysDown = {}\n\n        this.step = this.step.bind(this)\n        this.onKeyUp = this.onKeyUp.bind(this)\n        this.onKeyDown = this.onKeyDown.bind(this)\n    }\n\n    start() {\n        this.bindKeyHandlers()\n        requestAnimationFrame(this.step)\n    }\n\n    gameOver(gameCanvas) {\n        const { hero, enemies } = gameCanvas\n        return enemies.some(enemy => hero.collidedWith(enemy))\n    }\n\n    step() {\n        const { gameCanvas, ctx, gameOver } = this;\n        gameCanvas.clearCanvas(ctx)\n\n        gameCanvas.hero.draw();\n        gameCanvas.hero.move();\n        gameCanvas.drawEnemies();\n        gameCanvas.moveEnemies();\n        gameCanvas.checkForCollisions()\n        gameCanvas.hero.weapon.draw()\n\n        if (!gameOver(gameCanvas)) requestAnimationFrame(this.step)\n    }\n\n    onKeyUp(e){\n        const { gameCanvas, dirOptions } = this\n\n        if (dirOptions.hasOwnProperty(e.key)) {\n            let dir = dirOptions[e.key]\n            this.keysDown[dir] = false\n        }\n\n        if (Object.values(this.keysDown).every(val => val === false))\n            gameCanvas.hero.changeVel(0)\n\n        if(e.key === _constants__WEBPACK_IMPORTED_MODULE_0__.HERO_DASH_KEY)\n            gameCanvas.hero.changeVel(1)\n        \n    }\n\n    onKeyDown(e) {\n        const { gameCanvas, dirOptions, keysDown } = this;\n\n        if (dirOptions.hasOwnProperty(e.key)){\n            keysDown[dirOptions[e.key]] = true;\n            gameCanvas.hero.changeVel(1)\n            gameCanvas.hero.changeDir(keysDown)\n        }\n\n        if (e.key === _constants__WEBPACK_IMPORTED_MODULE_0__.HERO_DASH_KEY) {\n            gameCanvas.hero.changeVel(3)\n            gameCanvas.hero.changeDir(keysDown)\n        }\n\n        if (e.key === 'q')\n            gameCanvas.placeNewEnemy()\n\n        if (e.key === 'x')\n            gameCanvas.hero.useWeapon()\n        \n    }\n\n    bindKeyHandlers() {\n        document.addEventListener(\"keyup\", this.onKeyUp)\n        document.addEventListener(\"keydown\", this.onKeyDown)\n    };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameRenderer);\n\n//# sourceURL=webpack://action_rpg/./src/game_renderer.js?");

/***/ }),

/***/ "./src/hero.js":
/*!*********************!*\
  !*** ./src/hero.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _weapon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weapon */ \"./src/weapon.js\");\n/* harmony import */ var _game_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game_object */ \"./src/game_object.js\");\n\n\n\n\nclass Hero extends _game_object__WEBPACK_IMPORTED_MODULE_2__.default {\n    constructor(attributes){\n        attributes = { \n            ...attributes, \n            dir: _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_DOWN, \n            vel: _constants__WEBPACK_IMPORTED_MODULE_0__.HERO_START_DIR, \n            color: _constants__WEBPACK_IMPORTED_MODULE_0__.HERO_COLOR\n        }\n        super(attributes)\n\n        this.length = _constants__WEBPACK_IMPORTED_MODULE_0__.HERO_SIZE\n        this.weapon = new _weapon__WEBPACK_IMPORTED_MODULE_1__.default({ctx: attributes.ctx})\n\n        this.putAwayWeapon = this.putAwayWeapon.bind(this)\n    }\n\n    draw() {\n        const { length, color, x, y, ctx } = this\n        ctx.fillStyle = color;\n\n        ctx.fillRect(x, y, length, length);\n    }\n\n    dash(keysDown){\n        this.changeDir(keysDown, _constants__WEBPACK_IMPORTED_MODULE_0__.HERO_DASH_VEL)\n    }\n\n    changeDir(keysDown){\n        let newDir = Object.entries(keysDown)\n        .filter(([key, val]) => val)\n        .map(([key, val]) => key)\n        .sort()\n        .join(' ');\n        if (_constants__WEBPACK_IMPORTED_MODULE_0__.DIR_POSSIBLE_MOVES.includes(newDir))\n            this.dir = newDir;\n    }\n\n    changeVel(vel){\n        this.vel = vel\n    }\n\n    collidedWith(enemyPos){\n        const enemyX = enemyPos.x - _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_SIZE\n        const enemyY = enemyPos.y - _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_SIZE\n        const enemyWidth = _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_SIZE * 2\n        const heroWidth = _constants__WEBPACK_IMPORTED_MODULE_0__.HERO_SIZE\n\n        // Detect if 2 rectangles have collided\n        return (this.x < enemyX + enemyWidth &&\n            this.x + heroWidth > enemyX &&\n            this.y < enemyY + enemyWidth &&\n            this.y + heroWidth > enemyY) \n    }\n\n    useWeapon(){\n        this.weapon.dir = this.getNewWeaponDir()\n        const { newX, newY } = this.getNewPosUsingDir(this.weapon.dir)\n        if (this.isInCanvas(this.dir, newX, newY)) {\n            this.weapon.color = _constants__WEBPACK_IMPORTED_MODULE_0__.WEAPON_COLOR\n            this.weapon.x = newX\n            this.weapon.y = newY\n            setTimeout(this.putAwayWeapon, 50)\n        }\n    }\n\n    getNewWeaponDir(){\n        switch (this.dir) {\n            case _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_UP:\n            case _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_DOWN:\n                return _constants__WEBPACK_IMPORTED_MODULE_0__.WEAPON_DIR_HORIZONTAL\n            case _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_LEFT:\n            case _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_RIGHT:\n                return _constants__WEBPACK_IMPORTED_MODULE_0__.WEAPON_DIR_VERTICAL\n            default:\n                return this.dir\n\n        }\n    }\n\n    getNewPosUsingDir(type){\n        const { oldX, oldY, delta, diagDelta } = this.getCoordInfo(type)\n        let newX = oldX\n        let newY = oldY\n\n        switch (this.dir) {\n            case _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_UP:\n                newY = newY - delta\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_DOWN:\n                newY = newY + delta\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_LEFT:\n                newX = newX - delta\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_RIGHT:\n                newX = newX + delta\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_LEFT_UP:\n                newX = newX - diagDelta\n                newY = newY - diagDelta\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_RIGHT_UP:\n                newX = newX + diagDelta\n                newY = newY - diagDelta\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_DOWN_LEFT:\n                newX = newX - diagDelta\n                newY = newY + diagDelta\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_DOWN_RIGHT:\n                newX = newX + diagDelta\n                newY = newY + diagDelta\n                break;\n        }\n\n        return ({newX, newY})\n    }\n\n    getCoordInfo(type){\n        const { x, y, vel } = this;\n        let oldX, oldY, delta, diagDelta;\n        switch (type) {\n            case _constants__WEBPACK_IMPORTED_MODULE_0__.HERO_MOVEMENT:\n                oldX = x;\n                oldY = y;\n                delta = _constants__WEBPACK_IMPORTED_MODULE_0__.HERO_MOVE_LENGTH * vel\n                diagDelta = delta\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_0__.WEAPON_DIR_VERTICAL:\n                oldX = x + (_constants__WEBPACK_IMPORTED_MODULE_0__.HERO_SIZE - _constants__WEBPACK_IMPORTED_MODULE_0__.WEAPON_WIDTH) / 2\n                oldY = y + (_constants__WEBPACK_IMPORTED_MODULE_0__.HERO_SIZE - _constants__WEBPACK_IMPORTED_MODULE_0__.WEAPON_LENGTH) / 2\n                delta = _constants__WEBPACK_IMPORTED_MODULE_0__.WEAPON_DIST\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_0__.WEAPON_DIR_HORIZONTAL:\n                oldX = x - (_constants__WEBPACK_IMPORTED_MODULE_0__.WEAPON_LENGTH - _constants__WEBPACK_IMPORTED_MODULE_0__.HERO_SIZE) / 2\n                oldY = y\n                delta = _constants__WEBPACK_IMPORTED_MODULE_0__.WEAPON_DIST\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_LEFT_UP:\n                oldX = x - _constants__WEBPACK_IMPORTED_MODULE_0__.WEAPON_WIDTH * .2, \n                oldY = y - _constants__WEBPACK_IMPORTED_MODULE_0__.WEAPON_LENGTH * .8\n                delta = 0\n                diagDelta = 0\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_DOWN_RIGHT:\n                oldX = x + _constants__WEBPACK_IMPORTED_MODULE_0__.HERO_SIZE + _constants__WEBPACK_IMPORTED_MODULE_0__.WEAPON_WIDTH * .8\n                oldY = y + _constants__WEBPACK_IMPORTED_MODULE_0__.HERO_SIZE * .6\n                delta = 0\n                diagDelta = 0\n                break;\n        }\n        \n        return { oldX, oldY, delta, diagDelta }\n    }\n\n    putAwayWeapon(){\n        this.weapon.color = 'white' // Outside of canvas color\n        this.weapon.x = null\n        this.weapon.y = null\n    }\n\n    move(){\n        const { newX, newY } = this.getNewPosUsingDir(_constants__WEBPACK_IMPORTED_MODULE_0__.HERO_MOVEMENT)\n\n        if (this.isInCanvas(this.dir, newX, newY)) {\n            this.x = newX\n            this.y = newY\n        }\n    }\n\n    validXMove(dir, newX){\n        return dir === 'left' \n            ? newX >= _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_LEFT_BOUNDARY\n            : newX <= _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_RIGHT_BOUNDARY - _constants__WEBPACK_IMPORTED_MODULE_0__.HERO_SIZE\n    }\n\n    validYMove(dir, newY){\n        return dir === 'up' \n            ? newY >= _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_UP_BOUNDARY\n            : newY <= _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_DOWN_BOUNDARY - _constants__WEBPACK_IMPORTED_MODULE_0__.HERO_SIZE\n    }\n\n    isInCanvas(dir, newX, newY){\n        return dir.split(\" \").every(dir => {\n            return (dir === 'up' || dir === 'down') \n                ? this.validYMove(dir, newY)\n                : this.validXMove(dir, newX)\n        })\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);\n\n//# sourceURL=webpack://action_rpg/./src/hero.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_canvas */ \"./src/game_canvas.js\");\n/* harmony import */ var _game_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_renderer */ \"./src/game_renderer.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const canvasEl = document.getElementById(\"game-canvas\")\n    const ctx = canvasEl.getContext(\"2d\");\n\n    const gameCanvas = new _game_canvas__WEBPACK_IMPORTED_MODULE_0__.default({ctx})\n    const gameRenderer = new _game_renderer__WEBPACK_IMPORTED_MODULE_1__.default({gameCanvas, ctx})\n\n    gameRenderer.start()\n    setInterval(gameCanvas.changeEnemyDirections, 1000);\n    setInterval(gameCanvas.placeNewEnemy, _constants__WEBPACK_IMPORTED_MODULE_2__.ENEMY_SPAWN_RATE);\n\n});\n\n//# sourceURL=webpack://action_rpg/./src/index.js?");

/***/ }),

/***/ "./src/weapon.js":
/*!***********************!*\
  !*** ./src/weapon.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _game_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_object */ \"./src/game_object.js\");\n\n\n\nclass Weapon extends _game_object__WEBPACK_IMPORTED_MODULE_1__.default {\n    constructor(attributes){\n        attributes = {\n            ...attributes,\n            color: _constants__WEBPACK_IMPORTED_MODULE_0__.CANVAS_COLOR,\n            dir: _constants__WEBPACK_IMPORTED_MODULE_0__.WEAPON_DIR_VERTICAL,\n            pos: {}\n        }\n        super(attributes)\n\n        this.length = _constants__WEBPACK_IMPORTED_MODULE_0__.WEAPON_LENGTH\n        this.width = _constants__WEBPACK_IMPORTED_MODULE_0__.WEAPON_WIDTH\n    }\n\n    draw(){\n        switch (this.dir) {\n            case _constants__WEBPACK_IMPORTED_MODULE_0__.WEAPON_DIR_VERTICAL:\n                this.drawVertically()\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_0__.WEAPON_DIR_HORIZONTAL:\n                this.drawHorizontally()\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_LEFT_UP:\n                this.drawLeftUp()\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_0__.DIR_DOWN_RIGHT:\n                this.drawDownRight()\n                break;\n        }\n    }\n\n    drawHorizontally(){\n        const { length, width, color, x, y, ctx } = this\n        ctx.fillStyle = color;\n\n        ctx.fillRect(x, y, length, width);\n    }\n\n    drawVertically(){\n        const { length, width, color, x, y, ctx } = this\n        ctx.fillStyle = color;\n\n        ctx.fillRect(x, y, width, length);\n    }\n\n    drawLeftUp(){\n        const { length, width, color, x, y, ctx } = this\n        ctx.fillStyle = color;\n\n        // Point of transform origin\n        ctx.translate(x, y);\n        ctx.rotate(45 * Math.PI / 180);\n        ctx.fillRect(0, 0, width, length);\n\n        // Reset transformation matrix to the identity matrix\n        ctx.setTransform(1, 0, 0, 1, 0, 0);\n    }\n\n    drawDownRight() {\n        const { length, width, color, x, y, ctx } = this\n        ctx.fillStyle = color;\n\n        // Point of transform origin\n        ctx.translate(x, y);\n        ctx.rotate(45 * Math.PI / 180);\n        ctx.fillRect(0, 0, width, length);\n\n        // Reset transformation matrix to the identity matrix\n        ctx.setTransform(1, 0, 0, 1, 0, 0);\n    }\n\n    collidedWith(enemyPos) {\n        const enemyX = enemyPos.x - _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_SIZE\n        const enemyY = enemyPos.y - _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_SIZE\n        const enemyWidth = _constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_SIZE * 2\n        const weaponWidth = this.dir === _constants__WEBPACK_IMPORTED_MODULE_0__.WEAPON_DIR_VERTICAL \n            ? _constants__WEBPACK_IMPORTED_MODULE_0__.WEAPON_WIDTH : _constants__WEBPACK_IMPORTED_MODULE_0__.WEAPON_LENGTH\n        const weaponLength = this.dir === _constants__WEBPACK_IMPORTED_MODULE_0__.WEAPON_DIR_VERTICAL\n            ? _constants__WEBPACK_IMPORTED_MODULE_0__.WEAPON_LENGTH : _constants__WEBPACK_IMPORTED_MODULE_0__.WEAPON_WIDTH\n\n        // Detect if 2 rectangles have collided\n        return (this.x < enemyX + enemyWidth &&\n            this.x + weaponWidth > enemyX &&\n            this.y < enemyY + enemyWidth &&\n            this.y + weaponLength > enemyY)\n     \n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Weapon);\n\n//# sourceURL=webpack://action_rpg/./src/weapon.js?");

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