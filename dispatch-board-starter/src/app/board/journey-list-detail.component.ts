import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BoardStore } from '../core/state/board.store';

/**
 * Exercise E: @defer for Heavy Views
 *
 * This component displays a detailed list of all journeys with comprehensive information.
 * It's designed to be loaded lazily using @defer to improve initial page load performance.
 */
@Component({
  selector: 'app-journey-list-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './journey-list-detail.component.html',
  styleUrls: ['./journey-list-detail.component.css']
})
export class JourneyListDetailComponent {

  // Inject the store
  store = inject(BoardStore);

  // Expose all journeys and vehicles
  journeys = this.store.journeys;
  vehicles = this.store.vehicles;

  /**
   * Get vehicle details by ID
   */
  getVehicleById(vehicleId: number | null) {
    if (!vehicleId) return null;
    return this.vehicles().find(v => v.id === vehicleId);
  }

  /**
   * Get status badge color class
   */
  getStatusClass(status: string): string {
    return status.toLowerCase();
  }
}
