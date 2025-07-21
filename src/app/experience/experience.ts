import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {
  protected readonly  achievements = [
    'Architected a reusable component library in Angular that increased development velocity by 40%.',
    'Optimized application performance using advanced data structures (Set, Map) to enhance user experience.',
    'Translated complex Figma designs into pixel-perfect, responsive, and accessible user interfaces.'
  ];

}
