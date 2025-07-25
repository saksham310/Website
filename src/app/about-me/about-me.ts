import {AfterViewInit, Component, ElementRef, inject} from '@angular/core';
import {BaseService} from '../service/base.service';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css'
})
export class AboutMe implements AfterViewInit {
  private gsap!: typeof gsap | null;
  private baseService: BaseService = inject(BaseService);

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
        start: "top 45%",
        toggleActions: "play none none reset",
      },

    })

    tl?.from('.about-title', {
      y: 80, // More travel distance for a longer duration
      opacity: 0,
      duration: 1.0, // A full second for the main title
      ease: 'power3.out',
    })
      .from('.about-paragraph', {
        y: 60,
        opacity: 0,
        duration: 0.9, // Almost a full second
        ease: 'power3.out',
      }, '-=0.7') // A significant but not total overlap
      .from('.about-monogram', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
      }, '<0.3') // A clear 0.3s delay after the paragraph starts animating
      .from('.about--tech-stack', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.5');

  }
}
