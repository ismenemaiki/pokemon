import { cartasMock } from './../apis/mock-cartas';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class GerenciadorDeChamadasService {

  constructor(private httpClient: HttpClient) {}
  private readonly apiKey = '4da0c1ce-8005-4d60-888f-2df76250f6af';
  private readonly contentType: string = 'Content-Type';
  private readonly applicationJson: string = 'application/json';

  private readonly apiCartas = 'https://api.pokemontcg.io/v2/cards';
  itensPorPagina: number;
  sub$ = new Subject();

 /**
  * monta o header para requisição na api.
  *
  * @returns header com api key.
  */
  private getHeader(): HttpHeaders {
    let httpHeaders: HttpHeaders = new HttpHeaders({
      [this.contentType]: this.applicationJson
    });
    return httpHeaders = httpHeaders.set('x-api-key', `${ this.apiKey }`);
  }
 /**
  * busca lista de cartas na api.
  *
  * @returns observable com todas as cartas.
  */
  getCartas(): Observable<any>{
    return this.httpClient.get(
      `${this.apiCartas}`, { headers: this.getHeader(), observe: 'response' })
      .pipe(tap((cartas) => cartas.body.data));
  }
 /**
  * busca uma carta na api.
  *
  * @param id da carta.
  * @returns observable com uma carta.
  */
  getCartaPorId(id: string) {
    // 1° busca da api 2° busca do mock
    // return this.httpClient.get(
    //   `${this.apiCartas}/${id}`, { headers: this.getHeader(), observe: 'response' })
    //   .pipe(tap((carta: any) => carta.body.data));
    return of(cartasMock.data);
  }
}
