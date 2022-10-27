import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactoIncidenteComponent } from './impacto-incidente.component';

describe('ImpactoIncidenteComponent', () => {
  let component: ImpactoIncidenteComponent;
  let fixture: ComponentFixture<ImpactoIncidenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpactoIncidenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpactoIncidenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
