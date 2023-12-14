import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateModeleComponent } from './create-modele.component';

describe('CreateModeleComponent', () => {
  let component: CreateModeleComponent;
  let fixture: ComponentFixture<CreateModeleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateModeleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateModeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
