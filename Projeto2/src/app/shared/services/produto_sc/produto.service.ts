import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';          //requisições http
import { Produto } from '../../../models/produto.model';    //modelo de produto

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  produtosUrl = 'http://vcmobile.com.br/VictorProjetoEstagio/Hackathon/WebApi/V01/Produtos_SelecionarTodos_Get';

  constructor(private http: HttpClient) { }
  
  editar(){
    
  }

  mostrarProdutos(){
    return this.http.get<Produto[]>(`${this.produtosUrl}`);
  }
  /*
  deletar(id: Produto){
    return this.http.delete<any[]>(`${this.produtosUrl}`);
  }
  */
}
