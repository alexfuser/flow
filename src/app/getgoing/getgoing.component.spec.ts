import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetgoingComponent } from './getgoing.component';

describe('GetgoingComponent', () => {
  let component: GetgoingComponent;
  let fixture: ComponentFixture<GetgoingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetgoingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetgoingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
