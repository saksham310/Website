import {AfterViewInit, Component, ElementRef, inject} from '@angular/core';
import {LucideAngularModule, Github, LinkedinIcon,Mail} from 'lucide-angular';
import {BaseService} from '../service/base.service';

@Component({
  selector: 'app-connect',
  imports: [LucideAngularModule],
  templateUrl: './connect.html',
  styleUrl: './connect.css'
})
export class Connect implements AfterViewInit{
  protected readonly icon = {
    'mail':Mail,
    'linkedin':LinkedinIcon,
    'github':Github
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
        toggleActions: "play none none reset",
      },

    })

    tl?.from('.title', {y: 100, opacity: 0, duration: 1.2, ease: "power3.out",})
      .from('.info', {
        y: 60, opacity: 0, duration: 1, ease: "power3.out"
      }, "-=0.8")
      .from('.cta-btn', {
        y: 60, opacity: 0, duration: 1, ease: "power3.out"
      }, "-=0.8")
      .from('.contact', {
        y: 60, opacity: 0, duration: 1, ease: "power3.out"
      }, "-=0.8")

  }
}
