import { Component } from '@angular/core';
import { ButtonHomeComponent } from '../button-home/button-home.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-additional-tasks',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './additional-tasks.component.html',
  styleUrl: './additional-tasks.component.css'
})
export class AdditionalTasksComponent {

}
