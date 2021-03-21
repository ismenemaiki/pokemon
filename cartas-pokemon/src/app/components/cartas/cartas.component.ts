import { Subject } from 'rxjs';
import { GerenciadorDeChamadasService } from './../../services/gerenciador-de-chamadas.service';
import { Component,  OnInit } from '@angular/core';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation } from 'swiper/core';
import { Router } from '@angular/router';

SwiperCore.use([Navigation]);

@Component({
  selector: 'app-cartas',
  templateUrl: './cartas.component.html',
  styleUrls: ['./cartas.component.scss'],
})
export class CartasComponent implements OnInit {
  paginaAtual = 1;
  itensPorPagina = 5;


  cartas: Array<any>;
  cartas2: Array<any>;
  exibir = [];
  changeLog = [];
  constructor(
    private gerenciador: GerenciadorDeChamadasService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getCartas();
    this.cartas2 = [
      { adName: 'maiki' },
      { adName: 'm' },
      { adName: 'j' },
      { adName: 'AdName 4' },
      { adName: 'AdName 5' },
      { adName: 'AdName 6' },
      { adName: 'AdName 7' },
      { adName: 'AdName 8' },
      { adName: 'AdName 9' },
      { adName: 'AdName 10' },
      { adName: 'AdName 10' },
      { adName: 'AdName 10' },
      { adName: 'AdName 10' },
      { adName: 'AdName 10' },
      { adName: 'AdName 10' },
    ];
  }
  recebePagina(pagina: number): void {
    this.paginaAtual = pagina;
    this.limpaArray(this.exibir);
    for (let i = (pagina - 1) * this.itensPorPagina; i < pagina * this.itensPorPagina; i++) {
      if (this.cartas2[i]) {
        this.exibir.push(this.cartas2[i]);
      }
    }
  }
  detalhes(id: string): void {
    console.log(id);
    this.router.navigate(['/detalhes', id]);
  }
  getCartas(): void {
    this.gerenciador.getCartas().subscribe((cartas) => {
      // this.cartas = cartas.body.data;
      this.gerenciador.getCartas().subscribe((it: any) => {
        this.cartas = [it];
      });
    });
  }
  buscarPorNome(nome: string) {
    this.cartas2.forEach((pokemon) => {
      if (pokemon.adName === nome) {
        this.limpaArray(this.exibir);
        this.exibir.push(pokemon);
        // this.itensPorPagina = 2;
        this.ngOnInit();
      }
    });
    // if (nome === '') {
    //   this.limpaArray(this.exibir);
    //   this.exibir.push(this.cartas2);
    // }
  }
  limpaArray(array: Array<any>): void {
    while (array.length) {
      array.pop();
   }
  }
}
