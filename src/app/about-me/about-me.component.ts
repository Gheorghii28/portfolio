import { Component } from '@angular/core';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  showMore: boolean = false;

  constructor(private scrollService: ScrollService) {}

  public scrollToSection(): void {
    this.scrollService.scrollToSection('section-footer');
  }

  public toggleMore(): void {
    this.showMore = !this.showMore;
  }
}
