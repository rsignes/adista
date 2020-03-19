import { Component, ViewEncapsulation } from '@angular/core';
import { Poney } from './interfaces/poney';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title: string = 'adista';

  handleWin(poney: Poney) {
    console.log('WINNER : ', poney.name)
  }

  ponies: Poney[] = [
    {
      id: '0',
      name: 'Romain',
      img: 'http://ponyracer.ninja-squad.com/assets/images/pony-blue-running.gif',
      distance: 0
    },
    {
      id: '1',
      name: 'Yohan',
      img: 'http://ponyracer.ninja-squad.com/assets/images/pony-orange-running.gif',
      distance: 0
    },
    {
      id: '2',
      name: 'Liam',
      img: 'http://ponyracer.ninja-squad.com/assets/images/pony-green-running.gif',
      distance: 0
    }
  ]
}
