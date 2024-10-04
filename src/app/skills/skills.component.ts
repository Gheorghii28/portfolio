import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})

export class SkillsComponent {

  public skills = [
    'Angular',
    'Typescript',
    'JavaScript',
    'HTML',
    'CSS',
    'TailwindCSS',
    'Material-Design',
    'Flowbite',
    'PHP',
    'Laravel',
    'MySQL',
    'Firebase',
    'Git',
    'Scrum',
    'Rest-Api',
  ];

  constructor() { }

  returnSkillName(value: string) {
    if (value == 'Material-Design') {
      value = value.replace('-', ' ');
    }
    return value;
  }

  returnSvgSrc(value: string) {
    value = `${value.toLowerCase()}.svg`;
    return value;
  }
}