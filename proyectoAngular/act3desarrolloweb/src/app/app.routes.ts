import { Routes } from '@angular/router';
import { Home } from './views/home/home';
import { Contacto } from './views/contacto/contacto';
import { Usuarios } from './views/usuarios/usuarios';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'contacto', component: Contacto },
  { path: 'usuarios', component: Usuarios },
];


