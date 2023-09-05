import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { SvgService } from '../services/svg.service';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})
export class ImprintComponent {

  @ViewChild(FooterComponent, { static: true }) footerComponent!: FooterComponent;

  constructor(private svgService: SvgService, private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.svgService.checkAndRunObserveAnimate(this.footerComponent);
    this.hideForm();
  }

  hideForm() {
    const footerElement = this.footerComponent.mySectionRef.nativeElement;
    this.renderer.addClass(footerElement.querySelector('.form-container'), 'd-none');
    this.renderer.addClass(footerElement.querySelector('.anker-arrow-top'), 'd-none');
  }
}
