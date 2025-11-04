import { Component, Input } from '@angular/core';

/**
 * Journey detail page component - Standalone
 * Uses route parameter binding via @Input()
 *
 * TODO: Convert the @Input() to use input signals (Angular 20 feature)
 * TODO: Use computed signals to derive journey details from the ID
 * TODO: Fetch journey details from the store based on the ID
 */
@Component({
  selector: 'app-journey-page',
  standalone: true,
  templateUrl: './journey.page.html',
  styleUrls: ['./journey.page.css']
})
export class JourneyPageComponent {

  // Route parameter binding - receives 'id' from /board/journey/:id
  @Input() id!: string;

  // TODO: Replace with input signal
  // Example:
  // id = input.required<string>();
  //
  // Then create a computed signal for journey details:
  // private store = inject(BoardStore);
  // journey = computed(() => {
  //   const journeyId = Number(this.id());
  //   return this.store.journeys().find(j => j.id === journeyId);
  // });
}
