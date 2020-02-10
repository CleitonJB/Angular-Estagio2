import { Component, OnInit } from '@angular/core';

import { ProdutoService } from './../../../shared/services/produto_sc/produto.service';
import { Produto } from 'src/app/models/produto.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  produtos: Produto[];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.mostrar();
  }

  mostrar(){
    this.produtoService.mostrarProdutos().subscribe(dados => this.produtos = dados);
  }

}
