import { attachChildren } from "../ElementBuilder.js";
import { accountInterface } from "../../main.js";

import { Creator } from "./Pages/Creator.js";
import { GameHome } from "./Pages/GameHome.js";


export const CONTENT_CREATOR = 'creator';
export const CONTENT_GAME_HOME = 'game-home';


export const MAIN_CONTENT_ID = 'main-content';

export function MainContent() {
    var mainContent = document.createElement('div');
    mainContent.id = MAIN_CONTENT_ID;

    attachChildren(mainContent, getCurrentContent());

    return mainContent;
}


function getCurrentContent() {
    if (accountInterface.isLoggedIn()) {
        var account = accountInterface.getCurrentAccount();
        var contentPage = account.contentPage;

        switch (contentPage) {
            case CONTENT_CREATOR:
                return Creator(account);
                break;
            
            default:
                return GameHome(account);
        }
    }
    else {
        //Not logged in content?
    }
}

