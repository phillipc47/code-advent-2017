import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class HttpService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(tap(event => {
      if (event instanceof HttpResponse) {
        console.log('---> status:', event.status);
        console.log('---> filter:', req.params.get('filter'));
      }
    }));

  }

}
