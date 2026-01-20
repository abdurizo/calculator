import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../../service/users.service';
import { UserInterface } from '../../../models/user-inteface';


@Component({
  selector: 'app-user-detail-page',
  standalone: true,
  imports: [],
  templateUrl: './user-detail-page.component.html',
  styleUrl: './user-detail-page.component.css',
})
export class UserDetailPageComponent {
  user?: UserInterface;
  constructor(
    private route: ActivatedRoute,
    private userService: UsersService
  ) {}
  ngOnInit() {
    const userId: string = this.route.snapshot.paramMap.get('id')!;
    this.user = this.userService.getUserId(+userId);
  }
}
