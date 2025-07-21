import {Injectable, Component, Inject, PLATFORM_ID, signal, computed} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private readonly isBrowser: boolean = false;
  private section = signal('');

  public currentSection = computed(()=>this.section());

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  public isBrowserEnvironment(): boolean {
    return this.isBrowser;
  }

  public setCurrentSection(id:string):void{
    this.section.set(id);
  }


}
