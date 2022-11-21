import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addOneCardInfo } from 'src/app/CoreModule/redux/actions/storeReduxAction';
import { IOneItem } from 'src/app/CoreModule/models/response.models';
import { AppStateInterface } from 'src/app/CoreModule/redux/types/appState.interface';
import { oneItemInfoSelector } from 'src/app/CoreModule/redux/selectors/storeReduxSelector';
@Component({
  selector: 'app-one-item-info',
  templateUrl: './one-item-info.component.html',
  styleUrls: ['./one-item-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OneItemInfoComponent implements OnInit {
  id: string | null;

  oneItem: IOneItem | undefined;

  oneStoreItem$: Observable<IOneItem | null>;

  constructor(
    private activateRoute: ActivatedRoute,
    private ref: ChangeDetectorRef,
    private router: Router,
    private store: Store<AppStateInterface>,
  ) {
    this.id = activateRoute.snapshot.paramMap.get('id');

    this.oneStoreItem$ = this.store.pipe(select(oneItemInfoSelector));
    this.oneStoreItem$.subscribe((item) => {
      console.log(item);
      this.oneItem = item as IOneItem;
      this.ref.detectChanges();
    });
  }

  ngOnInit(): void {
    if (this.id) {
      this.store.dispatch(addOneCardInfo({ id: this.id }));
    }
  }

  onBackClick() {
    this.router.navigate(['searchResult']);
  }
}
