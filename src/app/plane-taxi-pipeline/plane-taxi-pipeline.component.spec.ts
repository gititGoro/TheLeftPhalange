import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneTaxiPipelineComponent } from './plane-taxi-pipeline.component';

describe('PlaneTaxiPipelineComponent', () => {
  let component: PlaneTaxiPipelineComponent;
  let fixture: ComponentFixture<PlaneTaxiPipelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaneTaxiPipelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaneTaxiPipelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
