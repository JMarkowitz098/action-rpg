import * as C from './constants'
import Weapon from './weapon'
import GameObject from './game_object'
import Health from './health'
import Movement from './movement'

class Hero extends GameObject {
    constructor(attributes){
        attributes = { 
            ...attributes, 
            dir: C.DIR_DOWN, 
            vel: C.HERO_START_DIR, 
            color: C.HERO_COLOR
        }
        super(attributes)

        this.length = C.HERO_SIZE
        this.health = this.createStartingHealth(C.HERO_START_HEALTH)
        this.weapon = new Weapon({ctx: attributes.ctx})
        this.movement = new Movement()
    }

    draw() {
        const { length, color, x, y, ctx } = this
        ctx.fillStyle = color;

        ctx.fillRect(x, y, length, length);
    }

    dash(keysDown){
        this.changeDir(keysDown, C.HERO_DASH_VEL)
    }

    createStartingHealth(numHealth){
        let health = []

        for(let i = 0; i < numHealth; i++){
            let attributes = {
                pos: {
                    x: (40 * i + C.HEALTH_START_X),
                    y: C.HEALTH_START_Y
                },
                ctx: this.ctx
            }
            let heart = new Health(attributes)
            health.push(heart)
        }

        return health
    }

    decreaseHealth(){
        this.health.pop();
        this.color = 'purple'
        setTimeout(() => this.color = C.HERO_COLOR, 3000)
    }
    
    isVulnerable(){
        return this.color === C.HERO_COLOR
    }

    changeDir(keysDown){
        let newDir = this.filterExtraKeys(Object.entries(keysDown))
            .map(([key, val]) => key)
            .sort()
            .join(' ');

        if (C.DIR_POSSIBLE_MOVES.includes(newDir)) this.dir = newDir;
    }

    filterExtraKeys(newDir){
        let filtered = newDir.filter(([key, val]) => val)
        if(filtered.length === 1) return filtered

        if(filtered[0][0] === C.DIR_RIGHT && filtered[1][0] === C.DIR_LEFT)
            filtered = filtered[0][0] === this.dir ? [filtered[1]] : [filtered[0]]
        if (filtered[0][0] === C.DIR_DOWN && filtered[1][0] === C.DIR_UP) 
            filtered = filtered[0][0] === this.dir ? [filtered[1]] : [filtered[0]]

        return filtered
    }

    changeVel(vel){
        this.vel = vel
    }

    collidedWith(enemyPos){
        const enemyX = enemyPos.x - C.ENEMY_SIZE
        const enemyY = enemyPos.y - C.ENEMY_SIZE
        const enemyWidth = C.ENEMY_SIZE * 2
        const heroWidth = C.HERO_SIZE

        // Detect if 2 rectangles have collided
        return (this.x < enemyX + enemyWidth &&
            this.x + heroWidth > enemyX &&
            this.y < enemyY + enemyWidth &&
            this.y + heroWidth > enemyY) 
    }

    useWeapon(){
        this.weapon.dir = this.weapon.getNewDir(this.dir)
        const { newX, newY } = this.movement.getNewPosUsingDir(this.weapon.dir,{
            x: this.x,
            y: this.y,
            dir: this.dir,
            vel: this.vel
        })

        if (this.movement.isInCanvas(this.dir, newX, newY)) {
            this.weapon.color = C.WEAPON_COLOR
            this.weapon.x = newX
            this.weapon.y = newY
            setTimeout(this.weapon.putAway, 50)
        }
    }

    move(){
        let newPos = this.movement.move({
            x: this.x,
            y: this.y,
            dir: this.dir,
            vel: this.vel
        })

        this.x = newPos.x
        this.y = newPos.y
    }
}

export default Hero