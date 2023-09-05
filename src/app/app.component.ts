import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    const htmlElement = document.querySelector('html');
    if (htmlElement) {
      htmlElement.style.scrollBehavior = 'smooth';
    }
  }
}