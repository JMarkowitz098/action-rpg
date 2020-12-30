import * as C from './constants'
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
            dir: getRandomDir(),
            color: C.ENEMY_COLOR
        }
        super(attributes)

        this.length = C.ENEMY_SIZE
        this.changeDir = this.changeDir.bind(this)
    }

    draw() {
        const { length, color, x, y, ctx } = this
        ctx.fillStyle = color;

        ctx.beginPath();
        ctx.arc(x, y, length, 0, 2 * Math.PI);
        ctx.fill();

        // this.drawHitBox()
    }

    drawHitBox(){
        const { x, y, ctx } = this;
        ctx.strokeStyle = "green";
        ctx.rect(
            x - C.ENEMY_SIZE,
            y - C.ENEMY_SIZE,
            C.ENEMY_SIZE * 2,
            C.ENEMY_SIZE * 2
        );
        ctx.stroke();
    }

    changeDir() {
        this.dir = getRandomDir()
    }

    changeVel(vel) {
        this.vel = vel
    }

    die() {
        this.color = C.CANVAS_OUTSIDE_COLOR
        this.x = null;
        this.y = null;
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
                newX = x - C.ENEMY_MOVE_LENGTH * vel
                newY = y - C.ENEMY_MOVE_LENGTH * vel
                break;
            case C.DIR_RIGHT_UP:
                newX = x + C.ENEMY_MOVE_LENGTH * vel
                newY = y - C.ENEMY_MOVE_LENGTH * vel
                break;
            case C.DIR_DOWN_LEFT:
                newX = x - C.ENEMY_MOVE_LENGTH * vel
                newY = y + C.ENEMY_MOVE_LENGTH * vel
                break;
            case C.DIR_DOWN_RIGHT:
                newX = x + C.ENEMY_MOVE_LENGTH * vel
                newY = y + C.ENEMY_MOVE_LENGTH * vel
                break;
        }

        if (this.validMove(dir, newX, newY)) {
            this.x = newX
            this.y = newY
        } else {
            this.dir = this.getRandomDir(dir)
            this.move()
        }
    }

    getRandomDir(oldDir){
        let randIdx = Math.floor(Math.random() * C.DIR_POSSIBLE_MOVES.length)
        let newDir = C.DIR_POSSIBLE_MOVES[randIdx]
        while(oldDir === newDir){
            randIdx = Math.floor(Math.random() * C.DIR_POSSIBLE_MOVES.length)
            newDir = C.DIR_POSSIBLE_MOVES[randIdx]
        }
        return newDir
    }

    validXMove(dir, newX) {
        return dir === 'left'
            ? newX >= C.CANVAS_LEFT_BOUNDARY + 25
            : newX <= C.CANVAS_RIGHT_BOUNDARY - C.ENEMY_SIZE
    }

    validYMove(dir, newY) {
        return dir === 'up'
            ? newY >= C.CANVAS_UP_BOUNDARY + 25
            : newY <= C.CANVAS_DOWN_BOUNDARY - C.ENEMY_SIZE
    }

    validMove(dir, newX, newY) {
        return dir.split(" ").every(dir => {
            return (dir === 'up' || dir === 'down')
                ? this.validYMove(dir, newY)
                : this.validXMove(dir, newX)
        })
    }
}

export default Enemy