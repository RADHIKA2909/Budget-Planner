import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'budget-planner';
}

// app.component.ts:
// Defines the root component of the app (<app-root>).
// Imports necessary Angular modules (CommonModule, RouterOutlet, MatIconModule) and uses standalone: true to declare it as a standalone component.
// Sets up a basic template with app.component.html.

// The standalone: true property indicates that a component doesn't rely on other modules or components in the application. The standalone: true property is necessary for standalone components in Angular to operate independently
