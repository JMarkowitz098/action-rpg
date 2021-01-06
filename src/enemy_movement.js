import * as C from './constants'
import Movement from './movement'

class EnemyMovement extends Movement {

    changeDir() {
        this.dir = this.getRandomDir()
    }

    move(moveData) {
        const { x, y, dir, vel } = moveData;
        if (this.validMove(dir, x, y)) 
            return { x, y }

        let newX = x
        let newY = y
        let newPos

        switch (dir) {
            case C.DIR_UP:
                newY = y - C.ENEMY_MOVE_LENGTH * vel
                break;
            case C.DIR_DOWN:
                newY = y + C.ENEMY_MOVE_LENGTH * vel
                break;
            case C.DIR_LEFT:
                newX = x - C.ENEMY_MOVE_LENGTH * vel
                break;
            case C.DIR_RIGHT:
                newX = x + C.ENEMY_MOVE_LENGTH * vel
                break;
            case C.DIR_LEFT_UP:
                newX = x - C.ENEMY_MOVE_LENGTH * vel
                newY = y - C.ENEMY_MOVE_LENGTH * vel
                break;
            case C.DIR_RIGHT_UP:
                newX = x + C.ENEMY_MOVE_LENGTH * vel
                newY = y - C.ENEMY_MOVE_LENGTH * vel
                break;
            case C.DIR_DOWN_LEFT:
                newX = x - C.ENEMY_MOVE_LENGTH * vel
                newY = y + C.ENEMY_MOVE_LENGTH * vel
                break;
            case C.DIR_DOWN_RIGHT:
                newX = x + C.ENEMY_MOVE_LENGTH * vel
                newY = y + C.ENEMY_MOVE_LENGTH * vel
                break;
        }

        if (this.validMove(dir, newX, newY)) {
            return {x: newX, y: newY}
        } else {
            let newDir = this.getRandomDir(dir)
            newPos = this.move({x, y, vel, dir: newDir})
        }

        return newPos
    }

    validXMove(dir, newX) {
        return dir === 'left'
            ? newX >= C.CANVAS_LEFT_BOUNDARY + 25
            : newX <= C.CANVAS_RIGHT_BOUNDARY - C.ENEMY_SIZE
    }

    validYMove(dir, newY) {
        return dir === 'up'
            ? newY >= C.CANVAS_UP_BOUNDARY + 25
            : newY <= C.CANVAS_DOWN_BOUNDARY - C.ENEMY_SIZE
    }

    validMove(dir, newX, newY) {
        return dir.split(" ").every(dir => {
            return (dir === 'up' || dir === 'down')
                ? this.validYMove(dir, newY)
                : this.validXMove(dir, newX)
        })
    }

    getRandomDir(oldDir = '') {
        let randIdx = Math.floor(Math.random() * C.DIR_POSSIBLE_MOVES.length)
        let newDir = C.DIR_POSSIBLE_MOVES[randIdx]
        while (oldDir === newDir) {
            randIdx = Math.floor(Math.random() * C.DIR_POSSIBLE_MOVES.length)
            newDir = C.DIR_POSSIBLE_MOVES[randIdx]
        }
        return newDir
    }
}

export default EnemyMovement