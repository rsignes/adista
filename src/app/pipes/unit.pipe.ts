import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unit'
})
export class UnitPipe implements PipeTransform {

  transform(value: number): string {
    return !!value ? `${value}%` : '0%'
  }

}
