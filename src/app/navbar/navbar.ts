import {Component, effect, inject, OnChanges, OnInit, Signal, signal, SimpleChanges} from '@angular/core';
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
export class Navbar  {
   private baseService: BaseService = inject(BaseService);
   protected currentSelection:Signal<string> = this.baseService.currentSection;

   constructor() {
   }

}
