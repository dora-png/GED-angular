import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { AuthenticationService } from "./authentication.service";
import * as constant from './constante';

@Injectable()
export class AuthGuard implements CanActivate  {

    isConnected : boolean = false;
    constructor(private authService: AuthenticationService,
        private router: Router
){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        this.authService.isUserSubject.subscribe(
            (isConnected: boolean)=>{
                this.isConnected = isConnected;              
            }
        );
        //console.log(route);
        this.authService.emitUserConnected();
        if(this.isConnected){
            return true;
        }else{
            //return true;
            
       // console.log(route);
            this.authService.logout();
            this.router.navigate([constant.loginPath]);

        }
        throw new Error("Method not implemented.");
    }

   

}