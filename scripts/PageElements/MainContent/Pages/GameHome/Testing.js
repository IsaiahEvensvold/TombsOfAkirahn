import { TOAButton } from "../../../TOA/TOA-Button.js";

import { changePage, CONTENT_COMBAT } from "../../MainContent.js";


export function FightRandomCreature(account) {
    var frc = TOAButton(function()
    {
        changePage(CONTENT_COMBAT, account);
    });

    frc.innerText = 'Battle Random Creature';

    return frc;
}