import * as C from './constants'
import Hero from './hero'
import Enemy from './enemy'

const getRandStartPos = () => {
    const startingLocations = ['top', 'bottom', 'left', 'right']
    let startIdx =  getRandom(startingLocations.length)
    let startingLocation = startingLocations[startIdx]
    let x, y, dir

    switch (startingLocation) {
        case 'top':
            x = getRandX()
            y = C.PLAY_AREA_UP_BOUNDARY - C.ENEMY_SPRITE_SCALED_LENGTH
            dir = C.DIR_DOWN
            break;
        case 'bottom':
            x = getRandX()
            y = C.PLAY_AREA_DOWN_BOUNDARY
            dir = C.DIR_UP
            break;
        case 'right':
            x = C.PLAY_AREA_RIGHT_BOUNDARY
            y = getRandY()
            dir = C.DIR_LEFT
            break
        case 'left':
            x = C.PLAY_AREA_LEFT_BOUNDARY - C.ENEMY_SPRITE_SCALED_WIDTH
            y = getRandY()
            dir = C.DIR_RIGHT
            break;
        default:
            break;
    }
    return { pos: {x, y}, dir }
}

const getRandom = (num) => {
    return Math.floor(Math.random() * num)
}

const getRandX = () => {
    return getRandom(C.PLAY_AREA_SIDE_LENGTH - C.PLAY_AREA_START_POS) 
        + C.PLAY_AREA_START_POS
}
const getRandY = () => {
    return getRandom(C.PLAY_AREA_SIDE_LENGTH - C.PLAY_AREA_START_POS) 
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
        let attrs = getRandStartPos()
        while (hero.collidedWith({x: attrs.pos.x, y: attrs.pos.y})) 
            attrs = getRandStartPos()
        let enemy = new Enemy({ ...attrs,ctx })
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
            C.PLAY_AREA_SIDE_LENGTH,
            C.PLAY_AREA_SIDE_LENGTH,
            C.PLAY_AREA_SIDE_LENGTH,
            C.PLAY_AREA_SIDE_LENGTH
        );

        ctx.fillStyle = 'grey';
        ctx.fillRect(
            0,
            0,
            C.PLAY_AREA_SIDE_LENGTH + 150,
            C.PLAY_AREA_SIDE_LENGTH + 150
        );

        ctx.fillStyle = C.PLAY_AREA_COLOR;
        ctx.fillRect(
            C.PLAY_AREA_START_POS,
            C.PLAY_AREA_START_POS,
            C.PLAY_AREA_SIDE_LENGTH,
            C.PLAY_AREA_SIDE_LENGTH
        );
    }
}

export default GameCanvas