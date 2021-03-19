import { GerenciadorDeChamadasService } from './../../services/gerenciador-de-chamadas.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit, OnChanges {
  idCarta: string;
  carta: any = []; // tipar
  constructor(
    private route: ActivatedRoute,
    private gerenciador: GerenciadorDeChamadasService,

    ) { }

  ngOnChanges() {
    this.idCarta = this.route.snapshot.params.id;
  }
  ngOnInit() {
    this.idCarta = this.route.snapshot.params.id;
    this.getDetalhesCarta();
  }
  getDetalhesCarta() {
    // 1° busca da api 2° busca do mock
    // this.gerenciador.getCartaPorId(this.idCarta).subscribe(it => {this.carta = it.body.data; console.log('MODEL: ', it)});
    this.gerenciador.getCartaPorId(this.idCarta).subscribe(it => {this.carta = it; console.log(it)});
  }

}
