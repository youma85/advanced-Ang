import { Component, input, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BoardStore } from '../core/state/board.store';

/**
 * Journey detail page component - Standalone
 *
 * Exercise D: Route → Input Signal Binding
 * - Uses input signal for route parameter binding
 * - Uses computed signal to derive journey details from the store
 */
@Component({
  selector: 'app-journey-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './journey.page.html',
  styleUrls: ['./journey.page.css']
})
export class JourneyPageComponent {

  // Inject the store
  private store = inject(BoardStore);

  // Route parameter binding using input signal - receives 'id' from /board/journey/:id
  id = input.required<string>();

  // Computed signal to get journey details from the store
  journey = computed(() => {
    const journeyId = Number(this.id());
    return this.store.journeys().find(j => j.id === journeyId);
  });

  // Helper to get vehicle details
  getVehicle(vehicleId: number | null) {
    if (!vehicleId) return null;
    return this.store.vehicles().find(v => v.id === vehicleId);
  }
}
