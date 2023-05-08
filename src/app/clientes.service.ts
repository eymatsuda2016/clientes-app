import { Cliente } from './clientes/cliente';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) {

  }

  salvar(cliente : Cliente) : Observable<Cliente>{
      return this.http.post<Cliente> ('http://localhost:8080/api/clientes', cliente)
  }

  getCLiente(): Cliente{
    let cliente : Cliente = new Cliente();
    cliente.nome = "Fulano de Tal";
    cliente.cpf = '88888888888';
    return cliente;
  }
}
