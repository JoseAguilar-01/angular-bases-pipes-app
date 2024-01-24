import { Pipe, type PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  transform(value: Hero[], sortBy?: keyof Hero) {
    if (!sortBy) {
      return value;
    }

    const sortedList = value.sort((a, b) => {
      if (a[sortBy] > b[sortBy]) return 1;

      if (a[sortBy] < b[sortBy]) return -1;

      return 0;
    });

    return sortedList;
  }
}
