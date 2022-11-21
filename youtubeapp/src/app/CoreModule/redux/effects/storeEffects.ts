import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, of } from 'rxjs';
import * as PostsActions from '../actions/storeReduxAction';
import { ApiService } from '../../services/api.service';

@Injectable()
export class PostsEffects {
  getPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActions.getPosts),
      mergeMap((action: any) => {
        return this.apiService.getUsers(action.value).pipe(
          map((posts: any) => PostsActions.getPostsSuccess({ posts })),
          catchError((error) => of(PostsActions.getPostsFailure({ error: error.message }))),
        );
      }),
    ),
  );

  constructor(private actions$: Actions, private apiService: ApiService) {}
}
