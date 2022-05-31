import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTypeliasseComponent } from './create-typeliasse.component';

describe('CreateTypeliasseComponent', () => {
  let component: CreateTypeliasseComponent;
  let fixture: ComponentFixture<CreateTypeliasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTypeliasseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTypeliasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
