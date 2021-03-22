
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PaginacaoComponent } from './paginacao.component';

@NgModule({
  declarations: [
    PaginacaoComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  exports: [
    PaginacaoComponent
  ]
})
export class ComponentesCompartilhadosModule { }
