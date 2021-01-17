import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class MensagesAlertService {

  constructor() {}

  ventanaError(titulo: string, texto: string) {
    Swal.fire({
      icon: 'error',
      title: titulo,
      text: texto,
      showConfirmButton: true,
      heightAuto: false
    })
  }

  ventanaWarning(titulo: string, texto: string) {
    Swal.fire({
      icon: 'warning',
      title: titulo,
      text: texto,
      showConfirmButton: true,
      confirmButtonText: 'Aceptar',
      heightAuto: false
    })
  }
}
