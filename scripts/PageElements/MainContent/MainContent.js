import { attachChildren } from "../ElementBuilder.js";
import { accountInterface, page } from "../../main.js";

import { Creator } from "./Pages/Creator.js";
import { GameHome } from "./Pages/GameHome/GameHome.js";
import { Combat } from "./Pages/Combat/Combat.js";


export const CONTENT_CREATOR = 'creator';
export const CONTENT_GAME_HOME = 'game-home';
export const CONTENT_COMBAT = 'combat';


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

            case CONTENT_COMBAT:
                return Combat(account);
                break;
            
            default:
                return GameHome(account);
        }
    }
    else {
        //Not logged in content?
    }
}

export function changePage(newContent, account) {
    account.contentPage = newContent;
    accountInterface.storeCurrentAccount(account);
    page.resetPage();
}
