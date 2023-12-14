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
    /*

    private isUserConnected : boolean = false;
    isUserSubject = new Subject<boolean>();

      constructor(private localDaoService: LocalDaoService, private route: Router,    
        private toastr: ToastrService) {
        this.isUserConnected = false;
     }

    emitUserConnected(){
        this.isUserSubject.next(this.isUserConnected);
    }

    logout() {
        this.localDaoService.removeData(constant.currentEmployee);
        this.isUserConnected = false;
        this.emitUserConnected();
        this.localDaoService.removeAllData();
        this.route.navigate([constant.loginPath]);
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
            this.localDaoService.save(constant.token,data);
            const helper = new JwtHelperService();
            const decodedUserToken = helper.decodeToken(
                data.replace(constant.prefix,constant.tokenDefaultValue)
                    .replace(constant.sufix,constant.tokenDefaultValue)
            );
            this.setRoles(decodedUserToken.roles);
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
            this.setcolor(decodedUserToken.color);
            this.setName(decodedUserToken.name);            
            this.setSigle(decodedUserToken.sigle);            
            this.enableHeaderBar();
            return true;
    }

    getToken(): string{
       return this.localDaoService.getToken();
    }

    private setRoles(roles: string[]){
        this.localDaoService.save("roles", roles);
    }

    private setlogin(login: string){
        this.localDaoService.save(constant.login,login);
    }

    getLogin(): string{
        return this.localDaoService.getLogin();
     }

    private setcolor(color: string){
        this.localDaoService.save(constant.color,color);
    }

    getColor(): string{
        return this.localDaoService.getColor();
     }


    private setName(name: string){
        this.localDaoService.save(constant.name,name);
    }

    getName(): string{
        return this.localDaoService.getName();
     }

    private setSigle(sigle: string){
        this.localDaoService.save(constant.sigle,sigle);
    }

    getSigle(): string{
        return this.localDaoService.getSigle();
     }

    getRoles(role: string): boolean{
        if(this.localDaoService.getRole().includes(role)){
            return true;
        }else{
            return false;
        }
    }

    getAllRoles(): string[]{
        return this.localDaoService.getRole();
    }

    onLogOut5S(message: string){
        this.toastr.warning(message,constant.warning);
        setTimeout(()=>{
            this.logout();
          }, 5000);
    }*/
    private isUserConnected : boolean = false;
    isUserSubject = new Subject<boolean>();

    private token : string = constant.tokenDefaultValue;
    tokenSubject = new Subject<string>();

    private roles : string[] = [];
    rolesSubject = new Subject<string []>();
    loginUser : string = "";

    private login : string = "";
    loginSubject = new Subject<string >();

    private color : string = "aqua";
    colorSubject = new Subject<string >(); 

    private name : string = "";
    nameSubject = new Subject<string >();

    private sigle : string = "";
    sigleSubject = new Subject<string >();

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

    emitColor(){
        this.colorSubject.next(this.color);
    }

    emitName(){
        this.nameSubject.next(this.name);
    }

    emitSigle(){
        this.sigleSubject.next(this.sigle);
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
        this.color = "aqua";
        this.emitColor();
        this.name = "";
        this.emitName();
        this.sigle = "";
        this.emitSigle();
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
            this.loginUser = decodedUserToken.sub;
            this.setlogin(decodedUserToken.sub);
            this.setcolor(decodedUserToken.color);
            this.setname(decodedUserToken.name);            
            this.setsigle(decodedUserToken.sigle);
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

    private setcolor(color: string){
        this.color=color;
        this.emitColor();
    }

    private setname(name: string){
        this.name=name;
        this.emitName();
    }

    private setsigle(sigle: string){
        this.sigle=sigle;
        this.emitSigle();
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
