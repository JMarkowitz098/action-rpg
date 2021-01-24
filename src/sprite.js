import * as C from './constants'

class Sprite {
    constructor({
        imageSrc, 
        spritePositions, 
        facingDown, 
        facingUp, 
        facingLeft, 
        facingRight,
        width,
        length,
        scaledWidth,
        scaledLength,
        dir
    }){
        this.spriteDirection = this.getSpriteDir(dir);
        this.frameCount = 0;
        this.spritePositions = spritePositions
        this.spritePositionsIdx = 0;
        this.facingDown = facingDown;
        this.facingLeft = facingLeft;
        this.facingUp = facingUp;
        this.facingRight = facingRight;
        this.width = width;
        this.length = length;
        this.scaledWidth = scaledWidth;
        this.scaledLength = scaledLength;

        let image = new Image
        image.src = imageSrc
        this.image = image

        this.updateSpritePositionsIdx = this.updateSpritePositionsIdx.bind(this)
    }

    changeFrameAttributes(dir) {
        this.frameCount++;
        this.spriteDirection = this.getSpriteDir(dir)
        if (this.frameCount >= C.FRAME_LIMIT) {
            this.frameCount = 0;
            this.changeSpritePositions()
        }
    }

    changeSpritePositions() {
        this.spritePositionsIdx++;
        if (this.spritePositionsIdx >= this.spritePositions.length)
            this.spritePositionsIdx = 0;
    }

    drawFrame(canvasX, canvasY, ctx) {
        const { 
            image, 
            width, 
            length, 
            scaledWidth, 
            scaledLength, 
            spritePositions, 
            spritePositionsIdx ,
            spriteDirection,
        } = this;

        let frameX = spritePositions[spritePositionsIdx]
        let frameY = spriteDirection
        ctx.drawImage(
            image, //image source
            frameX, //sx
            frameY, //sy
            width, //sWIDTH
            length, //sHEIGHT
            canvasX, //dX
            canvasY, //dY
            scaledWidth, //dWIDTH
            scaledLength //dHEIGHT
        );
    }

    getSpriteDir(dir) {
        const { facingUp, facingDown, facingLeft, facingRight } = this
        switch (dir) {
            case C.DIR_UP:
                return facingUp
            case C.DIR_DOWN:
                return facingDown
            case C.DIR_LEFT:
                return facingLeft
            case C.DIR_RIGHT:
                return facingRight
            case C.DIR_LEFT_UP:
            case C.DIR_RIGHT_UP:
                return facingUp
            case C.DIR_DOWN_LEFT:
            case C.DIR_DOWN_RIGHT:
                return facingDown
        }
    }

    updateSpritePositionsIdx(){
        this.spritePositionsIdx = 0;
    }
}

export default Sprite