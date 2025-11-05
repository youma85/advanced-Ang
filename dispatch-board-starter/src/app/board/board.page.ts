import { Component, inject, effect } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { BoardStore } from '../core/state/board.store';
import { JourneyListDetailComponent } from './journey-list-detail.component';

/**
 * Board page component - Standalone
 *
 * Exercise B: Computed Signals & Effects
 * - Inject the BoardStore
 * - Use effect() to load data when component initializes
 * - Display journeys grouped by status
 * - Show loading and error states
 *
 * Exercise E: @defer for Heavy Views
 * - Uses @defer to lazy-load JourneyListDetailComponent
 */
@Component({
  selector: 'app-board-page',
  standalone: true,
  imports: [RouterOutlet, RouterLink, JourneyListDetailComponent],
  templateUrl: './board.page.html',
  styleUrls: ['./board.page.css']
})
export class BoardPageComponent {

  // Inject the signal-based store
  store = inject(BoardStore);

  // Expose signals for the template
  scheduledJourneys = this.store.scheduledJourneys;
  inProgressJourneys = this.store.inProgressJourneys;
  finishedJourneys = this.store.finishedJourneys;
  availableVehicles = this.store.availableVehicles;
  vehicles = this.store.vehicles; // All vehicles for dropdown
  isLoading = this.store.isLoading;
  error = this.store.error;

  constructor() {
    // Use effect() to load data when component initializes
    effect(() => {
      // This effect runs once when the component is created
      this.store.loadJourneys();
      this.store.loadVehicles();
    });
  }

  /**
   * Exercise C: Assign a vehicle to a journey
   * This method is called from the template when a vehicle is selected
   */
  assignVehicle(journeyId: number, vehicleId: number) {
    this.store.assignVehicle(journeyId, vehicleId);
  }

  /**
   * Get vehicle details by ID
   * Used to display assigned vehicle information
   */
  getVehicleById(vehicleId: number | null) {
    if (!vehicleId) return null;
    return this.vehicles().find(v => v.id === vehicleId);
  }
}
