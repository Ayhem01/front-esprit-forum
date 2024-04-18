import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherInterviewComponent } from './afficher-interview.component';

describe('AfficherInterviewComponent', () => {
  let component: AfficherInterviewComponent;
  let fixture: ComponentFixture<AfficherInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherInterviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
