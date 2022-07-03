import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageIndexComponent } from './manage-index.component';

describe('ManageIndexComponent', () => {
  let component: ManageIndexComponent;
  let fixture: ComponentFixture<ManageIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
