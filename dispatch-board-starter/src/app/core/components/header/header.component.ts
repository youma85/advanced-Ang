import { Component } from '@angular/core';

/**
 * Header component - Standalone
 */
@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'Dispatch Board';
}
