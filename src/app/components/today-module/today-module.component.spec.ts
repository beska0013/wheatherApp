import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayModuleComponent } from './today-module.component';

describe('TodayModuleComponent', () => {
  let component: TodayModuleComponent;
  let fixture: ComponentFixture<TodayModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
