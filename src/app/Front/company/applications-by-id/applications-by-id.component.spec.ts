import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationsByIdComponent } from './applications-by-id.component';

describe('ApplicationsByIdComponent', () => {
  let component: ApplicationsByIdComponent;
  let fixture: ComponentFixture<ApplicationsByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationsByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationsByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
