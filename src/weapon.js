import * as CONSTANTS from './constants'

class Weapon {
    constructor(){
        this.x
        this.y
        this.color = CONSTANTS.CANVAS_COLOR
        this.length = CONSTANTS.WEAPON_SIZE
    }

    draw(ctx){
        const { length, color, x, y } = this
        ctx.fillStyle = color;

        ctx.fillRect(x, y, length, length);
    }
}

export default Weapon