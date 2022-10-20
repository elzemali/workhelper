import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointageframeComponent } from './pointageframe.component';

describe('PointageframeComponent', () => {
  let component: PointageframeComponent;
  let fixture: ComponentFixture<PointageframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointageframeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointageframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
