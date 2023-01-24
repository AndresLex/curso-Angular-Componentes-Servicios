import { Injectable } from '@angular/core';
//Servicio propio de angular para hacer request => se pueden hacer inyeccion de dependencias
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() {
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }
}
