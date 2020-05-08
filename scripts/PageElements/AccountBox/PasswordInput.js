import { TOAPasswordInput } from "../TOA/TOA-Input.js";


export const AB_INPUT_CONTAINER_CLASS = 'ab-input-container';

export const PASSWORD_INPUT_ID = "password-input";

export function PasswordInput() {
    var passwordInput = TOAPasswordInput();
    passwordInput.id = PASSWORD_INPUT_ID;

    return passwordInput;
}

export const LOGIN_INPUT_DISPLAY_CLASS = 'login-input-display';
export const PASSWORD_INPUT_DISPLAY_ID = 'password-input-display';

export function PasswordInputDisplay() {
    var passwordInputDisplay = document.createElement('span');
    passwordInputDisplay.id = PASSWORD_INPUT_DISPLAY_ID;
    passwordInputDisplay.classList.add(LOGIN_INPUT_DISPLAY_CLASS);

    passwordInputDisplay.innerText = 'Password:';

    return passwordInputDisplay;
}


export const PASSWORD_INPUT_CONTAINER_ID = 'password-input-container';

export function PasswordInputContainer() {
    var passwordInputContainer = document.createElement('div');
    passwordInputContainer.id = PASSWORD_INPUT_CONTAINER_ID;
    passwordInputContainer.classList.add(AB_INPUT_CONTAINER_CLASS);

    passwordInputContainer.appendChild(PasswordInputDisplay());
    passwordInputContainer.appendChild(PasswordInput());

    return passwordInputContainer;
}