import { of } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { GerenciadorDeChamadasService } from './gerenciador-de-chamadas.service';

describe('GerenciadorDeChamadasService', () => {
  let service: GerenciadorDeChamadasService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  const serviceMock = {
    getCartas: () => of([]),
    getCartaPorId: () => of([])
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        { GerenciadorDeChamadasService, useValue: serviceMock }
      ]
    });
    service = TestBed.inject(GerenciadorDeChamadasService);
    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('getCartas', () => {
    service.getCartas(false);
    service.getCartas(true);
    expect(service.getCartas).toBeDefined();
  });
  it('getCartaPorId', () => {
    service.getCartaPorId('xpto');
    expect(service.getCartaPorId).toBeDefined();
  });
});
