import {
  AfterViewInit,
  Component,
  effect, ElementRef,
  inject,
  OnChanges,
  OnInit,
  Signal,
  signal,
  SimpleChanges
} from '@angular/core';
import {BaseService} from '../service/base.service';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [
    NgClass
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit {
  private baseService: BaseService = inject(BaseService);
  protected currentSelection: Signal<string> = this.baseService.currentSection;
  private gsap!: typeof gsap | null;

  constructor(private elementRef:ElementRef) {
  }

  async ngOnInit() {
    this.gsap = await this.baseService.loadGSAP()
    this.loadAnimation();
  }

  private loadAnimation() {
    this.gsap?.fromTo('.header', {y: -100, opacity:0}, {y: 0,opacity: 1, duration: 1});
  }
}
