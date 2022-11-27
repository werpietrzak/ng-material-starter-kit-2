import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NewProductModel, ProductModel} from "../models/product.model";
import {Observable} from "rxjs";

@Injectable()
export class ProductsService {
  constructor(private _httpClient: HttpClient) {}

  postNewProduct(payload: NewProductModel): Observable<NewProductModel> {
    return this._httpClient.post<NewProductModel>('https://fakestoreapi.com/products', payload);
  }

  getAllProducts(): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>('https://fakestoreapi.com/products');
  }

  getOneProduct(id: string): Observable<ProductModel> {
    return this._httpClient.get<ProductModel>(`https://fakestoreapi.com/products/${id}`);
  }
}
