import { attachChildren } from "../../PageElements/ElementBuilder.js";

import { MainTitle } from "../../PageElements/MainTitle.js";
import { getAccountBox } from "../../PageElements/AccountBox/AccountBox.js";
import { MainContentContainer } from "../../PageElements/MainContent/MainContentContainer.js";



export function BuildHomePage() {

    var children = [
        MainContentContainer(),
        MainTitle(),
        getAccountBox()
    ]

    attachChildren(document.body, children);

}