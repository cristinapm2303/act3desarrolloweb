import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: true,
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
