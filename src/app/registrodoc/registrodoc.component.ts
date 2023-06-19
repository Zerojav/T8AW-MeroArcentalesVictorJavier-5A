import { Component } from '@angular/core';

@Component({
  selector: 'app-registrodoc',
  templateUrl: './registrodoc.component.html',
  styleUrls: ['./registrodoc.component.css']
})
export class RegistrodocComponent {

  constructor() { }

  registrodoc() {
    const pnombre = (<HTMLInputElement>document.getElementById("pnombre")).value;
    const facultad = (<HTMLInputElement>document.getElementById("facultad")).value;
    const correo = (<HTMLInputElement>document.getElementById("correo")).value;
    const telefono = (<HTMLInputElement>document.getElementById("telefono")).value;
    const asignatura = (<HTMLInputElement>document.getElementById("asignatura")).value;
    const horaentrada = (<HTMLInputElement>document.getElementById("horaentrada")).value;
    const horasalida = (<HTMLInputElement>document.getElementById("horasalida")).value;

    if (pnombre === "" || facultad === "" || correo === "" || telefono === "" ||
     asignatura === "" || horaentrada === "" || horasalida === "") {
      alert("Por favor complete todos los campos requeridos.");
    } else {
      alert("Datos enviados");
      location.reload();
    }
  }
}

