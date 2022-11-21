import { Pipe, PipeTransform } from '@angular/core';
import { IOneItem } from 'src/app/CoreModule/models/response.models';
import { GetDataService } from 'src/app/CoreModule/services/getData.service';

@Pipe({
  name: 'sortPipe',
})
export class SortPipe implements PipeTransform {
  constructor(private getData: GetDataService) {}

  transform(value: IOneItem[] | null | undefined, field: string, isIncr: boolean): IOneItem[] {
    if (!value) {
      return [];
    }
    const newValue: IOneItem[] = [...value];
    if (field !== 'none') {
      let k: number;
      let m: number;
      if (isIncr) {
        k = 1;
        m = -1;
      } else {
        k = -1;
        m = 1;
      }
      const result = newValue.sort((a: IOneItem, b: IOneItem) => {
        let i;
        let j;
        if (field === 'viewCount') {
          i = Number(a.statistics[field]);
          j = Number(b.statistics[field]);
        } else if (field === 'publishedAt') {
          i = Date.parse(a.snippet[field]);
          j = Date.parse(b.snippet[field]);
        } else {
          return 0;
        }
        return j > i ? k : m;
      });
      return result;
    } else {
      return newValue;
    }
  }
}
