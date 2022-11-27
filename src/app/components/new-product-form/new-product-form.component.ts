import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-new-product-form',
  styleUrls: ['./new-product-form.component.scss'],
  templateUrl: './new-product-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewProductFormComponent {
  constructor(private _productsService: ProductsService) {}

  form$ = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    price: new FormControl(null, [Validators.required, Validators.min(0.01)]),
  })

  onSubmit(form$: FormGroup): void {
    this._productsService.postNewProduct(form$.value).subscribe();
  }
}
