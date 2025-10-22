import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from './pages/navbar/navbar';
import { Footer } from './pages/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, NavbarComponent, Footer],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Iqsan');
}
