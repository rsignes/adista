import { map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Poney } from '../interfaces/poney';
import { Race } from '../interfaces/race';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  get ponies$(): Observable<Poney[]> {
    if (this._ponies.length) {
      return of(this._ponies)
    } else {
      return this.http.get<Poney[]>('http://localhost:3000/ponies').pipe(tap(ponies => {
        this._ponies = ponies
      }))
    }
  }

  get races$(): Observable<Race[]> {
    if (this._races.length) {
      return of(this._races)
    } else {
      return this.http.get<Race[]>('http://localhost:3000/races').pipe(tap(races => {
        this._races = races
      }))
    }
  }

  getRaceById(id: string): Observable<Race | undefined> {
    return this.races$.pipe(map(races => {
      return races.find(race => race.id === id)
    }))
  }

  saveRace(race: Race): Observable<Race> {
    return this.http.post<Race>('http://localhost:3000/races', race).pipe(tap(race => {
      this._races = []
    }))
  }

  savePoney(poney: Poney): Observable<Poney> {
    return this.http.post<Poney>('http://localhost:3000/ponies', poney).pipe(tap(poney => {
      this._ponies = []
    }))
  }

  private _ponies: Poney[] = []

  private _races: Race[] = []

  constructor(private http: HttpClient) {}
}
