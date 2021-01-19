import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearModificarProyectoPage } from './crear-modificar-proyecto.page';

const routes: Routes = [
  {
    path: '',
    component: CrearModificarProyectoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearModificarProyectoPageRoutingModule {}
