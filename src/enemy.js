import * as CONSTANTS from './constants'

class Enemy {
    constructor({ pos }) {
        this.length = CONSTANTS.ENEMY_SIZE
        this.color = CONSTANTS.ENEMY_COLOR
        this.x = pos.x,
        this.y = pos.y
        this.vel = 1
        this.dir = this.getRandomDir()
        this.changeDir = this.changeDir.bind(this)
    }

    draw(ctx) {
        const { length, color, x, y } = this
        ctx.fillStyle = color;

        ctx.beginPath();
        ctx.arc(x, y, length, 0, 2 * Math.PI);
        ctx.fill();


        // Draw hit box
        ctx.strokeStyle = "green";
        ctx.rect(
            x - CONSTANTS.ENEMY_SIZE, 
            y - CONSTANTS.ENEMY_SIZE, 
            CONSTANTS.ENEMY_SIZE * 2, 
            CONSTANTS.ENEMY_SIZE * 2
        );
        ctx.stroke();
    }

    changeDir() {
        this.dir = this.getRandomDir()
    }

    changeVel(vel) {
        this.vel = vel
    }

    die() {
        this.color = CONSTANTS.CANVAS_OUTSIDE_COLOR
        this.x = null;
        this.y = null;
    }

    move() {
        const { x, y, dir, vel } = this;
        let newX = x
        let newY = y;
        switch (dir) {
            case CONSTANTS.DIR_UP:
                newY = y - CONSTANTS.ENEMY_MOVE_LENGTH * vel
                break;
            case CONSTANTS.DIR_DOWN:
                newY = y + CONSTANTS.ENEMY_MOVE_LENGTH * vel
                break;
            case CONSTANTS.DIR_LEFT:
                newX = x - CONSTANTS.ENEMY_MOVE_LENGTH * vel
                break;
            case CONSTANTS.DIR_RIGHT:
                newX = x + CONSTANTS.ENEMY_MOVE_LENGTH * vel
                break;
            case CONSTANTS.DIR_LEFT_UP:
                newX = x - CONSTANTS.ENEMY_MOVE_LENGTH * vel
                newY = y - CONSTANTS.ENEMY_MOVE_LENGTH * vel
                break;
            case CONSTANTS.DIR_RIGHT_UP:
                newX = x + CONSTANTS.ENEMY_MOVE_LENGTH * vel
                newY = y - CONSTANTS.ENEMY_MOVE_LENGTH * vel
                break;
            case CONSTANTS.DIR_DOWN_LEFT:
                newX = x - CONSTANTS.ENEMY_MOVE_LENGTH * vel
                newY = y + CONSTANTS.ENEMY_MOVE_LENGTH * vel
                break;
            case CONSTANTS.DIR_DOWN_RIGHT:
                newX = x + CONSTANTS.ENEMY_MOVE_LENGTH * vel
                newY = y + CONSTANTS.ENEMY_MOVE_LENGTH * vel
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
        let randIdx = Math.floor(Math.random() * CONSTANTS.DIR_POSSIBLE_MOVES.length)
        let newDir = CONSTANTS.DIR_POSSIBLE_MOVES[randIdx]
        while(oldDir === newDir){
            randIdx = Math.floor(Math.random() * CONSTANTS.DIR_POSSIBLE_MOVES.length)
            newDir = CONSTANTS.DIR_POSSIBLE_MOVES[randIdx]
        }
        return newDir
    }

    validXMove(dir, newX) {
        return dir === 'left'
            ? newX >= CONSTANTS.CANVAS_LEFT_BOUNDARY + 25
            : newX <= CONSTANTS.CANVAS_RIGHT_BOUNDARY - CONSTANTS.ENEMY_SIZE
    }

    validYMove(dir, newY) {
        return dir === 'up'
            ? newY >= CONSTANTS.CANVAS_UP_BOUNDARY + 25
            : newY <= CONSTANTS.CANVAS_DOWN_BOUNDARY - CONSTANTS.ENEMY_SIZE
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