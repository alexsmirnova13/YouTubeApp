import { createReducer, on } from '@ngrx/store';
import { IDataLoading } from '../../models/dataLoading.model';
import * as ItemsActions from '../actions/storeReduxAction';
export const initialState: IDataLoading = {
  isLoading: false,
  posts: null,
  error: null,
  customCards: [],
  allPosts: [],
  currentCard: null,
};

export const reducers = createReducer(
  initialState,
  on(ItemsActions.getPosts, (state: any) => ({ ...state, isLoading: true })),
  on(ItemsActions.getPostsSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    posts: action.posts,
  })),
  on(ItemsActions.getPostsFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),
  on(ItemsActions.addOnePost, (state, action) => ({
    ...state,
    isLoading: false,
    customCards: [...state.customCards, action.oneCard],
  })),
  on(ItemsActions.addOneCardInfo, (state: any) => ({ ...state, isLoading: true })),
  on(ItemsActions.addOneCardInfoSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    currentCard: action.currentCard,
  })),
  on(ItemsActions.addOneCardInfoFailure, (state: any, action: any) => {
    const video = state.customCards.find((el: any) => el.id === action.id);
    console.log(video);
    return {
      ...state,
      isLoading: false,
      currentCard: video,
      error: action.error,
    };
  }),
);
