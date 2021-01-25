import * as C from './constants'
import Weapon from './weapon'
import GameObject from './game_object'
import Health from './health'
import HeroMovement from './hero_movement'
import Sprite from './sprite'

class Hero extends GameObject {
    constructor(attributes){
        attributes = { 
            ...attributes, 
            dir: C.DIR_DOWN, 
            vel: C.HERO_START_DIR, 
            color: C.HERO_COLOR
        }
        super(attributes)

        this.health = this.createStartingHealth(C.HERO_START_HEALTH)
        this.weapon = new Weapon({ctx: attributes.ctx})
        this.movement = new HeroMovement({
            width: C.HERO_SPRITE_SCALED_WIDTH,
            length: C.HERO_SPRITE_SCALED_LENGTH
        })
        this.hasMoved = false;
        this.sprite = new Sprite({
            imageSrc: '../sprite_sheets/Patreon sprites 1/14.png',
            spritePositions: C.HERO_SPRITE_X_POSITIONS,
            facingDown: C.HERO_SPRITE_FACING_DOWN,
            facingLeft: C.HERO_SPRITE_FACING_LEFT,
            facingUp: C.HERO_SPRITE_FACING_UP,
            facingRight: C.HERO_SPRITE_FACING_RIGHT,
            width: C.HERO_WIDTH,
            length: C.HERO_LENGTH,
            scaledWidth: C.HERO_SPRITE_SCALED_WIDTH,
            scaledLength: C.HERO_SPRITE_SCALED_LENGTH,
            dir: this.dir
        })
        this.sprite.changeFrameAttributes(this.dir)

    }

    draw() {
        const { x, y, hasMoved, ctx} = this

        if(this.color === C.HERO_COLOR){
            if (C.TOOGGLE_DRAW_HITBOXES) this.drawHitBox()
            if(hasMoved) this.sprite.changeFrameAttributes(this.dir)
            this.sprite.drawFrame(x, y, ctx);
        } else {
            ctx.fillStyle = this.color;
            ctx.fillRect(
                x, y, C.HERO_SPRITE_SCALED_WIDTH, C.HERO_SPRITE_SCALED_LENGTH
            );
        }
    }

    createStartingHealth(numHealth){
        let health = []

        for(let i = 0; i < numHealth; i++){
            let attributes = {
                pos: {
                    x: (40 * i + C.HEALTH_START_X),
                    y: C.HEALTH_START_Y
                },
                ctx: this.ctx
            }
            let heart = new Health(attributes)
            health.push(heart)
        }

        return health
    }

    decreaseHealth(){
        this.health.pop();
        this.color = 'purple'
        setTimeout(() => this.color = C.HERO_COLOR, 3000)
    }
    
    isVulnerable(){
        return this.color === C.HERO_COLOR //Change to isVulnerable property
    }

    changeDir(keysDown){
        this.dir = this.movement.changeDir(keysDown, this.dir)
    }

    changeVel(vel){
        this.vel = vel
    }

    collidedWith(enemy){
        const enemyX = enemy.x
        const enemyY = enemy.y
        const enemyLength = C.ENEMY_SPRITE_SCALED_LENGTH
        const enemyWidth = C.ENEMY_SPRITE_SCALED_WIDTH
        const heroWidth = C.HERO_SPRITE_SCALED_WIDTH
        const heroLength = C.HERO_SPRITE_SCALED_LENGTH

        // Detect if 2 rectangles have collided
        return (this.x < enemyX + enemyWidth &&
            this.x + heroWidth > enemyX &&
            this.y < enemyY + enemyLength &&
            this.y + heroLength > enemyY) 
    }

    useWeapon(){
        this.weapon.takeOut({x: this.x, y: this.y, heroDir: this.dir})
    }

    drawHitBox() {
        const { x, y, ctx } = this;
        ctx.strokeStyle = "green";
        ctx.strokeRect(
            x,
            y,
            C.HERO_SPRITE_SCALED_WIDTH,
            C.HERO_SPRITE_SCALED_LENGTH
        );
    }

    move(){
        let newPos = this.movement.move({
            x: this.x,
            y: this.y,
            dir: this.dir,
            vel: this.vel
        })

        this.x = newPos.x
        this.y = newPos.y
        this.spriteDirection = this.sprite.getSpriteDir(this.dir)
        this.hasMoved = newPos.moved
        
        if (this.weapon.isOut) 
            this.weapon.updatePosUsingHeroXY(
                { 
                    x: this.x, 
                    y: this.y, 
                    heroDir: this.dir,
                    length: this.weapon.length,
                    width: this.weapon.width
                }
            )
    }

    dash(){
        this.changeVel(C.HERO_DASH_SPEED)
        this.color = 'purple'
        setTimeout(() => { 
            this.changeVel(1) 
            this.color = C.HERO_COLOR
        }, C.HERO_DASH_TIME)
    }
}

export default Hero