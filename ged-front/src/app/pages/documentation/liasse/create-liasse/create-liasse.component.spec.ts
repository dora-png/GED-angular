import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLiasseComponent } from './create-liasse.component';

describe('CreateLiasseComponent', () => {
  let component: CreateLiasseComponent;
  let fixture: ComponentFixture<CreateLiasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLiasseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLiasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
