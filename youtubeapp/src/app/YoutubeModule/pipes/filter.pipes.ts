import { Pipe, PipeTransform } from '@angular/core';
import { IOneItem } from 'src/app/CoreModule/models/response.models';
import { GetDataService } from 'src/app/CoreModule/services/getData.service';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  constructor(private getData: GetDataService) {}

  transform(value: IOneItem[] | undefined | null, word: string): IOneItem[] {
    if (!value) {
      return [];
    }
    let result = [...value];
    result = result.filter((el) => el.snippet.title.toLowerCase().includes(word.toLowerCase()));
    return result;
  }
}
