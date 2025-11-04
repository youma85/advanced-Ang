import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

/**
 * Board page component - Standalone
 *
 * TODO: Implement signal-based store to manage journeys and vehicles
 * TODO: Add loading and error states using signals
 * TODO: Implement computed signals for derived data
 * TODO: Add effects to fetch data on component initialization
 */
@Component({
  selector: 'app-board-page',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './board.page.html',
  styleUrls: ['./board.page.css']
})
export class BoardPageComponent {

  // TODO: Replace this with a signal-based store
  // Example:
  // private store = inject(BoardStore);
  // journeys = this.store.journeys;
  // vehicles = this.store.vehicles;
  // isLoading = this.store.isLoading;
  // error = this.store.error;

  // TODO: Add a method to load data on initialization
  // constructor() {
  //   effect(() => {
  //     // Load data when component initializes
  //     this.store.loadJourneys();
  //     this.store.loadVehicles();
  //   });
  // }

  // TODO: Add a method to assign a vehicle to a journey
  // assignVehicle(journeyId: number, vehicleId: number) {
  //   this.store.assignVehicle(journeyId, vehicleId);
  // }
}
