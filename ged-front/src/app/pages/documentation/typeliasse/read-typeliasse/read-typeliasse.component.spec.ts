import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadTypeliasseComponent } from './read-typeliasse.component';

describe('ReadTypeliasseComponent', () => {
  let component: ReadTypeliasseComponent;
  let fixture: ComponentFixture<ReadTypeliasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadTypeliasseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadTypeliasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
