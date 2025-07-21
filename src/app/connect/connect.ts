import { Component } from '@angular/core';
import {LucideAngularModule, Github, LinkedinIcon,Mail} from 'lucide-angular';

@Component({
  selector: 'app-connect',
  imports: [LucideAngularModule],
  templateUrl: './connect.html',
  styleUrl: './connect.css'
})
export class Connect {
  protected readonly icon = {
    'mail':Mail,
    'linkedin':LinkedinIcon,
    'github':Github
  }
}
