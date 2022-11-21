import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class KeyInterceptor implements HttpInterceptor {
  private apiKey: string = 'AIzaSyDL35OgcQRwJ-VUfQ4PjeumnP6cdll0vbo';

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const requestKey = request.clone({
      params: request.params.set('key', this.apiKey),
    });
    return next.handle(requestKey);
  }
}
