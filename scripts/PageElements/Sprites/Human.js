import { Sprite } from "./Sprite.js";


//export const SKIN = { peach: 'peach', tan: 'tan', pale: 'pale', dark: 'dark' };
export const SKIN = [ 'peach', 'tan', 'pale', 'dark' ];

//export const HAIR = { short: '/graphics/hair_m.png', long: '/graphics/hair_f.png' };
export const HAIR = ['/graphics/hair_m.png', '/graphics/hair_f.png'];

//export const HAIR_COLOR = { lightBrown: 'light-brown', brown: 'brown', blonde: 'blonde',
//black: 'black', red: 'red' };
export const HAIR_COLOR = [ 'light-brown', 'brown', 'blonde', 'black', 'red' ];

//export const EYE_COLOR = { blue: 'blue', brown: 'brown', green: 'green', gray: 'gray' };
export const EYE_COLOR = [ 'blue', 'brown', 'green', 'gray' ];


export function Human(width, height, cssX, cssY, skin, hair, hairColor, eyeColor) {
    var human = document.createElement('div');

    var body = Body(skin, width, height, cssX, cssY);
    var eyes = Eyes(eyeColor, width, height, cssX, cssY);
    var hair = Hair(hair, hairColor, width, height, cssX, cssY);

    
    human.style.width = width.toString() + 'px';
    human.style.height = height.toString() + 'px';
    human.appendChild(body);
    human.appendChild(eyes);
    human.appendChild(hair);

    return human;
}



export function Body(skin, width, height, x, y) {
    var body = Sprite(width, height, x, y, '/graphics/body.png');

    body.style.cssText += styleSkin(skin);

    return body;
}

export function Eyes(eyeC, width, height, x, y) {
    var eyes = Sprite(width, height, x, y, '/graphics/eyes.png');

    eyes.style.cssText += styleEyes(eyeC);

    return eyes;
}

export function Hair(hairStyle, hairColor, width, height, x, y) {
    var hair = Sprite(width, height, x, y, hairStyle);

    hair.style.cssText += styleHair(hairColor);

    return hair;
}



export const CSS_SKIN_PEACH = 'filter: brightness(0.9) saturate(1.1)';
export const CSS_SKIN_TAN = 'filter: brightness(0.7) saturate(1.4)';
export const CSS_SKIN_PALE = 'filter: brightness(1.1) saturate(0.72)';
export const CSS_SKIN_DARK = 'filter: brightness(0.4) saturate(1.5)';

export function styleSkin(skin) {
    var otherFilt = ' drop-shadow(2px 2px 2px black);';
    switch(skin) {
        case SKIN[1]:
            return CSS_SKIN_TAN + otherFilt;
            break;
        case SKIN[2]:
            return CSS_SKIN_PALE + otherFilt;
            break;
        case SKIN[3]:
            return CSS_SKIN_DARK + otherFilt;
            break;
        default:
            return CSS_SKIN_PEACH + otherFilt;
    }
}

export const CSS_EYES_BLUE = 'filter: invert(40%) sepia(100%) hue-rotate(190deg) saturate(2.7)';
export const CSS_EYES_BROWN = 'filter: invert(12%) sepia(100%) hue-rotate(0deg) saturate(3.2)';
export const CSS_EYES_GREEN = 'filter: invert(38%) sepia(100%) hue-rotate(80deg) saturate(2.8)';
export const CSS_EYES_GRAY = 'filter: invert(43%) sepia(100%) hue-rotate(110deg) saturate(0.3)';

export function styleEyes(eyeColor) {
    var otherFilt = ' drop-shadow(-2px -2px 1px #ffffff);';
    switch (eyeColor) {
        case EYE_COLOR[1]:
            return CSS_EYES_BROWN + otherFilt;
            break;
        case EYE_COLOR[2]:
            return CSS_EYES_GREEN + otherFilt;
            break;
        case EYE_COLOR[3]:
            return CSS_EYES_GRAY + otherFilt;    
            break;
        default:
            return CSS_EYES_BLUE + otherFilt;
    }
}

export const CSS_HAIR_COLOR_LIGHT_BROWN = 'filter: invert(40%) sepia(100%) hue-rotate(0deg) saturate(2.8);';
export const CSS_HAIR_COLOR_BROWN = 'filter: invert(19%) sepia(100%) hue-rotate(0deg) saturate(2.9);';
export const CSS_HAIR_COLOR_BLONDE = 'filter: invert(63%) sepia(100%) hue-rotate(0deg) saturate(2.6);';
export const CSS_HAIR_COLOR_BLACK = 'filter: invert(7%) sepia(100%) hue-rotate(0deg) saturate(2.0);';
export const CSS_HAIR_COLOR_RED = 'filter: invert(30%) sepia(100%) hue-rotate(-10deg) saturate(4.2);';

export function styleHair(hairColor) { //to be clear, this is CSS style, but actually refers to hair COLOR
    switch (hairColor) {
        case HAIR_COLOR[1]:
            return CSS_HAIR_COLOR_BROWN;
            break;
        case HAIR_COLOR[2]:
            return CSS_HAIR_COLOR_BLONDE;
            break;
        case HAIR_COLOR[3]:
            return CSS_HAIR_COLOR_BLACK;
            break;
        case HAIR_COLOR[4]:
            return CSS_HAIR_COLOR_RED;
            break;
        default:
            return CSS_HAIR_COLOR_LIGHT_BROWN;
    }
}


