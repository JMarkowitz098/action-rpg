import * as C from './constants'
import Weapon from './weapon'
import GameObject from './game_object'
import Health from './health'
import HeroMovement from './hero_movement'



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

        this.initSprite()
    }

    draw() {
        const { x, y, spriteDirection, hasMoved, spritePositions, ctx} = this

        if(this.color === C.HERO_COLOR){
            if (C.TOOGGLE_DRAW_HITBOXES) this.drawHitBox()
            if(hasMoved) this.changeFrameAttributes()
            this.drawFrame(
                spritePositions[this.spritePositionsIdx], 
                spriteDirection, 
                x, y
            );
        } else {
            ctx.fillStyle = this.color;
            ctx.fillRect(
                x, y, C.HERO_SPRITE_SCALED_WIDTH, C.HERO_SPRITE_SCALED_LENGTH
            );
        }
    }

    changeFrameAttributes(){
        this.frameCount++;
        if (this.frameCount >= C.FRAME_LIMIT) {
            this.frameCount = 0;
            this.changeSpritePositions()
        }
    }

    changeSpritePositions(){
        this.spritePositionsIdx++;
        if (this.spritePositionsIdx >= this.spritePositions.length)
            this.spritePositionsIdx = 0;
    }

    drawFrame(frameX, frameY, canvasX, canvasY) {
        const { ctx, image } = this;
        ctx.drawImage(
            image, //image source
            frameX, //sx
            frameY, //sy
            C.HERO_WIDTH, //sWIDTH
            C.HERO_LENGTH, //sHEIGHT
            canvasX, //dX
            canvasY, //dY
            C.HERO_SPRITE_SCALED_WIDTH, //dWIDTH
            C.HERO_SPRITE_SCALED_LENGTH //dHEIGHT
        ); 
    }

    initSprite(){
        let image = new Image
        image.src = '/Users/jared/Desktop/Coding/action_rpg/Patreon sprites 1/14.png'
        this.image = image
        this.spriteDirection = C.HERO_SPRITE_FACING_DOWN
        this.frameCount = 0;
        this.spritePositions = C.HERO_SPRITE_X_POSITIONS
        this.spritePositionsIdx = 0;
        this.hasMoved = false;
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

    getSpriteDir(){
        const { dir } =  this 
        switch(dir){
            case C.DIR_UP:
                return C.HERO_SPRITE_FACING_UP
            case C.DIR_DOWN:
                return C.HERO_SPRITE_FACING_DOWN
            case C.DIR_LEFT:
                return C.HERO_SPRITE_FACING_LEFT
            case C.DIR_RIGHT:
                return C.HERO_SPRITE_FACING_RIGHT
            case C.DIR_LEFT_UP:
            case C.DIR_RIGHT_UP:
                return C.HERO_SPRITE_FACING_UP
            case C.DIR_DOWN_LEFT:
            case C.DIR_DOWN_RIGHT:
                return C.HERO_SPRITE_FACING_DOWN
        }
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
        this.spriteDirection = this.getSpriteDir()
        this.hasMoved = newPos.moved
    }

    dash(){
        this.changeVel(C.HERO_DASH_SPEED)
        setTimeout(() => this.changeVel(1), C.HERO_DASH_TIME)
    }
}

export default Hero