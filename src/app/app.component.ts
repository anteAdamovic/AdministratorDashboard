import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public formControls: any = {
    usernameControl: new FormControl('', [Validators.required]),
    passwordControl: new FormControl('', [Validators.required])
  };
  public usernameControl: FormControl = new FormControl('', [Validators.required]);
  public loginData: any = {
    username: 'username',
    password: 'password'
  };

  constructor() { }

  public login(): void {
    alert(JSON.stringify(this.loginData));
  }

  public validateAndLogin(): void {
    if (this.formControls.usernameControl.valid && this.formControls.passwordControl.valid) {
      alert('valid');
    }
  }
  
}
