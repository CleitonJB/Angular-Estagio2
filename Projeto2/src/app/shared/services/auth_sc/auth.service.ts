import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { User } from './../../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private logarUrl = "http://vcmobile.com.br/VictorProjetoEstagio/Hackathon/WebApi/V01/Operadores_ValidarLogin_Post";
  private cadastrarUrl = "http://vcmobile.com.br/VictorProjetoEstagio/Hackathon/WebApi/V01/Operadores_Incluir_Post";

  constructor(private http: HttpClient) {}

  cadastro(user: User){
    return this.http.post<any[]>(this.cadastrarUrl, user);
  }

  login(user: User){
    return this.http.post<any[]>(this.logarUrl, user);
  }


}
