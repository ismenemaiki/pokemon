import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRouting } from './app.routing';

import { AppComponent } from './app.component';
import { CartasComponent } from './components/cartas/cartas.component';
import { DetalhesComponent } from './components/detalhes/detalhes.component';
import { HttpClientModule } from '@angular/common/http';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    AppComponent,
    CartasComponent,
    DetalhesComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    HttpClientModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
