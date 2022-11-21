import { Injectable } from '@angular/core';
import { FilterService } from 'src/app/YoutubeModule/services/filter.servise';
import { IAbstractDataEl } from '../models/abstract.model';
import { AscentService } from './ascent.service';
import { SortTypeService } from './sortType.service';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root',
})
export class GlobalStoreService {
  ascent: boolean = false;

  filter: string = '';

  sortType: string = 'none';

  store: IAbstractDataEl[] = [];

  isFetched: boolean = false;

  constructor(
    private ascentService: AscentService,
    private filterService: FilterService,
    private sortTypeService: SortTypeService,
    private storeService: StoreService,
  ) {
    this.ascentService.ascent$.subscribe((ascent: boolean) => {
      this.ascent = ascent;
    });
    this.filterService.filter$.subscribe((filter: string) => {
      this.filter = filter;
    });
    this.sortTypeService.sortType$.subscribe((sortType: string) => {
      this.sortType = sortType;
    });
    this.storeService.store$.subscribe((store: IAbstractDataEl[]) => {
      this.store = store;
    });
  }
}
