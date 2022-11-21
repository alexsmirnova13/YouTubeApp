import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { FilterService } from 'src/app/YoutubeModule/services/filter.servise';

import { SortPanelViewService } from 'src/app/CoreModule/services/sortPanelView.service';
import { SortTypeService } from '../services/sortType.service';
import { AscentService } from '../services/ascent.service';
import { GlobalStoreService } from '../services/savingData.service';

@Component({
  selector: 'app-sorting-panel',
  templateUrl: './sorting-panel.component.html',
  styleUrls: ['./sorting-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortingPanelComponent implements OnInit, OnDestroy {
  @Input() isSort: boolean = false;

  ascent: boolean = false;

  sortType: string = 'none';

  filterValue: string = '';

  @Output() ascentChanged = new EventEmitter<boolean>();

  @Output() sortTypeChanged = new EventEmitter<string>();

  constructor(
    private sortPanelViewService: SortPanelViewService,
    private filterService: FilterService,
    private ref: ChangeDetectorRef,
    private sortTypeService: SortTypeService,
    private ascentService: AscentService,
    private savingData: GlobalStoreService,
  ) {}

  ngOnInit(): void {
    this.sortPanelViewService.sortPanelView$.subscribe(() => this.setIsSort());
    this.sortTypeService.sortType$.subscribe((sortType: string) => this.onSortTypeChange(sortType));
    this.ascentService.ascent$.subscribe((ascent: boolean) => this.onAscentChange(ascent));
  }

  private setIsSort(): void {
    this.isSort = !this.isSort;
    this.ref.detectChanges();
  }

  changeFilterStr() {
    this.filterService.changeFilter(this.filterValue);
  }

  onTypeSort(event: Event) {
    let target = (event.target as HTMLInputElement).innerText;
    if (target === 'count of views') {
      target = 'viewCount';
    } else if (target === 'date') {
      target = 'publishedAt';
    }
    if (target === this.sortType) {
      this.ascentService.changeAscent(!this.ascent);
    }

    this.sortTypeService.changeSortType(target);
  }

  onAscentChange(bool: boolean) {
    this.ascent = bool;
  }

  onSortTypeChange(str: string) {
    this.sortType = str;
  }

  ngOnDestroy(): void {
    this.sortPanelViewService.sortPanelView$.unsubscribe();
    this.sortTypeService.sortType$.unsubscribe();
    this.ascentService.ascent$.unsubscribe();
    this.filterService.filter$.unsubscribe();
  }
}
