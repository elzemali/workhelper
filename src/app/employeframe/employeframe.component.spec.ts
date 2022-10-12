import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeframeComponent } from './employeframe.component';

describe('EmployeframeComponent', () => {
  let component: EmployeframeComponent;
  let fixture: ComponentFixture<EmployeframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeframeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
