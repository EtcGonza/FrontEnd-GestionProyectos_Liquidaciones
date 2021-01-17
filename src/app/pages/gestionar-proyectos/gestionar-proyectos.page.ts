import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../../models/proyecto';
import { MensagesAlertService } from '../../services/mensages-alert.service';
import { Storage } from '@ionic/storage';
import { Cliente } from '../../models/Cliente';
import { SweetAlertResult } from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestionar-proyectos',
  templateUrl: './gestionar-proyectos.page.html',
  styleUrls: ['./gestionar-proyectos.page.scss'],
})
export class GestionarProyectosPage implements OnInit {

  proyectos: Proyecto [] = [];

  constructor(private _mensagesAlertService: MensagesAlertService, private storage: Storage, private router: Router) {}

  ngOnInit() {
    let proyecto1 = new Proyecto();
    proyecto1.estado = 'Activo';
    proyecto1.idProyecto = 1;
    proyecto1.nombre = 'Marvel';
    proyecto1.fechaInicio = new Date();

    let cliente = new Cliente();
    cliente.direccion = 'Pellegrini 515';
    cliente.idCliente = 0;
    cliente.nombre = 'Disney';
    cliente.telefono = '3413496691';

    proyecto1.cliente = cliente;
    this.proyectos.push(proyecto1);

    let proyecto2 = new Proyecto();
    proyecto2.estado = 'Activo';
    proyecto2.idProyecto = 2;
    proyecto2.nombre = 'Intel';
    proyecto2.fechaInicio = new Date();

    let cliente2 = new Cliente();
    cliente2.direccion = 'Roca 1566';
    cliente2.idCliente = 1;
    cliente2.nombre = 'Globant';
    cliente2.telefono = '4860399';

    proyecto2.cliente = cliente2;
    this.proyectos.push(proyecto2);
  }

  editarProyecto(proyecto: any) {
    this.storage.set('_modificarProyecto', proyecto);
    this.router.navigateByUrl('crearModificarProyecto', {replaceUrl: false});
  }

  borrarProyecto(proyecto: Proyecto) {
    this._mensagesAlertService.ventanaConfirmar('Borrar proyecto', `¿Esta seguro que desea borrar el proyecto '${proyecto.nombre}'?`)
    .then((result: SweetAlertResult) => {
      if(result.isConfirmed) {
        // Llamo endpoint para borrar proyecto.
      }
    });
  }

  crearProyecto() {
    this.storage.remove('_modificarProyecto');
    this.router.navigateByUrl('crearModificarProyecto', {replaceUrl: false});
  }

}
