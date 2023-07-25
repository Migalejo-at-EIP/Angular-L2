import { Directive, HostListener } from '@angular/core';
import { ContactComponent } from '../../pages/contact/contact.component';

@Directive({
  selector: '[appResetContact]'
})
export class ResetContactDirective {

  constructor() {}

  @HostListener("click") onClick() {
    ContactComponent.contactMessage = ""
    ContactComponent.contactUsername = ""
    ContactComponent.usernameInputBorderColor = ""
    ContactComponent.messageInputBorderColor = ""
  }

}
