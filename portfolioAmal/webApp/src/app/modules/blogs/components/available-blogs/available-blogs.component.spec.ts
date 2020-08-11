import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableBlogsComponent } from './available-blogs.component';

describe('AvailableBlogsComponent', () => {
  let component: AvailableBlogsComponent;
  let fixture: ComponentFixture<AvailableBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
