import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHashtagsComponent } from './home-hashtags.component';

describe('HomeHashtagsComponent', () => {
  let component: HomeHashtagsComponent;
  let fixture: ComponentFixture<HomeHashtagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeHashtagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeHashtagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
