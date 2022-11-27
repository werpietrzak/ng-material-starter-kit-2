import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NewProductModel} from "../models/product.model";
import {Observable} from "rxjs";

@Injectable()
export class ProductsService {
  constructor(private _httpClient: HttpClient) {}

  postNewProduct(payload: NewProductModel): Observable<NewProductModel> {
    return this._httpClient.post<NewProductModel>('https://fakestoreapi.com/products', payload);
  }
}
