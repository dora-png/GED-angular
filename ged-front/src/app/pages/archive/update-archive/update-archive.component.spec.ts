import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateArchiveComponent } from './update-archive.component';

describe('UpdateArchiveComponent', () => {
  let component: UpdateArchiveComponent;
  let fixture: ComponentFixture<UpdateArchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateArchiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
