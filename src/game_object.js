import * as CONSTANTS from './constants'

class GameObject {
    constructor({ctx, pos, vel, dir, color}){
        this.ctx = ctx
        this.x = pos.x
        this.y = pos.y
        this.vel = vel
        this.dir = dir
        this.color = color

        this.isColliding = false;
    }
}

export default GameObject