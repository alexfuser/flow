import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeconfidentlyComponent } from './codeconfidently.component';

describe('CodeconfidentlyComponent', () => {
  let component: CodeconfidentlyComponent;
  let fixture: ComponentFixture<CodeconfidentlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeconfidentlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeconfidentlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
