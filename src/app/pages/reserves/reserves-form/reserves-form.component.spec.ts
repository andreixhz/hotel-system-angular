import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservesFormComponent } from './reserves-form.component';

describe('ReservesFormComponent', () => {
  let component: ReservesFormComponent;
  let fixture: ComponentFixture<ReservesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
