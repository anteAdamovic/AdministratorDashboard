import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('username') usernameField: ElementRef;
  @ViewChild('password') passwordField: ElementRef;
  public usernameWarning: String;
  public passwordWarning: String;

  constructor() { }

  public validateAndLogin(): void {
    this.clearWarningText();
    const username = this.usernameField.nativeElement.value;
    const password = this.passwordField.nativeElement.value;

    console.log(this);

    if (!this.validateUsername()) {
      this.usernameWarning = "Username must be at least 8 characters long and have 1 capital letter.";
    } 
    
    if (!this.validatePassword()) {
      this.passwordWarning = "Passowrd must be at least 8 characters long and have 1 number.";
      return;
    }

    // Do login

  }

  // Clears warnings from both input fields
  private clearWarningText(): void {
    this.usernameWarning = "";
    this.passwordWarning = "";
  }

  private validateUsername(): void {
    const regex = /^(?=.{8,20}$)[a-zA-Z0-9._]/;
    const username = this.usernameField.nativeElement.value;
    
    const result = regex.test(username);
    if (!result) {
      this.usernameWarning = "Username doesn't meet the criteria";
    } else {
      this.usernameWarning = "";
    }

    // return result;
  }

  private validatePassword(): boolean {
    const password = this.passwordField.nativeElement.value;
    console.log(password);
    return false;
  }
}
