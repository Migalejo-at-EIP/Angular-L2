import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCheckEmtpyField]'
})
export class CheckEmtpyFieldDirective {

  constructor(private element:ElementRef) {
     

   }


   @HostListener("input")
   checkEmptyFields () {
      this.element.nativeElement.borderStyle = "solid"
      this.element.nativeElement.borderWidth = "5px"
      this.element.nativeElement.borderColor = "red"
     
   } 

}
