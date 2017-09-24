import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodebiggerComponent } from './codebigger.component';

describe('CodebiggerComponent', () => {
  let component: CodebiggerComponent;
  let fixture: ComponentFixture<CodebiggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodebiggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodebiggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
