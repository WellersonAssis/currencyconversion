import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricolistagemComponent } from './historicolistagem.component';

describe('HistoricolistagemComponent', () => {
  let component: HistoricolistagemComponent;
  let fixture: ComponentFixture<HistoricolistagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoricolistagemComponent]
    });
    fixture = TestBed.createComponent(HistoricolistagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
