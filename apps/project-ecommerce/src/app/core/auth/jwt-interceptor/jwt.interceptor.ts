import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'apps/project-ecommerce/src/environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  public intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const tokenFromStorage = sessionStorage.getItem('token');
    // TODO change the implementation

    const isApiUrl = request.url.startsWith(environment.API_URL);

    if (isApiUrl && tokenFromStorage) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${tokenFromStorage}` },
      });
    }

    return next.handle(request);
  }
}
