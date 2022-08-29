import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToastrFacadeService {
  constructor(private toastr: ToastrService) {}

  public displayHttpError(error: HttpErrorResponse) {
    this.toastr.error(
      error.message,
      `Error ${error.status} (${error.statusText})`
    );
  }
}
