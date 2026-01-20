import { Component, signal } from '@angular/core';
import { NavbarComponent } from "./components/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('recanto-cascata');
}
