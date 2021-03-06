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
        if(C.TOGGLE_ENEMY_MOVEMENT) gameCanvas.moveEnemies();
        
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

            if(this.getMoveKeysDown().length > 0) 
                gameCanvas.hero.changeDir(this.keysDown)
        }

        if (Object.values(this.keysDown).every(val => val === false)) // Change with getMoveKeysDown()
            gameCanvas.hero.changeVel(0)
    }

    onKeyDown(e) {
        const { gameCanvas, dirOptions, keysDown } = this;

        if (dirOptions.hasOwnProperty(e.key)){
            keysDown[dirOptions[e.key]] = true;
            gameCanvas.hero.changeVel(C.HERO_NORMAL_VEL)
            gameCanvas.hero.changeDir(keysDown)
        }

        if (e.key === C.HERO_DASH_KEY && this.getMoveKeysDown().length > 0)
            gameCanvas.hero.dash()

        if (e.key === 'q')
            gameCanvas.placeNewEnemy()

        if (e.key === 'x')
            gameCanvas.hero.useWeapon()

        if (e.key === 'r'){
            gameCanvas.hero.weapon.sprite.increaseFrame()
        }
        if (e.key === 'e')
            gameCanvas.hero.weapon.sprite.decreaseFrame()
    }

    getMoveKeysDown(){
        return Object.entries(this.keysDown).filter(([key, val]) => val)
    }

    bindKeyHandlers() {
        document.addEventListener("keyup", this.onKeyUp)
        document.addEventListener("keydown", this.onKeyDown)
    };
}

export default GameRenderer