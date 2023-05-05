import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesFormsComponent } from './clientes-forms/clientes-forms.component';

const routes: Routes = [
  {path: 'clientes-form', component: ClientesFormsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
