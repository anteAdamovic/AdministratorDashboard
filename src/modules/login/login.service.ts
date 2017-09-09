import { Injectable } from '@angular/core';
import { UserContextService } from '../../app/services/user-context.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {


    constructor(private userContextService: UserContextService) {}

    public login(data: any): Observable<any> {
        return this.userContextService.login(data);
    }
}