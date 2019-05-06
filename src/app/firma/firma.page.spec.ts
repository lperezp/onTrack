import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmaPage } from './firma.page';

describe('FirmaPage', () => {
  let component: FirmaPage;
  let fixture: ComponentFixture<FirmaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirmaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
