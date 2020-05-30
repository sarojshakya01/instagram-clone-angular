import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectComponent } from './direct.component';

describe('DirectComponent', () => {
  let component: DirectComponent;
  let fixture: ComponentFixture<DirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
