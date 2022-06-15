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
    if(request.method==="post"){
      this.loaderService.setGetLoading(true, request.url);
      return next.handle(request)
      .pipe(catchError<HttpEvent<HttpErrorResponse>, any>((err: HttpErrorResponse) => {
        this.loaderService.setGetLoading(false, request.url);
        console.log(err)
        return err;
      }))
      .pipe(
        map((evt: any) => {        
          if (evt instanceof HttpResponse) {
            this.loaderService.setGetLoading(false, request.url);
          }
          return evt;
      })
      );
    }else if(request.method==="put"){
      this.loaderService.setGetLoading(true, request.url);
      return next.handle(request)
      .pipe(catchError<HttpEvent<HttpErrorResponse>, any>((err: HttpErrorResponse) => {
        this.loaderService.setGetLoading(false, request.url);
        //this.toastr.error(err.error, "Error "+err.status);
        return err;
      }))
      .pipe(
        map((evt: any) => {        
          if (evt instanceof HttpResponse) {
            this.loaderService.setGetLoading(false, request.url);
          }
          return evt;
      })
      );
      
    }else if(request.method==="delete"){
      this.loaderService.setGetLoading(true, request.url);
      return next.handle(request)
      .pipe(catchError<HttpEvent<HttpErrorResponse>, any>((err: HttpErrorResponse) => {
        this.loaderService.setGetLoading(false, request.url);
        //this.toastr.error(err.error, "Error "+err.status);
        return err;
      }))
      .pipe(
        map((evt: any) => {        
          if (evt instanceof HttpResponse) {
            this.loaderService.setGetLoading(false, request.url);
          }
          return evt;
      })
      );      
    }else if(request.method==="get"){
      this.loaderService.setGetLoading(true, request.url);
      return next.handle(request)
      .pipe(catchError<HttpEvent<HttpErrorResponse>, any>((err: HttpErrorResponse) => {
        this.loaderService.setGetLoading(false, request.url);
        //this.toastr.error(err.error, "Error "+err.status);
        return err;
      }))
      .pipe(
        map((evt: any) => {        
          if (evt instanceof HttpResponse) {
            this.loaderService.setGetLoading(false, request.url);
          }
          return evt;
      })
      );
    }else{
      return next.handle(request)
      .pipe(catchError<HttpEvent<HttpErrorResponse>, any>((err: HttpErrorResponse) => {
        return err;
      }))
      .pipe(
        map((evt: any) => {        
          if (evt instanceof HttpResponse) {
          }
          return evt;
      })
      );
    }

  }
}
