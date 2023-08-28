import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  path1 = 'M99.9541 86.0459V150.159H164.067';
  path2 = 'M218.057 32.0566L99.9531 150.16';
  newPath1 = 'M31.9443 154.046V218.159H96.0577';
  newPath2 = 'M217.943 32.1597L31.9434 218.16';
  endPath1 = 'M31.9541 154.046V218.159H96.0675';
  endPath2 = 'M150.057 100.057L31.9531 218.16';

  @ViewChild('sectionPortfolio', { static: true }) mySectionRef!: ElementRef<HTMLElement>;

  sectionRefName: string;
  classPath1: string;
  classPath2: string;
  isNotAnimated: boolean;

  options = {
    root: null,
    rootMargin: '0px',
    threshold: 0
  };

  constructor() {
    this.sectionRefName = 'portfolioSectionRef'
    this.classPath1 = '.path1-portfolio';
    this.classPath2 = '.path2-portfolio';
    this.isNotAnimated = true;
  }
}