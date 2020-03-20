import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Poney } from '../interfaces/poney';
import { Race } from '../interfaces/race';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  get ponies$(): Observable<Poney[]> {
    return new Observable(observer => {
      observer.next(this._ponies)
      observer.complete()
    })
  }

  get races$(): Observable<Race[]> {
    return of(this._races)
  }

  getRaceById(id: string): Observable<Race | undefined> {
    return this.races$.pipe(map(races => {
      return races.find(race => race.id === id)
    }))
  }

  private _ponies: Poney[] = [
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

  private _races: Race[] = [
    {
      id: '0',
      name: 'St-Étienne',
      poneyIds: ['0', '1']
    },
    {
      id: '1',
      name: 'Nancy',
      poneyIds: ['1', '2']
    }
  ]
}
