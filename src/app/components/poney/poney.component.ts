import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Poney } from 'src/app/interfaces/poney';

@Component({
  selector: 'adi-poney',
  templateUrl: './poney.component.html',
  styleUrls: ['./poney.component.scss']
})
export class PoneyComponent {

  @Input() poney: Poney
  @Output() win: EventEmitter<Poney> = new EventEmitter()
  intervalId: any

  ngOnInit(): void {
    this.run()
  }

  ngOnDestroy() {
    this.poney.distance = 0
    this.stopRunning()
  }

  handleClick(event: any) {
    console.log('CLICK', event)
  }

  run() {
    this.intervalId = setInterval(() => {
      this.poney.distance += Math.ceil(Math.random() * 10)

      if (this.poney.distance >= 90) {
        this.poney.distance = 90
        this.win.emit(this.poney)
      }
    }, 1000)
  }

  stopRunning() {
    clearInterval(this.intervalId)
  }

}
