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
        this.weapon.color = CONSTANTS.WEAPON_COLOR
        this.weapon.x = this.getWeaponPos().x
        this.weapon.y = this.getWeaponPos().y
        setTimeout(this.putAwayWeapon, 50)
    }

    getWeaponPos(){
        const { x, y, dir } = this
        let dist = (CONSTANTS.HERO_SIZE - CONSTANTS.WEAPON_SIZE) / 2
        let diagDist = (CONSTANTS.WEAPON_DIST / 2) * Math.sqrt(2)
        let newX = x + dist
        let newY = y + dist

        switch (dir) {
            case CONSTANTS.DIR_UP:
                newY = newY - CONSTANTS.WEAPON_DIST
                break;
            case CONSTANTS.DIR_DOWN:
                newY = newY + CONSTANTS.WEAPON_DIST
                break;
            case CONSTANTS.DIR_LEFT:
                newX = newX - CONSTANTS.WEAPON_DIST
                break;
            case CONSTANTS.DIR_RIGHT:
                newX = newX + CONSTANTS.WEAPON_DIST
                break;
            case CONSTANTS.DIR_LEFT_UP:
                newX = newX - diagDist
                newY = newY - diagDist
                break;
            case CONSTANTS.DIR_RIGHT_UP:
                newX = newX + diagDist
                newY = newY - diagDist
                break;
            case CONSTANTS.DIR_DOWN_LEFT:
                newX = newX - diagDist
                newY = newY + diagDist
                break;
            case CONSTANTS.DIR_DOWN_RIGHT:
                newX = newX + diagDist
                newY = newY + diagDist
                break;
        }

        return ({x: newX, y: newY})
    }

    putAwayWeapon(){
        this.weapon.color = 'white' // Outside of canvas color
        this.weapon.x = null
        this.weapon.y = null
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