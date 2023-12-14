import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTypeliasseComponent } from './list-typeliasse.component';

describe('ListTypeliasseComponent', () => {
  let component: ListTypeliasseComponent;
  let fixture: ComponentFixture<ListTypeliasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTypeliasseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTypeliasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
