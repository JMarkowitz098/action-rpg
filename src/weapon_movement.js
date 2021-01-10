import * as C from './constants'
import Movement from './movement'

class WeaponMovement extends Movement {
    constructor(attributes) {
        super(attributes)
    }

    getNewPosUsingDir(type, moveData) {
        const { oldX, oldY } = this.getCoordInfo(type, moveData)
        let newX = oldX
        let newY = oldY
        const delta = C.WEAPON_DIST

        switch (moveData.heroDir) {
            case C.DIR_UP:
                newY = newY - delta
                break;
            case C.DIR_DOWN:
                newY = newY + delta
                break;
            case C.DIR_LEFT:
                newX = newX - delta
                break;
            case C.DIR_RIGHT:
                newX = newX + delta
                break;
            case C.DIR_LEFT_UP:
                newX = newX - delta
                newY = newY - delta
                break;
            case C.DIR_RIGHT_UP:
                newX = newX + delta
                newY = newY - delta
                break;
            case C.DIR_DOWN_LEFT:
                newX = newX - delta
                newY = newY + delta
                break;
            case C.DIR_DOWN_RIGHT:
                newX = newX + delta
                newY = newY + delta
                break;
        }
        return ({ newX, newY })
    }

    getCoordInfo(type, { x, y }) {
        let oldX, oldY;
        switch (type) {
            case C.WEAPON_DIR_VERTICAL:
                oldX = x + (C.HERO_SPRITE_SCALED_WIDTH - this.width) / 2
                oldY = y + (C.HERO_SPRITE_SCALED_LENGTH - this.length) / 2
                break;
            case C.WEAPON_DIR_HORIZONTAL:
                oldX = x - (this.length - C.HERO_SPRITE_SCALED_WIDTH) / 2
                oldY = y - (this.width - C.HERO_SPRITE_SCALED_LENGTH) / 2
                break;
        }

        return { oldX, oldY }
    }

    getNewDir(dir) {
        switch (dir) {
            case C.DIR_UP:
            case C.DIR_DOWN:
                return C.WEAPON_DIR_HORIZONTAL
            case C.DIR_LEFT:
            case C.DIR_RIGHT:
                return C.WEAPON_DIR_VERTICAL
            default:
                return C.WEAPON_DIR_HORIZONTAL
        }
    }
}

export default WeaponMovement
