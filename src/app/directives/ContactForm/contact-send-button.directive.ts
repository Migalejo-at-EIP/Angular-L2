import { Directive, HostListener } from '@angular/core';
import { ContactComponent } from '../../pages/contact/contact.component';

@Directive({
  selector: '[appClickOnContactButton]'
})
export class ContactSendButtonDirective {

  goodColor = "green"
  badColor = "red"

  constructor() {
    ContactComponent.usernameInputBorderColor = ""
    ContactComponent.messageInputBorderColor = ""
  }

  @HostListener("click")
  onClick() {
    if (ContactComponent.contactUsername !== "") {
      console.log("Hello user: ")
      console.log(ContactComponent.contactUsername)
      ContactComponent.usernameInputBorderColor = this.goodColor
    } else {
      ContactComponent.usernameInputBorderColor = this.badColor
    }

    if (ContactComponent.contactMessage !== "") {
      console.log("your message is: ")
      console.log(ContactComponent.contactMessage)
      ContactComponent.messageInputBorderColor = this.goodColor
    } else {
      ContactComponent.messageInputBorderColor = this.badColor
    }
  }

}
