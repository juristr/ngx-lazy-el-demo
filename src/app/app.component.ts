import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lazydemo';
  isVisible = false;

  people = [
    {
      name: 'Juri'
    },
    {
      name: 'Thomas'
    }
  ];

  addPerson() {
    this.people.push({
      name: 'Igor'
    });
  }
}
