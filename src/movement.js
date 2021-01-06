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
            ? newX >= C.PLAY_AREA_LEFT_BOUNDARY
            : newX <= C.PLAY_AREA_RIGHT_BOUNDARY - C.HERO_SPRITE_SCALED_WIDTH
    }

    validYMove(dir, newY) {
        return dir === 'up'
            ? newY >= C.PLAY_AREA_UP_BOUNDARY
            : newY <= C.PLAY_AREA_DOWN_BOUNDARY - C.HERO_SPRITE_SCALED_HEIGHT
    }
}

export default Movement