import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-home-for-lesson-4',
  standalone: true,
  imports: [RouterOutlet,UsersPageComponent,HomeComponent],
  templateUrl: './home-for-lesson-4.component.html',
  styleUrl: './home-for-lesson-4.component.css'
})
export class HomeForLesson4Component {

}
