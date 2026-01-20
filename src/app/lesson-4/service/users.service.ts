import { Injectable } from '@angular/core';
import { UserInterface } from '../models/user-inteface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: UserInterface[] = [
    {
      id: 1,
      name: 'Abdurizo',
    },
    {
      id: 2,
      name: 'Jaxongir',
    },
    {
      id: 3,
      name: 'Toir',
    },
    {
      id: 4,
      name: 'Momin',
    },
    {
      id: 5,
      name: 'Latif',
    },
  ];
  getUserId(id: number): UserInterface | undefined {
    return this.users.find((user)=> user.id === id);
  }
  constructor() {}
}
