import * as CONSTANTS from './constants'
import Hero from './hero'
import Enemy from './enemy'

const getRandPos = () => {
    const factor = CONSTANTS.CANVAS_SIDE_LENGTH / CONSTANTS.UNIT
    let x = Math.floor(Math.random() * factor) * CONSTANTS.UNIT + 100
    let y = Math.floor(Math.random() * factor) * CONSTANTS.UNIT + 100
    return { x, y }
}

class GameCanvas {
    constructor({ ctx }) {
        this.ctx = ctx;
        this.hero = new Hero({ pos: CONSTANTS.HERO_START_POS })
        this.enemies = []

        this.clearCanvas = this.clearCanvas.bind(this)
        this.changeEnemyDirections = this.changeEnemyDirections.bind(this)
    }

    placeNewEnemy() {
        const { hero } = this;
        let pos = getRandPos()
        while (pos.x === hero.x && pos.y === hero.y) pos = getRandPos()
        let enemy = new Enemy({
            size: CONSTANTS.ENEMY_SIZE,
            color: CONSTANTS.ENEMY_COLOR,
            pos
        })
        this.enemies.push(enemy)
    }

    drawEnemies(ctx){
        this.enemies.forEach(enemy => enemy.draw(ctx))
    }

    moveEnemies(){
        this.enemies.forEach(enemy => enemy.move())
    }

    changeEnemyDirections(){
        this.enemies.forEach(enemy => {
            const randSecond = Math.floor(Math.random() * 3000)
            setTimeout(enemy.changeDir,randSecond)
        })
    }

    clearCanvas() {
        const { ctx } = this;
        ctx.clearRect(
            CONSTANTS.CANVAS_SIDE_LENGTH,
            CONSTANTS.CANVAS_SIDE_LENGTH,
            CONSTANTS.CANVAS_SIDE_LENGTH,
            CONSTANTS.CANVAS_SIDE_LENGTH
        );
        ctx.fillStyle = "black";
        ctx.fillRect(
            CONSTANTS.CANVAS_START_POS,
            CONSTANTS.CANVAS_START_POS,
            CONSTANTS.CANVAS_SIDE_LENGTH,
            CONSTANTS.CANVAS_SIDE_LENGTH
        );
    }
}

export default GameCanvas