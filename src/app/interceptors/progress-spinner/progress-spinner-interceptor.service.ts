import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ProgressSpinnerService } from '../../ui-components/progress-spinner/progress-spinner.service';

@Injectable({
  providedIn: 'root'
})
export class ProgressSpinnerInterceptorService implements HttpInterceptor {

  constructor(public _progressSpinnerService:ProgressSpinnerService ) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._progressSpinnerService.isLoading.next(true);
    return next.handle(req).pipe(
      finalize(
        () => {
          this._progressSpinnerService.isLoading.next(false)
        }
      )
    )
  }
}
