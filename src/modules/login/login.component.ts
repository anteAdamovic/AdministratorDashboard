import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from './login.service';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent {
    public showSpinner: boolean = false;
    public loginData: any = {
        username: 'username',
        password: 'password'
    };

    constructor(private loginService: LoginService, private router: Router) { }

    public login(): void {
        this.showSpinner = true;
        this.loginService.login(this.loginData).delay(500).subscribe(
            (loginEvent: any) => {
                if (loginEvent) {
                    // alert('Login succesfull ' + loginEvent);
                    this.router.navigate(['dashboard']);
                } else {
                    alert('Login failed!');
                }
                this.showSpinner = false;
            }
        )
    }
}