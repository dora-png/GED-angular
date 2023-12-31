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
import { Docs } from './docs';
import { Profiles } from './profiles';
import { TypeLiasses } from './typeLiasses';
import { WorkFlow } from './workFlow';

export interface Liasses { 
    idliasse?: number;
    name?: string;
    sigle?: string;
    description?: string;
    dateCreation?: Date;
    archive?: boolean;
    docs?: Array<Docs>;
    workflowid?: WorkFlow;
    profileid?: Profiles;
    typeliasse?: TypeLiasses;
}