import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CartStore } from '../../core/state/cart.store';

@Component({
  selector: 'app-product',
  imports: [CurrencyPipe],
  template: `
    <ul>
      @for (product of store.products(); track product.id) {
        <li>
          {{ product.name }} - {{ product.price | currency }} (Quantity: {{ product.quantity }})
          <button (click)="store.incrementQuantity(product.id)">+</button>
        </li>
      }
    </ul>
  `,
  styles: `
    ul {
      list-style: none;
      padding: 0;
    }
    li {
      margin-bottom: 0.5rem;
      padding: 0.5rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    button {
      padding: 0.25rem 0.75rem;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background-color: #0056b3;
    }
  `
})
export class ProductComponent {
  store = inject(CartStore);
}
