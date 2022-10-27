import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IncidentAnalysisComponent } from './incident-analysis.component';

describe('IncidentAnalysisComponent', () => {
  let component: IncidentAnalysisComponent;
  let fixture: ComponentFixture<IncidentAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidentAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidentAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
