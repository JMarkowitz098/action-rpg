import * as C from './constants'
import EnemyMovement from './enemy_movement'
// import Movement from './movement'
import GameObject from './game_object'

const getRandomDir = (oldDir = '') => {
        let randIdx = Math.floor(Math.random() * C.DIR_POSSIBLE_MOVES.length)
        let newDir = C.DIR_POSSIBLE_MOVES[randIdx]
        while(oldDir === newDir){
            randIdx = Math.floor(Math.random() * C.DIR_POSSIBLE_MOVES.length)
            newDir = C.DIR_POSSIBLE_MOVES[randIdx]
        }
        return newDir
}

class Enemy extends GameObject {
    constructor(attributes) {
        attributes = { 
            ...attributes, 
            vel: C.ENEMY_START_VEL, 
        }
        super(attributes)

        this.changeDir = this.changeDir.bind(this)
        this.movement = new EnemyMovement({
            width: C.ENEMY_SPRITE_SCALED_WIDTH,
            length: C.ENEMY_SPRITE_SCALED_LENGTH
        })

        this.initSprite()
    }

    draw() {
        const { x, y, spriteDirection, spritePositions } = this

        if(this.movement.isInCanvas({x, y})){
            if (C.TOOGGLE_DRAW_HITBOXES) this.drawHitBox()
            this.changeFrameAttributes()
            this.drawFrame(
                spritePositions[this.spritePositionsIdx],
                spriteDirection,
                x, y
            );
        }
       
    }

    drawFrame(frameX, frameY, canvasX, canvasY) {
        const { ctx, image } = this;
        ctx.drawImage(
            image, //image source
            frameX, //sx
            frameY, //sy
            C.ENEMY_WIDTH, //sWIDTH
            C.ENEMY_LENGTH, //sHEIGHT
            canvasX, //dX
            canvasY, //dY
            C.ENEMY_SPRITE_SCALED_WIDTH, //dWIDTH
            C.ENEMY_SPRITE_SCALED_LENGTH //dHEIGHT
        );
    }

    changeFrameAttributes() {
        this.frameCount++;
        if (this.frameCount >= C.FRAME_LIMIT) {
            this.frameCount = 0;
            this.changeSpritePositions()
        }
    }

    changeSpritePositions() {
        this.spritePositionsIdx++;
        if (this.spritePositionsIdx >= this.spritePositions.length)
            this.spritePositionsIdx = 0;
    }

    initSprite(){
        let image = new Image
        image.src = '/Users/jared/Desktop/Coding/action_rpg/Patreon sprites 1/17.png'
        this.image = image
        this.spriteDirection = this.getSpriteDir()
        this.frameCount = 0;
        this.spritePositions = C.ENEMY_SPRITE_X_POSITIONS;
        this.spritePositionsIdx = 0;
        this.hasMoved = false;
    }

    drawHitBox(){
        const { x, y, ctx } = this;
        ctx.strokeStyle = "green";
        ctx.strokeRect(
            x,
            y,
            C.ENEMY_SPRITE_SCALED_WIDTH,
            C.ENEMY_SPRITE_SCALED_LENGTH
        );
    }

    changeDir() {
        this.dir = getRandomDir()
        this.spriteDirection = this.getSpriteDir()
    }

    changeVel(vel) {
        this.vel = vel
    }

    getSpriteDir() {
        const { dir } = this
        switch (dir) {
            case C.DIR_UP:
                return C.ENEMY_SPRITE_FACING_UP
            case C.DIR_DOWN:
                return C.ENEMY_SPRITE_FACING_DOWN
            case C.DIR_LEFT:
                return C.ENEMY_SPRITE_FACING_LEFT
            case C.DIR_RIGHT:
                return C.ENEMY_SPRITE_FACING_RIGHT
            case C.DIR_LEFT_UP:
            case C.DIR_RIGHT_UP:
                return C.ENEMY_SPRITE_FACING_UP
            case C.DIR_DOWN_LEFT:
            case C.DIR_DOWN_RIGHT:
                return C.ENEMY_SPRITE_FACING_DOWN
        }
    }

    move() {
        const { x, y, dir, vel } = this;
        let newX = x
        let newY = y;
        switch (dir) {
            case C.DIR_UP:
                newY = y - C.ENEMY_MOVE_LENGTH * vel
                break;
            case C.DIR_DOWN:
                newY = y + C.ENEMY_MOVE_LENGTH * vel
                break;
            case C.DIR_LEFT:
                newX = x - C.ENEMY_MOVE_LENGTH * vel
                break;
            case C.DIR_RIGHT:
                newX = x + C.ENEMY_MOVE_LENGTH * vel
                break;
            case C.DIR_LEFT_UP:
                newX = x - C.ENEMY_MOVE_LENGTH * vel * .6
                newY = y - C.ENEMY_MOVE_LENGTH * vel * .6
                break;
            case C.DIR_RIGHT_UP:
                newX = x + C.ENEMY_MOVE_LENGTH * vel * .6
                newY = y - C.ENEMY_MOVE_LENGTH * vel * .6
                break;
            case C.DIR_DOWN_LEFT:
                newX = x - C.ENEMY_MOVE_LENGTH * vel * .6
                newY = y + C.ENEMY_MOVE_LENGTH * vel * .6
                break;
            case C.DIR_DOWN_RIGHT:
                newX = x + C.ENEMY_MOVE_LENGTH * vel * .6
                newY = y + C.ENEMY_MOVE_LENGTH * vel * .6
                break;
        }

        if (this.movement.validMove(dir, newX, newY)) {
            this.x = newX
            this.y = newY
            this.spriteDirection = this.getSpriteDir()
        } else {
            this.dir = this.getRandomDir(dir)
            this.move()
        }

        // Eventually move into enemy movement class
        // let newPos = this.movement.move({
        //     x: this.x,
        //     y: this.y,
        //     dir: this.dir,
        //     vel: this.vel
        // })

        // this.x = newPos.x
        // this.y = newPos.y
        
    }

    getRandomDir(oldDir = '') {
        let randIdx = Math.floor(Math.random() * C.DIR_POSSIBLE_MOVES.length)
        let newDir = C.DIR_POSSIBLE_MOVES[randIdx]
        while (oldDir === newDir) {
            randIdx = Math.floor(Math.random() * C.DIR_POSSIBLE_MOVES.length)
            newDir = C.DIR_POSSIBLE_MOVES[randIdx]
        }
        return newDir
    }
}

export default Enemy