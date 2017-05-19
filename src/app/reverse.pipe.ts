import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseStr'
})

export class ReversePipe implements PipeTransform {
  transform(value: string) {
    const finalStr = value.split('').reverse().join('');

    return finalStr;
  }
}
