import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';
import { Product, Category } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  getAddedProducts(): Array<IProduct> {
    return [
      new Product('product1', 'it is product', 10, Category.book, true),
      new Product('product2', 'it is product', 10, Category.book, false),
      new Product('product3', 'it is product', null, Category.book, true),
      new Product('product4', 'it is product', 10, null, true),
      new Product('product5', 'it is product', 10, Category.book, true),
    ];
  }
}
