import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  IsLoggedIn() {
    return localStorage.getItem('username') != null;
  }
}
