import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionRowComponent } from './suggestion-row.component';

describe('SuggestionRowComponent', () => {
  let component: SuggestionRowComponent;
  let fixture: ComponentFixture<SuggestionRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestionRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
