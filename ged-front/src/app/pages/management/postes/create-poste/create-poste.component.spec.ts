import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePosteComponent } from './create-poste.component';

describe('CreatePosteComponent', () => {
  let component: CreatePosteComponent;
  let fixture: ComponentFixture<CreatePosteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePosteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePosteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
