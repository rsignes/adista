import { Pipe, PipeTransform } from '@angular/core';
import { Poney } from '../interfaces/poney';

@Pipe({
  name: 'isRacing'
})
export class IsRacingPipe implements PipeTransform {

  transform(ponies: Poney[], poneyIds: string[]): Poney[] {
    return !!ponies && !!poneyIds ? ponies.filter(poney => poneyIds.includes(poney.id)) : []
  }

}
