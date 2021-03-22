
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class ComponentesCompartilhadosModule { }
