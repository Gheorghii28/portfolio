import { Component, ViewChild } from '@angular/core';
import { MySkillsComponent } from '../my-skills/my-skills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { SvgService } from '../services/svg.service';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  @ViewChild(MySkillsComponent, { static: true }) mySkillsComponent!: MySkillsComponent;
  @ViewChild(PortfolioComponent, { static: true }) portfolioComponent!: PortfolioComponent;
  @ViewChild(FooterComponent, { static: true }) footerComponent!: FooterComponent;

  constructor(private svgService: SvgService) { }

  ngAfterViewInit() {
    this.svgService.checkAndRunObserveAnimate(this.mySkillsComponent);
    this.svgService.checkAndRunObserveAnimate(this.portfolioComponent);
    this.svgService.checkAndRunObserveAnimate(this.footerComponent);
  }
}
