import { Component, signal } from '@angular/core';
import { NavbarComponent } from "./components/navbar/navbar";
import { Hero } from "./components/hero/hero";
import { Sobre } from "./components/sobre/sobre";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, Hero, Sobre],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('recanto-cascata');
}
