import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse, HttpErrorResponse
} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators'
import { finalize, Observable } from 'rxjs';
import { LoaderService } from './loader.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(
    private loaderService: LoaderService,    
    private toastr: ToastrService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.setLoading(true, request.url);
    return next.handle(request)
      .pipe(catchError<HttpEvent<HttpErrorResponse>, any>((err: HttpErrorResponse) => {
        this.loaderService.setLoading(false, request.url);
        this.toastr.error(err.error.message, "Error "+err.status);
        return err;
      }))
      .pipe(
        map((evt: any) => {          
          if (evt instanceof HttpResponse) {
            this.loaderService.setLoading(false, request.url);
          }
          return evt;
      })
      );
  }
}
