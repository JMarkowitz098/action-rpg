import * as CONSTANTS from './constants'
import Hero from './hero'

// const getRandPos = () => {
//     const factor = CONSTANTS.CANVAS_SIDE_LENGTH / CONSTANTS.BLOCK_SIZE
//     let x = Math.floor(Math.random() * factor) * CONSTANTS.BLOCK_SIZE + 100
//     let y = Math.floor(Math.random() * factor) * CONSTANTS.BLOCK_SIZE + 100
//     return { x, y }
// }

class GameCanvas {
    constructor({ ctx }) {
        this.ctx = ctx;
        this.clearCanvas = this.clearCanvas.bind(this)
        this.hero = this.placeHero()
    }

    placeHero(){
        const hero = new Hero({pos: {x: 100, y: 100}})
        return hero;
    }

    clearCanvas() {
        const { ctx } = this;
        ctx.clearRect(
            CONSTANTS.CANVAS_SIDE_LENGTH,
            CONSTANTS.CANVAS_SIDE_LENGTH,
            CONSTANTS.CANVAS_SIDE_LENGTH,
            CONSTANTS.CANVAS_SIDE_LENGTH
        );
        ctx.fillStyle = "black";
        ctx.fillRect(
            CONSTANTS.CANVAS_START_POS,
            CONSTANTS.CANVAS_START_POS,
            CONSTANTS.CANVAS_SIDE_LENGTH,
            CONSTANTS.CANVAS_SIDE_LENGTH
        );
    }
}

export default GameCanvas