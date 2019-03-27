import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Element } from '@angular/compiler/src/render3/r3_ast';

@Directive({
  selector: '[setmycolor]'
})
export class SetmycolorDirective {

  @Input('fcolor') myfcolor:String;  //passing the first color using inputs
  @Input('lcolor') mylcolor:String;  //passing the second color using inputs


  constructor(private element:ElementRef) { 
    element.nativeElement.style.color = 'yellow';
  }

  @HostListener('mouseenter') setColoronMouseEnter(){
    this.setColor(this.myfcolor);
  }

  @HostListener('mouseleave') setColoronMouseLeave(){
    this.setColor(this.mylcolor);
  }

  private setColor(color:String){
    this.element.nativeElement.style.color = color;
  }

}
