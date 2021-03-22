import {
  Component,
  Input,
  OnInit,
  AfterViewInit,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-paginacao',
  templateUrl: './paginacao.component.html',
  styleUrls: ['./paginacao.component.scss'],
})
export class PaginacaoComponent implements OnInit, AfterViewInit {
  @Input() paginaAtual: number;
  @Input() itensPorPagina: number;
  @Input() totalItens: number;
  @Output() paginaSelecionada = new EventEmitter();

  botoes = new Array();

  constructor() {}

  ngOnInit() {
    this.getNumeroBotoes();
  }
  ngAfterViewInit() {
    this.trocaPagina(1);
  }

  itemPorPaginas(): number {
    return Math.ceil(this.totalItens / this.itensPorPagina);
  }
  paginaAnterior(): void {
    if (this.paginaAtual > 1) {
      this.paginaAtual--;
      this.trocaPagina(this.paginaAtual);
    }
  }
  proximaPagina(): void {
    if (this.paginaAtual < this.itemPorPaginas()) {
      this.paginaAtual++;
      this.trocaPagina(this.paginaAtual);
    }
  }
  trocaPagina(pagina: number): void {
    this.paginaSelecionada.emit(pagina);
    const exibicaoPagina = document.getElementById('pagina_atual');
    (exibicaoPagina.innerHTML as any) = pagina;
  }
  getNumeroBotoes(): void {
    for (let i = 0; i < this.itemPorPaginas(); i++) {
      this.botoes.push(i + 1);
    }
  }
}
