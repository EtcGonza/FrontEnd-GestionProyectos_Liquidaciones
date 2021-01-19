import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionarProyectosPageRoutingModule } from './gestionar-proyectos-routing.module';

import { GestionarProyectosPage } from './gestionar-proyectos.page';
import { MyComponentsModule } from '../../modules/my-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionarProyectosPageRoutingModule,
    MyComponentsModule
  ],
  declarations: [GestionarProyectosPage]
})
export class GestionarProyectosPageModule {}
