import {Component, input} from '@angular/core';
import {LucideAngularModule, Github, SquareArrowOutUpRight} from 'lucide-angular';
import {Project} from '../../models';

@Component({
  selector: 'app-project-card',
  imports: [LucideAngularModule],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css'
})
export class ProjectCard {
  protected readonly icon = {
    demo: SquareArrowOutUpRight,
    github: Github,
  }
  project = input.required<Project>()


}
