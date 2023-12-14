import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosModeleComponent } from './infos-modele.component';

describe('InfosModeleComponent', () => {
  let component: InfosModeleComponent;
  let fixture: ComponentFixture<InfosModeleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfosModeleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosModeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
