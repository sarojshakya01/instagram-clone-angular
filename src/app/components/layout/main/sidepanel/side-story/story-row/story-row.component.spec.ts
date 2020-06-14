import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryRowComponent } from './story-row.component';

describe('StoryRowComponent', () => {
  let component: StoryRowComponent;
  let fixture: ComponentFixture<StoryRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
