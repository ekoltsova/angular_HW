import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { IProduct } from '../../interfaces/product.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Array<IProduct>;

  constructor(
    public cartService: CartService
  ) { }

  ngOnInit() {
    this.products = this.cartService.getAddedProducts();
  }

}
