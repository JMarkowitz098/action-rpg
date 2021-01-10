
class GameObject {
    constructor({ctx, pos, vel, dir, color}){
        this.x = pos.x
        this.y = pos.y
        if (ctx) this.ctx = ctx
        if (vel) this.vel = vel
        if (dir) this.dir = dir
        if (color) this.color = color //Remove when everything is a sprite
    }
}

export default GameObject