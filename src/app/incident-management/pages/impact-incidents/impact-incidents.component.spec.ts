import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactIncidentsComponent } from './impact-incidents.component';

describe('ImpactIncidentsComponent', () => {
  let component: ImpactIncidentsComponent;
  let fixture: ComponentFixture<ImpactIncidentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpactIncidentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpactIncidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
