import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {CategoryListComponent} from "./components/category-list/category-list.component";
import {CategoryListComponentModule} from "./components/category-list/category-list.component-module";
import {CategoriesServiceModule} from "./services/categories.service-module";
import {NewProductFormComponent} from "./components/new-product-form/new-product-form.component";
import {NewProductFormComponentModule} from "./components/new-product-form/new-product-form.component-module";
import {ProductsServiceModule} from "./services/products.service-module";
import {ProductListComponent} from "./components/product-list/product-list.component";
import {ProductListComponentModule} from "./components/product-list/product-list.component-module";
import {ProductPageComponent} from "./components/product-page/product-page.component";
import {ProductPageComponentModule} from "./components/product-page/product-page.component-module";

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'categories', component: CategoryListComponent },
    { path: 'add-product', component: NewProductFormComponent },
    { path: 'products-list', component: ProductListComponent },
    { path: 'products/:id', component: ProductPageComponent },
  ]),
    CategoryListComponentModule,
    CategoriesServiceModule,
    NewProductFormComponentModule,
    ProductsServiceModule,
    ProductListComponentModule,
    ProductPageComponentModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
