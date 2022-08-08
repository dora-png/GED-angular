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

import { PageWorkFlow } from '../model/pageWorkFlow';
import { PageWorkFlowProfiles } from '../model/pageWorkFlowProfiles';
import { WorkFlow } from '../model/workFlow';
import { WorkFlowProfiles } from '../model/workFlowProfiles';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class WorkFlowControllerService {

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
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addLiasseToWorkFlow(body: WorkFlow, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public addLiasseToWorkFlow(body: WorkFlow, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public addLiasseToWorkFlow(body: WorkFlow, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public addLiasseToWorkFlow(body: WorkFlow, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addLiasseToWorkFlow.');
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

        return this.httpClient.request<any>('post',`${this.basePath}/workflow/add-liasse-in-workflow`,
            {
                body: body,
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
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addPosteToWorkFlow(body: Array<WorkFlowProfiles>, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public addPosteToWorkFlow(body: Array<WorkFlowProfiles>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public addPosteToWorkFlow(body: Array<WorkFlowProfiles>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public addPosteToWorkFlow(body: Array<WorkFlowProfiles>, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addPosteToWorkFlow.');
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

        return this.httpClient.request<any>('post',`${this.basePath}/workflow/add-profile-in-workflow`,
            {
                body: body,
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
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addWorkFlow(body: WorkFlow, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public addWorkFlow(body: WorkFlow, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public addWorkFlow(body: WorkFlow, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public addWorkFlow(body: WorkFlow, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addWorkFlow.');
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

        return this.httpClient.request<any>('post',`${this.basePath}/workflow/add`,
            {
                body: body,
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
     * @param idWorkFlow 
     * @param page 
     * @param size 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public allProfilesInWorkFlow(idWorkFlow: number, page?: number, size?: number, observe?: 'body', reportProgress?: boolean): Observable<PageWorkFlowProfiles>;
    public allProfilesInWorkFlow(idWorkFlow: number, page?: number, size?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageWorkFlowProfiles>>;
    public allProfilesInWorkFlow(idWorkFlow: number, page?: number, size?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageWorkFlowProfiles>>;
    public allProfilesInWorkFlow(idWorkFlow: number, page?: number, size?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (idWorkFlow === null || idWorkFlow === undefined) {
            throw new Error('Required parameter idWorkFlow was null or undefined when calling allProfilesInWorkFlow.');
        }



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (idWorkFlow !== undefined && idWorkFlow !== null) {
            queryParameters = queryParameters.set('idWorkFlow', <any>idWorkFlow);
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

        return this.httpClient.request<PageWorkFlowProfiles>('get',`${this.basePath}/workflow/all-by-workflow`,
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
     * @param idPostes 
     * @param page 
     * @param size 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public allWorkFlowInProfiles(idPostes: number, page?: number, size?: number, observe?: 'body', reportProgress?: boolean): Observable<PageWorkFlowProfiles>;
    public allWorkFlowInProfiles(idPostes: number, page?: number, size?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageWorkFlowProfiles>>;
    public allWorkFlowInProfiles(idPostes: number, page?: number, size?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageWorkFlowProfiles>>;
    public allWorkFlowInProfiles(idPostes: number, page?: number, size?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (idPostes === null || idPostes === undefined) {
            throw new Error('Required parameter idPostes was null or undefined when calling allWorkFlowInProfiles.');
        }



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (idPostes !== undefined && idPostes !== null) {
            queryParameters = queryParameters.set('idPostes', <any>idPostes);
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

        return this.httpClient.request<PageWorkFlowProfiles>('get',`${this.basePath}/workflow/all-by-profile`,
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
    public findAllWorkFlow(page?: number, size?: number, observe?: 'body', reportProgress?: boolean): Observable<PageWorkFlow>;
    public findAllWorkFlow(page?: number, size?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageWorkFlow>>;
    public findAllWorkFlow(page?: number, size?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageWorkFlow>>;
    public findAllWorkFlow(page?: number, size?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



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

        return this.httpClient.request<PageWorkFlow>('get',`${this.basePath}/workflow/all`,
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
    public findById(id: number, observe?: 'body', reportProgress?: boolean): Observable<WorkFlow>;
    public findById(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<WorkFlow>>;
    public findById(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<WorkFlow>>;
    public findById(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findById.');
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

        return this.httpClient.request<WorkFlow>('get',`${this.basePath}/workflow/find-by-id`,
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
     * @param name 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findByName(name: string, observe?: 'body', reportProgress?: boolean): Observable<WorkFlow>;
    public findByName(name: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<WorkFlow>>;
    public findByName(name: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<WorkFlow>>;
    public findByName(name: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling findByName.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (name !== undefined && name !== null) {
            queryParameters = queryParameters.set('name', <any>name);
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

        return this.httpClient.request<WorkFlow>('get',`${this.basePath}/workflow/find-by-name`,
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
     * @param sigle 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findBySigle(sigle: string, observe?: 'body', reportProgress?: boolean): Observable<WorkFlow>;
    public findBySigle(sigle: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<WorkFlow>>;
    public findBySigle(sigle: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<WorkFlow>>;
    public findBySigle(sigle: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (sigle === null || sigle === undefined) {
            throw new Error('Required parameter sigle was null or undefined when calling findBySigle.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (sigle !== undefined && sigle !== null) {
            queryParameters = queryParameters.set('sigle', <any>sigle);
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

        return this.httpClient.request<WorkFlow>('get',`${this.basePath}/workflow/find-by-sigle`,
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
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public removePosteToWorkFlow(body: WorkFlowProfiles, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public removePosteToWorkFlow(body: WorkFlowProfiles, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public removePosteToWorkFlow(body: WorkFlowProfiles, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public removePosteToWorkFlow(body: WorkFlowProfiles, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling removePosteToWorkFlow.');
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

        return this.httpClient.request<any>('post',`${this.basePath}/workflow/remove-profile-in-workflow`,
            {
                body: body,
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
    public searchWorkFlowByName(name: string, page?: number, size?: number, observe?: 'body', reportProgress?: boolean): Observable<PageWorkFlow>;
    public searchWorkFlowByName(name: string, page?: number, size?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageWorkFlow>>;
    public searchWorkFlowByName(name: string, page?: number, size?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageWorkFlow>>;
    public searchWorkFlowByName(name: string, page?: number, size?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling searchWorkFlowByName.');
        }



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

        return this.httpClient.request<PageWorkFlow>('get',`${this.basePath}/workflow/search-by-name`,
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
     * @param sigle 
     * @param page 
     * @param size 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public searchWorkFlowBySigle(sigle: string, page?: number, size?: number, observe?: 'body', reportProgress?: boolean): Observable<PageWorkFlow>;
    public searchWorkFlowBySigle(sigle: string, page?: number, size?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageWorkFlow>>;
    public searchWorkFlowBySigle(sigle: string, page?: number, size?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageWorkFlow>>;
    public searchWorkFlowBySigle(sigle: string, page?: number, size?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (sigle === null || sigle === undefined) {
            throw new Error('Required parameter sigle was null or undefined when calling searchWorkFlowBySigle.');
        }



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (sigle !== undefined && sigle !== null) {
            queryParameters = queryParameters.set('sigle', <any>sigle);
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

        return this.httpClient.request<PageWorkFlow>('get',`${this.basePath}/workflow/search-by-sigle`,
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
     * @param idworkFlow 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateWorkFlowSatus(idworkFlow: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updateWorkFlowSatus(idworkFlow: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updateWorkFlowSatus(idworkFlow: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updateWorkFlowSatus(idworkFlow: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (idworkFlow === null || idworkFlow === undefined) {
            throw new Error('Required parameter idworkFlow was null or undefined when calling updateWorkFlowSatus.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (idworkFlow !== undefined && idworkFlow !== null) {
            queryParameters = queryParameters.set('idworkFlow', <any>idworkFlow);
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

        return this.httpClient.request<any>('post',`${this.basePath}/workflow/update`,
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
