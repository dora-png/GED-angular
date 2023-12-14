import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse, HttpErrorResponse
} from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import * as constant from './constante';
import { AuthenticationService } from './authentication.service';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {


  constructor(
    private authenticationService: AuthenticationService,
    private loaderService: LoaderService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    /*if (this.authenticationService.getToken() !=constant.tokenDefaultValue ) {
        request = request.clone({
          setHeaders: { Authorization: this.authenticationService.getToken() }
        });
    }*/
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            if(event.headers.has(constant.headerAuthori) != null ) {
              this.authenticationService.saveToken(event.headers.get(constant.headerAuthori)!)
            }
          }
          if (event instanceof HttpErrorResponse) {
            if(event.headers.has(constant.headerAuthori) != null ) {
              this.authenticationService.saveToken(event.headers.get(constant.headerAuthori)!)
            }
          }     
          return event;
        }
      )
    );
  }
}
