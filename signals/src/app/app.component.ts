import { Component, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { Product, QuantityUpdate } from './models/product.model';
import { ProductService } from './services/product.service';

/**
 * Main App Component - Product Dashboard
 *
 * EXERCISE INSTRUCTIONS:
 * This component demonstrates Angular Signals concepts:
 *
 * 1. SIGNALS: Create a writable signal for products
 * 2. COMPUTED: Create computed signals for total price and total items
 * 3. EFFECT: Log total price changes to console
 * 4. RxJS INTEROP: Use toSignal() to convert Observable to Signal
 *
 * CURRENT STATE: Basic structure provided, students need to implement signal logic
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private productService: ProductService) {
    // TODO 6: Set up an effect to log total price changes
    // Hint: effect(() => { console.log('Total changed:', this.totalPrice()); })
    // UNCOMMENT THE FOLLOWING LINES:
    /*
    effect(() => {
      console.log('🛒 Cart Total Changed:', this.totalPrice());
    });
    */
  }

  // TODO 1: Create a signal to hold the list of products
  // Hint: Use signal<Product[]>([...initialProducts])
  // For now, we provide initial data. Later you'll replace this with RxJS data
  products = signal<Product[]>([
    { id: 1, name: 'Laptop', price: 999.99, quantity: 0 },
    { id: 2, name: 'Mouse', price: 29.99, quantity: 0 },
    { id: 3, name: 'Keyboard', price: 79.99, quantity: 0 },
    { id: 4, name: 'Monitor', price: 299.99, quantity: 0 },
    { id: 5, name: 'Headphones', price: 149.99, quantity: 0 },
    { id: 6, name: 'Webcam', price: 89.99, quantity: 0 },
  ]);

  // TODO 2: Create a computed signal for total price
  // Hint: Use computed(() => this.products().reduce(...))
  // Calculate: sum of (price * quantity) for all products
  totalPrice = computed(() => {
    // TODO: Implement the calculation
    // UNCOMMENT AND COMPLETE:
    /*
    return this.products().reduce((sum, product) => {
      return sum + (product.price * product.quantity);
    }, 0);
    */
    return 0; // Replace this with actual calculation
  });

  // TODO 3: Create a computed signal for total items count
  // Hint: Use computed(() => this.products().reduce(...))
  // Calculate: sum of all quantities
  totalItems = computed(() => {
    // TODO: Implement the calculation
    // UNCOMMENT AND COMPLETE:
    /*
    return this.products().reduce((sum, product) => {
      return sum + product.quantity;
    }, 0);
    */
    return 0; // Replace this with actual calculation
  });

  /**
   * TODO 4: Implement the quantity update handler
   * This method is called when a ProductComponent emits a quantityChanged event
   *
   * Steps:
   * 1. Find the product by ID in the products signal
   * 2. Update the products signal with the new quantity
   * 3. Remember: signals are immutable, create a new array
   *
   * Hint: Use this.products.update() or this.products.set()
   */
  onQuantityChange(update: QuantityUpdate): void {
    // TODO: Implement this method
    // UNCOMMENT AND COMPLETE:
    /*
    this.products.update(currentProducts =>
      currentProducts.map(product =>
        product.id === update.productId
          ? { ...product, quantity: update.newQuantity }
          : product
      )
    );
    */
  }

  /**
   * BONUS TODO 5: RxJS Interop - Load products from an Observable
   *
   * Steps:
   * 1. Import toSignal from '@angular/core/rxjs-interop'
   * 2. Call this.productService.getProducts()
   * 3. Convert the Observable to a Signal using toSignal()
   * 4. Replace the hardcoded products signal with the signal from the service
   *
   * Example:
   * productsFromService = toSignal(this.productService.getProducts(), { initialValue: [] });
   *
   * Then replace usages of this.products with this.productsFromService
   */
  loadProductsFromService(): void {
    // TODO: Implement RxJS interop here
    console.log('💡 BONUS: Implement RxJS to Signal conversion here');
  }
}
