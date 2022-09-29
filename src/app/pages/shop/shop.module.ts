import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { FilterComponent } from './components/filter/filter.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { SearchComponent } from './components/search/search.component';

import {StoreModule} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {reducers, effects} from './store';
//import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    ShopComponent,
    FilterComponent,
    PaginatorComponent,
    ProductComponent,
    ProductsComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    
    StoreModule.forFeature('shop', reducers),
    EffectsModule.forFeature(effects),

  ]
})
export class ShopModule { }
