/*import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GroupUser } from '../model';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private domain = 'http://localhost:8082';


  constructor(
    private http: HttpClient
  ) {
  }

  public droitInGroup(id: number, page:number, size: number, status:number): Observable<HttpResponse<any>> {
    const uri = `/group/find-droit-in-group`;
    const headers = new HttpHeaders();
    const params = new HttpParams().append("id",id).append("page",page).append("size",size).append("status",status);
    return this.sendRequest<any>('get', this.domain + uri, headers, params, null);
  }

  public droitToAddInGroup(id: number, page:number, size: number): Observable<HttpResponse<any>> {
    const uri = `/group/find-droit-to-add-in-group`;
    const headers = new HttpHeaders();
    const params = new HttpParams().append("id",id).append("page",page).append("size",size);
    return this.sendRequest<any>('get', this.domain + uri, headers, params, null);
  }

  public droitInGroupByName(id: number, name: string, page:number, size: number, status:number): Observable<HttpResponse<any>> {
    const uri = `/group/find-droit-in-group-by-name`;
    const headers = new HttpHeaders();
    const params = new HttpParams().append("id",id).append("page",page).append("size",size).append("name",name).append("status",status);
    return this.sendRequest<any>('get', this.domain + uri, headers, params, null);
  }

  public droitToAddInGroupByName(id: number, name: string, page:number, size: number): Observable<HttpResponse<any>> {
    const uri = `/group/find-droit-to-add-in-group-by-name`;
    const headers = new HttpHeaders();
    const params = new HttpParams().append("id",id).append("page",page).append("name",name).append("size",size);
    return this.sendRequest<any>('get', this.domain + uri, headers, params, null);
  }

  public profilesInGroup(id: number, page:number, size: number, status:number): Observable<HttpResponse<any>> {
    const uri = `/group/find-profile-in-group`;
    const headers = new HttpHeaders();
    const params = new HttpParams().append("id",id).append("page",page).append("size",size).append("status",status);
    return this.sendRequest<any>('get', this.domain + uri, headers, params, null);
  }

  public profilesToAddInGroup(id: number, page:number, size: number): Observable<HttpResponse<any>> {
    const uri = `/group/find-profile-to-add-in-group`;
    const headers = new HttpHeaders();
    const params = new HttpParams().append("id",id).append("page",page).append("size",size);
    return this.sendRequest<any>('get', this.domain + uri, headers, params, null);
  }

  public profileInGroupByName(id: number, name: string, page:number, size: number, status:number): Observable<HttpResponse<any>> {
    const uri = `/group/find-profile-in-group-by-name`;
    const headers = new HttpHeaders();
    const params = new HttpParams().append("id",id).append("page",page).append("size",size).append("name",name).append("status",status);
    return this.sendRequest<any>('get', this.domain + uri, headers, params, null);
  }

  public profileToAddInGroupByName(id: number, name: string, page:number, size: number): Observable<HttpResponse<any>> {
    const uri = `/group/find-profiles-to-add-in-group-by-name`;
    const headers = new HttpHeaders();
    const params = new HttpParams().append("id",id).append("page",page).append("name",name).append("size",size);
    return this.sendRequest<any>('get', this.domain + uri, headers, params, null);
  }

  public updateGroupUser(body: GroupUser): Observable<HttpResponse<any>> {
    const uri = `/group/update`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<any>('post', this.domain + uri, headers, params, JSON.stringify(body));
  }

  public addDroitToGroupUser(idGroup: number, idDroit:number): Observable<HttpResponse<any>> {
    const uri = `/group/add_droit-to-group`;
    const headers = new HttpHeaders();
    const params = new HttpParams().append("idGroup",idGroup).append("idDroit",idDroit);
    return this.sendRequest<any>('post', this.domain + uri, headers, params, null);
  }

  public removeDroitToGroupUser(idGroup: number, idDroit:number): Observable<HttpResponse<any>> {
    const uri = `/group/delete_droit-to-group`;
    const headers = new HttpHeaders();
    const params = new HttpParams().append("idGroup",idGroup).append("idDroit",idDroit);
    return this.sendRequest<any>('post', this.domain + uri, headers, params, null);
  }

  public addProfileToGroupUser(idGroup: number, idProfile:number): Observable<HttpResponse<any>> {
    const uri = `/group/add_profile-to-group`;
    const headers = new HttpHeaders();
    const params = new HttpParams().append("idGroup",idGroup).append("idProfile",idProfile);
    return this.sendRequest<any>('post', this.domain + uri, headers, params, null);
  }

  public removeProfileToGroupUser(idGroup: number, idProfile:number): Observable<HttpResponse<any>> {
    const uri = `/group/delete_profile-to-group`;
    const headers = new HttpHeaders();
    const params = new HttpParams().append("idGroup",idGroup).append("idProfile",idProfile);
    return this.sendRequest<any>('post', this.domain + uri, headers, params, null);
  }



  private sendRequest<T>(
    method: string, 
    url: string, 
    headers: HttpHeaders, 
    params: HttpParams, 
    body: any): Observable<HttpResponse<T>> {
      let requestObservable!: Observable<HttpResponse<T>>;
    if (method === 'get') {
      requestObservable = this.http.get<T>(
        url,
        {
          headers: headers.set('Accept', 'application/json'),
          params: params,
          observe: 'response'
        }
      );
    } else if (method === 'post') {
      requestObservable = this.http.post<T>(
        url, 
        body, 
        {
          headers: headers.set('Content-Type', 'application/json'),
          params: params,
          observe: 'response'
        }
      );
    } else if (method === 'delete') {
      requestObservable = this.http.delete<T>(
        url,
        {
          headers: headers,
          params: params,
          observe: 'response'
        }
      );
    } else {
    }
    return requestObservable;
  }


}*/
