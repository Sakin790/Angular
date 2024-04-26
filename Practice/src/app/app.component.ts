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
  title = 'Practice';
  name: string = 'Sakin';
  isLoggedin: boolean = true;

  empolyee: any[] = [
    { id: 100, name: 'Sakin' },
    { id: 102, name: 'Sifat' },
    { id: 103, name: 'Naju' },
    { id: 104, name: 'Wakil' },
  ];

  showName() {
    console.log(this.name);
  }

  showEmp() {
    console.log(this.empolyee[1]);
  }
  gender1: string = 'male';
  gender2: string = 'Female';

  chnageGen() {
    this.gender1 = this.gender2;
  }
}
