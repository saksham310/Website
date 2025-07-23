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
        start: "top 50%",
        toggleActions: "play none none reset",
      },

    })

    tl?.from('.about-title', {y: 100, opacity: 0, duration: 1.5, ease: "power3.out",})
      .from('.about-paragraph', {
        y: 60, opacity: 0, duration: 1.2, ease: "power3.out"
      }, "-=0.8")
      .from('.about-monogram', {
        opacity: 0,
        y: 30,
        duration: 1.5,
        ease: "power3.out"
      }, "-=1.2")
      .from('.about--tech-stack', {
        y: 40, opacity: 0, duration: 1.2, ease: "power3.out"
      }, "-=0.6")

  }
}
