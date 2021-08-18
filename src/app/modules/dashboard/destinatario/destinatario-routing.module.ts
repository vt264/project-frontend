import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinatarioComponent } from './destinatario.component';
import { NuevoDestinatarioComponent } from './pages/nuevo-destinatario/nuevo-destinatario.component';

const routes: Routes = [
  {
    path: '',
    component: DestinatarioComponent
  },
  {
    path: 'nuevo',
    component: NuevoDestinatarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DestinatarioRoutingModule { }
