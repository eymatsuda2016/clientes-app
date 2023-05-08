import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClientesService } from '../../clientes.service';


@Component({
  selector: 'app-clientes-forms',
  templateUrl: './clientes-forms.component.html',
  styleUrls: ['./clientes-forms.component.css'],
})
export class ClientesFormsComponent implements OnInit {
  cliente: Cliente;
  success : boolean = false;
  errors : String[];

  constructor(private service: ClientesService) {
      this.cliente = new Cliente();
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.service
    .salvar(this.cliente)
    .subscribe(response => {
      this.success = true;
      this.errors = null;
      this.cliente = response;
    }, errorResponse => {
      this.success = false;
      this.errors = errorResponse.error.errors;
    }
    )
  }
}
