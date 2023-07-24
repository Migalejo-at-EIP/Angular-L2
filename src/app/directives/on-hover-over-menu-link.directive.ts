import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[onHoverOverMenuLink]'
})
export class OnHoverOverMenuLinkDirective {
  private standardStyles = "";


  constructor( private element:ElementRef ) { 
    this.standardStyles = this.element.nativeElement.style;
  }

  @HostListener('mouseover')
  private OnMouseOverLink () {
    this.element.nativeElement.style.textDecoration= 'underline';
 }

 @HostListener ('mouseout')
 private onMouseOutOfLink () {
    this.element.nativeElement.style = this.standardStyles;
}
}
