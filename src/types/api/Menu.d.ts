declare namespace MenuApi {

  /**
   * 分页列表获取
   */
  interface MenuListParams {
    page: number
    pageSize: number
    name?: string
  }

  type MenuListRes = PageListType<MenuEntity.menu>

  interface MenuAllRes extends Pick<MenuEntity.menu, 'id' | 'parentId' | 'name'> {
    children?: MenuAllRes[]
  }

  /**
   * MenuListResVo
   */
  export interface MenuListResVo {
    children?: ChildElement[];
    id?: number;
    name?: string;
    parentId?: number;
    permission?: string;
    remark?: string;
    sort?: number;
    status?: string;
    type?: string;

    [property: string]: any;
  }

  /**
   * 菜单列表返回参数
   *
   * MenuListResVo
   */
  export interface ChildElement {
    children?: ChildElement[];
    id?: number;
    name?: string;
    parentId?: number;
    permission?: string;
    remark?: string;
    sort?: number;
    status?: string;
    type?: string;

    [property: string]: any;
  }

  /**
   * MenuAllResVo
   */
  export interface MenuAllResVo {
    children?: ChildElement[];
    id?: number;
    name?: string;

    [property: string]: any;
  }

  /**
   * 返回全部菜单树形结构
   *
   * MenuAllResVo
   */
  export interface ChildElement {
    children?: ChildElement[];
    id?: number;
    name?: string;

    [property: string]: any;
  }

  /**
   * MenuAddVo
   */
  export interface MenuAddVo {
    name?: string;
    parentId?: number;
    permission?: string;
    status?: string;
    type?: string;
    [property: string]: any;
  }

  /**
   * MenuUpdateVo
   */
  export interface MenuUpdateVo {
    id?: number;
    name?: string;
    parentId?: number;
    permission?: string;
    status?: string;
    type?: string;
    [property: string]: any;
  }

  /**
   * MenuDeleteVo
   */
  export interface MenuDeleteVo {
    id?: number;
    [property: string]: any;
  }

}