import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { AuthenticationService } from "./authentication.service";

@Injectable()
export class AuthGuard implements CanActivate  {

    isConnected : boolean = false;
    constructor(private authService: AuthenticationService, private authenticationService: AuthenticationService,
        private router: Router
){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        this.authService.isUserSubject.subscribe(
            (isConnected: boolean)=>{
                this.isConnected = isConnected;              
            }
        );
        this.authService.emitUserConnected();
        if(this.isConnected){
            return true;
        }else{
            this.authenticationService.logout();
            this.router.navigate(['/login']);

        }
        throw new Error("Method not implemented.");
    }

   

}