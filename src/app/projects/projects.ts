import { Component } from '@angular/core';
import {LucideAngularModule, ChevronLeft, ChevronRight, MouseIcon} from 'lucide-angular';

@Component({
  selector: 'app-projects',
  imports: [LucideAngularModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
protected readonly icons ={
  left: ChevronLeft,
  right: ChevronRight,
}
  protected readonly MouseIcon = MouseIcon;
}
