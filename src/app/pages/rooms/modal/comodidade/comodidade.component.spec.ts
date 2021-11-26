import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComodidadeComponent } from './comodidade.component';

describe('ComodidadeComponent', () => {
  let component: ComodidadeComponent;
  let fixture: ComponentFixture<ComodidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComodidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComodidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
