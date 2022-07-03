import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosGroupUserComponent } from './infos-group-user.component';

describe('InfosGroupUserComponent', () => {
  let component: InfosGroupUserComponent;
  let fixture: ComponentFixture<InfosGroupUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfosGroupUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosGroupUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
