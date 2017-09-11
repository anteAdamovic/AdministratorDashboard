import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UserContextService {
    private loginStatus: boolean = false;
    constructor() { }

    public login(data: any): Observable<any> {
        if (data.username === 'username' && data.password === 'password') {
            this.loginStatus = true;
        } 
        return Observable.of(this.loginStatus);
    }

    public getLoginStatus(): boolean {
        return this.loginStatus;
    }
}