import { UsersService } from '../../../service/users.service';
import { UserInterface } from '../../../models/user-inteface';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { AdditionalTasksComponent } from '../../../../additional-tasks/additional-tasks.component';
import { ButtonHomeComponent } from '../../../../button-home/button-home.component';

@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [RouterLink,ButtonHomeComponent],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.css',
})
export class UsersPageComponent {
  users!: UserInterface[];
  constructor(private userService: UsersService) {
   
  }
  ngOnInit(){
     this.users = this.userService.users;
  }
}
