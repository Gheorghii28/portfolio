import { Component } from '@angular/core';
import { ScrollService } from '../services/scroll.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  showMore: boolean = false;

  constructor(private scrollService: ScrollService, private sharedService: SharedService) {}

  public scrollToSection(): void {
    this.scrollService.scrollToSection('section-footer');
    this.sharedService.triggerFocusElement('form-title');
  }

  public toggleMore(): void {
    this.showMore = !this.showMore;
  }
}
