import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-component.html',
  styleUrls: ['./form-component.css']
})
export class FormComponent {
  nombre = '';

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.nombre = input.value;
  }
}
