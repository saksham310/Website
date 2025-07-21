import {Directive, ElementRef, input, OnDestroy, OnInit} from '@angular/core';
import {BaseService} from '../service/base.service';

@Directive({
  selector: '[appObserver]'
})
export class Observer implements OnInit, OnDestroy {

  public currentSection = input.required<string>();

  private observer?:IntersectionObserver;

  constructor(private elementRef:ElementRef, private baseService:BaseService) { }

  ngOnInit() {
    if (!this.baseService.isBrowserEnvironment()) return;
    this.initialize();
  }

  private initialize(){
    const options = {
      root:null,
      rootMargin:'0px',
      scrollMargin:'0px',
      threshold:0.5,
    }
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.baseService.setCurrentSection(this.currentSection())
        }
      })
    },options)

    this.observer.observe(this.elementRef.nativeElement)
  }

  ngOnDestroy() {
    if (this.observer) this.observer.disconnect();
  }

}
