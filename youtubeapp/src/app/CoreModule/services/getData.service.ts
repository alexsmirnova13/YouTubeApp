import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { IAbstractDataEl } from '../models/abstract.model';
import { IResponse } from '../models/response.models';
import { ApiService } from './api.service';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  data: IAbstractDataEl[] = [];

  constructor(
    private apiService: ApiService,
    private http: HttpClient,
    private storeService: StoreService,
  ) {}

  getData(string: string) {
    return this.apiService.getUsers(string).subscribe((data) => {
      const allCards = data.items.map((el: any) => {
        const resultAbstract: IAbstractDataEl = {
          title: el.snippet.title,
          viewCount: el.statistics.viewCount,
          likeCount: el.statistics.likeCount,
          dislikeCount: el.statistics.dislikeCount,
          thumbnail: el.snippet.thumbnails.medium.url,
          channelTitle: el.snippet.channelTitle,
          date: el.snippet.publishedAt,
          id: el.id,
          description: el.snippet.description,
          largePic: el.snippet.thumbnails.maxres?.url,
        };
        return resultAbstract;
      });
      this.storeService.changeStore(allCards);
      return allCards;
    });
  }

  getVideoById(id: string) {
    const params = new HttpParams().set('id', id).set('part', 'snippet,statistics');
    console.log(id);
    return this.http.get<IResponse>('videos/', { params }).pipe(
      map(({ items }) => {
        if (items.length) {
          return items[0];
        } else {
          throw new Error('ошибка');
        }
      }),
    );
  }

  setData(newData: IAbstractDataEl[]) {
    this.data = newData;
  }
}
