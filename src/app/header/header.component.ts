import { Component, OnInit } from '@angular/core';
import { SvgService } from '../services/svg.service';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  path1 = 'M23 -35.1045L48 -10.1045L73 -35.1045';
  path2 = 'M48 -160L48 -10.1053';
  newPath1 = 'M23 315.1045L48 340.1045L73 315.1045';
  newPath2 = 'M48 180L48 340.1053';

  constructor(
    private svgService: SvgService,
    private scrollService: ScrollService
  ) {}

  ngOnInit(): void {
    this.startAnimation();
  }

  startAnimation() {
    setTimeout(() => {
      this.moveArrow();
    }, 100);
    setInterval(() => {
      this.moveArrow();
    }, 2500);
  }

  moveArrow() {
    this.svgService.svgAnimation('.path1-header', this.path1, this.newPath1, 2000);
    this.svgService.svgAnimation('.path2-header', this.path2, this.newPath2, 2000);
  }

  public scrollToSection(): void {
    this.scrollService.scrollToSection('section-footer');
  }
}