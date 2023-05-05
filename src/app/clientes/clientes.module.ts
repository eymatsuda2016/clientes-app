import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesFormsComponent } from './clientes-forms/clientes-forms.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ClientesFormsComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule
  ],
  exports:[
    ClientesFormsComponent
  ]
})
export class ClientesModule { }
