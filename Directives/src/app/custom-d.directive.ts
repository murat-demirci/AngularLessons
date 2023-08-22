import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCustomD]'
})
export class CustomDDirective {

  constructor(private element: ElementRef) { }

  @Input() set backgroundColor(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }

}
