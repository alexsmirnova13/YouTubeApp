import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { FilterService } from 'src/app/YoutubeModule/services/filter.servise';
import { SortTypeService } from 'src/app/CoreModule/services/sortType.service';
import { AscentService } from 'src/app/CoreModule/services/ascent.service';
import { GlobalStoreService } from 'src/app/CoreModule/services/savingData.service';
import { IOneItem, IResponse } from 'src/app/CoreModule/models/response.models';
import { Store, select } from '@ngrx/store';
import {
  isLoadingSelector,
  postsSelector,
} from 'src/app/CoreModule/redux/selectors/storeReduxSelector';
import { Observable } from 'rxjs';
import { AppStateInterface } from 'src/app/CoreModule/redux/types/appState.interface';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllCardsComponent implements OnInit {
  allStoreCards: IResponse[] = [];

  @Input() ascent: boolean = false;

  @Input() sortType: string = '';

  isLoading$: Observable<boolean>;

  allCardsStore$: Observable<IOneItem[] | undefined>;

  constructor(
    private filterService: FilterService,
    private ref: ChangeDetectorRef,
    private sortTypeService: SortTypeService,
    private ascentService: AscentService,
    public savingData: GlobalStoreService,
    private store: Store<AppStateInterface>,
  ) {
    this.allCardsStore$ = this.store.pipe(select(postsSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
  }

  @Input() filterStr = '';

  ngOnInit(): void {
    if (this.savingData.ascent) {
      this.onAscentChange(this.savingData.ascent);
    }
    if (this.savingData.filter) {
      this.onFilterStrChange(this.savingData.filter);
    }
    if (this.savingData.sortType) {
      this.onSortTypeChange(this.savingData.sortType);
    }

    this.filterService.filter$.subscribe((filter: string) => this.onFilterStrChange(filter));
    this.sortTypeService.sortType$.subscribe((sortType: string) => this.onSortTypeChange(sortType));
    this.ascentService.ascent$.subscribe((ascent: boolean) => this.onAscentChange(ascent));
  }

  onSortTypeChange(string: string) {
    this.sortType = string;
    this.ref.detectChanges();
  }

  onAscentChange(bool: boolean) {
    this.ascent = bool;
    this.ref.detectChanges();
  }

  onFilterStrChange(string: string) {
    this.filterStr = string;
    this.ref.detectChanges();
  }

  // ngOnDestroy(): void {
  //   this.storeService.store$.unsubscribe();
  //   this.filterService.filter$.unsubscribe();
  //   this.sortTypeService.sortType$.unsubscribe();
  //   this.ascentService.ascent$.unsubscribe();
  // }
}
