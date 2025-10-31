import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, QuantityUpdate } from '../../models/product.model';

/**
 * ProductComponent - Child component that displays a single product
 *
 * EXERCISE INSTRUCTIONS:
 * 1. Use @Input() signal to receive product data from parent
 * 2. Use @Output() signal to emit quantity changes to parent
 * 3. Create methods to handle increment/decrement of quantity
 *
 * HINTS:
 * - input() creates a signal-based input
 * - output() creates a signal-based output (similar to EventEmitter)
 * - You can emit events using .emit()
 */
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  // TODO 1: Create an input signal to receive product data
  // Hint: Use input<Product>() or input.required<Product>()
  product = input.required<Product>();

  // TODO 2: Create an output signal to emit quantity updates
  // Hint: Use output<QuantityUpdate>()
  quantityChanged = output<QuantityUpdate>();

  /**
   * TODO 3: Implement increment method
   * Should emit a quantityChanged event with the product id and new quantity (current + 1)
   */
  increment(): void {
    // TODO: Implement this method
    // Hint: this.quantityChanged.emit({ productId: ..., newQuantity: ... })
    const currentProduct = this.product();
    this.quantityChanged.emit({
      productId: currentProduct.id,
      newQuantity: currentProduct.quantity + 1
    });
  }

  /**
   * TODO 4: Implement decrement method
   * Should emit a quantityChanged event with the product id and new quantity (current - 1)
   * Make sure quantity doesn't go below 0
   */
  decrement(): void {
    // TODO: Implement this method
    const currentProduct = this.product();
    if (currentProduct.quantity > 0) {
      this.quantityChanged.emit({
        productId: currentProduct.id,
        newQuantity: currentProduct.quantity - 1
      });
    }
  }
}
