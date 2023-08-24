import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  isMenuOpen: boolean = false;
  isMenuContentDisplayed: boolean = false;
  
  menuAnimation() {
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
}
