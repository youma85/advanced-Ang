import { Injectable, signal, computed, inject } from '@angular/core';
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
   * Exercise B: Computed Signals
   *
   * These computed signals derive data from the base signals.
   * They automatically update when their dependencies change.
   */

  // Filter journeys by status 'Scheduled'
  readonly scheduledJourneys = computed(() =>
    this._journeys().filter(journey => journey.status === 'Scheduled')
  );

  // Filter journeys by status 'InProgress'
  readonly inProgressJourneys = computed(() =>
    this._journeys().filter(journey => journey.status === 'InProgress')
  );

  // Filter journeys by status 'Finished'
  readonly finishedJourneys = computed(() =>
    this._journeys().filter(journey => journey.status === 'Finished')
  );

  // Get vehicles that are not assigned to any journey
  readonly availableVehicles = computed(() => {
    const assignedVehicleIds = this._journeys()
      .map(journey => journey.assignedVehicleId)
      .filter((id): id is number => id !== null);

    return this._vehicles().filter(
      vehicle => !assignedVehicleIds.includes(vehicle.id)
    );
  });

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

  /**
   * Exercise C: Immutable State Updates
   *
   * Assign a vehicle to a journey with immutable state updates.
   * Uses update() method on signals to ensure reactivity.
   * Persists the change to the API via PATCH request.
   *
   * @param journeyId - The ID of the journey to update
   * @param vehicleId - The ID of the vehicle to assign
   */
  assignVehicle(journeyId: number, vehicleId: number): void {
    // Update the local state immediately (optimistic update)
    this._journeys.update(currentJourneys => {
      // Create a new array with the updated journey (immutable)
      return currentJourneys.map(journey =>
        journey.id === journeyId
          ? { ...journey, assignedVehicleId: vehicleId }
          : journey
      );
    });

    // Persist the change to the API
    this.apiService.updateJourney(journeyId, { assignedVehicleId: vehicleId }).subscribe({
      next: (updatedJourney) => {
        console.log('Journey updated successfully:', updatedJourney);
      },
      error: (err) => {
        console.error('Error updating journey:', err);
        // Optionally: revert the optimistic update on error
        // For now, we keep the local change even if API fails
        this._error.set(err.message || 'Failed to assign vehicle');
      }
    });
  }

  /**
   * Update journey status
   * Changes the status of a journey (Scheduled → InProgress → Finished)
   *
   * @param journeyId - The ID of the journey to update
   * @param newStatus - The new status to set
   */
  updateJourneyStatus(journeyId: number, newStatus: 'Scheduled' | 'InProgress' | 'Finished'): void {
    // Update the local state immediately (optimistic update)
    this._journeys.update(currentJourneys => {
      return currentJourneys.map(journey =>
        journey.id === journeyId
          ? { ...journey, status: newStatus }
          : journey
      );
    });

    // Persist the change to the API
    this.apiService.updateJourney(journeyId, { status: newStatus }).subscribe({
      next: (updatedJourney) => {
        console.log('Journey status updated successfully:', updatedJourney);
      },
      error: (err) => {
        console.error('Error updating journey status:', err);
        this._error.set(err.message || 'Failed to update journey status');
      }
    });
  }

  /**
   * Start a journey (Scheduled → InProgress)
   */
  startJourney(journeyId: number): void {
    this.updateJourneyStatus(journeyId, 'InProgress');
  }

  /**
   * Finish a journey (InProgress → Finished)
   */
  finishJourney(journeyId: number): void {
    this.updateJourneyStatus(journeyId, 'Finished');
  }
}
