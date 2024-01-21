import { Component, ElementRef, HostListener, QueryList, Renderer2, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  projects = [
    {
      nr: '01',
      name: 'DaBubble',
      technologies: 'Angular | TypeScript | Firebase',
      description: 'Chat messenger inspired by Slack. It offers group chats, direct messages and a search bar. Register, use the guest login or simply use your Google account.',
      githubLink: 'https://github.com/matteutsch/daBubble',
      webLink: 'https://dabubble.gheorghii-popovici.de',
      imgSrc: 'dabubble.png'
    },
    {
      nr: '02',
      name: 'Join',
      technologies: 'Angular | TypeScript | HTML CSS | Firebase',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and dropfunctions, assign users and categories.',
      githubLink: 'https://github.com/Gheorghii28/join-with-angular/tree/7185a99efe967ced8729d6e1b8889a695623b3ca',
      webLink: 'https://join.gheorghii-popovici.de',
      imgSrc: 'project-join1.jpg'
    },
    {
      nr: '03',
      name: 'El Polo Loco',
      technologies: 'JavaScript | HTML | CSS',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.',
      githubLink: 'https://github.com/Gheorghii28/el-pollo-loco/tree/dda51543fe6fc54861fd4e8f24f46b945a7ea1cc',
      webLink: 'https://el-pollo-loco.gheorghii-popovici.de',
      imgSrc: 'project-el-pollo-loco.jpg'
    },
    {
      nr: '04',
      name: 'Pokédex',
      technologies: 'JavaScript | HTML | CSS | Api',
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      githubLink: 'https://github.com/Gheorghii28/pokedex/tree/42531b6862a8298859c3396e2900744463990ce9',
      webLink: 'https://pokedex.gheorghii-popovici.de',
      imgSrc: 'project-pokedex.jpg'
    }
  ]

  isMobileView = false;
  projectStates: boolean[] = [];

  @ViewChildren('projectElement') projectElements!: QueryList<ElementRef>;

  constructor(private renderer: Renderer2) { }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.projectElements.forEach((element, i) => {
      const rect = element.nativeElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const isFullyVisible = rect.top >= 0 && rect.bottom <= windowHeight;
      this.projectStates[i] = isFullyVisible;
      if (this.isMobileView && this.projectStates[i]) {
        this.performMobileHoverActions(i);
      }
    });
  }

  ngOnInit() {
    this.isMobileView = window.innerWidth <= 480;
    this.projectStates = new Array(this.projects.length).fill(false);
  }

  getProjectClass(i: number): string {
    return i % 2 !== 0 ? 'odd-project-class' : '';
  }

  performMobileHoverActions(index: number) {
    const projectElement = this.projectElements.toArray()[index].nativeElement;
    const frameElement = projectElement.querySelector('.frame');
    const infoElement = projectElement.querySelector('.info');
    const arrowCircleElement = projectElement.querySelector('.arrow-circle');
    const projectImgElement = projectElement.querySelector('.project-img');

    if (this.isMobileView && this.projectStates[index]) {

      if (projectElement.classList.contains('odd-project-class')) {
        if (frameElement) {
          this.renderer.setStyle(frameElement, 'opacity', '1');
          this.renderer.setStyle(frameElement, 'transform', 'translateX(-1vw) translateY(1vw)');
          this.renderer.setStyle(frameElement, 'transition', 'transform 225ms ease-in-out');
        }
        if (infoElement) {
          this.renderer.setStyle(infoElement, 'align-items', 'flex-start');
          this.renderer.setStyle(infoElement, 'transform', 'translateX(0vw)');
          this.renderer.setStyle(infoElement, 'transition', 'transform 225ms ease-in-out');
        }
        if (arrowCircleElement) {
          this.renderer.setStyle(arrowCircleElement, 'transform', 'rotate(135deg) scale(1.5)');
          this.renderer.setStyle(arrowCircleElement, 'transition', 'transform 225ms ease-in-out');
        }
        if (projectImgElement) {
          this.renderer.setStyle(projectImgElement, 'filter', 'grayscale(0)');
        }
      } else {
        if (frameElement) {
          this.renderer.setStyle(frameElement, 'opacity', '1');
          this.renderer.setStyle(frameElement, 'transform', 'translateX(1vw) translateY(1vw)');
          this.renderer.setStyle(frameElement, 'transition', 'transform 225ms ease-in-out');
        }
        if (infoElement) {
          this.renderer.setStyle(infoElement, 'transform', 'translateX(0vw)');
          this.renderer.setStyle(infoElement, 'transition', 'transform 225ms ease-in-out');
        }
        if (arrowCircleElement) {
          this.renderer.setStyle(arrowCircleElement, 'transform', 'rotate(-135deg) scale(1.5)');
          this.renderer.setStyle(arrowCircleElement, 'transition', 'transform 225ms ease-in-out');
        }
        if (projectImgElement) {
          this.renderer.setStyle(projectImgElement, 'filter', 'grayscale(0)');
        }
      }
    } 
  }
}