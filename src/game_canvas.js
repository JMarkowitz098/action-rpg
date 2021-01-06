import * as C from './constants'
import Hero from './hero'
import Enemy from './enemy'

const getRandPos = () => {
    const factor = C.CANVAS_SIDE_LENGTH / C.UNIT
    let x = Math.floor(Math.random() * factor) * C.UNIT
    let y = Math.floor(Math.random() * factor) * C.UNIT
    while (x > C.CANVAS_SIDE_LENGTH 
        || y > C.CANVAS_SIDE_LENGTH
        || x < C.CANVAS_START_POS + C.ENEMY_SPRITE_SCALED_WIDTH
        || y < C.CANVAS_START_POS + C.ENEMY_SPRITE_SCALED_HEIGHT
    ){
        x = Math.floor(Math.random() * factor) * C.UNIT
        y = Math.floor(Math.random() * factor) * C.UNIT
    }
    return { x, y }
}

class GameCanvas {
    constructor({ ctx }) {
        this.ctx = ctx;
        this.hero = new Hero({ pos: C.HERO_START_POS, ctx })
        this.enemies = []

        this.clearCanvas = this.clearCanvas.bind(this)
        this.changeEnemyDirections = this.changeEnemyDirections.bind(this)
        this.placeNewEnemy = this.placeNewEnemy.bind(this)
    }

    placeNewEnemy() {
        const { hero, ctx } = this;
        let pos = getRandPos()
        while (hero.collidedWith({x: pos.x, y:pos.y})) pos = getRandPos()
        let enemy = new Enemy({
            pos,
            ctx
        })
        this.enemies.push(enemy)
    }

    drawEnemies(){
        this.enemies.forEach(enemy => enemy.draw())
    }

    drawHealth(){
        this.hero.health.forEach(heart => heart.draw())
    }

    moveEnemies(){
        this.enemies.forEach(enemy => enemy.move())
    }

    checkForCollisions(){
        const { hero, enemies } = this;

        let heroColidedWithEnemy = 
            enemies.some(enemy => hero.collidedWith(enemy))
        if (heroColidedWithEnemy && hero.isVulnerable()) hero.decreaseHealth();
           
        let enemyIdxs = []
        this.enemies.forEach((enemy, idx) => {
            if (this.hero.weapon.collidedWith(enemy)) enemyIdxs.push(idx)
        })
        enemyIdxs.forEach(idx => {
            this.enemies.splice(idx, 1)
            this.increaseScore()
        })
    }

    changeEnemyDirections(){
        this.enemies.forEach(enemy => {
            const randSecond = Math.floor(Math.random() * 3000)
            setTimeout(enemy.changeDir,randSecond)
        })
    }

    increaseScore(){
        let scoreEle = document.getElementById('score')
        let scoreStr = scoreEle.innerHTML
        let score = parseInt(scoreStr.split(':')[1])
        score += 1
        scoreEle.innerHTML = `Score: ${score}`;

    }

    clearCanvas() {
        const { ctx } = this;
        ctx.clearRect(
            C.CANVAS_SIDE_LENGTH,
            C.CANVAS_SIDE_LENGTH,
            C.CANVAS_SIDE_LENGTH,
            C.CANVAS_SIDE_LENGTH
        );

        ctx.fillStyle = 'grey';
        ctx.fillRect(
            0,
            0,
            C.CANVAS_SIDE_LENGTH + 150,
            C.CANVAS_SIDE_LENGTH + 150
        );

        ctx.fillStyle = C.CANVAS_COLOR;
        ctx.fillRect(
            C.CANVAS_START_POS,
            C.CANVAS_START_POS,
            C.CANVAS_SIDE_LENGTH,
            C.CANVAS_SIDE_LENGTH
        );
    }
}

export default GameCanvas