import { Directive, ElementRef, HostListener } from '@angular/core';
import { LoginComponent } from 'src/app/pages/login/login.component';

@Directive({
  selector: '[appLoginGetInput]'
})
export class LoginGetInputDirective {

  constructor(private element: ElementRef) {
    LoginComponent.email = ""
    LoginComponent.loginPassword = ""    
  }

  @HostListener("input") onInput() {
    this.recordInput()
  }

  @HostListener("reset") onLoad() {
    LoginComponent.email = ""
    LoginComponent.loginPassword = ""
  }

  private recordInput() {
    if (this.element.nativeElement.type === "email") {
      LoginComponent.email = this.element.nativeElement.value
      console.log(LoginComponent.email)
    } else if (this.element.nativeElement.type === "password") {
      LoginComponent.loginPassword = this.element.nativeElement.value
      console.log(LoginComponent.loginPassword)

    }
  }
  
}
