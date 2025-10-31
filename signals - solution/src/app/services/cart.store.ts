import { Injectable, signal, computed } from '@angular/core';
import { Product, QuantityUpdate } from '../models/product.model';

/**
 * CartStore Service - BONUS EXERCISE
 *
 * INSTRUCTIONS:
 * This is an optional bonus to refactor your signal logic into a centralized store.
 * Instead of managing signals in the component, move them here for better separation of concerns.
 *
 * STEPS:
 * 1. Move the products signal from AppComponent to this service
 * 2. Move computed signals (totalPrice, totalItems) here
 * 3. Move the onQuantityChange logic here as a method
 * 4. Inject this service in AppComponent and use it instead of local signals
 *
 * BENEFITS:
 * - Centralized state management
 * - Reusable across multiple components
 * - Easier testing
 * - Clear separation of concerns
 */
@Injectable({
  providedIn: 'root'
})
export class CartStore {

  // TODO BONUS 1: Move products signal here
  // private readonly _products = signal<Product[]>([...]);

  // TODO BONUS 2: Create a public readonly accessor
  // readonly products = this._products.asReadonly();

  // TODO BONUS 3: Move computed signals here
  // readonly totalPrice = computed(() => { ... });
  // readonly totalItems = computed(() => { ... });

  constructor() {
    // TODO BONUS 4: Optional - Set up effects here
    // effect(() => { console.log('Store: Total changed:', this.totalPrice()); });
  }

  /**
   * TODO BONUS 5: Implement updateQuantity method
   * This should update the products signal when quantity changes
   */
  updateQuantity(update: QuantityUpdate): void {
    // TODO: Implement
    /*
    this._products.update(products =>
      products.map(p =>
        p.id === update.productId
          ? { ...p, quantity: update.newQuantity }
          : p
      )
    );
    */
  }

  /**
   * TODO BONUS 6: Implement loadProducts method
   * This could accept products from a service and set them in the signal
   */
  loadProducts(products: Product[]): void {
    // TODO: Implement
    // this._products.set(products);
  }

  /**
   * TODO BONUS 7: Add any other useful methods
   * Examples:
   * - clearCart()
   * - addProduct(product: Product)
   * - removeProduct(id: number)
   */
}
