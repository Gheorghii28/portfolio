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
      name: 'CRM',
      technologies: 'Laravel | PHP | MySQL',
      imgDescription: 'A person is sitting at a desk working on an iMac computer, displaying a CRM dashboard. The dashboard contains charts, statistics about customers, sales, transactions, and an overview of payments. On the left, there is a navigation menu with options like Dashboard, Kanban, Inbox, Customers, and Activities.',
      description: 'The CRM system provides efficient management of customers, tasks, and activities. It features a Kanban board with drag-and-drop functionality and calendar-based activity visualization. A robust search function allows users to quickly find data, while interactive tables and charts offer valuable insights.',
      githubLink: 'https://github.com/Gheorghii28/CRM',
      webLink: 'https://crm.gheorghii-popovici.de',
      imgSrc: 'crm.jpg'
    },
    {
      nr: '02',
      name: 'Spotifyify',
      technologies: 'Angular | TypeScript | RxJS | API',
      imgDescription: 'An iMac on a wooden desk shows an open music streaming app with a dark design. Various music genres and playlists are visible. On the desk, there are headphones, a keyboard, a mouse, and a stylish speaker. The background is a gray brick wall.',
      description: 'Single-page application that replicates the user interface and functionality of Spotify. It integrates the Spotify API to enable features such as music playback, search, and playlist and folder management with drag-and-drop capabilities. RxJS facilitates reactive data streams and ensures a seamless user experience.',
      githubLink: 'https://github.com/Gheorghii28/Spotifyify',
      webLink: 'https://angular-spotifyify.gheorghii-popovici.de',
      imgSrc: 'spotifyify.jpg'
    },
    {
      nr: '03',
      name: 'DaBubble',
      technologies: 'Angular | TypeScript | Firebase',
      imgDescription: 'A person is typing on a laptop with an open chat app called DaBubble. The screen displays various chat messages in German, with a clear user interface. The laptop’s keyboard has a Russian keyboard layout (Cyrillic). Tabs and browser windows are visible at the top.',
      description: 'Chat messenger inspired by Slack. It offers group chats, direct messages and a search bar. Register, use the guest login or simply use your Google account.',
      githubLink: 'https://github.com/Gheorghii28/daBubble.',
      webLink: 'https://dabubble.gheorghii-popovici.de',
      imgSrc: 'dabubble.png'
    },
    {
      nr: '04',
      name: 'Join',
      technologies: 'Angular | TypeScript | HTML CSS | Firebase',
      imgDescription: 'A desktop monitor displays an open Kanban project management tool called "Join". The user interface is clean and bright, organized into columns: "To do", "In progress", "Awaiting Feedback", and "Done". Each column contains colorful task cards labeled with tags like "Design", "Frontend", or "Backend". On the left side, there is a vertical navigation menu with icons for Summary, Board, Add Task, Contacts, and Legal Notice. The screen sits on a modern, tidy desk with a closed MacBook, a notebook, and a book.',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and dropfunctions, assign users and categories.',
      githubLink: 'https://github.com/Gheorghii28/join-with-angular',
      webLink: 'https://join.gheorghii-popovici.de',
      imgSrc: 'project-join1.jpg'
    },
    {
      nr: '05',
      name: 'El Polo Loco',
      technologies: 'JavaScript | HTML | CSS',
      imgDescription: 'A computer screen shows the colorful start screen of a game titled "El Pollo Loco". In the foreground, a cartoon character wearing a sombrero and poncho is giving two thumbs up. Around him are desert scenery with cacti, chickens, and hot sauce bottles. The background is light blue with clouds, and the title "EL POLLO LOCO" is prominently displayed in large yellow letters. The monitor sits on a minimalist desk with speakers, a smartphone, and potted plants.',
      description: 'A fusion of an object-oriented approach and the classic jump-and-run genre. Join Pepe on his mission to collect coins and find salt bottles to throw at the evil chickens.',
      githubLink: 'https://github.com/Gheorghii28/el-pollo-loco',
      webLink: 'https://el-pollo-loco.gheorghii-popovici.de',
      imgSrc: 'project-el-pollo-loco.jpg'
    },
    {
      nr: '06',
      name: 'Pokédex',
      technologies: 'JavaScript | HTML | CSS | Api',
      imgDescription: 'An iMac screen displays an interactive Pokédex web application. In the foreground, a window shows Pikachu along with its stats, including weight, height, type (Electric), abilities, and a radar chart. On the left and right are "Back" and "Next" buttons. In the background, many other Pokémon cards are visible in a dimmed grid layout. A person with a white sleeve is using a mouse on the right side of the keyboard. The desk is simple, and the background features artistic color gradients.',
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      githubLink: 'https://github.com/Gheorghii28/pokedex',
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