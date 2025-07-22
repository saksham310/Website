import {AfterViewInit, Component, inject, signal} from '@angular/core';
import {Navbar} from './navbar/navbar';
import {LandingPage} from './landing-page/landing-page';
import {AboutMe} from './about-me/about-me';
import {Projects} from './projects/projects';
import {Experience} from './experience/experience';
import {Connect} from './connect/connect';
import {Observer} from './directives/observer';
import {BaseService} from './service/base.service';

@Component({
  selector: 'app-root',
  imports: [Navbar, LandingPage, AboutMe, Projects, Experience, Connect, Observer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App   {
  protected readonly title = signal('Website');


  constructor() {

  }

}
