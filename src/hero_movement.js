import * as C from './constants'
import Movement from './movement'

class HeroMovement extends Movement {
    constructor(attributes){
        super(attributes)
    }
    
    move(moveData) {
        const { x, y, dir } = moveData;
        const { newX, newY } = this.getNewPosUsingDir(moveData)

        return this.validMove(dir, newX, newY)
            ? { x: newX, y: newY, moved: (x !== newX || y !== newY) }
            : { x, y, moved: false }
    }

    changeDir(keysDown, dir) {
        let newDir = this.filterExtraKeys(Object.entries(keysDown), dir)
            .map(([key, val]) => key)
            .sort()
            .join(' ');

        return C.DIR_POSSIBLE_MOVES.includes(newDir) ? newDir : dir;
    }

    // Reverse hero's direction when receivng opposing directions
    filterExtraKeys(newDir, dir) {
        let filtered = newDir.filter(([key, val]) => val)
        if (filtered.length === 1) return filtered

        if (filtered[0][0] === C.DIR_RIGHT && filtered[1][0] === C.DIR_LEFT
            || filtered[0][0] === C.DIR_DOWN && filtered[1][0] === C.DIR_UP) 
                filtered = filtered[0][0] === dir ? [filtered[1]] : [filtered[0]]

                return filtered
    }

    getNewPosUsingDir(moveData) {
        const { x, y, dir, vel } = moveData
        let newX = x
        let newY = y
        let delta = C.HERO_MOVE_LENGTH * vel

        switch (dir) {
            case C.DIR_UP:
                newY = y - delta
                break;
            case C.DIR_DOWN:
                newY = y + delta
                break;
            case C.DIR_LEFT:
                newX = x - delta
                break;
            case C.DIR_RIGHT:
                newX = x + delta
                break;
            case C.DIR_LEFT_UP:
                newX = x - delta
                newY = y - delta
                break;
            case C.DIR_RIGHT_UP:
                newX = x + delta
                newY = y - delta
                break;
            case C.DIR_DOWN_LEFT:
                newX = x - delta
                newY = y + delta
                break;
            case C.DIR_DOWN_RIGHT:
                newX = x + delta
                newY = y + delta
                break;
        }
        return ({ newX, newY })
    }
}

export default HeroMovement
