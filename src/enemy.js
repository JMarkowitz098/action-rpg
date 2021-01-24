import * as C from './constants'
import EnemyMovement from './enemy_movement'
import GameObject from './game_object'
import Sprite from './sprite'

class Enemy extends GameObject {
    constructor(attributes) {
        attributes = { 
            ...attributes, 
            vel: C.ENEMY_START_VEL, 
        }
        super(attributes)

        this.changeDir = this.changeDir.bind(this)
        this.movement = new EnemyMovement({
            width: C.ENEMY_SPRITE_SCALED_WIDTH,
            length: C.ENEMY_SPRITE_SCALED_LENGTH
        })
        this.sprite = new Sprite({
            imageSrc: '../sprite_sheets/Patreon sprites 1/17.png',
            spritePositions: C.ENEMY_SPRITE_X_POSITIONS,
            facingDown: C.ENEMY_SPRITE_FACING_DOWN,
            facingLeft: C.ENEMY_SPRITE_FACING_LEFT,
            facingUp: C.ENEMY_SPRITE_FACING_UP,
            facingRight: C.ENEMY_SPRITE_FACING_RIGHT,
            width: C.ENEMY_WIDTH,
            length: C.ENEMY_LENGTH,
            scaledWidth: C.ENEMY_SPRITE_SCALED_WIDTH,
            scaledLength: C.ENEMY_SPRITE_SCALED_LENGTH,
            dir: this.dir
        })
    }

    draw() {
        const { x, y, ctx, dir } = this

        if(this.movement.isInCanvas({x, y})){
            if (C.TOOGGLE_DRAW_HITBOXES) this.drawHitBox()
            this.sprite.changeFrameAttributes(dir)
            this.sprite.drawFrame(x, y, ctx);
        }
       
    }

    drawHitBox(){
        const { x, y, ctx } = this;
        ctx.strokeStyle = "green";
        ctx.strokeRect(
            x,
            y,
            C.ENEMY_SPRITE_SCALED_WIDTH,
            C.ENEMY_SPRITE_SCALED_LENGTH
        );
    }

    changeDir() {
        this.dir = this.movement.getRandomDir(this.dir)
    }

    changeVel(vel) {
        this.vel = vel
    }

    move() {
        const { x, y, dir, vel } = this
        let newPos = this.movement.move({ x, y, dir,vel })

        while(!this.movement.validMove(newPos.dir, newPos.x, newPos.y)){
            this.dir = this.movement.getRandomDir(this.dir)
            newPos = this.movement.move({ x, y, dir: this.dir, vel })
        }

        this.x = newPos.x
        this.y = newPos.y
    }
}

export default Enemy