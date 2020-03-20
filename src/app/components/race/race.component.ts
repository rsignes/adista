import { map, flatMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Component, ViewChildren, QueryList } from '@angular/core';
import { Poney } from '../../interfaces/poney';
import { PoneyComponent } from '../poney/poney.component';
import { Race } from 'src/app/interfaces/race';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'adi-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent {

  race$: Observable<Race>
  ponies$: Observable<Poney[]>
  @ViewChildren('poneyChildren') poneyChildren: QueryList<PoneyComponent>

  ngOnInit() {
    this.ponies$ = this.dataService.ponies$

    this.race$ = this.route.params.pipe(flatMap(params => this.dataService.getRaceById(params.id)))
  }

  handleWin(poney: Poney) {
    console.log('WINNER : ', poney.name)
    this.poneyChildren.forEach((poneyComponent: PoneyComponent) => {
      poneyComponent.stopRunning()
    })
  }

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute) {}

}
