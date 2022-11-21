import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoggedService {
  public logged$ = new Subject<boolean>();

  public changeLogged(logged: boolean) {
    this.logged$.next(logged);
  }
}
