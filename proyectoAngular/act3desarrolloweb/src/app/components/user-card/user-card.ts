import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  templateUrl: './user-card.html',
  styleUrls: ['./user-card.css']
})
export class UserCard {
  @Input() user!: { id: number; name: string; email: string };
}
