export const TOGGLE_ENEMY_MOVEMENT = true;
export const TOGGLE_ENEMY_SPAWN = true;
export const TOOGGLE_DRAW_HITBOXES = false;

export const UNIT = 5;

export const CANVAS_WIDTH = 600
export const CANVAS_LENGTH = 600

export const PLAY_AREA_SIDE_LENGTH = 500;
export const PLAY_AREA_START_POS = 50;
export const PLAY_AREA_COLOR = 'black';
export const PLAY_AREA_UP_BOUNDARY = 0 + PLAY_AREA_START_POS;
export const PLAY_AREA_DOWN_BOUNDARY = 0 + PLAY_AREA_START_POS + PLAY_AREA_SIDE_LENGTH;
export const PLAY_AREA_LEFT_BOUNDARY = 0 + PLAY_AREA_START_POS;
export const PLAY_AREA_RIGHT_BOUNDARY = 0 + PLAY_AREA_START_POS + PLAY_AREA_SIDE_LENGTH;
export const PLAY_AREA_OUTSIDE_COLOR = 'white'

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
export const ENEMY_LENGTH = 44
export const ENEMY_WIDTH = 25
export const ENEMY_MOVE_LENGTH = 2
export const ENEMY_SPAWN_RATE = 1000
export const ENEMY_START_VEL = 1

export const ENEMY_SPRITE_SCALE = 1.2
export const ENEMY_SPRITE_SCALED_WIDTH = ENEMY_WIDTH * ENEMY_SPRITE_SCALE
export const ENEMY_SPRITE_SCALED_LENGTH = ENEMY_LENGTH * ENEMY_SPRITE_SCALE
export const ENEMY_SPRITE_X_POSITIONS = [11, 59, 107, 155];
export const ENEMY_SPRITE_FACING_DOWN = 18;
export const ENEMY_SPRITE_FACING_RIGHT = 147;
export const ENEMY_SPRITE_FACING_UP = 210;
export const ENEMY_SPRITE_FACING_LEFT = 83;

export const FRAME_LIMIT = 15

export const HEALTH_COLOR = 'pink'
export const HEALTH_LENGTH = UNIT * 4
export const HEALTH_START_X = 10
export const HEALTH_START_Y = 10

export const HERO_COLOR = 'blue';
export const HERO_DASH_KEY = 'z';
export const HERO_DASH_VEL = 3;
export const HERO_LENGTH = 44;
export const HERO_WIDTH = 25;
export const HERO_MOVE_LENGTH = 4;
export const HERO_START_POS = { x: PLAY_AREA_START_POS, y: PLAY_AREA_START_POS}
export const HERO_START_DIR = DIR_DOWN
export const HERO_START_HEALTH = 3
export const HERO_MOVEMENT = 'hero_movement'
export const HERO_DASH_SPEED = 8
export const HERO_DASH_TIME = 50

export const HERO_SPRITE_SCALE = 1.3
export const HERO_SPRITE_SCALED_WIDTH = HERO_WIDTH * HERO_SPRITE_SCALE
export const HERO_SPRITE_SCALED_LENGTH = HERO_LENGTH * HERO_SPRITE_SCALE
export const HERO_SPRITE_X_POSITIONS = [4, 51, 98, 147];
export const HERO_SPRITE_FACING_DOWN = 2;
export const HERO_SPRITE_FACING_RIGHT = 131;
export const HERO_SPRITE_FACING_UP = 194;
export const HERO_SPRITE_FACING_LEFT = 67;



export const WEAPON_COLOR = 'green'
export const WEAPON_LENGTH = UNIT * 20
export const WEAPON_WIDTH = UNIT * 12
export const WEAPON_DIST = 60
export const WEAPON_DIR_HORIZONTAL = 'horizontal'
export const WEAPON_DIR_VERTICAL = 'vertical'
export const WEAPON_DIR_DIAG_LEFT = 'diag_left'
export const WEAPON_DIR_DIAG_RIGHT = 'diag_right'


