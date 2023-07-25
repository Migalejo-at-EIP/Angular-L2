import { Directive, HostListener } from '@angular/core';
import { LoginComponent } from 'src/app/pages/login/login.component';

@Directive({
  selector: '[appResetLogin]'
})
export class ResetLoginDirective {

  constructor() {}

  @HostListener("click") onClick() {
      LoginComponent.usernameInputBorderColor = ""
      LoginComponent.passwordInputBorderColor = ""
  }

}
