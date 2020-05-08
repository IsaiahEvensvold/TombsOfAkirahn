import { attachChildren } from "../ElementBuilder.js";

import { LoginInfo } from "./LoginInfo.js";
import { UsernameInputContainer } from "./UsernameInput.js";
import { PasswordInputContainer } from "./PasswordInput.js";
import { LogInButton } from "./LogInButton.js";
import { CreateAccountButton } from "./CreateAccountButton.js";

import { ABUserNameDisplay } from "./AB-UsernameDisplay.js";
import { LogOutButton } from "./LogOutButton.js";

import { accountInterface } from "../../main.js";



export const ACCOUNT_BOX_CLASS = 'account-box';

function AccountBox() {
    var accountBox = document.createElement('div');
    accountBox.classList.add(ACCOUNT_BOX_CLASS);

    return accountBox;
}

export const LOGGED_IN_ACCOUNT_BOX_ID = 'logged-in-account-box';

function LoggedInAccountBox() {
    var accountBox = AccountBox();
    accountBox.id = LOGGED_IN_ACCOUNT_BOX_ID;

    var children = [
        ABUserNameDisplay(),
        LogOutButton()
    ];

    attachChildren(accountBox, children);

    return accountBox;
}

export const LOGGED_OUT_ACCOUNT_BOX_ID = 'logged-out-account-box';

function LoggedOutAccountBox() {
    var accountBox = AccountBox();
    accountBox.id = LOGGED_OUT_ACCOUNT_BOX_ID;

    var children = [
        LoginInfo(),
        UsernameInputContainer(),
        PasswordInputContainer(),
        LogInButton(),
        CreateAccountButton()
    ];

    attachChildren(accountBox, children);

    return accountBox;
}


export function getAccountBox() {
    if (accountInterface.isLoggedIn()) {
        return LoggedInAccountBox();
    }
    else {
        return LoggedOutAccountBox();
    }
}
