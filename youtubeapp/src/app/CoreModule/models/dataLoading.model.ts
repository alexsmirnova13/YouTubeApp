import { IOneItem, IResponse } from './response.models';

export interface IDataLoading {
  isLoading: boolean;
  posts: IResponse | null;
  error: string | null;
  customCards: IOneItem[];
  allPosts: IOneItem[];
  currentCard: IOneItem | null;
}
