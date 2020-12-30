import * as C from './constants'
import Weapon from './weapon'
import GameObject from './game_object'
import Health from './health'

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

        this.putAwayWeapon = this.putAwayWeapon.bind(this)
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
        let newDir = Object.entries(keysDown)
        .filter(([key, val]) => val)
        .map(([key, val]) => key)
        .sort()
        .join(' ');
        if (C.DIR_POSSIBLE_MOVES.includes(newDir))
            this.dir = newDir;
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
        this.weapon.dir = this.getNewWeaponDir()
        const { newX, newY } = this.getNewPosUsingDir(this.weapon.dir)
        if (this.isInCanvas(this.dir, newX, newY)) {
            this.weapon.color = C.WEAPON_COLOR
            this.weapon.x = newX
            this.weapon.y = newY
            setTimeout(this.putAwayWeapon, 50)
        }
    }

    getNewWeaponDir(){
        switch (this.dir) {
            case C.DIR_UP:
            case C.DIR_DOWN:
                return C.WEAPON_DIR_HORIZONTAL
            case C.DIR_LEFT:
            case C.DIR_RIGHT:
                return C.WEAPON_DIR_VERTICAL
            default:
                return this.dir

        }
    }

    getNewPosUsingDir(type){
        const { oldX, oldY, delta, diagDelta } = this.getCoordInfo(type)
        let newX = oldX
        let newY = oldY

        switch (this.dir) {
            case C.DIR_UP:
                newY = newY - delta
                break;
            case C.DIR_DOWN:
                newY = newY + delta
                break;
            case C.DIR_LEFT:
                newX = newX - delta
                break;
            case C.DIR_RIGHT:
                newX = newX + delta
                break;
            case C.DIR_LEFT_UP:
                newX = newX - diagDelta
                newY = newY - diagDelta
                break;
            case C.DIR_RIGHT_UP:
                newX = newX + diagDelta
                newY = newY - diagDelta
                break;
            case C.DIR_DOWN_LEFT:
                newX = newX - diagDelta
                newY = newY + diagDelta
                break;
            case C.DIR_DOWN_RIGHT:
                newX = newX + diagDelta
                newY = newY + diagDelta
                break;
        }

        return ({newX, newY})
    }

    getCoordInfo(type){
        const { x, y, vel } = this;
        let oldX, oldY, delta, diagDelta;
        switch (type) {
            case C.HERO_MOVEMENT:
                oldX = x;
                oldY = y;
                delta = C.HERO_MOVE_LENGTH * vel
                diagDelta = delta
                break;
            case C.WEAPON_DIR_VERTICAL:
                oldX = x + (C.HERO_SIZE - C.WEAPON_WIDTH) / 2
                oldY = y + (C.HERO_SIZE - C.WEAPON_LENGTH) / 2
                delta = C.WEAPON_DIST
                break;
            case C.WEAPON_DIR_HORIZONTAL:
                oldX = x - (C.WEAPON_LENGTH - C.HERO_SIZE) / 2
                oldY = y
                delta = C.WEAPON_DIST
                break;
            case C.DIR_LEFT_UP:
                oldX = x - C.WEAPON_WIDTH * .2, 
                oldY = y - C.WEAPON_LENGTH * .8
                delta = 0
                diagDelta = 0
                break;
            case C.DIR_DOWN_RIGHT:
                oldX = x + C.HERO_SIZE + C.WEAPON_WIDTH * .8
                oldY = y + C.HERO_SIZE * .6
                delta = 0
                diagDelta = 0
                break;
        }
        
        return { oldX, oldY, delta, diagDelta }
    }

    putAwayWeapon(){
        this.weapon.color = 'white' // Outside of canvas color
        this.weapon.x = null
        this.weapon.y = null
    }

    move(){
        const { newX, newY } = this.getNewPosUsingDir(C.HERO_MOVEMENT)

        if (this.isInCanvas(this.dir, newX, newY)) {
            this.x = newX
            this.y = newY
        }
    }

    validXMove(dir, newX){
        return dir === 'left' 
            ? newX >= C.CANVAS_LEFT_BOUNDARY
            : newX <= C.CANVAS_RIGHT_BOUNDARY - C.HERO_SIZE
    }

    validYMove(dir, newY){
        return dir === 'up' 
            ? newY >= C.CANVAS_UP_BOUNDARY
            : newY <= C.CANVAS_DOWN_BOUNDARY - C.HERO_SIZE
    }

    isInCanvas(dir, newX, newY){
        return dir.split(" ").every(dir => {
            return (dir === 'up' || dir === 'down') 
                ? this.validYMove(dir, newY)
                : this.validXMove(dir, newX)
        })
    }
}

export default Hero