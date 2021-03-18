
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { CartasComponent } from './components/cartas/cartas.component';
import { DetalhesComponent } from './components/detalhes/detalhes.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: CartasComponent },
      { path: 'detalhes/:id', component: DetalhesComponent },
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],
})
export class AppRouting {}
