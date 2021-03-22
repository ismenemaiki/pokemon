import { BrowserDetectService } from './../../services/browser-detect.service';
import { GerenciadorDeChamadasService } from './../../services/gerenciador-de-chamadas.service';
import { Component, OnInit } from '@angular/core';
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
  isMobile: boolean = false;
  isDesktop: boolean = false;

  paginaAtual = 1;
  itensPorPagina = 10;

  cartas = [];
  cartasMock = [];
  exibir = [];
  constructor(
    private gerenciador: GerenciadorDeChamadasService,
    private router: Router,
    private browserDetect: BrowserDetectService
  ) {}
  ngOnInit() {
    this.isMobile = this.browserDetect.isMobile();
    this.isDesktop = this.browserDetect.isDesktop();
    this.getCartas();
  }

  recebePagina(pagina: number): void {
    this.paginaAtual = pagina;
    this.limpaArray(this.exibir);
    for (
      let i = (pagina - 1) * this.itensPorPagina;
      i < pagina * this.itensPorPagina;
      i++
    ) {
      if (this.cartasMock) {
        this.exibir.push(this.cartasMock[i]);
      }
    }
  }
  detalhes(id: string): void {
    console.log(id);
    this.router.navigate(['/detalhes', id]);
  }
  getCartas() {
    if (this.isDesktop) {
      this.gerenciador.getCartas().subscribe((it: any) => {
        this.cartasMock = it;
      });
      this.recebePagina(1);
    } else {
      this.gerenciador.getCartas().subscribe((it: any) => {
        this.cartas = it;
      });
    }
  }
  buscarPorNome(nome: string): void {
    this.cartasMock.forEach((pokemon) => {
      if (pokemon.name === nome) {
        this.limpaArray(this.exibir);
        this.exibir.push(pokemon);
      }
      if (nome === '') {
        this.limpaArray(this.exibir);
        this.recebePagina(1);
      }
    });
  }
  limpaArray(array: Array<any>): void {
    while (array.length) {
      array.pop();
    }
  }
}
