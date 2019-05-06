import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveysDetallePage } from './surveys-detalle.page';

describe('SurveysDetallePage', () => {
  let component: SurveysDetallePage;
  let fixture: ComponentFixture<SurveysDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveysDetallePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveysDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
