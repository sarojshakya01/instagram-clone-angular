import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideStoryComponent } from './side-story.component';

describe('SideStoryComponent', () => {
  let component: SideStoryComponent;
  let fixture: ComponentFixture<SideStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
