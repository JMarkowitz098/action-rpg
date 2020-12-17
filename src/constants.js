export const UNIT = 5;

export const CANVAS_SIDE_LENGTH = 300;
export const CANVAS_START_POS = 100;
export const CANVAS_UP_BOUNDARY = 0 + CANVAS_START_POS;
export const CANVAS_DOWN_BOUNDARY = 0 + CANVAS_START_POS + CANVAS_SIDE_LENGTH;
export const CANVAS_LEFT_BOUNDARY = 0 + CANVAS_START_POS;
export const CANVAS_RIGHT_BOUNDARY = 0 + CANVAS_START_POS + CANVAS_SIDE_LENGTH;;

export const DIR_DOWN = 'down'
export const DIR_LEFT = 'left'
export const DIR_RIGHT = 'right'
export const DIR_UP = 'up'
export const DIR_LEFT_UP = DIR_LEFT + ' ' + DIR_UP
export const DIR_RIGHT_UP = DIR_RIGHT + ' ' + DIR_UP
export const DIR_DOWN_RIGHT = DIR_DOWN + ' ' + DIR_RIGHT
export const DIR_DOWN_LEFT = DIR_DOWN + ' ' + DIR_LEFT

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

export const HERO_COLOR = 'blue';
export const HERO_SIZE = UNIT * 5;
export const HERO_MOVE_LENGTH = UNIT * 4;
export const HERO_START_POS = { x: CANVAS_START_POS, y: CANVAS_START_POS}

