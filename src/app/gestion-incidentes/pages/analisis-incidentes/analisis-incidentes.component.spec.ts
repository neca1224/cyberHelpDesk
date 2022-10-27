import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisisIncidentesComponent } from './analisis-incidentes.component';

describe('AnalisisIncidentesComponent', () => {
  let component: AnalisisIncidentesComponent;
  let fixture: ComponentFixture<AnalisisIncidentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalisisIncidentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalisisIncidentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
