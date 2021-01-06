import * as C from './constants'

class Movement {
    isInCanvas(dir, newX, newY) {
        return dir.split(" ").every(dir => {
            return (dir === 'up' || dir === 'down')
                ? this.validYMove(dir, newY)
                : this.validXMove(dir, newX)
        })
    }

    validXMove(dir, newX) {
        return dir === 'left'
            ? newX >= C.CANVAS_LEFT_BOUNDARY
            : newX <= C.CANVAS_RIGHT_BOUNDARY - C.HERO_WIDTH
    }

    validYMove(dir, newY) {
        return dir === 'up'
            ? newY >= C.CANVAS_UP_BOUNDARY
            : newY <= C.CANVAS_DOWN_BOUNDARY - C.HERO_LENGTH
    }
}

export default Movement