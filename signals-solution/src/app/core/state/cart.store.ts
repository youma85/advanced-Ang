import { Injectable, signal, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Injectable({
  providedIn: 'root'
})
export class CartStore {
  private productService = inject(ProductService);

  private _products = signal<Product[]>([]);

  private loadedProducts = toSignal(this.productService.getProducts$(), {
    initialValue: []
  });

  products = this._products.asReadonly();

  totalItems = computed(() =>
    this._products().reduce((sum, product) => sum + (product.quantity || 0), 0)
  );

  totalPrice = computed(() =>
    this._products().reduce((sum, product) => sum + (product.price * (product.quantity || 0)), 0)
  );

  constructor() {
    effect(() => {
      const items = this.totalItems();
      const price = this.totalPrice();
      console.log(`[CartStore] Total changed: ${items} items, ${price.toFixed(2)} €`);
    });

    effect(() => {
      const products = this.loadedProducts();
      if (products.length > 0) {
        this._products.set(products);
      }
    });
  }

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
