import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptionbarComponent } from './captionbar.component';

describe('CaptionbarComponent', () => {
  let component: CaptionbarComponent;
  let fixture: ComponentFixture<CaptionbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptionbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptionbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
