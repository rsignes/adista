import { Component, ViewEncapsulation, ViewChildren, QueryList } from '@angular/core';
import { Poney } from './interfaces/poney';
import { PoneyComponent } from './components/poney/poney.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title: string = 'adista';

  @ViewChildren('poneyChildren') poneyChildren: QueryList<PoneyComponent>

  handleWin(poney: Poney) {
    console.log('WINNER : ', poney.name)
    this.poneyChildren.forEach((poneyComponent: PoneyComponent) => {
      poneyComponent.stopRunning()
    })
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
