import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderSliteComponent } from './loader-slite.component';

describe('LoaderSliteComponent', () => {
  let component: LoaderSliteComponent;
  let fixture: ComponentFixture<LoaderSliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaderSliteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderSliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
