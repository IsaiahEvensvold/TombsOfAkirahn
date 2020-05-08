

export const TOA_INPUT_CLASS = 'toa-input';
export const TOA_TEXT_INPUT_CLASS = 'toa-text-input';
export const TOA_PASSWORD_INPUT_CLASS = 'toa-password-input';


function TOAInput() {
    var toaInput = document.createElement('input');
    toaInput.classList.add(TOA_INPUT_CLASS);

    return toaInput;
}

export function TOATextInput() {
    var toaTextInput = TOAInput();
    toaTextInput.type = 'text';
    toaTextInput.classList.add(TOA_TEXT_INPUT_CLASS);

    return toaTextInput;
}

export function TOAPasswordInput() {
    var toaPasswordInput = TOAInput();
    toaPasswordInput.type = 'password';
    toaPasswordInput.classList.add(TOA_PASSWORD_INPUT_CLASS);

    return toaPasswordInput;
}