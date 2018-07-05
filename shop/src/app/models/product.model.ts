import { IProduct } from '../interfaces/product.interface';

export class Product implements IProduct {
    constructor(
        public name: string,
        public description: string,
        public price?: number,
        public category?: Category,
        public isAvailable?: boolean,
      ) {
        this.name = name;
        this.description = description;
        this.price = price || 0;
        this.category = category || Category.book;
        this.isAvailable = !!isAvailable;
      }
}

export enum Category {
    book = 'book',
    magazine = 'magazine',
    food = 'food',
}
