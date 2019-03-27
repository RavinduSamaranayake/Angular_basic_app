import { Directive, ElementRef } from '@angular/core';
import { Element } from '@angular/compiler/src/render3/r3_ast';

@Directive({
  selector: '[setmycolor]'
})
export class SetmycolorDirective {

  constructor(private element:ElementRef) { 
    element.nativeElement.style.color = 'yellow';
  }

}
