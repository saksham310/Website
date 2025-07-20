import { Component, signal } from '@angular/core';
import {Navbar} from './navbar/navbar';
import {LandingPage} from './landing-page/landing-page';
import {AboutMe} from './about-me/about-me';
import {Projects} from './projects/projects';

@Component({
  selector: 'app-root',
  imports: [Navbar, LandingPage, AboutMe, Projects],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Website');
}
