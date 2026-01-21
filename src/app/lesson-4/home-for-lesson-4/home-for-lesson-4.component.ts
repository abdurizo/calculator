import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersPageComponent } from './pages/users-page/users-page.component';


@Component({
  selector: 'app-home-for-lesson-4',
  standalone: true,
  imports: [RouterOutlet,UsersPageComponent,],
  templateUrl: './home-for-lesson-4.component.html',
  styleUrl: './home-for-lesson-4.component.css'
})
export class HomeForLesson4Component {

}
