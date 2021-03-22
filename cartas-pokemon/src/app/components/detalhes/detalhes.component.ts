import { GerenciadorDeChamadasService } from './../../services/gerenciador-de-chamadas.service';
import { Component, OnInit, OnChanges, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalManager } from 'ngb-modal';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss'],
})
export class DetalhesComponent implements OnInit, OnChanges {
  @ViewChild('modalDetalhes') modalDetalhes;
  private modalRef;
  idCarta: string;
  carta: any = []; // tipar
  constructor(
    private route: ActivatedRoute,
    private gerenciador: GerenciadorDeChamadasService,
    private modal: ModalManager
  ) {}

  abrirModal() {
    this.modalRef = this.modal.open(this.modalDetalhes, {
      size: '',
      modalClass: 'modalDetalhes',
      hideCloseButton: false,
      centered: false,
      backdrop: true,
      animation: true,
      keyboard: true,
      closeOnOutsideClick: true,
    });
  }
  fecharModal() {
    this.modal.close(this.modalRef);
  }
  ngOnChanges() {
    this.idCarta = this.route.snapshot.params.id;
  }
  ngOnInit() {
    this.idCarta = this.route.snapshot.params.id;
    this.getDetalhesCarta();
  }
  getDetalhesCarta() {
    // 1° busca da api 2° busca do mock
    this.gerenciador.getCartaPorId(this.idCarta).subscribe((it: any) => {this.carta = it.body.data; console.log('RETORNO API: ', it)});
    // this.gerenciador.getCartaPorId(this.idCarta).subscribe((it: any) => {
    //   this.carta = it.body.data; console.log('RETORNO MOCK', it.body.data);
    //  });
  }
  getLogoCost(cost): string {
    return `../../../assets/img/costs/${cost}.png`;
  }
}
