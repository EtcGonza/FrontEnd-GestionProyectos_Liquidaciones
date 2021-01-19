import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../../models/proyecto';
import { MensagesAlertService } from '../../services/mensages-alert.service';
import { Storage } from '@ionic/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EstadoProyecto } from '../../models/estadoProyecto';
import { Cliente } from '../../models/Cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-modificar-proyecto',
  templateUrl: './crear-modificar-proyecto.page.html',
  styleUrls: ['./crear-modificar-proyecto.page.scss'],
})
export class CrearModificarProyectoPage implements OnInit {
  clientes: Cliente [] = [];

  miProyecto: Proyecto = new Proyecto();
  modificandoProyecto: boolean;

  formulario: FormGroup;

  estadosProyecto: string [];
  fechaInicioFormateada: string;

  constructor(private _mensagesAlertService: MensagesAlertService, private storage: Storage, private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.formulario = this.formBuilder.group({
        idProyecto: [null],
        idCliente: [null],
        cliente: [null, Validators.required],
        nombre: [null ,Validators.required],
        descripcion: [null ,Validators.required],
        estado: ['En Proceso',[Validators.required]],
        fechaInicio: [new Date() ,Validators.required],
        fechaFin: [null]
      });
  }

  async ionViewDidEnter() {
    this.estadosProyecto = EstadoProyecto.values();
    this.miProyecto = await this.storage.get('_modificarProyecto') || null;
    this.formulario.controls.estado.disable();

    let cliente = new Cliente();
    cliente.nombre = 'Disney';
    this.clientes.push(cliente);
    
    if (this.miProyecto) {
      this.modificandoProyecto = true;
      this.formulario.controls.estado.enable();
      this.fechaInicioFormateada = new Date(this.miProyecto.fechaInicio).toLocaleDateString();
      this.formulario.patchValue(this.miProyecto);
    }
  }

  guardarProyecto() {
    console.log(this.formulario.value);
    if(this.formulario.valid) {
      console.log('formulario valido', this.formulario.value);
      this._mensagesAlertService.ventanaExitosa('Proyecto creado', 'Ahora puede agregar recursos, asignar tareas y cambiar el estado del mismo');
    } else {
      this._mensagesAlertService.ventanaWarning('Formulario invalido', 'Todos los campos son obligatorios');
    }
  }

  volver() {
    this.router.navigateByUrl('gestionarProyectos', {replaceUrl:true});
  }
}
