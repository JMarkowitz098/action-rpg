import * as CONSTANTS from './constants'

class GameRenderer {
    constructor({ ctx, gameCanvas }) {
        this.dirOptions = CONSTANTS.DIR_OPTIONS
        this.ctx = ctx
        this.gameCanvas = gameCanvas

        this.step = this.step.bind(this)
        // this.onKeyDown = this.onKeyDown.bind(this)
    }

    start() {
        // this.bindKeyHandlers()
        requestAnimationFrame(this.step)
    }

    step() {
        const { gameCanvas, ctx } = this;
        gameCanvas.clearCanvas(ctx)

        gameCanvas.hero.draw(ctx);

        requestAnimationFrame(this.step)
    }

    // onKeyDown(e) {
    //     const { gameCanvas, dirOptions } = this
    //     const newDir = dirOptions[e.key];

    //     if (Object.keys(dirOptions).includes(e.key))
    //         gameCanvas.snake.changeDir(newDir)

    //     // if (e.key === 'q') gameCanvas.snake.increaseLength(); //Cheat
    // }

    // bindKeyHandlers() {
    //     document.addEventListener("keydown", this.onKeyDown)
    // };
}

export default GameRenderer