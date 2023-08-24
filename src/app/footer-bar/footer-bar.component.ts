import { Component } from '@angular/core';
import { SvgService } from '../services/svg.service';

@Component({
  selector: 'app-footer-bar',
  templateUrl: './footer-bar.component.html',
  styleUrls: ['./footer-bar.component.scss']
})
export class FooterBarComponent {

  constructor(private svgService: SvgService) {}

  path1 = 'M45.7051 44.1267L27.7789 30.00049L9.85265 44.1267';
  path2 = 'M28 80L28 30';
  newPath1 = 'M45.7051 17.1267L27.7789 3.00049L9.85265 17.1267';
  newPath2 = 'M28 80L28 3';
  isAnimated = false;

  toggleAnimation() {
    this.isAnimated = !this.isAnimated;
    if (this.isAnimated) {
      this.moveToTop();
    } else {
      this.moveToBottom();
    }
  }

  moveToTop() {
    this.svgService.svgAnimation('.path1-footer', this.path1, this.newPath1, 225);
    this.svgService.svgAnimation('.path2-footer', this.path2, this.newPath2, 225);
  }

  moveToBottom() {
    this.svgService.svgAnimation('.path1-footer', this.newPath1, this.path1, 225);
    this.svgService.svgAnimation('.path2-footer', this.newPath2, this.path2, 225);
  }
}
