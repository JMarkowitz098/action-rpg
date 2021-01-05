import * as C from './constants'
import GameObject from './game_object'

class Weapon extends GameObject {
    constructor(attributes){
        attributes = {
            ...attributes,
            color: C.CANVAS_COLOR,
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
        const enemyX = enemyPos.x - C.ENEMY_SIZE
        const enemyY = enemyPos.y - C.ENEMY_SIZE
        const enemyWidth = C.ENEMY_SIZE * 2
        const weaponWidth = this.dir === C.WEAPON_DIR_VERTICAL 
            ? C.WEAPON_WIDTH : C.WEAPON_LENGTH
        const weaponLength = this.dir === C.WEAPON_DIR_VERTICAL
            ? C.WEAPON_LENGTH : C.WEAPON_WIDTH

        // Detect if 2 rectangles have collided
        return (this.x < enemyX + enemyWidth &&
            this.x + weaponWidth > enemyX &&
            this.y < enemyY + enemyWidth &&
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
        this.x = C.CANVAS_RIGHT_BOUNDARY
        this.y = C.CANVAS_DOWN_BOUNDARY
    }
}

export default Weapon