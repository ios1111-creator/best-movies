import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {delay, finalize} from "rxjs/operators";
import {SpinnerService} from "../shared/loading-spinner/spinner.service";


@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor(private spinnerService: SpinnerService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.params.has('loader') === true) {
      this.spinnerService.isLoading.next(false);

    } else {
      this.spinnerService.isLoading.next(true);

    }

    request = request.clone({
      withCredentials: true
    });
    return next.handle(request).pipe(delay(1500),
      finalize(() => this.spinnerService.hide())
    );
  }

  // return next.handle(request);

  // intercept(req: HttpRequest<any>, next: HttpHandler) {
  //   this.spinnerService.show();
  //   return next.handle(req)
  //     .pipe(
  //       delay(1000),
  //       finalize(() => this.spinnerService.hide())
  //     );
  //
  // }
  }


