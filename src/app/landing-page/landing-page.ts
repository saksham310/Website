import {Component, ElementRef, inject} from '@angular/core';
import {LucideAngularModule, MouseIcon, LucideIconData} from 'lucide-angular';
import {BaseService} from '../service/base.service';

@Component({
  selector: 'app-landing-page',
  imports: [LucideAngularModule],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css'
})
export class LandingPage {
protected readonly MouseIcon:LucideIconData = MouseIcon;
  private gsap!: typeof gsap | null;
  private baseService = inject(BaseService);

  constructor(private elementRef:ElementRef) {
  }

  async ngAfterViewInit() {
    this.gsap = await this.baseService.loadGSAP()
    setTimeout(() => {
      this.loadAnimation();
    }, 10);
  }

  private loadAnimation() {
    const tl = this.gsap?.timeline()
      tl?.from('.landing-title',{y:100,opacity:0,duration:1.5,ease:"power3.out"})
        .from('.landing-role',{
          y:60,opacity:0,duration:1.2,ease:"power3.out"
        }, "-=0.8")
        .from('.landing-phrase',{
          y:40,opacity:0,duration:1.2,ease:"power3.out"
        }, "-=0.6")
        .from('#my-icon',{
          opacity:0,duration:1.2,ease:"power3.out"
        },"-=0.6")

  }
}
