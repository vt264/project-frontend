import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovimientoComponent } from './movimiento.component';
import { NuevoMovimientoComponent } from './pages/nuevo-movimiento/nuevo-movimiento.component';

const routes: Routes = [
  {
    path: '',
    component: MovimientoComponent
  },
  {
    path: 'nuevo',
    component: NuevoMovimientoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovimientoRoutingModule { }
