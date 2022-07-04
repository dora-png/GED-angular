import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { LocalDaoService } from './local-dao.service';
import * as constant from './constante';
import { Users } from '../model';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {
    

    private isUserConnected : boolean = false;
    isUserSubject = new Subject<boolean>();

    private token : string = constant.tokenDefaultValue;
    tokenSubject = new Subject<string>();

    private roles : string[] = [];
    rolesSubject = new Subject<string []>();

    constructor(private localDaoService: LocalDaoService, private route: Router) {
        this.isUserConnected = false;
     }

    emitUserConnected(){
        this.isUserSubject.next(this.isUserConnected);
    }

    emitToken(){
        this.tokenSubject.next(this.token);
    }

    emitRoles(){
        this.rolesSubject.next(this.roles);
    }

    logout() {
        this.localDaoService.removeData(constant.currentEmployee);
        this.isUserConnected = false;
        this.emitUserConnected();
        this.token = constant.tokenDefaultValue;
        this.emitToken();
        this.roles = [];
        this.emitRoles();
        this.route.navigate([constant.loginPath]);
    }
    

    enableHeaderBar() {
        this.isUserConnected = true;
        this.emitUserConnected();
    }

    disableHeaderBar() {
        this.isUserConnected = false;
        this.emitUserConnected();
    }

    isConnected(): boolean {
        this.isUserConnected = this.localDaoService.exists(constant.currentEmployee);
        this.emitUserConnected();
        return this.isUserConnected;
    }

    //Gestion des employés
    connectEmployee(user: Users, remember: boolean) {
        this.localDaoService.save(constant.currentEmployee, user);
        this.isUserConnected = true;
        this.emitUserConnected();
    }

    saveToken(data: string):boolean{
        return this.setToken(data);
    }

    private setToken(data: string): boolean{
        if(data != null && data.startsWith(constant.prefix) && data.endsWith(constant.sufix)){
            this.token=data;
            this.emitToken();
            let token:string = data.replace(constant.prefix,'').replace(constant.sufix,'');
            const helper = new JwtHelperService();
            const decodedUserToken = helper.decodeToken(token);
            this.setRoles(decodedUserToken.roles);
            this.enableHeaderBar();
            return true;
        }else{
            this.disableHeaderBar();
            return false;
        }
    }

    getToken(): string{
        let token: string = this.token;
        this.emitToken();
        return token;
    }

    private setRoles(roles: string[]){
        console.log(roles);
        this.roles=roles;
        this.emitRoles();
    }

    getRoles(role: string): boolean{
        if(this.roles.includes(role)){
            this.emitRoles();
            return true;
        }else{
            this.emitRoles();
            return false;
        }
    }

    getAllRoles(): string[]{
        let roles: string[] = this.roles;
        this.emitRoles();
        return roles;
    }

    onLogOut5S(){
        setTimeout(()=>{
            this.logout();
          }, 5000);
    }

}
