import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getUsers(string: string): Observable<any> {
    const params = new HttpParams()
      .set('type', 'video')
      .set('part', 'snippet')
      .set('maxResults', 15)
      .set('q', string);
    return this.http.get('search/', { params }).pipe(
      switchMap((response: any) => {
        const { items } = response;
        const itemsId = items.map((item: any) => item.id.videoId).join(',');
        const secondParams = new HttpParams().set('id', itemsId).set('part', 'snippet,statistics');
        return this.http.get('videos/', { params: secondParams });
      }),
    );
  }
}
