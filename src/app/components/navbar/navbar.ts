import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class NavbarComponent {
  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}