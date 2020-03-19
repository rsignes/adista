import { Component, ViewEncapsulation } from '@angular/core';
import { Race } from './interfaces/race';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title: string = 'adista';

  races: Race[] = []

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.races = this.dataService.races
  }
}
