import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerrarIncidenteComponent } from './cerrar-incidente.component';

describe('CerrarIncidenteComponent', () => {
  let component: CerrarIncidenteComponent;
  let fixture: ComponentFixture<CerrarIncidenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CerrarIncidenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CerrarIncidenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
