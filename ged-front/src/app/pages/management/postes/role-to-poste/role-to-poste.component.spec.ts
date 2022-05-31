import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleToPosteComponent } from './role-to-poste.component';

describe('RoleToPosteComponent', () => {
  let component: RoleToPosteComponent;
  let fixture: ComponentFixture<RoleToPosteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleToPosteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleToPosteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
