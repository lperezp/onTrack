import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtsPage } from './ots.page';

describe('OtsPage', () => {
  let component: OtsPage;
  let fixture: ComponentFixture<OtsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
