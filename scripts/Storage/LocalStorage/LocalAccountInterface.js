import { AccountInterface } from "../../Account/AccountInterface.js";
import { storage, page } from "../../main.js";

import { getAccountDataKey } from "./LocalAccount.js";
import { Account } from "../../Account/Account.js";
import { Creature } from "../../Creature/Creature.js";



export class LocalAccountInterface extends AccountInterface {

    constructor() {
        super();

        this.minimumUsernameLength = 3;
        this.minimumPasswordLength = 3;
    }

    storeAccount(account) {
        this.storeAccountToKey( getAccountDataKey(account.username), account);
    }

    storeCurrentAccount(account) {
        this.storeAccountToKey(storage.key.CURRENT_ACCOUNT, account);
    }

    getCurrentAccount() {
        var acct = storage.getObject( storage.key.CURRENT_ACCOUNT, Account);

        return acct;
    }

    getCurrentAccountData() {
        return localStorage.getItem( storage.key.CURRENT_ACCOUNT );
    }

    storeAccountToKey(key, account) {
        storage.storeObject( key, account );
    }

    getAccountByUsername(username) {
        return storage.getObject( getAccountDataKey(username.toLowerCase()), Account );
    }

    getAccountDataByUsername(username) {
        return localStorage.getItem(getAccountDataKey(username.toLowerCase()));
    }

    isLoggedIn() {
        if ( localStorage.getItem(storage.key.CURRENT_ACCOUNT) == undefined ) {
            return false;
        }
        else {
            return true;
        }
    }

    usernameExists(username) {
        if (this.getAccountDataByUsername(username) == undefined) {
            return false;
        }
        else {
            return true;
        }
    }

    confirmUsernamePassword(username, password) {
        if (this.getAccountByUsername(username).password == password) {
            return true;
        }
        else {
            return false;
        }
    }

    attemptLogin(username, password) {
        if (this.usernameExists(username)) {
            if (this.confirmUsernamePassword(username, password)) {
                this.login(username);
            }
            else {
                alert('You have entered the wrong password');
            }
        }
        else {
            alert('User not found');
        }
    }

    login(username) {
        var account = this.getAccountByUsername(username);

        this.storeCurrentAccount(account);

        page.resetPage();
    }

    logout() {
        this.storeAccount(this.getCurrentAccount());

        localStorage.removeItem( storage.key.CURRENT_ACCOUNT );

        page.resetPage();
    }

    attemptCreateAccount(username, password) {
        if (username.length < this.minimumUsernameLength) {
            alert('Username must be at least ' + this.minimumUsernameLength + ' characters long');
        }
        else {
            if (password.length < this.minimumPasswordLength) {
                alert('Password must be at least ' + this.minimumPasswordLength + ' characters long');
            }
            else {
                if (this.usernameExists(username)) {
                    alert('Sorry, that username is taken');
                }
                else {
                    this.createAccount(username, password);
                }
            }
        }
    }

    createAccount(username, password) {
        var newAccount = new Account(username, password);

        this.storeAccount(newAccount);

        this.login(username);
    }

}