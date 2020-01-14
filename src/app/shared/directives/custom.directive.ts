

import { ElementRef, Directive, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[bwmHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input('bwmHighlight') bwmHighlight

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = this.bwmHighlight; 
  }
}