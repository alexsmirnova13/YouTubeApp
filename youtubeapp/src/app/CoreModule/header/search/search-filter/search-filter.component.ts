import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SortPanelViewService } from 'src/app/CoreModule/services/sortPanelView.service';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFilterComponent {
  constructor(private sortPanelViewService: SortPanelViewService) {}

  onFilterClick() {
    this.sortPanelViewService.changeSortPanelView(false);
  }
}
