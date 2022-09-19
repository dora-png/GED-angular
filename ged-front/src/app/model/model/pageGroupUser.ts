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
import { GroupUser } from './groupUser';
import { PageableObject } from './pageableObject';
import { Sort } from './sort';

export interface PageGroupUser { 
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: Array<GroupUser>;
    number?: number;
    sort?: Sort;
    first?: boolean;
    last?: boolean;
    numberOfElements?: number;
    pageable?: PageableObject;
    empty?: boolean;
}