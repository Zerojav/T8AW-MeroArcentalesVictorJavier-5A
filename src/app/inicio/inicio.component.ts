import { Component } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  mensaje() {
    alert("Asistencia Registrada");
    location.reload();
  }
  importarXML() {
    $.ajax({
      type: 'GET',
      url: '../../resources/profesores.xml',
      dataType: 'xml'
    }).done((data) => {
      $('#tabla-asistencia tbody').empty();
      $(data).find('profesor').each(function() {
        let fila = $('<tr>');
        fila.append($(`<td>${$(this).find('nombre').text()}</td>`)),
        fila.append($(`<td>${$(this).find('facultad').text()}</td>`)),
        fila.append($(`<td>${$(this).find('asignatura').text()}</td>`));
        fila.append($(`<td>${$(this).find('correo').text()}</td>`));
        fila.append($(`<td>${$(this).find('telefono').text()}</td>`));
        fila.append($(`<td>${$(this).find('horadentradaysalida').text()}</td>`));
        let tdAsistencia = $('<td>');
        let checkbox = $('<input type="checkbox">');
        tdAsistencia.append(checkbox);
        fila.append(tdAsistencia);
        $('#tabla-asistencia tbody').append(fila);
      });
    });
  }

  importarJSON() {
    $.ajax({
      type: 'GET',
      url: '../../resources/profesores.json',
      dataType: 'json'
    }).done((data) => {
      $('#tabla-asistencia tbody').empty();
      $.each(data, function(indice, profesor) {
        let fila = $('<tr>');
        fila.append($(`<td>${profesor.nombre}</td>`));
        fila.append($(`<td>${profesor.facultad}</td>`));
        fila.append($(`<td>${profesor.asignatura}</td>`));
        fila.append($(`<td>${profesor.correo}</td>`));
        fila.append($(`<td>${profesor.telefono}</td>`));
        fila.append($(`<td>${profesor.horaEyS}</td>`));
        let checkbox = $('<input>').attr('type', 'checkbox').attr('name', 'asistencia');
        fila.append($('<td>').append(checkbox));
        $('#tabla-asistencia tbody').append(fila);
      });
    });
  }

}
