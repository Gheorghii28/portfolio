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
}