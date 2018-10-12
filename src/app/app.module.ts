import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InventoryRootComponent } from './inventory-root/inventory-root.component';
import { ProductListComponent } from './inventory-root/product-list/product-list.component';
import { ProductRowComponent } from './inventory-root/product-row/product-row.component';
import { ProductImageComponent } from './inventory-root/product-image/product-image.component';
import { ProductDepartmentComponent } from './inventory-root/product-department/product-department.component';
import { PriceDisplayComponentComponent } from './inventory-root/price-display-component/price-display-component.component';

@NgModule({
  declarations: [
    AppComponent,
    InventoryRootComponent,
    ProductListComponent,
    ProductRowComponent,
    ProductImageComponent,
    PriceDisplayComponentComponent,
    ProductDepartmentComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
