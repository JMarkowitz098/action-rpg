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
        gameCanvas.hero.move();

        requestAnimationFrame(this.step)
    }

    onKeyUp(e){
        const { gameCanvas, dirOptions } = this

        if (dirOptions.hasOwnProperty(e.key)) {
            let dir = dirOptions[e.key]
            this.keysDown[dir] = false
        }

        if (Object.values(this.keysDown).every(val => val === false))
            gameCanvas.hero.changeVel(0)

        if(e.key === CONSTANTS.HERO_DASH_KEY)
            gameCanvas.hero.changeVel(1)
        
    }

    onKeyDown(e) {
        const { gameCanvas, dirOptions, keysDown } = this;

        if (dirOptions.hasOwnProperty(e.key)){
            keysDown[dirOptions[e.key]] = true;
            gameCanvas.hero.changeVel(1)
            gameCanvas.hero.changeDir(keysDown)

        }

        if (e.key === CONSTANTS.HERO_DASH_KEY) {
            gameCanvas.hero.changeVel(3)
            gameCanvas.hero.changeDir(keysDown)
        }
    }

    bindKeyHandlers() {
        document.addEventListener("keyup", this.onKeyUp)
        document.addEventListener("keydown", this.onKeyDown)
    };
}

export default GameRenderer