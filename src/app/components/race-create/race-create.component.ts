import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Poney } from '../../interfaces/poney';
import { Race } from '../../interfaces/race';
import { Router } from '@angular/router';

@Component({
  selector: 'adi-race-create',
  templateUrl: './race-create.component.html',
  styleUrls: ['./race-create.component.scss']
})
export class RaceCreateComponent implements OnInit {

  ponies$: Observable<Poney[]>
  race: Race = {
    name: '',
    poneyIds: []
  }

  ngOnInit(): void {
    this.ponies$ = this.dataService.ponies$
  }

  handleSubmit(event) {
    console.log(event)

    this.dataService.saveRace(this.race).subscribe(race => {
      // this.router.navigateByUrl('/race-list')
      this.router.navigate(['/race', race.id])
    })
  }

  constructor(private dataService: DataService, private router: Router) { }

}
