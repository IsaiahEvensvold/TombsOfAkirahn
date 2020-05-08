import { FightRandomCreature } from "./Testing.js";

import { accountInterface } from "../../../../main.js";



export function GameHome(account) {
    var temp = document.createElement('span');
    temp.innerText = 'Level ' + account.character.level;

    return [
        temp,
        FightRandomCreature(account)
    ];
}