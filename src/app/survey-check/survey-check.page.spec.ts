import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyCheckPage } from './survey-check.page';

describe('SurveyCheckPage', () => {
  let component: SurveyCheckPage;
  let fixture: ComponentFixture<SurveyCheckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyCheckPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyCheckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
