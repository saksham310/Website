import { Component } from '@angular/core';
import {LucideAngularModule,Github,SquareArrowOutUpRight} from 'lucide-angular';

@Component({
  selector: 'app-project-card',
  imports: [LucideAngularModule],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css'
})
export class ProjectCard {
  protected readonly icon = {
    demo:SquareArrowOutUpRight,
    github:Github,
}

}
