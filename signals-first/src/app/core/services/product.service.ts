import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts$(): Observable<Product[]> {
    // Simulate API call - will be implemented later
    return of([]);
  }
}
