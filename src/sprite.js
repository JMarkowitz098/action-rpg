import * as C from './constants'

class Sprite {
    constructor({ctx}){
        this.ctx = ctx

        this.SCALE = 2;
        this.WIDTH = 16;
        this.HEIGHT = 18;
        this.SCALED_WIDTH = this.SCALE * this.WIDTH;
        this.SCALED_HEIGHT = this.SCALE * this.HEIGHT;

        this.FACING_DOWN = 0;
        this.FACING_UP = 1;
        this.FACING_LEFT = 2;
        this.FACING_RIGHT = 3;
        let currentDirection = this.FACING_DOWN;

        this.hasMoved = false;

        this.cycleLoop = [0, 1, 0, 2];
        this.currentLoopIndex = 0;
        this.frameCount = 0
        this.FRAME_LIMIT = 12;

        this.positionX = 0;
        this.positionY = 0;
        this.MOVEMENT_SPEED = 20

        this.init()
        this.drawFrame = this.drawFrame.bind(this)
    }

    init(){
        let image = new Image
        image.src = '/Users/jared/Desktop/Coding/action_rpg/Green-Cap-Character-16x18.png'
        this.image = image
    }

    draw(){
        // drawImage(image, sx, sy, sWIDTH, sHEIGHT, dx, dy, dWIDTH, dHEIGHT)
        const { drawFrame, cycleLoop } = this;

        if (this.hasMoved){
            this.frameCount ++;
            if (this.frameCount >= this.FRAME_LIMIT){
                this.hasMoved = false
                this.frameCount = 0;
                this.currentLoopIndex ++;

                if (this.currentLoopIndex >= cycleLoop.length) {
                    this.currentLoopIndex = 0;
                }

            }
        }
        

        drawFrame(cycleLoop[this.currentLoopIndex], this.currentDirection, this.positionX, this.positionY);
        
    
        
    }

    drawFrame(frameX, frameY, canvasX, canvasY) {
        const { ctx, image, HEIGHT, WIDTH, SCALED_WIDTH, SCALED_HEIGHT } = this;

        ctx.drawImage
        (
            image,
            frameX * WIDTH, 
            frameY * HEIGHT, 
            WIDTH, HEIGHT,
            canvasX, //dX
            canvasY, //dY
            SCALED_WIDTH, 
            SCALED_HEIGHT
        );
    }

    move(keysDown){
        const { up, right, left, down } = keysDown
        if (up){
            this.positionY -= this.MOVEMENT_SPEED
            this.currentDirection = this.FACING_UP
            this.hasMoved = true;
        }
        else if (down){
            this.positionY += this.MOVEMENT_SPEED
            this.currentDirection = this.FACING_DOWN
            this.hasMoved = true;
        }
        else if (left){
            this.positionX -= this.MOVEMENT_SPEED
            this.currentDirection = this.FACING_LEFT
            this.hasMoved = true;
        }
        else if (right){
            this.positionX += this.MOVEMENT_SPEED
            this.currentDirection = this.FACING_RIGHT
            this.hasMoved = true;
        }
            
    }

}

export default Sprite