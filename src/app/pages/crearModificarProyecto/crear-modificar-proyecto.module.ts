import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearModificarProyectoPageRoutingModule } from './crear-modificar-proyecto-routing.module';

import { CrearModificarProyectoPage } from './crear-modificar-proyecto.page';
import { MyComponentsModule } from '../../modules/my-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MyComponentsModule,
    CrearModificarProyectoPageRoutingModule
  ],
  declarations: [CrearModificarProyectoPage]
})
export class CrearModificarProyectoPageModule {}
