import { of } from 'rxjs';
import { GerenciadorDeChamadasService } from './../../services/gerenciador-de-chamadas.service';
import { ModalManager } from 'ngb-modal';
import { ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DetalhesComponent } from './detalhes.component';

describe('DetalhesComponent', () => {
  let component: DetalhesComponent;
  let fixture: ComponentFixture<DetalhesComponent>;

  const modalStub = {
    open: () => {},
    close: () => {},
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: {snapshot: { params:  {id: 'pl1-1'}}} },
        { provide: ModalManager, useValue: modalStub },
      ],
      imports: [ HttpClientTestingModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('getLogoCost', () => {
    component.getLogoCost('Alakazam');
    expect(component.getLogoCost('Alakazam')).toEqual('../../../assets/img/costs/Alakazam.png');
  });
});
