import { ElementRef, Injectable, ViewChild } from '@angular/core';
import { SvgService } from './svg.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  paths = [
    {
      path1: 'M2 2H42',
      path2: 'M2 19H42',
      path3: 'M2 36H42',
      width: '44',
      height: '38',
      viewBox: '0 0 44 38'
    },
    {
      path1: 'M12 2H32',
      path2: 'M2 19H42',
      path3: 'M12 36H32',
      width: '44',
      height: '38',
      viewBox: '0 0 44 38'
    },
    {
      path1: 'M22 2H42',
      path2: 'M2 19H42',
      path3: 'M2 36H22',
      width: '44',
      height: '38',
      viewBox: '0 0 44 38'
    },
    {
      path1: 'M40.3384 16.4272L55.6593 3.57149',
      path2: 'M12.6797 14.1431L43.3215 39.8546',
      path3: 'M3.33936 50.428L18.6602 37.5722',
      width: '59',
      height: '54',
      viewBox: '0 0 59 54'
    },
    {
      path1: 'M20 15.856L35.3209 3.0002',
      path2: 'M4.67969 3.14307L35.3215 28.8546',
      path3: 'M5 28.856L20.3209 16.0002',
      width: '40',
      height: '32',
      viewBox: '0 0 40 32'
    }
  ];
  isMenuOpen: boolean = false;
  isMenuContentDisplayed: boolean = false;

  private selectedSvgElement = new Subject<SVGSVGElement>();

  constructor(private svgService: SvgService) {

  }

  setSelectedSvgElement(svgElement: SVGSVGElement) {
    this.selectedSvgElement.next(svgElement);
  }

  getSelectedSvgElement() {
    return this.selectedSvgElement.asObservable();
  }

  menuAnimation() {
    this.runIconAnimations();
    this.openMenu();
    this.showContent();
  }

  openMenu() {
    if (this.isMenuOpen) {
      setTimeout(() => {
        this.isMenuOpen = !this.isMenuOpen;
      }, 500);
    } else {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }

  showContent() {
    this.isMenuContentDisplayed = !this.isMenuContentDisplayed;
  }

  async runIconAnimations() {
    if (!this.isMenuOpen) {
      for (let i = 0; i < this.paths.length - 1; i++) {
        await this.animatePath(i);
      }
    } else {
      for (let i = this.paths.length - 2; i >= 0; i--) {
        await this.animatePathReverse(i);
      }
    }
  }

  async animatePath(index: number) {
    const path = this.paths[index];
    this.svgService.svgMenuAnimation('.path1-nav', this.selectedSvgElement, path.path1, this.paths[index + 1].path1, 225, path.width, this.paths[index + 1].width, path.height, this.paths[index + 1].height, path.viewBox, this.paths[index + 1].viewBox);
    this.svgService.svgMenuAnimation('.path2-nav', this.selectedSvgElement, path.path2, this.paths[index + 1].path2, 225, path.width, this.paths[index + 1].width, path.height, this.paths[index + 1].height, path.viewBox, this.paths[index + 1].viewBox);
    this.svgService.svgMenuAnimation('.path3-nav', this.selectedSvgElement, path.path3, this.paths[index + 1].path3, 225, path.width, this.paths[index + 1].width, path.height, this.paths[index + 1].height, path.viewBox, this.paths[index + 1].viewBox);
  }

  async animatePathReverse(index: number) {
    const path = this.paths[index + 1];
    this.svgService.svgMenuAnimation('.path1-nav', this.selectedSvgElement, path.path1, this.paths[index].path1, 225, path.width, this.paths[index].width, path.height, this.paths[index].height, path.viewBox, this.paths[index].viewBox);
    this.svgService.svgMenuAnimation('.path2-nav', this.selectedSvgElement, path.path2, this.paths[index].path2, 225, path.width, this.paths[index].width, path.height, this.paths[index].height, path.viewBox, this.paths[index].viewBox);
    this.svgService.svgMenuAnimation('.path3-nav', this.selectedSvgElement, path.path3, this.paths[index].path3, 225, path.width, this.paths[index].width, path.height, this.paths[index].height, path.viewBox, this.paths[index].viewBox);
  }
}
