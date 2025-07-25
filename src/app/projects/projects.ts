import {AfterViewInit, Component, computed, ElementRef, inject, Signal, signal, ViewChild} from '@angular/core';
import {LucideAngularModule, ChevronLeft, ChevronRight} from 'lucide-angular';
import {ProjectCard} from './project-card/project-card';
import {Project} from '../models';
import {NgClass} from '@angular/common';
import {BaseService} from '../service/base.service';

@Component({
  selector: 'app-projects',
  imports: [LucideAngularModule, ProjectCard, NgClass],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})


export class Projects implements AfterViewInit {
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
    title: this.isMultipleProjects ? 'Featured Projects' : 'Featured Project',
    subTitle: this.isMultipleProjects ? 'A selection of my recent work showcasing different technologies and approaches' : 'A deep dive into a recent full-stack application.',
  }

  protected currentIndex = signal(0)
  public selectedProject: Signal<Project> = computed(() => this.allProjectList[this.currentIndex()])

  protected handleClick = {
    prev: () => this.currentIndex.update((value) => (value - 1 + this.allProjectList.length) % this.allProjectList.length),
    next: () => this.currentIndex.update((value) => (value + 1) % this.allProjectList.length),
    updateIndex: (index: number) => this.currentIndex.set(index)
  }

  private baseService: BaseService = inject(BaseService);
  private gsap!: typeof gsap | null;

  constructor(private elementRef: ElementRef) {
  }

  async ngAfterViewInit() {
    this.gsap = await this.baseService.loadGSAP()
    this.loadAnimation();
  }

  private loadAnimation() {
    const host = this.elementRef.nativeElement;
    const tl = this.gsap?.timeline({
      scrollTrigger: {
        trigger: host.querySelector('.section'),
        start: "top 50%",
        toggleActions: "play none none none",
      },

    })

    tl?.from('#title', {y: 100, opacity: 0, duration: 1.3, ease: "power3.out",})
      .from('#info', {
        y: 60, opacity: 0, duration: 1.2, ease: "power3.out"
      }, "-=0.8")
  }

}
