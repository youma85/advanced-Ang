import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  standalone: false,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  welcomeText = 'Welcome to the Standalone Component Migration Exercise!';
}
