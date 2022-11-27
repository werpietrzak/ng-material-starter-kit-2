import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CategoryListComponent } from './category-list.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [MatChipsModule, CommonModule, MatButtonModule, MatIconModule, RouterModule],
  declarations: [CategoryListComponent],
  providers: [],
  exports: [CategoryListComponent]
})
export class CategoryListComponentModule {
}
