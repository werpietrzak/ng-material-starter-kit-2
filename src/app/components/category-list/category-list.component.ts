import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {CategoriesService} from "../../services/categories.service";

@Component({
  selector: 'app-category-list',
  styleUrls: ['./category-list.component.scss'],
  templateUrl: './category-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryListComponent {
  constructor(private _categoriesService: CategoriesService) {}

  categories$ = this._categoriesService.getAllProducts();
}
