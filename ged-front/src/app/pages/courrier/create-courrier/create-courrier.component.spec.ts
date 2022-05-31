import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCourrierComponent } from './create-courrier.component';

describe('CreateCourrierComponent', () => {
  let component: CreateCourrierComponent;
  let fixture: ComponentFixture<CreateCourrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCourrierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCourrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
