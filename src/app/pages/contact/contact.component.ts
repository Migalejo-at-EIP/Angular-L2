import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  static contactUsername = ""
  static contactMessage = ""
  static usernameInputBorderColor = ""
  static messageInputBorderColor = ""

  usernameBC = ContactComponent.usernameInputBorderColor
  messageBC = ContactComponent.messageInputBorderColor

  username = ContactComponent.contactUsername
  message = ContactComponent.contactMessage


  @HostListener("input") onInput() {
    this.username = ContactComponent.contactUsername
    this.message = ContactComponent.contactMessage
    this.usernameBC = ContactComponent.usernameInputBorderColor
    this.messageBC = ContactComponent.messageInputBorderColor
  }

  @HostListener("click") onClick() {
    this.username = ContactComponent.contactUsername
    this.message = ContactComponent.contactMessage
    this.usernameBC = ContactComponent.usernameInputBorderColor
    this.messageBC = ContactComponent.messageInputBorderColor
  }


}
