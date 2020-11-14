import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoEjercicioComponent } from './contenido-ejercicio.component';

describe('ContenidoEjercicioComponent', () => {
  let component: ContenidoEjercicioComponent;
  let fixture: ComponentFixture<ContenidoEjercicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoEjercicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoEjercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
