import { Injectable, signal, inject } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Journey } from '../models/journey.model';
import { Vehicle } from '../models/vehicle.model';

/**
 * Exercise A: Signal-based Store
 *
 * This store manages the application state using Angular signals.
 * It provides methods to load data from the API and track loading/error states.
 */
@Injectable({
  providedIn: 'root'
})
export class BoardStore {
  private apiService = inject(ApiService);

  // State signals
  private _journeys = signal<Journey[]>([]);
  private _vehicles = signal<Vehicle[]>([]);
  private _isLoading = signal<boolean>(false);
  private _error = signal<string | null>(null);

  // Public readonly signals (expose state to components)
  readonly journeys = this._journeys.asReadonly();
  readonly vehicles = this._vehicles.asReadonly();
  readonly isLoading = this._isLoading.asReadonly();
  readonly error = this._error.asReadonly();

  /**
   * Load journeys from API
   * Supports query params for testing:
   * - delay: number (milliseconds to delay response)
   * - error: boolean (force error response)
   *
   * Example: loadJourneys({ delay: 1500 }) to test loading state
   * Example: loadJourneys({ error: true }) to test error handling
   */
  loadJourneys(options?: { delay?: number; error?: boolean }): void {
    this._isLoading.set(true);
    this._error.set(null);

    this.apiService.getJourneys(options).subscribe({
      next: (journeys) => {
        this._journeys.set(journeys);
        this._isLoading.set(false);
      },
      error: (err) => {
        console.error('Error loading journeys:', err);
        this._error.set(err.message || 'Failed to load journeys');
        this._isLoading.set(false);
      }
    });
  }

  /**
   * Load vehicles from API
   * Supports query params for testing:
   * - delay: number (milliseconds to delay response)
   * - error: boolean (force error response)
   *
   * Example: loadVehicles({ delay: 1500 }) to test loading state
   * Example: loadVehicles({ error: true }) to test error handling
   */
  loadVehicles(options?: { delay?: number; error?: boolean }): void {
    this._isLoading.set(true);
    this._error.set(null);

    this.apiService.getVehicles(options).subscribe({
      next: (vehicles) => {
        this._vehicles.set(vehicles);
        this._isLoading.set(false);
      },
      error: (err) => {
        console.error('Error loading vehicles:', err);
        this._error.set(err.message || 'Failed to load vehicles');
        this._isLoading.set(false);
      }
    });
  }
}
