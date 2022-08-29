import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ToastrFacadeService } from './toastr.facade.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrFacadeService) {}

  public intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request.clone()).pipe(
      tap({
        error: (error: HttpErrorResponse) => {
          this.toastr.displayHttpError(error);
        },
      })
    );
  }
}
