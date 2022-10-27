import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIncidentesComponent } from './add-incidentes.component';

describe('AddIncidentesComponent', () => {
  let component: AddIncidentesComponent;
  let fixture: ComponentFixture<AddIncidentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddIncidentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddIncidentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
