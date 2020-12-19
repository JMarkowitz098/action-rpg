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
        switch (this.dir) {
            case CONSTANTS.WEAPON_DIR_VERTICAL:
                this.drawVertically(ctx)
                break;
            case CONSTANTS.WEAPON_DIR_HORIZONTAL:
                this.drawHorizontally(ctx)
                break;
            case CONSTANTS.WEAPON_DIR_DIAG_RIGHT:
                this.drawHorizontally(ctx)
                // this.drawDiagonallyRight(ctx)
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

        // ctx.fillRect(x, y, width, length);




        // Point of transform origin
        ctx.translate(x + 30, y + 30);
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