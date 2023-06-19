import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: string = '';
  contrasena: string = '';

  constructor(private router: Router) {}

  iniciarSesion() {
    if (
      (this.usuario === 'admin' && this.contrasena === 'admin') ||
      (this.usuario === 'Javier' && this.contrasena === '1234')
    ) {
      // Iniciar sesión exitosamente
      localStorage.setItem('loggedIn', 'true');
      this.router.navigate(['index']);
    } else {
      // Mostrar mensaje de error
      alert('Credenciales incorrectas');
      location.reload();
    }
  }
}