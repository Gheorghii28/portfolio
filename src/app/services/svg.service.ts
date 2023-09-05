import { Injectable } from '@angular/core';
import anime from 'animejs/lib/anime.es';

@Injectable({
  providedIn: 'root'
})

export class SvgService {

  svgAnimation(pathClass: any, fromPath: any, toPath: any, duration: number) {
    anime({
      targets: [pathClass],
      d: [fromPath, toPath],
      duration: duration,
      easing: 'easeInOutQuad',
      direction: 'normal',
      loop: false
    });
  }

  svgMenuAnimation(
    pathClass: string,
    svgElement: any,
    fromPath: string,
    toPath: string,
    duration: number,
    fromWidth: string,
    toWidth: string,
    fromHeight: string,
    toHeight: string,
    fromViewBox: string,
    toViewBox: string
  ) {
    anime({
      targets: [pathClass, svgElement],
      d: [fromPath, toPath],
      width: [fromWidth, toWidth],
      height: [fromHeight, toHeight],
      viewBox: [fromViewBox, toViewBox],
      duration: duration,
      easing: 'easeInOutQuad',
      direction: 'normal',
      loop: false
    });
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
    this.svgAnimation(myComponent.classPath1, myComponent.path1, myComponent.newPath1, 200);
    this.svgAnimation(myComponent.classPath2, myComponent.path2, myComponent.newPath2, 200);
    setTimeout(() => {
      this.svgAnimation(myComponent.classPath1, myComponent.newPath1, myComponent.endPath1, 200);
      this.svgAnimation(myComponent.classPath2, myComponent.newPath2, myComponent.endPath2, 200);
    }, 200);
  }
}