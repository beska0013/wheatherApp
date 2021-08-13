import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastModuleComponent } from './forecast-module.component';

describe('ForecastModuleComponent', () => {
  let component: ForecastModuleComponent;
  let fixture: ComponentFixture<ForecastModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForecastModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
