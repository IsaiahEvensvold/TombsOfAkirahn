//Import
    //Storage
import { LocalStorage } from "./Storage/LocalStorage/LocalStorage.js";
import { LocalAccountInterface } from "./Storage/LocalStorage/LocalAccountInterface.js";
    //Page
import { Page } from "./Page/Page.js";


//Consts
    //Storage
        const STORAGE_TYPE = LocalStorage;

//Vars
    //Storage
export var storage;
setStorage(STORAGE_TYPE);
export var accountInterface;
setAccountInterface(STORAGE_TYPE);



//Main
export var page = new Page();

/*
var img = new Image(240, 320);
img.style = `image-rendering: pixelated; filter: drop-shadow(2px 2px 2px black);
position: fixed; right: 50%;
`;
img.src = './graphics/body.png';
document.getElementById('main-content-container').appendChild(img);

var hair = new Image(240, 320);
hair.style = `image-rendering: pixelated; position:fixed; right: 50%; filter:
invert(40%) sepia(100%) hue-rotate(-10deg) saturate(3);
`;
hair.src = './graphics/hair_m.png';

var eyes = new Image(240, 320);
eyes.style = `image-rendering: pixelated; position:fixed; right: 50%;
filter: invert(32%) sepia(100%) hue-rotate(-280deg) saturate(3.2) drop-shadow(-1px -1px 1px #ffffff);
`;
eyes.src = './graphics/eyes.png'

document.getElementById('main-content-container').appendChild(eyes);
document.getElementById('main-content-container').appendChild(hair);
*/




//Functions
    //Setup
        //Storage
function setStorage(storageType) {
    storage = new storageType();
}

function setAccountInterface(storageType) {
    var interfaceType;

    switch (storageType) {
        case LocalStorage:
            interfaceType = LocalAccountInterface;
            break;
        default:
    }

    accountInterface = new interfaceType();
}