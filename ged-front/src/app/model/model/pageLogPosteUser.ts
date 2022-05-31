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
 */
import { LogPosteUser } from './logPosteUser';
import { PageableObject } from './pageableObject';
import { Sort } from './sort';

export interface PageLogPosteUser { 
    totalPages?: number;
    totalElements?: number;
    size?: number;
    content?: Array<LogPosteUser>;
    number?: number;
    sort?: Sort;
    first?: boolean;
    last?: boolean;
    numberOfElements?: number;
    pageable?: PageableObject;
    empty?: boolean;
}