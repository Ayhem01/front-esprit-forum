import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionsStatusComponent } from './gestions-status.component';

describe('GestionsStatusComponent', () => {
  let component: GestionsStatusComponent;
  let fixture: ComponentFixture<GestionsStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionsStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
