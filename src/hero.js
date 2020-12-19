import * as CONSTANTS from './constants'
import Weapon from './weapon'

class Hero {
    constructor({pos}){
        this.length = CONSTANTS.HERO_SIZE
        this.color = CONSTANTS.HERO_COLOR
        this.x = pos.x,
        this.y = pos.y
        this.vel = 0
        this.dir = 'down'
        this.weapon = new Weapon()

        this.putAwayWeapon = this.putAwayWeapon.bind(this)
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

    collidedWith(enemyPos){
        const enemyX = enemyPos.x - CONSTANTS.ENEMY_SIZE
        const enemyY = enemyPos.y - CONSTANTS.ENEMY_SIZE
        const enemyWidth = CONSTANTS.ENEMY_SIZE * 2
        const heroWidth = CONSTANTS.HERO_SIZE

        // Detect if 2 rectngles have collided
        return (this.x < enemyX + enemyWidth &&
            this.x + heroWidth > enemyX &&
            this.y < enemyY + enemyWidth &&
            this.y + heroWidth > enemyY) 
    }

    useWeapon(){
        this.weapon.dir = this.getWeaponDir()
        const { newX, newY } = this.getNewPosUsingDir(this.weapon.dir)
        if (this.isInCanvas(this.dir, newX, newY)) {
            this.weapon.color = CONSTANTS.WEAPON_COLOR
            this.weapon.x = newX
            this.weapon.y = newY
            setTimeout(this.putAwayWeapon, 50)
        }
    }

    getWeaponDir(){
        switch (this.dir) {
            case CONSTANTS.DIR_UP:
            case CONSTANTS.DIR_DOWN:
                return CONSTANTS.WEAPON_DIR_HORIZONTAL
            case CONSTANTS.DIR_LEFT:
            case CONSTANTS.DIR_RIGHT:
                return CONSTANTS.WEAPON_DIR_VERTICAL
            case CONSTANTS.DIR_LEFT_UP:
            case CONSTANTS.DIR_DOWN_RIGHT:
                return CONSTANTS.WEAPON_DIR_DIAG_RIGHT
            case CONSTANTS.DIR_RIGHT_UP:
            case CONSTANTS.DIR_DOWN_LEFT:
                return CONSTANTS.WEAPON_DIR_DIAG_LEFT
        }
    }

    getNewPosUsingDir(type){
        const { oldX, oldY, delta, diagDelta } = this.getCoordInfo(type)
        let newX = oldX
        let newY = oldY

        switch (this.dir) {
            case CONSTANTS.DIR_UP:
                newY = newY - delta
                break;
            case CONSTANTS.DIR_DOWN:
                newY = newY + delta
                break;
            case CONSTANTS.DIR_LEFT:
                newX = newX - delta
                break;
            case CONSTANTS.DIR_RIGHT:
                newX = newX + delta
                break;
            case CONSTANTS.DIR_LEFT_UP:
                newX = newX - diagDelta
                newY = newY - diagDelta
                break;
            case CONSTANTS.DIR_RIGHT_UP:
                newX = newX + diagDelta
                newY = newY - diagDelta
                break;
            case CONSTANTS.DIR_DOWN_LEFT:
                newX = newX - diagDelta
                newY = newY + diagDelta
                break;
            case CONSTANTS.DIR_DOWN_RIGHT:
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
            case CONSTANTS.HERO_MOVEMENT:
                oldX = x;
                oldY = y;
                delta = CONSTANTS.HERO_MOVE_LENGTH * vel
                diagDelta = delta
                break;
            case CONSTANTS.WEAPON_DIR_VERTICAL:
                oldX = x + (CONSTANTS.HERO_SIZE - CONSTANTS.WEAPON_WIDTH) / 2
                oldY = y + (CONSTANTS.HERO_SIZE - CONSTANTS.WEAPON_LENGTH) / 2
                delta = CONSTANTS.WEAPON_DIST
                diagDelta = (CONSTANTS.WEAPON_DIST / 2) * Math.sqrt(2)
                break;
            case CONSTANTS.WEAPON_DIR_HORIZONTAL:
                oldX = x - (CONSTANTS.WEAPON_LENGTH - CONSTANTS.HERO_SIZE) / 2
                oldY = y
                delta = CONSTANTS.WEAPON_DIST
                diagDelta = (CONSTANTS.WEAPON_DIST / 2) * Math.sqrt(2)
            case CONSTANTS.WEAPON_DIR_DIAG_RIGHT:
                oldX = x - (CONSTANTS.WEAPON_LENGTH - CONSTANTS.HERO_SIZE) / 2
                oldY = y
                delta = CONSTANTS.WEAPON_DIST
                diagDelta = (CONSTANTS.WEAPON_DIST / 2) * Math.sqrt(2)
        }
        
        return { oldX, oldY, delta, diagDelta }
    }

    putAwayWeapon(){
        this.weapon.color = 'white' // Outside of canvas color
        this.weapon.x = null
        this.weapon.y = null
    }

    move(){
        const { newX, newY } = this.getNewPosUsingDir(CONSTANTS.HERO_MOVEMENT)

        if (this.isInCanvas(this.dir, newX, newY)) {
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

    isInCanvas(dir, newX, newY){
        return dir.split(" ").every(dir => {
            return (dir === 'up' || dir === 'down') 
                ? this.validYMove(dir, newY)
                : this.validXMove(dir, newX)
        })
    }
}

export default Hero