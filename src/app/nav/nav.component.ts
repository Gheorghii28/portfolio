import { Component } from '@angular/core';
import { MenuService } from '../services/menu-state.service';
import { SvgService } from '../services/svg.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})


export class NavComponent {

  paths = [
    {
      path1: 'M2 2H42',
      path2: 'M2 19H42',
      path3: 'M2 36H42'
    },
    {
      newPath1: 'M12 2H32',
      newPath2: 'M2 19H42',
      newPath3: 'M12 36H32'
    },
    {
      newPath1: 'M22 2H42',
      newPath2: 'M2 19H42',
      newPath3: 'M2 36H22'
    },
    {
      newPath1: 'M40.3384 16.4272L55.6593 3.57149',
      newPath2: 'M12.6797 14.1431L43.3215 39.8546',
      newPath3: 'M3.33936 50.428L18.6602 37.5722'
    },
    {
      newPath1: 'M20 15.856L35.3209 3.0002',
      newPath2: 'M4.67969 3.14307L35.3215 28.8546',
      newPath3: 'M5 28.856L20.3209 16.0002'
    }
  ];

  isMenuOpen: boolean = false;

  constructor(private menuService: MenuService, private svgService: SvgService) {}

  toggleMenuFromNav() {
    this.menuService.menuAnimation();
    this.runIconAnimations();
    this.isMenuOpen = !this.isMenuOpen;
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
    this.svgService.svgAnimation('.path1-nav', path.path1, this.paths[index + 1].newPath1, 225);
    this.svgService.svgAnimation('.path2-nav', path.path2, this.paths[index + 1].newPath2, 225);
    this.svgService.svgAnimation('.path3-nav', path.path3, this.paths[index + 1].newPath3, 225);
  }

  async animatePathReverse(index: number) {
    const path = this.paths[index + 1];
    this.svgService.svgAnimation('.path1-nav', path.newPath1, this.paths[index].path1, 225);
    this.svgService.svgAnimation('.path2-nav', path.newPath2, this.paths[index].path2, 225);
    this.svgService.svgAnimation('.path3-nav', path.newPath3, this.paths[index].path3, 225);
  }
}
