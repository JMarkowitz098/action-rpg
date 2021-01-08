import * as C from './constants'
import GameObject from './game_object'
import WeaponMovement from './weapon_movement'

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
        this.movement = new WeaponMovement(
            { width: this.width, length: this.length })

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
        const enemyLength = C.ENEMY_SPRITE_SCALED_LENGTH
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

    takeOut(moveData){
        this.dir = this.movement.getNewDir(moveData.heroDir)
        const { newX, newY } = this.movement.getNewPosUsingDir(this.dir, {
            ...moveData,
        })

        this.color = C.WEAPON_COLOR
        this.x = newX
        this.y = newY
        setTimeout(this.putAway, 50)
    }

    putAway() {
        this.color = 'white' // Outside of canvas color
        this.x = C.CANVAS_WIDTH
        this.y = C.CANVAS_LENGTH
    }
}

export default Weapon