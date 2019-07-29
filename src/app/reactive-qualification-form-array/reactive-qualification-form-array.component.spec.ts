import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveQualificationFormArrayComponent } from './reactive-qualification-form-array.component';

describe('ReactiveQualificationFormArrayComponent', () => {
  let component: ReactiveQualificationFormArrayComponent;
  let fixture: ComponentFixture<ReactiveQualificationFormArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveQualificationFormArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveQualificationFormArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
