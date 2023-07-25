import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[onHoverOverLink]'
})
export class OnHoverOverLinkDirective {

   public colorForLink = '#0390fc'

  constructor( private element:ElementRef ) { 
    this.element.nativeElement.style.borderStyle ='solid';
    this.element.nativeElement.style.borderWidth ='1px';
    this.element.nativeElement.style.padding ='10px';
    this.element.nativeElement.style.borderRadius ='10px';
    this.element.nativeElement.style.color = this.colorForLink;
    this.element.nativeElement.style.backgroundColor = 'white';
    this.element.nativeElement.style.fontSize = '17px';
  }

  @HostListener('mouseover')
 private OnMouseOverLink () {
    this.element.nativeElement.style.color = 'white';
    this.element.nativeElement.style.backgroundColor = this.colorForLink;
    this.element.nativeElement.style.fontSize = '20px';
 }

 @HostListener ('mouseout')
 private onMouseOutOfLink () {
    this.element.nativeElement.style.color = this.colorForLink;
    this.element.nativeElement.style.backgroundColor = 'white';
    this.element.nativeElement.style.fontSize = '17px';
 }

}
