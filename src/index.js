import GameCanvas from './game_canvas'
import GameRenderer from './game_renderer'

document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("game-canvas")
    const ctx = canvasEl.getContext("2d");

    const gameCanvas = new GameCanvas({ctx})
    const gameRenderer = new GameRenderer({gameCanvas, ctx})

    gameRenderer.start()

});