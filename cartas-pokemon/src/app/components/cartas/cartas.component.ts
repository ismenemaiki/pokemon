import { filter, map } from 'rxjs/operators';
import { GerenciadorDeChamadasService } from './../../services/gerenciador-de-chamadas.service';
import { Component, OnInit } from '@angular/core';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation } from 'swiper/core';
import { Router } from '@angular/router';

SwiperCore.use([Navigation ]);

@Component({
  selector: 'app-cartas',
  templateUrl: './cartas.component.html',
  styleUrls: ['./cartas.component.scss']
})
export class CartasComponent implements OnInit {
  cartas: Array<any>;

  constructor(
    private gerenciador: GerenciadorDeChamadasService,
    private router: Router
    ) { }

  ngOnInit() {
    this.getCartas();
  }

  detalhes(id: string): void {
    console.log(id);
    this.router.navigate(['/detalhes', id]);
  }
  getCartas(): void {
    this.gerenciador.getCartas().subscribe(cartas => {
      this.cartas = cartas.body.data;
    });
  }
}
