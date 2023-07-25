import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  static email = ""
  static loginPassword = ""
  static usernameInputBorderColor = ""
  static passwordInputBorderColor = ""

  static passwordIsValid = false
  static emailIsValid = false

  static invalidEmailMessage = ""
  static invalidPasswordMessage = ""


  get email() {
    return LoginComponent.email;
  }

  get password() {
    return LoginComponent.loginPassword
  }

  get emailIsValid() {
    return LoginComponent.emailIsValid
  }

  get passwordIsValid() {
    return LoginComponent.passwordIsValid
  }

  get invalidEmailMessage() {
    return LoginComponent.invalidEmailMessage
  }

  get invalidPasswordMessage() {
    return LoginComponent.invalidPasswordMessage
  }

  get emailColor() {
    return LoginComponent.usernameInputBorderColor;
  }

  get passwordColor() {
    return LoginComponent.passwordInputBorderColor;
  }

}
