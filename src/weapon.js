import * as CONSTANTS from './constants'
import GameObject from './game_object'

class Weapon extends GameObject {
    constructor(attributes){
        attributes = {
            ...attributes,
            color: CONSTANTS.CANVAS_COLOR,
            dir: CONSTANTS.WEAPON_DIR_VERTICAL,
            pos: {}
        }
        super(attributes)

        this.length = CONSTANTS.WEAPON_LENGTH
        this.width = CONSTANTS.WEAPON_WIDTH
    }

    draw(){
        switch (this.dir) {
            case CONSTANTS.WEAPON_DIR_VERTICAL:
                this.drawVertically()
                break;
            case CONSTANTS.WEAPON_DIR_HORIZONTAL:
                this.drawHorizontally()
                break;
            case CONSTANTS.DIR_LEFT_UP:
                this.drawLeftUp()
                break;
            case CONSTANTS.DIR_DOWN_RIGHT:
                this.drawDownRight()
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

    drawLeftUp(){
        const { length, width, color, x, y, ctx } = this
        ctx.fillStyle = color;

        // Point of transform origin
        ctx.translate(x, y);
        ctx.rotate(45 * Math.PI / 180);
        ctx.fillRect(0, 0, width, length);

        // Reset transformation matrix to the identity matrix
        ctx.setTransform(1, 0, 0, 1, 0, 0);
    }

    drawDownRight() {
        const { length, width, color, x, y, ctx } = this
        ctx.fillStyle = color;

        // Point of transform origin
        ctx.translate(x, y);
        ctx.rotate(45 * Math.PI / 180);
        ctx.fillRect(0, 0, width, length);

        // Reset transformation matrix to the identity matrix
        ctx.setTransform(1, 0, 0, 1, 0, 0);
    }

    collidedWith(enemyPos) {
        const enemyX = enemyPos.x - CONSTANTS.ENEMY_SIZE
        const enemyY = enemyPos.y - CONSTANTS.ENEMY_SIZE
        const enemyWidth = CONSTANTS.ENEMY_SIZE * 2
        const weaponWidth = this.dir === CONSTANTS.WEAPON_DIR_VERTICAL 
            ? CONSTANTS.WEAPON_WIDTH : CONSTANTS.WEAPON_LENGTH
        const weaponLength = this.dir === CONSTANTS.WEAPON_DIR_VERTICAL
            ? CONSTANTS.WEAPON_LENGTH : CONSTANTS.WEAPON_WIDTH

        // Detect if 2 rectangles have collided
        return (this.x < enemyX + enemyWidth &&
            this.x + weaponWidth > enemyX &&
            this.y < enemyY + enemyWidth &&
            this.y + weaponLength > enemyY)
     
    }
}

export default Weapon