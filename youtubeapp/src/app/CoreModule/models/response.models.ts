export interface IResponse {
  kind: string;
  etag: string;
  pageInfo: IPageInfo;
  items: IOneItem[];
}

export interface IPageInfo {
  totalResults: number;
  resultsPerPage: number;
}

interface IStatistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}

interface IOneThumbnail {
  url: string;
  width: number;
  height: number;
}

interface IThumbnails {
  default: IOneThumbnail;
  medium: IOneThumbnail;
  high: IOneThumbnail;
  standard: IOneThumbnail;
  maxres: IOneThumbnail;
}

interface ILocalized {
  title: string;
  description: string;
}
interface ISnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: IThumbnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  defaultLanguage?: string;
  localized: ILocalized;
  defaultAudioLanguage: string;
}

export interface IOneItem {
  kind: string;
  etag: string;
  id: string;
  snippet: ISnippet;
  statistics: IStatistics;
}
