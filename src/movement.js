import * as C from './constants'

class Movement {
    consturctor(){

    }

    move(moveData) {
        const { x, y, dir } = moveData;
        const { newX, newY } = this.getNewPosUsingDir(C.HERO_MOVEMENT, moveData)

        if (this.isInCanvas(dir, newX, newY)) {
            return { x: newX, y: newY }
        } else {
            return { x, y }
        }
    }

    getNewPosUsingDir(type, moveData) {
        const { oldX, oldY, delta } = this.getCoordInfo(type, moveData)
        let newX = oldX
        let newY = oldY

        switch (moveData.dir) {
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

    getCoordInfo(type, {x, y, vel}) {
        let oldX, oldY, delta;
        switch (type) {
            case C.HERO_MOVEMENT:
                oldX = x;
                oldY = y;
                delta = C.HERO_MOVE_LENGTH * vel
                break;
            case C.WEAPON_DIR_VERTICAL:
                oldX = x + (C.HERO_SIZE - C.WEAPON_WIDTH) / 2
                oldY = y + (C.HERO_SIZE - C.WEAPON_LENGTH) / 2
                delta = C.WEAPON_DIST
                break;
            case C.WEAPON_DIR_HORIZONTAL:
                oldX = x - (C.WEAPON_LENGTH - C.HERO_SIZE) / 2
                oldY = y - (C.WEAPON_WIDTH - C.HERO_SIZE) / 2
                delta = C.WEAPON_DIST
                break;
        }

        return { oldX, oldY, delta }
    }

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
            : newX <= C.CANVAS_RIGHT_BOUNDARY - C.HERO_SIZE
    }

    validYMove(dir, newY) {
        return dir === 'up'
            ? newY >= C.CANVAS_UP_BOUNDARY
            : newY <= C.CANVAS_DOWN_BOUNDARY - C.HERO_SIZE
    }
}

export default Movement