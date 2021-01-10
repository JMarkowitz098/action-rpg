import GameObject from './game_object'
import * as C from './constants'

class Health extends GameObject {
    constructor(attributes){
        attributes = {
            ...attributes,
            color: C.HEALTH_COLOR,
        }
        super(attributes)

        this.length = C.HEALTH_LENGTH
    }

    draw() {
        const { length, color, x, y, ctx } = this
        ctx.fillStyle = color;

        ctx.fillRect(x, y, length, length);
    }
}

export default Health