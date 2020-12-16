import * as CONSTANTS from './constants'

class Hero {
    constructor({pos}){
        this.length = CONSTANTS.UNIT
        this.color = CONSTANTS.HERO_COLOR
        this.x = pos.x,
        this.y = pos.y
    }

    draw(ctx) {
        const { length, color, x, y } = this
        ctx.fillStyle = color;

        ctx.fillRect(x, y, length, length);
    }

}

export default Hero