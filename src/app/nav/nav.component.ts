import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuService } from '../services/menu-state.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent {

  @ViewChild('svgMenuIcon', { static: true }) svgMenuIcon!: ElementRef<SVGSVGElement>;

  svgElement: any;

  constructor(public menuService: MenuService) { }

  ngAfterViewInit() {
    this.svgElement = this.svgMenuIcon;
  }

  selectSvgElement() {
    this.menuService.setSelectedSvgElement(this.svgMenuIcon.nativeElement);
  }

  toggleMenuFromNav() {
    this.menuService.menuAnimation();
  }
}