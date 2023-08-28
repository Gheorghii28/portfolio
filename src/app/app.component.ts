import { Component, ViewChild } from '@angular/core';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FooterComponent } from './footer/footer.component';
import { SvgService } from './services/svg.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild(MySkillsComponent, { static: true }) mySkillsComponent!: MySkillsComponent;
  @ViewChild(PortfolioComponent, { static: true }) portfolioComponent!: PortfolioComponent;
  @ViewChild(FooterComponent, { static: true }) footerComponent!: FooterComponent;

  constructor(private svgService: SvgService) { }

  ngAfterViewInit() {
    this.checkAndRunObserveAnimate(this.mySkillsComponent);
    this.checkAndRunObserveAnimate(this.portfolioComponent);
    this.checkAndRunObserveAnimate(this.footerComponent);
  }

  checkAndRunObserveAnimate(myComponent: any) {
    const mySectionRef = myComponent.mySectionRef;
    if (mySectionRef) {
      const mySectionElement = mySectionRef.nativeElement;
      this.runObserveAnimate(mySectionElement, myComponent);
    } else {
      console.error(`${myComponent.sectionRefName} has not been initialized.`);
    }
  }

  runObserveAnimate(mySectionElement: any, myComponent: any) {
    const observer = new IntersectionObserver((entries, observer) => {
      this.handleIntersectionEntries(entries, observer, myComponent);
    }, myComponent.options);
    observer.observe(mySectionElement);
  }

  handleIntersectionEntries(entries: IntersectionObserverEntry[], observer: any, myComponent: any) {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting && myComponent.isNotAnimated) {
        this.moveArrow(myComponent);
        myComponent.isNotAnimated = !myComponent.isNotAnimated;
      }
    });
  }

  moveArrow(myComponent: any) {
    console.log(myComponent);
    this.svgService.svgAnimation(myComponent.classPath1, myComponent.path1, myComponent.newPath1, 200);
    this.svgService.svgAnimation(myComponent.classPath2, myComponent.path2, myComponent.newPath2, 200);
    setTimeout(() => {
      this.svgService.svgAnimation(myComponent.classPath1, myComponent.newPath1, myComponent.endPath1, 200);
      this.svgService.svgAnimation(myComponent.classPath2, myComponent.newPath2, myComponent.endPath2, 200);
    }, 200);
  }
}