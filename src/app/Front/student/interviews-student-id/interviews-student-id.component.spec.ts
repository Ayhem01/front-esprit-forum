import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewsStudentIdComponent } from './interviews-student-id.component';

describe('InterviewsStudentIdComponent', () => {
  let component: InterviewsStudentIdComponent;
  let fixture: ComponentFixture<InterviewsStudentIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewsStudentIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewsStudentIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
