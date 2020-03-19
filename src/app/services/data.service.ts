import { Injectable } from '@angular/core';
import { Poney } from '../interfaces/poney';
import { Race } from '../interfaces/race';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  get ponies(): Poney[] {
    return this._ponies
  }

  get races(): Race[] {
    return this._races
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
