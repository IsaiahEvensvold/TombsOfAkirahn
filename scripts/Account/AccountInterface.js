import { USERNAME_INPUT_ID } from "../PageElements/AccountBox/UsernameInput.js";
import { PASSWORD_INPUT_ID } from "../PageElements/AccountBox/PasswordInput.js";



export class AccountInterface {

    constructor() {
        this.minimumUsernameLength = 3;
        this.minimumPasswordLength = 3;
    }

    getUsernameLoginText() {
        return document.getElementById(USERNAME_INPUT_ID).value;
    }

    getPasswordLoginText() {
        return document.getElementById(PASSWORD_INPUT_ID).value;
    }

}