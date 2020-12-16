import * as CONSTANTS from './constants'

class GameRenderer {
    constructor({ ctx, gameCanvas }) {
        this.dirOptions = CONSTANTS.DIR_OPTIONS
        this.ctx = ctx
        this.gameCanvas = gameCanvas

        this.step = this.step.bind(this)
        this.onKeyDown = this.onKeyDown.bind(this)
    }

    start() {
        this.bindKeyHandlers()
        requestAnimationFrame(this.step)
    }

    step() {
        const { gameCanvas, ctx } = this;
        gameCanvas.clearCanvas(ctx)

        gameCanvas.hero.draw(ctx);

        requestAnimationFrame(this.step)
    }

    onKeyDown(e) {
        const { gameCanvas, dirOptions } = this
        console.log(e.key)

        if (Object.keys(dirOptions).includes(e.key))
            gameCanvas.hero.move(dirOptions[e.key])
    }

    bindKeyHandlers() {
        document.addEventListener("keydown", this.onKeyDown)
    };
}

export default GameRenderer