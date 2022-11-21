import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GetDataService } from 'src/app/CoreModule/services/getData.service';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppStateInterface } from 'src/app/CoreModule/redux/types/appState.interface';
import * as ItemsActions from './../../../redux/actions/storeReduxAction';
import { postsSelector } from 'src/app/CoreModule/redux/selectors/storeReduxSelector';
import { IOneItem } from 'src/app/CoreModule/models/response.models';
@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputComponent {
  searchForm: FormGroup = new FormGroup({
    search: new FormControl(''),
  });

  allCardsStore$: Observable<IOneItem[] | undefined>;

  constructor(private getData: GetDataService, private store: Store<AppStateInterface>) {
    this.allCardsStore$ = this.store.pipe(select(postsSelector));

    this.searchForm.controls['search'].valueChanges
      .pipe(
        filter((str) => str.length > 3),
        debounceTime(1000),
        distinctUntilChanged(),
      )
      .subscribe((value) => {
        this.getData.getData(value);
        this.store.dispatch(ItemsActions.getPosts({ value }));
      });
  }
}
