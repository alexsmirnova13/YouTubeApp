import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, of } from 'rxjs';
import * as PostsActions from '../actions/storeReduxAction';
import { GetDataService } from './../../services/getData.service';
@Injectable()
export class OneItemInfoEffects {
  oneItemInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActions.addOneCardInfo),
      mergeMap((action: any) => {
        console.log('dfd');
        return this.getDataService.getVideoById(action.id).pipe(
          map((currentCard: any) => PostsActions.addOneCardInfoSuccess({ currentCard })),
          catchError((error) => {
            console.log(error.message);
            return of(PostsActions.addOneCardInfoFailure({ error: error.message, id: action.id }));
          }),
        );
      }),
    ),
  );

  constructor(private actions$: Actions, private getDataService: GetDataService) {}
}
