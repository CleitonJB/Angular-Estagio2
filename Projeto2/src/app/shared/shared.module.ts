import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnOneComponent } from './layouts/column-one/column-one.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router'; //para o routerLink funcionar

import { MatToolbarModule } from '@angular/material/toolbar'; //Angular material

import { FormsModule, ReactiveFormsModule } from '@angular/forms';               //formúlarios template driven  e reactive

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ColumnOneComponent, HeaderComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,                 //para o routerLink funcionar
    MatToolbarModule,             //Angular material
    FormsModule,                  //formúlarios template driven
    ReactiveFormsModule           // formulários reactive
  ],
  exports: [
    ColumnOneComponent
  ]
})
export class SharedModule { }
