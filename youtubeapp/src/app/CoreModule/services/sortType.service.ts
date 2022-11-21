import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SortTypeService {
  public sortType$ = new Subject<string>();

  public changeSortType(sortType: string) {
    this.sortType$.next(sortType);
  }
}
