import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  // Se crea un estado inicial para evitar errores y mejorar componentes
  @Input() product: Product = {
    id: '',
    title: '',
    price: 0,
    image: '',
    category: '',
    description: ''
  }

  @Output() addedProduct = new EventEmitter<Product>();

  onAddToCart() {
    this.addedProduct.emit(this.product)
  }
}
