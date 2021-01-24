import * as C from './constants'

class TempSprite {
    constructor() {
        this.frameCount = 0;
        this.spriteAttrsIdx = 0;
        this.frameLimit = 5

        let image = new Image
        image.src = '../sprite_sheets/sword_up.png'
        this.image = image
    }

    drawFrame(x, y, dWidth, dLength, dir, ctx) {


        ctx.drawImage(
            this.image, //image source
            C.WEAPON_SPRITE_X, //sx
            C.WEAPON_SPRITE_Y, //sy
            C.WEAPON_SPRITE_WIDTH, //sWIDTH
            C.WEAPON_SPRITE_LENGTH, //sHEIGHT
            x, //dX
            y, //dY
            dWidth, //dWIDTH
            dLength //dHEIGHT
        );
    }
}

export default TempSprite
