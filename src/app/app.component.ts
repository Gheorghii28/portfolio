import { Component, OnInit } from '@angular/core';
import { ScrollService } from './services/scroll.service';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private scrollService: ScrollService, private sharedService: SharedService) {}

  ngOnInit() {
    this.scrollService.getScrollSubject().subscribe(sectionId => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
    this.sharedService.focusElement$.subscribe((elementId) => {
      const element = document.getElementById(elementId);
      if (element) {
        element.focus();
      }
    });
  }
}