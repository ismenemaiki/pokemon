import { TestBed } from '@angular/core/testing';

import { GerenciadorDeChamadasService } from './gerenciador-de-chamadas.service';

describe('GerenciadorDeChamadasService', () => {
  let service: GerenciadorDeChamadasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GerenciadorDeChamadasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
