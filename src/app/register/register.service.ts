import { Injectable } from '@angular/core';
import { Headers, Http, Response  } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

import { Register } from './register';

@Injectable()
export class RegisterService {

    private headers = new Headers({ 'Content-type': 'application/json' });
    private registerUrl = 'http://172.19.12.79:3000/api/Users';

    constructor(private http: Http) { }

    registerUser(data): Promise<Register[]> {
        return this.http.post(this.registerUrl, data)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: {};
        if (error instanceof Response) {
            const body = error.json() || '';
            errMsg = body.error || JSON.stringify(body);
            // errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    }

}