import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    // Verifica si el usuario ha iniciado sesión correctamente
    if (!localStorage.getItem('sesionIniciada') || localStorage.getItem('sesionIniciada') !== 'true') {
      // Si el usuario no ha iniciado sesión correctamente, redirige a "login.component.html"
      this.router.navigate(['login']);
    }
  }

  cerrarSesion() {
    // Elimina el item "sesionIniciada" del LocalStorage
    localStorage.removeItem('sesionIniciada');
    // Redirecciona a la página de inicio de sesión
    this.router.navigate(['login']);
  }

  mostrarOpciones() {
    var opciones = document.querySelector('.opciones');
    opciones?.classList.toggle('show');
  }
}