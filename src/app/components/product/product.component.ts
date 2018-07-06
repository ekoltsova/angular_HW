import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  name: string;
  price: number;
  products: Array<string>;

  constructor() { }

  ngOnInit() {
    this.name = 'shop1';
    this.price = 15;
    this.products = ['item1', 'item2', 'item3'];
  }

  onBuy(productName: string) {
    console.log('you bought', productName);
  }

}
