import { createSelector } from '@ngrx/store';
import { AppStateInterface } from '../types/appState.interface';

export const selectFeature = (state: AppStateInterface) => state.posts;
export const isLoadingSelector = createSelector(selectFeature, (state) => state.isLoading);
export const customCardsSelector = createSelector(selectFeature, (state) => state.customCards);
export const postsSelector = createSelector(selectFeature, (state) => {
  if (state.posts) {
    return [...state.posts?.items, ...state.customCards];
  } else {
    return [...state.customCards];
  }
});
export const errorSelector = createSelector(selectFeature, (state) => state.error);
export const oneItemInfoSelector = createSelector(selectFeature, (state) => state.currentCard);
