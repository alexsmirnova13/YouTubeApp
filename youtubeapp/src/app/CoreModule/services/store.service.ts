import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IAbstractDataEl } from '../models/abstract.model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  public store$ = new Subject<IAbstractDataEl[]>();

  public changeStore(store: IAbstractDataEl[]) {
    this.store$.next(store);
  }
}
