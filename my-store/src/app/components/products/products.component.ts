import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  myShoppingCart: Product[] = [];
  total = 0;
  products: Product[] = [];
  today = new Date();
  date = new Date(2021, 1, 21)

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit() {
    this.productsService.getAllProducts()
    //Angular por defecto maneja un patron llamado Observable
    //Asi que para obtener todos los datos de la peticion hay correr una funcion llamada .subscribe
    .subscribe(data => {
      this.products = data;
    });
  }

  onAddToShoppingCart(product: Product) {
    // this.myShoppingCart.push(product);
    this.storeService.addProduct(product);

    // this.total += product.price;
    // this.total = this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
    this.total = this.storeService.getTotal();
  }
}



// {
//   id: '1',
//   name: 'El mejor juguete',
//   price: 565,
//   image: './assets/images/toy.png'
// },
// {
//   id: '2',
//   name: 'Bicicleta casi nueva',
//   price: 356,
//   image: './assets/images/bike.png'
// },
// {
//   id: '3',
//   name: 'Colleción de albumnes',
//   price: 34,
//   image: './assets/images/album.png'
// },
// {
//   id: '4',
//   name: 'Mis libros',
//   price: 23,
//   image: './assets/images/books.png'
// },{
//   id: '5',
//   name: 'Casa para perro',
//   price: 55000,
//   image: './assets/images/house.png'
// }
