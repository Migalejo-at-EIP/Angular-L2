import { Directive, ElementRef, HostListener } from '@angular/core';
import { ContactComponent } from 'src/app/pages/contact/contact.component';

@Directive({
  selector: '[appContactGetInput]'
})
export class ContactGetInputDirective {

  constructor(private element: ElementRef) {
    ContactComponent.contactUsername = ""
    ContactComponent.contactMessage = ""
  }

  @HostListener("input")
  onInput() {
    this.checkInput()
    this.recordInput()
  }

  @HostListener("reset")
  onLoad() {
    ContactComponent.contactUsername = ""
    ContactComponent.contactMessage = ""
  }

  private recordInput() {
    if (this.element.nativeElement.type === "email") {
      ContactComponent.contactUsername = this.element.nativeElement.value
    } else if (this.element.nativeElement.id === "textArea") {
      ContactComponent.contactMessage = this.element.nativeElement.value
    }
  }

  private checkInput(){
    if (this.element.nativeElement.value === "") {
      this.element.nativeElement.style.borderColor = "red"
    } else {
      this.element.nativeElement.style.borderColor = ""
    }
  }

}
