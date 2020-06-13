import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikebarComponent } from './likebar.component';

describe('LikebarComponent', () => {
  let component: LikebarComponent;
  let fixture: ComponentFixture<LikebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
