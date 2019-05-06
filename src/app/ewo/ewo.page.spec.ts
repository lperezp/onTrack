import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EwoPage } from './ewo.page';

describe('EwoPage', () => {
  let component: EwoPage;
  let fixture: ComponentFixture<EwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EwoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
