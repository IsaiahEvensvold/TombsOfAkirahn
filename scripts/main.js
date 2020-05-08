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