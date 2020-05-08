import { TOAButton } from "../TOA/TOA-Button.js";
import { accountInterface } from "../../main.js";


export const LOGIN_BUTTON_ID = 'login-button';

export function LogInButton() {

    var logInButton = TOAButton(
        function(){return accountInterface.attemptLogin( accountInterface.getUsernameLoginText(), accountInterface.getPasswordLoginText() )}
    );
    logInButton.id = LOGIN_BUTTON_ID;
    logInButton.innerText = 'Log In';

    return logInButton;
}