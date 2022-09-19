import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilStructureComponent } from './profil-structure.component';

describe('ProfilStructureComponent', () => {
  let component: ProfilStructureComponent;
  let fixture: ComponentFixture<ProfilStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilStructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
