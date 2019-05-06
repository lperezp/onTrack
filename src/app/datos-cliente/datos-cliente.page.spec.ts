import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosClientePage } from './datos-cliente.page';

describe('DatosClientePage', () => {
  let component: DatosClientePage;
  let fixture: ComponentFixture<DatosClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosClientePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
