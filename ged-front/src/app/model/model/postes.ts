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
import { Structures } from './structures';

export interface Postes { 
    idposte?: number;
    name?: string;
    description?: string;
    active?: boolean;
    structure?: Structures;
    posteSubalterne?: Array<Postes>;
    posteSuperieur?: Postes;
    groupslistes?: Array<GroupUser>;
    dateCreation?: Date;
}