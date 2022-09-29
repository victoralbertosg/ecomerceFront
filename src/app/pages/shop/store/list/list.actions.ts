import {Action} from '@ngrx/store';
import {Pagination} from './list.models';
import {HttpParams} from '@angular/common/http';
import { Type } from '@angular/core';

export enum Types{
    READ='[Producto] Read:Success',
    READ_SUCCESS='[Producto] Read:Success',
    READ_ERROR='[Producto] Read:Error',
}

export class Read implements Action{
    readonly type=Types.READ;
    constructor(public paginationRequest: HttpParams, public paramsUrl:string){}    
}
export class ReadSuccess implements Action{
    readonly type=Types.READ_SUCCESS;
    constructor(public pagination: Pagination | any){}
}
export class ReadError implements Action{
    readonly type=Types.READ_ERROR;
    constructor(public eror:string){}    
}

export type All= Read|ReadSuccess|ReadError;