import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilGroupComponent } from './profil-group.component';

describe('ProfilGroupComponent', () => {
  let component: ProfilGroupComponent;
  let fixture: ComponentFixture<ProfilGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
