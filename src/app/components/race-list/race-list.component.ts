import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Race } from 'src/app/interfaces/race';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'adi-race-list',
  templateUrl: './race-list.component.html',
  styleUrls: ['./race-list.component.scss']
})
export class RaceListComponent implements OnInit {

  races$: Observable<Race[]>

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.races$ = this.dataService.races$
  }

}
