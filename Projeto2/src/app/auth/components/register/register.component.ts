import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/shared/services/auth_sc/auth.service';
import { User } from 'src/app/models/user.model';                             //modelo de usuário

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usuario = new User(2, 'AMARO', '123456', 'AMARO-1', 0, '0001-01-01T00:00:00', 0, '0001-01-01T00:00:00');

  enviado = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    
  }

  registerUser(f){
    console.log(f);

    this.enviado = true;

    this.authService.cadastro(this.usuario)
    .subscribe(
      data => console.log('Foi!', data),
      error => console.log('Não foi', error)
    );
  }
  /*
  onSubmit(f: NgForm){
    console.log(f.value);
    console.log(f.valid);
  }
  */
}
