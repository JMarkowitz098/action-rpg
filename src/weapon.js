import * as C from './constants'
import GameObject from './game_object'

class Weapon extends GameObject {
    constructor(attributes){
        attributes = {
            ...attributes,
            color: C.PLAY_AREA_COLOR,
            pos: {}
        }
        super(attributes)

        this.length = C.WEAPON_LENGTH
        this.width = C.WEAPON_WIDTH

        this.putAway = this.putAway.bind(this)
    }

    draw(){
        switch (this.dir) {
            case C.WEAPON_DIR_VERTICAL:
                this.drawVertically()
                break;
            case C.WEAPON_DIR_HORIZONTAL:
                this.drawHorizontally()
                break;
       
        }
    }

    drawHorizontally(){
        const { length, width, color, x, y, ctx } = this
        ctx.fillStyle = color;

        ctx.fillRect(x, y, length, width);
    }

    drawVertically(){
        const { length, width, color, x, y, ctx } = this
        ctx.fillStyle = color;

        ctx.fillRect(x, y, width, length);
    }

    collidedWith(enemyPos) {
        const enemyX = enemyPos.x
        const enemyY = enemyPos.y
        const enemyWidth = C.ENEMY_SPRITE_SCALED_WIDTH
        const enemyLength = C.ENEMY_SPRITE_SCALED_HEIGHT
        const weaponWidth = this.dir === C.WEAPON_DIR_VERTICAL 
            ? C.WEAPON_WIDTH : C.WEAPON_LENGTH
        const weaponLength = this.dir === C.WEAPON_DIR_VERTICAL
            ? C.WEAPON_LENGTH : C.WEAPON_WIDTH

        // Detect if 2 rectangles have collided
        return (this.x < enemyX + enemyWidth &&
            this.x + weaponWidth > enemyX &&
            this.y < enemyY + enemyLength &&
            this.y + weaponLength > enemyY)
     
    }

    getNewDir(dir) {
        switch (dir) {
            case C.DIR_UP:
            case C.DIR_DOWN:
                return C.WEAPON_DIR_HORIZONTAL
            case C.DIR_LEFT:
            case C.DIR_RIGHT:
                return C.WEAPON_DIR_VERTICAL
            default:
                return C.WEAPON_DIR_HORIZONTAL
        }
    }

    putAway() {
        this.color = 'white' // Outside of canvas color
        // this.x = C.PLAY_AREA_RIGHT_BOUNDARY
        // this.y = C.PLAY_AREA_DOWN_BOUNDARY
        this.x = C.PLAY_AREA_RIGHT_BOUNDARY + 50
        this.y = C.PLAY_AREA_DOWN_BOUNDARY + 50
    }
}

export default Weapon