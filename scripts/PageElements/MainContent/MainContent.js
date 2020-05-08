import { attachChildren } from "../ElementBuilder.js";
import { accountInterface } from "../../main.js";

import { Creator } from "./Pages/Creator.js";


export const CONTENT_CREATOR = 'creator';


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
                //Home
        }
    }
    else {
        //Not logged in content?
    }
}

