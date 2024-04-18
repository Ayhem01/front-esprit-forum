import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyApplicationComponent } from './modify-application.component';

describe('ModifyApplicationComponent', () => {
  let component: ModifyApplicationComponent;
  let fixture: ComponentFixture<ModifyApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
