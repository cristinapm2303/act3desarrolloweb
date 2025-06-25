import { Component } from '@angular/core';
import { UserList } from '../../components/user-list/user-list';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [UserList],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css'
})
export class Usuarios {

}

