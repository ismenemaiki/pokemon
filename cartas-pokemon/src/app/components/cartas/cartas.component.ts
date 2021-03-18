import { GerenciadorDeChamadasService } from './../../services/gerenciador-de-chamadas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartas',
  templateUrl: './cartas.component.html',
  styleUrls: ['./cartas.component.scss']
})
export class CartasComponent implements OnInit {

  cartas: Array<any>;
  constructor(private gerenciador: GerenciadorDeChamadasService) { }

  ngOnInit() {
    this.teste();
  }

  teste() {
    this.gerenciador.getCartas().subscribe(res => {
      console.log(res.body.data);
    });
  }
}
