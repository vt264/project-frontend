import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'inicio',
        loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule)
      },
      {
        path: 'destinatario',
        loadChildren: () => import('./destinatario/destinatario.module').then(m => m.DestinatarioModule)
      },
      {
        path: 'movimiento',
        loadChildren: () => import('./movimiento/movimiento.module').then(m => m.MovimientoModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
