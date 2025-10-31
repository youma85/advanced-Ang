import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

interface User {
  name: string;
  role: 'admin' | 'user' | 'guest';
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Control Flow Exercise';

  // For *ngIf examples
  isLoggedIn = true;
  showDetails = false;
  errorMessage = '';

  // For *ngFor examples
  products: Product[] = [
    { id: 1, name: 'Laptop', price: 999, inStock: true },
    { id: 2, name: 'Mouse', price: 25, inStock: true },
    { id: 3, name: 'Keyboard', price: 75, inStock: false },
    { id: 4, name: 'Monitor', price: 299, inStock: true }
  ];

  // Empty array for @empty block practice
  emptyList: string[] = [];

  // For *ngSwitch example
  currentUser: User = {
    name: 'John Doe',
    role: 'admin'
  };

  // Methods
  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }

  removeProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }

  changeUserRole(role: 'admin' | 'user' | 'guest') {
    this.currentUser.role = role;
  }

  trackByProductId(index: number, product: Product): number {
    return product.id;
  }
}
