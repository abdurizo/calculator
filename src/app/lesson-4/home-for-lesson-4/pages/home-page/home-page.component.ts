import { Component } from '@angular/core';
import { UsersService } from '../../../service/users.service';
import { UsersPageComponent } from '../users-page/users-page.component';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [UsersPageComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {}
