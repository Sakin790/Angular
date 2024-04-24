import { Routes } from '@angular/router';
import { FirstComponent } from '../app/first/first.component';
import { SecondComponent } from '../app/second/second.component';

export const routes: Routes = [
  { path: 'first', component: FirstComponent },
  { path: 'second', component: SecondComponent },
];
