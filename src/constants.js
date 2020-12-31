export const UNIT = 5;

export const CANVAS_SIDE_LENGTH = 500;
export const CANVAS_START_POS = 50;
export const CANVAS_COLOR = 'black';
export const CANVAS_UP_BOUNDARY = 0 + CANVAS_START_POS;
export const CANVAS_DOWN_BOUNDARY = 0 + CANVAS_START_POS + CANVAS_SIDE_LENGTH;
export const CANVAS_LEFT_BOUNDARY = 0 + CANVAS_START_POS;
export const CANVAS_RIGHT_BOUNDARY = 0 + CANVAS_START_POS + CANVAS_SIDE_LENGTH;
export const CANVAS_OUTSIDE_COLOR = 'white'

export const DIR_DOWN = 'down'
export const DIR_LEFT = 'left'
export const DIR_RIGHT = 'right'
export const DIR_UP = 'up'
export const DIR_LEFT_UP = DIR_LEFT + ' ' + DIR_UP
export const DIR_RIGHT_UP = DIR_RIGHT + ' ' + DIR_UP
export const DIR_DOWN_RIGHT = DIR_DOWN + ' ' + DIR_RIGHT
export const DIR_DOWN_LEFT = DIR_DOWN + ' ' + DIR_LEFT
export const DIR_POSSIBLE_MOVES = [
    DIR_DOWN,
    DIR_LEFT,
    DIR_UP,
    DIR_RIGHT,
    DIR_LEFT_UP,
    DIR_RIGHT_UP,
    DIR_DOWN_RIGHT,
    DIR_DOWN_LEFT
]

export const DIR_OPTIONS = {
    w: DIR_UP,
    a: DIR_LEFT,
    s: DIR_DOWN,
    d: DIR_RIGHT,
    ArrowUp: DIR_UP,
    ArrowLeft: DIR_LEFT,
    ArrowRight: DIR_RIGHT,
    ArrowDown: DIR_DOWN,
}

export const ENEMY_SIZE = UNIT * 3
export const ENEMY_COLOR = 'red'
export const ENEMY_MOVE_LENGTH = 2
export const ENEMY_SPAWN_RATE = 1000
export const ENEMY_START_VEL = 1

export const HEALTH_COLOR = 'pink'
export const HEALTH_LENGTH = UNIT * 4
export const HEALTH_START_X = CANVAS_LEFT_BOUNDARY + 10
export const HEALTH_START_Y = CANVAS_UP_BOUNDARY + 10

export const HERO_COLOR = 'blue';
export const HERO_DASH_KEY = 'z';
export const HERO_DASH_VEL = 3;
export const HERO_SIZE = UNIT * 5;
export const HERO_MOVE_LENGTH = 4;
export const HERO_START_POS = { x: CANVAS_START_POS, y: CANVAS_START_POS}
export const HERO_START_DIR = DIR_DOWN
export const HERO_START_HEALTH = 3
export const HERO_MOVEMENT = 'hero_movement' 

export const WEAPON_COLOR = 'green'
export const WEAPON_LENGTH = UNIT * 20
export const WEAPON_WIDTH = UNIT * 12
export const WEAPON_DIST = 60
export const WEAPON_DIR_HORIZONTAL = 'horizontal'
export const WEAPON_DIR_VERTICAL = 'vertical'
export const WEAPON_DIR_DIAG_LEFT = 'diag_left'
export const WEAPON_DIR_DIAG_RIGHT = 'diag_right'


