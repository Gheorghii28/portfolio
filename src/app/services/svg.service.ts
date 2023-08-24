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
}
