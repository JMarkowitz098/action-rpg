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

    move(dir){
        const {x,y} = this
        switch (dir) {
            case CONSTANTS.DIR_UP:
                let newUp = y - CONSTANTS.HERO_MOVE_LENGTH
                if (newUp >= CONSTANTS.CANVAS_UP_BOUNDARY) this.y = newUp
                break;
            case CONSTANTS.DIR_DOWN:
                let newDown = y + CONSTANTS.HERO_MOVE_LENGTH
                if (newDown <= 
                    CONSTANTS.CANVAS_DOWN_BOUNDARY - CONSTANTS.HERO_SIZE) 
                        this.y = newDown
                break;
            case CONSTANTS.DIR_LEFT:
                let newLeft = x - CONSTANTS.HERO_MOVE_LENGTH
                if (newLeft >= CONSTANTS.CANVAS_LEFT_BOUNDARY) this.x = newLeft
                break;
            case CONSTANTS.DIR_RIGHT:
                let newRight = x + CONSTANTS.HERO_MOVE_LENGTH
                if (newRight <=
                    CONSTANTS.CANVAS_DOWN_BOUNDARY - CONSTANTS.HERO_SIZE)
                    this.x = newRight
                break;
        }
    }

    validMove(newPos, boundary){
        return
    }
}

export default Hero