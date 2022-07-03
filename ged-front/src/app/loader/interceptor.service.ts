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
      return next.handle(request).pipe(map((event: HttpEvent<any>) => {
        return event;
      }));
    }else if(request.method==="put"){
      this.loaderService.setGetLoading(true, request.url);
      return next.handle(request).pipe(map((event: HttpEvent<any>) => {
        return event;
      }));
      
    }else if(request.method==="delete"){
      this.loaderService.setGetLoading(true, request.url);
      return next.handle(request).pipe(map((event: HttpEvent<any>) => {
        return event;
      }));     
    }else if(request.method==="get"){
      this.loaderService.setGetLoading(true, request.url);
      return next.handle(request).pipe(map((event: HttpEvent<any>) => {
        return event;
      }));
    }else{
      return next.handle(request).pipe(map((event: HttpEvent<any>) => {
        return event;
      }));
    }

  }
}
