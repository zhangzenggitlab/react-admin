// tslint:disable
/**
 * admin
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { UserListResVo } from './user-list-res-vo';

/**
 * 
 * @export
 * @interface ResponseUserListResVo
 */
export interface ResponseUserListResVo {
    /**
     * 
     * @type {number}
     * @memberof ResponseUserListResVo
     */
    code?: number;
    /**
     * 
     * @type {UserListResVo}
     * @memberof ResponseUserListResVo
     */
    data?: UserListResVo;
    /**
     * 
     * @type {string}
     * @memberof ResponseUserListResVo
     */
    msg?: string;
}

