import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { CartasComponent } from './components/cartas/cartas.component';
import { DetalhesComponent } from './components/detalhes/detalhes.component';
import { HttpClientModule } from '@angular/common/http';
import { SwiperModule } from 'swiper/angular';
import { ModalComponent, ModalModule } from 'ngb-modal';
import { ComponentesCompartilhadosModule } from './components/shared/paginacao/componentes-compartilhados.module';

@NgModule({
  declarations: [
    AppComponent,
    CartasComponent,
    DetalhesComponent,
  ],
  imports: [
    BrowserModule,
    AppRouting,
    HttpClientModule,
    SwiperModule,
    ModalModule,
    ComponentesCompartilhadosModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents: [ModalComponent]
})
export class AppModule { }
