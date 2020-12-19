import * as CONSTANTS from './constants'

class Weapon {
    constructor(){
        this.x
        this.y
        this.color = CONSTANTS.CANVAS_COLOR
        this.length = CONSTANTS.WEAPON_LENGTH
        this.width = CONSTANTS.WEAPON_WIDTH
        this.dir = CONSTANTS.WEAPON_DIR_VERTICAL
    }

    draw(ctx){
        // this.dir === CONSTANTS.WEAPON_DIR_VERTICAL 
        //     ? this.drawVertically(ctx)
        //     : this.drawHorizontally(ctx)
        
        switch (this.dir) {
            case CONSTANTS.WEAPON_DIR_VERTICAL:
                this.drawVertically(ctx)
                break;
            case CONSTANTS.WEAPON_DIR_HORIZONTAL:
                this.drawHorizontally(ctx)
            default:
                break;
        }
    }

    drawHorizontally(ctx){
        const { length, width, color, x, y } = this
        ctx.fillStyle = color;

        ctx.fillRect(x, y, length, width);
    }

    drawVertically(ctx){
        const { length, width, color, x, y } = this
        ctx.fillStyle = color;

        ctx.fillRect(x, y, width, length);
    }

    drawDiagonallyRight(ctx){
        const { length, width, color, x, y } = this
        ctx.fillStyle = color;

        ctx.rotate(45 * Math.PI / 180);
        ctx.fillRect(x, y, width, length);
    }

    collidedWith(enemyPos) {
        const enemyX = enemyPos.x - CONSTANTS.ENEMY_SIZE
        const enemyY = enemyPos.y - CONSTANTS.ENEMY_SIZE
        const enemyWidth = CONSTANTS.ENEMY_SIZE * 2
        const weaponWidth = CONSTANTS.WEAPON_WIDTH
        const weaponLength = CONSTANTS.WEAPON_LENGTH

        // Detect if 2 rectngles have collided
        return (this.x < enemyX + enemyWidth &&
            this.x + weaponWidth > enemyX &&
            this.y < enemyY + enemyWidth &&
            this.y + weaponLength > enemyY)
    }
}

export default Weapon