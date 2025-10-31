import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { Product } from '../models/product.model';

/**
 * ProductService - Simulates API calls using RxJS
 *
 * PURPOSE:
 * This service demonstrates RxJS to Signal interop.
 * It provides an Observable stream of products that can be converted to a Signal.
 *
 * EXERCISE:
 * Use toSignal() in AppComponent to convert this Observable to a Signal
 */
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  /**
   * Simulates fetching products from an API
   * Returns an Observable that emits after a 1 second delay (simulating network latency)
   *
   * USAGE IN COMPONENT:
   * import { toSignal } from '@angular/core/rxjs-interop';
   *
   * products = toSignal(this.productService.getProducts(), {
   *   initialValue: [] // Optional: provide initial value while loading
   * });
   */
  getProducts(): Observable<Product[]> {
    // Simulated product data from "API"
    const mockProducts: Product[] = [
      { id: 1, name: '💻 Laptop Pro', price: 1299.99, quantity: 0 },
      { id: 2, name: '🖱️ Wireless Mouse', price: 49.99, quantity: 0 },
      { id: 3, name: '⌨️ Mechanical Keyboard', price: 129.99, quantity: 0 },
      { id: 4, name: '🖥️ 4K Monitor', price: 449.99, quantity: 0 },
      { id: 5, name: '🎧 Noise-Cancelling Headphones', price: 249.99, quantity: 0 },
      { id: 6, name: '📹 HD Webcam', price: 99.99, quantity: 0 },
      { id: 7, name: '🔌 USB-C Hub', price: 59.99, quantity: 0 },
      { id: 8, name: '💾 External SSD 1TB', price: 179.99, quantity: 0 },
    ];

    // Simulate API delay of 1 second
    return of(mockProducts).pipe(
      delay(1000)
    );
  }

  /**
   * BONUS: Simulate a streaming product feed
   * This could be used for real-time product updates
   */
  getProductStream(): Observable<Product> {
    // Students can implement this for advanced exercises
    throw new Error('Not implemented - bonus exercise for students');
  }
}
