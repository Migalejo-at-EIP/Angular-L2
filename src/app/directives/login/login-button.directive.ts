import { Directive, HostListener } from '@angular/core';
import { LoginComponent } from 'src/app/pages/login/login.component';

@Directive({
  selector: '[appLoginButton]'
})
export class LoginButtonDirective {

  goodColor = "green"
  badColor = "red"

  constructor() {}

  @HostListener("click") onClick() {
    this.ValidateEmail(LoginComponent.email)
    this.ValidatePassword(LoginComponent.loginPassword)
  }

   ValidateEmail(email: String) {
    var validRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    if (email.match(validRegex)) {
      LoginComponent.usernameInputBorderColor = this.goodColor
      LoginComponent.emailIsValid = true
    } else {
      LoginComponent.usernameInputBorderColor = this.badColor
      LoginComponent.emailIsValid = false
      LoginComponent.invalidEmailMessage = "El email introducido no es válido"
    }
  }

   ValidatePassword(password: String) {
    var validRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    if (password.match(validRegex)) {
      LoginComponent.passwordInputBorderColor = this.goodColor
      LoginComponent.passwordIsValid = true
    } else {
      LoginComponent.passwordInputBorderColor = this.badColor
      LoginComponent.passwordIsValid = false
      LoginComponent.invalidPasswordMessage = "La contraseña debe contener mínimo 8 letras, y debe contener al menos una mayúscula, una minúscula, un número y un caracter especial "
    }
  }

}
