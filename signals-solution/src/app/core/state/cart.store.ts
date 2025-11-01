import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartStore {
  private _products = signal<Product[]>([
    { id: 1, name: 'Laptop', price: 999.99, quantity: 1 },
    { id: 2, name: 'Mouse', price: 29.99, quantity: 2 },
    { id: 3, name: 'Keyboard', price: 79.99, quantity: 1 },
    { id: 4, name: 'Monitor', price: 299.99, quantity: 1 }
  ]);

  products = this._products.asReadonly();

  incrementQuantity(productId: number): void {
    this._products.update(products =>
      products.map(product =>
        product.id === productId
          ? { ...product, quantity: (product.quantity || 0) + 1 }
          : product
      )
    );
  }
}
