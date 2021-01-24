import * as C from './constants'
import GameObject from './game_object'
import TempSprite from './temp_sprite'
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
        this.sprite = new TempSprite();
        this.deltaIdx = 0;
        this.isOut = false;

        this.putAway = this.putAway.bind(this)
    }

    setMoveAttrs(){
        let moveDeltaXs = [];
        let moveDeltaYs = [];
        let width, length;
        let first = C.WEAPON_DELTA_START
        let last = C.WEAPON_DELTA_END
        let delta = C.WEAPON_DELTA_INTERVAL

        switch (this.dir) {
            case C.DIR_UP:
            case C.DIR_LEFT_UP:
            case C.DIR_RIGHT_UP:
                while (first < last) {
                    moveDeltaXs.push(first)
                    moveDeltaYs.push(0)
                    width = C.WEAPON_LENGTH
                    length = C.WEAPON_WIDTH
                    first += delta
                }
                break;
            case C.DIR_DOWN:
            case C.DIR_DOWN_LEFT:
            case C.DIR_DOWN_RIGHT:
                while (first < last) {
                    moveDeltaXs.push(last)
                    moveDeltaYs.push(0)
                    width = C.WEAPON_LENGTH
                    length = C.WEAPON_WIDTH
                    last -= delta
                }
                break;
            case C.DIR_LEFT:
                while (first < last) {
                    moveDeltaXs.push(0)
                    moveDeltaYs.push(last)
                    width = C.WEAPON_WIDTH
                    length = C.WEAPON_LENGTH
                    last -= delta
                }
                break;
            case C.DIR_RIGHT:
                while (first < last){
                    moveDeltaXs.push(0)
                    moveDeltaYs.push(first)
                    width = C.WEAPON_WIDTH
                    length = C.WEAPON_LENGTH
                    first += delta
                }
                break;
        }
        
        this.moveDeltaXs = moveDeltaXs
        this.moveDeltaYs = moveDeltaYs
        this.width = width
        this.length = length
    }

    draw(){
        switch (this.dir) {
            case C.DIR_LEFT:
                this.drawLeft()
                break;
            case C.DIR_RIGHT:
                this.drawRight()
            case C.DIR_UP:
            case C.DIR_LEFT_UP:
            case C.DIR_RIGHT_UP:
                this.drawUp();
                break;
            case C.DIR_DOWN:
            case C.DIR_DOWN_LEFT:
            case C.DIR_DOWN_RIGHT:
                this.drawDown()
                break;
       
        }
    }

    drawUp(){
        const {x, y, length, width, dir, ctx } = this
        if (C.TOOGGLE_DRAW_HITBOXES) this.drawHitBox()

        this.sprite.drawFrame(x, y, length, width, dir, ctx);
    }

    drawDown(){
        const {x, y, length, width, dir, ctx } = this
        if (C.TOOGGLE_DRAW_HITBOXES) this.drawHitBox()

        this.sprite.drawFrame(x, y, length, width, dir, ctx);
    }
    drawLeft(){
        const {x, y, length, width, dir, ctx } = this
        if (C.TOOGGLE_DRAW_HITBOXES) this.drawHitBox()

        this.sprite.drawFrame(x, y, length, width, dir, ctx);
    }
    drawRight(){
        const {x, y, length, width, dir, ctx } = this
        if (C.TOOGGLE_DRAW_HITBOXES) this.drawHitBox()

        this.sprite.drawFrame(x, y, length, width, dir, ctx);
    }

    drawHitBox(){
        const { x, y, length, width, ctx } = this;
        ctx.strokeStyle = "green";
        ctx.strokeRect(
            x,
            y,
            length,
            width
        );
    }

    collidedWith(enemyPos) {
        const enemyX = enemyPos.x
        const enemyY = enemyPos.y
        const enemyWidth = C.ENEMY_SPRITE_SCALED_WIDTH
        const enemyLength = C.ENEMY_SPRITE_SCALED_LENGTH
        const weaponWidth = this.width 
        const weaponLength = this.length

        // Detect if 2 rectangles have collided //Eventually pull out into collison class
        return (this.x < enemyX + enemyWidth &&
            this.x + weaponWidth > enemyX &&
            this.y < enemyY + enemyLength &&
            this.y + weaponLength > enemyY)
     
    }

    takeOut(moveData){
        const { length, width } = this;
        this.isOut = true;
        this.color = C.WEAPON_COLOR
        this.updatePosUsingHeroXY({...moveData, length, width})
        this.sprite.frameCount = 0;
        this.sprite.spriteAttrsIdx = 0;
        setTimeout(this.putAway, C.WEAPON_DURATION) // Causes sword to be put away
    }

    updatePosUsingHeroXY(moveData){
        this.dir = moveData.heroDir
        this.setMoveAttrs()
        const { moveDeltaXs, moveDeltaYs, deltaIdx } = this;

        if (deltaIdx === moveDeltaXs.length) 
            this.deltaIdx = moveDeltaXs.length - 1
        
        const { newX, newY } = 
            this.movement.getNewPosUsingDir(this.dir, {
                ...moveData,
                x: moveData.x + moveDeltaXs[this.deltaIdx],
                y: moveData.y + moveDeltaYs[this.deltaIdx],
            })
        this.x = newX
        this.y = newY
        this.deltaIdx++;
    }

    putAway() {
        this.color = 'white' // Outside of canvas color
        this.x = C.CANVAS_WIDTH
        this.y = C.CANVAS_LENGTH
        this.isOut = false;
        this.deltaIdx = 0;
    }
}

export default Weapon