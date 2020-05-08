import { TOATextInput } from "../TOA/TOA-Input.js";
import { LOGIN_INPUT_DISPLAY_CLASS, AB_INPUT_CONTAINER_CLASS } from "./PasswordInput.js";


export const USERNAME_INPUT_ID = 'username-input';

export function UsernameInput() {
    var usernameInput = TOATextInput();
    usernameInput.id = USERNAME_INPUT_ID;

    return usernameInput;
}

export const USERNAME_INPUT_DISPLAY_ID = 'username-input-display';

export function UsernameInputDisplay() {
    var usernameInputDisplay = document.createElement('span');
    usernameInputDisplay.id = USERNAME_INPUT_DISPLAY_ID;
    usernameInputDisplay.classList.add(LOGIN_INPUT_DISPLAY_CLASS);

    usernameInputDisplay.innerText = 'Username:';

    return usernameInputDisplay;
}


export const USERNAME_INPUT_CONTAINER_ID = 'username-input-container';

export function UsernameInputContainer() {
    var usernameInputContainer = document.createElement('div');
    usernameInputContainer.id = USERNAME_INPUT_CONTAINER_ID;
    usernameInputContainer.classList.add(AB_INPUT_CONTAINER_CLASS);

    usernameInputContainer.appendChild(UsernameInputDisplay());
    usernameInputContainer.appendChild(UsernameInput());

    return usernameInputContainer;
}