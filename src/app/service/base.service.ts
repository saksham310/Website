import {Injectable, Component, Inject, PLATFORM_ID, signal, computed} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import type {gsap} from 'gsap';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private readonly isBrowser: boolean = false;
  public gsapPromise?: Promise<typeof gsap | null>
  private section = signal('');

  public currentSection = computed(() => this.section());

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  public async loadGSAP() {
    if (!this.isBrowser) return Promise.resolve(null);
    if (this.gsapPromise) return this.gsapPromise;
    this.gsapPromise = import('gsap').then(m => m.gsap);
    return this.gsapPromise
  }

  public isBrowserEnvironment(): boolean {
    return this.isBrowser;
  }

  public setCurrentSection(id: string): void {
    this.section.set(id);
  }


}
