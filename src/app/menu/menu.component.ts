import { Component } from '@angular/core';
import { MenuService } from '../services/menu-state.service';
import { ScrollService } from '../services/scroll.service';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  constructor(
    public menuService: MenuService,
    private scrollService: ScrollService,
    private sharedService: SharedService,
    private router: Router
  ) {}

  public async toggleMenu(sectionId: string): Promise<void> {
    await this.checkAndRedirect('imprint');
    this.scrollService.scrollToSection(sectionId);
    this.sharedService.triggerFocusElement(`${sectionId}-title`);
    this.menuService.menuAnimation();
  }

  private async checkAndRedirect(keyword: string): Promise<void> {
    const currentUrl = this.router.url;
    if (currentUrl.includes(keyword)) {
      await this.router.navigateByUrl('/');
    }
  }
}
