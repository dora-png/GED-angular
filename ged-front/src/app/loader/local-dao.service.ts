import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable()
export class LocalDaoService {

  constructor() { }

  
  save (key: string, data: any, force: boolean = true, stringify: boolean = true): boolean {
    if (sessionStorage.getItem(key) != null && !force) {
      return false;
    }
    if (stringify) {
      sessionStorage.setItem(key, JSON.stringify(data));
    } else {
      sessionStorage.setItem(key, data);
    }
    return true;
  }
/*
  saveToken (data: any, force: boolean = true, stringify: boolean = true): boolean {
    this.clearMemory();
    if (this.saveAuthorizationToken(data.accessToken) && this.saveAuthentificationToken(data.authentification)) {
      if(this.setSession().employee.isFirstConnection == true){
        this.save('empl_to_define_identifiers', this.setSession());
        return this.setSession().employee.isFirstConnection;
      }else{      
        this.save('empl_temp', this.setSession());
        return this.setSession().employee.isFirstConnection;
      }
    }   
  }


  private saveAuthorizationToken (data: string, force: boolean = true, stringify: boolean = true): boolean {
    if (localStorage.getItem(this.accessTonken) != null && !force) {
      return false;
    }
    if (stringify) {
      localStorage.setItem(this.accessTonken, JSON.stringify(data));
    } else {
      localStorage.setItem(this.accessTonken, data);
    }  
    return true; 
  }

  private saveAuthentificationToken (data: string, force: boolean = true, stringify: boolean = true): boolean {
    if (localStorage.getItem(this.userToken) != null && !force) {
      return false;
    }
    if (stringify) {
      localStorage.setItem(this.userToken, JSON.stringify(data));
    } else {
      localStorage.setItem(this.userToken, data);
    }
    return true;
  }

  private setSession(): models.GlobalEmployee{
    const helper = new JwtHelperService();
    const decodedUserToken = helper.decodeToken(this.getUserToken());
    const decodedAccessToken = helper.decodeToken(this.getAccessToken());
    let globalEmployee: models.GlobalEmployee = {
      employee: decodedUserToken.employee,
      rightsList: decodedAccessToken.rightsList
    };
    return globalEmployee;
  }
  getUserSession(){
    return this.setSession();
  }

  existToken():boolean {
    if(localStorage.getItem(this.userToken) && localStorage.getItem(this.accessTonken)){
      return true;
    }
    return false;
  }

 */
  existSession():boolean {
    if(sessionStorage.getItem("currentEmployee")){
      return true;
    }
    return false;
  }

  cleanSession(){
    sessionStorage.clear();
  }





  exists(key: string): boolean {
    if (sessionStorage.getItem(key)) {
        return true;
    }
    return false;
  }
/*
  getData (key: string, removeItem: boolean = false): any {
    const data: any = sessionStorage.getItem(key);
    if (removeItem) {
      sessionStorage.removeItem(key);
    }
    return data;
  }

  getDataAsJSON (key: string, removeItem: boolean = false): any {
    return JSON.parse(this.getData(key, removeItem));
  }
*/
  removeData (key: string) {
    sessionStorage.removeItem(key);
  }

  removeDataToken () {
    localStorage.clear();
  }
/*
  getAgent (key: string, removeItem: boolean = false): models.Agent {
    return this.getDataAsJSON(key, removeItem);
  }
  
  getDevice (key: string, removeItem: boolean = false): models.Device {
    return this.getDataAsJSON(key, removeItem);
  }
  getAccessRight(key: string, removeItem: boolean = false){
    return this.getDataAsJSON(key, removeItem);
  }
  getEmployeeGroup(key: string, removeItem: boolean = false){
    return this.getDataAsJSON(key, removeItem);
  }
  getEmployeeGroupEmployee(key: string, removeItem: boolean = false){
    return this.getDataAsJSON(key, removeItem);
  }
  getAccessRightEmployeeGroup(key: string, removeItem: boolean = false){
    return this.getDataAsJSON(key, removeItem);
  }

  getSector (key: string, removeItem: boolean = false): models.Sector {
    return this.getDataAsJSON(key, removeItem);
  }
  getRule (key: string, removeItem: boolean = false): models.Rules {
    return this.getDataAsJSON(key, removeItem);
  }
  getDistrict (key: string, removeItem: boolean = false): models.District{
    return this.getDataAsJSON(key, removeItem);
  }
  getUploadResponse (key: string, removeItem: boolean = false): models.UploadResponse {
    return this.getDataAsJSON(key, removeItem);
  }

  getSite (key: string, removeItem: boolean = false): models.Site {
    return this.getDataAsJSON(key, removeItem);
  }

  getEmployee (key: string, removeItem: boolean = false): models.Employee {
    return this.getDataAsJSON(key, removeItem);
  }

  getGlobalEmployee (key: string, removeItem: boolean = false): models.GlobalEmployee {
    return this.getDataAsJSON(key, removeItem);
  }
  getAlerts (key: string, removeItem: boolean = false): models.Alerts {
    return this.getDataAsJSON(key, removeItem);
  }
  

  checkExpiration(): boolean {
    const tokenuser: string = localStorage.getItem(this.userToken);
    const helperuser = new JwtHelperService();
    const isExpirateuser = helperuser.isTokenExpired(tokenuser);

    const tokenaccess: string = localStorage.getItem(this.accessTonken);
    const helperaccess = new JwtHelperService();
    const isExpirateaccess = helperaccess.isTokenExpired(tokenaccess);
    if(isExpirateuser){
      if(isExpirateaccess){
        this.cleanSession();
        this.clearMemory();
        return isExpirateaccess;
      }else{
        return isExpirateaccess;
      }
    }
    return isExpirateuser;
  }
  getUserToken(): string {    
    return JSON.parse(localStorage.getItem(this.userToken));
  }
  getAccessToken(): string {    
    return JSON.parse(localStorage.getItem(this.accessTonken));
  }
  

  clearMemory () {
    localStorage.clear();
    this.cleanSession();
  }*/
  
}


