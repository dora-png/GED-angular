import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTypeliasseComponent } from './update-typeliasse.component';

describe('UpdateTypeliasseComponent', () => {
  let component: UpdateTypeliasseComponent;
  let fixture: ComponentFixture<UpdateTypeliasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTypeliasseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTypeliasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
