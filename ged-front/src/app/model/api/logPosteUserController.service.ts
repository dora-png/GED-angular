/**
 * OpenAPI definition
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { PageLogPosteUser } from '../model/pageLogPosteUser';
import { Postes } from '../model/postes';
import { Profiles } from '../model/profiles';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class LogPosteUserControllerService {

    protected basePath = 'http://localhost:8082';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * 
     * 
     * @param idUser 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public currentPosteOfUser(idUser: number, observe?: 'body', reportProgress?: boolean): Observable<Postes>;
    public currentPosteOfUser(idUser: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Postes>>;
    public currentPosteOfUser(idUser: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Postes>>;
    public currentPosteOfUser(idUser: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (idUser === null || idUser === undefined) {
            throw new Error('Required parameter idUser was null or undefined when calling currentPosteOfUser.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (idUser !== undefined && idUser !== null) {
            queryParameters = queryParameters.set('idUser', <any>idUser);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Postes>('get',`${this.basePath}/logposteuser/currentposte`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param idPoste 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public currentUserOfPoste(idPoste: number, observe?: 'body', reportProgress?: boolean): Observable<Profiles>;
    public currentUserOfPoste(idPoste: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Profiles>>;
    public currentUserOfPoste(idPoste: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Profiles>>;
    public currentUserOfPoste(idPoste: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (idPoste === null || idPoste === undefined) {
            throw new Error('Required parameter idPoste was null or undefined when calling currentUserOfPoste.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (idPoste !== undefined && idPoste !== null) {
            queryParameters = queryParameters.set('idPoste', <any>idPoste);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Profiles>('get',`${this.basePath}/logposteuser/currentuser`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param idPoste 
     * @param page 
     * @param size 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findByPoste(idPoste: number, page?: number, size?: number, observe?: 'body', reportProgress?: boolean): Observable<PageLogPosteUser>;
    public findByPoste(idPoste: number, page?: number, size?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageLogPosteUser>>;
    public findByPoste(idPoste: number, page?: number, size?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageLogPosteUser>>;
    public findByPoste(idPoste: number, page?: number, size?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (idPoste === null || idPoste === undefined) {
            throw new Error('Required parameter idPoste was null or undefined when calling findByPoste.');
        }



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (idPoste !== undefined && idPoste !== null) {
            queryParameters = queryParameters.set('idPoste', <any>idPoste);
        }
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (size !== undefined && size !== null) {
            queryParameters = queryParameters.set('size', <any>size);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<PageLogPosteUser>('get',`${this.basePath}/logposteuser/poste-log`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param idProfile 
     * @param page 
     * @param size 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findByUser(idProfile: number, page?: number, size?: number, observe?: 'body', reportProgress?: boolean): Observable<PageLogPosteUser>;
    public findByUser(idProfile: number, page?: number, size?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageLogPosteUser>>;
    public findByUser(idProfile: number, page?: number, size?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageLogPosteUser>>;
    public findByUser(idProfile: number, page?: number, size?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (idProfile === null || idProfile === undefined) {
            throw new Error('Required parameter idProfile was null or undefined when calling findByUser.');
        }



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (idProfile !== undefined && idProfile !== null) {
            queryParameters = queryParameters.set('idProfile', <any>idProfile);
        }
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (size !== undefined && size !== null) {
            queryParameters = queryParameters.set('size', <any>size);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<PageLogPosteUser>('get',`${this.basePath}/logposteuser/user-log`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
