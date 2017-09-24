import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodesmarterComponent } from './codesmarter.component';

describe('CodesmarterComponent', () => {
  let component: CodesmarterComponent;
  let fixture: ComponentFixture<CodesmarterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodesmarterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodesmarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
