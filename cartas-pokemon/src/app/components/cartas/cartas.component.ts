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
  viaMock: boolean = true;
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
    /*
      Quando viaMock é setado como true, o observable do getCartas() é resolvido ANTES e this.cartasMock é entregue completo aqui.
      Quando false, o observable do getCartas() é resolvido DEPOIS por isso não entrega o objeto a tempo.
      Creio que seja por conta do tamanho e da demora em resolver. Não tive tempo de conseguir entender.
    */
    console.log('Variavel com o retorno da chamada: ', this.cartasMock);
    for (
      let i = (pagina - 1) * this.itensPorPagina;
      i < pagina * this.itensPorPagina;
      i++
    ) {
      if (this.viaMock) {
        if (this.cartasMock) {
          this.exibir.push(this.cartasMock[i]);
        }
      } else {
        if (this.cartas) {
          this.exibir.push(this.cartas[i]);
        }
      }
    }
  }
  detalhes(id: string): void {
    console.log(id);
    this.router.navigate(['/detalhes', id]);
  }
  getCartas(): void {
    if (this.isDesktop) {
      this.gerenciador.getCartas(this.viaMock).subscribe({
        next: retorno => (this.viaMock ? this.cartasMock = retorno : this.cartas = retorno),
        error: err => console.error('Erro na requisição: ' + err),
        complete: () => console.log('Finalizado a requisição ao getCartas()')
      });
      this.recebePagina(1);
    } else {
      this.gerenciador.getCartas(this.viaMock).subscribe({
        next: retorno => (this.cartas = retorno),
        error: err => console.error('Erro na requisição: ' + err),
        complete: () => console.log('Finalizado a requisição ao getCartas()')
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
