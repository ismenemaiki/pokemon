import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GerenciadorDeChamadasService {
  apiCartas = 'https://api.pokemontcg.io/v2/cards';

  constructor(private httpClient: HttpClient) { }

  getCartas(url?: string): Observable<any>{
    return this.httpClient.get(`${this.apiCartas}`, { observe: 'response' }).pipe(tap(cartas => cartas));
  }

}
