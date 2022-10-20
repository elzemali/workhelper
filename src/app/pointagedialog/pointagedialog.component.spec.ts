import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointagedialogComponent } from './pointagedialog.component';

describe('PointagedialogComponent', () => {
  let component: PointagedialogComponent;
  let fixture: ComponentFixture<PointagedialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointagedialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointagedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
