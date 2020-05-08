
export const MAIN_TITLE_CONTAINER_ID = 'main-title-container';
export const MAIN_TITLE_TEXT_ID = 'main-title-text';

export function MainTitle() {
    var mainTitleContainer = document.createElement('div');
    mainTitleContainer.id = MAIN_TITLE_CONTAINER_ID;

    var mainTitleText = document.createElement('div');
    mainTitleText.id = MAIN_TITLE_TEXT_ID;
    mainTitleText.innerText = 'Tombs of Akirahn';

    mainTitleContainer.appendChild(mainTitleText);

    return mainTitleContainer;
}