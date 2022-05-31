import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganigramStructureComponent } from './organigram-structure.component';

describe('OrganigramStructureComponent', () => {
  let component: OrganigramStructureComponent;
  let fixture: ComponentFixture<OrganigramStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganigramStructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganigramStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
