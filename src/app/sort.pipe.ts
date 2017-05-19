import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {
  transform(value: any, prop: string, sorter: string): any {
    const arrangements = {
      'asc' : [1, -1],
      'desc' : [-1, 1]
    };
    const arr = arrangements[sorter];

    value.sort(
      (a, b) => {
        return (a[prop] > b[prop]) ? arr[0] : arr[1];
      }
    );
    return value;
  }
}
