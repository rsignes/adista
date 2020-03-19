import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[adiRainbow]'
})
export class RainbowDirective {

  @Input('adiRainbow') color: string = 'orangered'
  @Input() isColored: boolean = false

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this.isColored) {
      this.el.nativeElement.style.backgroundColor = this.color
    }
  }
}
