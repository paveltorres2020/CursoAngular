import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Unatarea } from './unatarea';

describe('Unatarea', () => {
  let component: Unatarea;
  let fixture: ComponentFixture<Unatarea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Unatarea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Unatarea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
