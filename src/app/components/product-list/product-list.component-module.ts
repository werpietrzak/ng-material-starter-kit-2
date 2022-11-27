import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { ProductListComponent } from './product-list.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule, MatTableModule, RouterModule],
  declarations: [ProductListComponent],
  providers: [],
  exports: [ProductListComponent]
})
export class ProductListComponentModule {
}
