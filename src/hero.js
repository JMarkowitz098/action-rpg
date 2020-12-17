import * as CONSTANTS from './constants'

class Hero {
    constructor({pos}){
        this.length = CONSTANTS.HERO_SIZE
        this.color = CONSTANTS.HERO_COLOR
        this.x = pos.x,
        this.y = pos.y
        this.vel = 0
        this.dir = 'down'
    }

    draw(ctx) {
        const { length, color, x, y } = this
        ctx.fillStyle = color;

        ctx.fillRect(x, y, length, length);
    }

    dash(keysDown){
        this.changeDir(keysDown, CONSTANTS.HERO_DASH_VEL)
    }

    changeDir(keysDown){
        let newDir = Object.entries(keysDown)
        .filter(([key, val]) => val)
        .map(([key, val]) => key)
        .sort()
        .join(' ');
        if (CONSTANTS.DIR_POSSIBLE_MOVES.includes(newDir))
            this.dir = newDir;
    }

    changeVel(vel){
        this.vel = vel
    }

    move(){
        const { x, y, dir, vel } = this;
        let newX = x
        let newY = y;
        switch (dir) {
            case CONSTANTS.DIR_UP:
                newY = y - CONSTANTS.HERO_MOVE_LENGTH * vel
                break;
            case CONSTANTS.DIR_DOWN:
                newY = y + CONSTANTS.HERO_MOVE_LENGTH * vel
                break;
            case CONSTANTS.DIR_LEFT:
                newX = x - CONSTANTS.HERO_MOVE_LENGTH * vel
                break;
            case CONSTANTS.DIR_RIGHT:
                newX = x + CONSTANTS.HERO_MOVE_LENGTH * vel
                break;
            case CONSTANTS.DIR_LEFT_UP:
                newX = x - CONSTANTS.HERO_MOVE_LENGTH * vel
                newY = y - CONSTANTS.HERO_MOVE_LENGTH * vel
                break;
            case CONSTANTS.DIR_RIGHT_UP:
                newX = x + CONSTANTS.HERO_MOVE_LENGTH * vel
                newY = y - CONSTANTS.HERO_MOVE_LENGTH * vel
                break;
            case CONSTANTS.DIR_DOWN_LEFT:
                newX = x - CONSTANTS.HERO_MOVE_LENGTH * vel
                newY = y + CONSTANTS.HERO_MOVE_LENGTH * vel
                break;
            case CONSTANTS.DIR_DOWN_RIGHT:
                newX = x + CONSTANTS.HERO_MOVE_LENGTH * vel
                newY = y + CONSTANTS.HERO_MOVE_LENGTH * vel
                break;
        }

        if (this.validMove(dir, newX, newY)) {
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