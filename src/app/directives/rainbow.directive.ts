import { Directive, ElementRef, Input, HostListener } from '@angular/core';
import { Poney } from '../interfaces/poney';

@Directive({
  selector: '[adiRainbow]'
})
export class RainbowDirective {

  @Input('adiRainbow') color: string = 'orangered'
  @Input() isColored: boolean = false
  @Input() poney: Poney
  timeoutId: any

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this.isColored) {
      this.el.nativeElement.style.backgroundColor = this.color
    }
  }

  @HostListener('dblclick')
  handleDblclick() {
    this.poney.distance += 10

    let rainbowImg = this.poney.img.replace('running', 'rainbow')
    let runningImg = this.poney.img.replace('rainbow', 'running')

    this.poney.img = rainbowImg

    clearTimeout(this.timeoutId)

    this.timeoutId = setTimeout(() => {
      this.poney.img = runningImg
    }, 1000)
  }
}
