import { Component } from '@angular/core';
import { FormComponent } from '../../components/form-component/form-component';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.css']
})
export class Contacto {}

