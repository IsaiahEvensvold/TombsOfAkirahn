import { BuildHomePage } from "./Pages/Home.js";
import * as Theme from "./Style/Theme.js";


export const KEY_HOME = 'homepage';


export class Page {

    constructor(key = KEY_HOME) {

        this.buildPage(key);

        Theme.applyDefaultTheme();

    }

    buildPage(key = KEY_HOME) {

        switch (key) {
            default: //Home Page
                this.currentKey = KEY_HOME;
                BuildHomePage();
        }

    }

    goTo(key = KEY_HOME) {
        this.clearPage();

        this.buildPage(key);
    }

    resetPage() {
        this.goTo(this.currentKey);
    }

    clearPage() {
        document.body.innerHTML = '';
    }

}