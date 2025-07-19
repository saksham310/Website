import { Component, signal } from '@angular/core';
import {Navbar} from './navbar/navbar';
import {LandingPage} from './landing-page/landing-page';

@Component({
  selector: 'app-root',
  imports: [Navbar, LandingPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Website');
}
