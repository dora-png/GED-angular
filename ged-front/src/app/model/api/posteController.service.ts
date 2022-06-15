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

import { PagePostes } from '../model/pagePostes';
import { Postes } from '../model/postes';
import { PostesAdduserBody } from '../model/postesAdduserBody';
import { Structures } from '../model/structures';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class PosteControllerService {

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
     * @param body 
     * @param posteName 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public add5(body: Postes, posteName: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public add5(body: Postes, posteName: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public add5(body: Postes, posteName: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public add5(body: Postes, posteName: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling add5.');
        }

        if (posteName === null || posteName === undefined) {
            throw new Error('Required parameter posteName was null or undefined when calling add5.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (posteName !== undefined && posteName !== null) {
            queryParameters = queryParameters.set('posteName', <any>posteName);
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
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<any>('post',`${this.basePath}/postes/add`,
            {
                body: body,
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
     * @param body 
     * @param posteName 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addSubPoste(body: Postes, posteName: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public addSubPoste(body: Postes, posteName: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public addSubPoste(body: Postes, posteName: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public addSubPoste(body: Postes, posteName: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addSubPoste.');
        }

        if (posteName === null || posteName === undefined) {
            throw new Error('Required parameter posteName was null or undefined when calling addSubPoste.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (posteName !== undefined && posteName !== null) {
            queryParameters = queryParameters.set('posteName', <any>posteName);
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
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<any>('post',`${this.basePath}/poste/add-subposte`,
            {
                body: body,
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
     * @param body 
     * @param posteName 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addUser(body: PostesAdduserBody, posteName: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public addUser(body: PostesAdduserBody, posteName: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public addUser(body: PostesAdduserBody, posteName: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public addUser(body: PostesAdduserBody, posteName: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addUser.');
        }

        if (posteName === null || posteName === undefined) {
            throw new Error('Required parameter posteName was null or undefined when calling addUser.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (posteName !== undefined && posteName !== null) {
            queryParameters = queryParameters.set('posteName', <any>posteName);
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
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<any>('post',`${this.basePath}/postes/add-user`,
            {
                body: body,
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
     * @param id 
     * @param posteName 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public delete4(id: number, posteName: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public delete4(id: number, posteName: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public delete4(id: number, posteName: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public delete4(id: number, posteName: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling delete4.');
        }

        if (posteName === null || posteName === undefined) {
            throw new Error('Required parameter posteName was null or undefined when calling delete4.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (id !== undefined && id !== null) {
            queryParameters = queryParameters.set('id', <any>id);
        }
        if (posteName !== undefined && posteName !== null) {
            queryParameters = queryParameters.set('posteName', <any>posteName);
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

        return this.httpClient.request<any>('delete',`${this.basePath}/postes/delete`,
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
     * @param page 
     * @param size 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findAll6(page?: number, size?: number, observe?: 'body', reportProgress?: boolean): Observable<PagePostes>;
    public findAll6(page?: number, size?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PagePostes>>;
    public findAll6(page?: number, size?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PagePostes>>;
    public findAll6(page?: number, size?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
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

        return this.httpClient.request<PagePostes>('get',`${this.basePath}/postes/all`,
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
     * @param structure 
     * @param page 
     * @param size 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findAllStructure(structure: number, page?: number, size?: number, observe?: 'body', reportProgress?: boolean): Observable<PagePostes>;
    public findAllStructure(structure: number, page?: number, size?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PagePostes>>;
    public findAllStructure(structure: number, page?: number, size?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PagePostes>>;
    public findAllStructure(structure: number, page?: number, size?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (structure === null || structure === undefined) {
            throw new Error('Required parameter structure was null or undefined when calling findAllStructure.');
        }



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (structure !== undefined && structure !== null) {
            queryParameters = queryParameters.set('structure', <any>structure);
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

        return this.httpClient.request<PagePostes>('get',`${this.basePath}/postes/search-by-structure`,
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
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findById3(id: number, observe?: 'body', reportProgress?: boolean): Observable<Postes>;
    public findById3(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Postes>>;
    public findById3(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Postes>>;
    public findById3(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findById3.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (id !== undefined && id !== null) {
            queryParameters = queryParameters.set('id', <any>id);
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

        return this.httpClient.request<Postes>('get',`${this.basePath}/postes/fing-by-id`,
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
     * @param body 
     * @param posteName 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public removeSubPoste(body: Postes, posteName: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public removeSubPoste(body: Postes, posteName: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public removeSubPoste(body: Postes, posteName: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public removeSubPoste(body: Postes, posteName: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling removeSubPoste.');
        }

        if (posteName === null || posteName === undefined) {
            throw new Error('Required parameter posteName was null or undefined when calling removeSubPoste.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (posteName !== undefined && posteName !== null) {
            queryParameters = queryParameters.set('posteName', <any>posteName);
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
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<any>('put',`${this.basePath}/poste/delete-subposte`,
            {
                body: body,
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
     * @param name 
     * @param page 
     * @param size 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public searchByName6(name?: string, page?: number, size?: number, observe?: 'body', reportProgress?: boolean): Observable<PagePostes>;
    public searchByName6(name?: string, page?: number, size?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PagePostes>>;
    public searchByName6(name?: string, page?: number, size?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PagePostes>>;
    public searchByName6(name?: string, page?: number, size?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {




        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (name !== undefined && name !== null) {
            queryParameters = queryParameters.set('name', <any>name);
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

        return this.httpClient.request<PagePostes>('get',`${this.basePath}/postes/search-by-name`,
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
     * @param structures 
     * @param niveau 
     * @param page 
     * @param size 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public searchByStructureAndNiveau(structures: Structures, niveau: number, page?: number, size?: number, observe?: 'body', reportProgress?: boolean): Observable<PagePostes>;
    public searchByStructureAndNiveau(structures: Structures, niveau: number, page?: number, size?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PagePostes>>;
    public searchByStructureAndNiveau(structures: Structures, niveau: number, page?: number, size?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PagePostes>>;
    public searchByStructureAndNiveau(structures: Structures, niveau: number, page?: number, size?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (structures === null || structures === undefined) {
            throw new Error('Required parameter structures was null or undefined when calling searchByStructureAndNiveau.');
        }

        if (niveau === null || niveau === undefined) {
            throw new Error('Required parameter niveau was null or undefined when calling searchByStructureAndNiveau.');
        }



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (structures !== undefined && structures !== null) {
            queryParameters = queryParameters.set('structures', <any>structures);
        }
        if (niveau !== undefined && niveau !== null) {
            queryParameters = queryParameters.set('niveau', <any>niveau);
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

        return this.httpClient.request<PagePostes>('get',`${this.basePath}/postes/search-by-structure-and-niveau`,
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
     * @param body 
     * @param posteName 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public update4(body: Postes, posteName: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public update4(body: Postes, posteName: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public update4(body: Postes, posteName: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public update4(body: Postes, posteName: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling update4.');
        }

        if (posteName === null || posteName === undefined) {
            throw new Error('Required parameter posteName was null or undefined when calling update4.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (posteName !== undefined && posteName !== null) {
            queryParameters = queryParameters.set('posteName', <any>posteName);
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
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<any>('put',`${this.basePath}/postes/update`,
            {
                body: body,
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
