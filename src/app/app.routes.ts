import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'calculator',
    loadComponent: () =>
      import('./math-operations/math-operations.component').then(
        (m) => m.MathOperationsComponent,
      ),
  },
  {
    path: 'counter',
    loadComponent: () =>
      import('./counter/counter.component').then((m) => m.CounterComponent),
  },
  {
    path: 'students',
    loadComponent: () =>
      import('./students/students.component').then((m) => m.StudentsComponent),
  },
];
