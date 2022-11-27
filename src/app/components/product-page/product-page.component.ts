import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {ActivatedRoute} from "@angular/router";
import {map, Observable, switchMap} from "rxjs";
import {ProductModel} from "../../models/product.model";

@Component({
  selector: 'app-product-page',
  styleUrls: ['./product-page.component.scss'],
  templateUrl: './product-page.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductPageComponent {
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _productsService: ProductsService,
  ) {}

  params$: Observable<any> = this._activatedRoute.params.pipe(
    map(params => ({
      id: params['id'],
    }))
  );

  details$: Observable<ProductModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._productsService.getOneProduct(data['id']))
  );
}
