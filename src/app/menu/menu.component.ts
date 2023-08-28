import { Component } from '@angular/core';
import { MenuService } from '../services/menu-state.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent {

  constructor(public menuService: MenuService) { }

  toggleMenu() {
    this.menuService.menuAnimation();
  }
}