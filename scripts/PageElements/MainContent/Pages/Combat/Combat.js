import { accountInterface } from "../../../../main.js";



export function Combat(account) {
    var temp = document.createElement('span');
    temp.innerText = 'Level ' + account.character.level;


    return [
        temp
    ];
}