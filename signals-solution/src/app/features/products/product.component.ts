import { Component, input, output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../../core/models/product.model';

@Component({
  selector: 'app-product',
  imports: [CurrencyPipe],
  template: `
    <div class="product-item">
      <span>{{ product().name }} - {{ product().price | currency }} (Quantity: {{ product().quantity }})</span>
      <button (click)="increase.emit(product().id)">+</button>
    </div>
  `,
  styles: `
    .product-item {
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
  product = input.required<Product>();
  increase = output<number>();
}
