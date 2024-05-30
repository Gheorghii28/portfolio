import { Component } from '@angular/core';
import { MenuService } from '../services/menu-state.service';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  constructor(
    public menuService: MenuService,
    private scrollService: ScrollService
  ) {}

  public toggleMenu(sectionId: string): void {
    this.scrollService.scrollToSection(sectionId);
    this.menuService.menuAnimation();
  }
}
