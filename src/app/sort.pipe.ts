import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(value: any, prop: string, sorter: string): any {
    const arrangements = {
      'asc' : [-1, 1, 0],
      'desc' : [1, -1, 0]
    };
    const arr = arrangements[sorter];
    console.log(arr);
    value.sort(
      function(a, b) {
        return (a[prop] < b[prop]) ? arr[0] : ((a[prop] > b[prop]) ? arr[1] : arr[2]);
      }
    );
    return value;
  }
}
