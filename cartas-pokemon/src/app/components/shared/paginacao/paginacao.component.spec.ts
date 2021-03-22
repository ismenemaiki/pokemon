import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PaginacaoComponent } from './paginacao.component';

describe('PaginacaoComponent', () => {
  let component: PaginacaoComponent;
  let fixture: ComponentFixture<PaginacaoComponent>;

  const paginacaoMock = {
    // proximaPagina: () => null,
    itemPorPaginas: () => 5
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginacaoComponent ],
      providers: [
        { provide: PaginacaoComponent, useValue: paginacaoMock }
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('itemPorPaginas', () => {
    component.totalItens = 20;
    component.itensPorPagina = 5;
    const itens = component.itemPorPaginas();
    expect(itens).toBeGreaterThan(0);
  });
  it('getNumeroBotoes', () => {
    component.totalItens = 50;
    component.itensPorPagina = 5;
    component.getNumeroBotoes();
    expect(component.botoes.length).toEqual(10);
  });
  it('testando funcoes void', () => {
    component.proximaPagina();
    component.trocaPagina(2);
    component.paginaAnterior();
    expect(component).toBeDefined();
  });
});
