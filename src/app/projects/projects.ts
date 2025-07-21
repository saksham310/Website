import {Component, computed, Signal, signal} from '@angular/core';
import {LucideAngularModule, ChevronLeft, ChevronRight} from 'lucide-angular';
import {ProjectCard} from './project-card/project-card';
import {Project} from '../models';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [LucideAngularModule, ProjectCard, NgClass],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})


export class Projects {
  protected readonly icons = {
    left: ChevronLeft,
    right: ChevronRight,
  }

  protected allProjectList: Project[] = [{
    name: 'AssignIt - Project Management Tools',
    description: 'A full-stack project management tool to streamline team collaboration with organized workspaces, sprints, and role-based task management',
    link: {
      code: 'https://github.com/saksham310/assignit-frontend',
      live: 'https://assignit.sharmasaksham.com.np/'
    },
    tech: ['React', 'Typescript', 'Postgres', 'Node.js', 'Express.js'],
    imageUrl: '../../assets/project1.png'
  }];
  protected isMultipleProjects = this.allProjectList.length > 1
  protected wrapperInfo = {
    title : this.isMultipleProjects ? 'Featured Projects' : 'Featured Project',
    subTitle : this.isMultipleProjects ? 'A selection of my recent work showcasing different technologies and approaches' : 'A deep dive into a recent full-stack application.',
  }

  protected currentIndex = signal(0)
  public selectedProject: Signal<Project> = computed(() => this.allProjectList[this.currentIndex()])

  protected handleClick = {
    prev: () => this.currentIndex.update((value) => (value - 1 + this.allProjectList.length) % this.allProjectList.length),
    next: () => this.currentIndex.update((value) => (value + 1 ) % this.allProjectList.length),
    updateIndex: (index:number) => this.currentIndex.set(index)
  }

}
