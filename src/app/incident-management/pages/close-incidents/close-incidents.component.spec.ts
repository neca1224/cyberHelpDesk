import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseIncidentsComponent } from './close-incidents.component';

describe('CloseIncidentComponent', () => {
  let component: CloseIncidentsComponent;
  let fixture: ComponentFixture<CloseIncidentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloseIncidentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloseIncidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
