import * as C from './constants'

class Movement {
    consturctor(){

    }

    move() {
        const { newX, newY } = this.getNewPosUsingDir(C.HERO_MOVEMENT)

        if (this.isInCanvas(this.dir, newX, newY)) {
            this.x = newX
            this.y = newY
        }
    }

    isInCanvas(dir, newX, newY) {
        return dir.split(" ").every(dir => {
            return (dir === 'up' || dir === 'down')
                ? this.validYMove(dir, newY)
                : this.validXMove(dir, newX)
        })
    }

    getNewPosUsingDir(type) {
        const { oldX, oldY, delta } = this.getCoordInfo(type)
        let newX = oldX
        let newY = oldY

        switch (this.dir) {
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
}

export default Movement