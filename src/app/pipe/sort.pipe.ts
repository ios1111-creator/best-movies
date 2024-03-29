import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sort',
  pure: true
})
export class SortPipe implements PipeTransform {
  transform(array: any, args?: any): any {
    array = array || [];
    return array.slice().sort((b: number, a: number) => b - a);
  }
}
