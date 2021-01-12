import * as C from './constants'

class Movement {
    constructor({width, length}){
        this.width = width
        this.length = length

    }

    isInCanvas({x, y}) {
        const { width, length } = this;
        return (
            x > C.PLAY_AREA_LEFT_BOUNDARY
            && x < C.PLAY_AREA_RIGHT_BOUNDARY - width
            && y > C.PLAY_AREA_UP_BOUNDARY
            && y < C.PLAY_AREA_DOWN_BOUNDARY - length
        )
    }

    validMove(dir, newX, newY) {
        return dir.split(" ").every(dir => {
            return (dir === 'up' || dir === 'down')
                ? this.validYMove(dir, newY)
                : this.validXMove(dir, newX)
        })
    }

    validXMove(dir, newX) {
        return dir === 'left'
            ? newX > C.PLAY_AREA_LEFT_BOUNDARY
            : newX < C.PLAY_AREA_RIGHT_BOUNDARY - this.width
    }

    validYMove(dir, newY) {
        return dir === 'up'
            ? newY > C.PLAY_AREA_UP_BOUNDARY
            : newY < C.PLAY_AREA_DOWN_BOUNDARY - this.length
    }
}

export default Movement