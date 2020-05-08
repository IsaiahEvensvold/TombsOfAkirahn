import { TOAButton } from "../TOA/TOA-Button.js";

import { accountInterface } from "../../main.js";


export const LOGOUT_BUTTON_ID = 'logout-button';

export function LogOutButton() {
    var logOutButton = TOAButton( function(){return accountInterface.logout()} );
    logOutButton.id = LOGOUT_BUTTON_ID;

    logOutButton.innerText = "Log Out";

    return logOutButton;
}