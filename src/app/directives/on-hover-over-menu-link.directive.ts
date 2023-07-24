import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[onHoverOverMenuLink]'
})
export class OnHoverOverMenuLinkDirective {
  private colorForLink = '#0390fc'


  constructor( private element:ElementRef ) { 
    this.setStandardStyles()
  }

  @HostListener('mouseover')
  private OnMouseOverLink () {
    this.element.nativeElement.style.borderStyle = 'solid';
    this.element.nativeElement.style.borderRadius = '10px';
    this.element.nativeElement.style.borderColor = this.colorForLink;

 }

 @HostListener ('mouseout')
 private onMouseOutOfLink () {
  this.setStandardStyles()
}

private setStandardStyles () {
  this.element.nativeElement.style.borderStyle = 'solid';
  this.element.nativeElement.style.borderRadius = '10px';
  this.element.nativeElement.style.borderColor = "transparent";
}
}
