import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Módulos do projeto
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//http para funcionar as requisições
import { HttpClientModule } from '@angular/common/http';
//importaçao para formulários angular
import { FormsModule, ReactiveFormsModule } from '@angular/forms';               //formúlarios template driven  e reactive

import { AuthService } from './shared/services/auth_sc/auth.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    AuthModule,
    HttpClientModule,
    FormsModule,                  //formúlarios template driven
    ReactiveFormsModule           // formulários reactive
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
