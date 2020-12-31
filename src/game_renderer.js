import * as C from './constants'

class GameRenderer {
    constructor({ ctx, gameCanvas }) {
        this.dirOptions = C.DIR_OPTIONS
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

    gameOver(gameCanvas) {
        return gameCanvas.hero.health.length === 0;
    }

    step() {
        const { gameCanvas, ctx, gameOver } = this;
        
        gameCanvas.hero.move();
        gameCanvas.moveEnemies();
        gameCanvas.checkForCollisions()
        
        gameCanvas.clearCanvas(ctx)

        gameCanvas.hero.draw();
        gameCanvas.hero.weapon.draw();
        gameCanvas.drawHealth();
        gameCanvas.drawEnemies();

        if (!gameOver(gameCanvas)) requestAnimationFrame(this.step)
    }

    onKeyUp(e){
        const { gameCanvas, dirOptions } = this

        if (dirOptions.hasOwnProperty(e.key)) {
            let dir = dirOptions[e.key]
            this.keysDown[dir] = false
            let remainingKeys = 
                Object.entries(this.keysDown).filter(([key, val]) => val)
            if(remainingKeys.length > 0) 
                gameCanvas.hero.changeDir(this.keysDown)
        }

        if (Object.values(this.keysDown).every(val => val === false))
            gameCanvas.hero.changeVel(0)

        if(e.key === C.HERO_DASH_KEY)
            gameCanvas.hero.changeVel(1)
        
    }

    onKeyDown(e) {
        const { gameCanvas, dirOptions, keysDown } = this;

        if (dirOptions.hasOwnProperty(e.key)){
            keysDown[dirOptions[e.key]] = true;
            gameCanvas.hero.changeVel(1)
            gameCanvas.hero.changeDir(keysDown)
        }

        if (e.key === C.HERO_DASH_KEY) {
            gameCanvas.hero.changeVel(3)
            gameCanvas.hero.changeDir(keysDown)
        }

        if (e.key === 'q')
            gameCanvas.placeNewEnemy()

        if (e.key === 'x')
            gameCanvas.hero.useWeapon()
        
    }

    bindKeyHandlers() {
        document.addEventListener("keyup", this.onKeyUp)
        document.addEventListener("keydown", this.onKeyDown)
    };
}

export default GameRenderer