import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts$(): Observable<Product[]> {
    return of([
      { id: 1, name: 'Laptop', price: 999.99, quantity: 1 },
      { id: 2, name: 'Mouse', price: 29.99, quantity: 2 },
      { id: 3, name: 'Keyboard', price: 79.99, quantity: 1 }
    ]);
  }
}
