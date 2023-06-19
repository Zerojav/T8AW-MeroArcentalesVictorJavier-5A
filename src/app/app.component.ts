import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'T8AW-MeroArcentalesVictorJavier-5A';
  
  constructor(private router: Router) {}

  isLoginPage(): boolean {
    return this.router.url === '/login';
  }

  ngOnInit() {
    if (!localStorage.getItem('loggedIn') || localStorage.getItem('loggedIn') !== 'true') {
      // Si el usuario no ha iniciado sesión correctamente, redirige a "login.component.html"
      this.router.navigate(['login']);
    } 
  }
  cerrarSesion(){
    localStorage.setItem('loggedIn', 'false');
  }
}
