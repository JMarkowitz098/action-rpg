import * as CONSTANTS from './constants'
import Hero from './hero'
import Enemy from './enemy'

const getRandPos = () => {
    const factor = CONSTANTS.CANVAS_SIDE_LENGTH / CONSTANTS.UNIT
    let x = Math.floor(Math.random() * factor) * CONSTANTS.UNIT
    let y = Math.floor(Math.random() * factor) * CONSTANTS.UNIT
    while (x > CONSTANTS.CANVAS_SIDE_LENGTH 
        || y > CONSTANTS.CANVAS_SIDE_LENGTH
        || x < CONSTANTS.CANVAS_START_POS + CONSTANTS.ENEMY_SIZE
        || y < CONSTANTS.CANVAS_START_POS + CONSTANTS.ENEMY_SIZE
    ){
        x = Math.floor(Math.random() * factor) * CONSTANTS.UNIT
        y = Math.floor(Math.random() * factor) * CONSTANTS.UNIT
    }
    return { x, y }
}

class GameCanvas {
    constructor({ ctx }) {
        this.ctx = ctx;
        this.hero = new Hero({ pos: CONSTANTS.HERO_START_POS })
        this.enemies = []

        this.clearCanvas = this.clearCanvas.bind(this)
        this.changeEnemyDirections = this.changeEnemyDirections.bind(this)
        this.placeNewEnemy = this.placeNewEnemy.bind(this)
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

    drawWeapon(ctx){
        this.hero.weapon.draw(ctx)
    }

    moveEnemies(){
        this.enemies.forEach(enemy => enemy.move())
    }

    checkForCollisions(){
        let heroColidedWithEnemy = 
            this.enemies.some(enemy => this.hero.collidedWith(enemy))
        if (heroColidedWithEnemy) {
            this.hero.color = 'purple'
            setTimeout(() => this.hero.color = 'blue', 3000)
        }
        
        let enemyIdxs = []
        this.enemies.forEach((enemy, idx) => {
            if (this.hero.weapon.collidedWith(enemy)) enemyIdxs.push(idx)
        })
        enemyIdxs.forEach(idx => this.enemies.splice(idx, 1))
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
        ctx.fillStyle = CONSTANTS.CANVAS_COLOR;
        ctx.fillRect(
            CONSTANTS.CANVAS_START_POS,
            CONSTANTS.CANVAS_START_POS,
            CONSTANTS.CANVAS_SIDE_LENGTH,
            CONSTANTS.CANVAS_SIDE_LENGTH
        );
    }
}

export default GameCanvas