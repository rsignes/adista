import { Component, ViewChildren, QueryList, Input } from '@angular/core';
import { Poney } from '../../interfaces/poney';
import { PoneyComponent } from '../poney/poney.component';
import { Race } from 'src/app/interfaces/race';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'adi-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent {

  @Input() race: Race

  @ViewChildren('poneyChildren') poneyChildren: QueryList<PoneyComponent>

  handleWin(poney: Poney) {
    console.log('WINNER : ', poney.name)
    this.poneyChildren.forEach((poneyComponent: PoneyComponent) => {
      poneyComponent.stopRunning()
    })
  }

  ponies: Poney[] = []

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.ponies = this.dataService.ponies
  }

}
