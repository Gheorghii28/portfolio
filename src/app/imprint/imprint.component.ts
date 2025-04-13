import { Component, ViewChild, Renderer2 } from '@angular/core';
import { SvgService } from '../services/svg.service';
import { FooterComponent } from '../footer/footer.component';
import { getWindow, getDocument } from 'ssr-window';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss'],
})
export class ImprintComponent {
  @ViewChild(FooterComponent, { static: true })
  footerComponent!: FooterComponent;

  constructor(private svgService: SvgService, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.svgService.checkAndRunObserveAnimate(this.footerComponent);
    this.hideForm();
    this.scrollToTop();
    this.adjustHeightOnWindowResize();
  }

  hideForm() {
    const footerElement = this.footerComponent.mySectionRef.nativeElement;
    this.renderer.addClass(footerElement.querySelector('.form-container'), 'd-none');
    this.renderer.addClass(footerElement.querySelector('.arrow-top-container'), 'd-none');
  }

  private scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private adjustHeightOnWindowResize(): void {
    this.adjustElementHeights();
    const window = getWindow();
    fromEvent(window, 'load').subscribe(() => {
      this.adjustElementHeights();
    });
    fromEvent(window, 'resize').subscribe(() => {
      this.adjustElementHeights();
    });
  }

  private adjustElementHeights(): void {
    const window = getWindow();
    const document = getDocument();
    const totalHeight = window.innerHeight;

    const getHeight = (selector: string) => {
      const element = document.querySelector(selector);
      return element ? element.getBoundingClientRect().height : 0;
    };

    const footerHeight = getHeight('.imprint-footer');
    const navHeight = getHeight('.navigation');

    const minHeight = 450;
    const contentHeight = Math.max(
      totalHeight - footerHeight - navHeight,
      minHeight
    );

    document
      .querySelector('.imprint')
      ?.setAttribute('style', `height: ${contentHeight - 48}px`);
  }
}
