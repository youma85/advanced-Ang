import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CartStore } from '../../core/state/cart.store';

@Component({
  selector: 'app-cart-total',
  imports: [CurrencyPipe],
  template: `
    <div class="cart-total">
      <div class="total-item">
        <span class="label">Total Items:</span>
        <span class="value">{{ store.totalItems() }}</span>
      </div>
      <div class="total-item">
        <span class="label">Total Price:</span>
        <span class="value">{{ store.totalPrice() | currency }}</span>
      </div>
    </div>
  `,
  styles: `
    .cart-total {
      padding: 1rem;
      background-color: #f8f9fa;
      border-radius: 4px;
      border: 1px solid #dee2e6;
    }
    .total-item {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
    }
    .total-item:last-child {
      margin-bottom: 0;
      padding-top: 0.5rem;
      border-top: 2px solid #dee2e6;
      font-weight: bold;
    }
    .label {
      color: #6c757d;
    }
    .value {
      color: #212529;
      font-weight: 500;
    }
  `
})
export class CartTotalComponent {
  store = inject(CartStore);
}
