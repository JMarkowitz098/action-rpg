import * as C from './constants'
import Movement from './movement'

class EnemyMovement extends Movement {

    changeDir() {
        this.dir = this.getRandomDir()
    }

    move(moveData) {
        const { x, y, dir, vel } = moveData;

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
                newX = x - C.ENEMY_MOVE_LENGTH * vel * .6
                newY = y - C.ENEMY_MOVE_LENGTH * vel * .6
                break;
            case C.DIR_RIGHT_UP:
                newX = x + C.ENEMY_MOVE_LENGTH * vel * .6
                newY = y - C.ENEMY_MOVE_LENGTH * vel * .6
                break;
            case C.DIR_DOWN_LEFT:
                newX = x - C.ENEMY_MOVE_LENGTH * vel * .6
                newY = y + C.ENEMY_MOVE_LENGTH * vel * .6
                break;
            case C.DIR_DOWN_RIGHT:
                newX = x + C.ENEMY_MOVE_LENGTH * vel * .6
                newY = y + C.ENEMY_MOVE_LENGTH * vel * .6
                break;
        }

        return {x: newX, y: newY, dir}
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