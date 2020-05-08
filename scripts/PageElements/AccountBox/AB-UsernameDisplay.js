import { accountInterface } from "../../main.js";


export const AB_USERNAME_DISPLAY_ID = 'ab-username-display-container';
export const AB_USERNAME_DISPLAY_TEXT_ID = 'ab-username-display';

export function ABUserNameDisplay() {
    var usernameDisplay = document.createElement('span');
    usernameDisplay.id = AB_USERNAME_DISPLAY_ID;

    usernameDisplay.appendChild( ABUserNameDisplayText() );

    return usernameDisplay;
}

export function ABUserNameDisplayText() {
    var usernameDisplayText = document.createElement('span');
    usernameDisplayText.id = AB_USERNAME_DISPLAY_TEXT_ID;

    usernameDisplayText.innerText = accountInterface.getCurrentAccount().usernameCase;

    return usernameDisplayText;
}