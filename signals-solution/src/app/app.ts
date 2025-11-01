import { Component, inject } from '@angular/core';
import { ProductComponent } from './features/products/product.component';
import { CartTotalComponent } from './features/cart/cart-total.component';
import { CartStore } from './core/state/cart.store';

@Component({
  selector: 'app-root',
  imports: [ProductComponent, CartTotalComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  store = inject(CartStore);
}
