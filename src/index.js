import GameCanvas from './game_canvas'
import GameRenderer from './game_renderer'
import * as C from './constants'

document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("game-canvas")
    const ctx = canvasEl.getContext("2d");

    const gameCanvas = new GameCanvas({ctx})
    const gameRenderer = new GameRenderer({gameCanvas, ctx})

    gameRenderer.start()
    setInterval(gameCanvas.changeEnemyDirections, 1000);
    if(C.TOGGLE_ENEMY_SPAWN) 
        setInterval(gameCanvas.placeNewEnemy, C.ENEMY_SPAWN_RATE);

});