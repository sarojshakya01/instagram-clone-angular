import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostOptionComponent } from './post-option.component';

describe('PostOptionComponent', () => {
  let component: PostOptionComponent;
  let fixture: ComponentFixture<PostOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
