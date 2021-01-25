import * as C from './constants'
import Hero from './hero'
import Enemy from './enemy'



// Represents the plying area
class GameCanvas {
    constructor({ ctx }) {
        this.ctx = ctx;
        this.hero = new Hero({ pos: C.HERO_START_POS, ctx })
        this.enemies = []

        this.clearCanvas = this.clearCanvas.bind(this)
        this.changeEnemyDirections = this.changeEnemyDirections.bind(this)
        this.placeNewEnemy = this.placeNewEnemy.bind(this)
        this.background = this.createBackground()
    }

    placeNewEnemy() {
        const { hero, ctx } = this;
        let attrs = getRandStartPos()
        while (hero.collidedWith({x: attrs.pos.x, y: attrs.pos.y})) // Don't need anymore
            attrs = getRandStartPos()
        let enemy = new Enemy({ ...attrs,ctx })
        this.enemies.push(enemy)
    }

    createBackground(){
        let image = new Image
        image.src = '../sprite_sheets/floor.jpg'
        // image.src = '../'
        return image
    }

    drawEnemies(){
        this.enemies.forEach(enemy => enemy.draw())
    }

    drawHealth(){
        this.hero.health.forEach(heart => heart.draw())
    }

    drawFrame(frameX, frameY, canvasX, canvasY) {
        const { ctx, background } = this;
        ctx.drawImage(
            background, //image source
            frameX, //sx
            frameY, //sy
            C.PLAY_AREA_S_WIDTH, //sWIDTH
            C.PLAY_AREA_S_HEIGHT, //sHEIGHT
            canvasX, //dX
            canvasY, //dY
            C.PLAY_AREA_SIDE_LENGTH, //dWIDTH
            C.PLAY_AREA_SIDE_LENGTH //dHEIGHT
        );
    }

    moveEnemies(){
        this.enemies.forEach(enemy => enemy.move())
    }

    checkForCollisions(){
        const { hero, enemies } = this;

        let enemiesThatCollided = 
            enemies.filter(enemy => hero.collidedWith(enemy))
        if (enemiesThatCollided.length > 0) {
            enemiesThatCollided.forEach(enemy => enemy.reverseDir())
            if (hero.isVulnerable()) hero.decreaseHealth();
        }
           
        let deadEnemyIdxs = []
        this.enemies.forEach((enemy, idx) => {
            if (this.hero.weapon.collidedWith(enemy) && enemy.isVulnerable) {
                enemy.decreaseHealth();
                if (enemy.isDead()) deadEnemyIdxs.push(idx)
            }
        })
        deadEnemyIdxs.forEach(idx => {
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
            C.PLAY_AREA_SIDE_LENGTH, //Why is this not an x coordinate?
            C.PLAY_AREA_SIDE_LENGTH, //Why is this not an y coordinate?
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

        this.drawFrame(
            C.PLAY_AREA_SX,
            C.PLAY_AREA_SY,
            C.PLAY_AREA_START_POS,
            C.PLAY_AREA_START_POS,
        )
    }
}

const getRandStartPos = () => {
    const startingLocations = ['top', 'bottom', 'left', 'right']
    let startIdx = getRandom(startingLocations.length)
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
    return { pos: { x, y }, dir }
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

export default GameCanvas