import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PostInterceptor implements HttpInterceptor {

  constructor() {}

  authToken: string = 'myBlogPost';

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    request = request.clone({
      setHeaders: {
        'Content-Type':'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.authToken}`
      }
    });
    return next.handle(request);
  }
}
