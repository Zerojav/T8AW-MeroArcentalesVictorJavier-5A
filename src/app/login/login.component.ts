import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  usuario: string = '';
  contrasena: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  iniciarSesion() {
    if (
      (this.usuario === 'admin' && this.contrasena === 'admin') ||
      (this.usuario === 'Javier' && this.contrasena === '1234')
    ) {
      // Iniciar sesión exitosamente
      localStorage.setItem('loggedIn', 'true');
      this.router.navigate(['inicio']);
    } else {
      // Mostrar mensaje de error
      alert('Credenciales incorrectas');
      location.reload();
    }
  }
}