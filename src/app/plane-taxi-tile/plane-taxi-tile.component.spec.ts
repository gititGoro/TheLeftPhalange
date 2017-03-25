import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneTaxiTileComponent } from './plane-taxi-tile.component';

describe('PlaneTaxiTileComponent', () => {
  let component: PlaneTaxiTileComponent;
  let fixture: ComponentFixture<PlaneTaxiTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaneTaxiTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaneTaxiTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
