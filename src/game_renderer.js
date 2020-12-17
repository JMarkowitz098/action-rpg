import * as CONSTANTS from './constants'

class GameRenderer {
    constructor({ ctx, gameCanvas }) {
        this.dirOptions = CONSTANTS.DIR_OPTIONS
        this.ctx = ctx
        this.gameCanvas = gameCanvas
        this.keysDown = {}

        this.step = this.step.bind(this)
        this.onKeyUp = this.onKeyUp.bind(this)
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

    onKeyUp(e){
        const { gameCanvas, dirOptions } = this
        if (Object.keys(dirOptions).includes(e.key)) {
            // const moveDir = dirOptions[e.key]
            // gameCanvas.hero.move(this.keysDown)
            this.keysDown = {}
        }
    }

    onKeyDown(e) {
        const { gameCanvas, dirOptions, keysDown } = this;
        if (Object.keys(dirOptions).includes(e.key)){
            keysDown[dirOptions[e.key]] = true;
            gameCanvas.hero.move(keysDown)
        }
    }

    bindKeyHandlers() {
        document.addEventListener("keyup", this.onKeyUp)
        document.addEventListener("keydown", this.onKeyDown)
    };
}

export default GameRenderer