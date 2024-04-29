import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Hello World...';
  score: number = 1000;

  empolyee: any = {
    name: 'Sakin',
    Age: 22,
    State: 'BD',
  };
}
