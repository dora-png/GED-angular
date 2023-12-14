import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTypeliasseComponent } from './delete-typeliasse.component';

describe('DeleteTypeliasseComponent', () => {
  let component: DeleteTypeliasseComponent;
  let fixture: ComponentFixture<DeleteTypeliasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTypeliasseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTypeliasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
