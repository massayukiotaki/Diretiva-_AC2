import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioDiretivasAC2Component } from './exercicio-diretivas-ac2.component';

describe('ExercicioDiretivasAC2Component', () => {
  let component: ExercicioDiretivasAC2Component;
  let fixture: ComponentFixture<ExercicioDiretivasAC2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExercicioDiretivasAC2Component]
    });
    fixture = TestBed.createComponent(ExercicioDiretivasAC2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
