

export const TOA_BUTTON_CLASS = 'toa-button';

export function TOAButton(event) {
    var toaButton = document.createElement('button');
    toaButton.classList.add(TOA_BUTTON_CLASS);

    toaButton.addEventListener('click', event, false);

    return toaButton;
}