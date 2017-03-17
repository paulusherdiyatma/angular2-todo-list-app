import { Injectable } from '@angular/core';
import { Cookie } from 'ng2-cookies';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
    isLoggedIn: boolean = false;
    isFromRegister: boolean = false;
    cookies: Object;

    checkIsLogged() {
        if(Cookie.get('isLooged')=="true") {
            this.isLoggedIn = true;
            return true;
        }
        else {
            this.isLoggedIn = false;
            return false;
        }
    }

    setAuthData(username, authToken): void {
        Cookie.set('username', username);
        Cookie.set('authToken', authToken);
    }

    getEmailData() {
        return Cookie.check('email');
    }
    
    setEmailData(email) {
        Cookie.set('email', email);
    }

    checkAuthData() {
        Cookie.deleteAll();
    }

    login(): void {
        Cookie.set('isLooged', "true");
        this.isLoggedIn = true;
    }

    logout(): void {
        Cookie.deleteAll();
        Cookie.set('isLooged', "false");
        this.isLoggedIn = false;
    }
}