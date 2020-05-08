



export function Sprite(width, height, cssX, cssY, src) {
    var spr = new Image(width, height);
    spr.src = src;

    spr.classList.add('no-select');
    spr.style.cssText += 'position: absolute; left: ' + cssX + '; top: ' + cssY + ';' + ' image-rendering: pixelated;';

    return spr;
}