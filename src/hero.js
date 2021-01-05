import * as C from './constants'
import Weapon from './weapon'
import GameObject from './game_object'
import Health from './health'
import Movement from './movement'

class Hero extends GameObject {
    constructor(attributes){
        attributes = { 
            ...attributes, 
            dir: C.DIR_DOWN, 
            vel: C.HERO_START_DIR, 
            color: C.HERO_COLOR
        }
        super(attributes)

        this.length = C.HERO_SIZE
        this.health = this.createStartingHealth(C.HERO_START_HEALTH)
        this.weapon = new Weapon({ctx: attributes.ctx})
        this.movement = new Movement()

        this.initSprite()
    }

    draw() {
        const { x, y, spriteDirection, hasMoved, spritePositions} = this

        if(hasMoved) this.changeFrameAttributes()
        this.drawFrame(
            spritePositions[this.spritePositionsIdx], 
            spriteDirection, 
            x, y
        );
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
            frameX * C.HERO_SPRITE_WIDTH, //sx
            frameY * C.HERO_SPRITE_HEIGHT, //sy
            C.HERO_SPRITE_WIDTH, //sWIDTH
            C.HERO_SPRITE_HEIGHT, //sHEIGHT
            canvasX, //dX
            canvasY, //dY
            C.HERO_SPRITE_SCALED_WIDTH, //dWIDTH
            C.HERO_SPRITE_SCALED_HEIGHT //dHEIGHT
        ); 
    }

    initSprite(){
        let image = new Image
        image.src = '/Users/jared/Desktop/Coding/action_rpg/Green-Cap-Character-16x18.png'
        this.image = image
        this.spriteDirection = C.HERO_SPRITE_FACING_DOWN
        this.frameCount = 0;
        this.spritePositions = [0, 1, 0, 2];
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
        return this.color === C.HERO_COLOR
    }

    changeDir(keysDown){
        this.dir = this.movement.changeDir(keysDown, this.dir)
    }

    changeVel(vel){
        this.vel = vel
    }

    collidedWith(enemyPos){
        const enemyX = enemyPos.x - C.ENEMY_SIZE
        const enemyY = enemyPos.y - C.ENEMY_SIZE
        const enemyWidth = C.ENEMY_SIZE * 2
        const heroWidth = C.HERO_SIZE

        // Detect if 2 rectangles have collided
        return (this.x < enemyX + enemyWidth &&
            this.x + heroWidth > enemyX &&
            this.y < enemyY + enemyWidth &&
            this.y + heroWidth > enemyY) 
    }

    useWeapon(){
        this.weapon.dir = this.weapon.getNewDir(this.dir)
        const { newX, newY } = this.movement.getNewPosUsingDir(this.weapon.dir,{
            x: this.x,
            y: this.y,
            dir: this.dir,
            vel: this.vel
        })

        if (this.movement.isInCanvas(this.dir, newX, newY)) {
            this.weapon.color = C.WEAPON_COLOR
            this.weapon.x = newX
            this.weapon.y = newY
            setTimeout(this.weapon.putAway, 50)
        }
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
            default: //Catches diagonal for now
                return C.HERO_SPRITE_FACING_DOWN
        }
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
}

export default Hero