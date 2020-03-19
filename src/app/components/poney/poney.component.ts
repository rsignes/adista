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

  constructor() { }

  ngOnInit(): void {
    this.run()
  }

  handleClick(event: any) {
    console.log('CLICK', event)
    this.win.emit(this.poney)
  }

  run() {
    setInterval(() => {
      this.poney.distance += 10
    }, 1000)
  }

}
