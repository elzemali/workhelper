import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployedialogComponent } from './employedialog.component';

describe('EmployedialogComponent', () => {
  let component: EmployedialogComponent;
  let fixture: ComponentFixture<EmployedialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployedialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
