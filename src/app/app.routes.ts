import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'calculator',
    loadComponent: () =>
      import('./lesson-1/math-operations/math-operations.component').then(
        (m) => m.MathOperationsComponent,
      ),
  },
  {
    path: 'counter',
    loadComponent: () =>
      import('./lesson-1/counter/counter.component').then(
        (m) => m.CounterComponent,
      ),
  },
  {
    path: 'students',
    loadComponent: () =>
      import('./lesson-2/students/students.component').then(
        (m) => m.StudentsComponent,
      ),
  },
  {
    path: 'routing',
    loadComponent: () =>
      import('./lesson-4/home-for-lesson-4/home/home.component').then(
        (m) => m.HomeComponent4,
      ),
    children: [
      {
        path: 'users',
        loadComponent: () =>
          import('./lesson-4/home-for-lesson-4/pages/users-page/users-page.component').then(
            (m) => m.UsersPageComponent,
          ),
      },
      {
        path: 'users/:id',
        loadComponent: () =>
          import('./lesson-4/home-for-lesson-4/pages/user-detail-page/user-detail-page.component').then(
            (m) => m.UserDetailPageComponent,
          ),
      },
      {
        path: 'login',
        loadComponent: () =>
          import('./lesson-4/home-for-lesson-4/pages/login-page/login-page.component').then(
            (m) => m.LoginPageComponent,
          ),
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
