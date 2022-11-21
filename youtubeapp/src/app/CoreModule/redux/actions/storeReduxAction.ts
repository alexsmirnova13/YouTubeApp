import { createAction, props } from '@ngrx/store';
import { IOneItem, IResponse } from '../../models/response.models';

export const getPosts = createAction('[Posts] Get Posts', props<{ value: string }>());
export const getPostsSuccess = createAction(
  '[Posts] Get Posts success',
  props<{ posts: IResponse }>(),
);
export const getPostsFailure = createAction(
  '[Posts] Get Posts failure',
  props<{ error: string }>(),
);

export const addOnePost = createAction('[Posts] Add Post', props<{ oneCard: IOneItem }>());

export const addOneCardInfo = createAction(
  '[Posts] Add One Card with Info',
  props<{ id: string }>(),
);
export const addOneCardInfoSuccess = createAction(
  '[Posts] Add One Card with Info success',
  props<{ currentCard: IOneItem }>(),
);
export const addOneCardInfoFailure = createAction(
  '[Posts] Add One Card with Info failure',
  props<{ error: string; id: string }>(),
);
