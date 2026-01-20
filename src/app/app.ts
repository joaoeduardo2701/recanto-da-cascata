import { Component, signal } from '@angular/core';
import { NavbarComponent } from "./components/navbar/navbar";
import { Hero } from "./components/hero/hero";
import { Sobre } from "./components/sobre/sobre";
import { Galeria } from "./components/galeria/galeria";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, Hero, Sobre, Galeria],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('recanto-cascata');
}
