// este hace que se pueda inyectar en otros componentes y o servicios
import { Injectable } from '@angular/core';
//Observador que permite crear patron para que otros componentes se puedan suscribir apenas reciban un cambio
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShoppingCart: Product[] = [];

  private myCart = new BehaviorSubject<Product[]>([]);
  //A myCart se le genera un subscriptor para exponer un observador con el signo "$""
  //Con el fin de escuchar activamente cambios
  myCart$ = this.myCart.asObservable();

  addProduct(product: Product) {
    this.myShoppingCart.push(product);
    this.myCart.next(this.myShoppingCart)
  }

  getTotal() {
    return this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  }

  getShoppingCart() {
    return this.myShoppingCart;
  }
}
