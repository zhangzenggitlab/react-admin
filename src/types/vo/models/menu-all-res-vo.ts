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



/**
 * 
 * @export
 * @interface MenuAllResVo
 */
export interface MenuAllResVo {
    /**
     * 
     * @type {number}
     * @memberof MenuAllResVo
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof MenuAllResVo
     */
    name?: string;
    /**
     * 
     * @type {Array<MenuAllResVo>}
     * @memberof MenuAllResVo
     */
    children?: Array<MenuAllResVo>;
}

