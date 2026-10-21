import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nev } from './nev/nev';
import { Footer } from './page/footer/footer';
@Component({
  imports: [  Footer , Nev ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('myapp');
}
