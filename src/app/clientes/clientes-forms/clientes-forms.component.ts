import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes-forms',
  templateUrl: './clientes-forms.component.html',
  styleUrls: ['./clientes-forms.component.css']
})
export class ClientesFormsComponent implements OnInit {

  cliente: Cliente;

  constructor() { }

  ngOnInit(): void {
  }

}