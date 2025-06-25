import { Component } from '@angular/core';
import { UserCard } from '../user-card/user-card';
import { CommonModule } from '@angular/common';

interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserCard, CommonModule],
  templateUrl: './user-list.html',
  styleUrls: ['./user-list.css']
})
export class UserList {
  users: User[] = [
    { id: 1, name: 'Ana', email: 'ana@mail.com' },
    { id: 2, name: 'Luis', email: 'luis@mail.com' }
  ];
}
