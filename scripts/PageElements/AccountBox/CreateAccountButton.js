import { TOAButton } from "../TOA/TOA-Button.js";
import { accountInterface } from "../../main.js";


export const CREATE_ACCOUNT_BUTTON_ID = 'create-account-button';

export function CreateAccountButton() {

    var createAccountButton = TOAButton(
        function(){return accountInterface.attemptCreateAccount( accountInterface.getUsernameLoginText(), accountInterface.getPasswordLoginText() )}
    );
    createAccountButton.id = CREATE_ACCOUNT_BUTTON_ID;
    createAccountButton.innerText = 'Create Account';

    return createAccountButton;
}