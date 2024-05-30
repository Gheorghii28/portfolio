import { Component } from '@angular/core';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  constructor(private scrollService: ScrollService) {}

  public scrollToSection(): void {
    this.scrollService.scrollToSection('section-footer');
  }
}
