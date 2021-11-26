import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComodidadeCriarComponent } from './comodidade-criar.component';

describe('ComodidadeCriarComponent', () => {
  let component: ComodidadeCriarComponent;
  let fixture: ComponentFixture<ComodidadeCriarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComodidadeCriarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComodidadeCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
