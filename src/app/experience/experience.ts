import {AfterViewInit, Component, ElementRef, inject} from '@angular/core';
import {BaseService} from '../service/base.service';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience implements AfterViewInit {
  protected readonly  achievements = [
    'Architected a reusable component library in Angular that increased development velocity by 40%.',
    'Optimized application performance using advanced data structures (Set, Map) to enhance user experience.',
    'Translated complex Figma designs into pixel-perfect, responsive, and accessible user interfaces.'
  ];

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
        toggleActions: "play none none reset",
      },

    })

    tl?.from('.experience-title', {y: 100, opacity: 0, duration: 1.3, ease: "power3.out",})
      .from('.experience-info', {
        y: 60, opacity: 0, duration: 1.2, ease: "power3.out"
      }, "-=0.8")
      .from(".position-info",{
        opacity:0,
        x:30,
        duration:1,
        ease:"power3.out"
      }, "-=0.8")
      .from(".job-description",{
        opacity: 0,
        y:60,
        duration:1.2,
        ease: "power3.out"
      }, "-=0.8")
  }


}
