import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/shared/services/auth_sc/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {}

  constructor(private authService: AuthService) { }

  ngOnInit() {
    
  }


  onSubmit(){
    /*this.authService.login(this.loginUserData)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    ); */
  }
}
