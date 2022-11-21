import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IAbstractDataEl } from 'src/app/CoreModule/models/abstract.model';

@Injectable({
  providedIn: 'root',
})
export class OneItemService {
  public oneItem$ = new Subject<IAbstractDataEl>();

  public changeOneItem(oneItem: IAbstractDataEl) {
    this.oneItem$.next(oneItem);
  }
}
