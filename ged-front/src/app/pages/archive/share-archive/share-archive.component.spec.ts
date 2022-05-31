import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareArchiveComponent } from './share-archive.component';

describe('ShareArchiveComponent', () => {
  let component: ShareArchiveComponent;
  let fixture: ComponentFixture<ShareArchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareArchiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
