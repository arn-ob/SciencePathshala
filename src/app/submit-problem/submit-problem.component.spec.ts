import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitProblemComponent } from './submit-problem.component';

describe('SubmitProblemComponent', () => {
  let component: SubmitProblemComponent;
  let fixture: ComponentFixture<SubmitProblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitProblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
