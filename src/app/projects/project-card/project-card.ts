import {AfterViewInit, Component, ElementRef, inject, input} from '@angular/core';
import {LucideAngularModule, Github, SquareArrowOutUpRight} from 'lucide-angular';
import {Project} from '../../models';
import {BaseService} from '../../service/base.service';

@Component({
  selector: 'app-project-card',
  imports: [LucideAngularModule],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css'
})
export class ProjectCard implements AfterViewInit {
  protected readonly icon = {
    demo: SquareArrowOutUpRight,
    github: Github,
  }
  private baseService: BaseService = inject(BaseService);
  private gsap!: typeof gsap | null;
  project = input.required<Project>()

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
        trigger: host,
        start: "top 90%",
        toggleActions: "play none none reset",
      },

    })
    tl?.from(host, {
        opacity: 0,
        y: 300,
        duration: 1.3,
        ease: "ease-in",
      }
    )
  }

}
