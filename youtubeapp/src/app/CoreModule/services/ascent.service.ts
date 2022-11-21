import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AscentService {
  public ascent$ = new Subject<boolean>();

  public changeAscent(ascent: boolean) {
    this.ascent$.next(ascent);
  }
}
