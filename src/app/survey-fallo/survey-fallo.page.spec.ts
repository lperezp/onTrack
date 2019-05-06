import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyFalloPage } from './survey-fallo.page';

describe('SurveyFalloPage', () => {
  let component: SurveyFalloPage;
  let fixture: ComponentFixture<SurveyFalloPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyFalloPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyFalloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
