import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {CategoryListComponent} from "./components/category-list/category-list.component";
import {CategoryListComponentModule} from "./components/category-list/category-list.component-module";
import {CategoriesServiceModule} from "./services/categories.service-module";
import {NewProductFormComponent} from "./components/new-product-form/new-product-form.component";
import {NewProductFormComponentModule} from "./components/new-product-form/new-product-form.component-module";
import {ProductsServiceModule} from "./services/products.service-module";

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'categories', component: CategoryListComponent },
    { path: 'add-product', component: NewProductFormComponent },
  ]),
    CategoryListComponentModule,
    CategoriesServiceModule,
    NewProductFormComponentModule,
    ProductsServiceModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
