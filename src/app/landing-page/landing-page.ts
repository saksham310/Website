import { Component } from '@angular/core';
import {LucideAngularModule, MouseIcon, LucideIconData} from 'lucide-angular';

@Component({
  selector: 'app-landing-page',
  imports: [LucideAngularModule],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css'
})
export class LandingPage {
protected readonly MouseIcon:LucideIconData = MouseIcon;
}
