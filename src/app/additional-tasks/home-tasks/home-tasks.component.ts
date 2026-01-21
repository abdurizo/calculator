import { Component } from '@angular/core';
import { ButtonHomeComponent } from '../../button-home/button-home.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-tasks',
  standalone: true,
 imports: [ButtonHomeComponent,RouterLink],
  templateUrl: './home-tasks.component.html',
  styleUrl: './home-tasks.component.css'
})
export class HomeTasksComponent {

}
