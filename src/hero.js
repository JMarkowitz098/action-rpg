import * as CONSTANTS from './constants'

class Hero {
    constructor({pos}){
        this.length = CONSTANTS.HERO_SIZE
        this.color = CONSTANTS.HERO_COLOR
        this.x = pos.x,
        this.y = pos.y
    }

    draw(ctx) {
        const { length, color, x, y } = this
        ctx.fillStyle = color;

        ctx.fillRect(x, y, length, length);
    }

    move(keysDown){
        let dir = Object.keys(keysDown).sort().join(' ')
        const {x, y} = this
        let newX = x;
        let newY = y;
        switch (dir) {
            case CONSTANTS.DIR_UP:
                newY = y - CONSTANTS.HERO_MOVE_LENGTH
                break;
            case CONSTANTS.DIR_DOWN:
                newY = y + CONSTANTS.HERO_MOVE_LENGTH
                break;
            case CONSTANTS.DIR_LEFT:
                newX = x - CONSTANTS.HERO_MOVE_LENGTH
                break;
            case CONSTANTS.DIR_RIGHT:
                newX = x + CONSTANTS.HERO_MOVE_LENGTH
                break;
            case CONSTANTS.DIR_LEFT_UP:
                newX = x - CONSTANTS.HERO_MOVE_LENGTH
                newY = y - CONSTANTS.HERO_MOVE_LENGTH
                break;
            case CONSTANTS.DIR_RIGHT_UP:
                newX = x + CONSTANTS.HERO_MOVE_LENGTH
                newY = y - CONSTANTS.HERO_MOVE_LENGTH
                break;
            case CONSTANTS.DIR_DOWN_LEFT:
                newX = x - CONSTANTS.HERO_MOVE_LENGTH
                newY = y + CONSTANTS.HERO_MOVE_LENGTH
                break;
            case CONSTANTS.DIR_DOWN_RIGHT:
                newX = x + CONSTANTS.HERO_MOVE_LENGTH
                newY = y + CONSTANTS.HERO_MOVE_LENGTH
                break;
        }

        if (this.validMove(dir, newX, newY)){
            this.x = newX
            this.y = newY
        }
    }

    validXMove(dir, newX){
        return dir === 'left' 
            ? newX >= CONSTANTS.CANVAS_LEFT_BOUNDARY
            : newX <= CONSTANTS.CANVAS_RIGHT_BOUNDARY - CONSTANTS.HERO_SIZE
    }

    validYMove(dir, newY){
        return dir === 'up' 
            ? newY >= CONSTANTS.CANVAS_UP_BOUNDARY
            : newY <= CONSTANTS.CANVAS_DOWN_BOUNDARY - CONSTANTS.HERO_SIZE
    }

    validMove(dir, newX, newY){
        return dir.split(" ").every(dir => {
            return (dir === 'up' || dir === 'down') 
                ? this.validYMove(dir, newY)
                : this.validXMove(dir, newX)
        })
    }
}

export default Hero