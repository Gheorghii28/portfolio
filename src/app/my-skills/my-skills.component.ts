import { Component, ElementRef, ViewChild } from '@angular/core';
import { SvgService } from '../services/svg.service';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})

export class MySkillsComponent {

  path1 = 'M99.9541 86.0459V150.159H164.067';
  path2 = 'M218.057 32.0566L99.9531 150.16';
  newPath1 = 'M31.9443 154.046V218.159H96.0577';
  newPath2 = 'M217.943 32.1597L31.9434 218.16';
  endPath1 = 'M31.9541 154.046V218.159H96.0675';
  endPath2 = 'M150.057 100.057L31.9531 218.16';

  isNotAnimated: boolean;

  options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
  };

  @ViewChild('sectionMySkills', { static: true }) mySectionRef!: ElementRef<HTMLElement>;

  constructor(private svgService: SvgService) {
    this.isNotAnimated = true;
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    if (this.mySectionRef) {
      const mySectionElement = this.mySectionRef.nativeElement;
      this.startObserve(mySectionElement);
    } else {
      console.error('mySectionRef wurde nicht initialisiert.');
    }
  }

  startObserve(mySectionElement: any) {
    const observer = new IntersectionObserver(this.sectionVisible, this.options);
    observer.observe(mySectionElement);
  }

  moveArrow() {
    this.svgService.svgAnimation('.path1-my-skills', this.path1, this.newPath1, 200);
    this.svgService.svgAnimation('.path2-my-skills', this.path2, this.newPath2, 200);
    setTimeout(() => {
      this.svgService.svgAnimation('.path1-my-skills', this.newPath1, this.endPath1, 200);
      this.svgService.svgAnimation('.path2-my-skills', this.newPath2, this.endPath2, 200);
    }, 200);
  }

  sectionVisible = (entries: any, observer: any) => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting && this.isNotAnimated) {
        this.moveArrow();
        this.isNotAnimated = !this.isNotAnimated;
      }
    });
  }
}
