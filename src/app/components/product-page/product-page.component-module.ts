import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './product-page.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ProductPageComponent],
  providers: [],
  exports: [ProductPageComponent]
})
export class ProductPageComponentModule {
}
