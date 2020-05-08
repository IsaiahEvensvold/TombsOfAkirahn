import { Storage } from "../Storage.js";



export class LocalStorage extends Storage {

    constructor() {
        super();

        this.key = { //Global keys
            CURRENT_ACCOUNT: 'gk-current-account'
        };
    }

    //Core

    storeObject(dataKey, object) {
        localStorage.setItem(dataKey, JSON.stringify(object));
    }

    getObject(dataKey, type) {
        var parsedObject = JSON.parse( localStorage.getItem(dataKey) );

        return Object.assign(new type(), parsedObject);
    }

}