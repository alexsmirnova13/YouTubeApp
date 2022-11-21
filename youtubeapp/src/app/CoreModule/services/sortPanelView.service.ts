import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SortPanelViewService {
  public sortPanelView$ = new Subject<boolean>();

  public changeSortPanelView(sortPanelView: boolean) {
    this.sortPanelView$.next(sortPanelView);
  }
}
