import { MainContent } from "./MainContent.js";


export const MAIN_CONTENT_CONTAINER_ID = 'main-content-container'

export function MainContentContainer() {
    var mainContentContainer = document.createElement('div');
    mainContentContainer.id = MAIN_CONTENT_CONTAINER_ID;

    mainContentContainer.appendChild(MainContent());

    return mainContentContainer;
}