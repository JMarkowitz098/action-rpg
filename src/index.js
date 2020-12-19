import GameCanvas from './game_canvas'
import GameRenderer from './game_renderer'
import * as CONSTANTS from './constants'

document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("game-canvas")
    const ctx = canvasEl.getContext("2d");

    const gameCanvas = new GameCanvas({ctx})
    const gameRenderer = new GameRenderer({gameCanvas, ctx})

    gameRenderer.start()
    setInterval(gameCanvas.changeEnemyDirections, 1000);
    setInterval(gameCanvas.placeNewEnemy, CONSTANTS.ENEMY_SPAWN_RATE);

});