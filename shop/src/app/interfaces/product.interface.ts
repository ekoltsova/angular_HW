import { Category } from '../models/product.model';

export interface IProduct {
    name: string;
    description: string;
    price?: number;
    category?: Category;
    isAvailable?: boolean;
}
