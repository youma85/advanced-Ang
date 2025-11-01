import { Component } from '@angular/core';
import { ProductComponent } from './features/products/product.component';
import { CartTotalComponent } from './features/cart/cart-total.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductComponent, CartTotalComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Application root component - logic will be added during the training
}
