import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  projects = [
    {
      nr: '01',
      name: 'Join',
      technologies: 'Angular | TypeScript | HTML CSS | Firebase',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and dropfunctions, assign users and categories.',
      githubLink: 'https://github.com/Gheorghii28/join/tree/6ff709f69cf00b0d44486d3aa5c1dbad73bd3361',
      webLink: 'https://gheorghii-popovici.developerakademie.net/join/index.html',
      imgSrc: 'project-join1.jpg'
    },
    {
      nr: '02',
      name: 'El Polo Loco',
      technologies: 'JavaScript | HTML | CSS',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.',
      githubLink: 'https://github.com/Gheorghii28/el-pollo-loco/tree/dda51543fe6fc54861fd4e8f24f46b945a7ea1cc',
      webLink: 'https://gheorghii-popovici.developerakademie.net/elpolloloco/index.html',
      imgSrc: 'project-el-pollo-loco.jpg'
    },
    {
      nr: '03',
      name: 'Pokédex',
      technologies: 'JavaScript | HTML | CSS | Api',
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      githubLink: 'https://github.com/Gheorghii28/pokedex/tree/42531b6862a8298859c3396e2900744463990ce9',
      webLink: 'https://gheorghii-popovici.developerakademie.net/pokedex/index.html',
      imgSrc: 'project-pokedex.jpg'
    }
  ]
}