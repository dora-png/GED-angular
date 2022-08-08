import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { LocalDaoService } from './local-dao.service';
import * as constant from './constante';
import { JwtRequest } from '../model';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthenticationService {
    

    private isUserConnected : boolean = false;
    isUserSubject = new Subject<boolean>();

    private token : string = constant.tokenDefaultValue;
    tokenSubject = new Subject<string>();

    private roles : string[] = [];
    rolesSubject = new Subject<string []>();

    private login : string = "";
    loginSubject = new Subject<string >();

    constructor(private localDaoService: LocalDaoService, private route: Router,    
        private toastr: ToastrService) {
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

    emitLogin(){
        this.loginSubject.next(this.login);
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
        this.login = "";
        this.emitLogin();
    }
    

    enableHeaderBar() {
        this.isUserConnected = true;
        this.emitUserConnected();
    }

    disableHeaderBar() {
        this.logout();
    }

    isConnected(): boolean {
        this.isUserConnected = this.localDaoService.exists(constant.currentEmployee);
        this.emitUserConnected();
        return this.isUserConnected;
    }

    //Gestion des employés
    connectEmployee(user: JwtRequest, remember: boolean) {
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
            return false;
        }
    }

    saveUserLogin(data: string):boolean{
            let token:string = data;
            const helper = new JwtHelperService();
            const decodedUserToken = helper.decodeToken(token);
            this.setlogin(decodedUserToken.sub);
            return true;
    }

    getToken(): string{
        let token: string = this.token;
        this.emitToken();
        return token;
    }

    private setRoles(roles: string[]){
        this.roles=roles;
        this.emitRoles();
    }

    private setlogin(login: string){
        this.login=login;
        this.emitLogin();
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

    onLogOut5S(message: string){
        this.toastr.warning(message,constant.warning);
        setTimeout(()=>{
            this.logout();
          }, 5000);
    }

}
